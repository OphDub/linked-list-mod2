import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let newNode = new Node (data);
    let currentNode = this.head;
    this.length ++;
    this.head = newNode;
    newNode.next = currentNode;
  }

  shift() {
    if (!this.head) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = this.head.next;
      return currentHead;
    }
  }
}
