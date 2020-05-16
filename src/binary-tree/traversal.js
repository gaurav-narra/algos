const inOrder = (node, arr = []) => {
  if(node == null) {
    return arr
  }

  arr = inOrder(node.left, arr)
  arr.push(node.data)
  arr = inOrder(node.right, arr)
  return arr
}

const preOrder = (node, arr = []) => {
  if(node == null) {
    return arr
  }

  arr.push(node.data)
  arr = preOrder(node.left, arr)
  arr = preOrder(node.right, arr)
  return arr
}

const postOrder = (node, arr = []) => {
  if(node == null) {
    return arr
  }
  arr = postOrder(node.left, arr)
  arr = postOrder(node.right, arr)
  arr.push(node.data)
  return arr
}

const levelOrder = (node) => {
  if(node == null) {
    return []
  }

  let queue = []
  queue.push(node)

  let resp = [];
  while(queue.length > 0) {
    let i = queue.shift()
    if(i.left != null) {
      queue.push(i.left)
    }
    if(i.right != null) {
      queue.push(i.right)
    }
    resp.push(i.data)
  }

  return resp
}

module.exports = {
  inOrder,
  preOrder,
  postOrder,
  levelOrder
}