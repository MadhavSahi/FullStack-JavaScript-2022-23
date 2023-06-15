// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

// **Example 1:**
// Input:
// 5 -> 10 -> 19 -> 28
// |     |     |     |
// 7     20    22   35
// |           |     |
// 8          50    40
// |                 |
// 30               45
// Output: 5-> 7-> 8- > 10 -> 19-> 20->
// 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation:
// The resultant linked lists has every
// node in a single level.(Note:| represents the bottom pointer.)

// Example 2:
// Input:
// 5 -> 10 -> 19 -> 28
// |          |
// 7          22
// |          |
// 8          50
// |
// 30
// Output: 5->7->8->10->19->22->28->30->50
// Explanation:
// The resultant linked lists has every
// node in a single level.

// (Note:| represents the bottom pointer.)

// Solution--->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.bottom = null;
  }
}

function mergeSubLinkedLists(subList1, subList2) {
  if (!subList1) return subList2;
  if (!subList2) return subList1;

  let result;
  if (subList1.value < subList2.value) {
    result = subList1;
    result.bottom = mergeSubLinkedLists(subList1.bottom, subList2);
  } else {
    result = subList2;
    result.bottom = mergeSubLinkedLists(subList1, subList2.bottom);
  }

  result.next = null;
  return result;
}

function flattenLinkedList(head) {
  if (!head || !head.next) return head;

  head.next = flattenLinkedList(head.next);

  head = mergeSubLinkedLists(head, head.next);

  return head;
}

const headNode = new Node(5);
const node1 = new Node(10);
const node2 = new Node(19);
const node3 = new Node(28);
const node4 = new Node(7);
const node5 = new Node(20);
const node6 = new Node(22);
const node7 = new Node(35);
const node8 = new Node(8);
const node9 = new Node(50);
const node10 = new Node(40);
const node11 = new Node(30);
const node12 = new Node(45);

headNode.next = node1;
node1.next = node2;
node2.next = node3;
node1.bottom = node4;
node2.bottom = node5;
node3.bottom = node7;
node4.bottom = node8;
node8.bottom = node11;
node5.bottom = node9;
node9.bottom = node12;
node7.bottom = node10;

const flattenedList = flattenLinkedList(headNode);

let currentNode = flattenedList;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.bottom;
}
