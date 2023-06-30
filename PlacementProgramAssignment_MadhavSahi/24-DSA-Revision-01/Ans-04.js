// 4. **Group Anagram**

// Given an array of strings`strs`, group**the anagrams**together. You can return the answer in**any order**.

// An**Anagram**is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// ```
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// ```

// **Example 2:**

// ```
// Input: strs = [""]
// Output: [[""]]
// ```

// **Example 3:**

// ```
// Input: strs = ["a"]
// Output: [["a"]]
// ```

// **Constraints:**

// - `1 <= strs.length <= 10000`
// - `0 <= strs[i].length <= 100`
// - `strs[i]`consists of lowercase English letters.

// Solution--->
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  return Array.from(anagramMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(["", ""]));
// Output: [["", ""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]
