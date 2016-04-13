/*global describe, beforeEach, it */

'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('repo generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            done();
        }.bind(this));
    });

    it.skip('creates expected files', function (done) {

        var expected = [
            'src/my-element.html', 'bower.json', 'package.json', 'demo/index.html', 'README.md', 'Gruntfile.js', '.editorconfig', '.gitignore'
        ];

        helpers.run(path.join( __dirname, '../app'))
            .withOptions({'skip-install': true})
            .withPrompts({
                'boilerplate': 'Polymer',
                'polymerVersion': '1.4.0',
                'elementName': 'my-element',
                'lifecycle': true
            })
            .on('end', function () {
                assert.file(expected);
                done();
            });
    });
});
