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

/***/ "./src/js/home-page.js":
/*!*****************************!*\
  !*** ./src/js/home-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageFooter\": () => (/* binding */ homePageFooter),\n/* harmony export */   \"homePageHeader\": () => (/* binding */ homePageHeader),\n/* harmony export */   \"homePageMain\": () => (/* binding */ homePageMain)\n/* harmony export */ });\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/facebook.svg */ \"./src/img/facebook.svg\");\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/instagram.svg */ \"./src/img/instagram.svg\");\n/* harmony import */ var _img_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/twitter.svg */ \"./src/img/twitter.svg\");\n/* harmony import */ var _img_restaurant_photo_pixabay_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/restaurant-photo-pixabay.png */ \"./src/img/restaurant-photo-pixabay.png\");\n\n\n\n\n\n\nconst homePageContent = () => {\n  //\n};\n\nconst homePageHeader = () => {\n  //Creates nav with 3 items in it\n  const createHomePageNav = () => {\n    const nav = document.createElement(\"nav\");\n\n    const navLinksUl = document.createElement(\"ul\");\n\n    let menuNavLink = document.createElement(\"li\");\n    menuNavLink.textContent = \"Menu\";\n    menuNavLink.classList.add(\"menu-nav-link\");\n    navLinksUl.appendChild(menuNavLink);\n\n    let aboutUsNavLink = document.createElement(\"li\");\n    aboutUsNavLink.textContent = \"Our Story\";\n    aboutUsNavLink.classList.add(\"about-us-nav-link\");\n    navLinksUl.appendChild(aboutUsNavLink);\n\n    let contactUsNavLink = document.createElement(\"li\");\n    contactUsNavLink.textContent = \"Get in Touch\";\n    contactUsNavLink.classList.add(\"contact-us-nav-link\");\n    navLinksUl.appendChild(contactUsNavLink);\n\n    nav.appendChild(navLinksUl);\n    return nav;\n  };\n\n  const createHeader = () => {\n    const header = document.createElement(\"header\");\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Fakestaurant\";\n    header.appendChild(heading);\n    return header;\n  };\n  // ...Contact Info... <- (height < 5%, sticky, black background with white text)\n\n  const header = createHeader();\n  header.appendChild(createHomePageNav());\n\n  return header;\n};\n\nconst homePageMain = () => {\n  const main = document.createElement(\"main\");\n  return main;\n};\n\nconst homePageFooter = () => {\n  // const contactContainer = document.createElement(\"div\");\n  // const phoneNumber = document.createElement(\"div\");\n  // const address = document.createElement(\"div\");\n  const createIcons = () => {\n    const instagramIcon = document.createElement(\"img\");\n    instagramIcon.src = _img_instagram_svg__WEBPACK_IMPORTED_MODULE_1__;\n    footer.appendChild(instagramIcon);\n\n    const facebookIcon = document.createElement(\"img\");\n    facebookIcon.src = _img_facebook_svg__WEBPACK_IMPORTED_MODULE_0__;\n    footer.appendChild(facebookIcon);\n\n    const twitterIcon = document.createElement(\"img\");\n    twitterIcon.src = _img_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;\n    footer.appendChild(twitterIcon);\n  };\n\n  const footer = document.createElement(\"footer\");\n  createIcons();\n  return footer;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/home-page.js?");

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25f258e4bb39a7967b5e.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/facebook.svg?");

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51f90461c0dfed370bf6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/instagram.svg?");

/***/ }),

/***/ "./src/img/restaurant-photo-pixabay.png":
/*!**********************************************!*\
  !*** ./src/img/restaurant-photo-pixabay.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e385d3f06db1ce602f83.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/restaurant-photo-pixabay.png?");

/***/ }),

/***/ "./src/img/twitter.svg":
/*!*****************************!*\
  !*** ./src/img/twitter.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77a2f5734999924fb343.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/twitter.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/home-page.js");
/******/ 	
/******/ })()
;