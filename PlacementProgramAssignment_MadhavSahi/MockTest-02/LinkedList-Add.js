class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addLinkedLists(l1, l2) {
  let dummy = new ListNode(); 
  let current = dummy; 
  let carry = 0; 

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10); 
    current.next = new ListNode(sum % 10); 
    current = current.next; 
  }

  return dummy.next; 
}
