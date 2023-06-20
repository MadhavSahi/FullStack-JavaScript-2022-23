// Given an array **a** of integers of length **n**, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.

// **Example 1:**
// Input: n = 3
// a = {1, 6, 2}
// Output: -1 1 1
// Explaination: There is no number at the
// left of 1. Smaller number than 6 and 2 is 1.

// Example 2:
// Input: n = 6
// a = {1, 5, 0, 3, 4, 5}
// Output: -1 1 -1 0 3 4
// Explaination: Upto 3 it is easy to see
// the smaller numbers. But for 4 the smaller
// numbers are 1, 0 and 3. But among them 3
// is closest. Similary for 5 it is 4.

// Solution---->

function findNearestSmallerNumbers(arrLength, arr) {
  let stack = [];
  let resultArray = [];

  for (let i = 0; i < arrLength; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      resultArray.push(-1);
    } else {
      resultArray.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return resultArray;
}

const length = 6;
const nums = [1, 5, 0, 3, 4, 5];
const result = findNearestSmallerNumbers(length, nums);
console.log(result);
// Output: -1 1 -1 0 3 4
