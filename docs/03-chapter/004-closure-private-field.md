# closure field field
> 用闭包实现 private field


## Pure prototype tree
这种试可以生成很漂亮的 prototype 树

<!-- var isbn -->
- isbn 为字段
- setIsbn/getIsbn 这种才是真正的属性
- 这个就是面向对象里的： filed/property
- setIsbn/getIsbn 在JS里，称为 `特权方法` —— 因为他们是公用方法，却可以访问私有变量。

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


## 特权方法(privileged method)
> 因为他们是公用方法，却可以访问私有变量。


## 缺点
1. 虽然可以完美生成对应的 private set/getor 
2. 但是这个实际上是放在 new Class里的
3. 因此，每生成一个对象，就会生成一份这些方法。
4. 不在protype中，就意味着有多份。内存会占用更多。

## 总结
1. 并没有走prototype, 内存会消耗大
2. 继承也会受到影响（这是一种破坏继承的方式）
3. 所以一般还是会采用前面的两种方式进行

