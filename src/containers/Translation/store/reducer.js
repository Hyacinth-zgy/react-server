import { SET_TRANSITIONlIST } from "./contants";
const defaultState = {
  translationList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRANSITIONlIST:
      const newState = JSON.parse(JSON.stringify(state));
      newState.translationList = action.value;
      return newState;
    default:
      return state;
  }
};
