# Keep-alive

> 缓存组件、频繁切换、不需要重复渲染

```vue
<template>
	<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>
<!--
KeepAlive 组件属性:
	1:include: 需要缓存的组件集合
	2:exclude: 不需要缓存的组件集合
	2:max: 限制可被缓存的最大组件实例数
-->
<script>
export default {
  // 缓存组件的生命周期函数
  activated() { /** 组件挂载时也会调用 **/ }
  deactivated() { /** 组件卸载时也会调用 **/ }
}
</script>
```

##### 销毁keep-alive组件

> 思路：通过vuex 储存需要缓存的页面

```vue
<!-- App.vue -->
<template>
	<keep-alive :include="keepPages">
    <router-view />
  </keep-alive>
</template>

<script>
export default {
	computed: {
		...mapState({
      keepPages: state => state.keepPages
    })
  }
}
</script>
```

```js
// vuex index.js
const store = {
  state: {
    keepPages: ['Acomponents','Bcomponents','Ccomponents']
  },
  mutation: {
    // 删除缓存组件
		removeKeepPages(state, page) {
      const pages = state.keepPages.filter(i => i !== page)
      state.keepPages = pages
    },
    // 添加缓存页面
    addKeepPages(state, page) {
      const isExist = state.keepPages.indexOf(page) == -1 ? false : true
      if(isExist) state.keepPages = [...state.keepPages,page]
    }, 
  }
}
```

