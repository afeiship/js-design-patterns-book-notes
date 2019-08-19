# full-opened-oop
> 门户大开型。

```js
var Book = function(isbn,title,author){
  if(!isbn) return;
  this.isbn = isbn;
  this.title = title;
  this.author = author;
};

Book.prototype.checkIsbn = function(){ return true };
Book.prototype.display = function(){};
```

