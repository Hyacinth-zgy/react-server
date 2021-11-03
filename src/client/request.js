import axios from "axios";
const instance = axios.create({
  baseURL: "/",
  timeout: 5000,
  params: {
    secret: "PP87ANTIPIRATE",
  },
});
export default instance;
