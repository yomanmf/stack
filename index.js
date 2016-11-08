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
    this._stack = [];
  }

  /**
   * Adds an element to stack
   * 
   * @function
   * @param value - value that you wish to put in stack
   */

  push(value) {
    this._stack.unshift(value);
  }

  /**
   * Removes the first element from stack and return it
   * 
   * @function
   * @return first element in stack
   */

  pop() {
    this._isEmptyAssert();
    return this._stack.shift();
  }

  /**
   * Returns the first element in stack
   * 
   * @function
   * @return first element in stack
   */

  peek() {
    this._isEmptyAssert();
    return this._stack[0];  
}

  /**
   * Checks if stack is empty
   * 
   * @function
   * @return true/false
   */

  isEmpty() {
    if (this._stack.length === 0) {
      return true
    }
    else {
      return false
    }
  }

  /**
   * Throws if stack is empty
   */

  _isEmptyAssert() {
    assert.notDeepStrictEqual(this._stack.length, 0, 'The stack is empty');
  }

}

module.exports = Stack;
