const detectCycle = require('../../src/graphs/detect-cycle');

describe('detect cycle', () => {
  it('should detect cycle in undirected graph', () => {
    const resp = detectCycle.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql({
      nodes: [{
        index: 0,
        initial: 1,
        final: 10,
        parent: null
      },{
        index: 1,
        parent: 0,
        initial: 2,
        final: 9
      },{
        index: 2,
        parent: 3,
        initial: 5,
        final: 6
      },{
        index: 3,
        parent: 4,
        initial: 4,
        final: 7
      },{
        index: 4,
        parent: 1,
        initial: 3,
        final: 8
      }],
    cycle: true
    })
  })

  it('should detect cycle in directed graph', () => {
    const resp = detectCycle.traverse([[1,3], [4], [5,4], [1], [3], [5]], 0)
    resp.should.eql({
      nodes: [{
        index: 0,
        initial: 1,
        final: 8,
        parent: null
      },{
        index: 1,
        parent: 0,
        initial: 2,
        final: 7
      },{
        index: 2,
        parent: null,
        initial: 9,
        final: 12
      },{
        index: 3,
        parent: 4,
        initial: 4,
        final: 5
      },{
        index: 4,
        parent: 1,
        initial: 3,
        final: 6
      },{
        index: 5,
        parent: 2,
        initial: 10,
        final: 11
      }],
    cycle: true
    })
  })
})