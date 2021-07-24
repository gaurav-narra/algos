// print in the order of left current right
const inOrder = (node, arr = []) => {
  // when tree is empty return empty array
  if(node === null) {
    return arr
  }

  // go to the left most node
  if(node.left !== null) {
    arr = inOrder(node.left, arr)
  }

  // print the current node value
  // start from left, then the currentm then right
  arr.push(node.value)

  // go to the right node
  if(node.right !== null) {
    arr = inOrder(node.right, arr)
  }

  return arr
}

// mid left right
const preOrder = (node, arr = []) => {
  // for empty tree
  // terminate here
  if(node === null) {
    return arr
  }

  // print the node first
  arr.push(node.value)

  // go to the left node next
  if(node.left !== null) {
    arr = preOrder(node.left, arr)
  }

  // finally the right node
  if(node.right !== null) {
    arr = preOrder(node.right, arr)
  }

  return arr
}

// left right mid
const postOrder = (node, arr = []) => {
  // terminate when current node is null
  if(node === null) {
    return arr
  }

  if(node.left !== null) {
    arr = postOrder(node.left, arr)
  }

  if(node.right !== null) {
    arr = postOrder(node.right, arr)
  }

  arr.push(node.value)

  return arr
}

const levelOrder = (node) => {
  // terminate if the tree is empty
  if(node === null) {
    return []
  }

  // initialise a queue with given root node
  let queue = []
  queue.push(node)

  // initialise a result array
  let result = []

  while(queue.length > 0) {
    // dequeue
    const iteratingNode = queue.shift()

    // push the dequeued node into result array
    result.push(iteratingNode.value)

    // enqueue nodes children in order into the queue
    if(iteratingNode.left !== null) {
      queue.push(iteratingNode.left)
    }

    if(iteratingNode.left !== null) {
      queue.push(iteratingNode.right)
    }
  }

  return result
}

module.exports = {
  inOrder,
  preOrder,
  postOrder,
  levelOrder
}