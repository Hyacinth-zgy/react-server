import axios from "axios";
const instance = axios.create({
  baseURL: "http://47.95.113.63/ssr",
  timeout: 5000,
});
export default instance;
