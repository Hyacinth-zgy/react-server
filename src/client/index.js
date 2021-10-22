// 同构代码 用来在客户端运行的代码
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};
// 同构的时候这里不要使用render方法，
ReactDOM.hydrate(<App />, document.getElementById("root"));
