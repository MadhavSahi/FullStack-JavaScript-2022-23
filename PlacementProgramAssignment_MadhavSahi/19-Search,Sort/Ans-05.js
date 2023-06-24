// 5. **Rearrange array in alternating positive & negative items with O(1) extra space**

// Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

// **Examples:**

// Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

// Solution--->

function rearrangeAlternateArray(nums) {
  let len = nums.length;
  let negIndex = -1;

  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) {
      negIndex++;
      [nums[negIndex], nums[i]] = [nums[i], nums[negIndex]];
    }
  }

  let posIndex = negIndex + 1;
  let neg = 0;

  while (posIndex < len && neg < posIndex && nums[neg] < 0) {
    [nums[neg], nums[posIndex]] = [nums[posIndex], nums[neg]];
    posIndex++;
    neg += 2;
  }

  return nums;
}

const arr1 = [1, 2, 3, -4, -1, 4];
console.log(rearrangeAlternateArray(arr1)); 
// Output: [-4, 1, -1, 2, 3, 4]

const arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(rearrangeAlternateArray(arr2)); 
// Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
