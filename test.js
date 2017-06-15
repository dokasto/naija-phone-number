'use strict';

var assert = require('assert');
var naijaNumber = require('./index.js');

let prefixes = {
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

let suffix = '9764320';

describe('Test Numbers', function() {

  describe('Network providers', function() {
    it('should return false for unknown network providers', function() {
      assert.equal(false, naijaNumber.isValid('05018154929'));
    });

    it('MTN numbers', function() {
      let result = prefixes.MTN.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('GLO numbers', function() {
      let result = prefixes.GLO.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Airtel numbers', function() {
      let result = prefixes.Airtel.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Etisalat numbers', function() {
      let result = prefixes.Etisalat.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Visafone numbers', function() {
      let result = prefixes.Visafone.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Starcomms numbers', function() {
      let result = prefixes.Starcomms.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Multilinks numbers', function() {
      let result = prefixes.Multilinks.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('Zoom numbers', function() {
      let result = prefixes.Zoom.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it('MTEL numbers', function() {
      let result = prefixes.MTEL.map(function(prefix) {
        return naijaNumber.isValid(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

  });

  describe('Length of digits.', function() {
    it('should return true for eleven (11) digit numbers.', function() {
      assert.equal(true, naijaNumber.isValid('081028582392'));
    });

    it('should return true for twelve (12) digit numbers.', function() {
      assert.equal(true, naijaNumber.isValid('081981449797'));
    });

    it('should return false for < 11 digit numbers.', function() {
      assert.equal(false, naijaNumber.isValid('080481447'));
    });

    it('should return false for > 12 digit numbers.', function() {
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
