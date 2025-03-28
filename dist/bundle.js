/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./modules/room */ \"./src/modules/room.js\");\nconst Hotel = __webpack_require__(/*! ./modules/hotel */ \"./src/modules/hotel.js\");\nconst UI = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\nconst room1 = new Room.Room(1, 'Single');\nconst room2 = new Room.Room(2, 'Double');\nconst room3 = new Room.Room(3, 'Suite');\nconst room4 = new Room.PremiumRoom(4, 'Premium', 'Breakfast');\n\nconst hotel = new Hotel('Grand Hotel');\n\nhotel.addRoom(room1);\nhotel.addRoom(room2);\nhotel.addRoom(room3);\nhotel.addRoom(room4);\n\nfunction loadBookingsFromLocalStorage() {\n  const savedBookings = localStorage.getItem('hotelBookings');\n  if (savedBookings) {\n    const bookings = JSON.parse(savedBookings);\n    bookings.forEach((roomNumber) => {\n      const room = hotel.rooms.find((room) => room.number === roomNumber);\n      if (room && room.isAvailable) {\n        room.isAvailable = false;\n      }\n    });\n  }\n}\n\nfunction saveBookingsToLocalStorage() {\n  const bookedRooms = hotel.rooms\n    .filter((room) => !room.isAvailable)\n    .map((room) => room.number);\n  localStorage.setItem('hotelBookings', JSON.stringify(bookedRooms));\n}\n\nloadBookingsFromLocalStorage();\n\nconst ui = new UI(hotel);\nui.renderRooms();\n\nwindow.bookRoom = function (number) {\n  const room = hotel.rooms.find((room) => room.number === number);\n  if (room) {\n    alert(room.book());\n    saveBookingsToLocalStorage();\n    ui.renderRooms();\n  }\n};\n\nwindow.checkOutRoom = function (number) {\n  const room = hotel.rooms.find((room) => room.number === number);\n  if (room) {\n    alert(room.checkOut());\n    saveBookingsToLocalStorage();\n    ui.renderRooms();\n  }\n};\n\n\n//# sourceURL=webpack://part2/./src/index.js?");

/***/ }),

/***/ "./src/modules/hotel.js":
/*!******************************!*\
  !*** ./src/modules/hotel.js ***!
  \******************************/
/***/ ((module) => {

eval("class Hotel {\n  constructor(name) {\n    this.name = name;\n    this.rooms = [];\n  }\n\n  addRoom(room) {\n    this.rooms.push(room);\n  }\n\n  getAvailableRooms() {\n    return this.rooms.filter((room) => room.isAvailable);\n  }\n}\n\nmodule.exports = Hotel;\n\n\n//# sourceURL=webpack://part2/./src/modules/hotel.js?");

/***/ }),

/***/ "./src/modules/room.js":
/*!*****************************!*\
  !*** ./src/modules/room.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Room {\n  constructor(number, type) {\n    this.number = number;\n    this.type = type;\n    this.isAvailable = true;\n  }\n\n  book() {\n    this.isAvailable = false;\n    return `Room ${this.number} has been booked`;\n  }\n\n  checkOut() {\n    this.isAvailable = true;\n    return `Room ${this.number} has been checked out`;\n  }\n}\n\nclass PremiumRoom extends Room {\n  constructor(number, type, premiumService) {\n    super(number, type);\n    this.premiumService = premiumService;\n  }\n}\n\nmodule.exports = { Room, PremiumRoom };\n\n\n//# sourceURL=webpack://part2/./src/modules/room.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((module) => {

eval("function UI(hotel) {\n  this.hotel = hotel;\n}\n\nUI.prototype.renderRooms = function () {\n  const container = document.getElementById('roomsContainer');\n  container.innerHTML = '';\n\n  this.hotel.rooms.forEach((room) => {\n    const roomDiv = document.createElement('div');\n    roomDiv.className = `room ${room.isAvailable ? '' : 'booked'}`;\n    roomDiv.innerHTML = `\n    <h3>Room ${room.number} (${room.type})</h3>\n    <p>${room.isAvailable ? 'Available' : 'Booked'}</p>\n    ${\n      room.isAvailable\n        ? `<button onclick=\"bookRoom(${room.number})\">Book Room</button>`\n        : `<button onclick=\"checkOutRoom(${room.number})\">Check Out</button>`\n    }\n    `;\n\n    container.appendChild(roomDiv);\n  });\n};\n\nmodule.exports = UI;\n\n\n//# sourceURL=webpack://part2/./src/modules/ui.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;