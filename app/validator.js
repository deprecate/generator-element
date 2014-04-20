'use strict';

var elementNameValidator = require('validate-element-name');
var bowerNameValidator = require('pkg-name');

var InputValidator = {

    ERR_DESCRIPTION_BLANK: 'Please fill your element description, for example: "My awesome Web Component using Polymer".',
    ERR_GITHUB_USER_BLANK: 'Please fill your GitHub user, for example: "webcomponents".',
    ERR_GITHUB_REPO_BLANK: 'Please fill the GitHub repository, for example: "element-boilerplate".',
    ERR_BOWER_PKG_EXISTS : 'This name represents your package and it already exists on Bower. Please try another one.',

    name: function (input) {
        try {
            elementNameValidator(input);
        } catch (err) {
            return err.message;
        }

        return true;
    },

    description: function(input) {
        if (input === '') {
            return InputValidator.ERR_DESCRIPTION_BLANK;
        }

        return true;
    },

    githubUser: function(input) {
        if (input === '') {
            return InputValidator.ERR_GITHUB_USER_BLANK;
        }

        return true;
    },

    githubRepo: function(input) {
        var done = this.async();

        if (input === '') {
            done(InputValidator.ERR_GITHUB_REPO_BLANK);
            return;
        }

        bowerNameValidator(input, function (error, available) {
            if (error) {
                done(error);
            }

            if (available.bower === false) {
                done(InputValidator.ERR_BOWER_PKG_EXISTS);
            }
            else {
                done(true);
            }
        });
    }

}

module.exports = InputValidator;
