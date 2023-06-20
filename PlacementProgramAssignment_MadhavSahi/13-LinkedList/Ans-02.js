//Question-2
// Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

// For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

// **Example 1:**

// ```
// Input:
// LinkedList:
// 11->11->11->21->43->43->60
// Output:
// 11->21->43->60
// ```

// **Example 2:**
// Input:
// LinkedList:
// 10->12->12->25->25->25->34
// Output:
// 10->12->25->34

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
}

function removeDuplicateNodes(list) {
  if (list.head === null) {
    return null;
  }

  let current = list.head;
  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return list;
}

const linkedList = new LinkedList();
linkedList.addNode(11);
linkedList.addNode(11);
linkedList.addNode(11);
linkedList.addNode(21);
linkedList.addNode(43);
linkedList.addNode(43);
linkedList.addNode(60);

const newList = removeDuplicateNodes(linkedList);
if (newList !== null) {
  let current = newList.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
