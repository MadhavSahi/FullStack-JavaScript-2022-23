// Question 2**

// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// **Example 1:**

// ![Screenshot 2023-05-29 005303.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4b0271f-15f0-4744-826b-18500ccfcb75/Screenshot_2023-05-29_005303.png)

// **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// **Output:** true

//Solution--->
function searchInSortedMatrix(matrix, target) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let start = 0;
  let end = rowCount - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const rowStartValue = matrix[mid][0];
    const rowEndValue = matrix[mid][colCount - 1];

    if (rowStartValue <= target && target <= rowEndValue) {
      let left = 0;
      let right = colCount - 1;

      while (left <= right) {
        const colMid = Math.floor((left + right) / 2);
        const midValue = matrix[mid][colMid];

        if (midValue === target) {
          return true;
        } else if (midValue < target) {
          left = colMid + 1;
        } else {
          right = colMid - 1;
        }
      }
      return false;
    } else if (rowStartValue > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
let answer = searchInSortedMatrix(matrix, target);
console.log(answer);
// Output: true
