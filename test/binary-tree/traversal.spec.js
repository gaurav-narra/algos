const traversal = require('../../src/binary-tree/traversal');
const { Node } = require('../../src/binary-tree/node');

describe('binary tree traversal', () => {
  let node = new Node(10);
  node.left = new Node(5);
  node.right = new Node(15);
  node.left.left = new Node(2);
  node.left.right = new Node(6);
  node.right.left = new Node(12);
  node.right.right = new Node(20);

  context('in order', () => {
    it('should do in order traversal', () => {
      let resp = traversal.inOrder(node);
      resp.should.eql([2,5,6,10,12,15,20])
    })
  })

  context('pre order', () => {
    it('should do pre order traversal', () => {
      let resp = traversal.preOrder(node);
      resp.should.eql([10,5,2,6,15,12,20])
    })
  })

  context.only('post order', () => {
    it('should do post order traversal', () => {
      let resp = traversal.postOrder(node);
      resp.should.eql([2,6,5,12,20,15,10])
    })
  })

  context.only('level order', () => {
    it('should do level order traversal', () => {
      let resp = traversal.levelOrder(node);
      resp.should.eql([10,5,15,2,6,12,20])
    })
  })
})