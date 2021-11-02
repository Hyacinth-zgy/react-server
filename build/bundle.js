/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default (\n//   <div>\n//     <Route path=\"/\" exact component={Home}></Route>\n//     <Route path=\"/login\"  exact component={Login}></Route>\n//   </div>\n// );\n\n// 下面是解决服务端获取数据的改造\nexports[\"default\"] = [{\n  path: \"/\",\n  component: _Home2.default,\n  exact: true,\n  loadData: _Home2.default.loadData,\n  key: \"home\"\n}, {\n  path: \"/login\",\n  component: _Login2.default,\n  exact: true,\n  key: \"login\"\n}];\n\n//# sourceURL=webpack://react-server/./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: \"/\",\n  timeout: 5000\n});\nexports[\"default\"] = instance;\n\n//# sourceURL=webpack://react-server/./src/client/request.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../component/Header */ \"./src/containers/component/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../Home/store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction setList(data) {\n  return data.map(function (item) {\n    return _react2.default.createElement(\n      \"div\",\n      { key: item.id },\n      item.title\n    );\n  });\n}\nvar Home = function Home(props) {\n  (0, _react.useEffect)(function () {\n    if (!props.newsList.length) {\n      props.getHomeList();\n    }\n  }, []);\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      \"button\",\n      {\n        onClick: function onClick() {\n          alert(\"click1\");\n        }\n      },\n      \"\\u8FD9\\u91CC\\u662FHome\\u7EC4\\u4EF6,\\u5F00\\u53D1\\u8005\\u7684\\u540D\\u5B57\\u662F\",\n      props.name\n    ),\n    setList(props.newsList)\n  );\n};\n\nHome.loadData = function (store) {\n  // 在这里加载服务端的异步数据\n  return store.dispatch((0, _actions.getHomeList)());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    newsList: state.home.newsList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch(_actions.getHomeList);\n    }\n  };\n};\nexports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack://react-server/./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getHomeList = undefined;\nexports.setList = setList;\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.js\");\n\nfunction setList(list) {\n  return {\n    type: _contants.SET_HOME_LIST,\n    value: list\n  };\n}\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE\n  return function (dispatch, _getState, axiosIntance) {\n    // 浏览器运行\n    // /api/news.json = http://localhost:3000/api/news.json\n    // 服务端运行\n    // /api/news.json = 服务器根目录下/api/news.json\n    // 解析。客户端运行时，会发起网络请求，所以请求会被代理转发\n    // 服务端运行时，就不会发起网络请求，而是会在当前目录下去寻找api文件下的news.json\n    // 所以要区分出是客户端请求还是在服务端请求\n\n    // let request = clientRequest;\n    // if (server) {\n    //   request = serverRequest;\n    // }\n    return axiosIntance.get(\"/api/news.json?secret=PP87ANTIPIRATE\").then(function (res) {\n      var data = res.data.data;\n      dispatch(setList(data));\n    });\n  };\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/contants.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/contants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar SET_HOME_LIST = exports.SET_HOME_LIST = \"SET_HOME_LIST\";\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/contants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.js\");\n\nvar defaultState = {\n  name: \"ZGY\",\n  newsList: []\n};\n\n// redcer是个纯函数\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _contants.SET_HOME_LIST:\n      {\n        return _extends({}, state, {\n          newsList: action.value\n        });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-server/./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../component/Header */ \"./src/containers/component/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      \"div\",\n      null,\n      \"\\u8FD9\\u91CC\\u662F\\u767B\\u5F55\\u7EC4\\u4EF6\"\n    )\n  );\n};\nexports[\"default\"] = Login;\n\n//# sourceURL=webpack://react-server/./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/component/Header.js":
/*!********************************************!*\
  !*** ./src/containers/component/Header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/\" },\n      \"Home\"\n    ),\n    _react2.default.createElement(\"br\", null),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/login\" },\n      \"Login\"\n    )\n  );\n};\nexports[\"default\"] = Header;\n\n//# sourceURL=webpack://react-server/./src/containers/component/Header.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _index = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\nvar _utill = __webpack_require__(/*! ./utill */ \"./src/server/utill.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n// 当请求的资源是是一个静态文件时，到public文件夹下面去寻找\n\n// 这里引入react提供用于服务端渲染的方法renderToString，将react组件转换为字符串\napp.use(_express2.default.static(\"public\"));\n\n// 01请求转发\n// 请求不被代理的情况下:（使用了服务端绝对路径）\n// axios.get(\"http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE\"),直接请求服务器地址\n\n// 02请求被代理的情况之下:（使用了相对路径）\n// 请求就会到达node服务器,node服务器作为客户端和真实服务器之间的中间层传递数据\n// axios.get(\"/api/news.json?secret=PP87ANTIPIRATE\")\n// 被代理到真实的服务器\n// /api/news.json\n// req.url = news.json\n// proxyReqPathResolver: /ssr/api/news.json\n// http://47.95.113.63 + proxyReqPathResolver()\n// http://47.95.113.63/ssr/api/news.json\napp.use(\"/api\", (0, _expressHttpProxy2.default)(\"http://47.95.113.63\", {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/ssr/api\" + req.url;\n  }\n}));\n\n// 监听 / 路由\napp.get(\"/*\", function (req, res) {\n  // 如果在这里，我能够拿到异步数据，并填充到store之中\n  // store里面到底填充什么，我们不知道，我们需要根据用户当前请求的地址，和路由，做判断\n  // 如果用户访问 / 路径，我们就拿home组件之中的异步数据\n  // 如果用户访问login，我们就拿login组件的异步数据\n\n  // 路由匹配\n  // matchPath只能\n  // 这里使用更高级的实现方式来做,不用matchPath了，使用matchRoutes\n  // 让matchRoutes里面匹配到的组件的loadData都执行一遍\n\n  var store = (0, _index.getStore)();\n  var storePromise = [];\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      storePromise.push(item.route.loadData(store));\n    }\n  });\n  Promise.all(storePromise).then(function () {\n    res.send((0, _utill.render)(req, store));\n  });\n});\nvar server = app.listen(3000);\n\n//# sourceURL=webpack://react-server/./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: \"http://47.95.113.63/ssr\",\n  timeout: 5000\n});\nexports[\"default\"] = instance;\n\n//# sourceURL=webpack://react-server/./src/server/request.js?");

/***/ }),

/***/ "./src/server/utill.js":
/*!*****************************!*\
  !*** ./src/server/utill.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, store) {\n  // 在服务端使用redux\n  // 传入react组件到renderToString\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: {} },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        _Routes2.default.map(function (route) {\n          return _react2.default.createElement(_reactRouterDom.Route, route);\n        })\n      )\n    )\n  ));\n  return \"\\n  <html>\\n    <head>\\n      <title>ssr</title>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\" + content + \"</div>\\n      <script>\\n        window.context = {\\n          state: \" + JSON.stringify(store.getState()) + \"\\n        }\\n      </script>\\n      <script src='/index.js'></script>\\n    </body>\\n  </html>\\n\";\n};\n\n//# sourceURL=webpack://react-server/./src/server/utill.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer\n});\nvar getStore = exports.getStore = function getStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request4.default)));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack://react-server/./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

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
/******/ 			// no module.id needed
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