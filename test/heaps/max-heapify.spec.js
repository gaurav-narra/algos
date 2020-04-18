const maxHeapify = require('../../heaps/max-heapify');

describe('max heapify', () => {
  it('should max heapify single node', () => {
    const arr = [16, 4, 1, 10, 5, 17, 21, 15, 6];
    maxHeapify.heapifyNode(arr, 1).should.eql(
      [16, 10, 1, 15, 5, 17, 21, 4, 6]
    )
  })

  it('should max heapify the array', () => {
    const arr = [16, 4, 1, 10, 5, 17, 21, 15, 6];
    maxHeapify.heapify(arr).should.eql(
      [21, 15, 17, 10, 5, 16, 1, 4, 6]
    )
  })
})
