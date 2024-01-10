const css = {
    id: 1,
    category: "CSS",
    questions: [
      {
        title: "元素水平垂直居中的方法有哪些",
        desc: "面试官：元素水平垂直居中的方法有哪些？如果元素不定宽高呢？",
        content:`
        
        `
      },
      {
        title: "说说你对盒子模型的理解?",
        desc: "面试官：说说你对盒子模型的理解?",
        content: `
  ## 一、是什么
  当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）

  一个盒子由四个部分组成：\`content\`、\`padding\`、\`border\`、\`margin\`

  ![](https://static.vue-js.com/976789a0-8f9b-11eb-85f6-6fac77c0c9b3.png)

  \`content\`，即实际内容，显示文本和图像

  \`boreder\`，即边框，围绕元素内容的内边距的一条或多条线，由粗细、样式、颜色三部分组成

  \`padding\`，即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒子的\`background\`属性影响

  \`margin\`，即外边距，在元素外创建额外的空白，空白通常指不能放其他元素的区域

  上述是一个从二维的角度观察盒子，下面再看看看三维图：

  ![](https://static.vue-js.com/b2548b00-8f9b-11eb-ab90-d9ae814b240d.png)



  下面来段代码：

  \`\`\`html
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
    }
  </style>
  <div class="box">
    盒子模型
  </div>
  \`\`\`

  当我们在浏览器查看元素时，却发现元素的大小变成了\`240px\`

  这是因为，在\`CSS\`中，盒子模型可以分成：

  - W3C 标准盒子模型
  - IE 怪异盒子模型

  默认情况下，盒子模型为\`W3C\` 标准盒子模型


  ## 二、标准盒子模型

  标准盒子模型，是浏览器默认的盒子模型

  下面看看标准盒子模型的模型图：

  ![](https://static.vue-js.com/c0e1d2e0-8f9b-11eb-85f6-6fac77c0c9b3.png)

  从上图可以看到：

  - 盒子总宽度 = width + padding + border + margin;

  - 盒子总高度 = height + padding + border + margin

  也就是，\`width/height\` 只是内容高度，不包含 \`padding\` 和 \`border \`值

  所以上面问题中，设置\`width\`为200px，但由于存在\`padding\`，但实际上盒子的宽度有240px

  ## 三、IE 怪异盒子模型

  同样看看IE 怪异盒子模型的模型图：

  ![](https://static.vue-js.com/cfbb3ef0-8f9b-11eb-ab90-d9ae814b240d.png)

  从上图可以看到：

  - 盒子总宽度 = width + margin;

  - 盒子总高度 = height + margin;

  也就是，\`width/height\` 包含了 \`padding \`和 \`border \`值

  ## Box-sizing

  CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度

  语法：
  \`\`\`css
  box-sizing: content-box|border-box|inherit:
  \`\`\`

  - content-box 默认值，元素的 width/height 不包含padding，border，与标准盒子模型表现一致
  - border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致
  - inherit 指定 box-sizing 属性的值，应该从父元素继承

  回到上面的例子里，设置盒子为 border-box 模型

  \`\`\`html
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
      box-sizing: border-box;
    }
  </style>
  <div class="box">
    盒子模型
  </div>
  \`\`\`
  这时候，就可以发现盒子的所占据的宽度为200px。
        `,
      },
      {
        title: "元素水平垂直居中的方法有哪些",
        desc: "面试官：元素水平垂直居中的方法有哪些？如果元素不定宽高呢？",
        content: `
  ## 一、背景

  在开发中经常遇到这个问题，即让某个元素的内容在水平和垂直方向上都居中，内容不仅限于文字，可能是图片或其他元素

  居中是一个非常基础但又是非常重要的应用场景，实现居中的方法存在很多，可以将这些方法分成两个大类：

  - 居中元素（子元素）的宽高已知
  - 居中元素宽高未知



  ## 二、实现方式

  实现元素水平垂直居中的方式：

  - 利用定位+margin:auto

  - 利用定位+margin:负值

  - 利用定位+transform
  - table布局
  - flex布局
  - grid布局



  ### 利用定位+margin:auto

  先上代码：

  \`\`\`html
  <style>
      .father{
          width:500px;
          height:300px;
          border:1px solid #0a3b98;
          position: relative;
      }
      .son{
          width:100px;
          height:40px;
          background: #f0a238;
          position: absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          margin:auto;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`

  父级设置为相对定位，子级绝对定位 ，并且四个定位属性的值都设置了0，那么这时候如果子级没有设置宽高，则会被拉开到和父级一样宽高

  这里子元素设置了宽高，所以宽高会按照我们的设置来显示，但是实际上子级的虚拟占位已经撑满了整个父级，这时候再给它一个\`margin：auto\`它就可以上下左右都居中了



  ### 利用定位+margin:负值

  绝大多数情况下，设置父元素为相对定位， 子元素移动自身50%实现水平垂直居中

  \`\`\`html
  <style>
      .father {
          position: relative;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left:-50px;
          margin-top:-50px;
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`

  整个实现思路如下图所示：

  ![](https://static.vue-js.com/922dc300-95f9-11eb-ab90-d9ae814b240d.png)

  - 初始位置为方块1的位置
  - 当设置left、top为50%的时候，内部子元素为方块2的位置
  - 设置margin为负数时，使内部子元素到方块3的位置，即中间位置

  这种方案不要求父元素的高度，也就是即使父元素的高度变化了，仍然可以保持在父元素的垂直居中位置，水平方向上是一样的操作

  但是该方案需要知道子元素自身的宽高，但是我们可以通过下面\`transform\`属性进行移动



  ### 利用定位+transform

  实现代码如下：

  \`\`\`css
  <style>
      .father {
          position: relative;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`

  \`translate(-50%, -50%)\`将会将元素位移自己宽度和高度的-50%

  这种方法其实和最上面被否定掉的margin负值用法一样，可以说是\`margin\`负值的替代方案，并不需要知道自身元素的宽高





  ### table布局

  设置父元素为\`display:table-cell\`，子元素设置 \`display: inline-block\`。利用\`vertical\`和\`text-align\`可以让所有的行内块级元素水平垂直居中

  \`\`\`html
  <style>
      .father {
          display: table-cell;
          width: 200px;
          height: 200px;
          background: skyblue;
          vertical-align: middle;
          text-align: center;
      }
      .son {
          display: inline-block;
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`



  ### flex弹性布局

  还是看看实现的整体代码：

  \`\`\`html
  <style>
      .father {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`

  \`css3\`中了\`flex\`布局，可以非常简单实现垂直水平居中

  这里可以简单看看\`flex\`布局的关键属性作用：

  - display: flex时，表示该容器内部的元素将按照flex进行布局

  - align-items: center表示这些元素将相对于本容器水平居中
  - justify-content: center也是同样的道理垂直居中



  ### grid网格布局

  \`\`\`html
  <style>
      .father {
              display: grid;
              align-items:center;
              justify-content: center;
              width: 200px;
              height: 200px;
              background: skyblue;

          }
          .son {
              width: 10px;
              height: 10px;
              border: 1px solid red
          }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  \`\`\`

  这里看到，\`gird\`网格布局和\`flex\`弹性布局都简单粗暴



  ### 小结

  上述方法中，不知道元素宽高大小仍能实现水平垂直居中的方法有：

  - 利用定位+margin:auto
  - 利用定位+transform
  - flex布局
  - grid布局



  ## 三、总结

  根据元素标签的性质，可以分为：

  - 内联元素居中布局
  - 块级元素居中布局



  ### 内联元素居中布局

  水平居中

  - 行内元素可设置：text-align: center
  - flex布局设置父元素：display: flex; justify-content: center

  垂直居中

  - 单行文本父元素确认高度：height === line-height
  - 多行文本父元素确认高度：display: table-cell; vertical-align: middle



  ### 块级元素居中布局

  水平居中

  - 定宽: margin: 0 auto
  - 绝对定位+left:50%+margin:负自身一半

  垂直居中

  - position: absolute设置left、top、margin-left、margin-top(定高)
  - display: table-cell
  - transform: translate(x, y)
  - flex(不定高，不定宽)
  - grid(不定高，不定宽)，兼容性相对比较差
        `,
      },
      {
        title: "如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？",
        desc: "面试官：如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？",
        content:`
  ## 一、背景
  
  在日常布局中，无论是两栏布局还是三栏布局，使用的频率都非常高
  
  ### 两栏布局
  
  两栏布局实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满，
  
  比如 \`Ant Design\` 文档，蓝色区域为主要内容布局容器，侧边栏为次要内容布局容器
  
  > 这里称宽度较小的列父元素为次要布局容器，宽度较大的列父元素为主要布局容器
  
  ![](https://static.vue-js.com/fcb8ac50-976e-11eb-85f6-6fac77c0c9b3.png)
  
  这种布局适用于内容上具有明显主次关系的网页
  
  
  
  ### 三栏布局
  
  三栏布局按照左中右的顺序进行排列，通常中间列最宽，左右两列次之
  
  大家最常见的就是\`github\`：
  
  ![](https://static.vue-js.com/0bf016e0-976f-11eb-ab90-d9ae814b240d.png)
  
  
  
  ## 二、两栏布局
  
  两栏布局非常常见，往往是以一个定宽栏和一个自适应的栏并排展示存在
  
  实现思路也非常的简单：
  
  - 使用 float 左浮左边栏
  - 右边模块使用 margin-left 撑出内容块做内容展示
  - 为父级元素添加BFC，防止下方元素飞到上方内容
  
  代码如下：
  
  \`\`\`html
  <style>
      .box{
          overflow: hidden; 添加BFC
      }
      .left {
          float: left;
          width: 200px;
          background-color: gray;
          height: 400px;
      }
      .right {
          margin-left: 210px;
          background-color: lightgray;
          height: 200px;
      }
  </style>
  <div class="box">
      <div class="left">左边</div>
      <div class="right">右边</div>
  </div>
  \`\`\`
  
  还有一种更为简单的使用则是采取：flex弹性布局
  
  
  
  ### flex弹性布局
  
  \`\`\`html
  <style>
      .box{
          display: flex;
      }
      .left {
          width: 100px;
      }
      .right {
          flex: 1;
      }
  </style>
  <div class="box">
      <div class="left">左边</div>
      <div class="right">右边</div>
  </div>
  \`\`\`
  
  \`flex\`可以说是最好的方案了，代码少，使用简单
  
  注意的是，\`flex\`容器的一个默认属性值:\`align-items: stretch;\`
  
  这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: \`align-items: flex-start\`
  
  
  ## 三、三栏布局
  
  实现三栏布局中间自适应的布局方式有：
  
  - 两边使用 float，中间使用 margin
  - 两边使用 absolute，中间使用 margin
  - 两边使用 float 和负 margin
  - display: table 实现
  - flex实现
  - grid网格布局
  
  
  
  ### 两边使用 float，中间使用 margin
  
  需要将中间的内容放在\`html\`结构最后，否则右侧会臣在中间内容的下方
  
  实现代码如下：
  
  \`\`\`html
  <style>
      .wrap {
          background: #eee;
          overflow: hidden; <!-- 生成BFC，计算高度时考虑浮动的元素 -->
          padding: 20px;
          height: 200px;
      }
      .left {
          width: 200px;
          height: 200px;
          float: left;
          background: coral;
      }
      .right {
          width: 120px;
          height: 200px;
          float: right;
          background: lightblue;
      }
      .middle {
          margin-left: 220px;
          height: 200px;
          background: lightpink;
          margin-right: 140px;
      }
  </style>
  <div class="wrap">
      <div class="left">左侧</div>
      <div class="right">右侧</div>
      <div class="middle">中间</div>
  </div>
  \`\`\`
  
  原理如下：
  
  - 两边固定宽度，中间宽度自适应。
  - 利用中间元素的margin值控制两边的间距
  - 宽度小于左右部分宽度之和时，右侧部分会被挤下去
  
  这种实现方式存在缺陷：
  
  - 主体内容是最后加载的。
  
  - 右边在主体内容之前，如果是响应式设计，不能简单的换行展示
  
  
  
  ### 两边使用 absolute，中间使用 margin
  
  基于绝对定位的三栏布局：注意绝对定位的元素脱离文档流，相对于最近的已经定位的祖先元素进行定位。无需考虑HTML中结构的顺序
  
  \`\`\`html
  <style>
    .container {
      position: relative;
    }
    
    .left,
    .right,
    .main {
      height: 200px;
      line-height: 200px;
      text-align: center;
    }
  
    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      background: green;
    }
  
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      background: green;
    }
  
    .main {
      margin: 0 110px;
      background: black;
      color: white;
    }
  </style>
  
  <div class="container">
    <div class="left">左边固定宽度</div>
    <div class="right">右边固定宽度</div>
    <div class="main">中间自适应</div>
  </div>
  \`\`\`
  
  实现流程：
  
  - 左右两边使用绝对定位，固定在两侧。
  - 中间占满一行，但通过 margin和左右两边留出10px的间隔
  
  
  
  
  
  ### 两边使用 float 和负 margin
  
  \`\`\`html
  <style>
    .left,
    .right,
    .main {
      height: 200px;
      line-height: 200px;
      text-align: center;
    }
  
    .main-wrapper {
      float: left;
      width: 100%;
    }
  
    .main {
      margin: 0 110px;
      background: black;
      color: white;
    }
  
    .left,
    .right {
      float: left;
      width: 100px;
      margin-left: -100%;
      background: green;
    }
  
    .right {
      margin-left: -100px; /* 同自身宽度 */
    }
  </style>
  
  <div class="main-wrapper">
    <div class="main">中间自适应</div>
  </div>
  <div class="left">左边固定宽度</div>
  <div class="right">右边固定宽度</div>
  \`\`\`
  
  实现过程：
  
  - 中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示
  - 左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧
  - 右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧
  
    
  
  缺点：
  
  - 增加了 .main-wrapper 一层，结构变复杂
  - 使用负 margin，调试也相对麻烦
  
  
  
  ### 使用 display: table 实现
  
  \`<table>\` 标签用于展示行列数据，不适合用于布局。但是可以使用 \`display: table\` 来实现布局的效果
  
  \`\`\`html
  <style>
    .container {
      height: 200px;
      line-height: 200px;
      text-align: center;
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  
    .left,
    .right,
    .main {
      display: table-cell;
    }
  
    .left,
    .right {
      width: 100px;
      background: green;
    }
  
    .main {
      background: black;
      color: white;
      width: 100%;
    }
  </style>
  
  <div class="container">
    <div class="left">左边固定宽度</div>
    <div class="main">中间自适应</div>
    <div class="right">右边固定宽度</div>
  </div>
  \`\`\`
  
  实现原理：
  
  - 层通过 display: table设置为表格，设置 table-layout: fixed\`表示列宽自身宽度决定，而不是自动计算。
  - 内层的左中右通过 display: table-cell设置为表格单元。
  - 左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度
  
  ### 使用flex实现
  
  利用\`flex\`弹性布局，可以简单实现中间自适应
  
  代码如下：
  
  \`\`\`html
  
  <style type="text/css">
      .wrap {
          display: flex;
          justify-content: space-between;
      }
  
      .left,
      .right,
      .middle {
          height: 100px;
      }
  
      .left {
          width: 200px;
          background: coral;
      }
  
      .right {
          width: 120px;
          background: lightblue;
      }
  
      .middle {
          background: #555;
          width: 100%;
          margin: 0 20px;
      }
  </style>
  <div class="wrap">
      <div class="left">左侧</div>
      <div class="middle">中间</div>
      <div class="right">右侧</div>
  </div>
  \`\`\`
  
  实现过程：
  
  - 仅需将容器设置为\`display:flex;\`，
  - 盒内元素两端对其，将中间元素设置为\`100%\`宽度，或者设为\`flex:1\`，即可填充空白
  - 盒内元素的高度撑开容器的高度
  
  优点：
  
  - 结构简单直观
  - 可以结合 flex的其他功能实现更多效果，例如使用 order属性调整显示顺序，让主体内容优先加载，但展示在中间
        
        ### grid网格布局
        
        代码如下：
        
        \`\`\`html
        <style>
            .wrap {
                display: grid;
                width: 100%;
                grid-template-columns: 300px auto 300px;
            }
        
            .left,
            .right,
            .middle {
                height: 100px;
            }
        
            .left {
                background: coral;
            }
        
            .right {
                background: lightblue;
            }
        
            .middle {
                background: #555;
            }
        </style>
        <div class="wrap">
            <div class="left">左侧</div>
            <div class="middle">中间</div>
            <div class="right">右侧</div>
        </div>
        \`\`\`
        
        跟\`flex\`弹性布局一样的简单
        
        ## 参考文献
        
        - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "CSS3新增了哪些新特性？",
        desc: "面试官：CSS3新增了哪些新特性？",
        content:`
  ## 一、是什么
  
  \`css\`，即层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观
  
  \`css3\`是\`css\`的最新标准，是向后兼容的，\`CSS1/2 \`的特性在\` CSS3\` 里都是可以使用的
  
  而\` CSS3\` 也增加了很多新特性，为开发带来了更佳的开发体验
  
  
  ## 二、选择器
  
  \`css3\`中新增了一些选择器，主要为如下图所示：
  
  ![](https://static.vue-js.com/e368cf20-9b5e-11eb-85f6-6fac77c0c9b3.png)
  
  
  
  ## 三、新样式
  
  ### 边框
  
  \`css3\`新增了三个边框属性，分别是：
  
  - border-radius：创建圆角边框
  - box-shadow：为元素添加阴影
  
  - border-image：使用图片来绘制边框
  
  
  
  #### box-shadow
  
  设置元素阴影，设置属性如下：
  
  - 水平阴影
  - 垂直阴影
  - 模糊距离(虚实)
  - 阴影尺寸(影子大小)
  - 阴影颜色
  - 内/外阴影
  
  其中水平阴影和垂直阴影是必须设置的
  
  
  ### 背景
  
  新增了几个关于背景的属性，分别是\`background-clip\`、\`background-origin\`、\`background-size\`和\`background-break\`
  
  
  
  #### background-clip
  
  用于确定背景画区，有以下几种可能的属性：
  
  - background-clip: border-box; 背景从border开始显示
  - background-clip: padding-box; 背景从padding开始显示
  - background-clip: content-box; 背景显content区域开始显示
  - background-clip: no-clip; 默认属性，等同于border-box
  
  通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围
  
  
  
  #### background-origin
  
  当我们设置背景图片时，图片是会以左上角对齐，但是是以\`border\`的左上角对齐还是以\`padding\`的左上角或者\`content\`的左上角对齐? \`border-origin\`正是用来设置这个的
  
  - background-origin: border-box; 从border开始计算background-position
  - background-origin: padding-box; 从padding开始计算background-position
  - background-origin: content-box; 从content开始计算background-position
  
  默认情况是\`padding-box\`，即以\`padding\`的左上角为原点
  
  
  
  #### background-size
  
  background-size属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：
  
  - background-size: contain; 缩小图片以适合元素（维持像素长宽比）
  - background-size: cover; 扩展元素以填补元素（维持像素长宽比）
  - background-size: 100px 100px; 缩小图片至指定的大小
  - background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸
  
  
  
  ### background-break
  
  元素可以被分成几个独立的盒子（如使内联元素span跨越多行），\`background-break\` 属性用来控制背景怎样在这些不同的盒子中显示
  
  - background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）
  - background-break: bounding-box; 把盒之间的距离计算在内；
  - background-break: each-box; 为每个盒子单独重绘背景
  
  
  
  ### 文字
  
  ### word-wrap
  
  语法：\`word-wrap: normal|break-word\`
  
  - normal：使用浏览器默认的换行
  - break-all：允许在单词内换行
  
  
  
  ### text-overflow
  
  \` text-overflow\`设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：
  
  - clip：修剪文本
  - ellipsis：显示省略符号来代表被修剪的文本
  
  
  
  ### text-shadow
  
  \`text-shadow\`可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色
  
  
  
  ### text-decoration
  
  CSS3里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：
  
  - text-fill-color: 设置文字内部填充颜色
  
  - text-stroke-color: 设置文字边界填充颜色
  
  - text-stroke-width: 设置文字边界宽度
  
  
  
  ### 颜色
  
  \`css3\`新增了新的颜色表示方式\`rgba\`与\`hsla\`
  
  - rgba分为两部分，rgb为颜色值，a为透明度
  - hala分为四部分，h为色相，s为饱和度，l为亮度，a为透明度
  
  
  
  ## 四、transition 过渡
  
  \`transition\`属性可以被指定为一个或多个\` CSS \`属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：
  
  - 过度效果
  - 持续时间
  
  语法如下：
  
  \`\`\`css
  transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
  \`\`\`
  
  上面为简写模式，也可以分开写各个属性
  
  \`\`\`css
  transition-property: width; 
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 2s;
  \`\`\`
  
  
  
  ### 五、transform 转换
  
  \`transform\`属性允许你旋转，缩放，倾斜或平移给定元素
  
  \`transform-origin\`：转换元素的位置（围绕那个点进行转换），默认值为\`(x,y,z):(50%,50%,0)\`
  
  使用方式：
  
  - transform: translate(120px, 50%)：位移
  - transform: scale(2, 0.5)：缩放
  - transform: rotate(0.5turn)：旋转
  - transform: skew(30deg, 20deg)：倾斜
  
  
  
  ### 六、animation 动画
  
  动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬
  
  animation也有很多的属性
  
  - animation-name：动画名称
  - animation-duration：动画持续时间
  - animation-timing-function：动画时间函数
  - animation-delay：动画延迟时间
  - animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为infinite，意思是无限循环
  - animation-direction：动画执行方向
  - animation-paly-state：动画播放状态
  - animation-fill-mode：动画填充模式
  
  
  
  ## 七、渐变
  
  颜色渐变是指在两个颜色之间平稳的过渡，\`css3\`渐变包括
  
  - linear-gradient：线性渐变
  
  > background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
  
  - radial-gradient：径向渐变
  
  > linear-gradient(0deg, red, green); 
  
  
  
  ## 八、其他
  
  关于\`css3\`其他的新特性还包括\`flex\`弹性布局、\`Grid\`栅格布局，这两个布局在以前就已经讲过，这里就不再展示
  
  除此之外，还包括多列布局、媒体查询、混合模式等等......
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "设备像素、css像素、设备独立像素、dpr、ppi 之间的区别",
        desc: "面试官：说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？",
        content:`
  ## 一、背景
  
  在\`css\`中我们通常使用px作为单位，在PC浏览器中\`css\`的1个像素都是对应着电脑屏幕的1个物理像素
  
  这会造成一种错觉，我们会认为\`css\`中的像素就是设备的物理像素
  
  但实际情况却并非如此，\`css\`中的像素只是一个抽象的单位，在不同的设备或不同的环境中，\`css\`中的1px所代表的设备物理像素是不同的
  
  当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异
  
  这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念
  
  ## 二、介绍
  
  ### CSS像素
  
  CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位
  
  在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位
  
  px是一个相对单位，相对的是设备像素（device pixel）
  
  一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素
  
  \`CSS\`像素又具有两个方面的相对性：
  
  - 在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）
  - 在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）
  
  在页面进行缩放操作也会 引起\`css\`中\`px\`的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）
  
  假设原来需要 320px 才能填满的宽度现在只需要 160px
  
  px会受到下面的因素的影响而变化：
  
  - 每英寸像素（PPI）
  - 设备像素比（DPR）
  
  
  ### 设备像素
  
  设备像素（device pixels），又称为物理像素
  
  指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已
  
  可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩
  
  ![](https://static.vue-js.com/cffc6570-91f2-11eb-ab90-d9ae814b240d.png)
  
  从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为\`pt\`
  
  
  
  ### 设备独立像素
  
  设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素
  
  在\`javaScript\`中可以通过\`window.screen.width/ window.screen.height\` 查看
  
  比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素
  
  一个设备独立像素里可能包含1个或者多个物理像素点，包含的越多则屏幕看起来越清晰
  
  至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：
  
  iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960
  
  这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素
  
  如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位
  
  我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素
  
  至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面介绍的\`dpr\`
  
  
  ### dpr
  
  dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在\`JavaScript\`中可以通过 \`window.devicePixelRatio\` 获取
  
  计算公式如下：
  
  ![](https://static.vue-js.com/dd45e2b0-91f2-11eb-ab90-d9ae814b240d.png)
  
  当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素
  
  当设备像素比为2:1时，使用4（2×2）个设备像素显示1个CSS像素
  
  当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素
  
  如下图所示：
  
  ![](https://static.vue-js.com/e63cceb0-91f2-11eb-ab90-d9ae814b240d.png)
  
  当\`dpr\`为3，那么\`1px\`的\`CSS\`像素宽度对应\`3px\`的物理像素的宽度，1px的\`CSS\`像素高度对应\`3px\`的物理像素高度
  
  
  
  ### ppi
  
  ppi （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像
  
  计算公式如下：
  
  ![](https://static.vue-js.com/f734adf0-91f2-11eb-ab90-d9ae814b240d.png)
  
  
  
  ## 三、总结
  
  无缩放情况下，1个CSS像素等于1个设备独立像素
  
  设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变
  
  PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）
  
  在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素
  
  设备像素比（dpr） = 设备像素 / 设备独立像素
  
  每英寸像素（ppi），值越大，图像越清晰
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "em/px/rem/vh/vw区别",
        desc: "面试官：说说em/px/rem/vh/vw区别?",
        content:`
  ## 一、介绍
  
  传统的项目开发中，我们只会用到\`px\`、\`%\`、\`em\`这几个单位，它可以适用于大部分的项目开发，且拥有比较良好的兼容性
  
  从\`CSS3\`开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了\`rem\`、\`vh\`、\`vw\`、\`vm\`等一些新的计量单位
  
  利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等
  
  ## 二、单位
  
  在\`css\`单位中，可以分为长度单位、绝对单位，如下表所指示
  
  | CSS单位      |                                        |
  | ------------ | -------------------------------------- |
  | 相对长度单位 | em、ex、ch、rem、vw、vh、vmin、vmax、% |
  | 绝对长度单位 | cm、mm、in、px、pt、pc                 |
  
  这里我们主要讲述px、em、rem、vh、vw
  
  
  
  ### px
  
  px，表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中
  
  有些人会把\`px\`认为是相对长度，原因在于在移动端中存在设备像素比，\`px\`实际显示的大小是不确定的
  
  这里之所以认为\`px\`为绝对单位，在于\`px\`的大小和元素的其他属性无关
  
  ### em
  
  em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（\`1em = 16px\`）
  
  为了简化 \`font-size\` 的换算，我们需要在\` css \`中的 \`body\` 选择器中声明\` font-size \`= \`62.5%\`，这就使 em 值变为 \`16px*62.5% = 10px\`
  
  这样 \`12px = 1.2em\`, \`10px = 1em\`, 也就是说只需要将你的原来的\` px\` 数值除以 10，然后换上 \`em \`作为单位就行了
  
  特点：
  
  - em 的值并不是固定的
  - em 会继承父级元素的字体大小
  - em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
  - 任意浏览器的默认字体高都是 16px
  
  
  
  举个例子
  
  \`\`\`html
  <div class="big">
      我是14px=1.4rem<div class="small">我是12px=1.2rem</div>
  </div>
  \`\`\`
  
  样式为
  
  \`\`\`css
  <style>
      html {font-size: 10px;  } /*  公式16px*62.5%=10px  */  
      .big{font-size: 1.4rem}
      .small{font-size: 1.2rem}
  </style>
  \`\`\`
  
  这时候\`.big\`元素的\`font-size\`为14px，而\`.small\`元素的\`font-size\`为12px
  
  
  
  
  
  ### rem
  
  rem，相对单位，相对的只是HTML根元素\`font-size\`的值
  
  同理，如果想要简化\`font-size\`的转化，我们可以在根元素\`html\`中加入\`font-size: 62.5%\`
  
  \`\`\`css
  html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */ 
  \`\`\`
  
  这样页面中1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助
  
  特点：
  
  - rem单位可谓集相对大小和绝对大小的优点于一身
  - 和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸
  
  
  
  ### vh、vw
  
  vw ，就是根据窗口的宽度，分成100等份，100vw就表示满宽，50vw就表示一半宽。（vw 始终是针对窗口的宽），同理，\`vh\`则为窗口的高度
  
  这里的窗口分成几种情况：
  
  - 在桌面端，指的是浏览器的可视区域
  
  - 移动端指的就是布局视口
  
  像\`vw\`、\`vh\`，比较容易混淆的一个单位是\`%\`，不过百分比宽泛的讲是相对于父元素：
  
  - 对于普通定位元素就是我们理解的父元素
  - 对于position: absolute;的元素是相对于已定位的父元素
  - 对于position: fixed;的元素是相对于 ViewPort（可视窗口）
  
  
  
  ## 三、总结
  
  **px**：绝对单位，页面按精确像素展示
  
  **em**：相对单位，基准点为父节点字体的大小，如果自身定义了\`font-size\`按自身来计算，整个页面内\`1em\`不是一个固定的值
  
  **rem**：相对单位，可理解为\`root em\`, 相对根节点\`html\`的字体大小来计算
  
  **vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单
        `
      },
      {
        title: "flexbox（弹性盒布局模型）,以及适用场景？",
        desc: "面试官：说说flexbox（弹性盒布局模型）,以及适用场景？",
        content:`
  ## 一、是什么
  
  \`Flexible Box\` 简称 \`flex\`，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局
  
  采用Flex布局的元素，称为\`flex\`容器\`container\`
  
  它的所有子元素自动成为容器成员，称为\`flex\`项目\`item\`
  
  ![](https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png)
  
  容器中默认存在两条轴，主轴和交叉轴，呈90度关系。项目默认沿主轴排列，通过\`flex-direction\`来决定主轴的方向
  
  每根轴都有起点和终点，这对于元素的对齐非常重要
  
  
  
  ## 二、属性
  
  关于\`flex\`常用的属性，我们可以划分为容器属性和容器成员属性
  
  容器属性有：
  
  - flex-direction
  - flex-wrap
  - flex-flow
  - justify-content
  - align-items
  - align-content
  
  
  
  ### flex-direction
  
  决定主轴的方向(即项目的排列方向)
  
  \`\`\`css
  .container {   
      flex-direction: row | row-reverse | column | column-reverse;  
  } 
  \`\`\`
  
  属性对应如下：
  
  - row（默认值）：主轴为水平方向，起点在左端
  - row-reverse：主轴为水平方向，起点在右端
  - column：主轴为垂直方向，起点在上沿。
  - column-reverse：主轴为垂直方向，起点在下沿
  
  如下图所示：
  
  ![](https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png)
  
  
  
  ### flex-wrap
  
  弹性元素永远沿主轴排列，那么如果主轴排不下，通过\`flex-wrap\`决定容器内项目是否可换行
  
  \`\`\`css
  .container {  
      flex-wrap: nowrap | wrap | wrap-reverse;
  }  
  \`\`\`
  
  属性对应如下：
  
  - nowrap（默认值）：不换行
  - wrap：换行，第一行在下方
  - wrap-reverse：换行，第一行在上方
  
  默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩
  
  
  
  ### flex-flow
  
  是\`flex-direction\`属性和\`flex-wrap\`属性的简写形式，默认值为\`row nowrap\`
  
  \`\`\`css
  .box {
    flex-flow: <flex-direction> || <flex-wrap>;
  }
  \`\`\`
  
  
  
  ### justify-content
  
  定义了项目在主轴上的对齐方式
  
  \`\`\`css
  .box {
      justify-content: flex-start | flex-end | center | space-between | space-around;
  }
  \`\`\`
  
  属性对应如下：
  
  - flex-start（默认值）：左对齐
  - flex-end：右对齐
  - center：居中
  - space-between：两端对齐，项目之间的间隔都相等
  - space-around：两个项目两侧间隔相等
  
  效果图如下：
  
  ![](https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png)
  
  
  
  ### align-items
  
  定义项目在交叉轴上如何对齐
  
  \`\`\`css
  .box {
    align-items: flex-start | flex-end | center | baseline | stretch;
  }
  \`\`\`
  
  属性对应如下：
  
  - flex-start：交叉轴的起点对齐
  - flex-end：交叉轴的终点对齐
  - center：交叉轴的中点对齐
  - baseline: 项目的第一行文字的基线对齐
  - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度
  
  
  
  ### align-content
  
  定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
  
  \`\`\`css
  .box {
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
  \`\`\`
  
  属性对应如吓：
  
  - flex-start：与交叉轴的起点对齐
  - flex-end：与交叉轴的终点对齐
  - center：与交叉轴的中点对齐
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
  - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
  - stretch（默认值）：轴线占满整个交叉轴
  
  效果图如下：
  
  ![](https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png)
  
  
  
  容器成员属性如下：
  
  - \`order\`
  - \`flex-grow\`
  - \`flex-shrink\`
  - \`flex-basis\`
  - \`flex\`
  - \`align-self\`
  
  
  
  ### order
  
  定义项目的排列顺序。数值越小，排列越靠前，默认为0
  
  \`\`\`css
  .item {
      order: <integer>;
  }
  \`\`\`
  
  
  
  ### flex-grow
  
  上面讲到当容器设为\`flex-wrap: nowrap;\`不换行的时候，容器宽度有不够分的情况，弹性元素会根据\`flex-grow\`来决定
  
  定义项目的放大比例（容器宽度>元素总宽度时如何伸展）
  
  默认为\`0\`，即如果存在剩余空间，也不放大
  
  \`\`\`css
  .item {
      flex-grow: <number>;
  }
  \`\`\`
  
  如果所有项目的\`flex-grow\`属性都为1，则它们将等分剩余空间（如果有的话）
  
  ![](https://static.vue-js.com/48c8c5c0-9838-11eb-ab90-d9ae814b240d.png)
  
  如果一个项目的\`flex-grow\`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍
  
  ![](https://static.vue-js.com/5b822b20-9838-11eb-ab90-d9ae814b240d.png)
  
  弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论\`flex-grow\`是什么值都不会生效
  
  
  
  ### flex-shrink
  
  定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为1，即如果空间不足，该项目将缩小
  
  \`\`\`css
  .item {
      flex-shrink: <number>; /* default 1 */
  }
  \`\`\`
  
  如果所有项目的\`flex-shrink\`属性都为1，当空间不足时，都将等比例缩小
  
  如果一个项目的\`flex-shrink\`属性为0，其他项目都为1，则空间不足时，前者不缩小
  
  ![](https://static.vue-js.com/658c5be0-9838-11eb-85f6-6fac77c0c9b3.png)
  
  在容器宽度有剩余时，\`flex-shrink\`也是不会生效的
  
  
  
  
  
  ### flex-basis
  
  设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在\`flex-grow\`和\`flex-shrink\`生效前的尺寸
  
  浏览器根据这个属性，计算主轴是否有多余空间，默认值为\`auto\`，即项目的本来大小，如设置了\`width\`则元素尺寸由\`width/height\`决定（主轴方向），没有设置则由内容决定
  
    \`\`\`css
  .item {
      flex-basis: <length> | auto; /* default auto */
  }
    \`\`\`
  
  当设置为0的是，会根据内容撑开
  
  它可以设为跟\`width\`或\`height\`属性一样的值（比如350px），则项目将占据固定空间
  
  
  
  ### flex
  
  \`flex\`属性是\`flex-grow\`, \`flex-shrink\` 和 \`flex-basis\`的简写，默认值为\`0 1 auto\`，也是比较难懂的一个复合属性
  
    \`\`\`css
    .item {
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }
    \`\`\`
  
  一些属性有：
  
  - flex: 1 = flex: 1 1 0%
  - flex: 2 = flex: 2 1 0%
  - flex: auto = flex: 1 1 auto
  - flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩
  
  
  
  \`flex:1\` 和 \`flex:auto\` 的区别，可以归结于\`flex-basis:0\`和\`flex-basis:auto\`的区别
  
  当设置为0时（绝对弹性元素），此时相当于告诉\`flex-grow\`和\`flex-shrink\`在伸缩的时候不需要考虑我的尺寸
  
  当设置为\`auto\`时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑
  
  注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
  
  
  
  ### align-self
  
  允许单个项目有与其他项目不一样的对齐方式，可覆盖\`align-items\`属性
  
  默认值为\`auto\`，表示继承父元素的\`align-items\`属性，如果没有父元素，则等同于\`stretch\`
  
  \`\`\`css
  .item {
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
  \`\`\`
  
  效果图如下：
  
  ![](https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png)
  
  
  
  ## 三、应用场景
  
  在以前的文章中，我们能够通过\`flex\`简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过\`flex\`完成，这里就不再展开代码的演示
  
  包括现在在移动端、小程序这边的开发，都建议使用\`flex\`进行布局
  
  
  
  ## 参考文献
  - https://github.com/ytanck/ytanck
  - http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
        `
      },
      {
        title: "介绍一下grid网格布局",
        desc: "面试官：介绍一下grid网格布局",
        content:`
  ## 一、是什么
  
  \`Grid\` 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列
  
  擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系
  
  ![](https://static.vue-js.com/59680a40-9a94-11eb-85f6-6fac77c0c9b3.png)
  
  这与之前讲到的\`flex\`一维布局不相同
  
  设置\`display:grid/inline-grid\`的元素就是网格布局容器，这样就能出发浏览器渲染引擎的网格布局算法
  
  \`\`\`js
  <div class="container">
      <div class="item item-1">
          <p class="sub-item"></p >
    </div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
  </div> 
  \`\`\`
  
  上述代码实例中，\`.container\`元素就是网格布局容器，\`.item\`元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以\`p\`元素并不是网格元素
  
  这里提一下，网格线概念，有助于下面对\`grid-column\`系列属性的理解
  
  网格线，即划分网格的线，如下图所示：
  
  ![](https://static.vue-js.com/61be7080-9a94-11eb-ab90-d9ae814b240d.png)
  
  上图是一个 2 x 3 的网格，共有3根水平网格线和4根垂直网格线
  
  
  ## 二、属性
  
  同样，\`Grid\` 布局属性可以分为两大类：
  
  - 容器属性，
  - 项目属性
  
  
  
  关于容器属性有如下：
  
  ### display 属性
  
  文章开头讲到，在元素上设置\`display：grid\` 或 \`display：inline-grid\` 来创建一个网格容器
  
  - display：grid 则该容器是一个块级元素
  
  - display: inline-grid 则容器元素为行内元素
  
  
  
  ### grid-template-columns 属性，grid-template-rows 属性
  
  \`grid-template-columns\` 属性设置列宽，\`grid-template-rows\` 属性设置行高
  
  \`\`\`css
  .wrapper {
    display: grid;
    /*  声明了三列，宽度分别为 200px 200px 200px */
    grid-template-columns: 200px 200px 200px;
    grid-gap: 5px;
    /*  声明了两行，行高分别为 50px 50px  */
    grid-template-rows: 50px 50px;
  }
  \`\`\`
  
  以上表示固定列宽为 200px 200px 200px，行高为 50px 50px
  
  上述代码可以看到重复写单元格宽高，通过使用\`repeat()\`函数，可以简写重复的值
  
  - 第一个参数是重复的次数
  - 第二个参数是重复的值
  
  所以上述代码可以简写成
  
  \`\`\`css
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3,200px);
    grid-gap: 5px;
    grid-template-rows:repeat(2,50px);
  }
  \`\`\`
  
  除了上述的\`repeact\`关键字，还有：
  
  - auto-fill：示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格
  
  >\`grid-template-columns: repeat(auto-fill, 200px)\` 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素
  
  - fr：片段，为了方便表示比例关系
  
  >\`grid-template-columns: 200px 1fr 2fr\` 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3
  
  - minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数就是最小值，第二个参数就是最大值
  
  >\`minmax(100px, 1fr)\`表示列宽不小于\`100px\`，不大于\`1fr\`
  
  - auto：由浏览器自己决定长度
  
  >\`grid-template-columns: 100px auto 100px\` 表示第一第三列为 100px，中间由浏览器决定长度
  
  
  
  ### grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性
  
  \`grid-row-gap\` 属性、\`grid-column-gap\` 属性分别设置行间距和列间距。\`grid-gap\` 属性是两者的简写形式
  
  \`grid-row-gap: 10px\` 表示行间距是 10px
  
  \`grid-column-gap: 20px\` 表示列间距是 20px
  
  \`grid-gap: 10px 20px\` 等同上述两个属性
  
  
  
  ### grid-template-areas 属性
  
  用于定义区域，一个区域由一个或者多个单元格组成
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-template-areas: 'a b c'
                          'd e f'
                          'g h i';
  }
  \`\`\`
  
  上面代码先划分出9个单元格，然后将其定名为\`a\`到\`i\`的九个区域，分别对应这九个单元格。
  
  多个单元格合并成一个区域的写法如下
  
    \`\`\`css
    grid-template-areas: 'a a a'
                        'b b b'
                        'c c c';
    \`\`\`
  
  上面代码将9个单元格分成\`a\`、\`b\`、\`c\`三个区域
  
  如果某些区域不需要利用，则使用"点"（\`.\`）表示
  
  
  
  ### grid-auto-flow 属性
  
  划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。
  
  顺序就是由\`grid-auto-flow\`决定，默认为行，代表"先行后列"，即先填满第一行，再开始放入第二行
  
  ![](https://static.vue-js.com/70fb3240-9a94-11eb-ab90-d9ae814b240d.png)
  
  当修改成\`column\`后，放置变为如下：
  
  ![](https://static.vue-js.com/7c26ffa0-9a94-11eb-ab90-d9ae814b240d.png)
  
  
  
  ### justify-items 属性， align-items 属性， place-items 属性
  
  \`justify-items\` 属性设置单元格内容的水平位置（左中右），\`align-items\` 属性设置单元格的垂直位置（上中下）
  
  两者属性的值完成相同
  
  \`\`\`css
  .container {
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
  }
  \`\`\`
  
  属性对应如下：
  
  - start：对齐单元格的起始边缘
  - end：对齐单元格的结束边缘
  - center：单元格内部居中
  - stretch：拉伸，占满单元格的整个宽度（默认值）
  
  \`place-items\`属性是\`align-items\`属性和\`justify-items\`属性的合并简写形式
  
  
  
  ### justify-content 属性， align-content 属性， place-content 属性
  
  \`justify-content\`属性是整个内容区域在容器里面的水平位置（左中右），\`align-content\`属性是整个内容区域的垂直位置（上中下）
  
  \`\`\`css
  .container {
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
  }
  \`\`\`
  
  两个属性的写法完全相同，都可以取下面这些值：
  
  - start - 对齐容器的起始边框
  - end - 对齐容器的结束边框
  - center - 容器内部居中
  
  ![](https://static.vue-js.com/9d1ec990-9a94-11eb-ab90-d9ae814b240d.png)
  
  - space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
  
  - space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔
  
  - space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔
  
  - stretch - 项目大小没有指定时，拉伸占据整个网格容器
  
  ![](https://static.vue-js.com/a620b210-9a94-11eb-85f6-6fac77c0c9b3.png)
  
  
  
  ### grid-auto-columns 属性和 grid-auto-rows 属性
  
  有时候，一些项目的指定位置，在现有网格的外部，就会产生显示网格和隐式网格
  
  比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。超出的部分就是隐式网格
  
  而\`grid-auto-rows\`与\`grid-auto-columns\`就是专门用于指定隐式网格的宽高
  
  
  
  
  
  关于项目属性，有如下：
  
  
  ### grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性
  
  指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置
  
  - grid-column-start 属性：左边框所在的垂直网格线
  - grid-column-end 属性：右边框所在的垂直网格线
  - grid-row-start 属性：上边框所在的水平网格线
  - grid-row-end 属性：下边框所在的水平网格线
  
  举个例子：
  
  \`\`\`html
  <style>
      #container{
          display: grid;
          grid-template-columns: 100px 100px 100px;
          grid-template-rows: 100px 100px 100px;
      }
      .item-1 {
          grid-column-start: 2;
          grid-column-end: 4;
      }
  </style>
  
  <div id="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
  </div>
  \`\`\`
  
  通过设置\`grid-column\`属性，指定1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线
  
  ![](https://static.vue-js.com/b7925530-9a94-11eb-ab90-d9ae814b240d.png)
  
  
  
  
  
  ### grid-area 属性
  
  \`grid-area\` 属性指定项目放在哪一个区域
  
  \`\`\`css
  .item-1 {
    grid-area: e;
  }
  \`\`\`
  
  意思为将1号项目位于\`e\`区域
  
  与上述讲到的\`grid-template-areas\`搭配使用
  
  
  
  ### justify-self 属性、align-self 属性以及 place-self 属性
  
  \`justify-self\`属性设置单元格内容的水平位置（左中右），跟\`justify-items\`属性的用法完全一致，但只作用于单个项目。
  
  \`align-self\`属性设置单元格内容的垂直位置（上中下），跟\`align-items\`属性的用法完全一致，也是只作用于单个项目
  
    \`\`\`css
    .item {
      justify-self: start | end | center | stretch;
      align-self: start | end | center | stretch;
    }
    \`\`\`
  
  这两个属性都可以取下面四个值。
  
    - start：对齐单元格的起始边缘。
    - end：对齐单元格的结束边缘。
    - center：单元格内部居中。
    - stretch：拉伸，占满单元格的整个宽度（默认值）
  
  
  
  ## 三、应用场景
  
  文章开头就讲到，\`Grid\`是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的，在以前的文章中，也有使用\`Grid\`布局完成对应的功能
  
  关于兼容性问题，结果如下：
  
  ![](https://static.vue-js.com/c24a2b10-9a94-11eb-85f6-6fac77c0c9b3.png)
  
  总体兼容性还不错，但在 IE 10 以下不支持
  
  目前，\`Grid\`布局在手机端支持还不算太友好
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "css中，有哪些方式可以隐藏页面元素？区别?",
        desc: "css中，有哪些方式可以隐藏页面元素？区别?",
        content:`
  ## 一、前言
  
  在平常的样式排版中，我们经常遇到将某个模块隐藏的场景
  
  通过\`css\`隐藏元素的方法有很多种，它们看起来实现的效果是一致的
  
  但实际上每一种方法都有一丝轻微的不同，这些不同决定了在一些特定场合下使用哪一种方法
  
  ## 二、实现方式
  
  通过\`css\`实现隐藏元素方法有如下：
  
  - display:none
  - visibility:hidden
  - opacity:0
  - 设置height、width模型属性为0
  - position:absolute
  - clip-path
  
  ### display:none
  
  设置元素的\`display\`为\`none\`是最常用的隐藏元素的方法
  
  \`\`\`css
  .hide {
      display:none;
  }
  \`\`\`
  
  将元素设置为\`display:none\`后，元素在页面上将彻底消失
  
  元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘
  
  消失后，自身绑定的事件不会触发，也不会有过渡效果
  
  特点：元素不可见，不占据空间，无法响应点击事件
  
  ### visibility:hidden
  
  设置元素的\`visibility\`为\`hidden\`也是一种常用的隐藏元素的方法
  
  从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘
  
  \`\`\`css
  .hidden{
      visibility:hidden
  }
  \`\`\`
  
  给人的效果是隐藏了，所以他自身的事件不会触发
  
  特点：元素不可见，占据页面空间，无法响应点击事件
  
  
  ### opacity:0
  
  \`opacity\`属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的
  
  不会引发重排，一般情况下也会引发重绘
  
  > 如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘
  
  \`\`\`css
  .transparent {
      opacity:0;
  }
  \`\`\`
  
  由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的
  
  需要注意的是：其子元素不能设置opacity来达到显示的效果
  
  特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件
  
  
  
  ### 设置height、width属性为0
  
  将元素的\`margin\`，\`border\`，\`padding\`，\`height\`和\`width\`等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其\`overflow:hidden\`来隐藏其子元素
  
  \`\`\`css
  .hiddenBox {
      margin:0;     
      border:0;
      padding:0;
      height:0;
      width:0;
      overflow:hidden;
  }
  \`\`\`
  
  特点：元素不可见，不占据页面空间，无法响应点击事件
  
  
  
  ### position:absolute
  
  将元素移出可视区域
  
  \`\`\`css
  .hide {
      position: absolute;
      top: -9999px;
      left: -9999px;
  }
  \`\`\`
  
  特点：元素不可见，不影响页面布局
  
  
  ### clip-path
  
  通过裁剪的形式
  
  \`\`\`css
  .hide {
    clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
  }
  \`\`\`
  
  特点：元素不可见，占据页面空间，无法响应点击事件
  
  
  ### 小结
  
  最常用的还是\`display:none\`和\`visibility:hidden\`，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们
  
  
  ## 三、区别
  
  关于\`display: none\`、\`  visibility: hidden\`、\`opacity: 0\`的区别，如下表所示：
  
  |                        | display: none | visibility: hidden | opacity: 0 |
  | :--------------------- | :------------ | :----------------- | ---------- |
  | 页面中                 | 不存在        | 存在               | 存在       |
  | 重排                   | 会            | 不会               | 不会       |
  | 重绘                   | 会            | 会                 | 不一定     |
  | 自身绑定事件           | 不触发        | 不触发             | 可触发     |
  | transition             | 不支持        | 支持               | 支持       |
  | 子元素可复原           | 不能          | 能                 | 不能       |
  | 被遮挡的元素可触发事件 | 能            | 能                 | 不能       |
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "什么是回流和重绘？",
        desc: "面试官：怎么理解回流跟重绘？什么场景下会触发？",
        content:`
  ## 一、是什么
  
  在\`HTML\`中，每个元素都可以理解成一个盒子，在浏览器解析过程中，会涉及到回流与重绘：
  
  - 回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置
  
  - 重绘：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制
  
  具体的浏览器解析渲染机制如下所示：
  
  ![](https://static.vue-js.com/2b56a950-9cdc-11eb-ab90-d9ae814b240d.png)
  
  - 解析HTML，生成DOM树，解析CSS，生成CSSOM树
  
  - 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
  - Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
  - Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
  - Display:将像素发送给GPU，展示在页面上
  
  
  
  在页面初始渲染阶段，回流不可避免的触发，可以理解成页面一开始是空白的元素，后面添加了新的元素使页面布局发生改变
  
  当我们对 \`DOM\` 的修改引发了 \`DOM \`几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来
  
  当我们对 \`DOM \`的修改导致了样式的变化（\`color\`或\`background-color\`），却并未影响其几何属性时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式，这里就仅仅触发了重绘
  
  
  
  ## 二、如何触发
  
  要想减少回流和重绘的次数，首先要了解回流和重绘是如何触发的
  
  ### 回流触发时机
  
  回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流，如下面情况：
  
  - 添加或删除可见的DOM元素
  - 元素的位置发生变化
  - 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
  - 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代
  - 页面一开始渲染的时候（这避免不了）
  - 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）
  
  还有一些容易被忽略的操作：获取一些特定属性的值
  
  > offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight
  
  这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流
  
  除此还包括\`getComputedStyle \`方法，原理是一样的
  
  
  
  ### 重绘触发时机
  
  触发回流一定会触发重绘
  
  可以把页面理解为一个黑板，黑板上有一朵画好的小花。现在我们要把这朵从左边移到了右边，那我们要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜色（重绘）
  
  除此之外还有一些其他引起重绘行为：
  
  - 颜色的修改
  
  - 文本方向的修改
  - 阴影的修改
  
  
  
  ### 浏览器优化机制
  
  由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列
  
  当你获取布局信息的操作的时候，会强制队列刷新，包括前面讲到的\`offsetTop\`等方法都会返回最新的数据
  
  因此浏览器不得不清空队列，触发回流重绘来返回正确的值
  
  
  
  ## 三、如何减少
  
  我们了解了如何触发回流和重绘的场景，下面给出避免回流的经验：
  
  - 如果想设定元素的样式，通过改变元素的 \`class\` 类名 (尽可能在 DOM 树的最里层)
  - 避免设置多项内联样式
  - 应用元素的动画，使用 \`position\` 属性的 \`fixed\` 值或 \`absolute\` 值(如前文示例所提)
  - 避免使用 \`table\` 布局，\`table\` 中每个元素的大小以及内容的改动，都会导致整个 \`table\` 的重新计算
  - 对于那些复杂的动画，对其设置 \`position: fixed/absolute\`，尽可能地使元素脱离文档流，从而减少对其他元素的影响
  - 使用css3硬件加速，可以让\`transform\`、\`opacity\`、\`filters\`这些动画不会引起回流重绘
  - 避免使用 CSS 的 \`JavaScript\` 表达式
  
  在使用 \`JavaScript\` 动态插入多个节点时, 可以使用\`DocumentFragment\`. 创建后一次插入. 就能避免多次的渲染性能
  
  但有时候，我们会无可避免地进行回流或者重绘，我们可以更好使用它们
  
  例如，多次修改一个把元素布局的时候，我们很可能会如下操作
  
  \`\`\`js
  const el = document.getElementById('el')
  for(let i=0;i<10;i++) {
      el.style.top  = el.offsetTop  + 10 + "px";
      el.style.left = el.offsetLeft + 10 + "px";
  }
  \`\`\`
  
  每次循环都需要获取多次\`offset\`属性，比较糟糕，可以使用变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求
  
  \`\`\`js
  // 缓存offsetLeft与offsetTop的值
  const el = document.getElementById('el')
  let offLeft = el.offsetLeft, offTop = el.offsetTop
  
  // 在JS层面进行计算
  for(let i=0;i<10;i++) {
    offLeft += 10
    offTop  += 10
  }
  
  // 一次性将计算结果应用到DOM上
  el.style.left = offLeft + "px"
  el.style.top = offTop  + "px"
  \`\`\`
  
  我们还可避免改变样式，使用类名去合并样式
  
  \`\`\`js
  const container = document.getElementById('container')
  container.style.width = '100px'
  container.style.height = '200px'
  container.style.border = '10px solid red'
  container.style.color = 'red'
  \`\`\`
  
  使用类名去合并样式
  
  \`\`\`html
  <style>
      .basic_style {
          width: 100px;
          height: 200px;
          border: 10px solid red;
          color: red;
      }
  </style>
  <script>
      const container = document.getElementById('container')
      container.classList.add('basic_style')
  </script>
  \`\`\`
  
  前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），
  
  都去触发一次渲染树更改，从而导致相应的回流与重绘过程
  
  合并之后，等于我们将所有的更改一次性发出
  
  我们还可以通过通过设置元素属性\`display: none\`，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘，这个过程称为离线操作
  
  \`\`\`js
  const container = document.getElementById('container')
  container.style.width = '100px'
  container.style.height = '200px'
  container.style.border = '10px solid red'
  container.style.color = 'red'
  \`\`\`
  
  离线操作后
  
  \`\`\`js
  let container = document.getElementById('container')
  container.style.display = 'none'
  container.style.width = '100px'
  container.style.height = '200px'
  container.style.border = '10px solid red'
  container.style.color = 'red'
  ...（省略了许多类似的后续操作）
  container.style.display = 'block'
  \`\`\`
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "说说你对sass、less、stylus的理解？",
        desc: "面试官：说说对Css预编语言的理解？有哪些区别?",
        content:`
  ## 一、是什么
  
  \`Css\` 作为一门标记性语言，语法相对简单，对使用者的要求较低，但同时也带来一些问题
  
  需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 \`Css\` 编写经验而很难写出组织良好且易于维护的 \`Css\` 代码
  
  \`Css\`预处理器便是针对上述问题的解决方案
  
  #### 预处理语言
  
  扩充了 \`Css\` 语言，增加了诸如变量、混合（mixin）、函数等功能，让 \`Css\` 更易维护、方便
  
  本质上，预处理是\`Css\`的超集
  
  包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 \`Css\` 文件
  
  
  ## 二、有哪些
  
  \`Css\`预编译语言在前端里面有三大优秀的预编处理器，分别是：
  
  - sass
  - less
  - stylus
  
  
  
  ### sass
  
  2007 年诞生，最早也是最成熟的 \`Css \`预处理器，拥有 Ruby 社区的支持和 \`Compass\` 这一最强大的 \`Css \`框架，目前受 \`LESS\` 影响，已经进化到了全面兼容 \`Css\` 的 \`Scss\`
  
  文件后缀名为\`.sass\`与\`scss\`，可以严格按照 sass 的缩进方式省去大括号和分号
  
  ### less
  
  2009年出现，受\` SASS \`的影响较大，但又使用 \`Css\` 的语法，让大部分开发者和设计师更容易上手，在 \`Ruby \`社区之外支持者远超过 \`SASS\`
  
  其缺点是比起 \`SASS \`来，可编程功能不够，不过优点是简单和兼容 \`Css\`，反过来也影响了 \`SASS \`演变到了\` Scss\` 的时代
  
  
  
  ### stylus
  
  \`Stylus \`是一个\`Css\`的预处理框架，2010 年产生，来自 \`Node.js \`社区，主要用来给 \`Node\` 项目进行 \`Css\` 预处理支持
  
  所以\` Stylus\` 是一种新型语言，可以创建健壮的、动态的、富有表现力的\` Css\`。比较年轻，其本质上做的事情与\` SASS/LESS \`等类似
  
  
  
  
  
  ## 三、区别
  
  虽然各种预处理器功能强大，但使用最多的，还是以下特性：
  
  - 变量（variables）
  - 作用域（scope）
  - 代码混合（ mixins）
  - 嵌套（nested rules）
  - 代码模块化（Modules）
  
  因此，下面就展开这些方面的区别
  
  
  
  ### 基本使用
  
  less和scss
  
  \`\`\`Css
  .box {
    display: block;
  }
  \`\`\`
  
  sass
  
  \`\`\`Css
  .box
    display: block
  \`\`\`
  
  stylus
  
  \`\`\`Css
  .box
    display: block
  \`\`\`
  
  
  
  
  
  ### 嵌套
  
  三者的嵌套语法都是一致的，甚至连引用父级选择器的标记 & 也相同
  
  区别只是 Sass 和 Stylus 可以用没有大括号的方式书写
  
  less
  
  \`\`\`Css
  .a {
    &.b {
      color: red;
    }
  }
  \`\`\`
  
  
  
  ### 变量
  
  变量无疑为 Css 增加了一种有效的复用方式，减少了原来在 Css 中无法避免的重复「硬编码」
  
  \`less\`声明的变量必须以\`@\`开头，后面紧跟变量名和变量值，而且变量名和变量值需要使用冒号\`:\`分隔开
  
  \`\`\`Css
  @red: #c00;
  
  strong {
    color: @red;
  }
  \`\`\`
  
  \`sass\`声明的变量跟\`less\`十分的相似，只是变量名前面使用\`@\`开头
  
  \`\`\`Css
  $red: #c00;
  
  strong {
    color: $red;
  }
  \`\`\`
  
  \`stylus\`声明的变量没有任何的限定，可以使用\`$\`开头，结尾的分号\`;\`可有可无，但变量与变量值之间需要使用\`=\`
  
  在\`stylus\`中我们不建议使用\`@\`符号开头声明变量
  
  \`\`\`Css
  red = #c00
  
  strong
    color: red
  \`\`\`
  
  
  
  
  
  ### 作用域
  
  \`Css\` 预编译器把变量赋予作用域，也就是存在生命周期。就像 \`js \`一样，它会先从局部作用域查找变量，依次向上级作用域查找
  
  \`sass\`中不存在全局变量
  
  \`\`\`Css
  $color: black;
  .scoped {
    $bg: blue;
    $color: white;
    color: $color;
    background-color:$bg;
  }
  .unscoped {
    color:$color;
  } 
  \`\`\`
  
  编译后
  
  \`\`\`Css
  .scoped {
    color:white;/*是白色*/
    background-color:blue;
  }
  .unscoped {
    color:white;/*白色（无全局变量概念）*/
  } 
  \`\`\`
  
  所以，在\`sass\`中最好不要定义相同的变量名
  
  
  
  \`less\`与\`stylus\`的作用域跟\`javascript\`十分的相似，首先会查找局部定义的变量，如果没有找到，会像冒泡一样，一级一级往下查找，直到根为止
  
  \`\`\`Css
  @color: black;
  .scoped {
    @bg: blue;
    @color: white;
    color: @color;
    background-color:@bg;
  }
  .unscoped {
    color:@color;
  } 
  \`\`\`
  
  编译后：
  
  \`\`\`Css
  .scoped {
    color:white;/*白色（调用了局部变量）*/
    background-color:blue;
  }
  .unscoped {
    color:black;/*黑色（调用了全局变量）*/
  } 
  \`\`\`
  
  
  
  
  
  ### 混入
  
  混入（mixin）应该说是预处理器最精髓的功能之一了，简单点来说，\`Mixins\`可以将一部分样式抽出，作为单独定义的模块，被很多选择器重复使用
  
  可以在\`Mixins\`中定义变量或者默认参数
  
  在\`less\`中，混合的用法是指将定义好的\`ClassA\`中引入另一个已经定义的\`Class\`，也能使用够传递参数，参数变量为\`@\`声明
  
  \`\`\`Css
  .alert {
    font-weight: 700;
  }
  
  .highlight(@color: red) {
    font-size: 1.2em;
    color: @color;
  }
  
  .heads-up {
    .alert;
    .highlight(red);
  }
  \`\`\`
  
  编译后
  
  \`\`\`Css
  .alert {
    font-weight: 700;
  }
  .heads-up {
    font-weight: 700;
    font-size: 1.2em;
    color: red;
  }
  \`\`\`
  
  \`Sass\`声明\`mixins\`时需要使用\`@mixinn\`，后面紧跟\`mixin\`的名，也可以设置参数，参数名为变量\`$\`声明的形式
  
  \`\`\`Css
  @mixin large-text {
    font: {
      family: Arial;
      size: 20px;
      weight: bold;
    }
    color: #ff0000;
  }
  
  .page-title {
    @include large-text;
    padding: 4px;
    margin-top: 10px;
  }
  \`\`\`
  
  \`stylus\`中的混合和前两款\`Css\`预处理器语言的混合略有不同，他可以不使用任何符号，就是直接声明\`Mixins\`名，然后在定义参数和默认值之间用等号（=）来连接
  
  \`\`\`Css
  error(borderWidth= 2px) {
    border: borderWidth solid #F00;
    color: #F00;
  }
  .generic-error {
    padding: 20px;
    margin: 4px;
    error(); /* 调用error mixins */
  }
  .login-error {
    left: 12px;
    position: absolute;
    top: 20px;
    error(5px); /* 调用error mixins，并将参数$borderWidth的值指定为5px */
  } 
  \`\`\`
  
  
  
  
  
  ### 代码模块化
  
  模块化就是将\`Css\`代码分成一个个模块
  
  \`scss\`、\`less\`、\`stylus\`三者的使用方法都如下所示
  
  \`\`\`Css
  @import './common';
  @import './github-markdown';
  @import './mixin';
  @import './variables';
  \`\`\`
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      {
        title: "css选择器有哪些？优先级？哪些属性可以继承？",
        desc: "css选择器有哪些？优先级？哪些属性可以继承？",
        content:`
  ## 一、选择器
  CSS选择器是CSS规则的第一部分
  
  它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式
  
  选择器所选择的元素，叫做“选择器的对象”
  
  我们从一个\`Html\`结构开始
  
  \`\`\`html
  <div id="box">
      <div class="one">
          <p class="one_1">
          </p >
          <p class="one_1">
          </p >
      </div>
      <div class="two"></div>
      <div class="two"></div>
      <div class="two"></div>
  </div>
  \`\`\`
  
  关于\`css\`属性选择器常用的有：
  
  - id选择器（#box），选择id为box的元素
  
  - 类选择器（.one），选择类名为one的所有元素
  - 标签选择器（div），选择标签为div的所有元素
  
  - 后代选择器（#box div），选择id为box元素内部所有的div元素
  - 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
  - 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
  - 群组选择器（div,p），选择div、p的所有元素
  
  
  
  还有一些使用频率相对没那么多的选择器：
  
  - 伪类选择器
  
  \`\`\`css
  :link ：选择未被访问的链接
  :visited：选取已被访问的链接
  :active：选择活动链接
  :hover ：鼠标指针浮动在上面的元素
  :focus ：选择具有焦点的
  :first-child：父元素的首个子元素
  \`\`\`
  
  - 伪元素选择器
  
  \`\`\`css
  :first-letter ：用于选取指定选择器的首字母
  :first-line ：选取指定选择器的首行
  :before : 选择器在被选元素的内容前面插入内容
  :after : 选择器在被选元素的内容后面插入内容
  \`\`\`
  
  - 属性选择器
  
  \`\`\`css
  [attribute] 选择带有attribute属性的元素
  [attribute=value] 选择所有使用attribute=value的元素
  [attribute~=value] 选择attribute属性包含value的元素
  [attribute|=value]：选择attribute属性以value开头的元素
  \`\`\`
  
  在\`CSS3\`中新增的选择器有如下：
  
  - 层次选择器（p~ul），选择前面有p元素的每个ul元素
  - 伪类选择器
  
  \`\`\`css
  :first-of-type 表示一组同级元素中其类型的第一个元素
  :last-of-type 表示一组同级元素中其类型的最后一个元素
  :only-of-type 表示没有同类型兄弟元素的元素
  :only-child 表示没有任何兄弟的元素
  :nth-child(n) 根据元素在一组同级中的位置匹配元素
  :nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
  :last-child 表示一组兄弟元素中的最后一个元素
  :root 设置HTML文档
  :empty 指定空的元素
  :enabled 选择可用元素
  :disabled 选择被禁用元素
  :checked 选择选中的元素
  :not(selector) 选择与 <selector> 不匹配的所有元素
  \`\`\`
  
  - 属性选择器
  
  \`\`\`css
  [attribute*=value]：选择attribute属性值包含value的所有元素
  [attribute^=value]：选择attribute属性开头为value的所有元素
  [attribute$=value]：选择attribute属性结尾为value的所有元素
  \`\`\`
  
  
  
  ## 二、优先级
  
  相信大家对\`CSS\`选择器的优先级都不陌生：
  
  > 内联 > ID选择器 > 类选择器 > 标签选择器
  
  到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：
  
  - 如果存在内联样式，那么 A = 1, 否则 A = 0
  
  - B的值等于 ID选择器出现的次数
  
  - C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数
  
  - D 的值等于 标签选择器 和 伪元素 出现的总次数
  
  这里举个例子：
  
  \`\`\`css
  #nav-global > ul > li > a.nav-link
  \`\`\`
  
  套用上面的算法，依次求出 \`A\` \`B\` \`C\` \`D\` 的值：
  
  - 因为没有内联样式 ，所以 A = 0
  
  - ID选择器总共出现了1次， B = 1
  
  - 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1
  - 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3
  
  上面算出的\`A\` 、 \`B\`、\`C\`、\`D\` 可以简记作：\`(0, 1, 1, 3)\`
  
  知道了优先级是如何计算之后，就来看看比较规则：
  
  - 从左往右依次进行比较 ，较大者优先级更高
  - 如果相等，则继续往右移动一位进行比较
  - 如果4位全部相等，则后面的会覆盖前面的
  
  经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用\`!important\`
  
  
  
  ## 三、继承属性
  
  在\`css\`中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性
  
  关于继承属性，可以分成：
  
  - 字体系列属性
  
  \`\`\`css
  font:组合字体
  font-family:规定元素的字体系列
  font-weight:设置字体的粗细
  font-size:设置字体的尺寸
  font-style:定义字体的风格
  font-variant:偏大或偏小的字体
  \`\`\`
  
  - 文本系列属性
  
  \`\`\`css
  text-indent：文本缩进
  text-align：文本水平对刘
  line-height：行高
  word-spacing：增加或减少单词间的空白
  letter-spacing：增加或减少字符间的空白
  text-transform：控制文本大小写
  direction：规定文本的书写方向
  color：文本颜色
  \`\`\`
  
  - 元素可见性
  
  \`\`\`css
  visibility
  \`\`\`
  
  - 表格布局属性
  
  \`\`\`css
  caption-side：定位表格标题位置
  border-collapse：合并表格边框
  border-spacing：设置相邻单元格的边框间的距离
  empty-cells：单元格的边框的出现与消失
  table-layout：表格的宽度由什么决定
  \`\`\`
  
  - 列表属性
  
  \`\`\`css
  list-style-type：文字前面的小点点样式
  list-style-position：小点点位置
  list-style：以上的属性可通过这属性集合
  \`\`\`
  
  - 引用
  
  \`\`\`css
  quotes：设置嵌套引用的引号类型
  \`\`\`
  
  - 光标属性
  
  \`\`\`css
  cursor：箭头可以变成需要的形状
  \`\`\`
  
  继承中比较特殊的几点：
  
  - a 标签的字体颜色不能被继承
  
  - h1-h6标签字体的大下也是不能被继承的
  
  
  
  ### 无继承的属性
  
  - display
  
  - 文本属性：vertical-align、text-decoration
  
  - 盒子模型的属性：宽度、高度、内外边距、边框等
  
  - 背景属性：背景图片、颜色、位置等
  
  - 定位属性：浮动、清除浮动、定位position等
  
  - 生成内容属性：content、counter-reset、counter-increment
  
  - 轮廓样式属性：outline-style、outline-width、outline-color、outline
  
  - 页面样式属性：size、page-break-before、page-break-after
  
  
  
  ## 参考文献
  
  - https://github.com/ytanck/ytanck
        `
      },
      
    ],
  };
export default css;
// https://github.com/ytanck/ytanck