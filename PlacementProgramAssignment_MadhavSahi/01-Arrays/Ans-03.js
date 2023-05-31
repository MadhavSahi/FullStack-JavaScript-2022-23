// Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2

function FindInsertIndex(nums, target) {
  const index = nums.findIndex((val) => val >= target);
  return index === -1 ? nums.length : index;
}
console.log(FindInsertIndex([1, 3, 5, 6], 5));
// Output: 2
