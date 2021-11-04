import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
// 这里用来渲染多级路由
import { renderRoutes } from "react-router-config";
export const render = function (req, store) {
  // 在服务端使用redux
  // 传入react组件到renderToString
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{ name: "zgy" }}>
        <div>
          {/* {Routes.map((route) => {
            return <Route {...route}></Route>;
          })} */}
          {/* 使用renderRoutes可以将配置中的子组件传递给一级组件的属性，这里就传递给了一级App组件 */}
          {renderRoutes(Routes)}
        </div>
      </StaticRouter>
    </Provider>
  );
  return `
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src='/index.js'></script>
    </body>
  </html>
`;
};
