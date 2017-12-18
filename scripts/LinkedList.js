import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let newNode = new Node (data);
    let currentNode = this.head;
    this.length++;
    this.head = newNode;
    newNode.next = currentNode;
  }

  shift() {
    this.length--;

    if (!this.head) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = this.head.next;
      return currentHead;
    }
  }

  push(data) {
    //Instantiate new node based on data
    //Check head if next property is 'null'
    //If property is not null, go to next node and check
    //Check until property is 'null'
    let newNode = new Node (data);
    let currentHead = this.head;

    if (!currentHead) {
      this.head = newNode;
      this.length++;
      return newNode;
    }

    while (currentHead.next) {
      currentHead = currentHead.next;
    }

    currentHead.next = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    let currentHead = this.head;
    let nodeToDelete;

    if (this.length <= 0) {
      return null;
    }

    if (this.length < 2) {
      this.head = null;
    }

    while (currentHead.next) {
      nodeToDelete = currentHead;
      currentHead = currentHead.next;
    }

    if (nodeToDelete) {
      nodeToDelete.next = null;
    }

    this.length--;
    return currentHead;
  }
}
