const traverse = (arr, index) => {
  let nodes = []
  for(let i = 0; i < arr.length; i++) {
    let node = {
      color: 'white',
      distance: 0,
      index: i
    }

    nodes.push(node)
  }

  nodes[index].color = 'grey'
  let queue = []

  queue.push(index)

  while(queue.length != 0) {
    parentIndex = queue.shift()

    for(let i=0; i < arr[parentIndex].length; i ++ ) {
      let adjIndex = arr[parentIndex][i]

      if(nodes[adjIndex].color === 'white') {
        nodes[adjIndex].color = 'grey'
        nodes[adjIndex].parent = parentIndex
        nodes[adjIndex].distance = nodes[parentIndex].distance + 1

        queue.push(adjIndex)
      }
    }

    nodes[parentIndex].color = 'black';
  }

  return nodes.map((node) => {
    delete node.color
    return node
  });
}

module.exports = {
  traverse
}
