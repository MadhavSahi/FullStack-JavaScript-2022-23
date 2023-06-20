// Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

// **Example 1:**
// Input:
// LinkedList = 1 <--> 3 <--> 4
// x = 3
// Output:1 3
// Explanation:After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.
// Example 2:
// Input:
// LinkedList = 1 <--> 5 <--> 2 <--> 9
// x = 1
// Output:5 2 9

// Solution--->
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeFromPosition(head, pos) {
  if (head === null) {
    return head;
  }

  let current = head;

  if (pos === 1) {
    head = head.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }

  let count = 1;
  while (count < pos && current !== null) {
    current = current.next;
    count++;
  }

  if (current === null) {
    return head;
  }

  current.prev.next = current.next;
  if (current.next !== null) {
    current.next.prev = current.prev;
  }

  return head;
}

const headNode = new Node(1);
const node1 = new Node(5);
const node2 = new Node(2);
const node3 = new Node(9);

headNode.next = node1;
node1.prev = headNode;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

const position = 1;
const newHead = deleteNodeFromPosition(headNode, position);

let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
