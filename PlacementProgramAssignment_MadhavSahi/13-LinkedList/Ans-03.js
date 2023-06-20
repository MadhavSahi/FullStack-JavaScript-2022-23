// Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// **Example 1:**
// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output:4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.
// Example 2:
// Input:
// LinkedList: 1->2->3->4->5
// K = 3
// Output:3 2 1 5 4
// Explanation:
// The first 3 elements are 1,2,3 are reversed
// first and then elements 4,5 are reversed.Hence,
// the resultant linked list is 3->2->1->5->4.

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

  reverseKGroup(k) {
    this.head = this.reverseKGroupUtil(this.head, k);
  }

  reverseKGroupUtil(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;

    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }

    if (next !== null) {
      head.next = this.reverseKGroupUtil(next, k);
    }

    return prev;
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(2);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);
linkedList.addNode(7);
linkedList.addNode(8);

const k = 4;

linkedList.reverseKGroup(k);

let current = linkedList.head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
