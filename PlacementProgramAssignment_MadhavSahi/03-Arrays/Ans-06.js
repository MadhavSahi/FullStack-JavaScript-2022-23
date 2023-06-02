// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

//Solution--->

function singleNumber(array) {
  let xorsum = 0; 
  for (let i = 0; i < array.length; i++) {
    xorsum = xorsum ^ array[i]; //xoring
  }
  return xorsum;
}
const nums = [2, 2, 1];
console.log(singleNumber(nums)); 
// Output: 1
