const dfs = require('../../src/graphs/dfs');

describe.only('dfs', () => {
  it('should traverse undirected graph', () => {
    const resp = dfs.traverse([[1,4], [0,4,2,3], [1,3], [1,4,2], [3,0,1]], 0)
    resp.should.eql({
      0: { parent: null},
      1: { parent: 4 },
      2: { parent: 3 },
      3: { parent: 1 },
      4: { parent: 0 }
    })
  })

  it('should traverse directed graph', () => {
    let resp = dfs.traverse([[1,3], [4], [5,4], [1], [3], [5]], 0)
    resp.should.eql({
      0: { parent: null },
      1: { parent: 3 },
      3: { parent: 0 },
      4: { parent: 1 }
    })
    resp = dfs.traverse([[1,3], [4], [5,4], [1], [3], [5]], 2, resp)
    resp.should.eql({
      2: { parent: null },
      0: { parent: null },
      1: { parent: 3 },
      3: { parent: 0 },
      4: { parent: 1 },
      5: { parent: 2 }
    })
  })
})