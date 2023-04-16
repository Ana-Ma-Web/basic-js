const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    console.debug(arr, 'start arr')
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = 0

    const dive = (arr) => {
      let elResult = 0
      let innerResult = 0
      for (let i = 0; i < arr.length; i++) {
        innerResult = 0
        if (Array.isArray(arr[i])) {
          innerResult += dive(arr[i])
        }
        if (innerResult > elResult) elResult = innerResult
      }
      return elResult + 1
    }

    for (let i = 0; i < arr.length; i++) {
      let elResult = 1
      if (Array.isArray(arr[i])) {
        elResult += dive(arr[i])
      }
      if (elResult > result) result = elResult
    }


    console.debug(result, 'result')
    return result
  }
}


module.exports = {
  DepthCalculator
};
