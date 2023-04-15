const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resultObj = {}

  for (let i = 0; i < domains.length; i++) {
    let strArr = domains[i].split('.')
    strArr = strArr.reverse()
    let tempStr = ''
    for (let j = 0; j < strArr.length; j++) {
      tempStr += ('.' + strArr[j])
      if (resultObj[tempStr]) {
        resultObj[tempStr] +=1
      } else {
        resultObj[tempStr] = 1
      }
    }
  }
  return resultObj
}

module.exports = {
  getDNSStats
};
