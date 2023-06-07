// Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

//Solution--->

function findAnagramIndices(s, p) {
    const result = [];
    const targetFreq = new Map();
    let windowStart = 0;
    let matchedCount = 0;
  
    for (let char of p) {
      targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
    }
  
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
      const endChar = s[windowEnd];
  
      if (targetFreq.has(endChar)) {
        targetFreq.set(endChar, targetFreq.get(endChar) - 1);
        if (targetFreq.get(endChar) === 0) {
          matchedCount++;
        }
      }
  
      if (matchedCount === targetFreq.size) {
        result.push(windowStart);
      }
  
      if (windowEnd >= p.length - 1) {
        const startChar = s[windowStart];
  
        if (targetFreq.has(startChar)) {
          if (targetFreq.get(startChar) === 0) {
            matchedCount--;
          }
          targetFreq.set(startChar, targetFreq.get(startChar) + 1);
        }
  
        windowStart++;
      }
    }
  
    return result;
  }
  
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagramIndices(s, p);
  console.log(indices); 
  // Output: [0, 6]
  