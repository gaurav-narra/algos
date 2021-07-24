const traverse = (arr, inputIndex) => {
  // initialise visited flag per node
  let visited = {}

  // initialise stack and set input node as vistied
  let stack = [inputIndex]

  let orderOfDiscovery = []

  // traverse all nodes until stack size is zero
  while(stack.length > 0) {
    const iteratingNode = stack.pop()

    // when the node is not yet visited
    if(visited[iteratingNode] !== true) {
      orderOfDiscovery.push(iteratingNode)

      // update it as visited
      visited[iteratingNode] = true
      for(ele of arr[iteratingNode]) {
        stack.push(ele)
      }
    }
  }

  return orderOfDiscovery
}

module.exports = {
  traverse
}
