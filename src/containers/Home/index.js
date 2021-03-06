import React, { useEffect } from "react";
import Header from "../component/Header";
import { connect } from "react-redux";
import { getHomeList } from "../Home/store/actions";
import styles from "./index.css";
function setList(data) {
  return data.map((item) => {
    return (
      <div className={styles.red} key={item.id}>
        {item.title}
      </div>
    );
  });
}
const Home = (props) => {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }
  useEffect(() => {
    if (!props.newsList.length) {
      props.getHomeList();
    }
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        这里是Home组件,开发者的名字是{props.name}
      </button>
      {setList(props.newsList)}
    </div>
  );
};

// Home.loadData = function (store) {
//   // 在这里加载服务端的异步数据
//   return store.dispatch(getHomeList());
// };

const mapStateToProps = (state) => ({
  name: state.home.name,
  newsList: state.home.newsList,
});
const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList);
  },
});
const exportHome = connect(mapStateToProps, mapDispatchToProps)(Home);
exportHome.loadData = function (store) {
  // 在这里加载服务端的异步数据
  return store.dispatch(getHomeList());
};
export default exportHome;
