/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var index = 0;
var answers = [];
var questionData = [{
  question: "What has prevented you from getting hearing aids sooner?",
  box1: "Not sure if I need them",
  box2: "I can’t afford them",
  box3: "I need more information",
  box4: "I’ve been too busy"
}, {
  question: "How old are your hearing aids?",
  box1: "2 years old or less",
  box2: "3 years old",
  box3: "4 years old",
  box4: "5 years old or more"
}, {
  question: "How much does hearing loss restrict you in your daily life?",
  box1: "Not at all",
  box2: "Barely",
  box3: "Moderately",
  box4: "Severely"
}, {
  question: "When do you want to improve your hearing?",
  box1: "As soon as possible",
  box2: "Within the next few weeks",
  box3: "Within the next few months",
  box4: "I don't know"
}, {
  question: "What is your current employment status?",
  box1: "Employed",
  box2: "Unemployed",
  box3: "Retired",
  box4: "Homemaker"
}, {
  question: "Thanks for answering, please see your answers below:"
}];
window.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
});
var radios = document.getElementsByName('radAnswer');
var left = document.getElementById('la');

var leftClickHandler = function leftClickHandler() {
  if (index === 0) {
    return;
  }

  if (index >= 1) {
    answers.pop();
    index--;
    document.getElementById("topQuestion").textContent = questionData[index]['question'];
    document.getElementById("answer1").textContent = questionData[index]['box1'];
    document.getElementById("answer2").textContent = questionData[index]['box2'];
    document.getElementById("answer3").textContent = questionData[index]['box3'];
    document.getElementById("answer4").textContent = questionData[index]['box4'];
  }
};

left.addEventListener('click', leftClickHandler);
var next = document.getElementById('next');
var right = document.getElementById('ra');

var radioHandler = function radioHandler() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      answers.push(radios[i].id);
      document.getElementById(radios[i].id).checked = false;

      if (index < 4) {
        index++;
        document.getElementById("topQuestion").textContent = questionData[index]['question'];
        document.getElementById("answer1").textContent = questionData[index]['box1'];
        document.getElementById("answer2").textContent = questionData[index]['box2'];
        document.getElementById("answer3").textContent = questionData[index]['box3'];
        document.getElementById("answer4").textContent = questionData[index]['box4'];
        break;
      }

      if (index === 4) {
        index++;
        document.getElementById("topQuestion").textContent = questionData[index]['question'];
        document.getElementById("answers").style.display = 'none';
        var localPlaceholder = document.getElementById('success');
        var newList = '';

        for (i = 0; i < answers.length; i++) {
          newList += '<li>' + questionData[i][answers[i]] + '</li>';
        }

        localPlaceholder.innerHTML += newList;
      }
    }
  }
};

next.addEventListener('click', radioHandler);
right.addEventListener('click', radioHandler);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background: white;\n    font-family: 'Open Sans', sans-serif;\n    color: #0c1e2b;\n    margin: 0;\n  }\n  \n  .container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    border: 2px solid red;\n  }\n  \n  .top {\n    background-color: #f2f2f2;\n    width: 100%;\n    height: 72px;\n  }\n  \n  .logos {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 10px;\n    max-width: 711px;\n    margin: 0 auto;\n  }\n  \n  .groupLogos {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  \n  .soloLogo {\n    width: 20%;\n  }\n  \n  .soloLogo img {\n      width: 100%;\n  }\n  \n  .content {\n    max-width: 711px;\n  }\n  \n  .hero {\n    height: 50%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    margin-top: 15vh;\n  }\n  \n  .heroTextDiv {\n    position: relative;\n  }\n  \n  .heroText {\n    font-size: 7vh;\n    font-size: clamp(2em, 6vh, 6em);\n    text-decoration: underline;\n    text-decoration-color: #ffae0d;\n  }\n  \n  .orangeStyle {\n    position: absolute;\n    background: #ffae0d;\n    height: 100%;\n    width: 4.5em;\n    z-index: -1;\n    margin-left: -2em;\n  }\n  \n  .carousel {\n    background: #f0f0f0;\n    margin-top: 20px;\n    margin-bottom: 40px;\n    text-align: center;\n    position: relative;\n  }\n  \n  #topQuestion {\n    margin-left: 20%;\n    margin-right: 20%;\n    padding-top: 6vh;\n  }\n  \n  .carouselForm {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  \n  ul {\n    list-style: none;\n  }\n  \n  .answer {\n    background: #ffffff;\n    width: 199px;\n    height: 77px;\n    margin: 10px;\n    padding: 15px;\n    border: 1px solid #a9a9a9;\n    font-size: 20px;\n  }\n  \n  .nextButton {\n    background: #ffae0d;\n    color: white;\n    border: none;\n    height: 4vh;\n    margin-top: 3vh;\n    margin-bottom: 3vh;\n    font-size: 21px;\n    width: 8em;\n  }\n  \n  .leftArrow {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n    transition-duration: 0.1s;\n    border: none;\n    font-size: 25px;\n    outline: 0;\n    left: 1%;\n    font-size: 40px;\n  }\n  \n  .rightArrow {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n    transition-duration: 0.1s;\n    border: none;\n    font-size: 25px;\n    outline: 0;\n    right: 1%;\n    font-size: 40px;\n  }\n  \n  .orange {\n    text-decoration: none;\n  }\n  \n  .blueText {\n    font-weight: bold;\n    color: navy;\n  }\n  \n  .description {\n    margin-top: 10px;\n  }\n\n  .description p {\n      line-height: 1.5;\n  }\n  \n  .prev-next {\n      position: absolute;\n      width: 100%;\n      height: 50px;\n      top: 50%;\n      top: calc( 50% - 25px);\n      left: 0;\n      box-sizing: border-box;\n  }\n  \n  @media (max-width: 480px) {\n    /* CSS */\n  \n    .container {\n      width: 100%;\n    }\n  \n    .hero {\n      height: 20%;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n      position: relative;\n      margin-top: 15vh;\n    }\n  \n    .hero img {\n      width: 100%;\n    }\n\n    .hero h1 {\n        margin-left: 5%;\n    }\n  \n    .top {\n      background-color: #f2f2f2;\n      position: absolute;\n      width: 100%;\n      height: 120px;\n      left: 0px;\n      top: 0px;\n    }\n  \n    .logos {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding-top: 7px;\n      flex-wrap: wrap;\n    }\n  \n    .content {\n      width: 100%;\n      max-width: initial;\n    }\n\n    .content .description {\n        width: 90%;\n        margin: 0 auto;\n    }\n  \n    .carousel {\n      width: 100%;\n    }\n\n    .heroText {\n        font-size: clamp(2em, 4vh, 4em);\n      }\n\n      .orangeStyle {\n          margin-left: 0;\n      }\n  \n  }\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;