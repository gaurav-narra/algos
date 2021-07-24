const { Node } = require('./node');

const bst = (node, value) => {
  // inserting root node
  if(node === null) {
    return new Node(value)
  }

  // when value is less than the node value
  // then need to insert in the left sub tree
  if(value < node.value) {
    // when the left subtree is empty
    // add the node
    if(node.left === null) {
      node.left = new Node(value)
      return node
    }

    // when left subtree has value
    // it should iterate over the left subtree, until a spot is found
    bst(node.left, value)
  }

  // when the value is greater than the node value
  // then it should be inserted in right subtree
  if(value > node.value) {
    // when the right subtree is empty
    // it should insert in the right of the node
    if(node.right === null) {
      node.right = new Node(value)
      return node
    }

    // if right subtree is present
    // iterate over the right subtree
    bst(node.right, value)
  }

  // ultimately return the root node of the tree.
  return node
}

module.exports = {
  bst
}
