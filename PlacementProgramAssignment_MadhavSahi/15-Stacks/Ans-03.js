// Implement a Stack using two queues **q1** and **q2**.

// **Example 1:**
// Input:
// push(2)
// push(3)
// pop()
// push(4)
// pop()
// Output:3 4
// Explanation:
// push(2) the stack will be {2}
// push(3) the stack will be {2 3}
// pop()   poped element will be 3 the
//         stack will be {2}
// push(4) the stack will be {2 4}
// pop()   poped element will be 4

// Example 2:
// Input:
// push(2)
// pop()
// pop()
// push(3)
// Output:2 -1

// Solution---->

class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(element) {
    this.queue1.push(element);
  }

  pop() {
    if (this.queue1.length === 0) {
      return -1; 
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const poppedElement = this.queue1.shift();

    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;

    return poppedElement;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
