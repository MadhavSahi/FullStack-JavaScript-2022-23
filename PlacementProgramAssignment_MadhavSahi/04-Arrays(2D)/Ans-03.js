// Question 3**
// Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// **Example 1:**

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]

//Solution--->

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposed = [];
  for (let colIndex = 0; colIndex < numCols; colIndex++) {
    const newRow = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      newRow.push(matrix[rowIndex][colIndex]);
    }
    transposed.push(newRow);
  }
  return transposed;
}
const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const outputMatrix = transposeMatrix(inputMatrix);
console.log(outputMatrix);
//[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
