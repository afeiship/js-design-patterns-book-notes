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
