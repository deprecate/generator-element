'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var validator = require('./validator');
var banner = require('./banner');

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

        console.log(banner);

        var prompts = [{
            name: 'elementName',
            message: 'What\'s the name of your element?',
            validate: validator.name
        }, {
            name: 'elementDescription',
            message: 'How would you describe the element?',
            validate: validator.description
        }, {
            name: 'githubUser',
            message: 'What\'s your GitHub username?',
            validate: validator.githubUser
        }, {
            name: 'githubRepo',
            message: 'What\'s the GitHub repository?',
            validate: validator.githubRepo
        }, {
            type: 'confirm',
            name: 'lifecycle',
            message: 'Do you want to include lifecycle callbacks?',
            default: false
        }, {
            type: 'confirm',
            name: 'grunt',
            message: 'Do you want to include Grunt tasks?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.elementName = this._.slugify(props.elementName);
            this.elementDescription = props.elementDescription;
            this.githubUser = props.githubUser;
            this.githubRepo = props.githubRepo;
            this.grunt = props.grunt;
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

        if (this.grunt) {
            this.copy('gitignore', '.gitignore');
            this.copy('_Gruntfile.js', 'Gruntfile.js');
        }

        this.copy('_index.html', 'index.html');
        this.copy('_README.md', 'README.md');
        this.copy('src/_my-element.html', 'src/' + this.elementName + '.html');
    },

    dotfiles: function () {
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
    }

});

module.exports = ElementGenerator;
