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

  add (node) {
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }
}

const list = new List;
list.add(new Node('A'));
list.add(new Node('B'));
list.add(new Node('C'));
list.add(new Node('D'));
list.add(new Node('E'));
list.add(new Node('F'));
console.log(list);
