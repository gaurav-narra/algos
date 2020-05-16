const deleteNode = require('../../src/binary-tree/delete-node');
const search = require('../../src/binary-tree/search');
const insert = require('../../src/binary-tree/insert');
const traversal = require('../../src/binary-tree/traversal')

describe('delete', () => {
  context('bst', () => {
    it('should delete leaf nodes', () => {
      let arr = [10,5,6,12,20,15] 
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }

      let node = search.bst(tree, 15)
      deleteNode.bst(tree, node)
      should.not.exist(search.bst(tree, 15))
    })

    it('should delete node with no right nodes', () => {
      let arr = [20,10,5,6,12,15]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }

      let node = search.bst(tree, 20)
      deleteNode.bst(tree, node)
      should.not.exist(search.bst(tree, 20))
    })

    it('should delete node with right node as not successor', () => {
      let arr = [50,10,5,6,7,3,13,20,15,11,12]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }

      let node = search.bst(tree, 10)
      deleteNode.bst(tree, node)
      traversal.inOrder(tree.root).should.eql(
        [3, 5, 6, 7, 11, 12, 13, 15, 20, 50]
      )
    })

    it('should delete node with right node as successor', () => {
      let arr = [50,10,5,6,7,3,13,20,15]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      let node = search.bst(tree, 10)
      deleteNode.bst(tree, node)
      traversal.inOrder(tree.root).should.eql(
        [3, 5, 6, 7, 13, 15, 20, 50]
      )
    })
  })
})
