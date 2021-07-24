const search = require('../../src/binary-tree/search')
const insert = require('../../src/binary-tree/insert')

describe('search', () => {
  context('bst', () => {
    it('should search if the value is present in the tree', () => {
      let arr = [10,15,5,6,12,20,15]
      let rootNode = null;
      for(ele of arr) {
        rootNode = insert.bst(rootNode, ele)
      }
      should.exist(search.bst(rootNode,12))
      should.not.exist(search.bst(rootNode,14))
    })
  })
})
