const min = (node) => {
  // when empty tree is passed
  // return null as min
  if(node === null) {
    return null
  }

  // find the left most node as min
  if(node.left !== null) {
    return min(node.left)
  }

  //return min when the node's left does not exist
  return node
}


/*
  Prove: right most node is the max
  Solution:

  By mathematical inducation
  true for 1 node
  true for n nodes

  then adding the n+1 th node, which is maximum of the values
  it will be inserted in the right most end of bst
  so the right most node should be the max
*/
const max = (node) => {
  // when an empty tree is passed
  // return null
  if(node === null) {
    return null
  }

  // max of the bst is the right most node
  // iterate until we reach the right most node of bst
  if(node.right !== null) {
    return max(node.right);
  }

  // return max when the right most node is reached
  return node
}

module.exports = {
  min,
  max
}