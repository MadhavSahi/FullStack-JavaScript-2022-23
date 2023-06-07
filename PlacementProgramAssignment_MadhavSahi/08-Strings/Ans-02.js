// Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

//Solution--->
function ISString(s) {
  let leftBracketCount = 0;
  let starCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
        leftBracketCount++;
    } else if (s[i] === "*") {
      starCount++;
    } else {
      if (leftBracketCount > 0) {
        leftBracketCount--;
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    }
  }
  
  starCount = 0;

  let rightBracketCount = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
        rightBracketCount++;
    } else if (s[i] === "*") {
      starCount++;
    } else {
      if (rightBracketCount > 0) {
        rightBracketCount--;
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    }
  }

  return true;
}

const str = "()";
let answer=ISString(str);
console.log(answer);
// Output: true
