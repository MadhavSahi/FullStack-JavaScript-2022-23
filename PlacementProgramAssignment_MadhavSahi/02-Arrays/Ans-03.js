// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

function HarmoniousArray(numbers) {
  numbers.sort((a, b) => a - b); 
  let HighestSubsequenceLength = 0;
  let left = 0;
  let right = 0;

  while (right < numbers.length) {
    const difference = numbers[right] - numbers[left];
    if (difference === 1) {
      HighestSubsequenceLength = Math.max(HighestSubsequenceLength,((right - left) + 1));
      right++;
    } else if (difference > 1) {
      left++;
    } else {
      right++;
    }
  }
  return HighestSubsequenceLength;
}

const numbers = [1, 3, 2, 2, 5, 2, 3, 7];
const SubSequenceLength = HarmoniousArray(numbers);
console.log(SubSequenceLength);
