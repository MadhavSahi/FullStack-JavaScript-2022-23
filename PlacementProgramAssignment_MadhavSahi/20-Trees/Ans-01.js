// Question-1

// Given a binary tree, your task is to find subtree with maximum sum in tree.

// Examples:

// Input1 :

//        1

//      /   \

//    2      3

//   / \    / \

// 4   5  6   7

// Output1 : 28

// As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

// Input2 :

//        1

//      /    \

//   -2      3

//   / \    /  \

// 4   5  -6   2

// Output2 : 7

// Subtree with largest sum is :

//  -2

//  / \

// 4   5

// Also, entire tree sum is also 7.

//Solution-->

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class SubtreeResult {
  constructor(sum, maxSum) {
    this.sum = sum;
    this.maxSum = maxSum;
  }
}

function findMaximumSubtreeSum(root) {
  if (root === null) {
    return new SubtreeResult(0, 0);
  }

  const leftSubtreeResult = findMaximumSubtreeSum(root.left);
  const rightSubtreeResult = findMaximumSubtreeSum(root.right);

  const subtreeSum = root.val + leftSubtreeResult.sum + rightSubtreeResult.sum;

  const maxSum = Math.max(
    subtreeSum,
    leftSubtreeResult.maxSum,
    rightSubtreeResult.maxSum
  );

  return new SubtreeResult(subtreeSum, maxSum);
}

const root = new TreeNode(1);
root.left = new TreeNode(-2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(-6);
root.right.right = new TreeNode(2);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

const result = findMaximumSubtreeSum(root);
console.log(result.maxSum);
// Output: 7

const result2 = findMaximumSubtreeSum(root);
console.log(result2.maxSum);
// Output: 28
