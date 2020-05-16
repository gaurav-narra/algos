const bst = (tree, value) => {
  let i = tree.root
  while(i != null) {
    if(i.data == value) {
      return i
    }
    if(value < i.data) {
      i = i.left
    } else {
      i = i.right
    }
  }

  return null
}

module.exports = {
  bst
}