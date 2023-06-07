// Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

//Solution--->

function printeSubsets(str) {
  const subsets = [];

  function generate(currentSubset, index) {
    subsets.push(currentSubset);

    for (let i = index; i < str.length; i++) {
      generate(currentSubset + str[i], i + 1);
    }
  }

  generate("", 0);

  return subsets;
}

console.log(printeSubsets("abc"));
// Output: ["", "a", "ab", "abc", "ac", "b", "bc", "c"]
console.log(printeSubsets("abcd"));
// Output: ["", "a", "ab", "abc", "abcd", "abd", "ac", "acd", "ad", "b", "bc", "bcd", "bd", "c", "cd", "d"]
