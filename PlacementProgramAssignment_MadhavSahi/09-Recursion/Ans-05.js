// Question 5**

// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

//Solution--->
function findMax(array1) {
  if (array1.length === 1) {
    return array1[0];
  }
  const endElement = array1.pop();
  const maxEle = findMax(array1);
  return (endElement > maxEle) ? endElement : maxEle;
}

console.log(findMax([1, 4, 3, -5, -4, 8, 6]));
// Output: 8
console.log(findMax([1, 4, 45, 6, 10, -8]));
// Output: 45
