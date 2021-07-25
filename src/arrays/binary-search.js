/*
  Given a sorted array, check if the ele is present in the array.

  O(n) - BF lookup in the array

  O(log(n)) - 
    Check if the mid == ele
    or if ele < mid  search left subarray
    or if ele > mid search in right subarray

    mid - for odd number of ele, mid is only one
          for even number of ele, mid is the left ele
*/

/*
  eg: [1,2,3], 1
*/
const search = (sortedArr, ele) => {
  // when the array is empty, terminate
  if(sortedArr.length === 0) {
    return false
  }

  // compute mid
  const mid = parseInt((sortedArr.length - 1)/2)

  // ele is found
  if(ele == sortedArr[mid]) {
    return true
  }

  // ele can be in the left sub array
  if(ele < sortedArr[mid]) {
    return search(sortedArr.slice(0, mid), ele)
  }

  // ele can be in the right sub array
  if(ele > sortedArr[mid]) {
    return search(sortedArr.slice(mid + 1, sortedArr.length), ele)
  }
}

module.exports = {
  search
}