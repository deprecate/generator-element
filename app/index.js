'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var ElementGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.bowerInstall();
                this.npmInstall();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        console.log(chalk.magenta('\nCustom Element generator brought to you by WebComponents.org\n'));

        var prompts = [{
            name: 'elementName',
            message: 'What\'s the name of your element?',
            validate: function(input) {
                if (input === '') {
                    return 'Please fill your element name, for example: "my-element".';
                }
                else if (input.indexOf('-') === -1) {
                    return 'According to the spec, all elements must contain a dash on its name, for example: "my-element".';
                }
            }
        }, {
            name: 'elementDescription',
            message: 'What\'s the description of your element?',
            validate: function(input) {
                if (input === '') {
                    return 'Please fill your element description, for example: "My awesome Web Component using Polymer".';
                }
            }
        },
        {
            type: 'confirm',
            name: 'lifecycle',
            message: 'Do you want to include lifecycle callbacks?',
            default: false
        }];

        this.prompt(prompts, function (props) {
            this.elementName = this._.slugify(props.elementName);
            this.elementDescription = props.elementDescription;
            this.lifecycle = props.lifecycle;

            done();
        }.bind(this));
    },

    app: function () {
        this.copy('_bower.json', 'bower.json');
        this.copy('_package.json', 'package.json');
    },

    element: function () {
        this.mkdir('src');

        this.copy('_Gruntfile.js', 'Gruntfile.js');
        this.copy('_index.html', 'index.html');
        this.copy('_README.md', 'README.md');
        this.copy('src/_my-element.html', 'src/' + this.elementName + '.html');
    },

    dotfiles: function () {
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = ElementGenerator;
