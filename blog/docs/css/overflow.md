# CSS文本溢出

```vue
<template>
	<div class="box">
		<div class="box-title">单行文本溢出显示省略号</div>
		<div class="box-description">多行文本溢出显示省略号</div>
	</div>
</template>

<style>
  .box {
		width: 300px;
		height: 300px;
  }
  /* 单行文本溢出显示省略号 */
  .box-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
  }
	/* 多行文本溢出显示省略号 */
  .box-description {
		display: -webkit-box;
		width: 100px;
		border: 1px solid #000;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
  }
</style>
```

