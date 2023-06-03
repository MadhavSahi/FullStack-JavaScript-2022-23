// Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

//Solution--->
function findMaxContiguousLength(arr) {
  const countMap = new Map();
  countMap.set(0, -1);
  let count = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i] === 1 ? 1 : -1;
    if(nums[i]===1){
        count++;
    }
    else{
        count--;
    }
    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }
  return maxLength;
}
const nums = [0, 1];
console.log(findMaxContiguousLength(nums));
// Output: 2
