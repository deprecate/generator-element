/*global describe, beforeEach, afterEach, it */

'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var yeoman = require('yeoman-generator').generators.Base;

describe('repo generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.repo = helpers.createGenerator('webcompt:gen', [
                '../../app'
            ]);

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            'src/my-element.html', 'bower.json', 'package.json', 'demo/index.html', 'README.md', 'Gruntfile.js', '.editorconfig', '.gitignore'
        ];
        helpers.mockPrompt(this.repo, {
            'boilerplate': 'Polymer',
            'elementName': 'my-element',
            'lifecycle': true
        });

        this.repo.options['skip-install'] = true;
        this.repo.run().on('end', function () {
            assert.file(expected);
            done();
        });
    });
});
