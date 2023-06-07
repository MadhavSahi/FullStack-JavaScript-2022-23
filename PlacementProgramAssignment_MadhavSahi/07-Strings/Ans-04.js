// Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

//Solution--->
function reverseStringWords(str) {
    const words = str.split(' ');  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(' ');
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseStringWords("Let's take LeetCode contest")); 
  // "s'teL ekat edoCteeL tsetnoc"
  