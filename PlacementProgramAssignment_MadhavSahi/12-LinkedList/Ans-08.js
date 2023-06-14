// Given a singly linked list, find if the linked list is circular  or not.

// > A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
// >

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

  checkCircular() {
    if (!this.head) {
      return false;
    }

    let slowPtr = this.head;
    let fastPtr = this.head.next;

    while (fastPtr && fastPtr.next) {
      if (slowPtr === fastPtr) {
        return true;
      }
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }

    return false;
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

console.log(linkedList.checkCircular());
// Output: false

linkedList.head.next.next.next.next = linkedList.head;

console.log(linkedList.checkCircular());
// Output: true
