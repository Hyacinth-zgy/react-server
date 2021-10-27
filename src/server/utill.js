import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store/index";
export const render = function (req, res) {
  // 如果在这里，我能够拿到异步数据，并填充到store之中
  // store里面到底填充什么，我们不知到，我们需要根据用户当前请求的地址，和路由，做判断
  // 如果用户访问 / 路径，我们就拿home组件之中的异步数据
  // 如果用户访问login，我们就拿login组件的异步数据
  const store = getStore();
  const matchRoutes = [];
  Routes.some((route) => {
    // matchPath 只会匹配一层路由
    const match = matchPath(req.path, route);
    if (match) {
      matchRoutes.push(route);
    }
  });
  console.log(matchRoutes)
  // 让matchRoutes里面匹配到的组件的loadData都执行一遍

  // 在服务端使用redux
  // 传入react组件到renderToString
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {Routes.map((route) => {
            return <Route {...route}></Route>;
          })}
        </div>
      </StaticRouter>
    </Provider>
  );
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
};
