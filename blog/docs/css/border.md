# CSS border(边框)

**border**：< line-width > || < line-style > || < color >

**border-width**: < length > | thin | medium | thick

**border-style**：none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset

> dotted:点线	dashed:虚线	solid:实线	double:双实线	

**border-color**：< color >{1,4} ,允许分别设置上右下左变现颜色

 **box-shadow**: [inset(可选,定义内阴影)] X轴偏移 Y轴偏移 模糊 拓展(放大) 颜色

> none：无阴影
>
> < length >①：定义元素的阴影水平偏移值。正值，阴影出现在元素右侧；负值，则阴影出现在元素左侧
> < length >②：定义元素的阴影垂直偏移值。正值，阴影出现在元素底部；负值，则阴影出现在元素顶部
> < length >③：定义元素的阴影模糊值半径（可选）。该值越大阴影边缘越模糊，若该值为`0`，阴影边缘不出现模糊。不允许负值
> < length >④：定义元素的阴影外延值（如果提供了）。正值，阴影将向四面扩展；负值，则阴影向里收缩
> < color >：定义元素阴影的颜色。如果该值未定义，阴影颜色将默认取当前最近的文本颜色
> inset：定义元素的阴影类型为内阴影。该值为空时，则元素的阴影类型为外阴影

**border-radius**：< length > | < 百分比>

~~**border-image**：border-image-source || border-image-slice [ / border-image-width | / border-image-width ? / border-image-outset ]? || border-image-repeat~~

**border-image-source**：none | < image >

**border-image-slice**：< number > | < 百分比 >{1,4} && fill?

**border-image-width**：[< length > | < 百分比 > | < number > | auto ] {1,4}

**border-image-outset**：[ < length > | < number > ]{ 1 , 4 }

**border-image-repeat**: [ stretch | repeat | round | space ]{1,2}



**outline**: < 'outline-width' > || < 'outline-style'> || < 'outline-color' >

> 指定元素轮廓的样式、颜色和宽度。

**outline-width**：< length > | thin | medium | thick

**outline-color**：< color > | invert

**outline-style**：none | dotted | dashed | solid | double | groove | ridge | inset | outset

**outline-offset**: < length >

> 设置虚线轮廓偏移容器的距离



**box-sizing**：content-box | border-box

> 定义如何计算一个元素的总宽度和总高度