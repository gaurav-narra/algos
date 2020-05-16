const search = require('../../src/binary-tree/search')
const insert = require('../../src/binary-tree/insert')

describe('search', () => {
  context('bst', () => {
    it('should search if the value is present in the tree', () => {
      let arr = [10,15,5,6,12,20,15]
      let tree = {}
      for(let i = 0; i < arr.length; i++) {
        tree = insert.bst(tree, arr[i])
      }
      should.exist(search.bst(tree,12))
      should.not.exist(search.bst(tree,14))
    })
  })
})
