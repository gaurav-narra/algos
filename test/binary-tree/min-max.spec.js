const minMax = require('../../src/binary-tree/min-max')
const insert = require('../../src/binary-tree/insert')

describe.only('min-max', () => {
  let arr = [10,15,5,6,12,20,15]
  let rootNode;
  for(let i = 0; i < arr.length; i++) {
    rootNode = insert(rootNode, arr[i])
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
