const deleteNode = require('../../src/binary-tree/delete-node');
const search = require('../../src/binary-tree/search');
const insert = require('../../src/binary-tree/insert');
const traversal = require('../../src/binary-tree/traversal')

describe.only('delete', () => {
  it('should delete leaf nodes', () => {
    let arr = [10,5,6,12,20,15] 
    let rootNode;
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    deleteNode(rootNode, 15)
    should.not.exist(search(rootNode, 15))
  })

  it('should delete node with no right nodes', () => {
    let arr = [20,10,5,6,12,15]
    let rootNode;
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    rootNode = deleteNode(rootNode, 20)
    should.not.exist(search(rootNode, 20))
  })

  it('should delete node with right node as not successor', () => {
    let arr = [50,10,5,6,7,3,13,20,15,11,12]
    let rootNode;
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    rootNode = deleteNode(rootNode, 10)
    traversal.inOrder(rootNode).should.eql(
      [3, 5, 6, 7, 11, 12, 13, 15, 20, 50]
    )
  })

  it('should delete node with right node as successor', () => {
    let arr = [50,10,5,6,7,3,13,20,15]
    let rootNode;
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    
    rootNode = deleteNode(rootNode, 10)
    traversal.inOrder(rootNode).should.eql(
      [3, 5, 6, 7, 13, 15, 20, 50]
    )
  })
})
