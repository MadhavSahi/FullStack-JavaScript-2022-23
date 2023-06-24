// 8. **132 Pattern**

// Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

// Return `true` *if there is a **132 pattern** in* `nums`*, otherwise, return* `false`*.*

// **Example 1:**
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.

// Example 2:
// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

// Example 3:
// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

//Solution--->

function has132Pattern(arr) {
  const stack = [];
  let num3 = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < num3) {
      return true;
    }

    while (stack.length > 0 && arr[i] > stack[stack.length - 1]) {
      num3 = stack.pop();
    }

    stack.push(arr[i]);
  }

  return false;
}

const nums1 = [1, 2, 3, 4];
console.log(has132Pattern(nums1)); 
// Output: false

const nums2 = [3, 1, 4, 2];
console.log(has132Pattern(nums2)); 
// Output: true

const nums3 = [-1, 3, 2, 0];
console.log(has132Pattern(nums3)); 
// Output: true
