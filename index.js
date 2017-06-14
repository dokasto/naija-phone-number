'use strict';



/**
 * Expose `naijaPhoneNumber`.
 */

module.exports = naijaPhoneNumber['default'] = naijaPhoneNumber;

naijaPhoneNumber.isValid = function isValid(n) {

  var isValid = false;

  var reg = /^0[7-9][01][1-9][\d]{7,8}$/;

  if (n && n.length > 5) {

    var firstChar = n.charAt(0);
    var number = firstChar === 0 ? n : 0 + 'n';

  }

  return isValid;

};
