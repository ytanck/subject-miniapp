const js = {
    id: 2,
    category: "JavaScript",
    questions: [
      {
        title: "JavaScript基础",
        desc: "数据类型、闭包、构造函数、原型链...",
        content:`
# 基础篇

## 一、JS的一些名词概念

#### 什么是作用域？

变量存在的范围。

可分为全局作用域和函数作用域，ES6新增块级作用域。



#### 什么是闭包？

闭包就是能够读取其他函数内部变量的函数。

* 闭包的形式：函数内部定义函数
* 本质上闭包就是将函数内部和外部连接起来的一座桥梁

闭包的作用：

* 可以读取函数内部变量
* 让这些变量始终保持在内存中，即闭包可以使得它诞生的环境一直存在。
*  封装对象的私有属性和私有方法



#### 什么是构造函数？

用于构造(生成)实例的一个函数，使实例拥有构造函数内定于的属性和方法。



#### 什么是实例对象？

实例对象就是通过new 构造函数生成的，拥有构造函数内定于的属性和方法的一个对象。



#### 什么是this？

就是属性或方法当前所在的对象，指向当前运行环境（对象）



#### 什么是原型？

每个函数都有一个prototype属性，指向一个对象，该对象称为原型对象。



#### 什么是原型链？

所有对象都有自己的原型对象，由于原型对象也是对象，因此它也有自己的原型，这就会形成一个原型链。

最顶层的原型是Object.prototype。

>读取对象属性时，JS会先在对象自身上找，找到就直接返回，如果找不到，会到原型上找，如果还是找不到，就会去原型的原型上找，最终会到最顶层的Object.prototype上找，还是找不到就会返回undefined。



#### 什么是constructor？

prototype原型对象都有一个constructor属性，默认指向prototype对象所在的构造函数。



#### 什么是包装对象？

包装对象指的是将原始类型（数字、字符串、布尔值）进行实例化。



## 二、数据类型的转换

### 1、强制（手动）转换

 强制转换主要指使用\`Number()\`、\`String()\`和\`Boolean()\`三个函数，手动将各种类型的值，分别转换成**数字、字符串、布尔值**。

#### Number()

\`\`\`js
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
Number([]) // 0

//使用parseInt()转数组
parseInt([1, 2, 3]) // 1
\`\`\`

#### String()

\`\`\`js
// 原始类型的转换
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

// 对象的转换
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
String([]) // ""  空字符串
String(function(){}) // "function(){}"
\`\`\`

#### Boolean()

\`\`\`js
// 除了这五个为false，其他都为true
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false

//true
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true

Boolean(1) // true
Boolean(' ') // true // 注意字符串内有个空格
\`\`\`

### 2、自动转换

下面介绍自动转换，它是**以强制转换为基础的**。

遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见。

第一种情况，**不同类型的数据互相运算**。

\`\`\`js
123 + 'abc' // "123abc"
\`\`\`

 第二种情况，**对非布尔值类型的数据求布尔值**。

\`\`\`js
if ('abc') {
  console.log('hello')
}  // "hello"
\`\`\`

 第三种情况，**对非数值类型的值使用一元运算符（即\`+\`和\`-\`）**。

\`\`\`js
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
\`\`\`

自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用\`String\`函数进行转换。如果该位置即可以是字符串，也可能是数值，那么默认转为数值。

由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用\`Boolean\`、\`Number\`和\`String\`函数进行显式转换。



#### 自动转换为布尔值（Boolean）

JavaScript 遇到预期为布尔值的地方（比如\`if\`语句的条件部分），就会将非布尔值的参数自动转换为布尔值。系统内部会自动调用\`Boolean\`函数。

因此除了以下五个值，其他都是自动转为\`true\`。

- \`undefined\`
- \`null\`
- \`+0\`或\`-0\`
- \`NaN\`
- \`''\`（空字符串）

下面这个例子中，条件部分的每个值都相当于\`false\`，使用否定运算符后，就变成了\`true\`。

\`\`\`js
if ( !undefined
  && !null
  && !0
  && !NaN
  && !''
) {
  console.log('true');
} // true
\`\`\`

下面两种写法，有时也用于将一个表达式转为布尔值。它们内部调用的也是\`Boolean\`函数。

\`\`\`js
// 三元运算符
expression ? true : false

// 取反运算符
!! expression
\`\`\`



#### 自动转换为字符串（String）

JavaScript 遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。**具体规则是，先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串**。

字符串的自动转换，**主要发生在字符串的加法运算时**。当一个值为字符串，另一个值为非字符串，则后者转为字符串。

##### 所有类型的值与字符串相加都会变成字符串

\`\`\`js
'5' + 1 // '51'
 1  + '5' // '15'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
 5 + {} // "5[object Object]"
'5' + [] // "5"
 5 + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
\`\`\`

#####

这种自动转换不注意的话很容易出错。

\`\`\`js
var obj = {
  width: '100'
};

obj.width + 20 // "10020"
parerInt(obj.width) + 20 // 120
\`\`\`

上面代码中，开发者可能期望返回\`120\`，但是由于自动转换，实际上返回了一个字符\`10020\`。正确做法是先把字符串转成数字。



#### 自动转换为数值（Number）

JavaScript 遇到预期为数值的地方，就会将参数值自动转换为数值。系统内部会自动调用\`Number\`函数。



##### 除加号与字符串运行会转成字符串外，其他运行基本都会自动转成数值

\`\`\`js
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN

true+true // 2
\`\`\`

上面代码中，运算符两侧的运算子，都被转成了数值。

> 注意：\`null\`转为数值时为\`0\`，而\`undefined\`转为数值时为\`NaN\`。

**数值与布尔值、null也会转为数值**

\`\`\`js
5+true // 6
5+false // 5
5+null //5
\`\`\`



一元运算符也会把运算子转成数值。

\`\`\`js
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0
\`\`\`



## 三、错误处理机制

### 1、Error实例对象

JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供\`Error\`构造函数，所有抛出的错误都是这个构造函数的实例。

\`\`\`js
var err = new Error('出错了');
err.message // "出错了"
\`\`\`

上面代码中，我们调用\`Error\`构造函数，生成一个实例对象\`err\`。\`Error\`构造函数接受一个参数，表示错误提示，可以从实例的\`message\`属性读到这个参数。**抛出\`Error\`实例对象以后，整个程序就中断在发生错误的地方，不再往下执行**。

JavaScript 语言标准只提到，\`Error\`实例对象必须有\`message\`属性，表示出错时的提示信息，没有提到其他属性。大多数 JavaScript 引擎，对\`Error\`实例还提供\`name\`和\`stack\`属性，分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种实现都有。

- **message**：错误提示信息
- **name**：错误名称（非标准属性）
- **stack**：错误的堆栈（非标准属性）

使用\`name\`和\`message\`这两个属性，可以对发生什么错误有一个大概的了解。

\`\`\`js
var err = new Error('出错了');
if (err.name) {
  console.log(err.name + ': ' + err.message); // Error: 出错了
}
\`\`\`

 \`stack\`属性用来查看错误发生时的堆栈。

\`\`\`js
function throwit() {
  throw new Error('');
}

function catchit() {
  try {
    throwit();
  } catch(e) {
    console.log(e.stack); // print stack trace
  }
}

catchit()
// Error
//    at throwit (~/examples/throwcatch.js:9:11) // 堆栈的最内层throwit函数
//    at catchit (~/examples/throwcatch.js:3:9) // 向外一层catchit函数
//    at repl:1:5 // 函数的运行环境


// 堆栈信息说明
// Error 错误
//    at throwit 在throwit方法 (~/examples/throwcatch.js:9:11) 文件名：第几行：第几个字符
//    at catchit 在catchit方法 (~/examples/throwcatch.js:3:9) 文件名：第几行：第几个字符
//    at repl:1:5 // 函数的运行环境
\`\`\`

 上面代码中，错误堆栈的最内层是\`throwit\`函数，然后是\`catchit\`函数，最后是函数的运行环境。

### 2、原生错误类型

 \`Error\`实例对象是最一般的错误类型，在它的基础上，JavaScript 还定义了其他6种错误对象。也就是说，存在\`Error\`的6个派生对象。

#### SyntaxError 对象（语法错误）

 \`SyntaxError\`对象是解析代码时发生的**语法错误**。

\`\`\`js
// 变量名错误
var 1a;
// Uncaught SyntaxError: Invalid or unexpected token
// 语法错误：无效或意外的标记符号

// 缺少括号
console.log 'hello');
// Uncaught SyntaxError: Unexpected string
// 语法错误：意外的字符串
\`\`\`

上面代码的错误，都是在语法解析阶段就可以发现，所以会抛出\`SyntaxError\`。第一个错误提示是“token 非法”，第二个错误提示是“字符串不符合要求”。



#### ReferenceError 对象（引用错误）

 \`ReferenceError\`对象是**引用一个不存在的变量时发生的错误**。

\`\`\`js
// 使用一个不存在的变量
unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined
// 引用错误： unknownVariable 没有定义
\`\`\`

另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果或者\`this\`赋值。

\`\`\`js
// 等号左侧不是变量
console.log() = 1
// Uncaught ReferenceError: Invalid left-hand side in assignment
// 引用错误： 赋值中左边是无效的

// this 对象不能手动赋值
this = 1
// ReferenceError: Invalid left-hand side in assignment
// 引用错误：  赋值中左边是无效的
\`\`\`

上面代码对函数\`console.log\`的运行结果和\`this\`赋值，结果都引发了\`ReferenceError\`错误。



#### RangeError 对象（范围错误）

 \`RangeError\`对象是一个值**超出有效范围时发生的错误**。主要有几种情况，一是数组长度为负数，二是\`Number\`对象的方法参数超出范围，以及函数堆栈超过最大值。

\`\`\`js
// 数组长度不得为负数
new Array(-1)
// Uncaught RangeError: Invalid array length
// 范围错误：无效的数组长度
\`\`\`



#### TypeError 对象（类型错误）

 \`TypeError\`对象是**变量或参数不是预期类型时发生的错误**。比如，对字符串、布尔值、数值等原始类型的值使用\`new\`命令，就会抛出这种错误，因为\`new\`命令的参数应该是一个构造函数。

\`\`\`js
new 123
// Uncaught TypeError: number is not a function
// 类型错误： 数字不是一个函数

var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
// 类型错误：obj.unknownMethod 不是一个函数
\`\`\`

上面代码的第二种情况，调用对象不存在的方法，也会抛出\`TypeError\`错误，因为\`obj.unknownMethod\`的值是\`undefined\`，而不是一个函数。



#### URIError 对象 （URI错误）

\`URIError\`对象是 **URI 相关函数的参数不正确时抛出的错误**，主要涉及\`encodeURI()\`、\`decodeURI()\`、\`encodeURIComponent()\`、\`decodeURIComponent()\`、\`escape()\`和\`unescape()\`这六个函数。

\`\`\`js
decodeURI('%2')
// URIError: URI malformed
\`\`\`



#### EvalError 对象 （eval错误）

\`eval\`函数没有被正确执行时，会抛出\`EvalError\`错误。该**错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。**



#### 总结（开发者手动使用）

以上这6种派生错误，连同原始的\`Error\`对象，都是构造函数。**开发者可以使用它们，手动生成错误对象的实例**。这些构造函数都接受一个参数，代表错误提示信息（message）。

\`\`\`js
var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

err1.message // "出错了！"
err2.message // "出错了，变量超出有效范围！"
err3.message // "出错了，变量类型无效！"
\`\`\`



### 3、自定义错误

 除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象。

\`\`\`js
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

UserError.prototype = new Error(); // 原型继承 Error对象
UserError.prototype.constructor = UserError;

// 使用
new UserError('这是自定义的错误！');
\`\`\`

上面代码自定义一个错误对象\`UserError\`，让它继承\`Error\`对象。然后，就可以生成这种自定义类型的错误了。



### 4、throw 语句 （中断程序并抛出错误）

 \`throw\`语句的作用是**手动中断程序执行，抛出一个错误**。

\`\`\`js
var x = 0;
if (x <= 0) {
  throw new Error('x 必须为正数');
}
// Uncaught Error: x 必须为正数
\`\`\`

 上面代码中，如果变量\`x\`小于等于\`0\`，就手动抛出一个错误，告诉用户\`x\`的值不正确，整个程序就会在这里中断执行。可以看到，\`throw\`抛出的错误就是它的参数，这里是一个\`Error\`实例。

\`\`\`js
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

throw new UserError('出错了！');
// Uncaught UserError {message: "出错了！", name: "UserError"}
\`\`\`

 上面代码中，\`throw\`抛出的是一个\`UserError\`实例。

实际上，\`throw\`可以抛出任何类型的值。也就是说，它的参数可以是任何值。

\`\`\`js
// 抛出一个字符串
throw 'Error！';
// Uncaught Error！

// 抛出一个数值
throw 42;
// Uncaught 42

// 抛出一个布尔值
throw true;
// Uncaught true

// 抛出一个对象
throw {
  toString: function () {
    return 'Error!';
  }
};
// Uncaught {toString: ƒ}
\`\`\`

 对于 JavaScript 引擎来说，**遇到\`throw\`语句，程序就中止了**。引擎会接收到\`throw\`抛出的信息，可能是一个错误实例，也可能是其他类型的值。

### 5、try...catch 结构（捕获错误，对错误进行处理，不中断）

 一旦发生错误，程序就中止执行了。JavaScript 提供了\`try...catch\`结构，**允许对错误进行处理**，选择是否往下执行。

\`\`\`js
try {
  throw new Error('出错了!');
} catch (e) {
  console.log(e.name + ": " + e.message);
  console.log(e.stack);
}
// Error: 出错了!
//   at <anonymous>:3:9
//   ...
\`\`\`

上面代码中，\`try\`代码块抛出错误（上例用的是\`throw\`语句），JavaScript 引擎就立即把代码的执行，转到\`catch\`代码块，或者说错误被\`catch\`代码块捕获了。\`catch\`接受一个参数，表示\`try\`代码块抛出的值。

如果你不确定某些代码是否会报错，就可以把它们放在\`try...catch\`代码块之中，便于进一步对错误进行处理。

\`\`\`js
try {
  f();
} catch(e) {
  // 处理错误
}
\`\`\`

上面代码中，如果函数\`f\`执行报错，就会进行\`catch\`代码块，接着对错误进行处理。

\`catch\`代码块捕获错误之后，**程序不会中断**，会按照正常流程继续执行下去。

\`\`\`js
try {
  throw "出错了";
} catch (e) {
  console.log(111);
}
console.log(222);
// 111
// 222
\`\`\`

上面代码中，\`try\`代码块抛出的错误，被\`catch\`代码块捕获后，程序会继续向下执行。

\`catch\`代码块之中，还可以再抛出错误，甚至使用嵌套的\`try...catch\`结构。

\`\`\`js
var n = 100;

try {
  throw n;
} catch (e) {
  if (e <= 50) {
    // ...
  } else {
    throw e;
  }
}
// Uncaught 100
\`\`\`

上面代码中，\`catch\`代码之中又抛出了一个错误。

为了**捕捉不同类型的错误**，\`catch\`代码块之中可以加入判断语句。

\`\`\`js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ...
}
\`\`\`

上面代码中，\`catch\`捕获错误之后，会判断错误类型（\`EvalError\`还是\`RangeError\`），进行不同的处理。

### 6、finally 代码块（在try..catch最后，必执行的）

 \`try...catch\`结构允许在最后添加一个\`finally\`代码块，表示**不管是否出现错误，都必需在最后运行的语句**。

\`\`\`js
function cleansUp() {
  try {
    throw new Error('出错了……');
    console.log('此行不会执行');
  } finally { // 不管有没有出错都会执行finally
    console.log('完成清理工作');
  }
  console.log('此行不会执行');
}

cleansUp()
// 完成清理工作
// Uncaught Error: 出错了……
//    at cleansUp (<anonymous>:3:11)
//    at <anonymous>:10:1

// 由于没有catch语句，所以会打印出错误信息，并中断除finally以外的代码。
// 如果有catch语句则会执行catch内的代码块，而不会打印错误信息。且不会中断代码。
\`\`\`

 上面代码中，由于没有\`catch\`语句块，一旦发生错误，代码就会中断执行。中断执行之前，会先执行\`finally\`代码块，然后再向用户提示报错信息。

\`\`\`js
function idle(x) {
  try {
    console.log(x);
    return 'result';
  } finally {
    console.log('FINALLY');
  }
}

idle('hello')
// hello
// FINALLY
\`\`\`

上面代码中，\`try\`代码块没有发生错误，而且里面还包括\`return\`语句，但是\`finally\`代码块依然会执行。而且，这个函数的返回值还是\`result\`。

下面的例子说明，\`return\`语句的执行是排在\`finally\`代码之前，只是等\`finally\`代码执行完毕后才返回。

\`\`\`js
var count = 0;
function countUp() {
  try {
    return count;
  } finally {
    count++;
  }
}

countUp()
// 0
count
// 1
\`\`\`

上面代码说明，\`return\`语句里面的\`count\`的值，是在\`finally\`代码块运行之前就获取了。

下面是\`finally\`代码块用法的**典型场景**。

\`\`\`js
openFile(); // 打开文件

try {
  writeFile(Data); // 写入文件
} catch(e) {
  handleError(e); // 如果写入出错这处理错误
} finally {
  closeFile();// 不管是否出错都会执行关闭文件
}
\`\`\`

上面代码首先打开一个文件，然后在\`try\`代码块中写入文件，如果没有发生错误，则运行\`finally\`代码块关闭文件；一旦发生错误，则先使用\`catch\`代码块处理错误，再使用\`finally\`代码块关闭文件。

下面的例子充分反映了\`try...catch...finally\`这三者之间的**执行顺序**。

\`\`\`js
function f() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; // 这句原本会延迟到 finally 代码块结束再执行
    console.log(2); // 不会运行
  } finally {
    console.log(3);
    return false; // 这句会覆盖掉前面那句 return
    console.log(4); // 不会运行
  }

  console.log(5); // 不会运行
}

var result = f();
// 0
// 1
// 3

result
// false
\`\`\`

上面代码中，\`catch\`代码块结束执行之前，会先执行\`finally\`代码块。

\`catch\`代码块之中，触发转入\`finally\`代码块的标志，不仅有\`return\`语句，还有\`throw\`语句。

\`\`\`js
function f() {
  try {
    throw '出错了！';
  } catch(e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    return false; // 直接返回
  }
}

try {
  f(); // 接收到返回值false，并没有接收到错误
} catch(e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}

//  捕捉到内部错误
\`\`\`

上面代码中，进入\`catch\`代码块之后，一遇到\`throw\`语句，就会去执行\`finally\`代码块，其中有\`return false\`语句，因此就直接返回了，不再会回去执行\`catch\`代码块剩下的部分了。

\`try\`代码块内部，还可以再使用\`try\`代码块。

\`\`\`js
try {
  try {
    consle.log('Hello world!'); // 报错，console拼错
  }
  finally {
    console.log('Finally');
  }
  console.log('Will I run?');
} catch(error) {
  console.error(error.message);
}
// Finally
// consle is not defined
\`\`\`

上面代码中，\`try\`里面还有一个\`try\`。内层的\`try\`报错（\`console\`拼错了），这时会执行内层的\`finally\`代码块，然后抛出错误，被外层的\`catch\`捕获。

## 四、console对象

### console.time()，console.timeEnd() （用于计算程序的用时）

这两个方法用于计时，可以算出一个操作所花费的准确时间。

\`\`\`
console.time('Array initialize');

var array= new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
  array[i] = new Object();
};

console.timeEnd('Array initialize');
// Array initialize: 1914.481ms
\`\`\`

\`time\`方法表示计时开始，\`timeEnd\`方法表示计时结束。它们的参数是计时器的名称。调用\`timeEnd\`方法之后，控制台会显示“计时器名称: 所耗费的时间”。



## 文档

- 学习文档：// https://github.com/ytanck/ytanck
        `
      },{
        title: "数组的常用方法",
        desc: "数组的常用方法有哪些:push、unshift、splice...",
        content:`
## 一、操作方法

数组基本操作可以归纳为 增、删、改、查，需要留意的是哪些方法会对原数组产生影响，哪些方法不会

下面对数组常用的操作方法做一个归纳

### 增 

下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响

- push()
- unshift()
- splice()
- concat()


#### push()

\`push()\`方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度

\`\`\`js
let colors = []; // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
console.log(count) // 2
\`\`\`



#### unshift()

unshift()在数组开头添加任意多个值，然后返回新的数组长度

\`\`\`js
let colors = new Array(); // 创建一个数组
let count = colors.unshift("red", "green"); // 从数组开头推入两项
alert(count); // 2
\`\`\`



#### splice

传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组

\`\`\`js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 0, "yellow", "orange")
console.log(colors) // red,yellow,orange,green,blue
console.log(removed) // []
\`\`\`


#### concat()

首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组

\`\`\`js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
\`\`\`



### 删

下面三种都会影响原数组，最后一项不影响原数组：

- pop()
- shift()
- splice()
- slice()



#### pop()

 \`pop()\` 方法用于删除数组的最后一项，同时减少数组的\` length\` 值，返回被删除的项

\`\`\`js
let colors = ["red", "green"]
let item = colors.pop(); // 取得最后一项
console.log(item) // green
console.log(colors.length) // 1
\`\`\`



#### shift()

\` shift() \`方法用于删除数组的第一项，同时减少数组的\` length\` 值，返回被删除的项

\`\`\`js
let colors = ["red", "green"]
let item = colors.shift(); // 取得第一项
console.log(item) // red
console.log(colors.length) // 1
\`\`\`



#### splice()

传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组

\`\`\`js
let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
\`\`\`



### slice()

 slice() 用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组

\`\`\`js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors)   // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
\`\`\`



#### 改
即修改原来数组的内容，常用\`splice\`
#### splice() 

传入三个参数，分别是开始位置，要删除元素的数量，要插入的任意多个元素，返回删除元素的数组，对原数组产生影响

\`\`\`js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
console.log(colors); // red,red,purple,blue
console.log(removed); // green，只有一个元素的数组
\`\`\`



#### 查

即查找元素，返回元素坐标或者元素值

- indexOf()
- includes()
- find()

#### indexOf()

返回要查找的元素在数组中的位置，如果没找到则返回 -1

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
\`\`\`



#### includes()

返回要查找的元素在数组中的位置，找到返回\`true\`，否则\`false\`

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4) // true
\`\`\`

#### find()

返回第一个匹配的元素

\`\`\`js
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
\`\`\`



## 二、排序方法

数组有两个方法可以用来对元素重新排序：

- reverse() 
- sort()

### reverse()

顾名思义，将数组元素方向反转

\`\`\`js
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
\`\`\`



### sort()

sort()方法接受一个比较函数，用于判断哪个值应该排在前面

\`\`\`js
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
\`\`\`



## 三、转换方法

常见的转换方法有：

### join()

join() 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串

\`\`\`js
let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue
alert(colors.join("||")); // red||green||blue
\`\`\`





## 四、迭代方法

常用来迭代数组的方法（都不改变原数组）有如下：

- some()
- every()
- forEach()
- filter()
- map()



### some()

对数组每一项都运行传入的测试函数，如果至少有1个元素返回 true ，则这个方法返回 true

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult) // true
\`\`\`



### every()

对数组每一项都运行传入的测试函数，如果所有元素都返回 true ，则这个方法返回 true

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult) // false
\`\`\`



### forEach()

对数组每一项都运行传入的函数，没有返回值

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.forEach((item, index, array) => {
    // 执行某些操作
});
\`\`\`



### filter()

对数组每一项都运行传入的函数，函数返回 \`true\` 的项会组成数组之后返回

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // 3,4,5,4,3
\`\`\`



### map()

对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组

\`\`\`js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult) // 2,4,6,8,10,8,6,4,2
\`\`\`

        `
      },{
        title: "bind、call、apply 区别",
        desc: "bind、call、apply 区别？如何实现一个bind?",
        content:`
## 一、作用

\`call \`、\`apply \`、\`bind \`作用是改变函数执行时的上下文，简而言之就是改变函数运行时的\`this\`指向

那么什么情况下需要改变\`this\`的指向呢？下面举个例子

\`\`\`js
var name = "lucy";
var obj = {
    name: "martin",
    say: function () {
        console.log(this.name);
    }
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say,0); // lucy，this 指向 window 对象
\`\`\`

从上面可以看到，正常情况\`say\`方法输出\`martin\`

但是我们把\`say\`放在\`setTimeout\`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候\`this\`指向\`window\`，所以输出\`lucy\`

我们实际需要的是\`this\`指向\`obj\`对象，这时候就需要该改变\`this\`指向了

\`\`\`js
setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象
\`\`\`



## 二、区别

下面再来看看\`apply\`、\`call\`、\`bind\`的使用

### apply

\`apply\`接受两个参数，第一个参数是\`this\`的指向，第二个参数是函数接受的参数，以数组的形式传入

改变\`this\`指向后原函数会立即执行，且此方法只是临时改变\`this\`指向一次

\`\`\`js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window
\`\`\`

当第一个参数为\`null\`、\`undefined\`的时候，默认指向\`window\`(在浏览器中)

\`\`\`js
fn.apply(null,[1,2]); // this指向window
fn.apply(undefined,[1,2]); // this指向window
\`\`\`



### call

\`call\`方法的第一个参数也是\`this\`的指向，后面传入的是一个参数列表

跟\`apply\`一样，改变\`this\`指向后原函数会立即执行，且此方法只是临时改变\`this\`指向一次

\`\`\`js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window
\`\`\`

同样的，当第一个参数为\`null\`、\`undefined\`的时候，默认指向\`window\`(在浏览器中)

\`\`\`js
fn.call(null,[1,2]); // this指向window
fn.call(undefined,[1,2]); // this指向window
\`\`\`



### bind

bind方法和call很相似，第一参数也是\`this\`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变\`this\`指向后不会立即执行，而是返回一个永久改变\`this\`指向的函数

\`\`\`js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn(1,2) // this指向window
\`\`\`


### 小结

从上面可以看到，\`apply\`、\`call\`、\`bind\`三者的区别在于：

- 三者都可以改变函数的\`this\`对象指向
- 三者第一个参数都是\`this\`要指向的对象，如果如果没有这个参数或参数为\`undefined\`或\`null\`，则默认指向全局\`window\`
- 三者都可以传参，但是\`apply\`是数组，而\`call\`是参数列表，且\`apply\`和\`call\`是一次性传入参数，而\`bind\`可以分为多次传入
- \`bind \`是返回绑定this之后的函数，\`apply \`、\`call\` 则是立即执行 



## 三、实现

实现\`bind\`的步骤，我们可以分解成为三部分：

- 修改\`this\`指向
- 动态传递参数

\`\`\`js
// 方式一：只在bind中传递函数参数
fn.bind(obj,1,2)()

// 方式二：在bind中传递函数参数，也在返回函数中传递参数
fn.bind(obj,1)(2)
\`\`\`

- 兼容\`new\`关键字

整体实现代码如下：

\`\`\`js
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    const args = [...arguments].slice(1),
          fn = this;

    return function Fn() {

        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); 
    }
}
\`\`\`
        `
      },{
        title: "什么是BOM？常见的BOM对象你了解哪些？",
        desc: "面试官：说说你对BOM的理解，常见的BOM对象你了解哪些？",
        content:`
## 一、是什么

\`BOM\` (Browser Object Model)，浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象

其作用就是跟浏览器做一些交互效果,比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率

浏览器的全部内容可以看成\`DOM\`，整个浏览器可以看成\`BOM\`。区别如下：

![](https://static.vue-js.com/482f33e0-8089-11eb-85f6-6fac77c0c9b3.png)



## 二、window

\`Bom\`的核心对象是\`window\`，它表示浏览器的一个实例

在浏览器中，\`window\`对象有双重角色，即是浏览器窗口的一个接口，又是全局对象

因此所有在全局作用域中声明的变量、函数都会变成\`window\`对象的属性和方法

\`\`\`js
var name = 'js每日一题';
function lookName(){
  alert(this.name);
}

console.log(window.name);  //js每日一题
lookName();                //js每日一题
window.lookName();         //js每日一题
\`\`\`

关于窗口控制方法如下：

- \`moveBy(x,y)\`：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体
- \`moveTo(x,y)\`：移动窗体左上角到相对于屏幕左上角的(x,y)点
- \`resizeBy(w,h)\`：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
- \`resizeTo(w,h)\`：把窗体宽度调整为w个像素，高度调整为h个像素
- \`scrollTo(x,y)\`：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
- \`scrollBy(x,y)\`： 如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素

 \`window.open()\` 既可以导航到一个特定的\`url\`，也可以打开一个新的浏览器窗口

如果 \`window.open()\` 传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL

\`\`\`js
window.open('htttp://www.vue3js.cn','topFrame')
==> < a href=" " target="topFrame"></ a>
\`\`\`

\`window.open()\` 会返回新窗口的引用，也就是新窗口的 \`window\` 对象

\`\`\`js
const myWin = window.open('http://www.vue3js.cn','myWin')
\`\`\`

\`window.close()\` 仅用于通过 \`window.open()\` 打开的窗口

新创建的 \`window\` 对象有一个 \`opener\` 属性，该属性指向打开他的原始窗口对象





## 三、location

\`url\`地址如下：

\`\`\`js
http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents
\`\`\`

\`location\`属性描述如下：

| 属性名   | 例子                                                   | 说明                                |
| -------- | ------------------------------------------------------ | ----------------------------------- |
| hash     | "#contents"                                            | utl中#后面的字符，没有则返回空串    |
| host     | www.wrox.com:80                                        | 服务器名称和端口号                  |
| hostname | www.wrox.com                                           | 域名，不带端口号                    |
| href     | http://www.wrox.com:80/WileyCDA/?q=javascript#contents | 完整url                             |
| pathname | "/WileyCDA/"                                           | 服务器下面的文件路径                |
| port     | 80                                                     | url的端口号，没有则为空             |
| protocol | http:                                                  | 使用的协议                          |
| search   | ?q=javascript                                          | url的查询字符串，通常为？后面的内容 |

除了 \`hash \`之外，只要修改\` location \`的一个属性，就会导致页面重新加载新\` URL\`

\`location.reload()\`，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载

如果要强制从服务器中重新加载，传递一个参数\`true\`即可



## 四、navigator

\`navigator\` 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂

下表列出了\`navigator\`对象接口定义的属性和方法：

 ![](https://static.vue-js.com/6797ab40-8089-11eb-ab90-d9ae814b240d.png)

 ![](https://static.vue-js.com/74096620-8089-11eb-ab90-d9ae814b240d.png)



## 五、screen

保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度

 ![](https://static.vue-js.com/7d6b21e0-8089-11eb-85f6-6fac77c0c9b3.png)



## 六、history

\`history\`对象主要用来操作浏览器\`URL\`的历史记录，可以通过参数向前，向后，或者向指定\`URL\`跳转

常用的属性如下：

- \`history.go()\`

接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，

\`\`\`js
history.go('maixaofei.com')
\`\`\`

当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面

\`\`\`js
history.go(3) //向前跳转三个记录
history.go(-1) //向后跳转一个记录
\`\`\`

- \`history.forward()\`：向前跳转一个页面
- \`history.back()\`：向后跳转一个页面
- \`history.length\`：获取历史记录数
        `
      },{
        title: "什么是DOM",
        desc: "面试官：什么是DOM，DOM常见的操作有哪些？",
        content:`
## 一、DOM

文档对象模型 (DOM) 是 \`HTML\` 和 \`XML\` 文档的编程接口

它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容

任何 \`HTML \`或\` XML \`文档都可以用 \`DOM \`表示为一个由节点构成的层级结构

节点分很多类型，每种类型对应着文档中不同的信息和（或）标记，也都有自己不同的特性、数据和方法，而且与其他类型有某种关系，如下所示：

\`\`\`html
<html>
    <head>
        <title>Page</title>
    </head>
    <body>
        <p>Hello World!</p >
    </body>
</html>
\`\`\`

\`DOM\`像原子包含着亚原子微粒那样，也有很多类型的\`DOM\`节点包含着其他类型的节点。接下来我们先看看其中的三种：

\`\`\`html
<div>
    <p title="title">
        content
    </p >
</div>
\`\`\`

上述结构中，\`div\`、\`p\`就是元素节点，\`content\`就是文本节点，\`title\`就是属性节点



## 二、操作

日常前端开发，我们都离不开\`DOM\`操作

在以前，我们使用\`Jquery\`，\`zepto\`等库来操作\`DOM\`，之后在\`vue\`，\`Angular\`，\`React\`等框架出现后，我们通过操作数据来控制\`DOM\`（绝大多数时候），越来越少的去直接操作\`DOM\`

但这并不代表原生操作不重要。相反，\`DOM\`操作才能有助于我们理解框架深层的内容

下面就来分析\`DOM\`常见的操作，主要分为：

- 创建节点
- 查询节点
- 更新节点
- 添加节点
- 删除节点



### 创建节点

#### createElement

创建新元素，接受一个参数，即要创建元素的标签名

\`\`\`js
const divEl = document.createElement("div");
\`\`\`



#### createTextNode

创建一个文本节点

\`\`\`js
const textEl = document.createTextNode("content");
\`\`\`



#### createDocumentFragment

用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到\`DOM\`中

\`\`\`js
const fragment = document.createDocumentFragment();
\`\`\`

当请求把一个\`DocumentFragment\` 节点插入文档树时，插入的不是 \`DocumentFragment \`自身，而是它的所有子孙节点



#### createAttribute

创建属性节点，可以是自定义属性

\`\`\`js
const dataAttribute = document.createAttribute('custom');
consle.log(dataAttribute);
\`\`\`



### 获取节点

#### querySelector

传入任何有效的\` css\` 选择器，即可选中单个 \`DOM \`元素（首个）：

\`\`\`js
document.querySelector('.element')
document.querySelector('#element')
document.querySelector('div')
document.querySelector('[name="username"]')
document.querySelector('div + p > span')
\`\`\`

如果页面上没有指定的元素时，返回 \`null\`



#### querySelectorAll

返回一个包含节点子树内所有与之相匹配的\`Element\`节点列表，如果没有相匹配的，则返回一个空节点列表

\`\`\`js
const notLive = document.querySelectorAll("p");
\`\`\`

需要注意的是，该方法返回的是一个 \`NodeList \`的静态实例，它是一个静态的“快照”，而非“实时”的查询





关于获取\`DOM\`元素的方法还有如下，就不一一述说

\`\`\`js
document.getElementById('id属性值');返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值');返回拥有指定class的对象集合
document.getElementsByTagName('标签名');返回拥有指定标签名的对象集合
document.getElementsByName('name属性值'); 返回拥有指定名称的对象结合
document/element.querySelector('CSS选择器');  仅返回第一个匹配的元素
document/element.querySelectorAll('CSS选择器');   返回所有匹配的元素
document.documentElement;  获取页面中的HTML标签
document.body; 获取页面中的BODY标签
document.all[''];  获取页面中的所有元素节点的对象集合型
\`\`\`

除此之外，每个\`DOM\`元素还有\`parentNode\`、\`childNodes\`、\`firstChild\`、\`lastChild\`、\`nextSibling\`、\`previousSibling\`属性，关系图如下图所示

 ![](https://static.vue-js.com/c100f450-7fdc-11eb-ab90-d9ae814b240d.png)



### 更新节点

#### innerHTML

不但可以修改一个\`DOM\`节点的文本内容，还可以直接通过\`HTML\`片段修改\`DOM\`节点内部的子树

\`\`\`js
// 获取<p id="p">...</p >
var p = document.getElementById('p');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p">ABC</p >
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p >的内部结构已修改
\`\`\`



#### innerText、textContent

自动对字符串进行\`HTML\`编码，保证无法设置任何\`HTML\`标签

\`\`\`
// 获取<p id="p-id">...</p >
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >
\`\`\`

两者的区别在于读取属性时，\`innerText\`不返回隐藏元素的文本，而\`textContent\`返回所有文本



#### style

\`DOM\`节点的\`style\`属性对应所有的\`CSS\`，可以直接获取或设置。遇到\`-\`需要转化为驼峰命名

\`\`\`js
// 获取<p id="p-id">...</p >
const p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px'; // 驼峰命名
p.style.paddingTop = '2em';
\`\`\`





### 添加节点

#### innerHTML

如果这个DOM节点是空的，例如，\`<div></div>\`，那么，直接使用\`innerHTML = '<span>child</span>'\`就可以修改\`DOM\`节点的内容，相当于添加了新的\`DOM\`节点

如果这个DOM节点不是空的，那就不能这么做，因为\`innerHTML\`会直接替换掉原来的所有子节点



#### appendChild

把一个子节点添加到父节点的最后一个子节点

举个例子

\`\`\`js
<!-- HTML结构 -->
<p id="js">JavaScript</p >
<div id="list">
    <p id="java">Java</p >
    <p id="python">Python</p >
    <p id="scheme">Scheme</p >
</div>
\`\`\`

添加一个\`p\`元素

\`\`\`js
const js = document.getElementById('js')
js.innerHTML = "JavaScript"
const list = document.getElementById('list');
list.appendChild(js);
\`\`\`

现在\`HTML\`结构变成了下面

\`\`\`js
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p >
    <p id="python">Python</p >
    <p id="scheme">Scheme</p >
    <p id="js">JavaScript</p >  <!-- 添加元素 -->
</div>
\`\`\`

上述代码中，我们是获取\`DOM\`元素后再进行添加操作，这个\`js\`节点是已经存在当前文档树中，因此这个节点首先会从原先的位置删除，再插入到新的位置

如果动态添加新的节点，则先创建一个新的节点，然后插入到指定的位置

\`\`\`js
const list = document.getElementById('list'),
const haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);
\`\`\`



#### insertBefore

把子节点插入到指定的位置，使用方法如下：

\`\`\`js
parentElement.insertBefore(newElement, referenceElement)
\`\`\`

子节点会插入到\`referenceElement\`之前



#### setAttribute

在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

\`\`\`js
const div = document.getElementById('id')
div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。
\`\`\`



### 删除节点

删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的\`removeChild\`把自己删掉

\`\`\`js
// 拿到待删除节点:
const self = document.getElementById('to-be-removed');
// 拿到父节点:
const parent = self.parentElement;
// 删除:
const removed = parent.removeChild(self);
removed === self; // true
\`\`\`

删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置
        `
      },{
        title: "深拷贝浅拷贝的区别？如何实现一个深拷贝？",
        desc: "面试官：深拷贝浅拷贝的区别？如何实现一个深拷贝？",
        content:`
## 一、数据类型存储

前面文章我们讲到，\`JavaScript\`中存在两大数据类型：

- 基本类型
- 引用类型 

基本类型数据保存在在栈内存中

引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中



## 二、浅拷贝

浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝

如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址

即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址

下面简单实现一个浅拷贝

\`\`\`js
function shallowClone(obj) {
    const newObj = {};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}
\`\`\`

在\`JavaScript\`中，存在浅拷贝的现象有：

- \`Object.assign\`
- \`Array.prototype.slice()\`, \`Array.prototype.concat()\`
- 使用拓展运算符实现的复制





### Object.assign

\`\`\`js
var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}
var newObj = Object.assign({}, fxObj);
\`\`\`



### slice()

\`\`\`js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.slice(0)
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
\`\`\`



### concat()

\`\`\`js
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.concat()
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
\`\`\`


### 拓展运算符

\`\`\`js
const fxArr = ["One", "Two", "Three"]
const fxArrs = [...fxArr]
fxArrs[1] = "love";
console.log(fxArr) // ["One", "Two", "Three"]
console.log(fxArrs) // ["One", "love", "Three"]
\`\`\`





## 三、深拷贝

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

常见的深拷贝方式有：

- _.cloneDeep()

- jQuery.extend()
- JSON.stringify()
- 手写循环递归



### _.cloneDeep()

\`\`\`js
const _ = require('lodash');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);// false
\`\`\`



### jQuery.extend()

\`\`\`js
const $ = require('jquery');
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); // false
\`\`\`





### JSON.stringify()

\`\`\`js
const obj2=JSON.parse(JSON.stringify(obj1));
\`\`\`

但是这种方式存在弊端，会忽略\`undefined\`、\`symbol\`和\`函数\`

\`\`\`js
const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4:  Symbol('A')
}
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2); // {name: "A"}
\`\`\`



### 循环递归

\`\`\`js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
\`\`\`







## 四、区别

浅拷贝和深拷贝都创建出一个新的对象，但在复制对象属性的时候，行为就不一样

浅拷贝只复制属性指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，修改对象属性会影响原对象

\`\`\`js
// 浅拷贝
const obj1 = {
    name : 'init',
    arr : [1,[2,3],4],
};
const obj3=shallowClone(obj1) // 一个浅拷贝方法
obj3.name = "update";
obj3.arr[1] = [5,6,7] ; // 新旧对象还是共享同一块内存

console.log('obj1',obj1) // obj1 { name: 'init',  arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log('obj3',obj3) // obj3 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
\`\`\`

但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象

\`\`\`js
// 深拷贝
const obj1 = {
    name : 'init',
    arr : [1,[2,3],4],
};
const obj4=deepClone(obj1) // 一个深拷贝方法
obj4.name = "update";
obj4.arr[1] = [5,6,7] ; // 新对象跟原对象不共享内存

console.log('obj1',obj1) // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }
console.log('obj4',obj4) // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
\`\`\`



### 小结

前提为拷贝类型为引用类型的情况下：

- 浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址

- 深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址
        `
      },{
        title: "什么是防抖和节流？有什么区别？",
        desc: "面试官：什么是防抖和节流？有什么区别？如何实现？",
        content:`
## 一、是什么
本质上是优化高频率执行代码的一种手段

如：浏览器的 \`resize\`、\`scroll\`、\`keypress\`、\`mousemove\` 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能

为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用 **防抖（debounce）** 和 **节流（throttle）** 的方式来减少调用频率

#### 定义
- 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
- 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

一个经典的比喻:

想象每天上班大厦底下的电梯。把电梯完成一次运送，类比为一次函数的执行和响应

假设电梯有两种运行策略 \`debounce\` 和 \`throttle\`，超时设定为15秒，不考虑容量限制

电梯第一个人进来后，15秒后准时运送一次，这是节流

电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖

## 代码实现

### 节流

完成节流可以使用时间戳与定时器的写法

使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

\`\`\`js
function throttled1(fn, delay = 500) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

\`\`\`

使用定时器写法，\`delay\`毫秒后第一次执行，第二次事件停止触发后依然会再一次执行

\`\`\`js
function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}
\`\`\`

可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

\`\`\`js
function throttled(fn, delay) {
    let timer = null
    let starttime = Date.now()
    return function () {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
            fn.apply(context, args)
            starttime = Date.now()
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}
\`\`\`

### 防抖

简单版本的实现

\`\`\`js
function debounce(func, wait) {
    let timeout;

    return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
\`\`\`

防抖如果需要立即执行，可加入第三个参数用于判断，实现如下：

\`\`\`js
function debounce(func, wait, immediate) {

    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}
\`\`\`

## 二、区别

相同点：

- 都可以通过使用 \`setTimeout\` 实现
- 目的都是，降低回调执行频率。节省计算资源

不同点：

- 函数防抖，在一段连续操作结束后，处理回调，利用\`clearTimeout \`和 \`setTimeout\`实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
- 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次

例如，都设置时间频率为500ms，在2秒时间内，频繁触发函数，节流，每隔 500ms 就执行一次。防抖，则不管调动多少次方法，在2s后，只会执行一次

如下图所示：

 ![](https://static.vue-js.com/a2c81b50-8787-11eb-ab90-d9ae814b240d.png)


## 三、应用场景

防抖在连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小\`resize\`。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 搜索框，搜索联想功能
        `
      },{
        title: "什么是事件循环eventloop",
        desc: "面试官：说说你对事件循环的理解",
        content:`
## 一、是什么

首先，\`JavaScript \`是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环

在\`JavaScript\`中，所有的任务都可以分为

- 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行

- 异步任务：异步执行的任务，比如\`ajax\`网络请求，\`setTimeout \`定时函数等

同步任务与异步任务的运行流程图如下：

 ![](https://static.vue-js.com/61efbc20-7cb8-11eb-85f6-6fac77c0c9b3.png)

从上面我们可以看到，同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就事件循环



## 二、宏任务与微任务

如果将任务划分为同步任务和异步任务并不是那么的准确，举个例子：

\`\`\`js
console.log(1)

setTimeout(()=>{
    console.log(2)
}, 0)

new Promise((resolve, reject)=>{
    console.log('new Promise')
    resolve()
}).then(()=>{
    console.log('then')
})

console.log(3)
\`\`\`

如果按照上面流程图来分析代码，我们会得到下面的执行步骤：

- \`console.log(1) \`，同步任务，主线程中执行
- \`setTimeout()\` ，异步任务，放到 \`Event Table\`，0 毫秒后\`console.log(2) \`回调推入 \`Event Queue\` 中
- \`new Promise\` ，同步任务，主线程直接执行
- \`.then\` ，异步任务，放到 \`Event Table\`
- \`console.log(3)\`，同步任务，主线程执行

所以按照分析，它的结果应该是 \`1\` => \`'new Promise'\` => \`3\` => \`2\` => \`'then'\`

但是实际结果是：\`1\`=>\`'new Promise'\`=> \`3\` => \`'then'\` => \`2\`

出现分歧的原因在于异步任务执行顺序，事件队列其实是一个“先进先出”的数据结构，排在前面的事件会优先被主线程读取

例子中 \`setTimeout\`回调事件是先进入队列中的，按理说应该先于 \`.then\` 中的执行，但是结果却偏偏相反

原因在于异步任务还可以细分为微任务与宏任务

### 微任务

一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前

常见的微任务有：

- Promise.then

- MutaionObserver

- Object.observe（已废弃；Proxy 对象替代）

- process.nextTick（Node.js）

  

### 宏任务

宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合

常见的宏任务有：

- script (可以理解为外层同步代码) 
- setTimeout/setInterval 
- UI rendering/UI事件 
- postMessage、MessageChannel 
- setImmediate、I/O（Node.js）



这时候，事件循环，宏任务，微任务的关系如图所示

 ![](https://static.vue-js.com/6e80e5e0-7cb8-11eb-85f6-6fac77c0c9b3.png)

按照这个流程，它的执行机制是：

- 执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中
- 当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完



回到上面的题目

\`\`\`js
console.log(1)
setTimeout(()=>{
    console.log(2)
}, 0)
new Promise((resolve, reject)=>{
    console.log('new Promise')
    resolve()
}).then(()=>{
    console.log('then')
})
console.log(3)
\`\`\`

流程如下

\`\`\`js
// 遇到 console.log(1) ，直接打印 1
// 遇到定时器，属于新的宏任务，留着后面执行
// 遇到 new Promise，这个是直接执行的，打印 'new Promise'
// .then 属于微任务，放入微任务队列，后面再执行
// 遇到 console.log(3) 直接打印 3
// 好了本轮宏任务执行完毕，现在去微任务列表查看是否有微任务，发现 .then 的回调，执行它，打印 'then'
// 当一次宏任务执行完，再去执行新的宏任务，这里就剩一个定时器的宏任务了，执行它，打印 2
\`\`\`



## 三、async与await

\`async\` 是异步的意思，\`await \`则可以理解为 \`async wait\`。所以可以理解\` async \`就是用来声明一个异步方法，而 \`await \`是用来等待异步方法执行

### async

\`async\`函数返回一个\`promise\`对象，下面两种方法是等效的

\`\`\`js
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
\`\`\`

### await

正常情况下，\`await\`命令后面是一个 \`Promise \`对象，返回该对象的结果。如果不是 \`Promise \`对象，就直接返回对应的值

\`\`\`js
async function f(){
    // 等同于
    // return 123
    return await 123
}
f().then(v => console.log(v)) // 123
\`\`\`

不管\`await\`后面跟着的是什么，\`await\`都会阻塞后面的代码

\`\`\`js
async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)
\`\`\`

上面的例子中，\`await\` 会阻塞下面的代码（即加入微任务队列），先执行 \`async \`外面的同步代码，同步代码执行完，再回到 \`async\` 函数中，再执行之前阻塞的代码

所以上述输出结果为：\`1\`，\`fn2\`，\`3\`，\`2\`



## 四、流程分析

通过对上面的了解，我们对\`JavaScript\`对各种场景的执行顺序有了大致的了解

这里直接上代码：

\`\`\`js
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
\`\`\`

分析过程：

1. 执行整段代码，遇到 \`console.log('script start')\` 直接打印结果，输出 \`script start\`
2. 遇到定时器了，它是宏任务，先放着不执行
3. 遇到 \`async1()\`，执行 \`async1\` 函数，先打印 \`async1 start\`，下面遇到\` await \`怎么办？先执行 \`async2\`，打印 \`async2\`，然后阻塞下面代码（即加入微任务列表），跳出去执行同步代码
4. 跳到 \`new Promise\` 这里，直接执行，打印 \`promise1\`，下面遇到 \`.then()\`，它是微任务，放到微任务列表等待执行
5. 最后一行直接打印 \`script end\`，现在同步代码执行完了，开始执行微任务，即 \`await \`下面的代码，打印 \`async1 end\`
6. 继续执行下一个微任务，即执行 \`then\` 的回调，打印 \`promise2\`
7. 上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印 \`settimeout\`

所以最后的结果是：\`script start\`、\`async1 start\`、\`async2\`、\`promise1\`、\`script end\`、\`async1 end\`、\`promise2\`、\`settimeout\`
        `
      },{
        title: "Javascript数字精度丢失的问题，如何解决？",
        desc: "面试官：说说 Javascript 数字精度丢失的问题，如何解决？",
        content:`
## 一、场景复现

一个经典的面试题

\`\`\`js
0.1 + 0.2 === 0.3 // false
\`\`\`
为什么是\`false\`呢?

先看下面这个比喻

比如一个数 1÷3=0.33333333...... 

3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题

## 二、浮点数

“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储

我们也可以理解成，浮点数就是小数

在\`JavaScript\`中，现在主流的数值类型是\`Number\`，而\`Number\`采用的是\`IEEE754\`规范中64位双精度浮点数编码

这样的存储结构优点是可以归一化处理整数和小数，节省存储空间

对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了

而计算机只能用二进制（0或1）表示，二进制转换为科学记数法的公式如下：

 ![](https://static.vue-js.com/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png)

其中，\`a\`的值为0或者1，e为小数点移动的位置

举个例子：

27.0转化成二进制为11011.0 ，科学计数法表示为：

 ![](https://static.vue-js.com/37007090-86f4-11eb-ab90-d9ae814b240d.png)

前面讲到，\`javaScript\`存储方式是双精度浮点数，其长度为8个字节，即64位比特

64位比特又可分为三个部分：

- 符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数
- 指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023
- 尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零

如下图所示：

 ![](https://static.vue-js.com/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png)

举个例子：

27.5 转换为二进制11011.1

11011.1转换为科学记数法 ![[公式]](https://www.zhihu.com/equation?tex=1.10111%2A2%5E4)

符号位为1(正数)，指数位为4+，1023+4，即1027

因为它是十进制的需要转换为二进制，即 \`10000000011\`，小数部分为\`10111\`，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`

所以27.5存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示

0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`


## 二、问题分析

再回到问题上

\`\`\`js
0.1 + 0.2 === 0.3 // false
\`\`\`

通过上面的学习，我们知道，在\`javascript\`语言中，0.1 和 0.2 都转化成二进制后再进行运算

\`\`\`js
// 0.1 和 0.2 都转化成二进制后再进行运算
0.00011001100110011001100110011001100110011001100110011010 +
0.0011001100110011001100110011001100110011001100110011010 =
0.0100110011001100110011001100110011001100110011001100111

// 转成十进制正好是 0.30000000000000004
\`\`\`

所以输出\`false\`

再来一个问题，那么为什么\`x=0.1\`得到\`0.1\`？

主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是\`2^53=9007199254740992\`，对应科学计数尾数是 \`9.007199254740992\`，这也是 JS 最多能表示的精度

它的长度是 16，所以可以使用 \`toPrecision(16)\` 来做精度运算，超过的精度会自动做凑整处理

\`\`\`js
.10000000000000000555.toPrecision(16)
// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1
\`\`\`

但看到的 \`0.1\` 实际上并不是 \`0.1\`。不信你可用更高的精度试试：

\`\`\`js
0.1.toPrecision(21) = 0.100000000000000005551
\`\`\`

如果整数大于 \`9007199254740992\` 会出现什么情况呢？

由于指数位最大值是1023，所以最大可以表示的整数是 \`2^1024 - 1\`，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 \`2^1024\` 开始就变成了 \`Infinity\`

\`\`\`
> Math.pow(2, 1023)
8.98846567431158e+307

> Math.pow(2, 1024)
Infinity
\`\`\`

那么对于 \`(2^53, 2^63)\` 之间的数会出现什么情况呢？

- \`(2^53, 2^54)\` 之间的数会两个选一个，只能精确表示偶数
- \`(2^54, 2^55)\` 之间的数会四个选一个，只能精确表示4个倍数
- ... 依次跳过更多2的倍数

要想解决大数的问题你可以引用第三方库 \`bignumber.js\`，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多

### 小结

计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差


## 三、解决方案

理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果

当你拿到 \`1.4000000000000001\` 这样的数据要展示时，建议使用 \`toPrecision\` 凑整并 \`parseFloat\` 转成数字后再显示，如下：

\`\`\`
parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True
\`\`\`

封装成方法就是：

\`\`\`js
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
\`\`\`

对于运算类操作，如 \`+-*/\`，就不能使用 \`toPrecision\` 了。正确的做法是把小数转成整数后再运算。以加法为例：

\`\`\`js
/**
 * 精确加法
 */
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
\`\`\`

最后还可以使用第三方库，如\`Math.js\`、\`BigDecimal.js\`
        `
      },{
        title: "new操作符具体干了什么？",
        desc: "面试官：说说new操作符具体干了什么？",
        content:`
## 一、是什么

在\`JavaScript\`中，\`new\`操作符用于创建一个给定构造函数的实例对象

例子
\`\`\`js
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(this.name)
}
const person1 = new Person('Tom', 20)
console.log(person1)  // Person {name: "Tom", age: 20}
t.sayName() // 'Tom'
\`\`\`

从上面可以看到：

- \`new\` 通过构造函数 \`Person\` 创建出来的实例可以访问到构造函数中的属性
- \`new\` 通过构造函数 \`Person\` 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

现在在构建函数中显式加上返回值，并且这个返回值是一个原始类型

\`\`\`js
function Test(name) {
  this.name = name
  return 1
}
const t = new Test('xxx')
console.log(t.name) // 'xxx'
\`\`\`

可以发现，构造函数中返回一个原始值，然而这个返回值并没有作用

下面在构造函数中返回一个对象

\`\`\`js
function Test(name) {
  this.name = name
  console.log(this) // Test { name: 'xxx' }
  return { age: 26 }
}
const t = new Test('xxx')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
\`\`\`

从上面可以发现，构造函数如果返回值为一个对象，那么这个返回值会被正常使用



## 二、流程

从上面介绍中，我们可以看到\`new\`关键字主要做了以下的工作：

- 创建一个新的对象\`obj\`
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的\`this\`绑定到新建的对象\`obj\`上

- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

举个例子：

\`\`\`js
function Person(name, age){
    this.name = name;
    this.age = age;
}
const person1 = new Person('Tom', 20)
console.log(person1)  // Person {name: "Tom", age: 20}
t.sayName() // 'Tom'
\`\`\`

流程图如下：

 ![](https://static.vue-js.com/b429b990-7a39-11eb-85f6-6fac77c0c9b3.png)



## 三、手写new操作符

现在我们已经清楚地掌握了\`new\`的执行过程

那么我们就动手来实现一下\`new\`

\`\`\`js
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
\`\`\`

测试一下

\`\`\`js
function mynew(func, ...args) {
    const obj = {}
    obj.__proto__ = func.prototype
    let result = func.apply(obj, args)
    return result instanceof Object ? result : obj
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log(this.name)
}

let p = mynew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // huihui
\`\`\`

可以发现，代码虽然很短，但是能够模拟实现\`new\`
        `
      },{
        title: "JavaScript原型，原型链 ? 有什么特点？",
        desc: "面试官：说说你对JavaScript原型，原型链的理解?",
        content:`
## 一、原型

\`JavaScript\` 常被描述为一种基于原型的语言——每个对象拥有一个原型对象

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾

准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的\`prototype\`属性上，而非实例对象本身

下面举个例子：

函数可以有属性。 每个函数都有一个特殊的属性叫作原型\`prototype\` 

\`\`\`js
function doSomething(){}
console.log( doSomething.prototype );
\`\`\`

控制台输出

\`\`\`js
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
\`\`\`

上面这个对象，就是大家常说的原型对象

可以看到，原型对象有一个自有属性\`constructor\`，这个属性指向该函数，如下图关系展示

 ![](https://static.vue-js.com/56d87250-725e-11eb-ab90-d9ae814b240d.png)





## 二、原型链

原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

在对象实例和它的构造器之间建立一个链接（它是\`__proto__\`属性，是从构造函数的\`prototype\`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法

下面举个例子：

\`\`\`js
function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function() {
        console.log(this.name);
    }
}
// 第二步 创建实例
var person = new Person('person')
\`\`\`

根据代码，我们可以得到下图

 ![](https://static.vue-js.com/60825aa0-725e-11eb-85f6-6fac77c0c9b3.png)

下面分析一下：

- 构造函数\`Person\`存在原型对象\`Person.prototype\`
- 构造函数生成实例对象\`person\`，\`person\`的\`__proto__\`指向构造函数\`Person\`原型对象
- \`Person.prototype.__proto__\` 指向内置对象，因为 \`Person.prototype\` 是个对象，默认是由 \`Object \`函数作为类创建的，而 \`Object.prototype\` 为内置对象

- \`Person.__proto__\` 指向内置匿名函数 \`anonymous\`，因为 Person 是个函数对象，默认由 Function 作为类创建

- \`Function.prototype\` 和 \`Function.__proto__ \`同时指向内置匿名函数 \`anonymous\`，这样原型链的终点就是 \`null\`



## 三、总结

下面首先要看几个概念：

\`__proto__\`作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的

 ![](https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png)

每个对象的\`__proto__\`都是指向它的构造函数的原型对象\`prototype\`的

\`\`\`js
person1.__proto__ === Person.prototype
\`\`\`

构造函数是一个函数对象，是通过 \`Function \`构造器产生的

\`\`\`js
Person.__proto__ === Function.prototype
\`\`\`

原型对象本身是一个普通对象，而普通对象的构造函数都是\`Object\`

\`\`\`js
Person.prototype.__proto__ === Object.prototype
\`\`\`

刚刚上面说了，所有的构造器都是函数对象，函数对象都是 \`Function \`构造产生的

\`\`\`js
Object.__proto__ === Function.prototype
\`\`\`

\`Object \`的原型对象也有\`__proto__\`属性指向\`null\`，\`null\`是原型链的顶端

\`\`\`js
Object.prototype.__proto__ === null
\`\`\`

下面作出总结：

- 一切对象都是继承自\`Object\`对象，\`Object\` 对象直接继承根源对象\` null\`

- 一切的函数对象（包括 \`Object\` 对象），都是继承自 \`Function\` 对象

- \`Object\` 对象直接继承自 \`Function\` 对象

- \`Function\`对象的\`__proto__\`会指向自己的原型对象，最终还是继承自\`Object\`对象

## 参考文献

- https://github.com/ytanck/ytanck
        `
      },{
        title: "JavaScript字符串的常用方法有哪些？",
        desc: "面试官：JavaScript字符串的常用方法有哪些？",
        content:`
## 一、操作方法

我们也可将字符串常用的操作方法归纳为增、删、改、查，需要知道字符串的特点是一旦创建了，就不可变



### 增

这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作

除了常用\`+\`以及\`\${}\`进行字符串拼接之外，还可通过\`concat\`

#### concat

用于将一个或多个字符串拼接成一个新字符串

\`\`\`js
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"
\`\`\`



### 删

这里的删的意思并不是说删除原字符串的内容，而是创建字符串的一个副本，再进行操作

常见的有：

- slice()
- substr()
- substring()

这三个方法都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数。

\`\`\`js
let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
\`\`\`



### 改

这里改的意思也不是改变原字符串，而是创建字符串的一个副本，再进行操作

常见的有：

- trim()、trimLeft()、trimRight()

- repeat()
- padStart()、padEnd()
- toLowerCase()、 toUpperCase()



#### trim()、trimLeft()、trimRight()

删除前、后或前后所有空格符，再返回新的字符串

\`\`\`js
let stringValue = " hello world ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"
\`\`\`



#### repeat()

接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果

\`\`\`js
let stringValue = "na ";
let copyResult = stringValue.repeat(2) // na na 
\`\`\`



#### padEnd()

复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件

\`\`\`js
let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, ".")); // "......foo"
\`\`\`



### toLowerCase()、 toUpperCase()

大小写转化

\`\`\`js
let stringValue = "hello world";
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLowerCase()); // "hello world"
\`\`\`



### 查

除了通过索引的方式获取字符串的值，还可通过：

- chatAt()

- indexOf()

- startWith()

- includes()

  

#### charAt()

返回给定索引位置的字符，由传给方法的整数参数指定

\`\`\`js
let message = "abcde";
console.log(message.charAt(2)); // "c"
\`\`\`



#### indexOf()

从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）

\`\`\`js
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
\`\`\`



#### startWith()、includes()

从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值

\`\`\`js
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false
\`\`\`





## 二、转换方法

### split

把字符串按照指定的分割符，拆分成数组中的每一项

\`\`\`js
let str = "12+23+34"
let arr = str.split("+") // [12,23,34]
\`\`\`



## 三、模板匹配方法

针对正则表达式，字符串设计了几个方法：

- match()
- search()
- replace()



### match()

接收一个参数，可以是一个正则表达式字符串，也可以是一个\` RegExp \`对象，返回数组

\`\`\`js
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches[0]); // "cat"
\`\`\`



### search()

接收一个参数，可以是一个正则表达式字符串，也可以是一个\` RegExp \`对象，找到则返回匹配索引，否则返回 -1

\`\`\`js
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1
\`\`\`



### replace()

接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）

\`\`\`js
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
\`\`\`
        `
      },{
        title: "typeof 与 instanceof 区别",
        desc: "面试官：typeof 与 instanceof 区别",
        content:`
## 一、typeof

\`typeof\` 操作符返回一个字符串，表示未经计算的操作数的类型

使用方法如下：

\`\`\`js
typeof operand
typeof(operand)
\`\`\`

\`operand\`表示对象或原始值的表达式，其类型将被返回

举个例子

\`\`\`js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
\`\`\`

从上面例子，前6个都是基础数据类型。虽然\`typeof null\`为\`object\`，但这只是\` JavaScript\` 存在的一个悠久 \`Bug\`，不代表\`null \`就是引用数据类型，并且\`null \`本身也不是对象

所以，\`null \`在 \`typeof \`之后返回的是有问题的结果，不能作为判断\` null \`的方法。如果你需要在 \`if\` 语句中判断是否为 \`null\`，直接通过\`===null\`来判断就好

同时，可以发现引用类型数据，用\`typeof\`来判断的话，除了\`function\`会被识别出来之外，其余的都输出\`object\`

如果我们想要判断一个变量是否存在，可以使用\`typeof\`：(不能使用\`if(a)\`， 若\`a\`未声明，则报错)

\`\`\`js
if(typeof a != 'undefined'){
    //变量存在
}
\`\`\`



## 二、instanceof

\`instanceof\` 运算符用于检测构造函数的 \`prototype\` 属性是否出现在某个实例对象的原型链上

使用如下：

\`\`\`js
object instanceof constructor
\`\`\`

\`object\`为实例对象，\`constructor\`为构造函数

构造函数通过\`new\`可以实例对象，\`instanceof \`能判断这个对象是否是之前那个构造函数生成的对象

\`\`\`js
// 定义构建函数
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
\`\`\`

关于\`instanceof\`的实现原理，可以参考下面：

\`\`\`js
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if(typeof left !== 'object' || left === null) return false;
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
    while(true) {                  
        if(proto === null) return false;
        if(proto === right.prototype) return true;//找到相同原型对象，返回true
        proto = Object.getPrototypeof(proto);
    }
}
\`\`\`

也就是顺着原型链去找，直到找到相同的原型对象，返回\`true\`，否则为\`false\`



## 三、区别

\`typeof\`与\`instanceof\`都是判断数据类型的方法，区别如下：

- \`typeof\`会返回一个变量的基本类型，\`instanceof\`返回的是一个布尔值

- \`instanceof\` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而\` typeof\` 也存在弊端，它虽然可以判断基础数据类型（\`null\` 除外），但是引用数据类型中，除了\` function\` 类型以外，其他的也无法判断

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求

如果需要通用检测数据类型，可以采用\`Object.prototype.toString\`，调用该方法，统一返回格式\`“[object Xxx]” \`的字符串

如下

\`\`\`js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
\`\`\`

了解了\`toString\`的基本用法，下面就实现一个全局通用的数据类型判断方法

\`\`\`js
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}
\`\`\`

使用如下

\`\`\`js
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
\`\`\`
        `
      },{
        title: "谈谈this对象的理解",
        desc: "面试官：谈谈this对象的理解",
        content:`
## 一、定义

函数的 \`this\` 关键字在 \`JavaScript\` 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别

在绝大多数情况下，函数的调用方式决定了 \`this\` 的值（运行时绑定）

\`this\` 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

举个例子：

\`\`\`js
function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域
    
    console.log( "baz" );
    bar(); // <-- bar的调用位置
}

function bar() {
    // 当前调用栈是：baz --> bar
    // 因此，当前调用位置在baz中
    
    console.log( "bar" );
    foo(); // <-- foo的调用位置
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    // 因此，当前调用位置在bar中
    
    console.log( "foo" );
}

baz(); // <-- baz的调用位置
\`\`\`

同时，\`this\`在函数执行过程中，\`this\`一旦被确定了，就不可以再更改

\`\`\`js
var a = 10;
var obj = {
  a: 20
}

function fn() {
  this = obj; // 修改this，运行后会报错
  console.log(this.a);
}

fn();
\`\`\`





## 二、绑定规则

根据不同的使用场合，\`this\`有不同的值，主要分为下面几种情况：

- 默认绑定
- 隐式绑定
- new绑定

- 显示绑定



### 默认绑定

全局环境中定义\`person\`函数，内部使用\`this\`关键字

\`\`\`js
var name = 'Jenny';
function person() {
    return this.name;
}
console.log(person());  //Jenny
\`\`\`

上述代码输出\`Jenny\`，原因是调用函数的对象在游览器中位\`window\`，因此\`this\`指向\`window\`，所以输出\`Jenny\`

注意：

严格模式下，不能将全局对象用于默认绑定，this会绑定到\`undefined\`，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象



### 隐式绑定

函数还可以作为某个对象的方法调用，这时\`this\`就指这个上级对象

\`\`\`js
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1
\`\`\`

这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，\`this\`指向的也只是它上一级的对象

\`\`\`js
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();
\`\`\`

上述代码中，\`this\`的上一级对象为\`b\`，\`b\`内部并没有\`a\`变量的定义，所以输出\`undefined\`

这里再举一种特殊情况

\`\`\`js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();
\`\`\`

此时\`this\`指向的是\`window\`，这里的大家需要记住，\`this\`永远指向的是最后调用它的对象，虽然\`fn\`是对象\`b\`的方法，但是\`fn\`赋值给\`j\`时候并没有执行，所以最终指向\`window\`



### new绑定

通过构建函数\`new\`关键字生成一个实例对象，此时\`this\`指向这个实例对象

\`\`\`js
function test() {
　this.x = 1;
}

var obj = new test();
obj.x // 1
\`\`\`

上述代码之所以能过输出1，是因为\`new\`关键字改变了\`this\`的指向

这里再列举一些特殊情况：

\`new\`过程遇到\`return\`一个对象，此时\`this\`指向为返回的对象

\`\`\`js
function fn()  
{  
    this.user = 'xxx';  
    return {};  
}
var a = new fn();  
console.log(a.user); //undefined
\`\`\`

如果返回一个简单类型的时候，则\`this\`指向实例对象

\`\`\`js
function fn()  
{  
    this.user = 'xxx';  
    return 1;
}
var a = new fn;  
console.log(a.user); //xxx
\`\`\`

注意的是\`null\`虽然也是对象，但是此时\`new\`仍然指向实例对象

\`\`\`js
function fn()  
{  
    this.user = 'xxx';  
    return null;
}
var a = new fn;  
console.log(a.user); //xxx
\`\`\`



### 显示修改

\`apply()、call()、bind()\`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时\`this\`指的就是这第一个参数

\`\`\`js
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(obj) // 1
\`\`\`

关于\`apply、call、bind\`三者的区别，我们后面再详细说


## 三、箭头函数

在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 \`this\` 的指向（编译时绑定）

举个例子：

\`\`\`js
const obj = {
  sayThis: () => {
    console.log(this);
  }
};

obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
const globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
\`\`\`

虽然箭头函数的\`this\`能够在编译的时候就确定了\`this\`的指向，但也需要注意一些潜在的坑

下面举个例子：

绑定事件监听

\`\`\`js
const button = document.getElementById('mngb');
button.addEventListener('click', ()=> {
    console.log(this === window) // true
    this.innerHTML = 'clicked button'
})
\`\`\`

上述可以看到，我们其实是想要\`this\`为点击的\`button\`，但此时\`this\`指向了\`window\`

包括在原型上添加方法时候，此时\`this\`指向\`window\`

\`\`\`js
Cat.prototype.sayName = () => {
    console.log(this === window) //true
    return this.name
}
const cat = new Cat('mm');
cat.sayName()
\`\`\`

同样的，箭头函数不能作为构建函数



## 四、优先级

### 隐式绑定 VS 显式绑定

\`\`\`js
function foo() {
    console.log( this.a );
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2
\`\`\`

显然，显示绑定的优先级更高

### new绑定 VS 隐式绑定

\`\`\`js
function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a ); // 2

obj1.foo.call( obj2, 3 );
console.log( obj2.a ); // 3

var bar = new obj1.foo( 4 );
console.log( obj1.a ); // 2
console.log( bar.a ); // 4
\`\`\`

可以看到，new绑定的优先级\`>\`隐式绑定

### \`new\`绑定 VS 显式绑定

因为\`new\`和\`apply、call\`无法一起使用，但硬绑定也是显式绑定的一种，可以替换测试

\`\`\`js
function foo(something) {
    this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
\`\`\`

\`bar\`被绑定到obj1上，但是\`new bar(3)\` 并没有像我们预计的那样把\`obj1.a\`修改为3。但是，\`new\`修改了绑定调用\`bar()\`中的\`this\`

我们可认为\`new\`绑定优先级\`>\`显式绑定

综上，new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

## 相关链接

- https://github.com/ytanck/ytanck
        `
      },{
        title: "npm常用命令",
        desc: "包管理工具之npm常用命令",
        content:`
## 简介

npm是跟随node一起安装的包（模块）管理器。常见的使用场景有以下几种：

* 允许用户从npm服务器下载别人编写的第三方包到本地使用。
* 允许用户从npm服务器下载并安装别人编写的命令行程序到本地使用。
* 允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用。



## 常用命令

#### 检测是否安装及版本

\`\`\`sh
npm -v # 显示版本号说明已经安装相应的版本
\`\`\`

#### 生成package.json文件

\`\`\`sh
npm init
\`\`\`

> package.json用来描述项目中用到的模块和其他信息

#### 安装模块

\`\`\`sh
npm install # 安装package.json定义好的模块，简写 npm i

# 安装包指定模块
npm i <ModuleName>

# 全局安装
npm i <ModuleName> -g 

# 安装包的同时，将信息写入到package.json中的 dependencies 配置中
npm i <ModuleName> --save

# 安装包的同时，将信息写入到package.json中的 devDependencies 配置中
npm i <ModuleName> --save-dev

# 安装多模块
npm i <ModuleName1> <ModuleName2>

# 安装方式参数：
-save # 简写-S，加入到生产依赖中
-save-dev # 简写-D，加入到开发依赖中
-g # 全局安装 将安装包放在 /usr/local 下或者你 node 的安装目录
\`\`\`

#### 查看

\`\`\`sh
# 查看所有全局安装的包
npm ls -g

# 查看本地项目中安装的包
npm ls

# 查看包的 package.json文件
npm view <ModuleName>

# 查看包的依赖关系
npm view <ModuleName> dependencies

# 查看包的源文件地址
npm view <ModuleName> repository.url

# 查看包所依赖的node版本
npm view <ModuleName> engines

# 查看帮助
npm help
\`\`\`

#### 更新模块

\`\`\`sh
# 更新本地模块
npm update <ModuleName>

# 更新全局模块
npm update -g <ModuleName> # 更新全局软件包。
npm update -g # 更新所有的全局软件包。
npm outdated -g --depth=0 # 找出需要更新的包。
\`\`\`

#### 卸载模块

\`\`\`sh
# 卸载本地模块
npm uninstall <ModuleName>

# 卸载全局模块
npm uninstall -g <ModuleName> # 卸载全局软件包。
\`\`\`

#### 清空缓存

\`\`\`sh
# 清空npm缓存
npm cache clear
\`\`\`

#### 使用淘宝镜像

\`\`\`sh
# 使用淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
\`\`\`

#### 其他

\`\`\`sh
# 更改包内容后进行重建
npm rebuild <ModuleName>

# 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
npm outdated

# 访问npm的json文件，此命令将会打开一个网页
npm help json

# 发布一个包的时候，需要检验某个包名是否存在
npm search <ModuleName>

# 撤销自己发布过的某个版本代码
npm unpublish <package> <version>
\`\`\`



## 使用技巧

#### 多次安装不成功尝试先清除缓存

\`\`\`sh
npm cache clean -f
\`\`\`



#### 查看已安装的依赖包版本号

\`\`\`sh
npm ls <ModuleName>
\`\`\`

> 注意：用此方法才能准确的知道项目使用的版本号，查看package.json时，有“^" 符号表示大于此版本



## npm发布包教程

[npm发布包教程](https://segmentfault.com/a/1190000017461666)




## nrm的作用与使用

#### nrm是什么？

nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换



#### nrm的安装

\`\`\`sh
npm install -g nrm
\`\`\`



#### nrm命令

\`\`\`sh
nrm ls　#查看可用的源（有*号的表示当前所使用的源,以下<registry>表示源的名称）
nrm use <registry> # 将npm下载源切换成指定的源
nrm add <registry> <url> # 添加源，url为源的路径
nrm del <registry> # 删除源
nrm test <registry> # 测试源的响应时间，可以作为使用哪个源的参考

nrm help　# 查看nrm帮助
nrm home <registry>　# 跳转到指定源的官网
\`\`\`



#### nrm使用

如果在你的网络不太理想或者受到其他网络限制导致不能使用npm原本的源进行下载时，nrm就非常有用了，你只需要：

\`\`\`sh
nrm ls # 查看可用的源
nrm use <registry>　# 切换到指定源
\`\`\`

        `
      },{
        title: "Set、Map、WeakSet、WeakMap是什么?区别？",
        desc: "面试官：Set、Map、WeakSet、WeakMap是什么?有什么区别？",
        content:`
如果要用一句来描述，我们可以说
**Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构**

那什么是集合？什么又是字典呢？

- 集合

> 集合，是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合

- 字典

> 字典（dictionary）是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

那么集合和字典又有什么区别呢？

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储

## 背景

大多数主流编程语言都有多种内置的数据集合。例如\`Python\`拥有列表（\`list\`）、元组（\`tuple\`）和字典（\`dictionary\`）,Java有列表（\`list\`）、集合（\`set\`)、队列（\`queue\`）

然而  \`JavaScript\` 直到\`ES6\`的发布之前，只拥有数组（\`array\`）和对象（\`object\`）这两个内建的数据集合

在 \`ES6\` 之前,我们通常使用内置的 \`Object\` 模拟Map

但是这样模拟出来的\`map\`会有一些缺陷，如下:

1. \`Object\`的属性键是\`String\`或\`Symbol\`，这限制了它们作为不同数据类型的键/值对集合的能力
2. \`Object\`不是设计来作为一种数据集合，因此没有直接有效的方法来确定对象具有多少属性

## Set

> 定义: \`Set\` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用，\`Set\`对象是值的集合，你可以按照插入的顺序迭代它的元素。 \`Set\`中的元素只会出现一次，即 \`Set\` 中的元素是唯一的

\`Set\`本身是一个构造函数，用来生成 \`Set\` 数据结构

### 基本使用

- 语法  
\`new Set([iterable])\` 接收一个数组（或者具有 iterable 接口的其他数据结构）, 返回一个新的\`Set\`对象

\`\`\`js
const set = new Set([1,2,1,2])
console.log(set) // {1,2} 
\`\`\`
上面代码可以看出 \`Set\` 是可以去除数组中的重复元素

### 属性及方法

**属性**
- size: 返回集合中所包含的元素的数量
\`\`\`js
console.log(new Set([1,2,1,2]).size) // 2
\`\`\`
**操作方法**
- add(value): 向集合中添加一个新的项
- delete(value): 从集合中删除一个值
- has(value): 如果值在集合中存在，返回ture, 否则返回false
- clear(): 移除集合中的所有项

\`\`\`js
let set = new Set()
set.add(1)
set.add(2)
set.add(2)
set.add(3)
console.log(set) // {1,2,3}
set.has(2) // true
set.delete(2)  
set.has(2) // false
set.clear() 
\`\`\`

**遍历方法**
- keys(): 返回键名的遍历器
- values(): 返回键值的遍历器
- entries(): 返回键值对的遍历器
- forEach(): 使用回调函数遍历每个成员

\`\`\`js
let set = new Set([1,2,3,4])

// 由于set只有键值，没有键名，所以keys() values()行为完全一致
console.log(Array.from(set.keys())) // [1,2,3,4]
console.log(Array.from(set.values())) // [1,2,3,4]
console.log(Array.from(set.entries())) //  [[1,1],[2,2],[3,3],[4,4]]

set.forEach((item) => { console.log(item)}) // 1,2,3,4

\`\`\`

### 应用场景
因为 \`Set\` 结构的值是唯一的，我们可以很轻松的实现以下
\`\`\`js
// 数组去重
let arr = [1, 1, 2, 3];
let unique = [... new Set(arr)];

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
    
// 并集
let union = [...new Set([...a, ...b])]; // [1,2,3,4]
    
// 交集
let intersect = [...new Set([...a].filter(x => b.has(x)))]; [2,3]
    
// 差集
let difference = Array.from(new Set([...a].filter(x => !b.has(x)))); [1]
\`\`\`

## WeakSet

> WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在WeakSet的集合中是唯一的

\`WeakSet\` 的出现主要解决弱引用对象存储的场景, 其结构与\`Set\`类似

与\`Set\`的区别
- 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值
- WeakSet集合中对象的引用为弱引用。 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着WeakSet中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的

\`WeakSet\` 的属性跟操作方法与 \`Set\` 一致，不同的是 \`WeakSet\` 没有遍历方法，因为其成员都是弱引用，弱引用随时都会消失，遍历机制无法保证成员的存在

**上面一直有提到弱引用，那弱引用到底是指什么呢？**

> 弱引用是指不能确保其引用的对象不会被垃圾回收器回收的引用，换句话说就是可能在任意时间被回收

## Map

> Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组

### 基本使用
- 语法  

\`new Map([iterable])\` \`Iterable\` 可以是一个数组或者其他 \`iterable\` 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。 每个键值对都会添加到新的 \`Map\`

\`\`\`js
let map = new Map()
map.set('name', 'vuejs.cn');
console.log(map.get('name'))
\`\`\`
### 属性及方法

基本跟 \`Set\` 类似，同样具有如下方法
**属性**
- size: 返回 Map 结构的元素总数
\`\`\`js
let map = new Map()
map.set('name', 'vuejs.cn');
console.log(map.size) // 1

console.log(new Map([['name','vue3js.cn'], ['age','18']]).size) // 2
\`\`\`
**操作方法**
- set(key, value): 向 Map 中加入或更新键值对
- get(key): 读取 key 对用的值，如果没有，返回 undefined
- has(key): 某个键是否在 Map 对象中，在返回 true 否则返回 false
- delete(key): 删除某个键，返回 true, 如果删除失败返回 false
- clear(): 删除所有元素

\`\`\`js
let map = new Map()
map.set('name','vue3js.cn')
map.set('age','18')
console.log(map) // Map {"name" => "vuejs.cn", "age" => "18"}
map.get('name') // vue3js.cn 
map.has('name') // true
map.delete('name')  
map.has(name) // false
map.clear() // Map {} 
\`\`\`
**遍历方法**
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

\`\`\`js
let map = new Map()
map.set('name','vue3js.cn')
map.set('age','18')

console.log([...map.keys()])  // ["name", "age"]
console.log([...map.values()])  // ["vue3js.cn", "18"]
console.log([...map.entries()]) // [['name','vue3js.cn'], ['age','18']]

// name vuejs.cn
// age 18
map.forEach((value, key) => { console.log(key, value)}) 
\`\`\`

### 应用场景
\`Map\` 会保留所有元素的顺序, 是在基于可迭代的基础上构建的，如果考虑到元素迭代或顺序保留或键值类型丰富的情况下都可以使用，下面摘抄自 \`vue3\` 源码中依赖收集的核心实现

\`\`\`js
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect)
    activeEffect.deps.push(dep)
    ...
  }
\`\`\`

## WeakMap

> WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的

与\`Map\`的区别
- Map 的键可以是任意类型，WeakMap 的键只能是对象类型 
- WeakMap 键名所指向的对象，不计入垃圾回收机制

\`WeakMap\` 的属性跟操作方法与 \`Map\` 一致，同 \`WeakSet\` 一样，因为是弱引用，所以 \`WeakSet\` 也没有遍历方法

## 类型的转换

- \`Map\` 转为 \`Array\`
\`\`\`js
// 解构
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log([...map])	// [[1, 1], [2, 2], [3, 3]]

// Array.from()
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log(Array.from(map))	// [[1, 1], [2, 2], [3, 3]]
\`\`\`
- \`Array\` 转为 \`Map\`
\`\`\`js
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log(map)	// Map {1 => 1, 2 => 2, 3 => 3}
\`\`\`
- \`Map\` 转为 \`Object\`
\`\`\`js
// 非字符串键名会被转换为字符串
function mapToObj(map) {
    let obj = Object.create(null)
    for (let [key, value] of map) {
        obj[key] = value
    }
    return obj
}
const map = new Map().set('name', 'vue3js.cn').set('age', '18')
mapToObj(map)  // {name: "vue3js.cn", age: "18"}
\`\`\`
- \`Object\` 转为 \`Map\`
\`\`\`js
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj))
\`\`\`

## 总结
- Set、Map、WeakSet、WeakMap、都是一种集合的数据结构
- Set、WeakSet 是[值,值]的集合，且具有唯一性 
- Map 和 WeakMap 是一种[键,值]的集合，Map 的键可以是任意类型，WeakMap 的键只能是对象类型
- Set 和 Map 有遍历方法，WeakSet 和 WeakMap 属于弱引用不可遍历

        `
      },{
        title: "JS数字精度丢失的问题",
        desc: "",
        content:`
## 一、场景复现
> JS数字精度丢失的一些常见问题
\`\`\`js
// 加法 =====================
0.1 + 0.2 === 0.3 // false
0.1 + 0.2 = 0.30000000000000004
0.7 + 0.1 = 0.7999999999999999
0.2 + 0.4 = 0.6000000000000001

// 减法 =====================
1.5 - 1.2 = 0.30000000000000004
0.3 - 0.2 = 0.09999999999999998
 
// 乘法 =====================
19.9 * 100 = 1989.9999999999998
0.8 * 3 = 2.4000000000000004
35.41 * 100 = 3540.9999999999995

// 除法 =====================
0.3 / 0.1 = 2.9999999999999996
0.69 / 10 = 0.06899999999999999
\`\`\`

为什么0.1 + 0.2 === 0.3是false呢?

先看下面这个比喻

比如一个数 1÷3=0.33333333......

3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题

> 再看js里保留小数位tofixed()对于小数最后一位为5时进位不正确的问题

\`\`\`js
1.35.toFixed(1) // 1.4 正确
1.335.toFixed(2) // 1.33  错误
1.3335.toFixed(3) // 1.333 错误
1.33335.toFixed(4) // 1.3334 正确
1.333335.toFixed(5)  // 1.33333 错误
1.3333335.toFixed(6) // 1.333333 错误
\`\`\`
可以看到，小数点位数为2，5时四舍五入是正确的，其它是错误。

**根本原因还是计算机里浮点数精度丢失的问题**

如：1.005.toFixed(2) 返回的是 1.00 而不是 1.01。

原因： 1.005 实际对应的数字是 1.00499999999999989，在四舍五入时全部被舍去

\`\`\`js
1.005.toPrecision(21) //1.00499999999999989342
\`\`\`

## 二、浮点数

“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储

我们也可以理解成，浮点数就是小数

在JavaScript中，现在主流的数值类型是Number，而Number采用的是IEEE754规范中64位双精度浮点数编码

这样的存储结构优点是可以归一化处理整数和小数，节省存储空间

对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了

而计算机只能用二进制（0或1）表示，二进制转换为科学记数法的公式如下：


其中，a的值为0或者1，e为小数点移动的位置

举个例子：

27.0转化成二进制为11011.0 ，科学计数法表示为：

![Alt text](https://camo.githubusercontent.com/12f207d2ee94ded7dfaaf7e7ca89966aae123735bbe544e411f7df3e63b0b1f8/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f31623462313632302d383666342d313165622d616239302d6439616538313462323430642e706e67)

其中，a的值为0或者1，e为小数点移动的位置

举个例子：

27.0转化成二进制为11011.0 ，科学计数法表示为：

![Alt text](https://camo.githubusercontent.com/c8ece8a9c352fe775bd4152606a148caf8b4de664e4fbc0d3d046bf492db8647/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f33373030373039302d383666342d313165622d616239302d6439616538313462323430642e706e67)

前面讲到，javaScript存储方式是双精度浮点数，其长度为8个字节，即64位比特

64位比特又可分为三个部分：

符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数
指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023
尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零
如下图所示：

![Alt text](https://camo.githubusercontent.com/f19ec5ac0b29d0362429db14f835d79fef3fb569bd0e9cae6e57229aa8e3ba5c/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f34333064303130302d383666342d313165622d383566362d3666616337376330633962332e706e67)

举个例子：

27.5 转换为二进制11011.1

11011.1转换为科学记数法 [公式]

符号位为1(正数)，指数位为4+，1023+4，即1027

因为它是十进制的需要转换为二进制，即 10000000011，小数部分为10111，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`

所以27.5存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示

0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`

## 二、问题分析
再回到问题上
\`\`\`js
0.1 + 0.2 === 0.3 // false
0.1 + 0.2 = 0.30000000000000004
\`\`\`

通过上面的学习，我们知道，在javascript语言中，0.1 和 0.2 都需要先将十进制转化成二进制后再进行运算

\`\`\`js
// 0.1 和 0.2 都转化成二进制后再进行运算
0.00011001100110011001100110011001100110011001100110011010 +
0.0011001100110011001100110011001100110011001100110011010 =
0.0100110011001100110011001100110011001100110011001100111

// 转成十进制正好是 0.30000000000000004
\`\`\`
所以输出false

再来一个问题，那么为什么x=0.1得到0.1？

主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是2^53=9007199254740992，对应科学计数尾数是 9.007199254740992，这也是 JS 最多能表示的精度

它的长度是 16，所以可以使用 toPrecision(16) 来做精度运算，超过的精度会自动做凑整处理

\`\`\`js
.10000000000000000555.toPrecision(16)
// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1
\`\`\`
但看到的 0.1 实际上并不是 0.1。不信你可用更高的精度试试：
\`\`\`js
0.1.toPrecision(21) = 0.100000000000000005551
\`\`\`
如果整数大于 9007199254740992 会出现什么情况呢？

由于指数位最大值是1023，所以最大可以表示的整数是 2^1024 - 1，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 2^1024 开始就变成了 Infinity
\`\`\`js
> Math.pow(2, 1023)
8.98846567431158e+307

> Math.pow(2, 1024)
Infinity
\`\`\`
那么对于 (2^53, 2^63) 之间的数会出现什么情况呢？

- (2^53, 2^54) 之间的数会两个选一个，只能精确表示偶数
- (2^54, 2^55) 之间的数会四个选一个，只能精确表示4个倍数
- ... 依次跳过更多2的倍数

要想解决大数的问题你可以引用第三方库 bignumber.js，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多

### 小结
计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差

## 三、解决方案
理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果

当你拿到 1.4000000000000001 这样的数据要展示时，建议使用 toPrecision 凑整并 parseFloat 转成数字后再显示，如下：
\`\`\`js
parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True
\`\`\`
封装成方法就是：
\`\`\`js
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
\`\`\`
对于运算类操作，如 +-*/，就不能使用 toPrecision 了。正确的做法是把小数转成整数后再运算(先扩大再缩小法)。

以加法为例：
\`\`\`js
/**
 * 精确加法
 */
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
\`\`\`
以toFixed()为例
\`\`\`js
//先扩大再缩小法 
function toFixed(num, s) {
    var times = Math.pow(10, s)
    // 0.5 为了舍入
    var des = num * times + 0.5
    // 去除小数
    des = parseInt(des, 10) / times
    return des + ''
}
console.log(toFixed(1.333332, 5))
\`\`\`
最后还可以使用第三方库，如Math.js、BigDecimal.js

        `
      },{
        title: "如何检测元素是否出现在可视窗口",
        desc: "",
        content:`
# 使用Intersection Observer API 检测元素是否出现在可视窗口
## API解读：

Intersection Observer API提供了一种**异步**检测目标元素与祖先元素或视口(可统称为根元素)相交情况变化的方法。

注意点：因为该 API 是**异步**的，它不会随着目标元素的滚动同步触发，而IntersectionObserver API是通过requestIdleCallback()实现，即只有浏览器空闲下来，才会执行观察器。

## Intersection observer 的重要概念
Intersection observer API 有以下五个重要的概念：

- 目标(target)元素 --- 我们要监听的元素
- 根(root)元素 --- 帮助我们判断目标元素是否符合条件的元素
- 以下两种情况根元素会默认为顶级文档的视口(一般为 html)。
- - 目标元素不是可滚动元素的后代且不传值时
- - 指定根元素为 null
- 交叉比(intersection ratio)---目标元素与根根的交集相对于目标元素百分比的表示(取值范围 0.0-1.0)。
- 阈值(threshold) --- 回调函数触发的条件。
- 回调函数(callback) --- 为该 API 配置的函数，会在设定的条件下触发。


### 用法

是以\`new\`的形式声明一个对象，接收两个参数\`callback\`和\`options\`
\`\`\`js
const io = new IntersectionObserver(callback [,options])

io.observe(DOM)
\`\`\`

### callback
callback是添加监听后，当监听目标发生滚动变化时触发的回调函数。接收一个参数entries，即IntersectionObserverEntry实例。描述了目标元素与root的交叉状态。具体参数如下：


| 属性 | 说明 |
| ----------- | ----------- |
| boundingClientRect | 返回包含目标元素的边界信息，返回结果与element.getBoundingClientRect() 相同
| **intersectionRatio** | 返回目标元素出现在可视区的比例
| intersectionRect| 用来描述root和目标元素的相交区域
| **isIntersecting** | 返回一个布尔值，下列两种操作均会触发callback：1. 如果目标元素出现在root可视区，返回true。2. 如果从root可视区消失，返回false
| rootBounds | 用来描述交叉区域观察者(intersection observer)中的根.
| target | 目标元素：与根出现相交区域改变的元素 (Element)
| time | 返回一个记录从 IntersectionObserver 的时间原点到交叉被触发的时间的时间戳

表格中加粗的两个属性是比较常用的判断条件：isIntersecting(是否出现在可视区)和intersectionRatio(出现在可视区的比例)

### options
options是一个对象，用来配置参数，也可以不填。共有三个属性，具体如下：

| 属性 | 说明 |
| ----------- | ----------- |
| root | 所监听对象的具体祖先元素。如果未传入值或值为null，则默认使用顶级文档的视窗(一般为html)。
| rootMargin | 计算交叉时添加到根(root)边界盒bounding box的矩形偏移量， 可以有效的缩小或扩大根的判定范围从而满足计算需要。所有的偏移量均可用像素(px)或百分比(%)来表达, 默认值为"0px 0px 0px 0px"。
| threshold | 一个包含阈值的列表, 按升序排列, 列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。当监听对象的任何阈值被越过时，都会触发callback。默认值为0。

### 方法

介绍了这么多配置项及参数，差点忘了最重要的，IntersectionObserver有哪些方法？ 如果要监听某些元素，则必须要对该元素执行一下observe


| 方法 | 说明 |
| ----------- | ----------- |
| observe() | 开始监听一个目标元素
| unobserve() | 停止监听特定目标元素
| takeRecords() | 返回所有观察目标的IntersectionObserverEntry对象数组
| disconnect() | 使IntersectionObserver对象停止全部监听工作

### 实际应用
- 图片懒加载
\`\`\`js
const imgList = [...document.querySelectorAll('img')]

var io = new IntersectionObserver((entries) =>{
  entries.forEach(item => {
    // isIntersecting是一个Boolean值，判断目标元素当前是否可见
    if (item.isIntersecting) {
      item.target.src = item.target.dataset.src
      // 图片加载后即停止监听该元素
      io.unobserve(item.target)
    }
  })
})
// observe遍历监听所有img节点
imgList.forEach(img => io.observe(img))
\`\`\`
- 埋点曝光

假如有个需求，对一个页面中的特定元素，只有在其完全显示在可视区内时进行埋点曝光。
\`\`\`js
const boxList = [...document.querySelectorAll('li')]

var io = new IntersectionObserver((entries) =>{
  entries.forEach(item => {
    // intersectionRatio === 1说明该元素完全暴露出来，符合业务需求
    if (item.intersectionRatio === 1) {
      // 。。。 埋点曝光代码
      // do something...
      io.unobserve(item.target)
    }
  })
}, {
  root: null,
  threshold: 1, // 阀值设为1，当只有比例达到1时才触发回调函数
})

// observe遍历监听所有box节点
boxList.forEach(item => io.observe(item))

\`\`\`

- demo:

大家可以在自己电脑运行一下下面的代码，会有更深的理解。
\`\`\`js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IntersectionObserver</title>
    <style>
      li {
        width: 200px;
        height: 400px;
        border: 1px solid gray;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>1-aaa</li>
      <li>2-bbb</li>
      <li>3i-ccc</li>
      <li>4i</li>
      <li>5i</li>
      <li>6i</li>
      <li>7i</li>
      <li>8i</li>
      <li>9i</li>
      <li>10i</li>
      <li>l1</li>
      <li>l2</li>
      <li>l3</li>
      <li>l4</li>
      <li>l5</li>
      <li>l6</li>
      <li>l7</li>
      <li>l8</li>
      <li>l9</li>
      <li>10</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul>
    <script>
      const imgList = [...document.querySelectorAll("li")];
      const options = {
        root: null,
        rootMargin: "1px",
        thresholds: 1,
      };
      //io 为 IntersectionObserver对象 - 由IntersectionObserver()构造器创建
      const io = new IntersectionObserver((entries) => {
        //entries 为 IntersectionObserverEntry对像数组
        entries.forEach((item) => {
          //item 为 IntersectionObserverEntry对像
          // item.isIntersecting是一个Boolean值，判断目标元素当前是否可见
          if (item.isIntersecting) {
            console.log(item);
            // item.target.src = item.target.dataset.src;
            // li加载后即停止监听该元素
            io.unobserve(item.target);
          }
          // intersectionRatio === 1说明该元素完全暴露出来
          // if (item.intersectionRatio === 1) {
          //   埋点曝光代码
          //   do something...
          //   停止监听该元素
          //   io.unobserve(item.target);
          // }
        });
      }, options); //不传options参数，默认根元素为浏览器视口
      // observe遍历监听所有li节点
      imgList.forEach((li) => io.observe(li));
    </script>
  </body>
</html>

\`\`\`
# 关于如何判断元素是否在可视区域内的其他方法

![本地路径](https://xiaojinhe-cdn.iyoudui.cn/upload/common/20231026/img1026.png) 

### 第一种方法：offsetTop、scrollTop

公式: el.offsetTop - document.documentElement.scrollTop <= viewPortHeight

\`\`\`js
function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    console.log('top', top)
     // 这里有个+100是为了提前加载+ 100
    return top <= viewPortHeight + 100
}

\`\`\`
### 第二种方法：getBoundingClientRect
- 返回值是一个 DOMRect 对象，拥有 left, top, right, bottom, x, y, width, 和 height 属性

公式: el.getBoundingClientReact().top <= viewPortHeight

其实, el.offsetTop - document.documentElement.scrollTop =  el.getBoundingClientRect().top, 利用这点，我们可以用下面代码代替方法一
\`\`\`js
function isInViewPortOfTwo (el) {
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
    console.log('top', top)
    return top  <= viewPortHeight + 100
}

\`\`\`
        `
      },{
        title: "JS 前端常用工具方法",
        desc: "",
        content:`
## JS 前端常用工具方法

邮箱验证

\`\`\`js
export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};
\`\`\`

手机号码

\`\`\`js
export const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s);
};
\`\`\`

电话号码

\`\`\`js
export const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
\`\`\`

是否 url 地址

\`\`\`js
export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s);
};
\`\`\`

是否字符串

\`\`\`js
export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
};
\`\`\`

数据类型检测

\`\`\`js
Object.prototype.toString
  .call(data)
  .replace(/\[object (\w+)\]/, "$1")
  .toLowerCase();
\`\`\`

打乱数组

\`\`\`js
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
\`\`\`

是否函数

\`\`\`js
export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};
\`\`\`

是否错误对象

\`\`\`js
export const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Error";
};
\`\`\`

是否是微信浏览器

\`\`\`js
export const isWeiXin = () => {
  return ua.match(/microMessenger/i) == "micromessenger";
};
\`\`\`

是否是移动端

\`\`\`js
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua);
};
\`\`\`

是否是 QQ 浏览器

\`\`\`js
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};
\`\`\`

是否是爬虫

\`\`\`js
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua
  );
};
\`\`\`

是否 ios

\`\`\`js
export const isIos = () => {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false;
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true;
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false;
  } else if (u.indexOf("Windows Phone") > -1) {
    //winphone手机
    return false;
  } else {
    return false;
  }
};
\`\`\`

是否为 PC 端

\`\`\`js
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
\`\`\`

去除 html 标签

\`\`\`js
export const removeHtmltag = (str) => {
  return str.replace(/<[^>]+>/g, "");
};
\`\`\`

获取 url 参数

\`\`\`js
export const getQueryString = (name) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const search = window.location.search.split("?")[1] || "";
  const r = search.match(reg) || [];
  return r[2];
};
\`\`\`

动态引入 js

\`\`\`js
export const injectScript = (src) => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
};
\`\`\`

el 是否包含某个 class

\`\`\`js
export const hasClass = (el, className) => {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
};
\`\`\`

获取滚动的坐标

\`\`\`js
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
\`\`\`

滚动到顶部

\`\`\`js
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
// window.scrollTo(0,0)
\`\`\`

el 是否在视口范围内

\`\`\`js
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
\`\`\`

洗牌算法随机

\`\`\`js
export const shuffle = (arr) => {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};
\`\`\`

判断类型集合

\`\`\`js
export const checkStr = (str, type) => {
  switch (type) {
    case "phone": //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case "tel": //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case "card": //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case "pwd": //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case "postal": //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case "QQ": //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case "money": //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case "URL": //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      );
    case "IP": //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      );
    case "date": //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case "number": //数字
      return /^[0-9]$/.test(str);
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str);
    case "chinese": //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case "lower": //小写
      return /^[a-z]+$/.test(str);
    case "upper": //大写
      return /^[A-Z]+$/.test(str);
    case "HTML": //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};
\`\`\`

严格的身份证校验

\`\`\`js
export const isCardID = (sId) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log("你输入的身份证长度或格式错误");
    return false;
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log("你的身份证地区非法");
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.substr(6, 4) +
      "-" +
      Number(sId.substr(10, 2)) +
      "-" +
      Number(sId.substr(12, 2))
    ).replace(/-/g, "/"),
    d = new Date(sBirthday);
  if (
    sBirthday !=
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
  ) {
    console.log("身份证上的出生日期非法");
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432";
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log("你输入的身份证号非法");
    return false;
  }

  return true;
};
\`\`\`

将阿拉伯数字翻译成中文的大写数字

\`\`\`js
export const numberToChinese = (num) => {
  var AA = new Array(
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十"
  );
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];
    for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
  }
  if (re == "一十") re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
};
\`\`\`

将数字转换为大写金额

\`\`\`js
export const changeToChinese = (Num) => {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  }
  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”
  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格
  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符
  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(Num).split(".");
  var newchar = "";
  //小数点前进行转化
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return "";
      //若数量超过拾亿单位，提示
    }
    var tmpnewchar = "";
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;
      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;
      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;
      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;
      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;
      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;
      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;
      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;
      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;
      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  //小数点之后进行转化
  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  }
  //替换所有无用汉字
  while (newchar.search("零零") != -1) newchar = newchar.replace("零零", "零");
  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");
  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }
  return newchar;
};
\`\`\`

数组去重

\`\`\`js
export const unique = (arr) => {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
};
\`\`\`

求两个集合的并集

\`\`\`js
export const union = (a, b) => {
  var newArr = a.concat(b);
  return this.unique(newArr);
};
\`\`\`

求两个集合的交集

\`\`\`js
export const intersect = (a, b) => {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function (o) {
    return _this.contains(b, o) ? o : null;
  });
};
\`\`\`

将类数组转换为数组

\`\`\`js
export const formArray = (ary) => {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }
  return arr;
};
\`\`\`

检测密码强度

\`\`\`js
export const checkPwd = (str) => {
  var Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};
\`\`\`

节流

\`\`\`js
//节流：单位时间内—只响应第一次
// 时间戳版
var throttle = (fn, timer = 500) => {
  let preTime = 0;
  return function () {
    var nowTime = new Date().getTime();
    if (nowTime - preTime > timer) {
      // fn.apply(this, arguments);
      fn.call(this, ...arguments);
      preTime = nowTime;
    }
  };
};
// 定时器版
function throttle(func, wait) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function(){
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

\`\`\`
防抖
\`\`\`js
//防抖：单位时间内-只响应最后一次
// 延时执行
function debounce(func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
// 立即防抖(先执行一遍)
  function debounce(func, delay) {
    var timer = null
    return function () {
      if (timer) clearTimeout(timer)
      var callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) func(...arguments)
    }
  }

\`\`\`

判断两个对象是否键值相同

\`\`\`js
export const isObjectEqual = (a, b) => {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};
\`\`\`

16 进制颜色转 RGBRGBA 字符串

\`\`\`js
export const colorToRGB = (val, opa) => {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = typeof opa == "number"; //判断是否有设置不透明度

  if (!pattern.test(val)) {
    //如果值不符合规则返回空字符
    return "";
  }

  var v = val.replace(/#/, ""); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = "";

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr =
    "rgb" + (isOpa ? "a" : "") + "(" + rgbStr + (isOpa ? "," + opa : "") + ")";
  return rgbStr;
};
\`\`\`

生成随机颜色

\`\`\`js
/*随机获取颜色*/
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
  //return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
\`\`\`

颜色 RGB 转 16 进制

\`\`\`js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff
\`\`\`

计算 2 个日期之间相差多少天

\`\`\`js
const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result: 366
\`\`\`

校验数组是否为空

\`\`\`js
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);
// Result: true
\`\`\`

检验车牌号

\`\`\`js
isCarNum(val) {
  var patrn = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
  var patrn2 = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
  if (!patrn.test(val) && !patrn2.test(val)) {
    return false;
  } else {
    return true;
  }
},
\`\`\`

        `
      },{
        title: "数组如何去重？性能对比",
        desc: "面试官：数组如何去重？区别？",
        content:`
# 多种数组去重性能对比

## 测试模板

\`\`\`js
// 创建一个 1 ~ 10w 的数组，Array.from为ES6语法
let arr1 = Array.from(new Array(1000000), (x, index) => { 
  return index
})

let arr2 = Array.from(new Array(500000), (x, index) => {
  return index + index
})

let start = new Date().getTime()
console.log('开始数组去重')

// 数组去重
function distinct(a, b) {
  let arr = a.concat(b);
  // 去重方法
}



console.log('去重后的长度', distinct(arr1, arr2).length)
let end = new Date().getTime()
console.log('耗时', end - start + 'ms')
\`\`\`



## 测试代码

\`\`\`js
// 创建一个 1 ~ 10w 的数组，Array.from为ES6语法
let arr1 = Array.from(new Array(1000000), (x, index) => { 
  return index
})

let arr2 = Array.from(new Array(500000), (x, index) => {
  return index + index
})

let start = new Date().getTime()
console.log('开始数组去重')

// 数组去重
function distinct(a, b) {
  let arr = a.concat(b);
  
  // 方法1，耗时约11675ms，约11s
  // return arr.filter((item, index) => {
  //   return arr.indexOf(item) === index
  // })

  // 方法2，耗时约22851ms，约22s，性能最差
  // for (let i = 0, len = arr.length; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (arr[i] == arr[j]) {
  //       arr.splice(j, 1);
  //       // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
  //       len--;
  //       j--;
  //     }
  //   }
  // }
  // return arr

  //方法3，耗时约12789ms，约12s，和方法1相当
  // let result = []
  // for (let i of arr) {
  //   !result.includes(i) && result.push(i)
  // }
  // return result

  //方法4，耗时约23ms，ES5标准中性能最高
  // arr = arr.sort()
  // let result = [arr[0]]
  // for (let i = 1, len = arr.length; i < len; i++) {
  //   arr[i] !== arr[i - 1] && result.push(arr[i])
  // }
  // return result

  // 方法5，ES6的Set数据结构，耗时约20ms，性能高，代码简洁
  // return Array.from(new Set([...a, ...b]))

  // 方法6，耗时约16ms，所有方法中 性能最高！ (千万级数据量下效率比方法5高4倍，for...of 为ES6语法)
  let result = []
  let obj = {}
  for (let i of arr) {
    if (!obj[i]) {
      result.push(i)
      obj[i] = 1
    }
  }
  return result

}



console.log('去重后的长度', distinct(arr1, arr2).length)
let end = new Date().getTime()
console.log('耗时', end - start + 'ms')
\`\`\`



## 结论

ES5标准中性能最高的数组去重方法为:

\`\`\`js
// 耗时约23ms
arr = arr.sort()
let result = [arr[0]]
for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] !== arr[i - 1] && result.push(arr[i])
}
return result
\`\`\`

ES6标准中性能最高的数组去重方法为:

\`\`\`js
// 耗时约16ms (千万级数据量下效率比使用Set数据结构方法高4倍，for...of 为ES6语法)
let result = []
let obj = {}
for (let i of arr) {
    if (!obj[i]) {
        result.push(i)
        obj[i] = 1
    }
}
return result
\`\`\`

代码既简洁性能又相对高的去重方法为：


\`\`\`js
// 耗时约20ms，性能高，代码简洁
return Array.from(new Set([...a, ...b]))
\`\`\`

        `
      },{
        title: "60个JS实用的代码小技巧",
        desc: "",
        content:`
JavaScript 有很多很酷的特性，大多数初学者和中级开发人员都不知道。今天分享一些，我经常在项目中使用一些技巧。

## 1. JS 为什么单线程

一个简单的原因就是，\`js\`在设计之初只是进行一些简单的表单校验，这完全不需要多线程，单线程完全可以胜任这项工作。即便后来前端发展迅速，承载的能力越来越多，也没有发展到非多线程不可的程度。

而且还有一个主要的原因，设想一下，如果\`js\`是多线程的，在运行时多个线程同时对\`DOM\`元素进行操作，那具体以哪个线程为主就是个问题了，线程的调度问题是一个比较复杂的问题。

\`HTML5\`新的标准中允许使用\`new Worker\`的方式来开启一个新的线程，去运行一段单独的\`js\`文件脚本，但是在这个新线程中严格的要求了可以使用的功能，比如说他只能使用\`ECMAScript\`, 不能访问\`DOM\`和\`BOM\`。这也就限制死了多个线程同时操作\`DOM\`元素的可能。

## 2.使用 css 写出一个三角形角标

元素宽高设置为\`0\`，通过\`border\`属性来设置，让其它三个方向的\`border\`颜色为透明或者和背景色保持一致，剩余一条\`border\`的颜色设置为需要的颜色。

\`\`\`js
div {
    width: 0;
    height: 0;
    border: 5px solid #transparent;
    border-top-color: red;
}

\`\`\`

## 3.水平垂直居中

我一般只使用两种方式\`定位\`或者\`flex\`，我觉得够用了。

\`\`\`js
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

\`\`\`

父级控制子集居中

\`\`\`js
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

\`\`\`

## 4. css 一行文本超出...

\`\`\`js
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

\`\`\`

## 5.多行文本超出显示...

\`\`\`js
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;

\`\`\`

## 6.IOS 手机容器滚动条滑动不流畅

\`\`\`js
overflow: auto;
-webkit-overflow-scrolling: touch;

\`\`\`

## 7.修改滚动条样式

隐藏\`div\`元素的滚动条

\`\`\`js
div::-webkit-scrollbar {
    display: none;
}

\`\`\`

div::-webkit-scrollbar 滚动条整体部分

div::-webkit-scrollbar-thumb 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）

div::-webkit-scrollbar-track 滚动条的轨道

div::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。

div::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分

div::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处

div::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

注意此方案有兼容性问题，一般需要隐藏滚动条时我都是用一个色块通过定位盖上去，或者将子级元素调大，父级元素使用 overflow-hidden 截掉滚动条部分。暴力且直接。

## 8.解决 ios audio 无法自动播放、循环播放的问题

\`ios\`手机在使用\`audio\`或者\`video\`播放的时候，个别机型无法实现自动播放，可使用下面的代码\`hack\`。

\`\`\`js
// 解决ios audio无法自动播放、循环播放的问题
var music = document.getElementById("video");
var state = 0;

document.addEventListener(
  "touchstart",
  function () {
    if (state == 0) {
      music.play();
      state = 1;
    }
  },
  false
);

document.addEventListener(
  "WeixinJSBridgeReady",
  function () {
    music.play();
  },
  false
);

//循环播放
music.onended = function () {
  music.load();
  music.play();
};
\`\`\`

## 9.隐藏页面元素

display-none: 元素不会占用空间，在页面中不显示，子元素也不会显示。

opacity-0: 元素透明度将为\`0\`，但元素仍然存在，绑定的事件仍旧有效仍可触发执行。

visibility-hidden：元素隐藏，但元素仍旧存在，占用空间，页面中无法触发该元素的事件。

## 10.前端工程化

一提到前端工程化很多人想到的都是\`webpack\`，这是不对的，\`webpack\`仅仅是前端工程化中的一环。在整个工程化过程中他帮我们解决了绝大多数的问题，但并没有解决所有问题。

前端工程化是通过工具提升效率，降低成本的一种手段。

近些年被广泛的关注和探讨，究其原因主要是因为现代化前端应用功能要求不断提高，业务逻辑日益复杂，作为当下互联网时代唯一不可或缺的技术，前端可以说是占据了整个开发行业的半壁江山。从传统的网站，到现在的\`H5\`,移动\`App\`,桌面应用，以及小程序。前端技术几乎是无所不能的全面覆盖。

在这些表象的背后呢，实际上是行业对开发人员的要求发生了天翻地覆的变化，以往前端写 demo，套模板，调页面这种刀耕火种的方式已经完全不符合当下对开发效率的要求，前端工程化就是在这样一个背景下被提上台面，成为前端工程师必备的手段之一。

一般来说前端工程包含，项目初始化，项目开发，提交，构建，部署，测试，监控等流程。工程化就是以工程的角度来解决这些问题。比如项目初始化我们一般使用\`npm init\`, 创建页面模板使用\`plop\`，我们喜欢使用\`ES6+\`开发，但是需要通过\`babel\`编码成\`ES5\`，持续集成的时候我们使用\`git/ci cd\`，但是为了保持开发规范我们引入了\`ESLint\`，部署一般使用\`git/cd\`或者\`jenkins\`等等。

## 11.contenteditable

\`html\`中大部分标签都是不可以编辑的，但是添加了\`contenteditable\`属性之后，标签会变成可编辑状态。

\`\`\`js
<div contenteditable="true"></div>
\`\`\`

不过通过这个属性把标签变为可编辑状态后只有\`input\`事件，没有\`change\`事件。也不能像表单一样通过\`maxlength\`控制最大长度。我也忘记我在什么情况下用到过了，后面想起来再补吧。

## 12.calc

这是一个\`css\`属性，我一般称之为\`css\`表达式。可以计算\`css\`的值。最有趣的是他可以计算不同单位的差值。很好用的一个功能，缺点是不容易阅读。接盘侠没办法一眼看出\`20px\`是啥。

\`\`\`js
div {
    width: calc(25% - 20px);
}

\`\`\`

## 13.Date 对象

获取当前时间毫秒值

\`\`\`js
// 方式一
Date.now(); // 1606381881650
// 方式二
new Date() - 0; // 1606381881650
// 方式三
new Date().getTime(); // 1606381881650
\`\`\`

创建\`Date\`对象的兼容性问题。

\`\`\`js
// window和安卓支持，ios和mac不支持
new Date("2020-11-26");
// window和安卓支持，ios和mac支持
new Date("2020/11/26");
\`\`\`

## 14.Proxy 和 Object.defineProperty 区别

\`Proxy\`的意思是代理，我一般叫他拦截器，可以拦截对象上的一个操作。用法如下，通过\`new\`的方式创建对象，第一个参数是被拦截的对象，第二个参数是对象操作的描述。实例化后返回一个新的对象，当我们对这个新的对象进行操作时就会调用我们描述中对应的方法。

\`\`\`js
new Proxy(target, {
  get(target, property) {},
  set(target, property) {},
  deleteProperty(target, property) {},
});
\`\`\`

\`Proxy\`区别于\`Object.definedProperty\`。

\`Object.defineProperty\`只能监听到属性的读写，而\`Proxy\`除读写外还可以监听属性的删除，方法的调用等。

通常情况下我们想要监视数组的变化，基本要依靠重写数组方法的方式实现，这也是\`Vue\`的实现方式，而\`Proxy\`可以直接监视数组的变化。

\`\`\`js
const list = [1, 2, 3];
const listproxy = new Proxy(list, {
  set(target, property, value) {
    target[property] = value;
    return true; // 标识设置成功
  },
});

list.push(4);
\`\`\`

\`Proxy\`是以非入侵的方式监管了对象的读写，而\`defineProperty\`需要按特定的方式定义对象的属性。

## 15.Reflect

他是\`ES2015\`新增的对象，纯静态对象也就是不能被实例画，只能通过静态方法的方式调用，和\`Math\`对象类似，只能类似\`Math.random()\`的方式调用。

\`Reflect\`内部封装了一系列对对象的底层操作，一共\`14\`个，其中\`1\`个被废弃，还剩下\`13\`个。

\`Reflect\`的静态方法和\`Proxy\`描述中的方法完全一致。也就是说\`Reflect\`成员方法就是\`Proxy\`处理对象的默认实现。

\`Proxy\`对象默认的方法就是调用了\`Reflect\`内部的处理逻辑，也就是如果我们调用\`get\`方法，那么在内部，\`Reflect\`就是将\`get\`原封不动的交给了\`Reflect\`，如下。

\`\`\`js
const proxy = new Proxy(obj, {
  get(target, property) {
    return Reflect.get(target, property);
  },
});
\`\`\`

\`Reflect\`和\`Proxy\`没有绝对的关系，我们一般将他们两个放在一起讲是为了方便对二者的理解。

那为什么会有\`Reflect\`对象呢，其实他最大的用处就是提供了一套统一操作\`Object\`的\`API\`。

判断对象是否存在某一个属性，可以使用\`in\`操作符，但是不够优雅，还可以使用\`Reflect.has(obj, name)\`; 删除一个属性可以使用\`delete\`，也可以使用\`Reflect.deleteProperty(obj, name)\`; 获取所有属性名可以使用\`Object.keys\`, 也可以使用\`Reflect.ownKeys(obj)\`; 我们更推荐使用\`Reflect\`的\`API\`来操作对象，因为他才是未来。

## 16.解析 get 参数

通过\`replace\`方法获取\`url\`中的参数键值对，可以快速解析\`get\`参数。

\`\`\`js
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
console.log(q);
\`\`\`

## 17.解析连接 url

可以通过创建\`a\`标签，给\`a\`标签赋值\`href\`属性的方式，获取\`到协议\`，\`pathname\`，\`origin\`等\`location\`对象上的属性。

\`\`\`js
// 创建a标签
const aEle = document.createElement('a');
// 给a标签赋值href路径
aEle.href = '/test.html';
// 访问aEle中的属性
aEle.protocol; // 获取协议
aEle.pathname; // 获取path
aEle.origin;
aEle.host;
aEle.search;
...

\`\`\`

## 18.localStorage

\`localStorage\`是\`H5\`提供的永久存储空间，一般最大可存储\`5M\`数据，并且支持跨域隔离，他的出现极大提高了前端开发的可能性。\`localStorage\`的使用很多人都知道\`setItem\`，\`getItem\`,\`removeItem\`, 但他也可以直接以成员的方式操作。

\`\`\`js
// 存储
localStorage.name = "yd";
// 获取
localStorage.name; // yd
// 删除
delete localStorage.name;
// 清除全部
localStorage.clear();

// 遍历
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i); // 获取本地存储的Key
  localStorage[key]; // 获取本地存储的value
}
\`\`\`

\`localStorage\`满了的情况下仍继续存储并不会覆盖其他的值，而是直接报错(\`QuotaExceededError\`)，并且当前存储的值也会被清空。浏览器支持每个域名下存储\`5M\`数据。

## 19.sessionStorage

\`sessionStorage\`和\`localStorage\`的区别是，存在当前会话，很多人理解的是浏览器关闭，这是不对的，假设你在\`A\`页面存储了\`sessionStorage\`，新开选项卡将\`A\`页面的链接粘贴进去打开页面，\`sessionStorage\`也是不存在的。

所以\`sessionStorage\`存在的条件是页面间的跳转，\`A\`页面存储了\`sessionStorage\`，他要通过\`超链接\`或者\`location.href\`或者\`window.open\`来打开另一个同域页面才能访问\`sessionStorage\`。

这一点在混合开发嵌套\`H5\`的开发模式中尤为重要，如果以新开\`webview\`的方式打开页面，很可能\`sessionStorage\`就没有了。

## 20.会话 cookie

\`cookie\`在设置的时候如果不设置过期时间，就表示是个会话\`cookie\`，以前我以为关闭浏览器会话\`cookie\`就消失了，然而...喜提\`bug\`一个。

在多数情况下\`windows\`系统或者安卓系统确实是这样的。但是在\`macOS\`系统或者\`ios\`系统中，关闭浏览器并不会清除掉会话\`cookie\`，结束浏览器进程才行。

## 21.标签模板字符串

模板字符串支持在前面添加一个函数，第一个参数是一个有固定内容组成的数组，后面参数依次为传入的变量，函数返回值为模板字符串真正展示的值。不过这个功能个人感觉没啥用。

\`\`\`js
const tag = (params, ...args) => {
  return params[0] + args[0]; // 返回值为模板字符串的真实值。
};

const str = tag\`hello \${"world"}\`;
\`\`\`

## 22.字符串常用的几个方法

### 1. includes();

字符串中是否包含某个字符串，这个不说了，其实就是\`indexOf\`的替代方案，用起来更优雅，

### 2. startsWith();

字符串是否为某个字符串开始，我一般用它判断\`url\`是否有\`http\`

### 3. endsWith();

字符串是否为某个字符串结尾。判断后缀名的时候尤其有效。

### 4. repeat(number);

得到一个重复\`number\`次的字符串。额...我也不知道什么时候有用，一般我用它造测试数据。

### 5. 'abc'.padEnd(5, '1'); // abc11;

用给定的字符串在尾部拼接到指定长度，第一个参数为长度，第二个参数为用于拼接的值。

### 6. 'abc'.padStart(5, '1'); // 11abc;

用给定的字符串在首部拼接到指定长度第一个参数为长度，第二个参数为用于拼接的值。首部补 0？

## 23.数组快速去重

应该很多人都知道这个，数组转换成\`Set\`, 再转换为数组，不过这种去重方式只能去除基本数据类型组成的数组。

\`\`\`js
const arr = [1, 2, 3, 4, 5, 6];

const arr2 = new Set(arr);

const arr3 = [...arr2];
\`\`\`

## 24.Object.keys, values, entries

一般我们常用\`Object.keys\`，返回一个对象的键组成的数组，其实还有\`Object.values\`，返回对象值组成的数组，\`Object.entries\`将对象转成数组，每个元素是键值对组成的数组，可以使用此功能快速将对象转为\`Map\`。

\`\`\`js
const obj = { name: "yd", age: 18 };

Object.keys(obj); // ['name', 'age'];

Object.values(obj); // ['yd', 18];

const l = Object.entries(obj); // [['name', 'yd'], ['age': 18]];

const m = new Map(l);
\`\`\`

## 25.Object.getOwnPropertyDescriptors

获取对象的描述信息

\`Object.assign\`复制时，将对象的属性和方法当做普通属性来复制，并不会复制完整的描述信息，比如\`this\`。

\`\`\`js
const p1 = {
  a: "y",
  b: "d",
  get name() {
    return \`\${this.a} \${this.b}\`;
  },
};
const p2 = Object.assign({}, p1);

p2.a = "z";

p2.name; // y d; 发现并没有修改p2.a的值，是因为this仍旧指向p1
\`\`\`

使用\`Object.getOwnPropertyDescriptors\`获取完整描述信息

\`\`\`js
const description = Object.getOwnPropertyDescriptors(p1);

const p2 = Object.defineProperty({}, description);

p2.a = "z";

p2.name; // z d
\`\`\`

## 26.BigInt

\`JavaScript\`可以处理的最大数字是\`2\`的\`53\`次方 \`- 1\`，这一点我们可以在\`Number.MAX_SAFE_INTEGER\`中看到。

\`\`\`js
consoel.log(Number.MAX_SAFE_INTEGER); //9007199254740991
\`\`\`

更大的数字则无法处理，\`ECMAScript2020\`引入\`BigInt\`数据类型来解决这个问题。通过把字母\`n\`放在末尾, 可以运算大数据。

\`BigInt\`可以使用算数运算符进行加、减、乘、除、余数及幂等运算。它可以由数字和十六进制或二进制字符串构造。此外它还支持\`AND\`、\`OR\`、\`NOT\`和\`XOR\`之类的按位运算。唯一无效的位运算是零填充右移运算符。

\`\`\`js
const bigNum = 100000000000000000000000000000n;
console.log(bigNum * 2n); // 200000000000000000000000000000n

const bigInt = BigInt(1);
console.log(bigInt); // 1n;

const bigInt2 = BigInt("2222222222222222222");
console.log(bigInt2); // 2222222222222222222n;
\`\`\`

BigInt 是一个大整数，所以他不能用来存储小数。

## 27.??合并空运算符

假设变量\`a\`不存在，我们希望给系统一个默认值，一般我们会使用\`||\`运算符。但是在\`javascript\`中空字符串，\`0\`，\`false\`都会执行\`||\`运算符，所以\`ECMAScript2020\`引入合并空运算符解决该问题，只允许在值为\`null\`或未定义时使用默认值。

\`\`\`js
const name = "";

console.log(name || "yd"); // yd;
console.log(name ?? "yd"); // '';
\`\`\`

## 28.?可选链运算符

业务代码中经常会遇到这样的情况，\`a\`对象有个属性\`b\`,\`b\`也是一个对象有个属性\`c\`,

我们需要访问\`c\`，经常会写成\`a.b.c\`，但是如果\`f\`不存在时，就会出错。

\`\`\`js
const a = {
  b: {
    c: 123,
  },
};
console.log(a.b.c); // 123;
console.log(a.f.c); // f不存在所以会报错
\`\`\`

\`ECMAScript2020\`定义可选链运算符解决该问题，通过在\`.\`之前添加一个\`?\`将键名变成可选

\`\`\`js
let person = {};
console.log(person?.profile?.age ?? 18); // 18
\`\`\`

## 29.import

\`import\`是\`ECMAScript2015\`当中定义的一套\`ES Module\`模块系统，语法特性绝大多数浏览器已经支持了，通过给\`script\`标签添加\`type=module\`的属性就可以使用\`ES Module\`的标准去执行\`javascript\`代码了。

\`\`\`js
<script type="module">console.log('this is es module');</script>
\`\`\`

在\`ES Module\`规范下，会采用严格模式(\`use strict\`)运行\`javascript\`代码。每个\`ES Module\`都运行在单独的作用域中，也就意味着变量间不会互相干扰。外部\`js\`文件是通过\`CORS\`的方式请求的，所以要求我们外部的\`js\`文件地址要支持跨域请求，也就是文件服务器要支持\`CORS\`。我们可以在任意网站控制台输入下面代码。

\`\`\`js
const script = document.createElement("script");

script.type = "module";

script.innerHTML = \`import React from 'https://cdn.bootcdn.net/ajax/libs/react/17.0.1/cjs/react-jsx-dev-runtime.development.js';\`;

document.body.append(script);
\`\`\`

可以发现在\`network\`中请求了\`https://cdn.bootcdn.net/ajax/libs/react/17.0.1/cjs/react-jsx-dev-runtime.development.js\`资源。

\`ES Module\`的\`script\`标签会延迟脚本加载，等待网页请求完资源之后才执行，和使用\`deffer\`的方式加载资源相同。

需要注意的是，\`import {} from 'xx'\`导入模块的时候，并不是对象的解构，而是\`import\`的固定语法，这一点很多人容易弄错。

并且\`ECMAScript2020\`中\`import\`开始支持动态导入功能，在此之前\`import\`只能写在模块代码的顶部，一开始就要声明模块依赖的其它模块。支持动态引入后就可以按需引入对应的模块，这个功能我们早在\`SPA\`中就已经用到了。动态导入返回的是一个\`Promise\`。

a.js

\`\`\`js
const a = 123;
export { a };
\`\`\`

b.js

\`\`\`js
import("./a.js").then((data) => {
  console.log(data.a); // 123;
});
\`\`\`

## 30. 0.1 + 0.2 === 0.3 // false

\`\`\`js
console.log(0.1 + 0.2); // 0.30000000000000004
\`\`\`

在\`JS\`当中，\`Number\`类型实际上是\`double\`类型，运算小数时存在精度问题。因为计算机只认识二进制，在进行运算时，需要将其他进制的数值转换成二进制，然后再进行计算

小数用二进制表达时是无穷的。

\`\`\`js
// 将0.1转换成二进制
console.log((0.1).toString(2)); // 0.0001100110011001100110011001100110011001100110011001101

// 将0.2转换成二进制
console.log((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
\`\`\`

双精度浮点数的小数部分最多支持\`53\`位二进制位，所以两者相加后，因浮点数小数位的限制而截断的二进制数字，再转换为十进制，就成了\`0.30000000000000004\`，这样在进行算术计算时会产生误差。

\`ES6 在Number\`对象上面，新增一个极小的常量\`Number.EPSILON\`。根据规格，它表示\`1\`与大于\`1\`的最小浮点数之间的差。对于\`64\`位浮点数来说，大于\`1\`的最小浮点数相当于二进制的\`1.00..001\`，小数点后面有连续\`51\`个零。这个值减去\`1\`之后，就等于\`2的-52次方\`。

\`\`\`js
Number.EPSILON === Math.pow(2, -52);
// true
Number.EPSILON;
// 2.220446049250313e-16
Number.EPSILON.toFixed(20);
// "0.00000000000000022204"
\`\`\`

\`Number.EPSILON\`实际上是\`JavaScript\`能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。

\`Number.EPSILON\`可以用来设置\`能够接受的误差范围\`。比如，误差范围设为\`2\`的\`-50\`次方（即\`Number.EPSILON * Math.pow(2, 2)\`），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。

\`\`\`js
0.1 + 0.2 - 0.3 < Number.EPSILON; // true
\`\`\`

## 31. 有条件地向对象添加属性

我们可以使用展开运算符号(\`...\`)来有条件地向 JS 对象快速添加属性。

\`\`\`js
const condition = true;
const person = {
  id: 1,
  name: "John Doe",
  ...(condition && { age: 16 }),
};
\`\`\`

如果每个操作数的值都为 \`true\`，则 \`&&\` 操作符返回最后一个求值表达式。因此返回一个对象\`{age: 16}\`，然后将其扩展为\`person\`对象的一部分。

如果 \`condition\` 为 \`false\`，JavaScript 会做这样的事情:

\`\`\`js
const person = {
  id: 1,
  name: "前端小智",
  ...false,
};
// 展开 \`false\` 对对象没有影响
console.log(person); // { id: 1, name: 'John Doe' }
\`\`\`

## 32.检查属性是否存在对象中

可以使用 \`in\` 关键字来检查 JavaScript 对象中是否存在某个属性。

\`\`\`js
const person = { name: "前端小智", salary: 1000 };
console.log("salary" in person); // true
console.log("age" in person); // false
\`\`\`

## 33.对象中的动态属性名称

使用动态键设置对象属性很简单。只需使用\`['key name']\`来添加属性:

\`\`\`js
const dynamic = "flavour";
var item = {
  name: "前端小智",
  [dynamic]: "巧克力",
};
console.log(item); // { name: '前端小智', flavour: '巧克力' }
\`\`\`

同样的技巧也可用于使用动态键引用对象属性：

\`\`\`js
const keyName = "name";
console.log(item[keyName]); // returns '前端小智'
\`\`\`

## 34. 使用动态键进行对象解构

我们知道在对象解构时，可以使用 \`:\` 来对解构的属性进行重命名。但，你是否知道键名是动态的时，也可以解构对象的属性？

\`\`\`js
const person = { id: 1, name: "前端小智" };
const { name: personName } = person;
console.log(personName); // '前端小智'
\`\`\`

现在，我们用动态键来解构属性：

\`\`\`js
const templates = {
  hello: "Hello there",
  bye: "Good bye",
};
const templateName = "bye";

const { [templateName]: template } = templates;

console.log(template); // Good bye
\`\`\`

## 35. 空值合并 \`??\` 操作符

当我们想检查一个变量是否为 \`null\` 或 \`undefined\` 时，\`??\`操作符很有用。当它的左侧操作数为\`null\` 或 \`undefined\`时，它返回右侧的操作数，否则返回其左侧的操作数。

\`\`\`js
const foo = null ?? "Hello";
console.log(foo); // 'Hello'

const bar = "Not null" ?? "Hello";
console.log(bar); // 'Not null'

const baz = 0 ?? "Hello";
console.log(baz); // 0
\`\`\`

在第三个示例中，返回 \`0\`，因为即使 \`0\` 在 JS 中被认为是假的，但它不是\`null\`的或\`undefined\`的。你可能认为我们可以用||算子但这两者之间是有区别的

你可能认为我们可以在这里使用 \`||\` 操作符，但这两者之间是有区别的。

\`\`\`js
const cannotBeZero = 0 || 5;
console.log(cannotBeZero); // 5

const canBeZero = 0 ?? 5;
console.log(canBeZero); // 0
\`\`\`

## 36.可选链 \`?.\`

我们是不是经常遇到这样的错误：\`TypeError: Cannot read property ‘foo’ of null\`。这对每一个毅开发人员来说都是一个烦人的问题。引入可选链就是为了解决这个问题。一起来看看：

\`\`\`js
const book = { id: 1, title: "Title", author: null };

// 通常情况下，你会这样做
console.log(book.author.age); // throws error
console.log(book.author && book.author.age); // null

// 使用可选链
console.log(book.author?.age); // undefined
// 或深度可选链
console.log(book.author?.address?.city); // undefined
\`\`\`

还可以使用如下函数可选链：

\`\`\`js
const person = {
  firstName: "前端",
  lastName: "小智",
  printName: function () {
    return \`\${this.firstName} \${this.lastName}\`;
  },
};
console.log(person.printName()); // '前端 小智'
console.log(persone.doesNotExist?.()); // undefined
\`\`\`

## 37. 使用 \`!!\` 操作符

\`!!\` 运算符可用于将表达式的结果快速转换为布尔值(\`true\`或\`false\`):

\`\`\`js
const greeting = "Hello there!";
console.log(!!greeting); // true

const noGreeting = "";
console.log(!!noGreeting); // false
\`\`\`

## 38. 字符串和整数转换

使用 \`+\` 操作符将字符串快速转换为数字:

\`\`\`js
const stringNumer = "123";

console.log(+stringNumer); //123
console.log(typeof +stringNumer); //'number'
\`\`\`

要将数字快速转换为字符串，也可以使用 \`+\` 操作符，后面跟着一个空字符串:

\`\`\`js
const myString = 25 + "";

console.log(myString); //'25'
console.log(typeof myString); //'string'
\`\`\`

这些类型转换非常方便，但它们的清晰度和代码可读性较差。**所以实际开发，需要慎重的选择使用。**

## 39. 检查数组中的假值

大家应该都用过数组方法：\`filter\`、\`some\`、\`every\`，这些方法可以配合 \`Boolean\` 方法来测试真假值。

\`\`\`js
const myArray = [null, false, "Hello", undefined, 0];

// 过滤虚值
const filtered = myArray.filter(Boolean);
console.log(filtered); // ['Hello']

// 检查至少一个值是否为真
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy); // true

// 检查所有的值是否为真
const allTruthy = myArray.every(Boolean);
console.log(allTruthy); // false
\`\`\`

下面是它的工作原理。我们知道这些数组方法接受一个回调函数，所以我们传递 \`Boolean\` 作为回调函数。\`Boolean\` 函数本身接受一个参数，并根据参数的真实性返回 \`true\` 或 \`false\`。所以：

\`\`\`js
myArray.filter((val) => Boolean(val));
\`\`\`

等价于：

\`\`\`js
myArray.filter(Boolean);
\`\`\`

## 40. 扁平化数组

在原型 Array 上有一个方法 \`flat\`，可以从一个数组的数组中制作一个单一的数组。

\`\`\`js
const myArray = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];

const flattedArray = myArray.flat();
//[ { id: 1 }, { id: 2 }, { id: 3 } ]
\`\`\`

你也可以定义一个深度级别，指定一个嵌套的数组结构应该被扁平化的深度。例如：

\`\`\`js
const arr = [0, 1, 2, [[[3, 4]]]];
console.log(arr.flat(2)); // returns [0, 1, 2, [3,4]]
\`\`\`

## 41.Object.entries

大多数开发人员使用 \`Object.keys\` 方法来迭代对象。此方法仅返回对象键的数组，而不返回值。我们可以使用 \`Object.entries\` 来获取键和值。

\`\`\`js
const person = {
  name: "前端小智",
  age: 20,
};

Object.keys(person); // ['name', 'age']
Object.entries(data); // [['name', '前端小智'], ['age', 20]]
\`\`\`

为了迭代一个对象，我们可以执行以下操作：

\`\`\`js
Object.keys(person).forEach((key) => {
  console.log(\`\${key} is \${person[key]}\`);
});

// 使用 entries 获取键和值
Object.entries(person).forEach(([key, value]) => {
  console.log(\`\${key} is \${value}\`);
});

// name is 前端小智
// age is 20
\`\`\`

上述两种方法都返回相同的结果，但 \`Object.entries\` 获取键值对更容易。

## 42.replaceAll 方法

在 JS 中，要将所有出现的字符串替换为另一个字符串，我们需要使用如下所示的正则表达式：

\`\`\`js
const str = "Red-Green-Blue";

// 只规制第一次出现的
str.replace("-", " "); // Red Green-Blue

// 使用 RegEx 替换所有匹配项
str.replace(/\-/g, " "); // Red Green Blue
\`\`\`

但是在 ES12 中，一个名为 \`replaceAll\` 的新方法被添加到 \`String.prototype\` 中，它用另一个字符串值替换所有出现的字符串。

\`\`\`js
str.replaceAll("-", " "); // Red Green Blue
\`\`\`

## 43.数字分隔符

可以使用下划线作为数字分隔符，这样可以方便地计算数字中 0 的个数。

\`\`\`js
// 难以阅读
const billion = 1000000000;

// 易于阅读
const readableBillion = 1000_000_000;

console.log(readableBillion); //1000000000
\`\`\`

下划线分隔符也可以用于 BigInt 数字，如下例所示

\`\`\`js
const trillion = 1000_000_000_000n;

console.log(trillion); // 1000000000000
\`\`\`

## 44.document.designMode

与前端的 JavaScript 有关，设计模式让你可以编辑页面上的任何内容。只要打开浏览器控制台，输入以下内容即可。

\`\`\`js
document.designMode = "on";
\`\`\`

![图片](https://alianck.oss-cn-beijing.aliyuncs.com/60js1.gif)

## 45.逻辑赋值运算符

逻辑赋值运算符是由逻辑运算符\`&&\`、\`||\`、\`??\`和赋值运算符\`=\`组合而成。

\`\`\`js
const a = 1;
const b = 2;

a &&= b;
console.log(a); // 2

// 上面等价于
a && (a = b);

// 或者
if (a) {
  a = b;
}
\`\`\`

检查\`a\`的值是否为真，如果为真，那么更新\`a\`的值。使用逻辑或 \`||\`操作符也可以做同样的事情。

\`\`\`js
const a = null;
const b = 3;

a ||= b;
console.log(a); // 3

// 上面等价于
a || (a = b);
\`\`\`

使用空值合并操作符 \`??\`:

\`\`\`js
const a = null;
const b = 3;

a ??= b;
console.log(a); // 3

// 上面等价于
if (a === null || a === undefined) {
  a = b;
}
\`\`\`

注意：\`??\`操作符只检查 \`null\` 或 \`undefined\` 的值。

## 46.同步阻塞法实现 sleep 函数

\`\`\`js
const sleep = (delay) => {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay) {
    continue;
  }
};
console.log(1);
sleep(3000);
console.log(2);
\`\`\`

## 47.利用 new URL 解析 URL

\`\`\`js
const parseURL = (url = "") => {
  const res = new URL(url);
  res.queryParams = (key) => {
    if (key) {
      return res.searchParams.get(key);
    }
    const params = {};
    const paramGroup = res.search.replace(/^\?/, "").split("&");
    paramGroup.forEach((param) => {
      const [key, val] = param.split("=");
      params[key] = val;
    });
    return params;
  };
  return res;
};
parseURL("https://www.example.com/a/b?c=1&d=2");
\`\`\`

## 48.一行代码实现星级评分

\`\`\`js
const getRate = (rate = 0) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
getRate(3);
\`\`\`

## 49.用位运算提升效率

\`\`\`js
// ｜ 取整
let num1 = 1.7;
num1 = num1 | 0;

// >> 取半
let num2 = 6;
num2 = num2 >> 1; // 3

// << 加倍

let num3 = 6;
num3 = num3 << 1; / / 12

// ^ 交换值
let num4 = 10;
let num5 = 20;

num4 ^= num5;
num5 ^= num4;
num4 ^= num5; // num4 === 2, num5 === 1

// & 判断奇数
let num6 = 10;
let num7 = 11;

num6 & 1 === 1; // true
num7 & 1 === 1; // false

// ~ 判断是否存在
const data = '123456';
const key = '3';
const keyIsExist = !!~data.indexOf(key); // true

// 是否 2 的整数幂
const isPowerOf2 = num => (num & (num - 1)) === 0;
isPowerOf2(8) // true
isPowerOf2(7) // false

\`\`\`

## 50.判断是否是千分符字符

\`\`\`js
const numberIsThousand = (str) => /^-?\d{1,3}(,\d{3})*(\.\d+)?\$/.test(str);
numberIsThousand("100,000,000,000"); // true
numberIsThousand("100,000,000,00"); // false
\`\`\`

## 51.复制文本到剪切板

\`\`\`js
const copyToClipboard = (content) => {
  const clipboardData = window.clipboardData;
  if (clipboardData) {
    clipboardData.clearData();
    clipboardData.setData("Text", content);
    return true;
  } else if (document.execCommand) {
    const el = document.createElement("textarea");
    el.value = content;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  }
  return false;
};
copyToClipboard("hello world");
\`\`\`

## 52.一行代码生成指定长度的数组

\`\`\`js
const List = (len) => [...new Array(len).keys()];
const list = List(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

## 53.判断数据类型

\`\`\`js
const type = (data) => {
  let toString = Object.prototype.toString;
  const dataType =
    data instanceof Element
      ? "element" // 为了统一DOM节点类型输出
      : toString
          .call(data)
          .replace(/\[object\s(.+)\]/, "\$1")
          .toLowerCase();
  return dataType;
};

type({}); // object
\`\`\`

## 54.正则判断字符重复次数不超过两次

\`\`\`js
const strIsRepeatThan2 = (str = "") =>
  /^(?!.*(.).*1{2})[\da-zA-Z].+\$/.test(str);
strIsRepeatThan2("123456"); // true
strIsRepeatThan2("1234566"); // true
strIsRepeatThan2("12345666"); // false
\`\`\`

## 55.正则匹配可以只有 0 但开头不能是 0 的数字

\`\`\`js
const getCorrectNumber = (str = "") => /^(\d|[1-9]\d*)\$/.test(str);
getCorrectNumber("0"); // true
getCorrectNumber("011"); // false
getCorrectNumber("101"); // true
\`\`\`

## 56.使用 history.back() 可以创建一个浏览器“返回”按钮。

\`\`\`js
<button onclick="history.back()">返回</button>
\`\`\`

## 57.事件监听器只运行一次

\`\`\`js
element.addEventListener("click", () => console.log("I run only once"), {
  once: true,
});
\`\`\`

## 58.从数组中过滤所有虚值

\`\`\`js
const myArray = [1, undefined, NaN, 2, null, "@denicmarko", true, 3, false];

console.log(myArray.filter(Boolean)); // [1, 2, "@denicmarko", true, 3]
\`\`\`

## 59.妙用 reduce 对数组求和

\`\`\`js
const myArray = [10, 20, 30, 40];
const reducer = (total, currentValue) => total + currentValue;

console.log(myArray.reduce(reducer)); // 100
\`\`\`

## 60.从数组中获取最小值/最大值

\`\`\`js
const numbers = [6, 8, 1, 3, 9];

console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1
\`\`\`

        `
      },
      {
      title: "大厂面试题汇总",
      desc: "20道大厂前端面试题",
      content:`
## 1. new的实现原理是什么？
new 的实现原理:

- 创建一个空对象，构造函数中的this指向这个空对象
- 这个新对象被执行 [[原型]] 连接
- 执行构造函数方法，属性和方法被添加到this引用的对象中
- 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
\`\`\`js
function _new() {
    let target = {}; //创建的新对象
    //第一个参数是构造函数
    let [constructor, ...args] = [...arguments];
    //执行[[原型]]连接;target 是 constructor 的实例
    target.__proto__ = constructor.prototype;
    //执行构造函数，将属性或方法添加到创建的空对象上
    let result = constructor.apply(target, args);
    if (result && (typeof (result) == "object" || typeof (result) == "function")) {
        //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
        return result;
    }
    //如果构造函数返回的不是一个对象，返回创建的新对象
    return target;
}
\`\`\`

## 2. 如何正确判断this的指向？
如果用一句话说明 this 的指向，那么即是: 谁调用它，this 就指向谁。

但是仅通过这句话，我们很多时候并不能准确判断 this 的指向。因此我们需要借助一些规则去帮助自己：

this 的指向可以按照以下顺序判断:

**全局环境中的 this**

浏览器环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象 window;

node 环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this 都是空对象 {};

**是否是 new 绑定**

如果是 new 绑定，并且构造函数中没有返回 function 或者是 object，那么 this 指向这个新对象。如下:

> 构造函数返回值不是 function 或 object。new Super() 返回的是 this 对象。

\`\`\`js
function Super(age) {
    this.age = age;
}

let instance = new Super('26');
console.log(instance.age); //26
\`\`\`
> 构造函数返回值是 function 或 object，new Super()是返回的是Super种返回的对象。

\`\`\`js
function Super(age) {
    this.age = age;
    let obj = {a: '2'};
    return obj;
}

let instance = new Super('hello'); 
console.log(instance);//{ a: '2' }
console.log(instance.age); //undefined
\`\`\`

**函数是否通过 call,apply 调用，或者使用了 bind 绑定，如果是，那么this绑定的就是指定的对象【归结为显式绑定】。**

\`\`\`js
function info(){
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
var info = person.info;
info.call(person);   //20
info.apply(person);  //20
info.bind(person)(); //20
\`\`\`
这里同样需要注意一种特殊情况，如果 call,apply 或者 bind 传入的第一个参数值是 undefined 或者 null，严格模式下 this 的值为传入的值 null /undefined。非严格模式下，实际应用的默认绑定规则，this 指向全局对象(node环境为global，浏览器环境为window)
\`\`\`js
function info(){
    //node环境中:非严格模式 global，严格模式为null
    //浏览器环境中:非严格模式 window，严格模式为null
    console.log(this);
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
var info = person.info;
//严格模式抛出错误；
//非严格模式，node下输出undefined（因为全局的age不会挂在 global 上）
//非严格模式。浏览器环境下输出 28（因为全局的age会挂在 window 上）
info.call(null);
\`\`\`
**隐式绑定，函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的隐式调用为: xxx.fn()**
\`\`\`js
function info(){
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
person.info(); //20;执行的是隐式绑定
\`\`\`
**默认绑定，在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用。**

非严格模式： node环境，执行全局对象 global，浏览器环境，执行全局对象 window。

严格模式：执行 undefined
\`\`\`js
function info(){
    console.log(this.age);
}
var age = 28;
//严格模式；抛错
//非严格模式，node下输出 undefined（因为全局的age不会挂在 global 上）
//非严格模式。浏览器环境下输出 28（因为全局的age会挂在 window 上）
//严格模式抛出，因为 this 此时是 undefined
info(); 
\`\`\`
**箭头函数的情况：**

箭头函数没有自己的this，继承外层上下文绑定的this。
\`\`\`js
let obj = {
    age: 20,
    info: function() {
        return () => {
            console.log(this.age); //this继承的是外层上下文绑定的this
        }
    }
}

let person = {age: 28};
let info = obj.info();
info(); //20

let info2 = obj.info.call(person);
info2(); //28
\`\`\`

## 3. 深拷贝和浅拷贝的区别是什么？实现一个深拷贝

深拷贝和浅拷贝是针对复杂数据类型来说的，浅拷贝只拷贝一层，而深拷贝是层层拷贝。

**深拷贝**

> 深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。

**浅拷贝**

> 浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。

可以使用 for in、 Object.assign、 扩展运算符 ... 、Array.prototype.slice()、Array.prototype.concat() 等，例如:

\`\`\`js
let obj = {
    name: 'Yvette',
    age: 18,
    hobbies: ['reading', 'photography']
}
let obj2 = Object.assign({}, obj);
let obj3 = {...obj};

obj.name = 'Jack';
obj.hobbies.push('coding');
console.log(obj);//{ name: 'Jack', age: 18,hobbies: [ 'reading', 'photography', 'coding' ] }
console.log(obj2);//{ name: 'Yvette', age: 18,hobbies: [ 'reading', 'photography', 'coding' ] }
console.log(obj3);//{ name: 'Yvette', age: 18,hobbies: [ 'reading', 'photography', 'coding' ] }
\`\`\`
可以看出浅拷贝只最第一层属性进行了拷贝，当第一层的属性值是基本数据类型时，新的对象和原对象互不影响，但是如果第一层的属性值是复杂数据类型，那么新对象和原对象的属性值其指向的是同一块内存地址。

**深拷贝实现**

> 1.深拷贝最简单的实现是: JSON.parse(JSON.stringify(obj))

JSON.parse(JSON.stringify(obj)) 是最简单的实现方式，但是有一些缺陷：

1. 对象的属性值是函数时，无法拷贝。
2. 原型链上的属性无法拷贝
3. 不能正确的处理 Date 类型的数据
4. 不能处理 RegExp
5. 会忽略 symbol
6. 会忽略 undefined
   
> 2.实现一个 deepClone 函数

1. 如果是基本数据类型，直接返回
2. 如果是 RegExp 或者 Date 类型，返回对应类型
3. 如果是复杂数据类型，递归。
4. 考虑循环引用的问题

\`\`\`js
function deepClone(obj, hash = new WeakMap()) { //递归拷贝
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (obj === null || typeof obj !== 'object') {
        //如果不是复杂数据类型，直接返回
        return obj;
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    /**
     * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
     * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
     */
    let t = new obj.constructor();
    hash.set(obj, t);
    for (let key in obj) {
        //递归
        if (obj.hasOwnProperty(key)) {//是否是自身的属性
            t[key] = deepClone(obj[key], hash);
        }
    }
    return t;
}
\`\`\`
## 4. call/apply 的实现原理是什么？
call 和 apply 的功能相同，都是改变 this 的执行，并立即执行函数。区别在于传参方式不同。

- func.call(thisArg, arg1, arg2, ...)：第一个参数是 this 指向的对象，其它参数依次传入。

- func.apply(thisArg, [argsArray])：第一个参数是 this 指向的对象，第二个参数是数组或类数组。

一起思考一下，如何模拟实现 call ？

首先，我们知道，函数都可以调用 call，说明 call 是函数原型上的方法，所有的实例都可以调用。即: Function.prototype.call。

- 在 call 方法中获取调用call()函数
- 如果第一个参数没有传入，那么默认指向 window / global(非严格模式)
- 传入 call 的第一个参数是 this 指向的对象，根据隐式绑定的规则，我们知道 obj.foo(), foo() 中的 this 指向 obj;因此我们可以这样调用函数 thisArgs.func(...args)
- 返回执行结果
\`\`\`js
Function.prototype.call = function() {
    let [thisArg, ...args] = [...arguments];
    if (!thisArg) {
        //context为null或者是undefined
        thisArg = typeof window === 'undefined' ? global : window;
    }
    //this的指向的是当前函数 func (func.call)
    thisArg.func = this;
    //执行函数
    let result = thisArg.func(...args);
    delete thisArg.func; //thisArg上并没有 func 属性，因此需要移除
    return result;
}
\`\`\`
bind 的实现思路和 call 一致，仅参数处理略有差别。如下：
\`\`\`js
Function.prototype.apply = function(thisArg, rest) {
    let result; //函数返回结果
    if (!thisArg) {
        //context为null或者是undefined
        thisArg = typeof window === 'undefined' ? global : window;
    }
    //this的指向的是当前函数 func (func.call)
    thisArg.func = this;
    if(!rest) {
        //第二个参数为 null / undefined 
        result = thisArg.func();
    }else {
        result = thisArg.func(...rest);
    }
    delete thisArg.func; //thisArg上并没有 func 属性，因此需要移除
    return result;
}
\`\`\`
## 5. 柯里化函数实现
在开始之前，我们首先需要搞清楚函数柯里化的概念。

函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
\`\`\`js
const curry = (fn, ...args) =>
    args.length < fn.length
        //参数长度不足时，重新柯里化该函数，等待接受新参数
        ? (...arguments) => curry(fn, ...args, ...arguments)
        //参数长度满足时，执行函数
        : fn(...args);
\`\`\`

\`\`\`js
function sumFn(a, b, c) {
    return a + b + c;
}
var sum = curry(sumFn);
console.log(sum(2)(3)(5));//10
console.log(sum(2, 3, 5));//10
console.log(sum(2)(3, 5));//10
console.log(sum(2, 3)(5));//10
\`\`\`
> 函数柯里化的主要作用：

- 参数复用
- 提前返回 – 返回接受余下的参数且返回结果的新函数
- 延迟执行 – 返回新函数，等待执行
## 6. 如何让 (a == 1 && a == 2 && a == 3) 的值为true？
> 利用隐式类型转换

== 操作符在左右数据类型不一致时，会先进行隐式转换。

a == 1 && a == 2 && a == 3 的值意味着其不可能是基本数据类型。因为如果 a 是 null 或者是 undefined bool类型，都不可能返回true。

因此可以推测 a 是复杂数据类型，JS 中复杂数据类型只有 object，回忆一下，Object 转换为原始类型会调用什么方法？

- 如果部署了 [Symbol.toPrimitive] 接口，那么调用此接口，若返回的不是基本数据类型，抛出错误。

- 如果没有部署 [Symbol.toPrimitive] 接口，那么根据要转换的类型，先调用 valueOf / toString

i. 非Date类型对象，hint 是 default 时，调用顺序为：valueOf >>> toString，即valueOf 返回的不是基本数据类型，才会继续调用 valueOf，如果toString 返回的还不是基本数据类型，那么抛出错误。

ii. 如果 hint 是 string(Date对象的hint默认是string) ，调用顺序为：toString >>> valueOf，即toString 返回的不是基本数据类型，才会继续调用 valueOf，如果valueOf 返回的还不是基本数据类型，那么抛出错误。

iii. 如果 hint 是 number，调用顺序为： valueOf >>> toString
\`\`\`js
//部署 [Symbol.toPrimitive] / valueOf/ toString 皆可
//一次返回1，2，3 即可。
let a = {
    [Symbol.toPrimitive]: (function(hint) {
            let i = 1;
            //闭包的特性之一：i 不会被回收
            return function() {
                return i++;
            }
    })()
}
\`\`\`
>利用数据劫持(Proxy/Object.definedProperty)
\`\`\`js
let i = 1;
let a = new Proxy({}, {
    i: 1,
    get: function () {
        return () => this.i++;
    }
});
\`\`\`
>数组的 toString 接口默认调用数组的 join 方法，重新 join 方法
\`\`\`js
let a = [1, 2, 3];
a.join = a.shift;
\`\`\`
## 7. 什么是BFC？BFC的布局规则是什么？如何创建BFC？
Box 是 CSS 布局的对象和基本单位，页面是由若干个Box组成的。

元素的类型 和 display 属性，决定了这个 Box 的类型。不同类型的 Box 会参与不同的 Formatting Context。

> Formatting Context

Formatting Context 是页面的一块渲染区域，并且有一套渲染规则，决定了其子元素将如何定位，以及和其它元素的关系和相互作用。

Formatting Context 有 BFC (Block formatting context)，IFC (Inline formatting context)，FFC (Flex formatting context) 和 GFC (Grid formatting context)。FFC 和 GFC 为 CC3 中新增。

> BFC布局规则

- BFC内，盒子依次垂直排列。
- BFC内，两个盒子的垂直距离由 margin 属性决定。属于同一个BFC的两个相邻Box的margin会发生重叠【符合合并原则的margin合并后是使用大的margin】
- BFC内，每个盒子的左外边缘接触内部盒子的左边缘（对于从右到左的格式，右边缘接触）。即使在存在浮动的情况下也是如此。除非创建新的BFC。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。

>如何创建BFC

- 根元素
- 浮动元素（float 属性不为 none）
- position 为 absolute 或 fixed
- overflow 不为 visible 的块元素
- display 为 inline-block, table-cell, table-caption

>BFC 的应用

- 防止 margin 重叠 (同一个BFC内的两个两个相邻Box的 margin 会发生重叠，触发生成两个BFC，即不会重叠)
- 清除内部浮动 (创建一个新的 BFC，因为根据 BFC 的规则，计算 BFC 的高度时，浮动元素也参与计算)
- 自适应多栏布局 (BFC的区域不会与float box重叠。因此，可以触发生成一个新的BFC)
  
## 8. 异步加载JS脚本的方式有哪些？

> 1.\<script> 的 defer 属性，HTML4 中新增

> 2.\<script> 的 async 属性，HTML5 中新增

\`\`\`js
<script src="../XXX.js" defer></script>
\`\`\`
defer 和 async 的区别在于：

- defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），在window.onload 之前执行；
- async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
- 如果有多个 defer 脚本，会按照它们在页面出现的顺序加载
- 多个 async 脚本不能保证加载顺序

> 动态创建 script 标签

动态创建的 script ，设置 src 并不会开始下载，而是要添加到文档中，JS文件才会开始下载。

\`\`\`js
let script = document.createElement('script');
script.src = 'XXX.js';
// 添加到html文件中才会开始下载
document.body.append(script);
\`\`\`
>XHR 异步加载JS
\`\`\`js
let xhr = new XMLHttpRequest();
xhr.open("get", "js/xxx.js",true);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        eval(xhr.responseText);
    }
}
\`\`\`
## 9. ES5有几种方式可以实现继承？分别有哪些优缺点？
ES5 有 6 种方式可以实现继承，分别为：

**1. 原型链继承**

原型链继承的基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
\`\`\`js
function SuperType() {
    this.name = 'Yvette';
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.getName = function () {
    return this.name;
}
function SubType() {
    this.age = 22;
}
SubType.prototype = new SuperType();
SubType.prototype.getAge = function() {
    return this.age;
}
SubType.prototype.constructor = SubType;
let instance1 = new SubType();
instance1.colors.push('yellow');
console.log(instance1.getName()); //'Yvette'
console.log(instance1.colors);//[ 'pink', 'blue', 'green', 'yellow' ]

let instance2 = new SubType();
console.log(instance2.colors);//[ 'pink', 'blue', 'green', 'yellow' ]
\`\`\`
>缺点：

- 通过原型来实现继承时，原型会变成另一个类型的实例，原先的实例属性变成了现在的原型属性，该原型的引用类型属性会被所有的实例共享。
- 在创建子类型的实例时，没有办法在不影响所有对象实例的情况下给超类型的构造函数中传递参数。


**2. 借用构造函数**
借用构造函数的技术，其基本思想为:

在子类型的构造函数中调用超类型构造函数。
\`\`\`js
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
function SubType(name) {
    SuperType.call(this, name);
}
let instance1 = new SubType('Yvette');
instance1.colors.push('yellow');
console.log(instance1.colors);//['pink', 'blue', 'green', yellow]

let instance2 = new SubType('Jack');
console.log(instance2.colors); //['pink', 'blue', 'green']
\`\`\`
>优点:

- 可以向超类传递参数
- 解决了原型中包含引用类型值被所有实例共享的问题

>缺点:

- 方法都在构造函数中定义，函数复用无从谈起，另外超类型原型中定义的方法对于子类型而言都是不可见的。
  
**3. 组合继承(原型链 + 借用构造函数)**
   
组合继承指的是将原型链和借用构造函数技术组合到一块，从而发挥二者之长的一种继承模式。基本思路：

使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承，既通过在原型上定义方法来实现了函数复用，又保证了每个实例都有自己的属性。

\`\`\`js
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SuberType.prototype = new SuperType();
SuberType.prototype.constructor = SuberType;
SuberType.prototype.sayAge = function () {
    console.log(this.age);
}
let instance1 = new SuberType('Yvette', 20);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.sayName(); //Yvette

let instance2 = new SuberType('Jack', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.sayName();//Jack
\`\`\`
> 缺点:

无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

>优点:

- 可以向超类传递参数
- 每个实例都有自己的属性
- 实现了函数复用

**4. 原型式继承**

原型继承的基本思想：

借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。

\`\`\`js
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
\`\`\`
在 object() 函数内部，先穿甲一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例，从本质上讲，object() 对传入的对象执行了一次浅拷贝。

ECMAScript5通过新增 Object.create()方法规范了原型式继承。这个方法接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象(可以覆盖原型对象上的同名属性)，在传入一个参数的情况下，Object.create() 和 object() 方法的行为相同。

\`\`\`js
var person = {
    name: 'Yvette',
    hobbies: ['reading', 'photography']
}
var person1 = Object.create(person);
person1.name = 'Jack';
person1.hobbies.push('coding');
var person2 = Object.create(person);
person2.name = 'Echo';
person2.hobbies.push('running');
console.log(person.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]
console.log(person1.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]
\`\`\`
在没有必要创建构造函数，仅让一个对象与另一个对象保持相似的情况下，原型式继承是可以胜任的。

>缺点:

同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

**5. 寄生式继承**

寄生式继承是与原型式继承紧密相关的一种思路。寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部已某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。

\`\`\`js
function createAnother(original) {
    var clone = object(original);//通过调用函数创建一个新对象
    clone.sayHi = function () {//以某种方式增强这个对象
        console.log('hi');
    };
    return clone;//返回这个对象
}
var person = {
    name: 'Yvette',
    hobbies: ['reading', 'photography']
};

var person2 = createAnother(person);
person2.sayHi(); //hi
\`\`\`

基于 person 返回了一个新对象 -—— person2，新对象不仅具有 person 的所有属性和方法，而且还有自己的 sayHi() 方法。在考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。

>缺点：

- 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而效率低下。
- 同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

**6. 寄生组合式继承**
   
所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，基本思路：

不必为了指定子类型的原型而调用超类型的构造函数，我们需要的仅是超类型原型的一个副本，本质上就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。寄生组合式继承的基本模式如下所示：
\`\`\`js
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType;//增强对象
    subType.prototype = prototype;//指定对象
}
\`\`\`
- 第一步：创建超类型原型的一个副本
- 第二步：为创建的副本添加 constructor 属性
- 第三步：将新创建的对象赋值给子类型的原型

至此，我们就可以通过调用 inheritPrototype 来替换为子类型原型赋值的语句：
\`\`\`js
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
//...code
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SuberType.prototype = new SuperType();
inheritPrototype(SuberType, SuperType);
//...code
\`\`\`
>优点:

只调用了一次超类构造函数，效率更高。避免在SuberType.prototype上面创建不必要的、多余的属性，与其同时，原型链还能保持不变。

因此寄生组合继承是引用类型最理性的继承范式。

## 10. 隐藏页面中的某个元素的方法有哪些？
> 隐藏类型

屏幕并不是唯一的输出机制，比如说屏幕上看不见的元素（隐藏的元素），其中一些依然能够被读屏软件阅读出来（因为读屏软件依赖于可访问性树来阐述）。为了消除它们之间的歧义，我们将其归为三大类：

>完全隐藏：

- 元素从渲染树中消失，不占据空间。
- 视觉上的隐藏：屏幕中不可见，占据空间。
- 语义上的隐藏：读屏软件不可读，但正常占据空。
完全隐藏

**1.display 属性**
\`\`\`
display: none;
\`\`\`
**2.hidden 属性**

HTML5 新增属性，相当于 display: none
\`\`\`
<div hidden> </div>
\`\`\`
> 视觉上的隐藏

**1.利用 position 和 盒模型 将元素移出可视区范围**

- 设置 posoition 为 absolute 或 fixed，�通过设置 top、left 等值，将其移出可视区域。
\`\`\`css
position:absolute;
left: -99999px;
\`\`\`
- 设置 position 为 relative，通过设置 top、left 等值，将其移出可视区域。
\`\`\`css
position: relative;
left: -99999px;
height: 0
\`\`\`
- 设置 margin 值，将其移出可视区域范围（可视区域占位）。
\`\`\`css
margin-left: -99999px;
height: 0;
\`\`\`
**2. 利用 transfrom**

- 缩放
\`\`\`css
transform: scale(0);
height: 0;
\`\`\`
- 移动 translateX, translateY
\`\`\`css
transform: translateX(-99999px);
height: 0
\`\`\`
**3.设置其大小为0**

- 宽高为0，字体大小为0：
\`\`\`css
height: 0;
width: 0;
font-size: 0;
\`\`\`
- 宽高为0，超出隐藏:
\`\`\`css
height: 0;
width: 0;
overflow: hidden;
\`\`\`

- 设置透明度为0
\`\`\`css
opacity: 0;
\`\`\`
- visibility属性
\`\`\`css
visibility: hidden;
\`\`\`

- 层级覆盖，z-index 属性
\`\`\`css
position: relative;
z-index: -999;
\`\`\`
再设置一个层级较高的元素覆盖在此元素上。

- clip-path 裁剪
\`\`\`css
clip-path: polygon(0 0, 0 0, 0 0, 0 0);
\`\`\`
> 语义上的隐藏
- aria-hidden 属性

读屏软件不可读，占据空间，可见。
\`\`\`
<div aria-hidden="true"></div>
\`\`\`
## 11. let、const、var 的区别有哪些？


| 声明方式    | 变量提升 |暂时性死区 |重复声明 |块作用域有效| 初始值 | 初始值 |
| -------- | --------- | --------- |--------- |-------- |---------|--------|
| var   | 会     |不存在      |允许     |不是     |非必须     |允许     |
| let | 不会      |存在     |不允许     |是     |非必须     |允许     |
| const | 不会      |存在     |不允许     |是     |非必须     |不允许     |

1.let/const 定义的变量不会出现变量提升，而 var 定义的变量会提升。

2.相同作用域中，let 和 const 不允许重复声明，var 允许重复声明。

3.const 声明变量时必须设置初始值

4.const 声明一个只读的常量，这个常量不可改变。

这里有一个非常重要的点即是：在JS中，复杂数据类型，存储在栈中的是堆内存的地址，存在栈中的这个地址是不变的，但是存在堆中的值是可以变得。有没有相当常量指针/指针常量~

\`\`\`js
const a = 20;
const b = {
    age: 18,
    star: 500
}
\`\`\`

## 12. prototype 和 __proto__ 区别是什么？
prototype是构造函数的属性。

__proto__ 是每个实例都有的属性，可以访问 [[prototype]] 属性。

实例的__proto__ 与其构造函数的prototype指向的是同一个对象。

\`\`\`js
function Student(name) {
    this.name = name;
}
Student.prototype.setAge = function(){
    this.age=20;
}
let Jack = new Student('jack');
console.log(Jack.__proto__);
//console.log(Object.getPrototypeOf(Jack));;
console.log(Student.prototype);
console.log(Jack.__proto__ === Student.prototype);//true
\`\`\`

## 13. 防抖函数的作用是什么？请实现一个防抖函数

>防抖函数的作用

防抖函数的作用就是控制函数在一定时间内的执行次数。防抖意味着N秒内函数只会被执行一次，如果N秒内再次被触发，则重新计算延迟时间。

举例说明： 小思最近在减肥，但是她非常吃吃零食。为此，与其男朋友约定好，如果10天不吃零食，就可以购买一个包(不要问为什么是包，因为包治百病)。但是如果中间吃了一次零食，那么就要重新计算时间，直到小思坚持10天没有吃零食，才能购买一个包。所以，管不住嘴的小思，没有机会买包(悲伤的故事)... 这就是 防抖。

>防抖函数实现

- 事件第一次触发时，timer 是 null，调用 later()，若 immediate 为true，那么立即调用 func.apply(this, params)；如果 immediate 为 false，那么过 wait 之后，调用 func.apply(this, params)
- 事件第二次触发时，如果 timer 已经重置为 null(即 setTimeout 的倒计时结束)，那么流程与第一次触发时一样，若 timer 不为 null(即 setTimeout 的倒计时未结束)，那么清空定时器，重新开始计时。

\`\`\`js
function debounce(func, wait, immediate = true) {
    let timeout, result;
    // 延迟执行函数
    const later = (context, args) => setTimeout(() => {
        timeout = null;// 倒计时结束
        if (!immediate) {
            //执行回调
            result = func.apply(context, args);
            context = args = null;
        }
    }, wait);
    let debounced = function (...params) {
        if (!timeout) {
            timeout = later(this, params);
            if (immediate) {
                //立即执行
                result = func.apply(this, params);
            }
        } else {
            clearTimeout(timeout);
            //函数在每个等待时延的结束被调用
            timeout = later(this, params);
        }
        return result;
    }
    //提供在外部清空定时器的方法
    debounced.cancel = function () {
        clearTimeout(timer);
        timer = null;
    };
    return debounced;
};
\`\`\`
immediate 为 true 时，表示函数在每个等待时延的开始被调用。immediate 为 false 时，表示函数在每个等待时延的结束被调用。

>防抖的应用场景

- 搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
- 表单验证
- 按钮提交事件。
- 浏览器窗口缩放，resize事件(如窗口停止改变大小之后重新计算布局)等。

## 14. 节流函数的作用是什么？有哪些应用场景，请实现一个节流函数

> 节流函数的作用

节流函数的作用是规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。

> 节流函数实现
\`\`\`js
function throttle(func, wait, options = {}) {
    var timeout, context, args, result;
    var previous = 0;
    var later = function () {
        previous = options.leading === false ? 0 : (Date.now() || new Date().getTime());
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function () {
        var now = Date.now() || new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        //remaining 为距离下次执行 func 的时间
        //remaining > wait，表示客户端系统时间被调整过
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        //remaining 小于等于0，表示事件触发的间隔时间大于设置的 wait
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                //清空定时器
                clearTimeout(timeout);
                timeout = null;
            }
            //重置 previous
            previous = now;
            //执行函数
            result = func.apply(context, args); 
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
}
\`\`\`

禁用第一次首先执行，传递 {leading: false} ；想禁用最后一次执行，传递 {trailing: false}

> 节流的应用场景

- 按钮点击事件
- 拖拽事件
- onScoll
- 计算鼠标移动的距离(mousemove)

## 15. 什么是闭包？闭包的作用是什么？
**闭包的定义**

《JavaScript高级程序设计》:

>闭包是指有权访问另一个函数作用域中的变量的函数

《JavaScript权威指南》：

>从技术的角度讲，所有的JavaScript函数都是闭包：它们都是对象，它们都关联到作用域链。

《你不知道的JavaScript》

>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

**创建一个闭包**

\`\`\`js
function foo() {
    var a = 2;
    return function fn() {
        console.log(a);
    }
}
let func = foo();
func(); //输出2
\`\`\`
闭包使得函数可以继续访问定义时的词法作用域。拜 fn 所赐，在 foo() 执行后，foo 内部作用域不会被销毁。

**闭包的作用**

- 能够访问函数定义时所在的词法作用域(阻止其被回收)。

- 私有化变量

\`\`\`js
function base() {
    let x = 10; //私有变量
    return {
        getX: function() {
            return x;
        }
    }
}
let obj = base();
console.log(obj.getX()); //10
\`\`\`
- 模拟块级作用域

\`\`\`js
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = (function(j){
        return function () {
            console.log(j);
        }
    })(i);
}
a[6](); // 6
\`\`\`
- 创建模块

\`\`\`js
function coolModule() {
    let name = 'Yvette';
    let age = 20;
    function sayName() {
        console.log(name);
    }
    function sayAge() {
        console.log(age);
    }
    return {
        sayName,
        sayAge
    }
}
let info = coolModule();
info.sayName(); //'Yvette'
\`\`\`

模块模式具有两个必备的条件(来自《你不知道的JavaScript》)

- 必须有外部的封闭函数，该函数必须至少被调用一次(每次调用都会创建一个新的模块实例)
- 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

## 16. 实现 Promise.all 方法
在实现 Promise.all 方法之前，我们首先要知道 Promise.all 的功能和特点，因为在清楚了 Promise.all 功能和特点的情况下，我们才能进一步去写实现。

> Promise.all 功能

Promise.all(iterable) 返回一个新的 Promise 实例。此实例在 iterable 参数内所有的 promise 都 fulfilled 或者参数中不包含 promise 时，状态变成 fulfilled；如果参数中 promise 有一个失败rejected，此实例回调失败，失败原因的是第一个失败 promise 的返回结果。

\`\`\`js
let p = Promise.all([p1, p2, p3]);
\`\`\`
p的状态由 p1,p2,p3决定，分成以下；两种情况：

（1）只有p1、p2、p3的状态都变成 fulfilled，p的状态才会变成 fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被 rejected，p的状态就变成 rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

> Promise.all 的特点

Promise.all 的返回值是一个 promise 实例

- 如果传入的参数为空的可迭代对象，Promise.all 会 同步 返回一个已完成状态的 promise
- 如果传入的参数中不包含任何 promise,Promise.all 会 异步 返回一个已完成状态的 promise
- 其它情况下，Promise.all 返回一个 处理中（pending） 状态的 promise.

> Promise.all 返回的 promise 的状态

- 如果传入的参数中的 promise 都变成完成状态，Promise.all 返回的 promise 异步地变为完成。
- 如果传入的参数中，有一个 promise 失败，Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
- 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
> Promise.all 实现
\`\`\`js
Promise.all = function (promises) {
    //promises 是可迭代对象，省略参数合法性检查
    return new Promise((resolve, reject) => {
        //Array.from 将可迭代对象转换成数组
        promises = Array.from(promises);
        if (promises.length === 0) {
            resolve([]);
        } else {
            let result = [];
            let index = 0;
            for (let i = 0;  i < promises.length; i++ ) {
                //考虑到 i 可能是 thenable 对象也可能是普通值
                Promise.resolve(promises[i]).then(data => {
                    result[i] = data;
                    if (++index === promises.length) {
                        //所有的 promises 状态都是 fulfilled，promise.all返回的实例才变成 fulfilled 态
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}
\`\`\`
## 17. 请实现一个 flattenDeep 函数，把嵌套的数组扁平化
例如:
\`\`\`js
flattenDeep([1, [2, [3, [4]], 5]]); //[1, 2, 3, 4, 5]
\`\`\`
> 利用 Array.prototype.flat

ES6 为数组实例新增了 flat 方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。

flat 默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 flat 传递一个整数，表示想要拉平的层数。

\`\`\`js
function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]], 3));
\`\`\`

当传递的整数大于数组嵌套的层数时，会将数组拉平为一维数组，JS能表示的最大数字为 Math.pow(2, 53) - 1，因此我们可以这样定义 flattenDeep 函数
\`\`\`js
function flattenDeep(arr) {
    //当然，大多时候我们并不会有这么多层级的嵌套
    return arr.flat(Math.pow(2,53) - 1); 
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

\`\`\`
> 利用 reduce 和 concat
\`\`\`js
function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
\`\`\`
>使用 stack 无限反嵌套多层嵌套数组
\`\`\`js
function flattenDeep(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 使用 pop 从 stack 中取出并移除值
        const next = stack.pop();
        if (Array.isArray(next)) {
            // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // 使用 reverse 恢复原数组的顺序
    return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
\`\`\`

## 18. 请实现一个 uniq 函数，实现数组去重
例如:
\`\`\`js
uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
\`\`\`
>1: 利用ES6新增数据类型 Set

Set类似于数组，但是成员的值都是唯一的，没有重复的值。
\`\`\`js
function uniq(arry) {
    return [...new Set(arry)];
}
\`\`\`
>2: 利用 indexOf
\`\`\`js
function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (result.indexOf(arry[i]) === -1) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}
\`\`\`
>3: 利用 includes
\`\`\`js
function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (!result.includes(arry[i])) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}
\`\`\`
>4：利用 reduce
\`\`\`js
function uniq(arry) {
    return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
\`\`\`
> 5.利用 Map
\`\`\`js
function uniq(arry) {
    let map = new Map();
    let result = new Array();
    for (let i = 0; i < arry.length; i++) {
        if (map.has(arry[i])) {
            map.set(arry[i], true);
        } else {
            map.set(arry[i], false);
            result.push(arry[i]);
        }
    }
    return result;
}
\`\`\`

## 19. 在JS中什么是变量提升？什么是暂时性死区？
变量提升就是变量在声明之前就可以使用，值为undefined。

在代码块内，使用 let/const 命令声明变量之前，该变量都是不可用的(会抛出错误)。这在语法上，称为“暂时性死区”。暂时性死区也意味着 typeof 不再是一个百分百安全的操作。
\`\`\`
typeof x; // ReferenceError(暂时性死区，抛错)
let x;
\`\`\`
\`\`\`
typeof y; // 值是undefined,不会报错
\`\`\`
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

## 20. JSONP 的原理是什么？
尽管浏览器有同源策略，但是 \<script> 标签的 src 属性不会被同源策略所约束，可以获取任意服务器上的脚本并执行。jsonp 通过插入 script 标签的方式来实现跨域，参数只能通过 url 传入，仅能支持 get 请求。

>实现原理:

- Step1: 创建 callback 方法
- Step2: 插入 script 标签
- Step3: 后台接受到请求，解析前端传过去的 callback 方法，返回该方法的调用，并且数据作为参数传入该方法
- Step4: 前端执行服务端返回的方法调用

>jsonp源码实现
\`\`\`js
function jsonp({url, params, callback}) {
    return new Promise((resolve, reject) => {
        //创建script标签
        let script = document.createElement('script');
        //将回调函数挂在 window 上
        window[callback] = function(data) {
            resolve(data);
            //代码执行后，删除插入的script标签
            document.body.removeChild(script);
        }
        //回调函数加在请求地址上
        params = {...params, callback} //wb=b&callback=show
        let arrs = [];
        for(let key in params) {
            arrs.push(\`\${key}=\${params[key]}\`);
        }
        script.src = \`\${url}?\${arrs.join('&')}\`;
        document.body.appendChild(script);
    });
}
\`\`\`
>使用
\`\`\`js
function show(data) {
    console.log(data);
}
jsonp({
    url: 'http://localhost:3000/show',
    params: {
        //code
    },
    callback: 'show'
}).then(data => {
    console.log(data);
});
\`\`\`
>服务端代码(node):
\`\`\`js
//express启动一个后台服务
let express = require('express');
let app = express();

app.get('/show', (req, res) => {
    let {callback} = req.query; //获取传来的callback函数名，callback是key
    res.send(\`\${callback}('Hello!')\`);
});
app.listen(3000);
\`\`\`

      `
      },
    ]
  }

export default js;
// https://github.com/ytanck/ytanck