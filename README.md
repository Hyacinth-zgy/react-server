# react-server
学习服务端渲染

# 首先配置webpack相关，用来打包服务端代码
# 在服务端代码中引入react，撰写react代码
# 利用express端的代码来请求的代码，这样就可以了 

# react服务端渲染实际上是建立在虚拟DOM上的服务端渲染
# 虚拟dom：真实DOM的一个javascript对象的映射
# 在客户端渲染的时候，利用ReactDom.render()等等方法将虚拟DOM转换为一个真实DOM方法页面上
# 在服务端渲染的时候，利用renderToString()等方法将虚拟dom转换为一个字符串，返回给浏览器，虚拟dom是的React在做服务端渲染的时候变得非常简单

# React做服务端渲染带来的好处：
1.页面首屏的速度得到了加快
2.SEO效果也会变得更2

# 使用服务端渲染的弊端
React代码在服务器上执行，消耗的是服务端的性能

# 客户端渲染
React代码在客户端上执行，消耗的是客户端的性能

# 搜索错误 
stackoverflow.com

# webpack自动打包
配置上--watch就可以自动打包，被依赖的文件

# 打包后的文件自动被nodemon启动
"start:nodemon": "nodemon --watch build --exec node \"./build/bundle.js\"",
watch build 文件 ，改变后执行（exec）  node \"./build/bundle.js\"

# npm run npmrunall
执行下面的指令 代表并行的(--parallel) 执行 以 build:** 开头的指令
"npmrunall": "npm-run-all --parallel dev:**"


# 服务端渲染特点&问题
React做服务器端渲染的时候，服务端只会将基础代码渲染出来，如在按钮上绑定事件，在服务端渲染时，是不会进行事件绑定的，这时候在页面上发生点击事件是不会有效果的
# 解决方法：同构
一套React代码在服务端执行一次，然后在客户端也执行一次

# 使用 webpack-merge 来合并webpakpack配置

# 配置 服务端渲染路由和客户端渲染路由
服务端渲染路由要使用 StaticRouter ，并且需要传入loacation 和 context属性
    location是未来让服务端感知到前端请求的路由
    context是为了组件之间传值通信
浏览器端渲染路由要使用 BrowserRouter 


# 配置 服务器端渲染只会发生在页面第一次哦请求的时候，会使用到服务器端渲染
# 当页面加载完成后就使用的是客户端渲染，即react同构代码


# 中间层：

# 在同步项目中使用redux