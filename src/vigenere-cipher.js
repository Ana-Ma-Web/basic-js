const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
    // console.debug('------------START-----------')

    this.tabulaRecta = []
    for (let i = 0; i < 26; i++) {
      this.tabulaRecta.push([])
      for (let j = 65; j < 91; j++) {
        let n = j
        if (n + i > 90) {
          n -= 26
        }
        this.tabulaRecta[i].push(String.fromCharCode(n + i));
      }
    }
    // console.debug(this.tabulaRecta[5 - 1][2 - 1])
  }
  createKeyMsg = (message, keyWord) => {
    let keyWordArr = keyWord.toUpperCase().split('')
    let result = []

    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (j >= keyWordArr.length) {
        j -= keyWordArr.length
      }
      result.push(keyWordArr[j])
    }
    return result
  }
  printEncryptArr = (msgArr, key) => {

    let resultArr = []
    for (let i = 0, k = 0; i < msgArr.length; i++) {
      const el = msgArr[i]
      const elCode = el.charCodeAt(0)
      const keyCode = key[k].charCodeAt(0)
      if (elCode < 65 || elCode >= 91) {
        resultArr.push(el)
      } else {
        resultArr.push(this.tabulaRecta[elCode - 65][keyCode - 65])
        k++
      }
    }
    return resultArr
  }
  printDecryptArr = (msgArr, key) => {
    // console.debug(msgArr, 'msgArr');
    // console.debug(key, 'key');
    // console.log(key, 'key');
    let resultArr = []
    for (let i = 0, k = 0; i < msgArr.length; i++) {
      // const el = msgArr[i]
      // const elCode = el.charCodeAt(0)
      // const keyCode = key[k].charCodeAt(0)
      const curMsgLetter = msgArr[i]
      const codeCurMsgLetter = curMsgLetter.charCodeAt(0)
      const curKeyLetter = key[k]
      const codeCurKeyLetter = curKeyLetter.charCodeAt(0)
      // console.log();

      const keyCode = this.tabulaRecta[codeCurKeyLetter - 65].indexOf(curMsgLetter) + 65
      // console.log(codeCurKeyLetter - 65, 'codeCurKeyLetter - 65');
      // console.log(keyCode, 'keyCode');
      // console.log(curMsgLetter, 'curMsgLetter');
      if (keyCode < 65 || keyCode >= 91) {
        resultArr.push(curMsgLetter)
      } else {
        // resultArr.push(this.tabulaRecta[keyCode - 65][keyCode - 65])
        resultArr.push(String.fromCharCode(keyCode))
        k++
      }
    }
    // return ''
    // console.debug(resultArr, 'resultArr')
    return resultArr
  }
  encrypt(message, keyWord) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let msgArr = message.toUpperCase().split('')
    let key = this.createKeyMsg(message, keyWord)

    // return this.printStrFromArr(this.printEncryptArr(msgArr, key))
    return this.printEncryptArr(msgArr, key).join('')
  }
  decrypt(message, keyWord) {
    // console.debug(message, 'start message');
    // console.debug(keyWord, 'start keyWord');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let msgArr = message.toUpperCase().split('')
    let key = this.createKeyMsg(message, keyWord)

    // console.debug(message, 'message')
    return this.printDecryptArr(msgArr, key).join('')
  }
}


module.exports = {
  VigenereCipheringMachine
};
