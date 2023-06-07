// Question 6**

// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

//Solution--->

function Shifts(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const combinedString = s + s;

  if (combinedString.includes(goal)) {
    return true;
  } else {
    return false;
  }
}

console.log(Shifts("abcde", "cdeab"));
// true
