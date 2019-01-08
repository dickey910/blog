# js AAA

## 微任务、宏任务、Event-Loop

- 宏任务：I/0(用户交互)、setTimeout、setInterval、setImmediate、requestAnimationFrame
- 微任务：Promise.then catch finally、MutationObserver等、process.nextTick(node)
- 任务队列执行的过程：每次宏任务执行完，都去检查是否有微任务存在，如有，依次执行微任务，微任务执行结束后，返回继续执行下一个宏任务；
如没有微任务，则结束当前宏任务，继续执行下一宏任务。这个执行过程称为event-loop。

![](https://image-static.segmentfault.com/402/025/4020255170-59bc9e1671029)
![](https://user-gold-cdn.xitu.io/2019/1/5/1681c75cd2176add?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### example
```js
(function test() {
    setTimeout(function() {console.log(4)}, 0);

    new Promise(function executor(resolve) {
        console.log(1);
        for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
        }
        console.log(2);
    }).then(function() {
        console.log(5);
    });

    console.log(3);
})();
```

1,2,3,5,4

Promise.then是异步执行的(微任务)，而创建Promise实例（executor）是同步执行的，而then中注册的回调才是异步执行的。

参考：
[1](https://juejin.im/post/5b73d7a6518825610072b42b)