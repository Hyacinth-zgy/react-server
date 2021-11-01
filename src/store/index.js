import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
import clientRequest from "../client/request";
import serverRequest from "../server/request";
const reducer = combineReducers({
  home: homeReducer,
});
export const getStore = function () {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverRequest))
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
