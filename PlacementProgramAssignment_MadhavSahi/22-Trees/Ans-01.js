// Question-1:

// Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

// Example:

// Solution--->

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  convertToDLL() {
    if (this.root === null) {
      return null;
    }

    let previous = null;

    this.convertToDLLUtil(this.root, previous);

    let head = this.root;
    while (head.left !== null) {
      head = head.left;
    }

    return head;
  }

  convertToDLLUtil(node, prev) {
    if (node === null) {
      return prev;
    }

    prev = this.convertToDLLUtil(node.left, prev);

    node.left = prev;
    if (prev !== null) {
      prev.right = node;
    }

    prev = node;

    return this.convertToDLLUtil(node.right, prev);
  }
}

const binaryTree = new BinaryTree();
binaryTree.root = new Node(4);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(5);
binaryTree.root.left.left = new Node(1);
binaryTree.root.left.right = new Node(3);

const headNode = binaryTree.convertToDLL();

let current = headNode;
let dllString = "";
while (current !== null) {
  dllString += current.data + " <-> ";
  current = current.right;
}
dllString += "null";

console.log(dllString);
