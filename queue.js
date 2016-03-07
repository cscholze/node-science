'use strict';

class Node {
  constructor(data) {
    this.payload = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(node) {
    if (this.head) {
      this.tail.next = node;
    }
    else {
      this.head = node;
    }

    this.tail = node;
  }

  dequeue () {
    const removed = this.head;
    this.head = removed.next;
    return removed;
  }
}

const queue = new Queue();
queue.enqueue(new Node('A'))
queue.enqueue(new Node('B'));
queue.enqueue(new Node('C'));
queue.enqueue(new Node('D'));

console.log(queue.dequeue());


