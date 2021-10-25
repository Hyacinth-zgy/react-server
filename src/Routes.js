import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login"  exact component={Login}></Route>
//   </div>
// );


// 下面是解决服务端获取数据的改造
export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key:'home'
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    key:'login'
  },
];
