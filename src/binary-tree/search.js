const bst = (node, value) => {
  // when the node is not found, return null
  if(node === null) {
    return null
  }

  // when the node is found
  // return the node
  if(value === node.value) {
    return node
  }

  // when the value is less than the current node value
  // iterate over the left subtree
  if(value < node.value) {
    return bst(node.left, value)
  // when the value is greater than the current node value
  // iterate over the right subtree
  } else {
    return bst(node.right, value)
  }
}

module.exports = {
  bst
}