import React from "react";
import Header from "../component/Header";
import { connect } from "react-redux";
const Home = (props) => {
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.home.name,
});

export default connect(mapStateToProps, null)(Home);
