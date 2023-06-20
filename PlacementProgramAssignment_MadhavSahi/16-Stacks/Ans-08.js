// Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

// **Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.
// Examples:
// Input : arr[] = {2, 1, 8}
// Output : 1
// Left smaller  LS[] {0, 0, 1}
// Right smaller RS[] {1, 0, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 1

// Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
// Output : 4
// Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
// Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

// Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
// Output : 1

// Solution--->

function findMaxAbsoluteDifference(arr) {
  const length = arr.length;
  const leftSmaller = [];
  const rightSmaller = [];

  for (let i = 0; i < length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] >= arr[i]) {
      j = leftSmaller[j];
    }
    leftSmaller[i] = j;
  }

  for (let i = length - 1; i >= 0; i--) {
    let j = i + 1;
    while (j < length && arr[j] >= arr[i]) {
      j = rightSmaller[j];
    }
    rightSmaller[i] = j;
  }

  let maxDiff = 0;
  for (let i = 0; i < length; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

const inputArray1 = [2, 1, 8];
console.log(findMaxAbsoluteDifference(inputArray1)); 
// Output: 1

const inputArray2 = [2, 4, 8, 7, 7, 9, 3];
console.log(findMaxAbsoluteDifference(inputArray2)); 
// Output: 4

const inputArray3 = [5, 1, 9, 2, 5, 1, 7];
console.log(findMaxAbsoluteDifference(inputArray3)); 
// Output: 1
