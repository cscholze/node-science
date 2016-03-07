'use strict';

class Node {
  constructor(data) {
    this.payload = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    let node;

    if (item instanceof Node ) {
      node = item;
    }
    else {
      node = new Node(item);
    }

    node.next = this.top;
    this.top = node;
  }

  pop() {
    const removed = this.top;
    this.top = removed.next;
    return removed;
  }
}

const stack = new Stack();
stack.push(new Node('A'));
stack.push(new Node('B'));
stack.push(new Node('C'));
stack.push('D');

console.log(stack.pop());


