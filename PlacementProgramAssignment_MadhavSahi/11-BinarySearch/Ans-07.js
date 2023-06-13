// Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

// If `target` is not found in the array, return `[-1, -1]`.

// You must write an algorithm with `O(log n)` runtime complexity.

// **Example 1:**

// ```
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// ```

// **Example 2:**

// ```
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// ```

// **Example 3:**
// Input: nums = [], target = 0
// Output: [-1,-1]

//Solution--->

const findRange = (arr, target) => {
  const leftIndex = findIndex(arr, target, true);
  const rightIndex = findIndex(arr, target, false);

  return [leftIndex, rightIndex];
};

const findIndex = (arr, target, isLeft) => {
  let low = 0;
  let high = arr.length - 1;
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > target || (isLeft && arr[mid] === target)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    if (arr[mid] === target) {
      index = mid;
    }
  }

  return index;
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(findRange(nums, target));
// Output: [3, 4]

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(findRange(nums2, target2));
// Output: [-1, -1]

const nums3 = [];
const target3 = 0;
console.log(findRange(nums3, target3));
// Output: [-1, -1]
