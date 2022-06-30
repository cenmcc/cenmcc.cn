---
date: 2020-07-15
---

# CSS list(列表)

#### list-style: 简写属性在一个声明中设置所有的列表属性。

```css
list-style:  list-style-type list-style-position list-style-image
```

| 值                    | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| *list-style-type*     | 设置列表项标记的类型。参阅：[list-style-type](https://www.runoob.com/css/pr-list-style-type.html) 中可能的值。 |
| *list-style-position* | 设置在何处放置列表项标记。参阅：[list-style-position](https://www.runoob.com/css/pr-list-style-position.html) 中可能的值。 |
| *list-style-image*    | 使用图像来替换列表项的标记。参阅：[list-style-image](https://www.runoob.com/css/pr-list-style-image.html) 中可能的值。 |

#### list-style-type: 属性设置列表项标记的类型。

| 值                   | 描述                                                        |
| :------------------- | :---------------------------------------------------------- |
| none                 | 无标记。                                                    |
| disc                 | 默认。标记是实心圆。                                        |
| circle               | 标记是空心圆。                                              |
| square               | 标记是实心方块。                                            |
| decimal              | 标记是数字。                                                |
| decimal-leading-zero | 0开头的数字标记。(01, 02, 03, 等。)                         |
| lower-roman          | 小写罗马数字(i, ii, iii, iv, v, 等。)                       |
| upper-roman          | 大写罗马数字(I, II, III, IV, V, 等。)                       |
| lower-alpha          | 小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。) |
| upper-alpha          | 大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。) |
| lower-greek          | 小写希腊字母(alpha, beta, gamma, 等。)                      |
| lower-latin          | 小写拉丁字母(a, b, c, d, e, 等。)                           |
| upper-latin          | 大写拉丁字母(A, B, C, D, E, 等。)                           |
| hebrew               | 传统的希伯来编号方式                                        |
| armenian             | 传统的亚美尼亚编号方式                                      |
| georgian             | 传统的乔治亚编号方式(an, ban, gan, 等。)                    |
| cjk-ideographic      | 简单的表意数字                                              |
| hiragana             | 标记是：a, i, u, e, o, ka, ki, 等。（日文平假名字符）       |
| katakana             | 标记是：A, I, U, E, O, KA, KI, 等。（日文片假名字符）       |
| hiragana-iroha       | 标记是：i, ro, ha, ni, ho, he, to, 等。（日文平假名序号）   |
| katakana-iroha       | 标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名序号）   |

#### list-style-position:属性指示如何相对于对象的内容绘制列表项标记。

| 值      | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| inside  | 列表项目标记放置在文本以内，且环绕文本根据标记对齐。         |
| outside | 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。 |

#### list-style-image: 属性使用图像来替换列表项的标记。

| 值    | 描述                 |
| :---- | :------------------- |
| *URL* | 图像的路径。         |
| none  | 默认。无图形被显示。 |