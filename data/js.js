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
      },
    ]
  }

export default js;
// https://github.com/ytanck/ytanck