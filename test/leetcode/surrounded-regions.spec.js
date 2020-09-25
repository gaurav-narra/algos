const surroundedRegion = require('../../src/leetcode/surrounded-regions');

describe('surrounded-region', () => {
  it('should check for empty board', () => {
    surroundedRegion.solve([]).should.eql([])
  })

  it('should check for boards', () => {
    surroundedRegion.solve(
    [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]).should.eql([
    ["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]])
  })
})