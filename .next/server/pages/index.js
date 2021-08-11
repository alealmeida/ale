(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 193:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const Layout = props => props.children;

/* harmony default export */ __webpack_exports__["Z"] = (Layout);

/***/ }),

/***/ 589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/layout/layout.tsx
var layout = __webpack_require__(193);
;// CONCATENATED MODULE: ./pages/index.tsx






// const fetcher = (url) => fetch(url).then((res) => res.json())
const Home = ({
  props
}) => {
  //   const { data, error } = useSWR('/api/work', fetcher)
  console.log(props); // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Soon"
      })
    })]
  });
}; // const Home = ({jobs}) => (
//   <Layout>
//     <Head>
//       <title>Home</title>
//     </Head>
//     <div>
//       <Header jobs={jobs} />
//       <h2>Soon</h2>
//     </div>
//   </Layout>
// );


/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(589));
module.exports = __webpack_exports__;

})();