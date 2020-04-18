const maxHeapify = require('../../src/heaps/max-heapify');

describe('max heapify', () => {
  it('should max heapify single node', () => {
    const arr = [16, 4, 1, 10, 5, 17, 21, 15, 6];
    maxHeapify.heapifyNode(arr, 1).should.eql(
      [16, 10, 1, 15, 5, 17, 21, 4, 6]
    )
  })

  it('should max heapify with heap size', () => {
    const arr = [1, 4, 5, 6, 10, 15, 16, 17, 21]
    maxHeapify.heapifyNode(arr, 0, 2).should.eql(
      [5, 4, 1, 6, 10, 15, 16, 17, 21]
    )
  })

  it('should build a max heap', () => {
    const arr = [16, 4, 1, 10, 5, 17, 21, 15, 6];
    maxHeapify.build(arr).should.eql(
      [21, 15, 17, 10, 5, 16, 1, 4, 6]
    )
  })
})
