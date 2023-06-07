// Question 8**

// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// **Examples :**

// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

//Solution--->


function countConsonants(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonant = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
        consonant++;
    }
  }
  return consonant;
}

const str = 'geeksforgeeks portal';
const consonants = countConsonants(str);
console.log(consonants);
//Output : 12