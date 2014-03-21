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

        // have Yeoman greet the user
        console.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        console.log(chalk.magenta('You\'re using the fantastic Element generator.'));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.someOption = props.someOption;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('app');
        this.mkdir('app/templates');

        this.copy('_bower.json', 'bower.json');
        this.copy('_package.json', 'package.json');
    },

    element: function () {
        this.mkdir('src');

        this.copy('index.html', 'index.html');
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('README.md', 'README.md');
        this.copy('src/my-element.html', 'src/my-element.html');
    },

    dotfiles: function () {
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = ElementGenerator;
