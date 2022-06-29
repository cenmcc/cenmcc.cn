# Array数组操作



#### ES5中数组的遍历

> forEach()、map()、filter()、some()、every()方法接收callback回调,回调方法接收`value,index,array`参数

- `for`循环

- ` forEach() `没有返回值，只针对每个元素调用function

- `map()`返回新的数组，每个元素修改为调用function后的结果

- `filter()`返回boolean, 判断每一个结果是否符合某项要求, 如果返回true则添加进返回的数组

- `some()`返回boolean，判断是否有元素符合function条件

- `every()` 返回boolean，判断每个元素是否都符合条件

- `reduce(previousValue, currentValue, currentIndex, array)`接收一个函数作为累加器

  ```javascript
  let sum = arr.reduce((previousValue, currentValue, index, array) => {
    	// previousValue: 表示前面累加起来的值
    	// currentValue: 表示当前索引的值
      return previousValue + currentValue
  }, 0) // 第二个参数表示累加器的初始值
  ```

::: warning

​	for...in不能用于遍历数组。
​	for...in代码块中不能有 return，不然会抛出异常。

:::

#### ES6中数组的遍历

- `for ... of`循环
- `Array.from(arrayLike[, mapFn[, thisArg]])`将伪数组转换为数组

