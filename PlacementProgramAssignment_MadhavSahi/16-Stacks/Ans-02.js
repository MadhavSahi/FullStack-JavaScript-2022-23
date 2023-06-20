// Given a stack of integers, sort it in ascending order using another temporary stack.

// **Examples:**
// Input : [34, 3, 31, 98, 92, 23]
// Output : [3, 23, 31, 34, 92, 98]

// Input : [3, 5, 1, 4, 2, 8]
// Output : [1, 2, 3, 4, 5, 8]

// Solution--->
function sortStackUsingTempStack(inputStack) {
    
  const tempStack = [];

  while (inputStack.length > 0) {
    const temp = inputStack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      inputStack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack.reverse();
}

const inputStack = [34, 3, 31, 98, 92, 23];
const sortedStack = sortStackUsingTempStack([...inputStack]);
console.log(sortedStack); 
// Output: [3, 23, 31, 34, 92, 98]
