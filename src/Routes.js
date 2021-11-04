import { Route } from "react-router-dom";
import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Translation from "./containers/Translation";
import NoteFound from "./containers/Notefound";

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
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: "home",
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "login",
      },
      {
        path: "/translation",
        component: Translation,
        exact: true,
        key: "translation",
        loadData: Translation.loadData,
      },
      {
        component: NoteFound,
      },
    ],
  },
];
