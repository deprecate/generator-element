'use strict';

var InputValidator = {

    NAME_BLACKLIST: [
        'annotation-xml', 'color-profile', 'font-face', 'font-face-src',
        'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph'
    ],

    ERR_NAME_BLANK: 'Please fill your element name, for example: "my-element".',
    ERR_NAME_DASH: 'According to the spec, all elements must contain a dash on its name, for example: "my-element".',
    ERR_NAME_EXISTS: 'According to the spec, this element name is not allowed.',
    ERR_DESCRIPTION_BLANK: 'Please fill your element description, for example: "My awesome Web Component using Polymer".',

    // Custom Elements Spec: Naming Rules
    // http://www.w3.org/TR/custom-elements/#concepts
    name: function (input) {
        if (input === '') {
            return InputValidator.ERR_NAME_BLANK;
        }
        else if (input.indexOf('-') === -1) {
            return InputValidator.ERR_NAME_DASH;
        }

        for (var i = 0; i < InputValidator.NAME_BLACKLIST.length; i++) {
            if (input === InputValidator.NAME_BLACKLIST[i]) {
                return InputValidator.ERR_NAME_EXISTS;
            }
        }
    },

    description: function(input) {
        if (input === '') {
            return InputValidator.ERR_DESCRIPTION_BLANK;
        }
    }

}

module.exports = InputValidator;
