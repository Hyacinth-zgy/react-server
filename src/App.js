import React from "react";
import Header from "./containers/component/Header/index";
import { renderRoutes } from "react-router-config";

const App = (props) => {
  return (
    <div>
      <Header></Header>
      {renderRoutes(props.route.routes)}
    </div>
  );
};
export default App;
