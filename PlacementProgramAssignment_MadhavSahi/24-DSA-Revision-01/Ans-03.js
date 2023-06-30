// 3. **Majority Element**

// Given an array `nums` of size `n`, return *the majority element*.

// The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

// **Example 1:**
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 5 * 10^4`
// - `-10^9 <= nums[i] <= 10^9`

// Solution--->

function findMajorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    }
  }
  return majorityElement;
}

console.log(findMajorityElement([3, 2, 3]));
// Output: 3

console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output: 2
