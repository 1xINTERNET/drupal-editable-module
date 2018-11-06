!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Editable_Core")):"function"==typeof define&&define.amd?define(["Editable_Core"],e):"object"==typeof exports?exports.Editable_Core_Behaviour=e(require("Editable_Core")):t.Editable_Core_Behaviour=e(t.Editable_Core)}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var r=n(0);function i(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,i)}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initHooks=new Set,this.middlewares=new Set,this.enhancers=new Set,this.hydrationData=[],this.settingsData={},this.reducers={},this.store=null,this.initialized=!1}return function(t,e,n){e&&s(t.prototype,e),n&&s(t,n)}(t,[{key:"addMiddleWare",value:function(t){if(this.initialized)throw new Error("Cannot add middleware, the store was already initialized!");this.middlewares.add(t)}},{key:"addEnhancer",value:function(t){if(this.initialized)throw new Error("Cannot add enhancer, the store was already initialized!");this.enhancers.add(t)}},{key:"addReducer",value:function(t,e){if(this.initialized)throw new Error("Cannot add reducer, the store was already initialized!");this.reducers[t]=e}},{key:"addHydrationData",value:function(t){var e=t.data||t||[];this.hydrationData=u(this.hydrationData).concat(u(Array.isArray(e)?e:[e]))}},{key:"addSettingsData",value:function(t){this.settingsData=a({},this.settingsData,t)}},{key:"callInitHook",value:function(t){return t(this.store,this)}},{key:"callInitHooks",value:function(){var t=this;this.initHooks.forEach(function(e){return t.callInitHook(e)})}},{key:"addInitHook",value:function(t){if(this.initialized)return this.callInitHook(t);this.initHooks.add(t)}},{key:"hydrate",value:function(t){t&&this.addHydrationData(t),this.store.dispatch(Object(r.hydrateStore)({data:this.hydrationData})),this.hydrationData=[]}},{key:"getSettings",value:function(t){var e=t.replace("/","--");if(!this.settingsData[e])throw new Error("No entity settings were found for type '".concat(e,"'!"));return this.settingsData[e]}},{key:"initialize",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function u(t){i(o,r,a,u,s,"next",t)}function s(t){i(o,r,a,u,s,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{},t.next=3,Object(r.createStore)(a({reducers:this.reducers,middlewares:this.middlewares,enhancers:this.enhancers},e));case 3:this.store=t.sent,e.settingsData&&this.addSettingsData(e.settingsData),e.hydrationData&&this.hydrate(e.hydrationData),this.initialized=!0,this.callInitHooks();case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),t}();function d(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,i)}!function(t,e,n){var r=e.Editable_Registry=new c,i="".concat(e.location.protocol,"//").concat(e.location.host);n.behaviors.editable_core_init={attach:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){d(a,r,i,o,u,"next",t)}function u(t){d(a,r,i,o,u,"throw",t)}o(void 0)})}}(regeneratorRuntime.mark(function t(e,n){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.editable,e===document){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,r.initialize({apiEndpoint:"".concat(i,"/jsonapi"),csrfTokenEndpoint:"".concat(i,"/session/token"),settingsData:a&&a.entitySettings,hydrationData:a&&a.entities&&Object.keys(a.entities).map(function(t){return a.entities[t].data})});case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}(jQuery,window,Drupal)}])});
//# sourceMappingURL=editable-core-behavior.js.map