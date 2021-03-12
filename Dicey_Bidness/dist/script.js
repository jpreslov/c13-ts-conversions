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

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ (() => {

eval("\r\nvar diceContainer = document.getElementById('dice-container'), generateDie = document.getElementById('generate-die'), sumDice = document.getElementById('sum-dice'), rollDice = document.getElementById('roll-dice');\r\n//so sick I'm so smart shout out mom shout out dad shout out 'hoo'\r\nvar diceArr = [];\r\ngenerateDie.addEventListener('click', function () {\r\n    var value = Math.floor(Math.random() * 6 + 1);\r\n    new Die(value);\r\n});\r\nsumDice.addEventListener('click', function () {\r\n    var sum = 0;\r\n    diceArr.forEach(function (die) { return (sum += die.value); });\r\n    alert(sum);\r\n});\r\nrollDice.addEventListener('click', function () { return diceArr.forEach(function (die) { return die.roll(); }); });\r\nvar Die = /** @class */ (function () {\r\n    function Die(value) {\r\n        var _this = this;\r\n        this.roll = function () {\r\n            var randomNum = Math.floor(Math.random() * 6 + 1);\r\n            _this.value = randomNum;\r\n            _this.div.innerHTML = String(_this.value);\r\n        };\r\n        this.value = value;\r\n        this.div = document.createElement('div');\r\n        this.div.className = 'dice';\r\n        this.div.addEventListener('click', function () { return _this.roll(); });\r\n        this.div.addEventListener('dblclick', function () {\r\n            var index = diceArr.indexOf(_this);\r\n            diceArr.splice(index, 1);\r\n            diceContainer.removeChild(_this.div);\r\n        });\r\n        this.roll();\r\n        diceContainer.appendChild(this.div);\r\n        diceArr.push(this);\r\n    }\r\n    return Die;\r\n}());\r\n\n\n//# sourceURL=webpack://Dicey_Bidness/./script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.ts"]();
/******/ 	
/******/ })()
;