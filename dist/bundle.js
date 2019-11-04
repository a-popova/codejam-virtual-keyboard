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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyboard_rus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard_rus */ \"./src/javascript/keyboard_rus.js\");\n/* harmony import */ var _keyboard_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard_us */ \"./src/javascript/keyboard_us.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/javascript/input.js\");\n\n\n\n\nvar language = 'us-';\n\nfunction getKeyboardLanguage() {\n  var keyboard = document.querySelectorAll('.keyboard');\n\n  if (keyboard[0].classList.contains('hide')) {\n    language = 'rus-';\n  } else if (keyboard[1].classList.contains('hide')) {\n    language = 'us-';\n  }\n}\n\nvar ctrl = false;\nvar shift = false;\nvar caps = false;\n\nfunction highlight(node) {\n  node.classList.add('active', 'move');\n}\n\nfunction highlightOnClick(node) {\n  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {\n    node = node.parentElement;\n  }\n\n  if (node.tagName !== 'TEXTAREA') {\n    node.classList.add('active', 'move');\n  }\n\n  if (node.textContent !== 'Caps Lock') {\n    setTimeout(function () {\n      node.classList.remove('active', 'move');\n    }, 300);\n  }\n}\n\nfunction highlightOff(node) {\n  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {\n    node = node.parentElement;\n  }\n\n  if (node.textContent !== 'Caps Lock') {\n    node.classList.remove('active', 'move');\n  }\n\n  ctrl = false;\n  shift = false;\n}\n\nfunction type(char) {\n  var result = document.body.querySelector('#result');\n\n  if (char.textContent === 'Backspace') {\n    result.value = result.value.substring(0, result.value.length - 1);\n  } else if (char.textContent === 'ctrl') {\n    ctrl = true;\n    switchLanguage();\n  } else if (char.textContent === 'Shift') {\n    shift = true;\n    switchLanguage();\n  } else if (char.textContent === 'Enter') {\n    result.value += '\\n';\n  } else if (char.textContent === 'Caps Lock') {\n    if (caps === false) {\n      highlight(char);\n      caps = true;\n    } else {\n      caps = false;\n      char.classList.remove('active', 'move');\n    }\n  } else if (char.textContent === '' && char.tagName !== 'TEXTAREA') {\n    result.value += ' ';\n  } else if (char.tagName === 'DIV') {\n    if (shift === true) {\n      char = char.lastElementChild;\n      result.value += char.textContent.toUpperCase();\n    } else if (caps === true) {\n      char = char.firstElementChild;\n      result.value += char.textContent.toUpperCase();\n    } else {\n      char = char.firstElementChild;\n      result.value += char.textContent;\n    }\n  } else if (char.tagName === 'SUP') {\n    char = char.previousElementSibling;\n    result.value += char.textContent;\n  } else {\n    result.value += char.textContent;\n  }\n\n  result.focus();\n}\n\nfunction click() {\n  var _event = event,\n      target = _event.target;\n\n  if (target.tagName !== 'BODY') {\n    highlightOnClick(target);\n    type(target);\n  }\n\n  target = target.parentNode;\n}\n\nfunction switchLanguage() {\n  var keyboardView = document.querySelectorAll('.keyboard');\n\n  if (shift === true && ctrl === true) {\n    for (var i = 0; i < keyboardView.length; i++) {\n      if (keyboardView[i].classList.contains('hide')) {\n        keyboardView[i].classList.remove('hide');\n      } else {\n        keyboardView[i].classList.add('hide');\n      }\n    }\n  }\n\n  getKeyboardLanguage();\n  localStorage.setItem('language', language);\n}\n\nwindow.onload = function () {\n  this.document.body.innerHTML = _input__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  this.document.body.innerHTML += _keyboard_us__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  this.document.body.innerHTML += _keyboard_rus__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  var keyboard = document.querySelectorAll('.keyboard');\n\n  if (localStorage.getItem('language' === 'us-')) {\n    keyboard[1].classList.add('hide');\n  } else if (localStorage.getItem('language') === 'rus-') {\n    keyboard[0].classList.add('hide');\n  } else {\n    keyboard[1].classList.add('hide');\n  }\n\n  document.body.addEventListener('keydown', function (event) {\n    getKeyboardLanguage();\n    event.preventDefault();\n    highlight(document.getElementById(\"\".concat(language).concat(event.code)));\n    type(document.getElementById(\"\".concat(language).concat(event.code)));\n  });\n  document.body.addEventListener('keyup', function (event) {\n    getKeyboardLanguage();\n    highlightOff(document.getElementById(\"\".concat(language).concat(event.code)));\n  });\n  this.document.body.addEventListener('click', function () {\n    click();\n  });\n};\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/input.js":
/*!*********************************!*\
  !*** ./src/javascript/input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar input = '<textarea id=\"result\" rows=6 cols=60 autofocus>';\n/* harmony default export */ __webpack_exports__[\"default\"] = (input);\n\n//# sourceURL=webpack:///./src/javascript/input.js?");

/***/ }),

/***/ "./src/javascript/keyboard_rus.js":
/*!****************************************!*\
  !*** ./src/javascript/keyboard_rus.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboardRus = \"<div class=\\\"keyboard rus\\\">\\n        <h4>Change language by clicking <span class=\\\"key\\\">Shift</span> + <span class=\\\"key\\\">Ctrl</span></h4>\\n      \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key\\\" id=\\\"rus-Backquote\\\"><span>\\u0451</span><sup>~</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit1\\\"><span>1</span><sup>!</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit2\\\"><span>2</span><sup>\\\"</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit3\\\"><span>3</span><sup>\\u2116</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit4\\\"><span>4</span><sup>;</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit5\\\"><span>5</span><sup>%</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit6\\\"><span>6</span><sup>:</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit7\\\"><span>7</span><sup>?</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit8\\\"><span>8</span><sup>*</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit9\\\"><span>9</span><sup>(</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Digit0\\\"><span>0</span><sup>)</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Minus\\\"><span>-</span><sup>_</sup></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Equal\\\"><span>=</span><sup>+</sup></div>\\n          <div class=\\\"key backspace\\\" id=\\\"rus-Backspace\\\"><span>Backspace</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key tab\\\" id=\\\"rus-Tab\\\"><span>Tab</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyQ\\\"><span>\\u0439</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyW\\\"><span>\\u0446</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyE\\\"><span>\\u0443</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyR\\\"><span>\\u043A</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyT\\\"><span>\\u0435</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyY\\\"><span>\\u043D</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyU\\\"><span>\\u0433</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyI\\\"><span>\\u0448</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyO\\\"><span>\\u0449</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyP\\\"><span>\\u0437</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-BracketLeft\\\"><span>\\u0445</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-BracketRight\\\"><span>\\u044A</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Backslash\\\"><span>\\\\</span><sup>/</sup></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key capslock\\\" id=\\\"rus-CapsLock\\\"><span>Caps Lock</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyA\\\"><span>\\u0444</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyS\\\"><span>\\u044B</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyD\\\"><span>\\u0432</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyF\\\"><span>\\u0430</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyG\\\"><span>\\u043F</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyH\\\"><span>\\u0440</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyJ\\\"><span>\\u043E</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyK\\\"><span>\\u043B</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyL\\\"><span>\\u0434</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Semicolon\\\"><span>\\u0436</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Quote\\\"><span>\\u044D</span></div>\\n          <div class=\\\"key enter\\\" id=\\\"rus-Enter\\\"><span>Enter</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key shift\\\" id=\\\"rus-ShiftLeft\\\"><span>Shift</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyZ\\\"><span>\\u044F</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyX\\\"><span>\\u0447</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyC\\\"><span>\\u0441</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyV\\\"><span>\\u043C</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyB\\\"><span>\\u0438</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyN\\\"><span>\\u0442</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-KeyM\\\"><span>\\u044C</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Comma\\\"><span>\\u0431</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Period\\\"><span>\\u044E</span></div>\\n          <div class=\\\"key\\\" id=\\\"rus-Slash\\\"><span>.</span><sup>,</sup></div>\\n          <div class=\\\"key shift\\\" id=\\\"rus-ShiftRight\\\"><span>Shift</span></div>\\n        </div>\\n        \\n        <div class=\\\"row\\\">\\n          <div class=\\\"key ctrl\\\" id=\\\"rus-ControlLeft\\\"><span>ctrl</span></div>\\n          <div class=\\\"key win\\\" id=\\\"rus-MetaLeft\\\"><span>win</span></div>\\n          <div class=\\\"key alt\\\" id=\\\"rus-AltLeft\\\"><span>alt</span></div>\\n          <div class=\\\"key space\\\" id=\\\"rus-Space\\\"></div>\\n          <div class=\\\"key alt\\\" id=\\\"rus-AltRight\\\"><span>alt</span></div>\\n          <div class=\\\"key ctrl\\\" id=\\\"rus-ControlRight\\\"><span>ctrl</span></div>\\n          <!--<div class=\\\"key left\\\" id=\\\"rus-ArrowLeft\\\"><span>\\u2190</span></div>\\n          <div class=\\\"key up\\\" id=\\\"rus-ArrowUp\\\"><span>\\u2191</span></div>\\n          <div class=\\\"key right\\\" id=\\\"rus-ArrowRight\\\"><span>\\u2192</span></div>\\n          <div class=\\\"key down\\\" id=\\\"rus-ArrowDown\\\"><span>\\u2193</span></div>-->\\n        </div>\\n        \\n      </div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboardRus);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_rus.js?");

/***/ }),

/***/ "./src/javascript/keyboard_us.js":
/*!***************************************!*\
  !*** ./src/javascript/keyboard_us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keyboardUs = \"<div class=\\\"keyboard us\\\">\\n    <h4>Change language by clicking <span class=\\\"key\\\">Shift</span> + <span class=\\\"key\\\">Ctrl</span></h4>\\n\\n    <div class=\\\"row\\\">\\n      <div class=\\\"key\\\" id=\\\"us-Backquote\\\"><span>`</span><sup>~</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit1\\\"><span>1</span><sup>!</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit2\\\"><span>2</span><sup>@</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit3\\\"><span>3</span><sup>#</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit4\\\"><span>4</span><sup>$</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit5\\\"><span>5</span><sup>%</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit6\\\"><span>6</span><sup>^</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit7\\\"><span>7</span><sup>&</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit8\\\"><span>8</span><sup>*</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit9\\\"><span>9</span><sup>(</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Digit0\\\"><span>0</span><sup>)</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Minus\\\"><span>-</span><sup>_</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Equal\\\"><span>=</span><sup>+</sup></div>\\n      <div class=\\\"key backspace\\\" id=\\\"us-Backspace\\\"><span>Backspace</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key tab\\\" id=\\\"us-Tab\\\"><span>Tab</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyQ\\\"><span>q</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyW\\\"><span>w</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyE\\\"><span>e</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyR\\\"><span>r</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyT\\\"><span>t</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyY\\\"><span>y</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyU\\\"><span>u</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyI\\\"><span>i</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyO\\\"><span>o</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyP\\\"><span>p</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-BracketLeft\\\"><span>[</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-BracketRight\\\"><span>]</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-Backslash\\\"><span>\\\\</span><sup>|</sup></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key capslock\\\" id=\\\"us-CapsLock\\\"><span>Caps Lock</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyA\\\"><span>a</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyS\\\"><span>s</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyD\\\"><span>d</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyF\\\"><span>f</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyG\\\"><span>g</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyH\\\"><span>h</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyJ\\\"><span>j</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyK\\\"><span>k</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyL\\\"><span>l</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-Semicolon\\\"><span>;</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-Quote\\\"><span>'</span><sup>\\\"</sup></div>\\n      <div class=\\\"key enter\\\" id=\\\"us-Enter\\\"><span>Enter</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key shift\\\" id=\\\"us-ShiftLeft\\\"><span>Shift</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyZ\\\"><span>z</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyX\\\"><span>x</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyC\\\"><span>c</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyV\\\"><span>v</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyB\\\"><span>b</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyN\\\"><span>n</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-KeyM\\\"><span>m</span></div>\\n      <div class=\\\"key\\\" id=\\\"us-Comma\\\"><span>,</span><sup><</sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Period\\\"><span>.</span><sup>></sup></div>\\n      <div class=\\\"key\\\" id=\\\"us-Slash\\\"><span>/</span><sup>?</sup></div>\\n      <div class=\\\"key shift\\\" id=\\\"us-ShiftRight\\\"><span>Shift</span></div>\\n    </div>\\n    \\n    <div class=\\\"row\\\">\\n      <div class=\\\"key ctrl\\\" id=\\\"us-ControlLeft\\\"><span>ctrl</span></div>\\n      <div class=\\\"key win\\\" id=\\\"us-MetaLeft\\\"><span>win</span></div>\\n      <div class=\\\"key alt\\\" id=\\\"us-AltLeft\\\"><span>alt</span></div>\\n      <div class=\\\"key space\\\" id=\\\"us-Space\\\"></div>\\n      <div class=\\\"key alt\\\" id=\\\"us-AltRight\\\"><span>alt</span></div>\\n      <div class=\\\"key ctrl\\\" id=\\\"us-ControlRight\\\"><span>ctrl</span></div>\\n      <!--<div class=\\\"key left\\\" id=\\\"us-ArrowLeft\\\"><span>\\u2190</span></div>\\n      <div class=\\\"key up\\\" id=\\\"us-ArrowUp\\\"><span>\\u2191</span></div>\\n      <div class=\\\"key right\\\" id=\\\"us-ArrowRight\\\"><span>\\u2192</span></div>\\n      <div class=\\\"key down\\\" id=\\\"us-ArrowDown\\\"><span>\\u2193</span></div>-->\\n    </div>\\n    \\n</div>\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboardUs);\n\n//# sourceURL=webpack:///./src/javascript/keyboard_us.js?");

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