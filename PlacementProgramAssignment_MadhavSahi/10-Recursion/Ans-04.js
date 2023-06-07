// Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**
// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

//Solution--->
function stringLen(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + stringLen(str.slice(1));
  }
}
console.log(stringLen("abcd"));
// Output: 4
console.log(stringLen("GEEKSFORGEEKS"));
// Output: 13
