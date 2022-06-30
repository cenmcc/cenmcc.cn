# CSS基础样式

### CSS溢出显示省略号

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

### CSS清除浮动

- 方法1:给父元素定义height

  ```scss
  .box {
    height: 300px; //给父元素增加高度
    .right { height: 300px; width: 50px;}
    .left { height: 50px; width: 300px;}
  }
  ```

- 方法2:结尾处加空div标签 clear:both

  ```html
    <div>
      <div style="float:left;width: 300px; height: 50px"></div>
      <div style="float:right;width: 50px; height: 300px"></div>
      <div style="clear: both;"></div>
    </div>
  ```

- 方法3:父级div定义 伪对象:after 和 zoom

  ```html
  <style>
  .box::after {
    display:block;
    clear:both;
    content:"";
    visibility:hidden; 
  }
  </style>
  
  <div class="box">
    <div style="float:left;width: 300px; height: 50px"></div>
    <div style="float:right;width: 50px; height: 300px"></div>
  </div>
  ```

- 方法4:父级div定义 overflow:hidden

- 方法5:父级div定义 overflow:auto

  
