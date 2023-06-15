// Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

// **Example 1:**
// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output:8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
// Example 2:
// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output:5 6 7 8 1 2 3 4

// Solution--->

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || !head.next || k === 0) return head;

  let current = head;
  let count = 1;

  while (count < k && current !== null) {
    current = current.next;
    count++;
  }

  if (!current) return head;

  let kthNode = current;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = head;
  head = kthNode.next;
  kthNode.next = null;

  return head;
}

const headNode = new ListNode(2);
headNode.next = new ListNode(4);
headNode.next.next = new ListNode(7);
headNode.next.next.next = new ListNode(8);
headNode.next.next.next.next = new ListNode(9);

const k = 3;

const shiftedList = leftShiftLinkedList(headNode, k);

let current = shiftedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
