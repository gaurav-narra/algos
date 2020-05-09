const minSpanTree = require('../../src/graphs/min-span-tree');

describe('min span tree', () => {
  it('should return min weight', () => {
    let result = minSpanTree.traverse([
      [{i: 1, weight: 4}, {i: 7, weight: 8}],
      [{i: 0, weight: 4}, {i: 7, weight: 11}, {i: 2, weight: 8}],
      [{i: 1, weight: 8}, {i: 3, weight: 7}, {i: 8, weight: 2}, {i: 5, weight: 4}],
      [{i: 2, weight: 7}, {i: 5, weight: 14}, {i: 4, weight: 9}],
      [{i: 3, weight: 9}, {i: 5, weight: 10}],
      [{i: 2, weight: 4}, {i: 3, weight: 14}, {i: 4, weight: 10}],
      [{i: 5, weight: 2}, {i: 7, weight: 1}, {i: 8, weight: 6}],
      [{i: 0, weight: 8}, {i: 1, weight: 11}, {i: 8, weight: 7}],
      [{i: 2, weight: 2}, {i: 7, weight: 7}, {i: 6, weight: 6}]
    ])

    result.should.eql(37)
  })
})