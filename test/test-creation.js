/*global describe, beforeEach, it */

'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('element generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('element:app', [
                '../../app'
            ]);

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {

        var expected = [
            'my-element.html'
        ];

        helpers.mockPrompt(this.app, {
            'boilerplate': 'Polymer',
            'elementName': 'my-element',
            'lifecycle': true
        });

        this.app.options['skip-install'] = true;
        this.app.run().on('end', function () {
            assert.file(expected);
            done();
        });
    });
});
