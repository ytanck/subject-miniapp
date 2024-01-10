const react = {
  id: 5,
  category: "React",
  questions: [
    {
      title: "React事件绑定的方式有哪些？区别？",
      desc: "面试官：React事件绑定的方式有哪些？区别？",
      content:`
在\`react\`应用中，事件名都是用小驼峰格式进行书写，例如\`onclick\`要改写成\`onClick\`

最简单的事件绑定如下：

\`\`\`jsx
class ShowAlert extends React.Component {
  showAlert() {
    console.log("Hi");
  }

  render() {
    return <button onClick={this.showAlert}>show</button>;
  }
}
\`\`\`

从上面可以看到，事件绑定的方法需要使用\`{}\`包住

上述的代码看似没有问题，但是当将处理函数输出代码换成\`console.log(this)\`的时候，点击按钮，则会发现控制台输出\`undefined\`



## 二、如何绑定

为了解决上面正确输出\`this\`的问题，常见的绑定方式有如下：

- render方法中使用bind
- render方法中使用箭头函数
- constructor中bind
- 定义阶段使用箭头函数绑定



### render方法中使用bind

如果使用一个类组件，在其中给某个组件/元素一个\`onClick\`属性，它现在并会自定绑定其\`this\`到当前组件，解决这个问题的方法是在事件函数后使用\`.bind(this)\`将\`this\`绑定到当前组件中

\`\`\`jsx
class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>test</div>
    )
  }
}
\`\`\`

这种方式在组件每次\`render\`渲染的时候，都会重新进行\`bind\`的操作，影响性能



### render方法中使用箭头函数

通过\`ES6\`的上下文来将\`this\`的指向绑定给当前组件，同样再每一次\`render\`的时候都会生成新的方法，影响性能

\`\`\`jsx
class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={e => this.handleClick(e)}>test</div>
    )
  }
}
\`\`\`



## constructor中bind

在\`constructor\`中预先\`bind\`当前组件，可以避免在\`render\`操作中重复绑定

\`\`\`jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
}
\`\`\`



### 定义阶段使用箭头函数绑定

跟上述方式三一样，能够避免在\`render\`操作中重复绑定，实现也非常的简单，如下：

\`\`\`jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
}
\`\`\`



## 三、区别

上述四种方法的方式，区别主要如下：

- 编写方面：方式一、方式二写法简单，方式三的编写过于冗杂
- 性能方面：方式一和方式二在每次组件render的时候都会生成新的方法实例，性能问题欠缺。若该函数作为属性值传给子组件的时候，都会导致额外的渲染。而方式三、方式四只会生成一个方法实例

综合上述，方式四是最优的事件绑定方式
      `
    },{
      title: "React构建组件的方式有哪些？区别？",
      desc: "面试官：React构建组件的方式有哪些？区别？",
      content:`
## 一、是什么

组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式

在\`React\`中，一个类、一个函数都可以视为一个组件

在[之前文章](https://mp.weixin.qq.com/s/Wi0r38LBopsyQ9HesMID0g)中，我们了解到组件所存在的优势：

- 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现
- 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级



## 二、如何构建

在\`React\`目前来讲，组件的创建主要分成了三种方式：

- 函数式创建
- 通过 React.createClass 方法创建
- 继承 React.Component 创建



### 函数式创建

在\`React Hooks\`出来之前，函数式组件可以视为无状态组件，只负责根据传入的\`props\`来展示视图，不涉及对\`state\`状态的操作

大多数组件可以写为无状态组件，通过简单组合构建其他组件

在\`React\`中，通过函数简单创建组件的示例如下：

\`\`\`jsx
function HelloComponent(props, /* context */) {
  return <div>Hello {props.name}</div>
}
\`\`\`





### 通过 React.createClass 方法创建

\`React.createClass\`是react刚开始推荐的创建组件的方式，目前这种创建方式已经不怎么用了

像上述通过函数式创建的组件的方式，最终会通过\`babel\`转化成\`React.createClass\`这种形式，转化成如下：

\`\`\`jsx
function HelloComponent(props) /* context */{
  return React.createElement(
    "div",
    null,
    "Hello ",
    props.name
  );
}
\`\`\`

由于上述的编写方式过于冗杂，目前基本上不使用上



### 继承 React.Component 创建

同样在\`react hooks\`出来之前，有状态的组件只能通过继承\`React.Component\`这种形式进行创建

有状态的组件也就是组件内部存在维护的数据，在类创建的方式中通过\`this.state\`进行访问

当调用\`this.setState\`修改组件的状态时，组价会再次会调用\`render()\`方法进行重新渲染

通过继承\`React.Component\`创建一个时钟示例如下：

\`\`\`jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}
\`\`\`



## 三、区别

由于\`React.createClass \`创建的方式过于冗杂，并不建议使用

而像函数式创建和类组件创建的区别主要在于需要创建的组件是否需要为有状态组件：

- 对于一些无状态的组件创建，建议使用函数式创建的方式

- 由于\`react hooks\`的出现，函数式组件创建的组件通过使用\`hooks\`方法也能使之成为有状态组件，再加上目前推崇函数式编程，所以这里建议都使用函数式的方式来创建组件

在考虑组件的选择原则上，能用无状态组件则用无状态组件



## 参考文献

- https://react.docschina.org/
      `
    },{
      title: "说说对React中类组件和函数组件的理解？",
      desc: "面试官：说说对React中类组件和函数组件的理解？有什么区别？",
      content:`
## 一、类组件

类组件，顾名思义，也就是通过使用\`ES6\`类的编写形式去编写组件，该类必须继承\`React.Component\`

如果想要访问父组件传递过来的参数，可通过\`this.props\`的方式去访问

在组件中必须实现\`render\`方法，在\`return\`中返回\`React\`对象，如下：

\`\`\`jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
\`\`\`





## 二、函数组件

函数组件，顾名思义，就是通过函数编写的形式去实现一个\`React\`组件，是\`React\`中定义组件最简单的方式

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

函数第一个参数为\`props\`用于接收父组件传递过来的参数



## 三、区别

针对两种\`React\`组件，其区别主要分成以下几大方向：

- 编写形式
- 状态管理
- 生命周期

- 调用方式

- 获取渲染的值



### 编写形式

两者最明显的区别在于编写形式的不同，同一种功能的实现可以分别对应类组件和函数组件的编写形式

函数组件：

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

类组件：

\`\`\`jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
\`\`\`



### 状态管理

在\`hooks\`出来之前，函数组件就是无状态组件，不能保管组件的状态，不像类组件中调用\`setState\`

如果想要管理\`state\`状态，可以使用\`useState\`，如下：

\`\`\`jsx
const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>count: {count}</p >
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

\`\`\`

在使用\`hooks\`情况下，一般如果函数组件调用\`state\`，则需要创建一个类组件或者\`state\`提升到你的父组件中，然后通过\`props\`对象传递到子组件



### 生命周期

在函数组件中，并不存在生命周期，这是因为这些生命周期钩子都来自于继承的\`React.Component\`

所以，如果用到生命周期，就只能使用类组件

但是函数组件使用\`useEffect\`也能够完成替代生命周期的作用，这里给出一个简单的例子：

\`\`\`jsx
const FunctionalComponent = () => {
    useEffect(() => {
        console.log("Hello");
    }, []);
    return <h1>Hello, World</h1>;
};
\`\`\`

上述简单的例子对应类组件中的\`componentDidMount\`生命周期

如果在\`useEffect\`回调函数中\`return \`一个函数，则\`return\`函数会在组件卸载的时候执行，正如\`componentWillUnmount\`

\`\`\`jsx
const FunctionalComponent = () => {
 React.useEffect(() => {
   return () => {
     console.log("Bye");
   };
 }, []);
 return <h1>Bye, World</h1>;
};

\`\`\`





### 调用方式

如果是一个函数组件，调用则是执行函数即可：

\`\`\`jsx
// 你的代码 
function SayHi() { 
    return <p>Hello, React</p > 
} 
// React内部 
const result = SayHi(props) // » <p>Hello, React</p >
\`\`\`

如果是一个类组件，则需要将组件进行实例化，然后调用实例对象的\`render\`方法：

\`\`\`jsx
// 你的代码 
class SayHi extends React.Component { 
    render() { 
        return <p>Hello, React</p > 
    } 
} 
// React内部 
const instance = new SayHi(props) // » SayHi {} 
const result = instance.render() // » <p>Hello, React</p >
\`\`\`



### 获取渲染的值

首先给出一个示例

函数组件对应如下：

\`\`\`jsx
function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  }

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  }

  return (
    <button onClick={handleClick}>Follow</button>
  )
}
\`\`\`

类组件对应如下：

\`\`\`jsx
class ProfilePage extends React.Component {
  showMessage() {
    alert('Followed ' + this.props.user);
  }

  handleClick() {
    setTimeout(this.showMessage.bind(this), 3000);
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Follow</button>
  }
}
\`\`\`

两者看起来实现功能是一致的，但是在类组件中，输出\`this.props.user\`，\`Props \`在 \`React \`中是不可变的所以它永远不会改变，但是 \`this\` 总是可变的，以便您可以在 \`render\` 和生命周期函数中读取新版本

因此，如果我们的组件在请求运行时更新。\`this.props\` 将会改变。\`showMessage \`方法从“最新”的 \`props\` 中读取 \`user\`

而函数组件，本身就不存在\`this\`，\`props\`并不发生改变，因此同样是点击，\`alert\`的内容仍旧是之前的内容



### 小结

两种组件都有各自的优缺点

函数组件语法更短、更简单，这使得它更容易开发、理解和测试

而类组件也会因大量使用 \`this \`而让人感到困惑
      `
    },{
      title: "React中组件之间如何通信？",
      desc: "面试官：React中组件之间如何通信？",
      content:`
## 一、是什么

我们将组件间通信可以拆分为两个词：

- 组件
- 通信

回顾[Vue系列](https://mp.weixin.qq.com/s/uFjMz6BByA5eknBgkvgdeQ)的文章，组件是\`vue\`中最强大的功能之一，同样组件化是\`React\`的核心思想

相比\`vue\`，\`React\`的组件更加灵活和多样，按照不同的方式可以分成很多类型的组件

而通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的，广义上，任何信息的交通都是通信

组件间通信即指组件通过某种方式来传递信息以达到某个目的


## 二、如何通信

组件传递的方式有很多种，根据传送者和接收者可以分为如下：

- 父组件向子组件传递
- 子组件向父组件传递
- 兄弟组件之间的通信
- 父组件向后代组件传递
- 非关系组件传递


### 父组件向子组件传递

由于\`React\`的数据流动为单向的，父组件向子组件传递是最常见的方式

父组件在调用子组件的时候，只需要在子组件标签内传递参数，子组件通过\`props\`属性就能接收父组件传递过来的参数

\`\`\`jsx
function EmailInput(props) {
  return (
    <label>
      Email: <input value={props.email} />
    </label>
  );
}

const element = <EmailInput email="123124132@163.com" />;
\`\`\`


### 子组件向父组件传递

子组件向父组件通信的基本思路是，父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值

父组件对应代码如下：

\`\`\`jsx
class Parents extends Component {
  constructor() {
    super();
    this.state = {
      price: 0
    };
  }

  getItemPrice(e) {
    this.setState({
      price: e
    });
  }

  render() {
    return (
      <div>
        <div>price: {this.state.price}</div>
        {/* 向子组件中传入一个函数  */}
        <Child getPrice={this.getItemPrice.bind(this)} />
      </div>
    );
  }
}
\`\`\`

子组件对应代码如下：

\`\`\`jsx
class Child extends Component {
  clickGoods(e) {
    // 在此函数中传入值
    this.props.getPrice(e);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
        <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
      </div>
    );
  }
}
\`\`\`



### 兄弟组件之间的通信

如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递

\`\`\`jsx
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  setCount = () => {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div>
        <SiblingA
          count={this.state.count}
        />
        <SiblingB
          onClick={this.setCount}
        />
      </div>
    );
  }
}
\`\`\`



### 父组件向后代组件传递

父组件向后代组件传递数据是一件最普通的事情，就像全局数据一样

使用\`context\`提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据

通过使用\`React.createContext\`创建一个\`context\`

\`\`\`js
 const PriceContext = React.createContext('price')
\`\`\`

\`context\`创建成功后，其下存在\`Provider\`组件用于创建数据源，\`Consumer\`组件用于接收数据，使用实例如下：

\`Provider\`组件通过\`value\`属性用于给后代组件传递数据：

\`\`\`jsx
<PriceContext.Provider value={100}>
</PriceContext.Provider>
\`\`\`

如果想要获取\`Provider\`传递的数据，可以通过\`Consumer\`组件或者或者使用\`contextType\`属性接收，对应分别如下：

\`\`\`jsx
class MyClass extends React.Component {
  static contextType = PriceContext;
  render() {
    let price = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
\`\`\`

\`Consumer\`组件：

\`\`\`\`jsx
<PriceContext.Consumer>
    { /*这里是一个函数*/ }
    {
        price => <div>price：{price}</div>
    }
</PriceContext.Consumer>
\`\`\`\`



### 非关系组件传递

如果组件之间关系类型比较复杂的情况，建议将数据进行一个全局资源管理，从而实现通信，例如\`redux\`。关于\`redux\`的使用后续再详细介绍


## 三、总结

由于\`React\`是单向数据流，主要思想是组件不会改变接收的数据，只会监听数据的变化，当数据发生变化时它们会使用接收到的新值，而不是去修改已有的值

因此，可以看到通信过程中，数据的存储位置都是存放在上级位置中

## 参考文献

- https://react.docschina.org/docs/context.html
      `
    },{
      title: "说说对受控组件和非受控组件的理解？应用场景？",
      desc: "面试官：说说对受控组件和非受控组件的理解？应用场景？",
      content:`
## 一、受控组件

受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据

举个简单的例子：

\`\`\`jsx
class TestComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: 'lindaidai' };
  }
  render () {
    return <input name="username" value={this.state.username} />
  }
}
\`\`\`

这时候当我们在输入框输入内容的时候，会发现输入的内容并无法显示出来，也就是\`input\`标签是一个可读的状态

这是因为\`value\`被\`this.state.username\`所控制住。当用户输入新的内容时，\`this.state.username\`并不会自动更新，这样的话\`input\`内的内容也就不会变了

如果想要解除被控制，可以为\`input\`标签设置\`onChange\`事件，输入的时候触发事件函数，在函数内部实现\`state\`的更新，从而导致\`input\`框的内容页发现改变

因此，受控组件我们一般需要初始状态和一个状态更新事件函数



## 二、非受控组件

非受控组件，简单来讲，就是不受我们控制的组件

一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态

当需要时，可以使用\` ref \` 查询 \`DOM \`并查找其当前值，如下：

\`\`\`jsx
import React, { Component } from 'react';

export class UnControll extends Component {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSubmit = (e) => {
    console.log('我们可以获得input内的值为', this.inputRef.current.value);
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input defaultValue="lindaidai" ref={this.inputRef} />
        <input type="submit" value="提交" />
      </form>
    )
  }
}
\`\`\`

关于\`refs\`的详情使用可以参考[之前文章](https://mp.weixin.qq.com/s/ZBKWcslVBi0IKQgz7lYzbA)



## 三、应用场景

大部分时候推荐使用受控组件来实现表单，因为在受控组件中，表单数据由\`React\`组件负责处理

如果选择非受控组件的话，控制能力较弱，表单数据就由\`DOM\`本身处理，但更加方便快捷，代码量少

针对两者的区别，其应用场景如下图所示：

![](https://static.vue-js.com/f28aed20-df2f-11eb-ab90-d9ae814b240d.png)

      `
    },{
      title: "说说React diff的原理是什么？",
      desc: "面试官：说说React diff的原理是什么？",
      content:`
## 一、是什么

跟\`Vue\`一致，\`React\`通过引入\`Virtual DOM\`的概念，极大地避免无效的\`Dom\`操作，使我们的页面的构建效率提到了极大的提升

而\`diff\`算法就是更高效地通过对比新旧\`Virtual DOM\`来找出真正的\`Dom\`变化之处

传统diff算法通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O(n^3)，\`react\`将算法进行一个优化，复杂度姜维\`O(n)\`，两者效率差距如下图：

 ![](https://static.vue-js.com/a43c9960-ec91-11eb-ab90-d9ae814b240d.png)


## 二、原理

\`react\`中\`diff\`算法主要遵循三个层级的策略：

- tree层级

- conponent 层级

- element 层级


### tree层级

\`DOM\`节点跨层级的操作不做优化，只会对相同层级的节点进行比较

 ![](https://static.vue-js.com/ae71d1c0-ec91-11eb-85f6-6fac77c0c9b3.png)

只有删除、创建操作，没有移动操作，如下图：

 ![](https://static.vue-js.com/b85f2bb0-ec91-11eb-ab90-d9ae814b240d.png)

\`react\`发现新树中，R节点下没有了A，那么直接删除A，在D节点下创建A以及下属节点

上述操作中，只有删除和创建操作


### conponent层级

如果是同一个类的组件，则会继续往下\`diff\`运算，如果不是一个类的组件，那么直接删除这个组件下的所有子节点，创建新的

 ![](https://static.vue-js.com/c1fcdf00-ec91-11eb-ab90-d9ae814b240d.png)

当\`component D \`换成了\`component G\` 后，即使两者的结构非常类似，也会将\`D\`删除再重新创建\`G\`



### element层级

对于比较同一层级的节点们，每个节点在对应的层级用唯一的\`key\`作为标识

提供了 3 种节点操作，分别为 \`INSERT_MARKUP \`(插入)、\`MOVE_EXISTING\` (移动)和 \`REMOVE_NODE\` (删除)

如下场景：

 ![](https://static.vue-js.com/cae1c9a0-ec91-11eb-ab90-d9ae814b240d.png)

通过\`key\`可以准确地发现新旧集合中的节点都是相同的节点，因此无需进行节点删除和创建，只需要将旧集合中节点的位置进行移动，更新为新集合中节点的位置

流程如下表：

 ![](https://static.vue-js.com/d34c5420-ec91-11eb-85f6-6fac77c0c9b3.png)

- index： 新集合的遍历下标。
- oldIndex：当前节点在老集合中的下标
- maxIndex：在新集合访问过的节点中，其在老集合的最大下标

如果当前节点在新集合中的位置比老集合中的位置靠前的话，是不会影响后续节点操作的，这里这时候被动字节不用动

操作过程中只比较oldIndex和maxIndex，规则如下：

- 当oldIndex>maxIndex时，将oldIndex的值赋值给maxIndex
- 当oldIndex=maxIndex时，不操作
- 当oldIndex<maxIndex时，将当前节点移动到index的位置

\`diff\`过程如下：

- 节点B：此时 maxIndex=0，oldIndex=1；满足 maxIndex< oldIndex，因此B节点不动，此时maxIndex= Math.max(oldIndex, maxIndex)，就是1
- 节点A：此时maxIndex=1，oldIndex=0；不满足maxIndex< oldIndex，因此A节点进行移动操作，此时maxIndex= Math.max(oldIndex, maxIndex)，还是1
- 节点D：此时maxIndex=1, oldIndex=3；满足maxIndex< oldIndex，因此D节点不动，此时maxIndex= Math.max(oldIndex, maxIndex)，就是3
- 节点C：此时maxIndex=3，oldIndex=2；不满足maxIndex< oldIndex，因此C节点进行移动操作，当前已经比较完了

当ABCD节点比较完成后，\`diff\`过程还没完，还会整体遍历老集合中节点，看有没有没用到的节点，有的话，就删除



## 三、注意事项

对于简单列表渲染而言，不使用\`key\`比使用\`key\`的性能，例如：

将一个[1,2,3,4,5]，渲染成如下的样子：

\`\`\`html
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
\`\`\`

后续更改成[1,3,2,5,4]，使用\`key\`与不使用\`key\`作用如下：

\`\`\`html
1.加key
<div key='1'>1</div>             <div key='1'>1</div>     
<div key='2'>2</div>             <div key='3'>3</div>  
<div key='3'>3</div>  ========>  <div key='2'>2</div>  
<div key='4'>4</div>             <div key='5'>5</div>  
<div key='5'>5</div>             <div key='4'>4</div>  
操作：节点2移动至下标为2的位置，节点4移动至下标为4的位置。

2.不加key
<div>1</div>             <div>1</div>     
<div>2</div>             <div>3</div>  
<div>3</div>  ========>  <div>2</div>  
<div>4</div>             <div>5</div>  
<div>5</div>             <div>4</div>  
操作：修改第1个到第5个节点的innerText
\`\`\`

如果我们对这个集合进行增删的操作改成[1,3,2,5,6]

\`\`\`html
1.加key
<div key='1'>1</div>             <div key='1'>1</div>     
<div key='2'>2</div>             <div key='3'>3</div>  
<div key='3'>3</div>  ========>  <div key='2'>2</div>  
<div key='4'>4</div>             <div key='5'>5</div>  
<div key='5'>5</div>             <div key='6'>6</div>  
操作：节点2移动至下标为2的位置，新增节点6至下标为4的位置，删除节点4。

2.不加key
<div>1</div>             <div>1</div>     
<div>2</div>             <div>3</div>  
<div>3</div>  ========>  <div>2</div>  
<div>4</div>             <div>5</div>  
<div>5</div>             <div>6</div> 
操作：修改第1个到第5个节点的innerText
\`\`\`

由于\`dom\`节点的移动操作开销是比较昂贵的，没有\`key\`的情况下要比有\`key\`的性能更好

      `
    },{
      title: "说说对高阶组件的理解？应用场景",
      desc: "面试官：说说对高阶组件的理解？应用场景",
      content:`
## 一、是什么

高阶函数（Higher-order function），至少满足下列一个条件的函数

- 接受一个或多个函数作为输入
- 输出一个函数

在\`React\`中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件

\`\`\`jsx
const EnhancedComponent = highOrderComponent(WrappedComponent);
\`\`\`

上述代码中，该函数接受一个组件\`WrappedComponent\`作为参数，返回加工过的新组件\`EnhancedComponent\`

高阶组件的这种实现方式，本质上是一个装饰者设计模式


## 二、如何编写

最基本的高阶组件的编写模板如下：

\`\`\`jsx
import React, { Component } from 'react';

export default (WrappedComponent) => {
  return class EnhancedComponent extends Component {
    // do something
    render() {
      return <WrappedComponent />;
    }
  }
}
\`\`\`

通过对传入的原始组件 \`WrappedComponent\` 做一些你想要的操作（比如操作 props，提取 state，给原始组件包裹其他元素等），从而加工出想要的组件 \`EnhancedComponent\`

把通用的逻辑放在高阶组件中，对组件实现一致的处理，从而实现代码的复用

所以，高阶组件的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好地被复用

但在使用高阶组件的同时，一般遵循一些约定，如下：

- props 保持一致
- 你不能在函数式（无状态）组件上使用 ref 属性，因为它没有实例
- 不要以任何方式改变原始组件 WrappedComponent
- 透传不相关 props 属性给被包裹的组件 WrappedComponent
- 不要再 render() 方法中使用高阶组件
- 使用  compose 组合高阶组件
- 包装显示名字以便于调试

这里需要注意的是，高阶组件可以传递所有的\`props\`，但是不能传递\`ref\`

如果向一个高阶组件添加\`refe\`引用，那么\`ref\` 指向的是最外层容器组件实例的，而不是被包裹的组件，如果需要传递\`refs\`的话，则使用\`React.forwardRef\`，如下：

\`\`\`jsx
function withLogging(WrappedComponent) {
    class Enhance extends WrappedComponent {
        componentWillReceiveProps() {
            console.log('Current props', this.props);
            console.log('Next props', nextProps);
        }
        render() {
            const {forwardedRef, ...rest} = this.props;
            // 把 forwardedRef 赋值给 ref
            return <WrappedComponent {...rest} ref={forwardedRef} />;
        }
    };

    // React.forwardRef 方法会传入 props 和 ref 两个参数给其回调函数
    // 所以这边的 ref 是由 React.forwardRef 提供的
    function forwardRef(props, ref) {
        return <Enhance {...props} forwardRef={ref} />
    }

    return React.forwardRef(forwardRef);
}
const EnhancedComponent = withLogging(SomeComponent);
\`\`\`


## 三、应用场景

通过上面的了解，高阶组件能够提高代码的复用性和灵活性，在实际应用中，常常用于与核心业务无关但又在多个模块使用的功能，如权限控制、日志记录、数据校验、异常处理、统计上报等

举个例子，存在一个组件，需要从缓存中获取数据，然后渲染。一般情况，我们会如下编写：

\`\`\`jsx
import React, { Component } from 'react'

class MyComponent extends Component {

  componentWillMount() {
      let data = localStorage.getItem('data');
      this.setState({data});
  }
  
  render() {
    return <div>{this.state.data}</div>
  }
}
\`\`\`

上述代码当然可以实现该功能，但是如果还有其他组件也有类似功能的时候，每个组件都需要重复写\`componentWillMount\`中的代码，这明显是冗杂的

下面就可以通过高价组件来进行改写，如下：

\`\`\`jsx
import React, { Component } from 'react'

function withPersistentData(WrappedComponent) {
  return class extends Component {
    componentWillMount() {
      let data = localStorage.getItem('data');
        this.setState({data});
    }
    
    render() {
      // 通过{...this.props} 把传递给当前组件的属性继续传递给被包装的组件WrappedComponent
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

class MyComponent2 extends Component {  
  render() {
    return <div>{this.props.data}</div>
  }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent2)
\`\`\`

再比如组件渲染性能监控，如下：

\`\`\`jsx
class Home extends React.Component {
    render() {
        return (<h1>Hello World.</h1>);
    }
}
function withTiming(WrappedComponent) {
    return class extends WrappedComponent {
        constructor(props) {
            super(props);
            this.start = 0;
            this.end = 0;
        }
        componentWillMount() {
            super.componentWillMount && super.componentWillMount();
            this.start = Date.now();
        }
        componentDidMount() {
            super.componentDidMount && super.componentDidMount();
            this.end = Date.now();
            console.log(\`\${WrappedComponent.name} 组件渲染时间为 \${this.end - this.start} ms\`);
        }
        render() {
            return super.render();
        }
    };
}

export default withTiming(Home);
\`\`\`

      `
    },{
      title: "React项目中是如何使用Redux的? 项目结构是如何划分的？",
      desc: "面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？",
      content:`
## 一、背景

在前面文章了解中，我们了解到\`redux\`是用于数据状态管理，而\`react\`是一个视图层面的库

如果将两者连接在一起，可以使用官方推荐\`react-redux\`库，其具有高效且灵活的特性

\`react-redux\`将组件分成：

- 容器组件：存在逻辑处理
- UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制

通过\`redux\`将整个应用状态存储到\`store\`中，组件可以派发\`dispatch\`行为\`action\`给\`store\`

其他组件通过订阅\`store\`中的状态\`state\`来更新自身的视图


## 二、如何做

使用\`react-redux\`分成了两大核心：

- Provider
- connection

### Provider

在\`redux\`中存在一个\`store\`用于存储\`state\`，如果将这个\`store\`存放在顶层元素中，其他组件都被包裹在顶层元素之上

那么所有的组件都能够受到\`redux\`的控制，都能够获取到\`redux\`中的数据

使用方式如下：

\`\`\`js
<Provider store = {store}>
    <App />
<Provider>
\`\`\`



### connection

\`connect\`方法将\`store\`上的\`getState \`和 \`dispatch \`包装成组件的\`props\`

导入\`conect\`如下：

\`\`\`js
import { connect } from "react-redux";
\`\`\`

用法如下：

\`\`\`js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
\`\`\`

可以传递两个参数：

- mapStateToProps

- mapDispatchToProps



### mapStateToProps

把\`redux\`中的数据映射到\`react\`中的\`props\`中去

如下：

\`\`\`jsx
const mapStateToProps = (state) => {
    return {
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        foo: state.bar
    }
}
\`\`\`

组件内部就能够通过\`props\`获取到\`store\`中的数据

\`\`\`cons
class Foo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
         // 这样子渲染的其实就是state.bar的数据了
            <div>this.props.foo</div>
        )
    }
}
Foo = connect()(Foo)
export default Foo
\`\`\`


### mapDispatchToProps

将\`redux\`中的\`dispatch\`映射到组件内部的\`props\`中

\`\`\`jsx
const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
  return {
    onClick: () => {
      dispatch({
        type: 'increatment'
      });
    }
  };
}

\`\`\`

\`\`\`js
class Foo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
         
             <button onClick = {this.props.onClick}>点击increase</button>
        )
    }
}
Foo = connect()(Foo);
export default Foo;
\`\`\`


### 小结

整体流程图大致如下所示：

 ![](https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png)



## 三、项目结构

可以根据项目具体情况进行选择，以下列出两种常见的组织结构

#### 按角色组织（MVC）

角色如下：

- reducers 
- actions
- components 
- containers 

参考如下：

\`\`\`js
reducers/
  todoReducer.js
  filterReducer.js
actions/
  todoAction.js
  filterActions.js
components/
  todoList.js
  todoItem.js
  filter.js
containers/
  todoListContainer.js
  todoItemContainer.js
  filterContainer.js
\`\`\`

#### 按功能组织

使用\`redux\`使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码

\`Redux\`中，不同的角色就是\`reducer\`、\`actions\`和视图，而应用功能对应的就是用户界面的交互模块

参考如下：

\`\`\`js
todoList/
  actions.js
  actionTypes.js
  index.js
  reducer.js
  views/
    components.js
    containers.js
filter/
  actions.js
  actionTypes.js
  index.js
  reducer.js
  views/
    components.js
    container.js
\`\`\`

每个功能模块对应一个目录，每个目录下包含同样的角色文件：

- actionTypes.js 定义action类型
- actions.js 定义action构造函数
- reducer.js  定义这个功能模块如果响应actions.js定义的动作
- views 包含功能模块中所有的React组件，包括展示组件和容器组件
- index.js 把所有的角色导入，统一导出

其中\`index\`模块用于导出对外的接口

\`\`\`js
import * as actions from './actions.js';
import reducer from './reducer.js';
import view from './views/container.js';

export { actions, reducer, view };
\`\`\`

导入方法如下：

\`\`\`js
import { actions, reducer, view as TodoList } from './xxxx'
\`\`\`
      `
    },{
      title: "react中引入css的方式有哪几种？区别？",
      desc: "面试官：说说react中引入css的方式有哪几种？区别？",
      content:`
## 一、是什么

组件式开发选择合适的\`css\`解决方案尤为重要

通常会遵循以下规则：

- 可以编写局部css，不会随意污染其他组件内的原生；
- 可以编写动态的css，可以获取当前组件的一些状态，根据状态的变化生成不同的css样式；
- 支持所有的css特性：伪类、动画、媒体查询等；
- 编写起来简洁方便、最好符合一贯的css风格特点

在这一方面，\`vue\`使用\`css\`起来更为简洁：

- 通过 style 标签编写样式
- scoped 属性决定编写的样式是否局部有效
- lang 属性设置预处理器
- 内联样式风格的方式来根据最新状态设置和改变css

而在\`react\`中，引入\`CSS\`就不如\`Vue\`方便简洁，其引入\`css\`的方式有很多种，各有利弊


## 二、方式

常见的\`CSS\`引入方式有以下：

- 在组件内直接使用
- 组件中引入 .css 文件
- 组件中引入 .module.css 文件
- CSS in JS


### 在组件内直接使用

直接在组件中书写\`css\`样式，通过\`style\`属性直接引入，如下：

\`\`\`js
import React, { Component } from "react";

const div1 = {
  width: "300px",
  margin: "30px auto",
  backgroundColor: "#44014C",  //驼峰法
  minHeight: "200px",
  boxSizing: "border-box"
};

class Test extends Component {
  constructor(props, context) {
    super(props);
  }
 
  render() {
    return (
     <div>
       <div style={div1}>123</div>
       <div style={{backgroundColor:"red"}}>
     </div>
    );
  }
}

export default Test;
\`\`\`

上面可以看到，\`css\`属性需要转换成驼峰写法

这种方式优点：

- 内联样式, 样式之间不会有冲突
- 可以动态获取当前state中的状态

缺点：

- 写法上都需要使用驼峰标识

- 某些样式没有提示

- 大量的样式, 代码混乱

- 某些样式无法编写(比如伪类/伪元素)

 

### 组件中引入css文件

将\`css\`单独写在一个\`css\`文件中，然后在组件中直接引入

\`App.css\`文件：

\`\`\`css
.title {
  color: red;
  font-size: 20px;
}

.desc {
  color: green;
  text-decoration: underline;
}
\`\`\`

组件中引入：

\`\`\`js
import React, { PureComponent } from 'react';

import Home from './Home';

import './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">我是App的标题</h2>
        <p className="desc">我是App中的一段文字描述</p >
        <Home/>
      </div>
    )
  }
}
\`\`\`

这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响



### 组件中引入 .module.css 文件

将\`css\`文件作为一个模块引入，这个模块中的所有\`css\`，只作用于当前组件。不会影响当前组件的后代组件

这种方式是\`webpack\`特工的方案，只需要配置\`webpack\`配置文件中\`modules:true\`即可

\`\`\`jsx
import React, { PureComponent } from 'react';

import Home from './Home';

import './App.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">我是App的标题</h2>
        <p className="desc">我是App中的一段文字描述</p >
        <Home/>
      </div>
    )
  }
}
\`\`\`

这种方式能够解决局部作用域问题，但也有一定的缺陷：

- 引用的类名，不能使用连接符(.xxx-xx)，在 JavaScript 中是不识别的
- 所有的 className 都必须使用 {style.className} 的形式来编写
- 不方便动态来修改某些样式，依然需要使用内联样式的方式；



### CSS in JS

CSS-in-JS， 是指一种模式，其中\` CSS \`由 \`JavaScript \`生成而不是在外部文件中定义

此功能并不是 React 的一部分，而是由第三方库提供，例如：

- styled-components
- emotion
- glamorous



下面主要看看\`styled-components\`的基本使用

本质是通过函数的调用，最终创建出一个组件：

- 这个组件会被自动添加上一个不重复的class
- styled-components会给该class添加相关的样式

基本使用如下：

创建一个\`style.js\`文件用于存放样式组件：

\`\`\`js
export const SelfLink = styled.div\`
  height: 50px;
  border: 1px solid red;
  color: yellow;
\`;

export const SelfButton = styled.div\`
  height: 150px;
  width: 150px;
  color: \${props => props.color};
  background-image: url(\${props => props.src});
  background-size: 150px 150px;
\`;
\`\`\`

引入样式组件也很简单：

\`\`\`jsx
import React, { Component } from "react";

import { SelfLink, SelfButton } from "./style";

class Test extends Component {
  constructor(props, context) {
    super(props);
  }  
 
  render() {
    return (
     <div>
       <SelfLink title="People's Republic of China">app.js</SelfLink>
       <SelfButton color="palevioletred" style={{ color: "pink" }} src={fist}>
          SelfButton
        </SelfButton>
     </div>
    );
  }
}

export default Test;
\`\`\`



## 三、区别

通过上面四种样式的引入，可以看到：

- 在组件内直接使用\`css\`该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱
- 组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠
- 引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写

- 通过css in js 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等

至于使用\`react\`用哪种方案引入\`css\`，并没有一个绝对的答案，可以根据各自情况选择合适的方案

      `
    },{
      title: "如何提高组件的渲染效率的？在React中如何避免不必要的render？",
      desc: "面试官：说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？",
      content:`
\`react\` 基于虚拟 \`DOM\` 和高效 \`Diff \`算法的完美配合，实现了对 \`DOM \`最小粒度的更新，大多数情况下，\`React \`对 \`DOM \`的渲染效率足以我们的业务日常

复杂业务场景下，性能问题依然会困扰我们。此时需要采取一些措施来提升运行性能，避免不必要的渲染则是业务中常见的优化手段之一


## 二、如何做

在之前文章中，我们了解到\`render\`的触发时机，简单来讲就是类组件通过调用\`setState\`方法， 就会导致\`render\`，父组件一旦发生\`render\`渲染，子组件一定也会执行\`render\`渲染

从上面可以看到，父组件渲染导致子组件渲染，子组件并没有发生任何改变，这时候就可以从避免无谓的渲染，具体实现的方式有如下：

- shouldComponentUpdate
- PureComponent
- React.memo


### shouldComponentUpdate

通过\`shouldComponentUpdate\`生命周期函数来比对 \`state \`和 \`props\`，确定是否要重新渲染

默认情况下返回\`true\`表示重新渲染，如果不希望组件重新渲染，返回 \`false\` 即可


### PureComponent

跟\`shouldComponentUpdate \`原理基本一致，通过对 \`props\` 和 \`state\`的浅比较结果来实现 \`shouldComponentUpdate\`，源码大致如下：

\`\`\`js
if (this._compositeType === CompositeTypes.PureClass) {
    shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);
}
\`\`\`

\`shallowEqual\`对应方法大致如下：

\`\`\`js
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * is 方法来判断两个值是否是相等的值，为何这么写可以移步 MDN 的文档
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: mixed, y: mixed): boolean {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA: mixed, objB: mixed): boolean {
  // 首先对基本类型进行比较
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 长度不相等直接返回false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // key相等的情况下，再去循环比较
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
\`\`\`

当对象包含复杂的数据结构时，对象深层的数据已改变却没有触发 \`render\`

注意：在\`react\`中，是不建议使用深层次结构的数据


### React.memo

\`React.memo\`用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 \`PureComponent\` 十分类似。但不同的是， \`React.memo\` 只能用于函数组件

\`\`\`jsx
import { memo } from 'react';

function Button(props) {
  // Component code
}

export default memo(Button);
\`\`\`

如果需要深层次比较，这时候可以给\`memo\`第二个参数传递比较函数

\`\`\`jsx
function arePropsEqual(prevProps, nextProps) {
  // your code
  return prevProps === nextProps;
}

export default memo(Button, arePropsEqual);
\`\`\`


## 三、总结

在实际开发过程中，前端性能问题是一个必须考虑的问题，随着业务的复杂，遇到性能问题的概率也在增高

除此之外，建议将页面进行更小的颗粒化，如果一个过大，当状态发生修改的时候，就会导致整个大组件的渲染，而对组件进行拆分后，粒度变小了，也能够减少子组件不必要的渲染
      `
    },{
      title: "React Jsx转换成真实DOM过程？",
      desc: "面试官：说说React Jsx转换成真实DOM过程？",
      content:`
\`react\`通过将组件编写的\`JSX\`映射到屏幕，以及组件中的状态发生了变化之后 \`React\`会将这些「变化」更新到屏幕上

在前面文章了解中，\`JSX\`通过\`babel\`最终转化成\`React.createElement\`这种形式，例如：

\`\`\`jsx
<div>
  < img src="avatar.png" className="profile" />
  <Hello />
</div>
\`\`\`

会被\`bebel\`转化成如下：

\`\`\`jsx
React.createElement(
  "div",
  null,
  React.createElement("img", {
    src: "avatar.png",
    className: "profile"
  }),
  React.createElement(Hello, null)
);
\`\`\`

在转化过程中，\`babel\`在编译时会判断 JSX 中组件的首字母：

- 当首字母为小写时，其被认定为原生 \`DOM\` 标签，\`createElement\` 的第一个变量被编译为字符串

- 当首字母为大写时，其被认定为自定义组件，createElement 的第一个变量被编译为对象

最终都会通过\`RenderDOM.render(...)\`方法进行挂载，如下：

\`\`\`jsx
ReactDOM.render(<App />,  document.getElementById("root"));
\`\`\`



## 二、过程

在\`react\`中，节点大致可以分成四个类别：

- 原生标签节点
- 文本节点
- 函数组件
- 类组件

如下所示：

\`\`\`jsx
class ClassComponent extends Component {
  static defaultProps = {
    color: "pink"
  };
  render() {
    return (
      <div className="border">
        <h3>ClassComponent</h3>
        <p className={this.props.color}>{this.props.name}</p >
      </div>
    );
  }
}

function FunctionComponent(props) {
  return (
    <div className="border">
      FunctionComponent
      <p>{props.name}</p >
    </div>
  );
}

const jsx = (
  <div className="border">
    <p>xx</p >
    < a href=" ">xxx</ a>
    <FunctionComponent name="函数组件" />
    <ClassComponent name="类组件" color="red" />
  </div>
);
\`\`\`

这些类别最终都会被转化成\`React.createElement\`这种形式

\`React.createElement\`其被调用时会传⼊标签类型\`type\`，标签属性\`props\`及若干子元素\`children\`，作用是生成一个虚拟\`Dom\`对象，如下所示：

\`\`\`js
function createElement(type, config, ...children) {
    if (config) {
        delete config.__self;
        delete config.__source;
    }
    // ! 源码中做了详细处理，⽐如过滤掉key、ref等
    const props = {
        ...config,
        children: children.map(child =>
   typeof child === "object" ? child : createTextNode(child)
  )
    };
    return {
        type,
        props
    };
}
function createTextNode(text) {
    return {
        type: TEXT,
        props: {
            children: [],
            nodeValue: text
        }
    };
}
export default {
    createElement
};
\`\`\`

\`createElement\`会根据传入的节点信息进行一个判断：

- 如果是原生标签节点， type 是字符串，如div、span
- 如果是文本节点， type就没有，这里是 TEXT
- 如果是函数组件，type 是函数名
- 如果是类组件，type 是类名

虚拟\`DOM\`会通过\`ReactDOM.render\`进行渲染成真实\`DOM\`，使用方法如下：

\`\`\`jsx
ReactDOM.render(element, container[, callback])
\`\`\`

当首次调用时，容器节点里的所有 \`DOM\` 元素都会被替换，后续的调用则会使用 \`React\` 的 \`diff\`算法进行高效的更新

如果提供了可选的回调函数\`callback\`，该回调将在组件被渲染或更新之后被执行

\`render\`大致实现方法如下：

\`\`\`js
function render(vnode, container) {
    console.log("vnode", vnode); // 虚拟DOM对象
    // vnode _> node
    const node = createNode(vnode, container);
    container.appendChild(node);
}

// 创建真实DOM节点
function createNode(vnode, parentNode) {
    let node = null;
    const {type, props} = vnode;
    if (type === TEXT) {
        node = document.createTextNode("");
    } else if (typeof type === "string") {
        node = document.createElement(type);
    } else if (typeof type === "function") {
        node = type.isReactComponent
            ? updateClassComponent(vnode, parentNode)
        : updateFunctionComponent(vnode, parentNode);
    } else {
        node = document.createDocumentFragment();
    }
    reconcileChildren(props.children, node);
    updateNode(node, props);
    return node;
}

// 遍历下子vnode，然后把子vnode->真实DOM节点，再插入父node中
function reconcileChildren(children, node) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (Array.isArray(child)) {
            for (let j = 0; j < child.length; j++) {
                render(child[j], node);
            }
        } else {
            render(child, node);
        }
    }
}
function updateNode(node, nextVal) {
    Object.keys(nextVal)
        .filter(k => k !== "children")
        .forEach(k => {
        if (k.slice(0, 2) === "on") {
            let eventName = k.slice(2).toLocaleLowerCase();
            node.addEventListener(eventName, nextVal[k]);
        } else {
            node[k] = nextVal[k];
        }
    });
}

// 返回真实dom节点
// 执行函数
function updateFunctionComponent(vnode, parentNode) {
    const {type, props} = vnode;
    let vvnode = type(props);
    const node = createNode(vvnode, parentNode);
    return node;
}

// 返回真实dom节点
// 先实例化，再执行render函数
function updateClassComponent(vnode, parentNode) {
    const {type, props} = vnode;
    let cmp = new type(props);
    const vvnode = cmp.render();
    const node = createNode(vvnode, parentNode);
    return node;
}
export default {
    render
};
\`\`\`





## 三、总结

在\`react\`源码中，虚拟\`Dom\`转化成真实\`Dom\`整体流程如下图所示：

 ![](https://static.vue-js.com/28824fa0-f00a-11eb-ab90-d9ae814b240d.png)

其渲染流程如下所示：

- 使用React.createElement或JSX编写React组件，实际上所有的 JSX 代码最后都会转换成React.createElement(...) ，Babel帮助我们完成了这个转换的过程。
- createElement函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟DOM对象
- ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM

      `
    },{
      title: "React中的key有什么作用？",
      desc: "面试官：React中的key有什么作用？",
      content:`
首先，先给出\`react\`组件中进行列表渲染的一个示例：

\`\`\`jsx
const data = [
  { id: 0, name: 'abc' },
  { id: 1, name: 'def' },
  { id: 2, name: 'ghi' },
  { id: 3, name: 'jkl' }
];

const ListItem = (props) => {
  return <li>{props.name}</li>;
};

const List = () => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem name={item.name}></ListItem>
      ))}
    </ul>
  );
};
\`\`\`

然后在输出就可以看到\`react\`所提示的警告信息：

\`\`\`tex
Each child in a list should have a unique "key" prop.
\`\`\`

根据意思就可以得到渲染列表的每一个子元素都应该需要一个唯一的\`key\`值

在这里可以使用列表的\`id\`属性作为\`key\`值以解决上面这个警告

\`\`\`jsx
const List = () => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem name={item.name} key={item.id}></ListItem>
      ))}
    </ul>
  );
};
\`\`\`



## 二、作用

跟\`Vue\`一样，\`React\` 也存在 \`Diff\`算法，而元素\`key\`属性的作用是用于判断元素是新创建的还是被移动的元素，从而减少不必要的元素渲染

因此\`key\`的值需要为每一个元素赋予一个确定的标识

如果列表数据渲染中，在数据后面插入一条数据，\`key\`作用并不大，如下：

\`\`\`jsx
this.state = {
    numbers:[111,222,333]
}

insertMovie() {
  const newMovies = [...this.state.numbers, 444];
  this.setState({
    movies: newMovies
  })
}

<ul>
    {
        this.state.movies.map((item, index) => {
            return <li>{item}</li>
        })
    }
</ul>
\`\`\`

前面的元素在\`diff\`算法中，前面的元素由于是完全相同的，并不会产生删除创建操作，在最后一个比较的时候，则需要插入到新的\`DOM\`树中

因此，在这种情况下，元素有无\`key\`属性意义并不大

下面再来看看在前面插入数据时，使用\`key\`与不使用\`key\`的区别：

\`\`\`js
insertMovie() {
  const newMovies = [000 ,...this.state.numbers];
  this.setState({
    movies: newMovies
  })
}
\`\`\`

当拥有\`key\`的时候，\`react\`根据\`key\`属性匹配原有树上的子元素以及最新树上的子元素，像上述情况只需要将000元素插入到最前面位置

当没有\`key\`的时候，所有的\`li\`标签都需要进行修改

同样，并不是拥有\`key\`值代表性能越高，如果说只是文本内容改变了，不写\`key\`反而性能和效率更高

主要是因为不写\`key\`是将所有的文本内容替换一下，节点不会发生变化

而写\`key\`则涉及到了节点的增和删，发现旧\`key\`不存在了，则将其删除，新\`key\`在之前没有，则插入，这就增加性能的开销



## 三、总结

良好使用\`key\`属性是性能优化的非常关键的一步，注意事项为：

- key 应该是唯一的
- key不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）

- 使用 index 作为 key值，对性能没有优化

\`react\`判断\`key\`的流程具体如下图：

![](https://static.vue-js.com/3b9afe10-dd69-11eb-ab90-d9ae814b240d.png)

      `
    },{
      title: "React 生命周期有哪些不同阶段？",
      desc: "面试官：说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？",
      content:`
生命周期\`（Life Cycle）\`的概念应用很广泛，特别是在经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”\`（Cradle-to-Grave）\`的整个过程

跟\`Vue\`一样，\`React\`整个组件生命周期包括从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程


## 二、流程

这里主要讲述\`react16.4\`之后的生命周期，可以分成三个阶段：

- 创建阶段
- 更新阶段
- 卸载阶段


### 创建阶段

创建阶段主要分成了以下几个生命周期方法：

- constructor
- getDerivedStateFromProps
- render
- componentDidMount


#### constructor

实例过程中自动调用的方法，在方法内部通过\`super\`关键字获取来自父组件的\`props\`

在该方法中，通常的操作为初始化\`state\`状态或者在\`this\`上挂载方法


### getDerivedStateFromProps

该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例

执行时机：组件创建和更新阶段，不论是\`props\`变化还是\`state\`变化，也会调用

在每次\`render\`方法前调用，第一个参数为即将更新的\`props\`，第二个参数为上一个状态的\`state\`，可以比较\`props\` 和 \`state\`来加一些限制条件，防止无用的state更新

该方法需要返回一个新的对象作为新的\`state\`或者返回\`null\`表示\`state\`状态不需要更新


### render

类组件必须实现的方法，用于渲染\`DOM\`结构，可以访问组件\`state\`与\`prop\`属性

注意： 不要在 \`render\` 里面 \`setState\`, 否则会触发死循环导致内存崩溃


### componentDidMount

组件挂载到真实\`DOM\`节点后执行，其在\`render\`方法之后执行

此方法多用于执行一些数据获取，事件监听等操作



### 更新阶段

该阶段的函数主要为如下方法：

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate



### getDerivedStateFromProps

该方法介绍同上


## shouldComponentUpdate

用于告知组件本身基于当前的\`props\`和\`state\`是否需要重新渲染组件，默认情况返回\`true\`

执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否

一般情况，不建议在该周期方法中进行深层比较，会影响效率

同时也不能调用\`setState\`，否则会导致无限循环调用更新



### render

介绍如上


### getSnapshotBeforeUpdate

该周期函数在\`render\`后执行，执行之时\`DOM\`元素还没有被更新

该方法返回的一个\`Snapshot\`值，作为\`componentDidUpdate\`第三个参数传入

\`\`\`jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('#enter getSnapshotBeforeUpdate');
    return 'foo';
}

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('#enter componentDidUpdate snapshot = ', snapshot);
}
\`\`\`

此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态



### componentDidUpdate

执行时机：组件更新结束后触发

在该方法中，可以根据前后的\`props\`和\`state\`的变化做相应的操作，如获取数据，修改\`DOM\`样式等



### 卸载阶段

## componentWillUnmount

此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等

一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建



## 三、总结

新版生命周期整体流程如下图所示：

 ![](https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png)

旧的生命周期流程图如下：

![](https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png)

通过两个图的对比，可以发现新版的生命周期减少了以下三种方法：

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

其实这三个方法仍然存在，只是在前者加上了\`UNSAFE_\`前缀，如\`UNSAFE_componentWillMount\`，并不像字面意思那样表示不安全，而是表示这些生命周期的代码可能在未来的 \`react \`版本可能废除

同时也新增了两个生命周期函数：

- getDerivedStateFromProps
- getSnapshotBeforeUpdate

      `
    },{
      title: "说说对React Hooks的理解？解决了什么问题？",
      desc: "面试官：说说对React Hooks的理解？解决了什么问题？",
      content:`
## 一、是什么

\`Hook\` 是 React 16.8 的新增特性。它可以让你在不编写 \`class\` 的情况下使用 \`state\` 以及其他的 \`React\` 特性

至于为什么引入\`hook\`，官方给出的动机是解决长时间使用和维护\`react\`过程中常遇到的问题，例如：

- 难以重用和共享组件中的与状态相关的逻辑
- 逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面
- 类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题
- 由于业务变动，函数组件不得不改为类组件等等

在以前，函数组件也被称为无状态的组件，只负责渲染的一些工作

因此，现在的函数组件也可以是有状态的组件，内部也可以维护自身的状态以及做一些逻辑方面的处理


## 二、有哪些

上面讲到，\`Hooks\`让我们的函数组件拥有了类组件的特性，例如组件内的状态、生命周期

最常见的\`hooks\`有如下：

- useState
- useEffect
- 其他


### useState

首先给出一个例子，如下：

\`\`\`js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p >
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

在函数组件中通过\`useState\`实现函数内部维护\`state\`，参数为\`state\`默认的值，返回值是一个数组，第一个值为当前的\`state\`，第二个值为更新\`state\`的函数

该函数组件等价于的类组件如下：

\`\`\`js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p >
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
\`\`\`

从上述两种代码分析，可以看出两者区别：

- state声明方式：在函数组件中通过 useState 直接获取，类组件通过constructor 构造函数中设置
- state读取方式：在函数组件中直接使用变量，类组件通过\`this.state.count\`的方式获取

- state更新方式：在函数组件中通过 setCount 更新，类组件通过this.setState()

总的来讲，useState 使用起来更为简洁，减少了\`this\`指向不明确的情况



### useEffect

\`useEffect\`可以让我们在函数组件中进行一些带有副作用的操作

同样给出一个计时器示例：

\`\`\`js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = \`You clicked \${this.state.count} times\`;
  }
  componentDidUpdate() {
    document.title = \`You clicked \${this.state.count} times\`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p >
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
\`\`\`

从上面可以看见，组件在加载和更新阶段都执行同样操作

而如果使用\`useEffect\`后，则能够将相同的逻辑抽离出来，这是类组件不具备的方法

对应的\`useEffect\`示例如下：

\`\`\`jsx
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {    document.title = \`You clicked \${count} times\`;  });
  return (
    <div>
      <p>You clicked {count} times</p >
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

\`useEffect\`第一个参数接受一个回调函数，默认情况下，\`useEffect\`会在第一次渲染和更新之后都会执行，相当于在\`componentDidMount\`和\`componentDidUpdate\`两个生命周期函数中执行回调

如果某些特定值在两次重渲染之间没有发生变化，你可以跳过对 effect 的调用，这时候只需要传入第二个参数，如下：

\`\`\`js
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // 仅在 count 更改时更新
\`\`\`

上述传入第二个参数后，如果 \`count\` 的值是 \`5\`，而且我们的组件重渲染的时候 \`count\` 还是等于 \`5\`，React 将对前一次渲染的 \`[5]\` 和后一次渲染的 \`[5]\` 进行比较，如果是相等则跳过\`effects\`执行

回调函数中可以返回一个清除函数，这是\`effect\`可选的清除机制，相当于类组件中\`componentwillUnmount\`生命周期函数，可做一些清除副作用的操作，如下：

\`\`\`jsx
useEffect(() => {
    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
});
\`\`\`

所以， \`useEffect\`相当于\`componentDidMount\`，\`componentDidUpdate\` 和 \`componentWillUnmount\` 这三个生命周期函数的组合



### 其它 hooks

在组件通信过程中可以使用\`useContext\`，\`refs\`学习中我们也用到了\`useRef\`获取\`DOM\`结构......

还有很多额外的\`hooks\`，如：

- useReducer
- useCallback
- useMemo
- useRef



## 三、解决什么

通过对上面的初步认识，可以看到\`hooks\`能够更容易解决状态相关的重用的问题：

- 每调用useHook一次都会生成一份独立的状态

- 通过自定义hook能够更好的封装我们的功能

编写\`hooks\`为函数式编程，每个功能都包裹在函数中，整体风格更清爽，更优雅

\`hooks\`的出现，使函数组件的功能得到了扩充，拥有了类组件相似的功能，在我们日常使用中，使用\`hooks\`能够解决大多数问题，并且还拥有代码复用机制，因此优先考虑\`hooks\`

      `
    },{
      title: "说说React Router有几种模式？实现原理？",
      desc: "面试官：说说React Router有几种模式？实现原理？",
      content:`
## 一、是什么

在单页应用中，一个\`web\`项目只有一个\`html\`页面，一旦页面加载完成之后，就不用因为用户的操作而进行页面的重新加载或者跳转，其特性如下：

- 改变 url 且不让浏览器像服务器发送请求

- 在不刷新页面的前提下动态改变浏览器地址栏中的URL地址

其中主要分成了两种模式：

- hash 模式：在url后面加上#，如http://127.0.0.1:5500/home/#/page1
- history 模式：允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录


## 二、使用

\`React Router\`对应的\`hash\`模式和\`history\`模式对应的组件为：

- HashRouter
- BrowserRouter


这两个组件的使用都十分的简单，作为最顶层组件包裹其他组件，如下所示

\`\`\`jsx
// 1.import { BrowserRouter as Router } from "react-router-dom";
// 2.import { HashRouter as Router } from "react-router-dom";

import React from 'react';
import {
  BrowserRouter as Router,
  // HashRouter as Router  
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Backend from './pages/Backend';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
        <Route path="/login" component={Login}/>
        <Route path="/backend" component={Backend}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;
\`\`\`



## 三、实现原理

路由描述了 \`URL\` 与 \`UI \`之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）

下面以\`hash\`模式为例子，改变\`hash\`值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新页面

\`hash\` 值改变，触发全局 \`window\` 对象上的 \`hashchange\` 事件。所以 \`hash\` 模式路由就是利用 \`hashchange\` 事件监听 \`URL\` 的变化，从而进行 \`DOM\` 操作来模拟页面跳转

\`react-router\`也是基于这个特性实现路由的跳转

下面以\`HashRouter\`组件分析进行展开：


## HashRouter

\`HashRouter\`包裹了整应用，

通过\`window.addEventListener('hashChange',callback)\`监听\`hash\`值的变化，并传递给其嵌套的组件

然后通过\`context\`将\`location\`数据往后代组件传递，如下：

\`\`\`jsx
import React, { Component } from 'react';
import { Provider } from './context'
// 该组件下Api提供给子组件使用
class HashRouter extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  // url路径变化 改变location
  componentDidMount() {
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      }, () => console.log(this.state.location))
    })
  }
  render() {
    let value = {
      location: this.state.location
    }
    return (
      <Provider value={value}>
        {
          this.props.children
        }
      </Provider>
    );
  }
}

export default HashRouter;

\`\`\`


### Router

\`Router\`组件主要做的是通过\`BrowserRouter\`传过来的当前值，通过\`props\`传进来的\`path\`与\`context\`传进来的\`pathname\`进行匹配，然后决定是否执行渲染组件

\`\`\`js
import React, { Component } from 'react';
import { Consumer } from './context'
const { pathToRegexp } = require("path-to-regexp");
class Route extends Component {
  render() {
    return (
      <Consumer>
        {
          state => {
            console.log(state)
            let {path, component: Component} = this.props
            let pathname = state.location.pathname
            let reg = pathToRegexp(path, [], {end: false})
            // 判断当前path是否包含pathname
            if(pathname.match(reg)) {
              return <Component></Component>
            }
            return null
          }
        }
      </Consumer>
    );
  }
}
export default Route;

\`\`\`

      `
    },{
      title: "说说对React refs 的理解？应用场景？",
      desc: "面试官：说说对React refs 的理解？应用场景？",
      content:`
## 一、是什么
\`Refs\` 在计算机中称为弹性文件系统（英语：Resilient File System，简称ReFS）

\`React\` 中的 \`Refs\`提供了一种方式，允许我们访问 \`DOM \`节点或在 \`render \`方法中创建的 \`React \`元素

本质为\`ReactDOM.render()\`返回的组件实例，如果是渲染组件则返回的是组件实例，如果渲染\`dom\`则返回的是具体的\`dom\`节点


## 二、如何使用

创建\`ref\`的形式有三种：

- 传入字符串，使用时通过 this.refs.传入的字符串的格式获取对应的元素
- 传入对象，对象是通过 React.createRef()  方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素
- 传入函数，该函数会在 DOM 被挂载时进行回调，这个函数会传入一个 元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可
- 传入hook，hook是通过 useRef() 方式创建，使用时通过生成hook对象的 current 属性就是对应的元素



### 传入字符串

只需要在对应元素或组件中\`ref\`属性

\`\`\`jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref="myref" />;
  }
}
\`\`\`

访问当前节点的方式如下：

\`\`\`js
this.refs.myref.innerHTML = "hello";
\`\`\`


### 传入对象

\`refs\`通过\`React.createRef()\`创建，然后将\`ref\`属性添加到\`React\`元素中，如下：

\`\`\`jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
\`\`\`

当 \`ref\` 被传递给 \`render\` 中的元素时，对该节点的引用可以在 \`ref\` 的 \`current\` 属性中访问

\`\`\`js
const node = this.myRef.current;
\`\`\`


### 传入函数

当\`ref\`传入为一个函数的时候，在渲染过程中，回调函数参数会传入一个元素对象，然后通过实例将对象进行保存

\`\`\`jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={element => this.myref = element} />;
  }
}
\`\`\`

获取\`ref\`对象只需要通过先前存储的对象即可

\`\`\`js
const node = this.myref 
\`\`\`


### 传入hook

通过\`useRef\`创建一个\`ref\`，整体使用方式与\`React.createRef\`一致

\`\`\`jsx
function App(props) {
  const myref = useRef()
  return (
    <>
      <div ref={myref}></div>
    </>
  )
}
\`\`\`

获取\`ref\`属性也是通过\`hook\`对象的\`current\`属性

\`\`\`js
const node = myref.current;
\`\`\`

上述三种情况都是\`ref\`属性用于原生\`HTML\`元素上，如果\`ref\`设置的组件为一个类组件的时候，\`ref\`对象接收到的是组件的挂载实例

注意的是，不能在函数组件上使用\`ref\`属性，因为他们并没有实例


## 三、应用场景

在某些情况下，我们会通过使用\`refs\`来更新组件，但这种方式并不推荐，更多情况我们是通过\`props\`与\`state\`的方式进行去重新渲染子元素

过多使用\`refs\`，会使组件的实例或者是\`DOM\`结构暴露，违反组件封装的原则

例如，避免在 \`Dialog\` 组件里暴露 \`open()\` 和 \`close()\` 方法，最好传递 \`isOpen\` 属性

但下面的场景使用\`refs\`非常有用：

- 对Dom元素的焦点控制、内容选择、控制
- 对Dom元素的内容设置及媒体播放
- 对Dom元素的操作和对组件实例的操作
- 集成第三方 DOM 库

      `
    },{
      title: "说说你对React Router的理解？常用的Router组件有哪些？",
      desc: "面试官：说说你对React Router的理解？常用的Router组件有哪些？",
      content:`
## 一、是什么

\`react-router\`等前端路由的原理大致相同，可以实现无刷新的条件下切换显示不同的页面

路由的本质就是页面的\`URL\`发生改变时，页面的显示结果可以根据\`URL\`的变化而变化，但是页面不会刷新

因此，可以通过前端路由可以实现单页(SPA)应用

\`react-router\`主要分成了几个不同的包：

- react-router: 实现了路由的核心功能
- react-router-dom： 基于 react-router，加入了在浏览器运行环境下的一些功能
- react-router-native：基于 react-router，加入了 react-native 运行环境下的一些功能

- react-router-config: 用于配置静态路由的工具库





## 二、有哪些

这里主要讲述的是\`react-router-dom\`的常用\`API\`，主要是提供了一些组件：

- BrowserRouter、HashRouter
- Route
- Link、NavLink
- switch
- redirect



### BrowserRouter、HashRouter

\`Router\`中包含了对路径改变的监听，并且会将相应的路径传递给子组件

\`BrowserRouter\`是\`history\`模式，\`HashRouter\`模式

使用两者作为最顶层组件包裹其他组件

\`\`\`jsx
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              < a href=" ">Home</ a>
            </li>
            <li>
              < a href="/about">About</ a>
            </li>
            <li>
              < a href="/contact">Contact</ a>
            </li>
          </ul>
        </nav>
      </main>
    </Router>
  );
}
\`\`\`



### Route

\`Route\`用于路径的匹配，然后进行组件的渲染，对应的属性如下：

- path 属性：用于设置匹配到的路径
- component 属性：设置匹配到路径后，渲染的组件
- render 属性：设置匹配到路径后，渲染的内容
- exact 属性：开启精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件

\`\`\`jsx
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              < a href="/">Home</ a>
            </li>
            <li>
              < a href="/about">About</ a>
            </li>
            <li>
              < a href="/contact">Contact</ a>
            </li>
          </ul>
        </nav>
        <Route path="/" render={() => <h1>Welcome!</h1>} />
      </main>
    </Router>
  );
}
\`\`\`





### Link、NavLink

通常路径的跳转是使用\`Link\`组件，最终会被渲染成\`a\`元素，其中属性\`to\`代替\`a\`标题的\`href\`属性

\`NavLink\`是在\`Link\`基础之上增加了一些样式属性，例如组件被选中时，发生样式变化，则可以设置\`NavLink\`的一下属性：

- activeStyle：活跃时（匹配时）的样式
- activeClassName：活跃时添加的class

如下：

\`\`\`js
<NavLink to="/" exact activeStyle={{color: "red"}}>首页</NavLink>
<NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>
<NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>
\`\`\`

如果需要实现\`js\`实现页面的跳转，那么可以通过下面的形式：

通过\`Route\`作为顶层组件包裹其他组件后,页面组件就可以接收到一些路由相关的东西，比如\`props.history\`

\`\`\`jsx
const Contact = ({ history }) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push("/")}>Go to home</button>
    <FakeText />
  </Fragment>
);
\`\`\`

\`props \`中接收到的\`history\`对象具有一些方便的方法，如\`goBack\`，\`goForward\`,\`push\`



### redirect

用于路由的重定向，当这个组件出现时，就会执行跳转到对应的\`to\`路径中，如下例子：

\`\`\`js
const About = ({
  match: {
    params: { name },
  },
}) => (
  // props.match.params.name
  <Fragment>
    {name !== "tom" ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
)
\`\`\`

上述组件当接收到的路由参数\`name\` 不等于 \`tom\` 的时候，将会自动重定向到首页





### switch

\`swich\`组件的作用适用于当匹配到第一个组件的时候，后面的组件就不应该继续匹配

如下例子：

\`\`\`jsx
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/:userid" component={User} />
  <Route component={NoMatch} />
</Switch>
\`\`\`

如果不使用\`switch\`组件进行包裹





除了一些路由相关的组件之外，\`react-router\`还提供一些\`hooks\`，如下：

- useHistory
- useParams
- useLocation



### useHistory

\`useHistory\`可以让组件内部直接访问\`history\`，无须通过\`props\`获取

\`\`\`js
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  return (
    <Fragment>
      <h1>Contact</h1>
      <button onClick={() => history.push("/")}>Go to home</button>
    </Fragment>
  );
};
\`\`\`



### useParams



\`\`\`jsx
const About = () => {
  const { name } = useParams();
  return (
    // props.match.params.name
    <Fragment>
      {name !== "John Doe" ? <Redirect to="/" /> : null}
      <h1>About {name}</h1>
      <Route component={Contact} />
    </Fragment>
  );
};
\`\`\`



### useLocation

\`useLocation\` 会返回当前 \`URL \`的 \`location \`对象

\`\`\`jsx
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <h1>Contact</h1>
      <p>Current URL: {pathname}</p >
    </Fragment>
  );
};
\`\`\`





## 三、参数传递

这些路由传递参数主要分成了三种形式：

- 动态路由的方式
- search传递参数
- to传入对象



### 动态路由

动态路由的概念指的是路由中的路径并不会固定

例如将\`path\`在\`Route\`匹配时写成\`/detail/:id\`，那么 \`/detail/abc\`、\`/detail/123\`都可以匹配到该\`Route\`

\`\`\`jsx
<NavLink to="/detail/abc123">详情</NavLink>

<Switch>
    ... 其他Route
    <Route path="/detail/:id" component={Detail}/>
    <Route component={NoMatch} />
</Switch>
\`\`\`

获取参数方式如下：

\`\`\`jsx
console.log(props.match.params.xxx)
\`\`\`



### search传递参数

在跳转的路径中添加了一些query参数；

\`\`\`jsx
<NavLink to="/detail2?name=why&age=18">详情2</NavLink>

<Switch>
  <Route path="/detail2" component={Detail2}/>
</Switch>
\`\`\`

获取形式如下：

\`\`\`js
console.log(props.location.search)
\`\`\`





### to传入对象

传递方式如下：

\`\`\`jsx
<NavLink to={{
    pathname: "/detail2", 
    query: {name: "kobe", age: 30},
    state: {height: 1.98, address: "洛杉矶"},
    search: "?apikey=123"
  }}>
  详情2
</NavLink>
\`\`\`

获取参数的形式如下：

\`\`\`js
console.log(props.location)
\`\`\`
      `
    },{
      title: "说说 Real DOM 和 Virtual DOM 的区别？优缺点？",
      desc: "面试官：说说 Real DOM 和 Virtual DOM 的区别？优缺点？",
      content:`
## 一、是什么

Real DOM，真实 \`DOM\`，意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实 \`DOM\` 结构，如下：

![](https://static.vue-js.com/fc7ba8d0-d302-11eb-85f6-6fac77c0c9b3.png)

\`Virtual Dom\`，本质上是以 \`JavaScript\` 对象形式存在的对 \`DOM\` 的描述

创建虚拟 \`DOM\` 目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟 \`DOM\` 对象的节点与真实 \`DOM\` 的属性一一照应

在 \`React\` 中，\`JSX\` 是其一大特性，可以让你在 \`JS\` 中通过使用 \`XML\` 的方式去直接声明界面的 \`DOM\` 结构

\`\`\`jsx
// 创建 h1 标签，右边千万不能加引号
const vDom = <h1>Hello World</h1>; 
// 找到 <div id="root"></div> 节点
const root = document.getElementById("root"); 
// 把创建的 h1 标签渲染到 root 节点上
ReactDOM.render(vDom, root); 
\`\`\`

上述中，\`ReactDOM.render()\` 用于将你创建好的虚拟 \`DOM\` 节点插入到某个真实节点上，并渲染到页面上

\`JSX\` 实际是一种语法糖，在使用过程中会被 \`babel\` 进行编译转化成 \`JS\` 代码，上述 \`VDOM\` 转化为如下：

\`\`\`jsx
const vDom = React.createElement(
  'h1'，
  { className: 'hClass', id: 'hId' },
  'hello world'
)
\`\`\`

可以看到，\`JSX\` 就是为了简化直接调用 \`React.createElement()\` 方法：

- 第一个参数是标签名，例如 h1、span、table...

- 第二个参数是个对象，里面存着标签的一些属性，例如 id、class 等

- 第三个参数是节点中的文本

通过 \`console.log(VDOM)\`，则能够得到虚拟 \`VDOM\` 消息

![](https://static.vue-js.com/1716b9a0-d303-11eb-ab90-d9ae814b240d.png)

所以可以得到，\`JSX\` 通过 \`babel\` 的方式转化成 \`React.createElement\` 执行，返回值是一个对象，也就是虚拟 \`DOM\`

## 二、区别

两者的区别如下：

- 虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘
- 虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”

拿[以前文章](https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484516&idx=1&sn=965a4ce32bf93adb9ed112922c5cb8f5&chksm=fc10c632cb674f2484fdf914d76fba55afcefca3b5adcbe6cf4b0c7fd36e29d0292e8cefceb5&scene=178&cur_album_id=1711105826272116736#rd)举过的例子：

传统的原生 \`api\` 或 \`jQuery\` 去操作 \`DOM\` 时，浏览器会从构建 \`DOM\` 树开始从头到尾执行一遍流程

当你在一次操作时，需要更新 10 个 \`DOM\` 节点，浏览器没这么智能，收到第一个更新 \`DOM\` 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程

而通过 \`VNode\`，同样更新 10 个 \`DOM\` 节点，虚拟 \`DOM\` 不会立即操作 \`DOM\`，而是将这 10 次更新的 \`diff\` 内容保存到本地的一个 \`js\` 对象中，最终将这个 \`js\` 对象一次性 \`attach\` 到 \`DOM\` 树上，避免大量的无谓计算

## 三、优缺点

真实 \`DOM\` 的优势：

- 易用

缺点：

- 效率低，解析速度慢，内存占用量过高
- 性能差：频繁操作真实 DOM，易于导致重绘与回流

使用虚拟 \`DOM\` 的优势如下：

- 简单方便：如果使用手动操作真实 \`DOM\` 来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难

- 性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能
- 跨平台：React 借助虚拟 DOM，带来了跨平台的能力，一套代码多端运行

缺点：

- 在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
- 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢

      `
    },{
      title: "说说你对Redux的理解？其工作原理？",
      desc: "面试官：说说你对Redux的理解？其工作原理？",
      content:`
## 一、是什么

\`React\`是用于构建用户界面的，帮助我们解决渲染\`DOM\`的过程

而在整个应用中会存在很多个组件，每个组件的\`state\`是由自身进行管理，包括组件定义自身的\`state\`、组件之间的通信通过\`props\`传递、使用\`Context\`实现数据共享

如果让每个组件都存储自身相关的状态，理论上来讲不会影响应用的运行，但在开发及后续维护阶段，我们将花费大量精力去查询状态的变化过程

这种情况下，如果将所有的状态进行集中管理，当需要更新状态的时候，仅需要对这个管理集中处理，而不用去关心状态是如何分发到每一个组件内部的

\`redux\`就是一个实现上述集中管理的容器，遵循三大基本原则：

- 单一数据源
- state 是只读的
- 使用纯函数来执行修改

注意的是，\`redux\`并不是只应用在\`react\`中，还与其他界面库一起使用，如\`Vue\`


## 二、工作原理

\`redux \`要求我们把数据都放在 \`store \`公共存储空间

一个组件改变了 \`store\` 里的数据内容，其他组件就能感知到 \`store \`的变化，再来取数据，从而间接的实现了这些数据传递的功能

工作流程图如下所示：

 ![](https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png)

根据流程图，可以想象，\`React Components\` 是借书的用户， \`Action Creactor\` 是借书时说的话(借什么书)， \`Store\` 是图书馆管理员，\`Reducer\` 是记录本(借什么书，还什么书，在哪儿，需要查一下)， \`state\` 是书籍信息

整个流程就是借书的用户需要先存在，然后需要借书，需要一句话来描述借什么书，图书馆管理员听到后需要查一下记录本，了解图书的位置，最后图书馆管理员会把这本书给到这个借书人

转换为代码是，\`React Components\` 需要获取一些数据, 然后它就告知 \`Store\` 需要获取数据，这就是就是 \`Action Creactor\` , \`Store\` 接收到之后去 \`Reducer\` 查一下， \`Reducer\` 会告诉 \`Store\` 应该给这个组件什么数据



## 三、如何使用

创建一个\`store\`的公共数据区域

\`\`\`js
import { createStore } from 'redux' // 引入一个第三方的方法
const store = createStore() // 创建数据的公共存储区域（管理员）
\`\`\`

还需要创建一个记录本去辅助管理数据，也就是\`reduecer\`，本质就是一个函数，接收两个参数\`state\`，\`action\`，返回\`state\`

\`\`\`js
// 设置默认值
const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
}
\`\`\`

然后就可以将记录本传递给\`store\`，两者建立连接。如下：

\`\`\`js
const store = createStore(reducer)
\`\`\`

如果想要获取\`store\`里面的数据，则通过\`store.getState()\`来获取当前\`state\`

\`\`\`js
console.log(store.getState());
\`\`\`

下面再看看如何更改\`store\`里面数据，是通过\`dispatch\`来派发\`action\`，通常\`action\`中都会有\`type\`属性，也可以携带其他的数据

\`\`\`js
store.dispatch({
  type: "INCREMENT"
})

store.dispath({
  type: "DECREMENT"
})

store.dispatch({
  type: "ADD_NUMBER",
  number: 5
})
\`\`\`

下面再来看看修改\`reducer\`中的处理逻辑：

\`\`\`js
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
    default: 
      return state;
  }
}
\`\`\`

注意，\`reducer\`是一个纯函数，不需要直接修改\`state\`

这样派发\`action\`之后，既可以通过\`store.subscribe\`监听\`store\`的变化，如下：

\`\`\`js
store.subscribe(() => {
  console.log(store.getState());
})
\`\`\`

在\`React\`项目中，会搭配\`react-redux\`进行使用

完整代码如下：

\`\`\`js
const redux = require('redux');

const initialState = {
  counter: 0
}

// 创建reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
    default: 
      return state;
  }
}

// 根据reducer创建store
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

// 修改store中的state
store.dispatch({
  type: "INCREMENT"
})
// console.log(store.getState());

store.dispatch({
  type: "DECREMENT"
})
// console.log(store.getState());

store.dispatch({
  type: "ADD_NUMBER",
  number: 5
})
// console.log(store.getState());
\`\`\`



### 小结

- createStore可以帮助创建 store
- store.dispatch 帮助派发 action , action 会传递给 store
- store.getState 这个方法可以帮助获取 store 里边所有的数据内容
- store.subscrible 方法订阅 store 的改变，只要 store 发生改变， store.subscrible 这个函数接收的这个回调函数就会被执行

      `
    },{
      title: "React render方法的原理？在什么时候会被触发？",
      desc: "面试官：说说React render方法的原理？在什么时候会被触发？",
      content:`
## 一、原理

首先，\`render\`函数在\`react\`中有两种形式：

在类组件中，指的是\`render\`方法：

\`\`\`jsx
class Foo extends React.Component {
    render() {
        return <h1> Foo </h1>;
    }
}
\`\`\`

在函数组件中，指的是函数组件本身：

\`\`\`js
function Foo() {
    return <h1> Foo </h1>;
}
\`\`\`

在\`render\`中，我们会编写\`jsx\`，\`jsx\`通过\`babel\`编译后就会转化成我们熟悉的\`js\`格式，如下：

\`\`\`jsx
return (
  <div className='cn'>
    <Header> hello </Header>
    <div> start </div>
    Right Reserve
  </div>
)
\`\`\`

\`babel\`编译后：

\`\`\`js
return (
  React.createElement(
    'div',
    {
      className : 'cn'
    },
    React.createElement(
      Header,
      null,
      'hello'
    ),
    React.createElement(
      'div',
      null,
      'start'
    ),
    'Right Reserve'
  )
)
\`\`\`

从名字上来看，\`createElement\`方法用来元素的

在\`react\`中，这个元素就是虚拟\`DOM\`树的节点，接收三个参数：

- type：标签
- attributes：标签属性，若无则为null

- children：标签的子节点

这些虚拟\`DOM\`树最终会渲染成真实\`DOM\`

在\`render\`过程中，\`React\` 将新调用的 \`render \`函数返回的树与旧版本的树进行比较，这一步是决定如何更新 \`DOM\` 的必要步骤，然后进行 \`diff\` 比较，更新 \`DOM \`树





## 二、触发时机

\`render\`的执行时机主要分成了两部分：

- 类组件调用 setState 修改状态

\`\`\`jsx
class Foo extends React.Component {
  state = { count: 0 };

  increment = () => {
    const { count } = this.state;

    const newCount = count < 10 ? count + 1 : count;

    this.setState({ count: newCount });
  };

  render() {
    const { count } = this.state;
    console.log("Foo render");

    return (
      <div>
        <h1> {count} </h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
\`\`\`

点击按钮，则调用\`setState\`方法，无论\`count\`发生变化辩护，控制台都会输出\`Foo render\`，证明\`render\`执行了

- 函数组件通过\`useState hook\`修改状态

\`\`\`jsx
function Foo() {
  const [count, setCount] = useState(0);

  function increment() {
    const newCount = count < 10 ? count + 1 : count;
    setCount(newCount);
  }

  console.log("Foo render");
  
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`

函数组件通过\`useState\`这种形式更新数据，当数组的值不发生改变了，就不会触发\`render\`

- 类组件重新渲染

\`\`\`js
class App extends React.Component {
  state = { name: "App" };
  render() {
    return (
      <div className="App">
        <Foo />
        <button onClick={() => this.setState({ name: "App" })}>
          Change name
        </button>
      </div>
    );
  }
}

function Foo() {
  console.log("Foo render");

  return (
    <div>
      <h1> Foo </h1>
    </div>
  );
}
\`\`\`

只要点击了 \`App\` 组件内的 \`Change name\` 按钮，不管 \`Foo\` 具体实现是什么，都会被重新\`render\`渲染

- 函数组件重新渲染

\`\`\`jsx
function App(){
    const [name,setName] = useState('App')

    return (
        <div className="App">
            <Foo />
            <button onClick={() => setName("aaa")}>
                { name }
            </button>
      </div>
    )
}

function Foo() {
  console.log("Foo render");

  return (
    <div>
      <h1> Foo </h1>
    </div>
  );
}
\`\`\`

可以发现，使用\`useState\`来更新状态的时候，只有首次会触发\`Foo render\`，后面并不会导致\`Foo render\`



## 三、总结

\`render\`函数里面可以编写\`JSX\`，转化成\`createElement\`这种形式，用于生成虚拟\`DOM\`，最终转化成真实\`DOM\`

在\` React\` 中，类组件只要执行了 \`setState\` 方法，就一定会触发 \`render\` 函数执行，函数组件使用\`useState\`更改状态不一定导致重新\`render\`

组件的\` props\` 改变了，不一定触发 \`render\` 函数的执行，但是如果 \`props\` 的值来自于父组件或者祖先组件的 \`state\`

在这种情况下，父组件或者祖先组件的 \`state\` 发生了改变，就会导致子组件的重新渲染

所以，一旦执行了\`setState\`就会执行\`render\`方法，\`useState\` 会判断当前值有无发生改变确定是否执行\`render\`方法，一旦父组件发生渲染，子组件也会渲染

![](https://static.vue-js.com/229784b0-ecf5-11eb-ab90-d9ae814b240d.png)

      `
    },{
      title: "React服务端渲染怎么做？原理是什么？",
      desc: "面试官：说说React服务端渲染怎么做？原理是什么？",
      content:`
在[SSR中](https://mp.weixin.qq.com/s/vvUtC_aAprUjoJRnfFjA1A)，我们了解到\`Server-Side Rendering\` ，简称\`SSR\`，意为服务端渲染

指由服务侧完成页面的 \`HTML\` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程

 ![](https://static.vue-js.com/96dc3e20-f3f7-11eb-85f6-6fac77c0c9b3.png)

其解决的问题主要有两个：

- SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
- 加速首屏加载，解决首屏白屏问题


## 二、如何做

在\`react\`中，实现\`SSR\`主要有两种形式：

- 手动搭建一个 SSR 框架
- 使用成熟的SSR 框架，如 Next.JS


这里主要以手动搭建一个\`SSR\`框架进行实现

首先通过\`express\`启动一个\`app.js\`文件，用于监听3000端口的请求，当请求根目录时，返回\`HTML\`，如下：

\`\`\`js
const express = require('express')
const app = express()
app.get('/', (req,res) => res.send(\`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
       Hello world
   </body>
</html>
\`))

app.listen(3000, () => console.log('Exampleapp listening on port 3000!'))
\`\`\`

然后再服务器中编写\`react\`代码，在\`app.js\`中进行应引用

\`\`\`jsx
import React from 'react'

const Home = () =>{

    return <div>home</div>

}

export default Home
\`\`\`

为了让服务器能够识别\`JSX\`，这里需要使用\`webpakc\`对项目进行打包转换，创建一个配置文件\`webpack.server.js\`并进行相关配置，如下：

\`\`\`js
const path = require('path')    //node的path模块
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target:'node',
    mode:'development',           //开发模式
    entry:'./app.js',             //入口
    output: {                     //打包出口
        filename:'bundle.js',     //打包后的文件名
        path:path.resolve(__dirname,'build')    //存放到根目录的build文件夹
    },
    externals: [nodeExternals()],  //保持node中require的引用方式
    module: {
        rules: [{                  //打包规则
           test:   /\.js?$/,       //对所有js文件进行打包
           loader:'babel-loader',  //使用babel-loader进行打包
           exclude: /node_modules/,//不打包node_modules中的js文件
           options: {
               presets: ['react','stage-0',['env', { 
                                  //loader时额外的打包规则,对react,JSX，ES6进行转换
                    targets: {
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容
                    }
               }]]
           }
       }]
    }
}
\`\`\`

接着借助\`react-dom\`提供了服务端渲染的 \`renderToString\`方法，负责把\`React\`组件解析成\`html\`

\`\`\`js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Home from'./src/containers/Home'

const app= express()
const content = renderToString(<Home/>)
app.get('/',(req,res) => res.send(\`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        \${content}
   </body>
</html>
\`))

app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))
\`\`\`

上面的过程中，已经能够成功将组件渲染到了页面上

但是像一些事件处理的方法，是无法在服务端完成，因此需要将组件代码在浏览器中再执行一遍，这种服务器端和客户端共用一套代码的方式就称之为**同构**

重构通俗讲就是一套React代码在服务器上运行一遍，到达浏览器又运行一遍：

- 服务端渲染完成页面结构
- 浏览器端渲染完成事件绑定

浏览器实现事件绑定的方式为让浏览器去拉取\`JS\`文件执行，让\`JS\`代码来控制，因此需要引入\`script\`标签

通过\`script\`标签为页面引入客户端执行的\`react\`代码，并通过\`express\`的\`static\`中间件为\`js\`文件配置路由，修改如下：

\`\`\`js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from'react-dom/server'//引入renderToString方法
import Home from './src/containers/Home'
 
const app = express()
app.use(express.static('public'));
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹
 const content = renderToString(<Home/>)
 
app.get('/',(req,res)=>res.send(\`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        \${content}
   <script src="/index.js"></script>
   </body>
</html>
\`))

 app.listen(3001, () =>console.log('Example app listening on port 3001!'))
\`\`\`

然后再客户端执行以下\`react\`代码，新建\`webpack.client.js\`作为客户端React代码的\`webpack\`配置文件如下：

\`\`\`js
const path = require('path')                    //node的path模块

module.exports = {
    mode:'development',                         //开发模式
    entry:'./src/client/index.js',              //入口
    output: {                                   //打包出口
        filename:'index.js',                    //打包后的文件名
        path:path.resolve(__dirname,'public')   //存放到根目录的build文件夹
    },
    module: {
        rules: [{                               //打包规则
           test:   /\.js?$/,                    //对所有js文件进行打包
           loader:'babel-loader',               //使用babel-loader进行打包
           exclude: /node_modules/,             //不打包node_modules中的js文件
           options: {
               presets: ['react','stage-0',['env', {     
                    //loader时额外的打包规则,这里对react,JSX进行转换
                    targets: {
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容
                    }
               }]]
           }
       }]
    }
}
\`\`\`

这种方法就能够简单实现首页的\`react\`服务端渲染，过程对应如下图：

 ![](https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png)

在做完初始渲染的时候，一个应用会存在路由的情况，配置信息如下：

\`\`\`js
import React from 'react'                   //引入React以支持JSX
import { Route } from 'react-router-dom'    //引入路由
import Home from './containers/Home'        //引入Home组件

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
    </div>
)
\`\`\`

然后可以通过\`index.js\`引用路由信息，如下：

\`\`\`js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from'react-router-dom'
import Router from'../Routers'

const App= () => {
    return (
        <BrowserRouter>
           {Router}
        </BrowserRouter>
    )
}

ReactDom.hydrate(<App/>, document.getElementById('root'))
\`\`\`

这时候控制台会存在报错信息，原因在于每个\`Route\`组件外面包裹着一层\`div\`，但服务端返回的代码中并没有这个\`div\`

解决方法只需要将路由信息在服务端执行一遍，使用使用\`StaticRouter\`来替代\`BrowserRouter\`，通过\`context\`进行参数传递

\`\`\`js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import { StaticRouter } from 'react-router-dom'
import Router from '../Routers'
 
const app = express()
app.use(express.static('public'));
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹

app.get('/',(req,res)=>{
    const content  = renderToString((
        //传入当前path
        //context为必填参数,用于服务端渲染参数传递
        <StaticRouter location={req.path} context={{}}>
           {Router}
        </StaticRouter>
    ))
    res.send(\`
   <html>
       <head>
           <title>ssr demo</title>
       </head>
       <body>
       <div id="root">\${content}</div>
       <script src="/index.js"></script>
       </body>
   </html>
    \`)
})


app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))
\`\`\`

这样也就完成了路由的服务端渲染



## 三、原理

整体\`react\`服务端渲染原理并不复杂，具体如下：

\`node server\` 接收客户端请求，得到当前的请求\`url\` 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 \`props\`、\`context\`或者\`store\` 形式传入组件

然后基于 \`react\` 内置的服务端渲染方法 \`renderToString()\`把组件渲染为 \`html\`字符串在把最终的 \`html \`进行输出前需要将数据注入到浏览器端

浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 \`html\` 节点，整个流程结束
      `
    },{
      title: "React中的setState执行机制",
      desc: "面试官：说说 React中的setState执行机制",
      content:`
## 一、是什么

一个组件的显示形态可以由数据状态和外部参数所决定，而数据状态就是\`state\`

当需要修改里面的值的状态需要通过调用\`setState\`来改变，从而达到更新组件内部数据的作用

如下例子：

\`\`\`jsx
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello World"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={e => this.changeText()}>面试官系列</button>
            </div>
        )
    }

    changeText() {
        this.setState({
            message: "JS每日一题"
        })
    }
}
\`\`\`

通过点击按钮触发\`onclick\`事件，执行\`this.setState\`方法更新\`state\`状态，然后重新执行\`render\`函数，从而导致页面的视图更新

如果直接修改\`state\`的状态，如下：

\`\`\`jsx
changeText() {
    this.state.message = "你好啊,李银河";
}
\`\`\`

我们会发现页面并不会有任何反应，但是\`state\`的状态是已经发生了改变

这是因为\`React\`并不像\`vue2\`中调用\`Object.defineProperty\`数据响应式或者\`Vue3\`调用\`Proxy\`监听数据的变化

必须通过\`setState\`方法来告知\`react\`组件\`state\`已经发生了改变

关于\`state\`方法的定义是从\`React.Component\`中继承，定义的源码如下：

\`\`\`js
Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
\`\`\`

从上面可以看到\`setState\`第一个参数可以是一个对象，或者是一个函数，而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据



## 二、更新类型

在使用\`setState\`更新数据的时候，\`setState\`的更新类型分成：

- 异步更新
- 同步更新

### 异步更新

先举出一个例子：

\`\`\`jsx
changeText() {
  this.setState({
    message: "你好啊"
  })
  console.log(this.state.message); // Hello World
}
\`\`\`

从上面可以看到，最终打印结果为\`Hello world\`，并不能在执行完\`setState\`之后立马拿到最新的\`state\`的结果

如果想要立刻获取更新后的值，在第二个参数的回调中更新后会执行

\`\`\`jsx
changeText() {
  this.setState({
    message: "你好啊"
  }, () => {
    console.log(this.state.message); // 你好啊
  });
}
\`\`\`



### 同步更新

同样先给出一个在\`setTimeout\`中更新的例子：

\`\`\`jsx
changeText() {
  setTimeout(() => {
    this.setState({
      message: "你好啊
    });
    console.log(this.state.message); // 你好啊
  }, 0);
}
\`\`\`

上面的例子中，可以看到更新是同步

再来举一个原生\`DOM\`事件的例子：

\`\`\`jsx
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  })
}
\`\`\`



### 小结

- 在组件生命周期或React合成事件中，setState是异步
- 在setTimeout或者原生dom事件中，setState是同步



### 三、批量更新

同样先给出一个例子：

\`\`\`jsx
handleClick = () => {
    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1

    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1

    this.setState({
        count: this.state.count + 1,
    })
    console.log(this.state.count) // 1
}
\`\`\`

点击按钮触发事件，打印的都是 1，页面显示 \`count\` 的值为 2

对同一个值进行多次 \`setState \`， \`setState\` 的批量更新策略会对其进行覆盖，取最后一次的执行结果

上述的例子，实际等价于如下：

\`\`\`js
Object.assign(
  previousState,
  {index: state.count+ 1},
  {index: state.count+ 1},
  ...
)
\`\`\`

由于后面的数据会覆盖前面的更改，所以最终只加了一次

如果是下一个\`state\`依赖前一个\`state\`的话，推荐给\`setState\`一个参数传入一个\`function\`，如下：

\`\`\`jsx
onClick = () => {
    this.setState((prevState, props) => {
      return {count: prevState.count + 1};
    });
    this.setState((prevState, props) => {
      return {count: prevState.count + 1};
    });
}
\`\`\`

而在\`setTimeout\`或者原生\`dom\`事件中，由于是同步的操作，所以并不会进行覆盖现象

      `
    },{
      title: "state 和 props 有什么区别？",
      desc: "面试官：state 和 props 有什么区别？",
      content:`
## 一、state

一个组件的显示形态可以由数据状态和外部参数所决定，而数据状态就是 \`state\`，一般在 \`constructor\` 中初始化

当需要修改里面的值的状态需要通过调用 \`setState\` 来改变，从而达到更新组件内部数据的作用，并且重新调用组件 \`render\` 方法，如下面的例子：

\`\`\`jsx
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <button onClick={() => this.updateCount()}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
\`\`\`

\`setState\` 还可以接受第二个参数，它是一个函数，会在 \`setState\` 调用完成并且组件开始重新渲染时被调用，可以用来监听渲染是否完成

\`\`\`js
this.setState(
  {
    name: "JS每日一题",
  },
  () => console.log("setState finished")
);
\`\`\`

## 二、props

\`React\` 的核心思想就是组件化思想，页面会被切分成一些独立的、可复用的组件

组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是 \`props\`，所以可以把 \`props\` 理解为从外部传入组件内部的数据

\`react\` 具有单向数据流的特性，所以他的主要作用是从父组件向子组件中传递数据

\`props\` 除了可以传字符串，数字，还可以传递对象，数组甚至是回调函数，如下：

\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

const element = <Welcome name="Sara" onNameChanged={this.handleName} />;
\`\`\`

上述 \`name\` 属性与 \`onNameChanged\` 方法都能在子组件的 \`props\` 变量中访问

在子组件中，\`props\` 在内部不可变的，如果想要改变它看，只能通过外部组件传入新的 \`props\` 来重新渲染子组件，否则子组件的 \`props\` 和展示形式不会改变

## 三、区别

相同点：

- 两者都是 JavaScript 对象
- 两者都是用于保存信息
- props 和 state 都能触发渲染更新

区别：

- props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化
- props 在组件内部是不可修改的，但 state 在组件内部可以进行修改
- state 是多变的、可以修改

      `
    },{
      title: "super() 和 super(props) 有什么区别？",
      desc: "面试官：super() 和 super(props) 有什么区别？",
      content:`
## 一、ES6 类

在 \`ES6\` 中，通过 \`extends\` 关键字实现类的继承，方式如下：

\`\`\`js
class sup {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

class sub extends sup {
  constructor(name, age) {
    super(name); // super代表的事父类的构造函数
    this.age = age;
  }

  printAge() {
    console.log(this.age);
  }
}

let jack = new sub("jack", 20);
jack.printName(); //输出 : jack
jack.printAge(); //输出 : 20
\`\`\`

在上面的例子中，可以看到通过 \`super\` 关键字实现调用父类，\`super\` 代替的是父类的构建函数，使用 \`super(name)\` 相当于调用 \`sup.prototype.constructor.call(this,name)\`

如果在子类中不使用 \`super\`，关键字，则会引发报错，如下：

![](https://static.vue-js.com/6ab40190-d71c-11eb-85f6-6fac77c0c9b3.png)

报错的原因是 子类是没有自己的 \`this\` 对象的，它只能继承父类的 \`this\` 对象，然后对其进行加工

而 \`super()\` 就是将父类中的 \`this\` 对象继承给子类的，没有 \`super()\` 子类就得不到 \`this\` 对象

如果先调用 \`this\`，再初始化 \`super()\`，同样是禁止的行为

\`\`\`js
class sub extends sup {
  constructor(name, age) {
    this.age = age;
    super(name); // super代表的事父类的构造函数
  }
}
\`\`\`

所以在子类 \`constructor\` 中，必须先代用 \`super\` 才能引用 \`this\`

## 二、类组件

在 \`React\` 中，类组件是基于 \`ES6\` 的规范实现的，继承 \`React.Component\`，因此如果用到 \`constructor\` 就必须写 \`super()\` 才初始化 \`this\`

这时候，在调用 \`super()\` 的时候，我们一般都需要传入 \`props\` 作为参数，如果不传进去，\`React\` 内部也会将其定义在组件实例中

\`\`\`js
// React 内部
const instance = new YourComponent(props);
instance.props = props;
\`\`\`

所以无论有没有 \`constructor\`，在 \`render\` 中 \`this.props\` 都是可以使用的，这是 \`React\` 自动附带的，是可以不写的：

\`\`\`jsx
class HelloMessage extends React.Component {
  render() {
    return <div>nice to meet you! {this.props.name}</div>;
  }
}
\`\`\`

但是也不建议使用 \`super()\` 代替 \`super(props)\`

因为在 \`React\` 会在类组件构造函数生成实例后再给 \`this.props\` 赋值，所以在不传递 \`props\` 在 \`super\` 的情况下，调用 \`this.props\` 为 \`undefined\`，如下情况：

\`\`\`jsx
class Button extends React.Component {
  constructor(props) {
    super(); // 没传入 props
    console.log(props);      //  {}
    console.log(this.props); //  undefined
    // ...
  }
}
\`\`\`

而传入 \`props\` 的则都能正常访问，确保了 \`this.props\` 在构造函数执行完毕之前已被赋值，更符合逻辑，如下：

\`\`\`jsx
class Button extends React.Component {
  constructor(props) {
    super(props); // 没传入 props
    console.log(props);      //  {}
    console.log(this.props); //  {}
    // ...
  }
}
\`\`\`

## 三、总结

在 \`React\` 中，类组件基于 \`ES6\`，所以在 \`constructor\` 中必须使用 \`super\`

在调用 \`super\` 过程，无论是否传入 \`props\`，\`React\` 内部都会将 \`porps\` 赋值给组件实例 \`porps\` 属性中

如果只调用了 \`super()\`，那么 \`this.props\` 在 \`super()\` 和构造函数结束之间仍是 \`undefined\`

      `
    },{
      title: "你在使用React 过程中遇到的常见问题？如何解决?",
      desc: "面试官：说说你在使用React 过程中遇到的常见问题？如何解决?",
      content:`
## 一、前言
在使用\`react\`开发项目过程中，每个人或多或少都会遇到一些"奇怪"的问题，本质上都是我们对其理解的不够透彻

\`react\` 系列，33个工作日，33次凌晨还在亮起的台灯，到今天就圆满画上句号了，比心

在系列中我们列出了很多比较经典的考题，工作中遇到的问题也往往就藏中其中，只是以不同的表现形式存在罢了

今天的题解不算题解，准确来说是对整个系列的一次贯穿，总结

目录:

- react 有什么特性
- 生命周期有哪些不同阶段？每个阶段对应的方法是？
- state 和 props有什么区别？
- super()和super(props)有什么区别？
- setState执行机制？
- React的事件机制？
- 事件绑定的方式有哪些？
- 构建组件的方式有哪些？区别？
- 组件之间如何通信？
- key有什么作用？
- refs 的理解？应用场景？
- Hooks的理解？解决了什么问题？
- 如何引入css？
- redux工作原理？
- redux中间件有哪些？
- react-router组件有哪些？
- render触发时机？
- 如何减少render？
- JSX转化DOM过程？
- 性能优化手段有哪些
- 如何做服务端渲染？


### react 有什么特性

主要的特性分为：

- JSX语法
- 单向数据绑定
- 虚拟DOM
- 声明式编程
- Component

借助这些特性，\`react\`整体使用起来更加简单高效，组件式开发提高了代码的复用率


### 生命周期有哪些不同阶段？每个阶段对应的方法是？

主要分成了新的生命周期和旧的生命周期：

- 新版生命周期整体流程如下图所示：

   ![](https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png)

  旧的生命周期流程图如下：

  ![](https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png)



### state 和 props有什么区别？

两者相同点：

- 两者都是 JavaScript 对象
- 两者都是用于保存信息
- props 和 state 都能触发渲染更新

区别：

- props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化
- props 在组件内部是不可修改的，但 state 在组件内部可以进行修改
- state 是多变的、可以修改



### super()和super(props)有什么区别？

在\`React\`中，类组件基于\`ES6\`，所以在\`constructor\`中必须使用\`super\`

在调用\`super\`过程，无论是否传入\`props\`，\`React\`内部都会将\`porps\`赋值给组件实例\`porps\`属性中

如果只调用了\`super()\`，那么\`this.props\`在\`super()\`和构造函数结束之间仍是\`undefined\`



### setState执行机制？

在\`react\`类组件的状态需要通过\`setState\`进行更改，在不同场景下对应不同的执行顺序：

- 在组件生命周期或React合成事件中，setState是异步
- 在setTimeout或者原生dom事件中，setState是同步

当我们批量更改\`state\`的值的时候，\`react\`内部会将其进行覆盖，只取最后一次的执行结果

当需要下一个\`state\`依赖当前\`state\`的时候，则可以在\`setState\`中传递一个回调函数进行下次更新



### React的事件机制？

\`React\`基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等

组件注册的事件最终会绑定在\`document\`这个 \`DOM \`上，而不是 \`React \`组件对应的 \`DOM\`，从而节省内存开销

自身实现了一套事件冒泡机制，阻止不同时间段的冒泡行为，需要对应使用不同的方法



### 事件绑定的方式有哪些？

\`react\`常见的绑定方式有如下：

- render方法中使用bind
- render方法中使用箭头函数
- constructor中bind
- 定义阶段使用箭头函数绑定

前两种方式在每次组件\`render\`的时候都会生成新的方法实例，性能问题欠缺



### 构建组件的方式有哪些？区别？

组件的创建主要分成了三种方式：

- 函数式创建
- 继承 React.Component 创建
- 通过 React.createClass 方法创建

如今一般都是前两种方式，对于一些无状态的组件创建，建议使用函数式创建的方式，再比如\`hooks\`的机制下，函数式组件能做类组件对应的事情，所以建议都使用函数式的方式来创建组件



### 组件之间如何通信？

组件间通信可以通过\`props\`、传递回调函数、\`context\`、\`redux\`等形式进行组件之间通讯



### key有什么作用？

使用\`key\`是\`react\`性能优化的手段，在一系列数据最前面插入元素，如果没有\`key\`的值，则所有的元素都需要进行更换，而有\`key\`的情况只需要将最新元素插入到前面，不涉及删除操作

在使用\`key\`的时候应保证：

- key 应该是唯一的
- key不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）
- 避免使用 index 作为 key



### refs 的理解？应用场景？

\`Refs\`允许我们访问 \`DOM \`节点或在 \`render \`方法中创建的 \`React \`元素

下面的场景使用\`refs\`非常有用：

- 对Dom元素的焦点控制、内容选择、控制
- 对Dom元素的内容设置及媒体播放
- 对Dom元素的操作和对组件实例的操作
- 集成第三方 DOM 库



### Hooks的理解？解决了什么问题？

\`Hook\` 是 React 16.8 的新增特性。它可以让你在不编写 \`class\` 的情况下使用 \`state\` 以及其他的 \`React\` 特性

解决问题如下：

- 难以重用和共享组件中的与状态相关的逻辑
- 逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面
- 类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题
- 由于业务变动，函数组件不得不改为类组件等等



### 如何引入css？

常见的\`CSS\`引入方式有以下：

- 在组件内直接使用
- 组件中引入 .css 文件
- 组件中引入 .module.css 文件
- CSS in JS

组件内直接使用\`css\`会导致大量的代码，而文件中直接引入\`css\`文件是全局作用域，发生层叠

引入\`.module.css \`文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写

\`css in js \`这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等



### redux工作原理？

\`redux \`要求我们把数据都放在 \`store \`公共存储空间

一个组件改变了 \`store\` 里的数据内容，其他组件就能感知到 \`store \`的变化，再来取数据，从而间接的实现了这些数据传递的功能

工作流程图如下所示：

 ![](https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png)



### redux中间件有哪些？

市面上有很多优秀的\`redux\`中间件，如：

- redux-thunk：用于异步操作
- redux-logger：用于日志记录



### react-router组件有哪些？

常见的组件有：

- BrowserRouter、HashRouter
- Route
- Link、NavLink
- switch
- redirect



### render触发时机？

在\` React\` 中，类组件只要执行了 \`setState\` 方法，就一定会触发 \`render\` 函数执行

函数组件\`useState\` 会判断当前值有无发生改变确定是否执行\`render\`方法，一旦父组件发生渲染，子组件也会渲染



### 如何减少render？

父组件渲染导致子组件渲染，子组件并没有发生任何改变，这时候就可以从避免无谓的渲染，具体实现的方式有如下：

- shouldComponentUpdate
- PureComponent
- React.memo



### JSX转化DOM过程？

\`jsx\`首先会转化成\`React.createElement\`这种形式，\`React.createElement\`作用是生成一个虚拟\`Dom\`对象，然后会通过\`ReactDOM.render\`进行渲染成真实\`DOM\`



### 性能优化手段有哪些

除了减少\`render\`的渲染之外，还可以通过以下手段进行优化：

除此之外， 常见性能优化常见的手段有如下：

- 避免使用内联函数
- 使用 React Fragments 避免额外标记
- 使用 Immutable
- 懒加载组件
- 事件绑定方式
- 服务端渲染

### 如何做服务端渲染？

\`node server\` 接收客户端请求，得到当前的请求\`url\` 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 \`props\`、\`context\`或者\`store\` 形式传入组件

然后基于 \`react\` 内置的服务端渲染方法 \`renderToString()\`把组件渲染为 \`html\`字符串在把最终的 \`html \`进行输出前需要将数据注入到浏览器端

浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 \`html\` 节点，整个流程结束

![](https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png)
      `
    },
  ]
}

export default react;