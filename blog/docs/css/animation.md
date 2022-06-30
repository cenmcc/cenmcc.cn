---
date: 2020-07-15
---

# 动画(Animation)

```css
@keyframes animationname {
  0% {}	|	from
  100% {} |	to
}
```
> 创建动画

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

- <' animation-name '>：检索或设置对象所应用的动画名称
- <' animation-duration '>：检索或设置对象动画的持续时间
- <' animation-timing-function '>：检索或设置对象动画的过渡类型
- <' animation-delay '>：检索或设置对象动画延迟的时间
- <' animation-iteration-count '>：检索或设置对象动画的循环次数
- <' animation-direction '>：检索或设置对象动画在循环中是否反向运动
- <' animation-fill-mode '>：检索或设置对象动画时间之外的状态
- <' animation-play-state '>：检索或设置对象动画的状态。w3c正考虑是否将该属性移除，因为动画的状态可以通过其它的方式实现，比如重设样式



```css
animation-name：none | <identifier>
```

> 指定要绑定到选择器的关键帧的名称



```css
animation-duration：<time>
```

> 动画指定需要多少秒或毫秒完成



```css
animation-timing-function：ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(<integer>[, [ start | end ] ]?) | cubic-bezier(<number>, <number>, <number>, <number>)
```

> 设置动画将如何完成一个周期

- linear：动画从头到尾的速度是相同的。
- ease：默认。动画以低速开始，然后加快，在结束前变慢。
- ease-in：动画以低速开始。
- ease-out：动画以低速结束。
- ease-in-out：动画以低速开始和结束。
- step-start：等同于 steps(1, start)
- step-end：等同于 steps(1, end)
- steps( int, start | end )：指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：
  - start：表示直接开始。
  - end：默认值，表示戛然而止

- cubic-bezier(*n*,*n*,*n*,*n*)：在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。



```css
animation-delay：<time>
```

> 设置动画在启动前的延迟间隔



```css
animation-iteration-count：infinite | <number>
```

> 定义动画的播放次数。

- infinite：无限循环
- < number >：指定对象动画的具体循环次数



```css
animation-direction：normal | reverse | alternate | alternate-reverse
```

> 指定是否应该轮流反向播放动画。

- normal：正常方向
- reverse：反方向运行
- alternate：动画先正常运行再反方向运行，并持续交替运行
- alternate-reverse：动画先反运行再正方向运行，并持续交替运行



```css
animation-play-state：running | paused
```

> 指定动画是否正在运行或已暂停。

- running：运动
- paused：暂停

```css
animation-fill-mode：none | forwards | backwards | both
```

> 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。

- none：默认值。不设置对象动画之外的状态
- forwards：设置对象状态为动画结束时的状态
- backwards：设置对象状态为动画开始时的状态
- both：设置对象状态为动画结束或开始的状态
