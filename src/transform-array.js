const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(startArr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.debug(startArr)
  let resultArr = []

  if (Array.isArray(startArr)) {
    let arr = []
    startArr.forEach(el => {
      arr.push(el)
    });
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      switch (el) {
        case '--discard-next':
          i++
          // arr[i + 1] = undefined
          break;
        case '--discard-prev':
          resultArr.pop()
          break;
        case '--double-next':
          if (typeof arr[i + 1] !== 'undefined') {
            resultArr.push(arr[i + 1])

          }
          break;
        case '--double-prev':
          if (typeof resultArr[resultArr.length - 1] !== 'undefined') {
            // if (resultArr[resultArr.length - 1] === arr[i - 1]) {
              // resultArr.push(resultArr[resultArr.length - 1])
              resultArr.push(arr[i - 1])
            // }
          }
          break;

        default:
          if (typeof arr[i] !== 'undefined') {
            resultArr.push(arr[i])
            break;
          }
      }
    }
  } else {
    // return "'arr' parameter must be an instance of the Array!"
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  console.debug(resultArr, 'resultArr')
  return resultArr
}

module.exports = {
  transform
};
