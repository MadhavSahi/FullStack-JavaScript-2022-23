// 2. **Longest Substring Without Repeating Characters**

// Given a string `s`, find the length of the **longest substring** without repeating characters.

// **Example 1:**

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// **Constraints:**

// - `0 <= s.length <= 50000`
// - `s`consists of English letters, digits, symbols and spaces.

// Solution--->

function findLongestSubstringLength(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s.charAt(end);

    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(findLongestSubstringLength("abcabcbb"));
// Output: 3

console.log(findLongestSubstringLength("bbbbb"));
// Output: 1

console.log(findLongestSubstringLength("pwwkew"));
// Output: 3
