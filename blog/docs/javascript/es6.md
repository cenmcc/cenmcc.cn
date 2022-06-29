# ES6新增特性

## 声明变量方式

- `let` 声明变量
- `const` 声明常量

const let var 之间的区别

| 区别               | var  | let  | const |
| ------------------ | ---- | ---- | ----- |
| 是否有块级作用域   | ✕    | ✓    | ✓     |
| 是否存在变量提升   | ✓    | ✕    | ✕     |
| 是否添加全局属性   | ✓    | ✕    | ✕     |
| 能否重复声明变量   | ✓    | ✕    | ✕     |
| 是否存在暂时性死区 | ✕    | ✓    | ✓     |
| 是否必须设置初始值 | ✕    | ✕    | ✓     |
| 能否改变指针指向   | ✓    | ✓    | ✕     |

## 解构赋值

```javascript
// 数组的解构
const arr = [1, 2, 3]
const [a, b, c] = arr // a:1 b:2 c:3

// 对象的解构
const obj = {
	name: 'cc',
	age: 11,
 	sex: 'man',
	options: {
		hobby: '游泳'
	}
}
const { name, sex } = obj  // name:cc sex:man
const { options: { hobby } } = obj // hobby:游泳

// 字符串的解构赋值
const str = 'Hello'
let [a, b, c, d, e] = str
```

## Array

### Array.from() 

可用于将伪数组转换为数组，常见的虚数组有 `arguments`、DOM中的 `NodeList`等

语法：`Array.from(arrayLike[, mapFn[, thisArg]])`

|   参数    |                         含义                         | 必选 |
| :-------: | :--------------------------------------------------: | :--: |
| arrayLike |        想要转换成数组的伪数组对象或可迭代对象        |  Y   |
|   mapFn   | 如果指定了该参数，新数组中的每个元素会执行该回调函数 |  N   |
|  thisArg  |      可选参数，执行回调函数 mapFn 时 this 对象       |  N   |

```js
const list = Array.from(document.querySelectorAll('img'));

function fn() {
  // 将函数内的arguments(伪数组)转换为数组
  // 转换后可调用数组的方法
	let args = Array.from(arguments);
}
```

### Array.of() 

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

**语法：**`Array.of(element0[, element1[, ...[, elementN]]])`

|   参数   |                   含义                   | 必选 |
| :------: | :--------------------------------------: | :--: |
| elementN | 任意个参数，将按顺序成为返回数组中的元素 |  Y   |

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

### Array.prototype.fill()

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

**语法：**`arr.fill(value[, start[, end]])`

| 参数  |              含义              | 必选 |
| :---: | :----------------------------: | :--: |
| value |      用来填充数组元素的值      |  Y   |
| start |      起始索引，默认值为0       |  N   |
|  end  | 终止索引，默认值为 this.length |  N   |

```js
let array = [1, 2, 3, 4]
array.fill(0, 1, 2)
// [1,0,3,4]
```

### Array.prototype.findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。其实这个和 find() 是成对的，不同的是它返回的是索引而不是值。

**语法：**`arr.findIndex(callback[, thisArg])`

|   参数   |                             含义                             | 必选 |
| :------: | :----------------------------------------------------------: | :--: |
| callback | 在数组每一项上执行的函数，接收 3 个参数，element、index、array |  Y   |
| thisArg  |                  执行回调时用作 this 的对象                  |  N   |

### Array.prototype.copyWithin()

在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

**语法：**`arr.copyWithin(target, start = 0, end = this.length)`

|  参数  |                             含义                             | 必选 |
| :----: | :----------------------------------------------------------: | :--: |
| target |          从该位置开始替换数据。如果为负值，表示倒数          |  Y   |
| start  | 从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算 |  N   |
|  end   | 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算 |  N   |

```js
let arr = [1, 2, 3, 4, 5]
console.log(arr.copyWithin(1, 3))
// [1, 4, 5, 4, 5]
```

## Function

#### 默认参数

```js
function fn(num = 1) {
  console.log(num) //调用函数时如果未传参,将使用默认参数
}
```

### Rest 参数

```js
// ES6箭头函数无法使用arguments ,可以使用 Rest 代替
const sum = (...nums) => {
	const num = 0
  nums.forEach(item => {
    num += item * 1
  })
  return num 
}
```

### 扩展运算符

```js
const arr = [1, 2, 3, 4];

console.log(...arr) // 1 2 3 4 
```

### 箭头函数

```js
const fn = (num) => { 
	return num + 'px'
}

// 以上写法可以简写为
const fn = num => num + 'px'
```

1. 当参数只有一个时可以省略括号例如: `res => {}`

2. 当函数体只有 一行return代码 可以

#### 箭头函数与普通函数的区别

- 箭头函数没有自己的`this`
- 箭头函数无法使用`call()`、`apply()`、`bind() `改变this指向
- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的`arguments`，可以使用`Rest`参数代替
- 箭头函数没有`prototype`

## Object

### 属性简写表示法

```js
const name = 'cc';
const age = 14;
const obj = {
  name: name,
  age: age
}

// 简写形式

const obj = {
  name,
  age
}
```

### 属性名表达式

```js
const TYPE = 'type'
const AGE = 'AGE'
// 使用变量来定义对象的key
let obj = {
	[TYPE]: 0
  [AGE]: 18
}
```

### Object.is()

判断两个对象是否相等。

```js
let obj = { name: 'cc' };
let obj2 = { name: 'cc' };

Object.is(obj,obj2) //false

obj = obj2

Object.is(obj,obj2) //true
```

### Object.assign()

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

**基本语法**

> Object.assign(target, ...sources)

|  参数   |   含义   | 必选 |
| :-----: | :------: | :--: |
| target  | 目标对象 |  Y   |
| sources |  源对象  |  N   |

```js
const target = {
    a: 1,
    b: 2
}
const source = {
    b: 4,
    c: 5
}
// target 数据如果和 source 存在冲突，则后者会覆盖前者
const returnedTarget = Object.assign(target, source)

console.log(target)
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget)
// expected output: Object { a: 1, b: 4, c: 5 }
```

### 对象的遍历方式

- `for ... in`
- `Object.keys()`用于返回对象所有key组成的数组。
- `Object.getOwnPropertyNames()`用于返回对象所有key组成的数组。
- `Reflect.ownKeys()`用于返回对象所有key组成的数组。

## Class

```js
// es5 
let Animal = function(type) {
    this.type = type
}
Animal.prototype.walk = function() {
    console.log( `I am walking` )
}
// es6
class Animal {
    constructor(type) {
        this.type = type
    },
		walk() {
      console.log( `I am walking` )
    }
}
```

### Setters & Getters

```js
class Animal {
    constructor(type, age) {
        this.type = type
        this._age = age
    }
    get age() {
        return this._age
    }
    set age(val) {
        this._age = val
    }
}
```

### 静态方法

```js
// es5 
let Animal = function(type) {
    this.type = type
    this.walk = function() {
        console.log( `I am walking` )
    }
}

Animal.eat = function(food) {
    console.log( `I am eating` )
}

//es6
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
    static eat() {
        console.log( `I am eating` )
    }
}
```

### 继承

```js
/* es5 继承*/

let Dog = function() {
    // 初始化父类
    Animal.call(this, 'dog')
    this.run = function() {
        console.log('I can run')
    }
}
// 继承
Dog.prototype = Animal.prototype

/* es6 继承*/
class Dog extends Animal {
  constructor () {
    super('dog')
  }
  run () {
    console.log('I can run')
  }
}
```

## Symbol

ES6 引入了一种新的原始数据类型 `Symbol` ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```js
let s = Symbol()

typeof s // "symbol"
```

### Symbol.for()

`Symbol.for()` 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
console.log(s1 === s2) // true
```

### Symbol.keyFor()

Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。

```js
const s1 = Symbol('foo')
console.log(Symbol.keyFor(s1)) // undefined

const s2 = Symbol.for('foo')
console.log(Symbol.keyFor(s2)) // foo
```

## Set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

生成 Set 实例

```js
  let s = new Set()
```

可以定义一个空的 Set 实例，也可以在实例化的同时传入默认的数据。

```js
  let s = new Set([2, 2, 4, 2])	// 2, 4
  
  s.add(3) // 添加参数
	s.delete(2) // true  删除单项数据
	s.clear() // 删除全部数据
```

### 遍历方式

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员
- for...of：可以直接遍历每个成员

## WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

WeakSet 的成员只能是对象，而不能是其他类型的值。

```js
const ws = new WeakSet()
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
let ws = new WeakSet()
const obj1 = {
    name: 'imooc'
}
const obj2 = {
    age: 5
}
ws.add(obj1)
ws.add(obj2)
ws.delete(obj1)
console.log(ws)
console.log(ws.has(obj2))
```

WeakSet 没有size属性，没有办法遍历它的成员。

WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

## Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
