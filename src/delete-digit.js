const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let strArr = (n + '').split('')
  let maxNumber

  let tempArr = []
  let resultNumbers = []

  for (let i = 0; i < strArr.length; i++) {
    tempArr.push([])
    for (let j = 0; j < strArr.length; j++) {
      tempArr[i].push(strArr[j])
      if (i === j) tempArr[i][j] = ''
    }
  }
  for (let i = 0; i < tempArr.length; i++) {
    resultNumbers.push('')
    for (let j = 0; j < tempArr.length; j++) {
      resultNumbers[i] += tempArr[i][j]
    }
    resultNumbers[i] = +resultNumbers[i]
    if (typeof maxNumber === 'number'){
      if (maxNumber < resultNumbers[i]) maxNumber = resultNumbers[i]
    } else {
      maxNumber = resultNumbers[i]
    }
  }

  return maxNumber
}

module.exports = {
  deleteDigit
};
