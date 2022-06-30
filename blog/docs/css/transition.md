---
date: 2020-07-15
---

# CSS transition(过渡)

**transition**： none | < transition-property > ] || < time > || < transition-timing-function > || < time >

**transition-property**：none | all | 过渡的css属性

**transition-duration**：< time >

**transition-timing-function**：ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(< integer >[, [ start | end ] ]?) | cubic-bezier(< number >,< number >, < number >,< number >)

- linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
- ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
- ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
- ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
- ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- step-start：等同于 steps(1, start)
- step-end：等同于 steps(1, end)
- steps(< integer >[, [ start | end ] ]?)：接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
- cubic-bezier(< number >, < number >, < number >, < number >)：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内

**transition-delay**：< time >