# private field


## 存在问题
> 别人可以直接操作 instance.isbn ，而不需要通过 set/get 来操作。


## 用 private 命名约定来解决这个问题
> 约定 _filed 是 private 的，不要直接操作。

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
    this._isbn = inIsbn;
  },
  getIsbn: function(){
    return this._isbn || 'xxx-xxx-xxxx';
  },
  //....
};
```
