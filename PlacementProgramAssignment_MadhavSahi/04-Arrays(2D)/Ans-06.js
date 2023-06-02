// Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

//Solution--->
function sortedSquares(nums) {
  const squaredArray = nums.map((num) => num ** 2);
  squaredArray.sort((a, b) => a - b);
  return (squaredArray);
}
const input = [-4, -1, 0, 3, 10];
const FinalArray = sortedSquares(input);
console.log(FinalArray); 
// Output: [0, 1, 9, 16, 100]
