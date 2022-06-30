---
date: 2020-07-15
---

# CSS TextStyle(文本样式)
**color**: < color >

**opacity**: < number>

> 文字透明度,适用于任何容器或图片



#### 字体(Font)

**font**：[ 'font-style' || 'font-variant' || 'font-weight' || 'font-stretch' ]? 'font-size' [/ 'line-height']? 'font-family']|caption | icon | menu | message-box | small-caption | status-bar

**font-style**：normal | italic | oblique

> 字体样式 ：normal正常 ｜ italic斜体 ｜ oblique斜体

~~**font-variant**：normal | small-caps~~

> 字体变体： small-caps 小型大写字母 (对小写字母有效)

**font-weight**：normal | bold | bolder | lighter | < integer >

> 字体粗细 normal 正常(100~500) bold粗体(600~900) bolder更粗() lighter

**font-size**：< absolute-size > | < relative-size > | < length > | < 百分比 >

- **< absolute-size >** = xx-small | x-small | small | medium | large | x-large | xx-large
- **< relative-size >** = smaller | larger

**font-family**：[ < family-name > | < generic-family > ]

- **< family-name >** = arial | georgia | verdana | helvetica | simsun and etc.
- **< generic-family >** = cursive | fantasy | monospace | serif | sans-serif

**font-stretch**：normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded

> 控制文字宽度



#### 文本(Text)

**text-transform**：none | capitalize | uppercase | lowercase 

> capitalize:首字母大写
> uppercase:全部字母转换为大写
> lowercase:全部字母转换为小写

**white-space**：normal | pre | nowrap | pre-wrap | pre-line

> 设置文本如何换行
>
> normal：溢出换行
> pre：跟随编辑器换行
> nowrap：不换行
> pre-wrap:跟随编辑器换行，溢出也会换行
> pre-line:第一行保存编辑器格式

**text-overflow**：clip | n

> 文本溢出处理 	clip裁剪	ellipsis省略号

**text-align**： left | right | center | justify 

**letter-spacing**：normal | < length >

> **指定字符之间的额外间隙。** 

**text-indent**：[ < length > | < 百分比 > ]

> 文本首行缩进

**vertical-align**：baseline | sub | super | top | text-top | middle | bottom | text-bottom | < 百分比 > | < length >

> **适用于**：内联级与 table-cell 元素

**line-height**：normal | < length > | < 百分比 > | < number >



#### 文本装饰(Text Decoration)

**text-decoration**：text-decoration-line || text-decoration-style || text-decoration-color

**text-decoration-line**：none | [ underline || overline || line-through || blink ]

**text-decoration-color**：< color >

**text-decoration-style**：solid | double | dotted | dashed | wavy

**text-shadow**：none | < length >{2,3} && < color >

> **①**：第1个长度值用来设置对象的阴影水平偏移值。可以为负值
>
> ②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值
>
> ③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值