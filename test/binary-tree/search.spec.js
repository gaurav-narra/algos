const search = require('../../src/binary-tree/search')
const insert = require('../../src/binary-tree/insert')

describe.only('bst - search', () => {
  it('should search if the value is present in the tree', () => {
    let arr = [10,15,5,6,12,20,15]
    let rootNode;
    for(let i = 0; i < arr.length; i++) {
      rootNode = insert(rootNode, arr[i])
    }
    should.exist(search(rootNode,12))
    should.not.exist(search(rootNode,14))
  })
})
