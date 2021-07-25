const minMax = require('./min-max');
/*
  if the node has a right subtree
    - min in the right subtree is the successor

  else
    - one of its ancestors could be a successor.
      node should be in the ancestors left subtree
*/
const successor = (rootNode, value, successorNode = null) => {
  // when the tree is empty then return null
  if(rootNode === null) {
    return null
  }

  // search for the node
  // root node value is greater than the node we are searching for
  if(value < rootNode.value) {
    // ancestor can be the successor, since its value is greater than the value
    successorNode = rootNode
    return successor(rootNode.left, value, successorNode)
  }

  // root node values is less than the value we are searching for
  if(value > rootNode.value) {
    return successor(rootNode.right, value, successorNode)
  }

  // found the node with the value in the tree
  if(rootNode.right) {
    return minMax.min(rootNode.right);
  }

  return successorNode;
}

module.exports = successor