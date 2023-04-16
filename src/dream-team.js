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
  console.debug(members, 'start members')
  if (!Array.isArray(members)) {
    return false
  }

  // if (members && members.isArray()) {
    members.forEach(e => {
      if (typeof e === 'string') {

        // console.debug(typeof e, 'eeeeeeeee trim')
        let member = e.trim()
        let firstLetter = member[0].toUpperCase()
        // resultStr += firstLetter
        resultArr.push(firstLetter)
        // if (typeof [0] === 'string' && firstLetter === e[0]) {
        if (firstLetter === e[0]) {
          // resultStr += '123'
          // resultArr.push(e[0])
          // resultStr += firstLetter
        }
      }
    })
    resultArr.sort()
    resultArr.forEach(e => {
      resultStr += e
    })
    console.debug(resultStr)
    return resultStr
  // } else {
    return false
  // }
}

module.exports = {
  createDreamTeam
};
