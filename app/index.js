'use strict';

var banner = require('../banner');
var pkgNameValidator = require('pkg-name');
var yeoman = require('yeoman-generator');
var elementNameValidator = require('validate-element-name');
var path = require('path');
var mkdirp = require('mkdirp');
var _ = require('lodash');

var RepoGenerator = yeoman.Base.extend({

    prompting: function () {
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

    askForPolymerVersion: function () {
        if (this.boilerplate === 'Polymer') {
            var done = this.async();

            var prompts = [{
                type: 'list',
                name: 'polymerVersion',
                message: 'What Polymer version do you want to use?',
                choices: ['1.4.0', '0.5.1']
            }];

            this.prompt(prompts, function (props) {
                this.polymerVersion = props.polymerVersion;
                done();
            }.bind(this));
        }
    },

    askForXtagVersion: function () {
        if (this.boilerplate === 'X-Tag') {
            var done = this.async();

            var prompts = [{
                type: 'list',
                name: 'xtagVersion',
                message: 'What X-Tag version do you want to use?',
                choices: ['1.0.0', '1.5.0']
            }];

            this.prompt(prompts, function (props) {
                this.xtagVersion = props.xtagVersion;
                done();
            }.bind(this));
        }
    },

    askForName: function () {
        var done = this.async();

        var prompts = [{
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
        }];

        this.prompt(prompts, function (props) {
            this.elementName = props.elementName;
            done();
        }.bind(this));
    },

    checkSubFolder: function () {
        var done = this.async();
        if (path.basename(this.destinationPath()) !== this.elementName) {
            this.log(
                'Your Web component must be inside a folder named ' + this.elementName + '\n' +
                'I\'ll automatically create this folder.'
            );
            mkdirp(this.elementName);
            this.destinationRoot(this.destinationPath(this.elementName));
        }
        done();
    },

    askFor: function () {
        var done = this.async();

        var prompts = [{
            name: 'githubRepo',
            message: 'What\'s the GitHub repository?',
            default: 'my-repo'
        }, {
            type: 'confirm',
            name: 'pkgName',
            message: 'The name above already exists on Bower, choose another?',
            default: true,
            when: function (answers) {
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
            store: true,
            default: 'my-user'
        }, {
            name: 'authorName',
            message: 'Author\'s Name',
            default: this.user.git.name(),
            store: true
        }, {
            name: 'authorEmail',
            message: 'Author\'s Email',
            default: this.user.git.email(),
            store: true
        }, {
            name: 'authorUrl',
            message: 'Author\'s Homepage',
            store: true
        }, {
            name: 'elementDescription',
            message: 'How would you describe the element?',
            default: 'My awesome Custom Element'
        }, {
            name: 'keywords',
            message: 'Package keywords (comma to split)',
            filter: function (words) {
                return words.split(/\s*,\s*/g);
            }
        },{
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
            this.props = _.extend(this, props);
            done();
        }.bind(this));
    },

    writing: function () {
        this.copy('_bower.json', 'bower.json');
        this.copy('_README.md', 'README.md');

        if (this.grunt) {
            this.copy('_package.json', 'package.json');
            this.copy('_Gruntfile.js', 'Gruntfile.js');

            var currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});

            var pkg = _.extend({
                keywords :this.props.keywords
            }, currentPkg);

            this.fs.writeJSON(this.destinationPath('package.json'), pkg);
        }

        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');

        var boilerplateFile = {
            'Polymer': 'src/_polymer.html',
            'X-Tag': 'src/_xtag.html',
            'VanillaJS': 'src/_vanillajs.html'
        };

        this.copy(boilerplateFile[this.boilerplate], 'src/' + this.elementName + '.html');
        this.copy('_wct.conf.json', 'wct.conf.json');
        this.copy('_test.html', 'test/' + this.elementName + '-tests.html');
        this.copy('_index.html', 'demo/index.html');
        this.copy('_.jscsrc', '.jscsrc');

        this.composeWith('license', {
            options: {
                name: this.props.authorName,
                email: this.props.authorEmail,
                website: this.props.authorUrl
            }
        }, {
            local: require.resolve('generator-license/app')
        });
    }

});

module.exports = RepoGenerator;
