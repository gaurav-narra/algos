/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  let output = []
  if(matrix.length == 0) {
    return matrix
  }
  
  let rows = matrix.length
  let columns = matrix[0].length
  
  output.push(matrix[0][0])
  let direction = 'x'
  count = 1
  while(count <= (rows + columns - 2)) {
    if(direction == 'x') {
      let x, y;
      if(count > (columns-1)) {
        x = columns - 1
        y = count - x
      } else {
        x = count
        y = 0
      }            
      while(x >= 0 && y < rows && x < columns) {
        output.push(matrix[y][x])
        x = x - 1
        y = y + 1
      }
      direction = 'y'
    } else if(direction == 'y') {
      let x, y;
      if(count > (rows-1)) {
        y = rows - 1
        x = count - y
      } else {
        y = count
        x = 0
      }
      while(y>=0 && y < rows && x < columns) {
        output.push(matrix[y][x])
        x = x + 1
        y = y - 1
      }
      direction = 'x'
    }
    count+=1
  }
  return output 
};

module.exports = {
  findDiagonalOrder
}