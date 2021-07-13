(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 12));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/pianoGame/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/pianoGame/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 35).default);});

/***/ }),
/* 2 */
/*!*********************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/index/index.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=70931c48&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/pianoGame/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwOTMxYzQ4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3BpYW5vR2FtZS9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/index/index.vue?vue&type=template&id=70931c48&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=70931c48&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70931c48_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/index/index.vue?vue&type=template&id=70931c48&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    Score: __webpack_require__(/*! @/components/Score/Score.vue */ 5).default,
    ShowStave: __webpack_require__(/*! @/components/ShowStave/ShowStave.vue */ 19).default,
    KeyboardComponent: __webpack_require__(/*! @/components/KeyboardComponent/KeyboardComponent.vue */ 27)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { attrs: { id: "app", _i: 0 } },
    [
      _c("Score", { attrs: { id: "score", _i: 1 } }),
      _c("ShowStave", { attrs: { id: "showStave", _i: 2 } }),
      _c("KeyboardComponent", { attrs: { id: "keyboard", _i: 3 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!****************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Score/Score.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Score.vue?vue&type=template&id=597647ac& */ 6);\n/* harmony import */ var _Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score.vue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/Score/Score.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vU2NvcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5NzY0N2FjJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY29yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2NvcmUvU2NvcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Score/Score.vue?vue&type=template&id=597647ac& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Score.vue?vue&type=template&id=597647ac& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_template_id_597647ac___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/Score/Score.vue?vue&type=template&id=597647ac& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "score"), attrs: { _i: 1 } }, [
        _c("text", { staticClass: _vm._$s(2, "sc", "text"), attrs: { _i: 2 } }),
        _c(
          "text",
          { staticClass: _vm._$s(3, "sc", "number"), attrs: { _i: 3 } },
          [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.score)))]
        )
      ]),
      _c("view", { staticClass: _vm._$s(4, "sc", "error"), attrs: { _i: 4 } }, [
        _c("text", { staticClass: _vm._$s(5, "sc", "text"), attrs: { _i: 5 } }),
        _c(
          "text",
          { staticClass: _vm._$s(6, "sc", "number"), attrs: { _i: 6 } },
          [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.error)))]
        )
      ]),
      _vm._l(_vm._$s(7, "f", { forItems: _vm.messageList }), function(
        item,
        index,
        $20,
        $30
      ) {
        return _c("PengpaiFadeInOut", {
          key: _vm._$s(7, "f", { forIndex: $20, key: index }),
          attrs: {
            duration: 1000,
            wait: 3000,
            top: 50,
            left: 45,
            radius: 30,
            loop: true,
            info: item,
            _i: "7-" + $30
          }
        })
      })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*****************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Score/Score.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Score.vue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdxQixDQUFnQiwrckJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/Score/Score.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\nvar _eventBus = __webpack_require__(/*! ../../pages/pianoGame/event-bus.js */ 11);\n\n\nvar _PengpaiFadeInOut = _interopRequireDefault(__webpack_require__(/*! ../Pengpai-FadeInOut/Pengpai-FadeInOut.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { score: 0, // 玩家得分数\n      // second: 0,\t// 游戏计时 秒数\n      error: 0, // 玩家失分数\n      status: 0, // 正确状态 1表示正确 2表示错误\n      messageList: [] // 消息队列\n    };}, components: { PengpaiFadeInOut: _PengpaiFadeInOut.default },\n  mounted: function mounted() {var _this = this;\n    _eventBus.EventBus.$on(\"addScore\", function (value) {\n      _this.status = 0;\n      __f__(\"log\", \"加分\", value, \" at components/Score/Score.vue:32\");\n      _this.score += 1;\n      _this.messageList = _this.messageList.concat({ img: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAERUExURUdwTCKk3CGi3iGj3SGj3Sep1yGj3SGj3SGj3SSl2yCj3SKk3CGj3SSm2h+i3yGj3SKk3CCj3iCj3iGk3SGj3SGi3iCj3iGj3SGj3SGj3SOl3CGk3Sao2CKk3SKk3SSm2yKj3Cao2B+g4CGk3SCi3ius1CWm2SGj3SGk3SGk3R+h3ySm2iCj3h+h4CKk3CGk3SKk3CSl2iCj3R6g4CWm2SCj3iGk3SGi3iSm2iWm2iao2CCj3ieo2CGk3R6h4Ceq1iWn2R2f4SCj3iip1y6v0CGj3iSl2ySm2iir1iOl3Bue4hib5R2g4R+h3yWn2SGj3Sqq1TKyzSGj3SCi3iCj3h6h3yGk3SKk3B2g4SGk3Bue41d9j6cAAABSdFJOUwCFjKZ2CH+CjxJ7bmgwRqpPce3hJLD9ucXwBesriTQfSw5D2+cDC9H1a7pAl9yg+2EVVYG/98kuZVmawSiy4XPOy5FJSFwZxYM8vuTz+tXWVFD6wUkjAAAHVElEQVR42sUbB1fiTHC5ACeRJqCISMcDRJpnx9PT79QrXssmAf3/P+QTspMsKZCyy817vAdkk9mdTC8I+YJaIj0UN/qp7TdICffiRfq8htYEo6QotArSHNQZaF+lwm8h+t8jZ+SRemm3LdkDnn3a49J/H7hhPxaa0mrAReGYxx6+HTW1U7qB5lGXLfa94VjyCE/DPXa038q6PjvFEtmtCBv8m7Zv/gXjl5VvYpMB+sue3fHajcOrUOchnazX69XjTugo32hLNjzSeAiIPnFoeqKCJw1B7NrI++O3LaGBLVs4TATBHzUdXBmchMtLN3x7OMB4snDXe9/oy3eyvID+qVNZfVelc4IXCCG3yj6ZT5FpnstsuH5OolRcJF3YB/oPKYqlML4RY17ujonZhR2kPOvG8wZNxWLYs0hHwk2FekJv39vt1VMDvyzdx/y8wliI2oHarnq5N06zXt63IO3nqWMoHfc3blH4f14EkePOqR9WpKRfGeeCabLc2LtGiFLk/xpcl79XsLcdhI0dD9IsjFmV8qHE1csvjPPf7CMmsH+j6Mo5vmpx0tjtWQwxgtqT/hamX5YvvZ7q+PMsXSrDqOKlZD3IKlzwI5TXN9Bc5qpt6wT4ztqp/Q58gD8tURtwfuUze7f6M/CB7OioXYPE4h8c4qwPP3Trfu6wpAf4J9c8ApvcDhimnv2Cj+QFTF6riAt8eQUShGw3CA7I9CviBB91UbCzMHcEv3LHL7jdhQ2cWa+l4doOxxA7NgAa/LFcg/BneoE4wlBXR04+EN7lm2HYdbJKBVBBOb4byIE6KphiANBSR7wzPPeQ0lnUh0UIOiO8NxABWhcXQmCiJV9v+Se5wOPFl9Sfv4gSzBzw38ABobbyi4pCgQPXQACDBFMj1jwifz2z5oDuu/DIygXESZ1e6SmoDNkAaxEIzd6q1QXbIKKY2TNpYWWfLf53Dr5NDpTRMflDICzY4oD/DazODURLKcKWBbKBLab4NyQToa2xR0G7VJdJFD7icX48tF4bgW+UnP8sEaY84XF+6aPd1RONDdV3819n2q/pLQ/89uHo7ZTiOnASJufs6e8UDu+TyzsjIxqc3Kzt/G/Q0PhemUWKImGWPvvzhxyXCMT6RRFCKaKFOqzwl1bjR2HNK1BnmqCFtUxgd434UZeQvYVQra0Jwc/R2ug/4/xT4gDVdFPcWOP53+A3MUhllNbYYXK4Fvkz5wvkNOhl5Yop/uiqleCCXIAUOgeElUeG8m/JBYpw08RBCmPbeCBEPOKPrl7bIUvvUZ98e3COZHBrxBo/eiBr+0gg3+xzkgntYrbCGD94YXIKbau0aTbDN01ny5kEW/xggdRtfQN123V7UPg47bLQPwbULRtIOhjOZ/Di/zKRf68UQOga6k/ykCF+igIpsgHHxFQlC8XgcFD9S0FVZ8K+yUe3UQUt8C9DrM6P0LEuhisU0TyW0qseV0vP76VEaigi0U1u7hPETqng/G9WxXFXxqjvmET3KP9mYxRHVXfmWD/nXY0Fft0cV9G5S4dEBE789cgAP2roeesaidYHjy7ZBjdzwfGPBrpLhlrSUlVIJZIAW7scQP6IjTGcUnDLcdit8nijVjLY+RHapNxycTFYX5pxOSV1l9e/gc6/GJhAoS7r4r7zItaTzSVf8k8gS4VmMagvu0nQVG70mnqQFpFrkhLRghHIH7tKkIxaKnQV+D8/2iSE1MoGIe2RirsERWSMg7fIEONCEhRdmZSqXAZnn9Sg+EdgWrQ67l5R8Vaq0A2DD/mbQ3wxSQUyoTx5DUD8tigRrsMCuMgaTSfYdbFCDHJ+PVGJ06b8tXzv+hnDrFT0nVa0pGrBOOO2+3ajPf9dtBGSkTCS1aiMVf8tV54hbE3Xo8/TRbbkCQcZa8EC/Zm6NomBwbZkA0Ur5Zl/0erZrmill+1wifcGviq2ZTsoXE6mFb74K9DJUXDQjhLn0u1YdWooguL161qK11LTmrJQoX+DZ/le7+KwCUW/Ax9ybGDQg8wzO/Z4wcuKHCxA1O24rdmDJhZJrfLBrzexqA5+HLTxSCqXJoLcYEUbj9HIJP2jRia0tZ5WriWOxDb0Min/ppkNHWQx73Y+ObvU5OdeX/5pQyNCXYVvS+dqEY/L7Jtaex6aWum2XplVW6/srbmabmyOBscf9drYvNDaPT0JqBQreT+RrPEWVPwzHgR/vO1vziJOj5b4b++/ztNjAp5OUh3QAw4bvgSyFtqh8A88mtgE6xEPz2Q0Dblk1z3kgkxjPpKU8T/mg30G0uW7heExGe9uuRp0GktsBp3e4L1qmhxzM+plnjYLpMzsht16/U27YbdKMmw77BbUoFjH/SYYa+N+mzDuFw8djRsDu3G/3iUDY2I/8DhZ18Aj8jnyqSjMRj6Rj6FXRTkZMs62zMZ+Zbd0KF4xHvvVdOOxUDSS1EuwC5f8hq+TZPTbgRSz0e8kN+wE6OF3evp9LcPvhqktz8f/hfn4f39DvEgnfPrQ/wM1elC2C1whtQAAAABJRU5ErkJggg==\", title: \"正确\" });\n      if (_this.score == 999) {\n        // 提示游戏结束还有称赞之类的\n        // 游戏重置\n        _this.resetGame();\n      }\n      setTimeout(function () {_this.messageList.pop();}, 1000);\n      _eventBus.EventBus.$emit(\"changeNote\", 1);\n    });\n    _eventBus.EventBus.$on(\"reduceScore\", function (value) {\n      _this.status = 0;\n      __f__(\"log\", \"错误\", value, \" at components/Score/Score.vue:45\");\n      _this.error += 1;\n      _this.messageList = _this.messageList.concat({ img: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUdwTK8ZH68ZH68ZH68ZH68ZH68ZH+4ZH+4ZH68ZH68ZH68ZH68ZH68ZH+4ZH68ZH68ZH68ZH+4ZH+4ZH+4ZH+4ZH+4ZH+4ZH+4ZH68ZH+4ZHwaYlh4AAAAZdFJOUwBA34Awz3DPEL8gnxDvv1CPr68gj3BAMICpM3Z6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPklEQVR42tVb2barIAxVUFuca+f8/4feMzM0QEBt1uWhDy7q3pKBEJKiyBrlJOVJfQwhPn9PUk5l8aZRypN4okOc5N4sqkY9I0M11W7os3iShph34NA3RPQfDk2/7cd3z+TRtdupnXpmDbWNSlaZ8F8U1itDG1n8od5XEHLAdUzJpjS+riobqfCpQ7Nm9bHPq+fJ81XtNKN/yJaDRF7WRJa0bRAOMk/66tW4SQJtX12GytCEclhhVJNLfki2yGalNr+4rkRd7Nbbs+s/uhTHb/9XZHq00tYFRd4e+noDHUbsqO5z8OtV3tT2JDQGNv681pfPqQws/GFav5lNQxoDtdnyo2JQKfZXbxTVWIva0f1Pt1lU1XdUj1RmOo4kxxbwKu2wE77FYGgpCrgxvsVAEfyWpX/3x3gAOCzXMw3rfF0+54/WfFMTPb61wvFvI/yN8R6Hv5vzbzgD3Lz1hEFPOF7AGpcYvjv/qD9Qa1gdEYD2f8cDOGM8huCPozv/oOdPQVs0LGAO4FtvfMUPz59DltBh63MBSGGA4VtSq/1WVmEacgNIYYDjA9zCKK4LMGxkhBQGPnwYMUVTPh8sDIMCSGDgxQcw/IHweGSFPX9AAoMAPlyxL7WWoEUfj0BnEMKHBf3UFjUBUzdC73QYHMNzUW03DKHHrQOAyiCMD4Dbe4+EIS2dgMEghg+4wTevqmnbxoHIIIo/4govXjnZprEAiUEU31JCc0uoXBctbM2+AoVBHN80Q2vBZ/eBs0edgcCAgA9nT+QrXAm4W9RIYEDAH92N15FB4w0T7rDJuHtDn8bWyiYW3uSNi//08W11XgnQhJAqAEsG1vZQF0lbHHGgW7cw7V4GT+JrGeChw2wGH6fXUHQ7Bp7g6c8XnczlaIvNGfiCt9b0BB43uAUDf/g6aC0s46mDXAaBAF5pLZwIybA8BqEDhNSKJymJgxwGIXztiqQmEMxGpjMI4mvBS22F4YRUKoMwvt4AT1odIqfeNAYRfG17ikwgiUEUP4dAAoM4fhYBMgMCvkFAhJIWWQwo+IXegn8JDDwEBL8I/h8l5DbD3RwRuytm34zYt2P2gIQ9JGMPSvnDcvaDCfvRjONwWlvOJ3Q8X43vZqiQ4/nuCYpHLEHhT9Hc3pOi2T1JtUSSVOxpOv5EJXuqlj1ZzZ+uZ7+wYL+yMZ4yXVrh13bX913b4ReX5zdeXLJf3fJfXrNf3/MXMJhFVKESjmWvEg5iEctjvyIWShnPsmsZj7eQ6XxdPl46JhcyPRILmfhLufiL2djL+fgLGvlLOvmLWvnLetkLm/lLu/mL2/nL+wv2BocCafFIpLC2xYO/yYW/zadgb3Qqclq9xKatXp+66Olgc5rdyp2a3Yp4u99ziLT7rd9RmRsevxaYt+WTJIh9m16/tgfett9vZWBtfP7hwNr6/auSnM3vmsVf+3+9sv3/H03Kv6I7KXMXAAAAAElFTkSuQmCC\", title: \"错误\" });\n      if (_this.score == 999) {\n        // 提示游戏结束还有鼓励之类的\n        // 游戏重置\n        _this.resetGame();\n      }\n      setTimeout(function () {_this.messageList.pop();}, 1000);\n    });\n  },\n  methods: {\n    resetGame: function resetGame() {\n      this.score = 0;\n      this.error = 0;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9TY29yZS9TY29yZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBOzs7QUFHQSwwSDs7Ozs7Ozs7O2VBRUEsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxRQURBLEVBQ0E7QUFDQTtBQUNBLGNBSEEsRUFHQTtBQUNBLGVBSkEsRUFJQTtBQUNBLHFCQUxBLENBS0E7QUFMQSxNQU9BLENBVEEsRUFVQSxjQUNBLDJDQURBLEVBVkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsR0F2Q0E7QUF3Q0E7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsRUF4Q0EsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzY29yZVwiPjx0ZXh0IGNsYXNzPVwidGV4dFwiPuW+l+WIhjwvdGV4dD48dGV4dCBjbGFzcz1cIm51bWJlclwiPnt7c2NvcmV9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImVycm9yXCI+PHRleHQgY2xhc3M9XCJ0ZXh0XCI+6ZSZ6K+vPC90ZXh0Pjx0ZXh0IGNsYXNzPVwibnVtYmVyXCI+e3tlcnJvcn19PC90ZXh0Pjwvdmlldz5cclxuXHRcdDxQZW5ncGFpRmFkZUluT3V0IDpkdXJhdGlvbj1cIjEwMDBcIiA6d2FpdD1cIjMwMDBcIiA6dG9wPVwiNTBcIiA6bGVmdD1cIjQ1XCIgOnJhZGl1cz1cIjMwXCIgOmxvb3A9XCJ0cnVlXCJcclxuXHRcdFx0OmluZm89XCJpdGVtXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lc3NhZ2VMaXN0XCIgOmtleT1cImluZGV4XCI+PC9QZW5ncGFpRmFkZUluT3V0PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdEV2ZW50QnVzXHJcblx0fSBmcm9tIFwiLi4vLi4vcGFnZXMvcGlhbm9HYW1lL2V2ZW50LWJ1cy5qc1wiXHJcblx0aW1wb3J0IFBlbmdwYWlGYWRlSW5PdXQgZnJvbSBcIi4uL1BlbmdwYWktRmFkZUluT3V0L1BlbmdwYWktRmFkZUluT3V0LnZ1ZVwiXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2NvcmU6IDAsIC8vIOeOqeWutuW+l+WIhuaVsFxyXG5cdFx0XHRcdC8vIHNlY29uZDogMCxcdC8vIOa4uOaIj+iuoeaXtiDnp5LmlbBcclxuXHRcdFx0XHRlcnJvcjogMCwgLy8g546p5a625aSx5YiG5pWwXHJcblx0XHRcdFx0c3RhdHVzOiAwLCAvLyDmraPnoa7nirbmgIEgMeihqOekuuato+ehriAy6KGo56S66ZSZ6K+vXHJcblx0XHRcdFx0bWVzc2FnZUxpc3Q6IFtdLCAvLyDmtojmga/pmJ/liJdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0UGVuZ3BhaUZhZGVJbk91dCxcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRFdmVudEJ1cy4kb24oXCJhZGRTY29yZVwiLCAodmFsdWUpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IDBcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWKoOWIhlwiLCB2YWx1ZSlcclxuXHRcdFx0XHR0aGlzLnNjb3JlICs9IDFcclxuXHRcdFx0XHR0aGlzLm1lc3NhZ2VMaXN0ID0gdGhpcy5tZXNzYWdlTGlzdC5jb25jYXQoeyBpbWc6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQU1BQUFEMDRKSDVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBSmNFaFpjd0FBRHNRQUFBN0VBWlVyRGhzQUFBRVJVRXhVUlVkd1RDS2szQ0dpM2lHajNTR2ozU2VwMXlHajNTR2ozU0dqM1NTbDJ5Q2ozU0trM0NHajNTU20yaCtpM3lHajNTS2szQ0NqM2lDajNpR2szU0dqM1NHaTNpQ2ozaUdqM1NHajNTR2ozU09sM0NHazNTYW8yQ0trM1NLazNTU20yeUtqM0NhbzJCK2c0Q0drM1NDaTNpdXMxQ1dtMlNHajNTR2szU0drM1IraDN5U20yaUNqM2graDRDS2szQ0drM1NLazNDU2wyaUNqM1I2ZzRDV20yU0NqM2lHazNTR2kzaVNtMmlXbTJpYW8yQ0NqM2llbzJDR2szUjZoNENlcTFpV24yUjJmNFNDajNpaXAxeTZ2MENHajNpU2wyeVNtMmlpcjFpT2wzQnVlNGhpYjVSMmc0UitoM3lXbjJTR2ozU3FxMVRLeXpTR2ozU0NpM2lDajNoNmgzeUdrM1NLazNCMmc0U0drM0J1ZTQxZDlqNmNBQUFCU2RGSk9Vd0NGaktaMkNIK0NqeEo3Ym1nd1JxcFBjZTNoSkxEOXVjWHdCZXNyaVRRZlN3NUQyK2NEQzlIMWE3cEFsOXlnKzJFVlZZRy85OGt1WlZtYXdTaXk0WFBPeTVGSlNGd1p4WU04dnVUeit0WFdWRkQ2d1VrakFBQUhWRWxFUVZSNDJzVWJCMWZpVEhDNUFDZVJKcUNJU01jRFJKcG54OVBUNzlRclhzc21BZjMvUCtRVHNwTXNLWkN5eTgxN3ZBZGtrOW1kVEM4SStZSmFJajBVTi9xcDdUZElDZmZpUmZxOGh0WUVvNlFvdEFyU0hOUVphRitsd204aCt0OGpaK1NSZW1tM0xka0RubjNhNDlKL0g3aGhQeGFhMG1yQVJlR1l4eDYrSFRXMVU3cUI1bEdYTGZhOTRWanlDRS9EUFhhMDM4cTZQanZGRXRtdENCdjhtN1p2L2dYamw1VnZZcE1CK3N1ZTNmSGFqY09yVU9jaG5helg2OVhqVHVnbzMyaExOanpTZUFpSVBuRm9lcUtDSncxQjdOckkrK08zTGFHQkxWczRUQVRCSHpVZFhCbWNoTXRMTjN4N09NQjRzbkRYZTkvb3kzZXl2SUQrcVZOWmZWZWxjNElYQ0NHM3lqNlpUNUZwbnN0c3VINU9vbFJjSkYzWUIvb1BLWXFsTUw0UlkxN3Vqb25aaFIya1BPdkc4d1pOeFdMWXMwaEh3azJGZWtKdjM5dnQxVk1Ednl6ZHgveTh3bGlJMm9IYXJucTVOMDZ6WHQ2M0lPM25xV01vSGZjM2JsSDRmMTRFa2VQT3FSOVdwS1JmR2VlQ2FiTGMyTHRHaUZMay94cGNsNzlYc0xjZGhJMGREOUlzakZtVjhxSEUxY3N2alBQZjdDTW1zSCtqNk1vNXZtcHgwdGp0V1F3eGd0cVQvaGFtWDVZdnZaN3ErUE1zWFNyRHFPS2xaRDNJS2x6d0k1VFhOOUJjNXFwdDZ3VDR6dHFwL1E1OGdEOHRVUnR3ZnVVemU3ZjZNL0NCN09pb1hZUEU0aDhjNHF3UFAzVHJmdTZ3cEFmNEo5YzhBcHZjRGhpbW52MkNqK1FGVEY2cmlBdDhlUVVTaEd3M0NBN0k5Q3ZpQkI5MVViQ3pNSGNFdjNMSEw3amRoUTJjV2ErbDRkb094eEE3TmdBYS9MRmNnL0JuZW9FNHdsQlhSMDQrRU43bG0ySFlkYkpLQlZCQk9iNGJ5SUU2S3BoaUFOQlNSN3d6UFBlUTBsblVoMFVJT2lPOE54QUJXaGNYUW1DaUpWOXYrU2U1d09QRmw5U2Z2NGdTekJ6dzM4QUJvYmJ5aTRwQ2dRUFhRQUNEQkZNajFqd2lmejJ6NW9EdXUvREl5Z1hFU1oxZTZTbW9ETmtBYXhFSXpkNnExUVhiSUtLWTJUTnBZV1dmTGY1M0RyNU5EcFRSTWZsRElDelk0b0QvRGF6T0RVUkxLY0tXQmJLQkxhYjROeVFUb2EyeFIwRzdWSmRKRkQ3aWNYNDh0RjRiZ1crVW5QOHNFYVk4NFhGKzZhUGQxUk9ORGRWMzgxOW4ycS9wTFEvODl1SG83WlRpT25BU0p1ZnM2ZThVRHUrVHl6c2pJeHFjM0t6dC9HL1EwUGhlbVVXS0ltR1dQdnZ6aHh5WENNVDZSUkZDS2FLRk9xendsMWJqUjJITksxQm5tcUNGdFV4Z2Q0MzRVWmVRdllWUXJhMEp3Yy9SMnVnLzQveFQ0Z0RWZEZQY1dPUDUzK0EzTVVobGxOYllZWEs0RnZrejV3dmtOT2hsNVlvcC91aXFsZUNDWElBVU9nZUVsVWVHOG0vSkJZcHcwOFJCQ21QYmVDQkVQT0tQcmw3YklVdnZVWjk4ZTNDT1pIQnJ4Qm8vZWlCciswZ2czK3h6a2dudFlyYkNHRDk0WVhJS2JhdTBhVGJETjAxbnk1a0VXL3hnZ2RSdGZRTjEyM1Y3VVBnNDdiTFFQd2JVTFJ0SU9oak9aL0RpL3pLUmY2OFVRT2dhNmsveWtDRitpZ0lwc2dISHhGUWxDOFhnY0ZEOVMwRlZaOEsreVVlM1VRVXQ4QzlEck02UDBMRXVoaXNVMFR5VzBxc2VWMHZQNzZWRWFpZ2kwVTF1N2hQRVRxbmcvRzlXeFhGWHhxanZtRVQzS1A5bVl4UkhWWGZtV0QvblhZMEZmdDBjVjlHNVM0ZEVCRTc4OWNnQVAycm9lZXNhaWRZSGp5N1pCamR6d2ZHUEJycExobHJTVWxWSUpaSUFXN3NjUVA2SWpUR2NVbkRMY2RpdDhuaWpWakxZK1JIYXBOeHljVEZZWDVweE9TVjFsOWUvZ2M2L0dKaEFvUzdyNHI3ekl0YVR6U1ZmOGs4Z1M0Vm1NYWd2dTBuUVZHNzBtbnFRRnBGcmtoTFJnaEhJSDd0S2tJeGFLblFWK0Q4LzJpU0UxTW9HSWUyUmlyc0VSV1NNZzdmSUVPTkNFaFJkbVpTcVhBWm5uOVNnK0VkZ1dyUTY3bDVSOFZhcTBBMkREL21iUTN3eFNRVXlvVHg1RFVEOHRpZ1Jyc01DdU1nYVRTZllkYkZDREhKK1BWR0owNmI4dFh6ditobkRyRlQwblZhMHBHckJPT08yKzNhalBmOWR0QkdTa1RDUzFhaU1WZjh0VjU0aGJFM1hvOC9UUmJia0NRY1phOEVDL1ptNk5vbUJ3YlprQTBVcjVabC8wZXJacm1pbGwrMXdpZmNHdmlxMlpUc29YRTZtRmI3NEs5REpVWERRamhMbjB1MVlkV29vZ3VMMTYxcUsxMUxUbXJKUW9YK0RaL2xlNytLd0NVVy9BeDl5YkdEUWc4d3pPL1o0d2N1S0hDeEExTzI0cmRtREpoWkpyZkxCcnpleHFBNStITFR4U0NxWEpvTGNZRVViajlISUpQMmpSaWEwdFo1V3JpV094RGIwTWluL3Bwa05IV1F4NzNZK09idlU1T2RlWC81cFF5TkNYWVZ2UytkcUVZL0w3SnRhZXg2YVd1bTJYcGxWVzYvc3JibWFibXlPQnNjZjlkcll2TkRhUFQwSnFCUXJlVCtSclBFV1ZQd3pIZ1Ivdk8xdnppSk9qNWI0YisrL3p0TmpBcDVPVWgzUUF3NGJ2Z1N5RnRxaDhBODhtdGdFNnhFUHoyUTBEYmxrMXoza2dreGpQcEtVOFQvbWczMEcwdVc3aGVFeEdlOXV1UnAwR2t0c0JwM2U0TDFxbWh4ek0rcGxuallMcE16c2h0MTYvVTI3WWJkS01tdzc3QmJVb0ZqSC9TWVlhK04rbXpEdUZ3OGRqUnNEdTNHLzNpVURZMkkvOERoWjE4QWo4am55cVNqTVJqNlJqNkZYUlRrWk1zNjJ6TVorWmJkMEtGNHhIdnZWZE9PeFVEU1MxRXV3QzVmOGhxK1RaUFRiZ1JTejBlOGtOK3dFNk9GM2V2cDlMY1B2aHFrdHo4Zi9oZm40ZjM5RHZFZ25mUHJRL3dNMWVsQzJDMXdodFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiwgdGl0bGU6IFwi5q2j56GuXCIgfSlcclxuXHRcdFx0XHRpZiAodGhpcy5zY29yZSA9PSA5OTkpIHtcclxuXHRcdFx0XHRcdC8vIOaPkOekuua4uOaIj+e7k+adn+i/mOacieensOi1nuS5i+exu+eahFxyXG5cdFx0XHRcdFx0Ly8g5ri45oiP6YeN572uXHJcblx0XHRcdFx0XHR0aGlzLnJlc2V0R2FtZSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9Pnt0aGlzLm1lc3NhZ2VMaXN0LnBvcCgpfSwgMTAwMClcclxuXHRcdFx0XHRFdmVudEJ1cy4kZW1pdChcImNoYW5nZU5vdGVcIiwgMSlcclxuXHRcdFx0fSlcclxuXHRcdFx0RXZlbnRCdXMuJG9uKFwicmVkdWNlU2NvcmVcIiwgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSAwXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLplJnor69cIiwgdmFsdWUpXHJcblx0XHRcdFx0dGhpcy5lcnJvciArPSAxXHJcblx0XHRcdFx0dGhpcy5tZXNzYWdlTGlzdCA9IHRoaXMubWVzc2FnZUxpc3QuY29uY2F0KHsgaW1nOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FNQUFBRDA0Skg1QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQlJVRXhVUlVkd1RLOFpINjhaSDY4Wkg2OFpINjhaSDY4WkgrNFpIKzRaSDY4Wkg2OFpINjhaSDY4Wkg2OFpIKzRaSDY4Wkg2OFpINjhaSCs0WkgrNFpIKzRaSCs0WkgrNFpIKzRaSCs0Wkg2OFpIKzRaSHdhWWxoNEFBQUFaZEZKT1V3QkEzNEF3ejNEUEVMOGdueER2djFDUHI2OGdqM0JBTUlDcE0zWjZBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRVBrbEVRVlI0MnRWYjJiYXJJQXhWVUZ1Y2ErZjgvNGZlTXpNMFFFQnQxdVdoRHk3cTNwS0JFSktpeUJybEpPVkpmUXdoUG45UFVrNWw4YVpSeXBONG9rT2M1TjRzcWtZOUkwTTExVzdvczNpU2hwaDM0TkEzUlBRZkRrMi83Y2QzeitUUnRkdXBuWHBtRGJXTlNsYVo4RjhVMWl0REcxbjhvZDVYRUhMQWRVekpwalMrcmlvYnFmQ3BRN05tOWJIUHErZko4MVh0TktOL3lKYURSRjdXUkphMGJSQU9Nay82NnRXNFNRSnRYMTJHeXRDRWNsaGhWSk5MZmtpMnlHYWxOcis0cmtSZDdOYmJzK3MvdWhUSGIvOVhaSHEwMHRZRlJkNGUrbm9ESFVic3FPNXo4T3RWM3RUMkpEUUdOdjY4MXBmUHFRd3MvR0ZhdjVsTlF4b0R0ZG55bzJKUUtmWlhieFRWV0l2YTBmMVB0MWxVMVhkVWoxUm1PbzRreHhid0t1MndFNzdGWUdncENyZ3h2c1ZBRWZ5V3BYLzN4M2dBT0N6WE13M3JmRjArNTQvV2ZGTVRQYjYxd3ZGdkkveU44UjZIdjV2emJ6Z0QzTHoxaEVGUE9GN0FHcGNZdmp2L3FEOVFhMWdkRVlEMmY4Y0RPR004aHVDUG96di9vT2RQUVZzMExHQU80RnR2Zk1VUHo1OURsdEJoNjNNQlNHR0E0VnRTcS8xV1ZtRWFjZ05JWVlEakE5ekNLSzRMTUd4a2hCUUdQbndZTVVWVFBoOHNESU1DU0dEZ3hRY3cvSUh3ZUdTRlBYOUFBb01BUGx5eEw3V1dvRVVmajBCbkVNS0hCZjNVRmpVQlV6ZEM3M1FZSE1OelVXMDNES0hIclFPQXlpQ01ENERiZTQrRUlTMmRnTUVnaGcrNHdUZXZxbW5ieG9ISUlJby80Z292WGpuWnByRUFpVUVVMzFKQ2MwdW9YQmN0Yk0yK0FvVkJITjgwUTJ2QlovZUJzMGVkZ2NDQWdBOW5UK1FyWEFtNFc5UklZRURBSDkyTjE1RkI0dzBUN3JESnVIdERuOGJXeWlZVzN1U05pLy8wOFcxMVhnblFoSkFxQUVzRzF2WlFGMGxiSEhHZ1c3Y3c3VjRHVCtKckdlQ2h3MndHSDZmWFVIUTdCcDdnNmM4WG5jemxhSXZOR2ZpQ3Q5YjBCQjQzdUFVRGYvZzZhQzBzNDZtRFhBYUJBRjVwTFp3SXliQThCcUVEaE5TS0p5bUpneHdHSVh6dGlxUW1FTXhHcGpNSTRtdkJTMjJGNFlSVUtvTXd2dDRBVDFvZElxZmVOQVlSZkcxN2lrd2dpVUVVUDRkQUFvTTRmaFlCTWdNQ3ZrRkFoSklXV1F3bytJWGVnbjhKRER3RUJMOEkvaDhsNURiRDNSd1J1eXRtMzR6WXQyUDJnSVE5SkdNUFN2bkRjdmFEQ2Z2UmpPTndXbHZPSjNROFg0M3ZacWlRNC9udUNZcEhMRUhoVDlIYzNwT2kyVDFKdFVTU1ZPeHBPdjVFSlh1cWxqMVp6Wit1Wjcrd1lMK3lNWjR5WFZyaDEzYlg5MTNiNFJlWDV6ZGVYTEpmM2ZKZlhyTmYzL01YTUpoRlZLRVNqbVd2RWc1aUVjdGp2eUlXU2huUHNtc1pqN2VRNlh4ZFBsNDZKaGN5UFJJTG1maEx1ZmlMMmRqTCtmZ0xHdmxMT3ZtTFd2bkxldGtMbS9sTHUvbUwyL25MK3d2MkJvY0NhZkZJcExDMnhZTy95WVcvemFkZ2IzUXFjbHE5eEthdFhwKzY2T2xnYzVyZHlwMmEzWXA0dTk5emlMVDdyZDlSbVJzZXZ4YVl0K1dUSkloOW0xNi90Z2ZldHQ5dlpXQnRmUDdod05yNi9hdVNuTTN2bXNWZiszKzlzdjMvSDAzS3Y2STdLWE1YQUFBQUFFbEZUa1N1UW1DQ1wiLCB0aXRsZTogXCLplJnor69cIiB9KVxyXG5cdFx0XHRcdGlmICh0aGlzLnNjb3JlID09IDk5OSkge1xyXG5cdFx0XHRcdFx0Ly8g5o+Q56S65ri45oiP57uT5p2f6L+Y5pyJ6byT5Yqx5LmL57G755qEXHJcblx0XHRcdFx0XHQvLyDmuLjmiI/ph43nva5cclxuXHRcdFx0XHRcdHRoaXMucmVzZXRHYW1lKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e3RoaXMubWVzc2FnZUxpc3QucG9wKCl9LCAxMDAwKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0cmVzZXRHYW1lKCkge1xyXG5cdFx0XHRcdHRoaXMuc2NvcmUgPSAwXHJcblx0XHRcdFx0dGhpcy5lcnJvciA9IDBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmVycm9yIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdGNvbG9yOiByZWQ7XHJcblx0fVxyXG5cclxuXHQudGV4dCB7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogLjA3ZW07XHJcblx0XHRmb250LXNpemU6IDEuM3JlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Lm51bWJlciB7XHJcblx0XHRtYXJnaW4tbGVmdDogNjBycHg7XHJcblx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LnNjb3JlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdGNvbG9yOiBvcmFuZ2U7XHJcblx0fVxyXG5cclxuXHQuYW5pbWF0ZS1jZW50ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAxMjhycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogLTY0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTY0cnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 11 */
/*!******************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/event-bus.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.EventBus = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n//创建EventBus\nvar EventBus = new _vue.default();exports.EventBus = EventBus;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGlhbm9HYW1lL2V2ZW50LWJ1cy5qcyJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlZ1ZSJdLCJtYXBwaW5ncyI6IndGQUFBLHNFO0FBQ0E7QUFDTyxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsWUFBSixFQUFqQixDIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuLy/liJvlu7pFdmVudEJ1c1xuZXhwb3J0IGNvbnN0IEV2ZW50QnVzID0gbmV3IFZ1ZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 13 */
/*!****************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengpai-FadeInOut.vue?vue&type=template&id=42c4259a&scoped=true& */ 14);\n/* harmony import */ var _Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengpai-FadeInOut.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"42c4259a\",\n  null,\n  false,\n  _Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL1BlbmdwYWktRmFkZUluT3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MmM0MjU5YSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BlbmdwYWktRmFkZUluT3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGVuZ3BhaS1GYWRlSW5PdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQyYzQyNTlhXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUGVuZ3BhaS1GYWRlSW5PdXQvUGVuZ3BhaS1GYWRlSW5PdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***********************************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue?vue&type=template&id=42c4259a&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Pengpai-FadeInOut.vue?vue&type=template&id=42c4259a&scoped=true& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_template_id_42c4259a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue?vue&type=template&id=42c4259a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _vm._$s(1, "i", _vm.show)
      ? _c(
          "view",
          {
            ref: "ani",
            staticClass: _vm._$s(1, "sc", "message"),
            style: _vm._$s(1, "s", {
              top: _vm.top + "rpx",
              left: _vm.left + "%"
            }),
            attrs: {
              animation: _vm._$s(1, "a-animation", _vm.animationData),
              _i: 1
            }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(
                  2,
                  "sc",
                  "round bg-gradual-orange flex justify-start shadow"
                ),
                attrs: { _i: 2 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(3, "sc", "cu-avatar cu-a-sm round"),
                  style: _vm._$s(3, "s", {
                    backgroundImage: "url(" + _vm.info.img + ")"
                  }),
                  attrs: { _i: 3 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(
                      4,
                      "sc",
                      "padding-lr-sm flex align-center"
                    ),
                    attrs: { _i: 4 }
                  },
                  [
                    _c(
                      "text",
                      {
                        staticClass: _vm._$s(5, "sc", "text-sm"),
                        attrs: { _i: 5 }
                      },
                      [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.info.title)))]
                    )
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*****************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Pengpai-FadeInOut.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Pengpai_FadeInOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRxQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZW5ncGFpLUZhZGVJbk91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZW5ncGFpLUZhZGVJbk91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/Pengpai-FadeInOut/Pengpai-FadeInOut.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n\n\n\n{\n  name: 'PengpaiFadeInOut',\n  props: {\n    //持续时间\n    duration: {\n      type: Number,\n      default: 2600 },\n\n    //停留时间\n    wait: {\n      type: Number,\n      default: 3000 },\n\n    //顶部距离px\n    top: {\n      type: Number,\n      default: 350 },\n\n    //左边距离px\n    left: {\n      type: Number,\n      default: 10 },\n\n    //动画半径\n    radius: {\n      type: Number,\n      default: 30 },\n\n    //数据\n    info: {\n      type: [Array, Object],\n      default: function _default() {\n        return [];\n      } } },\n\n\n  data: function data() {\n    return {\n      animationData: {},\n      animationNumber: {},\n      show: true };\n\n  },\n  mounted: function mounted() {\n    this.donghua();\n  },\n  watch: {},\n\n\n  methods: {\n    donghua: function donghua() {var _this = this;\n      //进入\n\n      this.animationData = uni.\n      createAnimation({\n        duration: this.duration / 2,\n        timingFunction: 'ease' }).\n\n      top(this.top - this.radius).\n      opacity(0.9).\n      step().\n      export();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      //停留\n      setTimeout(function () {\n        //消失\n\n        _this.animationData = uni.\n        createAnimation({\n          duration: _this.duration / 2,\n          timingFunction: 'ease' }).\n\n        top(_this.top - _this.radius * 2).\n        opacity(0).\n        step().\n        export();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      }, this.wait);\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9QZW5ncGFpLUZhZGVJbk91dC9QZW5ncGFpLUZhZGVJbk91dC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsbUJBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQVpBOztBQWdCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQWpCQTs7QUFxQkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBM0JBLEVBRkE7OztBQW9DQSxNQXBDQSxrQkFvQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7QUFHQSxnQkFIQTs7QUFLQSxHQTFDQTtBQTJDQSxTQTNDQSxxQkEyQ0E7QUFDQTtBQUNBLEdBN0NBO0FBOENBLFdBOUNBOzs7QUFpREE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFEQSxDQUNBO0FBQ0EsbUNBREE7QUFFQSw4QkFGQSxFQURBOztBQUtBLFNBTEEsQ0FLQSxzQkFMQTtBQU1BLGFBTkEsQ0FNQSxHQU5BO0FBT0EsVUFQQTtBQVFBLFlBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQURBLENBQ0E7QUFDQSxzQ0FEQTtBQUVBLGdDQUZBLEVBREE7O0FBS0EsV0FMQSxDQUtBLDRCQUxBO0FBTUEsZUFOQSxDQU1BLENBTkE7QUFPQSxZQVBBO0FBUUEsY0FSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxPQTlCQSxFQThCQSxTQTlCQTtBQStCQSxLQWhFQSxFQWpEQSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0cmVmPVwiYW5pXCJcclxuXHRcdFx0OmFuaW1hdGlvbj1cImFuaW1hdGlvbkRhdGFcIlxyXG5cdFx0XHRjbGFzcz1cIm1lc3NhZ2VcIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7IHRvcDogdG9wICsgJ3JweCcsIGxlZnQ6IGxlZnQgKyAnJScgfVwiXHJcblx0XHRcdHYtaWY9XCJzaG93XCJcclxuXHRcdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZCBiZy1ncmFkdWFsLW9yYW5nZSBmbGV4IGp1c3RpZnktc3RhcnQgc2hhZG93XCIgc3R5bGU9XCJwYWRkaW5nOiAzcHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgY3UtYS1zbSByb3VuZFwiIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW5mby5pbWd9KWAgfVwiPlxyXG5cdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImluZm8uaW1nXCIgY2xhc3M9XCJhdmF0YXJpbWdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFkZGluZy1sci1zbSBmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXNtXCI+e3sgaW5mby50aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyAjaWZkZWYgQVBQLU5WVUVcclxuY29uc3QgYW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpO1xyXG4vLyAjZW5kaWZcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdQZW5ncGFpRmFkZUluT3V0JyxcclxuXHRwcm9wczoge1xyXG5cdFx0Ly/mjIHnu63ml7bpl7RcclxuXHRcdGR1cmF0aW9uOiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMjYwMFxyXG5cdFx0fSxcclxuXHRcdC8v5YGc55WZ5pe26Ze0XHJcblx0XHR3YWl0OiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMzAwMFxyXG5cdFx0fSxcclxuXHRcdC8v6aG26YOo6Led56a7cHhcclxuXHRcdHRvcDoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDM1MFxyXG5cdFx0fSxcclxuXHRcdC8v5bem6L656Led56a7cHhcclxuXHRcdGxlZnQ6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAxMFxyXG5cdFx0fSxcclxuXHRcdC8v5Yqo55S75Y2K5b6EXHJcblx0XHRyYWRpdXM6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAzMFxyXG5cdFx0fSxcclxuXHRcdC8v5pWw5o2uXHJcblx0XHRpbmZvOiB7XHJcblx0XHRcdHR5cGU6IFtBcnJheSxPYmplY3RdLFxyXG5cdFx0XHRkZWZhdWx0OiAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFtdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhbmltYXRpb25EYXRhOiB7fSxcclxuXHRcdFx0YW5pbWF0aW9uTnVtYmVyOnt9LFxyXG5cdFx0XHRzaG93OiB0cnVlXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpe1xyXG5cdFx0dGhpcy5kb25naHVhKCk7XHJcblx0fSxcclxuXHR3YXRjaDp7XHJcblx0XHRcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGRvbmdodWEoKSB7XHJcblx0XHRcdC8v6L+b5YWlXHJcblx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdFx0dGhpcy5hbmltYXRpb25EYXRhID0gdW5pXHJcblx0XHRcdFx0LmNyZWF0ZUFuaW1hdGlvbih7XHJcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5kdXJhdGlvbiAvIDIsXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudG9wKHRoaXMudG9wIC0gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0Lm9wYWNpdHkoMC45KVxyXG5cdFx0XHRcdC5zdGVwKClcclxuXHRcdFx0XHQuZXhwb3J0KCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdGlmICghdGhpcy4kcmVmc1snYW5pJ10pIHJldHVybjtcclxuXHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oXHJcblx0XHRcdFx0dGhpcy4kcmVmc1snYW5pJ10ucmVmLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke3RoaXMucmFkaXVzLzJ9cHgpYCxcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLzIsXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcblx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcclxuXHRcdFx0XHRcdGRlbGF5OiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdC8v5YGc55WZXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8v5raI5aSxXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uRGF0YSA9IHVuaVxyXG5cdFx0XHRcdFx0LmNyZWF0ZUFuaW1hdGlvbih7XHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uIC8gMixcclxuXHRcdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC50b3AodGhpcy50b3AgLSB0aGlzLnJhZGl1cyAqIDIpXHJcblx0XHRcdFx0XHQub3BhY2l0eSgwKVxyXG5cdFx0XHRcdFx0LnN0ZXAoKVxyXG5cdFx0XHRcdFx0LmV4cG9ydCgpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdGlmICghdGhpcy4kcmVmc1snYW5pJ10pIHJldHVybjtcclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbihcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnNbJ2FuaSddLnJlZixcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHt0aGlzLnJhZGl1c31weClgLFxyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IHRoaXMuZHVyYXRpb24vMixcclxuXHRcdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG5cdFx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LCB0aGlzLndhaXQpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubWVzc2FnZSB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDk5OTk5O1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuLnJvdW5kIHtcclxuXHRib3JkZXItcmFkaXVzOiA1MDAwcHg7XHJcbn1cclxuLmJnLWdyYWR1YWwtb3JhbmdlIHtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY5NzAwLCAjZWQxYzI0KTtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZmY5NzAwLCAjZWQxYzI0KTtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uc2hhZG93IHtcclxuXHRib3gtc2hhZG93OiA0cHggNHB4IDVweCByZ2JhKDIxNywgMTA5LCAyNiwgMC4yKTtcclxufVxyXG4uZmxleCB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uanVzdGlmeS1zdGFydCB7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5jdS1hdmF0YXIge1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4vKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuLmF2YXRhcmltZyB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLyogI2VuZGlmICovXHJcblxyXG4uY3UtYS1zbSB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5wYWRkaW5nLWxyLXNtIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwdXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwdXB4O1xyXG59XHJcbi5hbGlnbi1jZW50ZXIge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LXhzIHtcclxuXHRtYXJnaW4tbGVmdDogMTB1cHg7XHJcbn1cclxuLnRleHQtYm9sZCB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hcmdpbi1sci1zbSB7XHJcblx0bWFyZ2luLWxlZnQ6IDIwdXB4O1xyXG5cdG1hcmdpbi1yaWdodDogMjB1cHg7XHJcbn1cclxuLnRleHQtc20ge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
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
/* 19 */
/*!************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/ShowStave/ShowStave.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowStave.vue?vue&type=template&id=175d0fac&scoped=true& */ 20);\n/* harmony import */ var _ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowStave.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"175d0fac\",\n  null,\n  false,\n  _ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/ShowStave/ShowStave.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL1Nob3dTdGF2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc1ZDBmYWMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG93U3RhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93U3RhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE3NWQwZmFjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2hvd1N0YXZlL1Nob3dTdGF2ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/ShowStave/ShowStave.vue?vue&type=template&id=175d0fac&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./ShowStave.vue?vue&type=template&id=175d0fac&scoped=true& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_template_id_175d0fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/ShowStave/ShowStave.vue?vue&type=template&id=175d0fac&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      attrs: {
        src: _vm._$s(1, "a-src", __webpack_require__(/*! ../../static/img/stave.jpg */ 22)),
        _i: 1
      }
    }),
    _c("image", {
      style: _vm._$s(2, "s", { top: _vm.noteTop }),
      attrs: {
        src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/img/note.gif */ 23)),
        _i: 2
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!**********************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/static/img/stave.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/img/stave.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1nL3N0YXZlLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/static/img/note.gif ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/img/note.gif\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaW1nL25vdGUuZ2lmXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/ShowStave/ShowStave.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./ShowStave.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ShowStave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9xQixDQUFnQixtc0JBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93U3RhdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvd1N0YXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/ShowStave/ShowStave.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\nvar _NoteConfig = _interopRequireDefault(__webpack_require__(/*! ../../config/NoteConfig.js */ 26));\nvar _eventBus = __webpack_require__(/*! ../../pages/pianoGame/event-bus.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\nvar _default = { name: \"ShowStave\", data: function data() {return { status: \"\", noteTop: \"0%\" };\n\n  },\n  mounted: function mounted() {\n    var that = this;\n    _eventBus.EventBus.$on(\"keyboardTouch\", function (value) {\n      if (value == that.status['do']) {\n        // console.log(\"加分\")\n        _eventBus.EventBus.$emit(\"addScore\", 1); // 告诉分数组件按键正确\n      } else if (that.status.length == 0) {\n        // console.log(\"无效按键\")\n      } else {\n        // console.log(\"错误\")\n        _eventBus.EventBus.$emit(\"reduceScore\", 1); // 告诉分数组件按键错误\n      }\n    });\n    _eventBus.EventBus.$on(\"changeNote\", function (value) {\n      that.getRandomTop();\n    });\n    setTimeout(that.getRandomTop(), 3000);\n  },\n  methods: {\n    getRandomTop: function getRandomTop() {// 设置随机 class\n      var item = _NoteConfig.default.getRandomNoteItem();\n      this.noteTop = item['pos'];\n      this.status = item;\n      // console.log(\"getRandomTop\", item)\n      _eventBus.EventBus.$emit(\"currentStep\", item['step']); // 告诉键盘组件当前调号\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9TaG93U3RhdmUvU2hvd1N0YXZlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBO0FBQ0Esa0Y7Ozs7Ozs7ZUFFQSxFQUNBLGlCQURBLEVBRUEsSUFGQSxrQkFFQSxDQUNBLFNBQ0EsVUFEQSxFQUVBLGFBRkE7O0FBSUEsR0FQQTtBQVFBLFNBUkEscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUZBLENBRUE7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsbURBRkEsQ0FFQTtBQUNBO0FBQ0EsS0FWQTtBQVdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQSxHQXpCQTtBQTBCQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFMQSxDQUtBO0FBQ0EsS0FQQSxFQTFCQSxFIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA0NHZoO1wiPlxyXG5cdFx0PGltYWdlIHN0eWxlPVwiaGVpZ2h0OiA0NHZoO1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvc3RhdmUuanBnXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHJcblx0XHQ8aW1hZ2Ugc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA5LjY3OHZoOy13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztsZWZ0OiA1MHZ3O1wiIDpzdHlsZT1cInt0b3A6IG5vdGVUb3B9XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy9ub3RlLmdpZlwiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IE5vdGVDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9Ob3RlQ29uZmlnLmpzXCJcclxuXHRpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuLi8uLi9wYWdlcy9waWFub0dhbWUvZXZlbnQtYnVzLmpzXCJcclxuXHRcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIlNob3dTdGF2ZVwiLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiXCIsXHJcblx0XHRcdFx0bm90ZVRvcDogXCIwJVwiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdEV2ZW50QnVzLiRvbihcImtleWJvYXJkVG91Y2hcIiwgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHZhbHVlID09IHRoYXQuc3RhdHVzWydkbyddKSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIuWKoOWIhlwiKVxyXG5cdFx0XHRcdFx0RXZlbnRCdXMuJGVtaXQoXCJhZGRTY29yZVwiLCAxKVx0Ly8g5ZGK6K+J5YiG5pWw57uE5Lu25oyJ6ZSu5q2j56GuXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnN0YXR1cy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLml6DmlYjmjInplK5cIilcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLplJnor69cIilcclxuXHRcdFx0XHRcdEV2ZW50QnVzLiRlbWl0KFwicmVkdWNlU2NvcmVcIiwgMSlcdC8vIOWRiuivieWIhuaVsOe7hOS7tuaMiemUrumUmeivr1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0RXZlbnRCdXMuJG9uKFwiY2hhbmdlTm90ZVwiLCAodmFsdWUpID0+IHtcclxuXHRcdFx0XHR0aGF0LmdldFJhbmRvbVRvcCgpXHJcblx0XHRcdH0pXHJcblx0XHRcdHNldFRpbWVvdXQodGhhdC5nZXRSYW5kb21Ub3AoKSwgMzAwMClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldFJhbmRvbVRvcCgpIHtcdC8vIOiuvue9rumaj+acuiBjbGFzc1xyXG5cdFx0XHRcdGxldCBpdGVtID0gTm90ZUNvbmZpZy5nZXRSYW5kb21Ob3RlSXRlbSgpXHJcblx0XHRcdFx0dGhpcy5ub3RlVG9wID0gaXRlbVsncG9zJ11cclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IGl0ZW1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImdldFJhbmRvbVRvcFwiLCBpdGVtKVxyXG5cdFx0XHRcdEV2ZW50QnVzLiRlbWl0KFwiY3VycmVudFN0ZXBcIiwgaXRlbVsnc3RlcCddKVx0Ly8g5ZGK6K+J6ZSu55uY57uE5Lu25b2T5YmN6LCD5Y+3XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0QGltcG9ydCBcIlNob3dTdGF2ZS5jc3NcIjtcclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/config/NoteConfig.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var rightNotes = [\n{ step: 6, do: \"C\", file: \"C6\", pos: \"-2.8%\", pitchName: \"do\" },\n{ step: 5, do: \"B\", file: \"B5\", pos: \"0%\", pitchName: \"si\" },\n{ step: 5, do: \"A\", file: \"A5\", pos: \"2.8%\", pitchName: \"la\" },\n{ step: 5, do: \"G\", file: \"G5\", pos: \"5.6%\", pitchName: \"sol\" },\n{ step: 5, do: \"F\", file: \"F5\", pos: \"8.4%\", pitchName: \"fa\" },\n{ step: 5, do: \"E\", file: \"E5\", pos: \"11.1%\", pitchName: \"mi\" },\n{ step: 5, do: \"D\", file: \"D5\", pos: \"13.9%\", pitchName: \"re\" },\n{ step: 5, do: \"C\", file: \"C5\", pos: \"16.7%\", pitchName: \"do\" },\n{ step: 4, do: \"B\", file: \"B4\", pos: \"19.6%\", pitchName: \"si\" },\n{ step: 4, do: \"A\", file: \"A4\", pos: \"22.2%\", pitchName: \"la\" },\n{ step: 4, do: \"G\", file: \"G4\", pos: \"25.0%\", pitchName: \"sol\" },\n{ step: 4, do: \"F\", file: \"F4\", pos: \"27.8%\", pitchName: \"fa\" },\n{ step: 4, do: \"E\", file: \"E4\", pos: \"30.5%\", pitchName: \"mi\" },\n{ step: 4, do: \"D\", file: \"D4\", pos: \"33.3%\", pitchName: \"re\" },\n{ step: 4, do: \"C\", file: \"C4\", pos: \"36.0%\", pitchName: \"do\" },\n{ step: 3, do: \"B\", file: \"B3\", pos: \"38.8%\", pitchName: \"si\" },\n{ step: 3, do: \"A\", file: \"A3\", pos: \"41.6%\", pitchName: \"la\" }];\n\n\nvar leftNotes = [\n{ step: 4, do: \"E\", file: \"E4\", pos: \"52.8%\", pitchName: \"mi\" },\n{ step: 4, do: \"D\", file: \"D4\", pos: \"55.6%\", pitchName: \"re\" },\n{ step: 4, do: \"C\", file: \"C4\", pos: \"58.4%\", pitchName: \"do\" },\n{ step: 3, do: \"B\", file: \"B3\", pos: \"61.1%\", pitchName: \"si\" },\n{ step: 3, do: \"A\", file: \"A3\", pos: \"63.9%\", pitchName: \"la\" },\n{ step: 3, do: \"G\", file: \"G3\", pos: \"66.7%\", pitchName: \"sol\" },\n{ step: 3, do: \"F\", file: \"F3\", pos: \"69.5%\", pitchName: \"fa\" },\n{ step: 3, do: \"E\", file: \"E3\", pos: \"72.2%\", pitchName: \"mi\" },\n{ step: 3, do: \"D\", file: \"D3\", pos: \"75.0%\", pitchName: \"re\" },\n{ step: 3, do: \"C\", file: \"C3\", pos: \"77.8%\", pitchName: \"do\" },\n{ step: 2, do: \"B\", file: \"B2\", pos: \"80.6%\", pitchName: \"si\" },\n{ step: 2, do: \"A\", file: \"A2\", pos: \"83.3%\", pitchName: \"la\" },\n{ step: 2, do: \"G\", file: \"G2\", pos: \"86.1%\", pitchName: \"sol\" },\n{ step: 2, do: \"F\", file: \"F2\", pos: \"88.9%\", pitchName: \"fa\" },\n{ step: 2, do: \"E\", file: \"E2\", pos: \"91.7%\", pitchName: \"mi\" },\n{ step: 2, do: \"D\", file: \"D2\", pos: \"94.4%\", pitchName: \"re\" },\n{ step: 2, do: \"C\", file: \"C2\", pos: \"97.2%\", pitchName: \"do\" }];\n\n\nvar getRandomNoteItem = function getRandomNoteItem() {\n  var length = rightNotes.length;\n  var index = Math.floor(Math.random() * length);\n  if (Math.random() > 0.5) {\n    // 右手\n    return rightNotes[index];\n  } else {\n    // 左手\n    return leftNotes[index];\n  }\n};var _default =\n\n{\n  getRandomNoteItem: getRandomNoteItem,\n  leftNotes: leftNotes,\n  rightNotes: rightNotes };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL05vdGVDb25maWcuanMiXSwibmFtZXMiOlsicmlnaHROb3RlcyIsInN0ZXAiLCJkbyIsImZpbGUiLCJwb3MiLCJwaXRjaE5hbWUiLCJsZWZ0Tm90ZXMiLCJnZXRSYW5kb21Ob3RlSXRlbSIsImxlbmd0aCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoidUZBQUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2xCLEVBQUNDLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBRGtCO0FBRWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxJQUFwQyxFQUEwQ0MsU0FBUyxFQUFFLElBQXJELEVBRmtCO0FBR2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxNQUFwQyxFQUE0Q0MsU0FBUyxFQUFFLElBQXZELEVBSGtCO0FBSWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxNQUFwQyxFQUE0Q0MsU0FBUyxFQUFFLEtBQXZELEVBSmtCO0FBS2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxNQUFwQyxFQUE0Q0MsU0FBUyxFQUFFLElBQXZELEVBTGtCO0FBTWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBTmtCO0FBT2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBUGtCO0FBUWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBUmtCO0FBU2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBVGtCO0FBVWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBVmtCO0FBV2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLEtBQXhELEVBWGtCO0FBWWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBWmtCO0FBYWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBYmtCO0FBY2xCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBZGtCO0FBZWxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBZmtCO0FBZ0JsQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQWhCa0I7QUFpQmxCLEVBQUNKLElBQUksRUFBRSxDQUFQLEVBQVVDLEVBQUUsRUFBRSxHQUFkLEVBQW1CQyxJQUFJLEVBQUUsSUFBekIsRUFBK0JDLEdBQUcsRUFBRSxPQUFwQyxFQUE2Q0MsU0FBUyxFQUFFLElBQXhELEVBakJrQixDQUFuQjs7O0FBb0JBLElBQU1DLFNBQVMsR0FBRztBQUNqQixFQUFDTCxJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQURpQjtBQUVqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQUZpQjtBQUdqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQUhpQjtBQUlqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQUppQjtBQUtqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQUxpQjtBQU1qQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxLQUF4RCxFQU5pQjtBQU9qQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVBpQjtBQVFqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVJpQjtBQVNqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVRpQjtBQVVqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVZpQjtBQVdqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVhpQjtBQVlqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQVppQjtBQWFqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxLQUF4RCxFQWJpQjtBQWNqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQWRpQjtBQWVqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQWZpQjtBQWdCakIsRUFBQ0osSUFBSSxFQUFFLENBQVAsRUFBVUMsRUFBRSxFQUFFLEdBQWQsRUFBbUJDLElBQUksRUFBRSxJQUF6QixFQUErQkMsR0FBRyxFQUFFLE9BQXBDLEVBQTZDQyxTQUFTLEVBQUUsSUFBeEQsRUFoQmlCO0FBaUJqQixFQUFDSixJQUFJLEVBQUUsQ0FBUCxFQUFVQyxFQUFFLEVBQUUsR0FBZCxFQUFtQkMsSUFBSSxFQUFFLElBQXpCLEVBQStCQyxHQUFHLEVBQUUsT0FBcEMsRUFBNkNDLFNBQVMsRUFBRSxJQUF4RCxFQWpCaUIsQ0FBbEI7OztBQW9CQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDcEMsTUFBSUMsTUFBTSxHQUFHUixVQUFVLENBQUNRLE1BQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixNQUEzQixDQUFaO0FBQ0EsTUFBSUUsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3hCO0FBQ0EsV0FBT1osVUFBVSxDQUFDUyxLQUFELENBQWpCO0FBQ0EsR0FIRCxNQUdPO0FBQ047QUFDQSxXQUFPSCxTQUFTLENBQUNHLEtBQUQsQ0FBaEI7QUFDQTtBQUNELENBVkQsQzs7QUFZZTtBQUNkRixtQkFBaUIsRUFBakJBLGlCQURjO0FBRWRELFdBQVMsRUFBVEEsU0FGYztBQUdkTixZQUFVLEVBQVZBLFVBSGMsRSIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJpZ2h0Tm90ZXMgPSBbXHJcblx0e3N0ZXA6IDYsIGRvOiBcIkNcIiwgZmlsZTogXCJDNlwiLCBwb3M6IFwiLTIuOCVcIiwgcGl0Y2hOYW1lOiBcImRvXCJ9LFxyXG5cdHtzdGVwOiA1LCBkbzogXCJCXCIsIGZpbGU6IFwiQjVcIiwgcG9zOiBcIjAlXCIsIHBpdGNoTmFtZTogXCJzaVwifSxcclxuXHR7c3RlcDogNSwgZG86IFwiQVwiLCBmaWxlOiBcIkE1XCIsIHBvczogXCIyLjglXCIsIHBpdGNoTmFtZTogXCJsYVwifSxcclxuXHR7c3RlcDogNSwgZG86IFwiR1wiLCBmaWxlOiBcIkc1XCIsIHBvczogXCI1LjYlXCIsIHBpdGNoTmFtZTogXCJzb2xcIn0sXHJcblx0e3N0ZXA6IDUsIGRvOiBcIkZcIiwgZmlsZTogXCJGNVwiLCBwb3M6IFwiOC40JVwiLCBwaXRjaE5hbWU6IFwiZmFcIn0sXHJcblx0e3N0ZXA6IDUsIGRvOiBcIkVcIiwgZmlsZTogXCJFNVwiLCBwb3M6IFwiMTEuMSVcIiwgcGl0Y2hOYW1lOiBcIm1pXCJ9LFxyXG5cdHtzdGVwOiA1LCBkbzogXCJEXCIsIGZpbGU6IFwiRDVcIiwgcG9zOiBcIjEzLjklXCIsIHBpdGNoTmFtZTogXCJyZVwifSxcclxuXHR7c3RlcDogNSwgZG86IFwiQ1wiLCBmaWxlOiBcIkM1XCIsIHBvczogXCIxNi43JVwiLCBwaXRjaE5hbWU6IFwiZG9cIn0sXHJcblx0e3N0ZXA6IDQsIGRvOiBcIkJcIiwgZmlsZTogXCJCNFwiLCBwb3M6IFwiMTkuNiVcIiwgcGl0Y2hOYW1lOiBcInNpXCJ9LFxyXG5cdHtzdGVwOiA0LCBkbzogXCJBXCIsIGZpbGU6IFwiQTRcIiwgcG9zOiBcIjIyLjIlXCIsIHBpdGNoTmFtZTogXCJsYVwifSxcclxuXHR7c3RlcDogNCwgZG86IFwiR1wiLCBmaWxlOiBcIkc0XCIsIHBvczogXCIyNS4wJVwiLCBwaXRjaE5hbWU6IFwic29sXCJ9LFxyXG5cdHtzdGVwOiA0LCBkbzogXCJGXCIsIGZpbGU6IFwiRjRcIiwgcG9zOiBcIjI3LjglXCIsIHBpdGNoTmFtZTogXCJmYVwifSxcclxuXHR7c3RlcDogNCwgZG86IFwiRVwiLCBmaWxlOiBcIkU0XCIsIHBvczogXCIzMC41JVwiLCBwaXRjaE5hbWU6IFwibWlcIn0sXHJcblx0e3N0ZXA6IDQsIGRvOiBcIkRcIiwgZmlsZTogXCJENFwiLCBwb3M6IFwiMzMuMyVcIiwgcGl0Y2hOYW1lOiBcInJlXCJ9LFxyXG5cdHtzdGVwOiA0LCBkbzogXCJDXCIsIGZpbGU6IFwiQzRcIiwgcG9zOiBcIjM2LjAlXCIsIHBpdGNoTmFtZTogXCJkb1wifSxcclxuXHR7c3RlcDogMywgZG86IFwiQlwiLCBmaWxlOiBcIkIzXCIsIHBvczogXCIzOC44JVwiLCBwaXRjaE5hbWU6IFwic2lcIn0sXHJcblx0e3N0ZXA6IDMsIGRvOiBcIkFcIiwgZmlsZTogXCJBM1wiLCBwb3M6IFwiNDEuNiVcIiwgcGl0Y2hOYW1lOiBcImxhXCJ9XHJcbl1cclxuXHJcbmNvbnN0IGxlZnROb3RlcyA9IFtcclxuXHR7c3RlcDogNCwgZG86IFwiRVwiLCBmaWxlOiBcIkU0XCIsIHBvczogXCI1Mi44JVwiLCBwaXRjaE5hbWU6IFwibWlcIn0sXHJcblx0e3N0ZXA6IDQsIGRvOiBcIkRcIiwgZmlsZTogXCJENFwiLCBwb3M6IFwiNTUuNiVcIiwgcGl0Y2hOYW1lOiBcInJlXCJ9LFxyXG5cdHtzdGVwOiA0LCBkbzogXCJDXCIsIGZpbGU6IFwiQzRcIiwgcG9zOiBcIjU4LjQlXCIsIHBpdGNoTmFtZTogXCJkb1wifSxcclxuXHR7c3RlcDogMywgZG86IFwiQlwiLCBmaWxlOiBcIkIzXCIsIHBvczogXCI2MS4xJVwiLCBwaXRjaE5hbWU6IFwic2lcIn0sXHJcblx0e3N0ZXA6IDMsIGRvOiBcIkFcIiwgZmlsZTogXCJBM1wiLCBwb3M6IFwiNjMuOSVcIiwgcGl0Y2hOYW1lOiBcImxhXCJ9LFxyXG5cdHtzdGVwOiAzLCBkbzogXCJHXCIsIGZpbGU6IFwiRzNcIiwgcG9zOiBcIjY2LjclXCIsIHBpdGNoTmFtZTogXCJzb2xcIn0sXHJcblx0e3N0ZXA6IDMsIGRvOiBcIkZcIiwgZmlsZTogXCJGM1wiLCBwb3M6IFwiNjkuNSVcIiwgcGl0Y2hOYW1lOiBcImZhXCJ9LFxyXG5cdHtzdGVwOiAzLCBkbzogXCJFXCIsIGZpbGU6IFwiRTNcIiwgcG9zOiBcIjcyLjIlXCIsIHBpdGNoTmFtZTogXCJtaVwifSxcclxuXHR7c3RlcDogMywgZG86IFwiRFwiLCBmaWxlOiBcIkQzXCIsIHBvczogXCI3NS4wJVwiLCBwaXRjaE5hbWU6IFwicmVcIn0sXHJcblx0e3N0ZXA6IDMsIGRvOiBcIkNcIiwgZmlsZTogXCJDM1wiLCBwb3M6IFwiNzcuOCVcIiwgcGl0Y2hOYW1lOiBcImRvXCJ9LFxyXG5cdHtzdGVwOiAyLCBkbzogXCJCXCIsIGZpbGU6IFwiQjJcIiwgcG9zOiBcIjgwLjYlXCIsIHBpdGNoTmFtZTogXCJzaVwifSxcclxuXHR7c3RlcDogMiwgZG86IFwiQVwiLCBmaWxlOiBcIkEyXCIsIHBvczogXCI4My4zJVwiLCBwaXRjaE5hbWU6IFwibGFcIn0sXHJcblx0e3N0ZXA6IDIsIGRvOiBcIkdcIiwgZmlsZTogXCJHMlwiLCBwb3M6IFwiODYuMSVcIiwgcGl0Y2hOYW1lOiBcInNvbFwifSxcclxuXHR7c3RlcDogMiwgZG86IFwiRlwiLCBmaWxlOiBcIkYyXCIsIHBvczogXCI4OC45JVwiLCBwaXRjaE5hbWU6IFwiZmFcIn0sXHJcblx0e3N0ZXA6IDIsIGRvOiBcIkVcIiwgZmlsZTogXCJFMlwiLCBwb3M6IFwiOTEuNyVcIiwgcGl0Y2hOYW1lOiBcIm1pXCJ9LFxyXG5cdHtzdGVwOiAyLCBkbzogXCJEXCIsIGZpbGU6IFwiRDJcIiwgcG9zOiBcIjk0LjQlXCIsIHBpdGNoTmFtZTogXCJyZVwifSxcclxuXHR7c3RlcDogMiwgZG86IFwiQ1wiLCBmaWxlOiBcIkMyXCIsIHBvczogXCI5Ny4yJVwiLCBwaXRjaE5hbWU6IFwiZG9cIn1cclxuXVxyXG5cclxuY29uc3QgZ2V0UmFuZG9tTm90ZUl0ZW0gPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGVuZ3RoID0gcmlnaHROb3Rlcy5sZW5ndGhcclxuXHR2YXIgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpXHJcblx0aWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuXHRcdC8vIOWPs+aJi1xyXG5cdFx0cmV0dXJuIHJpZ2h0Tm90ZXNbaW5kZXhdXHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIOW3puaJi1xyXG5cdFx0cmV0dXJuIGxlZnROb3Rlc1tpbmRleF1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRnZXRSYW5kb21Ob3RlSXRlbSxcclxuXHRsZWZ0Tm90ZXMsXHJcblx0cmlnaHROb3Rlc1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!****************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/KeyboardComponent/KeyboardComponent.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardComponent.vue?vue&type=template&id=81ef2f9c& */ 28);\n/* harmony import */ var _KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardComponent.vue?vue&type=script&lang=js& */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/KeyboardComponent/KeyboardComponent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL0tleWJvYXJkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MWVmMmY5YyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0tleWJvYXJkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vS2V5Ym9hcmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0tleWJvYXJkQ29tcG9uZW50L0tleWJvYXJkQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***********************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/KeyboardComponent/KeyboardComponent.vue?vue&type=template&id=81ef2f9c& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./KeyboardComponent.vue?vue&type=template&id=81ef2f9c& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_template_id_81ef2f9c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/KeyboardComponent/KeyboardComponent.vue?vue&type=template&id=81ef2f9c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { attrs: { id: "pianoBoard", _i: 0 } }, [
    _c("view", { attrs: { id: "normal", _i: 1 } }, [
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "keyDown keyC"),
          attrs: { _i: 2 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(3, "sc", "keyDownName"),
            attrs: { _i: 3 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(4, "sc", "keyDown keyD"),
          attrs: { _i: 4 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(5, "sc", "keyDownName"),
            attrs: { _i: 5 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(6, "sc", "keyDown keyE"),
          attrs: { _i: 6 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(7, "sc", "keyDownName"),
            attrs: { _i: 7 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(8, "sc", "keyDown keyF"),
          attrs: { _i: 8 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(9, "sc", "keyDownName"),
            attrs: { _i: 9 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(10, "sc", "keyDown keyG"),
          attrs: { _i: 10 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(11, "sc", "keyDownName"),
            attrs: { _i: 11 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(12, "sc", "keyDown keyA"),
          attrs: { _i: 12 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(13, "sc", "keyDownName"),
            attrs: { _i: 13 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(14, "sc", "keyDown keyB"),
          attrs: { _i: 14 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(15, "sc", "keyDownName"),
            attrs: { _i: 15 }
          })
        ]
      )
    ]),
    _c("view", { attrs: { id: "higher", _i: 16 } }, [
      _c(
        "view",
        {
          staticClass: _vm._$s(17, "sc", "keyUp keyUpC"),
          attrs: { _i: 17 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(18, "sc", "keyUpName"),
            attrs: { _i: 18 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(19, "sc", "keyUp keyUpD"),
          attrs: { _i: 19 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(20, "sc", "keyUpName"),
            attrs: { _i: 20 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(21, "sc", "keyUp keyUpF"),
          attrs: { _i: 21 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(22, "sc", "keyUpName"),
            attrs: { _i: 22 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(23, "sc", "keyUp keyUpG"),
          attrs: { _i: 23 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(24, "sc", "keyUpName"),
            attrs: { _i: 24 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(25, "sc", "keyUp keyUpA"),
          attrs: { _i: 25 },
          on: {
            touchstart: function($event) {
              return _vm.mouseStartClick($event)
            },
            touchend: function($event) {
              return _vm.mouseEndClick($event)
            }
          }
        },
        [
          _c("text", {
            staticClass: _vm._$s(26, "sc", "keyUpName"),
            attrs: { _i: 26 }
          })
        ]
      )
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!*****************************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/components/KeyboardComponent/KeyboardComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./KeyboardComponent.vue?vue&type=script&lang=js& */ 31);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_KeyboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRxQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9LZXlib2FyZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9LZXlib2FyZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/components/KeyboardComponent/KeyboardComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _eventBus = __webpack_require__(/*! ../../pages/pianoGame/event-bus.js */ 11);\n\n\nvar _KeyBoardConfig = _interopRequireDefault(__webpack_require__(/*! ../../config/KeyBoardConfig.js */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar Audio = uni.createInnerAudioContext();var _default = { name: \"KeyboardComponent\", props: _KeyBoardConfig.default.getKeyboardConfig(), data: function data() {return { step: 0, // 当前调号\n      notes: {} // 存储\n    };}, mounted: function mounted() {var _this = this; // 显示初始化动画\n    // 加载音频文件\n    // 结束初始化动画\n    _eventBus.EventBus.$on(\"currentStep\", function (step) {__f__(\"log\", \"音调\", step, \" at components/KeyboardComponent/KeyboardComponent.vue:80\");_this.step = step;});}, methods: { mouseStartClick: function mouseStartClick(e) {var toneType = e.currentTarget.dataset.type;__f__(\"log\", \"下标\", toneType, \" at components/KeyboardComponent/KeyboardComponent.vue:87\");_eventBus.EventBus.$emit(\"keyboardTouch\", toneType);var src = \"/static/media/\" + toneType + this.step.toString() + \".mp3\";Audio.autoplay = true;Audio.src = src; //音频地址\n      Audio.volume = 1; //音量\n      Audio.play(); //执行播放\n      Audio.onError(function (res) {__f__(\"log\", res, \" at components/KeyboardComponent/KeyboardComponent.vue:95\");}); // Audio.onPause(function() {\n      // \tconsole.log('end')\n      // \tAudio.destroy()\n      // })\n    }, mouseEndClick: function mouseEndClick(e) {var toneType = e.currentTarget.dataset.type;Audio.pause();} } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9LZXlib2FyZENvbXBvbmVudC9LZXlib2FyZENvbXBvbmVudC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTs7O0FBR0EsNEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDBDLGVBRUEsRUFDQSx5QkFEQSxFQUVBLGtEQUZBLEVBR0EsSUFIQSxrQkFHQSxDQUNBLFNBQ0EsT0FEQSxFQUNBO0FBQ0EsZUFGQSxDQUVBO0FBRkEsTUFJQSxDQVJBLEVBU0EsT0FUQSxxQkFTQSxtQkFDQTtBQUNBO0FBQ0E7QUFDQSwyREFDQSxzRkFDQSxrQkFDQSxDQUhBLEVBSUEsQ0FqQkEsRUFrQkEsV0FDQSxlQURBLDJCQUNBLENBREEsRUFDQSxDQUNBLDRDQUNBLDBGQUNBLG9EQUNBLHNFQUNBLHNCQUNBLGdCQU5BLENBTUE7QUFDQSx1QkFQQSxDQU9BO0FBQ0EsbUJBUkEsQ0FRQTtBQUNBLG9DQUNBLCtFQUNBLENBRkEsRUFUQSxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqQkEsRUFrQkEsYUFsQkEseUJBa0JBLENBbEJBLEVBa0JBLENBQ0EsNENBQ0EsY0FDQSxDQXJCQSxFQWxCQSxFIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGlkPVwicGlhbm9Cb2FyZFwiPlxyXG5cdFx0PHZpZXcgaWQ9XCJub3JtYWxcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJrZXlEb3duIGtleUNcIiBkYXRhLXR5cGU9XCJDXCIgaG92ZXItY2xhc3M9XCJub3JtYWxLZXlIb3ZlclwiXHJcblx0XHRcdFx0di1vbjp0b3VjaHN0YXJ0PVwibW91c2VTdGFydENsaWNrKCRldmVudClcIiB2LW9uOnRvdWNoZW5kPVwibW91c2VFbmRDbGljaygkZXZlbnQpXCI+PHRleHRcclxuXHRcdFx0XHRcdGNsYXNzPVwia2V5RG93bk5hbWVcIj5DPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwia2V5RG93biBrZXlEXCIgZGF0YS10eXBlPVwiRFwiIGhvdmVyLWNsYXNzPVwibm9ybWFsS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleURvd25OYW1lXCI+RDwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleURvd24ga2V5RVwiIGRhdGEtdHlwZT1cIkVcIiBob3Zlci1jbGFzcz1cIm5vcm1hbEtleUhvdmVyXCJcclxuXHRcdFx0XHR2LW9uOnRvdWNoc3RhcnQ9XCJtb3VzZVN0YXJ0Q2xpY2soJGV2ZW50KVwiIHYtb246dG91Y2hlbmQ9XCJtb3VzZUVuZENsaWNrKCRldmVudClcIj48dGV4dFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJrZXlEb3duTmFtZVwiPkU8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJrZXlEb3duIGtleUZcIiBkYXRhLXR5cGU9XCJGXCIgaG92ZXItY2xhc3M9XCJub3JtYWxLZXlIb3ZlclwiXHJcblx0XHRcdFx0di1vbjp0b3VjaHN0YXJ0PVwibW91c2VTdGFydENsaWNrKCRldmVudClcIiB2LW9uOnRvdWNoZW5kPVwibW91c2VFbmRDbGljaygkZXZlbnQpXCI+PHRleHRcclxuXHRcdFx0XHRcdGNsYXNzPVwia2V5RG93bk5hbWVcIj5GPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwia2V5RG93biBrZXlHXCIgZGF0YS10eXBlPVwiR1wiIGhvdmVyLWNsYXNzPVwibm9ybWFsS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleURvd25OYW1lXCI+RzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleURvd24ga2V5QVwiIGRhdGEtdHlwZT1cIkFcIiBob3Zlci1jbGFzcz1cIm5vcm1hbEtleUhvdmVyXCJcclxuXHRcdFx0XHR2LW9uOnRvdWNoc3RhcnQ9XCJtb3VzZVN0YXJ0Q2xpY2soJGV2ZW50KVwiIHYtb246dG91Y2hlbmQ9XCJtb3VzZUVuZENsaWNrKCRldmVudClcIj48dGV4dFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJrZXlEb3duTmFtZVwiPkE8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJrZXlEb3duIGtleUJcIiBkYXRhLXR5cGU9XCJCXCIgaG92ZXItY2xhc3M9XCJub3JtYWxLZXlIb3ZlclwiXHJcblx0XHRcdFx0di1vbjp0b3VjaHN0YXJ0PVwibW91c2VTdGFydENsaWNrKCRldmVudClcIiB2LW9uOnRvdWNoZW5kPVwibW91c2VFbmRDbGljaygkZXZlbnQpXCI+PHRleHRcclxuXHRcdFx0XHRcdGNsYXNzPVwia2V5RG93bk5hbWVcIj5CPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBpZD1cImhpZ2hlclwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleVVwIGtleVVwQ1wiIGRhdGEtdHlwZT1cIlVwQ1wiIGhvdmVyLWNsYXNzPVwiaGlnaGVyS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleVVwTmFtZVwiPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleVVwIGtleVVwRFwiIGRhdGEtdHlwZT1cIlVwRFwiIGhvdmVyLWNsYXNzPVwiaGlnaGVyS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleVVwTmFtZVwiPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleVVwIGtleVVwRlwiIGRhdGEtdHlwZT1cIlVwRlwiIGhvdmVyLWNsYXNzPVwiaGlnaGVyS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleVVwTmFtZVwiPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleVVwIGtleVVwR1wiIGRhdGEtdHlwZT1cIlVwR1wiIGhvdmVyLWNsYXNzPVwiaGlnaGVyS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleVVwTmFtZVwiPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImtleVVwIGtleVVwQVwiIGRhdGEtdHlwZT1cIlVwQVwiIGhvdmVyLWNsYXNzPVwiaGlnaGVyS2V5SG92ZXJcIlxyXG5cdFx0XHRcdHYtb246dG91Y2hzdGFydD1cIm1vdXNlU3RhcnRDbGljaygkZXZlbnQpXCIgdi1vbjp0b3VjaGVuZD1cIm1vdXNlRW5kQ2xpY2soJGV2ZW50KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRjbGFzcz1cImtleVVwTmFtZVwiPjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdEV2ZW50QnVzXHJcblx0fSBmcm9tIFwiLi4vLi4vcGFnZXMvcGlhbm9HYW1lL2V2ZW50LWJ1cy5qc1wiXHJcblx0aW1wb3J0IEtleUJvYXJkQ29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvS2V5Qm9hcmRDb25maWcuanNcIlxyXG5cclxuXHRjb25zdCBBdWRpbyA9IHVuaS5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwiS2V5Ym9hcmRDb21wb25lbnRcIixcclxuXHRcdHByb3BzOiBLZXlCb2FyZENvbmZpZy5nZXRLZXlib2FyZENvbmZpZygpLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGVwOiAwLCAvLyDlvZPliY3osIPlj7dcclxuXHRcdFx0XHRub3Rlczoge30sXHQvLyDlrZjlgqhcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyDmmL7npLrliJ3lp4vljJbliqjnlLtcclxuXHRcdFx0Ly8g5Yqg6L296Z+z6aKR5paH5Lu2XHJcblx0XHRcdC8vIOe7k+adn+WIneWni+WMluWKqOeUu1xyXG5cdFx0XHRFdmVudEJ1cy4kb24oXCJjdXJyZW50U3RlcFwiLCAoc3RlcCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6Z+z6LCDXCIsIHN0ZXApXHJcblx0XHRcdFx0dGhpcy5zdGVwID0gc3RlcFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bW91c2VTdGFydENsaWNrKGUpIHtcclxuXHRcdFx0XHRsZXQgdG9uZVR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLkuIvmoIdcIiwgdG9uZVR5cGUpXHJcblx0XHRcdFx0RXZlbnRCdXMuJGVtaXQoXCJrZXlib2FyZFRvdWNoXCIsIHRvbmVUeXBlKVxyXG5cdFx0XHRcdGxldCBzcmMgPSBcIi9zdGF0aWMvbWVkaWEvXCIgKyB0b25lVHlwZSArIHRoaXMuc3RlcC50b1N0cmluZygpICsgXCIubXAzXCJcclxuXHRcdFx0XHRBdWRpby5hdXRvcGxheSA9IHRydWVcclxuXHRcdFx0XHRBdWRpby5zcmMgPSBzcmMgLy/pn7PpopHlnLDlnYBcclxuXHRcdFx0XHRBdWRpby52b2x1bWUgPSAxIC8v6Z+z6YePXHJcblx0XHRcdFx0QXVkaW8ucGxheSgpIC8v5omn6KGM5pKt5pS+XHJcblx0XHRcdFx0QXVkaW8ub25FcnJvcihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIEF1ZGlvLm9uUGF1c2UoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnZW5kJylcclxuXHRcdFx0XHQvLyBcdEF1ZGlvLmRlc3Ryb3koKVxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vdXNlRW5kQ2xpY2soZSkge1xyXG5cdFx0XHRcdGxldCB0b25lVHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGVcclxuXHRcdFx0XHRBdWRpby5wYXVzZSgpXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRAaW1wb3J0IFwiS2V5Ym9hcmRDb21wb25lbnQuY3NzXCI7XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/config/KeyBoardConfig.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /**\r\n                                                                                                      * 键盘配置参数\r\n                                                                                                      */var _default =\n{\n  getKeyboardConfig: function getKeyboardConfig() {\n    return {\n      keyboardHeight: {\n        type: String,\n        default: \"30%\",\n        required: false } };\n\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL0tleUJvYXJkQ29uZmlnLmpzIl0sIm5hbWVzIjpbImdldEtleWJvYXJkQ29uZmlnIiwia2V5Ym9hcmRIZWlnaHQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoid0ZBQUE7OztBQUdlO0FBQ1hBLG1CQURXLCtCQUNTO0FBQ2hCLFdBQU87QUFDWkMsb0JBQWMsRUFBRTtBQUNaQyxZQUFJLEVBQUVDLE1BRE07QUFFWkMsZUFBTyxFQUFFLEtBRkc7QUFHWkMsZ0JBQVEsRUFBRSxLQUhFLEVBREosRUFBUDs7O0FBT0gsR0FUVSxFIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmUruebmOmFjee9ruWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0S2V5Ym9hcmRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0a2V5Ym9hcmRIZWlnaHQ6IHtcclxuXHRcdFx0ICAgIHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ICAgIGRlZmF1bHQ6IFwiMzAlXCIsXHJcblx0XHRcdCAgICByZXF1aXJlZDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfSxcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJxQixDQUFnQiwwc0JBQUcsRUFBQyIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/pages/pianoGame/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\nvar _Score = _interopRequireDefault(__webpack_require__(/*! ../../../components/Score/Score.vue */ 5));\nvar _ShowStave = _interopRequireDefault(__webpack_require__(/*! ../../../components/ShowStave/ShowStave.vue */ 19));\nvar _KeyboardComponent = _interopRequireDefault(__webpack_require__(/*! ../../../components/KeyboardComponent/KeyboardComponent.vue */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { KeyboardComponent: _KeyboardComponent.default, ShowStave: _ShowStave.default, Score: _Score.default }, data: function data() {\n    return {};\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGlhbm9HYW1lL2luZGV4L2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiS2V5Ym9hcmRDb21wb25lbnQiLCJTaG93U3RhdmUiLCJTY29yZSIsImRhdGEiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0EsNEksOEZBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQU1lLEVBQ2RBLFVBQVUsRUFBRSxFQUNYQyxpQkFBaUIsRUFBakJBLDBCQURXLEVBRVhDLFNBQVMsRUFBVEEsa0JBRlcsRUFHWEMsS0FBSyxFQUFMQSxjQUhXLEVBREUsRUFNZEMsSUFOYyxrQkFNUDtBQUNOLFdBQU8sRUFBUDs7O0FBR0EsR0FWYTtBQVdkQyxTQUFPLEVBQUUsRUFYSyxFIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBTY29yZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TY29yZS9TY29yZS52dWVcIlxuaW1wb3J0IFNob3dTdGF2ZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TaG93U3RhdmUvU2hvd1N0YXZlLnZ1ZVwiXG5pbXBvcnQgS2V5Ym9hcmRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvS2V5Ym9hcmRDb21wb25lbnQvS2V5Ym9hcmRDb21wb25lbnQudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0S2V5Ym9hcmRDb21wb25lbnQsXG5cdFx0U2hvd1N0YXZlLFxuXHRcdFNjb3JlXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!***********************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/index/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 36);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FNO0FBQ3JNLGdCQUFnQiw4TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmU4NGEzYyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*****************************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 37 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 38 */
/*!***********************************************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 39);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJxQixDQUFnQiwwc0JBQUcsRUFBQyIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsIm9uTG9hZCIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiJ3RkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsV0FBSyxFQUFFLE9BREQsRUFBUDs7QUFHQSxHQUxhO0FBTWRDLFFBTmMsb0JBTUw7O0FBRVIsR0FSYTtBQVNkQyxTQUFPLEVBQUUsRUFUSyxFIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnSGVsbG8nXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cblx0fSxcblx0bWV0aG9kczoge1xuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*********************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcU07QUFDck0sZ0JBQWdCLDhNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!**********************************************************************************!*\
  !*** E:/AboutWebPage/salieriPiano/salieriPiano/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 42);\n/* harmony import */ var _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThwQixDQUFnQiw2ckJBQUcsRUFBQyIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTQuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/AboutWebPage/salieriPiano/salieriPiano/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    // console.log('App Launch')\n  },\n  onShow: function onShow() {\n    // console.log('App Show')\n  },\n  onHide: function onHide() {\n    // console.log('App Hide')\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQjtBQUNBLEdBSGE7QUFJZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCO0FBQ0EsR0FOYTtBQU9kQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEI7QUFDQSxHQVRhLEUiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ })
],[[0,"app-config"]]]);