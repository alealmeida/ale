(function() {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 6543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Job; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "swr"
var external_swr_namespaceObject = require("swr");;
// EXTERNAL MODULE: ./components/layout/layout.tsx
var layout = __webpack_require__(5193);
// EXTERNAL MODULE: ./components/header/header.tsx
var header = __webpack_require__(1040);
;// CONCATENATED MODULE: ./pages/[id]/index.js






function Job() {
  const router = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      children: ["Trabalhos de ", id]
    })
  });
}

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,586], function() { return __webpack_exec__(6543); });
module.exports = __webpack_exports__;

})();