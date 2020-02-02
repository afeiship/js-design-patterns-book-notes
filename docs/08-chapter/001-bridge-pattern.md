# bridge pattern

- 在实现API的时候，桥接模式非常有用
- 将抽象与实现分开，以便二者独立变化


```js
// input devices
var Gestures = function(output) {
  this.output = output;

  this.tap = function() {
    this.output.click();
  };
  this.swipe = function() {
    this.output.move();
  };
  this.pan = function() {
    this.output.drag();
  };
  this.pinch = function() {
    this.output.zoom();
  };
};

var Mouse = function(output) {
  this.output = output;

  this.click = function() {
    this.output.click();
  };
  this.move = function() {
    this.output.move();
  };
  this.down = function() {
    this.output.drag();
  };
  this.wheel = function() {
    this.output.zoom();
  };
};

// output devices

var Screen = function() {
  this.click = function() {
    log.add('Screen select');
  };
  this.move = function() {
    log.add('Screen move');
  };
  this.drag = function() {
    log.add('Screen drag');
  };
  this.zoom = function() {
    log.add('Screen zoom in');
  };
};

var Audio = function() {
  this.click = function() {
    log.add('Sound oink');
  };
  this.move = function() {
    log.add('Sound waves');
  };
  this.drag = function() {
    log.add('Sound screetch');
  };
  this.zoom = function() {
    log.add('Sound volume up');
  };
};

// logging helper

var log = (function() {
  var log = '';

  return {
    add: function(msg) {
      log += msg + '\n';
    },
    show: function() {
      alert(log);
      log = '';
    }
  };
})();

function run() {
  var screen = new Screen();
  var audio = new Audio();

  var hand = new Gestures(screen);
  var mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();

  log.show();
}

```

## resources
- https://www.dofactory.com/javascript/bridge-design-pattern