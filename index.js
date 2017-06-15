module.exports = { isValid };

/**
 * Validate phone number
 * @param  {string}  n
 * @return {Boolean} 
 */
function isValid(n) {

  var firstChar;
  var number;
  var pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;

  if (!n || n.length < 5) return false;

  if (typeof n === 'number') {

    number = '0' + n;

  } else if (typeof n === 'string') {

    firstChar = n.substring(0, 1);

    number = (firstChar === '0') ? n : '0' + n;

  } else {

    return false;

  }

  return pattern.test(number);

};
