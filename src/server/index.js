import express from "express";
import React from "react";
import { matchRoutes } from "react-router-config";
import Routes from "../Routes";
import {getStore} from "../store/index";
// 这里引入react提供用于服务端渲染的方法renderToString，将react组件转换为字符串
import { render } from "./utill";
const app = express();
// 当请求的资源是是一个静态文件时，到public文件夹下面去寻找
app.use(express.static("public"));
// 监听 / 路由
app.get("/*", function (req, res) {
  // 如果在这里，我能够拿到异步数据，并填充到store之中
  // store里面到底填充什么，我们不知道，我们需要根据用户当前请求的地址，和路由，做判断
  // 如果用户访问 / 路径，我们就拿home组件之中的异步数据
  // 如果用户访问login，我们就拿login组件的异步数据

  // 路由匹配
  // matchPath只能
  // 这里使用更高级的实现方式来做,不用matchPath了，使用matchRoutes
  // 让matchRoutes里面匹配到的组件的loadData都执行一遍

  const store = getStore();
  const storePromise = [];
  const matchedRoutes = matchRoutes(Routes, req.path);
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      storePromise.push(item.route.loadData(store));
    }
  });
  Promise.all(storePromise).then(() => {
    res.send(render(req, store));
  });
});
const server = app.listen(3000);
