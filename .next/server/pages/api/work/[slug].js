(function() {
var exports = {};
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 3307:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ personHandler; }
/* harmony export */ });
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5627);

function personHandler({
  query: {
    slug
  }
}, res) {
  const filtered = _global_data__WEBPACK_IMPORTED_MODULE_0__.workPages.filter(p => p.slug === slug); // User with id exists

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `User with id: ${slug} not found.`
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [627], function() { return __webpack_exec__(3307); });
module.exports = __webpack_exports__;

})();