# js interface
> Javascript 模拟接口实现。


## some solutions
1. 注释法
2. 属性检查法
3. 鸭式辩形法


## 注释法
- 优点：易于实现
- 缺点：没有检查，只能靠自觉

```js
/*
inteface Composite{
  function add(child);
  function remove(child);
  function getChild(index);
}

interface FormItem{
  function save();
}
*/

var CompositeForm = function(id, method, action){
  // implements Composite, FormItem
};

// implement the Composite interface:
CompositeForm.prototype.add = function(){};
CompositeForm.prototype.remove = function(){};
CompositeForm.prototype.getChild = function(){};

// implement the FormItem interface:
CompositeForm.prototype.save = function(){};
```

## 有属性检查
---

## 用鸭式辩形法
```js
var Composite = new Interface('Composite',['add','reove','getChild']);
var FormItem = new Interface('FormItem',['save']);

var CompositeForm = function(id, method, action){
  // implements Composite, FormItem
};

function addFrom(formInstance){
  Interface.ensureImplements(formInstance,Composite,FormItem);
}
```


## 本书采用的实现 Interface/Interface.ensureImplements
```js
var Interface = function(inName,inMethods){
  this.name = inName;
  this.methods = nx.slice(inMethods);
};

Interface.ensureImplements = function(inObject, inImplements){
  var len = inImplements.length;
  for(var i=0; i<len; i++){
    var interface = inImplements[i];
    if(interface.constructor !== Interface ){
      throw new Error('Function Interface.ensureImplements expect args;')
    }
    var methods = interface.methods;
    for(var j=0; j<methods.length; j++){
      var method = methods[j];
      if(!inObject[method] || typeof inObject[method]!=='function'){
        throw new Error('Interface ' + method + ' must be implement!');
      }
    }
  }
};

```




