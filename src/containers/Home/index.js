import React from "react";
import Header from "../component/Header";
export default () => {
  return (
    <div>
      <Header></Header>
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        这里是Home组件
      </button>
    </div>
  );
};
