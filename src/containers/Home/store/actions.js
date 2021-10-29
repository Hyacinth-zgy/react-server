import { SET_HOME_LIST } from "./contants";
import axios from "axios";
export function setList(list) {
  return {
    type: SET_HOME_LIST,
    value: list,
  };
}
export const getHomeList = () => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRAT
  return (dispatch) => {
    return axios.get("/api/news.json?secret=PP87ANTIPIRATE").then((res) => {
      console.log(res);
      const data = res.data.data;
      dispatch(setList(data));
    });
  };
};
