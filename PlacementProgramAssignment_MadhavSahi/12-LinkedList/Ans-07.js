// Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
// For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

// Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

//Solution--->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  insertAlternatePositions(secondList) {
    if (!secondList.head) {
      return;
    }

    let firstListCurrent = this.head;
    let secondListCurrent = secondList.head;

    while (firstListCurrent && secondListCurrent) {
      let firstListNext = firstListCurrent.next;
      let secondListNext = secondListCurrent.next;

      firstListCurrent.next = secondListCurrent;
      secondListCurrent.next = firstListNext;

      firstListCurrent = firstListNext;
      secondListCurrent = secondListNext;
    }

    secondList.head = null;
  }
}

const firstList = new LinkedList();
firstList.addNode(5);
firstList.addNode(7);
firstList.addNode(17);
firstList.addNode(13);
firstList.addNode(11);

const secondList = new LinkedList();
secondList.addNode(12);
secondList.addNode(10);
secondList.addNode(2);
secondList.addNode(4);
secondList.addNode(6);

firstList.insertAlternatePositions(secondList);

let firstListResult = "";
let currentFirstList = firstList.head;
while (currentFirstList) {
  firstListResult += currentFirstList.value + " ";
  currentFirstList = currentFirstList.next;
}

let secondListResult = "";
let currentSecondList = secondList.head;
while (currentSecondList) {
  secondListResult += currentSecondList.value + " ";
  currentSecondList = currentSecondList.next;
}

console.log(firstListResult);
// Output: 5 12 7 10 17 2 13 4 11 6

console.log(secondListResult);
// Output: (empty)
