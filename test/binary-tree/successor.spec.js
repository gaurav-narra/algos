const successor = require('../../src/binary-tree/successor')
const insert = require('../../src/binary-tree/insert')

describe.only('successor', () => {
  const buildBst = (arr) => {
    let rootNode = null;
    for(ele of arr) {
      rootNode = insert.bst(rootNode, ele)
    }
    return rootNode
  }

  it('should get the successor for root node', () => {
    let rootNode = buildBst([10,15,5,6,12,20,15])
    successor(rootNode, 10).value.should.eql(12)
  })

  it('should get the successor for root node with no right node', () => {
    let rootNode = buildBst([20,10,15,5,6,12,15])
    should.not.exist(successor(rootNode, 20))
  })

  it('should get the successor for with node no right node but greater parent', () => {
    let rootNode = buildBst([10,5,6,2,20,15,12])
    successor(rootNode, 15).value.should.eql(20)
  })

  it('should get the successor for with node no right node but greater parent', () => {
    let rootNode = buildBst([10,5,3,2,20,15,16,12,11])
    successor(rootNode, 16).value.should.eql(20)
  })
})