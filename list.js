'use strict';

class Node {
  constructor (data) {
    this.payload = data;
    this.next = null;
  }
}

class List {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  addTail (node) {
    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  addHead(node) {
    this.tail = this.tail || node;
    node.next = this.head;
    this.head = node;
  }

  removeTail (node) {
    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
  }

  removeHead (node) {
    this.head = this.head.next;
  }

  get (index) {
    let current = this.head;
    for ( ; index > 0 ; index--) {
      current = current.next;
    }
    return current;
  }
}


const list = new List;
list.addTail(new Node('A'));
list.addTail(new Node('B'));
list.addTail(new Node('C'));
list.addTail(new Node('D'));
list.addTail(new Node('E'));
list.addTail(new Node('F'));
console.log(list);
console.log(list.get(8));
