'use strict';

var banner = require('../banner');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var ElementGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));

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
            props.elementName = this._.slugify(props.elementName);

            for (var i = 0; i < prompts.length; i++) {
                var name = prompts[i].name;
                this[name] = props[name];
            }

            done();
        }.bind(this));
    },

    files: function () {
        var solutionFile = {
            'Polymer'  : 'src/_polymer.html',
            'X-Tag'    : 'src/_xtag.html',
            'VanillaJS': 'src/_vanillajs.html'
        };

        this.copy(solutionFile[this.solution], this.elementName + '.html');
    }
});

module.exports = ElementGenerator;
