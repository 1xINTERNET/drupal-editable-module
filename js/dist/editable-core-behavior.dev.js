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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableRegistry", function() { return EditableRegistry; });
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @drupal-editable/core */ "@drupal-editable/core");
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var EditableRegistry =
/*#__PURE__*/
function () {
  function EditableRegistry() {
    _classCallCheck(this, EditableRegistry);

    this.initHooks = new Set();
    this.middlewares = new Set();
    this.enhancers = new Set();
    this.hydrationData = [];
    this.settingsData = {};
    this.reducers = {};
    this.store = null;
    this.initialized = false;
  }

  _createClass(EditableRegistry, [{
    key: "addMiddleWare",
    value: function addMiddleWare(middleware) {
      if (this.initialized) {
        throw new Error("Cannot add middleware, the store was already initialized!");
      }

      this.middlewares.add(middleware);
    }
  }, {
    key: "addEnhancer",
    value: function addEnhancer(enhancer) {
      if (this.initialized) {
        throw new Error("Cannot add enhancer, the store was already initialized!");
      }

      this.enhancers.add(enhancer);
    }
  }, {
    key: "addReducer",
    value: function addReducer(key, reducer) {
      if (this.initialized) {
        throw new Error("Cannot add reducer, the store was already initialized!");
      }

      this.reducers[key] = reducer;
    }
  }, {
    key: "addHydrationData",
    value: function addHydrationData(resource) {
      var data = resource.data || resource || [];
      this.hydrationData = _toConsumableArray(this.hydrationData).concat(_toConsumableArray(Array.isArray(data) ? data : [data]));
    }
  }, {
    key: "addSettingsData",
    value: function addSettingsData(settingsData) {
      this.settingsData = _objectSpread({}, this.settingsData, settingsData);
    }
  }, {
    key: "callInitHook",
    value: function callInitHook(hook) {
      return hook(this.store, this);
    }
  }, {
    key: "callInitHooks",
    value: function callInitHooks() {
      var _this = this;

      this.initHooks.forEach(function (hook) {
        return _this.callInitHook(hook);
      });
    }
  }, {
    key: "addInitHook",
    value: function addInitHook(hook) {
      if (this.initialized) {
        return this.callInitHook(hook);
      }

      this.initHooks.add(hook);
    }
  }, {
    key: "hydrate",
    value: function hydrate(data) {
      if (data) {
        this.addHydrationData(data);
      }

      this.store.dispatch(Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__["hydrateStore"])({
        data: this.hydrationData
      }));
      this.hydrationData = [];
    }
  }, {
    key: "getSettings",
    value: function getSettings(entityType) {
      // normalize types
      var _entityType = entityType.replace("/", "--");

      if (!this.settingsData[_entityType]) {
        throw new Error("No entity settings were found for type '".concat(_entityType, "'!"));
      }

      return this.settingsData[_entityType];
    }
  }, {
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var settings,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                settings = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.next = 3;
                return Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_objectSpread({
                  reducers: this.reducers,
                  middlewares: this.middlewares,
                  enhancers: this.enhancers
                }, settings));

              case 3:
                this.store = _context.sent;

                if (settings.settingsData) {
                  this.addSettingsData(settings.settingsData);
                }

                if (settings.hydrationData) {
                  this.hydrate(settings.hydrationData);
                }

                this.initialized = true;
                this.callInitHooks();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
  }]);

  return EditableRegistry;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editableRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editableRegistry */ "./src/editableRegistry.js");
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @drupal-editable/core */ "@drupal-editable/core");
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




(function ($, window, Drupal) {
  // Instantiate the registry, this will be used by other modules to attach
  // their own middlewares, reducers etc.
  var registry = window.Editable_Registry = new _editableRegistry__WEBPACK_IMPORTED_MODULE_0__["EditableRegistry"]();
  var domain = "".concat(window.location.protocol, "//").concat(window.location.host);
  Drupal.behaviors.editable_core_init = {
    attach: function () {
      var _attach = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, _ref) {
        var editable;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                editable = _ref.editable;

                if (!(context !== document)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return registry.initialize({
                  apiEndpoint: "".concat(domain, "/jsonapi"),
                  csrfTokenEndpoint: "".concat(domain, "/session/token"),
                  settingsData: editable && editable.entitySettings,
                  hydrationData: editable && editable.entities && Object.keys(editable.entities).map(function (k) {
                    return editable.entities[k].data;
                  })
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function attach(_x, _x2) {
        return _attach.apply(this, arguments);
      };
    }()
  };
})(jQuery, window, Drupal);

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/martin/Code/drupal-editable-module/js/src/index */"./src/index.js");


/***/ }),

/***/ "@drupal-editable/core":
/*!********************************!*\
  !*** external "Editable_Core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=editable-core-behavior.dev.js.map