// Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

// **Examples:**

// Input: a: 5->10->15, b: 2->3->20

// Output: 2->3->5->10->15->20

// Input: a: 1->1, b: 2->4

// Output: 1->1->2->4

// Solution--->
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeLinkedLists(a, b) {
  if (a === null) {
    return b;
  }
  if (b === null) {
    return a;
  }

  let mergedHead = null;
  let mergedTail = null;

  if (a.data <= b.data) {
    mergedHead = a;
    mergedTail = a;
    a = a.next;
  } else {
    mergedHead = b;
    mergedTail = b;
    b = b.next;
  }

  while (a !== null && b !== null) {
    if (a.data <= b.data) {
      mergedTail.next = a;
      mergedTail = a;
      a = a.next;
    } else {
      mergedTail.next = b;
      mergedTail = b;
      b = b.next;
    }
  }

  if (a !== null) {
    mergedTail.next = a;
  } else {
    mergedTail.next = b;
  }

  return mergedHead;
}

const list1 = new Node(5);
list1.next = new Node(10);
list1.next.next = new Node(15);

const list2 = new Node(2);
list2.next = new Node(3);
list2.next.next = new Node(20);

const mergedHead = mergeLinkedLists(list1, list2);

let current = mergedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
