const Node = require('./node');

const insert = (rootNode, value) => {
  // when empty tree
  if(!rootNode) {
    return new Node(value);
  }

  // when value greater than the root node
  if(value > rootNode.value) {
    // insert when the right subtree is empty
    if(rootNode.right === null) {
      rootNode.right = new Node(value)
      return rootNode
    }
    // try to insert in the right subtree
    insert(rootNode.right, value)
  }

  // when root value is less than the root node
  if(value < rootNode.value) {
    // when the left subtree is empty
    if(rootNode.left === null) {
      rootNode.left = new Node(value)
      return rootNode
    }

    // try to insert into the left sub tree
    insert(rootNode.left, value)
  }

  return rootNode
}

module.exports = insert
