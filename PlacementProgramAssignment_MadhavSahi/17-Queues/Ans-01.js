// Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

// **Example 1:**

// ```
// Input: s = "leetcode"
// Output: 0

// ```

// **Example 2:**

// ```
// Input: s = "loveleetcode"
// Output: 2

// ```

// **Example 3:**

// Input: s = "aabb"
// Output: -1

// Solution--->

function findFirstUniqueCharacterIndex(str) {
  const frequencyMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequencyMap.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(findFirstUniqueCharacterIndex("leetcode"));
// Output: 0
console.log(findFirstUniqueCharacterIndex("loveleetcode"));
// Output: 2
console.log(findFirstUniqueCharacterIndex("aabb"));
// Output: -1
