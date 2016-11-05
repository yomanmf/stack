![Tests](https://travis-ci.org/yomanmf/stack.svg?branch=master)
# Stack
Stack implementation in JavaScript

# How to develop
```bash
git clone git@github.com:yomanmf/stack.git
cd stack
npm install
```

# API
```javascript
const stack = new Stack();
const Stack = require('stack');

//Добавить новый элемент в стек
stack.push(value)

//Удалить первый элемент в стеке и вернуть его значение
stack.pop()

//Вернуть первый элемент стека
stack.peek()

// Возвращает true|false в зависимости от того, пустой ли стек
stack.isEmpty() 
```
![Current status](http://i1.kym-cdn.com/photos/images/original/000/234/739/fa5.jpg)
