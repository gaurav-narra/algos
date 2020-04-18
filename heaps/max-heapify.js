const heapify = (arr) => {
  for(let i = parseInt((arr.length-2)/2); i >= 0 ; i--) {
    arr = heapifyNode(arr, i);
  }

  return arr;
}

const heapifyNode = (arr, i) => {
  const left = 2*i + 1;
  const right = 2*i + 2;

  let max;
  if((left <= (arr.length - 1)) && (arr[i] < arr[left])) {
    max = left
  } else {
    max = i
  }

  if((right <= (arr.length - 1)) && (arr[max] < arr[right])) {
    max = right
  }

  if(max != i) {
    arr = exchange(arr, i, max);
    return heapifyNode(arr, max);
  }

  return arr;
}

const exchange = (arr, i, j) => {
  arr[i] = arr[i] + arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] = arr[i] - arr[j]
  return arr;
}

module.exports = {
  heapify,
  heapifyNode
}