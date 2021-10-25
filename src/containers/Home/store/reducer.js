import { SET_HOME_LIST } from "./contants";
const defaultState = {
  name: "ZGY",
  newsList: [],
};

// redcer是个纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOME_LIST: {
      return {
        ...state,
        newsList: action.value,
      };
    }
    default:
      return state;
  }
};
