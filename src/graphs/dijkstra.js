const traverse = (arr) => {
  let nodes = [];

  for(let i=0; i < arr.length; i++) {
    let node = {
      index: i,
      color: 'white',
      dist: null,
      adj: arr[i],
      parent: null
    }
    nodes.push(node)
  }

  nodes[0].dist = 0

  let sum = 0
  while(true) {
    let node = extractMin(nodes)
    if(!node) {
      break
    }

    for(let i = 0; i < node.adj.length; i++) {      
      let adj = nodes[node.adj[i].i]
      if((adj.color == 'white') && (adj.dist == null || (adj.dist >= node.dist + node.adj[i].weight))) {
        adj.dist = node.dist + node.adj[i].weight
        adj.parent = node.index
      }
    }

    sum += node.dist
    node.color = 'black'
  }

  return nodes.map((node) => {
    delete node.color
    delete node.adj
    delete node.index
    return node
  })
}

const extractMin = (nodes) => {
  let min;
  let minIndex;
  for(let i = 0; i < nodes.length; i++) {
    let node = nodes[i]
    if((node.color != 'black') && ((min == null) || (node.dist != null && node.dist <= min))) {
      minIndex = i
      min = node.dist
    }
  }

  return nodes[minIndex]
}

module.exports = {
  traverse
}
