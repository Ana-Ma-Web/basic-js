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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // let resultStr = ''
  // let resultArr = []
  // console.dir(members)
  
  // // if (typeof members === 'array') {
  //   members.forEach(e => {
  //     let firstLetter = e[0].toUpperCase()
  //     resultStr += firstLetter
  //     if (typeof [0] === 'string' && firstLetter === e[0]) {
  //       resultStr += '123'
  //       // resultArr.push(e[0])
  //       // resultStr += firstLetter
  //     }
  //   })
  //   // resultArr.sort()
  //   // resultArr.forEach(e => {
  //   //   resultStr += e
  //   // })
  // // }
  // return resultStr
}

module.exports = {
  createDreamTeam
};
