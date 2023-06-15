// Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// **Example 1:**
// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.
// **Example 2:**

// ```
// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.
// ```

// **Example 3:**
// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

// Solution--->
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeLoopFromLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    if (slowPtr === fastPtr) {
      break;
    }
  }

  if (fastPtr === null || fastPtr.next === null) {
    return head;
  }

  slowPtr = head;
  while (slowPtr.next !== fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  fastPtr.next = null;

  return head;
}

const headNode = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);

headNode.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

const newHead = removeLoopFromLinkedList(headNode);

let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
