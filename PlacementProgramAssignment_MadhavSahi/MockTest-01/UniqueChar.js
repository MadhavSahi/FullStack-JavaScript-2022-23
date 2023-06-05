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

function firstUniqChar(s) {
  let charCount = {}; // Object to store the count of each character

  // Count the occurrences of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  // No non-repeating characters found
  return -1;
}
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
