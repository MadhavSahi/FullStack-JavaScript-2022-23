// Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

//Solution--->

function decodeString(encodedStr) {
  const stack = [];

  for (let char of encodedStr) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let decoded = "";

      while (stack[stack.length - 1] !== "[") {
        decoded = stack.pop() + decoded;
      }

      stack.pop();

      let repeatCount = "";

      while (!isNaN(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      repeatCount = parseInt(repeatCount);

      stack.push(decoded.repeat(repeatCount));
    }
  }

  return stack.join("");
}

const encodedStr = "3[a]2[bc]";
const decodedStr = decodeString(encodedStr);
console.log("Decoded String:", decodedStr);
// Output: "aaabcbc"
