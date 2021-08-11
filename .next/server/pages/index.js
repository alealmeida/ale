(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./components/layout/layout.tsx
var layout = __webpack_require__(5193);
// EXTERNAL MODULE: ./components/header/header.tsx
var header = __webpack_require__(1040);
;// CONCATENATED MODULE: ./pages/index.tsx








const fetcher = url => fetch(url).then(res => res.json());

const Home = () => {
  const {
    data,
    error
  } = external_swr_default()('/api/work', fetcher);
  if (error) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Failed to load"
  });
  if (!data) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Home"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
        jobs: {
          data
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Soon"
      })]
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
// export async function getStaticProps() {
//   const dev = process.env.NODE_ENV !== "production";
//   const server = dev ? "http://localhost:3000" : "https://alealmeida.co/";
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${server}/api/work`);
//   const jobs = await res.json();
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       jobs,
//     },
//   };
// }


/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,586], function() { return __webpack_exec__(8589); });
module.exports = __webpack_exports__;

})();