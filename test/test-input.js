/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');
var validator = require('../app/validator');

describe('input validation', function () {
    describe('element name', function () {
        it('cannot be blank', function () {
            var actual = validator.name(''),
                expected = validator.ERR_NAME_BLANK;

            assert.equal(actual, expected);
        });

        it('needs to contain a dash', function () {
            var actual = validator.name('foo'),
                expected = validator.ERR_NAME_DASH;

            assert.equal(actual, expected);
        });

        it('is one of the existing elements', function () {
            var actual = validator.name('font-face'),
                expected = validator.ERR_NAME_EXISTS;

            assert.equal(actual, expected);
        });

        it('is valid', function () {
            var actual = validator.name('my-element'),
                expected = true;

            assert.equal(actual, expected);
        });
    });

    describe('element description', function () {
        it('cannot be blank', function () {
            var actual = validator.description(''),
                expected = validator.ERR_DESCRIPTION_BLANK;

            assert.equal(actual, expected);
        });

        it('is valid', function () {
            var actual = validator.description('My awesome Web Component using Polymer'),
                expected = true;

            assert.equal(actual, expected);
        });
    });
});
