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
  constructor(direct = true) {
    this.direct = direct
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
    let resultArr = []
    for (let i = 0, k = 0; i < msgArr.length; i++) {
      const curMsgLetter = msgArr[i]
      const codeCurMsgLetter = curMsgLetter.charCodeAt(0)
      const curKeyLetter = key[k]
      const codeCurKeyLetter = curKeyLetter.charCodeAt(0)

      const keyCode = this.tabulaRecta[codeCurKeyLetter - 65].indexOf(curMsgLetter) + 65
      if (keyCode < 65 || keyCode >= 91) {
        resultArr.push(curMsgLetter)
      } else {
        resultArr.push(String.fromCharCode(keyCode))
        k++
      }
    }
    return resultArr
  }
  encrypt(message, keyWord) {
    if (typeof message === 'string' && typeof keyWord === 'string' && arguments.length === 2) {
      let msgArr = message.toUpperCase().split('')
      let key = this.createKeyMsg(message, keyWord)

      let resultArr = this.printEncryptArr(msgArr, key)
      if (this.direct) {
        return resultArr.join('')
      } else {
        return resultArr.reverse().join("")
      }
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
  decrypt(message, keyWord) {
    if (typeof message === 'string' && typeof keyWord === 'string' && arguments.length === 2) {
      let msgArr = message.toUpperCase().split('')
      let key = this.createKeyMsg(message, keyWord)
      let resultArr = this.printDecryptArr(msgArr, key)
      if (this.direct) {
        return resultArr.join('')
      } else {
        return resultArr.reverse().join("")
      }
    } else {
      throw new Error('Incorrect arguments!');
    }

  }
}


module.exports = {
  VigenereCipheringMachine
};
