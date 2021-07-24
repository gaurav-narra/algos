const minMax = require('./min-max');

// give a roote node and a value to delete.
// delete the node if present in the tree

// will return the new root node and the caller should update the reference
const deleteNode = (rootNode, value) => {
  // when the tree is empty, return
  if(rootNode === null) {
    return null
  }

  // iterate to find the value in the tree
  // replace the subtree with the deleted subtree
  if(value > rootNode.value) {
    rootNode.right = deleteNode(rootNode.right, value)
    return rootNode
  }

  if(value < rootNode.value) {
    rootNode.left = deleteNode(rootNode.left, value)
    return rootNode
  }

  // when found
  // and its leaf node, then return null and caller to update the reference
  if(rootNode.left === null && rootNode.right === null) {
    delete rootNode
    return null
  }

  // when left subtree is not present and has right subtree
  if(rootNode.left === null) {
    const tempNode = rootNode.right;
    delete rootNode
    return tempNode
  }

  // when right subtree is not present and left is present
  if(rootNode.right === null) {
    const tempNode = rootNode.left
    delete rootNode
    return tempNode
  }

  // when both left and right subtree are present

  // find the predecessor or the successor
  // replace the root node value with it
  // delete the predecessor from the left subtree or if successor from the right subtree

  // property of predecessor or successor is that it should be missing one child
  // because if we have right child for predecessor
  // that should be greater than it and that should be predecessor
  // similarly for successor, if it has the left child
  // that would the successor
  const predecessor = minMax.max(rootNode.left)
  rootNode.value = predecessor.value
  rootNode.left = deleteNode(rootNode.left, predecessor.value)
  return rootNode
}

module.exports = deleteNode