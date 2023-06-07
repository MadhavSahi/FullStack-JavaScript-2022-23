// Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

//Solution--->

function minDeletionSteps(str1, str2) {

    const m = str1.length;
    const n = str2.length;
    
    //2D array of 0's
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
    
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
      }
    }
    
    return dp[m][n];
  }
  
  const word1 = "sea";
  const word2 = "eat";
  console.log(minDeletionSteps(word1, word2)); 
  // Output: 2
  