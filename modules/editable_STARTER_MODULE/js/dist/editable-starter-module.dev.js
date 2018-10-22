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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drupal-editable/core */ "@drupal-editable/core");
/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #eee;\n    padding: 1em;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ALL of these dependencies are taken from the editable_core JS library and not
// part of this bundle.
 // PropTypes will only be included in the development build.


 // Editable includes and exposes the emotion library for CSS-in-JS styling. You
// can also apply normal CSS classes to elements.
// See https://emotion.sh/ for more information.

var styles = {
  container: Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject())
};

var ExampleComponent = function ExampleComponent(props) {
  return (// eslint-disable-next-line react/destructuring-assignment
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: props.store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["Query"], props, function (_ref) {
      var data = _ref.data,
          loading = _ref.loading,
          error = _ref.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles.container
      }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Loading \u2026"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "There was an error loading!"), data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Simply rendering data with Query"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "The current node title is:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["get"])(data, "attributes.title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["EditableEntity"], {
        data: data
      }, function (_ref2) {
        var getData = _ref2.getData,
            change = _ref2.change,
            save = _ref2.save,
            saving = _ref2.saving;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, saving && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Currently saving \u2026"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Changing data with EditableEntity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The currently locally cached change is:", " ".concat(getData("attributes.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__["EditableEntityForm"], {
          save: save,
          change: change
        }, function (_ref3) {
          var handleChange = _ref3.handleChange;
          return (
            /*
              handleChange uses the data-prop-path attribute to
              determine which field was changed. This is just syntactic
              sugar around the change function.
            */
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              type: "text",
              value: getData("attributes.title"),
              "data-prop-path": "attributes.title",
              onChange: handleChange
            })
          );
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          onClick: save
        }, "Save!"));
      })));
    }))
  );
};

ExampleComponent.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  bundle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  uuid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.js */ "./src/components/ExampleComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return _ExampleComponent_js__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// These dependencies are taken from the window object and are not part of the
// resulting bundle.




(function ($, window, Drupal) {
  Drupal.behaviors.initialise_starter_module_block = {
    attach: function attach(context) {
      $(context).find("#block-editablestarterblock").once("initialise-starter-module-block").each(function eachEditableStarterBlockFn() {
        var mountPoint = $(this).get(0);

        if (!mountPoint) {
          throw new Error("DOM element to mount React component not found!");
        } // Try and get the props to mount our React component by parsing the data
        // attribute. You could also use the drupalSettings JS object or some other form
        // of input, like an AJAX call.


        var props;

        try {
          props = JSON.parse(mountPoint.dataset.editableProps);
        } catch (e) {
          throw new Error("data-editable-props attribute was not found on the mountpoint!");
        }

        window.Editable_Registry.addInitHook(function (store) {
          // The spread syntax will result in the props being applied as though we had
          // written: <ExampleComponent type={type} bundle={bundle} uuid={uuid} />
          react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"], _extends({}, props, {
            store: store
          })), mountPoint);
        });
      });
    }
  };
})(jQuery, window, Drupal);

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/martin/Code/drupal-editable-module/modules/editable_STARTER_MODULE/js/src/index */"./src/index.js");


/***/ }),

/***/ "@drupal-editable/core":
/*!********************************!*\
  !*** external "Editable_Core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_core__;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=editable-starter-module.dev.js.map