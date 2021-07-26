const traverse = (arr, index, visited = {}) => {
  // initialise a stack
  let stack = []
  stack.push({index, parent: null});

  // keep track of visited verices
  // let visited = {}

  while(stack.length > 0) {
    const vertex = stack.pop();

    // if not yet visited, mark the parent for the vertex
    if(!visited[vertex.index]) {
      visited[vertex.index] = {
        parent: vertex.parent
      }
    }

    // iterate over each adj vertex
    for(adjIndex of arr[vertex.index]) {
      // push into the stack if not yet visited
      if(!visited[adjIndex]) {
        stack.push({index: adjIndex, parent: vertex.index})
      } else if (vertex.parent !== adjIndex) {
        // when the adj index is visited
        // check if vertex parent is adj index
        // if its not return cycle is present
        return true
      }
    }
  }

  return false
}

module.exports = {
  traverse
}
