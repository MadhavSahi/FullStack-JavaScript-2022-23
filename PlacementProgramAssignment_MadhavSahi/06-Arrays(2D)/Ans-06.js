// Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

//Solution--->

function findOriginalArrayChanged(changedArray) {
  if (changedArray.length % 2 !== 0) {
    return [];
  }

  const frequencyMap = {};
  for (let num of changedArray) {
    if (!frequencyMap[num]) {
      frequencyMap[num] = 0;
    }
    frequencyMap[num]++;
  }

  const originalArray = [];
  for (let num of changedArray) {
    if (!frequencyMap[num]) {
      continue;
    }
    if (!frequencyMap[num * 2]) {
      return [];
    }
    originalArray.push(num);
    frequencyMap[num]--;
    frequencyMap[num * 2]--;
  }

  return originalArray;
}
const changedArray = [1, 3, 4, 2, 6, 8];
const originalArray = findOriginalArrayChanged(changedArray);
console.log(originalArray);
//Output - [1, 3, 4];
