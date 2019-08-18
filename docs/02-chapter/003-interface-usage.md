# interface-usage


```js
var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);

function displayRoute(mapInstance){
  // mapInstance implements [ DynamicMap,OtherImpl ]
  Interface.ensureImplements(mapInstance,[ DynamicMap ]);

  // usage:
  mapInstance.centerOnPoint(12,14);
  mapInstance.zoom(1.5);
  mapInstance.draw();
};
```


## 依赖接口的设计模式
1. 工厂模式
2. 组合模式
3. 装饰器模式
4. 命令模式
