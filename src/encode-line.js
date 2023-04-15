const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let strArr = str.split('')

  let resultArr = []
  let resultStr = ''

  for (let i = 0; i < strArr.length; i++) {
    if (resultArr[0] && resultArr[resultArr.length - 1][0] === strArr[i]) {
      resultArr[resultArr.length - 1][1]++
    } else {
      resultArr.push([strArr[i], 1])
    }
  }
  
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i][1] > 1) resultStr += resultArr[i][1]
    resultStr += resultArr[i][0]
  }

  return resultStr
}

module.exports = {
  encodeLine
};
