'use strict';

var banner = require('../banner');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var elementNameValidator = require('validate-element-name');

var ElementGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));

        if (!this.options['skip-install-message']) {
            this.log(banner);
        }
    },

    askFor: function () {
        var done = this.async();
        var log = this.log;

        var prompts = [{
            type: 'list',
            name: 'boilerplate',
            message: 'What do you want to use?',
            choices: ['Polymer', 'X-Tag', 'VanillaJS']
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
            type: 'confirm',
            name: 'lifecycle',
            message: 'Do you want to include lifecycle callbacks?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            for (var i = 0; i < prompts.length; i++) {
                var name = prompts[i].name;
                this[name] = props[name];
            }

            done();
        }.bind(this));
    },

    files: function () {
        var boilerplateFile = {
            'Polymer'  : 'src/_polymer.html',
            'X-Tag'    : 'src/_xtag.html',
            'VanillaJS': 'src/_vanillajs.html'
        };

        this.copy(boilerplateFile[this.boilerplate], this.elementName + '.html');
    }
});

module.exports = ElementGenerator;
