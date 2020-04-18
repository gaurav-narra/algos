const util = require('../util');

const build = (arr) => {
  for(let i = parseInt((arr.length-2)/2); i >= 0 ; i--) {
    arr = heapifyNode(arr, i);
  }

  return arr;
}

const heapifyNode = (arr, i, j) => {
  /**
  zero is equivalent to null/undefined for if.
  j = j || arr.lenght - 1 
  if j was zero, if would become arr.length - 1
  which is not expected, it needs to be zero
  **/
  if(j == null) {
    j = arr.length -1;
  }

  const left = 2*i + 1;
  const right = 2*i + 2;

  let max;
  if((left <= j) && (arr[i] < arr[left])) {
    max = left
  } else {
    max = i
  }

  if((right <= j) && (arr[max] < arr[right])) {
    max = right
  }

  if(max != i) {
    arr = util.exchange(arr, i, max);
    return heapifyNode(arr, max, j);
  }

  return arr;
}

module.exports = {
  build,
  heapifyNode
}