# mutable
> 对象的易变性。

1. 决定了你在定义好对象/类之后可以对其进行修改。
2. 除了3种基本数据类型，一切皆是对象。

```js
function displayError(inMessage){
  displayError.num++;
  console.info(inMessage);
}
displayError.num = 0;
```

