const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let minMoves = 0
  for ( i = 0; i < disksNumber; i++){
    minMoves = (minMoves * 2) + 1
  }
  let seconds = Math.floor(minMoves / (turnsSpeed / 60 / 60))

  return { turns: minMoves, seconds}
}

module.exports = {
  calculateHanoi
};
