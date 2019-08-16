# intro-js


## 灵活性
1. 函数式
2. 面向对象
3. 没有范式


### 函数式
```js
function startAnimation(){
    // code...
}

function stopAnimation(){
    // code...
}
```

### 面向对象式
```js
var Anim = function(){};
Anim.prototype.start = function(){};
Anim.prototype.stop = function(){};

// usage:
var myAnim = new Anim();
myAnim.start();
myAnim.stop();
```

### 面向对象式-一条prototype申明
```js
var Anim = function(){};
Anim.prototype = {
    start: function(){},
    stop: function(){}
};
```

### 定义一个方法来完成上述操作 --- `function method`
```js
// 在prototype上添加方法(一般不推荐)
Function.prototype.method = function(inName, inValue){
  this.prototype[inName] = inValue;
};

// 更优雅的方式：
var Anim = function(){};
Anim.method('start',function(){});
Anim.method('stop',function(){});
```
