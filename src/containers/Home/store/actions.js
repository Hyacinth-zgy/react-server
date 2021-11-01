import { SET_HOME_LIST } from "./contants";
import axios from "axios";
export function setList(list) {
  return {
    type: SET_HOME_LIST,
    value: list,
  };
}
export const getHomeList = (server = false) => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  return (dispatch) => {
    // 浏览器运行
    // /api/news.json = http://localhost:3000/api/news.json
    // 服务端运行
    // /api/news.json = 服务器根目录下/api/news.json
    // 解析。客户端运行时，会发起网络请求，所以请求会被代理转发
    // 服务端运行时，就不会发起网络请求，而是会在当前目录下去寻找api文件下的news.json
    // 所以要区分出是客户端请求还是在服务端请求

    let url = "";
    if (server) {
      url = "http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE";
    } else {
      url = "/api/news.json?secret=PP87ANTIPIRATE";
    }
    return axios.get("/api/news.json?secret=PP87ANTIPIRATE").then((res) => {
      console.log(res);
      const data = res.data.data;
      dispatch(setList(data));
    });
  };
};
