let nodes;
let time;

const traverse = (arr, index) => {
  nodes = []
  time = 0

  for(let i = 0; i < arr.length; i++) {
    let node = {
      color: 'white',
      initial: null,
      final: null,
      parent: null,
      index: i,
      adj: arr[i]
    }

    nodes.push(node)
  }

  for(let i = 0; i < nodes.length; i++) {
    if(nodes[i].color == 'white') {
      traverseNode(i)
    }    
  }

  return nodes.map((node) => {
    delete node.color
    delete node.adj

    return node
  });
}

const traverseNode = (index) => {
  time += 1
  nodes[index].initial = time
  nodes[index].color = 'grey'
  const adj = nodes[index].adj

  for(let i=0; i < adj.length; i++) {
    if(nodes[adj[i]].color == 'white') {
      nodes[adj[i]].parent = index
      traverseNode(adj[i])
    }
  }

  time += 1
  nodes[index].final = time
  nodes[index].color = 'black'
  return
}

module.exports = {
  traverse
}
