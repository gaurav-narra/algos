const maxHeapify = require('./max-heapify');
const util = require('./../util');

const sort = (arr) => {
  arr = maxHeapify.build(arr);

  for(let j = arr.length - 1; j > 0; j--) {
    arr = util.exchange(arr, 0, j);
    arr = maxHeapify.heapifyNode(arr, 0, j-1);
  }

  return arr
}

module.exports = {
  sort
}
