// Question-4:

// Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

// **Examples:**

// **Input:**

//              20

//            /     \

//         8         22

//     /      \         \

// 5         3        25

//         /    \

//    10       14

// **Output:** 5, 10, 3, 14, 25.

// **Input:**

//              20

//            /     \

//         8         22

//     /      \      /   \

//  5         3    4     25

//          /    \

//      10       14

// **Output:**

// 5 10 4 14 25.

// **Explanation:**

// If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

// **3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

// Solution--->

class TreeNode {
  constructor(data) {
    this.data = data;
    this.horizontalDistance = 0;
    this.left = null;
    this.right = null;
  }
}

function printBottomView(root) {
  if (!root) {
    return;
  }

  let queue = [root];
  let map = new Map();

  while (queue.length > 0) {
    let node = queue.shift();
    let horizontalDistance = node.horizontalDistance;

    map.set(horizontalDistance, node.data);

    if (node.left) {
      node.left.horizontalDistance = horizontalDistance - 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.horizontalDistance = horizontalDistance + 1;
      queue.push(node.right);
    }
  }

  for (let [_, value] of map) {
    console.log(value);
  }
}

let root1 = new TreeNode(20);
root1.left = new TreeNode(8);
root1.right = new TreeNode(22);
root1.left.left = new TreeNode(5);
root1.left.right = new TreeNode(3);
root1.right.right = new TreeNode(25);
root1.left.right.left = new TreeNode(10);
root1.left.right.right = new TreeNode(14);

console.log("Bottom view of Binary Tree 1:");
printBottomView(root1);

let root2 = new TreeNode(20);
root2.left = new TreeNode(8);
root2.right = new TreeNode(22);
root2.left.left = new TreeNode(5);
root2.left.right = new TreeNode(3);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(25);
root2.left.right.left = new TreeNode(10);
root2.left.right.right = new TreeNode(14);

console.log("\nBottom view of Binary Tree 2:");
printBottomView(root2);
