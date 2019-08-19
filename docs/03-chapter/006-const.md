# const
> 常量。


## 定义
是指，不有被修改的变量。


## 一个常量的取值
```js
var Class = (function(){
  var COUNT = 100;
  var ctor = function(){
    //
  };
  ctor.get_COUNT = function(){
    return COUNT;
  };
  return ctor;
}());

// Class.get_COUNT();
```

## 多个常量的取值
```js
var Class = (function(){
  var consts = {
    COUNT: 100
  };
  var ctor = function(){
    //
  };
  ctor.getConst = function(inName){
    return consts[inName];
  };
  return ctor;
}());

// 这样就可以一次性定义多个 count 的 getter 了
// Class.getConst('COUNT')
```
