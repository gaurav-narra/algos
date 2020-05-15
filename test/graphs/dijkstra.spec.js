const dijkstra = require('../../src/graphs/dijkstra');

describe('dijkstra', () => {
  it('should return min path', () => {
    let result = dijkstra.traverse([
      [{i: 1, weight: 4}, {i: 7, weight: 8}],
      [{i: 0, weight: 4}, {i: 7, weight: 11}, {i: 2, weight: 8}],
      [{i: 1, weight: 8}, {i: 3, weight: 7}, {i: 8, weight: 2}, {i: 5, weight: 4}],
      [{i: 2, weight: 7}, {i: 5, weight: 14}, {i: 4, weight: 9}],
      [{i: 3, weight: 9}, {i: 5, weight: 10}],
      [{i: 2, weight: 4}, {i: 3, weight: 14}, {i: 4, weight: 10}, {i: 6, weight: 2}],
      [{i: 5, weight: 2}, {i: 7, weight: 1}, {i: 8, weight: 6}],
      [{i: 0, weight: 8}, {i: 1, weight: 11}, {i: 6, weight: 1}, {i: 8, weight: 7}],
      [{i: 2, weight: 2}, {i: 7, weight: 7}, {i: 6, weight: 6}]
    ])

    result.should.eql([{
      dist: 0,
      parent: null 
    },{
      dist: 4,
      parent: 0 
    },{
      dist: 12,
      parent: 1 
    },{
      dist: 19,
      parent: 2
    },{
      dist: 21,
      parent: 5 
    },{
      dist: 11,
      parent: 6 
    },{
      dist: 9,
      parent: 7 
    },{
      dist: 8,
      parent: 0 
    },{
      dist: 14,
      parent: 2 
    }])
  })
})