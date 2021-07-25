const minMax = require('./min-max');

/*
  when leaf node
    update parent->(left | right) as null

  when has only one child
    replace the node with the child

  when has both children
    find the successor for the node
    replace the node value with the successor value
*/

// function returns the root node by deleting the node in the tree
const deleteNode = (rootNode, value) => {
  // return null when empty tree
  if(!rootNode) {
    return null
  }

  // find the node
  // search in left subtree if value is less
  if(value < rootNode.value) {
    rootNode.left = deleteNode(rootNode.left, value)
    return rootNode
  }

  // search in right subtree if value is less
  if(value > rootNode.value) {
    rootNode.right = deleteNode(rootNode.right, value)
    return rootNode
  }

  // when the node is found

  // and node is leaf node
  if(!rootNode.left && !rootNode.right) {
    delete rootNode
    return null
  }

  // when the left subtree is empty
  if(!rootNode.left) {
    const tmpNode = rootNode.right
    delete rootNode
    return tmpNode
  }

  // when the right subtree is empty
  if(!rootNode.right) {
    const tmpNode = rootNode.left
    delete rootNode
    return tmpNode
  }

  const successor = minMax.min(rootNode.right);
  rootNode.value = successor.value
  rootNode.right = deleteNode(rootNode.right, successor.value)

  return rootNode
}

module.exports = deleteNode
