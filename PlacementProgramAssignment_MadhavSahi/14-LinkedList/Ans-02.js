// A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// **Example 1:**

// ```
// Input:
// LinkedList: 4->5->6
// Output:457

// ```

// **Example 2:**
// Input:
// LinkedList: 1->2->3
// Output:124

// Solution--->

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addOneToLinkedList(head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let lastNonNine = dummyNode;
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.data !== 9) {
      lastNonNine = currentNode;
    }
    currentNode = currentNode.next;
  }

  lastNonNine.data += 1;

  currentNode = lastNonNine.next;
  while (currentNode !== null) {
    currentNode.data = 0;
    currentNode = currentNode.next;
  }

  if (dummyNode.data === 0) {
    dummyNode.data = 1;
    return dummyNode;
  }

  return dummyNode.next;
}

const headNode = new ListNode(4);
const node1 = new ListNode(5);
const node2 = new ListNode(6);

headNode.next = node1;
node1.next = node2;

const newHead = addOneToLinkedList(headNode);

let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
