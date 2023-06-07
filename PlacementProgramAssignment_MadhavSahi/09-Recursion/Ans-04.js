// Question 4**

// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :** 

// Input: N = 5, P = 2

// Output: 25

// **Example 2 :**
// Input: N = 2, P = 5

// Output: 32

//Solution--->

function exponentiation(N, P) {
    let result = 1;
  
    for (let i = 1; i <= P; i++) {
      result = result* N;
    }
  
    return result;
  }
  
  console.log(exponentiation(5, 2)); 
  // Output: 25
  console.log(exponentiation(2, 5)); 
  // Output: 32
  