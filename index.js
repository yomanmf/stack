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
   * @this {Stack}
   * @example push(100500);
   * @param value - value that you wish to put in stack
   */

  push(value) {
    this._stack.push(value);
  }

  /**
   * Removes the first element from stack
   * 
   * @function
   * @this {Stack}
   * @example pop();
   */

  pop() {
    this.isEmptyAssert;
    return this._stack.shift();
  }

  /**
   * Returns the first element in stack
   * 
   * @function
   * @this {Stack}
   * @example peek();
   */

  peek() {
    this.isEmptyAssert;
    return this._stack[0];  
}

  /**
   * Checks if stack is empty
   * 
   * @function
   * @this {Stack}
   * @returns true/false
   * example stack.isEmpty();
   */

  isEmpty() {
    return Boolean(this._stack[0]);
  }

  /**
   * Throws if stack is empty
   * 
   * @function
   * @this {Stack}
   * example stack._isEmptyAssert();
   */

  _isEmptyAssert() {
    assert(this._stack[0], 'The stack is empty');
  }

}

module.exports = Stack;
