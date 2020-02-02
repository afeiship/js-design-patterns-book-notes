# Chain of Responsibility
> 职责链模式.

~~~
当一个对象A要办个事儿，就向一个处理对象B发起请求，如果B不处理，可以把请求转给C，如果C不处理，又可以把请求转给D。一直到有一个对象愿意处理这个请求为止。
B -> C -> D 这就是一条职责链。
如果请求一直没人处理，那么这事儿就黄了，搞不定。
A在一开始是不知道自己会被谁处理的。
~~~

## resources
- https://juejin.im/post/5c071f9d51882563ae2455f6
- http://clancyz.github.io/blog/2015/10/16/Javascript-Design-pattern-Chain-of-responsibility/



