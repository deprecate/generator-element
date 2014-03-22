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
            message: 'What\'s the name of your element?'
        }, {
            name: 'elementDescription',
            message: 'What\'s the description of your element?'
        }];

        this.prompt(prompts, function (props) {
            this.elementName = this._.slugify(props.elementName);
            this.elementDescription = props.elementDescription;

            // according to the spec, all elements must contain a dash on its name
            if (this.elementName.indexOf('-') === -1) {
                this.elementName = 'x-' + this.elementName;
            }

            done();
        }.bind(this));
    },

    app: function () {
        this.copy('_bower.json', 'bower.json');
        this.copy('_package.json', 'package.json');
    },

    element: function () {
        this.mkdir('src');

        this.copy('index.html', 'index.html');
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('README.md', 'README.md');
        this.copy('src/my-element.html', 'src/' + this.elementName + '.html');
    },

    dotfiles: function () {
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = ElementGenerator;
