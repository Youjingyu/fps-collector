(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fe-report"] = factory();
	else
		root["fe-report"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_collect_animation_fps__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "collectAnimationFps", function() { return __WEBPACK_IMPORTED_MODULE_0__core_collect_animation_fps__["a"]; });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectAnimationFps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_collect_fps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(4);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var collectAnimationFps=function(_Events){_inherits(collectAnimationFps,_Events);function collectAnimationFps(options){_classCallCheck(this,collectAnimationFps);var _this=_possibleConstructorReturn(this,(collectAnimationFps.__proto__||Object.getPrototypeOf(collectAnimationFps)).call(this));_this.config=Object.assign({duration:2000},options);_this.fps=0;_this.animations=[];_this._endCollection=null;_this._eventFunc=null;return _this;}_createClass(collectAnimationFps,[{key:'start',value:function start(){var _this2=this;this._endCollection=__WEBPACK_IMPORTED_MODULE_0_collect_fps___default()();this._eventFunc=this._collect.bind(this);document.addEventListener('animationstart',this._eventFunc);setTimeout(function(){_this2.stop(function(data){_this2.trigger('end',[data]);});},this.config.duration);}},{key:'stop',value:function stop(cb){document.removeEventListener('animationstart',this._eventFunc);this.fps=this._endCollection();cb&&cb({fps:this.fps,animations:this.animations});}},{key:'_collect',value:function _collect(event){if(!this._isRepeat(event)){this.animations.push({name:event.animationName});}}},{key:'_isRepeat',value:function _isRepeat(animation){var animations=this.animations;for(var i=0,len=animations.length;i<len;i++){if(animation.animationName===animations[i].name){return true;}}return false;}}]);return collectAnimationFps;}(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3).default


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports=function(r){function e(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return r[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}([function(r,e,t){"use strict";function n(r){return r&&r.__esModule?r:{default:r}}function i(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;if(!r.requestAnimationFrame)throw new Error("requestAnimationFrame is not available");var e=[],t=function(){return e.push([!document.hidden,Date.now()])};document.addEventListener("visibilitychange",t);var n=!0,i=[],u=function r(){n&&(i.push(Date.now()),window.requestAnimationFrame(r))};return window.requestAnimationFrame(u),function(){return n=!1,document.removeEventListener("visibilitychange",t),(0,o.default)(i,e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var u=t(1),o=n(u)},function(r,e){"use strict";function t(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function r(r,e){var t=[],n=!0,i=!1,u=void 0;try{for(var o,a=r[Symbol.iterator]();!(n=(o=a.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(r){i=!0,u=r}finally{try{!n&&a.return&&a.return()}finally{if(i)throw u}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=function(r,e){var t=r.length;if(t<2)return 0;var n=r[r.length-1]-r[0],u=n-i(e),o=u/(t-1),a=1e3/o;return a};var i=e.getTotalHiddenTime=function(r){return r.reduce(u,[]).filter(o).map(a).reduce(c,0)},u=function(r,e){var i=n(e,2),u=i[0],o=i[1];if(u&&0===r.length)return r;var a=r[r.length-1],c=r.slice(0,-1);return u?[].concat(t(c),[[a[0],o]]):[].concat(t(r),[[o]])},o=function(r){var e=n(r,2),t=(e[0],e[1]);return null!=t},a=function(r){var e=n(r,2),t=e[0],i=e[1];return i-t},c=function(r,e){return r+e}}]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Events=function(){function Events(){_classCallCheck(this,Events);this.handlers={};}_createClass(Events,[{key:"on",value:function on(event,handler){this.handlers[event]=this.handlers[event]||[];this.handlers[event].push(handler);return this.handlers[event];}},{key:"off",value:function off(event){if(this.handlers[event]){delete this.handlers[event];}}},{key:"trigger",value:function trigger(event,args){var _this=this;var arg=args||[];var funcs=this.handlers[event];if(funcs){return funcs.every(function(f){var ret=f.apply(_this,arg);return ret===false?false:true;});}return true;}}]);return Events;}();;/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ })
/******/ ]);
});