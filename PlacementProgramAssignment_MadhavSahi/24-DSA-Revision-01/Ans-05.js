// 5. **Ugly Numbers**

// An**ugly number**is a positive integer whose prime factors are limited to`2`,`3`, and`5`.

// Given an integer`n`, return *the*`nth`*** ugly number***.

// **Example 1:**

// ```
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// ```

// **Example 2:**

// ```
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// ```

// **Constraints:**

// - `1 <= n <= 1690`

// Solution--->

function getNthUglyNumber(n) {
  const uglyNums = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  for (let i = 1; i < n; i++) {
    const nextUglyNum = Math.min(
      uglyNums[i2] * 2,
      uglyNums[i3] * 3,
      uglyNums[i5] * 5
    );

    uglyNums.push(nextUglyNum);

    if (nextUglyNum === uglyNums[i2] * 2) i2++;
    if (nextUglyNum === uglyNums[i3] * 3) i3++;
    if (nextUglyNum === uglyNums[i5] * 5) i5++;
  }

  return uglyNums[n - 1];
}

console.log(getNthUglyNumber(10)); 
// Output: 12

console.log(getNthUglyNumber(1)); 
// Output: 1
