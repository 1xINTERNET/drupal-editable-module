(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Editable_Core"), require("PropTypes"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["Editable_Core", "PropTypes", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["EditableStarterModule"] = factory(require("Editable_Core"), require("PropTypes"), require("React"), require("ReactDOM"));
	else
		root["EditableStarterModule"] = factory(root["Editable_Core"], root["PropTypes"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__drupal_editable_core__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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

/***/ "./src/components/ExampleComponent.js":
/*!********************************************!*\
  !*** ./src/components/ExampleComponent.js ***!
  \********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleComponent\", function() { return ExampleComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drupal-editable/core */ \"@drupal-editable/core\");\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    background: #eee;\\n    padding: 1em;\\n    margin-top: 2em;\\n    margin-bottom: 2em;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n// ALL of these dependencies are taken from the editable_core JS library and not\n// part of this bundle.\n // PropTypes will only be included in the development build.\n\n\n // Editable includes and exposes the emotion library for CSS-in-JS styling. You\n// can also apply normal CSS classes to elements.\n// See https://emotion.sh/ for more information.\n\nvar styles = {\n  container: Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject())\n};\n\nvar ExampleComponent = function ExampleComponent(props) {\n  return (// eslint-disable-next-line react/destructuring-assignment\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: props.store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], props, function (_ref) {\n      var data = _ref.data,\n          loading = _ref.loading,\n          error = _ref.error;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: styles.container\n      }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Loading \\u2026\"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"There was an error loading!\"), data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Simply rendering data with Query\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"The current node title is:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(data, \"attributes.title\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"EditableEntity\"], {\n        data: data\n      }, function (_ref2) {\n        var getData = _ref2.getData,\n            handleChange = _ref2.handleChange,\n            save = _ref2.save,\n            saving = _ref2.saving;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, saving && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Currently saving \\u2026\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Changing data with EditableEntity\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"The currently locally cached change is:\", \" \".concat(getData(\"attributes.title\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n          type: \"text\",\n          value: getData(\"attributes.title\"),\n          \"data-prop-path\": \"attributes.title\",\n          onChange: handleChange\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          type: \"submit\",\n          onClick: save\n        }, \"Save!\"));\n      })));\n    }))\n  );\n};\n\nExampleComponent.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  bundle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  uuid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  // eslint-disable-next-line react/forbid-prop-types\n  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n\n//# sourceURL=webpack://EditableStarterModule/./src/components/ExampleComponent.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExampleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.js */ \"./src/components/ExampleComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ExampleComponent\", function() { return _ExampleComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"ExampleComponent\"]; });\n\n\n\n//# sourceURL=webpack://EditableStarterModule/./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// These dependencies are taken from the window object and are not part of the\n// resulting bundle.\n\n\n\n\n(function ($, window, Drupal) {\n  Drupal.behaviors.initialise_starter_module_block = {\n    attach: function attach(context) {\n      $(context).find(\"#block-editablestarterblock\").once(\"initialise-starter-module-block\").each(function eachEditableStarterBlockFn() {\n        var mountPoint = $(this).get(0);\n\n        if (!mountPoint) {\n          throw new Error(\"DOM element to mount React component not found!\");\n        } // Try and get the props to mount our React component by parsing the data\n        // attribute. You could also use the drupalSettings JS object or some other form\n        // of input, like an AJAX call.\n\n\n        var props;\n\n        try {\n          props = JSON.parse(mountPoint.dataset.editableProps);\n        } catch (e) {\n          throw new Error(\"data-editable-props attribute was not found on the mountpoint!\");\n        }\n\n        window.Editable_Registry.addInitHook(function (store) {\n          // The spread syntax will result in the props being applied as though we had\n          // written: <ExampleComponent type={type} bundle={bundle} uuid={uuid} />\n          react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[\"ExampleComponent\"], _extends({}, props, {\n            store: store\n          })), mountPoint);\n        });\n      });\n    }\n  };\n})(jQuery, window, Drupal);\n\n//# sourceURL=webpack://EditableStarterModule/./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/martin/Code/demo-commerce/web/modules/contrib/editable/modules/editable_STARTER_MODULE/js/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://EditableStarterModule/multi_./src/index.js?");

/***/ }),

/***/ "@drupal-editable/core":
/*!********************************!*\
  !*** external "Editable_Core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_core__;\n\n//# sourceURL=webpack://EditableStarterModule/external_%22Editable_Core%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://EditableStarterModule/external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://EditableStarterModule/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://EditableStarterModule/external_%22ReactDOM%22?");

/***/ })

/******/ });
});