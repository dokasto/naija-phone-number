'use strict';

var assert = require('assert');
var naijaNumber = require('./index.js');

describe('Test Numbers', function() {

  describe('Network providers', function() {
    it('should return false for unknown network providers', function() {
      assert.equal(false, naijaNumber.isValid('05018154929'));
    });
  });

  describe('Length of digits.', function() {
    it('should return true for eleven (11) digit numbers.', function() {
      assert.equal(true, naijaNumber.isValid('08038154929'));
    });

    it('should return true for twelve (12) digit numbers.', function() {
      assert.equal(true, naijaNumber.isValid('081981449797'));
    });

    it('should return false for < 11 digit numbers.', function() {
      assert.equal(false, naijaNumber.isValid('080481447'));
    });

    it('should return false for > 13 digit numbers.', function() {
      assert.equal(false, naijaNumber.isValid('0803815492999'));
    });
  });

  describe('Argument data types', function() {
    it('should return false for objects', function() {
      assert.equal(false, naijaNumber.isValid({}));
    });

    it('should return false for arrays', function() {
      assert.equal(false, naijaNumber.isValid([1, 2, 3]));
    });

    it('should return false for null', function() {
      assert.equal(false, naijaNumber.isValid(null));
    });

    it('should return false for empty string', function() {
      assert.equal(false, naijaNumber.isValid(''));
    });

    it('should return false for empty args', function() {
      assert.equal(false, naijaNumber.isValid());
    });

    it('should return false for non integers or alpha-numerics', function() {
      assert.equal(false, naijaNumber.isValid('080d-815f929'));
    });
  });


});
