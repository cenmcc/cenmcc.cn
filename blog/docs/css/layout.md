---
date: 2020-04-22
---
# CSS 布局

### 水平垂直居中

#### inline水平居中

- 文字水平居中:`text-align: center;`垂直居中:文字`line-height`等于盒子高度

#### block水平居中

- 使用position 定位
  - 父容器设置`position:relative`
  - 子容器`position: absolute;left:50%;top:50%;` `transfrom:translate(-50%,-50%)`

- 使用flex布局
  - 方法1: 父容器`display:flex; align-items:center;justify-content:center`
  - 方法2: 父容器`display:flex;` 子容器 `margin: auto`

