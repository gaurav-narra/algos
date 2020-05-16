const minMax = require('../../src/binary-tree/min-max')
const insert = require('../../src/binary-tree/insert')

describe('min-max', () => {
  let arr = [10,15,5,6,12,20,15]
  let tree = {}
  for(let i = 0; i < arr.length; i++) {
    tree = insert.bst(tree, arr[i])
  }

  context('min', () => {
    it('should get min value', () => {
      minMax.min(tree.root).data.should.eql(5)
    })
  })

  context('max', () => {
    it('should get max value', () => {
      minMax.max(tree.root).data.should.eql(20)
    })
  })
})
