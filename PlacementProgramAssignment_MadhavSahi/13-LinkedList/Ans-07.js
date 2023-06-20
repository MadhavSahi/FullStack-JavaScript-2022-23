// Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

// **Example:**
// Original Linked list 10 8 4 2
// Reversed Linked list 2 4 8 10

//Solution--->

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let temp = null;

  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  return temp.prev;
}

const headNode = new Node(10);
const node1 = new Node(8);
const node2 = new Node(4);
const node3 = new Node(2);

headNode.next = node1;
node1.prev = headNode;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

const reversedHead = reverseDoublyLinkedList(headNode);

let currentNode = reversedHead;

while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
