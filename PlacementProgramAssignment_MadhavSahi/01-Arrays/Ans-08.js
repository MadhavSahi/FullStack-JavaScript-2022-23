// Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]

function DuplicateAndMissing(numbers) {
  numbers.sort((a, b) => a - b);

  let duplicate = 0;
  let missing = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      duplicate = numbers[i];
    } else if (numbers[i] + 1 !== numbers[i + 1]) {
      missing = numbers[i] + 1;
    }
  }

  return [duplicate, missing];
}
const numbers = [1, 2, 2, 4];
const result = DuplicateAndMissing(numbers);
console.log(result);
// Output: [2, 3]
