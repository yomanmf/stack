'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('Stack testsuite', function () {
    it('should use expected API', function() {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');
    });
});
