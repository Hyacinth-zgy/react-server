import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../containers/Home/store";
const reducer = combineReducers({
  home: homeReducer,
});
const getStore = function () {
  return createStore(reducer, applyMiddleware(thunk));
};
export default getStore;
