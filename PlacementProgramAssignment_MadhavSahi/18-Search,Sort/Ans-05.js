// 5. **Contains Duplicate**

// Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `109 <= nums[i] <= 10^9`

// Solution--->
function hasDuplicateElements(array) {
  let uniqueElements = new Set();

  for (let element of array) {
    if (uniqueElements.has(element)) {
      return true;
    }
    uniqueElements.add(element);
  }

  return false;
}

const arr1 = [1, 2, 3, 1];
console.log(hasDuplicateElements(arr1)); 
// Output: true

const arr2 = [1, 2, 3, 4];
console.log(hasDuplicateElements(arr2)); 
// Output: false

const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(hasDuplicateElements(arr3)); 
// Output: true
