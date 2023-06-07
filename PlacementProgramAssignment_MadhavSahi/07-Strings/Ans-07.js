// Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

//Solution--->

function EditSTR(str) {
  const stack = [];

  for (let char of str) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

function backspace(str1, str2) {
  const finalStr1 = EditSTR(str1);
  const finalStr2 = EditSTR(str2);

  if (finalStr1 === finalStr2) {
    return true;
  } else {
    return false;
  }
}

console.log(backspace("ab#c", "ad#c"));
// true
