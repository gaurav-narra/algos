const { Node } = require('./node');

const bst = (tree, value) => {
  let node = new Node(value)
  let i = tree.root;
  let p = null;
  while(i) {
    p = i
    if(value <= i.data) {
      i = i.left
    } else {
      i = i.right
    }
  }

  if(p == null) {
    tree.root = node
    return tree
  }

  if(value <= p.data) {
    p.left = node
    node.p = p
  } else {
    p.right = node
    node.p = p
  }

  return tree;
}

module.exports = {
  bst
}
