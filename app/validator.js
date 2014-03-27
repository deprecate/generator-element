'use strict';

var nameValidator = require('validate-element-name');

var InputValidator = {

    ERR_DESCRIPTION_BLANK: 'Please fill your element description, for example: "My awesome Web Component using Polymer".',
    ERR_GITHUB_USER_BLANK: 'Please fill your GitHub user, for example: "webcomponents".',
    ERR_GITHUB_REPO_BLANK: 'Please fill the GitHub repository, for example: "element-boilerplate".',

    // Custom Elements Spec: Naming Rules
    // http://www.w3.org/TR/custom-elements/#concepts
    name: function (input) {
        try {
            nameValidator(input);
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
        if (input === '') {
            return InputValidator.ERR_GITHUB_REPO_BLANK;
        }

        return true;
    }

}

module.exports = InputValidator;
