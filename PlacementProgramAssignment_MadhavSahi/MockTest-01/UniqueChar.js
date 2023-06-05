// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.

//Solution--->

function findFirstUniqueChar(str) {
  let charCount = {};
  for (let s of str) {
    // console.log(charCount[s]);
    charCount[s] = (charCount[s] || 0) + 1;
    // charCount[s]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(findFirstUniqueChar("leetcode"));
// Output: 0
console.log(findFirstUniqueChar("loveleetcode"));
// Output: 2
console.log(findFirstUniqueChar("aabb"));
// Output: -1
