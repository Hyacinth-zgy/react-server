const defaultState = {
  name: "ZGY",
  newsList: [],
};

// redcer是个纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
