// 同构代码 用来在客户端运行的代码
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// 创建redux仓库
const reducer = (state = { name: "dell" }, action) => {
  return state;
};
// 使用中间件
const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};
// 同构的时候这里不要使用render方法，
ReactDOM.hydrate(<App />, document.getElementById("root"));
