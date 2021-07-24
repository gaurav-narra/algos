const binarySearch = require('../../src/arrays/binary-search');

describe('binary search', () => {
  it('should search for element', () => {
    let resp = binarySearch.search([1,2,3,4,5,6], 3)
    resp.should.eql(true)

    resp = binarySearch.search([1,2,3,4,5,6], 7)
    resp.should.eql(false)
  })

  it('should search in single element array', () => {
    resp = binarySearch.search([1], 1)
    resp.should.eql(true)

    resp = binarySearch.search([], 1)
    resp.should.eql(false)
  })
})
