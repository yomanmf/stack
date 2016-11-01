'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('Stack testsuite', function () {
    it('should use expected API', function() {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');
        
        const stack = new Stack;
        assert.strictEqual(typeof stack.push, 'function', 'stack.push is not a function');
        assert.strictEqual(typeof stack.pop, 'function', 'stack.pop is not a function');
        assert.strictEqual(typeof stack.peek, 'function', 'stack.peek is not a function');
        assert.strictEqual(typeof stack.isEmpty, 'function', 'stack.isEmpty is not a function');
    });
    
    it('should add items on top of stack with push()', function () {
        const stack = new Stack;

        assert.doesNotThrow(function () {
            stack.push(1);
        }, 'stack.push() throws instead of adding item on top of stack');
    });
});
