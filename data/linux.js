const linux = {
  id: 13,
  category: "Linux",
  questions: [
    {
      title: "什么是进程？什么是线程？",
      desc: "面试官：说说什么是进程？什么是线程？区别？",
      content:`
## 一、进程

操作系统中最核心的概念就是进程，进程是对正在运行中的程序的一个抽象，是系统进行资源分配和调度的基本单位

操作系统的其他所有内容都是围绕着进程展开的，负责执行这些任务的是\`CPU\`

 ![](https://static.vue-js.com/3ff146b0-02f6-11ec-8e64-91fdec0f05a1.png)



进程是一种抽象的概念，从来没有统一的标准定义看，一般由程序、数据集合和进程控制块三部分组成：

- 程序用于描述进程要完成的功能，是控制进程执行的指令集
- 数据集合是程序在执行时所需要的数据和工作区
- 程序控制块，包含进程的描述信息和控制信息，是进程存在的唯一标志


## 二、线程

**线程**（thread）是操作系统能够进行**运算调度**的最小单位，其是进程中的一个执行任务（控制单元），负责当前进程中程序的执行

一个进程至少有一个线程，一个进程可以运行多个线程，这些线程共享同一块内存，线程之间可以共享对象、资源，如果有冲突或需要协同，还可以随时沟通以解决冲突或保持同步

举个例子，假设你经营着一家物业管理公司。最初，业务量很小，事事都需要你亲力亲为。给老张家修完暖气管道，立马再去老李家换电灯泡——这叫单线程，所有的工作都得顺序执行

后来业务拓展了，你雇佣了几个工人，这样，你的物业公司就可以同时为多户人家提供服务了——这叫多线程，你是主线程

 ![](https://static.vue-js.com/63de34c0-02f6-11ec-a752-75723a64e8f5.png)

但实际上，并不是线程越多，进程的工作效率越高，这是因为在一个进程内，不管你创建了多少线程，它们总是被限定在一颗\`CPU\`内，或者多核\`CPU\`的一个核内

这意味着，多线程在宏观上是并行的，在微观上则是分时切换串行的，多线程编程无法充分发挥多核计算资源的优势

这导致使用多线程做任务并行处理时，线程数量超过一定数值后，线程越多速度反倒越慢的原因



## 三、区别

- **本质区别**：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位

- **在开销方面**：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小

- **所处环境**：在操作系统中能同时运行多个进程（程序）；而在同一个进程（程序）中有多个线程同时执行（通过CPU调度，在每个时间片中只有一个线程执行）

- **内存分配方面**：系统在运行的时候会为每个进程分配不同的内存空间；而对线程而言，除了CPU外，系统不会为线程分配内存（线程所使用的资源来自其所属进程的资源），线程组之间只能共享资源

- **包含关系**：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程


举个例子：进程=火车，线程=车厢

- 线程在进程下行进（单纯的车厢无法运行）
- 一个进程可以包含多个线程（一辆火车可以有多个车厢）
- 不同进程间数据很难共享（一辆火车上的乘客很难换到另外一辆火车，比如站点换乘）
- 同一进程下不同线程间数据很易共享（A车厢换到B车厢很容易）
- 进程要比线程消耗更多的计算机资源（采用多列火车相比多个车厢更耗资源）
- 进程间不会相互影响，一个线程挂掉将导致整个进程挂掉（一列火车不会影响到另外一列火车，但是如果一列火车上中间的一节车厢着火了，将影响到所有车厢）

      `
    },
    {
      title: "linux系统下 文件操作常用的命令有哪些？",
      desc: "说说 linux系统下 文件操作常用的命令有哪些？",
      content:`
## 一、是什么
\`Linux\` 是一个开源的操作系统（OS），是一系列Linux内核基础上开发的操作系统的总称（常见的有Ubuntu、centos）

系统通常会包含以下4个主要部分
- 内核
- shell
- 文件系统
- 应用程序

文件系统是一个**目录树的结构**，文件系统结构从一个根目录开始，根目录下可以有任意多个文件和子目录，子目录中又可以有任意多个文件和子目录

 ![](https://static.vue-js.com/b71b64c0-03c1-11ec-a752-75723a64e8f5.png)



## 二、文件操作

常见处理目录的命令如下：

- ls（英文全拼：list files）: 列出目录及文件名
- cd（英文全拼：change directory）：切换目录
- pwd（英文全拼：print work directory）：显示目前的目录
- mkdir（英文全拼：make directory）：创建一个新的目录
- rmdir（英文全拼：remove directory）：删除一个空的目录
- cp（英文全拼：copy file）: 复制文件或目录
- rm（英文全拼：remove）: 删除文件或目录
- mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称



### ls

列出目录文件，选项与参数：

- -a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)
- -d ：仅列出目录本身，而不是列出目录内的文件数据(常用)
- -l ：长数据串列出，包含文件的属性与权限等等数据；(常用)

例如将家目录下的所有文件列出来(含属性与隐藏档)

\`\`\`cmd
[root@www ~]# ls -al ~
\`\`\`


### cd

切换工作目录

语法：

\`\`\`cmd
 cd [相对路径或绝对路径]
\`\`\`

\`\`\`cmd
# 表示回到自己的家目录，亦即是 /root 这个目录
[root@www runoob]# cd ~

# 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；
[root@www ~]# cd ..
\`\`\`



### pwd

\`pwd\` 是 \`Print Working Directory\` 的缩写，也就是显示目前所在目录的命令。

\`\`\`
[root@www ~]# pwd [-P]
\`\`\`

选项与参数：

- -P ：显示出确实的路径，而非使用连结 (link) 路径





### mkdir

 创建新目录

语法：

\`\`\`
mkdir [-mp] 目录名称
\`\`\`

选项与参数：

- -m ：配置文件的权限
- -p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来



### rmdir (删除空的目录)

语法：

\`\`\`
 rmdir [-p] 目录名称
\`\`\`

选项与参数：

- -p ：连同上一级『空的』目录也一起删除





### cp

即拷贝文件和目录

语法：

\`\`\`cmd
cp 目标文件 拷贝文件
\`\`\`

用法如下：

\`\`\`cmd
cp file file_copy --> file 是目标文件，file_copy 是拷贝出来的文件
cp file one --> 把 file 文件拷贝到 one 目录下，并且文件名依然为 file
cp file one/file_copy --> 把 file 文件拷贝到 one 目录下，文件名为file_copy
cp *.txt folder --> 把当前目录下所有 txt 文件拷贝到 folder 目录下
复制代码
\`\`\`

常用参数如下：

- \`-r\` 递归的拷贝，常用来拷贝一整个目录





### rm (移除文件或目录)

语法：

\`\`\`
 rm [-fir] 文件或目录
\`\`\`

选项与参数：

- -f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
- -i ：互动模式，在删除前会询问使用者是否动作
- -r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！



### mv (移动文件与目录，或修改名称)

语法：

\`\`\`
[root@www ~]# mv [-fiu] source destination
[root@www ~]# mv [options] source1 source2 source3 .... directory
\`\`\`

选项与参数：

- -f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
- -i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
- -u ：若目标文件已经存在，且 source 比较新，才会升级 (update)



### ln

\`Linux\` 文件的存储方式分为3个部分，文件名、文件内容以及权限，其中文件名的列表是存储在硬盘的其它地方和文件内容是分开存放的，每个文件名通过 \`inode\` 标识绑定到文件内容

\`Linux\` 下有两种链接类型：硬链接和软链接

#### 硬链接

使链接的两个文件共享同样文件内容，就是同样的 \`inode\` ，一旦文件1和文件2之间有了硬链接，那么修改任何一个文件，修改的都是同一块内容

语法：

\`\`\`cmd
# 创建 file2 为 file1 的硬链接
ln file1 file2
\`\`\`



 ![](https://static.vue-js.com/c92e7800-03c1-11ec-8e64-91fdec0f05a1.png)

删除文件1不会影响删除文件2，对于硬链接来说，删除任意一方的文件，共同指向的文件内容并不会从硬盘上删除

只有同时删除了两个文件后后，它们共同指向的文件内容才会消失。



#### 软链接

类似\`window\`系统的快捷方式

使用方式：

\`\`\`cmd
ln -s file1 file2
\`\`\`

 ![](https://static.vue-js.com/d5a22eb0-03c1-11ec-8e64-91fdec0f05a1.png)其实 \`file2\` 只是 \`file1\` 的一个快捷方式，它指向的是 \`file1\` ，所以显示的是 \`file1\` 的内容，但其实 \`file2\` 的 \`inode\` 与 \`file1\` 并不相同

如果

删除了 \`file2\` 的话， \`file1\` 是不会受影响的，但如果删除 \`file1\` 的话， \`file2\` 就会变成死链接，因为指向的文件不见了



## 三、文件查看

常见的文件内容查看有如下：

- cat 由第一行开始显示文件内容
- less 一页一页的显示文件内容
- head 只看头几行
- tail 只看尾巴几行



### cat

由第一行开始显示文件内容

语法：

\`\`\`
cat [-AbEnTv]
\`\`\`

常见的选项与参数如下：

- -b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
- -n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同



### less

一页一页翻动，以下实例输出/etc/man.config文件的内容：

\`\`\`cmd
[root@www ~]# less /etc/man.config
#
# Generated automatically from man.conf.in by the
# configure script.
#
# man.conf from man-1.6d
....(中间省略)....
:   <== 这里可以等待你输入命令！
\`\`\`

less运行时可以输入的命令有：

- 空白键  ：向下翻动一页；
- [pagedown]：向下翻动一页；
- [pageup] ：向上翻动一页；
- /字串   ：向下搜寻『字串』的功能；
- ?字串   ：向上搜寻『字串』的功能；
- n     ：重复前一个搜寻 (与 / 或 ? 有关！)
- N     ：反向的重复前一个搜寻 (与 / 或 ? 有关！)
- q     ：离开 less 这个程序



### head

取出文件前面几行

语法：

\`\`\`
head [-n number] 文件 
\`\`\`

选项与参数：

- -n ：后面接数字，代表显示几行的意思

\`\`\`cmd
[root@www ~]# head /etc/man.config
\`\`\`



### tail

取出文件后面几行

语法：

\`\`\`
tail [-n number] 文件 
\`\`\`

选项与参数：

- -n ：后面接数字，代表显示几行的意思
- -f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测
      `
    },{
      title: "Linux系统下防火墙firewall开放IP及端口命令",
      desc: "",
      content:`
CentOS7使用的是firewall防火墙，不再是原来的iptables
## 防火墙基础命令
1：查看firewall防火墙状态

\`\`\`javascript
firewall-cmd --state
//或
systemctl status firewalld
\`\`\`
2：打开防火墙

\`\`\`javascript
systemctl start firewalld
\`\`\`
3：关闭防火墙

\`\`\`javascript
systemctl stop firewalld
\`\`\`
4：重启防火墙，使设置生效

\`\`\`javascript
firewall-cmd --relaod
//或
systemctl reload firewalld
\`\`\`
5：开机自启动防火墙

\`\`\`javascript
systemctl enable firewalld
\`\`\`
6：禁止开机启动防火墙

\`\`\`javascript
systemctl disable firewalld
\`\`\`
7：查看已打开的端口

\`\`\`javascript
firewall-cmd --list-ports
\`\`\`
8：开放端口

\`\`\`javascript
firewall-cmd --permanent --zone=public --add-port=8080/tcp
\`\`\`
其中permanent表示永久生效，public表示作用域，8080/tcp表示端口和类型
9：关闭端口

\`\`\`javascript
firewall-cmd --permanent --zone=public --remove-port=8080/tcp
\`\`\`
10：查看设置是否生效

\`\`\`javascript
firewall-cmd --zone=public --query-port=22/tcp
\`\`\`
11：批量开放端口，如从100到500这之间的端口我们全部要打开

\`\`\`javascript
firewall-cmd --zone=public --add-port=100-500/tcp --permanent
\`\`\`
12：同理，批量限制端口为

\`\`\`javascript
firewall-cmd --zone=public --remove-port=100-500/tcp --permanent
firewall-cmd --reload
\`\`\`
## 开放或限制IP
### 限制IP地址访问
1、比如限制IP为192.168.0.200的地址禁止访问80端口即禁止访问机器

\`\`\`javascript
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="192.168.0.200" port protocol="tcp" port="80" reject"
\`\`\`
2、重新载入一下防火墙设置，使设置生效

\`\`\`javascript
firewall-cmd --reload
\`\`\`
3、查看已经设置的规则

\`\`\`javascript
firewall-cmd --zone=public --list-rich-rules
\`\`\`
### 解除IP地址限制
解除刚才被限制的192.168.0.200

\`\`\`javascript
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="192.168.0.200" port protocol="tcp" port="80" accept"
\`\`\`
再重载，查看规则是否生效，如设置未生效，可尝试直接编辑规则文件，删掉原来的设置规则，重新载入一下防火墙即可

\`\`\`javascript
vim /etc/firewalld/zones/public.xml
\`\`\`

### 限制IP地址段
如我们需要限制10.0.0.0-10.0.0.255这一整个段的IP，禁止他们访问

\`\`\`javascript
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="10.0.0.0/24" port protocol="tcp" port="80" reject"
\`\`\`
其中10.0.0.0/24表示为从10.0.0.0这个IP开始，24代表子网掩码为255.255.255.0，共包含256个地址，即从0-255共256个IP，即正好限制了这一整段的IP地址
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9537f8909b324e1b8243f8193401596f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image)

同理，打开限制为

\`\`\`javascript
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="10.0.0.0/24" port protocol="tcp" port="80" accept"
firewall-cmd --reload
\`\`\`

      `
    },{
      title: "linux 用户管理的理解？相关的命令有哪些？",
      desc: "面试官：说说你对 linux 用户管理的理解？相关的命令有哪些？",
      content:`
## 一、是什么

Linux是一个多用户的系统，允许使用者在系统上通过规划不同类型、不同层级的用户，并公平地分配系统资源与工作环境

而与 \`Windows\` 系统最大的不同， \`Linux\` 允许不同的用户同时登录主机，同时使用主机的资源

既然是多用户的系统，那么最常见的问题就是权限，不同的用户对于不同的文件都应该有各自的权限

例如，小 A 希望个人文件不被其他用户读取，而如果不对文件进行权限设置，共享了主机资源的小 B 也可以读取小 A 的个人文件，这是不合理的

这里面涉及到用户与用户组的概念



## 二、用户与用户组

\`Linux \`以 “用户与用户组” 的概念，建立用户与文件权限之间的联系，保证系统能够充分考虑每个用户的隐私保护，很大程度上保障了 \`Linux\` 作为多用户系统的可行性

从文件权限的角度出发，“用户与用户组” 引申为三个具体的对象：

- **文件所有者**
- **用户组成员**
- **其他人**

每一个对象对某一个文件的持有权限是不同的



### 文件所有者

当一个用户创建了一个文件，这个用户就是这个文件的文件所有者。文件所有者对文件拥有最高权限，同时排他性地拥有该文件

除非文件所有者开放权限，否则其他人无法对文件执行查看、修改等操作



### 用户组

将 “其他用户” 区分为用户组成员和其他人后，若文件所有者希望对部分用户开放权限，而对其他人继续保持私有，则只需要将这部分用户与文件所有者划入一个用户组

这样，这部分用户就成了与文件所有者同组的用户组成员。用户可以对用户组成员开放文件权限，用户组成员则具备了查看、修改文件的权限，而对其他无关用户保持私有

例如，团队成员之间保持文件资源共享，但对非团队成员保持私有，这就需要将文件所有者与团队成员用户划分为同一个用户组，再对用户组成员开放权限即可



### 其他人

既与文件所有者没有任何联系的其他用户



### 小结

户和用户组的对应关系是：一对一、多对一、一对多或多对多：

- 一对一：某个用户可以是某个组的唯一成员
- 多对一：多个用户可以是某个唯一的组的成员，不归属其它用户组
- 一对多：某个用户可以是多个用户组的成员
- 多对多：多个用户对应多个用户组，并且几个用户可以是归属相同的组



### 拓展

当我们使用\`ls -l\`的时候，会列出当前目录的文件信息，如下：

\`\`\`cmd
drwxr-xr-x   3  osmond   osmond    4096  05-16 13:32   nobp
\`\`\`

- d：文件类型
- rwxr-xr-x：文件权限
- 3 硬链接数或目录包含的文件数
- osmond：文件所有者
- 4096：文件长度
- 05-16 13:32：文件上次修改的事件和日期
- nobp：文件名

下面主要看看文件权限分析，实际上是由9个字符组成，每3个一组：

- 第一组控制文件**所有者**的访问权限
- 第二组控制所有者**所在用户组**的其他成员的访问权限
- 第三组控制**系统其他用户**的访问权限

\`-\`代表当前没有，\`rwx\`对应代表的意思如下：

 ![](https://static.vue-js.com/9ac2cf60-0417-11ec-8e64-91fdec0f05a1.png)





### 三、用户操作



用户相关的操作有如下：

### 新增用户

\`useradd\` 可以用来创建新用户，简要语法为：

\`\`\`text
useradd [options] [username]
\`\`\`

例如：

添加一个一般用户

\`\`\`
# useradd kk //添加用户kk
\`\`\`

为添加的用户指定相应的用户组

\`\`\`
# useradd -g root kk //添加用户kk，并指定用户所在的组为root用户组
\`\`\`

创建一个系统用户

\`\`\`
# useradd -r kk //创建一个系统用户kk
\`\`\`

为新添加的用户指定/home目录

\`\`\`
# useradd-d /home/myf kk //新添加用户kk，其home目录为/home/myf
//当用户名kk登录主机时，系统进入的默认目录为/home/myf
\`\`\`



## 设置密码

 创建的用户还没有设置登录密码，需要利用\`passwd\`进行密码设置

\`\`\`text
asswd [options] [username]
\`\`\`

\`option\` 参数有如下：

- -d 删除密码
- -f 强迫用户下次登录时必须修改口令
- -w 口令要到期提前警告的天数
- -k 更新只能发送在过期之后
- -l 停止账号使用
- -S 显示密码信息
- -u 启用已被停止的账户
- -x 指定口令最长存活期
- -g 修改群组密码
- 指定口令最短存活期
- -i 口令过期后多少天停用账户

例如，修改用户密码

\`\`\`
# passwd runoob  //设置runoob用户的密码
Enter new UNIX password:  //输入新密码，输入的密码无回显
Retype new UNIX password:  //确认密码
passwd: password updated successfully
# 
\`\`\`

显示账号密码信息

\`\`\`
# passwd -S runoob
runoob P 05/13/2010 0 99999 7 -1
\`\`\`

删除用户密码

\`\`\`
# passwd -d lx138 
passwd: password expiry information changed.
\`\`\`



### 修改用户

\`chage\` 命令用来修改与用户密码相关的过期信息，如密码失效日、密码最短保留天数、失效前警告天数等

\`\`\`text
chage [option] [username]
\`\`\`

常见的参数有：

- -d：指定密码最后修改日期

- -E：密码到期的日期

- -l：列出用户以及密码的有效期

- -m：密码能够更改的最小天数
- -M：密码保持有效的最大天数





### 删除用户

userdel 命令用来删除用户的相关的所有数据。

\`\`\`text
userdel [options] [username]
\`\`\`

常见的参数有：

- -r：删除用户登入目录以及目录中所有文件

例如删除用户账号

\`\`\`
# userdel hnlinux
\`\`\`







用户组相关的操作如下：

### 新增用户组

\`groupadd\`用于创建一个新的工作组，新工作组的信息将被添加到系统文件中

\`\`\`text
groupadd [options] [groupname]
\`\`\`

常见的参数有如下：

- -g：指定新建工作组的 id；
- -r：创建系统工作组，系统工作组的组ID小于 500
- -K：覆盖配置文件 "/ect/login.defs"
- -o：允许添加组 ID 号不唯一的工作组
- -f,--force: 如果指定的组已经存在，此选项将失明了仅以成功状态退出

例如创建一个新的组，并添加组 ID。

\`\`\`
＃groupadd －g 344 runoob
\`\`\`





### 修改用户

\`groupmod \`命令用来修改 \`group \`相关的参数，例如群组识别码或者名称

\`\`\`text
groupmod [options] [groupname]
\`\`\`

常见的参数有：

- -g <群组识别码> 　设置欲使用的群组识别码
- -o 　重复使用群组识别码
- -n <新群组名称> 　设置欲使用的群组名

例如修改组名：

\`\`\`
# groupmod -n linux linuxso 
\`\`\`





### 删除用户组

\`groupdel\` 用于删除用户组，如果该群组中仍包括某些用户，则必须先删除这些用户后，方能删除群组

\`\`\`text
groupdel [groupname]
\`\`\`



日常工作通常会碰到只有\` root \`用户才有权限执行的操作，这就需要使用用户身份切换的命令：

### su

用于变更为其他使用者的身份，除 \`root\` 外，需要键入该使用者的密码







### sudo

\`sudo\`命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行

不是所有的用户都能执行 \`sudo\` 命令的，而是在 \`/etc/sudoers\` 文件内的用户才能执行这个命令

例如\`sudo\`命令使用\`ls\`：

\`\`\`
$ sudo ls
\`\`\`

      `
    },{
      title: "一份前端够用的 Linux 命令",
      desc: "",
      content:`
## 一份前端够用的 Linux 命令

我在建站的过程中，必不可少会用到 Linux 命令，所以此篇写一份基本够用的 Linux 命令，会涵盖博客搭建系列文章用到的各种命令，方便查询和学习使用。

## 0. Owner、Group、Others、Root

Linux 系统是一种多用户系统，它将文件访问者身份分为三种：

### 文件所有者（Owner）

当创建一个用户的时候，Linux 会为该用户创建一个主目录，路径为 \`/home/<username>\`，我们可以使用 \`cd ~\`，快捷进入主目录。如果你想放一个私密文件，就可以放在自己的主目录里，然后设置只能自己查看。

### 群组（Group）

每个用户都有一个用户组，方便多人操作的时候，为一群人分配权限。当创建用户的时候，会自动创建一个与它同名的用户组。

如果一个用户同时属于多个组，用户需要在用户组之间切换，才能具有其他用户组的权限。

### 其他人（Others）

既不是文件所有者又不是文件所属群组成员的用户，就是其他人。

### 超级用户（Root）

Root 用户是一类特殊的用户，该用户可以访问所有文件。

## 1. adduser 添加用户 和 passwd 更改密码

\`\`\`
# 添加一个名为 git 的用户
adduser git
# 设置 git 用户的密码
passed git

\`\`\`

但是由于创建的用户权限较低，有的时候我们需要为用户提权，此时我们可以这样做：

\`\`\`
# 会打开 sudoers 配置文件
sudo visudo

\`\`\`

注意同样是编辑 \`sudoers\` 配置文件，使用这个命令会比使用 \`sudo vim /etc/ sudoers\` 更安全， 除了对语法有校验，并且还会在多用户编辑的时候锁住文件。

打开 \`sudoers\` 配置文件后，我们添加这样一行配置：

\`\`\`
# Allow git to run any commands anywhere
git ALL=(ALL:ALL) ALL

\`\`\`

简单解释下这句话 \`git ALL=(ALL:ALL) ALL\`：

- git 表示规则应用的用户名
- 第一个 \`ALL\` 表示规则应用于所有 hosts
- 第二个 \`ALL\` 表示规则应用于所有 users
- 第三个 \`ALL\` 表示规则应用于所有 groups
- 第四个 \`ALL\` 表示规则应用于所有 commands

我们保存退出后，\`git\` 用户就会获得 root 权限。

## 2. ls 列出文件和目录

1. \`ls\` 列出文件和目录

\`\`\`
[root@iZ2ze learn-typescript.git]# ls
branches  config  description  HEAD  hooks  index  info  objects  refs

\`\`\`

1. \`ls -la\` 由 \`-a\` 显示所有文件和目录（包括隐藏）和 \`-l\` 显示详细列表组成：

\`\`\`
[root@iZ2ze learn-typescript.git]# ls -la
总用量 20
drwxrwxr-x  7 git git  132 12月 15 12:33 .
drwx------  3 git git  127 12月 15 14:51 ..
drwxrwxr-x  2 git git    6 12月 15 12:21 branches
-rw-rw-r--  1 git git   66 12月 15 12:21 config
-rw-rw-r--  1 git git   73 12月 15 12:21 description
-rw-rw-r--  1 git git   23 12月 15 12:21 HEAD
drwxrwxr-x  2 git git 4096 12月 15 13:10 hooks
-rw-rw-r--  1 git git  217 12月 15 12:33 index
drwxrwxr-x  2 git git   21 12月 15 12:21 info
drwxrwxr-x 10 git git   90 12月 15 12:33 objects
drwxrwxr-x  4 git git   31 12月 15 12:21 refs

\`\`\`

每一行都有 7 列，我们以 \`branches\` 为例讲解每列的含义：

| drwxrwxr-x         | 2                      | git    | git    | 6                  | 12 月 15 12:21 | branches |
| ------------------ | ---------------------- | ------ | ------ | ------------------ | -------------- | -------- |
| 文件类型和权限信息 | 链接数或者一级子目录数 | 所有者 | 所属组 | 文件大小，单位字节 | 最后修改时间   | 文件名   |

重点看第 1 列的内容，以 \`drwxrwxr-x\` 为例，这里一共 10 位，第 1 位表示文件类型，其中 \`-\` 表示普通文件，\`d\` 表示目录文件。

第 2 到第 4 位，表示所有者权限，其中 \`r\` 表示读权限，\`w\` 表示写权限，\`x\` 表示可执行权限， \`-\`表示无权限，第 2 到 5 位为 \`rwx\`，表示所有者可读可写可执行。

第 5 到第 7 位，表示组用户权限，这里也是 \`rwx\`。

第 8 到第 10 位，表示其他用户权限，这里是 \`r-x\`，表示有可读可执行权限，无写入权限。

这里再额外补充一点：

像 \`root\` 用户创建文件夹的默认权限为 \`rwxr-xr-x\`:

\`\`\`
[root@iZ2ze www]# mkdir test
[root@iZ2ze www]# ls -l

drwxr-xr-x  2 root root  6 12月 17 23:53 test

\`\`\`

而创建文件的默认权限是 \`rw-r--r--\`，注意创建文件默认会去掉 \`x\` 权限：

\`\`\`
[root@iZ2ze www]# touch index.html
[root@iZ2ze www]# ls -l

-rw-r--r--  1 root root  0 12月 17 23:54 index.html

\`\`\`

这就是为什么我们有的时候需要在创建文件后，又加上执行权限。

## 3. chown 更改文件属主，也可以同时更改文件属组

**chown (change owner)** 语法：

\`\`\`
# -R：递归更改文件属组
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名

\`\`\`

将 \`index.html\` 的所有者更改为 \`git\`：

\`\`\`
[root@iZ2ze www]# chown git index.html
[root@iZ2ze www]# ls -

-rw-r--r-- 1 git  root  0 12月 17 23:54 index.html

\`\`\`

将 \`index.html\` 的所有者和群组都改为 \`git\`：

\`\`\`
[root@iZ2ze www]# chown git:git index.html
[root@iZ2ze www]# ls -l

-rw-r--r-- 1 git  git   0 12月 17 23:54 index.html

\`\`\`

## 4. chmod 更改文件权限

权限除了用 \`r\` \`w\` \`x\` 这种方式表示，也可以用数字表示，数组与字母的对应关系为：

- r:4
- w:2
- x:1

之所有如此对应关系，主要还是为了方便推导，比如我们希望一个文件可读可写，那我们可以方便的设置权限为 6（4 + 2），同样，如果我们知道一个权限为 3，我们也可以推导出权限为可写可执行，因为只有 2 + 1 才可能等于 3。

我们看下 **chmod （change mode）**的具体语法：

\`\`\`
# -R：递归更改文件属组
chmod [-R] xyz 文件或目录

\`\`\`

其中 xyz 分别表示 Owner、Group、Others 的权限，如果我们这样设置一个文件的权限：

\`\`\`
chomd 750 index.html

\`\`\`

我们可以得知，Owner 的权限为 7，为可读可写可执行，Group 的权限为 5，为可读可执行，Others 的权限为 0，表示不可读写不可执行。对应字母为：\`rwxr-x---\`。

除了这种数字的方式，还有一种使用符号类型改变权限的方式：

在这种方式里，我们将三种身份 \`Owner\`、\`Group\`、\`Others\`，分别简写为 \`u（User）\`、\`g\`、\`o\`，用 \`a\` 表示所有身份，再使用 \`+\` \`-\` \`=\` 表示加入、去除、设定一个权限，\`r\` \`w\` \`x\` 则继续表示读，写，执行权限，举个例子：

\`\`\`
chomd u+x,g-x,o-x index.html

\`\`\`

意思就是 \`Owner\` 加上执行权限，\`Group\` 和 \`Others\` 去除执行权限。

当然我们也可以直接设定权限

\`\`\`
chmod u=rwx,g=rx,o=r index.html

\`\`\`

此时文件的权限就相当于 \`-rwxr-xr--\`。

此外，我们还可以省略不写 \`ugoa\` 这类身份内容，直接写：

\`\`\`
chmod +x index.html

\`\`\`

此时相当于使用了 \`a\`，会给所有身份添加执行权限。

## 5. su 切换身份

\`\`\`
# 切换为 git 用户
su git

\`\`\`

## 6. whoami 显示用户名

\`\`\`
# whoami
root

\`\`\`

## 7. pwd 显示当前目录

\`\`\`
[git@iZ2ze www]$ pwd
/home/www

\`\`\`

## 9. cd 切换工作目录

\`\`\`
# 进入 /home/www/
cd /home/www

# 进入自己的主目录
cd ~

# 进入当前目录的上上两层 :
cd ../..

\`\`\`

## 10. mkdir 创建目录

1. \`mkdir\` 创建目录：

\`\`\`
mkdir new_folder

\`\`\`

1. \`mkdir -p\` 递归创建目录：

\`\`\`
mkdir -p one/two/three

\`\`\`

## 11. touch 创建文件

用于修改文件或者目录的时间属性，当文件不存在，系统会创建空白文件

\`\`\`
touch new_file

\`\`\`

## 12. echo 打印输出

echo 是 Shell 命令，用于打印输出：

\`\`\`
# 显示转义字符
echo "\"test content\""

\`\`\`

创建或覆盖文件内容为 "test content"：

\`\`\`
echo "test content" > index.html

\`\`\`

如果是想追加内容，就用 \`>>\` ：

\`\`\`
[root@iZ2ze www]# echo "test content" > index.html
[root@iZ2ze www]# cat index.html
test content
[root@iZ2ze www]# echo "test content" >> index.html
[root@iZ2ze www]# cat index.html
test content
test content

\`\`\`

## 13. cat 连接文件并打印输出

查看文件内容：

\`\`\`
cat ~/.ssh/id_rsa.pub

\`\`\`

清空 index.html 内容：

\`\`\`
cat /dev/null > index.html

\`\`\`

把 index.html 的内容写入 second.html：

\`\`\`
cat index.html > second.html

\`\`\`

把 index.html 的内容追加写入 second.html：

\`\`\`
cat index.html >> second.html

\`\`\`

把 index.html 和 second.html 追加写入 third.html：

\`\`\`
cat index.html second.html >> third.html

\`\`\`

## 14. cp 复制文件或目录

将目录 website/ 下的所有文件复制到新目录 static 下：

\`\`\`
# -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。
cp –r website/ static


\`\`\`

## 15. mv 移动并重命名

文件改名：

\`\`\`
mv index.html index2.html


\`\`\`

隐藏文件：

\`\`\`
# 文件名上加上 .
mv index.html .index.html


\`\`\`

移动文件：

\`\`\`
# 仅仅移动
mv  /home/www/index.html   /home/static/
# 移动又重命名
mv /home/www/index.html   /home/static/index2.html


\`\`\`

批量移动：

\`\`\`
mv  /home/www/website/*  /home/www/static


\`\`\`

### 16. rm 删除一个文件或者目录

\`\`\`
# 系统会询问
rm file

# -f 表示直接删除
# -r 表示目录下的所有文件删除

# 删除当前目录下的所有文件及目录
rm -r  *

# 跑路
rm -rf /*


\`\`\`

## 17. vi/vim

Linux 内建 vi 文书编辑器，Vim 是从 vi 发展出来的一个文本编辑器。

基本上 vi/vim 共分为三种模式，分别是**命令模式（Command mode）**，**输入模式（Insert mode**）和**底线命令模式（Last line mode）**。我们边操作边介绍这三种模式：我们执行 \`vim index.html\`，如果没有该文件，则会创建文件：

\`\`\`
vim index.html


\`\`\`

此时界面为：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

此时是**命令模式**，在命令模式下，输入的任何字符都会被视为命令，接下来几个常用的命令：

- i 切换到输入模式。
- x 删除当前光标所在处的字符。
- : 切换到底线命令模式。

我们按下 \`i\`，便会进入**输入模式**：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

输入模式下，左下角有 \`-- INSERT --\` 标志：

此时我们可以进行各种输入，当输入完毕后，按下 ESC 回到命令模式：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

此时左下角的 INSERT 已经消失不见了，如果我们要保存退出，我们先输入 \`:\` ，进入**底线命令模式**：

在底线命令模式中，常见的命令有：

- w 保存文件
- q 退出程序

我们输入 \`wq\`，表示保存并退出，此时我们就会发现并创建了一个 HTML 文件。

## 18. ssh 远程连接工具

注意 ssh 监听是 22 端口。

其基本语法为：

\`\`\`
ssh [OPTIONS] [-p PORT] [USER@]HOSTNAME [COMMAND]


\`\`\`

监听端口示例：

\`\`\`
ssh -p 300 git@8.8.8.8


\`\`\`

打开调试模式：

\`\`\`
# -v 冗详模式，打印关于运行情况的调试信息
ssh -v git@8.8.8.8


\`\`\`

      `
    },{
      title: "对 shell 的理解？常见的命令？",
      desc: "面试官：说说你对 shell 的理解？常见的命令？",
      content:`
## 一、是什么

 \`Shell \`是一个由\`c\`语言编写的应用程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言

它连接了用户和\` Linux \`内核，让用户能够更加高效、安全、低成本地使用 \`Linux\` 内核

其本身并不是内核的一部分，它只是站在内核的基础上编写的一个应用程序，它和 QQ、微信等其它软件没有什么区别，特殊的地方就是开机立马启动，并呈现在用户面前

主要作用是接收用户输入的命令，并对命令进行处理，处理完毕后再将结果反馈给用户，比如输出到显示器、写入到文件等，同样能够调用和组织其他的应用程序，相当于一个领导者的身份，如下图：

 ![](https://static.vue-js.com/80db0ca0-0883-11ec-8e64-91fdec0f05a1.png)

那么\`shell\`脚本就是多个 \`Shell\` 命令的组合并通过 \`if\` 条件分支控制或循环来组合运算，实现一些复杂功能，文件后缀名为\`.sh\`

常用的 \`ls\` 命令，它本身也是一个 \`Shell\` 脚本，通过执行这个 \`Shell\` 脚本可以列举当前目录下的文件列表，如下创建一个\`hello.sh\`脚本

\`\`\`shell
#!/bin/bash

# 执行的命令主体
ls
echo "hello world"
\`\`\`

- #!/bin/bash ：指定脚本要使用的 Shell  类型为 Bash

- ls、echo： 脚本文件的内容，表明我们执行  hello.sh  脚本时会列举出当前目录的文件列表并且会向控制台打印 \`hello world

执行方式为\`.hello.zsh\`



## 二、种类

\`Linux\` 的 \`Shell\` 种类众多，只要能给用户提供命令行环境的程序，常见的有：

- Bourne Shell（sh），是目前所有 Shell 的祖先，被安装在几乎所有发源于 Unix 的操作系统上

- Bourne Again shell（bash） ，是 sh 的一个进阶版本，比 sh 更优秀， bash 是目前大多数 Linux 发行版以及 macOS 操作系统的默认 Shell

- C Shell（csh） ，它的语法类似 C 语言

- TENEX C Shell（tcsh） ，它是 csh 的优化版本

- Korn shell（ksh） ，一般在收费的 Unix 版本上比较多见

- Z Shell（zsh） ，它是一种比较新近的 Shell ，集 bash 、 ksh 和 tcsh 各家之大成

![](https://static.vue-js.com/8e739440-0883-11ec-a752-75723a64e8f5.png)

关于 \`Shell\` 的几个常见命令：

- ls：查看文件
- cd：切换工作目录
- pwd：显示用户当前目录
- mkdir：创建目录
- cp：拷贝
- rm：删除
- mv：移动
- du：显示目录所占用的磁盘空间

## 三、命令

\`Shell\` 并不是简单的堆砌命令，我们还可以在 \`Shell\` 中编程，这和使用 \`C++\`、\`C#\`、\`Java\`、\`Python\` 等常见的编程语言并没有什么两样。

Shell 虽然没有 C++、Java、Python 等强大，但也支持了基本的编程元素，例如：

- if...else 选择结构，case...in 开关语句，for、while、until 循环；
- 变量、数组、字符串、注释、加减乘除、逻辑运算等概念；
- 函数，包括用户自定义的函数和内置函数（例如 printf、export、eval 等）



下面以\`bash\`为例简单了解一下\`shell\`的基本使用

### 变量

\`Bash\` 没有数据类型的概念，所有的变量值都是字符串，可以保存一个数字、一个字符、一个字符串等等

同时无需提前声明变量，给变量赋值会直接创建变量

访问变量的语法形式为：\`\${var}\` 和 \`$var\` 。

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，所以推荐加花括号。

\`\`\`bash
word="hello"
echo \${word}
# Output: hello
\`\`\`



### 条件控制

跟其它程序设计语言一样，Bash 中的条件语句让我们可以决定一个操作是否被执行。结果取决于一个包在\`[[ ]]\`里的表达式

跟其他语言一样，使用\`if...else\`进行表达，如果中括号里的表达式为真，那么\`then\`和\`fi\`之间的代码会被执行，如果则\`else\`和\`fi\`之间的代码会被执行

\`\`\`shell
if [[ 2 -ne 1 ]]; then
  echo "true"
else
  echo "false"
fi
# Output: true
\`\`\`

\`fi\`标志着条件代码块的结束



### 函数

bash 函数定义语法如下：

\`\`\`bash
[ function ] funname [()] {
    action;
    [return int;]
}
\`\`\`

- 函数定义时，function 关键字可有可无
- 函数返回值 - return 返回函数返回值，返回值类型只能为整数（0-255）。如果不加 return 语句，shell 默认将以最后一条命令的运行结果，作为函数返回值
- 函数返回值在调用该函数后通过 $?  来获得
- 所有函数在使用前必须定义。这意味着必须将函数放在脚本开始部分，直至 shell 解释器首次发现它时，才可以使用。调用函数仅使用其函数名即可
      `
    },{
      title: "linux 系统下 文本编辑常用的命令有哪些？",
      desc: "面试官：说说 linux 系统下 文本编辑常用的命令有哪些？",
      content:`
      \`Vim\`是从 \`vi\` 发展出来的一个文本编辑器，代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

      简单的来说， \`vi\` 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方
      
      而\`vim \`可以说是程序开发者的一项很好用的工具
      
      ## 二、使用
      
      基本上 vi/vim 共分为三种模式，分别是：
      
      - 命令模式（Command mode）
      - 输入模式（Insert mode）
      - 底线命令模式（Last line mode）
      
       ![](https://static.vue-js.com/265a0080-03d6-11ec-a752-75723a64e8f5.png)
      
      
      
      ### 命令模式
      
      \`Vim\` 的默认模式，在这个模式下，你不能输入文本，但是可以让我们在文本间移动，删除一行文本，复制黏贴文本，跳转到指定行，撤销操作，等等
      
      
      
      #### 移动光标
      
      常用的命令如下：
      
      - h 向左移动一个字符
      - j 向下移动一个字符
      - k 向上移动一个字符
      - i 向右移动一个字符
      
      或者使用方向键进行控制
      
      如果想要向下移动\`n\`行，可通过使用 "nj" 或 "n↓" 的组合按键
      
      
      
      #### 搜索
      
      常见的命令如下：
      
      - /word：向光标之下寻找一个名称为 word 的字符
      
      - ?word：向光标之上寻找一个字符串名称为 word 的字符串
      - n：代表重复前一个搜寻的动作，即再次执行上一次的操作
      - N：反向进行前一个搜索动作
      
      
      
      
      
      #### 删除、复制、粘贴
      
      常用的命令如下：
      
      - x：向后删除一个字符
      - X：向前删除一个字符
      - nc：n 为数字，连续向后删除 n 个字符
      - dd：删除游标所在的那一整行
      - d0：删除游标所在处，到该行的最前面一个字符
      - d$删除游标所在处，到该行的最后一个字符
      - ndd：除光标所在的向下 n 行
      - yy：复制游标所在的那一行
      - y0：复制光标所在的那个字符到该行行首的所有数据
      - y$：复制光标所在的那个字符到该行行尾的所有数据
      - p：已复制的数据在光标下一行贴上
      - P：已复制的数据在光标上一行贴上
      - nc：重复删除n行数据
      
      
      
      ### 输入模式
      
      命令模式通过输入大小写\`i\`、\`a\`、\`o\`可以切换到输入模式，如下：
      
      - i：从目前光标所在处输入
      - I：在目前所在行的第一个非空格符处开始输入
      - a：从目前光标所在的下一个字符处开始输入
      - A：从光标所在行的最后一个字符处开始输入
      - o：在目前光标所在的下一行处输入新的一行
      - O：目前光标所在的上一行处输入新的一行
      
      输入模式我们熟悉的文本编辑器的模式，就是可以输入任何你想输入的内容
      
      如果想从插入模式回到命令模式，使用按下键盘左上角的\`ESC\`键
      
      
      
      
      
      ### 底线命令模式
      
      这个模式下可以运行一些命令例如“退出”，“保存”，等动作，为了进入底线命令模式，首先要进入命令模式，再按下冒号键：
      
      常见的命令如下：
      
      - w：将编辑的数据写入硬盘档案中
      - w!：若文件属性为『只读』时，强制写入该档案
      - q：未修改，直接退出
      - q!：修改过但不存储
      - wq：储存后离开
      `
    },
  ]
}

export default linux;