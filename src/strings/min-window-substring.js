/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
  given two strings, find the minimum window of the first string which covers all characters of the second
*/


/*
  efabghadabcd, abcd
  
  inputChars = {
    a: 1,
    b: 1,
    c: 1,
    d: 1
  }

  iteratingChars = {
    a: 1,
    b: 1,
    d: 1
    c: 1
  }

  iteratingString = abcd
  minLength = 4
  minString = dabc
*/

/*
  ADOBECODEBANC
  ABC
*/

const minWindow = (stringOne, stringTwo) => {
  let inputChars = {}
  // iterate over input string to form input character count object
  for(char of stringTwo.split('')) {
    if(!inputChars[char]) {
      inputChars[char] = 0
    }
    inputChars[char] += 1
  }

  /*
    {
  
      A: 1
      B: 1
      C: 1
    }
  */

  let charCount = {}
  let iteratingChars = [];
  let minString;

  // iterate over the stringOne characters
  for(char of stringOne.split('')) {
    // when the char is part of input chars
    // A
    if(inputChars[char]) {
      // add char to iterating string
      iteratingChars.push(char)

      // increment iterating char count for the character
      if(!charCount[char]) {
        charCount[char] = 0
      }

      charCount[char] += 1
    } else {
      // when not part of input chars, append if can be part of final string
      if(iteratingChars.length > 0) {
        iteratingChars.push(char)
      }
    }

    // when first and last chars are the same
    // count is less than the input chars
    if((iteratingChars[iteratingChars.length-1] == iteratingChars[0]) && charCount[char] > inputChars[char]) {
      // cloning object, to iterate the array and mutate it
      const tempChars = [...iteratingChars]
      // iterate over the chars
      for(iteratingChar of tempChars) {
        if(!charCount[iteratingChar]) {
          iteratingChars.shift()
        } else if(charCount[iteratingChar] > inputChars[iteratingChar]) {
          // when the count is greater than required value remove the char until min is met
          charCount[iteratingChar] -= 1
          iteratingChars.shift()
        } else if (charCount[iteratingChar] <= inputChars[iteratingChar]) {
          break;
        }
      }
    }

    if(charsPresent(inputChars, charCount)) {
      // condition to set the min string
      if(!minString || (iteratingChars.length < minString.length)) {
        minString = iteratingChars.join('')
      }
    }
  }
  return minString;
};

// compares input and iterating count to see if the input chars are present
const charsPresent = (inputChars, iteratingCount) => {
  const inputKeys = Object.keys(inputChars)
  for(inputKey of inputKeys) {
    if(!iteratingCount[inputKey] || (iteratingCount[inputKey] < inputChars[inputKey])) {
      return false
    }
  }
  return true
}

module.exports = {
  minWindow
}