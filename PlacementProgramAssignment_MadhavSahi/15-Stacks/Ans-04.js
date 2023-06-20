// You are given a stack **St**. You have to reverse the stack using recursion.

// **Example 1:**

// ```
// Input:St = {3,2,1,7,6}
// Output:{6,7,1,2,3}
// ```

// **Example 2:**
// Input:St = {4,3,9,6}
// Output:{6,9,3,4}

// Solution---->

function reverseStack(stack) {
  if (stack.length > 0) {
    const top = stack.pop(); 
    reverseStack(stack); 
    insertAtBottom(stack, top); 
  }
}

function insertAtBottom(stack, element) {
  if (stack.length === 0) {
    stack.push(element); 
  } else {
    const top = stack.pop(); 
    insertAtBottom(stack, element); 
    stack.push(top); 
  }
}

// Example usage:
const stack1 = [3, 2, 1, 7, 6];
reverseStack(stack1);
console.log(stack1); 
// Output: [6, 7, 1, 2, 3]

const stack2 = [4, 3, 9, 6];
reverseStack(stack2);
console.log(stack2); 
// Output: [6, 9, 3, 4]
