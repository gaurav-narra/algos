const traverse = (arr, index) => {
  // initialise visited flag for each index
  let visited = {}

  // initialise a stack
  let stack = [index]

  // let parentMap = {}

  while(stack.length > 0) {
    // pop the stack for the last node
    const iteratingNode = stack.pop();

    if(visited[iteratingNode] !== true) {
      visited[iteratingNode] = true
      // parentMap[iteratingNode] = parent
      for(vertex of arr[iteratingNode]) {
        stack.push(vertex)
      }
    } else {
      // already visited
      // can be cycle


    }


    parent = iteratingNode
  }

}

module.exports = {
  traverse
}