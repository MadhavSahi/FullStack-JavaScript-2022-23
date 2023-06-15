// Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of `ListNode` objects.)

// **Example 1:**
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

// Example 2:
// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]

// Example 3:
// Input: head = [1,2,3,-3,-2]
// Output: [1]

// Solution--->
function removeZeroSumSequences(head) {
  function Node(val) {
    this.val = val;
    this.next = null;
  }

  const dummy = new Node(0);
  dummy.next = head;

  const map = new Map();
  let prefixSum = 0;
  let currentNode = dummy;

  while (currentNode) {
    prefixSum += currentNode.val;

    if (map.has(prefixSum)) {
      let prevNode = map.get(prefixSum).next;
      let currSum = prefixSum + prevNode.val;

      while (prevNode !== currentNode) {
        map.delete(currSum);
        prevNode = prevNode.next;
        currSum += prevNode.val;
      }

      map.get(prefixSum).next = currentNode.next;
    } else {
      map.set(prefixSum, currentNode);
    }

    currentNode = currentNode.next;
  }

  return dummy.next;
}
