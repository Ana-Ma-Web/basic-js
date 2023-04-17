const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ( typeof position === 'number' && position <= this.arr.length && position > 0) {
      this.arr.splice(position - 1, 1)
      return this
    } else {
      this.arr = []
      throw new Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = ''
    this.arr.forEach((e, i) => {
      result += e
      if (i !== this.arr.length - 1) {
        result += '~~'
      }
    })
    this.arr = []
    return result
  }
};

module.exports = {
  chainMaker
};
