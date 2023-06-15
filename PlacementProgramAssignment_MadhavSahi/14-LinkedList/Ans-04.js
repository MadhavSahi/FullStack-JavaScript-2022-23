// You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

// Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

// Return the head of the copied linked list.

// !https://contribute.geeksforgeeks.org/wp-content/uploads/clone.jpg

// **Note** :- The diagram isn't part of any example, it just depicts an example of how the linked list may look like.

// **Example 1:**
// Input:
// N = 4, M = 2
// value = {1,2,3,4}
// pairs = {{1,2},{2,4}}
// Output:1
// Explanation:In this test case, there
// are 4 nodes in linked list.  Among these
// 4 nodes,  2 nodes have arbitrary pointer
// set, rest two nodes have arbitrary pointer
// as NULL. Second line tells us the value
// of four nodes. The third line gives the
// information about arbitrary pointers.
// The first node arbitrary pointer is set to
// node 2.  The second node arbitrary pointer
// is set to node 4.

// Example 2:
// Input:
// N = 4, M = 2
// value[] = {1,3,5,9}
// pairs[] = {{1,1},{3,4}}
// Output:1
// Explanation:In the given testcase ,
// applying the method as stated in the
// above example, the output will be 1.

//Solution--->

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
    this.randomNode = null;
  }
}

function cloneLinkedList(headNode) {
  if (!headNode) return null;

  const cloneMap = new Map();

  let current = headNode;
  while (current) {
    cloneMap.set(current, new Node(current.value));
    current = current.nextNode;
  }

  current = headNode;
  while (current) {
    const cloneNode = cloneMap.get(current);
    cloneNode.nextNode = cloneMap.get(current.nextNode);
    cloneNode.randomNode = cloneMap.get(current.randomNode);
    current = current.nextNode;
  }

  return cloneMap.get(headNode);
}

const originalHead = new Node(1);
const nodeA = new Node(2);
const nodeB = new Node(3);
const nodeC = new Node(4);

originalHead.nextNode = nodeA;
nodeA.nextNode = nodeB;
nodeB.nextNode = nodeC;

originalHead.randomNode = nodeB;
nodeA.randomNode = nodeC;
nodeC.randomNode = nodeA;

const clonedList = cloneLinkedList(originalHead);

let currentNode = clonedList;
while (currentNode !== null) {
  console.log(`Value: ${currentNode.value}`);
  console.log(
    `Next: ${currentNode.nextNode ? currentNode.nextNode.value : null}`
  );
  console.log(
    `Random: ${currentNode.randomNode ? currentNode.randomNode.value : null}`
  );
  console.log("---");
  currentNode = currentNode.nextNode;
}
