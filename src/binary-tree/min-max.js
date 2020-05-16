const min = (node) => {
  let i = node
  if(i == null) {
    return
  }
  while((i.left != null)) {
    i = i.left
  }

  return i
}

const max = (node) => {
  let i = node
  if(i == null) {
    return
  }
  while((i.right != null)) {
    i = i.right
  }

  return i
}

module.exports = {
  min,
  max
}