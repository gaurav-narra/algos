const minMax = require('./min-max');

const getSuccessor = (rootNode, value, successor = null) => {
  // return successor for empty tree
  if(rootNode === null) {
    return successor
  }

  // search for the node in the left subtree
  // when the value is less than the current node value
  if(value < rootNode.value) {
    successor = rootNode
    return getSuccessor(rootNode.left, value, successor)
  }

  if(value > rootNode.value) {
    return getSuccessor(rootNode.right, value, successor)
  }

  // when the value is equal to node vaule

  // when the node has right sub tree
  // min of the right sub tree is the successor
  if(rootNode.right !== null) {
    return minMax.min(rootNode.right)
  }

  // when the right subtree does not exist
  // first parent to the right is the successor
  return successor;
}

module.exports = getSuccessor
