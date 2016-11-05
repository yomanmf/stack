'use strict';

const assert = require('assert');

class Stack {

/**
 * @constructor Stack
 * @summary Creates an empty array
 */

  constructor(stack) {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.isEmpty;
      return this.stack.shift;
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
    assert(this.stack[0], 'The stack is empty');
  }

}

module.exports = Stack;
