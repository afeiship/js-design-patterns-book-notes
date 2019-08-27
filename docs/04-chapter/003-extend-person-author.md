# extend-person-author

```js
function Person(name){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
};

// Class author
function Author(name, books){
  Person.call(this, name);
  this.books = books;
}

extends(Author, Person);

Author.prototype.getBooks = function(){
  return this.books;
};
```

## 一张图说明一切
![](http://ww1.sinaimg.cn/large/006y8mN6ly1g6dyxy8zakj31of0u0n8j.jpg)
