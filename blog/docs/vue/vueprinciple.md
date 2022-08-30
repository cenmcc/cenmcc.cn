# Vue原理

##### MVVM 数据驱动视图

![](https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/blog/1289143-20200604161010530-582947684.png)

##### Vue响应式

> Vue2 核心API - Object.defineProperty
>
> Vue3 核心API - Proxy

```js
// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty)

['push', 'pop', 'shift', 'unshift', 'splice', 'reverse'].forEach(methodName => {
  arrProto[methodName] = function() {
    updateView() // 触发试图更新
    // 调用数组的方法
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})

// 触发更新试图
function updateView() {
	console.log('视图更新')
}
// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value)
  
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if(newValue !== value){
        // 深度监听
        observer(newValue)
        // 设置新值
        // value 一直在闭包中，此处设置完之后，再get时也是会获取最新的值
        value = newValue
        updateView()
      }
    }
  })
}
// 监听对象属性 
function observer(target) {
  if(typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target
  }
  
  if(Array.isArray(target)){
    target.__proto__ = arrProto
  }
  
  for(let key in target) {
    defineReactive(target, key, target[key])
  }
}
// 准备数据
const data = {
  name: 'zhangsan',
  age: 20,
}


```

##### Object.defineProperty的缺点

- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性/删除属性( Vue.set Vue.delete）
- 无法监听数组的操作方法

##### 虚拟DOM(Virtual DOM) 和 diff

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px;">
    <li>a</li>
  </ul>
</div>
```

```js
// 虚拟DOM映射
{
  tag: 'div',
  props: {
    className: 'container',
    id: 'div1'
  },
    children: [
      {
        tag: 'p',
        children: 'vdom'
      },
      {
        tag: 'ul',
        props: { style: 'font-size: 20px'}
        children: [
        	{
        	tag: 'li',
        	children: 'a'
      		}
        ]
      }
    ]
}
/**
vdom的价值
- 用jS模拟DOM结构(vnode)
- 新旧vnode对比，得出最小的更新返回，最后更新dom
- 数据驱动视图的模式下，有效控制 DOM 操作
**/
```

##### diff算法 - 时间复杂度（O(n)）

> 对比新旧vnode的差异

1. 只比较同一层级，不跨级比较
2. tag 不相同，则直接删掉重建，不再深度比较
3. tag 和 key，两者都相同，则认为是相同节点，不再深度比较

##### Vue模板编译

template模板 => 通过 vue-template-compiler生成render函数 => render函数返回vnode

1. 模板编译为 render函数，执行render函数返回vnode
2. 基于vnode再执行 `patch` 和 `diff`

```js
const compiler = require('vue-template-compiler')
const template = `<p>{{message}} </p>`
compiler.compile(template)
// 输出:
// with(this) {return _c('p',[_t(toString(message))])}

// _c(): createElement
// _t(): createTextNode
```

with备注：

- 改变{}内自由变量的查找规则，当做 obj 属性来查找
- 如果找不到匹配的 obj 属性，就会报错

- with 要慎用，它打破了作用域规则，易读性变差

##### Vue组件渲染和更新

初次渲染

1. 解析模板为 render 函数（或在开发环境己完成，vue-loader）
2. 触发响应式，监听 data 属性 getter setter
3. 执行 render 函数,生成 vnode I patch(elem, vnode)

更新

1. 修改 data，触发 setter（此前在 getter 中已被监听）
2. 重新执行 render 函数,生成 newVnode
3. patch(vnode, newVnode)

##### 前端路由原理

hash 

- hash 变化会触发网页跳转，即浏览器的前进、后退
- hash 变化不会刷新页面，SPA 必需的特点
- hash 永远不会提交到 server 端（前端自生自灭）

```js
// hash
// http://127.0.0.1:8881/01-hash.html?a=100&b=20#/aaa/bbb
location.protocol // 'http:'
location.hostname // '127.0.0.1'
location.host // '127.0.0.1:8881'
location.parhname // '/01-hash.html'
location.search // '?a=100&b=20'
location.hash // '#/aaa/bbb'

// 监听页面hash变化
window.onhaschange = (event) => {
  console.log('old url', event.oldURL)
  console.log('new url', event.newURL)
  console.log('hash', location.hash)
}

// 页面初次加载，获取 hash
document.addEventListener('DOMContentLoaded',() => {
  console.log('hash:', location.hash)
})

// JS 修改url
document.getElementById('btn').addEventListener('click', () => {
  location.href = '#/user'
})
```

 h5 history

- 用 url 规范的路由,但跳转时不刷新页面
- history.pushState
- window.onpopstate

```js
// 页面初次加载，获取 path
document.addEventListener('DOMContentLoaded',() => {
  console.log('load', location.pathname)
})
// 打开一个新的路由 , pushState方式，浏览器不会刷新页面
document.getElementById('btn').addEventListener('click', () => {
  const state = { name: 'page1' }
  console.log('切换路由到', 'page1')
  history.pushState(state, '', 'page1')
})
// 监听浏览器前进、后退
window.onpopstate = (event) => {
  console.log('onpopstate',event.state,location.pathname)
}
```

##### 组件的渲染和更新的过程

![](https://cenmcc-es-1251934167.cos.ap-nanjing.myqcloud.com/blog/WX20220830-165907.png)

##### Vue2响应式 和 Vue3 响应式的区别

