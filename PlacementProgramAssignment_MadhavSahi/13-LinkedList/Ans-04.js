// Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

// **Example:**
// Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
// Output:   3->2->1->4->5->6->9->8->7->NULL.

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

  reverseAlternateKGroup(k) {
    this.head = this.reverseAlternateKGroupUtil(this.head, k, true);
  }

  reverseAlternateKGroupUtil(head, k, reverse) {
    if (head === null) {
      return null;
    }

    let current = head;
    let prev = null;
    let next = null;
    let count = 0;

    while (current !== null && count < k) {
      next = current.next;
      if (reverse) {
        current.next = prev;
      }
      prev = current;
      current = next;
      count++;
    }

    if (reverse) {
      head.next = this.reverseAlternateKGroupUtil(next, k, !reverse);
    } else {
      head.next = this.reverseAlternateKGroupUtil(next, k, reverse);
    }

    return prev;
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);
linkedList.addNode(7);
linkedList.addNode(8);
linkedList.addNode(9);

const k = 3;

linkedList.reverseAlternateKGroup(k);

let current = linkedList.head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
