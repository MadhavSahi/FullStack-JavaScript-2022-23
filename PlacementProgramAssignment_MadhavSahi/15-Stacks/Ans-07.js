// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the `MinStack` class:

// - `MinStack()` initializes the stack object.
// - `void push(int val)` pushes the element `val` onto the stack.
// - `void pop()` removes the element on the top of the stack.
// - `int top()` gets the top element of the stack.
// - `int getMin()` retrieves the minimum element in the stack.

// You must implement a solution with `O(1)` time complexity for each function.

// **Example 1:**
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Solution---->

class MinStack {
  constructor() {
    this.stackData = [];
    this.stackMin = [];
  }

  push(value) {
    this.stackData.push(value);

    const currentMin = this.getMin();
    if (currentMin === undefined || value <= currentMin) {
      this.stackMin.push(value);
    }
  }

  pop() {
    const poppedValue = this.stackData.pop();

    const currentMin = this.getMin();
    if (currentMin === poppedValue) {
      this.stackMin.pop();
    }
  }

  peek() {
    return this.stackData[this.stackData.length - 1];
  }

  getMin() {
    return this.stackMin[this.stackMin.length - 1];
  }
}

const myStack = new MinStack();
myStack.push(-2);
myStack.push(0);
myStack.push(-3);
console.log(myStack.getMin());
// Output: -3
myStack.pop();
console.log(myStack.peek());
// Output: 0
console.log(myStack.getMin());
// Output: -2
