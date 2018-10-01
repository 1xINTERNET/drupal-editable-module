(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Editable_Core"));
	else if(typeof define === 'function' && define.amd)
		define(["Editable_Core"], factory);
	else if(typeof exports === 'object')
		exports["Editable_Core_Behaviour"] = factory(require("Editable_Core"));
	else
		root["Editable_Core_Behaviour"] = factory(root["Editable_Core"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__drupal_editable_core__) {
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

/***/ "./src/editableRegistry.js":
/*!*********************************!*\
  !*** ./src/editableRegistry.js ***!
  \*********************************/
/*! exports provided: EditableRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditableRegistry\", function() { return EditableRegistry; });\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @drupal-editable/core */ \"@drupal-editable/core\");\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar EditableRegistry =\n/*#__PURE__*/\nfunction () {\n  function EditableRegistry() {\n    _classCallCheck(this, EditableRegistry);\n\n    this.initHooks = new Set();\n    this.middlewares = new Set();\n    this.enhancers = new Set();\n    this.reducers = {};\n    this.store = null;\n    this.initialized = false;\n  }\n\n  _createClass(EditableRegistry, [{\n    key: \"addMiddleWare\",\n    value: function addMiddleWare(middleware) {\n      this.middlewares.add(middleware);\n    }\n  }, {\n    key: \"addEnhancer\",\n    value: function addEnhancer(enhancer) {\n      this.enhancers.add(enhancer);\n    }\n  }, {\n    key: \"addReducer\",\n    value: function addReducer(key, reducer) {\n      this.reducers[key] = reducer;\n    }\n  }, {\n    key: \"callInitHooks\",\n    value: function callInitHooks() {\n      var _this = this;\n\n      this.initHooks.forEach(function (hook) {\n        return hook(_this.store);\n      });\n    }\n  }, {\n    key: \"addInitHook\",\n    value: function addInitHook(hook) {\n      this.initHooks.add(hook);\n    }\n  }, {\n    key: \"initialize\",\n    value: function () {\n      var _initialize = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var settings,\n            _args = arguments;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                settings = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};\n                _context.next = 3;\n                return Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_objectSpread({\n                  reducers: this.reducers,\n                  middlewares: this.middlewares,\n                  enhancers: this.enhancers\n                }, settings));\n\n              case 3:\n                this.store = _context.sent;\n                this.callInitHooks();\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function initialize() {\n        return _initialize.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return EditableRegistry;\n}();\n\n//# sourceURL=webpack://Editable_Core_Behaviour/./src/editableRegistry.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editableRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editableRegistry */ \"./src/editableRegistry.js\");\n\n\n(function ($, window, Drupal, drupalSettings) {\n  // Instantiate the registry, this will be used by other modules to attach\n  // their own middlewares, reducers etc.\n  window.Editable_Registry = new _editableRegistry__WEBPACK_IMPORTED_MODULE_0__[\"EditableRegistry\"]();\n  var domain = \"\".concat(window.location.protocol, \"//\").concat(window.location.host);\n  Drupal.behaviors.editable_core_init = {\n    attach: function attach(context) {\n      // Only do this on the root doc ready call.\n      if (context !== document) {\n        return;\n      }\n\n      $(context).once(\"initialise-editable-core\").each(function () {\n        // Initialize the actual store.\n        // @TODO make this settable via drupalSettings\n        window.Editable_Registry.initialize({\n          apiEndpoint: \"\".concat(domain, \"/jsonapi\"),\n          csrfTokenEndpoint: \"\".concat(domain, \"/session/token\")\n        }, function () {\n          $(window).trigger(\"editable-initialized\");\n        });\n      });\n    }\n  };\n})(jQuery, window, Drupal, drupalSettings);\n\n//# sourceURL=webpack://Editable_Core_Behaviour/./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/martin/Code/demo-commerce/web/modules/contrib/editable/js/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://Editable_Core_Behaviour/multi_./src/index.js?");

/***/ }),

/***/ "@drupal-editable/core":
/*!********************************!*\
  !*** external "Editable_Core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_core__;\n\n//# sourceURL=webpack://Editable_Core_Behaviour/external_%22Editable_Core%22?");

/***/ })

/******/ });
});