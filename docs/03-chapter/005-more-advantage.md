# more advantage mode


## 更加高级的创建方式
```js
var Book = (function(){
  return function(isbn,title,author){
    var isbn,title, author;
    this.getIsbn = function(){
      return isbn;
    };
    this.setIsbn = function(inIsbn){
      this.isbn = inIsbn;
    };

    this.setIsbn(isbn);
    // ....
  };
}());

// static method:
Book.convertToTitleCase = function(){};

// 实例方法：
Book.prototype = {
  display: function(){}
};
```
