const heapSort = require('../../src/heaps/heap-sort');

describe('heap sort', () => {
  it('should sort the array', () => {
    const arr = [16, 4, 1, 10, 5, 17, 21, 15, 6];
    heapSort.sort(arr).should.eql([1, 4, 5, 6, 10, 15, 16, 17, 21]);
  })
})
