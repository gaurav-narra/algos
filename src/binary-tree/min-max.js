const min = (rootNode) => {
  // when empty tree return null
  if(rootNode === null) {
    return null
  }

  // get the left most node
  // return min when left subtree is empry
  if(rootNode.left === null) {
    return rootNode
  } else {
    return min(rootNode.left)
  }
}

const max = (rootNode) => {
  // when the tree is empty, return null
  if(rootNode === null) {
    return null
  }

  // get the right most node
  // when the right subtree is empty, return max
  if(rootNode.right === null) {
    return rootNode
  } else {
    return max(rootNode.right);
  }
}

module.exports = {
  min,
  max
}