---
date: 2020-07-15
---

# CSS Layout(布局)

#### 定位(Positioning)

**position**：static | relative | absolute | fixed | sticky

**z-index**: auto | < integer >

**top**: auto | length | percentage

**right**:  auto | length | percentage

**bottom**: auto | length | percentage

**left**:  auto | length | percentage



**display**：none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in | box | inline-box | flex | inline-flex

**float**：none | left | right

**clear**：none | left | right | both

**visibility**：visible | hidden | collapse

> 可见性：默认(visible)可见，hidden隐藏，collapse表格单元格无内容隐藏

**overflow**：visible | hidden | scroll | auto 





#### 伸缩盒(Fiexible Box)

**flex**：none | <' flex-grow '> <' flex-shrink >'? || <' flex-basis '>

**flex-flow**：<' flex-direction '> || <' flex-wrap '>

**flex-direction**：row | row-reverse | column | column-reverse

> 设置主轴对齐方式

**justify-content**：flex-start | flex-end | center | space-between | space-around

> **设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。**

**flex-wrap**：nowrap | wrap | wrap-reverse

> 设置单行文本溢出是否换行

**align-content**：flex-start | flex-end | center | space-between | space-around | stretch

> 设置侧轴内容对齐方式

**align-items**：flex-start | flex-end | center | baseline | stretch

> 设置侧轴元素对齐方式

##### 子容器

**flex-grow**：< number >

> **适用于**：flex子项。数值来定义扩展比率。不允许负值

**flex-shrink**：< number >

> **适用于**：flex子项。数值来定义收缩比率。不允许负值

**flex-basis**：< length > | < percentage > | auto | content

> **适用于**：flex子项。设置或检索弹性盒伸缩基准值

**align-self**：auto | flex-start | flex-end | center | baseline | stretch

> 设置单个字元素的侧轴位置

**order**：< length >

> 定义排列顺序，数值小的排在前面。可以为负值。



#### 表格( Table )

**table-layout**：auto | fixed

**border-collapse**：separate | collapse

**border-spacing**：< length > {1,2}

**caption-side**：top | bottom

**empty-cells**：hide | show



#### 多列(Multi-column)

**columns**：<' column-width '> || <' column-count' >

> 将一行拆分成多列

**column-width**：< length > | auto

**column-count**：< 百分比 > | auto

**column-gap**：< length > | normal

> 列与列之间的间隙

**column-rule**：<' column-rule-width'> || <' column-rule-style '> || <' column-rule-color '>

> 设置或检索对象的列与列之间的边框。复合属性。参考border属性

**column-rule-width**：< length > | thin | medium | thick

**column-rule-style**：none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset

**column-rule-color**：< color >

**column-span**：none | all

> **设置或检索对象元素是否横跨所有列。**

**column-fill**：auto | balance

> **设置或检索对象所有列的高度是否统一。**

**column-break-before**：auto | always | avoid | left | right | page | column | avoid-page | avoid-column

**column-break-after**：auto | always | avoid | left | right | page | column | avoid-page | avoid-column

**column-break-inside**：auto | avoid | avoid-page | avoid-column
