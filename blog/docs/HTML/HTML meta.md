# HTML MATE标签

> **HTML `<meta>` 元素**表示那些不能由其它 HTML 元相关（meta-related）元素（(<base>、 <link>、<script> 、 <style>或<title>）之一表示的任何**元数据**信息。

##### `meta` 元素定义的元数据的类型包括以下几种：

- 如果设置了 `name`属性，`meta` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。
- 如果设置了 `http-equiv`属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 `charset`属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 `itemprop`属性，`meta` 元素提供用户定义的元数据。

#### charset

这个属性声明了文档的字符编码。如果使用了这个属性，其值必须是与 ASCII 大小写无关（ASCII case-insensitive）的"`utf-8`"。

```html
<meta charset="utf-8" />
```

#### http-equiv

属性定义了一个编译指示指令。这个属性叫做 `http-equiv(alent)` 是因为所有允许的值都是特定 HTTP 头部的名称，如下：

- `content-security-policy`
  它允许页面作者定义当前页的内容策略。 内容策略主要指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。

- `content-type`如果使用这个属性，其值必须是"`text/html; charset=utf-8`"。注意：该属性只能用于 MIME type为 `text/html` 的文档，不能用于 MIME 类型为 XML 的文档。
  
-  `default-style` 设置默认 CSS 样式表组的名称。

- `x-ua-compatible`
  如果指定，则 `content` 属性必须具有值 "`IE=edge`"。用户代理必须忽略此指示。

- `refresh`  这个属性指定：

    - 如果 `content`只包含一个正整数，则为重新载入页面的时间间隔 (秒)；

    - 如果 `content`包含一个正整数，并且后面跟着字符串 '`;url=`' 和一个合法的 URL，则是重定向到指定链接的时间间隔 (秒)

#### name

`name` 和 `content` 属性可以一起使用，以名 - 值对的方式给文档提供元数据，其中 name 作为元数据的名称，content 作为元数据的值。

```html
<meta name="description" content="网站描述，有利于爬虫获取">
<meta name="keyword" content="网站关键字,有利于爬虫获取">
```

