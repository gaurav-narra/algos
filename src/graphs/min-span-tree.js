// review code

const traverse = (arr) => {
  let edges = {}
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j< arr[i].length; j++) {
      let k = arr[i][j].i;
      let index = k > j ? `${k}-${i}` : `${i}-${k}`
      edges[index] = arr[i][j].weight
    }
  }

  const edgeKeys = Object.keys(edges).sort((a, b) => {
    return edges[a] - edges[b]
  })

  let verticesSet = []

  for(let i = 0; i < arr.length; i++) {
    let set = new Set()
    set.add(i)
    verticesSet.push(set)
  }

  let resultEdges = []

  for(let i = 0; i < edgeKeys.length; i++) {
    let vertices = edgeKeys[i].split('-')
    if(!partOfSameSet(verticesSet, parseInt(vertices[0]), parseInt(vertices[1]))) {
      resultEdges.push(edgeKeys[i])
      verticesSet = mergeSet(verticesSet, parseInt(vertices[0]), parseInt(vertices[1]))
    }
  }

  let sum = 0;
  resultEdges.forEach((edge) => {
    sum += edges[edge]
  })

  return sum
}

const partOfSameSet = (verticesSet, a, b) => {
  for(let i=0; i<verticesSet.length; i++) {
    if(verticesSet[i].has(a) && verticesSet[i].has(b)) {
      return true
    }
  }
  return false
}

const mergeSet = (verticesSet, a, b) => {
  let aIndex, bIndex;


  for(let i=0; i<verticesSet.length; i++) {
    if(verticesSet[i].has(a)) {
      aIndex = i
      break;
    }
  }

  for(let i=0; i<verticesSet.length; i++) {
    if(verticesSet[i].has(b)) {
      bIndex = i
      break;
    }
  }

  verticesSet[aIndex] = union(verticesSet[aIndex], verticesSet[bIndex])
  verticesSet.splice(bIndex, 1)

  return verticesSet
}

function union(setA, setB) {
  let _union = new Set(setA)
  for (let elem of setB) {
    _union.add(elem)
  }
  return _union
}

module.exports = {
  traverse
}