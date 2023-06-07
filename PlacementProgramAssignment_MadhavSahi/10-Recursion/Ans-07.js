// Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

//  Input: str = “cd”

//  **Output:** cd dc

//  **Input:** str = “abb”

//  **Output:** abb abb bab bba bab bba

//Solution--->
function generatePermutations(str) {
  const permutations = [];

  function backtrack(currentStr, visited, remaining) {
    if (currentStr.length === str.length) {
      permutations.push(currentStr);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      backtrack(currentStr + str[i], visited, remaining - 1);
      visited[i] = false;
    }
  }

  const visited = new Array(str.length).fill(false);
  backtrack("", visited, str.length);
  return permutations;
}

const inputStr = "abc";
const result = generatePermutations(inputStr);
console.log(result);
//Output : abb abb bab bba bab bba
