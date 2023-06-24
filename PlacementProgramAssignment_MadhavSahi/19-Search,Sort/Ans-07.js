// 7. **Intersection of Two Arrays**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

// **Example 1:**
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
// **Constraints:**

// - `1 <= nums1.length, nums2.length <= 1000`
// - `0 <= nums1[i], nums2[i] <= 1000`

// Solution--->

function getArrayIntersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result = [];

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

const arrayA = [1, 2, 2, 1];
const arrayB = [2, 2];
console.log(getArrayIntersection(arrayA, arrayB));
// Output: [2]

const arrayC = [4, 9, 5];
const arrayD = [9, 4, 9, 8, 4];
console.log(getArrayIntersection(arrayC, arrayD));
// Output: [4, 9]
