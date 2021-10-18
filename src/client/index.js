console.log('我是用来同构的react代码')
import React from "react";
import ReactDOM from "react-dom";
import Home from "../containers/Home";
// 同构的时候这里不要使用render方法，
ReactDOM.hydrate(<Home />, document.getElementById("root"));
