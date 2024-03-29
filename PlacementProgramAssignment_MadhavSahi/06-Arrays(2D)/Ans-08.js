// Question 8**

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Example 1:**

// ![Screenshot 2023-05-29 005557.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df57e793-12bf-4104-a17b-4e6a88dc7955/Screenshot_2023-05-29_005557.png)

// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

//Solution--->
function MatrixMultiply(matrix1, matrix2) {
    const numRows = matrix1.length;
    const commonDim = matrix1[0].length;
    const numCols = matrix2[0].length;
  
    const resultMatrix = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
      resultMatrix[i] = new Array(numCols).fill(0);
    }
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        for (let k = 0; k < commonDim; k++) {
          if (matrix1[i][k] !== 0 && matrix2[k][j] !== 0) {
            resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
          }
        }
      }
    }
  
    return resultMatrix;
  }
  const matrix1 = [[1, 0, 0], [-1, 0, 3]];
  const matrix2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = MatrixMultiply(matrix1, matrix2);
  console.log(result);
  //output - [[7,0,0],[-7,0,3]]