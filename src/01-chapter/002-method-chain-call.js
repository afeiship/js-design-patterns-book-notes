Function.prototype.method = function(inName, inValue) {
  this.prototype[inName] = inValue;
  return this;
};

var Anim = function() {};

Anim.method('start', function() {
  console.log('start');
}).method('stop', function() {
  console.log('stop');
});
