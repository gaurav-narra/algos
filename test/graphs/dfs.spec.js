const dfs = require('../../src/graphs/dfs');

describe.only('dfs', () => {
  it('should traverse undirected graph', () => {
    const resp = dfs.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql([0,4,1,3,2])
  })

  it.only('should traverse directed graph', () => {
    const resp = dfs.traverse([[1,3], [4], [5,4], [1], [3], [5]], 0)
    resp.should.eql([0,3,1,4])
  })
})