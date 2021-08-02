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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n  font-size: 18px;\n  color: white;\n}\n\n#content {\n  height: 100%;\n}\n\nbutton {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border: none;\n  overflow: hidden;\n  outline:none;\n  color: white;\n}\nbutton:hover{\n  cursor: pointer;\n}\nbutton:active {\n  color: orange;\n}\n\n.background-image {\n  background-image: url(\"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.white-background {\n  background-color: white;\n}\n\n.main-container {\n}\n\n.header {\n}\n.header-change-background {\n  background-image: url(\"https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  background-position: center;\n}\n.header-container{\n  max-width: 1000px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  height: 150px;\n}\n.restaurant-name {\n  display: flex;\n  justify-content: flex-start;\n  font-size: 50px;\n}\n.restaurant-name:hover {\n  background: Transparent;\n}\n.header-end {\n  padding-left: 50px;\n  display: flex;\n  justify-content: flex-end;\n}\n.spacing{\n  margin-left: 20px;\n  font-size: 16px;\n}\n.spacing.active {\n  color: orange;\n}\n.banner-text {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n.home-text-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 1000px;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.address-text {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-bottom: 20px;\n}\n.home-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.visit-text, .eat-text, .order-text {\n  font-size: 70px;\n}\n.visit-text {\n}\n.visit-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n.eat-text {\n  margin: 0;\n position: absolute;\n left: 50%;\n transform: translate(-50%);\n}\n.eat-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n.order-text{\n}\n.order-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n\n.menu-text-container, .order-now-text-container, .reservation-text-container {\n  background-color: white;\n  height: 100%;\n  color: black;\n  min-height: 1000px;\n  height: 100%;\n  text-align: center;\n}\n.menu-dish-text {\n\n}\n.order-now-text-container {\n\n}\n.order-now-text {\n\n}\n.reservation-text-container {\n}\n.reservation-text {\n}\n\n.end-container {\n  background-color: black;\n  height: 150px;\n  text-align: center;\n  line-height: 150px;\n}\n.end-facebook, .end-twitter, .end-instagram {\n  margin-left: 40px;\n  font-size: 25px;\n}\n\n/* Style the tab */\n.tab {\n  overflow: hidden;\n}\n.tab-home {\n  overflow: hidden;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover, .tab-home button:hover {\n  color: orange;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n  color: orange;\n}\n.tab-home button.active{\n}\n\n/* Style the tab content */\n.tabcontent {\n display: none;\n}\n\n/* Style the header */\n.header {\n}\n\n/* The sticky class is added to the header with JS when it reaches its scroll position */\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */\n.sticky + .tabcontent {\n  padding-top: 500px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,SAAS;EACT,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;;AAEA;EACE,sIAAsI;EACtI,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB;;AAEA;AACA;;AAEA;AACA;AACA;EACE,wIAAwI;EACxI,2BAA2B;AAC7B;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,eAAe;AACjB;AACA;AACA;AACA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;AACA;EACE,SAAS;CACV,kBAAkB;CAClB,SAAS;CACT,0BAA0B;AAC3B;AACA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;AACA;AACA;AACA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA,4DAA4D;AAC5D;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,gDAAgD;AAChD;EACE,aAAa;AACf;;AAEA,2CAA2C;AAC3C;EACE,aAAa;AACf;AACA;AACA;;AAEA,0BAA0B;AAC1B;CACC,aAAa;AACd;;AAEA,qBAAqB;AACrB;AACA;;AAEA,wFAAwF;AACxF;EACE,eAAe;EACf,MAAM;EACN,WAAW;AACb;;AAEA,mKAAmK;AACnK;EACE,kBAAkB;AACpB","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n  font-size: 18px;\n  color: white;\n}\n\n#content {\n  height: 100%;\n}\n\nbutton {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border: none;\n  overflow: hidden;\n  outline:none;\n  color: white;\n}\nbutton:hover{\n  cursor: pointer;\n}\nbutton:active {\n  color: orange;\n}\n\n.background-image {\n  background-image: url(\"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.white-background {\n  background-color: white;\n}\n\n.main-container {\n}\n\n.header {\n}\n.header-change-background {\n  background-image: url(\"https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  background-position: center;\n}\n.header-container{\n  max-width: 1000px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  height: 150px;\n}\n.restaurant-name {\n  display: flex;\n  justify-content: flex-start;\n  font-size: 50px;\n}\n.restaurant-name:hover {\n  background: Transparent;\n}\n.header-end {\n  padding-left: 50px;\n  display: flex;\n  justify-content: flex-end;\n}\n.spacing{\n  margin-left: 20px;\n  font-size: 16px;\n}\n.spacing.active {\n  color: orange;\n}\n.banner-text {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n.home-text-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 1000px;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.address-text {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-bottom: 20px;\n}\n.home-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.visit-text, .eat-text, .order-text {\n  font-size: 70px;\n}\n.visit-text {\n}\n.visit-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n.eat-text {\n  margin: 0;\n position: absolute;\n left: 50%;\n transform: translate(-50%);\n}\n.eat-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n.order-text{\n}\n.order-text:hover {\n  text-decoration: underline;\n  background: Transparent;\n}\n\n.menu-text-container, .order-now-text-container, .reservation-text-container {\n  background-color: white;\n  height: 100%;\n  color: black;\n  min-height: 1000px;\n  height: 100%;\n  text-align: center;\n}\n.menu-dish-text {\n\n}\n.order-now-text-container {\n\n}\n.order-now-text {\n\n}\n.reservation-text-container {\n}\n.reservation-text {\n}\n\n.end-container {\n  background-color: black;\n  height: 150px;\n  text-align: center;\n  line-height: 150px;\n}\n.end-facebook, .end-twitter, .end-instagram {\n  margin-left: 40px;\n  font-size: 25px;\n}\n\n/* Style the tab */\n.tab {\n  overflow: hidden;\n}\n.tab-home {\n  overflow: hidden;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover, .tab-home button:hover {\n  color: orange;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n  color: orange;\n}\n.tab-home button.active{\n}\n\n/* Style the tab content */\n.tabcontent {\n display: none;\n}\n\n/* Style the header */\n.header {\n}\n\n/* The sticky class is added to the header with JS when it reaches its scroll position */\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */\n.sticky + .tabcontent {\n  padding-top: 500px;\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const content = document.getElementById('content'); // get html only element id='content'

const backgroundImages = document.createElement('div')
backgroundImages.classList.add('background-image');
content.appendChild(backgroundImages);

const mainContainer = document.createElement('div');
mainContainer.classList.add("main-container");
backgroundImages.appendChild(mainContainer);

const openTab = (evt, tabName) => {
  // Declare all variables
  var i, tabcontent, tablinks, restaurantName, menu, order, visitHome, eatHome ,orderHome;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  restaurantName = document.getElementsByClassName("restaurant-name");
  for (i = 0; i < restaurantName.length; i++) {
    restaurantName[i].className = restaurantName[i].className.replace(" active", "");
  }
  menu = document.getElementsByClassName('spacing');
  for (i = 0; i < menu.length; i++) {
    menu[i].className = menu[i].className.replace(" active", "");
  }
  visitHome = document.getElementsByClassName('visit-text');
  for (i = 0; i < visitHome.length; i++) {
    visitHome[i].className = visitHome[i].className.replace(" active", "");
  }
  eatHome = document.getElementsByClassName('eat-text');
  for (i = 0; i < eatHome.length; i++) {
    eatHome[i].className = eatHome[i].className.replace(" active", "");
  }
  orderHome = document.getElementsByClassName('order-text');
  for (i = 0; i < orderHome.length; i++) {
    orderHome[i].className = orderHome[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

const headerBackgroundChange = () => {
  const changeHeaderBG = document.getElementById('myHeader');
  changeHeaderBG.classList.remove('header');
  changeHeaderBG.classList.add('header-change-background');
}
const headerBackgroundChangeRemover = () => {
  const changeHeaderBG = document.getElementById('myHeader');
  changeHeaderBG.classList.remove('header-change-background');
  changeHeaderBG.classList.add('header');
}

const header = (() => {
  const myHeader = document.createElement('div');
  myHeader.classList.add('header');
  myHeader.setAttribute('id', 'myHeader');
  mainContainer.appendChild(myHeader);

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  myHeader.appendChild(headerContainer);

  const headerTab = document.createElement('div');
  headerTab.classList.add('tab-home');
  headerContainer.appendChild(headerTab);

  const bannerText = document.createElement('div');
  bannerText.classList.add('banner-text');
  headerTab.appendChild(bannerText); // append bannerText to content

  const restaurantName = document.createElement('button');
  restaurantName.textContent = "Restaurant";
  restaurantName.classList.add('restaurant-name');
  restaurantName.addEventListener('click', function(){openTab(event, 'Home')});
  restaurantName.setAttribute("id", "defaultOpen");
  restaurantName.addEventListener("click", headerBackgroundChangeRemover);
  bannerText.appendChild(restaurantName); // make restaurantName

  const headerEnd = document.createElement('div'); // first make headerEnd
  headerEnd.classList.add('header-end');
  const menu = document.createElement('button');
  menu.textContent = "Menu";
  menu.classList.add('spacing');
  menu.addEventListener('click', function(){openTab(event, 'Menu')});
  menu.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(menu);
  const order = document.createElement('button');
  order.textContent = "Order Now";
  order.classList.add('spacing');
  order.addEventListener('click', function(){openTab(event, 'Order')});
  order.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(order); // append order to headerEnd
  const reservation = document.createElement('button');
  reservation.textContent = "Reservation";
  reservation.classList.add('spacing');
  reservation.addEventListener('click', function(){openTab(event, 'Reservation')});
  reservation.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(reservation); // append reservation to headerEnd
  bannerText.appendChild(headerEnd); // then append headerEnd to bannerText
})();

const end = () => {
  const endContainer = document.createElement('div');
  endContainer.classList.add('end-container');

  const endText = document.createElement('div');
  endText.textContent = "Facebook Twitter Instagram";
  endText.classList.add('end-container');
  endContainer.appendChild(endText);
};

const home = (() => {
  const homeTabContent = document.createElement('div');
  homeTabContent.setAttribute("id", "Home");
  homeTabContent.classList.add('tabcontent');

  const homeTextContainer = document.createElement('div'); // create home text container
  homeTextContainer.classList.add('home-text-container'); // add its classList
  homeTabContent.appendChild(homeTextContainer)

  const address = document.createElement('div'); // create address and contacts div
  address.textContent = "2445 Tanglewood Road — Tupelo, Mississippi — 662-819-2310"; // text content
  address.classList.add('address-text'); // classList
  homeTextContainer.appendChild(address); // append to the home text container

  const homeTab = document.createElement('div');
  homeTab.classList.add('tab');
  homeTextContainer.appendChild(homeTab);

  const homeButtons = document.createElement('div'); // create container for home buttons
  homeButtons.classList.add('home-buttons'); // add its classList
  homeTab.appendChild(homeButtons); // then append to home text container

  const visit = document.createElement('button'); // make button visit
  visit.textContent = "Visit";
  visit.classList.add('visit-text');
  visit.addEventListener('click', function(){openTab(event, 'Reservation')});
  visit.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(visit); // append to home button
  const eat = document.createElement('button'); // make button eat
  eat.textContent = "Eat";
  eat.classList.add('eat-text');
  eat.addEventListener('click', function(){openTab(event, 'Menu')});
  eat.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(eat); // append to home button
  const orderHome = document.createElement('button'); // make button story
  orderHome.textContent = "Order";
  orderHome.classList.add('order-text');
  orderHome.addEventListener('click', function(){openTab(event, 'Order')});
  orderHome.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(orderHome); // append to home button

  mainContainer.appendChild(homeTabContent); // then append homeText container to the main container
})();

const menu = (() => {
  const menuTabContent = document.createElement('div');
  menuTabContent.setAttribute("id", "Menu");
  menuTabContent.classList.add('tabcontent');

  const menuTextContainer = document.createElement('div');
  menuTextContainer.classList.add('menu-text-container');
  menuTabContent.appendChild(menuTextContainer);

  const menuDish = document.createElement('div');
  menuDish.classList.add('menu-dish-text');
  menuDish.textContent = "MENU DISH";
  menuTextContainer.appendChild(menuDish);

  const endContainer = document.createElement('div');
  endContainer.classList.add('end-container');
  const endFacebook = document.createElement('button');
  endFacebook.textContent = "Facebook";
  endFacebook.classList.add('end-facebook');
  endContainer.appendChild(endFacebook);
  const endTwitter = document.createElement('button');
  endTwitter.textContent = "Twitter";
  endTwitter.classList.add('end-twitter');
  endContainer.appendChild(endTwitter);
  const endInstagram = document.createElement('button');
  endInstagram.textContent = "Instagram";
  endInstagram.classList.add('end-instagram');
  endContainer.appendChild(endInstagram);

  menuTabContent.appendChild(endContainer);

  mainContainer.appendChild(menuTabContent);
})();

const orderNow = (() => {
  const orderNowTabContent = document.createElement('div');
  orderNowTabContent.setAttribute("id", "Order");
  orderNowTabContent.classList.add('tabcontent');

  const orderNowTextContainer = document.createElement('div');
  orderNowTextContainer.classList.add('order-now-text-container');
  orderNowTabContent.appendChild(orderNowTextContainer);

  const orderNowText = document.createElement('div');
  orderNowText.classList.add('order-now-text');
  orderNowText.textContent = "ORDER NOW";
  orderNowTextContainer.appendChild(orderNowText);

  const endContainer = document.createElement('div');
  endContainer.classList.add('end-container');
  const endFacebook = document.createElement('button');
  endFacebook.textContent = "Facebook";
  endFacebook.classList.add('end-facebook');
  endContainer.appendChild(endFacebook);
  const endTwitter = document.createElement('button');
  endTwitter.textContent = "Twitter";
  endTwitter.classList.add('end-twitter');
  endContainer.appendChild(endTwitter);
  const endInstagram = document.createElement('button');
  endInstagram.textContent = "Instagram";
  endInstagram.classList.add('end-instagram');
  endContainer.appendChild(endInstagram);

  orderNowTabContent.appendChild(endContainer);

  mainContainer.appendChild(orderNowTabContent);
})();

const reservationTabContent = (() => {
  const reservationTabContent = document.createElement('div');
  reservationTabContent.setAttribute("id", "Reservation");
  reservationTabContent.classList.add('tabcontent');

  const reservationTextContainer = document.createElement('div');
  reservationTextContainer.classList.add('reservation-text-container');
  reservationTabContent.appendChild(reservationTextContainer);

  const reservationText = document.createElement('div');
  reservationText.classList.add('reservation-text');
  reservationText.textContent = "reservation";
  reservationTextContainer.appendChild(reservationText);

  const endContainer = document.createElement('div');
  endContainer.classList.add('end-container');
  const endFacebook = document.createElement('button');
  endFacebook.textContent = "Facebook";
  endFacebook.classList.add('end-facebook');
  endContainer.appendChild(endFacebook);
  const endTwitter = document.createElement('button');
  endTwitter.textContent = "Twitter";
  endTwitter.classList.add('end-twitter');
  endContainer.appendChild(endTwitter);
  const endInstagram = document.createElement('button');
  endInstagram.textContent = "Instagram";
  endInstagram.classList.add('end-instagram');
  endContainer.appendChild(endInstagram);

  reservationTabContent.appendChild(endContainer);

  mainContainer.appendChild(reservationTabContent);
})();

const displayController = (() => {

})();

const stickyHeader = (() =>{
  window.onscroll = function() {stickyFunction()};

    // Get the header
  var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
  var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
       header.classList.remove("sticky");
      }
    }
})();

document.getElementById("defaultOpen").click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxpQkFBaUIsY0FBYyxvQkFBb0IsaUJBQWlCLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxZQUFZLGtDQUFrQyxnQ0FBZ0MsaUJBQWlCLHFCQUFxQixpQkFBaUIsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsdUJBQXVCLDZJQUE2SSxpQkFBaUIsZ0NBQWdDLGlDQUFpQywyQkFBMkIsR0FBRyxxQkFBcUIsNEJBQTRCLEdBQUcscUJBQXFCLEdBQUcsYUFBYSxHQUFHLDZCQUE2QiwrSUFBK0ksZ0NBQWdDLEdBQUcsb0JBQW9CLHNCQUFzQixnQkFBZ0Isc0JBQXNCLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixnQ0FBZ0Msb0JBQW9CLEdBQUcsMEJBQTBCLDRCQUE0QixHQUFHLGVBQWUsdUJBQXVCLGtCQUFrQiw4QkFBOEIsR0FBRyxXQUFXLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDRCQUE0QixrQkFBa0IsNEJBQTRCLDJCQUEyQixzQkFBc0IsZ0JBQWdCLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLHlCQUF5QixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFr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LGlEQUFpRCx3QkFBd0I7QUFDekU7QUFDQSxxQ0FBcUM7O0FBRXJDLDRDQUE0QztBQUM1QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUM7O0FBRUQ7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOm5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI2MDkyMi9wZXhlbHMtcGhvdG8tMjYwOTIyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjBcXFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4ud2hpdGUtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG59XFxuXFxuLmhlYWRlciB7XFxufVxcbi5oZWFkZXItY2hhbmdlLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjU1NDg5L3BleGVscy1waG90by00MjU1NDg5LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjBcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXJ7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4ucmVzdGF1cmFudC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5yZXN0YXVyYW50LW5hbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogVHJhbnNwYXJlbnQ7XFxufVxcbi5oZWFkZXItZW5kIHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uc3BhY2luZ3tcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3BhY2luZy5hY3RpdmUge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuLmJhbm5lci10ZXh0IHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLmhvbWUtdGV4dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uYWRkcmVzcy10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4uaG9tZS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi52aXNpdC10ZXh0LCAuZWF0LXRleHQsIC5vcmRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuLnZpc2l0LXRleHQge1xcbn1cXG4udmlzaXQtdGV4dDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQ6IFRyYW5zcGFyZW50O1xcbn1cXG4uZWF0LXRleHQge1xcbiAgbWFyZ2luOiAwO1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIGxlZnQ6IDUwJTtcXG4gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5lYXQtdGV4dDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQ6IFRyYW5zcGFyZW50O1xcbn1cXG4ub3JkZXItdGV4dHtcXG59XFxuLm9yZGVyLXRleHQ6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kOiBUcmFuc3BhcmVudDtcXG59XFxuXFxuLm1lbnUtdGV4dC1jb250YWluZXIsIC5vcmRlci1ub3ctdGV4dC1jb250YWluZXIsIC5yZXNlcnZhdGlvbi10ZXh0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1lbnUtZGlzaC10ZXh0IHtcXG5cXG59XFxuLm9yZGVyLW5vdy10ZXh0LWNvbnRhaW5lciB7XFxuXFxufVxcbi5vcmRlci1ub3ctdGV4dCB7XFxuXFxufVxcbi5yZXNlcnZhdGlvbi10ZXh0LWNvbnRhaW5lciB7XFxufVxcbi5yZXNlcnZhdGlvbi10ZXh0IHtcXG59XFxuXFxuLmVuZC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xcbn1cXG4uZW5kLWZhY2Vib29rLCAuZW5kLXR3aXR0ZXIsIC5lbmQtaW5zdGFncmFtIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgdGFiICovXFxuLnRhYiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGFiLWhvbWUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xcbi50YWIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXFxuLnRhYiBidXR0b246aG92ZXIsIC50YWItaG9tZSBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuLnRhYi1ob21lIGJ1dHRvbi5hY3RpdmV7XFxufVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcbi50YWJjb250ZW50IHtcXG4gZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGhlYWRlciAqL1xcbi5oZWFkZXIge1xcbn1cXG5cXG4vKiBUaGUgc3RpY2t5IGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBoZWFkZXIgd2l0aCBKUyB3aGVuIGl0IHJlYWNoZXMgaXRzIHNjcm9sbCBwb3NpdGlvbiAqL1xcbi5zdGlja3kge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEFkZCBzb21lIHRvcCBwYWRkaW5nIHRvIHRoZSBwYWdlIGNvbnRlbnQgdG8gcHJldmVudCBzdWRkZW4gcXVpY2sgbW92ZW1lbnQgKGFzIHRoZSBoZWFkZXIgZ2V0cyBhIG5ldyBwb3NpdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIChwb3NpdGlvbjpmaXhlZCBhbmQgdG9wOjApICovXFxuLnN0aWNreSArIC50YWJjb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiA1MDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzSUFBc0k7RUFDdEksWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7RUFDRSx3SUFBd0k7RUFDeEksMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxTQUFTO0NBQ1Ysa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCwwQkFBMEI7QUFDM0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsNERBQTREO0FBQzVEO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGFBQWE7QUFDZjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtDQUNDLGFBQWE7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSx3RkFBd0Y7QUFDeEY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQSxtS0FBbUs7QUFDbks7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG91dGxpbmU6bm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjYwOTIyL3BleGVscy1waG90by0yNjA5MjIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFxcXCIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi53aGl0ZS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbn1cXG5cXG4uaGVhZGVyIHtcXG59XFxuLmhlYWRlci1jaGFuZ2UtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyNTU0ODkvcGV4ZWxzLXBob3RvLTQyNTU0ODkuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFxcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lcntcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLnJlc3RhdXJhbnQtbmFtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBUcmFuc3BhcmVudDtcXG59XFxuLmhlYWRlci1lbmQge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5zcGFjaW5ne1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5zcGFjaW5nLmFjdGl2ZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG4uYmFubmVyLXRleHQge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG4uaG9tZS10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5hZGRyZXNzLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5ob21lLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnZpc2l0LXRleHQsIC5lYXQtdGV4dCwgLm9yZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4udmlzaXQtdGV4dCB7XFxufVxcbi52aXNpdC10ZXh0OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgYmFja2dyb3VuZDogVHJhbnNwYXJlbnQ7XFxufVxcbi5lYXQtdGV4dCB7XFxuICBtYXJnaW46IDA7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gbGVmdDogNTAlO1xcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XFxuLmVhdC10ZXh0OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgYmFja2dyb3VuZDogVHJhbnNwYXJlbnQ7XFxufVxcbi5vcmRlci10ZXh0e1xcbn1cXG4ub3JkZXItdGV4dDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQ6IFRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWVudS10ZXh0LWNvbnRhaW5lciwgLm9yZGVyLW5vdy10ZXh0LWNvbnRhaW5lciwgLnJlc2VydmF0aW9uLXRleHQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWluLWhlaWdodDogMTAwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudS1kaXNoLXRleHQge1xcblxcbn1cXG4ub3JkZXItbm93LXRleHQtY29udGFpbmVyIHtcXG5cXG59XFxuLm9yZGVyLW5vdy10ZXh0IHtcXG5cXG59XFxuLnJlc2VydmF0aW9uLXRleHQtY29udGFpbmVyIHtcXG59XFxuLnJlc2VydmF0aW9uLXRleHQge1xcbn1cXG5cXG4uZW5kLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTUwcHg7XFxufVxcbi5lbmQtZmFjZWJvb2ssIC5lbmQtdHdpdHRlciwgLmVuZC1pbnN0YWdyYW0ge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgKi9cXG4udGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50YWItaG9tZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXFxuLnRhYiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cXG4udGFiIGJ1dHRvbjpob3ZlciwgLnRhYi1ob21lIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xcbi50YWIgYnV0dG9uLmFjdGl2ZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG4udGFiLWhvbWUgYnV0dG9uLmFjdGl2ZXtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxuLnRhYmNvbnRlbnQge1xcbiBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgaGVhZGVyICovXFxuLmhlYWRlciB7XFxufVxcblxcbi8qIFRoZSBzdGlja3kgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIGhlYWRlciB3aXRoIEpTIHdoZW4gaXQgcmVhY2hlcyBpdHMgc2Nyb2xsIHBvc2l0aW9uICovXFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQWRkIHNvbWUgdG9wIHBhZGRpbmcgdG8gdGhlIHBhZ2UgY29udGVudCB0byBwcmV2ZW50IHN1ZGRlbiBxdWljayBtb3ZlbWVudCAoYXMgdGhlIGhlYWRlciBnZXRzIGEgbmV3IHBvc2l0aW9uIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKHBvc2l0aW9uOmZpeGVkIGFuZCB0b3A6MCkgKi9cXG4uc3RpY2t5ICsgLnRhYmNvbnRlbnQge1xcbiAgcGFkZGluZy10b3A6IDUwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAvLyBnZXQgaHRtbCBvbmx5IGVsZW1lbnQgaWQ9J2NvbnRlbnQnXG5cbmNvbnN0IGJhY2tncm91bmRJbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYmFja2dyb3VuZEltYWdlcy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZXMpO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbmJhY2tncm91bmRJbWFnZXMuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbmNvbnN0IG9wZW5UYWIgPSAoZXZ0LCB0YWJOYW1lKSA9PiB7XG4gIC8vIERlY2xhcmUgYWxsIHZhcmlhYmxlc1xuICB2YXIgaSwgdGFiY29udGVudCwgdGFibGlua3MsIHJlc3RhdXJhbnROYW1lLCBtZW51LCBvcmRlciwgdmlzaXRIb21lLCBlYXRIb21lICxvcmRlckhvbWU7XG5cbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiY29udGVudFwiIGFuZCBoaWRlIHRoZW1cbiAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIHRhYmNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFibGlua3NcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG4gIHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxpbmtzXCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICB0YWJsaW5rc1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cbiAgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgcmVzdGF1cmFudE5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICByZXN0YXVyYW50TmFtZVtpXS5jbGFzc05hbWUgPSByZXN0YXVyYW50TmFtZVtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cbiAgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NwYWNpbmcnKTtcbiAgZm9yIChpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICBtZW51W2ldLmNsYXNzTmFtZSA9IG1lbnVbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICB9XG4gIHZpc2l0SG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zpc2l0LXRleHQnKTtcbiAgZm9yIChpID0gMDsgaSA8IHZpc2l0SG9tZS5sZW5ndGg7IGkrKykge1xuICAgIHZpc2l0SG9tZVtpXS5jbGFzc05hbWUgPSB2aXNpdEhvbWVbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICB9XG4gIGVhdEhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlYXQtdGV4dCcpO1xuICBmb3IgKGkgPSAwOyBpIDwgZWF0SG9tZS5sZW5ndGg7IGkrKykge1xuICAgIGVhdEhvbWVbaV0uY2xhc3NOYW1lID0gZWF0SG9tZVtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cbiAgb3JkZXJIb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3JkZXItdGV4dCcpO1xuICBmb3IgKGkgPSAwOyBpIDwgb3JkZXJIb21lLmxlbmd0aDsgaSsrKSB7XG4gICAgb3JkZXJIb21lW2ldLmNsYXNzTmFtZSA9IG9yZGVySG9tZVtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cblxuICAvLyBTaG93IHRoZSBjdXJyZW50IHRhYiwgYW5kIGFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG59O1xuXG5jb25zdCBoZWFkZXJCYWNrZ3JvdW5kQ2hhbmdlID0gKCkgPT4ge1xuICBjb25zdCBjaGFuZ2VIZWFkZXJCRyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUhlYWRlcicpO1xuICBjaGFuZ2VIZWFkZXJCRy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXInKTtcbiAgY2hhbmdlSGVhZGVyQkcuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNoYW5nZS1iYWNrZ3JvdW5kJyk7XG59XG5jb25zdCBoZWFkZXJCYWNrZ3JvdW5kQ2hhbmdlUmVtb3ZlciA9ICgpID0+IHtcbiAgY29uc3QgY2hhbmdlSGVhZGVyQkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlIZWFkZXInKTtcbiAgY2hhbmdlSGVhZGVyQkcuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLWNoYW5nZS1iYWNrZ3JvdW5kJyk7XG4gIGNoYW5nZUhlYWRlckJHLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xufVxuXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICBjb25zdCBteUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBteUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgbXlIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteUhlYWRlcicpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SGVhZGVyKTtcblxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcbiAgbXlIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXJUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYi1ob21lJyk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUYWIpO1xuXG4gIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuICBoZWFkZXJUYWIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7IC8vIGFwcGVuZCBiYW5uZXJUZXh0IHRvIGNvbnRlbnRcblxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgcmVzdGF1cmFudE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe29wZW5UYWIoZXZlbnQsICdIb21lJyl9KTtcbiAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWZhdWx0T3BlblwiKTtcbiAgcmVzdGF1cmFudE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhlYWRlckJhY2tncm91bmRDaGFuZ2VSZW1vdmVyKTtcbiAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7IC8vIG1ha2UgcmVzdGF1cmFudE5hbWVcblxuICBjb25zdCBoZWFkZXJFbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gZmlyc3QgbWFrZSBoZWFkZXJFbmRcbiAgaGVhZGVyRW5kLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1lbmQnKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnc3BhY2luZycpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtvcGVuVGFiKGV2ZW50LCAnTWVudScpfSk7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhlYWRlckJhY2tncm91bmRDaGFuZ2UpO1xuICBoZWFkZXJFbmQuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG9yZGVyLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgb3JkZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2luZycpO1xuICBvcmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7b3BlblRhYihldmVudCwgJ09yZGVyJyl9KTtcbiAgb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhlYWRlckJhY2tncm91bmRDaGFuZ2UpO1xuICBoZWFkZXJFbmQuYXBwZW5kQ2hpbGQob3JkZXIpOyAvLyBhcHBlbmQgb3JkZXIgdG8gaGVhZGVyRW5kXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2VydmF0aW9uLnRleHRDb250ZW50ID0gXCJSZXNlcnZhdGlvblwiO1xuICByZXNlcnZhdGlvbi5jbGFzc0xpc3QuYWRkKCdzcGFjaW5nJyk7XG4gIHJlc2VydmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtvcGVuVGFiKGV2ZW50LCAnUmVzZXJ2YXRpb24nKX0pO1xuICByZXNlcnZhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGVhZGVyQmFja2dyb3VuZENoYW5nZSk7XG4gIGhlYWRlckVuZC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbik7IC8vIGFwcGVuZCByZXNlcnZhdGlvbiB0byBoZWFkZXJFbmRcbiAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChoZWFkZXJFbmQpOyAvLyB0aGVuIGFwcGVuZCBoZWFkZXJFbmQgdG8gYmFubmVyVGV4dFxufSkoKTtcblxuY29uc3QgZW5kID0gKCkgPT4ge1xuICBjb25zdCBlbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VuZC1jb250YWluZXInKTtcblxuICBjb25zdCBlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVuZFRleHQudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rIFR3aXR0ZXIgSW5zdGFncmFtXCI7XG4gIGVuZFRleHQuY2xhc3NMaXN0LmFkZCgnZW5kLWNvbnRhaW5lcicpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVGV4dCk7XG59O1xuXG5jb25zdCBob21lID0gKCgpID0+IHtcbiAgY29uc3QgaG9tZVRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVRhYkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJIb21lXCIpO1xuICBob21lVGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG5cbiAgY29uc3QgaG9tZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gY3JlYXRlIGhvbWUgdGV4dCBjb250YWluZXJcbiAgaG9tZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS10ZXh0LWNvbnRhaW5lcicpOyAvLyBhZGQgaXRzIGNsYXNzTGlzdFxuICBob21lVGFiQ29udGVudC5hcHBlbmRDaGlsZChob21lVGV4dENvbnRhaW5lcilcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGNyZWF0ZSBhZGRyZXNzIGFuZCBjb250YWN0cyBkaXZcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMjQ0NSBUYW5nbGV3b29kIFJvYWQg4oCUIFR1cGVsbywgTWlzc2lzc2lwcGkg4oCUIDY2Mi04MTktMjMxMFwiOyAvLyB0ZXh0IGNvbnRlbnRcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLXRleHQnKTsgLy8gY2xhc3NMaXN0XG4gIGhvbWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpOyAvLyBhcHBlbmQgdG8gdGhlIGhvbWUgdGV4dCBjb250YWluZXJcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGhvbWVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gIGNvbnN0IGhvbWVCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGhvbWUgYnV0dG9uc1xuICBob21lQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbnMnKTsgLy8gYWRkIGl0cyBjbGFzc0xpc3RcbiAgaG9tZVRhYi5hcHBlbmRDaGlsZChob21lQnV0dG9ucyk7IC8vIHRoZW4gYXBwZW5kIHRvIGhvbWUgdGV4dCBjb250YWluZXJcblxuICBjb25zdCB2aXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBtYWtlIGJ1dHRvbiB2aXNpdFxuICB2aXNpdC50ZXh0Q29udGVudCA9IFwiVmlzaXRcIjtcbiAgdmlzaXQuY2xhc3NMaXN0LmFkZCgndmlzaXQtdGV4dCcpO1xuICB2aXNpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7b3BlblRhYihldmVudCwgJ1Jlc2VydmF0aW9uJyl9KTtcbiAgdmlzaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhlYWRlckJhY2tncm91bmRDaGFuZ2UpO1xuICBob21lQnV0dG9ucy5hcHBlbmRDaGlsZCh2aXNpdCk7IC8vIGFwcGVuZCB0byBob21lIGJ1dHRvblxuICBjb25zdCBlYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy8gbWFrZSBidXR0b24gZWF0XG4gIGVhdC50ZXh0Q29udGVudCA9IFwiRWF0XCI7XG4gIGVhdC5jbGFzc0xpc3QuYWRkKCdlYXQtdGV4dCcpO1xuICBlYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe29wZW5UYWIoZXZlbnQsICdNZW51Jyl9KTtcbiAgZWF0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoZWFkZXJCYWNrZ3JvdW5kQ2hhbmdlKTtcbiAgaG9tZUJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWF0KTsgLy8gYXBwZW5kIHRvIGhvbWUgYnV0dG9uXG4gIGNvbnN0IG9yZGVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBtYWtlIGJ1dHRvbiBzdG9yeVxuICBvcmRlckhvbWUudGV4dENvbnRlbnQgPSBcIk9yZGVyXCI7XG4gIG9yZGVySG9tZS5jbGFzc0xpc3QuYWRkKCdvcmRlci10ZXh0Jyk7XG4gIG9yZGVySG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7b3BlblRhYihldmVudCwgJ09yZGVyJyl9KTtcbiAgb3JkZXJIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoZWFkZXJCYWNrZ3JvdW5kQ2hhbmdlKTtcbiAgaG9tZUJ1dHRvbnMuYXBwZW5kQ2hpbGQob3JkZXJIb21lKTsgLy8gYXBwZW5kIHRvIGhvbWUgYnV0dG9uXG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGFiQ29udGVudCk7IC8vIHRoZW4gYXBwZW5kIGhvbWVUZXh0IGNvbnRhaW5lciB0byB0aGUgbWFpbiBjb250YWluZXJcbn0pKCk7XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBtZW51VGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51VGFiQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk1lbnVcIik7XG4gIG1lbnVUYWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYmNvbnRlbnQnKTtcblxuICBjb25zdCBtZW51VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQtY29udGFpbmVyJyk7XG4gIG1lbnVUYWJDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUZXh0Q29udGFpbmVyKTtcblxuICBjb25zdCBtZW51RGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGlzaC5jbGFzc0xpc3QuYWRkKCdtZW51LWRpc2gtdGV4dCcpO1xuICBtZW51RGlzaC50ZXh0Q29udGVudCA9IFwiTUVOVSBESVNIXCI7XG4gIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEaXNoKTtcblxuICBjb25zdCBlbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZW5kRmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZW5kRmFjZWJvb2sudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rXCI7XG4gIGVuZEZhY2Vib29rLmNsYXNzTGlzdC5hZGQoJ2VuZC1mYWNlYm9vaycpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRmFjZWJvb2spO1xuICBjb25zdCBlbmRUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVuZFR3aXR0ZXIudGV4dENvbnRlbnQgPSBcIlR3aXR0ZXJcIjtcbiAgZW5kVHdpdHRlci5jbGFzc0xpc3QuYWRkKCdlbmQtdHdpdHRlcicpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVHdpdHRlcik7XG4gIGNvbnN0IGVuZEluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbmRJbnN0YWdyYW0udGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbVwiO1xuICBlbmRJbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnZW5kLWluc3RhZ3JhbScpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kSW5zdGFncmFtKTtcblxuICBtZW51VGFiQ29udGVudC5hcHBlbmRDaGlsZChlbmRDb250YWluZXIpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRhYkNvbnRlbnQpO1xufSkoKTtcblxuY29uc3Qgb3JkZXJOb3cgPSAoKCkgPT4ge1xuICBjb25zdCBvcmRlck5vd1RhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3JkZXJOb3dUYWJDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiT3JkZXJcIik7XG4gIG9yZGVyTm93VGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG5cbiAgY29uc3Qgb3JkZXJOb3dUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9yZGVyTm93VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcmRlci1ub3ctdGV4dC1jb250YWluZXInKTtcbiAgb3JkZXJOb3dUYWJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVyTm93VGV4dENvbnRhaW5lcik7XG5cbiAgY29uc3Qgb3JkZXJOb3dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9yZGVyTm93VGV4dC5jbGFzc0xpc3QuYWRkKCdvcmRlci1ub3ctdGV4dCcpO1xuICBvcmRlck5vd1RleHQudGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xuICBvcmRlck5vd1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQob3JkZXJOb3dUZXh0KTtcblxuICBjb25zdCBlbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZW5kRmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZW5kRmFjZWJvb2sudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rXCI7XG4gIGVuZEZhY2Vib29rLmNsYXNzTGlzdC5hZGQoJ2VuZC1mYWNlYm9vaycpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRmFjZWJvb2spO1xuICBjb25zdCBlbmRUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVuZFR3aXR0ZXIudGV4dENvbnRlbnQgPSBcIlR3aXR0ZXJcIjtcbiAgZW5kVHdpdHRlci5jbGFzc0xpc3QuYWRkKCdlbmQtdHdpdHRlcicpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVHdpdHRlcik7XG4gIGNvbnN0IGVuZEluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbmRJbnN0YWdyYW0udGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbVwiO1xuICBlbmRJbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnZW5kLWluc3RhZ3JhbScpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kSW5zdGFncmFtKTtcblxuICBvcmRlck5vd1RhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5kQ29udGFpbmVyKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG9yZGVyTm93VGFiQ29udGVudCk7XG59KSgpO1xuXG5jb25zdCByZXNlcnZhdGlvblRhYkNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCByZXNlcnZhdGlvblRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzZXJ2YXRpb25UYWJDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUmVzZXJ2YXRpb25cIik7XG4gIHJlc2VydmF0aW9uVGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlc2VydmF0aW9uVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi10ZXh0LWNvbnRhaW5lcicpO1xuICByZXNlcnZhdGlvblRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25UZXh0Q29udGFpbmVyKTtcblxuICBjb25zdCByZXNlcnZhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzZXJ2YXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLXRleHQnKTtcbiAgcmVzZXJ2YXRpb25UZXh0LnRleHRDb250ZW50ID0gXCJyZXNlcnZhdGlvblwiO1xuICByZXNlcnZhdGlvblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25UZXh0KTtcblxuICBjb25zdCBlbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZW5kRmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZW5kRmFjZWJvb2sudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rXCI7XG4gIGVuZEZhY2Vib29rLmNsYXNzTGlzdC5hZGQoJ2VuZC1mYWNlYm9vaycpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRmFjZWJvb2spO1xuICBjb25zdCBlbmRUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVuZFR3aXR0ZXIudGV4dENvbnRlbnQgPSBcIlR3aXR0ZXJcIjtcbiAgZW5kVHdpdHRlci5jbGFzc0xpc3QuYWRkKCdlbmQtdHdpdHRlcicpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVHdpdHRlcik7XG4gIGNvbnN0IGVuZEluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbmRJbnN0YWdyYW0udGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbVwiO1xuICBlbmRJbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnZW5kLWluc3RhZ3JhbScpO1xuICBlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kSW5zdGFncmFtKTtcblxuICByZXNlcnZhdGlvblRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5kQ29udGFpbmVyKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uVGFiQ29udGVudCk7XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG5cbn0pKCk7XG5cbmNvbnN0IHN0aWNreUhlYWRlciA9ICgoKSA9PntcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c3RpY2t5RnVuY3Rpb24oKX07XG5cbiAgICAvLyBHZXQgdGhlIGhlYWRlclxuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUhlYWRlclwiKTtcblxuICAgIC8vIEdldCB0aGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZSBuYXZiYXJcbiAgdmFyIHN0aWNreSA9IGhlYWRlci5vZmZzZXRUb3A7XG5cbiAgICAvLyBBZGQgdGhlIHN0aWNreSBjbGFzcyB0byB0aGUgaGVhZGVyIHdoZW4geW91IHJlYWNoIGl0cyBzY3JvbGwgcG9zaXRpb24uIFJlbW92ZSBcInN0aWNreVwiIHdoZW4geW91IGxlYXZlIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgZnVuY3Rpb24gc3RpY2t5RnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH1cbn0pKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdE9wZW5cIikuY2xpY2soKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=