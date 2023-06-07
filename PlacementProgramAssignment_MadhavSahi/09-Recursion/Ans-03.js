// Question 3**

// ****Given a positive integer, N. Find the factorial of N. 

// **Example 1:**

// Input: N = 5 

// Output: 120

// **Example 2:**

// Input: N = 4

// Output: 24

//Solution--->
function factorial(number) {
    let result = 1;
    if (number === 0 || number === 1) {
      return result;
    }    
    for (let i = 2; i <= number; i++) {
      result = result*i;
    }
    
    return result;
  }
  
  console.log(factorial(5)); 
  // Output: 120
  console.log(factorial(4)); 
  // Output: 24
  