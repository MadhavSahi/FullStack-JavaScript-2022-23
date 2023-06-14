// Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

// Examples:
// Input:
// M = 2, N = 2
// Linked List: 1->2->3->4->5->6->7->8
// Output:
// Linked List: 1->2->5->6

// Input:
// M = 3, N = 2
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->2->3->6->7->8

// Input:
// M = 1, N = 1
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->3->5->7->9

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

  retainAndDeleteNodes(M, N) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let count = 1;

    while (currentNode) {
      if (count < M) {
        currentNode = currentNode.next;
        count++;
      } else {
        let temp = currentNode;
        let deleteCount = 0;
        while (temp && deleteCount < N) {
          temp = temp.next;
          deleteCount++;
        }
        currentNode.next = temp;
        currentNode = temp;
        count = 1;
      }
    }
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);

list.retainAndDeleteNodes(2, 2);

let result = "";
let current = list.head;
while (current) {
  result += current.value + " ";
  current = current.next;
}

console.log(result); 
// Output: 1 2 5 6

const list2 = new LinkedList();
list2.addNode(1);
list2.addNode(2);
list2.addNode(3);
list2.addNode(4);
list2.addNode(5);
list2.addNode(6);
list2.addNode(7);
list2.addNode(8);
list2.addNode(9);
list2.addNode(10);

list2.retainAndDeleteNodes(3, 2);

let result2 = "";
let current2 = list2.head;
while (current2) {
  result2 += current2.value + " ";
  current2 = current2.next;
}

console.log(result2); 
// Output: 1 2 3 6 7 8

const list3 = new LinkedList();
list3.addNode(1);
list3.addNode(2);
list3.addNode(3);
list3.addNode(4);
list3.addNode(5);
list3.addNode(6);
list3.addNode(7);
list3.addNode(8);
list3.addNode(9);
list3.addNode(10);

list3.retainAndDeleteNodes(1, 1);

let result3 = "";
let current3 = list3.head;
while (current3) {
  result3 += current3.value + " ";
  current3 = current3.next;
}

console.log(result3); 
// Output: 1 3 5 7 9
