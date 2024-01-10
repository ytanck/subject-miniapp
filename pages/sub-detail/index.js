// pages/subDetail.js

const app = getApp();
var str= `## 9个你不知道的 CSS 伪元素
CSS 伪元素是一项强大的功能，它允许您为所选元素的特定部分设置样式，而无需额外的 JavaScript 代码。 
虽然许多开发人员都熟悉常用的伪元素，如 ::before 和 ::after，但还有一些其他元素经常被忽视或未得到充分利用。 


### 1. ::selection 伪元素
::selection 伪元素以用户选择的文本部分为目标。它提供了一种将样式应用于所选文本并自定义其外观的方法1。 
|表头1|表头2|表头3|
|----|-----|----|
|11|12|13|
|21|22|23|

![图片来一张](https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png)

例子：
\`\`\`js
var a=1
\`\`\`
在上面的代码中，当用户在页面上选择文本时，它将以黄色背景和红色文本颜色突出显示。

### 2.::first-letter伪元素

::first-letter 伪元素允许您设置块级元素的第一个字母的样式。当您想将特殊格式应用于段落或标题的初始字符时，它会派上用场。 

例子：
\`\`\`css
p::first-letter {
  font-size: 2em;
  color: red;
}
\`\`\`
在上面的代码片段中，每个段落的第一个字母将以更大的字体显示并显示为红色。

### 3. ::first-line 伪元素

类似于 ::first-letter，::first-line 伪元素以文本或块级元素的第一行为目标。您可以使用此伪元素将特定样式应用于段落或标题的起始行。 

例子：
\`\`\`css
p::first-line {
  font-weight: bold;
  text-decoration: underline;
}
\`\`\`
在上面的代码中，每个段落的第一行将以粗体显示并带有下划线。

### 4. ::marker 伪元素

::marker 伪元素以列表项的标记为目标，例如无序列表中的项目符号点或有序列表中的数字。使用此伪元素，您可以自定义标记的外观。 

例子：
\`\`\`css
li::marker {
  color: blue;
  font-weight: bold;
}
\`\`\`
### 5. ::placeholder 伪元素

::placeholder 伪元素允许您在输入字段和文本区域中设置占位符文本的样式。通过将自定义样式应用到占位符，您可以增强用户体验并使其与您的整体设计保持一致。 

例子：
\`\`\`css
input::placeholder {
  color: #999;
  font-style: italic;
}
\`\`\`
在上面的代码中，输入字段中的占位符文本将以浅灰色和斜体字体样式显示。

### 6. ::cue 伪元素

::cue 伪元素以 \`<audio>\` 或 \`<audio>\` 元素的提示文本为目标。提示文本通常用于多媒体内容中的字幕或副标题。使用此伪元素，您可以将样式专门应用于提示文本。 

例子：
\`\`\`
<script>123456</script>
\`\`\`
在上面的代码中，视频元素中的提示文本将具有白色文本颜色和黑色背景。

### 7. ::grammar-error 和::spelling-error 伪元素

::grammar-error 和 ::spelling-error 伪元素允许您分别对标记为语法或拼写错误的文本部分设置样式。当内容中存在错误时，这些伪元素可用于向用户提供视觉提示。 

例子：
\`\`\`css

p::grammar-error {
  text-decoration: line-through;
  color: red;
}

p::spelling-error {
  text-decoration: underline;
  color: blue;
}
\`\`\`
在上面的代码中，段落中的语法错误将以划线文本修饰和红色显示，而拼写错误将以下划线和蓝色显示。

### 8. ::backdrop 伪元素

::backdrop 伪元素与全屏 API 结合使用，以在全屏模式下自定义元素背后的背景。它允许您将默认的黑色背景更改为自定义颜色或样式。 

例子：
\`\`\`css
video::backdrop {
  background-color: gray;
}
\`\`\`
在上面的代码中，当一个视频元素处于全屏模式时，它后面的背景将有一个灰色的背景色。

### 9. ::target-text 伪元素

::target-text CSS 伪元素代表滚动到的文本（如果浏览器支持文本片段）。它允许作者选择如何突出显示该部分文本。 

例子：
\`\`\`css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
\`\`\`
这是 MDN 提供的在线示例。请注意，此 API 目前处于试验阶段。

**结论**

CSS 伪元素为元素的特定部分设置样式和增强网页的视觉吸引力提供了广泛的可能性。您无需使用过多的 JavaScript 代码即可实现令人印象深刻的样式效果。`

Page({

  /**
   * 页面的初始数据
   */
  data: {
    md:str,
    curItem:{},
    article:{},
    isShowAnalysis:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {tabIndex,subIndex}= options
    const {questions} = app.courseList[tabIndex]
    // console.log(111,tabIndex,subIndex);
    this.setData({
      curItem:questions[subIndex]
    })
    // this.parseToMarkDown(str)
    this.parseToMarkDown(questions[subIndex].content||'xxx')
  },
  parseToMarkDown(content){
    
    let result = app.towxml(content,'markdown',{
			theme:'light',					// 主题dark，默认`light`
			events:{					// 为元素绑定的事件方法
				tap:(e)=>{
          console.log('tap',e);
          const {data} = e.target.dataset
          if(data&&data.tag=='img'){
            wx.previewImage({
              // current:'',
              urls: [data.attrs.src] // 需要预览的图片http链接列表
            })
          }
				}
			}
    });
    // 更新解析数据
		this.setData({
			article:result,
			// isLoading: false
		},()=>{
      wx.hideLoading()
    });
  },
  showAnalysis(){
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isShowAnalysis:!this.data.isShowAnalysis
    },()=>{
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})