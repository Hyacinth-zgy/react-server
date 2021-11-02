// 使用redux-thunk的时候，返回一个函数的话可以接受dispatch作为参数
import { CHANGE_LOGIN } from "./contants";
const changeLogin = (value) => {
  return {
    type: CHANGE_LOGIN,
    value,
  };
};

export const getHeaderInfo = () => {
  return (dispatch, _getState, axiosIntance) => {
    return axiosIntance
      .get("/api/isLogin.json?secret=PP87ANTIPIRATE")
      .then((res) => {
        dispatch(changeLogin(res.data.data.login));
      });
  };
};
