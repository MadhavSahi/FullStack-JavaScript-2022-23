// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

//Solution--->

function MaxProduct(numbers) {
    numbers.sort((a, b) => a - b);   
    const len = numbers.length;  
    const val1 = numbers[len - 1] * numbers[len - 2] * numbers[len - 3]; 
    const val2 = numbers[0] * numbers[1] * numbers[len - 1];  
    return Math.max(val1, val2);
  }
  const numbers = [1, 2, 3];
  console.log(MaxProduct(numbers)); 
  // Output: 6
  