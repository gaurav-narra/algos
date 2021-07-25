const insert = require('../../src/binary-tree/insert');

describe.only('binary tree - insert', () => {
  it.only('should add root node', () => {
    const rootNode = insert(null, 10);
    rootNode.value.should.eql(10)
  })

  it('should insert nodes into subtree', () => {
    let tree = {}
    let arr = [10, 5, 20, 25, 1]
    for(let i = 0; i < arr.length; i++) {
      tree = insert(tree, arr[i])
    }
    tree.root.data.should.eql(10)
    tree.root.left.data.should.eql(5)
    tree.root.right.data.should.eql(20)
    tree.root.right.right.data.should.eql(25)
    tree.root.left.left.data.should.eql(1)
  })
})