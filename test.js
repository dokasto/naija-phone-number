'use strict';

var assert = require('assert');
var Q = require('q');

var naijaNumber = require('./index.js');

var prefixes = {
  MTN: ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903'],
  Airtel: ['0708', '0802', '0808', '0812', '0701', '0902'],
  GLO: ['0705', '0815', '0805', '0807', '0811', '0905'],
  Etisalat: ['0809', '0817', '0818', '0909', '0908'],
  Starcomms: ['07028', '07029', '0819'],
  Visafone: ['0704', '07025', '07026'],
  Multilinks: ['0709', '07027'],
  Zoom: ['0707'],
  MTEL: ['0804']
};

var suffix = '9764320';

describe('Test Numbers', function() {

  describe('Network providers', function() {
    it('should return false for unknown network providers', function() {
      naijaNumber.isValid('05018154929').then(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('MTN numbers', function() {
      var results = prefixes.MTN.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('GLO numbers', function() {
      var results = prefixes.GLO.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Airtel numbers', function() {
      var results = prefixes.Airtel.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Etisalat numbers', function() {
      var results = prefixes.Etisalat.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Visafone numbers', function() {
      var results = prefixes.Visafone.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Starcomms numbers', function() {
      var results = prefixes.Starcomms.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Multilinks numbers', function() {
      var results = prefixes.Multilinks.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('Zoom numbers', function() {
      var results = prefixes.Zoom.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });

    it('MTEL numbers', function() {
      var results = prefixes.MTEL.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });

      Q.all(results).then(function(actuals) {
        assert.equal(-1, actuals.indexOf(false));
      });
    });
  });

  describe('Length of digits.', function() {
    it('should return true for eleven (11) digit numbers.', function() {
      naijaNumber.isValid('081028582392', function(error, actual) {
        assert.equal(true, actual);
      });
    });

    it('should return true for twelve (12) digit numbers.', function() {
      naijaNumber.isValid('081981449797', function(error, actual) {
        assert.equal(true, actual);
      });
    });

    it('should return false for < 11 digit numbers.', function() {
     naijaNumber.isValid('080481447', function(error, actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for > 12 digit numbers.', function() {
      naijaNumber.isValid('0803815492999', function(error, actual) {
        assert.equal(false, actual);
      });
    });
  });

  describe('Argument data types', function() {
    it('should return false for objects', function() {
      naijaNumber.isValid({}).catch(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for arrays', function() {
      naijaNumber.isValid([1, 2, 3]).catch(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for null', function() {
      naijaNumber.isValid(null).catch(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for empty string', function() {
      naijaNumber.isValid('').catch(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for empty args', function() {
      naijaNumber.isValid().catch(function(actual) {
        assert.equal(false, actual);
      });
    });

    it('should return false for non integers or alpha-numerics', function() {
      naijaNumber.isValid('080d-815f929').catch(function(actual) {
        assert.equal(false, actual);
      });
    });
  });

});
