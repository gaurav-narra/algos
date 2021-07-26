const detectCycle = require('../../src/graphs/detect-cycle');

describe.only('detect cycle', () => {
  it('should detect cycle in undirected graph', () => {
    const resp = detectCycle.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql(true)
  })

  it('should detect when cycle is not present in undirected graph', () => {
    const resp = detectCycle.traverse([[1], [0,4,3], [3], [1,2], [1]], 0)
    resp.should.eql(false)
  })

  it('should detect cycle in directed graph', () => {
    const resp = detectCycle.traverse([[1,3], [4], [5,4], [1], [3], [5]], 0)
    resp.should.eql(true)
  })
})