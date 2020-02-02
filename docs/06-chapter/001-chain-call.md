# chain call


```js
(function(){
  function _$(els){
    //
  }

  _$.prototype = {
    each: function(fn){
      // chain caller
      return this;
    }
  }
}())
```

## 定义一个proptotype支持链式调用
```js
Function.prototype.method = function(name, fn){
  this.prototype[name] = fn;
  return this;
};
```
