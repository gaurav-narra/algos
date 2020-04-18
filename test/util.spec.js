const util = require('../src/util');

describe('util', () => {
  context('#exchange', () => {
    it('should exchange array elements', () => {
      const arr = [1,2,3,4]
      util.exchange(arr, 1, 2).should.eql([1,3,2,4])
    })
  })
})