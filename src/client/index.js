console.log("我是被请求的静态文件");
import React from "react";
import ReactDOM from "react-dom";
import Home from "../containers/Home";
// 同构的时候这里不要使用render方法，
ReactDOM.hydrate(<Home />, document.getElementById("root"));
