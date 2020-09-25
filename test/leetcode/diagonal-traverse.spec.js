const diagonalTraverse = require('../../src/leetcode/diagonal-traverse');

describe('diagonal-traverse', () => {
  it('should traverse single column', () => {
    diagonalTraverse.findDiagonalOrder([[3],[2]]).should.eql([3,2])
  })

  it('should traverse normal matrix', () => {
    diagonalTraverse.findDiagonalOrder([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]).should.eql([1,2,4,7,5,3,6,8,9])
  })
})