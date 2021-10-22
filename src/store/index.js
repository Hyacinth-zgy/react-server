import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const reducer = (state = { name: "zgy" }, action) => {
  return state;
};
const getStore = function () {
  return createStore(reducer, applyMiddleware(thunk));
};
export default getStore;
