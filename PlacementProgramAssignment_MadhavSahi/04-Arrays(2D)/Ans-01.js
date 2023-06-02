// **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

//Solution--->

function findCommonElements(array1, array2, array3) {

  const commonnumbers = [];

  const setA = new Set(array1);
  const setB = new Set(array2);
  const setC = new Set(array3);

  for (const val of setA) {
    if (setB.has(val) && setC.has(val)) {
      commonnumbers.push(val);
    }
  }

  return commonnumbers;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 5, 7, 9];
const array3 = [1, 3, 4, 5, 8];

const result = findCommonElements(array1, array2, array3);
console.log(result); 
// Output: [1, 5]
