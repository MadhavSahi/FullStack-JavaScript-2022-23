//  **Question 1**

// Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

// **Examples:**
// Input: list1 = 5->2->3->8
// list2 = 1->7->4->5
// Output: New list = 5->7->4->8

// Input:list1 = 2->8->9->3
// list2 = 5->3->6->4
// Output: New list = 5->8->9->4

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

function createNewLinkedList(listA, listB) {
  if (listA.head === null || listB.head === null) {
    return null;
  }

  const newList = new LinkedList();
  let currentA = listA.head;
  let currentB = listB.head;

  while (currentA !== null && currentB !== null) {
    if (currentA.data >= currentB.data) {
      newList.addNode(currentA.data);
    } else {
      newList.addNode(currentB.data);
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return newList;
}

const listA = new LinkedList();
listA.addNode(5);
listA.addNode(2);
listA.addNode(3);
listA.addNode(8);

const listB = new LinkedList();
listB.addNode(1);
listB.addNode(7);
listB.addNode(4);
listB.addNode(5);

const newList = createNewLinkedList(listA, listB);
if (newList !== null) {
  let current = newList.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
