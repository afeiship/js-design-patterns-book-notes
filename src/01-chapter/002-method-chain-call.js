//上传请求
let upload = function(ids) {
  $.ajax({
    data: {
      id: ids
    }
  });
};

//代理合并请求
let proxy = (function() {
  let cache = [],
    timer = null;
  return function(id) {
    cache[cache.length] = id;
    if (timer) return false;
    timer = setTimeout(function() {
      upload(cache.join(','));
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 2000);
  };
})();

// 绑定点击事件
let checkbox = document.getElementsByTagName('input');
for (var i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function() {
    if (this.checked === true) {
      proxy(this.id);
    }
  };
}
