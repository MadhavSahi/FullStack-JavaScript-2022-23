// Question 7**
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*

// **Example 1:**

// **Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

// **Output:** 4

// **Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

//Solution--->

function countMaxIntegers(r, c, ops) {
    let minX = r;
    let minY = c;
    
    for (let operation of ops) {
      minX = Math.min(minX, operation[0]);
      minY = Math.min(minY, operation[1]);
    }
    
    return (minX * minY);
  }
  const rows = 3;
  const cols = 3;
  const operations = [[2, 2], [3, 3]];
  const result = countMaxIntegers(rows, cols, operations);
  console.log(result); 
  // Output: 4
  
