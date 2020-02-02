# factory
- 工厂模式与简单工厂的区别在于，create方法需要子类来实现。

```js
var BicycleShop = function(){
};

// factory
BicycleShop.prototype = {
  createBicycle: function(model){
    throw new Error('Unsupported operation an abstract class.');
  },
  sellBicycle: function(model){
    var bicycle = BicycleFactory.createBicycle(modal)
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
};
```

## 适合的场景
- 把一堆复杂的事情集中在一个地方处理，包括优化等

## 优点
- 消除对象之间的耦合
- 使用工厂方法，而不是 new 关键字实现具体的类，把实例化集中在一个地方
- 使用工厂模式，得先抽象一个父类
- 在子类中实现相对应的 create 方法

## 缺点
- 
