# closure field field
> 用闭包实现 private field


## Pure prototype tree
这种试可以生成很漂亮的 prototype 树

<!-- var isbn -->
- isbn 为字段
- setIsbn/getIsbn 这种才是真正的属性
- 这个就是面向对象里的： filed/property

```js
var Book = function(inIsbn,inTitle,inAuthor){
  if(!inIsbn) return;
  var isbn, title, author;

  // private fields:
  this.getIsbn = function(){
    return isbn;
  };

  this.setIsbn = function(newIsbn){
    isbn = newIsbn;
  };
  // ....

  this.setIsbn(inIsbn);
  // ...
};
```
<img width="400" src="http://ww3.sinaimg.cn/large/006tNc79ly1g650vstdo6j30d806s0td.jpg" />
