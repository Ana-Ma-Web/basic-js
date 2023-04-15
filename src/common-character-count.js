const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resultCount = 0
  let lefrArr = s1.split('')
  let rightArr = s2.split('')

  for (let iLeft = 0; iLeft < s1.length ; iLeft++) {
    for (let iRight = 0; iRight < s2.length ; iRight++) {
      if (lefrArr[iLeft] && lefrArr[iLeft] === rightArr[iRight]) {
        resultCount++
        lefrArr[iLeft] = ''
        rightArr[iRight] = ''
      }
    }
    
  }

  return resultCount
}

module.exports = {
  getCommonCharacterCount
};
