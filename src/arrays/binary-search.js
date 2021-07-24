const search = (sortedArr, ele) => {
  // terminating condition when array length is zero 
  if(sortedArr.length === 0) {
    return false
  }

  // get mid of the array.
  // If odd length has one mid
  // If of even length get the left one as mid
  const mid = Math.floor((sortedArr.length - 1)/2)

  // terminating condition, when the element is found
  if(ele === sortedArr[mid]) {
    return true
  }

  // if the element value is less than the mid value then search in the left sub array
  if(ele < sortedArr[mid]) {
    return search(sortedArr.slice(0, mid), ele)
  } else { // if the ele value is greater than the mid value search in the right sub array
    return search(sortedArr.slice(mid+1))
  }
}

module.exports = {
  search
}