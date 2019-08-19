# get/set
- accessor: 取值器
- mutator: 赋值器


## 加入了 取值器、赋值器 之后的结果
```js
// 用 set/get 来操作属性
var Book = function(isbn,title,author){
  if(!isbn) return;
  this.setIsbn(isbn);
  this.setTitle(title);
  this.setAuthor(autho);
};

Book.prototype = {
  setIsbn: function(inIsbn){
    this.isbn = inIsbn;
  },
  getIsbn: function(){
    return this.isbn || 'xxx-xxx-xxxx';
  },
  //....
};
```
