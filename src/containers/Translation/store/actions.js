import { SET_TRANSITIONlIST } from "./contants";
const setTranslationsList = (value) => {
  return {
    type: SET_TRANSITIONlIST,
    value,
  };
};
export const getTranslationList = () => {
  return (dispatch, _getState, axiosIntance) => {
    return axiosIntance
      .get("/api/translations.json")
      .then((res) => {
        if (res.data.success) {
          dispatch(setTranslationsList(res.data.data));
        }
      });
  };
};
