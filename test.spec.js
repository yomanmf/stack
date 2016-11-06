'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('Check type of every function', function () {
    it('stack should use expected API', function() {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');
    });

    it('stack.push should use expected API', function() {
        const stack = new Stack;
        assert.strictEqual(typeof stack.push, 'function', 'stack.push is not a function');
    });

    it('stack.pop should use expected API', function() {
        const stack = new Stack;
        assert.strictEqual(typeof stack.pop, 'function', 'stack.pop is not a function');
    });

    it('stack.peek should use expected API', function() {
        const stack = new Stack;
        assert.strictEqual(typeof stack.peek, 'function', 'stack.peek is not a function');
    });

    it('stack.isEmpty should use expected API', function() { 
        const stack = new Stack;
        assert.strictEqual(typeof stack.isEmpty, 'function', 'stack.isEmpty is not a function');
    });

    it('stack.isEmptyAssert should use expected API', function() { 
        const stack = new Stack;
        assert.strictEqual(typeof stack.isEmptyAssert, 'function', 'stack.isEmptyAssert is not a function');
    });
});
    
describe('push() testsuite', function () {
    it('push() dont throw errors', function () {
        const stack = new Stack;

        assert.doesNotThrow(function () {
            stack.push(1);
        }, 'stack.push() throws instead of adding item on top of stack');
    });


    it('should add items on top of stack with push()', function () {
        const stack = new Stack;
        stack.push(1);

        assert.deepStrictEqual(stack.stack.length, 1, 'stack.length <> 1');
    });

});
    
describe('peek() testsuite', function () {
    it('should return the first element in stack with peek()', function() {
        const stack = new Stack;
        stack.push(1);
        stack.peek();

        assert.deepStrictEqual(stack.peek(), 1);
    });
});

describe('pop() testsuite', function () {
    it('pop() dont throw errors', function() {
        const stack = new Stack;

        assert.doesNotThrow(function () {
            stack.push(1);
            stack.pop();
        }, 'stack.stack.pop() throws instead of adding item on top of stack');
    });

    it('should remove the first element from stack with pop()', function() {
        const stack = new Stack;
        stack.push(1);
        stack.pop();

        assert.deepStrictEqual(stack.stack.length, 0, 'stack.stack.length <> 0');
    });     
});

describe('isEmpty() testsuite', function() {
    it('should check if stack is not empty with isEmpty()', function() {
        const stack = new Stack;
        stack.push(1);

        assert.deepStrictEqual(stack.isEmpty(), true);
    });

    it('should check if stack is empty with isEmpty()', function() {
        const stack = new Stack;

        assert.deepStrictEqual(stack.isEmpty(), false);
    });
});

describe('isEmptyAssert() testsuite', function() {
    it('should throw error if stack is empty with isEmptyAssert()', function() {
        const stack = new Stack;

        assert.throws(function() {
            stack.isEmptyAssert();
        }, /The stack is empty/, 'isEmptyAssert throw when stack is not empty');
    });

    it('dont throw error if stack is empty with isEmptyAssert()', function() {
        const stack = new Stack;
 
        assert.doesNotThrow(function() {
            stack.push(123);
        }, 'isEmptyAssert() dont throw when stack is empty');
    });
});

describe('Tests with several elements in stack', function() {
    it('First element should be correct', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[0], 1, 'first element in stack is wrong');
    });

     it('Second element should be correct', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[1], 2, 'second element in stack is wrong');
    });

     it('Third element should be correct', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[2], 3, 'third element in stack is wrong');
    });

    it('Stack length should be correct', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack.length, 3, 'Stack length is wrong');
});
});