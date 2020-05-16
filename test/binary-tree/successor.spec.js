const successor = require('../../src/binary-tree/successor')
const insert = require('../../src/binary-tree/insert')

describe('successor', () => {
  context('bst', () => {
    it('should get the successor for root node', () => {
      let arr = [10,15,5,6,12,20,15]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      successor.bst(tree.root).data.should.eql(12)
    })

    it('should get the successor for root node with no right node', () => {
      let arr = [20,10,15,5,6,12,15]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      should.not.exist(successor.bst(tree.root))
    })

    it('should get the successor for with node no right node but greater parent', () => {
      let arr = [10,5,6,2,20,15,12]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      successor.bst(tree.root.right.left).data.should.eql(20)
    })

    it('should get the successor for with node no right node but greater parent', () => {
      let arr = [10,5,3,2,20,15,16,12,11]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      successor.bst(tree.root.right.left.right).data.should.eql(20)
    })
  })
})