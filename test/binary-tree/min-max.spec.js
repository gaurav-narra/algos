const minMax = require('../../src/binary-tree/min-max')
const insert = require('../../src/binary-tree/insert')

describe('min-max', () => {
  const arr = [10,15,5,6,12,20,15]
  let rootNode = null
  for(ele of arr) {
    rootNode = insert.bst(rootNode, ele)
  }

  context('min', () => {
    it('should get min value', () => {
      minMax.min(rootNode).value.should.eql(5)
    })
  })

  context('max', () => {
    it('should get max value', () => {
      minMax.max(rootNode).value.should.eql(20)
    })
  })
})
