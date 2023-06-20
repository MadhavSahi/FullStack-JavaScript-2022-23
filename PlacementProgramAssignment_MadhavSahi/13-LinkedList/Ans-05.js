// Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

// **Examples**:
// Input:   1->2->3->5->2->10, key = 2
// Output:  1->2->3->5->10

//Solution--->
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteLastKeyOccurrence(key) {
    let prev = null;
    let current = this.head;
    let lastKeyOccurrence = null;

    while (current !== null) {
      if (current.data === key) {
        lastKeyOccurrence = current;
      }
      current = current.next;
    }

    if (lastKeyOccurrence !== null) {
      if (lastKeyOccurrence === this.head) {
        this.head = this.head.next;
      } else {
        prev = this.head;
        while (prev.next !== lastKeyOccurrence) {
          prev = prev.next;
        }
        prev.next = lastKeyOccurrence.next;
      }
    }
  }

  printLinkedList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(5);
linkedList.addNode(2);
linkedList.addNode(10);

const key = 2;
linkedList.deleteLastKeyOccurrence(key);
linkedList.printLinkedList();
