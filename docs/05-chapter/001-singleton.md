# singleton

## basic singleton
```js
var Singleton = {
  attr1: true,
  attr2: 10,
  method1: function(){},
  method2: function(){},
};
```

## with namespace(ModulePattern)
```js
var ns = {};
ns.singleton = (function(){
  var private1 = 123;
  var priMethod1 = function(){
    return private1;
  };

  return {
    attr1: true,
    attr2: 10,
    pm1: function(){},
    pm2: function(){},
  }
}())
```

## disadvantage
- 可能导致模块之间的强耦合
- 不利于单元测试
