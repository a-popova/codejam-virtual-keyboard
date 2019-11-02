/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyboard_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard_us */ \"./src/javascript/keyboard_us.js\");\n/* harmony import */ var _keyboard_rus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard_rus */ \"./src/javascript/keyboard_rus.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/javascript/input.js\");\n\n\n\n\n\nwindow.onload = function () {\n  this.document.body.innerHTML = _input__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  this.document.body.innerHTML += _keyboard_us__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  this.document.body.innerHTML += _keyboard_rus__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n};\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/input.js":
/*!*********************************!*\
  !*** ./src/javascript/input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar input = \"<textarea id=\\\"result\\\" rows=6 cols=60 autofocus>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (input);\n\n//# sourceURL=webpack:///./src/javascript/input.js?");

/***/ }),

/***/ "./src/javascript/keyboard_rus.js":
/*!****************************************!*\
  !*** ./src/javascript/keyboard_rus.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboard_rus = \"<div class=\\\"keyboard rus\\\">\\n      \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key\\\"><span>\\u0451</span><sup>~</sup></div>\\n          <div class=\\\"key\\\"><span>1</span><sup>!</sup></div>\\n          <div class=\\\"key\\\"><span>2</span><sup>\\\"</sup></div>\\n          <div class=\\\"key\\\"><span>3</span><sup>\\u2116</sup></div>\\n          <div class=\\\"key\\\"><span>4</span><sup>;</sup></div>\\n          <div class=\\\"key\\\"><span>5</span><sup>%</sup></div>\\n          <div class=\\\"key\\\"><span>6</span><sup>:</sup></div>\\n          <div class=\\\"key\\\"><span>7</span><sup>?</sup></div>\\n          <div class=\\\"key\\\"><span>8</span><sup>*</sup></div>\\n          <div class=\\\"key\\\"><span>9</span><sup>(</sup></div>\\n          <div class=\\\"key\\\"><span>0</span><sup>)</sup></div>\\n          <div class=\\\"key\\\"><span>-</span><sup>_</sup></div>\\n          <div class=\\\"key\\\"><span>=</span><sup>+</sup></div>\\n          <div class=\\\"key backspace\\\"><span>Backspace</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key tab\\\"><span>Tab</span></div>\\n          <div class=\\\"key\\\"><span>\\u0439</span></div>\\n          <div class=\\\"key\\\"><span>\\u0446</span></div>\\n          <div class=\\\"key\\\"><span>\\u0443</span></div>\\n          <div class=\\\"key\\\"><span>\\u043A</span></div>\\n          <div class=\\\"key\\\"><span>\\u0435</span></div>\\n          <div class=\\\"key\\\"><span>\\u043D</span></div>\\n          <div class=\\\"key\\\"><span>\\u0433</span></div>\\n          <div class=\\\"key\\\"><span>\\u0448</span></div>\\n          <div class=\\\"key\\\"><span>\\u0449</span></div>\\n          <div class=\\\"key\\\"><span>\\u0437</span></div>\\n          <div class=\\\"key\\\"><span>\\u0445</span></div>\\n          <div class=\\\"key\\\"><span>\\u044A</span></div>\\n          <div class=\\\"key\\\"><span></span><sup>/</sup></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key capslock\\\"><span>Caps Lock</span></div>\\n          <div class=\\\"key\\\"><span>\\u0444</span></div>\\n          <div class=\\\"key\\\"><span>\\u044B</span></div>\\n          <div class=\\\"key\\\"><span>\\u0432</span></div>\\n          <div class=\\\"key\\\"><span>\\u0430</span></div>\\n          <div class=\\\"key\\\"><span>\\u043F</span></div>\\n          <div class=\\\"key\\\"><span>\\u0440</span></div>\\n          <div class=\\\"key\\\"><span>\\u043E</span></div>\\n          <div class=\\\"key\\\"><span>\\u043B</span></div>\\n          <div class=\\\"key\\\"><span>\\u0434</span></div>\\n          <div class=\\\"key\\\"><span>\\u0436</span></div>\\n          <div class=\\\"key\\\"><span>\\u044D</span></div>\\n          <div class=\\\"key enter\\\"><span>Enter</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key shift\\\"><span>Shift</span></div>\\n          <div class=\\\"key\\\"><span>\\u044F</span></div>\\n          <div class=\\\"key\\\"><span>\\u0447</span></div>\\n          <div class=\\\"key\\\"><span>\\u0441</span></div>\\n          <div class=\\\"key\\\"><span>\\u043C</span></div>\\n          <div class=\\\"key\\\"><span>\\u0438</span></div>\\n          <div class=\\\"key\\\"><span>\\u0442</span></div>\\n          <div class=\\\"key\\\"><span>\\u044C</span></div>\\n          <div class=\\\"key\\\"><span>\\u0431</span></div>\\n          <div class=\\\"key\\\"><span>\\u044E</span></div>\\n          <div class=\\\"key\\\"><span>.</span><sup>,</sup></div>\\n          <div class=\\\"key shift\\\"><span>Shift</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key ctrl\\\"><span>ctrl</span></div>\\n          <div class=\\\"key win\\\"><span>win</span></div>\\n          <div class=\\\"key alt\\\"><span>alt</span></div>\\n          <div class=\\\"key space\\\"></div>\\n          <div class=\\\"key alt\\\"><span>alt</span></div>\\n          <div class=\\\"key ctrl\\\"><span>ctrl</span></div>\\n          <div class=\\\"key left\\\"><span>\\u2190</span></div>\\n          <div class=\\\"key up\\\"><span>\\u2191</span></div>\\n          <div class=\\\"key right\\\"><span>\\u2192</span></div>\\n          <div class=\\\"key down\\\"><span>\\u2193</span></div>\\n        </div>\\n        \\n      </div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboard_rus);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_rus.js?");

/***/ }),

/***/ "./src/javascript/keyboard_us.js":
/*!***************************************!*\
  !*** ./src/javascript/keyboard_us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboard_us = \"<div class=\\\"keyboard us\\\">\\n\\n    <div class=\\\"row\\\">\\n      <div class=\\\"key\\\"><span>`</span><sup>~</sup></div>\\n      <div class=\\\"key\\\"><span>1</span><sup>!</sup></div>\\n      <div class=\\\"key\\\"><span>2</span><sup>@</sup></div>\\n      <div class=\\\"key\\\"><span>3</span><sup>#</sup></div>\\n      <div class=\\\"key\\\"><span>4</span><sup>$</sup></div>\\n      <div class=\\\"key\\\"><span>5</span><sup>%</sup></div>\\n      <div class=\\\"key\\\"><span>6</span><sup>^</sup></div>\\n      <div class=\\\"key\\\"><span>7</span><sup>&</sup></div>\\n      <div class=\\\"key\\\"><span>8</span><sup>*</sup></div>\\n      <div class=\\\"key\\\"><span>9</span><sup>(</sup></div>\\n      <div class=\\\"key\\\"><span>0</span><sup>)</sup></div>\\n      <div class=\\\"key\\\"><span>-</span><sup>_</sup></div>\\n      <div class=\\\"key\\\"><span>=</span><sup>+</sup></div>\\n      <div class=\\\"key backspace\\\"><span>Backspace</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key tab\\\"><span>Tab</span></div>\\n      <div class=\\\"key\\\"><span>q</span></div>\\n      <div class=\\\"key\\\"><span>w</span></div>\\n      <div class=\\\"key\\\"><span>e</span></div>\\n      <div class=\\\"key\\\"><span>r</span></div>\\n      <div class=\\\"key\\\"><span>t</span></div>\\n      <div class=\\\"key\\\"><span>y</span></div>\\n      <div class=\\\"key\\\"><span>u</span></div>\\n      <div class=\\\"key\\\"><span>i</span></div>\\n      <div class=\\\"key\\\"><span>o</span></div>\\n      <div class=\\\"key\\\"><span>p</span></div>\\n      <div class=\\\"key\\\"><span>[</span></div>\\n      <div class=\\\"key\\\"><span>]</span></div>\\n      <div class=\\\"key\\\"><span></span><sup>|</sup></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key capslock\\\"><span>Caps Lock</span></div>\\n      <div class=\\\"key\\\"><span>a</span></div>\\n      <div class=\\\"key\\\"><span>s</span></div>\\n      <div class=\\\"key\\\"><span>d</span></div>\\n      <div class=\\\"key\\\"><span>f</span></div>\\n      <div class=\\\"key\\\"><span>g</span></div>\\n      <div class=\\\"key\\\"><span>h</span></div>\\n      <div class=\\\"key\\\"><span>j</span></div>\\n      <div class=\\\"key\\\"><span>k</span></div>\\n      <div class=\\\"key\\\"><span>l</span></div>\\n      <div class=\\\"key\\\"><span>;</span></div>\\n      <div class=\\\"key\\\"><span>'</span><sup>\\\"</sup></div>\\n      <div class=\\\"key enter\\\"><span>Enter</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key shift\\\"><span>Shift</span></div>\\n      <div class=\\\"key\\\"><span>z</span></div>\\n      <div class=\\\"key\\\"><span>x</span></div>\\n      <div class=\\\"key\\\"><span>c</span></div>\\n      <div class=\\\"key\\\"><span>v</span></div>\\n      <div class=\\\"key\\\"><span>b</span></div>\\n      <div class=\\\"key\\\"><span>n</span></div>\\n      <div class=\\\"key\\\"><span>m</span></div>\\n      <div class=\\\"key\\\"><span>,</span><sup><</sup></div>\\n      <div class=\\\"key\\\"><span>.</span><sup>></sup></div>\\n      <div class=\\\"key\\\"><span>/</span><sup>?</sup></div>\\n      <div class=\\\"key shift\\\"><span>Shift</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key ctrl\\\"><span>ctrl</span></div>\\n      <div class=\\\"key win\\\"><span>win</span></div>\\n      <div class=\\\"key alt\\\"><span>alt</span></div>\\n      <div class=\\\"key space\\\"></div>\\n      <div class=\\\"key alt\\\"><span>alt</span></div>\\n      <div class=\\\"key ctrl\\\"><span>ctrl</span></div>\\n      <div class=\\\"key left\\\"><span>\\u2190</span></div>\\n      <div class=\\\"key up\\\"><span>\\u2191</span></div>\\n      <div class=\\\"key right\\\"><span>\\u2192</span></div>\\n      <div class=\\\"key down\\\"><span>\\u2193</span></div>\\n    </div>\\n    \\n</div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboard_us);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_us.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });