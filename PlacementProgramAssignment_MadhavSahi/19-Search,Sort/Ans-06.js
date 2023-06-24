// 6. Merge two sorted arrays**

// Given two sorted arrays, the task is to merge them in a sorted manner.

// **Examples:**

// Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8}
// Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

// Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
// Output: arr3[] = {4, 5, 7, 8, 8, 9}

// Solution--->

function mergeArrays(arrA, arrB) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] <= arrB[j]) {
      merged.push(arrA[i]);
      i++;
    } else {
      merged.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    merged.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    merged.push(arrB[j]);
    j++;
  }

  return merged;
}

const arrayA = [1, 3, 4, 5];
const arrayB = [2, 4, 6, 8];
console.log(mergeArrays(arrayA, arrayB));
// Output: [1, 2, 3, 4, 4, 5, 6, 8]

const arrayC = [5, 8, 9];
const arrayD = [4, 7, 8];
console.log(mergeArrays(arrayC, arrayD));
// Output: [4, 5, 7, 8, 8, 9]
