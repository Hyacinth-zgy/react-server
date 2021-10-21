import express from "express";
import React from "react";
// 这里引入react提供用于服务端渲染的方法renderToString，将react组件转换为字符串
import { render } from "./utill";
const app = express();
// 当请求的资源是是一个静态文件时，到public文件夹下面去寻找
app.use(express.static("public"));
// 监听 / 路由
app.get("/*", function (req, res) {
  render(req, res);
});
const server = app.listen(3000);
