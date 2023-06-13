// Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

// You **must not use** any built-in exponent function or operator.

// - For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

// **Example 1:**

// ```
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// ```

// **Example 2:**
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//Solution--->

function calculateRoot(x) {
  if (x <= 0) {
    return 0;
  }

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

console.log(calculateRoot(4));
//Output: 2
console.log(calculateRoot(8));
//Output: 2
