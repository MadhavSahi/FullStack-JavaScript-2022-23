// Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

// Example 1:
// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output:8
// Explanation:In the first example, there
// are 9 nodes in linked list and we need
// to find 2nd node from end. 2nd node
// from end is 8.

// Example 2:
// Input:
// N = 5
// LinkedList: 10->5->100->5
// Output:-1
// Explanation:In the second example, there
// are 4 nodes in the linked list and we
// need to find 5th from the end. Since 'n'
// is more than the number of nodes in the
// linked list, the output is -1.

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

  findNthNodeFromEnd(n) {
    if (n <= 0 || !this.head) {
      return -1;
    }

    let fastPointer = this.head;
    let slowPointer = this.head;
    let count = 1;

    while (count <= n) {
      if (!fastPointer) {
        return -1;
      }
      fastPointer = fastPointer.next;
      count++;
    }

    while (fastPointer) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }

    return slowPointer.value;
  }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);
list.addNode(9);

console.log(list.findNthNodeFromEnd(2)); 
// Output: 8

const newList = new LinkedList();
newList.addNode(10);
newList.addNode(5);
newList.addNode(100);
newList.addNode(5);

console.log(newList.findNthNodeFromEnd(5)); 
// Output: -1
