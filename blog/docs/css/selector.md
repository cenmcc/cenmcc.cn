---
date: 2020-07-15
---

# CSS Selector(选择器)

#### 元素选择符

```css
* { Rules } 通配符选择符

div { Rules }	类型选择符

#id { Rules }	ID选择符

.class { Rules }	类选择符

div,ul { Rules } 
```



#### 关系选择符

```css
.id div { Rules } 包含选择器。选择.id下面的所有div标签

.id > div { Rules } 子选择符。只命中子元素，不能命中孙子元素

.id ~ div { Rules } 兄弟选择符。选择与.id元素后面的兄弟div元素

.id + div { Rules } 相邻选择符。选择紧挨着.id之后的第一个div元素
```

#### 属性选择器

```css
input[class] { Rules } 

input[id="username"] { Rules }

input[~="username"] { Rules }	'username'用空格分隔的字符列表。'username box'

input[id^="user"] { Rules } 以'user'开头的元素。 'username'

input[id$="name"] { Rules } 以'name'结尾的元素。'username'

input[id*="erna"] { Rules }  包含'name'的元素。 'username'

div[class="box"] { Rules } 以'box'开头用'-'连接的元素,仅为'box'也会被选中 'box-content'
```

#### 伪类选择符

| 选择符                               | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| **E:link** { sRules }                | 设置超链接a在未被访问前的样式。                              |
| **E:visited** { sRules }             | 设置超链接a在其链接地址已被访问过时的样式。                  |
| **E:hover** { sRules }               | 设置元素在其鼠标悬停时的样式。                               |
| **E:active** { sRules }              | 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式。 |
| **E:focus** { sRules }               | 设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式。  |
| **E:not(s)** { sRules }              | 匹配不含有s选择符的元素E。                                   |
| **E:root** { sRules }                | 匹配E元素在文档的根元素。在HTML中，根元素永远是HTML          |
| **E:first-child** { sRules }         | 匹配父元素的第一个子元素E。                                  |
| **E:last-child** { sRules }          | 匹配父元素的最后一个子元素E。                                |
| **E:only-child** { sRules }          | 匹配父元素仅有的一个子元素E。                                |
| **E:nth-child(n)** { sRules }        | 匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效。  |
| **E:nth-last-child(n)** { sRules }   | 匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效。 |
| **E:first-of-type** { sRules }       | 匹配父元素下第一个类型为E的子元素。                          |
| **E:last-of-type** { sRules }        | 匹配父元素下的所有E子元素中的倒数第一个。                    |
| **E:only-of-type** { sRules }        | 匹配父元素的所有子元素中唯一的那个子元素E。                  |
| **E:nth-of-type(n)** { sRules }      | 匹配父元素的第n个子元素E。                                   |
| **E:nth-last-of-type(n)** { sRules } | 匹配父元素的倒数第n个子元素E。                               |
| **E:empty** { sRules }               | 匹配没有任何子元素（包括text节点）的元素E。                  |
| **E:checked** { sRules }             | 匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时) |
| **E:enabled** { sRules }             | 匹配用户界面上处于可用状态的元素E。                          |
| **E:disabled** { sRules }            | 匹配用户界面上处于禁用状态的元素E。                          |
| **E:target** { sRules }              | 匹配相关URL指向的E元素。                                     |



#### 伪对象选择符

**E::first-letter** { sRules }	**设置对象内的第一个字符的样式。**

**E::first-line** { sRules }	**设置对象内的第一行的样式。**

**E::before** { sRules }	

> 设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性

**E::after** { sRules }

> 设置在对象后（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性

**E::placeholder** { sRules }	**设置对象文字占位符的样式。**

**E::selection** { sRules }	**设置对象被选择时的样式。**