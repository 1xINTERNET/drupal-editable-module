(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Editable"), require("PropTypes"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["Editable", "PropTypes", "React"], factory);
	else if(typeof exports === 'object')
		exports["EditableBaseComponents"] = factory(require("Editable"), require("PropTypes"), require("React"));
	else
		root["EditableBaseComponents"] = factory(root["Editable"], root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1xinternet_editable_core__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.uniqueid/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.uniqueid/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to generate unique IDs. */\nvar idCounter = 0;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\n/**\n * Generates a unique ID. If `prefix` is given, the ID is appended to it.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {string} [prefix=''] The value to prefix the ID with.\n * @returns {string} Returns the unique ID.\n * @example\n *\n * _.uniqueId('contact_');\n * // => 'contact_104'\n *\n * _.uniqueId();\n * // => '105'\n */\nfunction uniqueId(prefix) {\n  var id = ++idCounter;\n  return toString(prefix) + id;\n}\n\nmodule.exports = uniqueId;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://EditableBaseComponents/./node_modules/lodash.uniqueid/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack://EditableBaseComponents/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_uniqueid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.uniqueid */ \"./node_modules/lodash.uniqueid/index.js\");\n/* harmony import */ var lodash_uniqueid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @1xinternet/editable-core */ \"@1xinternet/editable-core\");\n/* harmony import */ var _1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner */ \"./src/components/Spinner.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    position: absolute;\\n    right: 0.5em;\\n    top: 0;\\n    bottom: 0;\\n    display: flex;\\n    align-items: center;\\n    font-size: 0.75em;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    position: relative;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar styles = {\n  inputWrapper: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"css\"])(_templateObject()),\n  spinnerWrapper: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"css\"])(_templateObject2())\n};\nvar Input =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(Input, _PureComponent);\n\n  function Input(props) {\n    var _this;\n\n    _classCallCheck(this, Input);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));\n    var name = props.name;\n    _this.name = name || lodash_uniqueid__WEBPACK_IMPORTED_MODULE_2___default()(\"input_\");\n    return _this;\n  }\n\n  _createClass(Input, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          value = _this$props.value,\n          type = _this$props.type,\n          onChange = _this$props.onChange,\n          placeholder = _this$props.placeholder,\n          label = _this$props.label,\n          propPath = _this$props.propPath,\n          className = _this$props.className,\n          labelClassName = _this$props.labelClassName,\n          inputClassName = _this$props.inputClassName,\n          inputWrapperClassName = _this$props.inputWrapperClassName,\n          spinnerClassName = _this$props.spinnerClassName,\n          disabled = _this$props.disabled,\n          loading = _this$props.loading;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(\"form-item\", \"editable--form-item\", \"editable--form-item--input\", className)\n      }, label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(\"editable--label\", labelClassName),\n        htmlFor: this.name\n      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(\"editable--input-wrapper\", styles.inputWrapper, inputWrapperClassName)\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(\"form-text\", \"editable--form-text\", \"editable--form-text--input\", inputClassName),\n        type: type,\n        value: value,\n        \"data-prop-path\": propPath,\n        placeholder: placeholder,\n        onChange: onChange,\n        id: this.name,\n        disabled: disabled\n      }), loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: styles.spinnerWrapper\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], {\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_3__[\"cx\"])(\"editable--spinner--input\", spinnerClassName)\n      }))));\n    }\n  }]);\n\n  return Input;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n_defineProperty(Input, \"propTypes\", {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([\"text\", \"email\", \"password\", \"number\", \"date\"]),\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  propPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  inputClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  inputWrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  spinnerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n});\n\n_defineProperty(Input, \"defaultProps\", {\n  value: \"\",\n  type: \"text\",\n  placeholder: \"\",\n  label: null,\n  propPath: null,\n  name: null,\n  className: \"\",\n  labelClassName: \"\",\n  inputClassName: \"\",\n  inputWrapperClassName: \"\",\n  spinnerClassName: \"\",\n  loading: false,\n  disabled: false\n});\n\n//# sourceURL=webpack://EditableBaseComponents/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Spinner.js":
/*!***********************************!*\
  !*** ./src/components/Spinner.js ***!
  \***********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return Spinner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @1xinternet/editable-core */ \"@1xinternet/editable-core\");\n/* harmony import */ var _1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    border-radius: 50%;\\n    width: 1em;\\n    height: 1em;\\n    border: 0.25em solid rgba(0, 0, 0, 0.1);\\n    border-top: 0.25em solid #0074bd;\\n    transform-origin: center;\\n    animation: \", \" 0.8s infinite linear;\\n    will-change: transform;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar rotatingSpinner = Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject());\nvar styles = {\n  spinner: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject2(), rotatingSpinner)\n};\nvar Spinner =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(Spinner, _PureComponent);\n\n  function Spinner() {\n    _classCallCheck(this, Spinner);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));\n  }\n\n  _createClass(Spinner, [{\n    key: \"render\",\n    value: function render() {\n      var className = this.props.className;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"aria-label\": \"Loading\",\n        className: Object(_1xinternet_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"cx\"])(styles.spinner, \"editable--spinner\", className)\n      });\n    }\n  }]);\n\n  return Spinner;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n_defineProperty(Spinner, \"propTypes\", {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n_defineProperty(Spinner, \"defaultProps\", {\n  className: \"\"\n});\n\n//# sourceURL=webpack://EditableBaseComponents/./src/components/Spinner.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Input, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]; });\n\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner */ \"./src/components/Spinner.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"]; });\n\n\n\n\n//# sourceURL=webpack://EditableBaseComponents/./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Input, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"Input\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"Spinner\"]; });\n\n\n\n//# sourceURL=webpack://EditableBaseComponents/./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/martin/Code/demo-commerce/web/modules/contrib/editable/modules/editable_base_components/js/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://EditableBaseComponents/multi_./src/index.js?");

/***/ }),

/***/ "@1xinternet/editable-core":
/*!***************************!*\
  !*** external "Editable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__1xinternet_editable_core__;\n\n//# sourceURL=webpack://EditableBaseComponents/external_%22Editable%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://EditableBaseComponents/external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://EditableBaseComponents/external_%22React%22?");

/***/ })

/******/ });
});