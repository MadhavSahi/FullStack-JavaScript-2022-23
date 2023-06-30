// Question-2

// Construct the BST (Binary Search Tree) from its given level order traversal.

// Example:

// Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output: BST:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

//  Solution-->

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructBSTFromLevelOrder(levelOrder) {
  if (levelOrder.length === 0) {
    return null;
  }

  const root = new TreeNode(levelOrder[0]);
  const queue = [root];
  let i = 1;

  while (i < levelOrder.length) {
    const currentNode = queue.shift();

    const leftVal = levelOrder[i];
    if (leftVal !== null) {
      const leftNode = new TreeNode(leftVal);
      currentNode.left = leftNode;
      queue.push(leftNode);
    }
    i++;

    if (i >= levelOrder.length) {
      break;
    }

    const rightVal = levelOrder[i];
    if (rightVal !== null) {
      const rightNode = new TreeNode(rightVal);
      currentNode.right = rightNode;
      queue.push(rightNode);
    }
    i++;
  }

  return root;
}

const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBSTFromLevelOrder(levelOrder);

function printBSTPreOrder(root) {
  if (root === null) {
    return;
  }

  console.log(root.val);
  printBSTPreOrder(root.left);
  printBSTPreOrder(root.right);
}

printBSTPreOrder(root);
// 7
// 4
// 3
// 1
// 6
// 5
// 12
// 8
// 10
