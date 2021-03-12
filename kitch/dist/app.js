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

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\r\nvar myName = 'Jake Lovett'; //This is my name\r\nvar numberStates = 50; //Number of states in the United States of America\r\nvar statesPlus = numberStates + 4;\r\nvar evenMore = numberStates + 5; //States plus four and five\r\nfunction sayHello() {\r\n    alert('Hello World!'); //Hello world alert box\r\n}\r\nfunction checkAge(userName, userAge) {\r\n    if (userAge < 21) {\r\n        alert('Sorry, ' + userName + ' you are not old enough to view this page!'); //checkAge text syntax\r\n    }\r\n}\r\n//this is how to add the type to an array of objects\r\nvar people = [\r\n    { name: 'Charles', age: 21 },\r\n    { name: 'Abby', age: 27 },\r\n    { name: 'James', age: 18 },\r\n    { name: 'John', age: 17 }, //data\r\n];\r\npeople.forEach(function (person) {\r\n    //using as alternative to the 'i' loop\r\n    checkAge(person.name, person.age);\r\n});\r\n// for(i = 0; i < people.length; i++) {\r\n//     let name = people[i].name\r\n//     let age = people[i].age\r\n//     checkAge(name, age);\r\n// }\r\nvar veggies = ['mushrooms', 'bell peppers', 'carrots'];\r\nfor (var i = 0; i < veggies.length; i++) {\r\n    //???\r\n    console.log(veggies[i]);\r\n}\r\nfunction getLength(word) {\r\n    var wordLength = word.length;\r\n    if (wordLength % 2 === 0) {\r\n        console.log('The world is nice and even!'); //\r\n    }\r\n    else {\r\n        console.log('The world is an odd place!');\r\n    }\r\n    console.log(wordLength);\r\n}\r\ngetLength('Hello World!');\r\n\n\n//# sourceURL=webpack://kitch/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;