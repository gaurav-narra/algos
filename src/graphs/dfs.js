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

    for(adjVertex of arr[vertex.index]) {
      if(!visited[adjVertex]) {
        stack.push({index: adjVertex, parent: vertex.index})
      }
    }
  }

  return visited;
}

module.exports = {
  traverse
}
