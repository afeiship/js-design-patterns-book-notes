# proxy pattern

## 定义
为其他对象提供一种代理以控制对这个对象的访问。
在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介的作用

## 虚拟代理
- 虚拟代理是把一些开销很大的对象，延迟到真正需要它的时候才去创建执行

## 合并http请求

```js
//上传请求
let upload = function(ids) {
  $.ajax({
    data: {
      id: ids
    }
  });
};

//代理合并请求
let proxy = (function() {
  let cache = [],
    timer = null;
  return function(id) {
    cache[cache.length] = id;
    if (timer) return false;
    timer = setTimeout(function() {
      upload(cache.join(','));
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 2000);
  };
})();

// 绑定点击事件
let checkbox = document.getElementsByTagName('input');
for (var i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function() {
    if (this.checked === true) {
      proxy(this.id);
    }
  };
}
```

## resources
- https://juejin.im/entry/59d85109f265da065b66e25e
