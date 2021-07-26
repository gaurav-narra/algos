/*
  complexity of O(V) + O(E)

  while loop takes all the unique number of vertices
  for each vetex, we loop over adjacet edges
  dequeue happens O(V) and overall iterating over edges takes O(E)
*/
const traverse = (arr, index) => {
  let queue = []
  // init a queue with the given vertex
  queue.push(index)

  // distance from root
  let distance = 0

  // object to manitain visited vertices
  let visited = {}
  visited[index] = {
    parent: null,
    distance
  }

  // iterate until the queue is empty
  while(queue.length > 0) {
    const iteratingIndex = queue.shift()
    distance += 1
    // iterate over ajacent vertices
    for(vertex of arr[iteratingIndex]) {
      // when the vetex is not yet visited, enque and mark as visited
      if(!visited[vertex]) {
        // mark as visited
        visited[vertex] = {
          parent: iteratingIndex,
          distance
        }
        // enqueue the vertex
        queue.push(vertex)
      }
    }
  }

  return visited
}

module.exports = {
  traverse
}
