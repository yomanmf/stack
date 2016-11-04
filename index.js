'use strict';

class Stack {

/**
 * @constructor Stack
 * @summary Creates an empty array
 * @example To be added soon
 */

  constructor() {
    const stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (!stack.length) {
      console.error('The stack is empty');
    }
    else {
      return {
        this.stack.remove(0);
      }
    }
  }

  peek() {
    if (!this.stack.length) {
      console.error('The stack is empty');
    }
    else {
      return this.stack[0];
    }
  }

  isEmpty() {
    return {
      this.stack.length === 0;
    }
  }

}

module.exports = Stack;
