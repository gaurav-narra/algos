const search = (rootNode, value) => {
  // terminate when the tree is empty
  if(rootNode === null) {
    return null
  }

  // when value is equal to root node return true
  if(rootNode.value === value) {
    return rootNode
  }

  // when value is less than root node, search in left sub tree
  if(value < rootNode.value) {
    return search(rootNode.left, value)
  }

  // when value is greater than root node, search in right sub tree
  if(value > rootNode.value) {
    return search(rootNode.right, value)
  }
}

module.exports = search