// 4. **Maximum Gap**

// Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

// You must write an algorithm that runs in linear time and uses linear extra space.

// **Example 1:**
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:
// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `0 <= nums[i] <= 10^9`

// Solution--->
function findMaximumGap(numbers) {
  if (numbers.length < 2) {
    return 0;
  }

  let maxGap = 0;
  let length = numbers.length;
  let minValue = Math.min(...numbers);
  let maxValue = Math.max(...numbers);
  let bucketSize = Math.max(
    1,
    Math.floor((maxValue - minValue) / (length - 1))
  );
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

  let buckets = Array(bucketCount)
    .fill(null)
    .map(() => ({
      minimum: Infinity,
      maximum: -Infinity,
    }));

  for (let number of numbers) {
    let index = Math.floor((number - minValue) / bucketSize);
    buckets[index].minimum = Math.min(buckets[index].minimum, number);
    buckets[index].maximum = Math.max(buckets[index].maximum, number);
  }

  let previousMax = minValue;
  for (let i = 0; i < bucketCount; i++) {
    if (buckets[i].minimum === Infinity) {
      continue;
    }
    maxGap = Math.max(maxGap, buckets[i].minimum - previousMax);
    previousMax = buckets[i].maximum;
  }

  return maxGap;
}

const numbers1 = [3, 6, 9, 1];
console.log(findMaximumGap(numbers1)); 
// Output: 3

const numbers2 = [10];
console.log(findMaximumGap(numbers2)); 
// Output: 0
