const minMax = require('./min-max');

const bst = (tree, node) => {
  if(node == null) {
    return
  }
  if(node.right == null && node.left == null) {
    updateParent(tree, node, null)
    return tree
  }
  if(node.right == null) {
    updateParent(tree, node, node.left)
    return tree
  }

  if(node.left == null) {
    updateParent(tree, node, node.right)
    return tree
  }

  let newNode = minMax.min(node.right);
  if(node.right != newNode) {
    updateParent(tree, newNode, newNode.right)
    newNode.right = node.right
    node.right.p = newNode
  }

  updateParent(tree, node, newNode)
  newNode.left = node.left
  node.left.p = newNode
  delete node
}

const updateParent = (tree, node, newNode) => {
  if(node.p == null) {
    tree.root = newNode
  } else {
    if(node.p.left == node) {
      node.p.left = newNode
    } else if(node.p.right == node) {
      node.p.right = newNode
    }
  }

  if(newNode != null) {
    newNode.p = node.p    
  }
  
}

module.exports = {
  bst
}
