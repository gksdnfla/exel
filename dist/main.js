/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n}\\n#container .row {\\n  overflow: hidden;\\n}\\n#container .row:first-child .column {\\n  border-right-color: #dfdfdf;\\n  border-bottom-color: #bbbbbb;\\n  background-color: #f5f5f5;\\n  color: #5e5e80;\\n  text-align: center;\\n}\\n#container .row:first-child .column:first-child {\\n  border-bottom-color: #dfdfdf;\\n  position: relative;\\n}\\n#container .row:first-child .column:first-child:after {\\n  content: '';\\n  border: 10px solid transparent;\\n  border-top-color: #b7b7b7;\\n  position: absolute;\\n  right: -7px;\\n  bottom: -7px;\\n  transform: rotate(-45deg);\\n}\\n#container .row .column {\\n  float: left;\\n  border-right: 1px solid #d4d4d4;\\n  border-bottom: 1px solid #d4d4d4;\\n  box-sizing: border-box;\\n  position: relative;\\n}\\n#container .row .column:first-child {\\n  border-bottom-color: #dfdfdf;\\n  border-right-color: #bbbbbb;\\n  background-color: #f5f5f5;\\n  color: #5e5e80;\\n  text-align: center;\\n}\\n#container .row .column input {\\n  width: 100%;\\n  height: 100%;\\n  border: none;\\n  outline: none;\\n  box-sizing: border-box;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  cursor: cell;\\n}\\n#warpper .drag-rect {\\n  background-color: rgba(0, 0, 0, 0.2);\\n  border: 2px solid #237447;\\n  position: absolute;\\n}\\n#warpper .selected-rect {\\n  background-color: rgba(0, 0, 0, 0.2);\\n  border: 2px solid #237447;\\n  position: absolute;\\n}\\n#warpper .selected-rect .column {\\n  background-color: #ffffff;\\n  position: absolute;\\n}\\n#warpper .selected-rect .column input {\\n  width: 100%;\\n  height: 100%;\\n  border: none;\\n  outline: none;\\n  box-sizing: border-box;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  cursor: cell;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://excel/./src/assets/styles/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://excel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://excel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/index.less":
/*!**************************************!*\
  !*** ./src/assets/styles/index.less ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://excel/./src/assets/styles/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://excel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/colIndexList.ts":
/*!*****************************!*\
  !*** ./src/colIndexList.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.colIndexList = void 0;\r\nexports.colIndexList = [\r\n    'A',\r\n    'B',\r\n    'C',\r\n    'D',\r\n    'E',\r\n    'F',\r\n    'G',\r\n    'H',\r\n    'I',\r\n    'J',\r\n    'K',\r\n    'L',\r\n    'N',\r\n    'M',\r\n    'O',\r\n    'P',\r\n    'Q',\r\n    'R',\r\n    'S',\r\n    'T',\r\n    'U',\r\n    'V',\r\n    'W',\r\n    'X',\r\n    'Y',\r\n    'Z',\r\n];\r\n\n\n//# sourceURL=webpack://excel/./src/colIndexList.ts?");

/***/ }),

/***/ "./src/dragSelectElements.ts":
/*!***********************************!*\
  !*** ./src/dragSelectElements.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DragSelectElement = void 0;\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nclass DragSelectElement {\r\n    constructor(renderData, rowSize, columnSize) {\r\n        this.startPoint = { x: 0, y: 0 };\r\n        this.warpperElement = (document.getElementById('warpper'));\r\n        this.renderData = renderData;\r\n        this.rowSize = rowSize;\r\n        this.columnSize = columnSize;\r\n        const mousemove = (ev) => {\r\n            this.mousemove(ev);\r\n        };\r\n        (0, utils_1.bindEvent)(document.getElementsByTagName('body')[0], 'mousedown', (ev) => {\r\n            this.startPoint.x = ev.pageX;\r\n            this.startPoint.y = ev.pageY;\r\n            this.targetElement = this.getTargetElement(this.renderData, this.startPoint);\r\n            this.dragRectElement = document.createElement('div');\r\n            this.dragRectElement.className = 'drag-rect';\r\n            this.removeAllSelectedRectElements();\r\n            this.warpperElement.appendChild(this.dragRectElement);\r\n            (0, utils_1.bindEvent)(document, 'mousemove', this.mousemove.bind(this));\r\n            (0, utils_1.bindEvent)(document, 'mouseup', this.mouseup.bind(this));\r\n        });\r\n    }\r\n    removeAllSelectedRectElements() {\r\n        for (let i = 0; i < document.querySelectorAll('#warpper .selected-rect').length; i++) {\r\n            const itemElement = (this.warpperElement.children[i]);\r\n            if (itemElement.className === 'selected-rect') {\r\n                this.warpperElement.removeChild(itemElement);\r\n            }\r\n        }\r\n    }\r\n    mousemove(ev) {\r\n        if (!this.dragRectElement)\r\n            return;\r\n        const endPoint = {\r\n            x: ev.pageX,\r\n            y: ev.pageY,\r\n        };\r\n        this.dragRectElement = this.dragRectElement;\r\n        if (this.startPoint.x < endPoint.x) {\r\n            this.dragRectElement.style.left = this.startPoint.x + 'px';\r\n        }\r\n        else {\r\n            this.dragRectElement.style.left = endPoint.x + 'px';\r\n        }\r\n        if (this.startPoint.y < endPoint.y) {\r\n            this.dragRectElement.style.top = this.startPoint.y + 'px';\r\n        }\r\n        else {\r\n            this.dragRectElement.style.top = endPoint.y + 'px';\r\n        }\r\n        this.dragRectElement.style.width =\r\n            Math.abs(this.startPoint.x - endPoint.x) + 'px';\r\n        this.dragRectElement.style.height =\r\n            Math.abs(this.startPoint.y - endPoint.y) + 'px';\r\n    }\r\n    mouseup(ev) {\r\n        var _a, _b, _c, _d;\r\n        const endPoint = {\r\n            x: ev.pageX,\r\n            y: ev.pageY,\r\n        };\r\n        const startX = this.startPoint.x;\r\n        const startY = this.startPoint.y;\r\n        const endX = endPoint.x;\r\n        const endY = endPoint.y;\r\n        const { leftTopPoint, rightBottomPoint } = this.getLeftTopPointAndRightBottomPoint({\r\n            startX,\r\n            startY,\r\n            endX,\r\n            endY,\r\n        });\r\n        const selectedRect = this.getSelectedRect({\r\n            renderData: this.renderData,\r\n            leftTopPoint,\r\n            rightBottomPoint,\r\n        });\r\n        const selectedRectElement = document.createElement('div');\r\n        selectedRectElement.className = 'selected-rect';\r\n        selectedRectElement.style.left = selectedRect.left - 2 + 'px';\r\n        selectedRectElement.style.top = selectedRect.top - 2 + 'px';\r\n        selectedRectElement.style.width = selectedRect.width - 1 + 'px';\r\n        selectedRectElement.style.height = selectedRect.height - 1 + 'px';\r\n        if (startX < endX) {\r\n            if (startY < endY) {\r\n                var cloneElement = ((_a = this.renderData[0][0].element) === null || _a === void 0 ? void 0 : _a.cloneNode(true));\r\n                cloneElement.style.left = '0px';\r\n                cloneElement.style.top = '0px';\r\n                cloneElement.setAttribute('row-index', '0');\r\n                cloneElement.setAttribute('col-index', '0');\r\n            }\r\n            else {\r\n                let colLastIndex = this.columnSize - 1;\r\n                var cloneElement = ((_b = this.renderData[0][colLastIndex].element) === null || _b === void 0 ? void 0 : _b.cloneNode(true));\r\n                cloneElement.style.left = '0px';\r\n                cloneElement.style.bottom = '0px';\r\n                cloneElement.setAttribute('row-index', '0');\r\n                cloneElement.setAttribute('col-index', colLastIndex.toString());\r\n            }\r\n        }\r\n        else {\r\n            if (startY < endY) {\r\n                let rowLastIndex = this.rowSize - 1;\r\n                var cloneElement = ((_c = this.renderData[rowLastIndex][0].element) === null || _c === void 0 ? void 0 : _c.cloneNode(true));\r\n                cloneElement.style.right = '0px';\r\n                cloneElement.style.top = '0px';\r\n                cloneElement.setAttribute('row-index', rowLastIndex.toString());\r\n                cloneElement.setAttribute('col-index', '0');\r\n            }\r\n            else {\r\n                let rowLastIndex = this.rowSize - 1;\r\n                let colLastIndex = this.columnSize - 1;\r\n                var cloneElement = ((_d = this.renderData[rowLastIndex][colLastIndex].element) === null || _d === void 0 ? void 0 : _d.cloneNode(true));\r\n                cloneElement.style.right = '0px';\r\n                cloneElement.style.bottom = '0px';\r\n                cloneElement.setAttribute('row-index', rowLastIndex.toString());\r\n                cloneElement.setAttribute('col-index', colLastIndex.toString());\r\n            }\r\n        }\r\n        cloneElement.style.width =\r\n            parseInt(cloneElement.style.width) - 1 + 'px';\r\n        cloneElement.style.height =\r\n            parseInt(cloneElement.style.height) - 1 + 'px';\r\n        selectedRectElement.appendChild(cloneElement);\r\n        document.getElementById('warpper').appendChild(selectedRectElement);\r\n        if (this.dragRectElement) {\r\n            this.warpperElement.removeChild(this.dragRectElement);\r\n            this.dragRectElement = undefined;\r\n        }\r\n        (0, utils_1.removeEvent)(document.getElementsByTagName('body')[0], 'mousemove', this.mousemove.bind(this));\r\n        (0, utils_1.removeEvent)(document.getElementsByTagName('body')[0], 'mouseup', this.mouseup.bind(this));\r\n    }\r\n    getTargetElement(renderData, startPoint) {\r\n        let top = 0;\r\n        let curRowIndex = -1;\r\n        let curColIndex = -1;\r\n        for (let rowIndex = 0; rowIndex < renderData.length; rowIndex++) {\r\n            const row = renderData[rowIndex];\r\n            let left = 0;\r\n            for (let colIndex = 0; colIndex < row.length; colIndex++) {\r\n                const col = row[colIndex];\r\n                if (startPoint.x > left && startPoint.x < left + col.width) {\r\n                    curColIndex = colIndex;\r\n                }\r\n                if (startPoint.y > top && startPoint.y < top + col.height) {\r\n                    curRowIndex = rowIndex;\r\n                }\r\n                if (curRowIndex >= 0 && curColIndex >= 0) {\r\n                    break;\r\n                }\r\n                left += col.width;\r\n                if (colIndex === 0)\r\n                    top += col.height;\r\n            }\r\n        }\r\n        return renderData[curRowIndex][curColIndex]\r\n            ? renderData[curRowIndex][curColIndex].element\r\n            : undefined;\r\n    }\r\n    getSeletedElements(renderData, leftTopPoint, rightBottomPoint) {\r\n        const selectedRect = { left: 0, top: 0, width: 0, height: 0 };\r\n        let isBreak = false;\r\n        let top = 0;\r\n        for (let rowIndex = 0; rowIndex < renderData.length; rowIndex++) {\r\n            const row = renderData[rowIndex];\r\n            let left = 0;\r\n            for (let colIndex = 0; colIndex < row.length; colIndex++) {\r\n                const col = row[colIndex];\r\n                if (leftTopPoint.x < left && selectedRect.left === 0) {\r\n                    selectedRect.left = left - col.width;\r\n                }\r\n                if (leftTopPoint.y < top && selectedRect.top === 0) {\r\n                    selectedRect.top = top - col.height;\r\n                }\r\n                if (rightBottomPoint.x < left && selectedRect.width === 0) {\r\n                    selectedRect.width = left - selectedRect.left;\r\n                }\r\n                if (rightBottomPoint.y < top && selectedRect.height === 0) {\r\n                    selectedRect.height = top - selectedRect.top;\r\n                }\r\n                if (selectedRect.left !== 0 &&\r\n                    selectedRect.top !== 0 &&\r\n                    selectedRect.width !== 0 &&\r\n                    selectedRect.height !== 0) {\r\n                    isBreak = true;\r\n                    break;\r\n                }\r\n                left += col.width;\r\n                if (colIndex === 0)\r\n                    top += col.height;\r\n            }\r\n            if (isBreak === true)\r\n                break;\r\n        }\r\n    }\r\n    getSelectedRect({ renderData, leftTopPoint, rightBottomPoint, }) {\r\n        const selectedRect = { left: 0, top: 0, width: 0, height: 0 };\r\n        let isBreak = false;\r\n        let top = 0;\r\n        for (let rowIndex = 0; rowIndex < renderData.length; rowIndex++) {\r\n            const row = renderData[rowIndex];\r\n            let left = 0;\r\n            for (let colIndex = 0; colIndex < row.length; colIndex++) {\r\n                const col = row[colIndex];\r\n                if (leftTopPoint.x < left && selectedRect.left === 0) {\r\n                    selectedRect.left = left - col.width;\r\n                }\r\n                if (leftTopPoint.y < top && selectedRect.top === 0) {\r\n                    selectedRect.top = top - col.height;\r\n                }\r\n                if (rightBottomPoint.x < left && selectedRect.width === 0) {\r\n                    selectedRect.width = left - selectedRect.left;\r\n                }\r\n                if (rightBottomPoint.y < top && selectedRect.height === 0) {\r\n                    selectedRect.height = top - selectedRect.top;\r\n                }\r\n                if (selectedRect.left !== 0 &&\r\n                    selectedRect.top !== 0 &&\r\n                    selectedRect.width !== 0 &&\r\n                    selectedRect.height !== 0) {\r\n                    isBreak = true;\r\n                    break;\r\n                }\r\n                left += col.width;\r\n                if (colIndex === 0)\r\n                    top += col.height;\r\n            }\r\n            if (isBreak === true)\r\n                break;\r\n        }\r\n        return selectedRect;\r\n    }\r\n    getLeftTopPointAndRightBottomPoint({ startX, startY, endX, endY, }) {\r\n        const obj = {\r\n            leftTopPoint: { x: 0, y: 0 },\r\n            rightBottomPoint: { x: 0, y: 0 },\r\n        };\r\n        if (startX > endX) {\r\n            obj.leftTopPoint.x = endX;\r\n            obj.rightBottomPoint.x = startX;\r\n        }\r\n        else {\r\n            obj.leftTopPoint.x = startX;\r\n            obj.rightBottomPoint.x = endX;\r\n        }\r\n        if (startY > endY) {\r\n            obj.leftTopPoint.y = endY;\r\n            obj.rightBottomPoint.y = startY;\r\n        }\r\n        else {\r\n            obj.leftTopPoint.y = startY;\r\n            obj.rightBottomPoint.y = endY;\r\n        }\r\n        return obj;\r\n    }\r\n}\r\nexports.DragSelectElement = DragSelectElement;\r\n\n\n//# sourceURL=webpack://excel/./src/dragSelectElements.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/render.ts\");\r\nconst dragSelectElements_1 = __webpack_require__(/*! ./dragSelectElements */ \"./src/dragSelectElements.ts\");\r\n__webpack_require__(/*! ./assets/styles/index.less */ \"./src/assets/styles/index.less\");\r\nwindow.onload = function () {\r\n    const containerElement = (document.getElementById('container'));\r\n    const renderer = new render_1.Render(containerElement);\r\n    new dragSelectElements_1.DragSelectElement(renderer.renderData, renderer.rowSize, renderer.columnSize);\r\n};\r\n\n\n//# sourceURL=webpack://excel/./src/index.ts?");

/***/ }),

/***/ "./src/render.ts":
/*!***********************!*\
  !*** ./src/render.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Render = void 0;\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nclass Render {\r\n    constructor(containerElement) {\r\n        this.rowSize = 0;\r\n        this.columnSize = 0;\r\n        this.renderData = [];\r\n        this.clientWidth = 0;\r\n        this.clientHeight = 0;\r\n        this.initHeight = 20;\r\n        this.initWidth = 80;\r\n        this.appendRenderElements(containerElement);\r\n    }\r\n    init() {\r\n        this.clientWidth =\r\n            document.body.clientWidth || document.documentElement.clientHeight;\r\n        this.clientHeight =\r\n            document.body.clientHeight || document.documentElement.clientHeight;\r\n        this.rowSize = Math.floor(this.clientHeight / this.initHeight) + 1;\r\n        this.columnSize = Math.floor(this.clientWidth / this.initWidth) + 1;\r\n    }\r\n    createInputElement(columnElement, rowIndex, colIndex) {\r\n        const inputElement = document.createElement('input');\r\n        inputElement.setAttribute('readonly', 'readonly');\r\n        inputElement.onchange = () => {\r\n            this.renderData[rowIndex][colIndex].value = inputElement.value;\r\n        };\r\n        inputElement.onfocus = function () {\r\n            columnElement.className = 'column is-focus';\r\n        };\r\n        inputElement.onblur = function () {\r\n            columnElement.className = 'column';\r\n        };\r\n        return inputElement;\r\n    }\r\n    appendRenderElements(parentElement) {\r\n        const that = this;\r\n        this.init();\r\n        this.renderData.length = this.rowSize;\r\n        this.renderData.fill(new Array(this.columnSize).fill({\r\n            width: this.initWidth,\r\n            height: this.initHeight,\r\n            value: '',\r\n        }));\r\n        this.renderData.forEach((row, rowIndex) => {\r\n            const rowElement = document.createElement('div');\r\n            let rowWidth = 0;\r\n            rowElement.className = 'row';\r\n            row.forEach((item, colIndex) => {\r\n                const columnElement = (item.element = (document.createElement('div')));\r\n                columnElement.className = 'column';\r\n                columnElement.style.width = item.width + 'px';\r\n                columnElement.style.height = item.height + 'px';\r\n                rowWidth += item.width;\r\n                if (rowIndex === 0 && colIndex !== 0) {\r\n                    this.columnSize / 26;\r\n                    columnElement.innerText = (0, utils_1.getColIndex)(colIndex - 1);\r\n                }\r\n                else if (rowIndex !== 0 && colIndex === 0) {\r\n                    columnElement.innerText = rowIndex.toString();\r\n                }\r\n                else if (rowIndex !== 0 && colIndex !== 0) {\r\n                    const inputElement = this.createInputElement(columnElement, rowIndex, colIndex);\r\n                    columnElement.appendChild(inputElement);\r\n                }\r\n                rowElement.appendChild(columnElement);\r\n            });\r\n            rowElement.style.width = rowWidth + 'px';\r\n            parentElement.appendChild(rowElement);\r\n        });\r\n    }\r\n}\r\nexports.Render = Render;\r\n\n\n//# sourceURL=webpack://excel/./src/render.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.removeEvent = exports.bindEvent = exports.getElementPosition = exports.getColIndex = void 0;\r\nconst colIndexList_1 = __webpack_require__(/*! ./colIndexList */ \"./src/colIndexList.ts\");\r\nfunction getColIndex(num, str = '') {\r\n    let maxCount = getMaxCount(num);\r\n    if (num < 26) {\r\n        return colIndexList_1.colIndexList[num];\r\n    }\r\n    for (let i = 0; i < maxCount; i++) {\r\n        str = colIndexList_1.colIndexList[num % 26] + str;\r\n        str = getColIndex(Math.floor(num / 26) - 1, str) + str;\r\n    }\r\n    return str;\r\n}\r\nexports.getColIndex = getColIndex;\r\nfunction getMaxCount(num) {\r\n    let count = 1;\r\n    while (true) {\r\n        let temp = Math.floor(num / 26);\r\n        if (temp > 25) {\r\n            count++;\r\n            num = temp;\r\n        }\r\n        else {\r\n            break;\r\n        }\r\n    }\r\n    return count;\r\n}\r\nfunction getElementPosition(element) {\r\n    const point = {\r\n        x: 0,\r\n        y: 0,\r\n    };\r\n    while (element.parentNode) {\r\n        point.x += element.offsetLeft;\r\n        point.y += element.offsetTop;\r\n        element = element.parentNode;\r\n    }\r\n    return point;\r\n}\r\nexports.getElementPosition = getElementPosition;\r\nfunction bindEvent(element, eventName = '', eventFn) {\r\n    if (element.addEventListener) {\r\n        if (/^on/.test(eventName))\r\n            eventName = eventName.substring(2);\r\n        element.addEventListener(eventName, eventFn);\r\n    }\r\n    else {\r\n        if (!/^on/.test(eventName))\r\n            eventName = 'on' + eventName;\r\n        element.attachEvent(eventName, eventFn);\r\n    }\r\n}\r\nexports.bindEvent = bindEvent;\r\nfunction removeEvent(element, eventName = '', eventFn) {\r\n    if (element.removeEventListener) {\r\n        if (/^on/.test(eventName))\r\n            eventName = eventName.substring(2);\r\n        element.removeEventListener(eventName, eventFn);\r\n    }\r\n    else {\r\n        if (!/^on/.test(eventName))\r\n            eventName = 'on' + eventName;\r\n        element.detachEvent(eventName, eventFn);\r\n    }\r\n}\r\nexports.removeEvent = removeEvent;\r\n\n\n//# sourceURL=webpack://excel/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;