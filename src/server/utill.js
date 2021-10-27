import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
export const render = function (req, store) {
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

  return `<html><head><title>hello</title></head><body><div id='root'>${content}</div><script src="/index.js"></script></body></html>`;
};
