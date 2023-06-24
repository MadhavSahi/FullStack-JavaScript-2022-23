// 2. **Count of Smaller Numbers After Self**

// Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

// **Example 1:**
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are2 smaller elements (2 and 1).
// To the right of 2 there is only1 smaller element (1).
// To the right of 6 there is1 smaller element (1).
// To the right of 1 there is0 smaller element.

// Example 2:
// Input: nums = [-1]
// Output: [0]

// Example 3:
// Input: nums = [-1,-1]
// Output: [0,0]

// **Constraints:**

// - `1 <= nums.length <= 100000`
// - `-10000 <= nums[i] <= 10000`

//Solution--->

function findSmallerCounts(arr) {
  const len = arr.length;
  const counts = new Array(len).fill(0);
  const sortedArr = [];

  for (let i = len - 1; i >= 0; i--) {
    const num = arr[i];
    const insertIndex = searchInsertIndex(sortedArr, num);
    sortedArr.splice(insertIndex, 0, num);
    counts[i] = insertIndex;
  }

  return counts;
}

function searchInsertIndex(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

const nums1 = [5, 2, 6, 1];
console.log(findSmallerCounts(nums1)); 
// Output: [2, 1, 1, 0]

const nums2 = [-1];
console.log(findSmallerCounts(nums2)); 
// Output: [0]

const nums3 = [-1, -1];
console.log(findSmallerCounts(nums3)); 
// Output: [0, 0]
