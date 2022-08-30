# vue-router 

路由模式

```js
const router = new VueRouter({
  mode: 'hash', // 'hash' || 'history'(需要服务端支持)
  routes,
})
```

动态路由

```js
const User = {
	template: '<div>User {{$route.params.id}}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

懒加载

```js
routes: [
	{
    path: '/',
    component: () => import('./../components/Navigator')
  }
]
```

