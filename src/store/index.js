import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
import { reducer as headReducer } from "../containers/component/Header/store/index";
import clientRequest from "../client/request";
import serverRequest from "../server/request";
const reducer = combineReducers({
  home: homeReducer,
  header: headReducer,
});
export const getStore = function (req) {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverRequest(req)))
  );
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientRequest))
  );
};
