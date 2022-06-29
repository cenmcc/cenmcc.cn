# Vue computed属性

计算属性默认提供的是取值方法，通常称之为`getter`方法。但这并不意味计算属性不支持复制,计算属性可以通过实现`setter`方法，从而达到数据的存储功能

#### 计算属性

当`data`中对应数据发生变化时,会执行`computed`方法

```vue
<script>
export default {
	data() {
		return { px: 11,}
	},
	computed: {
		rem() {
			return this.px / 100 + 'rem'
		}
	}
}
</script>
```

#### 可设置Value的计算属性

需要手动实现`computed`的setter方法

```vue
<script>
export default {
  data() {
    return { message: 'Hello World'}
  },
  computed: {
    text: {
      get() {
        return this.message
      },
      set(newValue) {
        this.message = newValue
      }
    }
  }
}
</script>
```

### 案例

### 动态返回class类名

```vue
<template>
	<div :class="classobj" :style="styleobj"></div>
</template>

<script>
export default {
	props: ['type', 'textColor', 'bdColor']
	computed: {
		// 动态添加class样式
		classobj() {
			return [
				'border-1': type == 'square',
				'border-2': type == 'circle',
				'border-3': type === 'triangle'
			]
    },
    // 动态添加style样式
    styleobj() {
			return {
				color: textColor ? textColor : false,
				borderColor: bdColor ? bdColor : false,
			}
		}
	}
}
</script>

<style>
  .border-1 { /** border-1 样式**/}
  .border-2 { /** border-2 样式**/}
  .border-3 { /** border-2 样式**/}
</style>
```

