// Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// **Example 1:**
// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.
// Example 2:
// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.
// Example 3:
// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

//Solution--->

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeLoop() {
    if (!this.head || !this.head.next) {
      return;
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer === fastPointer) {
        break;
      }
    }

    if (slowPointer !== fastPointer) {
      return;
    }

    slowPointer = this.head;
    while (slowPointer.next !== fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
    }

    fastPointer.next = null;
  }
}

const list1 = new LinkedList();
list1.addNode(1);
list1.addNode(3);
list1.addNode(4);
list1.head.next.next.next = list1.head.next; 

list1.removeLoop();

let result1 = "";
let current1 = list1.head;
while (current1) {
  result1 += current1.value + " ";
  current1 = current1.next;
}

console.log(result1); 
// Output: 1 3 4 

const list2 = new LinkedList();
list2.addNode(1);
list2.addNode(8);
list2.addNode(3);
list2.addNode(4);

list2.removeLoop();

let result2 = "";
let current2 = list2.head;
while (current2) {
  result2 += current2.value + " ";
  current2 = current2.next;
}
console.log(result2); 
// Output: 1 8 3 4 
