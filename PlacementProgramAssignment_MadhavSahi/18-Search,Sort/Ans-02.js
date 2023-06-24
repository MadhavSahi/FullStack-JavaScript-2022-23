// 2. **Sort Colors**

// Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// **Example 1:**
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 300`
// - `nums[i]` is either `0`, `1`, or `2`.

// Solution--->
function colorsSort(nums) {
  let index1 = 0;
  let index2 = 0;
  let index3 = nums.length - 1;

  while (index2 <= index3) {
    if (nums[index2] === 0) {
      [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
      index1++;
      index2++;
    } else if (nums[index2] === 1) {
      index2++;
    } else if (nums[index2] === 2) {
      [nums[index2], nums[index3]] = [nums[index3], nums[index2]];
      index3--;
    }
  }
}

const nums1 = [2, 0, 2, 1, 1, 0];
colorsSort(nums1);
console.log(nums1);
// Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
colorsSort(nums2);
console.log(nums2);
// Output: [0, 1, 2]
