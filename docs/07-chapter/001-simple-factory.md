# simple factory
> 简单工厂模式。

## description
- 一个类或者对象经常

## code
```js
var BicycleShop = function(){
};

BicycleShop.prototype = {
  sellBicycle: function(model){
    var bicycle;
    switch(model){
      case 'The Speedster':
          bicycle = new Speedster();
        break;
      case 'The Lowerider':
          bicycle = new Lowerider();
        break;
      case 'The Comfort Cruiser':
          bicycle = new ComfortCruiser();
        break;
    }
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
};
```


## optimize simple factory

```js
var BicycleShop = function(){
};

var BicycleFactory = {
  createBicycle: function(){
    var bicycle;
    switch(model){
      case 'The Speedster':
          bicycle = new Speedster();
        break;
      case 'The Lowerider':
          bicycle = new Lowerider();
        break;
      case 'The Comfort Cruiser':
          bicycle = new ComfortCruiser();
        break;
    }
    return bicycle;
  }
};

// factory
BicycleShop.prototype = {
  sellBicycle: function(model){
    var bicycle = BicycleFactory.createBicycle(modal)
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
};
```
