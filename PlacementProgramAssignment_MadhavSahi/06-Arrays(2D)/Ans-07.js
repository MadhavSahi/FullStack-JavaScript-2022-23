// Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**

// ![Screenshot 2023-05-29 005522.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00c8517f-7682-4e0b-bdd9-ce0e087f3f94/Screenshot_2023-05-29_005522.png)

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

//Solution--->

function SpiralMatrix(n) {
  const Newmatrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  let startNum = 1;
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  while (startNum <= n * n) {
    for (let i = leftColumn; i <= rightColumn; i++) {
      Newmatrix[topRow][i] = startNum++;
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      Newmatrix[i][rightColumn] = startNum++;
    }
    rightColumn--;

    for (let i = rightColumn; i >= leftColumn; i--) {
      Newmatrix[bottomRow][i] = startNum++;
    }
    bottomRow--;

    for (let i = bottomRow; i >= topRow; i--) {
      Newmatrix[i][leftColumn] = startNum++;
    }
    leftColumn++;
  }

  return Newmatrix;
}
const n = 3;
const Spiral = SpiralMatrix(n);
console.log(Spiral);
//output -
//   [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]
