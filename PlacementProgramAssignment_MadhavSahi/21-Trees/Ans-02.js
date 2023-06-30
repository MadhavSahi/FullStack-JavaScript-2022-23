// Question-2:

// Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

// Example:

// Consider the following BST:

// ![1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2455039-7e12-43fc-a7d3-b5be24931c1c/1.png)

// **Input-1:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 6

// node-2 = 14

// **Output-1:**

// The distance between the two keys = 4

// **Input-2:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 3

// node-2 = 4

// **Output-2:**

// The distance between the two keys = 2

// Solution--->
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function calculateNodeDistance(root, node) {
  if (root === null) {
    return 0;
  }

  if (node < root.val) {
    return 1 + calculateNodeDistance(root.left, node);
  }

  if (node > root.val) {
    return 1 + calculateNodeDistance(root.right, node);
  }

  return 0;
}

function findDistanceBetweenNodes(root, node1, node2) {
  if (root === null) {
    return 0;
  }

  if (node1 < root.val && node2 < root.val) {
    return findDistanceBetweenNodes(root.left, node1, node2);
  }

  if (node1 > root.val && node2 > root.val) {
    return findDistanceBetweenNodes(root.right, node1, node2);
  }

  if (
    (node1 < root.val && node2 > root.val) ||
    (node1 > root.val && node2 < root.val)
  ) {
    return (
      calculateNodeDistance(root, node1) + calculateNodeDistance(root, node2)
    );
  }

  return 0;
}

const values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
const root = constructBST(values);

const node1 = 6;
const node2 = 14;
const distance = findDistanceBetweenNodes(root, node1, node2);
console.log("The distance between the two keys:", distance);

function constructBST(values) {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values[0]);

  for (let i = 1; i < values.length; i++) {
    insertNode(root, values[i]);
  }

  return root;
}

function insertNode(root, val) {
  if (val < root.val) {
    if (root.left === null) {
      root.left = new TreeNode(val);
    } else {
      insertNode(root.left, val);
    }
  } else {
    if (root.right === null) {
      root.right = new TreeNode(val);
    } else {
      insertNode(root.right, val);
    }
  }
}
