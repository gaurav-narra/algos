const minMax = require('./min-max');

const bst = (node) => {
  if(node == null) {
    return
  }
  if(node.right != null) {
    return minMax.min(node.right);
  }

  while(node != null) {
    if((node.p) && (node == node.p.left)) {
      return node.p
    } else {
      node = node.p
    }
  }
  return null
}

module.exports = {
  bst
}
