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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyboard_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard_us */ \"./src/javascript/keyboard_us.js\");\n/* harmony import */ var _keyboard_rus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard_rus */ \"./src/javascript/keyboard_rus.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/javascript/input.js\");\n\n\n\n\n\nwindow.onload = function () {\n  this.document.body.innerHTML = _input__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  this.document.body.innerHTML += _keyboard_us__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  this.document.body.innerHTML += _keyboard_rus__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  this.document.body.addEventListener(\"click\", click);\n  this.document.body.addEventListener(\"keydown\", function (event) {\n    highlight(document.getElementById(event.code)), type(document.getElementById(event.code)), remove(document.getElementById(event.code));\n  });\n  this.document.body.addEventListener(\"keyup\", function (event) {\n    highlightOff(document.getElementById(event.code));\n  });\n};\n\nfunction highlight(node) {\n  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {\n    node = node.parentElement;\n  }\n\n  node.classList.add(\"active\");\n  result.focus();\n}\n\nfunction highlightOff(node) {\n  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {\n    node = node.parentElement;\n  }\n\n  node.classList.remove(\"active\");\n  result.focus();\n}\n\nfunction typeVirtual(char) {\n  var result = document.body.querySelector(\"#result\");\n  result.setAttribute(\"readonly\", true);\n\n  if (char.tagName === 'DIV') {\n    char = char.firstElementChild;\n  } else if (char.tagName === 'SUP') {\n    char = char.previousElementSibling;\n  } else if (char.textContent === \"Backspace\") {\n    remove(char.textContent);\n  }\n\n  result.value += char.textContent;\n  result.focus();\n}\n\nfunction type(char) {\n  result.setAttribute(\"readonly\", true);\n\n  if (char.tagName === 'DIV') {\n    char = char.firstElementChild;\n  } else if (char.tagName === 'SUP') {\n    char = char.previousElementSibling;\n  }\n\n  result.value += char.textContent;\n  result.focus();\n}\n\nfunction remove(char) {\n  if (char === \"Backspace\") {\n    result.value.substring(0, result.value.length - 1);\n  }\n}\n\nfunction click() {\n  var target = event.target;\n  highlight(target);\n  typeVirtual(target);\n  target = target.parentNode;\n  result.focus();\n}\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboard_rus = \"<div class=\\\"keyboard rus\\\">\\n      \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key\\\" id=\\\"Backquote><span>\\u0451</span><sup>~</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit1\\\"><span>1</span><sup>!</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit2\\\"><span>2</span><sup>\\\"</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit3\\\"><span>3</span><sup>\\u2116</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit4\\\"><span>4</span><sup>;</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit5\\\"><span>5</span><sup>%</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit6\\\"><span>6</span><sup>:</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit7\\\"><span>7</span><sup>?</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit8\\\"><span>8</span><sup>*</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit9\\\"><span>9</span><sup>(</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Digit0\\\"><span>0</span><sup>)</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Minus\\\"><span>-</span><sup>_</sup></div>\\n          <div class=\\\"key\\\" id=\\\"Equal\\\"><span>=</span><sup>+</sup></div>\\n          <div class=\\\"key backspace\\\" id=\\\"Backspace\\\"><span>Backspace</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key tab\\\" id=\\\"Tab\\\"><span>Tab</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyQ\\\"><span>\\u0439</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyW\\\"><span>\\u0446</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyE\\\"><span>\\u0443</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyR\\\"><span>\\u043A</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyT\\\"><span>\\u0435</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyY\\\"><span>\\u043D</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyU\\\"><span>\\u0433</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyI\\\"><span>\\u0448</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyO\\\"><span>\\u0449</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyP\\\"><span>\\u0437</span></div>\\n          <div class=\\\"key\\\" id=\\\"BracketLeft\\\"><span>\\u0445</span></div>\\n          <div class=\\\"key\\\" id=\\\"BracketRight\\\"><span>\\u044A</span></div>\\n          <div class=\\\"key\\\" id=\\\"Backslash\\\"><span>\\\\</span><sup>/</sup></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key capslock\\\" id=\\\"CapsLock\\\"><span>Caps Lock</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyA\\\"><span>\\u0444</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyS\\\"><span>\\u044B</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyD\\\"><span>\\u0432</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyF\\\"><span>\\u0430</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyG\\\"><span>\\u043F</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyH\\\"><span>\\u0440</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyJ\\\"><span>\\u043E</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyK\\\"><span>\\u043B</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyL\\\"><span>\\u0434</span></div>\\n          <div class=\\\"key\\\" id=\\\"Semicolon\\\"><span>\\u0436</span></div>\\n          <div class=\\\"key\\\" id=\\\"Quote\\\"><span>\\u044D</span></div>\\n          <div class=\\\"key enter\\\" id=\\\"Enter\\\"><span>Enter</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key shift\\\" id=\\\"ShiftLeft\\\"><span>Shift</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyZ\\\"><span>\\u044F</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyX\\\"><span>\\u0447</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyC\\\"><span>\\u0441</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyV\\\"><span>\\u043C</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyB\\\"><span>\\u0438</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyN\\\"><span>\\u0442</span></div>\\n          <div class=\\\"key\\\" id=\\\"KeyM\\\"><span>\\u044C</span></div>\\n          <div class=\\\"key\\\" id=\\\"Comma\\\"><span>\\u0431</span></div>\\n          <div class=\\\"key\\\" id=\\\"Period\\\"><span>\\u044E</span></div>\\n          <div class=\\\"key\\\" id=\\\"Slash\\\"><span>.</span><sup>,</sup></div>\\n          <div class=\\\"key shift\\\" id=\\\"ShiftRight\\\"><span>Shift</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key ctrl\\\" id=\\\"ControlLeft\\\"><span>ctrl</span></div>\\n          <div class=\\\"key win\\\" id=\\\"MetaLeft\\\"><span>win</span></div>\\n          <div class=\\\"key alt\\\" id=\\\"AltLeft\\\"><span>alt</span></div>\\n          <div class=\\\"key space\\\" id=\\\"Space\\\"></div>\\n          <div class=\\\"key alt\\\" id=\\\"AltRight\\\"><span>alt</span></div>\\n          <div class=\\\"key ctrl\\\" id=\\\"ControlRight\\\"><span>ctrl</span></div>\\n          <div class=\\\"key left\\\" id=\\\"ArrowLeft\\\"><span>\\u2190</span></div>\\n          <div class=\\\"key up\\\" id=\\\"ArrowUp\\\"><span>\\u2191</span></div>\\n          <div class=\\\"key right\\\" id=\\\"ArrowRight\\\"><span>\\u2192</span></div>\\n          <div class=\\\"key down\\\" id=\\\"ArrowDown\\\"><span>\\u2193</span></div>\\n        </div>\\n        \\n      </div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboard_rus);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_rus.js?");

/***/ }),

/***/ "./src/javascript/keyboard_us.js":
/*!***************************************!*\
  !*** ./src/javascript/keyboard_us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboard_us = \"<div class=\\\"keyboard us\\\">\\n\\n    <div class=\\\"row\\\">\\n      <div class=\\\"key\\\" id=\\\"Backquote\\\"><span>`</span><sup>~</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit1\\\"><span>1</span><sup>!</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit2\\\"><span>2</span><sup>@</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit3\\\"><span>3</span><sup>#</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit4\\\"><span>4</span><sup>$</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit5\\\"><span>5</span><sup>%</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit6\\\"><span>6</span><sup>^</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit7\\\"><span>7</span><sup>&</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit8\\\"><span>8</span><sup>*</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit9\\\"><span>9</span><sup>(</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Digit0\\\"><span>0</span><sup>)</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Minus\\\"><span>-</span><sup>_</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Equal\\\"><span>=</span><sup>+</sup></div>\\n      <div class=\\\"key backspace\\\" id=\\\"Backspace\\\"><span>Backspace</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key tab\\\" id=\\\"Tab\\\"><span>Tab</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyQ\\\"><span>q</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyW\\\"><span>w</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyE\\\"><span>e</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyR\\\"><span>r</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyT\\\"><span>t</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyY\\\"><span>y</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyU\\\"><span>u</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyI\\\"><span>i</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyO\\\"><span>o</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyP\\\"><span>p</span></div>\\n      <div class=\\\"key\\\" id=\\\"BracketLeft\\\"><span>[</span></div>\\n      <div class=\\\"key\\\" id=\\\"BracketRight\\\"><span>]</span></div>\\n      <div class=\\\"key\\\" id=\\\"Backslash\\\"><span>\\\\</span><sup>|</sup></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key capslock\\\" id=\\\"CapsLock\\\"><span>Caps Lock</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyA\\\"><span>a</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyS\\\"><span>s</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyD\\\"><span>d</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyF\\\"><span>f</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyG\\\"><span>g</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyH\\\"><span>h</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyJ\\\"><span>j</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyK\\\"><span>k</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyL\\\"><span>l</span></div>\\n      <div class=\\\"key\\\" id=\\\"Semicolon\\\"><span>;</span></div>\\n      <div class=\\\"key\\\" id=\\\"Quote\\\"><span>'</span><sup>\\\"</sup></div>\\n      <div class=\\\"key enter\\\" id=\\\"Enter\\\"><span>Enter</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key shift\\\" id=\\\"ShiftLeft\\\"><span>Shift</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyZ\\\"><span>z</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyX\\\"><span>x</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyC\\\"><span>c</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyV\\\"><span>v</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyB\\\"><span>b</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyN\\\"><span>n</span></div>\\n      <div class=\\\"key\\\" id=\\\"KeyM\\\"><span>m</span></div>\\n      <div class=\\\"key\\\" id=\\\"Comma\\\"><span>,</span><sup><</sup></div>\\n      <div class=\\\"key\\\" id=\\\"Period\\\"><span>.</span><sup>></sup></div>\\n      <div class=\\\"key\\\" id=\\\"Slash\\\"><span>/</span><sup>?</sup></div>\\n      <div class=\\\"key shift\\\" id=\\\"ShiftRight\\\"><span>Shift</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key ctrl\\\" id=\\\"ControlLeft\\\"><span>ctrl</span></div>\\n      <div class=\\\"key win\\\" id=\\\"MetaLeft\\\"><span>win</span></div>\\n      <div class=\\\"key alt\\\" id=\\\"AltLeft\\\"><span>alt</span></div>\\n      <div class=\\\"key space\\\" id=\\\"Space\\\"></div>\\n      <div class=\\\"key alt\\\" id=\\\"AltRight\\\"><span>alt</span></div>\\n      <div class=\\\"key ctrl\\\" id=\\\"ControlRight\\\"><span>ctrl</span></div>\\n      <div class=\\\"key left\\\" id=\\\"ArrowLeft\\\"><span>\\u2190</span></div>\\n      <div class=\\\"key up\\\" id=\\\"ArrowUp\\\"><span>\\u2191</span></div>\\n      <div class=\\\"key right\\\" id=\\\"ArrowRight\\\"><span>\\u2192</span></div>\\n      <div class=\\\"key down\\\" id=\\\"ArrowDown\\\"><span>\\u2193</span></div>\\n    </div>\\n    \\n</div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboard_us);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_us.js?");

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