'use strict';

const assert = require('assert');

class Stack {

  /**
   * Creates an empty array
   * 
   * @constructor
   * @this {Stack}
   */

  constructor(stack) {
    this.stack = [];
  }

  /**
   * Adds an element to stack
   * 
   * @function
   * @param value - value that you wish to put in stack
   */

  push(value) {
    this.stack.unshift(value);
  }

  /**
   * Removes the first element from stack and return it
   * 
   * @function
   * @return first element in stack
   */

  pop() {
    this.isEmptyAssert();
    return this.stack.shift();
  }

  /**
   * Returns the first element in stack
   * 
   * @function
   * @return first element in stack
   */

  peek() {
    this.isEmptyAssert();
    return this.stack[0];  
}

  /**
   * Checks if stack is empty
   * 
   * @function
   * @return true/false
   */

  isEmpty() {
    if (this.stack.length === 0) {
      return true
    }
    else {
      return false
    }
  }

  /**
   * Throws if stack is empty
   */

  isEmptyAssert() {
    assert.notDeepStrictEqual(this.stack.length, 0, 'The stack is empty');
  }

}

module.exports = Stack;
