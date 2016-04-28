/*global describe, beforeEach, it */

'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var os = require('os');

describe('repo generator', function () {

    describe('Polymer Test', function () {

        beforeEach(function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .inDir(path.join(os.tmpdir(), './temp'))
                .withPrompts({
                    githubRepo : 'fake-element-repo',
                    boilerplate: 'Polymer',
                    polymerVersion: '1.4.0',
                    elementName: 'fake-element',
                    elementDescription: 'A awesome web component',
                    githubUser: 'componentCreatorAccount',
                    authorName: 'Koan Kyuka',
                    authorEmail: 'Koan.Kyuka@ghost.com',
                    authorUrl: 'http://Koan.go',
                    keywords: ['generator-keyword', 'component-keyword', 'web-keyword'],
                    license: 'MIT',
                    'lifecycle': true
                })
                .withOptions({'skip-install': true})
                .on('end', done);
        });

        it('should create the required static files', function () {
            assert.file([
                'test/fake-element-tests.html',
                'src/fake-element.html',
                'bower.json',
                'package.json',
                'demo/index.html',
                'README.md',
                'Gruntfile.js',
                '.editorconfig',
                'LICENSE',
                '.gitignore'
            ]);
        });

        it('fills the README with project data', function () {
            assert.fileContent('README.md', 'fake-element');
            assert.fileContent('README.md', 'https://travis-ci.org/componentCreatorAccount/fake-element-repo.svg?branch=master');
            assert.fileContent('README.md', 'http://Koan.go');
        });

        it('fills the index html with project data', function () {
            assert.fileContent('src/fake-element.html', 'fake-element');
        });

        it('fills the bower with the correct library', function () {
            assert.fileContent('bower.json', '"polymer": "Polymer/polymer#^1.4.0"');
        });

        it('fills the package.json with the correct info', function () {
            assert.fileContent('package.json', 'fake-element-repo');
            assert.fileContent('package.json', '"generator-keyword"');
        });
    });
});
