// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

//Solution--->

function minScore(nums, k) {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }

  if (maxNum - minNum <= 2 * k) {
    return 0;
  }
  maxNum -= k;
  minNum += k;

  const newMinNum = Math.min(minNum, maxNum);
  const newMaxNum = Math.max(minNum, maxNum);
  const ans = newMaxNum - newMinNum;
  return ans;
}
const nums = [1];
const k = 0;
const minscore = minScore(nums, k);
console.log(minscore);
// Output: 0
