
# CSS boxcontent(盒内容)
overflow：visible | hidden | scroll | auto | no-display | no-content

> 指定x-y轴溢出了元素的内容区是否剪辑左/右边缘内容

| 值         | 描述                                   |
| :--------- | :------------------------------------- |
| visible    | 不裁剪内容，可能会显示在内容框之外。   |
| hidden     | 裁剪内容 - 不提供滚动机制。            |
| scroll     | 裁剪内容 - 提供滚动机制。              |
| auto       | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |