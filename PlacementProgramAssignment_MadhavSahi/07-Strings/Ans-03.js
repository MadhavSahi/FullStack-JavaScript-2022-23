// Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"

//Solution--->

function addStrings(num1, num2) {
    let sum = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const currentSum = digit1 + digit2 + carry;
  
      carry = currentSum >= 10 ? 1 : 0;
      sum = (currentSum % 10) + sum;
  
      i--;
      j--;
    }  
    return sum;
  }
  
  console.log(addStrings("11", "123")); 
  // "134"
  