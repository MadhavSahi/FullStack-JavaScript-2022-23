// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true

function HasElement(numbers) {
  let set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (set.has(numbers[i])) {
      return true;
    }
    set.add(numbers[i]);
  }
  return false;
}

const numbers = [1, 2, 3, 1];
const result = HasElement(numbers);
console.log(result);
// Output: true
