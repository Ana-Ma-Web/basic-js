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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
    let result = 0
    let elResult = 0
    
    if (Array.isArray(arr)) {
      result = 1
      elResult = 1
      for (let i = 0; i < arr.length; i++) {
          elResult += this.calculateDepth(arr[i])
        if (elResult > result) result = elResult
        elResult = 1
      }
    }

    return result
  }
}


module.exports = {
  DepthCalculator
};
