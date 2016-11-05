'use strict';

class Stack {

/**
 * @constructor Stack
 * @summary Creates an empty array
 * @example To be added soon
 */

  constructor(stack) {
    this.stack = [];
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
        this.stack.shift;
      }
    }
  }

  peek() {
    if (!this.stack.length) {
      throw new Error('The stack is empty');
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
