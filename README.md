![Tests](https://travis-ci.org/yomanmf/stack.svg?branch=master)
# Stack
Stack implementation in JavaScript

# How to develop
```bash
git clone git@github.com:yomanmf/stack.git
cd stack
npm install
```

# How to run tests
```bash
npm tests
```

# API
```javascript
//Initialization
const stack = new Stack();
const Stack = require('stack');

stack.push(100500) // returns 100500

stack.pop() // removes the first element and returns its' value

stack.peek() // returns first element

stack.isEmpty() //Returns  true|false in case if there is an element in stack
```
![Current status](http://i1.kym-cdn.com/photos/images/original/000/234/739/fa5.jpg)
