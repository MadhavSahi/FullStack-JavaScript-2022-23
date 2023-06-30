// Question-1

// You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

// Input:

//         10

//        /   \

//      2      7

//    /   \

//  8      4

// Output:

//         8

//       /   \

//     4     10

//   /   \

// 2      7

// Solution--->

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(node, values) {
  if (node === null) {
    return;
  }

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
}

function convertBinaryTreeToBST(root) {
  if (root === null) {
    return null;
  }

  const values = [];
  inorderTraversal(root, values);

  function constructBST(values, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(values[mid]);

    node.left = constructBST(values, start, mid - 1);
    node.right = constructBST(values, mid + 1, end);

    return node;
  }

  const n = values.length;
  return constructBST(values, 0, n - 1);
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

const bstRoot = convertBinaryTreeToBST(root);

function printInorder(node) {
  if (node === null) {
    return;
  }

  printInorder(node.left);
  console.log(node.val);
  printInorder(node.right);
}

printInorder(bstRoot);
