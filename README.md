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

