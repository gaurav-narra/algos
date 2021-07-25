// left node, mid node and right node
// go to the left most node
const inOrder = (rootNode, arr = []) => {
  // when empty tree, return null
  if(rootNode === null) {
    return arr
  }

  // go to the left most node recursively
  if(rootNode.left) {
    arr = inOrder(rootNode.left, arr)
  }

  // print the current node
  arr.push(rootNode.value)

  // print the right node
  if(rootNode.right) {
    arr = inOrder(rootNode.right, arr)
  }

  return arr
}

// mid - left - right
// print the node then traverse left and traverse right
const preOrder = (rootNode, arr = []) => {
  // when the tree is empty, return null
  if(rootNode === null) {
    return arr
  }

  // print the current node first
  arr.push(rootNode.value);

  // go to the left subtree
  if(rootNode.left) {
    arr = preOrder(rootNode.left, arr);
  }

  // go to the right subtree then
  if(rootNode.right) {
    arr = preOrder(rootNode.right, arr);
  }

  return arr
}

// left - right - mid
// go ot the left most node - then to the right node - then the mid
const postOrder = (rootNode, arr = []) => {
 // when the tree is empty, return null
  if(rootNode === null) {
    return arr
  }

  // go to the left subtree
  if(rootNode.left) {
    arr = postOrder(rootNode.left, arr);
  }

  // go to the right subtree then
  if(rootNode.right) {
    arr = postOrder(rootNode.right, arr);
  }

  // print the current node first
  arr.push(rootNode.value);

  return arr
}

// print the nodes at each level
// maintain a queue and add each level's children in the queue in order
// BFS from the root node
const levelOrder = (rootNode) => {
  // when empty tree, return empty array
  if(!rootNode) {
    return []
  }

  let queue = []
  // init the queue with root node
  queue.push(rootNode)

  // initialise result array
  let result = []

  // iterate until the queue is empty
  while(queue.length > 0) {
    const queueLength = queue.length;
    // iterate unitil the initial queue length is zero
    for(let i = 0; i < queueLength; i++) {
      // dequeue the node
      const node = queue.shift()

      // print the value
      result.push(node.value)

      // enqueue to the left node
      if(node.left) {
        queue.push(node.left)
      }

      // enqueue to the right node
      if(node.right) {
        queue.push(node.right)
      }
    }
  }
  return result;
}

module.exports = {
  inOrder,
  preOrder,
  postOrder,
  levelOrder
}