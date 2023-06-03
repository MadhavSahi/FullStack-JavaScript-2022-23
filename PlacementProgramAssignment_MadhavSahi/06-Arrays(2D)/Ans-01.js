// Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

//Solution--->

function reconstructPermutation(s) {
  const length = s.length;
  let permutation = [];
  for (let i = 0; i <= length; i++) {
    permutation.push(i);
  }

  let index = 0;
  while (index < length) {
    if (s[index] === "D") {
      let start = index;
      while (index < length && s[index] === "D") {
        index++;
      }
      reverseSubsequence(permutation, start, index);
    } else {
      index++;
    }
  }

  return permutation;
}

function reverseSubsequence(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
const input = "IDID";
const result = reconstructPermutation(input);
console.log(result);
//[0,4,1,3,2]
