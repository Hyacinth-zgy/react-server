import React, { useEffect } from "react";
import Header from "../component/Header";
import { connect } from "react-redux";
import { getHomeList } from "../Home/store/actions";
function setList(data) {
  return data.map((item) => {
    return <div key={item.id}>{item.title}</div>;
  });
}
const Home = (props) => {
  useEffect(() => {
    props.getHomeList();
  }, []);
  return (
    <div>
      <Header></Header>
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

const mapStateToProps = (state) => ({
  name: state.home.name,
  newsList: state.home.newsList,
});
const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
