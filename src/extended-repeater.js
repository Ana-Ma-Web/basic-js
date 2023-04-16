const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = 1
  let separator = '+'
  let addition = ''
  let additionRepeatTimes = 1
  let additionSeparator = '|'
  let resultStr = ''

  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes
  }
  if (options.hasOwnProperty('separator')) {
    separator = options.separator + ''
  }
  if (options.hasOwnProperty('addition')) {
    addition = options.addition
  }
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes
  }
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator
  }

  
  for (let i = 0; i < repeatTimes; i++) {
    resultStr += str
    for (let j = 0; j < additionRepeatTimes ; j++) {
      resultStr += addition
      if (j !== additionRepeatTimes - 1) {
        resultStr += additionSeparator
      }
    }
    if (i !== repeatTimes - 1) {
      resultStr += separator
    }
  }
  return resultStr
}

module.exports = {
  repeater
};
