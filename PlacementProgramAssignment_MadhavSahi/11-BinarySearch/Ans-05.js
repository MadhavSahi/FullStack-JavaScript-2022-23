// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

// **Example 1:**

// ```
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// ```

// **Example 2:**
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

//Solution--->

const findIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const interArray = [];

  for (const num of arr2) {
    if (set1.has(num)) {
        interArray.push(num);
      set1.delete(num);
    }
  }

  return interArray;
};
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(findIntersection(nums1, nums2));
// Output: [2]

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(findIntersection(nums3, nums4));
// Output: [4, 9]
