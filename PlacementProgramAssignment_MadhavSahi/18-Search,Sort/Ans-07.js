// 7. **Longest Increasing Subsequence**

// Given an integer array `nums`, return *the length of the longest **strictly increasing***

// ***subsequence***

// .

// **Example 1:**
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// **Constraints:**

// - `1 <= nums.length <= 2500`
// - `-10^4 <= nums[i] <= 10^4`

// Solution--->
function findLongestIncreasingSubsequence(nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 1;

  for (let i = 0; i < dp.length; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

const input1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(findLongestIncreasingSubsequence(input1));
// Output: 4

const input2 = [0, 1, 0, 3, 2, 3];
console.log(findLongestIncreasingSubsequence(input2));
// Output: 4

const input3 = [7, 7, 7, 7, 7, 7, 7];
console.log(findLongestIncreasingSubsequence(input3));
// Output: 1
