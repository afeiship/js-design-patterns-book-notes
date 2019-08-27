# more advatange methods

## 问题
- 超类 Preson 的名称被固化在了子类 (Author) 中

## optmize version
```js
function extend(inSubClass, inSuperClass){
  var F = function(){};
  Class.prototype = inSuperClass.prototype;
  inSubClass.prototype = new F();
  inSubClass.prototype.constructor = inSubClass;

  // add parent class references
  inSubClass.superClass = inSuperClass.prototype;

  // 这里的情况应该是： `inSuperClass.prototype = {};`
  if(inSuperClass.prototype.constructor === Object.prototype.constructor){
    inSuperClass.prototype.constructor = inSuperClass;
  }
}
```
