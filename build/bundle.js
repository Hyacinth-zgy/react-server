/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ./containers/component/Header/index */ \"./src/containers/component/Header/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _index3 = __webpack_require__(/*! ./containers/component/Header/store/index */ \"./src/containers/component/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_index2.default, { staticContext: props.staticContext }),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\nApp.loadData = function (store) {\n  return store.dispatch(_index3.actions.getHeaderInfo());\n};\nexports[\"default\"] = App;\n\n//# sourceURL=webpack://react-server/./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Translation = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _Notefound = __webpack_require__(/*! ./containers/Notefound */ \"./src/containers/Notefound/index.js\");\n\nvar _Notefound2 = _interopRequireDefault(_Notefound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default (\n//   <div>\n//     <Route path=\"/\" exact component={Home}></Route>\n//     <Route path=\"/login\"  exact component={Login}></Route>\n//   </div>\n// );\n\n// ?????????????????????????????????????????????\nexports[\"default\"] = [{\n  path: \"/\",\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: \"/\",\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: \"home\"\n  }, {\n    path: \"/login\",\n    component: _Login2.default,\n    exact: true,\n    key: \"login\"\n  }, {\n    path: \"/translation\",\n    component: _Translation2.default,\n    exact: true,\n    key: \"translation\",\n    loadData: _Translation2.default.loadData\n  }, {\n    component: _Notefound2.default\n  }]\n}];\n\n//# sourceURL=webpack://react-server/./src/Routes.js?");

/***/ }),

/***/ "./src/WithStyle.js":
/*!**************************!*\
  !*** ./src/WithStyle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports[\"default\"] = function (DecorateComponent, styles) {\n  return function (_Component) {\n    _inherits(NewComponent, _Component);\n\n    function NewComponent() {\n      _classCallCheck(this, NewComponent);\n\n      return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n    }\n\n    _createClass(NewComponent, [{\n      key: \"componentDidMount\",\n      value: function componentDidMount() {\n        if (this.props.staticContext) {\n          this.props.staticContext.css.push(styles._getCss());\n        }\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        return _react2.default.createElement(DecorateComponent, null);\n      }\n    }]);\n\n    return NewComponent;\n  }(_react.Component);\n};\n\n//# sourceURL=webpack://react-server/./src/WithStyle.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: \"/\",\n  timeout: 5000,\n  params: {\n    secret: \"PP87ANTIPIRATE\"\n  }\n});\nexports[\"default\"] = instance;\n\n//# sourceURL=webpack://react-server/./src/client/request.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../component/Header */ \"./src/containers/component/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../Home/store/actions */ \"./src/containers/Home/store/actions.js\");\n\nvar _index = __webpack_require__(/*! ./index.css */ \"./src/containers/Home/index.css\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction setList(data) {\n  return data.map(function (item) {\n    return _react2.default.createElement(\n      \"div\",\n      { className: _index2.default.red, key: item.id },\n      item.title\n    );\n  });\n}\nvar Home = function Home(props) {\n  if (props.staticContext) {\n    props.staticContext.css.push(_index2.default._getCss());\n  }\n  (0, _react.useEffect)(function () {\n    if (!props.newsList.length) {\n      props.getHomeList();\n    }\n  }, []);\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"button\",\n      {\n        onClick: function onClick() {\n          alert(\"click1\");\n        }\n      },\n      \"\\u8FD9\\u91CC\\u662FHome\\u7EC4\\u4EF6,\\u5F00\\u53D1\\u8005\\u7684\\u540D\\u5B57\\u662F\",\n      props.name\n    ),\n    setList(props.newsList)\n  );\n};\n\n// Home.loadData = function (store) {\n//   // ???????????????????????????????????????\n//   return store.dispatch(getHomeList());\n// };\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    newsList: state.home.newsList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch(_actions.getHomeList);\n    }\n  };\n};\nvar exportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\nexportHome.loadData = function (store) {\n  // ???????????????????????????????????????\n  return store.dispatch((0, _actions.getHomeList)());\n};\nexports[\"default\"] = exportHome;\n\n//# sourceURL=webpack://react-server/./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getHomeList = undefined;\nexports.setList = setList;\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.js\");\n\nfunction setList(list) {\n  return {\n    type: _contants.SET_HOME_LIST,\n    value: list\n  };\n}\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE\n  return function (dispatch, _getState, axiosIntance) {\n    // ???????????????\n    // /api/news.json = http://localhost:3000/api/news.json\n    // ???????????????\n    // /api/news.json = ?????????????????????/api/news.json\n    // ????????????????????????????????????????????????????????????????????????????????????\n    // ???????????????????????????????????????????????????????????????????????????????????????api????????????news.json\n    // ????????????????????????????????????????????????????????????\n\n    // let request = clientRequest;\n    // if (server) {\n    //   request = serverRequest;\n    // }\n    return axiosIntance.get(\"/api/news.json\").then(function (res) {\n      var data = res.data.data;\n      dispatch(setList(data));\n    });\n  };\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/contants.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/contants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar SET_HOME_LIST = exports.SET_HOME_LIST = \"SET_HOME_LIST\";\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/contants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.js\");\n\nvar defaultState = {\n  name: \"ZGY\",\n  newsList: []\n};\n\n// redcer???????????????\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _contants.SET_HOME_LIST:\n      {\n        return _extends({}, state, {\n          newsList: action.value\n        });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"div\",\n      null,\n      \"\\u8FD9\\u91CC\\u662F\\u767B\\u5F55\\u7EC4\\u4EF6\"\n    )\n  );\n};\nexports[\"default\"] = Login;\n\n//# sourceURL=webpack://react-server/./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/Notefound/index.js":
/*!*******************************************!*\
  !*** ./src/containers/Notefound/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NoteFound = function (_Component) {\n  _inherits(NoteFound, _Component);\n\n  function NoteFound() {\n    _classCallCheck(this, NoteFound);\n\n    return _possibleConstructorReturn(this, (NoteFound.__proto__ || Object.getPrototypeOf(NoteFound)).call(this));\n  }\n\n  _createClass(NoteFound, [{\n    key: \"render\",\n    value: function render() {\n      if (this.props.staticContext) {\n        this.props.staticContext.NoteFound = true;\n      }\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          null,\n          \"\\u8FD9\\u91CC\\u662F404\\u9875\\u9762\"\n        )\n      );\n    }\n  }]);\n\n  return NoteFound;\n}(_react.Component);\n\nexports[\"default\"] = NoteFound;\n\n//# sourceURL=webpack://react-server/./src/containers/Notefound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Translation = function Translation(props) {\n  (0, _react.useEffect)(function () {\n    if (props.translationList.length === 0) {\n      props.getList();\n    }\n  }, []);\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    props.login ? props.translationList.map(function (item) {\n      return _react2.default.createElement(\n        \"div\",\n        { key: item.id },\n        item.title\n      );\n    }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/\" })\n  );\n};\n\n// Translation.loadData = (store) => {\n//   return store.dispatch(getTranslationList());\n// };\nvar mapActionsToProps = function mapActionsToProps(dispatch) {\n  return {\n    getList: function getList() {\n      dispatch((0, _actions.getTranslationList)());\n    }\n  };\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translationList: state.translation.translationList,\n    login: state.header.login\n  };\n};\n\nvar exportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapActionsToProps)(Translation);\nexportTranslation.loadData = function (store) {\n  return store.dispatch((0, _actions.getTranslationList)());\n};\nexports[\"default\"] = exportTranslation;\n\n//# sourceURL=webpack://react-server/./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getTranslationList = undefined;\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Translation/store/contants.js\");\n\nvar setTranslationsList = function setTranslationsList(value) {\n  return {\n    type: _contants.SET_TRANSITIONlIST,\n    value: value\n  };\n};\nvar getTranslationList = exports.getTranslationList = function getTranslationList() {\n  return function (dispatch, _getState, axiosIntance) {\n    return axiosIntance.get(\"/api/translations.json\").then(function (res) {\n      if (res.data.success) {\n        dispatch(setTranslationsList(res.data.data));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/contants.js":
/*!******************************************************!*\
  !*** ./src/containers/Translation/store/contants.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar SET_TRANSITIONlIST = exports.SET_TRANSITIONlIST = \"SET_TRANSITIONlIST\";\n\n//# sourceURL=webpack://react-server/./src/containers/Translation/store/contants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Translation/store/contants.js\");\n\nvar actions = _interopRequireWildcard(_contants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack://react-server/./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Translation/store/contants.js\");\n\nvar defaultState = {\n  translationList: []\n};\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _contants.SET_TRANSITIONlIST:\n      var newState = JSON.parse(JSON.stringify(state));\n      newState.translationList = action.value;\n      return newState;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/containers/component/Header.js":
/*!********************************************!*\
  !*** ./src/containers/component/Header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/\" },\n      \"\\u9996\\u9875\"\n    ),\n    _react2.default.createElement(\"br\", null),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/login\" },\n      \"\\u767B\\u5F55\"\n    ),\n    _react2.default.createElement(\"br\", null),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/login\" },\n      \"\\u7FFB\\u8BD1\\u5217\\u8868\"\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/login\" },\n      \"\\u9000\\u51FA\"\n    )\n  );\n};\nexports[\"default\"] = Header;\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header.js?");

/***/ }),

/***/ "./src/containers/component/Header/index.js":
/*!**************************************************!*\
  !*** ./src/containers/component/Header/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ./store */ \"./src/containers/component/Header/store/index.js\");\n\nvar _index = __webpack_require__(/*! ./index.css */ \"./src/containers/component/Header/index.css\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _WithStyle = __webpack_require__(/*! ../../../WithStyle */ \"./src/WithStyle.js\");\n\nvar _WithStyle2 = _interopRequireDefault(_WithStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n  // if (props.staticContext) {\n  //   props.staticContext.css.push(styles._getCss());\n  // }\n  return _react2.default.createElement(\n    \"div\",\n    { className: _index2.default.blue },\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/\" },\n      \"\\u9996\\u9875\"\n    ),\n    _react2.default.createElement(\"br\", null),\n    props.login ? _react2.default.createElement(\n      _react.Fragment,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: \"/translation\" },\n        \"\\u7FFB\\u8BD1\\u5217\\u8868\"\n      ),\n      _react2.default.createElement(\n        \"span\",\n        { onClick: props.handleLoginOut },\n        \"\\u9000\\u51FA\"\n      )\n    ) : _react2.default.createElement(\n      \"div\",\n      { onClick: props.handleLogin },\n      \"\\u767B\\u5F55\"\n    )\n  );\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_store.actions.login());\n    },\n    handleLoginOut: function handleLoginOut() {\n      dispatch(_store.actions.loginOut());\n    }\n  };\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login\n  };\n};\nexports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatch)((0, _WithStyle2.default)(Header, _index2.default));\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/index.js?");

/***/ }),

/***/ "./src/containers/component/Header/store/action.js":
/*!*********************************************************!*\
  !*** ./src/containers/component/Header/store/action.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.loginOut = exports.login = exports.getHeaderInfo = undefined;\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/component/Header/store/contants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _contants.CHANGE_LOGIN,\n    value: value\n  };\n}; // ??????redux-thunk????????????????????????????????????????????????dispatch????????????\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, _getState, axiosIntance) {\n    return axiosIntance.get(\"/api/isLogin.json\").then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, _getState, axiosIntance) {\n    return axiosIntance.get(\"/api/login.json\").then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\nvar loginOut = exports.loginOut = function loginOut() {\n  return function (dispatch, _getState, axiosIntance) {\n    return axiosIntance.get(\"/api/logout.json\").then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/store/action.js?");

/***/ }),

/***/ "./src/containers/component/Header/store/contants.js":
/*!***********************************************************!*\
  !*** ./src/containers/component/Header/store/contants.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = \"CHANGE_LOGIN\";\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/store/contants.js?");

/***/ }),

/***/ "./src/containers/component/Header/store/index.js":
/*!********************************************************!*\
  !*** ./src/containers/component/Header/store/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/component/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _action = __webpack_require__(/*! ./action */ \"./src/containers/component/Header/store/action.js\");\n\nvar actions = _interopRequireWildcard(_action);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/store/index.js?");

/***/ }),

/***/ "./src/containers/component/Header/store/reducer.js":
/*!**********************************************************!*\
  !*** ./src/containers/component/Header/store/reducer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/component/Header/store/contants.js\");\n\nvar defaultState = {\n  login: true\n};\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _contants.CHANGE_LOGIN:\n      return _extends({}, state, {\n        login: action.value\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _index = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\nvar _utill = __webpack_require__(/*! ./utill */ \"./src/server/utill.js\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ????????????react????????????????????????????????????renderToString??????react????????????????????????\nvar app = (0, _express2.default)();\n// ???????????????????????????????????????????????????public????????????????????????\napp.use(_express2.default.static(\"public\"));\n\n// 01????????????\n// ??????????????????????????????:????????????????????????????????????\n// axios.get(\"http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE\"),???????????????????????????\n\n// 02??????????????????????????????:???????????????????????????\n// ??????????????????node?????????,node????????????????????????????????????????????????????????????????????????\n// axios.get(\"/api/news.json?secret=PP87ANTIPIRATE\")\n// ??????????????????????????????\n// /api/news.json\n// req.url = news.json\n// proxyReqPathResolver: /ssr/api/news.json\n// http://47.95.113.63 + proxyReqPathResolver()\n// http://47.95.113.63/ssr/api/news.json\napp.use(\"/api\", (0, _expressHttpProxy2.default)(\"http://47.95.113.63\", {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/ssr/api\" + req.url;\n  }\n}));\n\n// ?????? / ??????\napp.get(\"/*\", function (req, res) {\n  // ????????????????????????????????????????????????????????????store??????\n  // store??????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n  // ?????????????????? / ?????????????????????home???????????????????????????\n  // ??????????????????login???????????????login?????????????????????\n\n  // ????????????\n  // matchPath??????\n  // ??????????????????????????????????????????,??????matchPath????????????matchRoutes\n  // ???matchRoutes???????????????????????????loadData???????????????\n\n  var store = (0, _index.getStore)(req);\n  var storePromise = [];\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      storePromise.push(promise);\n    }\n  });\n  Promise.all(storePromise).then(function () {\n    var context = {};\n    context.css = [];\n    var html = (0, _utill.render)(req, store, context);\n    console.log(context);\n    if (context.action === \"REPLACE\") {\n      // </Redirect> ???????????????????????????\n      // ?????????????????????????????????????????????<Redirect></Redirect>??????????????????react-router??????context?????????action?????????\"REPLACE\"?????????????????????????????????\n\n      res.redirect(301, context.url);\n    } else if (context.NoteFound) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\nvar server = app.listen(3000);\n\n//# sourceURL=webpack://react-server/./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n  var instance = _axios2.default.create({\n    baseURL: \"http://47.95.113.63/ssr\",\n    timeout: 5000,\n    // ??????????????????????????????cookie\n    headers: {\n      cookie: req.get(\"cookie\") || \"\"\n    },\n    params: {\n      secret: \"PP87ANTIPIRATE\"\n    }\n  });\n  return instance;\n};\n\nexports[\"default\"] = createInstance;\n\n//# sourceURL=webpack://react-server/./src/server/request.js?");

/***/ }),

/***/ "./src/server/utill.js":
/*!*****************************!*\
  !*** ./src/server/utill.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, store, context) {\n  // ??????????????????redux\n  // ??????react?????????renderToString\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n  var css = context.css.join(\"\\n\");\n  return \"\\n  <html>\\n    <head>\\n      <title>ssr</title>\\n      <style>\\n      \" + css + \"\\n      </style>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\" + content + \"</div>\\n      <script>\\n        window.context = {\\n          state: \" + JSON.stringify(store.getState()) + \"\\n        }\\n      </script>\\n      <script src='/index.js'></script>\\n    </body>\\n  </html>\\n\";\n};\n// ??????????????????????????????\n\n//# sourceURL=webpack://react-server/./src/server/utill.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _index = __webpack_require__(/*! ../containers/component/Header/store/index */ \"./src/containers/component/Header/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer,\n  header: _index.reducer,\n  translation: _store2.reducer\n});\nvar getStore = exports.getStore = function getStore(req) {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack://react-server/./src/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/Home/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/Home/index.css ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background: red;\\r\\n}\\r\\n.src-containers-Home- {\\r\\n    color: aqua;\\r\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"red\": \"src-containers-Home-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-server/./src/containers/Home/index.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/component/Header/index.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/component/Header/index.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".src-containers-component-Header- {\\r\\n    background: blue;\\r\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"blue\": \"src-containers-component-Header-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/index.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://react-server/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://react-server/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/containers/Home/index.css":
/*!***************************************!*\
  !*** ./src/containers/Home/index.css ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./index.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/Home/index.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-server/./src/containers/Home/index.css?");

/***/ }),

/***/ "./src/containers/component/Header/index.css":
/*!***************************************************!*\
  !*** ./src/containers/component/Header/index.css ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./index.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/containers/component/Header/index.css\");\n    var insertCss = __webpack_require__(/*! !../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-server/./src/containers/component/Header/index.css?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://react-server/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;