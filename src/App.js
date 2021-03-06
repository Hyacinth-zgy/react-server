import React from "react";
import Header from "./containers/component/Header/index";
import { renderRoutes } from "react-router-config";
import { actions } from "./containers/component/Header/store/index";

const App = (props) => {
  return (
    <div>
      <Header staticContext={props.staticContext}></Header>
      {renderRoutes(props.route.routes)}
    </div>
  );
};
App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
};
export default App;
