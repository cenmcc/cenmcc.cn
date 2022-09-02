---
layout: Post
title: promise
# subtitle: promise
author: cenmc
date: 2022-08-15
useHeaderImage: true
headerImage: https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/in-post/header.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - promise
---

##### Promise基本用法

```js
const promise = new Promise((resolve, reject) => {
  if(/* 异步操作成功 */) {
    resolve(value)
  } else {
    reject(error)
  }
})
```

Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供。

##### Promise的状态

Promise的状态 ： pending、fulfilled、rejected

Promise 在实例化的时候状态是默认 pending 的，当异步操作是完成的，状态会被修改为 fulfilled，如果异步操作遇到异常，状态会被修改为 rejected

![](https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/blog%2Fpromise.04ed9cc2.png)

::: warning 注意

状态转化是单向的，不可逆转，已经确定的状态（fulfilled/rejected）无法转回初始状态（pending），而且只能是从 pending 到 fulfilled 或者 rejected

:::

##### Promise.then

> 基本用法：promise.then(onFulfilled, onRejected)

promise.then可以接受两个会调函数,onFulfilled回调会接受 resolve所传递的参数，onRejected回调回接受promise 中 reject所传递的参数

##### Promise.catch()

> 基本用法：promise.catch(onRejected)

promise.catch接受onRejected回调函数作为参数，上一个promise中reject传递的参数会作为会调函数的参数



##### Promise.resolve()

静态方法 Promise.resolve(value) 可以认为是 new Promise() 方法的快捷方式。

```js
new Promise(function(resolve) {
    resolve(42)
})
===
Promise.resolve(42).then(function(value) {
    console.log(value)
})
```

##### Promise.reject()

Promise.reject(error) 是和 Promise.resolve(value) 类似的静态方法，是 new Promise() 方法的快捷方式。

```js
new Promise(function(resolve, reject) {
    reject(new Error('出错了'))
})
=== 
Promise.reject(new Error('BOOM!'))

```

##### Promise.all()

基本语法

> Promise.all(promiseArray)

```js
var p1 = Promise.resolve(1)
var p2 = Promise.resolve(2)
var p3 = Promise.resolve(3)
Promise.all([p1, p2, p3]).then(function(results) {
    console.log(results) // [1, 2, 3]
})
```

全部resolve：返回Promise的值

包含reject：Promise.all会立即终止执行，并返回一个reject的新的 Promise 对象。

##### Promise.race()

基本语法

> Promise.race(promiseArray)

```js
var p1 = Promise.resolve(1)
var p2 = Promise.resolve(2)
var p3 = Promise.resolve(3)
Promise.race([p1, p2, p3]).then(function(value) {
    console.log(value) // 1
})
```

数组中任意一个Promise对象变为resolve或reject的时候，函数就会返回