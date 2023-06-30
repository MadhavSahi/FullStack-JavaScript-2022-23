// 6. **Top K Frequent Words**

// Given an array of strings `words` and an integer `k`, return *the* `k` *most frequent strings*.

// Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

// **Example 1:**

// ```
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// ```

// **Example 2:**

// ```
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
// ```

// **Constraints:**

// - `1 <= words.length <= 500`
// - `1 <= words[i].length <= 10`
// - `words[i]`consists of lowercase English letters.
// - `k`is in the range`[1, The number of **unique** words[i]]`

// Solution--->
function findTopKFrequentWords(words, k) {
  const wordCountMap = new Map();

  for (const word of words) {
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1);
    } else {
      wordCountMap.set(word, 1);
    }
  }
  const sortedWords = Array.from(wordCountMap.keys()).sort((a, b) => {
    const countA = wordCountMap.get(a);
    const countB = wordCountMap.get(b);
    if (countA === countB) {
      return a.localeCompare(b);
    } else {
      return countB - countA;
    }
  });

  return sortedWords.slice(0, k);
}

console.log(
  findTopKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2)
);
// Output: ["i", "love"]

console.log(
  findTopKFrequentWords(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
// Output: ["the", "is", "sunny", "day"]
