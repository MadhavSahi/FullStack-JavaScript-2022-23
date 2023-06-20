// You are given a string **S**, the task is to reverse the string using stack.

// **Example 1:**
// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG

// Solution---->
function reverseStringUsingStack(str) {
  const reversedString = [];
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (stack.length > 0) {
    reversedString.push(stack.pop());
  }
  return reversedString.join("");
}

const inputStr = "GeeksforGeeks";
const reversedStr = reverseStringUsingStack(inputStr);
console.log(reversedStr);
// Output: "skeeGrofskeeG"
