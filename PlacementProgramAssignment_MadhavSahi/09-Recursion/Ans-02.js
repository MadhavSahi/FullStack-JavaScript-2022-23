// Question 2**

// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3

// Output: 6

// **Example 2:**

// Input  : 5

// Output : 15

//Solution--->
function sumofNumbers(n) {
  const sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sumofNumbers(3));
// Output: 6
console.log(sumofNumbers(5));
// Output: 15
