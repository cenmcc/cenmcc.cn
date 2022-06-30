---
date: 2020-03-05
---

# CSS BFC

BFC(Block formatting context) 块级格式化上下文

主要作用:

- 形成独立的渲染区域

- 内部元素的渲染不会印象到外界

形成 BFC 常见的条件

- 浮动元素    float 不是 none

- 绝对元素定位 position 不是 absolute 或 fixed

- 快级元素 overflow 不是 visible

- flex 元素

- inline-block 元素

应用场景

清除浮动 等