/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 /*
    given two strings, find the minimum window in the first string which covers all characters in the second
 */
const minWindow = (inputString, charString) => {
  // get input count by characters
  let inputCharCount = {};
  charString.split('').forEach((char) => {
    if(!inputCharCount[char]) {
      inputCharCount[char] = 0
    }
    inputCharCount[char] += 1
  })
  
  let minString;
  let minlength;
  let iterateString = []; // does this cause any edge cases?
  let leftCount = {}; // how many chars are there to the left of the iterating string

  //iterate over the input string
  inputString.split('').forEach((char) => {
    // is it one of the input string
    if(inputCharCount[char] > 0) {
      iterateString.push(char)
      // increase the counter in the iterating string
      if(!leftCount[char]) {
        leftCount[char] = 0
      }
      leftCount[char] += 1
    }

    //not input string, but trying to find the full string
    if(!inputCharCount[char] && iterateString.length > 0) {
      iterateString.push(char)
    }

    // if first and last characters are same and its over the required value trim the iterating array
    if((iterateString[0] === iterateString[iterateString.length - 1]) && leftCount[char] > inputCharCount[char]) {
      const cloneString = [...iterateString];
      for(char of cloneString) {
        // circuit breaker when we hit a char which is at its min requirement
        if(leftCount[char] && (leftCount[char] <= inputCharCount[char])) {
          break;
        }

        // if we have more than what we need, trim it down
        if((leftCount[char] > inputCharCount[char])) {
          iterateString.shift()
          leftCount[char] -= 1
        // if its a char we are not intrested in, trim it
        } else if (!inputCharCount[char]) {
          iterateString.shift()
        }
      }
    }

    if(minWindowCondition(inputCharCount, leftCount)) {
      // either first found iterating string or found iterating string has length greater less than prev found min string
      if(!minlength || (minlength > iterateString.length)) {
        minlength = iterateString.length
        minString = iterateString.join('')
      }
    }
  })

  if(!minlength) {
    // throw 'Invalid input';
  }

  return minString;
};

const minWindowCondition = (inputCharCount, iteratingCounter) => {
  for(let char of Object.keys(inputCharCount)) {
    // circuit break if any iterating counter does not yet have the input char
    if(!iteratingCounter[char]) {
      return false
    }
    // circuit break if any value in input char count is not met in the iterator count
    if(inputCharCount[char] > iteratingCounter[char]) {
      return false
    }
  }
  return true
}

module.exports = {
  minWindow
}
