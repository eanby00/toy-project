/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclipboard_picture_gallary"]("main",{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const TYPE_IMAGE = \"image/png\";\r\nconst image = document.querySelector(\"img\");\r\n\r\nclass ClipboardHelper {\r\n  static async readImage() {\r\n    const clipboardData = await navigator.clipboard.read();\r\n    const data = clipboardData[0];\r\n    if (data.types[0] !== TYPE_IMAGE) {\r\n      return;\r\n    }\r\n    const blobData = await data.getType(TYPE_IMAGE);\r\n    return window.URL.createObjectURL(blobData);\r\n  }\r\n}\r\n\r\nclass App {\r\n  static init() {\r\n    // const timer = setInterval(() => {\r\n    //   console.log(\"test\");\r\n    // }, 10000);\r\n    console.log(ClipboardHelper.readImage());\r\n  }\r\n}\r\n\r\nApp.init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpcGJvYXJkX3BpY3R1cmVfZ2FsbGFyeS8uL3NyYy9hcHAuanM/MTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUWVBFX0lNQUdFID0gXCJpbWFnZS9wbmdcIjtcclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG5cclxuY2xhc3MgQ2xpcGJvYXJkSGVscGVyIHtcclxuICBzdGF0aWMgYXN5bmMgcmVhZEltYWdlKCkge1xyXG4gICAgY29uc3QgY2xpcGJvYXJkRGF0YSA9IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGNsaXBib2FyZERhdGFbMF07XHJcbiAgICBpZiAoZGF0YS50eXBlc1swXSAhPT0gVFlQRV9JTUFHRSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBibG9iRGF0YSA9IGF3YWl0IGRhdGEuZ2V0VHlwZShUWVBFX0lNQUdFKTtcclxuICAgIHJldHVybiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iRGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIHN0YXRpYyBpbml0KCkge1xyXG4gICAgLy8gY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxuICAgIC8vIH0sIDEwMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKENsaXBib2FyZEhlbHBlci5yZWFkSW1hZ2UoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHAuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2e591d178561a4e10299")
/******/ })();
/******/ 
/******/ }
);