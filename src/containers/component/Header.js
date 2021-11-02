import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <br />
      <Link to="/login">登录</Link>
      <br/>
      <Link to="/login">翻译列表</Link>
      <Link to="/login">退出</Link>
    </div>
  );
};
export default Header;
