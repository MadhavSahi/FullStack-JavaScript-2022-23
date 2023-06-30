// Question-1:

// Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

// 1. ‘l’ denotes the leaf
// 2. ‘n’ denotes internal node

// The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

// **Examples :**

// Input  : nlnll
// Output : 2
// Explanation :

// !https://media.geeksforgeeks.org/wp-content/uploads/btree1.png

// Input  : nlnnlll
// Output : 3

// Solution--->

function calculateTreeDepth(preorder) {
  let treeDepth = 0;
  let stack = [];

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === "n") {
      stack.push("n");
    } else if (preorder[i] === "l") {
      treeDepth = Math.max(treeDepth, stack.length);
    } else {
      throw new Error("Invalid input");
    }
  }
  return treeDepth;
}

console.log(calculateTreeDepth("nlnll"));
// Output: 2

console.log(calculateTreeDepth("nlnnlll"));
// Output: 3
