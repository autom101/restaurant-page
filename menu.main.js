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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _img_menu_item_images_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu-item-images/chicken-wings.jpg */ \"./src/img/menu-item-images/chicken-wings.jpg\");\n/* harmony import */ var _img_menu_item_images_poutine_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu-item-images/poutine.jpg */ \"./src/img/menu-item-images/poutine.jpg\");\n/* harmony import */ var _img_menu_item_images_fajitas_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu-item-images/fajitas.jpg */ \"./src/img/menu-item-images/fajitas.jpg\");\n/* harmony import */ var _img_menu_item_images_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/menu-item-images/caesar-salad.jpg */ \"./src/img/menu-item-images/caesar-salad.jpg\");\n/* harmony import */ var _img_menu_item_images_bbq_beans_and_rice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/menu-item-images/bbq-beans-and-rice.jpg */ \"./src/img/menu-item-images/bbq-beans-and-rice.jpg\");\n/* harmony import */ var _img_menu_item_images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/menu-item-images/ice-cream.jpg */ \"./src/img/menu-item-images/ice-cream.jpg\");\n// For creating the menu page items\n\n\n\n\n\n\n\nconst menu = () => {\n  const createMenuItem = (numberOfMenuItems) => {\n    const menuItems = [[], [], [], [], [], []];\n    for (let i = 0; i < numberOfMenuItems; i++) {\n      menuItems[i] = document.createElement(\"section\");\n      menuItems[i][0] = document.createElement(\"h2\");\n      menuItems[i][1] = document.createElement(\"p\");\n      menuItems[i][2] = document.createElement(\"img\");\n\n      menuItems[i].appendChild(menuItems[i][2]);\n      menuItems[i].appendChild(menuItems[i][0]);\n      menuItems[i].appendChild(menuItems[i][1]);\n\n      menuItems[i].classList.add(\"menuItems\");\n    }\n\n    menuItems[0][2].src = _img_menu_item_images_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuItems[0][2].title = \"Photo by Chad Montano on Unsplash\";\n    menuItems[0][0].textContent = \"Chicken Wings\";\n    menuItems[0][1].textContent =\n      \"Chicken wings can be cooked in many different ways - you can fry, bake, broil, or even slow-cook them. For the healthiest preparation, try baking or broiling the wings and adding a light seasoning for flavor. You can also balance out the greasy taste with a favorite sauce. Serve chicken wings with a side salad, crudité, or fresh veggie sticks. Enjoy!\";\n\n    menuItems[1][2].src = _img_menu_item_images_poutine_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    menuItems[1][2].title = \"Photo by Taine Noble on Unsplash\";\n    menuItems[1][0].textContent = \"Poutine\";\n    menuItems[1][1].textContent =\n      \"Poutine is a famous Canadian dish, traditionally made with French fries, cheese curds, and gravy. It was invented in the late 1950s in rural Quebec and is now a regular item on menus across Canada. It's become a cultural icon, with many variations using ingredients such as bacon, mushrooms, and pulled pork. It can be a meal on its own or a side dish. Poutine is hearty, cheesy, and comforting, making it a popular choice among Canadians.\";\n\n    menuItems[2][2].src = _img_menu_item_images_fajitas_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    menuItems[2][2].title = \"Photo by micheile henderson on Unsplash\";\n    menuItems[2][0].textContent = \"Fajitas\";\n    menuItems[2][1].textContent =\n      \"Fajitas are a classic Tex-Mex favorite. They consist of strips of steak, chicken or shrimp with bell peppers and onions. The meat is cooked up in a skillet, combined with the peppers and onions, and then served with tortillas, guacamole, sour cream and salsa. Fajitas are great for tacos, burritos or eating just as they are. You can adjust spice levels and ingredients to your liking and make amazingly tasty creations!\";\n\n    menuItems[3][2].src = _img_menu_item_images_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    menuItems[3][2].title = \"Photo by Ryan Concepcion on Unsplash\";\n    menuItems[3][0].textContent = \"Caesar Salad\";\n    menuItems[3][1].textContent =\n      \"Enjoy our classic Caesar Salad! Our salad is made with freshly torn romaine lettuce, shaved Parmesan cheese, and homemade croutons, all lightly and deliciously dressed in our signature Caesar dressing. Enjoy the perfect side dish to any meal - or enjoy it on its own!\";\n\n    menuItems[4][2].src = _img_menu_item_images_bbq_beans_and_rice_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    menuItems[4][2].title = \"Photo by Taine Noble on Unsplash\";\n    menuItems[4][0].textContent = \"BBQ Beans & Rice\";\n    menuItems[4][1].textContent =\n      \"BBQ beans and rice is a classic Southern-style dish packed with flavor. Our version is made with beans slow-cooked in a rich smoky BBQ sauce and served over fluffy white rice. It's perfect as a side dish or as a main course. Comfort food that's sure to bring a smile to your face!\";\n\n    menuItems[5][2].src = _img_menu_item_images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    menuItems[5][2].title = \"Photo by Lama Roscu on Unsplash\";\n    menuItems[5][0].textContent = \"In-house Ice-cream\";\n    menuItems[5][1].textContent =\n      \"Our in-house ice-cream is made with fresh and natural ingredients for a sweet and creamy experience. Our flavours range from the classic chocolate and vanilla to unique twists such as orange mango and cinnamon ginger. Every scoop is carefully crafted to provide a memorable and delicious taste. Enjoy this indulgent treat as a refreshing treat or as a special addition to any dessert.\";\n\n    for (let i = 0; i < numberOfMenuItems; i++) {\n      menu.appendChild(menuItems[i]);\n    }\n  };\n\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n  createMenuItem(6);\n  return menu;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/menu.js?");

/***/ }),

/***/ "./src/img/menu-item-images/bbq-beans-and-rice.jpg":
/*!*********************************************************!*\
  !*** ./src/img/menu-item-images/bbq-beans-and-rice.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29bae415b61f83af673f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/bbq-beans-and-rice.jpg?");

/***/ }),

/***/ "./src/img/menu-item-images/caesar-salad.jpg":
/*!***************************************************!*\
  !*** ./src/img/menu-item-images/caesar-salad.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c172457941d27917a328.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/caesar-salad.jpg?");

/***/ }),

/***/ "./src/img/menu-item-images/chicken-wings.jpg":
/*!****************************************************!*\
  !*** ./src/img/menu-item-images/chicken-wings.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b613797e35049970a22.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/chicken-wings.jpg?");

/***/ }),

/***/ "./src/img/menu-item-images/fajitas.jpg":
/*!**********************************************!*\
  !*** ./src/img/menu-item-images/fajitas.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56aed8432328bb87b07f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/fajitas.jpg?");

/***/ }),

/***/ "./src/img/menu-item-images/ice-cream.jpg":
/*!************************************************!*\
  !*** ./src/img/menu-item-images/ice-cream.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3205f7862d7d2567be1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/ice-cream.jpg?");

/***/ }),

/***/ "./src/img/menu-item-images/poutine.jpg":
/*!**********************************************!*\
  !*** ./src/img/menu-item-images/poutine.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be31847e5110c1d0962a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-images/poutine.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/menu.js");
/******/ 	
/******/ })()
;