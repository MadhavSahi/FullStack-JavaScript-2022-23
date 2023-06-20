// Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

// Only following standard operations are allowed on queue.

// - **enqueue(x) :** Add an item x to rear of queue
// - **dequeue() :** Remove an item from front of queue
// - **size() :** Returns number of elements in queue.
// - **front() :** Finds front item.

// Solution--->

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseFirstKElements(queue, k) {
  if (k < 0 || k > queue.size()) {
    return "Invalid value of k";
  }

  const stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.dequeue());
  }

  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  for (let i = 0; i < queue.size() - k; i++) {
    queue.enqueue(queue.dequeue());
  }

  return queue;
}

const inputQueue = new Queue();
inputQueue.enqueue(1);
inputQueue.enqueue(2);
inputQueue.enqueue(3);
inputQueue.enqueue(4);
inputQueue.enqueue(5);
inputQueue.enqueue(6);

console.log("Original Queue:", inputQueue);
//Output : [ 1, 2, 3, 4, 5, 6 ]

console.log("Reversed Queue (k=3):", reverseFirstKElements(inputQueue, 3));
//Output : [3, 2, 1, 4, 5, 6]
