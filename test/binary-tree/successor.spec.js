const successor = require('../../src/binary-tree/successor')
const insert = require('../../src/binary-tree/insert')

describe('bst - successor', () => {
  it('should get the successor for root node', () => {
    let arr = [10,15,5,6,12,20,15]
    let rootNode
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    successor(rootNode, 10).value.should.eql(12)
  })

  it('should get the successor for root node with no right node', () => {
    let arr = [20,10,15,5,6,12,15]
    let rootNode
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    should.not.exist(successor(rootNode, 20))
  })

  it('should get the successor for with node no right node but greater parent', () => {
    let arr = [10,5,6,2,20,15,12]
    let rootNode
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    successor(rootNode, 15).value.should.eql(20)
  })

  it('should get the successor for with node no right node but greater parent', () => {
    let arr = [10,5,3,2,20,15,16,12,11]
    let rootNode
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    successor(rootNode, 16).value.should.eql(20)
  })
})