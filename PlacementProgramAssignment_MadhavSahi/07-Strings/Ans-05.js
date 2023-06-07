// Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"

//Solution--->
function reverseKchars(s, k) {
    const characters = s.split('');
  
    for (let i = 0; i < s.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, s.length - 1);
  
      while (start < end) {
        [characters[start], characters[end]] = [characters[end], characters[start]];
        start++;
        end--;
      }
    }
  
    return characters.join('');
  }
  console.log(reverseKchars("abcdefg", 2)); 
  // "bacdfeg"
  