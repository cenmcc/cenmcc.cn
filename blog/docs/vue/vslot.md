# v-slot的基本使用

基本使用

```vue
<!-- 插槽定义 -->
<template>
	<div class="c-input">
		<input type="text">
    <slot>
      1. 这里是默认内容,如果外部没有传递则会展示
      2. 如果外部传递了内容,则会使用外部的内容替换这里的内容
  	</slot>
  </div>
</template>
<!-- 插槽使用 -->
<c-input>
  <div>这里的节点会代替slot节点内容</div>
</c-input>
```

具名插槽

```vue
<!-- 具名插槽 -->
<template>
	<div class="app">
    <header>
  		<slot name="header"></slot>
  	</header>
		<main>
  		<slot name="main"></slot>
  	</main>
    <footer>
      <slot name="footer"></slot>
  	</footer>
  </div>
</template>

<!-- 插槽使用 -->
<App>
	<div v-slot:header>这个节点会替换组件中 slot name="main"的节点</div>
  <div #main>v-shot:main 简写形式</div>
  <div #[trends]>在data中定义字符串动态决定需要替换的插槽</div>
</App>
```

作用域插槽

> 将子组件中拥有的数据传递给父组件

```vue
<!-- 组件中定义 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
<!-- 数据的使用 -->
<AComponent v-slot="slotProps">
<!--使用slotProps来接收子组件传递过来的数据-->
 	{{soltProps.text}}
  {{slotProps.count}}
</AComponent>

<Acomponent v-slot="{ text, count}"></Acomponent>
<!-- 接收时解构数据 -->
```

