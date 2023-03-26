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

/***/ "./src/js/about-us.js":
/*!****************************!*\
  !*** ./src/js/about-us.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ourStory\": () => (/* binding */ ourStory)\n/* harmony export */ });\n/* harmony import */ var _img_about_us_picture_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/about-us-picture.jpg */ \"./src/img/about-us-picture.jpg\");\n\n\n//For creating the abous-us section of the restaurant\nconst ourStory = () => {\n  const createAbout = () => {\n    const aboutUsDiv = document.createElement(\"div\");\n    const aboutHeading = document.createElement(\"h2\");\n    const aboutPicture = document.createElement(\"img\");\n    aboutPicture.src = _img_about_us_picture_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    aboutPicture.title = \"Photo by Mile Modic on Unsplash\";\n\n    aboutHeading.textContent = \"Our Story\";\n    aboutHeading.style.textAlign = \"center\";\n\n    const aboutUsInfo = [[], [], [], []];\n    for (let i = 0; i < aboutUsInfo.length; i++) {\n      aboutUsInfo[i] = document.createElement(\"p\");\n    }\n    aboutUsInfo[0].textContent =\n      \"Lorem ipsum dolor sit amet. Eos culpa maxime ea beatae voluptatum vel recusandae aliquid. Ea iure quibusdam aut autem dolores et tenetur modi et galisum quisquam aut commodi aspernatur et dolorem similique? Est iste totam et rerum tenetur qui nisi adipisci et reprehenderit quas.\";\n    aboutUsInfo[1].textContent =\n      \"Et optio illum quo sint galisum ea error quis et labore repellendus. Nam voluptatem galisum aut reiciendis cupiditate ex sequi repellat aut aperiam reiciendis. Qui omnis repellendus ut corporis eveniet non galisum similique ea consequatur iure et possimus delectus a officia cupiditate.\";\n    aboutUsInfo[2].textContent =\n      \"At nihil quas hic officia laboriosam vel quaerat saepe. Eos consectetur culpa hic maiores saepe nam dolorem assumenda ea voluptatem internos eos deserunt fugiat. Sit provident quod nam sunt repudiandae a officia assumenda aut ipsa galisum non ipsa corporis ex tenetur culpa cum molestiae enim. Est officia architecto sit culpa voluptas aut quaerat odio sed enim numquam ex voluptatem labore est iusto fugiat in galisum laudantium!\";\n    aboutUsInfo[3].textContent =\n      \"Ut commodi necessitatibus quo blanditiis voluptas id iste voluptas ex maiores nulla est vitae quisquam et laboriosam sint! Rem odio omnis aut ipsum voluptas et laudantium labore ut rerum voluptas At consequatur animi. In officiis minus ea culpa voluptatem est voluptate nihil non consequatur excepturi ab facilis quia et amet asperiores. Ex ullam dolorem vel omnis quasi sed tempore doloribus sit ipsa illum.\";\n\n    aboutUsDiv.appendChild(aboutHeading);\n    aboutUsDiv.appendChild(aboutPicture);\n    for (let i = 0; i < aboutUsInfo.length; i++) {\n      aboutUsDiv.appendChild(aboutUsInfo[i]);\n    }\n    return aboutUsDiv;\n  };\n  const about = document.createElement(\"section\");\n  about.classList.add(\"about-us\");\n  about.appendChild(createAbout());\n  return about;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/about-us.js?");

/***/ }),

/***/ "./src/img/about-us-picture.jpg":
/*!**************************************!*\
  !*** ./src/img/about-us-picture.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f525a18804eaa27ec12.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/about-us-picture.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/about-us.js");
/******/ 	
/******/ })()
;