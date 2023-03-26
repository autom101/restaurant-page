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

/***/ "./src/js/contact-us.js":
/*!******************************!*\
  !*** ./src/js/contact-us.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactUs\": () => (/* binding */ contactUs)\n/* harmony export */ });\n//For the contact us tab of the restaurant\nconst contactUs = () => {\n  //Create filler text for contact us\n  const createContactText = () => {\n    const contactUsInfo = [[], [], [], [], []];\n    for (let i = 0; i < contactUsInfo.length; i++) {\n      contactUsInfo[i] = document.createElement(\"p\");\n    }\n    contactUsInfo[0].textContent =\n      \"Our staff are ready to help with all of your needs to the best of their abilities!\";\n    contactUsInfo[1].textContent =\n      \"We would love to hear from you! If you have any questions, comments or suggestions regarding our restaurant, please get in touch with us through: \";\n    contactUsInfo[2].textContent = \"Phone: (123) 456-7890\";\n    contactUsInfo[3].textContent = \"Email: info@fakestaurant.com\";\n    contactUsInfo[4].textContent =\n      \"Come by our restaurant and experience our culinary delights for yourself!\";\n    return contactUsInfo;\n  };\n  //Create address for contact us\n  const createAddress = () => {\n    const contactAddressArray = [[], [], [], []];\n\n    for (let i = 0; i < contactAddressArray.length; i++) {\n      contactAddressArray[i] = document.createElement(\"span\");\n    }\n\n    contactAddressArray[0].textContent = \"Fakestaurant\";\n    contactAddressArray[0].classList.add(\"logo-about\");\n    contactAddressArray[1].textContent = \"123 Fake ST\";\n    contactAddressArray[2].textContent = \"Edmonton, AB\";\n    contactAddressArray[3].textContent = \"Canada, A1A 9Z9\";\n\n    return contactAddressArray;\n  };\n\n  const createContacts = () => {\n    const contactDiv = document.createElement(\"div\");\n    const contactHeading = document.createElement(\"h2\");\n    contactHeading.textContent = \"Stay in Touch!\";\n    contactHeading.style.textAlign = \"center\";\n\n    const contactUsInfo = createContactText();\n    const contactAddress = createAddress();\n\n    contactDiv.appendChild(contactHeading);\n    for (let i = 0; i < contactUsInfo.length; i++) {\n      contactDiv.appendChild(contactUsInfo[i]);\n    }\n    for (let i = 0; i < contactAddress.length; i++) {\n      contactDiv.appendChild(contactAddress[i]);\n    }\n    return contactDiv;\n  };\n\n  const contacts = document.createElement(\"section\");\n  contacts.classList.add(\"contact-us\");\n  contacts.appendChild(createContacts());\n  return contacts;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/js/contact-us.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/contact-us.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;