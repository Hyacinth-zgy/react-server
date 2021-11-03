import React from "react";
import { getTranslationList } from "./store/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
const Translation = (props) => {
  useEffect(() => {
    console.log(1);
    if (props.translationList.length === 0) {
      props.getList();
    }
  }, []);
  return (
    <div>
      <div>
        {props.translationList.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};
const mapActionsToProps = (dispatch) => {
  return {
    getList() {
      dispatch(getTranslationList());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    translationList: state.translation.translationList,
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Translation);
