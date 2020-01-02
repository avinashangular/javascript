/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _projecteuler = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ProjectEuler = exports.ProjectEuler = function () {
  function SumOfNaturalNumber(startNumber, EndNumber) {
    var result = 0;
    while (startNumber < EndNumber) {
      if (startNumber % 3 == 0 || startNumber % 5 == 0) {
        result += startNumber;
      }
      startNumber++;
    }
    return result;
  }

  function FabonciiSeries(EndNumber) {
    var startNumber = 1;
    var faboncii = [];
    var sumOfFaboncii = 0;
    while (startNumber < EndNumber) {
      if (faboncii.length > 1) {
        startNumber = faboncii[faboncii.length - 2] + faboncii[faboncii.length - 1];
      }
      if (startNumber < EndNumber) {
        faboncii.push(startNumber);
        if (startNumber % 2 == 0) {
          sumOfFaboncii += startNumber;
        }
      }
    }
    return sumOfFaboncii;
  }

  function LargetPrimeFactor(num) {
    var temp = 2;
    var primeFactorList = [];
    while (num / 2 >= temp) {
      if (num % temp == 0) {
        primeFactorList.push(temp);
      }
      temp++;
    }
    return primeFactorList;
  }

  return {
    SumOfNaturalNumber: SumOfNaturalNumber,
    FabonciiSeries: FabonciiSeries,
    LargetPrimeFactor: LargetPrimeFactor
  };
}();

var result = ProjectEuler.LargetPrimeFactor(600);
console.log(result);

/***/ })
/******/ ]);