# 自定义v-model

父组件

```vue
<template>
	<div id="index">
    <c-input v-model="name"></c-input>
  </div>
</template>

<script>
import Cinput from './Cinput'
  
export default {
  components: {
    Cinput
  },
  data() {
    return {
      name: 'cenmc'
    }
  },
}
</script>
```

子组件实现

```vue
<template>
	<input type="text" :value="content" @input="$emit('change',$event.target.value)">
</template>

<script>
export default {
  model: {
    prop: 'content',
    event: 'change'
  }
  props: {
    content: String,
    default: ''
  }
}
</script>
```

