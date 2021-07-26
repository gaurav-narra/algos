const bfs = require('../../src/graphs/bfs');

describe('bfs', () => {
  it.only('should find the shortes path between vertices', () => {
    const resp = bfs.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql({
      0: { parent: null, distance: 0},
      1: { parent: 0, distance: 1},
      2: { parent: 1, distance: 2},
      3: { parent: 1, distance: 2},
      4: { parent: 0, distance: 1}
    })
  })
})
