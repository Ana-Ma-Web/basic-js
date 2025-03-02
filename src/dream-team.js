const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let resultStr = ''
  let resultArr = []
  if (!Array.isArray(members)) {
    return false
  }

    members.forEach(e => {
      if (typeof e === 'string') {
        let member = e.trim()
        let firstLetter = member[0].toUpperCase()
        resultArr.push(firstLetter)
        if (firstLetter === e[0]) {
        }
      }
    })
    resultArr.sort()
    resultArr.forEach(e => {
      resultStr += e
    })
    return resultStr
}

module.exports = {
  createDreamTeam
};
