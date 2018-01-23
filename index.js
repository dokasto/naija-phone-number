module.exports = { isValid };

/**
 * Validate phone number
 * @param  {string}  n
 * @return {Boolean}
 */
function isValid(n, callback) {
  if ('function' != typeof callback) callback = function () {};
  var number;
  var pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;
  var valid;

  var promise = new Promise(function(resolve, reject) {
    if (!n || n.length < 5) reject(false);
    // numbers never begin with 0, force this to become a string
    if (isNumber(n)) number = '0' + n;
    // user may supply 0 before the number or not
    // e.g 0703 or 703 (two types of people ¯\_(ツ)_/¯)
    // either way supply missing leading 0
    if (isString(n)) number = (n.substring(0, 1) === '0') ? n : '0' + n;
    if (!isNumber(n) && !isString(n)) reject(false);
    // remove all whitespace(s) before running test
    resolve(pattern.test(number.replace(/\s+/g, '')));
  });

  promise.then(callback.bind(null, null), callback);
  return promise;
};

/**
 * Check for plain number.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isNumber(val) {
  return Number == val.constructor;
}

/**
 * Check for plain string.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isString(val) {
  return String == val.constructor;
}