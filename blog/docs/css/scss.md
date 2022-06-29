# Scss基础操作
Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。

### 基础用法

```scss
/* 多行注释 打包时会完整编译 */
// 单行注释 打包时移除


#main { 
  .container {} // 等同于#main .container {}
}

.box {
  &:hover {}	// 等同于 .box:hover {}
  &-main {}		// 编译为 .box-main {}
}
```

### 变量

```scss
/* 定义变量 $ */
$width: 300px; // 定义变量以$开头
width: $width; //变量的使用

/* 定义变量默认值 !default */
$content: "First content";
$content: "Second content?" !default;	// 如果变量未被复制，将使用该条默认值


/* 变量插值用法 #{} */
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;	//打包后 p.foo { border-color: blue}
}
```

### 导入外部样式

Sass 拓展了 `@import` 的功能，允许其导入 SCSS 或 Sass 文件。

### 混合指令

```scss
/* 混合样式 */
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
  }
  color: #ff0000;
}
/* 带参数的混合样式 */
// 接收参数可以赋予默认值，如果调用时没有传入参数则使用
@mixin wh($width: 20px,$height) { 
  width: $width;
  height: $height;
}

/* 引用混合样式 */
.page-title {
  @include large-text; //将定义的通用样式混合到当前样式
  padding: 4px;
}
/* 引用带参数的混合样式*/
.box {
  @include wh(100px,100px);
}
/* 关键词传参 */
.box {
  @include wh($height: 100px, $width: 80px)
}
```

### 参考

- [Sass](https://www.sass.hk/)