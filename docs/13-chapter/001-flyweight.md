# flyweight
> 享元模式。

享元模式可以简单的理解为 单例模式 + 工厂模式 + 管理器 , 管理器对外部状态进行管理组合成完整的对象

## 适合
- 创建大量对象而累积的性能问题。
- 用于减少应用程序所需的对象数量。

```js
var getDiv = (function() {
  var created = [];
  var create = function() {
    return document.body.appendChild(document.createElement('div'));
  };
  var get = function() {
    if (created.length) {
      return created.shift();
    } else {
      return create();
    }
  };
  /* 一个假设的事件，用来监听刚消失在视线外的div，实际上可以通过监听滚                                     动条位置来实现 */
  userInfoContainer.disappear(function(div) {
    created.push(div);
  });
})();

var div = getDiv();
div.innerHTML = '${userinfo}';
```

## 我知道的场景
- ajaxPool

## resources
- http://www.alloyteam.com/2012/10/commonly-javascript-design-patterns-flyweight/
- https://segmentfault.com/a/1190000013366000
