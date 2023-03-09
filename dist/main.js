/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/stage */ \"./src/scripts/stage.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_feeder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/feeder */ \"./src/scripts/feeder.js\");\n/* harmony import */ var _scripts_bird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/bird */ \"./src/scripts/bird.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Hello world\");\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const stage = new _scripts_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFDRjtBQUNJO0FBQ0o7QUFFbENJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzFCLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLE1BQU1DLEtBQUssR0FBRyxJQUFJWixzREFBSyxDQUFDVSxHQUFHLENBQUM7QUFDOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlyZGZlZWQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhZ2UgZnJvbSBcIi4vc2NyaXB0cy9zdGFnZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgRmVlZGVyIGZyb20gXCIuL3NjcmlwdHMvZmVlZGVyXCI7XG5pbXBvcnQgQmlyZCBmcm9tIFwiLi9zY3JpcHRzL2JpcmRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkXCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3Qgc3RhZ2UgPSBuZXcgU3RhZ2UoY3R4KTtcbn0pO1xuIl0sIm5hbWVzIjpbIlN0YWdlIiwiR2FtZSIsIkZlZWRlciIsIkJpcmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bird.js":
/*!*****************************!*\
  !*** ./src/scripts/bird.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Bird {\n  constructor(ctx) {\n    this.width = 35;\n    this.height = 35;\n    this.x = canvas.width;\n    this.y = Math.random() * (canvas.height - this.height);\n    this.directionX = Math.random() * 4;\n    this.directionY = Math.random() * 5;\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.src = \"/images/NES - Duck Hunt - Ducks.png\";\n  }\n  update() {\n    this.x -= this.directionX;\n  }\n  draw() {\n    // ctx.fillRect(this.x, this.y, this.width, this.height);\n    this.ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bird);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iaXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0gsS0FBSztJQUNyQixJQUFJLENBQUNJLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSUgsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUM7SUFDdEQsSUFBSSxDQUFDTSxVQUFVLEdBQUdGLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUNuQyxJQUFJLENBQUNFLFVBQVUsR0FBR0gsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQ25DLElBQUksQ0FBQ1AsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDVSxLQUFLLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxHQUFHLEdBQUcscUNBQXFDO0VBQ3hEO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ1YsQ0FBQyxJQUFJLElBQUksQ0FBQ0ssVUFBVTtFQUMzQjtFQUVBTSxJQUFJQSxDQUFBLEVBQUc7SUFDTDtJQUNBLElBQUksQ0FBQ2QsR0FBRyxDQUFDZSxTQUFTLENBQ2hCLElBQUksQ0FBQ0wsS0FBSyxFQUNWLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxDQUFDVCxLQUFLLEVBQ1YsSUFBSSxDQUFDQyxNQUFNLEVBQ1gsSUFBSSxDQUFDQyxDQUFDLEVBQ04sSUFBSSxDQUFDRSxDQUFDLEVBQ04sSUFBSSxDQUFDSixLQUFLLEVBQ1YsSUFBSSxDQUFDQyxNQUFNLENBQ1o7RUFDSDtBQUNGO0FBRUEsK0RBQWVKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXJkZmVlZC8uL3NyYy9zY3JpcHRzL2JpcmQuanM/MzdmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCaXJkIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy53aWR0aCA9IDM1O1xuICAgIHRoaXMuaGVpZ2h0ID0gMzU7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLmRpcmVjdGlvblggPSBNYXRoLnJhbmRvbSgpICogNDtcbiAgICB0aGlzLmRpcmVjdGlvblkgPSBNYXRoLnJhbmRvbSgpICogNTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBcIi9pbWFnZXMvTkVTIC0gRHVjayBIdW50IC0gRHVja3MucG5nXCI7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy54IC09IHRoaXMuZGlyZWN0aW9uWDtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaXJkO1xuIl0sIm5hbWVzIjpbIkJpcmQiLCJjb25zdHJ1Y3RvciIsImN0eCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsImNhbnZhcyIsInkiLCJNYXRoIiwicmFuZG9tIiwiZGlyZWN0aW9uWCIsImRpcmVjdGlvblkiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwidXBkYXRlIiwiZHJhdyIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/bird.js\n");

/***/ }),

/***/ "./src/scripts/feeder.js":
/*!*******************************!*\
  !*** ./src/scripts/feeder.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage */ \"./src/scripts/stage.js\");\n\nclass Feeder {\n  constructor(ctx) {\n    this.width = 50;\n    this.height = 70;\n    this.x = 475;\n    this.y = 430;\n    this.image = new Image();\n    this.image.src = \"/images/Arcade - Blood Bros - Player 1.png\";\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.drawImage(this.image, 35, 30, this.width, this.height, this.x, this.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feeder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZWVkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEI7QUFFNUIsTUFBTUMsTUFBTSxDQUFDO0VBQ1hDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxHQUFHLEdBQUcsNENBQTRDO0lBQzdELElBQUksQ0FBQ1AsR0FBRyxHQUFHQSxHQUFHO0VBQ2hCO0VBRUFRLElBQUlBLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxTQUFTLENBQ2hCLElBQUksQ0FBQ0osS0FBSyxFQUNWLEVBQUUsRUFDRixFQUFFLEVBQ0YsSUFBSSxDQUFDSixLQUFLLEVBQ1YsSUFBSSxDQUFDQyxNQUFNLEVBQ1gsSUFBSSxDQUFDQyxDQUFDLEVBQ04sSUFBSSxDQUFDQyxDQUFDLEVBQ04sSUFBSSxDQUFDSCxLQUFLLEVBQ1YsSUFBSSxDQUFDQyxNQUFNLENBQ1o7RUFDSDtBQUNGO0FBRUEsK0RBQWVKLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXJkZmVlZC8uL3NyYy9zY3JpcHRzL2ZlZWRlci5qcz8yZTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFnZSBmcm9tIFwiLi9zdGFnZVwiO1xuXG5jbGFzcyBGZWVkZXIge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA3MDtcbiAgICB0aGlzLnggPSA0NzU7XG4gICAgdGhpcy55ID0gNDMwO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IFwiL2ltYWdlcy9BcmNhZGUgLSBCbG9vZCBCcm9zIC0gUGxheWVyIDEucG5nXCI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAzNSxcbiAgICAgIDMwLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkZXI7XG4iXSwibmFtZXMiOlsiU3RhZ2UiLCJGZWVkZXIiLCJjb25zdHJ1Y3RvciIsImN0eCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZHJhdyIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/feeder.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBV0EsQ0FBQSxFQUFHLENBQUM7QUFDakI7QUFFQSwrREFBZUQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpcmRmZWVkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/stage.js":
/*!******************************!*\
  !*** ./src/scripts/stage.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feeder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feeder */ \"./src/scripts/feeder.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/scripts/bird.js\");\n\n\nclass Stage {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.birds = [];\n    this.animate = this.animate.bind(this);\n    this.animate();\n    setInterval(() => {\n      this.birds.push(new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx));\n    }, 1000);\n  }\n  animate() {\n    const background = new Image();\n    const feeder = new _feeder__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n    background.src = \"/images/stage.png\";\n    this.ctx.clearRect(0, 0, 1000, 500);\n    this.ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n    this.birds.forEach(bird => {\n      bird.update();\n      bird.draw();\n    });\n    feeder.draw();\n    requestAnimationFrame(this.animate);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBOEI7QUFDSjtBQUUxQixNQUFNRSxLQUFLLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDRCxPQUFPLEVBQUU7SUFDZEUsV0FBVyxDQUFDLE1BQU07TUFDaEIsSUFBSSxDQUFDSCxLQUFLLENBQUNJLElBQUksQ0FBQyxJQUFJUiw2Q0FBSSxDQUFDLElBQUksQ0FBQ0csR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNWO0VBRUFFLE9BQU9BLENBQUEsRUFBRztJQUNSLE1BQU1JLFVBQVUsR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDOUIsTUFBTUMsTUFBTSxHQUFHLElBQUlaLCtDQUFNLENBQUMsSUFBSSxDQUFDSSxHQUFHLENBQUM7SUFDbkNNLFVBQVUsQ0FBQ0csR0FBRyxHQUFHLG1CQUFtQjtJQUNwQyxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNuQyxJQUFJLENBQUNWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDTCxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRU0sTUFBTSxDQUFDQyxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO0lBRWpFLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxPQUFPLENBQUVDLElBQUksSUFBSztNQUMzQkEsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDYkQsSUFBSSxDQUFDRSxJQUFJLEVBQUU7SUFDYixDQUFDLENBQUM7SUFDRlYsTUFBTSxDQUFDVSxJQUFJLEVBQUU7SUFDYkMscUJBQXFCLENBQUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDO0VBQ3JDO0FBQ0Y7QUFFQSwrREFBZUosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpcmRmZWVkLy4vc3JjL3NjcmlwdHMvc3RhZ2UuanM/NmFhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmVlZGVyIGZyb20gXCIuL2ZlZWRlclwiO1xuaW1wb3J0IEJpcmQgZnJvbSBcIi4vYmlyZFwiO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmlyZHMgPSBbXTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmJpcmRzLnB1c2gobmV3IEJpcmQodGhpcy5jdHgpKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZlZWRlciA9IG5ldyBGZWVkZXIodGhpcy5jdHgpO1xuICAgIGJhY2tncm91bmQuc3JjID0gXCIvaW1hZ2VzL3N0YWdlLnBuZ1wiO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA1MDApO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5iaXJkcy5mb3JFYWNoKChiaXJkKSA9PiB7XG4gICAgICBiaXJkLnVwZGF0ZSgpO1xuICAgICAgYmlyZC5kcmF3KCk7XG4gICAgfSk7XG4gICAgZmVlZGVyLmRyYXcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTtcbiJdLCJuYW1lcyI6WyJGZWVkZXIiLCJCaXJkIiwiU3RhZ2UiLCJjb25zdHJ1Y3RvciIsImN0eCIsImJpcmRzIiwiYW5pbWF0ZSIsImJpbmQiLCJzZXRJbnRlcnZhbCIsInB1c2giLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJmZWVkZXIiLCJzcmMiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJiaXJkIiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/stage.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXJkZmVlZC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;