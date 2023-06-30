// Question-4:

// Write a program to connect nodes at the same level.

// Input:

//         1

//       /   \

//     2      3

//   /   \   /   \

// 4     5 6    7

// Output:

// 1 → -1

// 2 → 3

// 3 → -1

// 4 → 5

// 5 → 6

// 6 → 7

// 7 → -1

// Solution--->

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function connectNodesAtSameLevel(root) {
  if (root === null) {
    return;
  }

  let levelStart = root;

  while (levelStart !== null) {
    let currentNode = levelStart;
    let dummyNode = new TreeNode(-1);
    let prev = dummyNode;

    while (currentNode !== null) {
      if (currentNode.left !== null) {
        prev.next = currentNode.left;
        prev = currentNode.left;
      }

      if (currentNode.right !== null) {
        prev.next = currentNode.right;
        prev = currentNode.right;
      }

      currentNode = currentNode.next;
    }

    levelStart = dummyNode.next;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connectNodesAtSameLevel(root);

function printConnections(root) {
  let currentNode = root;
  while (currentNode !== null) {
    let levelStart = currentNode;
    while (levelStart !== null) {
      const nextValue = levelStart.next !== null ? levelStart.next.value : -1;
      console.log(levelStart.value + " → " + nextValue);
      levelStart = levelStart.next;
    }
    currentNode = currentNode.left;
  }
}

printConnections(root);
