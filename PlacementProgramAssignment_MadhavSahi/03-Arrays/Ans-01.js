// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

//Solution--->

function TripletSum(nums, target) {
  let sum_close = Infinity;
  let difference1 = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const diff2 = Math.abs(sum - target);
        if (diff2 === 0) {
          return sum;
        }

        if (diff2 < difference1) {
          difference1 = diff2;
          sum_close = sum;
        }
      }
    }
  }
  return closestSum;
}
const nums = [-1, 2, 1, -4];
const target = 1;
const answer = TripletSum(nums, target);
console.log(answer);
// Output: 2
