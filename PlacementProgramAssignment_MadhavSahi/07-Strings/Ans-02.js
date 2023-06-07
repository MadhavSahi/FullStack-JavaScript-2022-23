// Question 2**

// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true

//Solution--->

function isStrobogrammaticNumber(num) {
  const strobogrammaticDigits = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let leftIndex = 0;
  let rightIndex = num.length - 1;

  while (leftIndex <= rightIndex) {
    if (
      !strobogrammaticDigits.hasOwnProperty(num[leftIndex]) ||
      strobogrammaticDigits[num[leftIndex]] !== num[rightIndex]
    ) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isStrobogrammaticNumber("69")); 
// true
