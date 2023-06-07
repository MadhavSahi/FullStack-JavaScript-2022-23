// Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true

//Solution--->

function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();

  const set = new Set();

  for (let i = 0; i < str1.length; i++) {
    char1 = str1.charAt(i);
    char2 = str2.charAt(i);

    if (map.has(char1) == true) {
      if (map.get(char1) !== char2) {
        return false;
      }
    } else {
      if (set.has(char2)) {
        return false;
      }

      map.set(char1, char2);
      set.add(char2);
    }
  }
  return true;
}
const str1 = "egg";
const str2 = "add";
let ans=(isIsomorphic(str1, str2));
console.log(ans);
