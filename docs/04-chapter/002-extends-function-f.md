# extends function -f 


```js
function extends(inSubClass,inSuperClass){
  var F = function(){};
  Class.prototype = inSuperClass.prototype;
  inSubClass.prototype = new F();
  inSubClass.prototype.constructor = inSubClass;
}
```
