const exchange = (arr, i, j) => {
  arr[i] = arr[i] + arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] = arr[i] - arr[j]
  return arr;
}

module.exports = {
  exchange
}