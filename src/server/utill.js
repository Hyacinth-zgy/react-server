import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store/index";
export const render = function (req, res) {
  // 在服务端使用redux
  // 传入react组件到renderToString
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
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
