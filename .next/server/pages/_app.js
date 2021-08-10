/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// ./apollo-client.js\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: `${process.env.PUBLIC_URL || \"http://localhost:3000\"}`,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGUvLi9saWIvYXBvbGxvLmpzPzA3ZmQiXSwibmFtZXMiOlsiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUE7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDNUJDLEtBQUcsRUFBRyxHQUNGQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWixJQUEwQix1QkFDM0IsRUFIeUI7QUFJNUJDLE9BQUssRUFBRSxJQUFJQyx5REFBSjtBQUpxQixDQUFqQixDQUFmO0FBT0EsK0RBQWVQLE1BQWYiLCJmaWxlIjoiLi9saWIvYXBvbGxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9hcG9sbG8tY2xpZW50LmpzXG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IGAke1xuICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICAgIH1gLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apollo.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo.js\");\n/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.sass */ \"./styles/global.sass\");\n/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_sass__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/ubuntu/ale/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n // const MyApp = ({ Component, pageProps }) => {\n//   const { global } = pageProps;\n//   return (\n//     <>\n//       <Head>\n//         {/* <link rel=\"shortcut icon\" href={getMedia(global.favicon)} /> */}\n//         <link\n//           rel=\"stylesheet\"\n//           href=\"https://fonts.googleapis.com/css?family=Staatliches\"\n//         />\n//         <link\n//           rel=\"stylesheet\"\n//           href=\"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css\"\n//         />\n//         <script src=\"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js\" />\n//         <script src=\"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js\" />\n//         <script src=\"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js\" />\n//       </Head>\n//       <GlobalContext.Provider value={global}>\n//         <Component {...pageProps} />\n//       </GlobalContext.Provider>\n//     </>\n//   )\n// }\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n    client: _lib_apollo__WEBPACK_IMPORTED_MODULE_3__.default,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n} // MyApp.getInitialProps = async (ctx) => {\n//   // Calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(ctx);\n//   // Fetch global site settings from Strapi\n//   const global = await fetchAPI('/api/work');\n//   // Pass the data to our page via props\n//   return { ...appProps, pageProps: { global } };\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGUvLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFDTyxNQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7Q0FJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRUMsZ0RBQXhCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCI7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zYXNzJ1xuXG5cbi8vIGNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuLy8gICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8SGVhZD5cbi8vICAgICAgICAgey8qIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtnZXRNZWRpYShnbG9iYWwuZmF2aWNvbil9IC8+ICovfVxuLy8gICAgICAgICA8bGlua1xuLy8gICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuLy8gICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3RhYXRsaWNoZXNcIlxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8bGlua1xuLy8gICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuLy8gICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3Vpa2l0QDMuMi4zL2Rpc3QvY3NzL3Vpa2l0Lm1pbi5jc3NcIlxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Vpa2l0LzMuMi4wL2pzL3Vpa2l0Lm1pbi5qc1wiIC8+XG4vLyAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS91aWtpdEAzLjIuMy9kaXN0L2pzL3Vpa2l0LWljb25zLm1pbi5qc1wiIC8+XG4vLyAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdWlraXQvMy4yLjAvanMvdWlraXQuanNcIiAvPlxuLy8gICAgICAgPC9IZWFkPlxuLy8gICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbH0+XG4vLyAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbi8vICAgLy8gQ2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuLy8gICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbi8vICAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbi8vICAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZmV0Y2hBUEkoJy9hcGkvd29yaycpO1xuLy8gICAvLyBQYXNzIHRoZSBkYXRhIHRvIG91ciBwYWdlIHZpYSBwcm9wc1xuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbCB9IH07XG4vLyB9O1xuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.sass":
/*!****************************!*\
  !*** ./styles/global.sass ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();