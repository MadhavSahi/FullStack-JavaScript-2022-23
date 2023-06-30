// 8. **Find K Closest Elements**

// Given a **sorted**integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

// An integer `a` is closer to `x` than an integer `b` if:

// - `|a - x| < |b - x|`, or
// - `|a - x| == |b - x|` and `a < b`

// **Example 1:**

// ```
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// ```

// **Example 2:**

// ```
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
// ```

// **Constraints:**

// - `1 <= k <= arr.length`
// - `1 <= arr.length <= 10000`
// - `arr` is sorted in **ascending** order.
// - -`10000 <= arr[i], x <= 10000`

// Solution--->

function findKClosestElements(nums, k, target) {
  let left = 0;
  let right = nums.length - k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target - nums[mid] > nums[mid + k] - target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums.slice(left, left + k);
}

console.log(findKClosestElements([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]
