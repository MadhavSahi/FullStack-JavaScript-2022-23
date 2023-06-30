// 7. **Sliding Window Maximum**

// You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

// Return *the max sliding window*.

// **Example 1:**

// ```
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6 7         3
//  1 [3  -1  -3] 5  3  6 7         3
//  1  3 [-1  -3  5] 3  6 7         5
//  1  3  -1 [-3  5  3] 6 7         5
//  1  3  -1  -3 [5  3  6]7         6
//  1  3  -1  -3  5 [3  6  7]       7
// ```

// **Example 2:**

// ```
// Input: nums = [1], k = 1
// Output: [1]
// ```

// **Constraints:**

// - `1 <= nums.length <= 100000`
// - -`10000 <= nums[i] <= 10000`
// - `1 <= k <= nums.length`

// Solution--->

function findMaxSlidingWindow(nums, k) {
  const result = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length > 0 && queue[0] <= i - k) {
      queue.shift();
    }

    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }

    queue.push(i);

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
}

console.log(findMaxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]
