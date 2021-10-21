import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
export const render = function (req, res) {
  // 在服务端使用redux
  const reducer = (state = { name: "dell" }, action) => {
    return state;
  };
  const store = createStore(reducer);
  // 传入react组件到renderToString
  const content = renderToString(
    <Provider store={store}>
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
