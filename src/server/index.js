import express from "express";
import React from "react";
import Home from "../containers/Home";
// 这里引入react提供用于服务端渲染的方法renderToString，将react组件转换为字符串
import { renderToString } from "react-dom/server";
const app = express();
// 传入react组件
const content = renderToString(<Home />);

// 当请求的资源是是一个静态文件时，到public文件夹下面去寻找
app.use(express.static("public"));

// 监听 / 路由
app.get("/", function (req, res) {
  res.send(`
      <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <div id='root'>${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>`);
});

const server = app.listen(3000);
