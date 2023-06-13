// Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

// There is only **one repeated number** in `nums`, return *this repeated number*.

// You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

// **Example 1:**

// ```
// Input: nums = [1,3,4,2,2]
// Output: 2

// ```

// **Example 2:**
// Input: nums = [3,1,3,4,2]
// Output: 3

//Solution--->

function DuplicateEle(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      return Math.abs(nums[i]);
    } else {
      nums[index] = -nums[index];
    }
  }
  return -1;
}
console.log(DuplicateEle([1, 3, 4, 2, 2])); 
// Output: 2
console.log(DuplicateEle([3, 1, 3, 4, 2])); 
// Output: 3
