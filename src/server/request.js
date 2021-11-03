import axios from "axios";

const createInstance = (req) => {
  const instance = axios.create({
    baseURL: "http://47.95.113.63/ssr",
    timeout: 5000,
    // 携带客户端的带过来的cookie
    headers: {
      cookie: req.get("cookie") || "",
    },
  });
  return instance;
};

export default createInstance;
