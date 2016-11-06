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
 * @this {Stack}
 * @example push(100500);
 * @param value - value that you wish to put in stack
 */


  push(value) {
    this.stack.push(value);
  }

/**
 * Removes the first element from stack
 * 
 * @function
 * @this {Stack}
 * @example pop();
 */

  pop() {
    this.stack.isEmpty;
    return this.stack.shift;
  }

/**
 * Returns the first element in stack
 * 
 * @function
 * @this {Stack}
 * @example peek();
 */

  peek() {
    this.stack.isEmpty;
    return this.stack[0];  
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
    assert(this.stack[0], 'The stack is empty');
  }

}

        const stack = new Stack;
        stack.push(123);
        console.log(stack[0]);

module.exports = Stack;
