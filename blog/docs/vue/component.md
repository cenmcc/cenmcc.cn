# 动态组件

> 用法：`:is="compoennt-name"`
>
> 使用场景：例如一个动态加载的列表，不能确定它组件的展示顺序

```vue
<template>
	<div >
    <template v-for="(item,index) in list" :key="index">
      <component :is="item.type" :data="item"/>
		</template>
  </div>
</template>

<script>
	import Image from './image/Image'
  import Text from './text/Text'
  import Video from './video/Video'
  export default {
    components: { Image, Text, Video }
    data() {
      return {
        list: [
          {type: 'Image', src: 'xxx'},
          {type: 'Text', src: 'xxx'},
          {type: 'Video', src: 'xxx'},
        ]
      }
    }
  }
</script>
```

