/*global describe, beforeEach, it */

'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var os = require('os');

describe('repo generator', function () {

    beforeEach(function (done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp'))
            .withPrompts({
                'boilerplate': 'Polymer',
                'polymerVersion': '1.4.0',
                'elementName': 'my-element',
                'lifecycle': true
            })
            .withOptions({'skip-install': true})
            .on('end', done);
    });

    it('should create the required static files', function () {
        assert.file([
            'test/my-element-tests.html', 'src/my-element.html', 'bower.json', 'package.json', 'demo/index.html', 'README.md', 'Gruntfile.js', '.editorconfig', '.gitignore'
        ]);
    });

});
