// Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function ZeroesAtEnd(numbers) {
  let whole_nums = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      numbers[whole_nums] = numbers[i];
      whole_nums++;
    }
  }
  for (let i = whole_nums; i < numbers.length; i++) {
    numbers[i] = 0;
  }
}

const numbers = [0, 1, 0, 3, 12];
ZeroesAtEnd(numbers);
console.log(numbers);
