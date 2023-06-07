{
  /* Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

```
Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]

```

**Example 2:**
Input: n = 1
Output: 1
*/
}

//Solution--->
function findLastRemainingNumber(n) {
  if (n <= 0) {
    return -1; 
  }

  let isLeftToRight = true;
  let currentHead = 1;
  let currentStep = 1;
  let remainingCount = n;

  while (remainingCount > 1) {
    if (isLeftToRight || remainingCount % 2 === 1) {
      currentHead += currentStep;
    }

    currentStep *= 2;
    remainingCount = Math.floor(remainingCount / 2);
    isLeftToRight = !isLeftToRight;
  }

  return currentHead;
}

console.log(findLastRemainingNumber(9));
// Output: 6
console.log(findLastRemainingNumber(1));
// Output: 1
