const bfs = require('../../src/graphs/bfs');

describe('bfs', () => {
  it('should find the shortes path between vertices', () => {
    const resp = bfs.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql([{
      distance: 0,
      index: 0
    },{
      distance: 1,
      index: 1,
      parent: 0
    },{
      distance: 2,
      index: 2,
      parent: 1
    },{
      distance: 2,
      index: 3,
      parent: 1
    },{
      distance: 1,
      index: 4,
      parent: 0
    }])
  })
})
