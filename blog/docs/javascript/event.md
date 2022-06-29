# JavaScript DOM事件

#### JavaScript三种绑定事件的方式

```html
<button onclick="fn()">按钮</button>
<button id="btn">按钮</button>
<button id="btn2">按钮</button>
<script>
  // 方法1: 在DOM 监听属性上绑定方法
	function fn() {
		alert('按钮被点击了')
	}
  // 方法2:
	const btn = document.getElementById('btn');
  btn.onclick = function (){
		alert('按钮被点击了')
  }
  // 方法3:
  const btn2 = document.getElementById('btn2');
	btn2.addEventListener('click',(e) => {
		alert('按钮被点击了')
	},false)
</script>
```


#### 鼠标事件

| Event Name           | Fired When                                 |
| :------------------- | :----------------------------------------- |
| `click `             | 在元素上按下并释放任意鼠标按键。           |
| `contextmenu `       | 右键点击（在右键菜单显示前触发）。         |
| `dblclick `          | 在元素上双击鼠标按钮。                     |
| `mouseenter `        | 指针移到有事件监听的元素内。               |
| `mouseleave `        | 指针移出元素范围外（不冒泡）。             |
| `mousemove `         | 指针在元素内移动时持续触发。               |
| `mouseover `         | 指针移到有事件监听的元素或者它的子元素内。 |
| `mouseout `          | 指针移出元素，或者移到它的子元素上。       |
| `mouseup `           | 在元素上释放任意鼠标按键。                 |
| `pointerlockchange ` | 鼠标被锁定或者解除锁定发生时。             |
| `pointerlockerror `  | 可能因为一些技术的原因鼠标锁定被禁止时。   |
| `select `            | 有文本被选中。                             |
| `wheel `             | 滚轮向任意方向滚动。                       |

#### 触摸事件

| Event Name    | Fired When                               |
| :------------ | :--------------------------------------- |
| `touchstart`  | 当用户在触摸平面上放置了一个触点时触发。 |
| `touchend`    | 当一个触点被用户从触摸平面上移除时触发。 |
| `touchmove`   | 当用户在触摸平面上移动触点时触发。       |
| `touchcancel` | 当触点由于某些原因被中断时触发           |

#### 键盘事件

| Event Name  | Fired When                                              |
| :---------- | :------------------------------------------------------ |
| `keydown `  | 按下任意按键。                                          |
| `keypress ` | 除 Shift、Fn、CapsLock 外的任意键被按住。（连续触发。） |
| `keyup `    | 释放任意按键。                                          |


#### 表单事件

| 事件名称  | 何时触发       |
| :-------- | :------------- |
| `reset `  | 点击重置按钮时 |
| `submit ` | 点击提交按钮   |
#### 资源事件

| 事件名称        | 何时触发                              |
| :-------------- | :------------------------------------ |
| `error `        | 资源加载失败时。                      |
| `abort `        | 正在加载资源已经被中止时。            |
| `load `         | 资源及其相关资源已完成加载。          |
| `beforeunload ` | window，document 及其资源即将被卸载。 |
| `unload `       | 文档或一个依赖资源正在被卸载。        |

#### 拖放事件

| Event Name   | Fired When                                                                               |
| :----------- | :--------------------------------------------------------------------------------------- |
| `drag `      | 正在拖动元素或文本选区（在此过程中持续触发，每 350ms 触发一次）                          |
| `dragend `   | 拖放操作结束。（松开鼠标按钮或按下 Esc 键）                                              |
| `dragenter ` | 被拖动的元素或文本选区移入有效释放目标区                                                 |
| `dragstart ` | 用户开始拖动 HTML 元素或选中的文本                                                       |
| `dragleave ` | 被拖动的元素或文本选区移出有效释放目标区                                                 |
| `dragover `  | 被拖动的元素或文本选区正在有效释放目标上被拖动 （在此过程中持续触发，每 350ms 触发一次） |
| `drop `      | 元素在有效释放目标区上释放                                                               |

#### 进度事件

| Event Name  | Fired When                                                                    |
| :---------- | :---------------------------------------------------------------------------- |
| `abort`     | Progression has been terminated (not due to an error).                        |
| `error`     | Progression has failed.                                                       |
| `load`      | Progression has been successful.                                              |
| `loadend`   | Progress has stopped (after "error", "abort" or "load" have been dispatched). |
| `loadstart` | Progress has begun.                                                           |
| `progress`  | In progress.                                                                  |

#### 输入框焦点事件

| 事件名称 | 何时触发                   |
| :------- | :------------------------- |
| `focus ` | 元素获得焦点（不会冒泡）。 |
| `blur `  | 元素失去焦点（不会冒泡）。 |
#### WebSocket 事件

| 事件名称   | 何时触发                                           |
| :--------- | :------------------------------------------------- |
| `open `    | WebSocket 连接已建立。                             |
| `message ` | 通过 WebSocket 接收到一条消息。                    |
| `error `   | WebSocket 连接异常被关闭（比如有些数据无法发送）。 |
| `close `   | WebSocket 连接已关闭。                             |

#### 参考

- [Event事件](([])[https://developer.mozilla.org/zh-CN/docs/Web/API/Event])
