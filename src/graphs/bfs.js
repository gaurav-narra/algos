const traverse = (arr, index) => {
  // to keep track of which vertieces are visited
  let visited = {}

  // response object with the adjacent node and distance from index
  let distanceObject = []

  // initialise the queue and mark input index as visited
  let queue = [index]
  visited[index] = true
  let distance = 0
  distanceObject.push({
    distance: 0,
    index: index
  })

  while(queue.length > 0) {
    //dequeue
    const vertex = queue.shift()

    // increase distance by one
    distance += 1
    // for all the ajacent vertices
    // mark distance and parent
    for(adjacentVertex of arr[vertex]) {

      // if not yet visited
      if(visited[adjacentVertex] !== true) {
        // mark as visited
        visited[adjacentVertex] = true

        // add the parent and distance from input index
        distanceObject.push({
          distance: distance,
          index: adjacentVertex,
          parent: vertex
        })

        // enqueue into the queue for getting its adj vertices
        queue.push(adjacentVertex)
      }
    }
  }

  return distanceObject.sort((a, b) => {
    return a.index - b.index
  })
}

module.exports = {
  traverse
}
