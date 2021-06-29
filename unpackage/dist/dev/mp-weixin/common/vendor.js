(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"salieriPiano","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueId = this.$options.propsData.vueId;
    var object = center[vueId] = center[vueId] || {};
    object[name] = value;
    if (parents[vueId]) {
      parents[vueId].$forceUpdate();
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"salieriPiano","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"salieriPiano","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"salieriPiano","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"salieriPiano","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/*!******************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/event-bus.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.EventBus = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//创建EventBus
var EventBus = new _vue.default();exports.EventBus = EventBus;

/***/ }),

/***/ 4:
/*!************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!**********************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/config/NoteConfig.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var rightNotes = [
{ step: 2, do: "C", file: "C6", pos: "-2.8%", pitchName: "do" },
{ step: 1, do: "B", file: "B5", pos: "0%", pitchName: "si" },
{ step: 1, do: "A", file: "A5", pos: "2.8%", pitchName: "la" },
{ step: 1, do: "G", file: "G5", pos: "5.6%", pitchName: "sol" },
{ step: 1, do: "F", file: "F5", pos: "8.4%", pitchName: "fa" },
{ step: 1, do: "E", file: "E5", pos: "11.1%", pitchName: "mi" },
{ step: 1, do: "D", file: "D5", pos: "13.9%", pitchName: "re" },
{ step: 1, do: "C", file: "C5", pos: "16.7%", pitchName: "do" },
{ step: 0, do: "B", file: "B4", pos: "19.6%", pitchName: "si" },
{ step: 0, do: "A", file: "A4", pos: "22.2%", pitchName: "la" },
{ step: 0, do: "G", file: "G4", pos: "25.0%", pitchName: "sol" },
{ step: 0, do: "F", file: "F4", pos: "27.8%", pitchName: "fa" },
{ step: 0, do: "E", file: "E4", pos: "30.5%", pitchName: "mi" },
{ step: 0, do: "D", file: "D4", pos: "33.3%", pitchName: "re" },
{ step: 0, do: "C", file: "C4", pos: "36.0%", pitchName: "do" },
{ step: -1, do: "B", file: "B3", pos: "38.8%", pitchName: "si" },
{ step: -1, do: "A", file: "A3", pos: "41.6%", pitchName: "la" }];


var leftNotes = [
{ step: 0, do: "E", file: "E4", pos: "52.8%", pitchName: "mi" },
{ step: 0, do: "D", file: "D4", pos: "55.6%", pitchName: "re" },
{ step: 0, do: "C", file: "C4", pos: "58.4%", pitchName: "do" },
{ step: -1, do: "B", file: "B3", pos: "61.1%", pitchName: "si" },
{ step: -1, do: "A", file: "A3", pos: "63.9%", pitchName: "la" },
{ step: -1, do: "G", file: "G3", pos: "66.7%", pitchName: "sol" },
{ step: -1, do: "F", file: "F3", pos: "69.5%", pitchName: "fa" },
{ step: -1, do: "E", file: "E3", pos: "72.2%", pitchName: "mi" },
{ step: -1, do: "D", file: "D3", pos: "75.0%", pitchName: "re" },
{ step: -1, do: "C", file: "C3", pos: "77.8%", pitchName: "do" },
{ step: -2, do: "B", file: "B2", pos: "80.6%", pitchName: "si" },
{ step: -2, do: "A", file: "A2", pos: "83.3%", pitchName: "la" },
{ step: -2, do: "G", file: "G2", pos: "86.1%", pitchName: "sol" },
{ step: -2, do: "F", file: "F2", pos: "88.9%", pitchName: "fa" },
{ step: -2, do: "E", file: "E2", pos: "91.7%", pitchName: "mi" },
{ step: -2, do: "D", file: "D2", pos: "94.4%", pitchName: "re" },
{ step: -2, do: "C", file: "C2", pos: "97.2%", pitchName: "do" }];


var getRandomNoteItem = function getRandomNoteItem() {
  var length = rightNotes.length;
  var index = Math.floor(Math.random() * length);
  if (Math.random() > 0.5) {
    // 右手
    return rightNotes[index];
  } else {
    // 左手
    return leftNotes[index];
  }
};var _default =

{
  getRandomNoteItem: getRandomNoteItem,
  leftNotes: leftNotes,
  rightNotes: rightNotes };exports.default = _default;

/***/ }),

/***/ 48:
/*!**************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/config/KeyBoardConfig.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 键盘配置参数
                                                                                                      */var _default =
{
  getKeyboardConfig: function getKeyboardConfig() {
    return {
      keyboardHeight: {
        type: String,
        default: "30%",
        required: false } };


  } };exports.default = _default;

/***/ }),

/***/ 49:
/*!*************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/config/NoteOggConfig.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getNoteOgg;function getNoteOgg() {
  return {
    C: "data:audio/ogg;base64,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",
    UpC: "data:audio/ogg;base64,T2dnUwACAAAAAAAAAADo5KwqAAAAAMpWmMUBHgF2b3JiaXMAAAAAAkSsAAAA9AEAgDgBAAB9AAC4AU9nZ1MAAAAAAAAAAAAA6OSsKgEAAAAzWUZ3D0T/////////////////swN2b3JiaXM0AAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAyMDA3MDQgKFJlZHVjaW5nIEVudmlyb25tZW50KQAAAAABBXZvcmJpcyFCQ1YBAAABABhjVClGmVLSSokZc5QxRplikkqJpYQWQkidcxRTqTnXnGusubUghBAaU1ApBZlSjlJpGWOQKQWZUhBLSSV0EjonnWMQW0nB1phri0G2HIQNmlJMKcSUUopCCBlTjCnFlFJKQgcldA465hxTjkooQbicc6u1lpZji6l0kkrnJGRMQkgphZJKB6VTTkJINZbWUikdc1JSakHoIIQQQrYghA2C0JBVAAABAMBAEBqyCgBQAAAQiqEYigKEhqwCADIAAASgKI7iKI4jOZJjSRYQGrIKAAACABAAAMBwFEmRFMmxJEvSLEvTRFFVfdU2VVX2dV3XdV3XdSA0ZBUAAAEAQEinmaUaIMIMZBgIDVkFACAAAABGKMIQA0JDVgEAAAEAAGIoOYgmtOZ8c46DZjloKsXmdHAi1eZJbirm5pxzzjknm3PGOOecc4pyZjFoJrTmnHMSg2YpaCa05pxznsTmQWuqtOacc8Y5p4NxRhjnnHOatOZBajbW5pxzFrSmOWouxeaccyLl5kltLtXmnHPOOeecc84555xzqhenc3BOOOecc6L25lpuQhfnnHM+Gad7c0I455xzzjnnnHPOOeecc4LQkFUAABAAAEEYNoZxpyBIn6OBGEWIacikB92jwyRoDHIKqUejo5FS6iCUVMZJKZ0gNGQVAAAIAAAhhBRSSCGFFFJIIYUUUoghhhhiyCmnnIIKKqmkoooyyiyzzDLLLLPMMuuws8467DDEEEMMrbQSS0211VhjrbnnnGsO0lpprbXWSimllFJKKQgNWQUAgAAAEAgZZJBBRiGFFFKIIaaccsopqKACQkNWAQCAAAACAAAAPMlzREd0REd0REd0REd0RMdzPEeUREmUREm0TMvUTE8VVdWVXVvWZd32bWEXdt33dd/3dePXhWFZlmVZlmVZlmVZlmVZlmVZgtCQVQAACAAAgBBCCCGFFFJIIaUYY8wx56CTUEIgNGQVAAAIACAAAADAURzFcSRHciTJkixJkzRLszzN0zxN9ERRFE3TVEVXdEXdtEXZlE3XdE3ZdFVZtV1Ztm3Z1m1flm3f933f933f933f933f93UdCA1ZBQBIAADoSI6kSIqkSI7jOJIkAaEhqwAAGQAAAQAoiqM4juNIkiRJlqRJnuVZomZqpmd6qqgCoSGrAABAAAABAAAAAAAomuIppuIpouI5oiNKomVaoqZqriibsuu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6LhAasgoAkAAA0JEcyZEcSZEUSZEcyQFCQ1YBADIAAAIAcAzHkBTJsSxL0zzN0zxN9ERP9ExPFV3RBUJDVgEAgAAAAgAAAAAAMCTDUixHczRJlFRLtVRNtVRLFVVPVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVNU3TNE0gNGQlABAFAMAwrDX3YhyBHIOWc2mQVI5ycBFDylENKlIKKYjBVUwh5azWzCnFINXaQYUUpNhLyRRzkgKhISsEgNAMAIMkAZKmAZKmAQAAAAAAAIDkaYAmioDmiQAAAAAAAAAgaRqgiR6giSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKnAZ4oAp4oAgAAAAAAAIAmioAomoBomgAAAAAAAACgiSLgmSIgmiYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLmAZ4oAp4oAgAAAAAAAIAmioBomoAnmgAAAAAAAACgiSIgmiYgmiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAABwCAAAuh0JAVAUCcAIBDcSwLAAAcx7EsAABwHMeyAADAsixRBAAAy9JEEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAADAgAMAQIAJZaDQkJUAQBQAgEFRNA1IkmUBSdI0oGmaBtA0gCcCPA9gmgBAAABAgQMAQIANmhKLAxQashIAiAIAMCiKZWmaKLIsTfM8UWRZmuZ5okjTPM/zTBOe53mmCc8TRVWFKIqiqsI0TVNVgSiqqgAAgAIHAIAAGzQlFgcoNGQlABASAOBQFMvSNM/zPFE0TVUlSZbleaIoiqZpmqpKkizL80RRFE3TNFWVpmma54miKJqmqrouNM3zRFEUTVNVXRee53miaJqmqqquC8/zPFE0TdNUVdeFKIqiaZqmqrqu6wJRNE3TVFXXlWUgiqJomqrqurIMRFEUTVNVXVeWgSiapqq6ruvKMsA0VdV1XVeWAaqqqq4ry7IMUFVVdV1ZlmWAqrqu68qybQNwXdeVZdsWAABw4AAAEGAEnWRUWYSNJlx4AAoNWREARAEAAMYwpZhShjEJIYXQMCYhpBAyKSWlVEoFIaWSSqkgpJJSKRmllFJKqYKQSkmpVBBKKamkAgDADhwAwA4shEJDVgIAeQAAhDFKMcaYcxIhpRhzzjmJkFKMOeecZIwx55xzTkrJGGPOOSelZMw555yTUjLmnHPOSSmdc8456KSUUjrnnHNSSikhdM45KaWUzjnnnAAAoAIHAIAAG0U2JxgJKjRkJQCQCgBgcBzL0jRN8zxR1CRJ0zzP80TRNDXJ0jTP8zxRVE2e53miKIqmqao8z/NEURRNU1W5riiapmmqqqqSZVEURdNUVdeFaIqmqrqq7MI0RVFVXVd2IcumqaquK8uwbdNUVdeVZaC6qurKtgxcV1Vl15YFAIAnOAAAFdiwOsJJ0VhgoSErAYAMAADCGIMUQggphBBSCCGklEJIAADAgAMAQIAJZaDQkJUAQCoAAEAIxhhjjDHGRCmMMcYYY4yNYxhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYYywAcKnCAUD3wYbVEU6KxgILDVkJAKQCAADGKMUYhJJaqxBizDEpKbVWIcSYc1JSaq1nzDkIKbUWY9CYYxBSaS3GpErnpKTUWoxJpZBRSam12JJSppSSWmuxFqVUSCG21mJMTsmcUmsx1liU07GVWGKMtTnnnKytxRZjc8452VqrrcYCADAbHAAgEmxYHeGkaCyw0JCVAEBIAACBkFJMMeacc845J5VijDHnIIQQQgilUow55xyEEEIIoWSMMecchBBCCCGUUjLmHIQQQgghhJJS55yDEEIIpYRSSumccxBCCCGEUlIpnYMQQgghhFBCKSWlzkEIIYQQQkgppRRCCCGEUEIJKaWUQgchhBBCKSGlklIIIYQQQiglpJRSSimEEkIIJZSSSkophVJKCCGEUFJKKaUQQgghhBJSKimlVEoIIYRQQkklpZRSCqGEEEIoAADgwAEAIMAIOsmosggbTbjwABQashIAiAIAgIyTEEpqjUBKOUmxM8oxaK2WyhmkILUQKYQUpBQyqBBiUkpIHVMMUmqxlNBBSjm3mEJJAQAAEAQABJgAAgMEBV8IATEGACAIkRkiobAKFhiUQYPDPAB4gIiQCAASExRpFxfQZYALurjrQAhBCEIQiwMoIAEHJ9zwxBuecIMTdIpKHQgAAAAAAAMAPAAAIBRAREQzV2FxgZGhscHR4fEBIgAAAAAAXADwAQCAhAAREc1chcUFRobGBkeHxwdIAAAggAAAAAAACCAAAQEBAAAAAIAAAAAAAQFPZ2dTAABAdgAAAAAAAOjkrCoCAAAAt9lX2B8Sr5KUlZCSlY+Ljo6LjoqCiYWJiIeLhoqKg4qGg4CBnNIqzZ3SKs1hIgKIuxeZGYgq2ke1wbtIYhJ79/gf6lChTuuj2uBdrVhi5zn+hzpUoNP+AwDssMIZOI5jEAmTqaqEBEACpUjDweqkqdisFqvZZKggFP/G/q16rKq+9AakboWFidSKDQMAmXGYESnQMRpAJgMATiADYloF/nEzASA9C1YB1GQA5AXcAqNdALgAoB8B8Ad9AkC/DVWftbyrAXlMMVtQV9vqqocPyEnpoazjWzlONNgabCard2bxCAkGAb5H5fivuTWJ5PYX4EzJV/aoJP85tyaRHH8BzpR85Q8kyBpg8ULCSS2Yj+OYzJCUkABAVMUEUVPfFFRRRNWwCgAAZhEUALQzrxRAYwQAgIgLAGAyL4BwAMhkCoCJAhAzAWCCbB6g2QoALwBgGwYgATMCwALDFACO+HwAGKDAZcYFEFEALgMoEFBxAwIF4QYJCbUC3kdFyrsUJJLhJ/Slw7mv9VGR8hFBIhm+oS8Nyj31DWbB4o0ACxyeqeiMY0KoKiECgEqSxURAEhxFDdMCoihiKgCAmDYHAQBQGgAAAImNBQAAx0UAYGYC4FoAEAlCAAB4CQC9AECMAN0+nIIgnQLeSBBvAAQYrwBAG18AwBEV6CUIJBSsCJEbxpIUCJxRuHcNLAuXCx5HVdXvMVTgOPntbnS8yL4aR1XVXyuFE4ZTvy48vC4sD9jkF4jDEcAZVwwcx4RQJYkQAEwA1IgMFABQf3YUAAgVRYFQHTGJjYQBqI4oAABYcQAA4EmTAOBiCgBTAICnEwAAZAoAwwgA0wDQHiSAmgEAF4AKOl4AcEGmAHDRDgBUvEG8AZBQsCIS7gxGRcJwSRgoEKEAHkfl1T89YeRm56dehtV+xFF59e9I0sjNybe7YVjtxxvsgE1+gSxrADdPmY5jBoRKJCIBgIih2FQQZ1NEVABQI61QAAAJEwEACJwoAAAoiAUAAEemAAAAYRwAYN8AAI6LAQCAGwC2BgB0CHL0ATJMARWYUQAuuABgExfhAEAfFrcFIKKNFZFwYVRIAiIWA+IA3keF8N8tFyrG4o4zJuew4qOPivHm24DIsbidmJzDJhd4CvQAhDr40IPLMxVbToaqSIhIACCmRVQUDIujqgIAeC6iAIAYFhsAAAQJEgIAALERAABwkAAAAFBCDEA7AICVAAAATgCYjAAwFKBxoQUAYGoAAH4oINMNACI/tIALAEcwjNKJHNpYEdUCShlUVJECKgkeSBXgz5VUhTw93V1j1Kvlio4IpErw58qEUod3OF1j1Kv8FS3wBtpgkj+gEYABLs8UbWSMIwhUUiICANQ0ADBpyggAIBarHQUAnHRVAABBFQAAIREDAICpEwAAUOIIgDgAAEenAwAAB4CeOQMAgccEGGAKAAA4BijQDwAieADwCL2qAOCiXwhAwYIAEQULKaLCAENEBP5HFfj3nrlKcbjDHdN35oKYP6rAf/bMVYrD7cT0nZlCDDwFegDUSvChBQc6jwQyBBNCUgkJAUDFCgCiNgMFAMycogCAmGoHAECeQQQAAIgPAQDA4RQAGKeBlQdAwhgAANgDQOKiAACAbIDGgU2kxQkADwBMAMAJAH18PgBUVDCuAIhUKhBRCxAYCEQkCBIA3kc1+PscXMWYDHdMvl6/k6SPavDXmbmDGe+YfBe6K0GZp0AbIDRJ8AtEPgOwePKkFHKMICORhEgAAKCmAKiZlCAAAI4sAABwNUMBAMIgAQAA+GICgMsJACYpAFwAgEQFAAAOAB0fAAAAhDCb5xEAgO0Aq3AjXACAKb4AgBYgVwtAgACRgmhhEBEVAB5HxcSvngsV8jDiqXfeFGEljkqJn55jUh5GPPXOlSKq/AaAhgQQmgT40IaN0DwzDoIxGaFEEiEAiAMEMDxRAADnugEAoKbFRAAAHJ8AAADEtAAAQDQCAI9wMwCoIwQAAB8ATQcAAGAEEOzBzy9kAJkFAB8AEU4AOIVPANDCBRFxGwCSBeICAm6SIAQsCADeR9X055270hWh3vH96DXnRbr0UQ39eeeqdEXoTnw/es15kS5/AKSmgAl+AbUEWCloE4gI4hAVRSIAABQEDN8JAIBhd7AgAICIVgEAMIkGAADgcQKA6QCAbgcgHAAyTgG8ER8CAABE4CFxCmPxAcApADwAuAyAHdoDgGe0sIB0EgAKFNwoXqgoiAgVLCwY/kcV8veT1IQ6NCcmX4ZQEVX+qFL8fpJQITctnph8GUJFVPkNQGgIADJq4EPC4lJwYnQ5kYgQkQAAEUDBqZkCAKAIAgCoG7cCAGAlagAAYMYlAKYDACYDWHkQMwFwAdBXJgBISwgA7ABBvwQAB0Bh5eACgAu5KABMkTBQAd0KAAVtqGSRWIMlQVBRAf5HFeL3lUrptpLvmLzeAi7R5o8q2e8nlYr1KHXH5HUasZL0+AOAegls8EIL7lruDA4hkJCQCAkBoADgLCAKAKjdkogAAGK1GggAkMuZAIgXAADgAAAAqMMCAKYAMEwB0C0ApDMBYETEIzAgEjcAAFsAFMAF4BjACAB1AsAUfSwYrwzAhUAAKRQURYHCAgHeR6X0z0lT6tTcMXmxTSWq6aMy+uuimZiH5I7Ji20qweMNtMAGHxbGVHMjc5AjIkKJCABQAEBMQxAAQE27IgAAlsQGFABAmgoAAMwAgEwAAEACGwC+AiCTAmC3A0DHKwDoPAQMgAEShgAA/AAGtAfADbzRTgMAHwAwVBUX4AIABgUUlOiywEBiUAD+R8X6348sUfM27dh/BUXe+KNi/e+HEjVv0479k1CRN34DIMoqAJoGeCFhrZRbGSORiFBCAADgFAB16lAAwNF8AABUxQEAADOmAJg5AiBXADBzEgB6EQBcAMAJQMwYAZChxEgFADguBgAsDFaOC3wA2I9PADCwEDqB4sLlUlAgYSAC/keF4r93TCE2M56YvE4DlKDjjwrlf++aQkhm3jF5GYISdPwGQEYDAOoJfgHHAFbCkzYwFooqEhICAIgCQJGOAABOlgcAgCgIAADEhQAAwGQAQGYAYDKzAMIB4BEABwDECwAAUGjOEQCQEwKABLgAXOAAQBwAUNAGwTNDjgoXRIkBpAV1UBFBJAEeSIXyv09NEXIzy4nJ69hdhI5AKpT/fdoUIRaz7Ji8S9BFuPwBIDQCm9ybpNwg5CCJECUiAAAooAAqFQUA1KKCAgAOZng4AAAgDgAAUBgLAACmFgAAEMYBAFcDEA4ADwBcCQA6hofAAAA4GgcAEjJwCQDiBIASKJQFG5GIVJQCCgttGFgA3kcF4p+fmiIqxtmx9e6YkyR9VCT/+a0lcmzO2bH17jZTBOAPAFk2AJIPA7dP3q2cqkQSEgEANEABsY4AADgnJaAAAFbTqwAAECcAADC1AADAYQ0AAEDTAgAyBWiDKQCyDQHQAQBwAABpuigAuGghx40wGwA4FSkoILgEhQIBBhSMH6gWsBvgGgBeRyXpP7/eRB+T+TPr7gXeIuqoBP7v6030MRjfXddb1iL+ABCVOiB5oQfjMNBG4S6hRIpIAACKImCKoAAAFocGFAAQiRwEAMCMAYBMpgB0OgEAAKoTAaDTAPABQCYAcAEQP6sABlMXAABcACqy1Ih0DyAwEQCUxBQkrptUFSI/IMSIAgsRKhcW/keF+p9vL1ET87tjenqf1WDijwr1P9/RRE7B/O6Yvvtz/oOJPwCoVoBJXkgYI+HdaCKJIikiAgAAAM5lhwAAYggoAKCGogAAnUwAMDMAmDkAAIBwWgDgS8AUXgPAAIALAC4AgGtFAAB4A2ijwAUAPCDgA7eNokKSiD1QKJyNtEkEBSJBRAAiHkiF7p9vnyK35H7PmLyuRmuKCKRC989PTFFHcb4zJq+bGa6G8RsAaiUAagnu6TN2mYqIJBEhAAAAYCl5CgAg4hQAAGqTGAAACJkGAABRpwAAMNMLACYzAOAKQGeYKAApALQ7AH0BFSBAngoAwC4ACjfLCugAQH2USEERLSwU0jVlkScxXNUouCDgAv5Hhf6/hyZyYs4Tk3N/jtaWjj8qjv8+pkRMwdwnJq8rUbXl4zcANAYAasALAYePn3dCVpFQQiREAAAAwOlBAABMtwEAIKIIAEBnTgBQMwQAwCQ0AMycGQBxAGAEgOEOAFwA2gAMBxQdZwDABgBmAXADgzqENMV+VIUcSjBFhQJ1jYQELhIR3kfFfvN7aiJKxjz9fECvli7V0UeF/t+7nSJK9jj9fFDv8y7m8R8AACa41+UWIhSJJCJEAgAACgAAYjqYCAASANAQCQkAQR11NwCASRQAALBiAACA2iEAADCl3oCVpzFkCgCTAKAJM4UBAFBcMgB4Q7wGgA8A3jiFqaVNwpAIKEBQXKtAPpIMcAUA/kcV8e87C1VDMs6M/XN/fF3Y448q/N93VqKGYuwd++f+7KWAyx8AqTGBCT4MjMPgFnIoEiKhhAQAoADQhC4AAFKvO4kAAFibTAAAUHwUAAA0zATAdAoAABJaAMAUAOYAYBYAXgMQDjFSAQKoAwBwBO0FAIwLAOJ+nJLEQBqqFgwXA0pCESAgsiAA/kdlafMrb6LGYJQT0+VePC5w448qyt9raKrGYLYZ0+VePCpQ8wcAtQIQfAgYGUdbyMRQRFEkIgAAAMCcXxAAACvNCAAgqWEFAIDA8QAAwMwBgIzbAQBAHAbcCD4B/LgmAMhYMhkAwHEBALjAjAKwi1R8BgDcykIScZGANWBAgeJCwgAeSJXx733oosZplxOT5W4+KvKPQKpMf+9jF9W0w47pcjefVKTPHwCiXgUELyRc6JTpIAdTQpQQEQEAAADnmqIAAKZjQAAAlWAHACCTKQASAAAAIh4AAJg6CHABoLYBAMAxgJiMAGhDCQyATGcCyHQEgAsAdkiuLwkAohakRIGKkrAQIihLkigiXAD+R2Vx8++wiz4W2+7V4l6XlLARRyXY5k9+xBKLnfYp7mVSxMofALKoARt8aMHioGnLyRSJRCIiAAAAQIJFBABQTa0IAIDZVAAAEHUzAABo5ghAMhMAkxEIIFenAI6IFwAA4EDM5gEAOw4A7FBAOwvACvww0A4AUgKUQZJAWlhASEhgMUAtAF5HxfrPezvVojnm4e7tqIQ9dVSo/743TfSGd9qHp9fnIn78ASCyEVh8WFjQOW9AFkIRRSRCAgAAAPDigAIASnAAAACLAwAA4MQjAADg+QwAMrkKgMsJEACkxAMAgA0A4gQAAEgGaFwAXgFGAJMCILADjgKQwiBRWSS4kCxgoTUoFwYGfkdl7s9n2MUqecZzuM+gkum4owr3+zPsYsXtnKIz2AZ8/AEgNQCLDwmL42iAgBVRREVEAAAAAN9VBABQ6gYAAGoGGwAAhEoEAACUqwCYcQmAYTsQQGZcBSBaV6cASPGYAKYBgB8AXAAu6AYQRGJSJHATQoAExVXdhQtJBBJGwQLeR9Xp933zil6w4+5Vnio2wKOPatKv9/YWC3bavcpT3Aa4/AEgijqw+BBwoLl0KYSsIiEhEgEAAABAolYUAFAarAAACIYBAACOnwIAAEQDAAAggQGg28AKAJEYAwCwuK4AQAHABBg4AGACIEFmAYiBP0iiQEtAgaVAcJE/Q7xcMABPZ2dTAABA+gAAAAAAAOjkrCoDAAAArBBDYCGBh4R/fYR+g4aAf4iGh4KCfnp/en96fX2AfoF8f3t7eXweSI3x12dziyU3o83e5z7HIgoCqSn++oy76nNSxux9nlNYRMkbaIPFwwIHmiNOCFFUIhERAAAAUKvpjAAAKuIIAIoIAAAA4CDRhAAA0wAAgNgEAMAUrAiAKQEAAD/WcAmAJqzclQeMlwFIyMEHQFQMVAWXLqJUYEGyoKoIArgIFRjeR63m63O51BITe/Zqyb34lYiYPmo1X9+LI/qcxDl7W9K/YkwkwS8AqFX5BVIN4KRYcAihKpKIRAAAAIDZTigAkg8CAACANcPEYgAUHwIAADVDAAAgLgAAkwLABaCZAHhHfABwAAgXhp0EmChAFu4AggZMI3chElGlQiIiLgUDhVCAyiWgoABeRx3F835RYs3Z8txV/pBqIEEddRTP+7bEmrPlPlX+cGpgwR8AqbEAJB960JMIDmGmoqKEBAAAAJj6DgAAjAYDBQDEUBsAAARhQgAA8HwbAJ0xwQ1AuwCsA8AFAIE/ALQP1RIAnQAIXC77ISBFXHyAgdlcKAKoVAISBqhIcFEELAhYqAAeRy3yfW2X6tGVWffHEyECcdQkP67tEr2gK7PmgetJ8B8AACS/gDqAgVsZB4EiIaEkEgAAAAoAAFiMOgoAOIoAAAAAgAYrdQkEMfEAAKDMBKDDBACf4WaA7QFApwAAAHo1AOgu8MEPgC0AcAHYJsFoIxBZSRRRIgIQFCNBhcUC3keN/ue9uVWtRSwzdu8ULkQfNfmv9+YWXS3y2LE7Z5gQfwCk0xOY5I0WGGBjijEZJIgiIYlECAAgAGCyRAAAxLAaAACIiSMAAIJpAgAA0QAAAKw4ALgBwAHAzALYYQFoDzkAXKjwjhTAA4A9EKBWDCyIME2SACQigQgCElweSE3xl+5bFDlM0Y7JO8cjRQKpKf3Se4uq2nKYMTnneMTAHwA0FMAkHxY2soRxEEwiIhJFQgAAAQBz0VcBAMSIOQAAQLJVUABArlsEAACoZQAAsGMA4DVYAXwuAK4ACAA4mM1D0zcsCWACQHwAYOHQAARVZUSUESuBFFwsDELEIiDhggD+R43+9337sCVP1ex97lv4AQRSU/x5b1/R56mG05XFPR1lZJ4CfQAqwIc2LI4xGAJCkUgREQEAAAJAZCQFFAAQDAAA1GqAAAA4qAUAAEwLgOkEAJMBrAJiCuCNA4A4KREAB8gBhvsAwAcAFwAGsAQKtJZokWC5ApYKdAMWGAA+RxXs1334xRK3bJ/i85AQc1TGfus+kOjjFuM84zM4ROAPAFmpABN8CFj8qSwFAUtIhBIhEQCAAoCZJgQAEK05AgAgkloBACCMjQMAAA8DAKYDAKZnANgD4HYBuABgCgDOAWgYAz8APgBcjAWAB4AIOwBQMeDisUKqAmlAtGDUAQsLLp5HNeJH4viJpT6luc+k1wV7JI9qxI/E7BNLvhn7jM/hYMkfAKKsAxP8AScrgAUO1yKFTBGVkAgJAAAAUKyiAICY1oIAACptAQCg2jEAAECIAgAAUwUAM1K4EbgCAN0DwIwBAA2AiQOOABwA6ARgFVYEHwOo1xqgYCAJCCiQQEGVrDBYqFgA3keN+vszvCLmI8zdq+PzWECgj+r1z2f8Rcy31HavFp+CXfIHgNQEENyR4yIFERIhiiQhAQAAAEDHAACshgUBAAinmQEAANYMQwAAoBMAbAcAAOIR4ALdNgDYscaZABAAFSdUNJwA0GkA4APABQB1QbwCRYFaLS64KCQREQEBEQk+R6X0t74Zit7T2LvmFBRBMkdl9Nc3+1Xnae5Zdw5HwPwBIIpGYIMPCymO400glJCIJAkRAAAAEHUbBQAwHQoCAGCxCQoAEEQTAgAArwD4DIAZLQigmQAY3HEGAASA2oWgLwBwDKA9AI4NHBWrvQmxqsucBZEExAIig+AiSSABPkdl9Jc+ORS9p3HvusNYYEwdVYhf+gwkem9jn7qDcQjJHwCyWgM2+JCQc9A8NuRTJJSIEBEAAABw5ncEAFAzsgMAoKY6AABAMCkeAAAYjgCkQwAAEB8IIICOEwBvdgmiAACAMEDZEgAGGwB0FmDlAEcNYA8gFYZbiAjylTUgiAiQVMgicSESAX5HpfLPL/1i9eP73GfUchyJuaMK+fuXvWL19X7uU3RxxCIxvwEQtRIAdeAXUAGwOGjeDquEiEgiIgAAAGC9OhQAcIgBAGBqDQAAMYMQAAC4UgCSSwBs2wILMHMAgJEQAACAEABwQOES4BckUHsI8BxWWkJ6DKpLojAQIoUgIpIUBBQUSGAB/kfV7o9+OYou/jj3jv1zMYQU+aNq90e/HEUXf9z3if1zYYQU+AOAxgJYfOjDguYchFVCQiJCAgAAAFxvFQCAShwdAQBQw7ABAIATDwAAgJkFwFAATCdgRQDUNgAAO+6MCQAqrBwDwCQA8BsgIcNd7UL2VKIiA7cUCqRBgDgKRAYLBa6LFEEEHkg1/o++FooYj/t5Yv+7sFBkzBsV4D86LRQxTvfz1DtGkQR/AIQ5Etjkw8DiuEhhKBKSiogAAACAk8tTAAC1FFAAADspAgAQBnEAAMDFCQATABhmAhFkOgUwWKYAMAAAFxaANwC4ABCM/qGBNePOYJxLQUV0wX1AwoILEgYVhQUiAR5Idem3vjlUudv2e8b+dwgkCaSa9EffHIrcHfu5Y/8dgpDAHwCpKUDyQg9GjjNRFVESiQgAAAAw6U4AALCZdhQAEMO0AQDQmTMA0C0ADAEAAOEUADeCuArgzZ0OAEjLzVLR9AMArwUQItKNZTysamAw8gUEhoII3IQIlYQIMxQgKQBeRxXilz4Giq425XnqDkmROqoQv/SxKLq8pbPrDigC8AdAaCiASX4BVQAjx7lQJSRJQgQAAACAc3QFABCL1UQBAKULAABmhgIAAJsA0AwAAEDTArhAJiOAhVkAMELgD4DJCACz5wI0OUe9eTGpSRlcAQP0FpDHMpBgQK0uRAweRxXwR3cLVR+bcGZNQQhEHJXBH90Nij436eyaIxQC8wcA9RKY5IUWjFziAkqISIREhAAAAICzBgAAYhjJAACImR0BAMjMEQDDCEA7CwAAmA6AAMwAgA8ATgA6ERiAmgkAegGwopnHVbuP2iRBXLciWRguLi7UIaGAAt5HNf6XvgZFX4tyduzOAZCkj2r8L30tir425d6xWwokeQq0AGgAXlgYOeYAq4hIKBESAAAAINaaBQEAjKIAAGCzKwoAnMwEwMwAYBwAAICnAhBArwwAdggAOIiRCtDJCQA+AZ5BdgBotfJ29SO/wpsaFQIUgmVAcCHhkpCAcAGeRzXsRyDCaqm0OWtGkuRRDfsRCCWJvjZt7ppRCOYPAFHWgQnO4hI7rISEiEpIAAAAgGppKAAgamkCAMDh9IkBACCTEQDbAoBpAJAZYAEdZgDABYADgDiR5REgvQpl9xCtVZDhBiCqEQYFdY6yqAgQEFENoOK6EBGRAH5HleyX/oJUrsnYsyYThVDuqJr+6C9QxJq0feriyBBC+QNAmgOY4EPA4ZjpYBUlEQmJAAAAAKJ9BAAQq1URAEDEOQEAAIgDAAA0EQUAAKYCAOMUiKDjNgBvuAC0TwwMgI5XAMMDdATgKjC2aWtQSCmIGAgwcFEIWEXFZalIuAA+R5XsRx+Bql+iMeYZHcZCKHNUyX70FijqwpjnjC8oOLD5DYCIOgCpAl5IWFxCnUkoihISIgAAACAqEQUAEAwBAFRMOwAAnQwA1AQAlwXAcAFEYOYAgAeADgDaY6YAMmMEuCSIA6BfkYad6koFCQSSAYoFCgUFCwkXC15HNfD7q7+oojF33SVGgUwd1eDvr3+qytKedRdxB40/AGRZATbYHFqQQPPzuGWoSIgoEhEAAACg5hoCAGjcdQIBAMQedxEAYB2AeAXA5wLwGlwAk6gBAMAeAA4AYgCKPQAA4gEAF0SLE0BhwbgrQlEJkjFA4CKAi8IDLCos/ket8usnftFV2tyx/y4VHoj5ozb5+ROvqDVqc8f+u8RLIOYN9MAGLywcjqMJoURESCIRAgAAAIbhEKEAQGU62gEAwOLgJAoAmAYA8QIAAJwMAJM5EECuXgJYuAoAipsFmBEAsEMV+gJgYUiX2WVV91YDBgwFEri4P2ihggheR03s482t+r7aZ55Cl/EFIuqoUXx+eNSyRPuep9BlVFz5DQD1AgBNgc2hDQuac4BVERFJRAIAAACcigMAwLEVAADVehMAAL8BMCMAxEwAXBYIAOTaAAD8uNsmABAIVADjFgB8ACzFrgEwF2NtpVJrdcFVQYRhKFwGCCK4RAZcCz5Hrfj1jkflpdfmrLuRZwIBc9SC329/RF56c++6G3WZQMxvAEKTBEC9BJtDwILM2SFUREQkQiIAAADASfcVAMBZMwAARBsNAQCQCxDjJQAyBcAFgGybCWDHMhMAaVk5aQDUBLCjOQXBaDAGaackI6wQiLCKQkAgYRQVXAqKAV5Hnejjwyvy1Qtt17v6FSXqqCN9fsQn4tUJY+fADX2nyH8AANjkhT4M0JxTVUQiREQAAACUAADUZtRRAEANi4ECAAAA6MJWBZgAoJ0AYHYEgAsWABxeCADAjzudAKANIqcgMMyEAPYJhEUUUK7yT3PdWmobLjYxcBkIIBEKKm1cqB5I3cr7zz4iWtRxYv9de6dIIPXCbj8exaKWGfvvnYfIwG8AaCgAiKiCZwx0aA5iokpIRIREBAAAAJjWrgAAaP8oAIDd2osAAMYAkNkRAJNihwiAaQQAQMWMAsAQAByAYDoBKLIBsPwxFscqDncY1ELeiiwkXFzooaCAigAeSF3F8x+/yMtC27H1LuOiyB91FS/9HEVdVtGMre9GYqPMHwBUS2CSzaEHGzkOko2iqkgoEQAAAACc9QoAgMScEBQAEMPJZAAA1gEgFgAAIA4A+IAIOpkB4IiZBUBSEMQGIABqGQADD6ACicFUxaBwqS4qFJAiVLBcQmAB44IEXket+P31X3V6sc26TDyCUket+K2vo6g6cZyaTEWJp0ALgFqCn4A6gAXNwV0VSRQJEQAAAACu1WJDAAATVwEAcHRVAABTAJgEAFcCABNwIwATBwDAm5sBAC4hArABRZhZwA1RRLfKiSibIxSjcC8JocLgghugQkgCAgEVfket7FM/waKrWW/XXWJS4I5a2ad+sOpqlM2aKwUU+Q2AKOsAqAV4oQWL48euIkkSikgAAACAVmsoAGCKAwBATLMBAADTApBxBMBkAICZ4AKdOQMARgD4AeiL/VRJZwygQaHUeyOoSS5V8gKL6EKiYoClMohGJVFAgYoKHkht4lsgLBMJ7Nh6F3FsAAKpTXwJhCUiCVLbsXUuFWYA/gCQGoAJXlhY0Px2VUkiEREAAAAAiIAAAGJmKwIAYENRACCdAtBOADAMADABAgBqCwAAugGADwAOAgKCjFMtVSsUGVBxC4K7FkPBhbAIKEQu1IsBV6IgAl5H9fhbX2EiItk1lzBWpo7q8Le+IgRFsWsuQkyZPwBE1AHB5tCGBc3cVYkkJCIiAAAAQDQdFADA2igIAKCmYQcA4HYBmN0A0GwDQGcCAQBTDQDADg4AcTJbGAALzBQAAIwEpMUqm0mahV91kwCuwrLchYuLpXiDHNKAxQVPZ2dTAABAggEAAAAAAOjkrCoEAAAAmw5qOSJ6fXh9e3x2fH13dnZ2enx8e3p8d3d8cXuHf3l8fXeCfHl1Pkc18EtfF9FJWjs1B4MCc1SNv/UNFVUw26kprMgbaAPBL6ACYHH8DqoSIZFICAAAAKg1OCMAANakGAIACFsBAIBaAAAAVwHQTgAwXAELyHQmADYAyALQPqIEgcwvAeADCDJkvS3yzfWayzNsQqEK4AoLlwgEFhQRIhV+RzX0l/6VomaGXTesxB3VsF/6e4guJ9uuK6zIHwDUqsAGLySkoJm7KqGohIgAAACAmWsoAKBmZCIAgBriCABArwwA8AD4HADGKRABSLUBAHjDAGiPlJQfAGNPDQABSMaCsNBI7Cl21GOtgYuKRRQSlwIhiii4RBALBhgQAX5HNfJHf8Giz80Zp+ZgHEjJozr9S3/hoo/DNGsOxxL8BoB6AYDGAC8MLI7ZVVEiIiQEAAAAgNPuAABwag4AAKyGiQAANQOAdAsAlwHAZAAiyOQSwIIHQAyCMQBsa5FY7nwF8rVgJKqA4iwiusuAoMIwLgRyUHFhAH5HdfJbP4ki1+2eu+4UFNjcUb381k+aynWbZk0VBX4DEBoSAPUEZ0EzeFeVkEgkBAAAAICjGQAAzqoCAECQICEAAJ05AKADALYAYPsILgAkbgAALusDAJdVABgpGAA2GABAsgGMio2XvHvvGYHFvIKFeIFC4iLcaoEaAioSfkd14kdfYSLG6WnWO3iEuKN68a2fmshxu816h48wfwCkxgQ2+ZCwOM7OVJFEIiIAAAAAJKkmAABqUUUBAAUDAACoCwAAYNgAYAoAM1IQgG0BsLhXJwBownNW+wJixhw01h4PgANAsFQJrhC4q7oIiKSLiKJQ4QYIuEQAXkc14kcfqaLmt9uuO4OFqKN68aWPRFHz7T1O3Rnuyh8A1ApA8kLAyEFnXVQiiUQkAgAAAKyXDgAANrMJBQBEKwsAAJk5BcAlAIwFAAC1EUAAnUwA/FCnAQAAMADswADIeQqMhYSIatOwkKgQxRRIwYVAUY0Ll4tYLFwYAF5H1exHHyGienvPU3c4CVNHNexHH1zk8OOYNVUUeAN9MMlNcdB2VUIkIokAAAAAYBqOAQUAxFKZKABAUrTuAAAQKB4AAPAAaBeAbQULqBkAdqxpQwAAAINAG6C2gRqhYFjGIqWmEDku9FEgskCiEFVmQVUZoABeR5XiR19j2hrKu82aU0CRO6qRP/pZ1daQ3m3WOxwUeAq0AKiV4KY4zq4SSSoRIgAAACBWsSEAQLITUACAcGoCAABQgigAAPAGQC4A0wGIoNMJgB/3YhsAJIi8CXC6BFRKzHJRh7tqEJVlIV2zBRdKBMalVjAsJDAgYrkAfkd17ke/UaVdfDhmXT9WEuKO6vSPfrlrO0/brOnHAhL8BkDkCYBwGuBDQOO4rKtKJCEiEQAAAKBVJwoAdCoAAIiIFQAASIwAAACDAjDYADA7BSIwMwAqKzMBkBQA9pD7CdDpHDCLhYgLyqoJ4kVgqSCsgIGKgSshFUoAQQKeR430WyAalyLH1MvYAORRI/sWiJhUcrfpTJT5A0BqACb4kLCgcG4JVUQkEREBAAAAPFUEAJDIdQQAQMXpOgAAuEYtAABgAwCzBcA4AcAkNAAAR37TAQCKEKgQAEwBAOKPKIlMi5YC/BLISWDAkiRrIOJCYmAIAD5HdfRbb6Eih69t1hxsReaonn7pjaoY3rZZd5gV+ANAFHVggrsgQ7sVlQiRSCIEAAAAxOWNAgBitQoCABDGJAAAgDCMAwAAhgBgAgCZCZDpFMAbtQwAABghSAACODQCBg+iAjNYMIwggoUigiUDLupCUlgYQAF+R23sra8xUT0lp+7wKHNHreJDPxMqewpmzWGtxBtoA8FNcQyepBIRISERAQAAABqPnBEAALuZjAAABJGEAADghAEAAPAG4BIAZgABpFMACycAOMiDFhsgLR22CaWUXTWN8ECwLqWJIwSpQEW8VKiIdwBDhUIFPkct+ENvoyK7Dbvm4EgyR434Q29M5fA0zZqDqyRvoAc2uAtys6tISCIhEQAAAAAMw0FQAEBNUQQAsOueBAAAqisEAACbBaAZANApQIaZALABoLkAQFpk9VRVxFUqKUfrjRVAd3BQdZEYhQHlWogUVsCoLkmkAj5H7fipDyKypDg1B0mJOWrHT31QkRXFqTlYBuA3ANQDANUAHwIGjjmoRIiKSAQAAAAApyoAAHR1AAAgahoAABBE4wEAgKEAtBMA3IYFmIwAdhgAcMkp/lwVL3rehijwRyfYiVehDhrWFHK3uOhhUSlAsRaXYYwuUAIAfkfdxV3fBEXUJLOuTpI86iFu+idUWZPMuhoFfgMQmgBAY4I7cAzuSoqiSIQEAAAAOLICAOCkGQAABFMTAgCAIvEAAMBMABgHALjCAswogB9cADpxhoJNCSFy5RJp1v73DA3ppiQMuGutNBBIFgw3USgKKkkMLqhYqLgCAD5HnfBdHykiC4pddzhTYI464oc+iIiSZNdVkeAPABoT2OQOHIN3VSQkQkJCAAAAwMkWAADUUAMFAAjDBAAAiLqFAADAbAAwDQA+IAKzAFRuAMBBAIHGJ9gyoA0gCTe0+xdpW2HGT6ihDVe16o+ysCiLS0ByMViIAi4sUAGeRx3FSz9pKiqaWXcwSZBH7eKtHyGiotk1B1mSPwCoFYDkDoxBsmBVRCQiIgIAAADMCQAAYGlQFACQEokCAICnCQAAgI4AmAkANxDBJYDBOgDARSDGtkSSJhMQmuAyDalMVGADATn8qWUEIkXEOVEDCkQVGFVwMVQsSIheR63sra+bqJJh11yYt4A6amVvfcNFFTS75sI88Ab6YJIPCQODdqqESEiISAgAAACoYYICAFiaFAUAVLwCAEAY1AIAAHcAwLQAeA1uAuEAvDHVAACAUQ3FjF6nOIGtEVASIyloyCVi4fmaWwpSuhJmMBgQISEVhAoGJH5HLeJDfxEiS5JTc/AKuKNW8aG/psqCYtYcZiH+AJBFBZjkpIqzVIkIUSIkAAAAQAxDAAAxxAYAAI6pBQBApzMAcADwGQCTAMAOAOwALO5kAIBQG8Kmze+VwDjICG2xpwppcnxdNpM6mtVQGQIBMQ4qAiJYlgqRiwWxAgF+R03yUz8ZIqem2DU945VyR63yQz9S1BIku+bght8AiDwBQA34sLAYZ6giIiEhEgEAAABUmygAIGQFAICasQUAAOoQAAAwBYBxBMAUWAHgAFyWqwBQrDu8jYYPNH6t5NQMAdEixCq5t7jFHcD6gYuASwgqMFAvAJ5HLfJTfw+RJc2uOWghj1rkp/6agmLaDl4h/gCQWQMGd8GcmSohEkqECAAAABBkQAAA0dQBAAA8bQQAADRtCAAADAFALwEwaWEVYBsB7LjTCQAE4yqZKvbQgdB03j3cFbJ6JwyWEaNmVCCigCJggKrggsGFZJEAfkd18lu/tiJKtlPXspbgjurll36tRZRsu+biyML8ASCKKjDBCwGLcWYqEklIJAIAAABAHB0FAMS0FwQAECoBAGDoTADSKQBMATCdAxF8AhiYUQAk5SEe154WtOw2dCCc7I8+y4N8qiPiIQ7EVSgJIRERoAiCi4VRoVKJAD5H1eJbH21FcZsOihJzVC2+9dEVFLftoCjzB4CsVgDBSjjOlKISiYSIBAAAALjmQAAArAoCgMy8CkAmUwD6ABAuAK+ACGwB8Ma0AFCEpBppjatCiT5pS1n5qmEpP/JrWBKyIklARMWFC2tREclhCHABfkf1+ku/KFUF26xrWYU8qnff+lOqhuKYdb2gD38AUCuBDT4MLI6zqyIhSiIiAAAAYCkGAADU9AEBADD1FAAAmMYAAMCkABhGAJyvgAuYFsDiDhcAqCBXOi3OELMB2b+b35sNMQUNqmtQXANYFA0IVBKiCwxFsVAgsBgAfkeN+ks/XRElT6euxVbmjurNl37aKkueZs0BK/IHAKcCWJwRZvDMVBSRlIgAAAAAp8sHAEDVbgMAAMVFAQDojAEAUwCYFAAAaCoAAdgPAfxYPwA4uFUQY0RrXtrNQ5pfokltyV9Eq0Ht7aiM7eIV3le8XdmsSBc1MgQoWFR9GJcKSgRLhAgLfkeN7ku/KJEJ2nVXQaDAHTW5T/21RBT82HUXw1LgNwChCQDUE7yQMHIcHKISiZKEAAAAAMicpAAATsQAAFAGAQCAc64AYBgAMAEAAIgDIICYCeCdd6+eAERaSl4IwhfBNDfZzVraYbjOmZt1iV0G96JW5CEGMOfiYlCBwIBAAr5HTe5LIHqorPhn1rSoFbijevelnyyRQ/Nn1/UMrcgfANQT2OQsyAwiU1IiJJQQAQAAACfOAQCghhMuCgBQzbgeAIBevQAgLgEwAYDOBMhkO4AFDwAM2tqFpqHUVpHVzISS6rEd1HhFonQkiQYuBSQKESgSCxZYXBEeSI3pR/+2iuLHjK1zIagQSK3xS/9IFRU/ZqgXBsMbaAHJTUHDZqqIRIRERAAAAICYjU4jAAAWExQAYNBUAADM4QAAAL8E4BIA81kgAmCKAQCYsjIEgJEkzI9bVzIs7HfAdLwOu9J1cRLRhXBVlRKRGCFWKC5ElQRhwQAX3kct/ksgjFZVc5s1F0NfRB81+S+BMFpUxW3XXJg+vIE+mOQsKJyZSiQSEiIiAAAAoLVSRwEADMeMAgA4PgIAQGaOALhSAAxzAFxeAgDTCACAiykAKg3y3RAaLqVhq2Sf6Yv758bKL62yWiSDpYzSZyVLJGEgiuAiK0JBBAl+R23yrX83UVXJrvLCQ8cdtYm3/ssFUbK9FOr4A0DGNDDJGSFzZioiIhEiIgAAAAAkpBsBAEQGaQQAQCQGAAAGMwGwVQBkAAAAtQID0CsTAAuTAAotjVbodB+hshURrDrMk6MxdgrtYKWl3kGqSCwGFlx4u7gQAX5HnfVDIBQqcknYNQe1yh2165dAGC6qJNneDKzyGwDhFADmgTVC4cwyVSRCJEQAAAAAoBQUABC2AAAy8yoAmTEC0GEAgFkAAHA4CwCwagEA8GN1CoBg5I61YcObXZotaErma5uKHaXwpySb8VC51c6D9RZcxUIYDCyWgAQzBioGEgB+R53kUz81oSQcrxso5Y7a5Uu/poogmd4ISuUPAFnWgAkuT8gcnKkSEiIiIgIAAABqTREAQFQdAQBgHF8CAACQOAAAoA8AHAAAmGY0AJ3OAFC5mwlAaJHtQDQAL0qr9qE6tR8z970rnbBYllWYYwRESQGqTRgYLIgJSwEBXket+q1Pc9FJkl3ljYkyddRiPvQpE1Uy7Jo3FqW8gR4QnBQUDoYVRSKURCQAAABADCe6KACA1eYEAgCguBAAgE4mAHgJQAuA6QAAxAcAABxxpaBAYo0ARiKpetga2uwgUBIZnoXqqka4CpIIKyBQQRChEBkKEgEsAV5HLfJD35Wiatgu1l/AHbWaD/1Xiiph17xZU8ofAFQLQHAWx6mKJCEREhEAAACQ3QkIAIBpDwgAgBIaAIBNtwHgCgB0AMAwBQIwE4CLKQAkdbx9H7XSrzR3a+yahdCeRjuJekQShUfX5VowlIiFywpgQQwwAE9nZ1MAAEAKAgAAAAAA6OSsKgUAAAB+GaQnInt3cHaAfX54fH15fH1/eHp9dIF+cXmAcn55dnV1enl5eXxeRx3lU193kcvArrmDUgXUUUf91Fdd5DCw6+5GtcIfANQS2OA0yDCsKhIREREhAAAAYBIUAACNcAQAgDCSAAAA0wBgWAB0BIAZAGaOAHbcwQiglGVOqBQZ0980O2bvk/MN7SK8xLzsSiYY3vVdqc8GGDCoKQEVAcFFhAJeR23upa+6qGFLdk0vNVLqqM2/9BUmatiaXdPLt4jfANAIAHXgpBhnpkooSogEAAAAAIcnAAA4ggAAQFArIQAAZhaAXgDgANApEMG4AIPlEgAauVSdZG8FbylaGw7pHqNmwwA3bBaW6TDQhBgXAgMLSLgUKAEBCb5HXcxTIJwqpCHZLiyJ2KOu5iEQdhNSkxyHCP4AoCGATU5jTBUlkYhEIgAAAMC0AACACo0AAJhEBQBAxikAdkMAZACASQoiSBfgjZcAIOSEhnSOtnqdMuNX564yVAa1TKl00YUFEoKCVEmiAgEBYgBeRx31U99uIpuCXXNQq9RRu37q211kU7Jr1hp/AFAvAclJcZywKhEhERESAAAA4KwIAAAYjoICADguAgBAhikAfADCAWCawAVMRgALEwCNEHfH9Vj60V9bAdCM1KN173NlCU+jI5o7hWeIPEioFAtqwLiKCJYBHkidyof+LURMf6Ydu3N4NP6oY/kQCHuKHL6GU3NYdLyBFpDchIPhUpWIRAkJAAAAEDOWIgAAFpuiAAAB8QAAQJwBAMAeAOEA8AoIwASAi32LgKZi53/fldQnoCKo5h0qpbIrhfEvJHnhZVo1qBGBWpAwRRVZwFJgYSBgQEQRCAAeSB3Lh/4tpTFMXye25zyS6aP2+CEQe0qr6c/WJwjeQB9MchanGaxIhKJIRAAAAIBaLLMoACCGJgMAgOMjAAB0xgBA5iMAdQGAToAATOYAdtzscLCTWOb9ffp4lcaLSsmE4sN7qYK9wrPqqlgEN5VCKAYMRCQMuBgSMHBZAP5HHcuHQLhS5fT1NKtceKqYP+qU3gLhdBXT19OsObcyfwDIqAGDFwJSkDkYViUJUUJEAAAAAMsZAQAEBwUAQHBSAABoZwFwAtAOAGYC9GIC4EidhRIKuRWqUjvRtCiRUDtoRSaW1KREQ0bNuVIDY4GrABeXJIJxGQZYCixEAJ5Hre5D/xVC+PG0XTCRuaNW96F/DxH9eds1F1xk/gAQUQcGK8XBZkqESEpEiAAAAABODQUARJ1IBABk5kwATANALwA+B4BsAyJoJwB+GG4IpDTmY3a2uOwE7BCTZqTHadotcS0rslkrp6+iELjgVyBAQCDigiTBBb5HbfFDIJwpqrc/u+aMYI/a4odAOF1Vbz9mzXmR8gbaYIKzGAdnqoiEpEQIAAAAqFVsCABAvcFJBAAgDBMBACDTApChALgMAMYpEMHnACR0tiASuDOS6A4CJQVvURLeNWZLqbOvhrjaXDG4qBWjQIXEXZRCgABxgeAiQgSeR63uQyDcQ8jHbXtToZi8avWf+p1U6vZ2XDQV/gCgUgUEGxdkzlJJRCVEQgAAAKBZKygAgGmaCACAposCAJAuAFMAuASAiwtAzQyARZ0UQRJ01lqt3EOtRvqXGClgLEAq/bBqkkJ+Ht0i3EIaJyggaCEWXFCRMJSFSoKEBV5H7fKp3wohNs1xpgXUUZt+6bdMyc0wnfsi/gCgXgAbvJAwQubMVBIlRSIEAAAAnGZFAAA1XUcAAJRUAQAwAYAhAJgCAABTQwFgqwAupoAiCmnngBSD0OZN2jaadwXNWaXpoVbCu+AnkotuRQQLxgIFlwgJFxeWgACeR53SU39XUfMw7JoH4YvJoy7xoX+IqLlpTs15VcpvAKglAOrAGSE4VUmJUAkBAAAAYDQDAMBpMQAAqKbEAQDgIgCkIwC2CgAAZpQB+FyAHSYDEETS1bBWaRif8a9med4cipNW1+DMg0K7WFfgSkQgUbBEEQkRLkoiESABfked3UO/MJFjcds1D4RV5I46u4d+IUIsbttFt5L8AcDsBBYbeULmrEyREBFJRAAAAAA4/AQAgIrdEQAAgiAhAADmAPRLAD4DAIBpJQCSKYBjoFMAJJA20z7aNhTCjn2qJZDuCrJpKGk1m2MMwpB4IqJPUQYDV0CWC5EIEgO+R538SyBsJqJiOzXfFORRm/vQv1LEOG2n5g2zifkDgFoAm5wFmYMzFQmRRJEQAAAAMFUDAECNWooCAPb0kwAA6DQAmAWA8wiAK2eATLYAvNFZAKI14oJ2j5aSfEEU0rHuidNzqK8qUhpxjFWqTetGyRChchUGhsKtGEgQoUgAvket/lMgnCmqYTs+vInZozb/oX9PURXT8bGdlDfQB5IXAgbIHGymRISqhAgAAACoUWUUAMBAUABAUAEAwEwAuCwAOgLgJSAmBbBYkwK02hgZUMqnKmOePM3bIRXdQYQo5UMx5PIFuooij3WBGjCAlICIixovFS6Ifkdt5q1fcxE126n5eMEdtboP/VqKaLidmo8FvIEWmGTjgszZMhUlUZEQAAAAEKsmIwCAGNYUBQAIEk4LAMDvApABAKYAGKaAmATAP2wBgFA93O6NH6HSPQwDoeEiVUWxQ1HGQKIQyqAqcBUDEQYGF1QeEV0IWAwoCAD+R13cUyB3U1lxm74y4Y+6uKdA7i5Ino438YA/AERWgcFJQbCqUglJQkIkAAAAACcHBQBEnLQCAEDoRAAASKYA5AMgXAA6A4jHAejAC0igUbAHJIo9KaRlYyRUpYxQ8NFqaVDipVGpXIZYrUtz7WAFlAUFBgkGgUgQMDCwAH5HncxTfzdBcWxfCbijTuYpELoJmtv2TcEfAFINGJwUBAzDqkiEhIiEAAAAAOYiAgCIGjUAAKTpYgEAMCkAfAAuFwAzAfYAOFJaAGFLLbFCqmOAx1qaVVFqH6GwOeG3ljHC2NFVCogrlxRQWLggobqIYOECnked5VP/poLgaft4F5NHnfVTIGwmSJ62r5TMG+iBCT4kLMiVlSpKIhIiAgAAABKzJqAAgESRHQAARQAAAGoJAACYBYDhDIBMAHo5AJDsFYFoUEklW4JIu2tTqsxsMEIrQrVtmpLs0bLirpCMyy5UEe4sSMmFhLEECmmBAosKAwkXnkddzEN/N0Hytl1Qvog86m7u+isLkqfjgqnwBtpAsDEFwWemkiIqEREAAACgpr2GAABYDRAAQE4kBgCAxwHgBOAyAMatAD4A7A7ADBL0MyD78nKsdT42kPD5pJ9KUma3h9lSiqRh4g4rmqM/iHVBhYubIBUPkggkEpeKAgpUXkc92eXrvyB42877CtRRt2L75VME0/QN4Q8AKiUgOAuCsUxFQkRFIgQAAABMmqEAAKZjQAAAAk8PAEA7AaAZALANALalaD4DOIttBwCMAO4OSAJpIF/rHaQOGTfMIMwIZnGjyBjAEFhQoTBguBFULgGeR93qq/6CBMmxfWcBedStvuovWJAM2zeGPwCoB7DBWTBnpioqISEiAAAA4FQVAABVdQQAgHDaOAAAzAwAMgJgAgDTBBZo7AFUytUSLaRJHWtifehc1EsIqPl99Rxj9jkWbnO5opJCogcrAUMAKaLgQoEVkRBUFhgAXkdd3F1fo6LGYds13xDqqLu56gurKJhmzVcs4jcA1ADgBHghYDEOLhWJiERERAAAAMCYAgCAYwEAgGAqAABmFgCXAcAQAGQLiNBtYDYN5c7OAkWSei5ZrYRoMooQ2FKN0Mh/Q5Mq5aY0Zy3uWGEaZygGS8JCSsRCiVgSWC4qUAGeRz3kTSBUFgRP2+ErQR71lFeBUFlQ3I7DW4E/AKgnsMlZrKlKJBKJhAAAAABwUhQAABUnGwEAsBKNAgCQcQqAWQAYBgCYgAtxAyAKgNEUAAo3dfKSD1/es0LqdzdLZYseoisgDWXBECEgwE2wkJaECwx+R130XT8XlTVfs+6wL0Ef9XQ3gaQssuJr15xSJXgDLbDJaYzLMpWQlFAkAgAAAMRsDgAAUHNwEgUACCMJAABIrgJguAdABgDoFAiIywE44HqebgOCNAF0T2ANI91SotHW9nmOifn7XYgpiSuJoDyQoUIUgaCCqxJRoKCCQQB+R13kXX9XQfN0HF4l2KMu7ikQqiu2P9NhrcQb6APJSRgnrEqEEklEAAAAgBoSRwEAYoagAABDJB4AgMwYAegFQDgAvAACwhyAs1hnbACFIFqzra9a7T1fNQipio9553huhOkzgvYKNfLAtTCASkEhwVpXwkCUYMACfkdd5F0gVFEMb9NBK8EddZc3gVBJ0PzZDpYCb2DAJHfB0GZKikSISEgAAAAAVgcHBAAQo6oBAGAnGgAAALUAAADmIwBMALC9gRVAOwLkjdoGABBg0+bQ0l00kkZhncX6oL+XCpb1oxIUVAQkkC6KqEZWgKsACb5H3eqrQFQSNE/b4REij3rIm0CopGjepsMDfwAIVWBwRsicqkpISIQIAAAAAFz7KAAgkloBABAzEAAAnVwAYBoAdAAAAFNsADoFYKVyZwwAKFWq8VT+cWQ2Hl+sk8nG6BekgWslSjA1sCxIAgqOBAwEsLAoAF5HHfVTP3fB8Gc7yIrUUUf91K9MUPyzHSRJ3kAbDE6KcWaKSISEEhEAAAAAtF6zIQCAqLMFAADS2nUAAFDbAOAB0A4A0wGI4APgtyW7ximAEFK8Nh+eQpvmW9V3aJTE0FIa7uWgUEWN6MIFqSKgELBQVYOFCr5HXcxTIAwXwvG0fcjQR539UyCGiWj7OjUfKngDPTDBaRyDM1VEJZSIAAAAADFyQQEAMc0IAQAInTgAAJ05AJAOAbAfAODiEojQPI0A3tZ9EPxs8aLARkkFCNmX0nZYk4eZirRYdm4ZGZyJoESqQMEAgUBCBSqWBAUV/ked00sgdFPi7W36cIc/6pKeAqGbEJ+242NT4w20geCmIAtnqkSEEhERAAAAoOpoRQAArIYgAACaJgoAAMQDAAA8AHwCoBMApgBOWLllS/QQaNJNQMp3Jyqw68Oms+Z7Gv5cjFWtOSK3zEZIkqsgkixISKhVQgXDBZ5H7e6tf7iSbl/TwVVKHbXpl37NhXQ8bQcq/AFALYENXkhIscxMVSKJJEQAAADARAUAADWTQQAAxQUAgGzfAsABwCcATIEAbheA7gGojeoumcm3WtNo22mpashmwuwKZ9zgpm4QMohmzy5UWBgQEEUoFlyqawCJAAFeR+3mqV9zERw/Tr21gDrqaJ76hSpx+5r19uEPAE4BNjgpyJWpkkgoiUQAAACAIygAAGo2NAAAgKeZBABAzASAC8AnAMwAyLYCkF1AoFEo2QsFdCxpEj34vWhNfqhrf1ouZ7KxDLHOqXoQBhEJUUGVLBhQVHBhSUQAvked01MgFCa69PS1a3qAvpQ96hKfAqGqyOXpadf0hBeeAgFAHTgpyFaWiSKiRIREAAAAgGiiAwAAjhsAAAhcdwAAMrkEgAfAJwA6E8AVAPrGNH0fQ/cQjQjVKvotjHsAQiuX+aAAbxr7lViBe1lvoJZLABYSF1bCGRUEBE9nZ1MABAAbAgAAAAAA6OSsKgYAAACqKGswBXh4dnQtvked9VMglirlxzEd9qXsUWfzFAibCeHHsX1nlTfQB5uMi2NwpqQSIUmEAAAAgBpxAwUAVEgEAHTmDAAgcQMAgDoC4BIAhgkQQWcHAG+OP0DDhtQLUTu0CpSyKUHm2Tsm0vS+EsMtFy1IVLgkWBhcFIqVuAwkAgQS3kfdzV0guQjhT7G97jdV+qirewjEYiF8bdtXSuUNtMAmLwQsyDAMq4pEiBIhAAAAIGZJEQAAo9FAAQBhVwEA0BkDAM4DALYAYDoCNDMALMo2gpKAzQ2VMCqg7RWOBWCPuHizEVLfrl6oCxUUXAkUlYCVUFFggYoAfkc9xFX/zoKn23YeCbij7vqmf6Hga9v60GLewALJXZA5zRQJCVFCAgAAAIDW7AkoAEDMAAUA0PQhAAB4mAIAAAwAcAkAM1JAz7MA/gXjSqGgatTNu4u3vHOTszVJe0DSKlJ0y0+IKczCcgkiEFwICksEQQHJBZ5HPcVVIC4W/Bm2N3uUckc92VUgnKR4a6ZzVcoHjFQKclNVRCJCQgQAAACIi93upNU0ErZJZIZCQHy3C4itGS0oaQvgDwCZJkBMZwGQAmCcJiogZL75kA6VcfupKwnNKLULFjymNpKbNYBFhUVVkcCCIIIBvkf97yxfOgMOsEf97yxfOgMOwAEEAAAAAAAAAAAAAAAADE3GzKeZbyVFedoF",
    D: "data:audio/ogg;base64,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",
    UpD: "data:audio/ogg;base64,T2dnUwACAAAAAAAAAAASBZ4qAAAAAB3JUkkBHgF2b3JiaXMAAAAAAkSsAAAA9AEAgDgBAAB9AAC4AU9nZ1MAAAAAAAAAAAAAEgWeKgEAAAD9Ty3vD0T/////////////////swN2b3JiaXM0AAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAyMDA3MDQgKFJlZHVjaW5nIEVudmlyb25tZW50KQAAAAABBXZvcmJpcyFCQ1YBAAABABhjVClGmVLSSokZc5QxRplikkqJpYQWQkidcxRTqTnXnGusubUghBAaU1ApBZlSjlJpGWOQKQWZUhBLSSV0EjonnWMQW0nB1phri0G2HIQNmlJMKcSUUopCCBlTjCnFlFJKQgcldA465hxTjkooQbicc6u1lpZji6l0kkrnJGRMQkgphZJKB6VTTkJINZbWUikdc1JSakHoIIQQQrYghA2C0JBVAAABAMBAEBqyCgBQAAAQiqEYigKEhqwCADIAAASgKI7iKI4jOZJjSRYQGrIKAAACABAAAMBwFEmRFMmxJEvSLEvTRFFVfdU2VVX2dV3XdV3XdSA0ZBUAAAEAQEinmaUaIMIMZBgIDVkFACAAAABGKMIQA0JDVgEAAAEAAGIoOYgmtOZ8c46DZjloKsXmdHAi1eZJbirm5pxzzjknm3PGOOecc4pyZjFoJrTmnHMSg2YpaCa05pxznsTmQWuqtOacc8Y5p4NxRhjnnHOatOZBajbW5pxzFrSmOWouxeaccyLl5kltLtXmnHPOOeecc84555xzqhenc3BOOOecc6L25lpuQhfnnHM+Gad7c0I455xzzjnnnHPOOeecc4LQkFUAABAAAEEYNoZxpyBIn6OBGEWIacikB92jwyRoDHIKqUejo5FS6iCUVMZJKZ0gNGQVAAAIAAAhhBRSSCGFFFJIIYUUUoghhhhiyCmnnIIKKqmkoooyyiyzzDLLLLPMMuuws8467DDEEEMMrbQSS0211VhjrbnnnGsO0lpprbXWSimllFJKKQgNWQUAgAAAEAgZZJBBRiGFFFKIIaaccsopqKACQkNWAQCAAAACAAAAPMlzREd0REd0REd0REd0RMdzPEeUREmUREm0TMvUTE8VVdWVXVvWZd32bWEXdt33dd/3dePXhWFZlmVZlmVZlmVZlmVZlmVZgtCQVQAACAAAgBBCCCGFFFJIIaUYY8wx56CTUEIgNGQVAAAIACAAAADAURzFcSRHciTJkixJkzRLszzN0zxN9ERRFE3TVEVXdEXdtEXZlE3XdE3ZdFVZtV1Ztm3Z1m1flm3f933f933f933f933f93UdCA1ZBQBIAADoSI6kSIqkSI7jOJIkAaEhqwAAGQAAAQAoiqM4juNIkiRJlqRJnuVZomZqpmd6qqgCoSGrAABAAAABAAAAAAAomuIppuIpouI5oiNKomVaoqZqriibsuu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6LhAasgoAkAAA0JEcyZEcSZEUSZEcyQFCQ1YBADIAAAIAcAzHkBTJsSxL0zzN0zxN9ERP9ExPFV3RBUJDVgEAgAAAAgAAAAAAMCTDUixHczRJlFRLtVRNtVRLFVVPVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVNU3TNE0gNGQlABAFAMAwrDX3YhyBHIOWc2mQVI5ycBFDylENKlIKKYjBVUwh5azWzCnFINXaQYUUpNhLyRRzkgKhISsEgNAMAIMkAZKmAZKmAQAAAAAAAIDkaYAmioDmiQAAAAAAAAAgaRqgiR6giSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKnAZ4oAp4oAgAAAAAAAIAmioAomoBomgAAAAAAAACgiSLgmSIgmiYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLmAZ4oAp4oAgAAAAAAAIAmioBomoAnmgAAAAAAAACgiSIgmiYgmiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAABwCAAAuh0JAVAUCcAIBDcSwLAAAcx7EsAABwHMeyAADAsixRBAAAy9JEEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAADAgAMAQIAJZaDQkJUAQBQAgEFRNA1IkmUBSdI0oGmaBtA0gCcCPA9gmgBAAABAgQMAQIANmhKLAxQashIAiAIAMCiKZWmaKLIsTfM8UWRZmuZ5okjTPM/zTBOe53mmCc8TRVWFKIqiqsI0TVNVgSiqqgAAgAIHAIAAGzQlFgcoNGQlABASAOBQFMvSNM/zPFE0TVUlSZbleaIoiqZpmqpKkizL80RRFE3TNFWVpmma54miKJqmqrouNM3zRFEUTVNVXRee53miaJqmqqquC8/zPFE0TdNUVdeFKIqiaZqmqrqu6wJRNE3TVFXXlWUgiqJomqrqurIMRFEUTVNVXVeWgSiapqq6ruvKMsA0VdV1XVeWAaqqqq4ry7IMUFVVdV1ZlmWAqrqu68qybQNwXdeVZdsWAABw4AAAEGAEnWRUWYSNJlx4AAoNWREARAEAAMYwpZhShjEJIYXQMCYhpBAyKSWlVEoFIaWSSqkgpJJSKRmllFJKqYKQSkmpVBBKKamkAgDADhwAwA4shEJDVgIAeQAAhDFKMcaYcxIhpRhzzjmJkFKMOeecZIwx55xzTkrJGGPOOSelZMw555yTUjLmnHPOSSmdc8456KSUUjrnnHNSSikhdM45KaWUzjnnnAAAoAIHAIAAG0U2JxgJKjRkJQCQCgBgcBzL0jRN8zxR1CRJ0zzP80TRNDXJ0jTP8zxRVE2e53miKIqmqao8z/NEURRNU1W5riiapmmqqqqSZVEURdNUVdeFaIqmqrqq7MI0RVFVXVd2IcumqaquK8uwbdNUVdeVZaC6qurKtgxcV1Vl15YFAIAnOAAAFdiwOsJJ0VhgoSErAYAMAADCGIMUQggphBBSCCGklEJIAADAgAMAQIAJZaDQkJUAQCoAAEAIxhhjjDHGRCmMMcYYY4yNYxhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYYywAcKnCAUD3wYbVEU6KxgILDVkJAKQCAADGKMUYhJJaqxBizDEpKbVWIcSYc1JSaq1nzDkIKbUWY9CYYxBSaS3GpErnpKTUWoxJpZBRSam12JJSppSSWmuxFqVUSCG21mJMTsmcUmsx1liU07GVWGKMtTnnnKytxRZjc8452VqrrcYCADAbHAAgEmxYHeGkaCyw0JCVAEBIAACBkFJMMeacc845J5VijDHnIIQQQgilUow55xyEEEIIoWSMMecchBBCCCGUUjLmHIQQQgghhJJS55yDEEIIpYRSSumccxBCCCGEUlIpnYMQQgghhFBCKSWlzkEIIYQQQkgppRRCCCGEUEIJKaWUQgchhBBCKSGlklIIIYQQQiglpJRSSimEEkIIJZSSSkophVJKCCGEUFJKKaUQQgghhBJSKimlVEoIIYRQQkklpZRSCqGEEEIoAADgwAEAIMAIOsmosggbTbjwABQashIAiAIAgIyTEEpqjUBKOUmxM8oxaK2WyhmkILUQKYQUpBQyqBBiUkpIHVMMUmqxlNBBSjm3mEJJAQAAEAQABJgAAgMEBV8IATEGACAIkRkiobAKFhiUQYPDPAB4gIiQCAASExRpFxfQZYALurjrQAhBCEIQiwMoIAEHJ9zwxBuecIMTdIpKHQgAAAAAAAMAPAAAIBRAREQzV2FxgZGhscHR4fEBIgAAAAAAXADwAQCAhAAREc1chcUFRobGBkeHxwdIAAAggAAAAAAACCAAAQEBAAAAAIAAAAAAAQFPZ2dTAABAcwAAAAAAABIFnioCAAAAjvKCfyAdLSukk5aTloeTi5GGjoeNiYqJi42Pi4aGgoOBioeCg5zQi3uc0It7dKwAM8fMmKRinDax5/zeyEz811ItJNHTkzeJnp682+2DUZXBapiGKUgQBEFMXISm9+tzayZjJ6kYDZ05s+Vn3o4HJM+LD07yvPjgnAr1skTEJQbBEEHf/frwFG9TmZZ4yzJRMzNDW3bFof1fD7pHVTK/xzFBXaX5jvAAjhfsUZXM73FMUFdpviM8gOMF/wIAZGQAUoUxWQMXA2QWTEYqESFABkDWDAOnooAZhoE0MzeXWo1QLMHCtGmaYjJMBwADJkwoAKDvAOAGANPppAAwAwCkUwXgBiB+XO0EgCYcAKgEnXQEADg0ADpNAU4CgB8AiEvgmPABADWxHov+2D0A0PpnEUKngBUZ2oqgWtcRBhhUvlcFAz/Tb0OXXvJ+RuLCjBtkrwoGfqbfhi695P2MxIUZN8hTYFsBgKjLu924Uv2ggYpEIhIAGOqgBiCIWGymAwQAzKkYAACKjQMAACCxsQIAABQXBQC/AIDYRAIAADgdAHTmAAAmAGCHAcAwBaBkCgCWXwAnYgEAAEyggFMYAX0AlANanSGgYCy4ArQF7gUFiQUqHlgV4a/6CrOMh26eSL8RQlcqmMCqCH/VV5hlPHTzRPqNELpSwfwGgChqJQBkg3iDBRabg8QZlguCQlKJCAEAigpOFDCHmSkAAIrhAABARRUAAMVQAQAARQAA4BMAgBKJCgCAYWYBkM4IADwAUJ0AANMZAEIbyw2M0wEAMAEAfALwCgB+B/zBykOAfsANkIMBt6hYuCwA/lc1ma/2x9X0m77ckbgQmvTKX9VkvtofV9Nv+nJH4kJo0iu/AUClXgJANMq78fQkFsqhRCoRAYCKEwVAnDpxAAAg5jAAAIgjUQAAMImNCAAAFCaIAQDgNwCAuDAEAIDMaACQYQrACi6fAOhDAOAAwAowowUATACgjV1EBjcAAFMBAm6if0MJkEQWkoGRgnQFEKEC/kd14Xf5C1XLL3Xckeowzk0l/qgu/C5/oWr5pY47Uh3GuanEbyIAsmxaJADKJuIDw3b1JAaIEAJVkggJgHOCAIqJcwYAgDoDBwCAICoAAEB8nAAAgECJBQDHCDpMhwJg2gBAZgJg5dkXABC/AQ0nAFzQGQEAcRAAtAMAXAC08IPjJQBASUPAQl0RklqMVaFIC8EyIIkA3kd12U8bwgryvPOmD2Y5lz6qy37aEFaQ5503fTDLufwGAPVaBQCKptyNK+EcVEaEikQEAOIUBQBDEQAAMAMHAADxigMAAIhNDAIAACeMAADwAYBhAgAmIwC0DwC3AfAdOnMCoLVQXYzTAQBcTQAK3opZiybeWzEkPgBAgIWKNlxCRMSIuBAA/kfV4Y9hNTn9pj3vyOwxzHNQ/qg6/DGsJqfftOcdmT2GeQ7KvwAAAYCyQbzBAoKNK8XTgVFAEKFIhAgAAFBwAACow+EAAABQAABATQQAaSwAAK2ZmSkAyIkAAMBtAJiMUwDoBAC+AAAzAADPAIC4EAAAzA7LxTCzACBcACSAE8BuAOAqMG4AYEGEi0LBoFaDaEAF/kdl9uaWqiKGT+m5I7Nl5Ig/KrM3t1QVMXxKzx2ZLSNH/AYAtbIOAEWdu15IWJwB0YVQRYkAAKiaAwBRU1MAAETMqQNQRBUAAACAuCAeAABAcQYAZJwCQCcBgJkAwIwAgEkAcAQzAQgX7CLlArBiG7QPAJIJABE/GJ8AwFD9gYV4AwQSDBAHqCwIAP5HhdY/7ViqS4v0nJEtA1Q0BP6o0PqnHUt1aZGeM7JlgIqGwL8AAAmAao2zhiTFEnkDJVVCAgAAKBkAAKomYiDRCAAwqAYNAAA4gQQAZkwKgE4nANBpAGDmdACA2wC4fgAoB6D5AEAnA4AwQAMX8LsAEPABCvYDPAIA+AwMKjUoF2llQ408qAQWAajXxYXLoALeRwXqf4ZcCJ12dqQuwBAO9FGB+p8hF0KnnR2pCzCEA78JAJpGAwBU6pyNG7cpuyGihCIiAYA4FAAUVQUAABFBHQAAhPGBAcCMsQAAEAcAAL8BAMTGBQAA4AsAIB4AALjB5QIAMQWQWFgWMqMAWAoJFaAcgAQRI9jkWhLCoxuREMCNCQIGRP5HxdZ/DpMihsV+7rypFqMo5o+Krf8cJkUMi/3ceVMtRlHMvwAAAYB6jTF1Eo63R5CKokgIAABQoQAAqIqIARIAwEQ1A4AZM6cFAADFGwCI1wCQSQEAkBgLAIBMAeC7AOgPgP5BxwkA4AAA08kEAEsBbwD8AD4BNCUjYkWDgggX0k2Ua2YKfn7QExErCgD+R0Xq/9hZiFx693NG+oGOCv6oSP0fOwuRS+9+zkg/0FHBHwBoiDrQc1NDT/FumapKEiEAoCoAICACAAAiDo5qAgAgJQYBAABhogAA7QNAJwGAGZMRAG4DgEkBqBF5AMBkBABOAAASygAAsCAD4AK4UHEjhgqXFLiQxSjXvQpdYLmoXAFCQgLeRyXsf1rNRS6L/9+TN30xpQhs+qiE/U+ruchl8f978qYvphSBzb8AAAmAeo27eoqzM0NJQkREAACAkgEAoOqcGFIVEgAwGJnqAAAQTxwAAEB8PAAAkwBAZwYAZkxHAHl4BIBkUgAMMB0AYAGBiREAKyTywFcG2EELALeB/QYBiYTETkUKDNyb4gWRQgHeR4Xqv1boopvZ/d6RHscKBAX6qFD91wpddDO73zvS41iBoMBvAFAvKwBQq/KBJXVSKbsyJBEVCQAAIgIAquZQAAAEJ+oAAFAMVQAAINFYAQDxAcAwLQAAxWMAADIBgGsAwAQA+ACASQGENy6BzgCAJRGwHysgjyMAwCmiwU4ScSW4GAYQCCWCBf5HZcrmDqiiK730PHmzMw5JgT8qUzZ3QBVd6aXnyZudcUgK/AsAEABorHDXxm6yERVFUZEIAACg4AAAUJyIgNAlAKCxlEYAABAXiQcAAJNoKACAaQAgMwoAwPEYAABXADAtAMfAwpGECwAk8AE4XgAAALgEoI1jQMGFluUaVOBIVZCwgBkVXAoXA/5HFcrf313qc2bxOZufDkK4fGD+qEL5+7tLfc4sPmfz00EIlw/MU2B6ANBQ8oDFsBJmgqFKJCESAkAQAMSwGSIAAAjqVAEARUQAAADAiZEA0EkA4KUAMB0DAJlZAHwPAKwDQD/AGyBUMYBnAIALgDbAOgAJNcaqj9EkUKgYiAsBUgKWBhcVwWAA/keV/J+1q1hmFt8nr/fFqJgM/FEl/2ftKpaZxffJ630xKiYDvwEgi8YEgMaCMbUOR50FE5VIIiIAKgAAhjoHAICiIgLAzJkTAAAm0YgAgPgBINMAwHQSAMikAEAkAAAAMAWAMxgmAMQRdEYAIA4C0B4A8AkgYhMA4IpQEODMuBaJNBYDVSSIKhEoGP5HbcrX2Qdxzcv6M/OifzC2mBL8UZvydfZBXPOy/sy86B+MLaYEvwFAtV4AQEPJ7ZtDQMJ4O+NVUZUQAAAiAADORB0AAIKKKoCgCAAAAABBYkMDAAAJ4wQAMBOgRuALgOsNAL8BxBm8BgAcAKDTAQAMsgAHAPA1kAiYIiXgshJFNYgR90hgDCIB4kWiAB5IbdzX1ZJ47IfH/5NX/YOhYUoSSG3c19WSeOyHx/+TV/2DoWFK8hsAlLUCAOoFt58hla6HiioSEQEAogCAmlNnAAAozokAAEAkLgoAABCfAABAJwNgAUBcTAgAAGYCANMAQLoAwQUAOkwAgCkAYJgWAOIAH4D5ENa6cSBxAzpUFNyiAgMRxWKhiZQCAxQX3kfV/J+rG/HxrLr/s6u9PU5jEtNH1fyfqxvx8ay6/7OrvT1OYxLzFJgeANRKbmpIuOiJKJIqEgAAFAAAw+7gYAAAiIqpAgBAmEggAAAgmggCgHgFAJ0WACZjAcAzAPoFAFwGwHdgCgA4ALCAyQgAsQ8uAOAyANyaCpr1IhlUkC64LKgUXAs1DQaIAN5H1eTv1Vxcd77n7lreHkPFIH1UTf5ezcV153vuruXtMVQM8gamD7TdswbOJCSSEFFEAgAUAAAT01AAAFQcrSIAABBNGAEAAAgTQQAAQDwAAAyTAoBpAKCTAEAmBYBHALyGdgIg/DDAIwD4AgD6jSnYPLQhshahCnekBBKXABfBAorFABIq3kc16NfemnidxfI9XUP15sBQHNNHNejX3pp4ncXyPV1D9ebAUBzzBwCyHkDPHaAjJQuJkBBRRAQAEAAAB5gAAKCIKgAAjiQ2agAAgEQAAHQyAMBLATYBcLwAACBOAH4BHgBgRgGEgeoXdgE+BwDwDECy1iXukuAqBhfEqhosZckjDVAxqADeR43we6slHvOy3Ltr+N+HOHZBHzXC762WeMzLcu+u4X8f4tgFb2BbwLgjx3hCMFUJkQgJAAACAKBiNUUAAECsDiIAABBJJFYAAABxAACSKQAAjhcA4A1MxhHAzcIHAHwAAPEGAADAgA9GgHZAIOKXjBQJBIj6EihUCwa4KBFRIrAA3kcV8M/ZjnjMXvvuV7Z5ASqO6KMK+OdsRzxmr333K9u8ABVH/AaA0JABgKxyBp5JykRFQhQJEQAAAADgzJkDAADUoQAAKDaRiACAGQDQmQGA3wDgBAAgDgEA8AEAvwsAFwAwGQCgghv5AAAcABTRNA03QuBosROrIsAPo0DANVCxFAD+R2Vs80/d6hqL8p153k4xcuaPytjmn7rVNRblO/O8nWLkzG8A0JBVAChqnJUwjslURBFFIgQAAICoQwEAAHAIAACEiUYMADUDAMwIAGRGAfD5AHA6ADcD6QLwHdIpAHUBQLrUiIAN0J+H0URKqQLJQIVCcFGlK3ArdiCpBQoSqgseSJX47zkfkUeVnydv9s3EmSuBVIn/nvMReVT5efJm30ycufIvAEACoKxzh5WwCKaEqCISAQAAlAQAABU1FAEAAAZhKQAAIJIwagAAMHEAADKdAoAvAIyTAECmABAOAFwAUMEFgOEDwLUibwNghXpFIBxoym4oGCqCUogCFwZRrSKEBEUKShBgKQAeSGV0c30aiW5m3d55kZuFIQikMrq5Po1EN7Nu77zIzcIQ/AYA9awAQFHjro1JEj2UCJFEIgIAAABQnJoCACAqigAAQJBIKAAAsOMAALQTADAFAEBxAADAbQDECQCXAOABACTgcjkAYEdkkhEASws4NKBlmL1RTFDQUgNGSSAQCpJVkSoWlgLeRxXgz3NesZTL8tx53INQcKSPKsCf57xiKZflufO4B6HgyG8AiGwAAGWds7EniT0UCSUlRAAAAAAcYgYAgIoqCgAAsXExAIDOAACA4kIAABwXAJOMABpD+wBQDgB8AMAPEMxiADMCgAXsJQDGiu2VxEuEHcKNBRYBRAG4DLgkFgxE/kdlcPPv3NXSet3fbH4uQIoX/FEZ3Pw7d7W0Xvc3m58LkOIFT4HpAUBR45wzMEMREYlEEQAACAAgYiACAADqQAAAsBOVAUBnAACAeAMAYAIAQBBvAAAwBQCdBAA+B4A5+iUA/FAtvHYAWDGpOWw3QvkVNyP2qETXUqkwVMSIHwgusABPZ2dTAABA9wAAAAAAABIFnioDAAAAQsZaCyGFgYSGfnuBfn1+hYN7hoKAfX58dXt/eX+DgX+BfHx1cXDeR5Xoz/vpYk0P9f9ufjKETQX6qBL9eT9drOmh/t/NT4awqcBvABD1BIBs5A7bFGdXRZSIiAgAQAEAnJkoAACYAwcAAHHReAAAABIAAOhkAgCuAwDgeAEA6AzxA4ApADyAyQgACwNkCgAilhD2lPp4iTelJJo1E1LFQAKXyoDAiKIKoQID/keV4M/3maJvD/H/zqM6HMUQf1QJ/nyfKfr2EP/vPKrDUQzxFNg2AEQDHxjW0FN2FZEIiQgRAAAAANOw2xUAAJwqBgAAmAgAAEACAADJTADIFABMDQDgAwAzAfCOLhcAMDMA8EZ1MUxGANyIViNuTWjMDD8/9BBRFhhUrgKBgQsX3kfV4Pf73kWXXuLPaX5aApU+qga/3/cuuvQSf07z0xKoPAW2BQCaMm4cYrSrhJISIgIACACgBjZHAQAAc4YDYOY4AwAABIkBAABwfAAAwG0A6AQA/ADQFwCLS6cAAHEAAIAZWETGCQBcY/f4N3ekapUm7kIgqbAUqBAZSFQIhAJukXAB/ket6OvXl+jah/o9efSNgVEQ80et6OvXl+jah/o9efSNgVEQ8xsARC0BQBPu4XrKroqSEiIBAAAAYIABAIBTxQAAQPE2AAAQiQMAACABAAB0EoBPwAwAYFIAVgDHAJCZBaAGrhUxBYAbBho8L2VXv9d/DQY3jIiBgBAhUBUgCgwgISHgYgAeSK3w6zuPiOlDe+88+/CJhAikVvj1nUfE9KG9d559+ERCPAWmD4CIppzOEmaoqCQiEQIAAACIOtgMAADAITgAAAjiQgDAjBkAkOkU8AtsAq8FwLUAsA4AR+ABQEW1cAPANco4rYbNGljC7YbE4xDZL2JBdRnAoKA4Y4CrggoeSE34R79Fgocxd/P9xhyGi0Bqwj/6LRI8jLmb7zfmMFz8BoDUFACUDYzDwAXrIiIRoURIAAAAAJghDgAAnIEBMJ0xAACAuIgBADUDAH4DgBkBgMMAVgZMAwA+AHgkfwQ+ADA1EQDXTPGIVEopLmrkCuAWiwtCwAVLQQUeSPX4l74ThbTI5+SFLsR4yEQg1eNf+k4U0iKfkxe6EOMhE0+BbQNAUecOi2OmUxFJlQgBAAAAVE2LVQEAEFPFAQCAE5UBAIAEgQEAmTEFgAsADJMCgAkA8mBaAOwiuADNRQVmAkB9LPeUu9mAEOxlGGBQQKkGRFOwWmBIqGAoGABeRzXc9/c8IqdLvHfL9AZBQB3VcN/f84icLvHeLdMbBAG/AUBZCwAoa4xPINGZkSgREZIiIQEAAAARRQAAUOcUAwDFAAAAmNGZAABEYjCAEYDJOALoxM3CuAAcsaPwAAALjgsAOACUSa5yY1OCFW4kUkHFD4VqUVERkVhYsADeR03o61e/qK2z7h3qQRON9FET+vrVL2rrrHuHetBEI29gAui5G7eDvF1FkURCAgAAAACIo4NVAAAQURMFAAASQQAAQJwNAAA4LgIAwAcAAAkBAJADJgAgXQDOgUemHACACQDIUepz9G6pMQTPNWmwicEyYIBbQYHKiBIGAn5HLeTHv+8ip4f1uVumFi4G3FEL+fHvu8jpYX3ulqmFiwFPgekDQL3C2IckMRQVUUJEQgAAAAg2m6EAAKgaIgDMnM4AAABxUQAA6UxAjcDM6QAAFwDEBwAXAPABAC4ADHBRDgCrInfRWVtQGEaEwYgSGBGGeg2okSWKBAOoLP5HncHrr0uEsno9d6g3IvRMAX/UGbz+ukQoq9dzh3ojQs8U8B8AAOg5fRsp6qokkoRIAAAAJSsAACIWQxWQAAAGzFUAAFCiNgCYMQWAzpwBGAAQHxcAAGgCPgC/gN0GADMGANgEnQZArcFqLeOXSjgHni8cSylVgksgIaGCQfJzYWAgwAKeR124h4Qaqm8Py3teTOmgvKiSR124h4Qaqm8Py3teTOmgvKjyFNg2ADQWrO3mEJBihioSERIhAQAAAKiaNlMBAFAEEQDBVAEAAJjMmALAZAoAABKEAKACHwC0BwCmADDAawCoqKUsfgMDxYqzxjbrzPmi4h1E1qDgQsQi0Uch4XJRAX5HjcTX149YRxXee4lm6+aOGomvrx+xjiq89xLN1s1vAJC1AICG5GyMhDMUEYkkREIAAAAADKcGAIAgKAAAECYSCAAMUwAAKN4AAFwAcA2ASRAfAHwuAG+QCQAMDAFyoWG1CZ2uaQ3SFa8Uhhq4cQBpqFywPCAJZBGoAF5HLcTHVyzxakV874tRjaJf0KijFuLjK5Z4tSK+98WoRtEvaGwemAAA2DhApzimiqKSSAgAAACAWHEEgBICAABVSCkAAIBowogB4CoAdDIBgFOAEwAUBwAA4ANATAFwEJgCKBck8CmODzXI96tw/Ut6dReRBOQqFVwkC4jKsqDCoGAhUnABHkhN9OcTr+hnE++TF4nDv/gTSE305xOv6GcT75MXicO/+PMUmD4ANARnJQNnKCmpiEQAAAAAqGm3KQAAoioKAABEEkYBAJkEAMkUADItAMIBAFcAMAEA4QJwgQkALPzCc+AuCLY+eFZSCYNupJKy9HGpPCOAlWAlFhURpCoUiVRBBB5ILfj7E5/oR9Ddp/m52SLmJpBa8PcnPtGPoLtP83OzRczNHwAo6wH0nSGJxFBJUSRCAgAQAABnYAIAoGI3UAAACBKEAgDDDAAwHQDgNgCuBoAPAOINwIpwAQA/ALxRqVwJGDdSr/5jiFIMfY5DfIA4FlOgIAgRAkmISAp9uEgVXkeV6Je+5eJqwWq2PHFYSEwdVaJf+paLqwWr2fLEYSExb2BbQMtZQySGqhIpIQIAAAAgiikAAIiJBQEAgGhcBAAwmQEAJgDAJACQaQHgNgDaB2DBTgHASwOhY2tYcVp7HQBurPSkqQQD9fJMFERUFAzoWUFFQMCABIkLwgJ+RxXgj/6R6mMXl7nuMAKZO6oAf/SPVB+7uMx1hxHI/AaAiBoARNY5Q++JXVElRAkQAAAAAE5xBgAATh0KAIDDRGUAMGMCAKYFgLcA0CkAjYFJALgRXhkAGBDm/G4zFA/UTAA444aYlmuhXGSLIuYsqoTLhSImKFzJdbEiLgBeR8Xgj75NxKMF+eyW94FEmToqBn/0bSIeLchnt7wPJMo8BaYPgNTATVIRESoiIaGECAAAACBYHAAAAMw5BAAA4uJjAQAA4gIDANwA8BsAXwCAKQDED4AIFwBU2jgAUIHnAlBycVbzzUUtV0uoDwRBBYmAFhKuSmTA5YILfkeV6Ld+peJqzWIuF2DruKNK9Fu/UnG1ZjGXC7B1/AaA1FQCoKhyU31ghkRIIikiAgAAACBOxAAAwJxTBQBASowFAAAkwABAfACQSQGgMwDoDMwEALcLgAAngPHDABcQcCGA5QFkGRBdREkFm2uARaQkSBIFPkdl5C99pqq+RbXNuUUONXNURv7SZ6rqW1TbnFvkUPMHABrVgLab9BQzVAmREAkBAAAAgII6AABQU20iAAAQH4kBAABIEBoAwAeARwDIpACy0DcAmADAAC8AUMU2bawjo3l8Eofk1uaYjnldVErFWAsLCgosSRSoLBYSHkhN4Ee/JqIbQT92HnUhqK4EUhP40a+J6EbQj51HXQiqK38AEJoAes5KEmYooqKEhAQAAACAc2IWAABELKIKAIBJrAwAZkwLABMA0GkAcDUA/ADAAQCXAHgjPgA0MHbNqF8gaD8xJppI4SZW8dCyBl0QJC4wCJEoJAwiDAoQAR5ILfhb74OiT6s6d8RvDAw4AqkFf+t9UPRpVeeO+I2BAccbmB7QdpNUDKpIKBIiEQAAAAAQsdkRAABUrVYRAACIczwAAEBMvAEATgD4DYDLAMAEAOIEYAQwAQAeAFQtwUGaJSyrxDLcI8xaDEtSiYhgURiMmiBeEgEeSK3El74Hin50wtx59MWoA49AaiW+9D1Q9KMT5s6jL0YdePwGgIzGBICG5ANDipOpEiJKSCIBACgAgCHiAAAQUacKAICgCAAAEIkHAOgHADIpQB/oFABZbuAX4ABAw4Nqf/1hcy6ONFb5EO6O9J5XUWVwWRIJC6RAUiEiMkAF/kdt5Of3+cWaXu55mu8L4CIdf9RGfn6fX6zp5Z6n+b4ALtLxFNg2ADQGN0kSDlVRJFIJAQAAAFQVqwIAoCoqAABAwjABAABAkCgAAAcA+AIgTgBwDID+AeADgAqmAIiTtcJ7cjuszspzMRWvB88rSDEaFgpYNYGyUCUVCzcBCfUCcQEeSB2Jj+/5xdIubew85kK+QEogdSQ+vucXS7u0sfOYC/kCKT8DAFkLAIAPLMlgylARURIREQAAAABzCgAUAABAxVAFBQAABaQKAADEAwBwAsAHADoTADwCuFlqxB4AYAJAYa7GMriIAMatjzJrYAi4osUYMMYiUAxYUFxcUFwIIAD+R935x3e94movfTnN9wV5TvxRd/7xXa+42ktfTvN9QZ4TT4HpAUDTZIxhYIYqkSIhIQAAAACGaTgIAAAOZwYAM2bMBAAAYUIAgL4ANQIzOwDAGwCYAIALAC5wAaA/GCXBd4Dufrw3mwcL5YrPLCR0jUWFBe4gMkQYxGtYEFABXked7Ie+HdWrrS7z4pRDJ6KOOtkPfTuqV1td5sUph07E5oHpAwCcvk2YoSgqIREhAAAAAKbV7gAABSQAAArSTBUAABAmkADAdBoAZEYBCwCicQIAMAniDQCXAFgXDgNlX90Gdzb2G2hYRKlWykBJFSMyYF0DYUFiQRe7EkCUoFIAfkft1ksgHlKvtnqZLdchLOWO2q2XQDykXm31MluuQ1jKbwBQ1gMAGkvOsDESVVGUJCQEAAAAwJmIAwBARUUUAADC+MAAYGYDgEwLAB8AAIozAABcANA+AL8AHwDwAGQepUaUeuMlqVwMCSNQcIGCwKCCMRREBkihikRUqB5HLeFL9xuKq3TWcg45Q9hNHLWEL91vKK7SWcs55AxhN0+BbQFAQ8HtEYyFqEqIiggAAACAgFUAABDFVAAAIBIfAgAAxAcCANQEsAOuAdCE9gC4WOAHgLfzHeCogNtATFUe3XvFVFK68cLCxYAFA5Elw8JzS0ESClwKWFg+R23B870ecZVPyzyJtUJxZo7agud7PeIqn5Z5EmuF4swfAIhaAn0nkmCGEqEoISECAAAAYGJiAACg4ogoAAAogQUAxgkAOADHAC4XAD4AiB+AG+mBBwCOEFxdSRgg7RSMo3Dk+olQiGBRKaWpGhXGFSIVCIj+R535l74/FF381DvhXwxF5Y868y99fyi6+Kl3wr8YisobmD7QcgY2MAGKIhEqIgAAAAAQdRBVAABELaICAADxkTgAQGcAgJkFgA9AH3jhAsAUANwGwBu8AoB3LIQ1iK5SLYoigipBRVXJM6gDKhcLEt5HXdXH5/5FV14WO/wLMa7SR13Vx+f+RVdeFjv8CzGu8gcAmU0D6DvBOKYoSYSEiAgAAAAAMMGZAACoWO1iAgAAicUAIDMA0C8A78gf4BHAzYAJADrASwNCI7HeUAa3jBlwFYrCYAARy+VCUBkVgwtPZ2dTAABAfwEAAAAAABIFnioEAAAA9DqUrCJ1eHl4entzc3h4cnR/gXh/enl2eG9vfHV0fnt8d3l5gHuBPkct9lvvX0TnU7YTP2gEzFGL/db7F9H5lO3EDxoBfwCgHhWg5SRDwkIlIiIiEQkAAABAEVUAABAVBzUAACCGeADAjBkAiB8ALgBgCgDeAiB+AHgcAHZUHCDCONgABkoQXw8k+EkFJCwsLEHB4lousxggIDAAnked1Ke+u4hYXnrboYM86qQ+9d1FxPLS2w4d/AsAEAAo65xtTyJUEkUkkQAAAECFAgCgpogDAAAwQgIAAE4EAYAZQwEAIF4AYARgnAbAJMAHgHUAwAUIfkILt7EgLOmOBUusvaIihVtRoFDAII0KC5cirXuxkEAB/ked+Zc+N4scXhYnjzrA4Y868y99bhY5vCxOHnWAw28AUIsqABQNjH1IElVElEgkIgAAAAABFQAAEGeqBsB0nAAAgAQYAGBGABcwHQIAFwDgAcAHAPwAwAUGU+r7GtciCJcQ4ZhLkLKMRFWAW5CQBWUmKNalxoJrAB5IXciXPodFV3qdHXHLBwKpC/nS57DoSq+zI275wG8AyGgKAMo6t28jVFQJCQkRAQAAADAnzgEAgJkTBwAAijcAAEBcaABAxilgBwDEAQCgE8QHwDvCBUCcjSVzSiksmRRCUMoNl8WbCmlILKAMFIkgijBYCBCJAB5IXciXPreKPl0WO1IXIy4lkLqQL31uFX26LHakLkZcylNg2wAQNcY+9FBFJSQUiQAAAABUTYsqAAA4MQyAYcYIAADiYg0A6DgBDMAwKQD8AMA0AOwinAKCmRSG39JKwQixNW8WwkAauDW5LAkSBgNcbEJcVAYSBUQD/keduLe+t4olvSx2+BcWqPxRJ+6t761iSS+LHf6FBSq/ASCyIQAg69yeJExVJCKVkAAAAABw6tQAAMDE4QAAIIwTAABATDwAAJMC3sB1AsBtALQHABcAvGNEA3a1VsoUvJziVnNPOa9BEUuEpBCQYEBBUIHhBiISAQgI/kedyLe+t4o1fOid8C9E1vFHnci3vreKNXzonfAvRNbxFJgeAGhgjJ6oqCQhkYgIAAAAgIBNAADAmWIAjDMHAAAQJAQAwAXsAGYGQGOIVwBgDgAjsvNyrCpS3Eh4pHgIXIJbIwi4LCJJES+IKrioHsClAH5HXay7QHxRfaZfLlNbJOWOulh3gfii+ky/XKa2SMpTYBIANMoxYYlMRUIRiQgRAAAAANNqtysAABiKATDMHAEAgBICAOABwCPAJvAJAFwA+ATAjvpTH38lArjA6pEVm8xAqgEFIhSUisSDAhWVe8FCsgDeR124p74fiTV8iE6o16CGPurCPfX9SKzhQ3RCvQY1PAW2DQAaxE2xFFMUJUWUiAAAAAAwxdGuAADgnOEAAEBxoQAAACfEAMAbADoNwBv4DYC+AcAUAH5UXhgAs3UPkQxUSIHEUsqlggiLCKliMctMMC6BLkUBAwleR+3KU79f1MunYLqBAYY6alee+v2iXj4F0w0MMDwFtgUA0Sh5JkMwVZUIEQkRAAAAQA0sdgEAAFPFAHjpAABANKEAAC4A+A0ApgWACwDiFQDvyDsSr0FMPZaQnteY9XiqLrgBN0liRFIgclxEAxTkRaAQZCFQwQU+R/XKp/gmE1d44LihUMTMUb3yKb7JxBUeOG4oFDG/AUDUEgCyQaxURKKqRIgkEgEAAABgphgAADg1HACmAYCZMwMAPwBkAgCfD6Ax4AKwIjwAwA0EFkjEWCnyiFWJiwQKKWKJuEjcQkUXyggNMJaIgQE+R/XKp/hhF2v4JTuJH7WYOapXPsUPu1jDL9lJ/KjFPAWmDwDRKKGjB1NVkhSJCAAAAAAFQwEAwEwxdgAAk2goAAAfMAIwTgYABfAAWLjgA2Q2jGySX+/fHZkYigRjWdGgeuQuCEhQIwZwKzAQRWlcWFAjAB5IHYkP8ccmlvAS7AhvwmSNQOpIfIg/NrGEl2BHeBMma/wGAFkPAChr8By2A1MlJIkQkRAAAAAAZzgHAABqggHwBgDAJCoBAEwCAB8AACRAAIAAkikArANQm+n80FdhBNmbc1vPt1RqNHxxFG5tgWY5D4VLjFhcMEgQLUhUsAAeSF3RU7/fRA2fFif8GxgtBFJX9NTvN1HDp8UJ/wZGC78BQDUqAFA0wjP6wCIUCVFFIgIAAABQceYAAEAMUQfAKxcAAOIjAgDiNeAdgRmTKYAETAHABwC/Owbbsh8I9IFifZw7QJio58HDVZabLnHVVEkJ1cBguSgUAk1XRUEAYgBeR638W+83hPDS2y6khTpq5d96vyGEl952IS38CwAQAChrnGSbGKqIqIREAAAAoEIBAFBFxQAAAIwURQUAAMUBAJjOAEBfAHABABCJNwCABO0BwGcAVH6VpwDcDDeTTdqZHXh4VQ2S5EJ1gqG60YIkVrBUGBChMAD+R93Jh/6fCPE3lxPqAUn5o+7kQ/9PhPibywn1gKT8BgAN6gBQ1Bljm6iqIooSAgAAAAABMwAAEMHUATCdzAAAAGECAAAOwAUA4gUAIEIcACAXgCPG8zR7uGGmP61hdcsjVZXGVdUY66PpsKLhDgoSC4OBx1XAM2qQlE2oLDAAPkc9g60+B4o+ffpwHDOYo57BVp8DRZ8+fTiOGfwBQEYjoO1uh1BVQiQVkQgAAACYUzUBAFAVBzEAAMCJygAAAHEAAADEAwB2gKkBAH4AwAVgRS5Fqv0bV/fkqoSSdh5q+7eUNUuK1MgVwaIQKb7DgOtBwlIRClSECBb+R33zu4TnFb3ffNihHp/KH/XN7xKeV/R+82GHenwqb2DbQM8YSaKqEkpIRAAAAABA1WpTBQBABEc1AZgxzgQAAIoDAOgXgBXAHABwA0BfAHAZAGuM0ivzb3MeJk4yEeP5DuLq7ZSxoyUoGBhU5YJwYYCAGCNpiQQVPkfd7as+E9VSOovpwoB1zFF3+6rPRLWUzmK6MGAdfwAgawG0nSSJCBVFJBKRCAAAAAADZwAAoCoWEQAApMQgADDMKADxA8AbAPoEAFcAcAAw+MW9QlEr7a6+UBtat9YTLqoEl5SoRqGZiMkgEUCgUEGEizhQAF5HXdWbvofEmjrZdjFzKXXUVb3pe0isqZNtFzOX8gamB/QcU6FMRQkJJQIIAAAARLEJAAAiYlcTAABiFQcAmDEUyPKO4CsAMAWAOAG4Ue0F99V7ZWft8vFR911K7QaBs0qPJJXHSlVcj30wA4uhiyhBYjFQYMEaAJ5HHbmX/ofEYhu2i5lDHnXkXvofEott2C5mDn8AoKgn0PaBhSVJqBIRISoiAAAAAMCpqQIAoCoiAgCAYqAAAEAcBnDzgBsA2gOA2wDgBgBcAPiAhp6wHsdYGFUQsRLFTajusBKIJCwsFQsYFBUWAz5HHZWH7juKJQXJ1rKDOeqoPHTfUSwpSLaWHfwBgLIaQM+JzhJVIkQkEgkBAAAAcOZEAQAQMayqAAAQRzwAYMZYALgBIwCZAJBl5eB2AeAGABwgZEK/Hke1uSwMKvIs3BKEC2ugAI8XApQoIpCABV5H7cpTn+NiGVl13BiJoI7alac+x8Uysuq4MRLBG9gW0PYCQ5IkhkqIRJJIBAAAAIAgdgEAQNVqEwMAAMFEAMBkCoD4AeADgKsB4AMAXAC4AGAEpgfrpItAUrTuLf+OSr5eYaYkI+2od6lKMKpAJTAuqEZIKgE3kDUYWAA+R52Uu95TxRJWne1KE8xRJ+Wu91SxhFVnu9IEfwAgagn0rL5NDEkJkRAlAgAAAAAYagYAACKiqgDM7AwAmMwEgE4DEAEQxBsAQBfaA4BLANzi2Eqd/8l1P2EKxcq3tdJVNZLP1uHVTVgUEoWKQCACPQkJRBFeR52Vu35NRa9XbZcBydRRZ+WuX1PR61XbZUAyb2D6QNvpPVFVRFKSEAAAAACI2myGAgCgiooAAGASxQAgMwHAjAAWoNMASBCvAMAcABbBbs3H7qaxxrH2+quiTl51qMKCzWdKWC6DWEAiogpIEYICN5HAAl5H3VpbgfCgWNKnyxldhKSnjrq1tgLhQbGkT5czughJzx8ApEZAz4neVSWRSEUCAAAAAJhDTAAARGymKgAAxAUJAQCZAiBeA36AqQBoAlMAXKnu2tyV2/59S/am2mmqrmfjueRTWddNJQPONw8V1Z0KEfFKEUjjWlxIKyIoAl5HvVrnr37RpVXvyMQ16qhX6/zVL7q06h2ZuMYb2AHaXmDoqVCmEhKqRAQAAACgOKoCAICqqSIAAIiaCAAwBYCaACrwDQCYAkDfALyjzV9dmWN6d4+jc/z1jv98+zIMRYerlBTrTaEkO6qZBXEEMC4SgUqxKIGFAaKFCl5HvdrnZ32iSx9WZ3SJkUod9Wqfn/WJLn1YndElRip/ABDZAOg5PUlUFYlQkogAAAAAcKZiAAAg4oAqAADEhwkAAJ0CQGaMgBHAZwDgGAAcAHAZQL1ZrVDKE7e5tDMHZD3/HayRV1RmqnKlK0i4RBYRqrjGoFBBRIKCUABeRz2Uq76Kolf1dsFVEUAd9VCu+iqKXtXbBVdFAG9gekDbxo1JGKEiIUpIBAAAAABExGoRAABU1S4CAADEAwC0CwAACQEA4AOA9gDgAgBcABbmVhpd046LNtErEvAhsdZQWisQEkV3WANcpIJAQ8FFoKugCogoAB5HndWbniOid6mO9KXEUWf1pueI6F2qI30pfwAg6gn0nN5DVQklUkQEAAAAwImJCQCAiMWiCgAAMUE8AKBTAOiMAVAjkBkA5KFvAI7B/XN36W1D5zlX45NzKbOzk/AsNqcz97ZZoRtvCfKq8IOKRQISKpHIBQKqQQQeSD3QQ/+jopdFOybp2mKZQOqBHvofFb0s2jFJ1xbLvIFtA20vMAwRTFUkIiIkBAAAAACoBUcFAEBRRxEAAERNEQDQKQCkUwC4AOA6AASIVwD8QtU2YL0WczWkZvjoxhRvKFE3CWbP1V24N0LRt9yQSFRIuBgisMkCHkg9wV3/W0UfOp0T6o2IRUcg9QR3/W8Vfeh0Tqg3IhYdb2BbQM/G3ruqiiiiRAQAAACAGBZHAQBAcLCpAgBAbBgHALQLgI4TwAjAMC2ABEwBcPH98UPO+vbQazz7kL5qlVWCcDZkBHW26KQUDbjLszUUDAkYUrRgEUUkxgoUFQleR+38U9+jYilVsC9Ofi+iTB218099j4qlVMG+OPm9iDK/AUBUEgDqBWfYBlMVRUIkJCQAAABgYmIAACjOiQAAYCXWBgCdAoBJAeADAIB4AAAU6BuAilY0C9Vab3P/7sEyD4FNwZ/sAAFHQ1EY1VCAJMGCi10AQkKAABaeR13Ju0D4qFhTr7OnHxRcOvKoK3kXCB8Va+p19vSDgkvHU2D6AFBLzjYiVElERBIJAQAAAESx2BQAAMGcUwAAiAniAQCdAgCAeABAjeB7CSABBwBLuVENXDU/98PkDxtTN3VX9pdJJRLSw+aIQjAeFrEIkqIkEBZwXZhloeCCFQBPZ2dTAABABwIAAAAAABIFnioFAAAAPM6+ayJ9d3p2eXp+d3x7eHtxdnl+dXx0e3d9dX5+eXt8enp/c3d2fkddubtAXKqu1uvM0TuYIu6oK3cXiEvV1XqdOXoHU8RvAJB1AFAPzhBhqEpIiBIiAAAAAM4wBwCAomICAICcCAIA4xQATAYAuADgcwDkIU4AVuDSuvltrzpJs2dOn79a7vF5sxa3s6LZXW4fAwtxKJYBBQGDQoQ1cDEEVAB+R31wu4TnE0v4sNiji0ZS7qgPbpfwfGIJHxZ7dNFIylNgBwAakjOYqCoiokhEBAAAAKA4WhQAAATFKQAAxIZxAIDpCADpFADWAXyiC/0AwDoAGOFKLeXJrr9mNSe53XiFKqkUBjHQXTGCanETAhgDSY0EFBIREV5HPdWLvguK5XQWx0VTNeqop3rRd0GxnM7iuGiqxm8ACDUAUA/OwBJVlEhCRUQAAAAAHIIBAKCYGgAAQEIAANMRADpOAOADsAk8AIADAB8AbAZFv8ybR1O52XJjb4VdMTO71Qhdaza4yIioAhakRQ3GAivdggqDSwIF/ke9g61A3KHoy4douwgjMX/UO9gKxB2KvnyItoswEvMUmAWAWrJ6Z4ZKKJIkEgIAAACI2BwAAABBxQHAxEwAmBYAzBgBNQKdBECelYcPAE6vylbnrXWRHvBcsrzjq74hexcKFNJ6sPBgIMGgSAJcELAWEEmoAB5IvaOLQHhIrPOFHf5lMQik3tFFIDwk1vnCDv+yGDwFJABUg7PtYSiKKBISIgIAAABgWhxNBQBAcc4AAAASAACYBgAAJDQAWIDMACAH/QBwo/s9t+pDpBs5bdYpzdiM704rrKNh3N/sKoSkJS0ScIkkUFmFwYCKigEeSH2Arf47ijV9ik6ot0wgE0h9gK3+O4o1fYpOqLdMIPMGtg2E1YdQVRIJEZEIAAAAABXDrgAACA6mAsA4TABgOgBAJxPAAswwAsAFABwArGTvxjSvWzK5bn5yP69k8ysZNRtiKe4S3jFBTQYGkeJCQYlIxEsxJAhEXP5HvaGLvjuKpT1kJ/xLAo0/6g1d9N1RLO0hO+FfEmj8AYCsBJDOdhuhKqJIiEgIAAAAgKmpAACgOBoCAAA4XgCAcQIAABEPAFYAgBIaAEAFXABWAFerthk+TRs1jJn6y7SMoZtGS4nnuWC+nqVe8WOhRIJBhFnJglEoSBYWDF5H3cmr3i+LK/0SHAFE1FF38qr3y+JKvwRHABFvYAIIp/cIVQmJUEIkAAAAAMQqjgIAgOBgmgAAQBAfBQB0AgCdDoAfoDMDoEDfANwAP0Awc/IybujYNx6KYf1iirVExm+KvHRvGcluoWCQQMGSEi7XEKXFNUAEfkc9uatAfFB8lE/VmY5W4456cleB+KD4KJ+qMx2txlNgEgDqOL0nLFREJVQiAAAAAIBpxVEBAFAwAwAAgrgQAJAJAJgB8I7ANAOALsQBAB9NwIhDo+gHCPkVqV3cGmc9+w0rbnJjkilGNmehIlAkhAGDQXVJIqIaKAESLp5HvZGnpPOrz/BhMXUISE8e9Uaeks6vPsOHxdQhID1vYBMIJ4ZghopESoSECAAAAEwHq00BABAMVQAAIIwLAADDBABxAlYEOgEAFwBwAvCO63jX19XHHKbotqyQwvZtGuK6BSJhiGmJXQRFYihQUCsuWBDUhVtRBhK4AF5HvXP7v33io1w6W49QNOqod27/t098lEtn6xGKxhvYFpBWigUzVCJEJEJCAAAAABVMuwAAoNhFAGCcOQDAZABAXwBgEoAPwCkA+gFAL/87H3esB3Ob02NszcTVQ05rjL6QitiVClxBKnOCKzFUEiIG6sJSsCIMAJ5HfZK7hP6Jj9lbHT1i0pFHfZK7hP6Jj9lbHT1i0vEHABG1BMJKWKgqIpESEQEAAADg1JkBAIDgYJoAMMwcAWCSAsArAHgtwCngNwBwAFhxeMiXSblxv+3W9mwMz68VKzY8T8essMQWbrJJQR0QEJHGQGRBgeI5QeUiAl5HPYmLfg3Fo1RsHUAkpY56Ehf9GopHqdg6gEjKG5g+kFYMEaGSoigiAgAAAABRm4MoAACKowgADDNGAJihAOAD3gCTAMAFAPEG4Ng14o6AtoMrEPYZzeNd+H16QCxUWOqCWDAGKlC7cLlAJZgBbwUWnke9kee//eLRIvZyE1skJo96I89/+8WjRezlJrZIzG8ASHUA0IDFuqqKokpIBAAAAIA5xAEAIDjnAGCcMQDAjLHgBsBlABgmBdDkZrm0VhzD95orkcfe8GPWWiXEoaVZL+4x9CU5lAsSEQEKCQosEqzqYqAYAJ5HPdFVIOwkrtJw5v7Ewxp51BNdBcJO4ioNZ+5PPKzxGwDUFQDQiMMiDEWRSCVCAgAAAFBMDAAAFBEDAADC+AAAMJkWyAAeALhOAAVwAHiOJaaS5GczRgnOREsNrRM14G5GwfKtYaHgBiTaWFaJEJZFYagEYgUBxQBeR93yW/0nitesoj3dgFoyddQtv9V/onjNKtrTDagl8xsAQg0A1HDdRjBVUSIJiQAAAABwKmIAAAiiDgAACOJDAACAIB4AChcASIgBAJ0hTgCe461h0GFejDO2Z88bGxc6WKlWvxYxDXfUhGIkwREBUQIBS4LlQkTAiBBRFQAeSH3B81e/WMaC3VRfbCUTSH3B81e/WMaC3VRfbCXzFJgFgKY40UNVJJEQiRABAAAABJsNAABQTAwAAFCcAQCmAMAHLMB05gAgQV8AzMZblPfnKs97PzhVDtu9OgvetpGK3yhm9KmRxFVxcVkMRC4hqSwgEAF+R73zx3f/xCNdsr1cJatxR73zx3f/xCNdsr1cJavxGwBEHQA04PRtwlSViIgIEQAAAADgnDkHAIAADgAAiMbFAAA6EwBMAEYAQDQuAABQgQMALqObCPV7seGTiNFu22U8hrKL4nMMHW6ySXHDvQuBxQWJAWmAIbhykQAMfke9EFsJ+68+y4pp0XFHvRBbCfuvPsuKadHxBrYNpMN6RKiKqCISAgAAAKhisysAAIpdBQAAcEIZAIwzAXnABwDMKIACcQKwuuPUfrhorXkfgznCpqOOwVoPw/Jewl0o1e2BxEKoBLgiDAYsERECJYMCFyqeR31zq4TrER/tJToujlojj/rmVgnXIz7aS3RcHLXGHwDISgBhJRGhikqiRAQAAAAAMMwZAAAIDqIAMGM6EwCmUwBwA8BtAMQPYBL0A0B49g+9O4mdefvcDDMPd7T07MYoo8E8DcQVgsiZkbAosSDhqlQk3GEZEHtI4AKeR32T6zce8Wq93nbhsgbJo77J9RuPeLVeb7twWYO8gekB6SQsCVURiUiREAAAAABRtQkAAIqjKQAAgBIYADAdA0D8AHAJcARuAMABIJoguKgm5rbz025aZXId96bfMGOssgzSElCICBoGEiWhEjCDhQtVgsXFAj5HvarHe/7i0S7RmTsEljJHvarHe/7i0S7RmTsElvIUmASAWjD2nqgqiaSISAAAAACYdrujAgAgmCoATDMBAADxFgDANIBfADIBoAnxBoB0AfbjUFvZGZ3vKscPT9vbS/OhWuHuEBsCLFIlPiwNInOiCJdEXCBRWJCkCwEi3ke9Ehf9JqnH7gRTB6GFPuqVuOg3ST12J5g6CC28gW0D6QyhTFUkEpGQCAAAAJgW01EBAFAc7QIAAJAQA4CZCQDMAAA/AFwHgIIsK1oSGlqfe/4/ua47AoI4olG43aqc78K9iRQC1MhiWCwoEBcGiigiAtUC/kd9kqdA3KF4jA/sFtNFRFL+qE/yFIg7FI/xgd1iuohIylNgWwBQCVbviRqKhEgiIQIAAAAgFsNRAAAQTFQAmJgCwMwBAExHwIrAMC2ABBwA8IAJY9LZ092GZjZX2xm5idpg/lxq46kJ4hizTCOLFJ0vFX4s3EgAboVLAoIEfke9cFv9F4rXXATbBSgad9QLt9V/oXjNRbBdgKLxBiaAvtO3EV1VJCKSEAEAAAAw7A6OAgCAYnUQBQAAEiAAMJ0AQDMBLABwvAAAJOAEaA3vR/PpAJKyB50qCUk0jqFBp3xt6NXt+cLsbF1QopQdUiEAkYDgDnQxoLBIEKgAnkd98rvE/RWv9CnZ02WQlDzqk98l7q94pU/Jni6DpDwFpg8AlYLVe8JUUUQiJEQAAAAAIKaoRQEAEDWnAsC0EwAYZwBAhilgBGBmBwB56AcAaFt019q8rnVS0SXs2a1EaN2bAiPKMMoK2lg8igmUDFCR7uUyKlgWAJ5HfSr7b//E1T5Ve8oIa+RRn8r+2z9xtU/VnjLCGn8AIOsB9J3eI1FFIpJEIgIAAADAKWoCAKDiaIgCAIAStQGACQCYGcAFdEYAFMAB4MoFrjDS4TNZRCOXDq7x8cG0mXak8pOe4xCX2vDmfRPDZQlYESIoEoiBmpDgAl5H/VDmz9mlVwKd4wabq9RRP5T5c3bplUDnuMHmKm9gW0DL2vZQFSVUkogQAAAAKqZpCgAAomJVAWAyzASATAAAQCICACKQGQWQgTgBWHHevdlf71Qqr5tDFMvjbGQ/6T1PMd11HK36062iCvfChYCLiuoO7kBgAKuAQAQeSP1DjN9+1Fp+05sRppYJpP4hxm8/ai2/6c0IU8v8AYCoJdC3sUeioYhERBIRAgAAAGBOzAAAQEUMUQAAcJwAgMsBQGbOBIgg3gAaQ/sAcEGjyKgbWr3QaUNv/0ofv39202qYtayZoqjKA/cHN7gUUFFRUGHhUkqEAB5I/UbL/3nElV4WJ9SLmFUCqd9o+T+PuNLL4oR6EbPKG5gFWtaWhaqKooREAAAAAAAVRwMAAERVVQCYTmcAwEQBAAgdBwAWToAPAHAAmJnx9KR0W7avns633M3p9SKqjkJMVtOIlZKGa5YpCAmSQArp4g4simiWBQEiHkj9IZfffos1/ZLtPOoyB5VA6g+5/PZbrOmXbOdRlzmo/AEAdUDfxh6hqoqoSEQAAAAAOHViAgCACKIAAKB4GwAuFwCZMQWsAMIB0IX4ACJ3Pn/UbJi88TxGfK9Yzvl32YXIzRXbB0ryh6pCV2AgYoFkoFaEiFQr7ODWQhlAAX5HfZC7P/hKL4jTMjjFMnfUB7n7g6/0gjgtg1Ms8wZ2gJahs1BVRCKJiAgAAAAArAIAAKAmKgBMZswMAOECwEyAi0fgCgDwAXiYmTkmIebXixXyHR7M9Brm8VEwHSxxXJcYF4I+CJBupBgWFIRFUTFIiAA+R70qx/35xFI+JXvKAMnMUa/KcX8+sZRPyZ4yQDJ/ABCaAPpO7xEqEhGhEiEAAAAAwOEwAABADFMUAAAcJwCAKQB0xgB4RyDTAiiAA8CrMhtnRPJ142/314zCw5i6a1e6zQIb2TdnnX9joBikQEFFpRYoiBIKuH5HvRHn//vFR/p0bLcQA7ij3ojz//3iI306tluIAbyBWaBl9R6qSkiEiIgAAAAAQDAMAwAAUEdVAWCcTgCgMwEgnQIWYJwG4BaaNxiaD7lyJ9JzkYnN263Z/s1fv2yuN5QZtdpIfwSqMAYWKoq0BLhQibW6SABPZ2dTAAQAGwIAAAAAABIFnioGAAAAm4dHYQV5c3tycJ5HvROnP/zEK/1m2tOFkWTyqHfi9IefeKXfTHu6MJLMHwCkOqDv9G6oSkhIhEQAAAAAADNVEwAAxKaiAACghDYAGKcA0HECOAZgmgBI2EgvjBgR14jZ3LY9I/ZM78tzzaRi1+AGApXp7RJDjKiQu1CrhaRQsgxcLACeR73CrQjiLz7D75rtFoLVyKNe4VYE8Ref4XfNdgvBaryBHaBl9R4RKhGJiIQAAQAAAFTV0QQAANRRVQAYMgWA6QgAJgVcgBkCkAU5gBDaM1ZMEe+lnsMYeyKKdNM1S6IJbsaZ6yEriiykiwiUSJHATSQGfkf9QMv/vcWv+Zto6yDcKnfUD7T831v8mr+Jtg7CrfIHALIC6FvbHqGKoigSEhEAAAAwMTMAAEBsKgqAGQWAmQUAAPEAgBuBYTICKDERJ9CmYcsrLdayt0ed57eKvX1Lw81XlUWYlS4uVkgrKCyI4LKwBEQEIKkQqAgA/kf9jUcJn118lt+xxQlx+KP+xqOEzy4+y+/Y4oQ4fMD0Vo9gTEVEJEJCJAAAAAAEq0UAAECCxFgAdDIAwEwBQCcDYEUQLoAutA801611PGjCOo75kggCa65Qa1CVZ+KkWajCVAzJWNSKgSpiEXElFhUV3kf9g/v7XuKxf5Pspgb0Uf/g/r6XeOzfJLupAR8wucIeRCIhEhIiAQAAAIKqiGkFB9nCCDsuNppIbAejaNJxMjYKZDppA1D/AY6x+fREKMdYm4yTAtCmD5QR/nqYaT/tr7cb2i6IFgEBSEQRJBdELA==",
    E: "data:audio/ogg;base64,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",
    F: "data:audio/ogg;base64,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",
    UpF: "data:audio/ogg;base64,T2dnUwACAAAAAAAAAADzeGoqAAAAAOwIFHUBHgF2b3JiaXMAAAAAAkSsAAAA9AEAgDgBAAB9AAC4AU9nZ1MAAAAAAAAAAAAA83hqKgEAAAAJnex1D0T/////////////////swN2b3JiaXM0AAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAyMDA3MDQgKFJlZHVjaW5nIEVudmlyb25tZW50KQAAAAABBXZvcmJpcyFCQ1YBAAABABhjVClGmVLSSokZc5QxRplikkqJpYQWQkidcxRTqTnXnGusubUghBAaU1ApBZlSjlJpGWOQKQWZUhBLSSV0EjonnWMQW0nB1phri0G2HIQNmlJMKcSUUopCCBlTjCnFlFJKQgcldA465hxTjkooQbicc6u1lpZji6l0kkrnJGRMQkgphZJKB6VTTkJINZbWUikdc1JSakHoIIQQQrYghA2C0JBVAAABAMBAEBqyCgBQAAAQiqEYigKEhqwCADIAAASgKI7iKI4jOZJjSRYQGrIKAAACABAAAMBwFEmRFMmxJEvSLEvTRFFVfdU2VVX2dV3XdV3XdSA0ZBUAAAEAQEinmaUaIMIMZBgIDVkFACAAAABGKMIQA0JDVgEAAAEAAGIoOYgmtOZ8c46DZjloKsXmdHAi1eZJbirm5pxzzjknm3PGOOecc4pyZjFoJrTmnHMSg2YpaCa05pxznsTmQWuqtOacc8Y5p4NxRhjnnHOatOZBajbW5pxzFrSmOWouxeaccyLl5kltLtXmnHPOOeecc84555xzqhenc3BOOOecc6L25lpuQhfnnHM+Gad7c0I455xzzjnnnHPOOeecc4LQkFUAABAAAEEYNoZxpyBIn6OBGEWIacikB92jwyRoDHIKqUejo5FS6iCUVMZJKZ0gNGQVAAAIAAAhhBRSSCGFFFJIIYUUUoghhhhiyCmnnIIKKqmkoooyyiyzzDLLLLPMMuuws8467DDEEEMMrbQSS0211VhjrbnnnGsO0lpprbXWSimllFJKKQgNWQUAgAAAEAgZZJBBRiGFFFKIIaaccsopqKACQkNWAQCAAAACAAAAPMlzREd0REd0REd0REd0RMdzPEeUREmUREm0TMvUTE8VVdWVXVvWZd32bWEXdt33dd/3dePXhWFZlmVZlmVZlmVZlmVZlmVZgtCQVQAACAAAgBBCCCGFFFJIIaUYY8wx56CTUEIgNGQVAAAIACAAAADAURzFcSRHciTJkixJkzRLszzN0zxN9ERRFE3TVEVXdEXdtEXZlE3XdE3ZdFVZtV1Ztm3Z1m1flm3f933f933f933f933f93UdCA1ZBQBIAADoSI6kSIqkSI7jOJIkAaEhqwAAGQAAAQAoiqM4juNIkiRJlqRJnuVZomZqpmd6qqgCoSGrAABAAAABAAAAAAAomuIppuIpouI5oiNKomVaoqZqriibsuu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6LhAasgoAkAAA0JEcyZEcSZEUSZEcyQFCQ1YBADIAAAIAcAzHkBTJsSxL0zzN0zxN9ERP9ExPFV3RBUJDVgEAgAAAAgAAAAAAMCTDUixHczRJlFRLtVRNtVRLFVVPVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVNU3TNE0gNGQlABAFAMAwrDX3YhyBHIOWc2mQVI5ycBFDylENKlIKKYjBVUwh5azWzCnFINXaQYUUpNhLyRRzkgKhISsEgNAMAIMkAZKmAZKmAQAAAAAAAIDkaYAmioDmiQAAAAAAAAAgaRqgiR6giSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKnAZ4oAp4oAgAAAAAAAIAmioAomoBomgAAAAAAAACgiSLgmSIgmiYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLmAZ4oAp4oAgAAAAAAAIAmioBomoAnmgAAAAAAAACgiSIgmiYgmiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAABwCAAAuh0JAVAUCcAIBDcSwLAAAcx7EsAABwHMeyAADAsixRBAAAy9JEEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAADAgAMAQIAJZaDQkJUAQBQAgEFRNA1IkmUBSdI0oGmaBtA0gCcCPA9gmgBAAABAgQMAQIANmhKLAxQashIAiAIAMCiKZWmaKLIsTfM8UWRZmuZ5okjTPM/zTBOe53mmCc8TRVWFKIqiqsI0TVNVgSiqqgAAgAIHAIAAGzQlFgcoNGQlABASAOBQFMvSNM/zPFE0TVUlSZbleaIoiqZpmqpKkizL80RRFE3TNFWVpmma54miKJqmqrouNM3zRFEUTVNVXRee53miaJqmqqquC8/zPFE0TdNUVdeFKIqiaZqmqrqu6wJRNE3TVFXXlWUgiqJomqrqurIMRFEUTVNVXVeWgSiapqq6ruvKMsA0VdV1XVeWAaqqqq4ry7IMUFVVdV1ZlmWAqrqu68qybQNwXdeVZdsWAABw4AAAEGAEnWRUWYSNJlx4AAoNWREARAEAAMYwpZhShjEJIYXQMCYhpBAyKSWlVEoFIaWSSqkgpJJSKRmllFJKqYKQSkmpVBBKKamkAgDADhwAwA4shEJDVgIAeQAAhDFKMcaYcxIhpRhzzjmJkFKMOeecZIwx55xzTkrJGGPOOSelZMw555yTUjLmnHPOSSmdc8456KSUUjrnnHNSSikhdM45KaWUzjnnnAAAoAIHAIAAG0U2JxgJKjRkJQCQCgBgcBzL0jRN8zxR1CRJ0zzP80TRNDXJ0jTP8zxRVE2e53miKIqmqao8z/NEURRNU1W5riiapmmqqqqSZVEURdNUVdeFaIqmqrqq7MI0RVFVXVd2IcumqaquK8uwbdNUVdeVZaC6qurKtgxcV1Vl15YFAIAnOAAAFdiwOsJJ0VhgoSErAYAMAADCGIMUQggphBBSCCGklEJIAADAgAMAQIAJZaDQkJUAQCoAAEAIxhhjjDHGRCmMMcYYY4yNYxhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYYywAcKnCAUD3wYbVEU6KxgILDVkJAKQCAADGKMUYhJJaqxBizDEpKbVWIcSYc1JSaq1nzDkIKbUWY9CYYxBSaS3GpErnpKTUWoxJpZBRSam12JJSppSSWmuxFqVUSCG21mJMTsmcUmsx1liU07GVWGKMtTnnnKytxRZjc8452VqrrcYCADAbHAAgEmxYHeGkaCyw0JCVAEBIAACBkFJMMeacc845J5VijDHnIIQQQgilUow55xyEEEIIoWSMMecchBBCCCGUUjLmHIQQQgghhJJS55yDEEIIpYRSSumccxBCCCGEUlIpnYMQQgghhFBCKSWlzkEIIYQQQkgppRRCCCGEUEIJKaWUQgchhBBCKSGlklIIIYQQQiglpJRSSimEEkIIJZSSSkophVJKCCGEUFJKKaUQQgghhBJSKimlVEoIIYRQQkklpZRSCqGEEEIoAADgwAEAIMAIOsmosggbTbjwABQashIAiAIAgIyTEEpqjUBKOUmxM8oxaK2WyhmkILUQKYQUpBQyqBBiUkpIHVMMUmqxlNBBSjm3mEJJAQAAEAQABJgAAgMEBV8IATEGACAIkRkiobAKFhiUQYPDPAB4gIiQCAASExRpFxfQZYALurjrQAhBCEIQiwMoIAEHJ9zwxBuecIMTdIpKHQgAAAAAAAMAPAAAIBRAREQzV2FxgZGhscHR4fEBIgAAAAAAXADwAQCAhAAREc1chcUFRobGBkeHxwdIAAAggAAAAAAACCAAAQEBAAAAAIAAAAAAAQFPZ2dTAABAbwAAAAAAAPN4aioCAAAACYR+FR8VLC6pm5mdl5+enJiel5SUjpWNjYqHh4uFh4WFg4R/nNIqzZ3SKs2hJAKYzwyTIcrvF0kRDM0Hth2aD2x7tFoB41DJqoLdJpJMJkOYvNt9HefmGR35uXPe2iYxTPLvtwAUy+fDLZbPh/sF6GVgUgAWihRGCiJCiOy4SSjSDIZMJgLBuGL3/TzvOGy8zbkAemfNBO9H2/poq67/L1Rb4hTvrJng/WhbH23V9f+Fakuc4m9SqBcRZVFGRmOlkhKAM5zEbQqCF4LDCFVEBIg550CdOcGcqGFmioKouUiiMbFBJDQWADIdZgCAZpymAPC/AAAAwngAAEBmAAAeBwAiviDKA0hMAAAA+ABFPCMAwMR4NQgAPhpzBwAMANBp4pgD4LsD3L8AgDcJAQE85MpxQlrzoqJdPBKBAr6HtYPP/rb2cXqx/k9zTOmPPawdfPa3tY/Ti/V/mmNKf6StaEwA8J4AbIC7Fp4RgheCw3SKSAgAAHOKAoAaNrugCAAAgM0wBQAA6QyTSNAEIBFHAQAAIFBCAAAg44whAMCMjACAyTgWAMJMGRZygogBAACYDgBMCk0BAAAAile4AAC8tAAPAFABQGfgDQCd0aAzpEcauAEShQgR3ke1iO8zvPyWOsm/pnmHhNIffVSL+D7Dy2+pk/xrmndIKP2xKQDAN33gnI24BghexlAlEREABQBgmmooAABgjGMTGBuBtNLcSAUAAHCY2DgAAAAgTIAAAEBnTgAAgEhcCAAAJjMLAAAAiWIAiL4L6DABADABwBQYCwDg83EBAPqgAesNAKgAEG9EuLBaUE4REBHBKBJqCUAF/kflwNepLf0KUfTv3kM8rhtVJ39UDnyd2tKvEEX/7j3E47pRdbJJvRoA4E/WAwAscO/CjQMKAYGkikgIVERVFAAAxYkDAABQ7IYCAAChrIQxCBAWQJhYGQAAQCTGAAAA4Jj4KAAAAEBiMQCA6cwBAIRJA8DEAQAAgAugCZgWAMDnHGEccT0AAAD9kl2ETZ1Am8QCgkTyPBI1wIIAAb5HVdDP5it9yuL46WxBcWuqT8oeVUE/m6/0KYvjp7MFxa2pPimbNJQlAHhvC7DAPQPEkChCYDpJiQACVVUAAEDFUDUAAABUTCsAAAAxirMAABkgLggBAACwEhsCAACAw4SBAQAwnRkAwHQIAFCnCwBgOikAwAHAD2MAAJ+0qHDqjVo6AEA7jACAzABtcBEhz6CPaEnGBQW+R1Xg5pcf9xk6vO99mMeRqVhWYo+qwM0vP+4zdHjf+zCPI1OxrETaAQB+iYYEgDVuhBgZ6wqRTlRCBCALAMDEOQMAAAwzx3FUAI3UagEAAHCQ2MQCAAAwc0YAgE5mAABmTgYAAID4IAAAAACcCAIA2j8AADINAABwvAAAjroAoD2DcAAAdBIAFqwIFeQ5DAAAk4xBARNEIhHF4AcsFST+RyXx3ydu95mzmp/N53EmXHeWPyqJ/z5xu8+c1fxsPo8z4bqzbAoA8J4+QIKPBXeAgGasI4NIJ6KIAAAlAKB201AAAAAsJigAAACGoAAA4GgCADAmNLXUGAMAAAAgxQMAAIBIxAIAAIAwDgEAGGYUAGjvAQAqAESCAACAPgCIw+A6AAAyTEYAhgiPABAO8QAAgGFmoUA6ZWHAgCqAC/5HJdnvx9/wK3bUn3ycuUWI6prjj0qy34+/4VfsqD/5OHOLENU1xyYNDWUAwJ+sFwBAgjsOmEogOjLkVZUQgUMdAACAKuoAAAAwbAYKAAChI/EIABAAkUQsAAAAHB8BAADM6BQAAEAJLAAAEyMAEEcBlwAAwzgTACBcAIBrLwAAmikCqAL0ASBO3gDANwpoIIJRKPhJBS4CoshAAP5HBez7LU741An1240F81tEpe54448K2PdbnPCpE+q3Gwvmt4hK3fHGJk2LAgD8UtYKALhnYSqBrIGEhBIhAOYQAAAAMVUDAACAIC6wAMAgJSYhAAAAEB8NAAAAEIkBAAAAUKIYAACToQCAycwCADJtBpQDAOh0AoAAFwAgXJMCAKd6WLBygPYBuNkFpoU3Co+o6sIaELEA3kcl6c87TvgVey2/u38wfisA9YYHrY9K0p93nPAr9lp+d/9g/FYA6g0PWtoqjZkA8J4eYICzNkKkEggZRyQpEgHgnBgAAIA42iwGAACAYFgBAADDjOm0AyAFiIsaAACQmVMAwDhOAACTaQEAACBeAAD90gUAeDsAADMKgAEuAEC4lwGA9g4/CS4AoA0ATIDLKdOBpQpuqCIBxoKBAheeR0Xwt0TRzK/YGfHZJTC+vUJ1y5M8KoK/JYpmfsXOiM8ugfHtFapbnkB1AADv6QMGuDcFMQSEMiQkJSIAVAAAdXR0MAEAAEQxAAAALBe4tKpqBAAAABAmIgEAABASBwAAAISJSAAAAKB4AAD4fABAJxwAADMDAIgTgIB2AelyAcDvhxsXMgZtALje/EDBQGBdXBRYWCIJHkjF7ltC2SKsy+7wzl8xd4Rx3eimBVKx+5ZQtgjrsju881fMHWFcN7ppaas3LRIAvm0DZyUQQwIhMiRFJAQAOBUBAABQB9OqAACAGodxAmiRE4kDAAAAnKgMAAAymQIAMmMEAIwzAwB8AQDE4QIAZFoAAD4Ags8AAC4uFwCcmmOlolABwHwWGKYLCqTniORRQhqQAN5HZezXt4X5qJd3ve/6MO4AniowfVTGfn1bmI96edf7rg/jDuCpAsPDTbIEAL9kJQBg3JiCGBIIIZgkKRECYCgAAACCiQEAAO37CzgQRhIBAABgxqQAAEyiAgAAAIJ4AwDA9wIA+AQAyLQOAEBMAQDtAHBCCwDgcsMFAPs/4PIBBB4BoD1QLtiUXCwYCAoU48KCiAjeRxXm5zvdAq+Xt7uzczfmMB19VGF+vtMt8Hp5uzs7d2MO0wHVAQC8pwcQYBw7xBAQypBIJUIAsgAAxFEsAgAAgNVqAgAA4SmBUk0sjAAAAGDmEAAAOEEAAADoNAAAAMQhAABTwCkXACAzRgBAOAAdgAM4CRcMUI+JWosiJIwCAA52MBiQoEIxUEGiyQULnkdl9I8koeK3WN1Ol2A8TsJ1hCSPyugfSULFb7G6nS7BeJyE6wgJVAcA8EvUEwDOWhDbhClTkSQkAFQBAMVwAAAAvQ18UiuMAQAAsBMmAAAAACLxBgAApFMAQCcBAEyGEQAwTQAAJhwAAIgDAADwBw4IAQCEYxAuAGi1sVIUZnLDogJEnKj8QBsVww1IUYEu0RJhcAF+R/Xi659ZCatZTSdnzK1aoAyNO6oXX//MSljNajo5Y27VAmVoQDUAgPe2AQucVAIRCYRMiYgkBABEkQBAHbAqAACAYlgAAIDNEzutxsQIAAAAQAkQAADozBkAQPwAgMwsANAeABCfCwBQDgBOwcLVAADX4IIAHx5dlyW6BgAqlWzFDmKF0EMMqODZAAv+R43i5y+M+IhZ1/ZdD7PbzVwejz9qFD9/YcRHzLq273qY3W7m8nhAdQAAf7IWAGCBcVyYhIEqoYREAJQCAIg4NQAAABUUAADA/QS4EmMAAABgOjMAAEScAQCAjtMAAAA4IQAAMAEAMFMAbwcAwAGgIFxAX2UAwqWAKqPShxupFrgKy1UoMFfgvQpBIAB+R3Xy+59bidDTP3fOKN2bZuWFuaM6+f3PrUTo6Z87Z5TuTbPywqQdAOCeVOC2MxUlEgkJgCgTAJAYpoBUKywMAAAAxCUmUQEAAKBEYwEAAIA4hwAAgGE6AgCfBwCYjgEArgNs5gHEAwAAeIQAmQIcJXAtABzfgU1YOZYhcNMFfRYFIkgVy1gIFRK+R/XsR3I34rd+Ec/OGfhCUErx2KN69iO5G/Fbv4hn5wx8ISileEB1AACfBIa1MBlURSIiIgCACgCgFqtVAQAA+neASzfCBAAAAILYhAAAAExnBAD0SwDAMKMAgGkCAJgoABATGfC7AAAuAApMAQC0YzC43r1kXFlEPTahBloW0EvAjAEVBgq+R3XmR1IlibB0+vfOGdcBjM2n2aM68yOpkkRYOv1754zrAMbm00B1AADftoGzEuyJvIqIIiEiAFkGAFCbYSoAAEBcLrAYWxoDAABAoEQBAAAAJcQAAMAEAGDSEQDQGQCAOAGA68uDZAoAm+BCuwAAHAbjQuOSUJGAwMrdiqsGSCBgSG0MRBWeR/XsW8LIxGeO9zpX4fgiGNMCeVTPviWMTHzmeK9zFY4vgjEtwMNNogQAnwCGs3BgETJURBIRAIcAAAAgVptFAAAAUAIOKC4eAACAYUYBQLwBAMAkBAAAZAYAgJkAAKYSMKMAAByA/aYAIN6AAzAVAnwVDZv1NwarQBMAcKkSKgwGF9ZFVLgYEDAAHkiN/keiTOpXTZb37N4YfusDs514BFKj/5Eok/pVk+U9uzeG3/rAbCcePKjXAgDcNQQOHEmiJCIRAaCIAQAArAdHJZKYxAoAAEAkJgoAAMC0AQA6cwAATMcBALgOAKB9sL8AMwIAiBPgrQAAplQ0HA1vaioCwjvhqlCrWBUqYsLlGhC5AL5HdfhH8jTiQ9B9T3q3pLEVyh7V4R/J04gPQfc96d2SxlYoUA0A4JPAeBZ2JpMhqYRIAKgCAGpxtJoAAEBdrpmJagAAAEAkAgAAAJOxAAAgEQEAAACOEwAAmLQAgKkAAEwk0EwA4BRDBQDtSxSxyDcA4AKsIDIAGg4qLs5AuRhwBDEQVLgsAL5HFemPhEKK3/uj/t9d4uZWY2S4sUcV6Y+EQorf+6P+313i5lZjZLjBg0qTDAC4awWuMERCCUVCAJyIAwAAmL7tSDTRxBgAAADHxQAAADBOAAAZpwCAYUYBAMMUANAe+FNAxwkAgEkB+gIE2GO4bQq0hwFjRUSwXtaBAA8oJIj3gsRAZQF+R4V68/+j6teyhec8Bd+cg2zickeFevP/o+rXsoXnPAXfnINs4sLDjWUBAD4BrHHAnmAoEiGJSATAKQAAgFhthgAAAKACXAiDOAAAADINANBxAgCYTEcAAAASYgAAZgAA8BMwMwAwwAEAALi6DYiDBPeKSshAhZtNEBESBFySFGHBWhAAfkdl7s//COnvC/Vn54y56Ti23WjcUZn78z9C+vtC/dk5Y246jm03Gjxo0lgmAByep2NPUJUIJUQAgIozAACAfvUmQSKJFQAAQKczAEA/BgAgJSYEAAAAnBAAADBOAwDIBNhfQGYWABZxQgAAcLmVpA/bq0vZDgECiooEg8QAAWZZEAFeR4Xs7++U+JV/5Oc5HN0QTLag1FEh+/s7JX7lH/l5Dkc3BJMtKDwoGwQAfBLguRLsKVQUVSRCAMzMAQAAqMVuKgAAYLIjEB8BAADgMAAAK2EIAACYdgAATBsA4BoAgCOBdAoAP/qCAABApqkK6Rj4qbcrLSwoiAoMMUBQkQaQEAMYsAB+R4V68//dxW/dU7332C3CsrE0d1SoN//fXfzWPdV7j90iLBtLA9UAAO46CXaGJBIhSkQEQJYAAK6ZpZExAAAACRNNjAEAAFA8AAAAdBIAYMwMAADAcQIAANMhAMC1AECcOZBMAWBRJQAQXhUtDTNxXKEMhuDCwkBEUoDKFUEAT2dnUwAAQPMAAAAAAADzeGoqAwAAADF0nM4hgoOEgoeBgX58fHx8g3l9eIJ7gHx7gH12e3V5e3h/gHt8fkeFbvPfd8TnOnV7XzfsZuZgM5Y7KnSb/74jPtep2/u6YTczB5ux8HBDJQHASwBrJTgwFFVECQkA4HACAAAgVoshAAAAgQEOwzgTAGAmACCTKQBgmBQA0BkAgHABgPazwGQEAMQBMCQAcB0thv4QzDM9ZTGgUGqCiIQ2RLWAkjAQAP5HpXVzCe9bfHZDt8/dM/xqbltR+aPSurmE9y0+u6Hb5+4ZfjW3rajwcGMRAOCMa8DFUEUkREQiAAQRAAAAGgCfBIkkVgAAAJkxAgCGCQAAEA8AAGAyHQEAmQEAYAoAaC8HTAoAYCaApQ8Arm2dMRZ15KnSiFhYEVcE1bBWsSi4cEkAvkeV8Y/EfRe/d/Tv0xZ+mTGjIXtUGf9I3Hfxe0f/Pm3hlxkzGgLVAAA+CfDcGDgIISISqkgEQJQAgFpMUwEAALwNqrExAAAAECcAAABcAQDguAgAAABAPAAAcB0AQPvg4ywwKQCgXwBUA07CESJkvIvVXCFPGWAxJBcWVQgokQhDAuIFvkdl5a/EeYuPSvrZ1zt+UxrHEntUVv5KnLf4qKSffb3jN6VxLAHVAAAOzzXgIFNRUUQEACgAACwToWoAAABImGgiBgAA6IwZAIBXBgBAxAkBAADTDgCAGQoAmAoAYG4OmAEAED/AMIWdLdINDGhdhLmIvBK5uERcVAQSZKuCAAlEJF5Hhf7v71nis8/y/3PN8Bshjkw3SR0V+r+/Z4nPPsv/zzXDb4Q4Mt0kPKjXAwB8AlhD4GIqkqQSIQBi4gAAAMRqGAIAAIxgQKg4AAAAOgMA0JkDAKAzAgBcJwDwJTg9AZMBAMA0ADsFCAinvFfq95N4uplCt3ATCFRwWe0CCQOCBCrvS4FqAZ5HleX3v5f4rFH+ty8+rJfCDTfyqLL8/vcSnzXK//bFh/VSuOEGDzdkAoBz14BDoohEKBIiAgBOAQAAAACHuEQSFQAAQKczAAAQxgMAAAAkAAAAMMwoACBTAIBOAADmFNBMAAA4ADS0AwBwTZJ0lrqr/lhLAHIWAYtCEEGpXAO4BF5HhfXv17v4vWbx75y7DoVMD0QdFda/X+/i95rFv3PuOhQyPRA8qNYiAOCTwFodh0RVREQJEQAT5wAAANSCqQAAgOoIThgAAAAwGQoAZOYUADAZRwBAZwIAmAB/JdBxAgDgBKAABwDg2jiEEY2S8l2DAAsBloUFCYXqGioLLJQADH5HFe33TzTxW4zqd593HTc2PHBHFe33TzTxW4zqd593HTc2PMADjRIAPm1g3Bi45RQVCZGICAB1YgAAADgajgoAAOBiEjUAAAAzEwAAhI4DAAAAiAcAAD4fAAgHHCoA4gUAANhRVQQAU/IMV7tC4DwGIrIsWFwVKiw1UhBwAX5HZf3PhxK/ZQft80qcUww37qis//lQ4rfsoH1eiXOK4QYPKrUEAJ8A1gowqEiEJBISAeCcGAAAgFhNQwAAgMsOFB8LAADAMLMAQGaMAIDpOAAAZgoAcA2sJpk5AgDiA/ijRVgbVNy0W/W6a1kMJVlwPWJxMbCIx1kR1AF+R2Xlz2928akT/+120E2oMANzR2Xlz2928akT/+120E2oMAPDg6YqAOCeIXBgkiQhERERAIoDAABAMhRJTKwAAAAIwoQAAAAAcQAAAMwsAKCTAACfBwBcC74XkM4EAPRLgFMAgOtIKRjJqmmIi2uwQBXAUgvuiAsBC1QSvkdl818J2xK/6eTvfjhMJwhMJ2aPyua/ErYlftPJ3/1wmE4QmE4MDyrVBACfBNbqmDCUUJIkIgAAThwAAIA6GHYFAAAWbwgiCQEAABhnBgDoMAEAZEYBAJ0BAJApME/gdgEAHIAKALiagWVYjHKxMDASpGIBBZVYGCJUAN5HZdNfyeKoXyXr3rNLHL/XVA1MH5VNfyWLo36VrHvPLnH8XlM1MDzIJgIAPgmssYOBqRISISIiACY4AAAANQ2LAgAAlwVKEAsAAMAkBQAyTAEAk44AAACKAwAApkDFjAIA4jXADwAQbhQUyaJeUAQsRBBYIGC4KAWKBAq+RzXzrz9L/Naq5d95GPB7XbApzB7VzL/+LPFbq5Z/52HA73XBpjA8KOsBAB4GGIeOgypKKEpEBDDnAAAAEFQBAAD8SDQmDgAAAKaTAACAeAEAAMwEAFwDABinAb8M6GQAAPQDcArXnR17pFJC0MdVLzcWCFmWAZcAhUE4giWCBBXlAp5HZdOfr3zFr0197/F7l0NcII/Kpj9f+Ypfm/re4/cuh7gADxqKKgB4C8AAK9VxYCoSEhEREQA4EwAAAMFAAAAARE0LAACACpkJAOgkAMDnAwAmLQBgKmDkQTsBAHAAVABAOFJVW7+HWJAtg3vRJXChcuHCpdQKlwJ+RxXz7694xGfLHt/dB35XxEnPHVXMv7/iEZ8te3x3H/hdESc9ULcB96zAgamSSCQRAMAuNgEAAMCRBHHxAAAAEMYlAAAAAII4AAAAMQUAjJMAADIFALQHagaYGQAALsDPABBckyZSw/5qLS43LAQULhdKggpDAo9EBhAWAJ5HFeOfXz3is3X6n30O30YY6cijivHPrx7x2Tr9zz6HbyOMdPAgGiUAfBJYq+OgIhKhJBEAAFEDAADAYlgVAAAQXQhJDAAAADPHAACdDgCATAAATAEAzADeeZBpAQA4AEew+gTNFGOiPQpWEiCiUiQBJBEGEqpEBH5HFe33Tz/xap2P9z7Hb4Nbzx1VtN8//cSrdT7e+xy/DW49PChqAMAngXFIMAmVVImICACHMwAAALUahgIAAIsFYXwCAAAAZrQAAEQiAgAATDICAJ8LAIQDAOBmQLoAACcADjSgGilTUn0MSWGXgmhEa2EUKgmqBQkSEkNKFwIDLAy+R5XLn5/8xKtl/fuc41FJMWCPKpc/P/mJV8v69znHo5JiAA/qZQCAO6yOg0oSEiohAiCCAgAACAYJE0lEAAAAdmIjAAAATCcBAPEaAJBpAQBTAQBMFGzmgRkAAH0DsJ9rKSM6pab2YA2moWAMkDxQKW5AxLhIhULFYAFeR4XjX30MFK+UrN9zHr8dHB11VDj+1cdA8UrJ+j3n8dvB0QF1D/AWgAU2DgMmqiIqiUgAOBh2BQAAEAMVAAAABQUAAPAGUEIAAIB+AADjNADA5wEAMi0AgJPA4wAA8QNsqkhn+Y0/Zze9imr80U2UhQJVgVEUKgYXIQMSAQoXCp5HFeWPhPqJ1wzW907l/jSOI/KoovyRUD/xmsH63qncn8ZxBA/KJgIA7kl1XCoSESkiIgDmzAEAAGCRIDZRAAAArERjAQAAgCAOAACACQDg8wAAZgAAmAk8FtBxAoCCaQCokG6y0nBvuCn8xKXkBgpQBkkWhasiEWBwEQC+R3XpR8K5iyWsHu9dcxPnYFLZo7r0I+HcxRJWj/euuYlzMKnwIKsAwCeBtTHBgalIhKhEAABx4gAAAFQVBQAAcCGIJgQAAGA6BgDIzBEAACAOAAAIBwD4fAAANwEzAwDAAei5MIBwrytR8UaioBRUiYAkDgWuggoW1ABeR2Xj74++4pF73fP0gd1hC3FPHZWNvz/6ikfudc/TB3aHLcQ9ULcAdxwCbJkikihKCAAwTKsAAABcKgmVCAAAAASRhAAAAMxoAQAQEgcAAJikAMA1AMCXYD8oPgQAADwefV5vMMD8h1SOl6Weo3qRquBeCIlBCQRY4IoJghoRAZ5H1fOvr/nEFav+Phe+6/mhuJFH1fOvr/nEFav+Phe+6/mhuMGDagQA+ASwhgF0VSJCRJEQACcIAACAiA0BAAAwkBLEAgAAME4CAJgUAJBpAYBrAQCdAQCIg4wzAWCn/vL9ey5195C0ZpkTuCWJMwyQiYzEsFAqBAOMgIsFvkd17ecvPrEmrnufh+7Qo7iyR3Xt5y8+sSaue5+H7tCjuAJ1D/AwwFkD6KqIhKSECIDdVAUAAEBAAQAAvEmERAEAAABIFAAAgJkFAIzTAAAyBQDIBADASSYzAeCmuJ91o0RN7Bh4TiwoAgqwUBgiMEQkRBREAH5HZfHPX/yiK1F/7zPobqE1edxRWfzzF7/oStTf+wy6W2hNHjxQAQA+CQwrwMCUFEURCQEwUwEAAFBMFAAAwEJOJAIAAMAwowCgXwAApsMAAOgUAHA1OIUZIwAAX8AHxwuAwr1E3VFwcasLCXVcUBUQVCmBtESoUBRQAb5HNfsvfSSJtS66s88rt7Ehitmjmv2XPpLEWhfd2eeV29gQxUDdB9w1LDCQSkRIhEQAAMWiAAAAGCTqxAAAAEAYFwcAAMDMBgAYJjMBAGYAAL4CAAzTAgBMYAYAAA7ADzvPPD4sY0DnAKyYGOAacBcpQagMCV5HFcsvvQWLx7Lo9j5lbkKFdNRRxfJLb8HisSy6vU+Zm1AhHVAH4BPASjoYVBGRJEQCAFisdgAAAASLCAAAgAohiQEAAGAyFgAwMwDANQDA5wAAzAQeMWMAAHCCsWmVXDVz8IVhW6AGVhpF9RKFQlgLFygYIcCANAB+RzX9R18B1aLX3/MMu8Ue0nFHNf1HXwHVotff8wy7xR7SAXUb8M0Ca0hhoiqhKBIRAIbFEAAAAExDAAAAcMSOjwMAAGCcAQAwYwAADNMCADgAwFcAAFMJXA4A0BdAWymi9wq9lcJlkfrW0BbAcpEgsRCpjEAislCR4AJeR6X9j74ZiyUm+d6H406q9NRRaf+jb8ZiiUm+9+G4kyo9PFAHAD4JnAjsqqqSiAgAKg4AAEDFVAUAAHCxExsBAAAASBQDAIB0CgC0D9ACwOeB/QU0EwB4M1DTt0SDK4jH64Jn2sEtMJIKF5FiXVSIVCCi4qIICACeR9XzL/0yFEuMyn3OsLt3sJg8qp5/6ZehWGJU7nOG3b2DxUDdAjwssJKNOKiqqogAABOrAAAAoIgJAACgkmg0MQAAADDMKADQ6QAAfAkAXAsAAAAJEADAkUA7AQDgAqqqCEZcaf7Iee5cuJECF4rFogZQXdTIwuIucC0QiCQA3keNx/d/uNXS9fJzHoZvicDU0UeNx/d/uNXS9fJzHoZvicDUwYOqAACfANIjYEhwUEVCkUREAJwIAAAAohYRAAAAQDABAMAAJYwFAABgZgMA0BkAAFwA4DoAgDgL6HQAAODQ8HGZlW7Ja0BDSuql1CEkCRYICQIYXNSoEECgoAB+R5X1129/RF9f4nsPbij8myp3VFl//fZH9PUlvvfghsK/qQJ1D3BXkmBXRUJJJQCAaVoVAAAAbxJEEgUAAIBImFgAAAAmYwGATEcA4PoBgHYBgOsEAPATMBMA/Jiuo0eiB8xWDVU8iIA0nYWERYDhBkaggFArV7UgwQW+R3XHz08+or8W4b1P4bcYg/iyR3XHz08+or8W4b1P4bcYg/jCAzUA4JPAGTaCrhKSiCIRAqCKAQAAqKgqAABgWBDEJAQAAADCOAEAAGoGACBTAMAXAAAAEA8AAB6ZjgCwo5KmNhIOSWOtJlEx+hdskiAqLFhwIY6ACioKT2dnUwAAQHsBAAAAAADzeGoqBAAAALQfwD0ie3l1eXt8e31ueHl6fHd2eW56enx9eHZzdn6Bfnd9dnt4ep5H9fP3L39Vl6vlOc/g+3tsismj+vn7l7+qy9XynGfw/T02xUDaB9wzBA6qkkSIhASAg2EoAAAACWMTAwAAgJRIFAAAAHA8AACAzBgBAKYBANoBANoHHxJIpwCA+ACyYyCpNIzxdCR4O8aVU7kIKESoC3pcBgFVUEgoAH5H9duvz/ZT3aNa7nmG36ZZg9xR/fbrs/1U96iWe57ht2nWIFAH4BPAmErAgCoiERISEgAWsQMAACCqIgAAACoiMQAAADCZUQAAkBAAAKA9AEAmAIAvAABcMpkCUDAXQGrofVtDaLs+FMGbPIWlUrEgCSioBWGAawF+R9Xl529eQZWfe3TXsDZt3FF1+fmbV1Dl5x7dNaxNG1C3AXcNHQyqEqIiIQFgYAgAAACOxMUkCgAAgJxIBAAAgJkNANDJBABgAgC4BgDQScAmZhQAgAPQQiho1u+jLK5kGSiFs1mKhZAKAi4EZSCAWLgiAgB+R/Xr18e8Iq2Xevbh+BZijht3VL9+fcwr0nqpZx+ObyHmuMEDdQDgk8DIBtBVRSRCQkIAzHAAAABqmKYCAAC4EMYkAAAAYDItAAACxQMAkANwLQDADAAADp0RAIr+FZvL5r5ThRqtIliIRAYSYrqIKKgKokJcIFIBnkfVxy99y0R8XK6xT8E/MBcGyaPq45e+ZSI+LtfYp+AfmAuDQLknFdhVEZWQkAiAuMSEAgAAIGF8AgAAAIiGiQAAAABOAAAAwMwBAOAEAGQKALgO8BgYNBMAWEyp73/P15ZZUdHtLC5VXRRgIHLlXAtHhmvFgmFhYQkAnkdNl299L0TER+dhHsz6W2iVPGq6fOt7ISI+Og/zYNbfQqtAnYBPADeVYCdFJUkiJABMcQAAAEBMDAEAADDACWMAAACAMCEAAABAAgEAALgAgE4BANcCALgRmE4AEN5NuxZ+bKk1YNYM7rTYQQ1DgMWAWgQL9BBHwUICA35HrfuHPhtSoV99tFns7i1Vzx217h/6bEiFfvXRZrG7t1Q9UPcADwuMXLerEhJKEiIAjoYqAAAACgIAAOCSIEGiAgAAYMakAABQfDwAAAmAaQMAyBTYj6RYmCqKYFxTo2aFtpiuFYVCNDaNcgtSIrAiBnh2FxcFLIgiRH5HddtvfS5ShbW3mgexblFxhTuq237rc5EqrL3VPIh1i4orQD2ATwIr1U1URVKRCAAghikAAABqqGkCAABYWImNAgAAMDMBANoZAAAOAGA6BABgClSUOLx1uKgawImGY8wtvyKUHLrsRFWeBDlEklCUAVRcBAHMasWxgOgCXkc122/d81DtWn2YfoKua9RRzfZb9zxUu1Yfpp+g6xpQ7kqJoYiSEhISACDRaBwAAADEJ0xgAAAAFB8PAADAZGYBADNGAAAHANAZgJvFn1z1gquCpv1WrLUaZyREvRUYF1TLIEjgQryISAakhAW+R53Xp35Jxfh4RbD9Wll2jT3qvD71SyrGxyuC7dfKsmtAvYBPAJdjdhVFFJGIEACLYSoAAICoaQgAAIALAQkBAAAAEkEAAACQWAMAkAMgMwA3AwD4EulKSScJFOrIjbRUr6VbhiWhVqo4gKJgYYnJQkAeEekiSgCeR/XHt755ibH0ent0VzFLyaP641vfvMRYer09uquYpUA9gHu4wUQVJZGQCAGwmaYAAABgEZMgoQAAAFBcPAAAABCNFwAAoJMJABGAyVAAQGcAAPBQclStpwYBfwIbqnrlkpmqyQr4xyVYIlZSCZDAIyJKlCQQJbAAXkc1lx/dr7kIV7WaQ92bqOqoo5rLj+7XXISrWs2h7k1UdUB5S8AAKxkcVEUlIiICQA3DVAAAAME0AQCAxCoGAAAAmDEUAEhmAgC4AMC1AIBMAABxYER1YRoCpIBrWJfBLDVgtG/LAimEqgAREUlZRBj244JyQ0FkQAV+Rx33l77XUKS6+GUX/tn6rHJHHfeXvtdQpLr4ZRf+2fqsAukC7phidlVEUSUkAGyYCgAA4PhEExgAAAASEQAAANMhAABwohEAAIALAJCZgJUDAFzM5LyKZOYIWjTu0ppGpBEDSUnElJAQBlQlALWgMIQEQzBILpDQxa0AfkeNy5e+uYvW9x72wbpDb3XcUePypW/uovW9h32w7tBbHVAP4BPATSUYoiSSpIQIgM2iAgAAIKYaAgAAYIHjYgAAAIAgHgAAACBOAAAADgCgUwDAtQBAP1lazLnArhGsYxxUrDqwIknExYWaUMEgQIJowMAQoABeR3Xnl955iHiteucU1KvXIuqo7vzSOw8Rr1XvnIJ69VoE9D3JgKFKhESKiABcRqKxAQAAAMQkSCgAAABCJQAAAACUAAAAQMYpAMABAHwFAMgUAICTCytynQDUVUvpdS/SSKaCxwQqjAoi6nWJIJIwYMUCEawIfkeNly+9sxTd6+GyNz/BPHTcUePlS+8sRfd6uOzNTzAPHZD2AJ8EVqobqiQSkkQAALU5KgAAgBpYFQAAgDA2DgAAgJnTAADtDAAgTgDANAEAdAruI5rZ6fnGZSQRSon9d5It2kI1xLLg59Gg4AcUBAxqSeBCSSigAp5HLe1TIGYqWHT2+v6VSSaPWtqnQMxUsOjs9f0rkwykA7jjkBgqIiERIREAwCoiAAAAxCaMMwAAgJ1oBAAAgBktAAAUFwIAAEwBAO0AAF8BALjIFSoXAKCWcmdTgGKxQsJdopLQxRKZYoGBBQkBXkdN7UOfLIS4eDjzT+pYo46a2oc+WQhx8XDmn9SxBqQLeAvAAjfFjBAVFYlEAsBuigIAAIiphgAAACiGAgAAANE4AQAAAPEAAAD9AABMADcAQHuY76kNDTwa2C/a8/W1AJAGcsRXK7IqKkUEooqBC4o7UIyFSsFARQB+R43bL30uUnR9JzunlG7MSMwdNW6/9LlI0fWd7JxSujEjMVC3APfEoKoSEiESEgCmo1UAAABQFZeYhAIAAEAJYwEAAAASiwEAQCcDAIAD8AEATABA4KCUcPpTM1LVjbX92h9Tb1CdMzinJVxUCBQYCcmSGDhzGUQkAF5Hjeen3lmI+ngp9hl+B3ESU0eN56feWYj6eCn2GX4HcRIDdQI+CZwhMRRFQkIkQgRAbBYAAADUMKwKAABgQBDGAwAAAJE4AwAAYgoAyKQAwLUAwHUAAHEmZkO5M+CA4Z6n8de+1czA6BCuSxhuRKkWEVwGlaJU0sIigQCeR23tQ/8KIf4u2NPtgkkjj9rah/4VQvxdsKfbBZMGpAv4tIGVhMFUElUJAQAOdlMBAADU0XBUAAAAgiAeAACAaQMAdOYEAIgTAAgXALgWnCKV1TDN0Y4g+0WD30hcAmgesxl12i5qNNNSrgJJkiwwhiUo6QKBiiAiQMWACN5HLdOXQJhCsCrOdPfiKtNHLdOXQJhCsCrOdPfiKsODqAAAnwDWkBiqpEqIhAA4UwEAABCraREAAAALlCAWAACAyVgAwAwAgM4EAOACALgAAE7kPFZcfA5Ax4Nd2S6Kcq2yfiy4A8GAIuJiCVgkqJTBDYhgoAYwAF5HLfuH3oOq3F9+zFPY3XSBOmrZP/QeVOX+8mOewu6mC0DdB9zTw64SSSgREQEghkUBAAAwFJOYeAEAAIjEGAAAAAgTAAAAMB0BAFMTgP0AWB/alzsr1jemRRCwLYWVZz3XBTWtZCBB4CIgwkoQQESgYaHiEgF+Ry2XD72vibj67LbH7/pHMnfUcvnQ+5qIq89ue/yufyQDaSRwN/awK6GIKhEhAGJ3AAAAwJHERg0AAIATiQAAAABOCAAA0BcAwAwAFQDtwTiWoli0mY4gUFZyl4pLunUMyiWNCwFEAyKCBRUCLsoaqDAAXkc17VtfLxFdfuzz6HUToY5q2re+XiK6/Njn0esmApRPAsPQ7SopIREhAQDUbjgoAAAQnxgJAAAAHIkDAABgxqQAIF4BAIbJCABcDQDIBIyl7jor58TQmUUJHmZRwiibPEdCsbpNuQU3IopEjAqDEVkuRCKkAZ5HXdpDP8FC/E11RncQI4PkUZf20E+wEH9TndEdxMggPFAHAD4BjD2xqxIikiQBAJziAAAAxGraBAAAwIXQCQAAAJiZAACAeAEAADItwADA1QCAOT1rmtJqRYYpKqJph/AY13O/Is2ENPugej8sKiKVNCC5IBF5BQOpwJUWFZ5HbeuHPgOJmlelnYsK7kaXNjB51LZ+6DOQqHlV2rmo4G50aQMDdQvwCeAM3VCVSJEQEQCrmgIAACAW01EAAABUcHwMAAAAEMQbAABgEgBApwEA2gUAZFqoN/ggjtHnAgBGkXh5mQnWuI89oRrdK5BV2lACiBBQFOGigLKCnQGSAV5HTceH3hcmupoF5xT2Ki+3Ieqo6fjQ+8JEV7PgnMJe5eU2BNQJ+CSwMel2FZFQVCQEwBQbAAAAajHsCgAAYGASKwAAAIDEIAAAiDcA8L0AAL4CAHQKVveWdqOpO1GdBKCl7gRSaKtXLDbSTWIEJVxIRKoA8hYReI3IwoLBBX5HrcuHvrmLziU5p+C7K0nPHbUuH/rmLjqX5JyC764kPZD2AJ8EhuiGopIoERIBYBdTAQAA1C42BQAAsBIbAgAAMJ0ZANAPAIADsB8Apg2MWutfmzbHg/kOoKhDLpHGcJ8NSRP/JEKFISqQkLjJGwqrYBkLGAEW3ked1pf+yUTMl+rU9Cr/huijTutL/2Qi5kt1anqVf0PwQAUAOBtTYSgqIUkiEgAYAgAAgKXYxMQIAAAgM2cCACCOEAAA4AAArg8A0AkA4PMgtJ+Ph25bOWSfg8AeWq374vE9K4xkJlh9Z1abC1FlwbDUZWFBxcOARIWFigreR52Wl0CoKmr9zWIX/wlCNkgfdVpeAqGqqPU3i138JwjZIJD2AZ8A1hCGikiEEhIiABY1FAAAQCymXQAAAAhICAAAwHQSAMAUAMBMAEA4AAAO2Alauk82xEcYfGvcK+RW5RKvpYoUrhJFqJKLSoUlSQMRBcYCnkedtk+9R1Z9d6nmRcd+lrh15FGn7VPvkVXfXap50bGfJW4dUAfgbkyFoSIqiUiEAIhhBQAAANUxiY03AAAAiosFAAAAlBADAAAeAPBdAIBJCgDEASsjjDwqHxj0XNTNgHvrHK4RihVHLYoAHt0lACFiuRRXVZZCoAILXkdt80vvUVVnEc26O5Wkp47a5pfeo6rOIpp1dypJD/QngY1JhKqoKImIAKjVsCgAAICR2EQCAQAAIBITAgAAAEGcAQCA+AAAHADgWgDgWtAFQjiWhlb/nJnmFvI8KsOwPkPcVAjUmcsbDBYCDFwsBkKAiqFANYAAfked6lPfxEJbrc78uG4Y4o461ae+iYW2Wp35cd0wBA+iDgDcIRWhKikRISIAwDl1AAAAuIpNJE4AAAAikQAAAICZDQDgJQBw/QCATAEA4ULaVwgLNx7S+nBgg16qdYgTViAtGLBVjenWcFXXkBe5YGEtP1QIhjVcWABPZ2dTAABAAwIAAAAAAPN4aioFAAAATpCTqyJ2hn54gHd/c3l3enqAgnh3c3h8fHl2fX14fXd7enx7d3FyXkc9zeXHL4xPH/bcjRpkGHXU01x+/ML49GHP3ahBhgF1C/ASwBoSpoqEIhIiEgB2B1MAAADEUKsAAABYdMYMAMBkLABgUgBApgCAdgGAdgEawqk0RKOIcBfGKryeSYPUH7JoqoMo1OUaoFxE7oBn7qJYFhQQAH5HvVy2um+hWvoP1T538ZtaNO6ol8tW9y1US/+h2ucuflOLBtQJuCcJFqqqJEpEwOpoUwAAAAziEk1oAAAAQhIAAAAAYRwAAADTAgDtAwBfAQBfwP1T1j7BBE50xRvaRL+u99+7vIhhhQ3RtRNrVGYk1Jrg1oKIVUFEVJBUAq5ygYhYYYAInkfdz7u+I6mlW0X7gsc7IaSSR93Pu74jqaVbRfuCxzshpAJ1D/BJYGMShiqiiBISAEBtpgIAAKhpGAoAAKCC42MAAAAAJyoDAEDfAEB7AMCXAEA7UE9n2gzt5t7vM4uK3kkrxaJXk2I9E5erK0FMVAZUAqFQ3ZSIBQtXkRJYfked6lM/qcq49OZ0f1GVuaNO9amfVGVcenO6v6jK8CAbAIA7LMaYKhGKRIQIAM4MAAAAi/gECQQAAGASFQAAAJOhAIAfAJBJAQCdAAQAkBNodVClS2f3iQMC2+1/MqkM41ktu2Wot9tPEgkFayVw7UCAS0kWBCQi3kddx4dATCpyW7HPQTd/ah191HV8CMSkIrcV+xx086fWAfUCPgEMo6oiIYpEhAiAXUUBAABExBQAAAAXK7EhAAAA0wQA4AMAhukIAACgOADYFdaT3Wi8teGlzs/fy+a4M2vNhpPNjbm8iV4+DsH3xEojiW5FgioBQyFEBFAGkADeR71dtvpuoFjyS7D7hP80eoA+6u2y1XcDxZJfgt0n/KfRA0DdApw1MBaKhEQoSgQAUEdTAAAAUEkQmxAAAIDMnAkAGGYWADABAOgUAHANsCIA4CNaS+4Iu3YsaOljnfzKwlVTCHatwl0G0SAS0EUSFiiFQYVbAX5Hna5PvYWJ9fpU7HPToZHMHXW6PvUWJtbrU7HPTYdGMlAn4JPANhURKiKpEhIAQB1sAgAAoCqiAAAABkSUKAAAAEAcAgDwA/huAMBkLACACzo15kdMN3e9SkhLvFvtNKNzHNfkQY1Fe80072Ux13RdS3FRCBiguEhIFemGiAFeR13SXV/Jqs5FMqdONVKpoy7prq9kVecimVOnGqlA2gPcYTFDVURClJAAcHQ0TQAAAOKDBAAAAKC4WAAAAKbTAIB+AABmAABkCrgAwJyzy67hOD4QTdZjbAfDqBZWfVYIiSRIWBipwLUwIA0sLHFAQYECfkdd210/KSKPVbAHt4WwlDvq2u76SRF5rII9uC2EpfAgagDAJ4AhYYYqKaJESAA4UwMAABAxVAAAACxEYgwAAMCkBQAcAMDVAED7gAAgwi2G+UP+1U0HMko5FKZ5dCSK4j2mgaP6ONSQUBVQcAkkuFwlgoiYcAkQAF5HXbc3PRckFr3k9Ml1o3iRUkddtzc9FyQWveT0yXWjeJECdR9whyGYKolEiIQIADAshgIAAGCQwIkCAAAgEgkAAAAYZwQA4AIAMhMA8AUAEA6Uo/s+GVxMqyUzbk+QXdPWerz3CUKG+lNAjgFFTahIrEIC1QUDfkfdLzfdBxRLXQTne+gJkY476n656T6gWOoiON9DT4h0QB2ATwLbwURVRCRCQkQAxLQCAACggAIAAKgQxsUBAAAAJMQAAHYAxukAALQDbOaSXQtruXQHUSK9TCgyafbXX3KhMGK5pY7eTIElQBQRFxBIyXAFFCgQIwCeRz3Hq/6CVS4P0TyP7s8Z1sijnuNVf8Eql4donkf35wxrQN0G3D4oUyVREYkQAAcVAQAAwCChEwEAAICQOAAAAIZJAXgDGCcBAHCAFa/xxPP/ovflLTwPwGnxfd27rSLZtsbDJnGA/KZHNYEqwSLCRUBChFBdXLBQAb5H3Ze7fslECJ1kn4fuhEjMHnVf7volEyF0kn0euhMiMVAv4BPAsDEMVSVUJCQA1BEFAAAQNUUAAABccHwCAAAApgIAcAEAAMUZAADiAABw4d2bfq5cMGa1bTwR68m8YXNFrREUzVF55dcfWjG5AynUC5IBHqUKpQLhIgGLRQALnke97+f36hdLqbLdB9aN9TGZPOp9P79Xv1hKle0+sG6sj8lA3QLcYUhUVUQkRUQA7KYpAAAAqCSIJAoAAIBJbAAAAMAwLQDAAwBMplMA4FoAoF0AiL6ulY2dHntx69YyrXezlw0h3EoYg4YSd4YpxJmyVCK6CCpSKBZoYUGtIgJcCn5HXS93vS9FLDVgn1furpjruaOul7velyKWGrDPK3dXzPVAnYC3BCywHWSqEhGJSAQAMLEBAACgYqgCAAAohgkAAGAAEAcAAC4AMwEAuMBNamw5zt4CFXLFDR3pnXHqfVwYZqtMCKNyLXlVlFAFLoKAgADi5VYMKn5Hvc3nJ39Fn3qdc47dHz/Sc0e9zecnf0Wfep1zjt0fP9IDaQ9wk0FVlVCSCBEAq2EqAAAACeMTMQAAAIqPBQAA4LUAoF8CAGaOEwCgXeAGPn/LO3A8GQ+FqXpIHy2KwCVWrXdvYF3FoiZIFWIBBSGg0hMRFBcoXkfdx6vekBAWwT5HHV2RqaPu41VvSAiLYJ+jjq7IQD2ATwCpHqGKiBISISIAakMAAADEVEMAAAAsCBwPAADAYQDABADADACbADAHDMsWHpIO7ups78N836MSU699JKMI11gcp/caFi4MimhBxaVCD4sAFZ5HXcaHfk1FlzrBHnQ3cDTyqMv40K+p6FIn2IPuBo4GpH3AHYYwVBSJiIgIEdjsFgUAACAuQbwAAAAUxCQEAABgnAEAcAIAhskIALQDAIQD75rd2t5lr8nKBrjaa224b0t1ny1sSv49Gy7zIoFgwaJCQaBAwXJRAJ5Hna9P3S9NdDkJzpm56/bqyKPO16fulya6nATnzNx1e3VAHYA7LKYqIimShAAAm8UOAAAAqoPEhgYAAECJRAEAADAFAPoCAGQ6AgBMACsHoIhDriF3XmtXO8dOk95lf4zKunQk7u08QresdV21uCwKXBELhimYRYJ0YQHeR70cV/0GEh2icx7rRiKm0ke9HFf9BhIdonMe60YipgJ1G/AwQKprqIooSkgIgGE1BAAAAEEBAAAwiE00zgAAAHgGADIZAQCdGYAPWJMpnXOzZYQaGAL6Wsf273utDeJxlU1rhNTd7BKSI4NaUJFQF1ZAGxi07gKXhYEEXked4kM/qcpssrm8opY66qhTfOgnVZlNNpdX1FIHD6IKANzUECxUkZAkCREA51QBAABwFSYmIgAAADkxcQAAALwUADAFAJhmAACuBQBwkR4ntVSC4LK1ESa+6zkrEHZCaVLuVqm6t8bmiAMDPwpqYl0kFAMoCRQKKn5HXctd3xKhVdmebh1GOu6oa7nrWyK0KtvTrcNIBw+iBgDcYQgjRCUiIiIiAMQ5AwAAwFJMYmIFAABAGIkDAADAFADAAwCYAADCBQDahdoOv/lcLQ0fyNh7nOGIJRRF/Hm8bL8r1ZFoikCQzCwUKASooHIhVQB+Rx2vT70zF0uFfa787Jl67qjj9al35mKpsM+Vnz1TD9R9wCeBIWWoikiSEhIA6mBRAAAAtYmjAgAAGBCGcQAAAGRSABBvAOD6AQCdAm6WtdPZsTEc5xtPPV7P5xfN751/i2fZI6teIYWRqgjRuliGoBRYLi4QAwRYUC4wAJ5H3a933S9JrLEo9pUpUWk9edT9etf9ksQai2JfmRKV1gN1D/BJIBkiUZVIlAgJAVAHqwIAAKjVsCkAAIAKThgHAACAKwDolwCATAsAfAUAfAkP04a2La+tEtLfjO0fpZbgtgSVYD6YRjQMUYg9BhAosYJUhyAHIh5YIKEAXkddy01fiaKOJNrTHWAxRB11LTd9JYo6kmhPd4DFEJAO4GGBNfRQVUIUJQIA2G0iAAAAKIYAAACKTUyMAAAAyLQAgBkAAOM0AMCXAIBOhFojMhkOm9trjCN22nDdfXvd4SoyFw1aDS4VgRAgckWIIGCw4C4ktEECvkddylMgG1P2UM31q1xZGWKPupSnQDam7KGa61e5sjIED7IOALwFYIFhhaqKihIBQEBMFAAAQCymVQAAAFQMKwAAgAsmAAAnAGCcBADQCQAgHKy1p3QlmfnkNFNiWNtWaXzDSWeLwJX0j9AwNpFwQWBVjB5UxKgCF4kKiQq+Rz2ud302LPqYRLsP/A5GpGePelzv+mxY9DGJdh/4HYxID9QtwE0lJqqIiCQhEQGgdlMAAABQiUlsvAEAAFBsPAAAAK8FAJoJAIADAIQDLITPkIB7BcBtvai0U252hRKrMoK3sGNQqYw4FJYUEVgQAlzcQiDiAn5H3R6Xj/1Fv/TYp/DuAo+eO+r2uHzsL/qlxz6Fdxd49ECdgJtaEaEqIUkSIQBqswEAAIDhMLGBAQAACEgIAADAYQAgwxQAMOkIAJikAEC4UA/HlOZtpBs2NibQ83v/4goUIlIRH4WEUocoVCJwDSyuoABJMQbIk+ByAf5H3eeH/lJUalEwLxjflfPV+KPu80N/KSq1KJgXjO/K+WpA3QPcYeiqSoREJCIC4KiqAAAAeCs+MQkEAACAYuIBAADoBADABQCYAgCuEwBgiqq2cr69eJt9/bh9/j3z9BcnE5TiLSIFCq1CiRIoacGlUAIUuLAQKRIA3ke9t1Ni/ist6cxRF7klevqo93ZKzH+lJZ056iK3RA8P1ACATwArpaEqSaiICICJGgAAgBimVQAAAMVCSkwUAACAzgQAmAQA+B4AQKaAm7XaM3X2359e9XgBEPqTarz1TovkGM251vUWQExYsxULxiIiJuAKEDGlqiwGKL5H3bd3fbcqltQEZ/j+hKrGHnXf3vXdqlhSE5zh+xOqGpD2AXdYqqpEqEiIAIjVZgIAABCXaEIDAACIRAAAAGAyFADEGwDQCQBApwFuhoZmdpoavOyQsg3pg5urKe9588FqdPFcHx4yjE30VEhUJAtXIYkgsuAqBoIEA95HvVyv+l2R6Lso2GdYNydS6aNerlf9rkj0XRTsM6ybE6lAHYBPAik2yEQVEQkJCQAgagcAAEBNw1AAAAAVnCACAACALwDQcQaAlQPwBQDABDQQ65rpuKP7bZuOO9SAnfSC8WhQFWaKCu4iJgbCAAuLeLkkCQkDnkc921VfoDAo9uhuNi2TRz3bVV+gMCj26G42LQNpG3DXEImqSKhKRAAYFosAAAAQn0gCAQAA4CAOAACATAEAJgUAZFoA4PMAgHCg7gegH4iG4ggjXdLbkn6GeYBRLIwmAdwE4l0MlwCiCBKECxICIhd+Rz3rVb8GlVwxp+7Bq3ruqGe96tegkivm1D14VQ8P1AGAu5ZMFZEIiZCQAEBwAAAAuFJiQgEAABCGCQAAADADAGAKAGAaAIAJYBX+anRUWkJptDOzqa8tUBraTZtuewa/khaLmyDiUqAaxCEaaiLBQgVPZ2dTAAQAGwIAAAAAAPN4aioGAAAAMWRe9QZwfXh2fGaeR72N5zt9QorYuhmVaORRb+P5Tp+QIrZuRiUakLYAN5UEU5UkiRAJAGA6WA0AAADiEiZqAAAAHB8DAADAawGADhMAAA8AiAMAwGXd5WH1WzQYr1ilucsrelUQAtQ7oMgIFgwILgORKgIhEMlBQgkAnkddLg+9NyK6Gmz7cuF30lVMHnW5PPTeiOhqsO3Lhd9JVzFQJ+CTwJBEhKqEqCIRAGraAAAAUFMMBQAAMDCJDQAAAJi0ACB+AAAHALgaADCXqteFaK61L2U+yT4qDHjUi++YuLcV8XyoPCxIEsFQXCJcAwmIEURYBVgXuKh+R/2Yls/FLWIIol3XRdYiuKN+TMvn4hYxBNGu6yJrEUDfldJEUUkkIiICADUxiQ0NAABAfFwiAgAAMIkaAACAcRIAwHQAAOIDAGQKjIvHquj9uc0prTbhuXQbQ2/NG1bMnceFyHutmIQgVaoFREQKAQTBZbESCVTeR31P+8++ItUV5wzcHx9AH/U97T/7ilRXnDNwf3wAUA/grkFVUVJJRATANBAAAAAsKTGhAAAAUHwsAAAApgAAMwAAOgUA4AIC62GpuVpDx6ZaO3/LvNSQv3fNpO2LUH9iwchnrooHFkisqjKAtaDAJVJQgEIC3kf96OuvPSp5COalR48QEOijfvT11x6VPATz0qNHCAhAuoCbSoKpEpEoioQAOBqiAAAAJEiY0AAAAARhQgAAAF4YAMh0CgD0AwB8fgQAOM0dm57DsNbczov1Tj3OYcQynh/duBg1xW7ImRWkiIKFgAo1EQpUyaZ7EaEiAJ5Hfc/rN72K6mkKhjzqe16/6VVUT1Mw3JNiiioRERIhAQAAAACAFcTHERvnULKFJTsmYVwUGQFA2snMSRtAX/4AQIyTMYCbA/QvoLz1uTnXzSH7nqkg14FcBDcoWLBEJCguuHADAA==",
    G: "data:audio/ogg;base64,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",
    UpG: "data:audio/ogg;base64,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",
    A: "data:audio/ogg;base64,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",
    UpA: "data:audio/ogg;base64,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",
    B: "data:audio/ogg;base64,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" };

}

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map