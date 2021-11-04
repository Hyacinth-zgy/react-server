import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store";
import styles from "./index.css";
import WithStyle from "../../../WithStyle";
const Header = (props) => {
  // if (props.staticContext) {
  //   props.staticContext.css.push(styles._getCss());
  // }
  return (
    <div className={styles.blue}>
      <Link to="/">首页</Link>
      <br />
      {props.login ? (
        <Fragment>
          <Link to="/translation">翻译列表</Link>
          <span onClick={props.handleLoginOut}>退出</span>
        </Fragment>
      ) : (
        <div onClick={props.handleLogin}>登录</div>
      )}
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    handleLogin() {
      dispatch(actions.login());
    },
    handleLoginOut() {
      dispatch(actions.loginOut());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    login: state.header.login,
  };
};
export default connect(mapStateToProps, mapDispatch)(WithStyle(Header,styles));
