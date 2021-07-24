const insert = require('../../src/binary-tree/insert');

describe('insert', () => {
  context('bst', () => {
    it('should add root node', () => {
      const rootNode = insert.bst(null, 10);
      rootNode.value.should.eql(10)
    })

    it('should insert nodes into subtree', () => {
      let rootNode = null;
      let arr = [10, 5, 20, 25, 1]
      for(let i = 0; i < arr.length; i++) {
        rootNode = insert.bst(rootNode, arr[i])
      }
      rootNode.value.should.eql(10)
      rootNode.left.value.should.eql(5)
      rootNode.right.value.should.eql(20)
      rootNode.right.right.value.should.eql(25)
      rootNode.left.left.value.should.eql(1)
    })
  })
})