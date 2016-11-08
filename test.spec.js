'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('Check type of every function', function () {
    it('should use expected API', function() {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');

        const stack = new Stack;
        assert.strictEqual(typeof stack.push, 'function', 'stack.push is not a function');
        assert.strictEqual(typeof stack.pop, 'function', 'stack.pop is not a function');
        assert.strictEqual(typeof stack.peek, 'function', 'stack.peek is not a function');
        assert.strictEqual(typeof stack.isEmpty, 'function', 'stack.isEmpty is not a function');
        assert.strictEqual(typeof stack._isEmptyAssert, 'function', 'stack._isEmptyAssert is not a function');
    });
});
    
describe('push() testsuite', function () {
    it('shoudl not throw errors', function () {
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
    it('should not throw errors', function() {
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

    it('should act like FIFO data structure', function () {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert.strictEqual(stack.pop(), 3);
    });
});

describe('isEmpty() testsuite', function() {
    it('should check if stack is not empty with isEmpty()', function() {
        const stack = new Stack;
        stack.push(1);

        assert.deepStrictEqual(stack.isEmpty(), false);
    });

    it('should check if stack is empty with isEmpty()', function() {
        const stack = new Stack;

        assert.deepStrictEqual(stack.isEmpty(), true);
    });
});

describe('_isEmptyAssert() testsuite', function() {
    it('should throw error if stack is empty with _isEmptyAssert()', function() {
        const stack = new Stack;

        assert.throws(function() {
            stack._isEmptyAssert();
        }, /The stack is empty/, '_isEmptyAssert throw when stack is not empty');
    });

    it('should not throw error if stack is empty with _isEmptyAssert()', function() {
        const stack = new Stack;
 
        assert.doesNotThrow(function() {
            stack.push(123);
        }, '_isEmptyAssert() dont throw when stack is empty');
    });
});

describe('Tests with several elements in stack', function() {
    it('should add first element correctly', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[0], 3, 'first element in stack is wrong');
    });

     it('should add second element correctly', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[1], 2, 'second element in stack is wrong');
    });

     it('should add third element correctly', function() {
        const stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assert.deepStrictEqual(stack.stack[2], 1, 'third element in stack is wrong');
    });

    it('stack length should be correct', function() {
        const stack = new Stack;
        stack.push(1);

        assert(stack.isEmpty, 'stack length is wrong');
});
});