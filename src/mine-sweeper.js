const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = []
  for (let i = 0; i < matrix.length; i++){
    result.push([])
    for (let j = 0; j < matrix[0].length; j++) {
      result[i].push(0)
    }
  }

  console.log(result, 'start result');
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      //column
      let cell = matrix[r][c]
      if (cell) {
        //prev row
        if (r - 1 >= 0) {
          if (typeof result[r - 1][c - 1] === 'number') {
            result[r - 1][c - 1] += 1
          }
          if (typeof result[r - 1][c] === 'number') {
            result[r - 1][c] += 1
          }
          if (typeof result[r - 1][c + 1] === 'number') {
            result[r - 1][c + 1] += 1
          }
        }
        //current row
        if (typeof result[r][c - 1] === 'number') {
          result[r][c - 1] += 1
        }
        if (typeof result[r][c + 1] === 'number') {
          result[r][c + 1] += 1
        }
        //next row
        if (typeof result[r + 1][c - 1] === 'number') {
          result[r + 1][c - 1] += 1
        }
        if (typeof result[r + 1][c] === 'number') {
          result[r + 1][c] += 1
        }
        if (typeof result[r + 1][c + 1] === 'number') {
          result[r + 1][c + 1] += 1
        }
      }
    }
  }

  return result
}

module.exports = {
  minesweeper
};
