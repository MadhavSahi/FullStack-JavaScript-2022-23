// Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

//Solution--->

function SwapStrings(s, goal) {
  const indexes = [];
  if (s.length !== goal.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      indexes.push(i);
    }
  }
  return (
    indexes.length === 2 &&
    s[indexes[0]] === goal[indexes[1]] &&
    s[indexes[1]] === goal[indexes[0]]
  );
}

const s = "ab";
const goal = "ba";
const Swap = SwapStrings(s, goal);
console.log(Swap);
// Output: true
