// Question-3

// Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

// Examples:

// Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output1 : Yes

// For the given arr[], the Binary Search Tree is:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

// Input2 : arr[] = {11, 6, 13, 5, 12, 10}

// Output2 : No

// The given arr[] does not represent the level order traversal of a BST.

//Solution-->

function canRepresentBSTLevelOrder(arr) {
  if (arr.length === 0) {
    return true;
  }

  const n = arr.length;

  let i = 0;
  while (i < n) {
    const rootVal = arr[i];

    let j = i + 1;
    while (j < n && arr[j] < rootVal) {
      j++;
    }

    let k = j;
    while (k < n && arr[k] > rootVal) {
      k++;
    }

    if (k < n) {
      return false;
    }

    const leftArr = arr.slice(i + 1, j);
    const rightArr = arr.slice(j);

    const leftSubtree = canRepresentBSTLevelOrder(leftArr);
    const rightSubtree = canRepresentBSTLevelOrder(rightArr);

    return leftSubtree && rightSubtree;
  }

  return true;
}

const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const result1 = canRepresentBSTLevelOrder(arr1);
console.log(result1);
// Output: true

const arr2 = [11, 6, 13, 5, 12, 10];
const result2 = canRepresentBSTLevelOrder(arr2);
console.log(result2);
// Output: false
