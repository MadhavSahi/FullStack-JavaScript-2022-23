// **Question 3**

// Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

// Input  : Stack[] = [1, 2, 3, 4, 5]

// Output : Stack[] = [1, 2, 4, 5]

// Input  : Stack[] = [1, 2, 3, 4, 5, 6]

// Output : Stack[] = [1, 2, 4, 5, 6]

// Solution--->

function deleteMiddleElement(stack) {
  if (stack.length === 0 || stack.length === 1) {
    return stack;
  }

  const midIndex = Math.floor(stack.length / 2);

  const tempStack = [];
  deleteMiddleElementHelper(stack, midIndex, tempStack);

  restoreOriginalStack(stack, tempStack);
}

function deleteMiddleElementHelper(stack, midIndex, tempStack) {
  if (midIndex === 0) {
    stack.pop();
    return;
  }

  const element = stack.pop();

  deleteMiddleElementHelper(stack, midIndex - 1, tempStack);

  tempStack.push(element);
}

function restoreOriginalStack(stack, tempStack) {
  if (tempStack.length === 0) {
    return;
  }

  const element = tempStack.pop();

  restoreOriginalStack(stack, tempStack);

  stack.push(element);
}

const stack1 = [1, 2, 3, 4, 5];
deleteMiddleElement(stack1);
console.log(stack1); 
// Output: [1, 2, 4, 5]

const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddleElement(stack2);
console.log(stack2); 
// Output: [1, 2, 4, 5, 6]
