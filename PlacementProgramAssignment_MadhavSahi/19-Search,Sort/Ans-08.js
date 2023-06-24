// 8. **Intersection of Two Arrays II**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
// **Constraints:**

// - `1 <= nums1.length, nums2.length <= 1000`
// - `0 <= nums1[i], nums2[i] <= 1000`

// Solution--->

function findArrayIntersection(nums1, nums2) {
  const map1 = createFrequencyMap(nums1);
  const map2 = createFrequencyMap(nums2);

  const result = [];

  for (const [num, freq] of map1) {
    if (map2.has(num)) {
      const minFreq = Math.min(freq, map2.get(num));
      for (let i = 0; i < minFreq; i++) {
        result.push(num);
      }
    }
  }

  return result;
}

function createFrequencyMap(arr) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
}

const arrayA = [1, 2, 2, 1];
const arrayB = [2, 2];
console.log(findArrayIntersection(arrayA, arrayB));
// Output: [2, 2]

const arrayC = [4, 9, 5];
const arrayD = [9, 4, 9, 8, 4];
console.log(findArrayIntersection(arrayC, arrayD));
// Output: [4, 9]
