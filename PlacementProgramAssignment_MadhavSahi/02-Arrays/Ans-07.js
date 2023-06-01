// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

//Solution--->

function Monotonic(numbers) {
  let inc = true;
  let dec = true;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      dec = false;
      //   inc=true;
    } else if (numbers[i] < numbers[i - 1]) {
      inc = false;
    }
  }
  if (dec === false || inc === false) {
    return false;
  } else {
    return true;
  }
}
const numbers = [1, 2, 2, 3];
const answer=Monotonic(numbers);
console.log(answer);
// Output: true
