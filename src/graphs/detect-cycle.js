const traverse = (arr, index) => {
  nodes = []
  for(let i = 0; i < arr.length; i++) {
    let node = {
      index: i,
      adj: arr[i],
      initial: null,
      final: null,
      visited: false,
      parent: null
    }
    arr[i] = node
  }

  this.cycle = false
  this.time = 0

  const traverseNode = (arr, index, parentMap = {}) => {
    this.time += 1
    arr[index].initial = this.time
    arr[index].visited = true

    let adjArr = arr[index].adj;
    for(let i = 0; i < adjArr.length; i++) {
      let adjNode = arr[adjArr[i]]
      if(!adjNode.visited) {
        parentMap[adjNode.index] = index
        adjNode.parent = index

        traverseNode(arr, adjNode.index, parentMap)
      } else {
        if(parentMap[adjNode.index]) {
          this.cycle = true
        }
      }

    }

    this.time += 1
    arr[index].final = this.time

    return
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].visited == false) {
      traverseNode(arr, i)
    }
  }

  let resp = arr.map((node) => {
    delete node.visited
    delete node.adj

    return node
  });

  return {
    nodes: resp,
    cycle: this.cycle
  }
}

module.exports = {
  traverse
}