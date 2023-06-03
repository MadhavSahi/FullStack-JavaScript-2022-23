/*Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

![Screenshot 2023-05-29 005352.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5565e778-ac57-4ced-85a2-ccb13268bdf6/Screenshot_2023-05-29_005352.png)

**Example 1:**

**Input:** arr = [2,1]

**Output:**

false*/


//Solution--->

function MountainArray(array) {
  if (array.length < 3) {
    return false;
  }

  let index = 0;

  while (index < array.length - 1 && array[index] < array[index + 1]) {
    index++;
  }

  if (index === 0 || index === array.length - 1) {
    return false;
  }

  while (index < array.length - 1 && array[index] > array[index + 1]) {
    index++;
  }

  return index === array.length - 1;
}
console.log(MountainArray([2, 1]));
// Output: false
