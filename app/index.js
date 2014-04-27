'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var banner = require('./banner');

var ElementGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.bowerInstall();

                if (this.grunt) {
                    this.npmInstall();
                }
            }
        });
    },

    askFor: function () {
        var done = this.async();

        console.log(banner);

        var prompts = [{
            type: 'list',
            name: 'solution',
            message: 'What do you want to use?',
            choices: ['Polymer', 'X-Tag', 'VanillaJS']
        }, {
            name: 'githubRepo',
            message: 'What\'s the GitHub repository?',
            default: 'my-repo'
        }, {
            name: 'githubUser',
            message: 'What\'s your GitHub username?',
            default: 'my-user'
        }, {
            name: 'elementName',
            message: 'What\'s the name of your element?',
            default: 'my-element'
        }, {
            name: 'elementDescription',
            message: 'How would you describe the element?',
            default: 'My awesome Custom Element'
        }, {
            type: 'confirm',
            name: 'lifecycle',
            message: 'Do you want to include lifecycle callbacks?',
            default: true
        }, {
            type: 'confirm',
            name: 'grunt',
            message: 'Do you want to include some useful Grunt tasks?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.solution = props.solution;
            this.githubRepo = props.githubRepo;
            this.githubUser = props.githubUser;
            this.elementName = this._.slugify(props.elementName);
            this.elementDescription = props.elementDescription;
            this.lifecycle = props.lifecycle;
            this.grunt = props.grunt;

            done();
        }.bind(this));
    },

    app: function () {
        this.copy('_bower.json', 'bower.json');
        this.copy('_index.html', 'index.html');
        this.copy('_README.md', 'README.md');

        if (this.grunt) {
            this.copy('_package.json', 'package.json');
            this.copy('_Gruntfile.js', 'Gruntfile.js');
        }

        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');

        this.mkdir('src');

        var solutionFile = '';

        if (this.solution == 'Polymer') {
            solutionFile = 'src/_polymer.html';
        }
        else if (this.solution == 'X-Tag') {
            solutionFile = 'src/_xtag.html';
        }
        else if (this.solution == 'VanillaJS') {
            solutionFile = 'src/_vanillajs.html';
        }

        this.copy(solutionFile, 'src/' + this.elementName + '.html');
    }
});

module.exports = ElementGenerator;
