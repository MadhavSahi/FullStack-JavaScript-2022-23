// Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

// **Example 1:**

// ```
// Input:
// LinkedList: 1->2->3->4->5
// Output:1 2 4 5

// ```

// **Example 2:**
// Input:
// LinkedList: 2->4->6->7->5->1
// Output:2 4 6 5 1

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
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteMiddleNode() {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let slowPtr = this.head;
    let fastPtr = this.head;
    let prevNode = null;

    while (fastPtr && fastPtr.next) {
      fastPtr = fastPtr.next.next;
      prevNode = slowPtr;
      slowPtr = slowPtr.next;
    }

    prevNode.next = slowPtr.next;
  }

  displayList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log("Before deletion:");
list.displayList();

list.deleteMiddleNode();

console.log("After deletion:");
list.displayList();
