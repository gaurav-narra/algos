const util = require('../util');

const insert = (arr, key) => {
  let j = arr.length
  arr[j] = key

  while(j > 0) {
    let parent = parseInt((j-1)/2)
    if(arr[parent] < arr[j]) {
      arr = util.exchange(arr, parent, j)
    } else {
      break;
    }
    j = parent;
  }

  return arr;
}

const increaseKey = (arr, i, key) => {
  if(i < 0) {
    return arr
  }

  parent = parseInt((i-1)/2)
  if(arr[parent] < key) {
    arr[i] = arr[parent]
    return increaseKey(arr, parent, key)
  }
  arr[i] = key
  return arr
}

module.exports = {
  insert,
  increaseKey
}

