import React from "react";
import { getTranslationList } from "./store/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
const Translation = (props) => {
  useEffect(() => {
    if (props.translationList.length === 0) {
      props.getList();
    }
  }, []);
  return (
    <div>
      {props.login ? (
        props.translationList.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

// Translation.loadData = (store) => {
//   return store.dispatch(getTranslationList());
// };
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
    login: state.header.login,
  };
};

const exportTranslation = connect(
  mapStateToProps,
  mapActionsToProps
)(Translation);
exportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};
export default exportTranslation;
