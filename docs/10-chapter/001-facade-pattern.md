# Facade Pattern
> 外观模式 (门面模式).

## 作用
- 简化类接口
- 消除类与其它 client 之间的耦合

```js
var mobileEvent = {
  // ...
  stop: function(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  // ...
};
```

## resources
- https://www.cnblogs.com/tomxu/archive/2012/02/28/2353448.html
- http://www.alloyteam.com/2012/10/commonly-javascript-design-patterns-appearance-mode/
