# Vue 常见错误及解决方法



> GET http://localhost:8080/pubilc/undefined 404 (Not Found)

- 原因：DOM加载了数据还未获得报404错误
- 解决：用v-if判断让数据加载了在渲染



> Expected Object,got Number with value 95

预期得到的是对象，但是拿到的是数字值 95

- 原因：参数传递有问题
- 解决：传递参数改为Object类型



> Missing required prop: "value"

父组件没有传递子组件所需要的属性



> TypeError:Cannot read property ‘key’ of undefined

- 原因：v-for循环 key的设置，有重复就会报错，页面就死掉了。
- 解决：使用不重复的索引作为key



> Error in render: “TypeError: Cannot read property ‘list’ of undefined”

- 原因：template中用到了list，而data中没有定义

> Property or method “message” is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property

- 原因：message属性没有定义



> Module build failed: Error: No parser and no file path given, couldn’t infer a parser.



>  Unknown custom element: - did you register the component correctly? For recursive components, make sure to provide the “name” option.

> Failed to resolve directive:mode

-  原因：Vue 指令写错了



> [ Vue warn ]: Error compiling template

template中定义了多个子容器



> [ Vue warn ]: Unknown custom element: < my-footer > - did you register the component correctly? For recursive components, make sure to provide the "name" option.

- 原因：把局部组件当成全局组件去使用了
- 解决方案：正确的注册组件



>    The "data" option should be a function that returns a per-instance value in component definitions.

- 原因：在组件中去初始化数据 不允许给data直接赋值一个对象



> Uncaught TypeError: Cannot read property 'push' of undefined

- 原因：push前面的那个变量是undefined



> No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.

- 原因：跨域问题
- 解决方案：在通用引入的php文件中添加引入header，注意：引入的php要放在最上方 header('Access-Control-Allow-Origin:*');
