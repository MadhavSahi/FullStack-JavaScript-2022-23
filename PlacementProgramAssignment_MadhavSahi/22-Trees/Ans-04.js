// Question-4:

// Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

// **Examples:**

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 2 4 5 3
//         Postorder -> 4 5 2 3 1
// Output :

// Yes
// Explanation :

// All of the above three traversals are of
// the same tree

//                            1
//                          /   \
//                         2     3
//                       /   \
//                      4     5

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 5 4 2 3
//         Postorder -> 4 1 2 3 5
// Output :

// No

//Solution--->

function areTraversalsSameTree(pre, ino, post) {
  if (
    pre.length === 0 ||
    ino.length === 0 ||
    post.length === 0 ||
    pre.length !== ino.length ||
    ino.length !== post.length
  ) {
    return false;
  }

  if (pre.length === 1) {
    return pre[0] === ino[0] && ino[0] === post[0] && post[0] === pre[0];
  }

  const root = pre[0];

  const rootIndex = ino.indexOf(root);

  const leftIno = ino.slice(0, rootIndex);
  const rightIno = ino.slice(rootIndex + 1);

  const leftPre = pre.slice(1, 1 + leftIno.length);
  const rightPre = pre.slice(1 + leftIno.length);
  const leftPost = post.slice(0, leftIno.length);
  const rightPost = post.slice(leftIno.length, post.length - 1);

  const isLeftSame = areTraversalsSameTree(leftPre, leftIno, leftPost);
  const isRightSame = areTraversalsSameTree(rightPre, rightIno, rightPost);

  return isLeftSame && isRightSame;
}

const inorder1 = [4, 2, 5, 1, 3];
const preorder1 = [1, 2, 4, 5, 3];
const postorder1 = [4, 5, 2, 3, 1];
console.log(areTraversalsSameTree(preorder1, inorder1, postorder1));
// Output: true

const inorder2 = [4, 2, 5, 1, 3];
const preorder2 = [1, 5, 4, 2, 3];
const postorder2 = [4, 1, 2, 3, 5];
console.log(areTraversalsSameTree(preorder2, inorder2, postorder2));
// Output: false
