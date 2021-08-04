/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_finish_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/finish.svg */ "./src/assets/images/finish.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_finish_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: rgba(128, 128, 128, 0.322);\r\n  text-align: center;\r\n}\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/* .form-content {\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n} */\r\n\r\n.form-field {\r\n  /* display: flex; */\r\n  margin: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.car_input {\r\n  margin-right: 20px;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  border-radius: 8px;\r\n}\r\n\r\n.title {\r\n  margin-left: 30px;\r\n  font-size: 22px;\r\n}\r\n\r\n.race {\r\n  width: 100%;\r\n  height: 100px;\r\n  float: left;\r\n  border-bottom: solid black;\r\n  text-align: left;\r\n  position: relative;\r\n}\r\n\r\n.car-panel {\r\n  display: flex;\r\n}\r\n\r\n.car-image {\r\n  width: 135px;\r\n  height: 56px;\r\n  /* transform: translateX(20px); */\r\n}\r\n\r\n.race-btn {\r\n  width: 35px;\r\n  height: 35px;\r\n  transform: translateY(-10px);\r\n}\r\n\r\n.finish {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  float: right;\r\n  /* margin-right: 20%; */\r\n  margin-right: 150px;\r\n  margin-top: -40px;\r\n}\r\n/**** MODAL WINDOW *****************/\r\n\r\n.modal {\r\n  /* display: none; */\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 100px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n  background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);\r\n  margin: auto;\r\n  padding: 10px;\r\n  border: 1px solid #888;\r\n  width: 310px;\r\n  /* height: 10%; */\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  color: #ffffff;\r\n}\r\n\r\n.modal_hint {\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n\r\n.modal_btn {\r\n  width: 135px;\r\n  height: 36px;\r\n  background-color: #f2f9fe;\r\n  color: #2196f3;\r\n  font-style: Medium;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  margin-right: 20px;\r\n}\r\n\r\n/******CUSTOM BUTTON***********/\r\n.flashing_btn {\r\n  background-color: #1c87c9;\r\n}\r\n@keyframes glowing {\r\n  0% {\r\n    background-color: rgb(199, 71, 71);\r\n    box-shadow: 0 0 3px rgb(199, 71, 71);\r\n  }\r\n  50% {\r\n    background-color: rgb(255, 0, 0);\r\n    box-shadow: 0 0 10px rgb(255, 0, 0);\r\n  }\r\n  100% {\r\n    background-color: rgb(199, 71, 71);\r\n    box-shadow: 0 0 3px rgb(199, 71, 71);\r\n  }\r\n}\r\n.flashing_btn {\r\n  animation: glowing 1300ms infinite;\r\n}\r\n\r\n/******WINNERS******************/\r\n\r\n.winners_container {\r\n  margin: 0 auto;\r\n  display: block;\r\n  text-align: center;\r\n  /* background-color: #2196f3; */\r\n\r\n  width: 480px;\r\n}\r\n\r\ntable {\r\n  margin: 0 auto;\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  border: 1px solid #616161;\r\n  text-align: left;\r\n  /* padding: 8px; */\r\n}\r\n\r\n.btn_wins {\r\n  background-color: #63a4ff;\r\n  width: 70px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;GAIG;;AAEH;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAiD;EACjD,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA,oCAAoC;;AAEpC;EACE,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,kEAAkE;EAClE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;AACA;EACE;IACE,kCAAkC;IAClC,oCAAoC;EACtC;EACA;IACE,gCAAgC;IAChC,mCAAmC;EACrC;EACA;IACE,kCAAkC;IAClC,oCAAoC;EACtC;AACF;AACA;EACE,kCAAkC;AACpC;;AAEA,gCAAgC;;AAEhC;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,+BAA+B;;EAE/B,YAAY;AACd;;AAEA;EACE,cAAc;EACd,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB","sourcesContent":["body {\r\n  background-color: rgba(128, 128, 128, 0.322);\r\n  text-align: center;\r\n}\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/* .form-content {\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n} */\r\n\r\n.form-field {\r\n  /* display: flex; */\r\n  margin: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.car_input {\r\n  margin-right: 20px;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  border-radius: 8px;\r\n}\r\n\r\n.title {\r\n  margin-left: 30px;\r\n  font-size: 22px;\r\n}\r\n\r\n.race {\r\n  width: 100%;\r\n  height: 100px;\r\n  float: left;\r\n  border-bottom: solid black;\r\n  text-align: left;\r\n  position: relative;\r\n}\r\n\r\n.car-panel {\r\n  display: flex;\r\n}\r\n\r\n.car-image {\r\n  width: 135px;\r\n  height: 56px;\r\n  /* transform: translateX(20px); */\r\n}\r\n\r\n.race-btn {\r\n  width: 35px;\r\n  height: 35px;\r\n  transform: translateY(-10px);\r\n}\r\n\r\n.finish {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-image: url('assets/images/finish.svg');\r\n  background-size: cover;\r\n  float: right;\r\n  /* margin-right: 20%; */\r\n  margin-right: 150px;\r\n  margin-top: -40px;\r\n}\r\n/**** MODAL WINDOW *****************/\r\n\r\n.modal {\r\n  /* display: none; */\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 100px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n  background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);\r\n  margin: auto;\r\n  padding: 10px;\r\n  border: 1px solid #888;\r\n  width: 310px;\r\n  /* height: 10%; */\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  color: #ffffff;\r\n}\r\n\r\n.modal_hint {\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n\r\n.modal_btn {\r\n  width: 135px;\r\n  height: 36px;\r\n  background-color: #f2f9fe;\r\n  color: #2196f3;\r\n  font-style: Medium;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  margin-right: 20px;\r\n}\r\n\r\n/******CUSTOM BUTTON***********/\r\n.flashing_btn {\r\n  background-color: #1c87c9;\r\n}\r\n@keyframes glowing {\r\n  0% {\r\n    background-color: rgb(199, 71, 71);\r\n    box-shadow: 0 0 3px rgb(199, 71, 71);\r\n  }\r\n  50% {\r\n    background-color: rgb(255, 0, 0);\r\n    box-shadow: 0 0 10px rgb(255, 0, 0);\r\n  }\r\n  100% {\r\n    background-color: rgb(199, 71, 71);\r\n    box-shadow: 0 0 3px rgb(199, 71, 71);\r\n  }\r\n}\r\n.flashing_btn {\r\n  animation: glowing 1300ms infinite;\r\n}\r\n\r\n/******WINNERS******************/\r\n\r\n.winners_container {\r\n  margin: 0 auto;\r\n  display: block;\r\n  text-align: center;\r\n  /* background-color: #2196f3; */\r\n\r\n  width: 480px;\r\n}\r\n\r\ntable {\r\n  margin: 0 auto;\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  border: 1px solid #616161;\r\n  text-align: left;\r\n  /* padding: 8px; */\r\n}\r\n\r\n.btn_wins {\r\n  background-color: #63a4ff;\r\n  width: 70px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/businessLayer/car.ts":
/*!**********************************!*\
  !*** ./src/businessLayer/car.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Car = /** @class */ (function () {
    function Car(newName, newColor, newId) {
        this.isFinished = false;
        this.isStopped = false;
        this.animationId = { id: 0 };
        this.currentName = newName;
        this.currentColor = newColor;
        this.currentId = newId;
    }
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this.currentColor;
        },
        set: function (newColor) {
            this.currentColor = newColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this.currentName;
        },
        set: function (newName) {
            this.currentName = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "id", {
        get: function () {
            return this.currentId;
        },
        set: function (newId) {
            this.currentId = newId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "time", {
        get: function () {
            return this.currentTime;
        },
        set: function (newTime) {
            this.currentTime = newTime;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.changeImageColor = function (newColor) {
        this.color = newColor;
        this.image.getElementsByTagName('g')[0].style.fill = newColor;
    };
    Car.prototype.animate = function (newTime, distance) {
        var image = this.image;
        var start = null;
        var state = { id: null, isFinished: false };
        var firstIterate = true;
        function step(timestamp) {
            var time = timestamp - start;
            var passed = Math.round(time * (distance / newTime));
            if (!start)
                start = timestamp;
            if (!firstIterate)
                image.style.transform = "translateX(" + Math.min(passed, distance) + "px)";
            if (passed < distance || firstIterate) {
                firstIterate = false;
                state.id = window.requestAnimationFrame(step);
            }
        }
        state.id = window.requestAnimationFrame(step);
        return state;
    };
    Car.prototype.returnToStart = function () {
        this.image.style.transform = "translateX(0px)";
    };
    Car.prototype.render = function () {
        var carImage = document.createElement('div');
        carImage.classList.add("car-image");
        this.image = carImage;
        this.image.innerHTML = "<svg\n      class=\"car-image\"\n      version=\"1.0\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"1280.000000pt\"\n      height=\"640.000000pt\"\n      viewbox=\"0 0 1280.000000 640.000000\"\n      preserveaspectratio=\"xMidYMid meet\"\n    >\n      <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>\n      <g\n        transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\"\n        fill=" + this.color + "\n        stroke=\"none\"\n      >\n        <path\n          d=\"M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\n   -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\n   -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\n   c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\n   -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\n   13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\n   -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\n   50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\n   29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\n   461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\n   -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\n   28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\n   190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\n   -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\n   c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\n   c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\n   71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\n   326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\n   -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\n   -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\n   -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\n   256 -20z\"\n        />\n        <path\n          d=\"M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\n   113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\n   -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\n   -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\n   -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\n   237 178 385 206 84 16 235 11 320 -11z\"\n        />\n        <path\n          d=\"M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\n   31 c-52 33 -131 65 -185 75 l-34 6 3 -163z\"\n        />\n        <path\n          d=\"M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\n   15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z\"\n        />\n        <path\n          d=\"M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\n   121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z\"\n        />\n        <path\n          d=\"M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\n   181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z\"\n        />\n        <path\n          d=\"M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\n   -45 -6z\"\n        />\n        <path\n          d=\"M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\n   41 100 -1 143 -33 32 -78 38 -120 15z\"\n        />\n        <path\n          d=\"M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n   -54 2z\"\n        />\n        <path\n          d=\"M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\n   -58 29z\"\n        />\n        <path\n          d=\"M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\n   103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z\"\n        />\n        <path\n          d=\"M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\n   86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z\"\n        />\n        <path\n          d=\"M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\n   45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z\"\n        />\n        <path\n          d=\"M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\n   l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z\"\n        />\n        <path\n          d=\"M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\n   68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z\"\n        />\n        <path\n          d=\"M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\n   -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\n   1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\n   -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\n   745 122 40 289 42 419 5z\"\n        />\n        <path\n          d=\"M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\n   18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z\"\n        />\n        <path\n          d=\"M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\n   128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z\"\n        />\n        <path\n          d=\"M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\n   278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z\"\n        />\n        <path\n          d=\"M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\n   172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z\"\n        />\n        <path\n          d=\"M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\n   19 -46 5z\"\n        />\n        <path\n          d=\"M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\n   39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z\"\n        />\n        <path\n          d=\"M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n   -54 2z\"\n        />\n        <path\n          d=\"M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\n   44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z\"\n        />\n        <path\n          d=\"M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\n   210 250 207 258 -4 12 -176 17 -272 7z\"\n        />\n        <path\n          d=\"M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\n   20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z\"\n        />\n        <path\n          d=\"M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\n   26z\"\n        />\n        <path\n          d=\"M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\n   l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z\"\n        />\n        <path\n          d=\"M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\n   130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z\"\n        />\n      </g>\n    </svg>";
        return this.image;
    };
    return Car;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);


/***/ }),

/***/ "./src/businessLayer/settings.ts":
/*!***************************************!*\
  !*** ./src/businessLayer/settings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    limitCarsOnPage: 7,
    generateCarsNumber: 100,
    carNames: [
        'Tesla',
        'Mersedes',
        'BMW',
        'Toyota',
        'Zhiguli',
        'Moskvich',
        'Opel',
        'Aston Martin',
        'Porshe',
    ],
    carModels: ['Model S', 'CLK', '7', 'Camry', 'Combi', '9', 'Corsa', 'DB9', 'Cayene'],
});


/***/ }),

/***/ "./src/businessLayer/utils.ts":
/*!************************************!*\
  !*** ./src/businessLayer/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/businessLayer/settings.ts");

var models = _settings__WEBPACK_IMPORTED_MODULE_0__.default.carModels;
var names = _settings__WEBPACK_IMPORTED_MODULE_0__.default.carNames;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getRandomName = function () {
        var model = models[Math.floor(Math.random() * models.length)];
        var name = names[Math.floor(Math.random() * models.length)];
        return model + " " + name;
    };
    Utils.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    Utils.generateRandomCars = function () {
        var number = _settings__WEBPACK_IMPORTED_MODULE_0__.default.generateCarsNumber;
        return new Array(number)
            .fill(1)
            .map(function () { return ({ name: Utils.getRandomName(), color: Utils.getRandomColor() }); });
    };
    Utils.disableBtns = function (btn_class) {
        var buttons = document.getElementsByClassName(btn_class);
        for (var i = 0; i < buttons.length; i += 1) {
            buttons[i].disabled = true;
        }
    };
    Utils.enableBtns = function (btn_class) {
        var buttons = document.getElementsByClassName(btn_class);
        for (var i = 0; i < buttons.length; i += 1) {
            buttons[i].disabled = false;
        }
    };
    return Utils;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);


/***/ }),

/***/ "./src/businessLayer/winner.ts":
/*!*************************************!*\
  !*** ./src/businessLayer/winner.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Winner = /** @class */ (function () {
    function Winner(newId, newWins, newTime, newCar) {
        this.currentId = newId;
        this.currentWins = newWins;
        this.currentTime = newTime;
        this.currentCar = newCar;
    }
    Object.defineProperty(Winner.prototype, "car", {
        get: function () {
            return this.currentCar;
        },
        set: function (newCar) {
            this.currentCar = newCar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Winner.prototype, "id", {
        get: function () {
            return this.currentId;
        },
        set: function (newId) {
            this.currentId = newId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Winner.prototype, "wins", {
        get: function () {
            return this.currentWins;
        },
        set: function (newWins) {
            this.currentWins = newWins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Winner.prototype, "time", {
        get: function () {
            return this.currentTime;
        },
        set: function (newTime) {
            this.currentTime = newTime;
        },
        enumerable: false,
        configurable: true
    });
    return Winner;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winner);


/***/ }),

/***/ "./src/dataAccessLayer/carDao.ts":
/*!***************************************!*\
  !*** ./src/dataAccessLayer/carDao.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _businessLayer_car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../businessLayer/car */ "./src/businessLayer/car.ts");
/* harmony import */ var _businessLayer_winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../businessLayer/winner */ "./src/businessLayer/winner.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var base = 'http://localhost:3000';
var garage = base + "/garage";
var engine = base + "/engine";
var winners = base + "/winners";
var getSortOrder = function (sort, order) {
    if (sort && order)
        return "&_sort=" + sort + "&_order=" + order;
    return '';
};
var CarDao = /** @class */ (function () {
    function CarDao() {
    }
    CarDao.getCars = function (page, limit) {
        if (limit === void 0) { limit = 7; }
        return __awaiter(this, void 0, void 0, function () {
            var response, serverCars, cars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(garage + "?_page=" + page + "&_limit=" + limit)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        serverCars = _a.sent();
                        cars = [];
                        serverCars.forEach(function (el) {
                            var newCar = new _businessLayer_car__WEBPACK_IMPORTED_MODULE_0__.default(el.name, el.color, el.id);
                            cars.push(newCar);
                        });
                        return [2 /*return*/, {
                                cars: cars,
                                count: +response.headers.get('X-Total-Count'),
                            }];
                }
            });
        });
    };
    CarDao.getCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(garage + "/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.createCar = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, serverCar, newCar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(garage, {
                            method: 'POST',
                            body: JSON.stringify(body),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        serverCar = _a.sent();
                        newCar = new _businessLayer_car__WEBPACK_IMPORTED_MODULE_0__.default(serverCar.name, serverCar.color, serverCar.id);
                        return [2 /*return*/, newCar];
                }
            });
        });
    };
    CarDao.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(garage + "/" + id, { method: 'DELETE' })];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.updateCar = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(garage + "/" + id, {
                            method: 'PUT',
                            body: JSON.stringify(body),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.startEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(engine + "?id=" + id + "&status=started")];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.stopEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(engine + "?id=" + id + "&status=stopped")];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.drive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, fetch(engine + "?id=" + id + "&status=drive").catch()];
                    case 1:
                        response = _c.sent();
                        if (!(response.status !== 200)) return [3 /*break*/, 2];
                        _a = { success: false };
                        return [3 /*break*/, 4];
                    case 2:
                        _b = [{}];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        _a = __assign.apply(void 0, _b.concat([(_c.sent())]));
                        _c.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    CarDao.getWinners = function (page, limit, sort, order) {
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var response, items, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners + "?_page=" + page + "&_limit=" + limit + getSortOrder(sort, order))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        items = _a.sent();
                        result = { winners: [], count: null };
                        items.forEach(function (el) { return __awaiter(_this, void 0, void 0, function () {
                            var newCarObj, newCar, newWinner;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, CarDao.getCar(el.id)];
                                    case 1:
                                        newCarObj = _a.sent();
                                        newCar = new _businessLayer_car__WEBPACK_IMPORTED_MODULE_0__.default(newCarObj.name, newCarObj.color, newCarObj.id);
                                        newWinner = new _businessLayer_winner__WEBPACK_IMPORTED_MODULE_1__.default(el.id, el.wins, el.time, newCar);
                                        result.winners.push(newWinner);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        result.count = +response.headers.get('X-Total-Count');
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CarDao.getWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners + "/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.getWinnerStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners + "/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).status];
                }
            });
        });
    };
    CarDao.deleteWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners + "/" + id, { method: 'DELETE' })];
                    case 1:
                        (_a.sent()).json();
                        return [2 /*return*/];
                }
            });
        });
    };
    CarDao.createWinner = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners, {
                            method: 'POST',
                            body: JSON.stringify(body),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.updateWinner = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(winners + "/" + id, {
                            method: 'PUT',
                            body: JSON.stringify(body),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    };
    CarDao.saveWinner = function (newId, newTime) {
        return __awaiter(this, void 0, void 0, function () {
            var winnerStatus, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWinnerStatus(newId)];
                    case 1:
                        winnerStatus = _a.sent();
                        if (!(winnerStatus === 404)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createWinner({ id: newId, wins: 1, time: newTime })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.getWinner(newId)];
                    case 4:
                        winner = _a.sent();
                        return [4 /*yield*/, this.updateWinner(newId, {
                                id: newId,
                                wins: winner.wins + 1,
                                time: newTime < winner.time ? newTime : winner.time,
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return CarDao;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarDao);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presentationLayer_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentationLayer/garage */ "./src/presentationLayer/garage.ts");
/* harmony import */ var _presentationLayer_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentationLayer/store */ "./src/presentationLayer/store.ts");


var rootNode = document.querySelector('body');
var store = new _presentationLayer_store__WEBPACK_IMPORTED_MODULE_1__.default();
var finishIndent = 285;
store.initialize().then(function () {
    store.root = rootNode;
    var garage = new _presentationLayer_garage__WEBPACK_IMPORTED_MODULE_0__.default(rootNode, store);
    setTimeout(function () {
        garage.render();
        var width = window.innerWidth;
        store.distance = width - finishIndent;
    }, 500);
});
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    store.distance = width - finishIndent;
});


/***/ }),

/***/ "./src/presentationLayer/garage.ts":
/*!*****************************************!*\
  !*** ./src/presentationLayer/garage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serviceLayer/carService */ "./src/serviceLayer/carService.ts");
/* harmony import */ var _race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./race */ "./src/presentationLayer/race.ts");
/* harmony import */ var _businessLayer_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../businessLayer/settings */ "./src/businessLayer/settings.ts");
/* harmony import */ var _modalWinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalWinner */ "./src/presentationLayer/modalWinner.ts");
/* harmony import */ var _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../businessLayer/utils */ "./src/businessLayer/utils.ts");
/* harmony import */ var _winners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winners */ "./src/presentationLayer/winners.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */





var Garage = /** @class */ (function () {
    function Garage(root, store) {
        this.root = root;
        this.store = store;
        this.application = document.createElement('div');
    }
    Garage.prototype.render = function () {
        this.application.innerHTML = "<main>\n    <button id=\"btn_to_garage\">TO GARAGE</button>\n    <button id=\"btn_to_winners\">TO WINNERS</button>\n    <div id=\"garage\">\n    <div class=\"content\" id=\"content\">\n    <form id=\"create_car_form\" class=\"car_form\" onsubmit=\"return false\">\n      <p class=\"title\">Car</p>\n      <div class=\"form-field\">\n        <input maxlength=\"20\" class=\"car_input\" type=\"text\" id=\"create_car_input\" placeholder=\"CAR NAME\" />\n        <input type=\"color\" id=\"create_car_color_input\" />\n        <button class=\"btn_add_user\" id=\"btn_create_car\">CREATE</button>\n      </div>\n    </form>\n    <form id=\"update_car_form\" class=\"car_form\" onsubmit=\"return false\">\n      <div class=\"form-field\">\n        <input maxlength=\"20\" class=\"car_input\" type=\"text\" id=\"update_car_input\" placeholder=\"CAR NAME\" />\n        <input type=\"color\" id=\"update_car_color_input\" />\n        <button class=\"btn_add_user\" id=\"btn_update_car\">UPDATE</button>\n      </div>\n      <div class=\"car_input\">\n        <button class=\"btn_add_user\" id=\"btn_race\">RACE</button>\n        <button class=\"btn_add_user\" disabled id=\"btn_reset\">RESET</button>\n        <button class=\"btn_add_user\" id=\"btn_generate_cars\">GENERATE CARS</button>\n      </div>\n    </form>\n    <p class=\"title\">Garage (" + this.store.carsCount + ")</p>\n    <p class=\"title\">Page #" + this.store.carsPage + "</p>\n    <div id=\"garagePage\"></div>\n    <button " + (this.store.carsPage <= 1 ? 'disabled' : '') + " id=\"btn_prev\">PREV</button>\n    <button " + (this.store.carsPage === Math.ceil(this.store.carsCount / 7) ? 'disabled' : '') + " id=\"btn_next\">NEXT</button>\n    </div>\n    </div>\n  </main>";
        if (this.root) {
            this.root.appendChild(this.application);
            this.racesRoot = this.application.querySelector('#garage');
            this.renderRacePage();
            this.btnToGarage = this.application.querySelector('#btn_to_garage');
            this.btnToWinners = this.application.querySelector('#btn_to_winners');
            this.btnPrev = this.application.querySelector('#btn_prev');
            this.btnNext = this.application.querySelector('#btn_next');
            this.btnCreateCar = this.application.querySelector('#btn_create_car');
            this.btnUpdateCar = this.application.querySelector('#btn_update_car');
            this.createCarInputName = this.application.querySelector('#create_car_input');
            this.updateCarInputName = this.application.querySelector('#update_car_input');
            this.createCarInputColor = this.application.querySelector('#create_car_color_input');
            this.updateCarInputColor = this.application.querySelector('#update_car_color_input');
            this.btnGeneratecars = this.application.querySelector('#btn_generate_cars');
            this.btnRace = this.application.querySelector('#btn_race');
            this.btnReset = this.application.querySelector('#btn_reset');
            this.addButtonListeners();
        }
        return this.application;
    };
    Garage.prototype.addButtonListeners = function () {
        var _this = this;
        var garagePage = this.root.querySelector('#garage');
        this.btnToGarage.addEventListener('click', function () {
            _this.btnToGarage.disabled = true;
            _this.btnToWinners.disabled = false;
            _this.store.view = 'garage';
            garagePage.style.display = 'block';
            var winnersPage = _this.root.querySelector('#winners');
            _this.root.removeChild(winnersPage);
        });
        this.btnToWinners.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.btnToGarage.disabled = false;
                this.btnToWinners.disabled = true;
                this.store.view = 'winners';
                garagePage.style.display = 'none';
                this.store.updateStoreWinners();
                setTimeout(function () {
                    new _winners__WEBPACK_IMPORTED_MODULE_5__.default(_this.root, _this.store).render();
                }, 500);
                return [2 /*return*/];
            });
        }); });
        this.btnCreateCar.addEventListener('click', function () { return _this.createCar(); });
        this.btnUpdateCar.addEventListener('click', function () { return _this.updateCar(); });
        this.btnPrev.addEventListener('click', function () {
            _this.store.carsPage -= 1;
            _this.store.updateStoreCars().then(function () { return _this.updateView(); });
        });
        this.btnNext.addEventListener('click', function () {
            _this.store.carsPage += 1;
            _this.store.updateStoreCars().then(function () { return _this.updateView(); });
        });
        this.btnGeneratecars.addEventListener('click', function () {
            _this.store.carsCount += _businessLayer_settings__WEBPACK_IMPORTED_MODULE_2__.default.generateCarsNumber;
            _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.generateRandomCars().then(function () {
                return _this.store.updateStoreCars().then(function () { return _this.updateView(); });
            });
        });
        this.btnRace.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.enableBtns('btn_b');
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.disableBtns('btn_a');
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.disableBtns('btn_select');
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.disableBtns('btn_remove');
                        this.btnRace.disabled = true;
                        this.btnReset.disabled = false;
                        return [4 /*yield*/, this.raceAllCars()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.btnReset.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.disableBtns('btn_b');
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.enableBtns('btn_select');
                        _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.enableBtns('btn_remove');
                        this.btnReset.disabled = true;
                        this.btnRace.classList.add('flashing_btn');
                        return [4 /*yield*/, this.stopRace()];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.btnRace.disabled = false;
                            _this.btnRace.classList.remove('flashing_btn');
                            _businessLayer_utils__WEBPACK_IMPORTED_MODULE_4__.default.enableBtns('btn_a');
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Garage.prototype.renderRacePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cars;
            var _this = this;
            return __generator(this, function (_a) {
                this.racePage = document.createElement('div');
                cars = this.store.cars;
                cars.forEach(function (el) { return new _race__WEBPACK_IMPORTED_MODULE_1__.default(_this.racePage, el, _this.store, _this).render(); });
                this.racesRoot.appendChild(this.racePage);
                return [2 /*return*/];
            });
        });
    };
    Garage.prototype.updateView = function () {
        if (this.root && this.application) {
            this.racesRoot.removeChild(this.racePage);
            this.render();
        }
    };
    Garage.prototype.updateCar = function () {
        var _this = this;
        var car = this.store.selectedCar;
        if (!car) {
            this.updateCarInputName.setCustomValidity('No cars selected!');
            return;
        }
        car.name = this.updateCarInputName.value;
        car.color = this.updateCarInputColor.value;
        _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.updateCar(car.id, { name: car.name, color: car.color }).then(function () {
            return _this.store.updateStoreCars().then(function () { return _this.updateView(); });
        });
    };
    Garage.prototype.createCar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newName, newColor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newName = this.createCarInputName.value;
                        newColor = this.createCarInputColor.value;
                        if (newName === '') {
                            this.createCarInputName.setCustomValidity('Name should be fullfilled!');
                            return [2 /*return*/];
                        }
                        this.createCarInputName.setCustomValidity('');
                        return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.createCar({ name: newName, color: newColor })];
                    case 1:
                        _a.sent();
                        this.store.carsCount += 1;
                        this.store.updateStoreCars().then(function () { return _this.updateView(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Garage.prototype.raceAllCars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cars;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cars = this.store.cars;
                        this.listenToWinner();
                        return [4 /*yield*/, Promise.all(cars.map(function (car) { return __awaiter(_this, void 0, void 0, function () {
                                var startEngineResp, velocity, distance, time, driveResp;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            car.isFinished = false;
                                            car.isStopped = false;
                                            return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.startEngine(car.id)];
                                        case 1:
                                            startEngineResp = _a.sent();
                                            velocity = startEngineResp.velocity;
                                            distance = startEngineResp.distance;
                                            time = Math.round(distance / velocity);
                                            if (time) {
                                                car.animationId = car.animate(time, this.store.distance);
                                            }
                                            else
                                                return [2 /*return*/];
                                            return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.drive(car.id)];
                                        case 2:
                                            driveResp = _a.sent();
                                            if (!driveResp.success) {
                                                window.cancelAnimationFrame(car.animationId.id);
                                            }
                                            else {
                                                car.isFinished = true;
                                                car.time = time / 1000;
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Garage.prototype.stopRace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.cars.forEach(function (car) {
                            car.isFinished = false;
                        });
                        return [4 /*yield*/, clearInterval(this.winnerInterval)];
                    case 1:
                        _a.sent();
                        this.store.cars.forEach(function (car) { return __awaiter(_this, void 0, void 0, function () {
                            var id;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.stopEngine(car.id)];
                                    case 1:
                                        _a.sent();
                                        id = window.requestAnimationFrame(function () { });
                                        while (id >= 0) {
                                            window.cancelAnimationFrame(id);
                                            id -= 1;
                                        }
                                        car.image.style.transform = "translateX(0)";
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Garage.prototype.listenToWinner = function () {
        var _this = this;
        this.winnerInterval = window.setInterval(function () {
            _this.store.cars.forEach(function (car) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(car.isFinished && !car.isStopped)) return [3 /*break*/, 2];
                            new _modalWinner__WEBPACK_IMPORTED_MODULE_3__.default(this.root, car).show();
                            _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.saveWinner(car.id, car.time);
                            // this.store.winnersCount += 1;
                            return [4 /*yield*/, clearInterval(this.winnerInterval)];
                        case 1:
                            // this.store.winnersCount += 1;
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }, 100);
    };
    return Garage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garage);


/***/ }),

/***/ "./src/presentationLayer/modalWinner.ts":
/*!**********************************************!*\
  !*** ./src/presentationLayer/modalWinner.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ModalWinner = /** @class */ (function () {
    function ModalWinner(root, car) {
        var _this = this;
        this.root = root;
        this.modalWindow = document.createElement('div');
        this.modalWindow.innerHTML = "\n          <div id=\"modalWinner\" class=\"modal\">\n             <div class=\"modal-content\">\n               <p>Winner!</p>\n               <p>Car name: " + car.name + "</p>\n               <p>Time: " + car.time + " sec</p>\n               <button class=\"modal_btn\" id=\"close_modal_winner_btn\">Close</button>\n             </div>\n         </div>";
        this.btnCloseModal = this.modalWindow.querySelector('#close_modal_winner_btn');
        this.btnCloseModal.addEventListener('click', function () { return _this.closeModal(); });
    }
    ModalWinner.prototype.closeModal = function () {
        this.root.removeChild(this.modalWindow);
    };
    ModalWinner.prototype.show = function () {
        this.root.appendChild(this.modalWindow);
    };
    return ModalWinner;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWinner);


/***/ }),

/***/ "./src/presentationLayer/race.ts":
/*!***************************************!*\
  !*** ./src/presentationLayer/race.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serviceLayer/carService */ "./src/serviceLayer/carService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Race = /** @class */ (function () {
    // private animationId: { id: number } = { id: 0 };
    function Race(root, car, store, garage) {
        this.root = root;
        this.car = car;
        this.store = store;
        this.garage = garage;
        this.application = document.createElement('div');
        this.btnSelect = document.createElement('button');
        this.btnRemove = document.createElement('button');
        this.btnA = document.createElement('button');
        this.btnB = document.createElement('button');
    }
    Race.prototype.render = function () {
        this.application.innerHTML = "<div class=\"race\">\n    <div class=\"car-panel\">\n      <button class=\"btn_add_user btn_select\" id=\"select-car-" + this.car.id + "\">SELECT</button>  \n      <button class=\"btn_add_user btn_remove\" id=\"remove-car-" + this.car.id + "\">REMOVE</button>\n      <p>" + this.car.name + "</p>\n    </div>\n    <div class=\"car-panel\">\n    <button class=\"race-btn btn_a\", id=\"btn-start-" + this.car.id + "\">A</button>\n    <button class=\"race-btn btn_b\" id=\"btn-stop-" + this.car.id + "\" disabled>B</button>\n    <div id=\"car-image-" + this.car.id + "\" class=\"car_image\"></div>\n    </div>\n    <div class=\"finish\"></div>\n    </div>";
        this.btnSelect = this.application.querySelector("#select-car-" + this.car.id);
        this.btnRemove = this.application.querySelector("#remove-car-" + this.car.id);
        this.btnA = this.application.querySelector("#btn-start-" + this.car.id);
        this.btnB = this.application.querySelector("#btn-stop-" + this.car.id);
        var carRoot = this.application.querySelector("#car-image-" + this.car.id);
        carRoot.appendChild(this.car.render());
        if (this.root) {
            this.root.appendChild(this.application);
            this.addBtnListeners();
        }
        return this.application;
    };
    Race.prototype.addBtnListeners = function () {
        var _this = this;
        this.btnSelect.addEventListener('click', function () {
            _this.store.selectedCar = _this.car;
        });
        this.btnRemove.addEventListener('click', function () { return _this.removeCar(); });
        this.btnA.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startRace()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.btnB.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stopRace()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Race.prototype.removeCar = function () {
        var _this = this;
        this.store.carsCount -= 1;
        this.store.winnersCount -= 1;
        _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.deleteCar(this.car.id).then(function () {
            return _this.store.updateStoreCars().then(function () {
                _this.store.root.innerHTML = '';
                _this.garage.render();
            });
        });
        _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.deleteWinner(this.car.id);
    };
    Race.prototype.startRace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startEngineResp, velocity, distance, time, driveResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.startEngine(this.car.id)];
                    case 1:
                        startEngineResp = _a.sent();
                        velocity = startEngineResp.velocity;
                        distance = startEngineResp.distance;
                        time = distance / velocity;
                        if (time) {
                            this.btnA.disabled = true;
                            this.btnB.disabled = false;
                            this.btnSelect.disabled = true;
                            this.btnRemove.disabled = true;
                            this.car.animationId = this.car.animate(time, this.store.distance);
                        }
                        else
                            return [2 /*return*/];
                        return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.drive(this.car.id)];
                    case 2:
                        driveResp = _a.sent();
                        if (!driveResp.success) {
                            window.cancelAnimationFrame(this.car.animationId.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Race.prototype.stopRace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.stopEngine(this.car.id)];
                    case 1:
                        _a.sent();
                        this.btnB.disabled = true;
                        this.btnA.disabled = false;
                        this.btnSelect.disabled = false;
                        this.btnRemove.disabled = false;
                        window.cancelAnimationFrame(this.car.animationId.id);
                        this.car.isStopped = true;
                        this.car.image.style.transform = "translateX(0)";
                        this.checkAllCarsIsStopped();
                        return [2 /*return*/];
                }
            });
        });
    };
    Race.prototype.checkAllCarsIsStopped = function () {
        for (var i = 0; i < this.store.cars.length; i += 1) {
            if (!this.store.cars[i].isStopped) {
                return;
            }
        }
        this.garage.btnRace.disabled = false;
        this.garage.btnReset.disabled = true;
    };
    return Race;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Race);


/***/ }),

/***/ "./src/presentationLayer/store.ts":
/*!****************************************!*\
  !*** ./src/presentationLayer/store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serviceLayer/carService */ "./src/serviceLayer/carService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Store = /** @class */ (function () {
    function Store() {
        this.carsPage = 1;
        this.winnersPage = 1;
        this.view = 'garage';
        this.sortBy = 'time';
        this.sortOrder = 'ASC';
        this.distance = 1410;
    }
    Store.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var carsResp, winnersResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.getCars(1)];
                    case 1:
                        carsResp = _a.sent();
                        this.cars = carsResp.cars;
                        this.carsCount = carsResp.count;
                        return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.getWinners(1, 10, this.sortBy, this.sortOrder)];
                    case 2:
                        winnersResp = _a.sent();
                        this.winnersCount = winnersResp.count;
                        this.winners = winnersResp.winners;
                        return [2 /*return*/];
                }
            });
        });
    };
    Store.prototype.updateStoreCars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentPageCars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.getCars(this.carsPage)];
                    case 1:
                        currentPageCars = (_a.sent()).cars;
                        this.cars = currentPageCars;
                        return [2 /*return*/];
                }
            });
        });
    };
    Store.prototype.updateStoreWinners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _serviceLayer_carService__WEBPACK_IMPORTED_MODULE_0__.default.getWinners(this.winnersPage, 10, this.sortBy, this.sortOrder)];
                    case 1:
                        resp = _a.sent();
                        this.winners = resp.winners;
                        this.winnersCount = resp.count;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Store;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);


/***/ }),

/***/ "./src/presentationLayer/winners.ts":
/*!******************************************!*\
  !*** ./src/presentationLayer/winners.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Winners = /** @class */ (function () {
    function Winners(root, store) {
        this.root = root;
        this.store = store;
        this.application = document.createElement('div');
        this.application.id = 'winners';
    }
    Winners.prototype.render = function () {
        this.application.innerHTML = "<div class=\"winners_container\">\n    <h1 class=\"title\">Winners (" + this.store.winnersCount + ")</h1>\n    <p class=\"title\">Page #" + this.store.winnersPage + "</p>\n    <table>\n      <tr>\n        <th>Number</th>\n        <th>Car</th>\n        <th>Name</th>\n        <th><button class=\"btn_wins\" id=\"btn_wins\">Wins</button></th>\n        <th><button class=\"btn_wins\" id=\"btn_best_time\">Best time(sec)</button></th>\n      </tr>\n      " + this.renderRecords() + "\n    </table>\n    <button " + (this.store.winnersPage <= 1 ? 'disabled' : '') + " id=\"btn_winners_prev\">PREV</button>\n    <button " + (this.store.winnersPage === Math.ceil(this.store.winnersCount / 10) ? 'disabled' : '') + " id=\"btn_winners_next\">NEXT</button>\n  </div>";
        if (this.root) {
            this.root.appendChild(this.application);
            this.btnPrev = this.application.querySelector('#btn_winners_prev');
            this.btnNext = this.application.querySelector('#btn_winners_next');
            this.btnWins = this.application.querySelector('#btn_wins');
            this.btnBestTime = this.application.querySelector('#btn_best_time');
            this.addButtonListeners();
        }
        return this.application;
    };
    Winners.prototype.addButtonListeners = function () {
        var _this = this;
        this.btnPrev.addEventListener('click', function () {
            _this.store.winnersPage -= 1;
            _this.store.updateStoreWinners().then(function () { return _this.updateView(); });
            setTimeout(function () {
                _this.updateView();
            }, 400);
        });
        this.btnNext.addEventListener('click', function () {
            _this.store.winnersPage += 1;
            _this.store.updateStoreWinners().then(function () { return _this.updateView(); });
            setTimeout(function () {
                _this.updateView();
            }, 400);
        });
        this.btnWins.addEventListener('click', function () {
            _this.store.sortBy = 'wins';
            if (_this.store.sortOrder === 'ASC') {
                _this.store.sortOrder = 'DESC';
            }
            else
                _this.store.sortOrder = 'ASC';
            _this.store.updateStoreWinners();
            setTimeout(function () {
                _this.updateView();
            }, 500);
        });
        this.btnBestTime.addEventListener('click', function () {
            _this.store.sortBy = 'time';
            if (_this.store.sortOrder === 'ASC') {
                _this.store.sortOrder = 'DESC';
            }
            else
                _this.store.sortOrder = 'ASC';
            _this.store.updateStoreWinners();
            setTimeout(function () {
                _this.updateView();
            }, 500);
        });
    };
    Winners.prototype.updateView = function () {
        if (this.root && this.application) {
            this.root.removeChild(this.application);
            this.render();
        }
    };
    Winners.prototype.renderRecords = function () {
        var records = document.createElement('tr');
        var number = 1;
        this.store.winners.forEach(function (winner) {
            var newRecord = document.createElement('tr');
            newRecord.innerHTML = "<tr>\n    <td>" + number + "</td>\n    <td>" + winner.car.render().innerHTML + "</td>\n    <td>" + winner.car.name + "</td>\n    <td>" + winner.wins + "</td>\n    <td>" + winner.time + "</td>\n  </tr>";
            records.appendChild(newRecord);
            number += 1;
        });
        return records.innerHTML;
    };
    Winners.prototype.update = function () {
        this.root.removeChild(this.application);
        this.render();
    };
    return Winners;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winners);


/***/ }),

/***/ "./src/serviceLayer/carService.ts":
/*!****************************************!*\
  !*** ./src/serviceLayer/carService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _businessLayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../businessLayer/utils */ "./src/businessLayer/utils.ts");
/* harmony import */ var _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataAccessLayer/carDao */ "./src/dataAccessLayer/carDao.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CarService = /** @class */ (function () {
    function CarService() {
    }
    CarService.getCars = function (page, limit) {
        if (limit === void 0) { limit = 7; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.getCars(page, limit)];
            });
        });
    };
    CarService.getCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.getCar(id)];
            });
        });
    };
    CarService.createCar = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.createCar(body)];
            });
        });
    };
    CarService.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.deleteCar(id)];
            });
        });
    };
    CarService.updateCar = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.updateCar(id, body)];
            });
        });
    };
    CarService.generateRandomCars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var generatedCars, cars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        generatedCars = _businessLayer_utils__WEBPACK_IMPORTED_MODULE_0__.default.generateRandomCars();
                        return [4 /*yield*/, Promise.all(generatedCars.map(function (el) { return CarService.createCar(el); }))];
                    case 1:
                        cars = _a.sent();
                        return [2 /*return*/, cars];
                }
            });
        });
    };
    CarService.startEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.startEngine(id)];
            });
        });
    };
    CarService.stopEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.stopEngine(id)];
            });
        });
    };
    CarService.drive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.drive(id)];
            });
        });
    };
    CarService.saveWinner = function (newId, newTime) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.saveWinner(newId, newTime);
                return [2 /*return*/];
            });
        });
    };
    CarService.getWinners = function (page, limit, sort, order) {
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.getWinners(page, limit, sort, order)];
            });
        });
    };
    CarService.deleteWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _dataAccessLayer_carDao__WEBPACK_IMPORTED_MODULE_1__.default.deleteWinner(id);
                return [2 /*return*/];
            });
        });
    };
    return CarService;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarService);


/***/ }),

/***/ "./src/assets/images/finish.svg":
/*!**************************************!*\
  !*** ./src/assets/images/finish.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ff4593eaac3eb4a1736.svg";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.ts */ "./src/index.ts");



// import Icon from './Switzerland.jpg';z

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.

    // const myIcon = new Image();

    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    return element;
}

// document.body.appendChild(component());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvYnVzaW5lc3NMYXllci9jYXIudHMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL3NyYy9idXNpbmVzc0xheWVyL3NldHRpbmdzLnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvYnVzaW5lc3NMYXllci91dGlscy50cyIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vc3JjL2J1c2luZXNzTGF5ZXIvd2lubmVyLnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvZGF0YUFjY2Vzc0xheWVyL2NhckRhby50cyIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvcHJlc2VudGF0aW9uTGF5ZXIvZ2FyYWdlLnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvcHJlc2VudGF0aW9uTGF5ZXIvbW9kYWxXaW5uZXIudHMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL3NyYy9wcmVzZW50YXRpb25MYXllci9yYWNlLnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvcHJlc2VudGF0aW9uTGF5ZXIvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL3NyYy9wcmVzZW50YXRpb25MYXllci93aW5uZXJzLnRzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvLi9zcmMvc2VydmljZUxheWVyL2NhclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lc2xpbnQtY29uZmlnLWFpcmJuYi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludC1jb25maWctYWlyYm5iLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXNsaW50LWNvbmZpZy1haXJibmItdHlwZXNjcmlwdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ3pCO0FBQ3ZFLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLHNEQUE2QjtBQUN0RztBQUNBLGdEQUFnRCxtREFBbUQseUJBQXlCLEtBQUssY0FBYyxxQkFBcUIsS0FBSywwQkFBMEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsS0FBSyx3QkFBd0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsS0FBSyxvQkFBb0IseUJBQXlCLEtBQUssZ0JBQWdCLG1CQUFtQixzQkFBc0IsS0FBSyxlQUFlLHlCQUF5QixLQUFLLGdCQUFnQix3QkFBd0Isc0JBQXNCLEtBQUssZUFBZSxrQkFBa0Isb0JBQW9CLGtCQUFrQixpQ0FBaUMsdUJBQXVCLHlCQUF5QixLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxvQkFBb0IsbUJBQW1CLG1CQUFtQixxQ0FBcUMsUUFBUSxtQkFBbUIsa0JBQWtCLG1CQUFtQixtQ0FBbUMsS0FBSyxpQkFBaUIsa0JBQWtCLG1CQUFtQix3RUFBd0UsNkJBQTZCLG1CQUFtQiwyQkFBMkIsNkJBQTZCLHdCQUF3QixLQUFLLHlEQUF5RCx1QkFBdUIseUJBQXlCLGlCQUFpQix5QkFBeUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLEtBQUssK0NBQStDLHlFQUF5RSxtQkFBbUIsb0JBQW9CLDZC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QyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ0Q7O0FBRXBCLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvZmluaXNoLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMyMik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC5mb3JtLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufSAqL1xcclxcblxcclxcbi5mb3JtLWZpZWxkIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyX2lucHV0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5yYWNlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jYXItaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbiAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1idG4ge1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICAvKiBtYXJnaW4tcmlnaHQ6IDIwJTsgKi9cXHJcXG4gIG1hcmdpbi1yaWdodDogMTUwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtNDBweDtcXHJcXG59XFxyXFxuLyoqKiogTU9EQUwgV0lORE9XICoqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50ICovXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzYzYTRmZiAwJSwgIzgzZWFmMSA3NCUpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogMzEwcHg7XFxyXFxuICAvKiBoZWlnaHQ6IDEwJTsgKi9cXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfaGludCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfYnRuIHtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG4gIGhlaWdodDogMzZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY5ZmU7XFxyXFxuICBjb2xvcjogIzIxOTZmMztcXHJcXG4gIGZvbnQtc3R5bGU6IE1lZGl1bTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKipDVVNUT00gQlVUVE9OKioqKioqKioqKiovXFxyXFxuLmZsYXNoaW5nX2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4N2M5O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGdsb3dpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCA3MSwgNzEpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigxOTksIDcxLCA3MSk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDI1NSwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgNzEsIDcxKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMTk5LCA3MSwgNzEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZmxhc2hpbmdfYnRuIHtcXHJcXG4gIGFuaW1hdGlvbjogZ2xvd2luZyAxMzAwbXMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi8qKioqKipXSU5ORVJTKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi53aW5uZXJzX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgKi9cXHJcXG5cXHJcXG4gIHdpZHRoOiA0ODBweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnRkLFxcclxcbnRoIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTYxNjE7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgLyogcGFkZGluZzogOHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX3dpbnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYTRmZjtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBaUQ7RUFDakQsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBLG9DQUFvQzs7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0VBQWtFO0VBQ2xFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0VBQ3RDO0FBQ0Y7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQStCOztFQUUvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zMjIpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZm9ybS1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcl9pbnB1dCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG4gIGhlaWdodDogNTZweDtcXHJcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnJhY2UtYnRuIHtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaCB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltYWdlcy9maW5pc2guc3ZnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgLyogbWFyZ2luLXJpZ2h0OiAyMCU7ICovXFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTQwcHg7XFxyXFxufVxcclxcbi8qKioqIE1PREFMIFdJTkRPVyAqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgQ29udGVudCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM2M2E0ZmYgMCUsICM4M2VhZjEgNzQlKTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgd2lkdGg6IDMxMHB4O1xcclxcbiAgLyogaGVpZ2h0OiAxMCU7ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX2hpbnQge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX2J0biB7XFxyXFxuICB3aWR0aDogMTM1cHg7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmOWZlO1xcclxcbiAgY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBmb250LXN0eWxlOiBNZWRpdW07XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqQ1VTVE9NIEJVVFRPTioqKioqKioqKioqL1xcclxcbi5mbGFzaGluZ19idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjODdjOTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBnbG93aW5nIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgNzEsIDcxKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMTk5LCA3MSwgNzEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigyNTUsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDcxLCA3MSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDE5OSwgNzEsIDcxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZsYXNoaW5nX2J0biB7XFxyXFxuICBhbmltYXRpb246IGdsb3dpbmcgMTMwMG1zIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqV0lOTkVSUyoqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4ud2lubmVyc19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7ICovXFxyXFxuXFxyXFxuICB3aWR0aDogNDgwcHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG50ZCxcXHJcXG50aCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjE2MTYxO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIC8qIHBhZGRpbmc6IDhweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl93aW5zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2E0ZmY7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXIge1xyXG4gIHByaXZhdGUgY3VycmVudE5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50Q29sb3I6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgaW1hZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgaXNGaW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaXNTdG9wcGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBhbmltYXRpb25JZDogeyBpZDogbnVtYmVyIH0gPSB7IGlkOiAwIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5ld05hbWU6IHN0cmluZywgbmV3Q29sb3I6IHN0cmluZywgbmV3SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50TmFtZSA9IG5ld05hbWU7XHJcbiAgICB0aGlzLmN1cnJlbnRDb2xvciA9IG5ld0NvbG9yO1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSBuZXdJZDtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvbG9yO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKG5ld0NvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudENvbG9yID0gbmV3Q29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudE5hbWUgPSBuZXdOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaWQobmV3SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSBuZXdJZDtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcclxuICB9XHJcblxyXG4gIHNldCB0aW1lKG5ld1RpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJbWFnZUNvbG9yKG5ld0NvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcclxuICAgIHRoaXMuaW1hZ2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2cnKVswXS5zdHlsZS5maWxsID0gbmV3Q29sb3I7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKG5ld1RpbWU6IG51bWJlciwgZGlzdGFuY2U6IG51bWJlcik6IHsgaWQ6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHsgaW1hZ2UgfSA9IHRoaXM7XHJcbiAgICBsZXQgc3RhcnQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBjb25zdCBzdGF0ZTogeyBpZDogbnVtYmVyOyBpc0ZpbmlzaGVkOiBib29sZWFuIH0gPSB7IGlkOiBudWxsLCBpc0ZpbmlzaGVkOiBmYWxzZSB9O1xyXG5cclxuICAgIGxldCBmaXJzdEl0ZXJhdGUgPSB0cnVlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wOiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xyXG4gICAgICBjb25zdCBwYXNzZWQgPSBNYXRoLnJvdW5kKHRpbWUgKiAoZGlzdGFuY2UgLyBuZXdUaW1lKSk7XHJcbiAgICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgaWYgKCFmaXJzdEl0ZXJhdGUpIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7TWF0aC5taW4ocGFzc2VkLCBkaXN0YW5jZSl9cHgpYDtcclxuXHJcbiAgICAgIGlmIChwYXNzZWQgPCBkaXN0YW5jZSB8fCBmaXJzdEl0ZXJhdGUpIHtcclxuICAgICAgICBmaXJzdEl0ZXJhdGUgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRlLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIHJldHVyblRvU3RhcnQoKSB7XHJcbiAgICB0aGlzLmltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJJbWFnZS5jbGFzc0xpc3QuYWRkKGBjYXItaW1hZ2VgKTtcclxuICAgIHRoaXMuaW1hZ2UgPSBjYXJJbWFnZTtcclxuICAgIHRoaXMuaW1hZ2UuaW5uZXJIVE1MID0gYDxzdmdcclxuICAgICAgY2xhc3M9XCJjYXItaW1hZ2VcIlxyXG4gICAgICB2ZXJzaW9uPVwiMS4wXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMTI4MC4wMDAwMDBwdFwiXHJcbiAgICAgIGhlaWdodD1cIjY0MC4wMDAwMDBwdFwiXHJcbiAgICAgIHZpZXdib3g9XCIwIDAgMTI4MC4wMDAwMDAgNjQwLjAwMDAwMFwiXHJcbiAgICAgIHByZXNlcnZlYXNwZWN0cmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcclxuICAgID5cclxuICAgICAgPG1ldGFkYXRhPkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNzwvbWV0YWRhdGE+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDY0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIlxyXG4gICAgICAgIGZpbGw9JHt0aGlzLmNvbG9yfVxyXG4gICAgICAgIHN0cm9rZT1cIm5vbmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzUyNSA1MzQxIGMtNzIgLTE4IC03OSAtMjggLTkwIC0xMjEgLTQgLTMwIC0xMSAtNjIgLTE2IC03MSAtNCAtOVxyXG4gICAtOTcgLTUxIC0yMDYgLTk0IC03NzQgLTMwNCAtMTM0OCAtNTQwIC0xNjAzIC02NjEgLTE2MyAtNzcgLTIyMiAtOTEgLTQyMVxyXG4gICAtMTA0IC04NSAtNSAtMTcwIC0xNCAtMTg5IC0yMCAtMTAxIC0zMiAtMzYyIC01OCAtNjIwIC02MyBsLTExNSAtMiAtNDcgLTgwXHJcbiAgIGMtNDcgLTc4IC00NyAtODAgLTI5IC0xMDAgMzQgLTM2IDM1IC03NyA1IC0xNzcgLTMwIC05OSAtMzQgLTE3OCAtMTkgLTM3MCA1XHJcbiAgIC02NyA0IC04OCAtNiAtODggLTI5IDAgLTgzIC01NiAtMTEwIC0xMTQgLTUwIC0xMDYgLTc0IC0zNDMgLTQ4IC00NjcgMTMgLTU4XHJcbiAgIDEzIC02MiAzIC0xNTkgLTUgLTU0IDE2IC0yMzggMjggLTI0NCAyIC0xIDI5IC0yMCA2MSAtNDEgNzMgLTQ5IDEyMyAtMTAzIDEzMlxyXG4gICAtMTQzIDE3IC03OSAxNjcgLTE1NSAzNTUgLTE4MSAxMDQgLTE1IDk2OSAtOTcgMTA4NyAtMTA0IGwzMiAtMiA1IDE2MCBjNyAyMzBcclxuICAgNTAgMzk0IDE0NiA1NTkgMjgxIDQ3OSA5MTcgNjczIDE0MDUgNDI5IDMxNiAtMTU5IDUzMCAtNDI0IDU5OCAtNzQyIDIyIC0xMDZcclxuICAgMjkgLTM2NSAxMyAtNTE5IGwtOCAtODIgMzAwMiAwIGMyODU1IDAgMzAwMiAxIDI5OTUgMTggLTMzIDg3IC01NiAzMjUgLTQ1XHJcbiAgIDQ2MSAyOCAzMjAgMTc3IDU2NyA0NTkgNzU5IDM5OSAyNzMgODQ3IDI4MiAxMjQzIDI0IDIzOSAtMTU3IDM5NyAtMzkyIDQ2MFxyXG4gICAtNjg3IDE4IC04NCAxNSAtMzQxIC01IC00MzAgLTggLTM4IC0xNCAtNzEgLTEyIC03MyA3IC04IDM4NiAyMCA0NzggMzQgMTgwXHJcbiAgIDI4IDI1MyA2NSAzMDQgMTUyIDI0IDQxIDI4IDU3IDI4IDEyNyAtMSA0NCAtOSAxMTcgLTIwIDE2MyAtMTggNzkgLTE4IDg4IC0yXHJcbiAgIDE5MCAzMSAxOTkgNDAgMzA2IDQxIDQ5NyAxIDE3NiAtMSAxOTUgLTIzIDI2MCAtNDYgMTM1IC0xMDMgMTkwIC0yODMgMjc0XHJcbiAgIC0yMjIgMTA0IC02MzMgMjIwIC0xMTY4IDMzMCAtNTIzIDEwOCAtMTUyNCAyMTAgLTIwNTQgMjExIGwtMjI5IDAgLTIzNiAxMzlcclxuICAgYy04MTMgNDc3IC0xNTkzIDg4NCAtMTg1MiA5NjYgLTQ5OCAxNTcgLTE1OTggMTk1IC0yODkyIDEwMCBsLTE4OCAtMTQgLTQ3IDMwXHJcbiAgIGMtOTIgNTggLTIyMyA4OSAtMjk3IDcweiBtMTkxMiAtMzExIGMxMyAtNDUgNTggLTMwNSA4OCAtNTE1IDMzIC0yMjYgNzQgLTUzOVxyXG4gICA3MSAtNTQyIC03IC03IC0xNjcyIDQwIC0yMDU0IDU4IC0zNTcgMTYgLTQ2NCA1NiAtNTczIDIxNSAtNjIgOTEgLTg3IDIyNSAtNTlcclxuICAgMzI2IDEyIDQwIDU2IDc0IDE5MiAxNDggMzY5IDE5OCA3OTkgMjg5IDE2MTggMzQwIDI0NiAxNSAyOTAgMTYgNTEwIDE2IGwxOTRcclxuICAgLTEgMTMgLTQ1eiBtNjQ5IDEwIGMzODMgLTM2IDcxNyAtODYgOTM0IC0xMzkgMjEwIC01MiA0NTEgLTE2MyA3MjAgLTMzMiAxNDFcclxuICAgLTg4IDM3OSAtMjU5IDM4MCAtMjcxIDAgLTUgLTE0IC04IC0zMiAtOCAtNDggMCAtMTE0IC0zNyAtMTQwIC03OCAtMjQgLTM5XHJcbiAgIC0zMCAtMTEzIC0xNSAtMTg5IGw5IC00MyAtOTA0IDAgLTkwNCAwIC0xNzYgNTQwIC0xNzUgNTQwIDQ3IDAgYzI1IDAgMTQxIC05XHJcbiAgIDI1NiAtMjB6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI2MTcgMzEyNSBjLTQzMSAtODIgLTc3NCAtNDQwIC04MzggLTg3NSAtMTcgLTExNyAtNyAtMjkyIDI0IC00MTBcclxuICAgMTEzIC00MzYgNDk3IC03NTEgOTQ3IC03NzcgNTA3IC0yOSA5NTkgMzEzIDEwNzYgODEzIDI4IDExNyAyNiAzNDggLTQgNDY3XHJcbiAgIC05NCAzNzggLTM4MyA2NzAgLTc2MCA3NjggLTEwNSAyNyAtMzM2IDM0IC00NDUgMTR6IG0zNzggLTMxMCBjODQgLTIxIDIwOVxyXG4gICAtODUgMjgwIC0xNDIgMTE2IC05NCAyMTAgLTI0MiAyNTEgLTM5MyAyMyAtODcgMjQgLTI2MCAwIC0zNTUgLTU4IC0yMzcgLTI0MlxyXG4gICAtNDM5IC00NzMgLTUxOSAtNTMxIC0xODYgLTEwNzQgMjc3IC05NjkgODI4IDMwIDE1MiA5NCAyNzQgMjA2IDM4NiAxMTEgMTEwXHJcbiAgIDIzNyAxNzggMzg1IDIwNiA4NCAxNiAyMzUgMTEgMzIwIC0xMXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMjkxOCAyNTY4IGMyIC05MCA3IC0xNjcgMTIgLTE3MiAxNyAtMTcgMTA4IDU4IDIwMSAxNjYgbDUxIDU3IC00OFxyXG4gICAzMSBjLTUyIDMzIC0xMzEgNjUgLTE4NSA3NSBsLTM0IDYgMyAtMTYzelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yNTkxIDI3MDAgYy02MiAtMjIgLTE2NyAtODIgLTE2NCAtOTQgMyAtMTMgMjM3IC0yMTYgMjQ5IC0yMTYgNyAwXHJcbiAgIDE1IDcgMTggMTYgOCAyMCA4IDEyNyAtMSAyMzIgLTcgOTUgLTggOTYgLTEwMiA2MnpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzIwOSAyMzU1IGMtNTcgLTY0IC0xMDUgLTEyMyAtMTA3IC0xMzEgLTYgLTI1IDQ2IC0zNSAxNTcgLTI5IDU4IDNcclxuICAgMTIxIDggMTM5IDExIDMzIDUgMzQgNiAyNyA0MiAtNyA0NCAtNjQgMTY3IC05MiAyMDEgbC0xOSAyNCAtMTA1IC0xMTh6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIyNjAgMjQwOSBjLTMxIC00NCAtNjggLTEzMyAtNzcgLTE4NiBsLTYgLTMzIDE1NSAwIGMxNjUgMCAyMDEgOVxyXG4gICAxODEgNDQgLTEzIDI0IC0yMDQgMjE2IC0yMTQgMjE2IC01IDAgLTIyIC0xOCAtMzkgLTQxelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yNzg2IDIzNTQgYy0zNiAtMzUgMCAtODcgNDQgLTY0IDI2IDE0IDI2IDU2IDEgNzAgLTI1IDEzIC0yNyAxM1xyXG4gICAtNDUgLTZ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI3NTEgMjE4NiBjLTU3IC0zMiAtNjggLTExMSAtMjIgLTE1NyA0MyAtNDIgMTAxIC00MyAxNDMgLTEgNDIgNDJcclxuICAgNDEgMTAwIC0xIDE0MyAtMzMgMzIgLTc4IDM4IC0xMjAgMTV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI1NjAgMjEzNiBjLTE5IC0yMyAtOCAtNjEgMTggLTY0IDQ0IC03IDY3IDMyIDM2IDYyIC0xOSAyMCAtMzggMjBcclxuICAgLTU0IDJ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTMwMDIgMjEyNCBjLTI3IC0xOSAtMjggLTM2IC0zIC01OCAyNSAtMjMgNjEgLTYgNjEgMjkgMCAzMyAtMzAgNDlcclxuICAgLTU4IDI5elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yMjQ1IDE5OTMgYy03NyAtNiAtNzYgLTUgLTU5IC02NSAxNiAtNTUgNjEgLTE0NiA5MiAtMTg2IGwxOCAtMjNcclxuICAgMTAzIDEyMiBjNTcgNjcgMTA0IDEyOSAxMDUgMTM4IDEgMTQgLTE0IDE2IC0xMDQgMTcgLTU4IDAgLTEyNyAtMSAtMTU1IC0zelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zMTY1IDE5ODEgYy00NCAtNCAtNjEgLTEwIC02MyAtMjIgLTMgLTE2IDIxMCAtMjI5IDIyOCAtMjI5IDIyIDBcclxuICAgODYgMTQxIDEwNSAyMjggbDcgMzIgLTEwOSAtMiBjLTU5IC0xIC0xMzUgLTQgLTE2OCAtN3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMjc3NiAxOTE0IGMtMTkgLTE4IC0xOSAtMjAgLTYgLTQ1IDYgLTExIDIxIC0xOSAzNSAtMTkgMjAgMCA0NSAyNFxyXG4gICA0NSA0NCAwIDEwIC0zMiAzNiAtNDUgMzYgLTcgMCAtMjEgLTcgLTI5IC0xNnpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMjU4OSAxNzQzIGMtODYgLTkwIC0xMzkgLTE1MSAtMTM5IC0xNjIgMCAtMjUgMTc5IC0xMDEgMjM2IC0xMDFcclxuICAgbDI3IDAgLTcgMTQzIGMtOSAxNjYgLTEzIDE4NyAtMzUgMTg3IC05IDAgLTQ2IC0zMCAtODIgLTY3elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0yOTM2IDE4MDEgYy02IC0xMCAtMjQgLTE2OCAtMjkgLTI1OCAtMyAtNjAgLTIgLTYzIDE5IC02MyA3OSAwIDI2MlxyXG4gICA2OCAyNDggOTIgLTUgNyAtNTMgNjQgLTEwOCAxMjYgLTkzIDEwNSAtMTE3IDEyNCAtMTMwIDEwM3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTA3MjMgMzEyNSBjLTMxOCAtNTggLTU5NyAtMjY2IC03NDMgLTU1NSAtMjIzIC00NDEgLTk4IC05OTYgMjg5XHJcbiAgIC0xMjg4IDExMiAtODQgMTg4IC0xMjUgMzExIC0xNjYgMjc0IC05MSA1NDUgLTcwIDgwMiA2MSA1NTIgMjgyIDczNSA5ODMgMzkyXHJcbiAgIDE1MDAgLTIyNSAzMzkgLTY1MSA1MjEgLTEwNTEgNDQ4eiBtMzg1IC0zMTUgYzM0OCAtOTggNTc5IC00NDMgNTMyIC03OTYgLTY3XHJcbiAgIC01MDggLTU5NiAtNzk2IC0xMDU1IC01NzQgLTIzOSAxMTYgLTM5NiAzNTIgLTQxMiA2MjAgLTIwIDMzNSAxOTIgNjQwIDUxNlxyXG4gICA3NDUgMTIyIDQwIDI4OSA0MiA0MTkgNXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTEwMTcgMjU2OCBjMyAtOTAgOSAtMTY3IDE0IC0xNzIgMTMgLTE0IDUzIDE4IDE1NSAxMjIgbDk1IDk3IC0yM1xyXG4gICAxOCBjLTUwIDQwIC0xODkgOTcgLTIzNSA5NyAtMTAgMCAtMTEgLTMzIC02IC0xNjJ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwNzA1IDI3MDYgYy01MCAtMTYgLTEzMyAtNTggLTE2MyAtODIgbC0yMyAtMTkgMTIxIC0xMDcgYzY3IC02MFxyXG4gICAxMjggLTEwOCAxMzUgLTEwOCAyMyAwIDI3IDM5IDIwIDE4NiAtOCAxNjIgLTQgMTU3IC05MCAxMzB6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTExMzA3IDIzNTQgYy01OSAtNjUgLTEwNyAtMTI2IC0xMDcgLTEzNiAwIC0xMSAxMSAtMTggMzggLTIyIDQ0IC03XHJcbiAgIDI3OCA3IDI4OSAxNyAxNSAxNiAtNTEgMTgzIC05NCAyMzYgbC0xOSAyNCAtMTA3IC0xMTl6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwMzYyIDI0MTMgYy0zOSAtNjIgLTcwIC0xMzQgLTc4IC0xODQgbC03IC0zOSAxNTIgMCBjODYgMCAxNjEgNVxyXG4gICAxNzIgMTAgMTcgMTAgMTggMTMgNSAzOCAtOCAxNSAtNTkgNzEgLTExNCAxMjUgbC05OSA5OSAtMzEgLTQ5elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMDg4OCAyMzU5IGMtMjQgLTE0IC0yMyAtNTYgMiAtNjkgNDQgLTIzIDgwIDI5IDQ0IDY0IC0xOCAxOSAtMjNcclxuICAgMTkgLTQ2IDV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwODUxIDIxODcgYy00OSAtMjkgLTY2IC0xMDEgLTM1IC0xNDYgOSAtMTMgMzIgLTI5IDUwIC0zNyAyOSAtMTJcclxuICAgMzkgLTEyIDY4IDAgOTkgNDEgODUgMTgwIC0xOSAxOTIgLTI0IDMgLTUwIC0xIC02NCAtOXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTA2NjAgMjEzNiBjLTE5IC0yMyAtOCAtNjEgMTggLTY0IDQ0IC03IDY3IDMyIDM2IDYyIC0xOSAyMCAtMzggMjBcclxuICAgLTU0IDJ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTExMDk2IDIxMjQgYy05IC04IC0xNiAtMjIgLTE2IC0yOSAwIC0xMyAyNiAtNDUgMzYgLTQ1IDIwIDAgNDQgMjVcclxuICAgNDQgNDUgMCAxNCAtOCAyOSAtMTkgMzUgLTI1IDEzIC0yNyAxMyAtNDUgLTZ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwMzM1IDE5OTEgYy02MCAtNiAtNjAgLTYgLTU3IC0zNiA5IC02OSAxMDQgLTI0OCAxMjIgLTIyOSA1NyA2MVxyXG4gICAyMTAgMjUwIDIwNyAyNTggLTQgMTIgLTE3NiAxNyAtMjcyIDd6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTExMjY3IDE5ODMgYy02OCAtNSAtNzkgLTE5IC00NyAtNjAgMjMgLTMxIDIwMCAtMTkzIDIxMCAtMTkzIDMgMFxyXG4gICAyMCAyNCAzNyA1MyAyOSA0OCA1MiAxMTEgNjcgMTgwIGw2IDI3IC0xMDcgLTIgYy02MCAtMSAtMTM0IC0zIC0xNjYgLTV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwODcwIDE5MTAgYy0xNiAtMzEgNCAtNjIgMzggLTU4IDIxIDIgMjggOSAzMCAzMiA1IDQ1IC00NyA2NSAtNjhcclxuICAgMjZ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEwNjUxIDE3MDMgYy01NiAtNTkgLTEwMSAtMTEzIC0xMDEgLTEyMCAwIC0yOCAxNzIgLTEwMyAyMzcgLTEwM1xyXG4gICBsMjYgMCAtNyAxMjMgYy0xMCAxNzkgLTE1IDIwNyAtMzYgMjA3IC0xMCAwIC02MyAtNDggLTExOSAtMTA3elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMTAzNSAxODAxIGMtNyAtMTIgLTIzIC0xNDQgLTI5IC0yNDMgLTQgLTc3IC00IC03OCAxOSAtNzggNDUgMFxyXG4gICAxMzAgMjIgMTkzIDUxIGw2NCAyOSAtMTkgMjMgYy02NSA4MiAtMTk4IDIyNyAtMjA5IDIyNyAtNyAwIC0xNSAtNCAtMTkgLTl6XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5gO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbGltaXRDYXJzT25QYWdlOiA3LFxyXG4gIGdlbmVyYXRlQ2Fyc051bWJlcjogMTAwLFxyXG4gIGNhck5hbWVzOiBbXHJcbiAgICAnVGVzbGEnLFxyXG4gICAgJ01lcnNlZGVzJyxcclxuICAgICdCTVcnLFxyXG4gICAgJ1RveW90YScsXHJcbiAgICAnWmhpZ3VsaScsXHJcbiAgICAnTW9za3ZpY2gnLFxyXG4gICAgJ09wZWwnLFxyXG4gICAgJ0FzdG9uIE1hcnRpbicsXHJcbiAgICAnUG9yc2hlJyxcclxuICBdLFxyXG4gIGNhck1vZGVsczogWydNb2RlbCBTJywgJ0NMSycsICc3JywgJ0NhbXJ5JywgJ0NvbWJpJywgJzknLCAnQ29yc2EnLCAnREI5JywgJ0NheWVuZSddLFxyXG59O1xyXG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBtb2RlbHMgPSBzZXR0aW5ncy5jYXJNb2RlbHM7XHJcbmNvbnN0IG5hbWVzID0gc2V0dGluZ3MuY2FyTmFtZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmFuZG9tTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbW9kZWw6IHN0cmluZyA9IG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XHJcbiAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XHJcbiAgICByZXR1cm4gYCR7bW9kZWx9ICR7bmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGxldHRlcnM6IHN0cmluZyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcclxuICAgIGxldCBjb2xvcjogc3RyaW5nID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbUNhcnMoKTogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfVtdIHtcclxuICAgIGNvbnN0IG51bWJlciA9IHNldHRpbmdzLmdlbmVyYXRlQ2Fyc051bWJlcjtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobnVtYmVyKVxyXG4gICAgICAuZmlsbCgxKVxyXG4gICAgICAubWFwKCgpID0+ICh7IG5hbWU6IFV0aWxzLmdldFJhbmRvbU5hbWUoKSwgY29sb3I6IFV0aWxzLmdldFJhbmRvbUNvbG9yKCkgfSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc2FibGVCdG5zKGJ0bl9jbGFzczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBidXR0b25zOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShidG5fY2xhc3MpO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgKGJ1dHRvbnNbaV0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBlbmFibGVCdG5zKGJ0bl9jbGFzczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBidXR0b25zOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShidG5fY2xhc3MpO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgKGJ1dHRvbnNbaV0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDYXIgZnJvbSAnLi9jYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmVyIHtcclxuICBwcml2YXRlIGN1cnJlbnRDYXI6IENhcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRXaW5zOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5ld0lkOiBudW1iZXIsIG5ld1dpbnM6IG51bWJlciwgbmV3VGltZTogbnVtYmVyLCBuZXdDYXI6IENhcikge1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSBuZXdJZDtcclxuICAgIHRoaXMuY3VycmVudFdpbnMgPSBuZXdXaW5zO1xyXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgICB0aGlzLmN1cnJlbnRDYXIgPSBuZXdDYXI7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FyKCk6IENhciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNhcihuZXdDYXI6IENhcikge1xyXG4gICAgdGhpcy5jdXJyZW50Q2FyID0gbmV3Q2FyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaWQobmV3SWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSBuZXdJZDtcclxuICB9XHJcblxyXG4gIGdldCB3aW5zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50V2lucztcclxuICB9XHJcblxyXG4gIHNldCB3aW5zKG5ld1dpbnM6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50V2lucyA9IG5ld1dpbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdGltZShuZXdUaW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvY2FyJztcclxuaW1wb3J0IFdpbm5lciBmcm9tICcuLi9idXNpbmVzc0xheWVyL3dpbm5lcic7XHJcblxyXG5jb25zdCBiYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5jb25zdCBnYXJhZ2UgPSBgJHtiYXNlfS9nYXJhZ2VgO1xyXG5jb25zdCBlbmdpbmUgPSBgJHtiYXNlfS9lbmdpbmVgO1xyXG5jb25zdCB3aW5uZXJzID0gYCR7YmFzZX0vd2lubmVyc2A7XHJcblxyXG5jb25zdCBnZXRTb3J0T3JkZXIgPSAoc29ydDogc3RyaW5nLCBvcmRlcjogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKHNvcnQgJiYgb3JkZXIpIHJldHVybiBgJl9zb3J0PSR7c29ydH0mX29yZGVyPSR7b3JkZXJ9YDtcclxuICByZXR1cm4gJyc7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhckRhbyB7XHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDYXJzKFxyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgbGltaXQ6IG51bWJlciA9IDcsXHJcbiAgKTogUHJvbWlzZTx7IGNhcnM6IENhcltdOyBjb3VudDogbnVtYmVyIH0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dhcmFnZX0/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH1gKTtcclxuICAgIGNvbnN0IHNlcnZlckNhcnM6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBpZDogbnVtYmVyIH1bXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGNhcnM6IENhcltdID0gW107XHJcblxyXG4gICAgc2VydmVyQ2Fycy5mb3JFYWNoKChlbDogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmc7IGlkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXI6IENhciA9IG5ldyBDYXIoZWwubmFtZSwgZWwuY29sb3IsIGVsLmlkKTtcclxuICAgICAgY2Fycy5wdXNoKG5ld0Nhcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJzLFxyXG4gICAgICBjb3VudDogK3Jlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50JyksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDYXIoaWQ6IG51bWJlcik6IFByb21pc2U8eyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmc7IGlkOiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtnYXJhZ2V9LyR7aWR9YCkpLmpzb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQ2FyKGJvZHk6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0pOiBQcm9taXNlPENhcj4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2FyYWdlLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNlcnZlckNhcjogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmc7IGlkOiBudW1iZXIgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdDYXI6IENhciA9IG5ldyBDYXIoc2VydmVyQ2FyLm5hbWUsIHNlcnZlckNhci5jb2xvciwgc2VydmVyQ2FyLmlkKTtcclxuICAgIHJldHVybiBuZXdDYXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbGV0ZUNhcihpZDogbnVtYmVyKTogUHJvbWlzZTx7fT4ge1xyXG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaChgJHtnYXJhZ2V9LyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pKS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcihcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgY29sb3I6IHN0cmluZztcclxuICAgIH0sXHJcbiAgKTogUHJvbWlzZTx7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZzsgaWQ6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhd2FpdCBmZXRjaChgJHtnYXJhZ2V9LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgKS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YXJ0RW5naW5lKGlkOiBudW1iZXIpOiBQcm9taXNlPHsgdmVsb2NpdHk6IG51bWJlcjsgZGlzdGFuY2U6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke2VuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPXN0YXJ0ZWRgKSkuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBzdG9wRW5naW5lKGlkOiBudW1iZXIpOiBQcm9taXNlPHsgdmVsb2NpdHk6IG51bWJlcjsgZGlzdGFuY2U6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke2VuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgKSkuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBkcml2ZShpZDogbnVtYmVyKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtlbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1kcml2ZWApLmNhdGNoKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwID8geyBzdWNjZXNzOiBmYWxzZSB9IDogeyAuLi4oYXdhaXQgcmVzcG9uc2UuanNvbigpKSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRXaW5uZXJzKFxyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgbGltaXQ6IG51bWJlciA9IDEwLFxyXG4gICAgc29ydDogc3RyaW5nLFxyXG4gICAgb3JkZXI6IHN0cmluZyxcclxuICApOiBQcm9taXNlPHsgd2lubmVyczogV2lubmVyW107IGNvdW50OiBudW1iZXIgfT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3dpbm5lcnN9P19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7bGltaXR9JHtnZXRTb3J0T3JkZXIoc29ydCwgb3JkZXIpfWAsXHJcbiAgICApO1xyXG4gICAgY29uc3QgaXRlbXM6IHsgaWQ6IG51bWJlcjsgd2luczogbnVtYmVyOyB0aW1lOiBudW1iZXIgfVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogeyB3aW5uZXJzOiBXaW5uZXJbXTsgY291bnQ6IG51bWJlciB9ID0geyB3aW5uZXJzOiBbXSwgY291bnQ6IG51bGwgfTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKGFzeW5jIChlbCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXJPYmo6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBpZDogbnVtYmVyIH0gPSBhd2FpdCBDYXJEYW8uZ2V0Q2FyKGVsLmlkKTtcclxuICAgICAgY29uc3QgbmV3Q2FyOiBDYXIgPSBuZXcgQ2FyKG5ld0Nhck9iai5uYW1lLCBuZXdDYXJPYmouY29sb3IsIG5ld0Nhck9iai5pZCk7XHJcblxyXG4gICAgICBjb25zdCBuZXdXaW5uZXI6IFdpbm5lciA9IG5ldyBXaW5uZXIoZWwuaWQsIGVsLndpbnMsIGVsLnRpbWUsIG5ld0Nhcik7XHJcbiAgICAgIHJlc3VsdC53aW5uZXJzLnB1c2gobmV3V2lubmVyKTtcclxuICAgIH0pO1xyXG4gICAgcmVzdWx0LmNvdW50ID0gK3Jlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICBpdGVtczogYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAvLyAgICAgaXRlbXMubWFwKGFzeW5jICh3aW5uZXI6IHsgaWQ6IG51bWJlcjsgd2luczogbnVtYmVyOyB0aW1lOiBudW1iZXIgfSkgPT4gKFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgLi4ud2lubmVyLFxyXG4gICAgLy8gICAgICAgY2FyOiBhd2FpdCBDYXJEYW8uZ2V0Q2FyKHdpbm5lci5pZCksXHJcbiAgICAvLyAgICAgfSkpLFxyXG4gICAgLy8gICApLFxyXG4gICAgLy8gICBjb3VudDogcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gY29uc3QgY2FyczogQ2FyW10gPSBbXTtcclxuICAgIC8vIHJlc3BvbnNlVmFsdWUuaXRlbXMuZm9yRWFjaCgoZWw6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBpZDogbnVtYmVyIH0pID0+IHtcclxuICAgIC8vICAgY29uc3QgbmV3Q2FyOiBDYXIgPSBuZXcgQ2FyKGVsLm5hbWUsIGVsLmNvbG9yLCBlbC5pZCk7XHJcbiAgICAvLyAgIGNhcnMucHVzaChuZXdDYXIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFdpbm5lcihpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKGAke3dpbm5lcnN9LyR7aWR9YCkpLmpzb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0V2lubmVyU3RhdHVzKGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoYXdhaXQgZmV0Y2goYCR7d2lubmVyc30vJHtpZH1gKSkuc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxldGVXaW5uZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgKGF3YWl0IGZldGNoKGAke3dpbm5lcnN9LyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pKS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZVdpbm5lcihib2R5OiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgd2luczogbnVtYmVyO1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG4gIH0pOiBQcm9taXNlPHsgaWQ6IG51bWJlcjsgd2luczogbnVtYmVyOyB0aW1lOiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgYXdhaXQgZmV0Y2god2lubmVycywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICkuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyB1cGRhdGVXaW5uZXIoXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgYm9keTogeyBpZDogbnVtYmVyOyB3aW5zOiBudW1iZXI7IHRpbWU6IG51bWJlciB9LFxyXG4gICk6IFByb21pc2U8eyB3aW5zOiBudW1iZXI7IHRpbWU6IG51bWJlcjsgaWQ6IG51bWJlciB9IHwge30+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGF3YWl0IGZldGNoKGAke3dpbm5lcnN9LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgKS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIHNhdmVXaW5uZXIobmV3SWQ6IG51bWJlciwgbmV3VGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB3aW5uZXJTdGF0dXMgPSBhd2FpdCB0aGlzLmdldFdpbm5lclN0YXR1cyhuZXdJZCk7XHJcblxyXG4gICAgaWYgKHdpbm5lclN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV2lubmVyKHsgaWQ6IG5ld0lkLCB3aW5zOiAxLCB0aW1lOiBuZXdUaW1lIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgd2lubmVyOiB7IGlkOiBudW1iZXI7IHdpbnM6IG51bWJlcjsgdGltZTogbnVtYmVyIH0gPSBhd2FpdCB0aGlzLmdldFdpbm5lcihuZXdJZCk7XHJcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlV2lubmVyKG5ld0lkLCB7XHJcbiAgICAgICAgaWQ6IG5ld0lkLFxyXG4gICAgICAgIHdpbnM6IHdpbm5lci53aW5zICsgMSxcclxuICAgICAgICB0aW1lOiBuZXdUaW1lIDwgd2lubmVyLnRpbWUgPyBuZXdUaW1lIDogd2lubmVyLnRpbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FyYWdlIGZyb20gJy4vcHJlc2VudGF0aW9uTGF5ZXIvZ2FyYWdlJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4vcHJlc2VudGF0aW9uTGF5ZXIvc3RvcmUnO1xyXG5cclxuY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcbmNvbnN0IGZpbmlzaEluZGVudDogbnVtYmVyID0gMjg1O1xyXG5cclxuc3RvcmUuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xyXG4gIHN0b3JlLnJvb3QgPSByb290Tm9kZTtcclxuICBjb25zdCBnYXJhZ2UgPSBuZXcgR2FyYWdlKHJvb3ROb2RlLCBzdG9yZSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBnYXJhZ2UucmVuZGVyKCk7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgc3RvcmUuZGlzdGFuY2UgPSB3aWR0aCAtIGZpbmlzaEluZGVudDtcclxuICB9LCA1MDApO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBzdG9yZS5kaXN0YW5jZSA9IHdpZHRoIC0gZmluaXNoSW5kZW50O1xyXG59KTtcclxuIiwiaW1wb3J0IENhciBmcm9tICcuLi9idXNpbmVzc0xheWVyL2Nhcic7XHJcbmltcG9ydCBDYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VMYXllci9jYXJTZXJ2aWNlJztcclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBSYWNlIGZyb20gJy4vcmFjZSc7XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvc2V0dGluZ3MnO1xyXG5pbXBvcnQgTW9kYWxXaW5uZXIgZnJvbSAnLi9tb2RhbFdpbm5lcic7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9idXNpbmVzc0xheWVyL3V0aWxzJztcclxuaW1wb3J0IFdpbm5lcnMgZnJvbSAnLi93aW5uZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcmFnZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvbjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuVG9HYXJhZ2U6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJ0blRvV2lubmVyczogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuUHJldjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuTmV4dDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgcmFjZVBhZ2U6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJ0bkNyZWF0ZUNhcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuVXBkYXRlQ2FyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXJJbnB1dE5hbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2FySW5wdXROYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNhcklucHV0Q29sb3I6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2FySW5wdXRDb2xvcjogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBidG5HZW5lcmF0ZWNhcnM6IEhUTUxCUkVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBidG5SYWNlOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGJ0blJlc2V0OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSB3aW5uZXJJbnRlcnZhbDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJhY2VzUm9vdDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm9vdDogRWxlbWVudCwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHtcclxuICAgIHRoaXMuYXBwbGljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uLmlubmVySFRNTCA9IGA8bWFpbj5cclxuICAgIDxidXR0b24gaWQ9XCJidG5fdG9fZ2FyYWdlXCI+VE8gR0FSQUdFPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiYnRuX3RvX3dpbm5lcnNcIj5UTyBXSU5ORVJTPC9idXR0b24+XHJcbiAgICA8ZGl2IGlkPVwiZ2FyYWdlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIGlkPVwiY29udGVudFwiPlxyXG4gICAgPGZvcm0gaWQ9XCJjcmVhdGVfY2FyX2Zvcm1cIiBjbGFzcz1cImNhcl9mb3JtXCIgb25zdWJtaXQ9XCJyZXR1cm4gZmFsc2VcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkNhcjwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICA8aW5wdXQgbWF4bGVuZ3RoPVwiMjBcIiBjbGFzcz1cImNhcl9pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjcmVhdGVfY2FyX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJDQVIgTkFNRVwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiY3JlYXRlX2Nhcl9jb2xvcl9pbnB1dFwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9hZGRfdXNlclwiIGlkPVwiYnRuX2NyZWF0ZV9jYXJcIj5DUkVBVEU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8Zm9ybSBpZD1cInVwZGF0ZV9jYXJfZm9ybVwiIGNsYXNzPVwiY2FyX2Zvcm1cIiBvbnN1Ym1pdD1cInJldHVybiBmYWxzZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XCIyMFwiIGNsYXNzPVwiY2FyX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInVwZGF0ZV9jYXJfaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkNBUiBOQU1FXCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJ1cGRhdGVfY2FyX2NvbG9yX2lucHV0XCIgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX2FkZF91c2VyXCIgaWQ9XCJidG5fdXBkYXRlX2NhclwiPlVQREFURTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcl9pbnB1dFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fYWRkX3VzZXJcIiBpZD1cImJ0bl9yYWNlXCI+UkFDRTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fYWRkX3VzZXJcIiBkaXNhYmxlZCBpZD1cImJ0bl9yZXNldFwiPlJFU0VUPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9hZGRfdXNlclwiIGlkPVwiYnRuX2dlbmVyYXRlX2NhcnNcIj5HRU5FUkFURSBDQVJTPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZVwiPkdhcmFnZSAoJHt0aGlzLnN0b3JlLmNhcnNDb3VudH0pPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZVwiPlBhZ2UgIyR7dGhpcy5zdG9yZS5jYXJzUGFnZX08L3A+XHJcbiAgICA8ZGl2IGlkPVwiZ2FyYWdlUGFnZVwiPjwvZGl2PlxyXG4gICAgPGJ1dHRvbiAke3RoaXMuc3RvcmUuY2Fyc1BhZ2UgPD0gMSA/ICdkaXNhYmxlZCcgOiAnJ30gaWQ9XCJidG5fcHJldlwiPlBSRVY8L2J1dHRvbj5cclxuICAgIDxidXR0b24gJHtcclxuICAgICAgdGhpcy5zdG9yZS5jYXJzUGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuY2Fyc0NvdW50IC8gNykgPyAnZGlzYWJsZWQnIDogJydcclxuICAgIH0gaWQ9XCJidG5fbmV4dFwiPk5FWFQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYWluPmA7XHJcblxyXG4gICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5hcHBsaWNhdGlvbik7XHJcbiAgICAgIHRoaXMucmFjZXNSb290ID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjZ2FyYWdlJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyUmFjZVBhZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuYnRuVG9HYXJhZ2UgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNidG5fdG9fZ2FyYWdlJyk7XHJcbiAgICAgIHRoaXMuYnRuVG9XaW5uZXJzID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjYnRuX3RvX3dpbm5lcnMnKTtcclxuXHJcbiAgICAgIHRoaXMuYnRuUHJldiA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2J0bl9wcmV2Jyk7XHJcbiAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2J0bl9uZXh0Jyk7XHJcblxyXG4gICAgICB0aGlzLmJ0bkNyZWF0ZUNhciA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2J0bl9jcmVhdGVfY2FyJyk7XHJcbiAgICAgIHRoaXMuYnRuVXBkYXRlQ2FyID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjYnRuX3VwZGF0ZV9jYXInKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlQ2FySW5wdXROYW1lID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlX2Nhcl9pbnB1dCcpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNhcklucHV0TmFtZSA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI3VwZGF0ZV9jYXJfaW5wdXQnKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlQ2FySW5wdXRDb2xvciA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2NyZWF0ZV9jYXJfY29sb3JfaW5wdXQnKTtcclxuICAgICAgdGhpcy51cGRhdGVDYXJJbnB1dENvbG9yID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlX2Nhcl9jb2xvcl9pbnB1dCcpO1xyXG5cclxuICAgICAgdGhpcy5idG5HZW5lcmF0ZWNhcnMgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNidG5fZ2VuZXJhdGVfY2FycycpO1xyXG4gICAgICB0aGlzLmJ0blJhY2UgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNidG5fcmFjZScpO1xyXG4gICAgICB0aGlzLmJ0blJlc2V0ID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcjYnRuX3Jlc2V0Jyk7XHJcblxyXG4gICAgICB0aGlzLmFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb247XHJcbiAgfVxyXG5cclxuICBhZGRCdXR0b25MaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBnYXJhZ2VQYWdlOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjZ2FyYWdlJyk7XHJcblxyXG4gICAgdGhpcy5idG5Ub0dhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5idG5Ub0dhcmFnZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnRuVG9XaW5uZXJzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RvcmUudmlldyA9ICdnYXJhZ2UnO1xyXG4gICAgICBnYXJhZ2VQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBjb25zdCB3aW5uZXJzUGFnZTogSFRNTERpdkVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI3dpbm5lcnMnKTtcclxuICAgICAgdGhpcy5yb290LnJlbW92ZUNoaWxkKHdpbm5lcnNQYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYnRuVG9XaW5uZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmJ0blRvR2FyYWdlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnRuVG9XaW5uZXJzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdG9yZS52aWV3ID0gJ3dpbm5lcnMnO1xyXG4gICAgICBnYXJhZ2VQYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMuc3RvcmUudXBkYXRlU3RvcmVXaW5uZXJzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5ldyBXaW5uZXJzKHRoaXMucm9vdCwgdGhpcy5zdG9yZSkucmVuZGVyKCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJ0bkNyZWF0ZUNhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY3JlYXRlQ2FyKCkpO1xyXG4gICAgdGhpcy5idG5VcGRhdGVDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZUNhcigpKTtcclxuXHJcbiAgICB0aGlzLmJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuY2Fyc1BhZ2UgLT0gMTtcclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZUNhcnMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlVmlldygpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5jYXJzUGFnZSArPSAxO1xyXG4gICAgICB0aGlzLnN0b3JlLnVwZGF0ZVN0b3JlQ2FycygpLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5idG5HZW5lcmF0ZWNhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuY2Fyc0NvdW50ICs9IHNldHRpbmdzLmdlbmVyYXRlQ2Fyc051bWJlcjtcclxuICAgICAgQ2FyU2VydmljZS5nZW5lcmF0ZVJhbmRvbUNhcnMoKS50aGVuKCgpID0+XHJcbiAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZUNhcnMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlVmlldygpKSxcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYnRuUmFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgVXRpbHMuZW5hYmxlQnRucygnYnRuX2InKTtcclxuICAgICAgVXRpbHMuZGlzYWJsZUJ0bnMoJ2J0bl9hJyk7XHJcbiAgICAgIFV0aWxzLmRpc2FibGVCdG5zKCdidG5fc2VsZWN0Jyk7XHJcbiAgICAgIFV0aWxzLmRpc2FibGVCdG5zKCdidG5fcmVtb3ZlJyk7XHJcbiAgICAgIHRoaXMuYnRuUmFjZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnRuUmVzZXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgYXdhaXQgdGhpcy5yYWNlQWxsQ2FycygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5idG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgVXRpbHMuZGlzYWJsZUJ0bnMoJ2J0bl9iJyk7XHJcbiAgICAgIFV0aWxzLmVuYWJsZUJ0bnMoJ2J0bl9zZWxlY3QnKTtcclxuICAgICAgVXRpbHMuZW5hYmxlQnRucygnYnRuX3JlbW92ZScpO1xyXG4gICAgICB0aGlzLmJ0blJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5idG5SYWNlLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoaW5nX2J0bicpO1xyXG4gICAgICBhd2FpdCB0aGlzLnN0b3BSYWNlKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYnRuUmFjZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuUmFjZS5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZ19idG4nKTtcclxuICAgICAgICBVdGlscy5lbmFibGVCdG5zKCdidG5fYScpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUmFjZVBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnJhY2VQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB7IGNhcnMgfSA9IHRoaXMuc3RvcmU7XHJcblxyXG4gICAgY2Fycy5mb3JFYWNoKChlbCkgPT4gbmV3IFJhY2UodGhpcy5yYWNlUGFnZSwgZWwsIHRoaXMuc3RvcmUsIHRoaXMpLnJlbmRlcigpKTtcclxuICAgIHRoaXMucmFjZXNSb290LmFwcGVuZENoaWxkKHRoaXMucmFjZVBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5hcHBsaWNhdGlvbikge1xyXG4gICAgICB0aGlzLnJhY2VzUm9vdC5yZW1vdmVDaGlsZCh0aGlzLnJhY2VQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhcjogQ2FyID0gdGhpcy5zdG9yZS5zZWxlY3RlZENhcjtcclxuICAgIGlmICghY2FyKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2FySW5wdXROYW1lLnNldEN1c3RvbVZhbGlkaXR5KCdObyBjYXJzIHNlbGVjdGVkIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjYXIubmFtZSA9IHRoaXMudXBkYXRlQ2FySW5wdXROYW1lLnZhbHVlO1xyXG4gICAgY2FyLmNvbG9yID0gdGhpcy51cGRhdGVDYXJJbnB1dENvbG9yLnZhbHVlO1xyXG4gICAgQ2FyU2VydmljZS51cGRhdGVDYXIoY2FyLmlkLCB7IG5hbWU6IGNhci5uYW1lLCBjb2xvcjogY2FyLmNvbG9yIH0pLnRoZW4oKCkgPT5cclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZUNhcnMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlVmlldygpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVDYXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBuZXdOYW1lOiBzdHJpbmcgPSB0aGlzLmNyZWF0ZUNhcklucHV0TmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0NvbG9yOiBzdHJpbmcgPSB0aGlzLmNyZWF0ZUNhcklucHV0Q29sb3IudmFsdWU7XHJcbiAgICBpZiAobmV3TmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jcmVhdGVDYXJJbnB1dE5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ05hbWUgc2hvdWxkIGJlIGZ1bGxmaWxsZWQhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlQ2FySW5wdXROYW1lLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuXHJcbiAgICBhd2FpdCBDYXJTZXJ2aWNlLmNyZWF0ZUNhcih7IG5hbWU6IG5ld05hbWUsIGNvbG9yOiBuZXdDb2xvciB9KTtcclxuICAgIHRoaXMuc3RvcmUuY2Fyc0NvdW50ICs9IDE7XHJcbiAgICB0aGlzLnN0b3JlLnVwZGF0ZVN0b3JlQ2FycygpLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmFjZUFsbENhcnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB7IGNhcnMgfSA9IHRoaXMuc3RvcmU7XHJcbiAgICB0aGlzLmxpc3RlblRvV2lubmVyKCk7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2Fycy5tYXAoXHJcbiAgICAgICAgYXN5bmMgKGNhcik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgICAgY2FyLmlzRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGNhci5pc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0RW5naW5lUmVzcDoge1xyXG4gICAgICAgICAgICB2ZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogbnVtYmVyO1xyXG4gICAgICAgICAgfSA9IGF3YWl0IENhclNlcnZpY2Uuc3RhcnRFbmdpbmUoY2FyLmlkKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSBzdGFydEVuZ2luZVJlc3A7XHJcbiAgICAgICAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSBzdGFydEVuZ2luZVJlc3A7XHJcbiAgICAgICAgICBjb25zdCB0aW1lOiBudW1iZXIgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gdmVsb2NpdHkpO1xyXG5cclxuICAgICAgICAgIGlmICh0aW1lKSB7XHJcbiAgICAgICAgICAgIGNhci5hbmltYXRpb25JZCA9IGNhci5hbmltYXRlKHRpbWUsIHRoaXMuc3RvcmUuZGlzdGFuY2UpO1xyXG4gICAgICAgICAgfSBlbHNlIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBkcml2ZVJlc3A6IHsgc3VjY2VzczogYm9vbGVhbiB9ID0gYXdhaXQgQ2FyU2VydmljZS5kcml2ZShjYXIuaWQpO1xyXG4gICAgICAgICAgaWYgKCFkcml2ZVJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoY2FyLmFuaW1hdGlvbklkLmlkKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhci5pc0ZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FyLnRpbWUgPSB0aW1lIC8gMTAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN0b3BSYWNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5zdG9yZS5jYXJzLmZvckVhY2goKGNhcikgPT4ge1xyXG4gICAgICBjYXIuaXNGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgY2xlYXJJbnRlcnZhbCh0aGlzLndpbm5lckludGVydmFsKTtcclxuICAgIHRoaXMuc3RvcmUuY2Fycy5mb3JFYWNoKGFzeW5jIChjYXIpID0+IHtcclxuICAgICAgYXdhaXQgQ2FyU2VydmljZS5zdG9wRW5naW5lKGNhci5pZCk7XHJcbiAgICAgIGxldCBpZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge30pO1xyXG4gICAgICB3aGlsZSAoaWQgPj0gMCkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XHJcbiAgICAgICAgaWQgLT0gMTtcclxuICAgICAgfVxyXG4gICAgICBjYXIuaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMClgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5Ub1dpbm5lcigpOiB2b2lkIHtcclxuICAgIHRoaXMud2lubmVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmNhcnMuZm9yRWFjaChhc3luYyAoY2FyKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhci5pc0ZpbmlzaGVkICYmICFjYXIuaXNTdG9wcGVkKSB7XHJcbiAgICAgICAgICBuZXcgTW9kYWxXaW5uZXIodGhpcy5yb290LCBjYXIpLnNob3coKTtcclxuICAgICAgICAgIENhclNlcnZpY2Uuc2F2ZVdpbm5lcihjYXIuaWQsIGNhci50aW1lKTtcclxuICAgICAgICAgIC8vIHRoaXMuc3RvcmUud2lubmVyc0NvdW50ICs9IDE7XHJcbiAgICAgICAgICBhd2FpdCBjbGVhckludGVydmFsKHRoaXMud2lubmVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvY2FyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV2lubmVyIHtcclxuICBtb2RhbFdpbmRvdzogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGJ0bkNsb3NlTW9kYWw6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvb3Q6IEVsZW1lbnQsIGNhcjogQ2FyKSB7XHJcbiAgICB0aGlzLm1vZGFsV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm1vZGFsV2luZG93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbFdpbm5lclwiIGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgIDxwPldpbm5lciE8L3A+XHJcbiAgICAgICAgICAgICAgIDxwPkNhciBuYW1lOiAke2Nhci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgPHA+VGltZTogJHtjYXIudGltZX0gc2VjPC9wPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfYnRuXCIgaWQ9XCJjbG9zZV9tb2RhbF93aW5uZXJfYnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIHRoaXMuYnRuQ2xvc2VNb2RhbCA9IHRoaXMubW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignI2Nsb3NlX21vZGFsX3dpbm5lcl9idG4nKTtcclxuICAgIHRoaXMuYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICB0aGlzLnJvb3QucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbFdpbmRvdyk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMubW9kYWxXaW5kb3cpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvY2FyJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvdXRpbHMnO1xyXG5pbXBvcnQgQ2FyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlTGF5ZXIvY2FyU2VydmljZSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IEdhcmFnZSBmcm9tICcuL2dhcmFnZSc7XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb246IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJ0blNlbGVjdDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuUmVtb3ZlOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBidG5BOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBidG5COiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgLy8gcHJpdmF0ZSBhbmltYXRpb25JZDogeyBpZDogbnVtYmVyIH0gPSB7IGlkOiAwIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByb290OiBFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBjYXI6IENhcixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBnYXJhZ2U6IEdhcmFnZSxcclxuICApIHtcclxuICAgIHRoaXMuYXBwbGljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuYnRuU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ0blJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idG5BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ0bkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicmFjZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhci1wYW5lbFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX2FkZF91c2VyIGJ0bl9zZWxlY3RcIiBpZD1cInNlbGVjdC1jYXItJHt0aGlzLmNhci5pZH1cIj5TRUxFQ1Q8L2J1dHRvbj4gIFxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX2FkZF91c2VyIGJ0bl9yZW1vdmVcIiBpZD1cInJlbW92ZS1jYXItJHt0aGlzLmNhci5pZH1cIj5SRU1PVkU8L2J1dHRvbj5cclxuICAgICAgPHA+JHt0aGlzLmNhci5uYW1lfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhci1wYW5lbFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJhY2UtYnRuIGJ0bl9hXCIsIGlkPVwiYnRuLXN0YXJ0LSR7dGhpcy5jYXIuaWR9XCI+QTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJhY2UtYnRuIGJ0bl9iXCIgaWQ9XCJidG4tc3RvcC0ke3RoaXMuY2FyLmlkfVwiIGRpc2FibGVkPkI8L2J1dHRvbj5cclxuICAgIDxkaXYgaWQ9XCJjYXItaW1hZ2UtJHt0aGlzLmNhci5pZH1cIiBjbGFzcz1cImNhcl9pbWFnZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmluaXNoXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICAgIHRoaXMuYnRuU2VsZWN0ID0gdGhpcy5hcHBsaWNhdGlvbi5xdWVyeVNlbGVjdG9yKGAjc2VsZWN0LWNhci0ke3RoaXMuY2FyLmlkfWApO1xyXG4gICAgdGhpcy5idG5SZW1vdmUgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoYCNyZW1vdmUtY2FyLSR7dGhpcy5jYXIuaWR9YCk7XHJcbiAgICB0aGlzLmJ0bkEgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoYCNidG4tc3RhcnQtJHt0aGlzLmNhci5pZH1gKTtcclxuICAgIHRoaXMuYnRuQiA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcihgI2J0bi1zdG9wLSR7dGhpcy5jYXIuaWR9YCk7XHJcblxyXG4gICAgY29uc3QgY2FyUm9vdCA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcihgI2Nhci1pbWFnZS0ke3RoaXMuY2FyLmlkfWApO1xyXG4gICAgY2FyUm9vdC5hcHBlbmRDaGlsZCh0aGlzLmNhci5yZW5kZXIoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5hcHBsaWNhdGlvbik7XHJcbiAgICAgIHRoaXMuYWRkQnRuTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb247XHJcbiAgfVxyXG5cclxuICBhZGRCdG5MaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmJ0blNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3RlZENhciA9IHRoaXMuY2FyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5idG5SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB0aGlzLnJlbW92ZUNhcigpKTtcclxuXHJcbiAgICB0aGlzLmJ0bkEuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnRSYWNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYnRuQi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnY2xpY2snLFxyXG4gICAgICBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9wUmFjZSgpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcmUuY2Fyc0NvdW50IC09IDE7XHJcbiAgICB0aGlzLnN0b3JlLndpbm5lcnNDb3VudCAtPSAxO1xyXG4gICAgQ2FyU2VydmljZS5kZWxldGVDYXIodGhpcy5jYXIuaWQpLnRoZW4oKCkgPT5cclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZUNhcnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN0b3JlLnJvb3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5nYXJhZ2UucmVuZGVyKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICAgIENhclNlcnZpY2UuZGVsZXRlV2lubmVyKHRoaXMuY2FyLmlkKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHN0YXJ0UmFjZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHN0YXJ0RW5naW5lUmVzcDoge1xyXG4gICAgICB2ZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgICBkaXN0YW5jZTogbnVtYmVyO1xyXG4gICAgfSA9IGF3YWl0IENhclNlcnZpY2Uuc3RhcnRFbmdpbmUodGhpcy5jYXIuaWQpO1xyXG5cclxuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHN0YXJ0RW5naW5lUmVzcDtcclxuICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IHN0YXJ0RW5naW5lUmVzcDtcclxuICAgIGNvbnN0IHRpbWU6IG51bWJlciA9IGRpc3RhbmNlIC8gdmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRpbWUpIHtcclxuICAgICAgdGhpcy5idG5BLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5idG5CLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnRuU2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5idG5SZW1vdmUuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jYXIuYW5pbWF0aW9uSWQgPSB0aGlzLmNhci5hbmltYXRlKHRpbWUsIHRoaXMuc3RvcmUuZGlzdGFuY2UpO1xyXG4gICAgfSBlbHNlIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcml2ZVJlc3A6IHsgc3VjY2VzczogYm9vbGVhbiB9ID0gYXdhaXQgQ2FyU2VydmljZS5kcml2ZSh0aGlzLmNhci5pZCk7XHJcblxyXG4gICAgaWYgKCFkcml2ZVJlc3Auc3VjY2Vzcykge1xyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jYXIuYW5pbWF0aW9uSWQuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3RvcFJhY2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBDYXJTZXJ2aWNlLnN0b3BFbmdpbmUodGhpcy5jYXIuaWQpO1xyXG4gICAgdGhpcy5idG5CLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYnRuQS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5idG5TZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYnRuUmVtb3ZlLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY2FyLmFuaW1hdGlvbklkLmlkKTtcclxuICAgIHRoaXMuY2FyLmlzU3RvcHBlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNhci5pbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwKWA7XHJcbiAgICB0aGlzLmNoZWNrQWxsQ2Fyc0lzU3RvcHBlZCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbGxDYXJzSXNTdG9wcGVkKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0b3JlLmNhcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0b3JlLmNhcnNbaV0uaXNTdG9wcGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhcmFnZS5idG5SYWNlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhcmFnZS5idG5SZXNldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDYXIgZnJvbSAnLi4vYnVzaW5lc3NMYXllci9jYXInO1xyXG5pbXBvcnQgV2lubmVyIGZyb20gJy4uL2J1c2luZXNzTGF5ZXIvd2lubmVyJztcclxuaW1wb3J0IENhclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZUxheWVyL2NhclNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG4gIHB1YmxpYyBjYXJzUGFnZTogbnVtYmVyID0gMTtcclxuXHJcbiAgcHVibGljIGNhcnM6IENhcltdO1xyXG5cclxuICBwdWJsaWMgd2lubmVyczogV2lubmVyW107XHJcblxyXG4gIHB1YmxpYyBjYXJzQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHdpbm5lcnNDb3VudDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgd2lubmVyc1BhZ2U6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZENhcjogQ2FyO1xyXG5cclxuICBwdWJsaWMgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyB2aWV3OiBzdHJpbmcgPSAnZ2FyYWdlJztcclxuXHJcbiAgcHVibGljIHNvcnRCeTogc3RyaW5nID0gJ3RpbWUnO1xyXG5cclxuICBwdWJsaWMgc29ydE9yZGVyOiBzdHJpbmcgPSAnQVNDJztcclxuXHJcbiAgcHVibGljIGRpc3RhbmNlOiBudW1iZXIgPSAxNDEwO1xyXG5cclxuICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgY29uc3QgY2Fyc1Jlc3A6IHtcclxuICAgICAgY2FyczogQ2FyW107XHJcbiAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB9ID0gYXdhaXQgQ2FyU2VydmljZS5nZXRDYXJzKDEpO1xyXG5cclxuICAgIHRoaXMuY2FycyA9IGNhcnNSZXNwLmNhcnM7XHJcbiAgICB0aGlzLmNhcnNDb3VudCA9IGNhcnNSZXNwLmNvdW50O1xyXG5cclxuICAgIGNvbnN0IHdpbm5lcnNSZXNwID0gYXdhaXQgQ2FyU2VydmljZS5nZXRXaW5uZXJzKDEsIDEwLCB0aGlzLnNvcnRCeSwgdGhpcy5zb3J0T3JkZXIpO1xyXG5cclxuICAgIHRoaXMud2lubmVyc0NvdW50ID0gd2lubmVyc1Jlc3AuY291bnQ7XHJcbiAgICB0aGlzLndpbm5lcnMgPSB3aW5uZXJzUmVzcC53aW5uZXJzO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlU3RvcmVDYXJzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VDYXJzOiBDYXJbXSA9IChhd2FpdCBDYXJTZXJ2aWNlLmdldENhcnModGhpcy5jYXJzUGFnZSkpLmNhcnM7XHJcbiAgICB0aGlzLmNhcnMgPSBjdXJyZW50UGFnZUNhcnM7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVTdG9yZVdpbm5lcnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgQ2FyU2VydmljZS5nZXRXaW5uZXJzKHRoaXMud2lubmVyc1BhZ2UsIDEwLCB0aGlzLnNvcnRCeSwgdGhpcy5zb3J0T3JkZXIpO1xyXG5cclxuICAgIHRoaXMud2lubmVycyA9IHJlc3Aud2lubmVycztcclxuICAgIHRoaXMud2lubmVyc0NvdW50ID0gcmVzcC5jb3VudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmVycyB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvbjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuUHJldjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuTmV4dDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuV2luczogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYnRuQmVzdFRpbWU6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvb3Q6IEVsZW1lbnQsIHByaXZhdGUgcmVhZG9ubHkgc3RvcmU6IFN0b3JlKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uLmlkID0gJ3dpbm5lcnMnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHRoaXMuYXBwbGljYXRpb24uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3aW5uZXJzX2NvbnRhaW5lclwiPlxyXG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5XaW5uZXJzICgke3RoaXMuc3RvcmUud2lubmVyc0NvdW50fSk8L2gxPlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZVwiPlBhZ2UgIyR7dGhpcy5zdG9yZS53aW5uZXJzUGFnZX08L3A+XHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+TnVtYmVyPC90aD5cclxuICAgICAgICA8dGg+Q2FyPC90aD5cclxuICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgPHRoPjxidXR0b24gY2xhc3M9XCJidG5fd2luc1wiIGlkPVwiYnRuX3dpbnNcIj5XaW5zPC9idXR0b24+PC90aD5cclxuICAgICAgICA8dGg+PGJ1dHRvbiBjbGFzcz1cImJ0bl93aW5zXCIgaWQ9XCJidG5fYmVzdF90aW1lXCI+QmVzdCB0aW1lKHNlYyk8L2J1dHRvbj48L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICAke3RoaXMucmVuZGVyUmVjb3JkcygpfVxyXG4gICAgPC90YWJsZT5cclxuICAgIDxidXR0b24gJHt0aGlzLnN0b3JlLndpbm5lcnNQYWdlIDw9IDEgPyAnZGlzYWJsZWQnIDogJyd9IGlkPVwiYnRuX3dpbm5lcnNfcHJldlwiPlBSRVY8L2J1dHRvbj5cclxuICAgIDxidXR0b24gJHtcclxuICAgICAgdGhpcy5zdG9yZS53aW5uZXJzUGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc3RvcmUud2lubmVyc0NvdW50IC8gMTApID8gJ2Rpc2FibGVkJyA6ICcnXHJcbiAgICB9IGlkPVwiYnRuX3dpbm5lcnNfbmV4dFwiPk5FWFQ8L2J1dHRvbj5cclxuICA8L2Rpdj5gO1xyXG4gICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5hcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmJ0blByZXYgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNidG5fd2lubmVyc19wcmV2Jyk7XHJcbiAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2J0bl93aW5uZXJzX25leHQnKTtcclxuXHJcbiAgICAgIHRoaXMuYnRuV2lucyA9IHRoaXMuYXBwbGljYXRpb24ucXVlcnlTZWxlY3RvcignI2J0bl93aW5zJyk7XHJcbiAgICAgIHRoaXMuYnRuQmVzdFRpbWUgPSB0aGlzLmFwcGxpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJyNidG5fYmVzdF90aW1lJyk7XHJcblxyXG4gICAgICB0aGlzLmFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb247XHJcbiAgfVxyXG5cclxuICBhZGRCdXR0b25MaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUud2lubmVyc1BhZ2UgLT0gMTtcclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZVdpbm5lcnMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlVmlldygpKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUud2lubmVyc1BhZ2UgKz0gMTtcclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZVdpbm5lcnMoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlVmlldygpKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJ0bldpbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuc29ydEJ5ID0gJ3dpbnMnO1xyXG4gICAgICBpZiAodGhpcy5zdG9yZS5zb3J0T3JkZXIgPT09ICdBU0MnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5zb3J0T3JkZXIgPSAnREVTQyc7XHJcbiAgICAgIH0gZWxzZSB0aGlzLnN0b3JlLnNvcnRPcmRlciA9ICdBU0MnO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZS51cGRhdGVTdG9yZVdpbm5lcnMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJ0bkJlc3RUaW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLnNvcnRCeSA9ICd0aW1lJztcclxuICAgICAgaWYgKHRoaXMuc3RvcmUuc29ydE9yZGVyID09PSAnQVNDJykge1xyXG4gICAgICAgIHRoaXMuc3RvcmUuc29ydE9yZGVyID0gJ0RFU0MnO1xyXG4gICAgICB9IGVsc2UgdGhpcy5zdG9yZS5zb3J0T3JkZXIgPSAnQVNDJztcclxuXHJcbiAgICAgIHRoaXMuc3RvcmUudXBkYXRlU3RvcmVXaW5uZXJzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLmFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIHRoaXMucm9vdC5yZW1vdmVDaGlsZCh0aGlzLmFwcGxpY2F0aW9uKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclJlY29yZHMoKSB7XHJcbiAgICBjb25zdCByZWNvcmRzOiBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGxldCBudW1iZXIgPSAxO1xyXG4gICAgdGhpcy5zdG9yZS53aW5uZXJzLmZvckVhY2goKHdpbm5lcikgPT4ge1xyXG4gICAgICBjb25zdCBuZXdSZWNvcmQ6IEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICBuZXdSZWNvcmQuaW5uZXJIVE1MID0gYDx0cj5cclxuICAgIDx0ZD4ke251bWJlcn08L3RkPlxyXG4gICAgPHRkPiR7d2lubmVyLmNhci5yZW5kZXIoKS5pbm5lckhUTUx9PC90ZD5cclxuICAgIDx0ZD4ke3dpbm5lci5jYXIubmFtZX08L3RkPlxyXG4gICAgPHRkPiR7d2lubmVyLndpbnN9PC90ZD5cclxuICAgIDx0ZD4ke3dpbm5lci50aW1lfTwvdGQ+XHJcbiAgPC90cj5gO1xyXG4gICAgICByZWNvcmRzLmFwcGVuZENoaWxkKG5ld1JlY29yZCk7XHJcbiAgICAgIG51bWJlciArPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHMuaW5uZXJIVE1MO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5yb290LnJlbW92ZUNoaWxkKHRoaXMuYXBwbGljYXRpb24pO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENhciBmcm9tICcuLi9idXNpbmVzc0xheWVyL2Nhcic7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9idXNpbmVzc0xheWVyL3V0aWxzJztcclxuaW1wb3J0IFdpbm5lciBmcm9tICcuLi9idXNpbmVzc0xheWVyL3dpbm5lcic7XHJcbmltcG9ydCBDYXJEYW8gZnJvbSAnLi4vZGF0YUFjY2Vzc0xheWVyL2NhckRhbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENhcnMoXHJcbiAgICBwYWdlOiBudW1iZXIsXHJcbiAgICBsaW1pdDogbnVtYmVyID0gNyxcclxuICApOiBQcm9taXNlPHsgY2FyczogQ2FyW107IGNvdW50OiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuIENhckRhby5nZXRDYXJzKHBhZ2UsIGxpbWl0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q2FyKGlkOiBudW1iZXIpOiBQcm9taXNlPHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBpZDogbnVtYmVyIH0+IHtcclxuICAgIHJldHVybiBDYXJEYW8uZ2V0Q2FyKGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlQ2FyKGJvZHk6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0pOiBQcm9taXNlPENhcj4ge1xyXG4gICAgcmV0dXJuIENhckRhby5jcmVhdGVDYXIoYm9keSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbGV0ZUNhcihpZDogbnVtYmVyKTogUHJvbWlzZTx7fT4ge1xyXG4gICAgcmV0dXJuIENhckRhby5kZWxldGVDYXIoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyB1cGRhdGVDYXIoaWQ6IG51bWJlciwgYm9keTogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfSk6IFByb21pc2U8e30+IHtcclxuICAgIHJldHVybiBDYXJEYW8udXBkYXRlQ2FyKGlkLCBib2R5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVSYW5kb21DYXJzKCk6IFByb21pc2U8Q2FyW10+IHtcclxuICAgIGNvbnN0IGdlbmVyYXRlZENhcnM6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSA9IFV0aWxzLmdlbmVyYXRlUmFuZG9tQ2FycygpO1xyXG5cclxuICAgIGNvbnN0IGNhcnMgPSBhd2FpdCBQcm9taXNlLmFsbChnZW5lcmF0ZWRDYXJzLm1hcCgoZWwpID0+IENhclNlcnZpY2UuY3JlYXRlQ2FyKGVsKSkpO1xyXG4gICAgcmV0dXJuIGNhcnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YXJ0RW5naW5lKGlkOiBudW1iZXIpOiBQcm9taXNlPHsgdmVsb2NpdHk6IG51bWJlcjsgZGlzdGFuY2U6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm4gQ2FyRGFvLnN0YXJ0RW5naW5lKGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RvcEVuZ2luZShpZDogbnVtYmVyKTogUHJvbWlzZTx7IHZlbG9jaXR5OiBudW1iZXI7IGRpc3RhbmNlOiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuIENhckRhby5zdG9wRW5naW5lKGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZHJpdmUoaWQ6IG51bWJlcik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcclxuICAgIHJldHVybiBDYXJEYW8uZHJpdmUoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBzYXZlV2lubmVyKG5ld0lkOiBudW1iZXIsIG5ld1RpbWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgQ2FyRGFvLnNhdmVXaW5uZXIobmV3SWQsIG5ld1RpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRXaW5uZXJzKFxyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgbGltaXQ6IG51bWJlciA9IDEwLFxyXG4gICAgc29ydDogc3RyaW5nLFxyXG4gICAgb3JkZXI6IHN0cmluZyxcclxuICApOiBQcm9taXNlPHsgd2lubmVyczogV2lubmVyW107IGNvdW50OiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuIENhckRhby5nZXRXaW5uZXJzKHBhZ2UsIGxpbWl0LCBzb3J0LCBvcmRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbGV0ZVdpbm5lcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBDYXJEYW8uZGVsZXRlV2lubmVyKGlkKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL2luZGV4LnRzJztcclxuXHJcbi8vIGltcG9ydCBJY29uIGZyb20gJy4vU3dpdHplcmxhbmQuanBnJzt6XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy8gTG9kYXNoLCBub3cgaW1wb3J0ZWQgYnkgdGhpcyBzY3JpcHRcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cclxuXHJcbiAgICAvLyBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAvLyBteUljb24uc3JjID0gSWNvbjtcclxuICAgIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiXSwic291cmNlUm9vdCI6IiJ9