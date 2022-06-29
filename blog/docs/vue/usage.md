# Vue高级用法

### v-model

```html
<input v-model="searchText">

<!-- 等价于：-->
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

### provide/inject

provide 和 inject 主要为高阶插件/组件库提供用例。

```js
export default {
    name: 'u-form',
    props: {
        title: String,
        labelWidth: String,
        contentWidth: String,
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' }
    },
    provide() {
        return {
            uForm: this	//指定this
        }
    }
}

     
export default {
    name: 'u-form-item',
    props: {
        label: String,
        error: String,
        required: Boolean,
        tip: String
    },
    data() {
        return {
            leftSty: {},
            rightSty: {}
        }
    },
    inject: ['uForm'],
    created() {
      	//通过this.uForm 访问父节点this中的属性
        this.uForm.labelWidth && (this.leftSty.width = this.uForm.labelWidth)
        this.uForm.contentWidth && (this.rightSty.width = this.uForm.contentWidth)
    }
}

 
```

### vm.$nextTick()

将回调延迟到下次 DOM 更新循环之后执行。实现原理：Vue2.x源码分析 - Vue.nextTick

尽管MVVM框架并不推荐访问DOM，但有时候确实会有这样的需求，尤其是和第三方插件进行配合的时候，免不了要进行DOM操作。而nextTick就提供了一个桥梁，确保我们操作的是更新后的DOM。

```html
// template
<template>
    <h ref="someElement">{{message}}</h>
</template>

<script>
export default {
    data: () => { message: 'oldValue'}
    methods: {
        example: function () {
        // 修改数据
        this.message = 'changed'
        // DOM 还没有更新。此时如果拿DOM元素的innerHTML，依然会是'oldValue'
        this.$nextTick(function () {
            // DOM 现在更新了，可以拿到最新的DOM元素了
            this.$refs['someElement'].innerHTML // 此时可以拿到最新的innerHTML值：'changed'
        })
        }
    }
}
</script>
```

### 组件prop为boolean

如果prop是Boolean值，如果prop有展示但未赋值意味着 `true`。

```html
<blog-post is-published></blog-post>

<!-- 等价于 -->
<blog-post :is-published="true"></blog-post>
```

### vm.$attrs/vm.$listeners

这两个变量挂载到组件实例this上，避免组件属性逐层透传。

```html
// base component: u-link.vue
<a v-bind="$attrs"
   v-on="$listeners">
   <slot></slot>
</h>

// high component
<u-link name="123" attr1="123">test</u-link>

// 等价于
<a name="123" attr1="123">
   <slot></slot>
</a>
```
