// 1. **Merge k Sorted Lists**

// You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

// *Merge all the linked-lists into one sorted linked-list and return it.*

// **Example 1:**
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// **Constraints:**

// - `k == lists.length`
// - `0 <= k <= 10000`
// - `0 <= lists[i].length <= 500`
// - `-10000 <= lists[i][j] <= 10000`
// - `lists[i]` is sorted in **ascending order**.
// - The sum of `lists[i].length` will not exceed `10000`.

// Solution--->
function mergeSortedLists(lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const listA = lists[i];
      const listB = lists[i + 1];
      const mergedList = mergeTwoLists(listA, listB);
      mergedLists.push(mergedList);
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeTwoLists(listA, listB) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (listA !== null && listB !== null) {
    if (listA.val < listB.val) {
      current.next = listA;
      listA = listA.next;
    } else {
      current.next = listB;
      listB = listB.next;
    }

    current = current.next;
  }

  if (listA !== null) {
    current.next = listA;
  }

  if (listB !== null) {
    current.next = listB;
  }

  return dummy.next;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const lists1 = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
];
console.log(mergeSortedLists(lists1));
// Output: [1,1,2,3,4,4,5,6]

const lists2 = [];
console.log(mergeSortedLists(lists2));
// Output: []

const lists3 = [[]];
console.log(mergeSortedLists(lists3));
// Output: []
