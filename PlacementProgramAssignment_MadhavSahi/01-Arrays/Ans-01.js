//Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

// SOLUTION--->

const TargetSum = (numbers, target) => {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (map.has(complement)) {
      return [map[complement], i];
    }
    map[numbers[i]] = i;
  }
  return [];
};

const numbers = [2, 7, 11, 15];
const target = 9;
const result = TargetSum(numbers, target);
console.log(result);
// Output: [0,1]
