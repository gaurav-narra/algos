const insert = require('../../src/binary-tree/insert');

describe('insert', () => {
  context('bst', () => {
    it('should add root node', () => {
      let tree = {}
      tree = insert.bst(tree, 10);
      tree.root.data.should.eql(10)
    })

    it('should insert nodes into subtree', () => {
      let tree = {}
      let arr = [10, 5, 20, 25, 1]
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      tree.root.data.should.eql(10)
      tree.root.left.data.should.eql(5)
      tree.root.right.data.should.eql(20)
      tree.root.right.right.data.should.eql(25)
      tree.root.left.left.data.should.eql(1)
    })
  })
})