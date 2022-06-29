# Vue特殊用法

### 使用template标签包裹列表

```vue
<template>
	<div class="home">
		<!-- template模板 支持v-if、v-for ,条件为true, template不会被渲染在dom上-->
		<template v-if="show">
			<div class="title"></div>
			<div class="desc"></div>
		</template>
  </div>
</template>
```

#### DOM绑定多个事件

- `@click="clickHandler"` `clickHandler`方法默认接收`$event`参数
- 若接收参数并且需要使用到事件参数`@click="clickHandler(index, $event)"`

```vue
<template>
	<button @click="clickHandler(2), recordLog($event)"></button>
</template>
```

