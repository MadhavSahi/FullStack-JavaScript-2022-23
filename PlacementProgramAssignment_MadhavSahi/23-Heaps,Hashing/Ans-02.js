// Question-2:

// Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

// **Examples:**

// ***Input:***

//             4

//           /   \

//         5     2

//              /   \

//             3     1

//            /  \

//           6    7

// ***Output:** 4 5 3 6*

// **Explanation:**

// !https://media.geeksforgeeks.org/wp-content/cdn-uploads/left-view.png

// ***Input:***

//                     1

//                   /   \

//                 2       3

//                  \

//                    4

//                      \

//                         5

//                            \

//                              6

// **Output:** 1 2 4 5 6

// Solution--->

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printLeftView(root) {
  if (!root) {
    return;
  }

  let queue = [root];
  let levelSize = 1;

  while (queue.length > 0) {
    let count = 0;
    let isFirstNode = true;

    while (levelSize > 0) {
      let node = queue.shift();

      if (isFirstNode) {
        console.log(node.data);
        isFirstNode = false;
      }

      if (node.left) {
        queue.push(node.left);
        count++;
      }

      if (node.right) {
        queue.push(node.right);
        count++;
      }

      levelSize--;
    }

    levelSize = count;
  }
}

let root1 = new TreeNode(4);
root1.left = new TreeNode(5);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);
root1.right.right = new TreeNode(1);
root1.right.left.left = new TreeNode(6);
root1.right.left.right = new TreeNode(7);

console.log("Left view of Binary Tree 1:");
printLeftView(root1);

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.left.right.right = new TreeNode(5);
root2.left.right.right.right = new TreeNode(6);

console.log("\nLeft view of Binary Tree 2:");
printLeftView(root2);
