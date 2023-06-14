// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

// **Examples:**

// > Input: R->A->D->A->R->NULL
// >
// >
// > **Output:** Yes
// >
// > **Input:** C->O->D->E->NULL
// >
// > **Output:** No
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

  checkPalindrome() {
    if (!this.head) {
      return false;
    }

    let slowPointer = this.head;
    let fastPointer = this.head;
    let stack = [];

    while (fastPointer && fastPointer.next) {
      stack.push(slowPointer.value);
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    if (fastPointer) {
      slowPointer = slowPointer.next;
    }

    while (slowPointer) {
      const top = stack.pop();
      if (top !== slowPointer.value) {
        return false;
      }
      slowPointer = slowPointer.next;
    }

    return true;
  }
}

const list1 = new LinkedList();
list1.addNode("R");
list1.addNode("A");
list1.addNode("D");
list1.addNode("A");
list1.addNode("R");

console.log(list1.checkPalindrome());
// Output: true

const list2 = new LinkedList();
list2.addNode("C");
list2.addNode("O");
list2.addNode("D");
list2.addNode("E");

console.log(list2.checkPalindrome());
// Output: false
