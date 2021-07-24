const deleteNode = require('../../src/binary-tree/delete-node');
const search = require('../../src/binary-tree/search');
const insert = require('../../src/binary-tree/insert');
const traversal = require('../../src/binary-tree/traversal')

describe.only('delete node', () => {
  const buildBst = (arr) => {
    let rootNode = null;
    for(ele of arr) {
      rootNode = insert.bst(rootNode, ele)
    }
    return rootNode
  }

  it('should delete leaf nodes', () => {
    let rootNode = buildBst([10,5,6,12,20,15] )
    rootNode = deleteNode(rootNode, 15)
    should.not.exist(search.bst(rootNode, 15))
  })

  it('should delete node with no right nodes', () => {
    let rootNode = buildBst([20,10,5,6,12,15])
    rootNode = deleteNode(rootNode, 20)
    should.not.exist(search.bst(rootNode, 20))
  })

  it('should delete node with right node as not successor', () => {
    let rootNode = buildBst([50,10,5,6,7,3,13,20,15,11,12])
    rootNode = deleteNode(rootNode, 10)
    traversal.inOrder(rootNode).should.eql(
      [3, 5, 6, 7, 11, 12, 13, 15, 20, 50]
    )
  })

  it('should delete node with right node as successor', () => {
    let rootNode = buildBst([50,10,5,6,7,3,13,20,15])
    rootNode = deleteNode(rootNode , 10)
    traversal.inOrder(rootNode ).should.eql(
      [3, 5, 6, 7, 13, 15, 20, 50]
    )
  })
})
