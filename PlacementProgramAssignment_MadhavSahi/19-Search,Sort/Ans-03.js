// 3. **Sort an Array**

// Given an array of integers `nums`, sort the array in ascending order and return it.

// You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

// **Example 1:**
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// **Constraints:**

// - `1 <= nums.length <= 5 * 10000`
// - `-5 * 104 <= nums[i] <= 5 * 10000`

// Solution--->

function customSortArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(customSortArray(left), customSortArray(right));
}

function merge(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const nums1 = [5, 2, 3, 1];
console.log(customSortArray(nums1)); 
// Output: [1, 2, 3, 5]

const nums2 = [5, 1, 1, 2, 0, 0];
console.log(customSortArray(nums2)); 
// Output: [0, 0, 1, 1, 2, 5]
