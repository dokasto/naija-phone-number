module.exports = { isValid };

/**
 * Module dependencies.
 */

var is = require('is');


/**
 * Validate phone number
 * @param  {string}  n
 * @param  {Function}  callback
 * @return {(Boolean|Function)}
 */
function isValid(n, callback) {
  var number;
  var pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;
  var valid;

  valid = (function (n) {
    if (!n || n.length < 5) return false;
    // numbers never begin with 0, force this to become a string
    if (is.number(n)) number = '0' + n;
    // user may supply 0 before the number or not
    // e.g 0703 or 703 (two types of people ¯\_(ツ)_/¯)
    // either way supply missing leading 0
    if (is.string(n)) number = (n.substring(0, 1) === '0') ? n : '0' + n;
    if (!is.number(n) && !is.string(n)) return false;
    // remove all whitespace(s) before running test
    return pattern.test(number.replace(/\s+/g, ''));
  })(n);

  if (callback) {
    if (!is.func(callback)) callback = function () {};
    return callback(null, valid);
  }

  return valid;
};