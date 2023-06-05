// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

//Solution--->

function moveZeroesToEnd(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroesToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroesToEnd([0])); // Output: [0]
