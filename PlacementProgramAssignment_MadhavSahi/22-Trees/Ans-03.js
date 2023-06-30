// Question-3:

// Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

// Input:

//         6
//      /    \
//     3      5
//   /   \     \
//  2     5     4
//      /   \
//     7     4

// Output:

// There are 4 leaves, hence 4 root to leaf paths -
//   6->3->2
//   6->3->5->7
//   6->3->5->4
//   6->5>4

//Solution--->

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPathsWithoutRecursion(root) {
  if (root === null) {
    return;
  }

  const nodeStack = [];

  const pathStack = [];

  let currentNode = root;

  while (currentNode || nodeStack.length > 0) {
    if (currentNode) {
      nodeStack.push(currentNode);

      currentNode = currentNode.left;
    } else {
      if (
        nodeStack[nodeStack.length - 1].left === null &&
        nodeStack[nodeStack.length - 1].right === null
      ) {
        const path = nodeStack.map((node) => node.data).join("->");
        pathStack.push(path);
      }

      currentNode = nodeStack.pop();

      currentNode = currentNode.right;
    }
  }

  pathStack.forEach((path) => console.log(path));
}

const root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

printRootToLeafPathsWithoutRecursion(root);
