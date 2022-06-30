---
date: 2020-07-15
---

# CSS transfrom(变换)

#### 变换 (Transform)

**transform**：

- none:无转换
- matrix()：以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵
- translate()：指定对象的2D translation（2D平移）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
- translatex()：指定对象X轴（水平方向）的平移
- translatey()：指定对象Y轴（垂直方向）的平移
- rotate()：指定对象的2D rotation（2D旋转），需先有 <' transform-origin '> 属性的定义
- scale()：指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值
- scalex()：指定对象X轴的（水平方向）缩放
- scaley()：指定对象Y轴的（垂直方向）缩放
- skew()：指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
- skewx()：指定对象X轴的（水平方向）扭曲
- skewy()：指定对象Y轴的（垂直方向）扭曲
- matrix3d()：以一个4x4矩阵的形式指定一个3D变换
- translate3d()：指定对象的3D位移。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略
- translatez()：指定对象Z轴的平移
- rotate3d()：指定对象的3D旋转角度，其中前3个参数分别表示旋转的方向x,y,z，第4个参数表示旋转的角度，参数不允许省略
- rotatex()：指定对象在x轴上的旋转角度
- rotatey()：指定对象在y轴上的旋转角度
- rotatez()：指定对象在z轴上的旋转角度
- scale3d()：指定对象的3D缩放。第1个参数对应X轴，第2个参数对应Y轴，第3个参数对应Z轴，参数不允许省略
- scalez()：指定对象的z轴缩放
- perspective()：指定透视距离

**transform-origin**：[ < percentage > | < length > | left | center① | right ] [ < percentage > | < length > | top | center② | bottom ]?

- < percentage >：用百分比指定坐标值。可以为负值。
- < length >：用长度值指定坐标值。可以为负值。
- left：指定原点的横坐标为left
- center①：指定原点的横坐标为center
- right：指定原点的横坐标为right
- top：指定原点的纵坐标为top
- center②：指定原点的纵坐标为center
- bottom：指定原点的纵坐标为bottom

**transform-style**：flat | preserve-3d

- flat：指定子元素位于此元素所在平面内
- preserve-3d：指定子元素定位在三维空间内

**perspective**：none | < length >

- none：不指定透视
- < length >：指定观察者距离「z=0」平面的距离，为元素及其内容应用透视变换。不允许负值

**perspective-origin**：[ < percentage > | < length > | left | center① | right ] [ < percentage > | < length > | top | center② | bottom ]?

- <百分比>:用百分比指定透视点坐标值，相对于元素宽度。可以为负值。
- < length >：用长度值指定透视点坐标值。可以为负值。
- left：指定透视点的横坐标为left
- center①：指定透视点的横坐标为center
- right：指定透视点的横坐标为right
- top：指定透视点的纵坐标为top
- center②：指定透视点的纵坐标为center
- bottom：指定透视点的纵坐标为bottom

**backface-visibility**：visible | hidden

- visible：指定元素背面可见，允许显示正面的镜像。
- hidden：指定元素背面不可见

