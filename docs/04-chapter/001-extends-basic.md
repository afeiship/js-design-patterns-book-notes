# extends-basic

```js
function Person(name){
  this.name = name;
}
Person.prototype.getName = function(){
  return this.name;
};


// Author < Person
function Author(name,books){
  // 构造函数调用
  Person.call(this, name);
  this.books = books;
}

// prototype 要么指向另一个对象，要么指向是 null
Author.prototype = new Person();
// 这里如果不改，会是 Person
Author.prototype.constructor = Author;

// 自己的实例方法
Author.prototype.getBooks = function(){
  return this.books;
}
```
