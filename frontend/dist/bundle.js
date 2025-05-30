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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 20px;\n}\n\n#roomsContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  align-items: flex-start;\n  grid-auto-rows: min-content;\n}\n\n.room {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n}\n.room.booked {\n  background-color: #ff8b94;\n}\n.room.premium {\n  border: 2px dashed #ffd3b6;\n}\n.room h3 {\n  margin: 0 0 10px 0;\n}\n\n.button-box {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n\nbutton {\n  background-color: #333;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  flex: 1;\n}\nbutton:hover {\n  opacity: 0.9;\n}\nbutton.disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.reviews-container {\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  display: none;\n  overflow: hidden;\n}\n.reviews-container.visible {\n  display: block;\n}\n\n.review, .review-header, .review-actions {\n  box-sizing: border-box;\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n}\n.review:last-child {\n  margin-bottom: 0;\n}\n\n.review-header {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 15px;\n  margin: 0;\n  flex: 1;\n}\n.review-header h4 {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.review-header p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4;\n  display: -webkit-box;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.review-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px 15px;\n  background-color: rgba(0, 0, 0, 0.02);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.review-actions button {\n  width: 100%;\n  margin: 0;\n  padding: 8px 16px;\n  font-size: 13px;\n  flex: none;\n}\n\n.premium-service {\n  display: inline-block;\n  background-color: #ffd3b6;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n@media (max-width: 768px) {\n  body {\n    padding: 10px;\n  }\n  #roomsContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.review-input {\n  justify-content: center;\n  margin: 0 auto;\n  align-items: center;\n  display: flex;\n  width: 50%;\n  padding: 10px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n#loginContainer {\n  max-width: 600px;\n  margin: 0 auto 30px auto;\n  padding: 30px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n#loginContainer form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n#loginContainer .input-row {\n  display: flex;\n  gap: 16px;\n}\n#loginContainer .button-row {\n  display: flex;\n  gap: 16px;\n}\n#loginContainer input[type=text],\n#loginContainer input[type=password] {\n  flex: 1;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  font-family: inherit;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n  background-color: #fafbfc;\n}\n#loginContainer input[type=text]:focus,\n#loginContainer input[type=password]:focus {\n  outline: none;\n  border-color: #333;\n  background-color: #ffffff;\n  box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.1);\n}\n#loginContainer input[type=text]::placeholder,\n#loginContainer input[type=password]::placeholder {\n  color: #6c757d;\n  font-weight: 400;\n}\n#loginContainer input[type=text]:hover,\n#loginContainer input[type=password]:hover {\n  border-color: #c8d1db;\n}\n#loginContainer #loginBtn,\n#loginContainer #registerBtn {\n  flex: 1;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: none;\n}\n#loginContainer #loginBtn {\n  background-color: #333;\n  color: white;\n}\n#loginContainer #loginBtn:hover {\n  background-color: #2c966f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n#loginContainer #loginBtn:active {\n  transform: translateY(0);\n}\n#loginContainer #registerBtn {\n  background-color: transparent;\n  color: #333;\n  border: 2px solid #333;\n}\n#loginContainer #registerBtn:hover {\n  background-color: #333;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n#loginContainer #registerBtn:active {\n  transform: translateY(0);\n}\n#loginContainer #authStatus {\n  text-align: center;\n  padding: 12px;\n  background-color: #a8e6cf;\n  border-radius: 8px;\n  font-weight: 600;\n  color: #2c966f;\n  margin-bottom: 16px;\n}\n#loginContainer button:not(#loginBtn):not(#registerBtn) {\n  background-color: #dc3545;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 12px;\n}\n#loginContainer button:not(#loginBtn):not(#registerBtn):hover {\n  background-color: #dc3545;\n  transform: translateY(-1px);\n}\n@media (max-width: 600px) {\n  #loginContainer {\n    max-width: 400px;\n  }\n  #loginContainer .input-row,\n  #loginContainer .button-row {\n    flex-direction: column;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://part2/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://part2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://part2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://part2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_room_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/room.js */ \"./src/modules/room.js\");\n/* harmony import */ var _services_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ui.js */ \"./src/services/ui.js\");\n/* harmony import */ var _modules_hotel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hotel.js */ \"./src/modules/hotel.js\");\n/* harmony import */ var _services_hotelAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/hotelAPI.js */ \"./src/services/hotelAPI.js\");\n\n\n\n\n\n\nconst room1 = new _modules_room_js__WEBPACK_IMPORTED_MODULE_1__.Room(1, 'Single');\nconst room2 = new _modules_room_js__WEBPACK_IMPORTED_MODULE_1__.Room(2, 'Double');\nconst room3 = new _modules_room_js__WEBPACK_IMPORTED_MODULE_1__.Room(3, 'Suite');\nconst room4 = new _modules_room_js__WEBPACK_IMPORTED_MODULE_1__.PremiumRoom(4, 'Premium', 'Breakfast');\n\nconst hotel = new _modules_hotel_js__WEBPACK_IMPORTED_MODULE_3__.Hotel('Grand Hotel');\n\nhotel.addRoom(room1);\nhotel.addRoom(room2);\nhotel.addRoom(room3);\nhotel.addRoom(room4);\n\nfunction loadBookingsFromLocalStorage() {\n  const savedBookings = localStorage.getItem('hotelBookings');\n  if (savedBookings) {\n    const bookings = JSON.parse(savedBookings);\n    bookings.forEach((booking) => {\n      const room = hotel.rooms.find(\n        (room) => room.number === booking.roomNumber\n      );\n      if (room && room.isAvailable) {\n        room.isAvailable = false;\n        room.bookedBy = booking.bookedBy;\n      }\n    });\n  }\n}\n\nfunction saveBookingsToLocalStorage() {\n  const bookedRooms = hotel.rooms\n    .filter((room) => !room.isAvailable)\n    .map((room) => ({\n      roomNumber: room.number,\n      bookedBy: room.bookedBy,\n    }));\n  localStorage.setItem('hotelBookings', JSON.stringify(bookedRooms));\n}\n\nloadBookingsFromLocalStorage();\n\nwindow.ui = new _services_ui_js__WEBPACK_IMPORTED_MODULE_2__.UI(hotel);\n\n(async () => {\n  const savedUser = sessionStorage.getItem('user');\n  if (savedUser) {\n    const user = JSON.parse(savedUser);\n    await window.ui.authStatus(user);\n  } else {\n    window.ui.renderLogin();\n    await window.ui.renderRooms();\n  }\n})();\n\nwindow.bookRoom = async function (number) {\n  const user = JSON.parse(sessionStorage.getItem('user'));\n  if (!user) {\n    alert('Please login to book a room');\n    return;\n  }\n  const room = hotel.rooms.find((room) => room.number === number);\n  if (room) {\n    alert(room.book(user.username));\n    saveBookingsToLocalStorage();\n    await ui.renderRooms();\n  }\n};\n\nwindow.checkOutRoom = async function (number) {\n  const user = JSON.parse(sessionStorage.getItem('user'));\n  if (!user) {\n    alert('Please login to check out a room');\n    return;\n  }\n\n  const room = hotel.rooms.find((room) => room.number === number);\n  if (!room) return;\n\n  if (room.bookedBy && room.bookedBy !== user.username) {\n    alert('You can only check out rooms that you have booked');\n    return;\n  }\n\n  alert(room.checkOut());\n  saveBookingsToLocalStorage();\n  await ui.renderRooms();\n};\n\nwindow.fetchReviews = async function (roomNumber) {\n  try {\n    const reviews = await _services_hotelAPI_js__WEBPACK_IMPORTED_MODULE_4__.HotelAPI.fetchReviews();\n    ui.displayReviews(roomNumber, reviews);\n  } catch (error) {\n    alert('Failed to load reviews. Please try again later.');\n  }\n};\n\nwindow.addReview = async function () {\n  const email = document.getElementById('reviewEmail').value;\n  const roomNumber = parseInt(\n    document.getElementById('reviewRoomNumber').value\n  );\n  const body = document.getElementById('reviewBody').value;\n\n  if (!email || !roomNumber || !body) {\n    alert('Please fill in all review fields');\n    return;\n  }\n\n  try {\n    await _services_hotelAPI_js__WEBPACK_IMPORTED_MODULE_4__.HotelAPI.addReview(email, roomNumber, body);\n    alert('Review added successfully!');\n    document.getElementById('reviewEmail').value = '';\n    document.getElementById('reviewRoomNumber').value = '';\n    document.getElementById('reviewBody').value = '';\n    window.fetchReviews(roomNumber);\n  } catch (error) {\n    alert('Failed to add review. Please try again later.');\n  }\n};\n\n\n//# sourceURL=webpack://part2/./src/index.js?");

/***/ }),

/***/ "./src/modules/hotel.js":
/*!******************************!*\
  !*** ./src/modules/hotel.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hotel: () => (/* binding */ Hotel)\n/* harmony export */ });\nclass Hotel {\n  constructor(name) {\n    this.name = name;\n    this.rooms = [];\n  }\n\n  addRoom(room) {\n    this.rooms.push(room);\n  }\n\n  getAvailableRooms() {\n    return this.rooms.filter((room) => room.isAvailable);\n  }\n}\n\n\n//# sourceURL=webpack://part2/./src/modules/hotel.js?");

/***/ }),

/***/ "./src/modules/room.js":
/*!*****************************!*\
  !*** ./src/modules/room.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PremiumRoom: () => (/* binding */ PremiumRoom),\n/* harmony export */   Room: () => (/* binding */ Room)\n/* harmony export */ });\nclass Room {\n  #creditCardNumber;\n\n  constructor(number, type) {\n    this.number = number;\n    this.type = type;\n    this.isAvailable = true;\n    this.bookedBy = null;\n  }\n\n  book(username) {\n    const creditCardNumber = prompt(\n      'Provide your credit card number to book the room'\n    );\n    if (!creditCardNumber || !/^\\d{16}$/.test(creditCardNumber)) {\n      alert('Credit card number must be 16 digits');\n    }\n    this.setCreditCardNumber(creditCardNumber);\n    this.isAvailable = false;\n    this.bookedBy = username;\n    return `Room ${\n      this.number\n    } has been booked using this card: ${this.getMaskedCardNumber()}`;\n  }\n\n  checkOut() {\n    this.isAvailable = true;\n    this.bookedBy = null;\n    return `Room ${this.number} has been checked out`;\n  }\n\n  setCreditCardNumber(number) {\n    if (!/^\\d{16}$/.test(number)) {\n      throw new Error('Credit card number must be 16 digits');\n    }\n    this.#creditCardNumber = number;\n  }\n\n  getMaskedCardNumber() {\n    return '**** **** **** ' + this.#creditCardNumber.slice(-4);\n  }\n}\n\nclass PremiumRoom extends Room {\n  constructor(number, type, premiumService) {\n    super(number, type);\n    this.premiumService = premiumService;\n  }\n}\n\n\n//# sourceURL=webpack://part2/./src/modules/room.js?");

/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  #password;\n\n  constructor(username, password) {\n    this.username = username;\n    this.#password = password;\n  }\n\n  setPassword(password) {\n    if (password.length < 6) {\n      throw new Error('Password must be at least 6 characters long');\n    }\n    this.#password = password;\n  }\n\n  getPassword() {\n    return this.#password;\n  }\n\n  validatePassword(password) {\n    return this.#password === password;\n  }\n\n  toJSON() {\n    return {\n      username: this.username,\n      password: this.#password,\n    };\n  }\n}\n\n\n//# sourceURL=webpack://part2/./src/modules/user.js?");

/***/ }),

/***/ "./src/services/hotelAPI.js":
/*!**********************************!*\
  !*** ./src/services/hotelAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HotelAPI: () => (/* binding */ HotelAPI)\n/* harmony export */ });\nclass HotelAPI {\n  static async fetchReviews() {\n    const res = await fetch('http://localhost:8000/reviews');\n    return await res.json();\n  }\n\n  static async addReview(email, roomNumber, body) {\n    const res = await fetch('http://localhost:8000/reviews', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ email, roomNumber, body }),\n    });\n    return await res.json();\n  }\n\n  static async editReview(id, email, roomNumber, body) {\n    const res = await fetch(`http://localhost:8000/reviews/${id}`, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ email, roomNumber, body }),\n    });\n    return await res.json();\n  }\n\n  static async deleteReview(id) {\n    const res = await fetch(`http://localhost:8000/reviews/${id}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n    return await res.json();\n  }\n}\n\n\n//# sourceURL=webpack://part2/./src/services/hotelAPI.js?");

/***/ }),

/***/ "./src/services/ui.js":
/*!****************************!*\
  !*** ./src/services/ui.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _userManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userManager.js */ \"./src/services/userManager.js\");\n/* harmony import */ var _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotelAPI.js */ \"./src/services/hotelAPI.js\");\n\n\n\nclass UI {\n  constructor(hotel) {\n    this.hotel = hotel;\n    this.expandedReviews = new Set();\n  }\n\n  renderLogin() {\n    const container = document.getElementById('loginContainer');\n    container.innerHTML = '';\n\n    const form = document.createElement('form');\n    form.innerHTML = `\n      <div class=\"input-row\">\n        <input type=\"text\" id=\"username\" placeholder=\"Username\">\n        <input type=\"password\" id=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"button-row\">\n        <button type=\"button\" id=\"loginBtn\">Login</button>\n        <button type=\"button\" id=\"registerBtn\">Register</button>\n      </div>\n    `;\n\n    container.appendChild(form);\n\n    document.getElementById('loginBtn').addEventListener('click', async () => {\n      await this.loginUser();\n    });\n\n    document\n      .getElementById('registerBtn')\n      .addEventListener('click', async () => {\n        await this.registerUser();\n      });\n  }\n\n  async loginUser() {\n    const username = document.getElementById('username').value;\n    const password = document.getElementById('password').value;\n    const user = (0,_userManager_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)(username, password);\n    if (user) {\n      alert('Login successful!');\n      await this.authStatus(user);\n    } else {\n      alert('Invalid credentials');\n    }\n  }\n\n  async registerUser() {\n    const username = document.getElementById('username').value;\n    const password = document.getElementById('password').value;\n    try {\n      const user = (0,_userManager_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)(username, password);\n      alert('Registration successful!');\n      await this.authStatus(user);\n    } catch (error) {\n      alert('Registration failed: ' + error.message);\n    }\n  }\n\n  async authStatus(user) {\n    const loginContainer = document.getElementById('loginContainer');\n    loginContainer.innerHTML = '';\n\n    if (user) {\n      const authStatus = document.createElement('div');\n      authStatus.id = 'authStatus';\n      authStatus.textContent = 'Logged in as ' + user.username;\n      loginContainer.appendChild(authStatus);\n\n      const logoutButton = document.createElement('button');\n      logoutButton.textContent = 'Logout';\n      logoutButton.onclick = async () => {\n        sessionStorage.removeItem('user');\n        this.renderLogin();\n        await this.renderRooms();\n      };\n      loginContainer.appendChild(logoutButton);\n    } else {\n      this.renderLogin();\n    }\n    await this.renderRooms();\n  }\n\n  async renderRooms() {\n    const container = document.getElementById('roomsContainer');\n    container.innerHTML = '';\n    const isLoggedIn = !!sessionStorage.getItem('user');\n    const currentUser = isLoggedIn\n      ? JSON.parse(sessionStorage.getItem('user')).username\n      : null;\n\n    let reviews = [];\n    try {\n      reviews = await _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__.HotelAPI.fetchReviews();\n    } catch (error) {\n      console.warn('Failed to fetch reviews:', error);\n    }\n\n    this.hotel.rooms.forEach((room) => {\n      const counter = reviews.filter(\n        (r) => r.roomNumber === room.number\n      ).length;\n      const isPremium = room.premiumService\n        ? `<div class=\"premium-service\">${room.premiumService}</div>`\n        : '';\n      const premiumClass = room.premiumService ? 'premium' : '';\n      const roomDiv = document.createElement('div');\n      roomDiv.className = `room ${\n        room.isAvailable ? '' : 'booked'\n      } ${premiumClass}`;\n      const bookingInfo = room.isAvailable\n        ? 'Available'\n        : room.bookedBy\n        ? `Booked by ${room.bookedBy}`\n        : 'Booked';\n\n      roomDiv.innerHTML = `\n        <h3>Room ${room.number} (${room.type})</h3>\n        <p>${bookingInfo}</p>\n        ${isPremium}\n         <p>${counter > 0 ? 'Reviews: ' + counter : 'No reviews yet'}</p>\n        <div class=\"button-box\">\n          ${\n            room.isAvailable\n              ? `<button class=\"bookButton ${\n                  !isLoggedIn ? 'disabled' : ''\n                }\" onclick=\"bookRoom(${room.number})\">Book Room</button>`\n              : `<button onclick=\"checkOutRoom(${room.number})\" ${\n                  !isLoggedIn ||\n                  (room.bookedBy && room.bookedBy !== currentUser)\n                    ? 'class=\"disabled\"'\n                    : ''\n                }>Check Out</button>`\n          }\n          <button onclick=\"ui.toggleReviews(${room.number})\" ${\n        counter > 0 ? '' : 'class=\"disabled\"'\n      }>Reviews</button>\n        </div>\n       \n        <div id=\"reviewsContainer-${room.number}\" class=\"reviews-container\">\n          <div id=\"reviewsList-${room.number}\"></div>\n        </div>\n      `;\n\n      container.appendChild(roomDiv);\n    });\n  }\n\n  toggleReviews(roomNumber) {\n    const reviewsContainer = document.getElementById(\n      `reviewsContainer-${roomNumber}`\n    );\n    const reviewsList = document.getElementById(`reviewsList-${roomNumber}`);\n    const button =\n      reviewsContainer.previousElementSibling.querySelector(\n        'button:last-child'\n      );\n\n    if (!reviewsList || !reviewsContainer) return;\n    if (!reviewsList) {\n      reviewsList.innerHTML = '<p>No reviews yet</p>';\n    }\n\n    if (this.expandedReviews.has(roomNumber)) {\n      reviewsContainer.classList.remove('visible');\n\n      button.textContent = 'Reviews';\n      this.expandedReviews.delete(roomNumber);\n    } else {\n      this.expandedReviews.forEach((num) => {\n        if (num !== roomNumber) {\n          const otherContainer = document.getElementById(\n            `reviewsContainer-${num}`\n          );\n          const otherButton =\n            otherContainer.previousElementSibling.querySelector(\n              'button:last-child'\n            );\n          if (otherContainer) {\n            otherContainer.classList.remove('visible');\n            if (otherButton) otherButton.textContent = 'Reviews';\n          }\n          this.expandedReviews.delete(num);\n        }\n      });\n\n      reviewsContainer.classList.add('visible');\n      button.textContent = 'Hide Reviews';\n\n      if (!reviewsList.children.length) {\n        window.fetchReviews(roomNumber);\n      }\n\n      this.expandedReviews.add(roomNumber);\n    }\n  }\n\n  displayReviews(roomNumber, reviews) {\n    const reviewsList = document.getElementById(`reviewsList-${roomNumber}`);\n    if (!reviewsList) return;\n\n    const roomReviews = reviews.filter(\n      (review) => Number(review.roomNumber) === Number(roomNumber)\n    );\n\n    if (roomReviews.length === 0) {\n      reviewsList.innerHTML = '<p>No reviews yet</p>';\n      return;\n    }\n\n    reviewsList.innerHTML = roomReviews\n      .slice(0, 3)\n      .map(\n        (review) => `\n        <div class=\"review\">\n          <div class=\"review-header\">\n          <h4>${review.email}</h4>\n          <p>${review.body}</p>\n          </div>\n          <div class=\"review-actions\">\n            <button onclick=\"ui.editReview('${review.id}', ${roomNumber})\">Edit</button>\n            <button onclick=\"ui.deleteReview('${review.id}')\">Delete</button>\n          </div>\n        </div>\n      `\n      )\n      .join('');\n  }\n\n  editReview(id, roomNumber) {\n    const email = prompt('Enter your email:');\n    if (!email) return;\n\n    const body = prompt('Enter your review:');\n    if (!body) return;\n\n    _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__.HotelAPI.editReview(id, email, roomNumber, body)\n      .then(async (response) => {\n        alert('Review updated successfully!');\n        try {\n          const reviews = await _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__.HotelAPI.fetchReviews();\n          this.displayReviews(roomNumber, reviews);\n        } catch (error) {\n          alert('Failed to refresh reviews. Please try again.');\n        }\n      })\n      .catch((error) => {\n        alert('Failed to update review. Please try again later.');\n      });\n  }\n\n  deleteReview(id) {\n    if (confirm('Are you sure you want to delete this review?')) {\n      _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__.HotelAPI.deleteReview(id)\n        .then(async (response) => {\n          try {\n            const reviews = await _hotelAPI_js__WEBPACK_IMPORTED_MODULE_1__.HotelAPI.fetchReviews();\n            this.displayReviews(roomNumber, reviews);\n            alert('Review deleted successfully!');\n          } catch (error) {\n            alert('Failed to refresh reviews. Please try again.');\n          }\n        })\n        .catch((error) => {\n          alert('Failed to delete review. Please try again later.');\n        });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://part2/./src/services/ui.js?");

/***/ }),

/***/ "./src/services/userManager.js":
/*!*************************************!*\
  !*** ./src/services/userManager.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   saveUser: () => (/* binding */ saveUser)\n/* harmony export */ });\n/* harmony import */ var _modules_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user.js */ \"./src/modules/user.js\");\n\n\nfunction saveUser(user) {\n  localStorage.setItem(user.username, JSON.stringify(user));\n}\n\nfunction registerUser(username, password) {\n  if (localStorage.getItem(username)) {\n    throw new Error('Username already exists');\n  }\n  if (password.length < 6) {\n    throw new Error('Password must be at least 6 characters long');\n  }\n  if (username.length < 3) {\n    throw new Error('Username must be at least 3 characters long');\n  }\n  if (password.length > 16) {\n    throw new Error('Password must be less than 16 characters long');\n  }\n  const user = new _modules_user_js__WEBPACK_IMPORTED_MODULE_0__.User(username, password);\n  saveUser(user);\n  return user;\n}\n\nfunction loginUser(username, password) {\n  const storedUser = localStorage.getItem(username);\n  if (!storedUser) return null;\n  const userData = JSON.parse(storedUser);\n  const user = new _modules_user_js__WEBPACK_IMPORTED_MODULE_0__.User(userData.username, userData.password);\n  if (user.username === username && user.validatePassword(password)) {\n    localStorage.setItem('currentUser', JSON.stringify(user));\n    return user;\n  }\n  return null;\n}\n\n\n//# sourceURL=webpack://part2/./src/services/userManager.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://part2/./src/style.scss?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;