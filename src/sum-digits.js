const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0
  const count = (number) => {
    let arr = (number + '').split('')
    let sum = arr.reduce((acc, num) => acc + +num, 0)
    if (sum > 9) {
      count(sum)
    } else {
      result = sum
    }
  }
  count(n)
  return result
}

module.exports = {
  getSumOfDigits
};
