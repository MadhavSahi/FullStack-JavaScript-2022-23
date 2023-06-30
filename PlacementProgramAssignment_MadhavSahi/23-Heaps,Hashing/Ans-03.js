// Question-3:

// Given a Binary Tree, print the Right view of it.

// The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.

// **Examples:**

// **Input:**

//          1

//       /     \

//    2         3

// /   \       /  \

// 4     5   6    7

//              \

//                8

// **Output**:

// Right view of the tree is 1 3 7 8

// **Input:**

//          1

//        /

//     8

//   /

// 7

// **Output**:

// Right view of the tree is 1 8 7

//Solution--->

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (!root) {
    return;
  }

  let queue = [root];
  let levelSize = 1;

  while (queue.length > 0) {
    let count = 0;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (i === levelSize - 1) {
        console.log(node.data);
      }

      if (node.left) {
        queue.push(node.left);
        count++;
      }

      if (node.right) {
        queue.push(node.right);
        count++;
      }
    }

    levelSize = count;
  }
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);
root1.right.right.right = new TreeNode(8);

console.log("Right view of Binary Tree 1:");
printRightView(root1);

let root2 = new TreeNode(1);
root2.left = new TreeNode(8);
root2.left.left = new TreeNode(7);

console.log("\nRight view of Binary Tree 2:");
printRightView(root2);
