// Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

// **Example 1:**
// Input:
// N = 3
// value[] = {1,3,4}
// x(position at which tail is connected) = 2
// Output:True
// Explanation:In above test case N = 3.
// The linked list with nodes N = 3 is
// given. Then value of x=2 is given which
// means last node is connected with xth
// node of linked list. Therefore, there
// exists a loop.

// Example 2:
// Input:
// N = 4
// value[] = {1,8,3,4}
// x = 0
// Output:False
// Explanation:For N = 4 ,x = 0 means
// then lastNode->next = NULL, then
// the Linked list does not contains
// any loop.

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

  hasLoop() {
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (slowPointer && fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        return true;
      }
    }

    return false;
  }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(3);
list.addNode(4);

list.head.next.next.next = list.head.next;

console.log(list.hasLoop());
// Output: true
