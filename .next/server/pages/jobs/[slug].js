(function() {
var exports = {};
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 193:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const Layout = props => props.children;

/* harmony default export */ __webpack_exports__["Z"] = (Layout);

/***/ }),

/***/ 918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Job; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);



function Job({
  slug
}) {
  // const router = useRouter()
  // const { id } = router.query
  console.log(slug);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      children: ["Trabalhos de ", slug]
    })
  });
} // export async function getStaticProps() {
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
// export async function getStaticPaths() {
//   const dev = process.env.NODE_ENV !== "production";
//   const server = dev ? "http://localhost:3000" : "https://alealmeida.co";
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${server}/api/work`);
//   const jobs = await res.json();
//   return {
//     paths: [
//       // String variant:
//       '/jobs',
//       // Object variant:
//       { params: { slug: jobs.slug } },
//     ],
//     fallback: true,
//   }
// }

const getStaticPaths = async () => {
  // const arr: string[] = ['caixa', 'pop']
  const arr = ['caixa', 'pop']; // const arr2: number[] = ['caixa','pop'];

  const paths = arr.map(slug => {
    return {
      params: {
        slug
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const dev = false;
  const server = dev ? "http://localhost:3000" : "https://alealmeida.co/"; // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch(`${server}/api/work`);

  const {
    slug
  } = context.params; // no longer causes error

  const props = fetch(`${server}/api/work`);
  return {
    props: {
      slug
    }
  };
};

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(918));
module.exports = __webpack_exports__;

})();