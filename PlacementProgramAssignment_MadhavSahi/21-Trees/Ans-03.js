// Question-3:

// Write a program to convert a binary tree to a doubly linked list.

// Input:

//         10

//        /   \

//      5     20

//            /   \

//         30     35

// Output:

// 5 10 30 20 35

// Solution--->

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function convertBinaryTreeToDoublyLinkedList(root) {
  if (root === null) {
    return null;
  }

  let head = null;
  let previous = null;

  function inorderTraversal(node) {
    if (node === null) {
      return;
    }

    inorderTraversal(node.left);

    const listNode = new DoublyLinkedListNode(node.value);

    if (previous === null) {
      head = listNode;
    } else {
      previous.next = listNode;
      listNode.prev = previous;
    }

    previous = listNode;

    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  return head;
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

const head = convertBinaryTreeToDoublyLinkedList(root);

function printDoublyLinkedList(head) {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  console.log(values.join(" "));
}

printDoublyLinkedList(head);
