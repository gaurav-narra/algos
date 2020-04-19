const heapInsert = require('../../src/heaps/heap-insert');

describe('heap insert', () => {
  it('should insert key in the heap', () => {
    const heap = [21, 15, 17, 10, 5, 16, 1, 4, 6];
    heapInsert.insert(heap, 14).should.eql(
      [21, 15, 17, 10, 14, 16, 1, 4, 6, 5]
    )
  })

  it('should increase key in a heap', () => {
    const heap = [21, 15, 17, 10, 5, 16, 1, 4, 6];
    heapInsert.increaseKey(heap, 3, 16).should.eql(
      [21, 16, 17, 15, 5, 16, 1, 4, 6]
    )
  })
})