'use strict';

var banner = require('../banner');
var path = require('path');
var pkgNameValidator = require('pkg-name');
var util = require('util');
var yeoman = require('yeoman-generator');
var elementNameValidator = require('validate-element-name');

var RepoGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));

        if (!this.options['skip-install-message']) {
            this.log(banner);
        }

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.bowerInstall();

                if (this.grunt) {
                    this.npmInstall();
                }
            }
        });
    },

    askForBoilerplate: function () {
        var done = this.async();
        var log = this.log;

        var prompts = [{
            type: 'list',
            name: 'boilerplate',
            message: 'What do you want to use?',
            choices: ['Polymer', 'X-Tag', 'VanillaJS']
        }];

        this.prompt(prompts, function (props) {
            this.boilerplate = props.boilerplate;

            done();
        }.bind(this));
    },

    askFor: function () {
        var done = this.async();
        var log = this.log;

        var prompts = [{
            name: 'githubRepo',
            message: 'What\'s the GitHub repository?',
            default: 'my-repo'
        }, {
            type: 'confirm',
            name: 'pkgName',
            message: 'The name above already exists on Bower, choose another?',
            default: true,
            when: function(answers) {
                var done = this.async();

                pkgNameValidator(answers.githubRepo, function (err, available) {
                    if (!available.bower) {
                        done(true);
                    }

                    done(false);
                });
            }
        }, {
            name: 'githubUser',
            message: 'What\'s your GitHub username?',
            default: 'my-user'
        }, {
            name: 'elementName',
            message: 'What\'s the name of your element?',
            default: 'my-element',
            validate: function (input) {
                var result = elementNameValidator(input);

                if (!result.isValid) {
                    return result.message;
                }

                if (result.message) {
                    log.info(result.message);
                }

                return true;
            }
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
            if (props.pkgName) {
                return this.askFor();
            }

            for (var i = 0; i < prompts.length; i++) {
                var name = prompts[i].name;
                this[name] = props[name];
            }

            done();
        }.bind(this));
    },

    files: function () {
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

        var boilerplateFile = {
            'Polymer'  : 'src/_polymer.html',
            'X-Tag'    : 'src/_xtag.html',
            'VanillaJS': 'src/_vanillajs.html'
        };

        this.copy(boilerplateFile[this.boilerplate], 'src/' + this.elementName + '.html');
    }
});

module.exports = RepoGenerator;
