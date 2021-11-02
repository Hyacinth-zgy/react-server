// 同构代码 用来在客户端运行的代码
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";
const store = getClientStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* {Routes.map((route) => {
            return <Route {...route}></Route>;
          })} */}
          {renderRoutes(Routes)}
        </div>
      </BrowserRouter>
    </Provider>
  );
};
// 同构的时候这里不要使用render方法，
ReactDOM.hydrate(<App />, document.getElementById("root"));
