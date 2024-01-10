const es6 = {
  id: 7,
  category: "ES6",
  questions: [
    {
      title: "var、let、const之间的区别",
      desc: "面试官：说说var、let、const之间的区别",
      content:`
## 一、var

在ES5中，顶层对象的属性和全局变量是等价的，用\`var\`声明的变量既是全局变量，也是顶层变量

注意：顶层对象，在浏览器环境指的是\`window\`对象，在 \`Node\` 指的是\`global\`对象

\`\`\`js
var a = 10;
console.log(window.a) // 10
\`\`\`

使用\`var\`声明的变量存在变量提升的情况

\`\`\`js
console.log(a) // undefined
var a = 20
\`\`\`

在编译阶段，编译器会将其变成以下执行

\`\`\`js
var a
console.log(a)
a = 20
\`\`\`

使用\`var\`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明

\`\`\`js
var a = 20 
var a = 30
console.log(a) // 30
\`\`\`

在函数中使用使用\`var\`声明变量时候，该变量是局部的

\`\`\`js
var a = 20
function change(){
    var a = 30
}
change()
console.log(a) // 20 
\`\`\`

而如果在函数内不使用\`var\`，该变量是全局的

\`\`\`js
var a = 20
function change(){
   a = 30
}
change()
console.log(a) // 30 
\`\`\`

## 二、let

\`let\`是\`ES6\`新增的命令，用来声明变量

用法类似于\`var\`，但是所声明的变量，只在\`let\`命令所在的代码块内有效

\`\`\`js
{
    let a = 20
}
console.log(a) // ReferenceError: a is not defined.
\`\`\`

不存在变量提升

\`\`\`js
console.log(a) // 报错ReferenceError
let a = 2
\`\`\`

这表示在声明它之前，变量\`a\`是不存在的，这时如果用到它，就会抛出一个错误

只要块级作用域内存在\`let\`命令，这个区域就不再受外部影响

\`\`\`js
var a = 123
if (true) {
    a = 'abc' // ReferenceError
    let a;
}
\`\`\`

使用\`let\`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”

最后，\`let\`不允许在相同作用域中重复声明

\`\`\`js
let a = 20
let a = 30
// Uncaught SyntaxError: Identifier 'a' has already been declared
\`\`\`

注意的是相同作用域，下面这种情况是不会报错的

\`\`\`js
let a = 20
{
    let a = 30
}
\`\`\`

因此，我们不能在函数内部重新声明参数

\`\`\`js
function func(arg) {
  let arg;
}
func()
// Uncaught SyntaxError: Identifier 'arg' has already been declared
\`\`\`

## 三、const

\`const\`声明一个只读的常量，一旦声明，常量的值就不能改变

\`\`\`js
const a = 1
a = 3
// TypeError: Assignment to constant variable.
\`\`\`

这意味着，\`const\`一旦声明变量，就必须立即初始化，不能留到以后赋值

\`\`\`js
const a;
// SyntaxError: Missing initializer in const declaration
\`\`\`

如果之前用\`var\`或\`let\`声明过变量，再用\`const\`声明同样会报错

\`\`\`js
var a = 20
let b = 20
const a = 30
const b = 30
// 都会报错
\`\`\`

\`const\`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量

对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，\`const\`只能保证这个指针是固定的，并不能确保改变量的结构不变

\`\`\`js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
\`\`\`

其它情况，\`const\`与\`let\`一致

## 四、区别

\`var\`、\`let\`、\`const\`三者区别可以围绕下面五点展开：

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用



### 变量提升

\`var \`声明的变量存在变量提升，即变量可以在声明之前调用，值为\`undefined\`

\`let\`和\`const\`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

\`\`\`js
// var
console.log(a)  // undefined
var a = 10

// let 
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
\`\`\`



### 暂时性死区

\`var\`不存在暂时性死区

\`let\`和\`const\`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

\`\`\`js
// var
console.log(a)  // undefined
var a = 10

// let
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
\`\`\`



### 块级作用域

\`var\`不存在块级作用域

\`let\`和\`const\`存在块级作用域

\`\`\`js
// var
{
    var a = 20
}
console.log(a)  // 20

// let
{
    let b = 20
}
console.log(b)  // Uncaught ReferenceError: b is not defined

// const
{
    const c = 20
}
console.log(c)  // Uncaught ReferenceError: c is not defined
\`\`\`



### 重复声明

\`var\`允许重复声明变量

\`let\`和\`const\`在同一作用域不允许重复声明变量

\`\`\`js
// var
var a = 10
var a = 20 // 20

// let
let b = 10
let b = 20 // Identifier 'b' has already been declared

// const
const c = 10
const c = 20 // Identifier 'c' has already been declared
\`\`\`



### 修改声明的变量

\`var\`和\`let\`可以

\`const\`声明一个只读的常量。一旦声明，常量的值就不能改变

\`\`\`js
// var
var a = 10
a = 20
console.log(a)  // 20

//let
let b = 10
b = 20
console.log(b)  // 20

// const
const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
\`\`\`



### 使用
能用\`const\`的情况尽量使用\`const\`，其他情况下大多数使用\`let\`，避免使用\`var\`
      `
    },
    {
      title: "ES6中数组新增了哪些扩展？",
      desc: "面试官：ES6中数组新增了哪些扩展？",
      content:`
## 一、扩展运算符的应用

ES6通过扩展元素符\`...\`，好比 \`rest\` 参数的逆运算，将一个数组转为用逗号分隔的参数序列

\`\`\`js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
\`\`\`

主要用于函数调用的时候，将一个数组变为参数序列

\`\`\`js
function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
\`\`\`

可以将某些数据结构转为数组

\`\`\`js
[...document.querySelectorAll('div')]
\`\`\`

能够更简单实现数组复制

\`\`\`js
const a1 = [1, 2];
const [...a2] = a1;
// [1,2]
\`\`\`

数组的合并也更为简洁了

\`\`\`js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
\`\`\`

注意：通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

下面看个例子就清楚多了

\`\`\`js
const arr1 = ['a', 'b',[1,2]];
const arr2 = ['c'];
const arr3  = [...arr1,...arr2]
arr[1][0] = 9999 // 修改arr1里面数组成员值
console.log(arr[3]) // 影响到arr3,['a','b',[9999,2],'c']
\`\`\`

扩展运算符可以与解构赋值结合起来，用于生成数组

\`\`\`js
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
\`\`\`

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

\`\`\`js
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
\`\`\`

可以将字符串转为真正的数组

\`\`\`javascript
[...'hello']
// [ "h", "e", "l", "l", "o" ]
\`\`\`

定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组

\`\`\`js
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
\`\`\`

如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错

\`\`\`javascript
const obj = {a: 1, b: 2};
let arr = [...obj]; // TypeError: Cannot spread non-iterable object
\`\`\`



## 二、构造函数新增的方法

关于构造函数，数组新增的方法有如下：

- Array.from()
- Array.of()

### Array.from()

将两类对象转为真正的数组：类似数组的对象和可遍历\`（iterable）\`的对象（包括 \`ES6\` 新增的数据结构 \`Set\` 和 \`Map\`）

\`\`\`js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
\`\`\`

还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组

\`\`\`js
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
\`\`\`



### Array.of()

用于将一组值，转换为数组

\`\`\`js
Array.of(3, 11, 8) // [3,11,8]
\`\`\`

没有参数的时候，返回一个空数组

当参数只有一个的时候，实际上是指定数组的长度

参数个数不少于 2 个时，\`Array()\`才会返回由参数组成的新数组

\`\`\`js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
\`\`\`



### 三、实例对象新增的方法

关于数组实例对象新增的方法有如下：

- copyWithin()
- find()、findIndex()
- fill()
- entries()，keys()，values()
- includes()
- flat()，flatMap()

### copyWithin()

将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

参数如下：

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

\`\`\`js
[1, 2, 3, 4, 5].copyWithin(0, 3) // 将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2
// [4, 5, 3, 4, 5] 
\`\`\`



### find()、findIndex()

\`find()\`用于找出第一个符合条件的数组成员

参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组

\`\`\`js
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
\`\`\`

\`findIndex\`返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回\`-1\`

\`\`\`javascript
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
\`\`\`

这两个方法都可以接受第二个参数，用来绑定回调函数的\`this\`对象。

\`\`\`js
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
\`\`\`



### fill()

使用给定值，填充一个数组

\`\`\`javascript
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
\`\`\`

还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置

\`\`\`js
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
\`\`\`

注意，如果填充的类型为对象，则是浅拷贝



### entries()，keys()，values()

\`keys()\`是对键名的遍历、\`values()\`是对键值的遍历，\`entries()\`是对键值对的遍历

\`\`\`js
or (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
\`\`\`



### includes()

用于判断数组是否包含给定的值

\`\`\`js
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
\`\`\`

方法的第二个参数表示搜索的起始位置，默认为\`0\`

参数为负数则表示倒数的位置

\`\`\`js
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
\`\`\`



### flat()，flatMap()

将数组扁平化处理，返回一个新数组，对原数据没有影响

\`\`\`js
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
\`\`\`

\`flat()\`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将\`flat()\`方法的参数写成一个整数，表示想要拉平的层数，默认为1

\`\`\`js
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
\`\`\`

\`flatMap()\`方法对原数组的每个成员执行一个函数相当于执行\`Array.prototype.map()\`，然后对返回值组成的数组执行\`flat()\`方法。该方法返回一个新数组，不改变原数组

\`\`\`js
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
\`\`\`

\`flatMap()\`方法还可以有第二个参数，用来绑定遍历函数里面的\`this\`



### 四、数组的空位

数组的空位指，数组的某一个位置没有任何值

ES6 则是明确将空位转为\`undefined\`，包括\`Array.from\`、扩展运算符、\`copyWithin()\`、\`fill()\`、\`entries()\`、\`keys()\`、\`values()\`、\`find()\`和\`findIndex()\`

建议大家在日常书写中，避免出现空位





### 五、排序稳定性

将\`sort()\`默认设置为稳定的排序算法

\`\`\`js
const arr = [
  'peach',
  'straw',
  'apple',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting)
// ["apple", "peach", "straw", "spork"]
\`\`\`

排序结果中，\`straw\`在\`spork\`的前面，跟原始顺序一致




## 参考文献

- https://es6.ruanyifeng.com/#docs/array
      `
    },{
      title: "怎么理解ES6中 Decorator 的？使用场景？",
      desc: " 面试官：你是怎么理解ES6中 Decorator 的？使用场景？",
      content:`
## 一、介绍

Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式

简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。

\`ES6\`中\`Decorator\`功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法

这里定义一个士兵，这时候他什么装备都没有

\`\`\`js
class soldier{ 
}
\`\`\`

定义一个得到 AK 装备的函数，即装饰器

\`\`\`js
function strong(target){
    target.AK = true
}
\`\`\`

使用该装饰器对士兵进行增强

\`\`\`js
@strong
class soldier{
}
\`\`\`

这时候士兵就有武器了

\`\`\`js
soldier.AK // true
\`\`\`

上述代码虽然简单，但也能够清晰看到了使用\`Decorator\`两大优点：

- 代码可读性变强了，装饰器命名相当于一个注释
- 在不改变原有代码情况下，对原来功能进行扩展



## 二、用法

\`Docorator\`修饰对象为下面两种：

- 类的装饰
- 类属性的装饰

### 类的装饰

当对类本身进行装饰的时候，能够接受一个参数，即类本身

将装饰器行为进行分解，大家能够有个更深入的了解

\`\`\`js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
\`\`\`

下面\`@testable\`就是一个装饰器，\`target\`就是传入的类，即\`MyTestableClass\`，实现了为类添加静态属性

\`\`\`js
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
\`\`\`

如果想要传递参数，可以在装饰器外层再封装一层函数

\`\`\`js
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false
\`\`\`



### 类属性的装饰

当对类属性进行装饰的时候，能够接受三个参数：

- 类的原型对象
- 需要装饰的属性名
- 装饰属性名的描述对象

首先定义一个\`readonly\`装饰器

\`\`\`js
function readonly(target, name, descriptor){
  descriptor.writable = false; // 将可写属性设为false
  return descriptor;
}
\`\`\`

使用\`readonly\`装饰类的\`name\`方法

\`\`\`javascript
class Person {
  @readonly
  name() { return \`\${this.first} \${this.last}\` }
}
\`\`\`

相当于以下调用

\`\`\`js
readonly(Person.prototype, 'name', descriptor);
\`\`\`

如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行

\`\`\`javascript
function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) =>console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
\`\`\`

外层装饰器\`@dec(1)\`先进入，但是内层装饰器\`@dec(2)\`先执行



### 注意

装饰器不能用于修饰函数，因为函数存在变量声明情况

\`\`\`js
var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}
\`\`\`

编译阶段，变成下面

\`\`\`js
var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};
\`\`\`

意图是执行后\`counter\`等于 1，但是实际上结果是\`counter\`等于 0



## 三、使用场景

基于\`Decorator\`强大的作用，我们能够完成各种场景的需求，下面简单列举几种：

使用\`react-redux\`的时候，如果写成下面这种形式，既不雅观也很麻烦

\`\`\`js
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
\`\`\`

通过装饰器就变得简洁多了

\`\`\`js
@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}
\`\`\`

将\`mixins\`，也可以写成装饰器，让使用更为简洁了

\`\`\`js
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

// 使用
const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // "foo"
\`\`\`



下面再讲讲\`core-decorators.js\`几个常见的装饰器

#### @antobind

\`autobind\`装饰器使得方法中的\`this\`对象，绑定原始对象

\`\`\`javascript
import { autobind } from 'core-decorators';

class Person {
  @autobind
  getPerson() {
    return this;
  }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person;
// true
\`\`\`



#### @readonly

\`readonly\`装饰器使得属性或方法不可写

\`\`\`javascript
import { readonly } from 'core-decorators';

class Meal {
  @readonly
  entree = 'steak';
}

var dinner = new Meal();
dinner.entree = 'salmon';
// Cannot assign to read only property 'entree' of [object Object]
\`\`\`





#### @deprecate

\`deprecate\`或\`deprecated\`装饰器在控制台显示一条警告，表示该方法将废除

\`\`\`javascript
import { deprecate } from 'core-decorators';

class Person {
  @deprecate
  facepalm() {}

  @deprecate('功能废除了')
  facepalmHard() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: 功能废除了

\`\`\`



## 参考文献

- https://es6.ruanyifeng.com/#docs/decorator
      `
    },{
      title: "es6中对象新增了哪些扩展？",
      desc: "面试官：对象新增了哪些扩展？",
      content:`
## 一、参数

\`ES6\`允许为函数的参数设置默认值

\`\`\`js
function log(x, y = 'World') {
  console.log(x, y);
}

console.log('Hello') // Hello World
console.log('Hello', 'China') // Hello China
console.log('Hello', '') // Hello
\`\`\`

函数的形参是默认声明的，不能使用\`let\`或\`const\`再次声明

\`\`\`js
function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}
\`\`\`

参数默认值可以与解构赋值的默认值结合起来使用

\`\`\`js
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
\`\`\`

上面的\`foo\`函数，当参数为对象的时候才能进行解构，如果没有提供参数的时候，变量\`x\`和\`y\`就不会生成，从而报错，这里设置默认值避免

\`\`\`js
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
\`\`\`

参数默认值应该是函数的尾参数，如果不是非尾部的参数设置默认值，实际上这个参数是没发省略的

\`\`\`javascript
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined]
f(, 1) // 报错
f(undefined, 1) // [1, 1]
\`\`\`



## 二、属性

### 函数的length属性

\`length\`将返回没有指定默认值的参数个数

\`\`\`js
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
\`\`\`

\`rest\` 参数也不会计入\`length\`属性

\`\`\`js
(function(...args) {}).length // 0
\`\`\`

如果设置了默认值的参数不是尾参数，那么\`length\`属性也不再计入后面的参数了

\`\`\`js
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
\`\`\`



### name属性

返回该函数的函数名

\`\`\`js
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
\`\`\`

如果将一个具名函数赋值给一个变量，则 \`name\`属性都返回这个具名函数原本的名字

\`\`\`js
const bar = function baz() {};
bar.name // "baz"
\`\`\`

\`Function\`构造函数返回的函数实例，\`name\`属性的值为\`anonymous\`

\`\`\`javascript
(new Function).name // "anonymous"
\`\`\`

\`bind\`返回的函数，\`name\`属性值会加上\`bound\`前缀

\`\`\`javascript
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
\`\`\`



## 三、作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域

等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的

下面例子中，\`y=x\`会形成一个单独作用域，\`x\`没有被定义，所以指向全局变量\`x\`

\`\`\`js
let x = 1;

function f(y = x) { 
  // 等同于 let y = x  
  let x = 2; 
  console.log(y);
}

f() // 1
\`\`\`



## 四、严格模式

只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

\`\`\`js
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
\`\`\`



## 五、箭头函数

使用“箭头”（\`=>\`）定义函数

\`\`\`js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
\`\`\`

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

\`\`\`js
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
\`\`\`

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用\`return\`语句返回

\`\`\`js
var sum = (num1, num2) => { return num1 + num2; }
\`\`\`

如果返回对象，需要加括号将对象包裹

\`\`\`js
let getTempItem = id => ({ id: id, name: "Temp" });
\`\`\`

注意点：

- 函数体内的\`this\`对象，就是定义时所在的对象，而不是使用时所在的对象
- 不可以当作构造函数，也就是说，不可以使用\`new\`命令，否则会抛出一个错误
- 不可以使用\`arguments\`对象，该对象在函数体内不存在。如果要用，可以用 \`rest\` 参数代替
- 不可以使用\`yield\`命令，因此箭头函数不能用作 Generator 函数

## 参考文献
- https://es6.ruanyifeng.com/#docs/function
      `
    },{
      title: "怎么理解ES6中 Generator的？使用场景？",
      desc: "面试官：你是怎么理解ES6中 Generator的？使用场景？",
      content:`
## 一、介绍

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

回顾下上文提到的解决异步的手段：

- 回调函数
- promise

那么，上文我们提到\`promsie\`已经是一种比较流行的解决异步方案，那么为什么还出现\`Generator\`？甚至\`async/await\`呢？

该问题我们留在后面再进行分析，下面先认识下\`Generator\`

### Generator函数

执行 \`Generator\` 函数会返回一个遍历器对象，可以依次遍历 \`Generator\` 函数内部的每一个状态

形式上，\`Generator \`函数是一个普通函数，但是有两个特征：

- \`function\`关键字与函数名之间有一个星号
- 函数体内部使用\`yield\`表达式，定义不同的内部状态

\`\`\`javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
\`\`\`



## 二、使用

\`Generator\` 函数会返回一个遍历器对象，即具有\`Symbol.iterator\`属性，并且返回给自己

\`\`\`javascript
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g
// true
\`\`\`

通过\`yield\`关键字可以暂停\`generator\`函数返回的遍历器对象的状态

\`\`\`javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
\`\`\`

上述存在三个状态：\`hello\`、\`world\`、\`return\`

通过\`next\`方法才会遍历到下一个内部状态，其运行逻辑如下：

- 遇到\`yield\`表达式，就暂停执行后面的操作，并将紧跟在\`yield\`后面的那个表达式的值，作为返回的对象的\`value\`属性值。
- 下一次调用\`next\`方法时，再继续往下执行，直到遇到下一个\`yield\`表达式
- 如果没有再遇到新的\`yield\`表达式，就一直运行到函数结束，直到\`return\`语句为止，并将\`return\`语句后面的表达式的值，作为返回的对象的\`value\`属性值。
- 如果该函数没有\`return\`语句，则返回的对象的\`value\`属性值为\`undefined\`

\`\`\`javascript
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
\`\`\`

\`done\`用来判断是否存在下个状态，\`value\`对应状态值

\`yield\`表达式本身没有返回值，或者说总是返回\`undefined\`

通过调用\`next\`方法可以带一个参数，该参数就会被当作上一个\`yield\`表达式的返回值

\`\`\`javascript
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
\`\`\`

正因为\`Generator \`函数返回\`Iterator\`对象，因此我们还可以通过\`for...of\`进行遍历
\`\`\`javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
\`\`\`

原生对象没有遍历接口，通过\`Generator \`函数为它加上这个接口，就能使用\`for...of\`进行遍历了

\`\`\`javascript
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(\`\${key}: \${value}\`);
}
// first: Jane
// last: Doe
\`\`\`



## 三、异步解决方案

回顾之前展开异步解决的方案：

- 回调函数
- Promise 对象
- generator 函数
- async/await



这里通过文件读取案例，将几种解决异步的方案进行一个比较：

### 回调函数

所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，再调用这个函数

\`\`\`javascript
fs.readFile('/etc/fstab', function (err, data) {
  if (err) throw err;
  console.log(data);
  fs.readFile('/etc/shells', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});
\`\`\`

\`readFile\`函数的第三个参数，就是回调函数，等到操作系统返回了\`/etc/passwd\`这个文件以后，回调函数才会执行



### Promise

\`Promise\`就是为了解决回调地狱而产生的，将回调函数的嵌套，改成链式调用

\`\`\`js
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


readFile('/etc/fstab').then(data =>{
    console.log(data)
    return readFile('/etc/shells')
}).then(data => {
    console.log(data)
})
\`\`\`

这种链式操作形式，使异步任务的两段执行更清楚了，但是也存在了很明显的问题，代码变得冗杂了，语义化并不强



### generator

\`yield\`表达式可以暂停函数执行，\`next\`方法用于恢复函数执行，这使得\`Generator\`函数非常适合将异步任务同步化

\`\`\`javascript
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
\`\`\`





### async/await

将上面\`Generator\`函数改成\`async/await\`形式，更为简洁，语义化更强了

\`\`\`js
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
\`\`\`



### 区别：

通过上述代码进行分析，将\`promise\`、\`Generator\`、\`async/await\`进行比较：

- \`promise\`和\`async/await\`是专门用于处理异步操作的
- \`Generator\`并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署\`Interator\`接口...）
- \`promise\`编写代码相比\`Generator\`、\`async\`更为复杂化，且可读性也稍差

- \`Generator\`、\`async\`需要与\`promise\`对象搭配处理异步情况
- \`async\`实质是\`Generator\`的语法糖，相当于会自动执行\`Generator\`函数
- \`async\`使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案



## 四、使用场景

\`Generator\`是异步解决的一种方案，最大特点则是将异步操作同步化表达出来

\`\`\`js
function* loadUI() {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next()
\`\`\`

包括\`redux-saga \`中间件也充分利用了\`Generator\`特性

\`\`\`js
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
\`\`\`

还能利用\`Generator\`函数，在对象上实现\`Iterator\`接口

\`\`\`js
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}

// foo 3
// bar 7
\`\`\`
      `
    },{
      title: "怎么理解ES6中Module的？使用场景？",
      desc: "怎么理解ES6中Module的？使用场景？",
      content:`
## 一、介绍

模块，（Module），是能够单独命名并独立地完成一定功能的程序语句的**集合（即程序代码和数据结构的集合体）**。

两个基本的特征：外部特征和内部特征

- 外部特征是指模块跟外部环境联系的接口（即其他模块或程序调用该模块的方式，包括有输入输出参数、引用的全局变量）和模块的功能

- 内部特征是指模块的内部环境具有的特点（即该模块的局部数据和程序代码）

### 为什么需要模块化

- 代码抽象
- 代码封装
- 代码复用
- 依赖管理

如果没有模块化，我们代码会怎样？

- 变量和方法不容易维护，容易污染全局作用域
- 加载资源的方式通过script标签从上到下。
- 依赖的环境主观逻辑偏重，代码较多就会比较复杂。
- 大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃

因此，需要一种将\` JavaScript \`程序模块化的机制，如

- CommonJs (典型代表：node.js早期)
- AMD (典型代表：require.js)
- CMD (典型代表：sea.js)


### AMD

\`Asynchronous ModuleDefinition\`（AMD），异步模块定义，采用异步方式加载模块。所有依赖模块的语句，都定义在一个回调函数中，等到模块加载完成之后，这个回调函数才会运行

代表库为\`require.js\`

\`\`\`js
/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
  }
});
// 执行基本操作
require(["jquery","underscore"],function($,_){
  // some code here
});
\`\`\`



### CommonJs

\`CommonJS\` 是一套 \`Javascript\` 模块规范，用于服务端

\`\`\`js
// a.js
module.exports={ foo , bar}

// b.js
const { foo,bar } = require('./a.js')
\`\`\`

其有如下特点：

- 所有代码都运行在模块作用域，不会污染全局作用域
- 模块是同步加载的，即只有加载完成，才能执行后面的操作
- 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
- \`require\`返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值


既然存在了\`AMD\`以及\`CommonJs\`机制，\`ES6\`的\`Module\`又有什么不一样？

ES6 在语言标准的层面上，实现了\`Module\`，即模块功能，完全可以取代 \`CommonJS \`和 \`AMD \`规范，成为浏览器和服务器通用的模块解决方案

\`CommonJS\` 和\` AMD\` 模块，都只能在运行时确定这些东西。比如，\`CommonJS \`模块就是对象，输入时必须查找对象属性

\`\`\`javascript
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
\`\`\`

\`ES6\`设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量

\`\`\`js
// ES6模块
import { stat, exists, readFile } from 'fs';
\`\`\`

上述代码，只加载3个方法，其他方法不加载，即 \`ES6\` 可以在编译时就完成模块加载

由于编译加载，使得静态分析成为可能。包括现在流行的\`typeScript\`也是依靠静态分析实现功能



## 二、使用

\`ES6\`模块内部自动采用了严格模式，这里就不展开严格模式的限制，毕竟这是\`ES5\`之前就已经规定好

模块功能主要由两个命令构成：

- \`export\`：用于规定模块的对外接口
- \`import\`：用于输入其他模块提供的功能



### export

一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用\`export\`关键字输出该变量

\`\`\`javascript
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

或 
// 建议使用下面写法，这样能瞬间确定输出了哪些变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
\`\`\`

输出函数或类

\`\`\`js
export function multiply(x, y) {
  return x * y;
};
\`\`\`

通过\`as\`可以进行输出变量的重命名

\`\`\`js
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
\`\`\`



### import

使用\`export\`命令定义了模块的对外接口以后，其他 JS 文件就可以通过\`import\`命令加载这个模块

\`\`\`javascript
// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
\`\`\`

同样如果想要输入变量起别名，通过\`as\`关键字

\`\`\`javascript
import { lastName as surname } from './profile.js';
\`\`\`

当加载整个模块的时候，需要用到星号\`*\`

\`\`\`js
// circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

// main.js
import * as circle from './circle';
console.log(circle)   // {area:area,circumference:circumference}
\`\`\`

输入的变量都是只读的，不允许修改，但是如果是对象，允许修改属性

\`\`\`js
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
a = {}; // Syntax Error : 'a' is read-only;
\`\`\`

不过建议即使能修改，但我们不建议。因为修改之后，我们很难差错

\`import\`后面我们常接着\`from\`关键字，\`from\`指定模块文件的位置，可以是相对路径，也可以是绝对路径

\`\`\`js
import { a } from './a';
\`\`\`

如果只有一个模块名，需要有配置文件，告诉引擎模块的位置

\`\`\`javascript
import { myMethod } from 'util';
\`\`\`

在编译阶段，\`import\`会提升到整个模块的头部，首先执行

\`\`\`javascript
foo();

import { foo } from 'my_module';
\`\`\`

多次重复执行同样的导入，只会执行一次

\`\`\`js
import 'lodash';
import 'lodash';
\`\`\`

上面的情况，大家都能看到用户在导入模块的时候，需要知道加载的变量名和函数，否则无法加载

如果不需要知道变量名或函数就完成加载，就要用到\`export default\`命令，为模块指定默认输出

\`\`\`js
// export-default.js
export default function () {
    console.log('foo');
}
\`\`\`

加载该模块的时候，\`import\`命令可以为该函数指定任意名字

\`\`\`js
// import-default.js
import customName from './export-default';
customName(); // 'foo'
\`\`\`



### 动态加载

允许您仅在需要时动态加载模块，而不必预先加载所有模块，这存在明显的性能优势

这个新功能允许您将\`import()\`作为函数调用，将其作为参数传递给模块的路径。 它返回一个 \`promise\`，它用一个模块对象来实现，让你可以访问该对象的导出

\`\`\`js
import('/modules/myModule.mjs')
  .then((module) => {
    // Do something with the module.
  });
\`\`\`



### 复合写法

如果在一个模块之中，先输入后输出同一个模块，\`import\`语句可以与\`export\`语句写在一起

\`\`\`javascript
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
\`\`\`

同理能够搭配\`as\`、\`*\`搭配使用



## 三、使用场景

如今，\`ES6\`模块化已经深入我们日常项目开发中，像\`vue\`、\`react\`项目搭建项目，组件化开发处处可见，其也是依赖模块化实现

\`vue\`组件

\`\`\`js
<template>
  <div class="App">
      组件化开发 ---- 模块化
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
\`\`\`

\`react\`组件

\`\`\`js
function App() {
  return (
    <div className="App">
		组件化开发 ---- 模块化
    </div>
  );
}

export default App;
\`\`\`

包括完成一些复杂应用的时候，我们也可以拆分成各个模块
      `
    },{
      title: "怎么理解ES6中 Promise的？使用场景？",
      desc: "面试官：你是怎么理解ES6中 Promise的？使用场景？",
      content:`
## 一、介绍

\`Promise \`，译为承诺，是异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大

在以往我们如果处理多层异步操作，我们往往会像下面那样编写我们的代码

\`\`\`js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('得到最终结果: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
\`\`\`

阅读上面代码，是不是很难受，上述形成了经典的回调地狱

现在通过\`Promise\`的改写上面的代码

\`\`\`js
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('得到最终结果: ' + finalResult);
})
.catch(failureCallback);
\`\`\`

瞬间感受到\`promise\`解决异步操作的优点：

- 链式操作减低了编码难度
- 代码可读性明显增强



下面我们正式来认识\`promise\`：

### 状态

\`promise\`对象仅有三种状态

- \`pending\`（进行中）
- \`fulfilled\`（已成功）
- \`rejected\`（已失败）

### 特点

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态改变（从\`pending\`变为\`fulfilled\`和从\`pending\`变为\`rejected\`），就不会再变，任何时候都可以得到这个结果



### 流程

认真阅读下图，我们能够轻松了解\`promise\`整个流程

 ![](https://static.vue-js.com/1b02ae90-58a9-11eb-85f6-6fac77c0c9b3.png)



## 二、用法

\`Promise\`对象是一个构造函数，用来生成\`Promise\`实例

\`\`\`javascript
const promise = new Promise(function(resolve, reject) {});
\`\`\`

\`Promise\`构造函数接受一个函数作为参数，该函数的两个参数分别是\`resolve\`和\`reject\`

- \`resolve\`函数的作用是，将\`Promise\`对象的状态从“未完成”变为“成功”
- \`reject\`函数的作用是，将\`Promise\`对象的状态从“未完成”变为“失败”



### 实例方法

\`Promise\`构建出来的实例存在以下方法：

- then()
- catch()
- finally()



#### then()

\`then\`是实例状态发生改变时的回调函数，第一个参数是\`resolved\`状态的回调函数，第二个参数是\`rejected\`状态的回调函数

\`then\`方法返回的是一个新的\`Promise\`实例，也就是\`promise\`能链式书写的原因

\`\`\`javascript
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
\`\`\`



#### catch

\`catch()\`方法是\`.then(null, rejection)\`或\`.then(undefined, rejection)\`的别名，用于指定发生错误时的回调函数

\`\`\`javascript
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
\`\`\`

\`Promise \`对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

\`\`\`javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
\`\`\`

一般来说，使用\`catch\`方法代替\`then()\`第二个参数

\`Promise \`对象抛出的错误不会传递到外层代码，即不会有任何反应

\`\`\`js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
\`\`\`

浏览器运行到这一行，会打印出错误提示\`ReferenceError: x is not defined\`，但是不会退出进程

\`catch()\`方法之中，还能再抛出错误，通过后面\`catch\`方法捕获到



#### finally()

\`finally()\`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

\`\`\`javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
\`\`\`



### 构造函数方法

\`Promise\`构造函数存在以下方法：

- all()
- race()
- allSettled()
- resolve()
- reject()
- try()



### all()

\`Promise.all()\`方法用于将多个 \`Promise \`实例，包装成一个新的 \`Promise \`实例

\`\`\`javascript
const p = Promise.all([p1, p2, p3]);
\`\`\`

接受一个数组（迭代对象）作为参数，数组成员都应为\`Promise\`实例

实例\`p\`的状态由\`p1\`、\`p2\`、\`p3\`决定，分为两种：

- 只有\`p1\`、\`p2\`、\`p3\`的状态都变成\`fulfilled\`，\`p\`的状态才会变成\`fulfilled\`，此时\`p1\`、\`p2\`、\`p3\`的返回值组成一个数组，传递给\`p\`的回调函数
- 只要\`p1\`、\`p2\`、\`p3\`之中有一个被\`rejected\`，\`p\`的状态就变成\`rejected\`，此时第一个被\`reject\`的实例的返回值，会传递给\`p\`的回调函数

注意，如果作为参数的 \`Promise\` 实例，自己定义了\`catch\`方法，那么它一旦被\`rejected\`，并不会触发\`Promise.all()\`的\`catch\`方法

\`\`\`javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
\`\`\`

如果\`p2\`没有自己的\`catch\`方法，就会调用\`Promise.all()\`的\`catch\`方法

\`\`\`javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// Error: 报错了
\`\`\`



### race()

\`Promise.race()\`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例

\`\`\`javascript
const p = Promise.race([p1, p2, p3]);
\`\`\`

只要\`p1\`、\`p2\`、\`p3\`之中有一个实例率先改变状态，\`p\`的状态就跟着改变

率先改变的 Promise 实例的返回值则传递给\`p\`的回调函数

\`\`\`javascript
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
\`\`\`



### allSettled()

\`Promise.allSettled()\`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例

只有等到所有这些参数实例都返回结果，不管是\`fulfilled\`还是\`rejected\`，包装实例才会结束

\`\`\`javascript
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
\`\`\`



#### resolve()

将现有对象转为 \`Promise \`对象

\`\`\`javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
\`\`\`

参数可以分成四种情况，分别如下：

- 参数是一个 Promise 实例，\`promise.resolve\`将不做任何修改、原封不动地返回这个实例
- 参数是一个\`thenable\`对象，\`promise.resolve\`会将这个对象转为 \`Promise \`对象，然后就立即执行\`thenable\`对象的\`then()\`方法
- 参数不是具有\`then()\`方法的对象，或根本就不是对象，\`Promise.resolve()\`会返回一个新的 Promise 对象，状态为\`resolved\`
- 没有参数时，直接返回一个\`resolved\`状态的 Promise 对象



#### reject()

\`Promise.reject(reason)\`方法也会返回一个新的 Promise 实例，该实例的状态为\`rejected\`

\`\`\`javascript
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
\`\`\`

\`Promise.reject()\`方法的参数，会原封不动地变成后续方法的参数

\`\`\`javascript
Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true
\`\`\`



## 三、使用场景

将图片的加载写成一个\`Promise\`，一旦加载完成，\`Promise\`的状态就发生变化

\`\`\`javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
\`\`\`

通过链式操作，将多个渲染数据分别给个\`then\`，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题

\`\`\`js
// 各司其职
getInfo().then(res=>{
    let { bannerList } = res
    //渲染轮播图
    console.log(bannerList)
    return res
}).then(res=>{
    
    let { storeList } = res
    //渲染店铺列表
    console.log(storeList)
    return res
}).then(res=>{
    let { categoryList } = res
    console.log(categoryList)
    //渲染分类列表
    return res
})
\`\`\`

通过\`all()\`实现多个请求合并在一起，汇总所有请求结果，只需设置一个\`loading\`即可

\`\`\`js
function initLoad(){
    // loading.show() //加载loading
    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{
        console.log(res)
        loading.hide() //关闭loading
    }).catch(err=>{
        console.log(err)
        loading.hide()//关闭loading
    })
}
//数据初始化    
initLoad()
\`\`\`

通过\`race\`可以设置图片请求超时

\`\`\`js
//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
           resolve(img);
        }
        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});
\`\`\`
      `
    },{
      title: "怎么理解ES6中Proxy的？使用场景",
      desc: "面试官：你是怎么理解ES6中Proxy的？使用场景",
      content:`
## 一、介绍

**定义：** 用于定义基本操作的自定义行为

**本质：** 修改的是程序默认形为，就形同于在编程语言层面上做修改，属于元编程\`(meta programming)\`

元编程（Metaprogramming，又译超编程，是指某类计算机程序的编写，这类计算机程序编写或者操纵其它程序（或者自身）作为它们的数据，或者在运行时完成部分本应在编译时完成的工作

一段代码来理解
\`\`\`bash
#!/bin/bash
# metaprogram
echo '#!/bin/bash' >program
for ((I=1; I<=1024; I++)) do
    echo "echo $I" >>program
done
chmod +x program
\`\`\`
这段程序每执行一次能帮我们生成一个名为\`program\`的文件，文件内容为1024行\`echo\`，如果我们手动来写1024行代码，效率显然低效

- 元编程优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给与程序更大的灵活度去处理新的情形而无需重新编译

\`Proxy\` 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）


## 二、用法

\`Proxy\`为 构造函数，用来生成 \`Proxy \`实例

\`\`\`javascript
var proxy = new Proxy(target, handler)
\`\`\`

### 参数

\`target\`表示所要拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至另一个代理））

\`handler\`通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 \`p\` 的行为



### handler解析

关于\`handler\`拦截属性，有如下：

- get(target,propKey,receiver)：拦截对象属性的读取
- set(target,propKey,value,receiver)：拦截对象属性的设置
- has(target,propKey)：拦截\`propKey in proxy\`的操作，返回一个布尔值
- deleteProperty(target,propKey)：拦截\`delete proxy[propKey]\`的操作，返回一个布尔值
- ownKeys(target)：拦截\`Object.keys(proxy)\`、\`for...in\`等循环，返回一个数组
- getOwnPropertyDescriptor(target, propKey)：拦截\`Object.getOwnPropertyDescriptor(proxy, propKey)\`，返回属性的描述对象
- defineProperty(target, propKey, propDesc)：拦截\`Object.defineProperty(proxy, propKey, propDesc）\`，返回一个布尔值
- preventExtensions(target)：拦截\`Object.preventExtensions(proxy)\`，返回一个布尔值
- getPrototypeOf(target)：拦截\`Object.getPrototypeOf(proxy)\`，返回一个对象
- isExtensible(target)：拦截\`Object.isExtensible(proxy)\`，返回一个布尔值
- setPrototypeOf(target, proto)：拦截\`Object.setPrototypeOf(proxy, proto)\`，返回一个布尔值
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作





### Reflect

若需要在\`Proxy\`内部调用对象的默认行为，建议使用\`Reflect\`，其是\`ES6\`中操作对象而提供的新 \`API\`

基本特点：

- 只要\`Proxy\`对象具有的代理方法，\`Reflect\`对象全部具有，以静态方法的形式存在
- 修改某些\`Object\`方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回\`false\`）
- 让\`Object\`操作都变成函数行为      



下面我们介绍\`proxy\`几种用法：

### get()

\`get\`接受三个参数，依次为目标对象、属性名和 \`proxy\` 实例本身，最后一个参数可选

\`\`\`javascript
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    return Reflect.get(target,propKey)
  }
});

proxy.name // "张三"
\`\`\`

\`get\`能够对数组增删改查进行拦截，下面是试下你数组读取负数的索引

\`\`\`js
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
arr[-1] // c
\`\`\`

注意：如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则会报错

\`\`\`js
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
\`\`\`



### set()

\`set\`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 \`Proxy\` 实例本身

假定\`Person\`对象有一个\`age\`属性，该属性应该是一个不大于 200 的整数，那么可以使用\`Proxy\`保证\`age\`的属性值符合要求

\`\`\`js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
\`\`\`

如果目标对象自身的某个属性，不可写且不可配置，那么\`set\`方法将不起作用

\`\`\`javascript
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false,
});

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
proxy.foo // "bar"
\`\`\`

注意，严格模式下，\`set\`代理如果没有返回\`true\`，就会报错

\`\`\`javascript
'use strict';
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
    // 无论有没有下面这一行，都会报错
    return false;
  }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
// TypeError: 'set' on proxy: trap returned falsish for property 'foo'
\`\`\`



### deleteProperty()

\`deleteProperty\`方法用于拦截\`delete\`操作，如果这个方法抛出错误或者返回\`false\`，当前属性就无法被\`delete\`命令删除

\`\`\`javascript
var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    Reflect.deleteProperty(target,key)
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(\`无法删除私有属性\`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: 无法删除私有属性
\`\`\`

注意，目标对象自身的不可配置（configurable）的属性，不能被\`deleteProperty\`方法删除，否则报错



### 取消代理

\`\`\`
Proxy.revocable(target, handler);
\`\`\`

## 三、使用场景

\`Proxy\`其功能非常类似于设计模式中的代理模式，常用功能如下：

- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理



使用 \`Proxy\` 保障数据类型的准确性

\`\`\`js
let numericDataStore = { count: 0, amount: 1234, total: 14 };
numericDataStore = new Proxy(numericDataStore, {
    set(target, key, value, proxy) {
        if (typeof value !== 'number') {
            throw Error("属性只能是number类型");
        }
        return Reflect.set(target, key, value, proxy);
    }
});

numericDataStore.count = "foo"
// Error: 属性只能是number类型

numericDataStore.count = 333
// 赋值成功
\`\`\`

声明了一个私有的 \`apiKey\`，便于 \`api\` 这个对象内部的方法调用，但不希望从外部也能够访问 \`api._apiKey\`

\`\`\`js
let api = {
    _apiKey: '123abc456def',
    getUsers: function(){ },
    getUser: function(userId){ },
    setUser: function(userId, config){ }
};
const RESTRICTED = ['_apiKey'];
api = new Proxy(api, {
    get(target, key, proxy) {
        if(RESTRICTED.indexOf(key) > -1) {
            throw Error(\`\${key} 不可访问.\`);
        } return Reflect.get(target, key, proxy);
    },
    set(target, key, value, proxy) {
        if(RESTRICTED.indexOf(key) > -1) {
            throw Error(\`\${key} 不可修改\`);
        } return Reflect.get(target, key, value, proxy);
    }
});

console.log(api._apiKey)
api._apiKey = '987654321'
// 上述都抛出错误
\`\`\`

还能通过使用\`Proxy\`实现观察者模式

观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行

\`observable\`函数返回一个原始对象的 \`Proxy\` 代理，拦截赋值操作，触发充当观察者的各个函数

\`\`\`javascript
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
\`\`\`

观察者函数都放进\`Set\`集合，当修改\`obj\`的值，在会\`set\`函数中拦截，自动执行\`Set\`所有的观察者
      `
    },{
      title: "怎么理解ES6新增Set、Map两种数据结构的？",
      desc: "面试官：你是怎么理解ES6新增Set、Map两种数据结构的？",
      content:`
如果要用一句来描述，我们可以说

\`Set\`是一种叫做集合的数据结构，\`Map\`是一种叫做字典的数据结构

什么是集合？什么又是字典？

- 集合  
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合

- 字典   
是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

区别？

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储

## 一、Set

\` Set\`是\`es6\`新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

\`Set\`本身是一个构造函数，用来生成 Set 数据结构

\`\`\`js
const s = new Set();
\`\`\`



### 增删改查

\`Set\`的实例关于增删改查的方法：

- add()
- delete()

- has()
- clear()

### add()

添加某个值，返回 \`Set\` 结构本身

当添加实例中已经存在的元素，\`set\`不会进行处理添加

\`\`\`js
s.add(1).add(2).add(2); // 2只被添加了一次
\`\`\`

### delete()

删除某个值，返回一个布尔值，表示删除是否成功

\`\`\`js
s.delete(1)
\`\`\`

### has()

返回一个布尔值，判断该值是否为\`Set\`的成员

\`\`\`js
s.has(2)
\`\`\`

### clear()

清除所有成员，没有返回值

\`\`\`js
s.clear()
\`\`\`



### 遍历

\`Set\`实例遍历的方法有如下：

关于遍历的方法，有如下：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

\`Set\`的遍历顺序就是插入顺序

\`keys\`方法、\`values\`方法、\`entries\`方法返回的都是遍历器对象

\`\`\`javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
\`\`\`

\`forEach()\`用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的\`forEach\`方法有第二个参数，用于绑定处理函数的\`this\`

\`\`\`javascript
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
\`\`\`

扩展运算符和\` Set\` 结构相结合实现数组或字符串去重

\`\`\`javascript
// 数组
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]

// 字符串
let str = "352255";
let unique = [...new Set(str)].join(""); // "352"
\`\`\`

实现并集、交集、和差集

\`\`\`javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
\`\`\`



## 二、Map

\`Map\`类型是键值对的有序列表，而键和值都可以是任意类型

\`Map\`本身是一个构造函数，用来生成 \`Map\` 数据结构

\`\`\`js
const m = new Map()
\`\`\`



### 增删改查

\`Map\` 结构的实例针对增删改查有以下属性和操作方法：

- size 属性
- set()
- get()
- has()
- delete()
- clear()

### size

\`size\`属性返回 Map 结构的成员总数。

\`\`\`javascript
const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
\`\`\`



### set()

设置键名\`key\`对应的键值为\`value\`，然后返回整个 Map 结构

如果\`key\`已经有值，则键值会被更新，否则就新生成该键

同时返回的是当前\`Map\`对象，可采用链式写法

\`\`\`javascript
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作
\`\`\`



### get()

\`get\`方法读取\`key\`对应的键值，如果找不到\`key\`，返回\`undefined\`

\`\`\`javascript
const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!
\`\`\`



### has()

\`has\`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

\`\`\`javascript
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
\`\`\`



### delete()

\`delete\`方法删除某个键，返回\`true\`。如果删除失败，返回\`false\`

\`\`\`javascript
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
\`\`\`

### clear()

\`clear\`方法清除所有成员，没有返回值

\`\`\`javascript
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
\`\`\`



### 遍历

\`Map \`结构原生提供三个遍历器生成函数和一个遍历方法：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

遍历顺序就是插入顺序

\`\`\`javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
\`\`\`

## 三、WeakSet 和 WeakMap

### WeakSet

创建\`WeakSet\`实例

\`\`\`js
const ws = new WeakSet();
\`\`\`

\`WeakSet \`可以接受一个具有 \`Iterable \`接口的对象作为参数

\`\`\`js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}
\`\`\`

在\`API\`中\`WeakSet\`与\`Set\`有两个区别：

- 没有遍历操作的\`API\`
- 没有\`size\`属性

\`WeakSet\`只能成员只能是引用类型，而不能是其他类型的值

\`\`\`js
let ws=new WeakSet();

// 成员不是引用类型
let weakSet=new WeakSet([2,3]);
console.log(weakSet) // 报错

// 成员为引用类型
let obj1={name:1}
let obj2={name:1}
let ws=new WeakSet([obj1,obj2]); 
console.log(ws) //WeakSet {{…}, {…}}
\`\`\`

\`WeakSet \`里面的引用只要在外部消失，它在 \`WeakSet \`里面的引用就会自动消失



### WeakMap

\`WeakMap\`结构与\`Map\`结构类似，也是用于生成键值对的集合

在\`API\`中\`WeakMap\`与\`Map\`有两个区别：

- 没有遍历操作的\`API\`
- 没有\`clear\`清空方法

\`\`\`javascript
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
\`\`\`

\`WeakMap\`只接受对象作为键名（\`null\`除外），不接受其他类型的值作为键名

\`\`\`javascript
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
\`\`\`

\`WeakMap\`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

举个场景例子：

在网页的 DOM 元素上添加数据，就可以使用\`WeakMap\`结构，当该 DOM 元素被清除，其所对应的\`WeakMap\`记录就会自动被移除

\`\`\`javascript
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
\`\`\`

注意：\`WeakMap\` 弱引用的只是键名，而不是键值。键值依然是正常引用

下面代码中，键值\`obj\`会在\`WeakMap\`产生新的引用，当你修改\`obj\`不会影响到内部

\`\`\`js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
\`\`\`

      `
    },
    {
      title: "说说你对Reflect的理解？",
      desc: "面试官：ES6中新增的Reflect，你了解多少？",
      content:`
# Reflect

## 概述

\`Reflect\`对象与\`Proxy\`对象一样，也是 ES6 为了操作对象而提供的新 API。\`Reflect\`对象的设计目的有这样几个。

（1） **将\`Object\`对象的一些明显属于语言内部的方法（比如\`Object.defineProperty\`），放到\`Reflect\`对象上。**现阶段，某些方法同时在\`Object\`和\`Reflect\`对象上部署，未来的新方法将只部署在\`Reflect\`对象上。也就是说，从\`Reflect\`对象上可以拿到语言内部的方法。
<!-- more -->
（2） **修改某些\`Object\`方法的返回结果，让其变得更合理**。比如，\`Object.defineProperty(obj, name, desc)\`在无法定义属性时，会抛出一个错误，而\`Reflect.defineProperty(obj, name, desc)\`则会返回\`false\`。

\`\`\`javascript
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
\`\`\`

（3） **让\`Object\`操作都变成函数行为**。某些\`Object\`操作是命令式，比如\`name in obj\`和\`delete obj[name]\`，而\`Reflect.has(obj, name)\`和\`Reflect.deleteProperty(obj, name)\`让它们变成了函数行为。

\`\`\`javascript
// 老写法
'assign' in Object // true

// 新写法
Reflect.has(Object, 'assign') // true
\`\`\`

（4）\`Reflect\`对象的方法与\`Proxy\`对象的方法一一对应，只要是\`Proxy\`对象的方法，就能在\`Reflect\`对象上找到对应的方法。这就让\`Proxy\`对象可以方便地调用对应的\`Reflect\`方法，完成默认行为，作为修改行为的基础。也就是说，**不管\`Proxy\`怎么修改默认行为，你总可以在\`Reflect\`上获取默认行为**。

\`\`\`javascript
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
\`\`\`

上面代码中，\`Proxy\`方法拦截\`target\`对象的属性赋值行为。它采用\`Reflect.set\`方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能。

下面是另一个例子。

\`\`\`javascript
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});
\`\`\`

上面代码中，每一个\`Proxy\`对象的拦截操作（\`get\`、\`delete\`、\`has\`），内部都调用对应的\`Reflect\`方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。

有了\`Reflect\`对象以后，很多操作会更易读。

\`\`\`javascript
// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1

// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1
\`\`\`

## 静态方法

\`Reflect\`对象一共有 13 个静态方法。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

上面这些方法的作用，大部分与\`Object\`对象的同名方法的作用都是相同的，而且它与\`Proxy\`对象的方法是一一对应的。下面是对它们的解释。

### Reflect.get(target, name, receiver)

\`Reflect.get\`方法查找并返回\`target\`对象的\`name\`属性，如果没有该属性，则返回\`undefined\`。

\`\`\`javascript
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}

Reflect.get(myObject, 'foo') // 1
Reflect.get(myObject, 'bar') // 2
Reflect.get(myObject, 'baz') // 3
\`\`\`

如果\`name\`属性部署了读取函数（getter），则读取函数的\`this\`绑定\`receiver\`。

\`\`\`javascript
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

var myReceiverObject = {
  foo: 4,
  bar: 4,
};

Reflect.get(myObject, 'baz', myReceiverObject) // 8
\`\`\`

如果第一个参数不是对象，\`Reflect.get\`方法会报错。

\`\`\`javascript
Reflect.get(1, 'foo') // 报错
Reflect.get(false, 'foo') // 报错
\`\`\`

### Reflect.set(target, name, value, receiver)

\`Reflect.set\`方法设置\`target\`对象的\`name\`属性等于\`value\`。

\`\`\`javascript
var myObject = {
  foo: 1,
  set bar(value) {
    return this.foo = value;
  },
}

myObject.foo // 1

Reflect.set(myObject, 'foo', 2);
myObject.foo // 2

Reflect.set(myObject, 'bar', 3)
myObject.foo // 3
\`\`\`

如果\`name\`属性设置了赋值函数，则赋值函数的\`this\`绑定\`receiver\`。

\`\`\`javascript
var myObject = {
  foo: 4,
  set bar(value) {
    return this.foo = value;
  },
};

var myReceiverObject = {
  foo: 0,
};

Reflect.set(myObject, 'bar', 1, myReceiverObject);
myObject.foo // 4
myReceiverObject.foo // 1
\`\`\`

注意，如果 \`Proxy\`对象和 \`Reflect\`对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了\`receiver\`，那么\`Reflect.set\`会触发\`Proxy.defineProperty\`拦截。

\`\`\`javascript
let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty
\`\`\`

上面代码中，\`Proxy.set\`拦截里面使用了\`Reflect.set\`，而且传入了\`receiver\`，导致触发\`Proxy.defineProperty\`拦截。这是因为\`Proxy.set\`的\`receiver\`参数总是指向当前的 \`Proxy\`实例（即上例的\`obj\`），而\`Reflect.set\`一旦传入\`receiver\`，就会将属性赋值到\`receiver\`上面（即\`obj\`），导致触发\`defineProperty\`拦截。如果\`Reflect.set\`没有传入\`receiver\`，那么就不会触发\`defineProperty\`拦截。

\`\`\`javascript
let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set
\`\`\`

如果第一个参数不是对象，\`Reflect.set\`会报错。

\`\`\`javascript
Reflect.set(1, 'foo', {}) // 报错
Reflect.set(false, 'foo', {}) // 报错
\`\`\`

### Reflect.has(obj, name)

\`Reflect.has\`方法对应\`name in obj\`里面的\`in\`运算符。

\`\`\`javascript
var myObject = {
  foo: 1,
};

// 旧写法
'foo' in myObject // true

// 新写法
Reflect.has(myObject, 'foo') // true
\`\`\`

如果\`Reflect.has()\`方法的第一个参数不是对象，会报错。

### Reflect.deleteProperty(obj, name)

\`Reflect.deleteProperty\`方法等同于\`delete obj[name]\`，用于删除对象的属性。

\`\`\`javascript
const myObj = { foo: 'bar' };

// 旧写法
delete myObj.foo;

// 新写法
Reflect.deleteProperty(myObj, 'foo');
\`\`\`

该方法返回一个布尔值。如果删除成功，或者被删除的属性不存在，返回\`true\`；删除失败，被删除的属性依然存在，返回\`false\`。

如果\`Reflect.deleteProperty()\`方法的第一个参数不是对象，会报错。

### Reflect.construct(target, args)

\`Reflect.construct\`方法等同于\`new target(...args)\`，这提供了一种不使用\`new\`，来调用构造函数的方法。

\`\`\`javascript
function Greeting(name) {
  this.name = name;
}

// new 的写法
const instance = new Greeting('张三');

// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);
\`\`\`

如果\`Reflect.construct()\`方法的第一个参数不是函数，会报错。

### Reflect.getPrototypeOf(obj)

\`Reflect.getPrototypeOf\`方法用于读取对象的\`__proto__\`属性，对应\`Object.getPrototypeOf(obj)\`。

\`\`\`javascript
const myObj = new FancyThing();

// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype;

// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;
\`\`\`

\`Reflect.getPrototypeOf\`和\`Object.getPrototypeOf\`的一个区别是，如果参数不是对象，\`Object.getPrototypeOf\`会将这个参数转为对象，然后再运行，而\`Reflect.getPrototypeOf\`会报错。

\`\`\`javascript
Object.getPrototypeOf(1) // Number {[[PrimitiveValue]]: 0}
Reflect.getPrototypeOf(1) // 报错
\`\`\`

### Reflect.setPrototypeOf(obj, newProto)

\`Reflect.setPrototypeOf\`方法用于设置目标对象的原型（prototype），对应\`Object.setPrototypeOf(obj, newProto)\`方法。它返回一个布尔值，表示是否设置成功。

\`\`\`javascript
const myObj = {};

// 旧写法
Object.setPrototypeOf(myObj, Array.prototype);

// 新写法
Reflect.setPrototypeOf(myObj, Array.prototype);

myObj.length // 0
\`\`\`

如果无法设置目标对象的原型（比如，目标对象禁止扩展），\`Reflect.setPrototypeOf\`方法返回\`false\`。

\`\`\`javascript
Reflect.setPrototypeOf({}, null)
// true
Reflect.setPrototypeOf(Object.freeze({}), null)
// false
\`\`\`

如果第一个参数不是对象，\`Object.setPrototypeOf\`会返回第一个参数本身，而\`Reflect.setPrototypeOf\`会报错。

\`\`\`javascript
Object.setPrototypeOf(1, {})
// 1

Reflect.setPrototypeOf(1, {})
// TypeError: Reflect.setPrototypeOf called on non-object
\`\`\`

如果第一个参数是\`undefined\`或\`null\`，\`Object.setPrototypeOf\`和\`Reflect.setPrototypeOf\`都会报错。

\`\`\`javascript
Object.setPrototypeOf(null, {})
// TypeError: Object.setPrototypeOf called on null or undefined

Reflect.setPrototypeOf(null, {})
// TypeError: Reflect.setPrototypeOf called on non-object
\`\`\`

### Reflect.apply(func, thisArg, args)

\`Reflect.apply\`方法等同于\`Function.prototype.apply.call(func, thisArg, args)\`，用于绑定\`this\`对象后执行给定函数。

一般来说，如果要绑定一个函数的\`this\`对象，可以这样写\`fn.apply(obj, args)\`，但是如果函数定义了自己的\`apply\`方法，就只能写成\`Function.prototype.apply.call(fn, obj, args)\`，采用\`Reflect\`对象可以简化这种操作。

\`\`\`javascript
const ages = [11, 33, 12, 54, 18, 96];

// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);

// 新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);
\`\`\`

### Reflect.defineProperty(target, propertyKey, attributes)

\`Reflect.defineProperty\`方法基本等同于\`Object.defineProperty\`，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用\`Reflect.defineProperty\`代替它。

\`\`\`javascript
function MyDate() {
  /*…*/
}

// 旧写法
Object.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});

// 新写法
Reflect.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});
\`\`\`

如果\`Reflect.defineProperty\`的第一个参数不是对象，就会抛出错误，比如\`Reflect.defineProperty(1, 'foo')\`。

这个方法可以与\`Proxy.defineProperty\`配合使用。

\`\`\`javascript
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

p.foo = 'bar';
// {value: "bar", writable: true, enumerable: true, configurable: true}

p.foo // "bar"
\`\`\`

上面代码中，\`Proxy.defineProperty\`对属性赋值设置了拦截，然后使用\`Reflect.defineProperty\`完成了赋值。

### Reflect.getOwnPropertyDescriptor(target, propertyKey)

\`Reflect.getOwnPropertyDescriptor\`基本等同于\`Object.getOwnPropertyDescriptor\`，用于得到指定属性的描述对象，将来会替代掉后者。

\`\`\`javascript
var myObject = {};
Object.defineProperty(myObject, 'hidden', {
  value: true,
  enumerable: false,
});

// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');

// 新写法
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
\`\`\`

\`Reflect.getOwnPropertyDescriptor\`和\`Object.getOwnPropertyDescriptor\`的一个区别是，如果第一个参数不是对象，\`Object.getOwnPropertyDescriptor(1, 'foo')\`不报错，返回\`undefined\`，而\`Reflect.getOwnPropertyDescriptor(1, 'foo')\`会抛出错误，表示参数非法。

### Reflect.isExtensible (target)

\`Reflect.isExtensible\`方法对应\`Object.isExtensible\`，返回一个布尔值，表示当前对象是否可扩展。

\`\`\`javascript
const myObject = {};

// 旧写法
Object.isExtensible(myObject) // true

// 新写法
Reflect.isExtensible(myObject) // true
\`\`\`

如果参数不是对象，\`Object.isExtensible\`会返回\`false\`，因为非对象本来就是不可扩展的，而\`Reflect.isExtensible\`会报错。

\`\`\`javascript
Object.isExtensible(1) // false
Reflect.isExtensible(1) // 报错
\`\`\`

### Reflect.preventExtensions(target)

\`Reflect.preventExtensions\`对应\`Object.preventExtensions\`方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

\`\`\`javascript
var myObject = {};

// 旧写法
Object.preventExtensions(myObject) // Object {}

// 新写法
Reflect.preventExtensions(myObject) // true
\`\`\`

如果参数不是对象，\`Object.preventExtensions\`在 ES5 环境报错，在 ES6 环境返回传入的参数，而\`Reflect.preventExtensions\`会报错。

\`\`\`javascript
// ES5 环境
Object.preventExtensions(1) // 报错

// ES6 环境
Object.preventExtensions(1) // 1

// 新写法
Reflect.preventExtensions(1) // 报错
\`\`\`

### Reflect.ownKeys (target)

\`Reflect.ownKeys\`方法用于返回对象的所有属性，基本等同于\`Object.getOwnPropertyNames\`与\`Object.getOwnPropertySymbols\`之和。

\`\`\`javascript
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
\`\`\`

如果\`Reflect.ownKeys()\`方法的第一个参数不是对象，会报错。

## 实例：使用 Proxy 实现观察者模式

**观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行**。

\`\`\`javascript
const person = observable({
  name: '张三',
  age: 20
}); // 观察目标

function print() {
  console.log(\`\${person.name}, \${person.age}\`)
} // 观察者

observe(print); // 启动观察
person.name = '李四';
// 输出
// 李四, 20
\`\`\`

上面代码中，数据对象\`person\`是观察目标，函数\`print\`是观察者。一旦数据对象发生变化，\`print\`就会自动执行。

下面，使用 Proxy 写一个观察者模式的最简单实现，即实现\`observable\`和\`observe\`这两个函数。思路是\`observable\`函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。

\`\`\`javascript
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
\`\`\`

上面代码中，先定义了一个\`Set\`集合，所有观察者函数都放进这个集合。然后，\`observable\`函数返回原始对象的代理，拦截赋值操作。拦截函数\`set\`之中，会自动执行所有观察者。
      `
    },
    {
      title: "ES6来简化代码,你都用过哪些?",
      desc: "ES6来简化代码,你都用过哪些",
      content:`
### 块级作用域

为什么需要块级作用域?

ES5 只有全局作用域和函数作用域，没有块级作用域，这导致很多场景不合理。

- 第一种场景，内层变量可能会覆盖外层变量。

\`\`\`js
var tmp = new Date();
function fn() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
fn(); // undefined

\`\`\`

以上代码的原意是， if 代码块的外部使用外层的 tmp 变量，内部使用内层的 tmp 变量。但是，函数 \`fn\` 执行后，输出结果为 \`undefined\` ，原因在于变量提升导致内层的 tmp 变量覆盖了外层的 tmp 变量。

- 第二种场景，用来计数的循环变量泄露为全局变量。

\`\`\`js
var s = "hello";
for (var i = O; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 5

\`\`\`

上面的代码中，变量 \`i\` 只用来控制循环，但是循环结束后，它并没有消失，而是泄露成了全局变量。

\`let\` 实际上为 \`JavaScript\` 新增了块级作用域。

\`\`\`js
function fl() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

\`\`\`

上面的函数有两个代码块，都声明了变量 \`n\`，运行后输出 \`5\` 。这表示外层代码块不受内层代码块的影响。如果使用 \`var\` 定义变量 ，最后输出的值就是 \`10\`

那么我们能利用\`块级作用域\`做什么呢？

我们先来做道面试题

\`\`\`js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 5 5 5 5 5

\`\`\`

改成 \`ES6\` 中的 let

\`\`\`js
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 0 1 2 3 4

\`\`\`

看到这，相信聪明的你已经理解块级作用域的好处了 O(∩_∩)O

那么 \`ES5\` 能不能实现 \`块级作用域\` 的效果呢? 可以的，我们可以利用闭包

\`\`\`js
for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
// 0 1 2 3 4

\`\`\`

### 解构

> 解构 ：是将一个数据结构分解为更小的部分的过程。ES6 中，从数组和对象中提取值，对变量进行赋值。

那么解构有什么用处呢？

1. 可以大大的简化变量声明操作。

\`\`\`js
// ES5
var foo = 1;
var bar = 2;
var baz = 3;

// ES6
let [foo, bar, baz] = [1, 2, 3];

\`\`\`

1. 变量交换：看起来如同镜像。赋值语句的左侧的解构模式，右侧是临时创建的数组字面量。x 被赋值为数组中的 y，y 被赋值为数组中的 x。

\`\`\`js
let x = 1;
let y = 2;
[x, y] = [y, x];
// x = 2, y = 1

\`\`\`

1. 对象解构

\`\`\`js
var obj = { x: 1, y: 2, c: 1 };
let { x, y } = obj;
// x = 1
// y = 2

\`\`\`

1. 字符串解构

\`\`\`js
const [a, b, c, d, e] = "hello";
// a => h
// b => e
// c => l
// d => l
// e => o

\`\`\`

1. 函数参数解构

\`\`\`js
const xueyue = {
  name: "雪月",
  age: 18,
};

function getAge({ name, age }) {
  return \`\${name}今年\${age}岁\`;
}

getAge(xueyue); // 雪月今年18岁

\`\`\`

### 箭头函数

\`ES6\` 允许使用箭头 \`=>\` 定义函数

\`\`\`js
var f = (v) => v;

// 等同于 ES5 的
var f = function (v) {
  return v;
};

\`\`\`

如果箭头函数不需要参数或需要多个参数，就使用圆括号代表参数部分。

\`\`\`js
var f = () => 5;
// 等同于 ES5 的
var f = function () {
  return 5;
};

var sum = (numl, num2) => numl + num2;
// 等同于 ES5 的
var sum = function (numl, num2) {
  return numl + num2;
};

\`\`\`

箭头函数可以与解构结合使用。

\`\`\`js
const full = ({ first, last }) => first + " " + last;
// 等同于 ES5 的
function full(person) {
  return person.first + " " + person.last;
}

\`\`\`

箭头函数使得表达更加简洁

\`\`\`js
const isEven = (n) => n % 2 === 0;
const square = (n) => n * n;

var result = values.sort((a, b) => a - b);
// 等同于 ES5 的
var result = values.sort(function (a, b) {
  return a - b;
});

\`\`\`

上面代码只用了两行，就定义了两个简单的工具函数。如果不用箭头函数，可能就要占用多行，而且还不如现在这样写醒目。

**箭头函数使用注意点**

1. 函数体内的 \`this\` 对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用 \`new\` 命令，否则会抛出一个错误。
3. 不可以使用 \`arguments\` 对象，该对象在函数体内不存在。如果要用，可以用 \`rest\` 参数代替。
4. 不可以使用 \`yield\` 命令，因此箭头函数不能用作 \`Generator\` 函数。

上面四点中，第一点尤其值得注意。\`this\` 对象的指向是可变的，但是在箭头函数中，它是固定的。

\`\`\`js
// ES6
function foo() {
  setTimeout(() => {
    console.log("id:", this.id);
  }, 100);
}

// 转换成ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log("id:", _this.id);
  }, 100);
}

\`\`\`

上面代码中，转换后的 \`ES5\` 版本清楚地说明了，箭头函数里面根本没有自己的 \`this\`，而是引用外层的 \`this\`。

### 模板字符串

> 模板字符串（ template string ）是增强版的字符串 ，用反引号 \` (\`\`) \` 标识 。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

\`\`\`js
const { log } = console;
const name = "雪月";
const age = 18;

// 普通字符串拼接
const result = name + "今年" + age + "岁";
// 使用模板字符串
const result2 = \`\${name}今年\${age}岁\`;
log(result); // 雪月今年18岁
log(result2); // 雪月今年18岁

// \${} 大括号可以放入任意的 JavaScript 表达式，可以进行运算
const result3 = \`\${name}今年\${age * 2}岁\`;
log(result3); // 雪月今年36岁

\`\`\`

### 剩余参数 / 展开语法

ES6 引入了 rest 参数（形式为\`...变量名\`），用于获取函数的多余参数，这样就不需要使用 \`arguments\` 对象了。\`rest\` 参数搭配的变量是一个数组，该变量将多余的参数放入其中。

\`\`\`js
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}
// 使用 rest
const sortNumbers = (...numbers) => numbers.sort();

\`\`\`

比较上面的两种写法可以发现， \`rest\` 参数的写法更自然也更简洁。

扩展运算符（ \`spread\` ）是三个点（...） 如同 \`rest\` 参数的逆运算 将一个数组转为用逗号分隔的参数序列

\`\`\`js
console.log(...[1, 2, 3]);
// 1 2 3

console.log(1, ...[2, 3, 4], 5);
// 1 2 3 4 5

\`\`\`

下面是扩展运算符取代 \`apply\` 方法的一个实际例子 应用 \`Math.max\` 方法简化求出数组中的最大元素。

\`\`\`js
// ESS 的写法
Math.max.apply(null, [14, 3, 77]);
// ES6 的写法
Math.max(...[14, 3, 77]);
// 等同于
Math.max(14, 3, 77);

\`\`\`

扩展运算符提供了数组合并的新写法。

\`\`\`js
//  ESS
[1, 2].concat(more);
// ES6
[1, 2, ...more];

\`\`\`

对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

\`\`\`js
let z = { a: 3, b: "bb" };
let n = { ...z };
n; // { a: 3, b: 'bb' }
n === z; // false

\`\`\`

**特别注意：** \`...\`扩展对象，只能做到当对象属性是 \`基本数据类型\` 才是 \`深拷贝\`，如果是 \`引用数据类型\`，那就是\`浅拷贝\`。

\`\`\`js
let z = { a: 3, b: "bb", c: { name: "ccc" } };
let n = { ...z };

n; // { a: 3, b: 'bb', c: { name: 'ccc' } }
n === z; // false
n.c === z.c; // true
// n.c 跟 z.c 是同一个引用地址

\`\`\`

### 对象字面量简写语法

\`\`\`js
const name = "雪月";

// ES5写法
const obj = {
  name: name,
  f: function () {
    console.log(this.name);
  },
};

// ES6简写
const obj2 = {
  name,
  f() {
    console.log(this.name);
  },
};

obj.f(); // 雪月
obj2.f(); // 雪月

\`\`\`

使用 \`vue\` 的同学是不是感到很熟悉

\`\`\`js
new Vue({
  el: "#app",
  data() {
    return {
      list: [],
    };
  },
});

\`\`\`

### 数组实例的 includes()

Array.prototype.includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 includes 方法类似。ES2016 引入了该方法。

\`\`\`js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, NaN].includes(NaN); // true

\`\`\`

没有该方法之前，我们通常使用数组的 indexOf 方法，检查是否包含某个值。

\`\`\`js
// ES5
if (arr.indexOf(el) !== -1) {
  // ...
}

// ES6
if (arr.includes(el)) {
  // ...
}

// 那么 indexOf 能不能做到类似于 includes 的写法呢？ 我们可以利用 ~ 位运算符
if (~arr.indexOf(el)) {
  // ...
}

\`\`\`

\`indexOf\` 方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对 \`NaN\` 的误判。

\`\`\`js
[NaN].indexOf(NaN);
// -1

\`\`\`

\`includes\` 使用的是不一样的判断算法，就没有这个问题

\`\`\`js
[NaN].includes(NaN);
// true

\`\`\`

### Async/await 异步语法

\`ES2017\` 标准引入了 \`async\` 函数，使得异步操作变得更加方便。

\`async\` 函数是什么？一句话，它就是 \`Generator\` 函数的语法糖。

\`\`\`js
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}

getTitle("https://tc39.github.io/ecma262/").then((res) => console.log(res));

\`\`\`

上面代码中，函数 \`getTitle\` 内部有三个操作：\`抓取网页\`、\`取出文本\`、\`匹配页面标题\`。只有这三个操作全部完成，才会执行 \`then\` 方法里面的 \`console.log\`

### 结束（意犹未尽）

文章介绍了 \`ES6\` 常用的一些语法以及使用场景; 但是 \`ES6\` 内容远不止于此，感兴趣的同学可以去 \`阮一峰老师的\` ES6 入门教程[1] 一书中查看详细内容。如果您认可这本书，也可以去正版渠道购买书籍。这样可以使出版社不因出版开源书籍而亏钱，进而鼓励更多的作者开源自己的书籍。

### 后记（列举 API）

还有很多 \`ES6\` 实用的 \`API\` 我就简单提及一下，朋友们看看平时是否有用到

\`\`\`js
[1, 4, -5, 10].find((n) => n < 0);
// -5
[1, 5, 10, 15].findIndex((value, index, arr) => value > 9);
// 2
[1, 2, [3, [4, 5]]].flat();
// [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2);
// [1, 2, 3, 4, 5]
[3, 8, 54, 8, 3, NaN, NaN, "NaN", "NaN"].filter(
  (number, index, arr) => arr.indexOf(number) === index
);
// [3, 8, 54, "NaN"] 利用filter过滤去重，注意会漏掉NaN
[1, 2, 3, 4].map((item) => item * 2);
// [2, 4, 6, 8] 利用map返回一个新数组，不改变原数组

// 使用 reduce 求和; reduce功能极其强大 ! yyds
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});
// 10

// ES2017 引入了跟 Object.keys 配套的 Object.values 和 Object.entries，作为遍历一个对象的补充手段，
// 供 for...of 循环使用。
let { keys, values, entries } = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
};
\`\`\`

      `
    },
  ]
}

export default es6;