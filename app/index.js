'use strict';

var banner = require('../banner');
var util = require('util');
var yeoman = require('yeoman-generator');

var ElementGenerator = yeoman.generators.Base.extend({

    init: function () {
        if (!this.options['skip-install-message']) {
            this.log(banner);
        }
    },

    askFor: function () {
        var done = this.async();

        var prompts = [{
            type: 'list',
            name: 'solution',
            message: 'What do you want to use?',
            choices: ['Polymer', 'X-Tag', 'VanillaJS']
        }, {
            name: 'elementName',
            message: 'What\'s the name of your element?',
            default: 'my-element'
        }, {
            type: 'confirm',
            name: 'lifecycle',
            message: 'Do you want to include lifecycle callbacks?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.solution = props.solution;
            this.elementName = this._.slugify(props.elementName);
            this.lifecycle = props.lifecycle;

            done();
        }.bind(this));
    },

    files: function () {
        var solutionFile = '';

        if (this.solution == 'Polymer') {
            solutionFile = '_polymer.html';
        }
        else if (this.solution == 'X-Tag') {
            solutionFile = '_xtag.html';
        }
        else if (this.solution == 'VanillaJS') {
            solutionFile = '_vanillajs.html';
        }

        this.copy(solutionFile, this.elementName + '.html');
    }
});

module.exports = ElementGenerator;
