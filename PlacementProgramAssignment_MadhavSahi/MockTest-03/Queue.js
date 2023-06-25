class MyQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new MyQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());
// Output: 10

queue.dequeue();
console.log(queue.peek());
// Output: 20

console.log(queue.isEmpty());
// Output: false

console.log(queue.size());
// Output: 2

queue.print();
// Output: [20, 30]
