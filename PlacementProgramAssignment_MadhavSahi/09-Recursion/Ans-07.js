// Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

//Solution--->

function permutations(str) {
  const result = [];

  function backtrack(remainingChars, prefix) {
    if (prefix.length === str.length) {
      result.push(prefix);
      return;
    }

    for (let i = 0; i < remainingChars.length; i++) {
      const char = remainingChars[i];
      const remaining =
        remainingChars.slice(0, i) + remainingChars.slice(i + 1);
      backtrack(remaining, prefix + char);
    }
  }

  backtrack(str, "");

  return result;
}
console.log(permutations("ABC"));
// Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(permutations("XY"));
// Output: ["XY", "YX"]
