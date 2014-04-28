/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('element generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.repo = helpers.createGenerator('element:repo', [
                '../../repo'
            ]);

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            '.editorconfig',
            '.gitignore',
            'bower.json',
            'package.json',
            'index.html',
            'Gruntfile.js',
            'README.md',
            'src/my-element.html'
        ];

        helpers.mockPrompt(this.repo, {
            'githubRepo': 'my-user',
            'githubUser': 'my-repo',
            'elementName': 'my-element',
            'elementDescription': 'My awesome Custom Element',
            'lifecycle': true,
            'grunt': true
        });

        this.repo.options['skip-install'] = true;

        this.repo.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });

    it('creates expected files when there\'s no grunt tasks included', function (done) {
        var expected = [
            '.editorconfig',
            '.gitignore',
            'bower.json',
            'index.html',
            'README.md',
            'src/my-element.html'
        ];

        helpers.mockPrompt(this.repo, {
            'githubRepo': 'my-user',
            'githubUser': 'my-repo',
            'elementName': 'my-element',
            'elementDescription': 'My awesome Custom Element',
            'lifecycle': false,
            'grunt': false
        });

        this.repo.options['skip-install'] = true;

        this.repo.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
