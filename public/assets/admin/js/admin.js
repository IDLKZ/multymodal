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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js":
/*!***************************************************************************!*\
  !*** ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/****************************************************************************************************
 * @name:       LivIconsEvo.defaults.js - the default options for LivIcons (Live Icons) Evolution
 * @version:    2.8.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 * @copyright:  (c) 2013-2019 DeeThemes (https://codecanyon.net/user/DeeThemes)
 * @licenses:   https://codecanyon.net/licenses/regular
                https://codecanyon.net/licenses/extended
*****************************************************************************************************/
if (typeof jQuery === 'undefined') {
  window.alert('LivIcons Evolution Script requires jQuery (https://jquery.com)!');
  throw new Error('LivIcons Evolution Script requires jQuery (https://jquery.com)!');
}

function LivIconsEvoDefaults() {
  "use strict";

  var defaultOptions = {
    pathToFolder: '../../../app-assets/fonts/LivIconsEvo/svg/',
    //the path from root of your site to folder with icons. Also may be as URL, like 'http://yoursite.com/path/to/LivIconsEvo/svg/'
    name: 'bell.svg',
    //the default icon name
    //visualization options
    style: 'original',
    //'original', 'solid', filled', 'lines' or ('lines-alt' / 'linesAlt')
    size: '60px',
    //default size
    strokeStyle: 'original',
    //'original', 'round' or 'square'
    strokeWidth: 'original',
    //'original' or any value in pixels
    tryToSharpen: true,
    //apply or not micro shifts of SVG shapes to try to make them more sharp (crisp)
    rotate: 'none',
    //'none' or any value in deg [0 ... 360]
    flipHorizontal: false,
    flipVertical: false,
    strokeColor: '#22A7F0',
    //when style opt is 'filled' or 'lines' or ('lines-alt' / 'linesAlt')
    strokeColorAction: '#b3421b',
    //when 'style' is 'original', 'filled' or 'lines' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
    strokeColorAlt: '#F9B32F',
    //when style opt is ('lines-alt' / 'linesAlt')
    strokeColorAltAction: '#ab69c6',
    //when 'style' is ('lines-alt' / 'linesAlt') and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
    fillColor: '#91e9ff',
    //when style opt is 'filled'
    fillColorAction: '#ff926b',
    //when 'style' is 'original' or 'filled' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
    solidColor: '#6C7A89',
    //when style opt is 'solid'
    solidColorAction: '#4C5A69',
    //when 'style' is 'solid' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
    solidColorBg: '#ffffff',
    //when style opt is 'solid'
    solidColorBgAction: '#ffffff',
    //when 'style' is 'solid'
    colorsOnHover: 'none',
    //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
    colorsHoverTime: 0.3,
    //seconds
    colorsWhenMorph: 'none',
    //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
    brightness: 0.10,
    // brightness change when 'lighter' or 'darker' (10% by default)
    saturation: 0.07,
    // saturation change when 'lighter' or 'darker' (7% by default)
    morphState: 'start',
    //'start' or 'end' (initial state for animating position)
    morphImage: 'none',
    //'none' or a URL to your image (better to use an image with equal width and height)
    allowMorphImageTransform: false,
    //if true the inside image will rotate and/or flip with a morph icon together
    strokeWidthFactorOnHover: 'none',
    //'none' or numeric value. For ex., for increase twice set the option to 2
    strokeWidthOnHoverTime: 0.3,
    //seconds
    keepStrokeWidthOnResize: false,
    //animation options
    animated: true,
    //if false, an icon is static
    eventType: 'hover',
    //'click', 'hover' or 'none'
    eventOn: 'self',
    //'self', 'parent', 'grandparent' or any ID (#some_id) or class (.some_class)
    autoPlay: false,
    //be careful with true value
    delay: 0,
    //value in seconds
    duration: 'default',
    //'default' or value in seconds
    repeat: 'default',
    //'default', 'loop' or integer number of repeats
    repeatDelay: 'default',
    //'default' or value in seconds
    drawOnViewport: false,
    viewportShift: 'oneHalf',
    //'none', ('one-half' / 'oneHalf'), ('one-third' / 'oneThird') or 'full'
    drawDelay: 0,
    //seconds
    drawTime: 1,
    //seconds
    drawStagger: 0.1,
    //seconds
    drawStartPoint: 'middle',
    //'start', 'middle' or 'end'
    drawColor: 'same',
    //'same' or any desired color value (HEX)
    drawColorTime: 1,
    //seconds
    drawReversed: false,
    //true will reverse the order of shapes drawing
    drawEase: 'Power1.easeOut',
    //default ease
    eraseDelay: 0,
    //seconds
    eraseTime: 1,
    //seconds
    eraseStagger: 0.1,
    //seconds
    eraseStartPoint: 'middle',
    //'start', 'middle' or 'end'
    eraseReversed: true,
    //true will reverse the order of shapes erasing
    eraseEase: 'Power1.easeOut',
    //default ease
    touchEvents: false,
    //apply or not special events handlers for touch devices
    //callback functions
    beforeAdd: false,
    afterAdd: false,
    beforeUpdate: false,
    afterUpdate: false,
    beforeRemove: false,
    afterRemove: false,
    beforeDraw: false,
    afterDraw: false,
    duringDraw: false,
    beforeErase: false,
    afterErase: false,
    duringErase: false,
    beforeAnim: false,
    afterAnim: false,
    duringAnim: false
  };

  if (defaultOptions.pathToFolder === '/EDIT THIS OPTION!/') {
    window.alert('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
    throw new Error('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
  }

  return defaultOptions;
}

/***/ }),

/***/ "./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js":
/*!**********************************************************************!*\
  !*** ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*****************************************************************************************************
 * @name:       LivIconsEvo.min.js - the main (minified) JS file of LivIcons (Live Icons) Evolution
 * @version:    2.8.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 * @copyright:  (c) 2013-2019 DeeThemes (https://codecanyon.net/user/DeeThemes)
 * @licenses:   https://codecanyon.net/licenses/regular
                https://codecanyon.net/licenses/extended
******************************************************************************************************/
(function (k, H) {
  function Q(b, a) {
    b.css("visibility", "hidden");
    var e = m(b.find("svg")[0]);
    e.attr({
      preserveAspectRatio: "xMinYMin meet"
    });
    var c = e.attr("viewBox").w / 2 + " " + e.attr("viewBox").h / 2;
    e.selectAll("desc").forEach(function (a) {
      "Created with Snap" === a.innerSVG() && k(a.node).text("LivIcons Evolution");
    });
    var f = k(e.node),
        x = e.select("g.lievo-main"),
        h = e.g().addClass("lievo-setrotation");
    e.prepend(h);
    h = h.g().addClass("lievo-setsharp");
    h = h.g().addClass("lievo-setflip");
    h.append(x);
    a.morph ? "end" === a.morphState ? (f.find("g.lievo-main g.lievo-morphstartstate").remove(), a.curMorphState = "end") : (f.find("g.lievo-main g.lievo-morphendstate").remove(), a.curMorphState = "start") : a.curMorphState = "not morph";

    switch (a.style) {
      case "solid":
        f.find("g.lievo-main g.lievo-solidicon").siblings(":not(g.lievo-common)").remove();
        break;

      case "lines":
      case "lines-alt":
      case "linesAlt":
        f.find("g.lievo-main g.lievo-lineicon").siblings(":not(g.lievo-common)").remove();
        break;

      default:
        f.find("g.lievo-main g.lievo-filledicon").siblings(":not(g.lievo-common)").remove();
    }

    f = x.rect(-19, -19, 4, 4).addClass("lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor").attr({
      fill: "none",
      stroke: "#ffffff",
      "stroke-width": 2,
      "stroke-linecap": "butt",
      "stroke-linejoin": "round",
      opacity: 0
    });
    e.attr("data-shift") && ("x" === e.attr("data-shift") ? f.attr("x", -20) : "y" === e.attr("data-shift") ? f.attr("y", -20) : "xy" === e.attr("data-shift") && f.attr({
      x: -20,
      y: -20
    }));
    "solid" === a.style && e.attr("data-solidshift") && ("x" === e.attr("data-solidshift") ? f.attr("x", -19.5) : "y" === e.attr("data-solidshift") ? f.attr("y", -19.5) : "xy" === e.attr("data-solidshift") && f.attr({
      x: -19.5,
      y: -19.5
    }));

    if (a.morph && a.morphImage) {
      if (f = e.select(".lievo-morphimage")) {
        var d = e.ptrn(0, 0, "100%", "100%", 0, 0, 0, 0);
        d.node.removeAttribute("viewBox");
        var l = d.attr("patternUnits", "userSpaceOnUse").addClass("lievo-morphpattern").toDefs().g();
      } else a.morphImage = !1;

      f = e.select(".lievo-morphimage").attr("fill");
      l.rect(0, 0, 60, 60).attr({
        fill: f,
        stroke: "#ffffff",
        "stroke-width": 0
      }).addClass("lievo-donotdraw");
    }

    var y = e.selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use");
    y.forEach(function (a) {
      k(a.node).attr("stroke") || a.attr({
        stroke: "none",
        "stroke-width": 0
      });
      k(a.node).attr("fill") || a.attr("fill", "none");
    });
    "round" === a.strokeStyle ? y.forEach(function (a) {
      "none" === a.attr("stroke") || a.hasClass("lievo-savelinecap") || (a.node.setAttribute("stroke-linecap", "round"), a.node.setAttribute("stroke-linejoin", "round"));
    }) : "square" === a.strokeStyle && y.forEach(function (a) {
      "none" === a.attr("stroke") || a.hasClass("lievo-savelinecap") || (a.node.setAttribute("stroke-linecap", "square"), a.node.setAttribute("stroke-linejoin", "miter"), a.attr("stroke-miterlimit") || a.attr("stroke-miterlimit", "10"));
    });
    y.forEach(function (a) {
      a.data("initStrokeWidth", a.attr("stroke-width"));
      a.data("initStrokeLinecap", a.attr("stroke-linecap"));
      a.data("initStrokeLinejoin", a.attr("stroke-linejoin"));
    });

    switch (a.style) {
      case "filled":
        y.forEach(function (b) {
          "none" === b.attr("stroke") || b.hasClass("lievo-savestroke") || b.attr("stroke", a.strokeColor);
          "none" === b.attr("fill") || b.hasClass("lievo-savefill") || b.attr("fill", a.fillColor);
          b.hasClass("lievo-likestroke") && b.attr("fill", a.strokeColor);
        });
        break;

      case "lines":
        y.forEach(function (b) {
          "none" === b.attr("stroke") || b.hasClass("lievo-savestroke") || b.attr("stroke", a.strokeColor);
          b.hasClass("lievo-savefill") || b.attr("fill", "none");
          b.hasClass("lievo-likestroke") && b.attr("fill", a.strokeColor);
        });
        break;

      case "lines-alt":
      case "linesAlt":
        y.forEach(function (b) {
          b.hasClass("lievo-altstroke") ? ("none" !== b.attr("stroke") && b.attr("stroke", a.strokeColorAlt), b.hasClass("lievo-likestroke") ? b.attr("fill", a.strokeColorAlt) : b.hasClass("lievo-savefill") || b.attr("fill", "none")) : ("none" === b.attr("stroke") || b.hasClass("lievo-savestroke") || b.attr("stroke", a.strokeColor), b.hasClass("lievo-likestroke") ? b.attr("fill", a.strokeColor) : b.hasClass("lievo-savefill") || b.attr("fill", "none"));
        });
        break;

      case "solid":
        y.forEach(function (b) {
          b.hasClass("lievo-solidbg") ? ("none" === b.attr("stroke") || b.hasClass("lievo-savestroke") || b.attr("stroke", a.solidColorBg), "none" === b.attr("fill") || b.hasClass("lievo-savefill") || b.attr("fill", a.solidColorBg)) : ("none" === b.attr("stroke") || b.hasClass("lievo-savestroke") || b.attr("stroke", a.solidColor), "none" === b.attr("fill") || b.hasClass("lievo-savefill") || b.attr("fill", a.solidColor));
        });
    }

    b.css("width", a.size);
    v && b.hasClass("livicon-evo-back-in-combined") && (b.parent(".livicon-evo-combined").css("width", a.size), b.css("width", "100%"));
    a.morph && a.morphImage && (l.image(a.morphImage, 0, 0, "100%", "100%"), d.select("image").attr("preserveAspectRatio", "xMidYMid slice"), e.select(".lievo-morphimage").attr("fill", d));

    var u,
        F = function F() {
      a.scaleStrokeFactor = b.width() / 60;
      0 >= a.scaleStrokeFactor && (a.scaleStrokeFactor = 1);
      "original" !== a.strokeWidth ? (y.forEach(function (b) {
        if ("none" !== b.attr("stroke")) {
          var c = ("" + a.strokeWidth).replace(/[0-9.]/g, ""),
              E = b.data("initStrokeWidth").replace(/[^0-9.]/g, "") / 2;
          E *= +("" + a.strokeWidth).replace(/[^0-9.]/g, "") / a.scaleStrokeFactor;
          b.node.setAttribute("stroke-width", E + c);
          b.data("curStrokeWidth", E + c);
        }
      }), u = ("" + a.strokeWidth).replace(/[^0-9.]/g, "") / a.scaleStrokeFactor / 2) : a.tryToSharpen && .5 > a.scaleStrokeFactor ? (y.forEach(function (b) {
        if ("none" !== b.attr("stroke")) {
          var c = b.data("initStrokeWidth").replace(/[0-9.]/g, ""),
              E = b.data("initStrokeWidth").replace(/[^0-9.]/g, "") / 2;
          E *= 1 / a.scaleStrokeFactor;
          b.node.setAttribute("stroke-width", E + c);
          b.data("curStrokeWidth", E + c);
        }
      }), u = 1 / a.scaleStrokeFactor / 2) : (y.forEach(function (a) {
        "none" !== a.attr("stroke") && a.data("curStrokeWidth", a.data("initStrokeWidth"));
      }), u = e.select(".lievo-checkshift").attr("stroke-width").replace(/[^0-9.]/g, "") / 2);
      (0 === a.strokeWidthFactorOnHover || a.strokeWidthFactorOnHover) && y.forEach(function (b) {
        if ("none" !== b.attr("stroke") && !b.hasClass("lievo-nohoverstroke")) {
          var c = b.data("curStrokeWidth");

          if (c) {
            var d = ("" + c).replace(/[0-9.]/g, "");
            c = +("" + c.replace(/[^0-9.]/g, "")) * a.strokeWidthFactorOnHover;
            b.data("hoverStrokeWidth", c + d);
          }
        }
      });
    };

    F();
    if (a.keepStrokeWidthOnResize) k(window).on("resize", function () {
      F();
    });
    if (a.colorsOnHover) var r = a.colorsOnHover;
    a.morph && a.colorsWhenMorph && (a.colorsOnHover = !1, r = a.colorsWhenMorph);
    y.forEach(function (b) {
      var c = k(b.node).attr("fill");
      b.data("curFill", c);
      b.data("curStroke", b.attr("stroke"));
      b.data("curOpacity", b.attr("opacity"));

      if (r) {
        if ("none" === c) b.data("actionFill", "none");else if (c.toLowerCase().match(/url\(/)) b.data("actionFill", c);else {
          if ("lighter" === r) var d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : J(c, -a.saturation, a.brightness);else if ("darker" === r) d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : J(c, a.saturation, -a.brightness);else if ("hue" === r.replace(/[^hue]/g, "")) d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : R(c, r.replace(/[^0-9.]/g, "") ? r.replace(/[^0-9.]/g, "") : 0);else if ("custom" === r) switch (a.style) {
            case "solid":
              d = b.hasClass("lievo-solidbg") ? a.solidColorBgAction : a.solidColorAction;
              break;

            case "lines":
              d = a.strokeColorAction;
              break;

            case "lines-alt":
            case "linesAlt":
              d = b.hasClass("lievo-altstroke") ? a.strokeColorAltAction : a.strokeColorAction;
              break;

            default:
              d = b.hasClass("lievo-likestroke") ? a.strokeColorAction : a.fillColorAction;
          }
          b.data("actionFill", d);
        }
        if ("none" === b.attr("stroke")) b.data("actionStroke", "none");else {
          if ("lighter" === r) d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : J(b.attr("stroke"), -a.saturation, a.brightness);else if ("darker" === r) d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : J(b.attr("stroke"), a.saturation, -a.brightness);else if ("hue" === r.replace(/[^hue]/g, "")) d = "solid" === a.style && b.hasClass("lievo-solidbg") ? a.solidColorBgAction : R(b.attr("stroke"), r.replace(/[^0-9.]/g, "") ? r.replace(/[^0-9.]/g, "") : 0);else if ("custom" === r) switch (a.style) {
            case "solid":
              d = b.hasClass("lievo-solidbg") ? a.solidColorBgAction : a.solidColorAction;
              break;

            case "lines":
              d = a.strokeColorAction;
              break;

            case "lines-alt":
            case "linesAlt":
              d = b.hasClass("lievo-altstroke") ? a.strokeColorAltAction : a.strokeColorAction;
              break;

            default:
              d = a.strokeColorAction;
          }
          b.data("actionStroke", d);
        }
      }
    });
    a.rotate && (g.set(e.select("g.lievo-setrotation").node, {
      rotation: a.rotate,
      svgOrigin: c
    }), a.morph && a.morphImage && !a.allowMorphImageTransform && (l = d.select("g"), !a.flipVertical && a.flipHorizontal ? l.transform("r" + a.rotate + ",30,30") : a.flipVertical && !a.flipHorizontal ? l.transform("r" + a.rotate + ",30,30") : l.transform("r" + -a.rotate + ",30,30")));
    a.flipVertical && !a.flipHorizontal ? (e.select("g.lievo-setflip").transform("s1,-1,30,30"), a.morph && a.morphImage && !a.allowMorphImageTransform && d.select("image").transform("s1,-1,30,30")) : a.flipHorizontal && !a.flipVertical ? (e.select("g.lievo-setflip").transform("s-1,1,30,30"), a.morph && a.morphImage && !a.allowMorphImageTransform && d.select("image").transform("s-1,1,30,30")) : a.flipVertical && a.flipHorizontal && (e.select("g.lievo-setflip").transform("s-1,-1,30,30"), a.morph && a.morphImage && !a.allowMorphImageTransform && d.select("image").transform("s-1,-1,30,30"));
    a.animated ? (e.attr("data-animoptions") ? (d = JSON.parse(e.attr("data-animoptions").replace(/'/g, '"')), a.defaultDuration = d.duration ? t(d.duration) : 1, a.defaultRepeat = d.repeat ? "loop" === d.repeat ? -1 : t(d.repeat) : 0, a.defaultRepeatDelay = d.repeatDelay ? t(d.repeatDelay) : .5) : (a.defaultDuration = 1, a.defaultRepeat = 0, a.defaultRepeatDelay = .5), a.useDuration = "default" === a.duration ? a.defaultDuration : t(a.duration), isNaN(a.useDuration) && (a.useDuration = 1), a.useRepeat = "default" === a.repeat ? a.defaultRepeat : "loop" === a.repeat ? -1 : t(a.repeat), isNaN(a.useRepeat) && (a.useRepeat = 0), -1 !== a.useRepeat && 0 > a.useRepeat && (a.useRepeat = 0), a.useRepeatDelay = "default" === a.repeatDelay ? a.defaultRepeatDelay : t(a.repeatDelay), isNaN(a.useRepeatDelay) && (a.useRepeatDelay = a.defaultRepeatDelay), 0 >= a.delay && (a.delay = .001), 0 >= a.useRepeatDelay && (a.useRepeatDelay = .001), 0 >= a.drawDelay && (a.drawDelay = .001), 0 >= a.eraseDelay && (a.eraseDelay = .001), a.morph && (a.defaultRepeat = 0, a.useRepeat = 0, a.defaultRepeatDelay = 0, a.useRepeatDelay = 0)) : (a.defaultDuration = 0, a.defaultRepeat = 0, a.defaultRepeatDelay = 0);
    var p = b.data("drawTL");
    p ? p.pause().kill().clear() : p = new G({
      paused: !0
    });
    var n = b.data("mainTL");
    n ? n.pause().kill().clear() : n = new G({
      paused: !0
    });

    if (a.animated) {
      d = e.selectAll("circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use");
      var A = new G();

      if (a.morph && a.colorsWhenMorph) {
        var w, q, K, z;
        var B = new G();
        d.forEach(function (b) {
          "end" !== a.morphState ? b.hasClass("lievo-nohovercolor") || "g" === b.type.toLowerCase() || (w = b.data("actionStroke"), q = b.data("actionFill"), w && "none" !== w && (K = g.to(b.node, a.useDuration, {
            stroke: w
          }), B.add(K, 0)), q && "none" !== q && !q.match(/url\(/) && (z = g.to(b.node, a.useDuration, {
            fill: q
          }), B.add(z, 0))) : b.hasClass("lievo-nohovercolor") || "g" === b.type.toLowerCase() || (w = b.data("actionStroke"), q = b.data("actionFill"), w && "none" !== w && g.set(b.node, {
            stroke: w
          }), q && "none" !== q && !q.match(/url\(/) && g.set(b.node, {
            fill: q
          }), w = b.data("curStroke"), q = b.data("curFill"), w && "none" !== w && (K = g.to(b.node, a.useDuration, {
            stroke: w
          }), B.add(K, 0)), q && "none" !== q && !q.match(/url\(/) && (z = g.to(b.node, a.useDuration, {
            fill: q
          }), B.add(z, 0)));
        });
      }

      d.forEach(function (a) {
        if (a.attr("data-animdata")) {
          var b = JSON.parse(a.attr("data-animdata").replace(/'/g, '"')),
              c = new G();
          b.steps.forEach(function (b) {
            for (var d in b.vars) {
              b.vars.hasOwnProperty(d) && (b.vars[d] = t(b.vars[d]), "none" !== b.vars[d] && (b.vars[d] = D(b.vars[d])));
            }

            0 === t(b.duration) && (b.duration = .001);
            b.vars.ease = "none" !== b.vars.ease && b.vars.ease ? N(b.vars.ease) : S.easeNone;
            b.vars.path && (b.vars.morphSVG = b.vars.path);

            if (b.vars.bezier && b.vars.bezier.values && "string" === typeof b.vars.bezier.values) {
              d = m.path.toCubic(b.vars.bezier.values).toString();
              d = d.replace(/[M|m]/g, "").replace(/[C|c]/g, ",");
              d = d.split(",");
              b.vars.bezier.values = [];

              for (var h = 0; h < d.length; h += 2) {
                var e = {};
                e.x = d[h];
                e.y = d[h + 1];
                b.vars.bezier.values.push(e);
              }
            }

            O || P ? b.vars.drawSVG ? "0%" === b.vars.drawSVG || 0 === b.vars.drawSVG ? (d = g.to(a.node, +b.duration, b.vars), d.eventCallback("onStart", function () {
              "square" === a.data("initStrokeLinecap").toLowerCase() && g.set(a.node, {
                attr: {
                  "stroke-linecap": "round"
                }
              });
              "miter" === a.data("initStrokeLinejoin").toLowerCase() && g.set(a.node, {
                attr: {
                  "stroke-linejoin": "round"
                }
              });
            })) : "100%" === b.vars.drawSVG ? (d = g.to(a.node, +b.duration, b.vars), d.eventCallback("onComplete", function () {
              "square" === a.data("initStrokeLinecap").toLowerCase() && g.set(a.node, {
                attr: {
                  "stroke-linecap": "square"
                }
              });
              "miter" === a.data("initStrokeLinejoin").toLowerCase() && g.set(a.node, {
                attr: {
                  "stroke-linejoin": "miter"
                }
              });
            })) : d = g.to(a.node, +b.duration, b.vars) : d = g.to(a.node, +b.duration, b.vars) : d = g.to(a.node, +b.duration, b.vars);
            c.add(d, b.position || "+=0");
            A.add(c, 0);
          });
          a.node.removeAttribute("data-animdata");
        }
      });
      n.add(A, 0);
      A.duration(a.useDuration);
      a.morph && a.colorsWhenMorph && (n.add(B, 0), B.duration(a.useDuration));
      n.delay(a.delay).repeat(a.useRepeat).repeatDelay(a.useRepeatDelay);
    } else e.selectAll("circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use").forEach(function (a) {
      a.node.removeAttribute("data-animdata");
    });

    b.data("drawTL", p);
    b.data("mainTL", n);
    a.eventElement = "self" !== a.eventOn && a.eventOn ? "parent" === a.eventOn ? b.parent() : "grandparent" === a.eventOn ? b.parent().parent() : k(a.eventOn) : b;
    v && b.hasClass("livicon-evo-back-in-combined") && ((d = b.parent(".livicon-evo-combined"), "self" !== a.eventOn && a.eventOn) ? "parent" === a.eventOn ? a.eventElement = d.parent() : "grandparent" === a.eventOn && (a.eventElement = d.parent().parent()) : a.eventElement = d);
    v && b.parent().hasClass("livicon-evo-front-in-combined") && ((d = b.parent(".livicon-evo-front-in-combined"), "self" !== a.eventOn && a.eventOn) ? "parent" === a.eventOn ? a.eventElement = d.parent() : "grandparent" === a.eventOn && (a.eventElement = d.parent().parent()) : a.eventElement = b);
    if (a.animated) if (!a.morph) {
      if ("click" === a.eventType) a.eventElement.on("click.LiviconEvo", function () {
        -1 === a.useRepeat ? a.ending ? n.isActive() && n.tweenTo(n.duration(), {
          onComplete: function onComplete() {
            n.pause().totalProgress(0);
            "function" === typeof a.afterAnim && a.afterAnim();
            a.ending = !1;
          }
        }) : a.drawn && (a.ending = !0, b.playLiviconEvo()) : a.drawn && (b.playLiviconEvo(), a.ending = !1);
      });else {
        if ("hover" === a.eventType) if (d = function d() {
          a.ending || a.drawn && b.playLiviconEvo();
        }, l = function l() {
          n.isActive() && (a.ending = !0, n.tweenTo(n.duration(), {
            onComplete: function onComplete() {
              n.pause().totalProgress(0);
              -1 === a.useRepeat && "function" === typeof a.afterAnim && a.afterAnim();
              a.ending = !1;
            }
          }));
        }, -1 === a.useRepeat) a.eventElement.on("mouseenter.LiviconEvo", d).on("mouseleave.LiviconEvo", l);else a.eventElement.on("mouseenter.LiviconEvo", function () {
          a.drawn && b.playLiviconEvo();
        });
      }
    } else if (a.morph) if ("click" === a.eventType) a.eventElement.on("click.LiviconEvo", function () {
      a.drawn && b.playLiviconEvo();
    });else "hover" === a.eventType && (l = function l() {
      a.drawn && n.reverse();
    }, a.eventElement.on("mouseenter.LiviconEvo", function () {
      a.drawn && b.playLiviconEvo();
    }).on("mouseleave.LiviconEvo", l));
    if (a.colorsOnHover) a.eventElement.on("mouseenter.LiviconEvo", function () {
      !p.isActive() && a.drawn && y.forEach(function (b) {
        if (!b.hasClass("lievo-nohovercolor")) {
          var c = b.data("actionStroke"),
              d = b.data("actionFill");
          c && "none" !== c && g.to(b.node, a.colorsHoverTime, {
            stroke: c
          });
          d && "none" !== d && !d.match(/url\(/) && g.to(b.node, a.colorsHoverTime, {
            fill: d
          });
        }
      });
    }).on("mouseleave.LiviconEvo", function () {
      !p.isActive() && a.drawn && y.forEach(function (b) {
        if (!b.hasClass("lievo-nohovercolor")) {
          var c = b.data("curStroke"),
              d = b.data("curFill");
          c && "none" !== c && g.to(b.node, a.colorsHoverTime, {
            stroke: c
          });
          d && "none" !== d && !d.match(/url\(/) && g.to(b.node, a.colorsHoverTime, {
            fill: d
          });
        }
      });
    });
    if (0 === a.strokeWidthFactorOnHover || a.strokeWidthFactorOnHover) a.eventElement.on("mouseenter.LiviconEvo", function () {
      !p.isActive() && a.drawn && y.forEach(function (b) {
        if (!b.hasClass("lievo-nohoverstroke")) {
          var c = b.data("hoverStrokeWidth");
          c && g.to(b.node, a.strokeWidthOnHoverTime, {
            attr: {
              "stroke-width": c
            }
          });
        }
      });
    }).on("mouseleave.LiviconEvo", function () {
      !p.isActive() && a.drawn && y.forEach(function (b) {
        if (!b.hasClass("lievo-nohoverstroke")) {
          var c = b.data("curStrokeWidth");
          c && g.to(b.node, a.strokeWidthOnHoverTime, {
            attr: {
              "stroke-width": c
            }
          });
        }
      });
    });
    if (a.touchEvents && (a.animated || a.colorsOnHover || 0 === a.strokeWidthFactorOnHover || a.strokeWidthFactorOnHover)) a.eventElement.on("touchstart.LiviconEvo", function (b) {
      b.preventDefault();
      a.eventElement.trigger("mouseenter.LiviconEvo");
    }).on("touchend.LiviconEvo", function () {
      a.eventElement.trigger("mouseleave.LiviconEvo");

      try {
        a.eventElement[0].click();
      } catch (V) {
        if ("function" === typeof document.createEvent) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
          a.eventElement.get(0).dispatchEvent(b);
        } else "function" === typeof window.MouseEvent && (b = new MouseEvent("click", {
          bubbles: !0,
          cancelable: !0
        }), a.eventElement.get(0).dispatchEvent(b));
      }
    });
    if (d = b.find("svg")[0].getScreenCTM()) l = -d.e % 1, f = -d.f % 1, 0 === l ? l = 0 : -.5 >= l && (l += 1), 0 === f ? f = 0 : -.5 >= f && (f += 1), b.find("svg").css({
      left: l + "px",
      top: f + "px"
    }), a.tryToSharpen && (l = e.select(".lievo-checkshift"), f = e.select(".lievo-morphpattern"), x = m.matrix(), l && (l = l.getBBox(), 0 !== (l.x + u) * d.a % 1 && (g.set(e.select("g.lievo-setsharp").node, {
      x: "+=" + ((l.x - u) * d.a % 1 / d.a || 0),
      svgOrigin: c
    }), x.e = (l.x - u) * d.a % 1 / d.a || 0), 0 !== (l.y + u) * d.d % 1 && (g.set(e.select("g.lievo-setsharp").node, {
      y: "+=" + ((l.y - u) * d.d % 1 / d.d || 0),
      svgOrigin: c
    }), x.f = (l.y - u) * d.d % 1 / d.d || 0), f && f.attr("patternTransform", x.toString())));

    if (a.drawOnViewport && !a.drawOnce) {
      c = b.find("svg").get(0).getBoundingClientRect().height;

      switch (a.viewportShift) {
        case "none":
        case !1:
          var C = 1;
          break;

        case "one-half":
        case "oneHalf":
          C = c / 2;
          break;

        case "one-third":
        case "oneThird":
          C = c / 3;
          break;

        case "full":
          C = c;
          break;

        default:
          C = c / 2;
      }

      var U = function U() {
        if (!a.drawOnce) {
          var c = k(window).height();
          C > c && (C = c - 10);
          T.inViewport(b, -C) && (b.pauseLiviconEvo(), b.drawLiviconEvo(), a.drawOnce = !0);
        }
      };

      U();
      k(window).on("resize scroll", function () {
        U();
      });
    } else b.css("visibility", "visible"), a.drawOnce = !0, a.drawn = !0, a.autoPlay && b.playLiviconEvo();
  }

  function L() {
    return L.counter++;
  }

  function M(b) {
    if (null === b || "object" !== _typeof(b)) return b;
    var a = new b.constructor(),
        e;

    for (e in b) {
      b.hasOwnProperty(e) && (a[e] = M(b[e]));
    }

    return a;
  }

  function D(b) {
    if ("string" === typeof b || b instanceof String) switch (b.toLowerCase()) {
      case "true":
      case "yes":
        return !0;

      case "false":
      case "no":
      case "none":
        return !1;

      default:
        return b;
    } else return b;
  }

  function t(b) {
    return "string" === typeof b || b instanceof String ? +b || "0" === b ? +b : b : b;
  }

  function N(b) {
    var a = b.split(".");
    if (2 === a.length && "SteppedEase" !== a[0]) return v ? window.DeeThemes_GS[a[0]][a[1]] : window[a[0]][a[1]];
    b = b.match(/true|false|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig).map(JSON.parse);
    return "SteppedEase" !== a[0] ? v ? window.DeeThemes_GS[a[0]][a[1]].config.apply(null, b) : window[a[0]][a[1]].config.apply(null, b) : v ? window.DeeThemes_GS[a[0]].config.apply(null, b) : window[a[0]].config.apply(null, b);
  }

  function J(b, a, e) {
    b = m.color(b);
    b = m.rgb2hsb(b.r, b.g, b.b);
    b.s += a;
    0 > b.s && (b.s = 0);
    1 < b.s && (b.s = 1);
    b.b += e;
    0 > b.b && (b.b = 0);
    1 < b.b && (b.b = 1);
    return m.hsb(b.h, b.s, b.b);
  }

  function R(b, a) {
    var e = m.color(b);
    e = m.rgb2hsb(e.r, e.g, e.b);
    a = Math.abs(a) / 360 % 1;
    e.h = (e.h + a) % 1;
    return m.hsb(e.h, e.s, e.b);
  }

  var v = !1,
      g = window.TweenMax,
      G = window.TimelineMax,
      S = window.Power0,
      m = window.Snap,
      T = window.verge;
  window.DeeThemes_GS && window.DeeThemes_Snap && window.DeeThemes_Verge && (v = !0);
  v && (g = window.DeeThemes_GS.TweenMax, G = window.DeeThemes_GS.TimelineMax, S = window.DeeThemes_GS.Power0, m = window.DeeThemes_Snap, T = window.DeeThemes_Verge);
  var I = window.LivIconsEvoDefaults(),
      O = "ActiveXObject" in window ? !0 : !1,
      P = navigator.userAgent.match(/Edge\/\d+/) ? !0 : !1;
  I.pathToFolder.match(/(\/)$/) || "" === I.pathToFolder.trim() || (I.pathToFolder += "/");
  k.fn.extend({
    addLiviconEvo: function addLiviconEvo(b, a) {
      if (2 > arguments.length) var e = b === Object(b) ? b : {};else b === Object(b) ? e = b : (e = {}, e[b] = a);
      return this.each(function () {
        var a = k(this),
            b = a.data("options"),
            x = a.data("savedOptions"),
            h = {};
        a.addClass("livicon-evo-holder");
        x && x.eventElement && (x.eventElement.off(".LiviconEvo"), x.eventElement = H);
        b && (b = b.split(";"), b.forEach(function (a) {
          a = a.trim().split(/:(.+)/);
          a[0] && a[1] && (h[a[0].trim()] = a[1].trim());
        }));
        h = k.extend(M(I), h, e);

        if (h.name) {
          h.name.match(/(\.svg)$/) || (h.name += ".svg");

          for (var d in h) {
            h.hasOwnProperty(d) && (h[d] = t(h[d]), h[d] = D(h[d]));
          }

          h.name.match(/morph+(-)/) ? h.morph = !0 : h.morph = !1;
          h.drawOnce = !1;
          h.drawn = !1;
          h.ending = !1;
          a.removeData("savedOptions");
          a.data("savedOptions", h);
          "function" === typeof h.beforeAdd && h.beforeAdd();
          k.ajax({
            url: h.pathToFolder + h.name,
            type: "GET",
            dataType: "text",
            global: !0,
            success: function success(b) {
              a.removeClass("livicon-evo-error");
              var c = b.match(/(id=["'](.*?)["'])/gi);
              c && c.forEach(function (a) {
                a = a.replace(/id=["']/i, "").replace(/["']/, "");
                b = b.replace(new RegExp(a, "g"), a + "_" + L());
              });
              b = m.parse(b);
              c = a.empty().append("<div>").children().addClass("lievo-svg-wrapper");

              try {
                c[0].appendChild(b.node);
              } catch (u) {
                c.html(b.node);
              }

              Q(a, h);
              "function" === typeof h.afterAdd && h.afterAdd();
            },
            error: function error(b, c) {
              a.addClass("livicon-evo-error");
              0 === b.status && "error" === c ? a.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>') : 404 === b.status && "error" === c ? a.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>') : a.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>');
            }
          });
        } else a.addClass("livicon-evo-error").html('<span><acronym title="Please check the &quot;name&quot; option of your SVG LivIconEvo file.">Name Error</acronym></span>');
      });
    },
    updateLiviconEvo: function updateLiviconEvo(b, a) {
      if (2 > arguments.length) var e = b === Object(b) ? b : {};else b === Object(b) ? e = b : (e = {}, e[b] = a);
      return this.each(function () {
        var a = k(this),
            b = a.data("savedOptions");

        if (b) {
          b.eventElement && b.eventElement.off(".LiviconEvo");
          b.eventElement = H;
          b = M(b);
          b = k.extend(b, e);
          b.name.match(/(\.svg)$/) || (b.name += ".svg");

          for (var x in b) {
            b.hasOwnProperty(x) && (b[x] = t(b[x]), b[x] = D(b[x]));
          }

          b.name.match(/morph+(-)/) ? b.morph = !0 : b.morph = !1;
          b.drawOnce = !1;
          b.drawn = !1;
          b.ending = !1;
          a.data("savedOptions", b);
          "function" === typeof b.beforeUpdate && b.beforeUpdate();
          k.ajax({
            url: b.pathToFolder + b.name,
            type: "GET",
            dataType: "text",
            global: !0,
            success: function success(c) {
              var d;
              a.addClass("livicon-evo-holder").removeClass("livicon-evo-error");
              (d = c.match(/(id=["'](.*?)["'])/gi)) && d.forEach(function (a) {
                a = a.replace(/id=["']/i, "").replace(/["']/, "");
                c = c.replace(new RegExp(a, "g"), a + "_" + L());
              });
              c = m.parse(c);
              d = a.empty().append("<div>").children().addClass("lievo-svg-wrapper");

              try {
                d[0].appendChild(c.node);
              } catch (l) {
                d.html(c.node);
              }

              Q(a, b);
              "function" === typeof b.afterUpdate && b.afterUpdate();
            },
            error: function error(b, c) {
              a.addClass("livicon-evo-error");
              0 === b.status && "error" === c ? a.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>') : 404 === b.status && "error" === c ? a.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>') : a.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>');
            }
          });
        } else a.addLiviconEvo(e);
      });
    },
    changeLiviconEvo: function changeLiviconEvo(b, a) {
      if (2 > arguments.length) var e = b === Object(b) ? b : {};else b === Object(b) ? e = b : (e = {}, e[b] = a);

      for (var c in e) {
        e.hasOwnProperty(c) && (e[c] = t(e[c]), e[c] = D(e[c]));
      }

      return this.each(function () {
        var a = k(this),
            b = a.data(),
            c = b.savedOptions;

        if (c) {
          var d = b.drawTL;
          b = b.mainTL;
          var l = a.find("circle, ellipse, line, path, polygon, polyline, rect");
          c.eventElement && c.eventElement.off(".LiviconEvo");
          c.eventElement = H;
          c = M(c);
          c = k.extend(c, e);
          d.pause().totalProgress(0).clear();
          b.pause().totalProgress(0);
          c.drawn = !0;
          c.drawOnViewport = !1 === e.drawOnViewport ? !1 : !0;
          a.eraseLiviconEvo(c);
          var g = setTimeout(function () {
            a.updateLiviconEvo(c);
            clearTimeout(g);
          }, 1E3 * (c.eraseDelay + c.eraseTime + c.eraseStagger * l.length));
        } else a.addLiviconEvo(e);
      });
    },
    drawLiviconEvo: function drawLiviconEvo(b, a, e) {
      if (1 >= arguments.length) {
        if (b === Object(b)) var c = b;else c = {}, c.force = b;
      } else 2 === arguments.length ? b === Object(b) ? (c = b, c.force = a) : (c = {}, c[b] = a, c.force || (c.force = !1)) : (c = {}, c[b] = a, c.force = e);

      for (var f in c) {
        c.hasOwnProperty(f) && (c[f] = t(c[f]), c[f] = D(c[f]));
      }

      return this.each(function () {
        var a = k(this),
            b = a.data(),
            d = b.savedOptions;

        if (d) {
          var e = b.drawTL,
              f = b.mainTL;
          b = 0 === c.drawDelay || c.drawDelay ? c.drawDelay : d.drawDelay;
          var u = 0 === c.drawTime || c.drawTime ? c.drawTime : d.drawTime,
              F = 0 === c.drawStagger || c.drawStagger ? c.drawStagger : d.drawStagger,
              r = c.drawStartPoint ? c.drawStartPoint : d.drawStartPoint,
              p = c.drawColor ? c.drawColor : d.drawColor,
              n = 0 === c.drawColorTime || c.drawColorTime ? c.drawColorTime : d.drawColorTime,
              A = c.drawEase ? c.drawEase : d.drawEase,
              w = c.beforeDraw ? c.beforeDraw : d.beforeDraw,
              q = c.afterDraw ? c.afterDraw : d.afterDraw,
              t = c.duringDraw ? c.duringDraw : d.duringDraw,
              z = "undefined" !== typeof c.drawReversed ? c.drawReversed : d.drawReversed,
              B = a.find("circle, ellipse, line, path, polygon, polyline, rect").not(".lievo-morphpattern").not(".lievo-donotdraw").not(".lievo-nohovercolor").get();
          e.eventCallback("onStart", null);
          e.eventCallback("onComplete", null);
          e.eventCallback("onUpdate", null);
          0 >= b && (b = .001);
          0 >= u && (u = .001);
          D(c.force) && (e.clear(), e.pause().totalProgress(0), f.pause().totalProgress(0), d.drawn = !1);

          if (!e.isActive() && !f.isActive() && !d.drawn) {
            z && B.reverse();

            if (d.morph && d.colorsWhenMorph) {
              m(a.find("svg")[0]).selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use").forEach(function (a) {
                a.data("curFill", k(a.node).attr("fill"));
                a.data("curStroke", a.attr("stroke"));
                a.data("curOpacity", a.attr("opacity"));
              });
              var C = m(a.find("svg")[0]).select(".lievo-checkshift");
              C = C.data("actionStroke");
            }

            f = function f() {
              var a = m(this.target);
              if (O || P) "square" === a.data("initStrokeLinecap").toLowerCase() && g.set(this.target, {
                attr: {
                  "stroke-linecap": "round"
                }
              }), "miter" === a.data("initStrokeLinejoin").toLowerCase() && g.set(this.target, {
                attr: {
                  "stroke-linejoin": "round"
                }
              });
              "same" !== p ? (g.set(this.target, {
                strokeOpacity: 1,
                stroke: p
              }), "none" === a.data("curStroke") && a.attr({
                "stroke-width": 1 / d.scaleStrokeFactor
              })) : (g.set(this.target, {
                strokeOpacity: 1
              }), "none" === a.data("curStroke") && a.attr({
                "stroke-width": 1 / d.scaleStrokeFactor,
                stroke: a.data("curFill")
              }), "solid" === d.style && a.hasClass("lievo-solidbg") && (d.morph && d.colorsWhenMorph && "end" === d.morphState ? C ? a.attr({
                stroke: C
              }) : a.attr({
                stroke: d.solidColorAction
              }) : a.attr({
                stroke: d.solidColor
              })));
            };

            z = function z() {
              var a = m(this.target);
              if (O || P) "square" === a.data("initStrokeLinecap").toLowerCase() && g.set(this.target, {
                attr: {
                  "stroke-linecap": "square"
                }
              }), "miter" === a.data("initStrokeLinejoin").toLowerCase() && g.set(this.target, {
                attr: {
                  "stroke-linejoin": "miter"
                }
              });
              g.to(this.target, n, {
                stroke: a.data("curStroke"),
                fillOpacity: 1
              });
            };

            var v = function v() {
              d.drawn = !0;
            };

            e.clear();
            "function" === typeof w && e.eventCallback("onStart", w);
            "function" === typeof t && e.eventCallback("onUpdate", t);
            e.eventCallback("onComplete", function () {
              "function" === typeof q && q();
              d.autoPlay && a.playLiviconEvo();
            });
            e.delay(b);
            g.set(B, {
              strokeOpacity: 0,
              fillOpacity: 0
            });
            a.css("visibility", "visible");
            "string" === typeof A && (A = N(A));

            switch (r) {
              case "middle":
                g.set(B, {
                  drawSVG: "0% 100%"
                });
                e.staggerFrom(B, u, {
                  drawSVG: "50% 50%",
                  ease: A,
                  onStart: f,
                  onComplete: z
                }, F, 0, v);
                break;

              case "end":
                e.staggerFromTo(B, u, {
                  drawSVG: "100% 100%"
                }, {
                  drawSVG: "0% 100%",
                  ease: A,
                  onStart: f,
                  onComplete: z
                }, F, 0, v);
                break;

              default:
                e.staggerFromTo(B, u, {
                  drawSVG: "0% 0%"
                }, {
                  drawSVG: "0% 100%",
                  ease: A,
                  onStart: f,
                  onComplete: z
                }, F, 0, v);
            }

            e.restart(!0);
          }
        } else c.drawOnViewport = !0, a.addLiviconEvo(c);
      });
    },
    eraseLiviconEvo: function eraseLiviconEvo(b, a, e) {
      if (1 >= arguments.length) {
        if (b === Object(b)) var c = b;else c = {}, c.force = b;
      } else 2 === arguments.length ? b === Object(b) ? (c = b, c.force = a) : (c = {}, c[b] = a, c.force || (c.force = !1)) : (c = {}, c[b] = a, c.force = e);

      for (var f in c) {
        c.hasOwnProperty(f) && (c[f] = t(c[f]), c[f] = D(c[f]));
      }

      return this.each(function () {
        var a = k(this),
            b = a.data(),
            d = b.savedOptions;

        if (d) {
          var e = b.drawTL,
              f = b.mainTL;
          b = 0 === c.eraseDelay || c.eraseDelay ? c.eraseDelay : d.eraseDelay;
          var u = 0 === c.eraseTime || c.eraseTime ? c.eraseTime : d.eraseTime,
              t = 0 === c.eraseStagger || c.eraseStagger ? c.eraseStagger : d.eraseStagger,
              r = c.eraseStartPoint ? c.eraseStartPoint : d.eraseStartPoint,
              p = c.eraseEase ? c.eraseEase : d.eraseEase,
              n = c.beforeErase ? c.beforeErase : d.beforeErase,
              A = c.afterErase ? c.afterErase : d.afterErase,
              w = c.duringErase ? c.duringErase : d.duringErase,
              q = "undefined" !== typeof c.eraseReversed ? c.eraseReversed : d.eraseReversed,
              v = a.find("circle, ellipse, line, path, polygon, polyline, rect").not(".lievo-donotdraw").not(".lievo-nohovercolor").get();
          0 >= b && (b = .001);
          e.eventCallback("onStart", null);
          e.eventCallback("onComplete", null);
          e.eventCallback("onUpdate", null);
          D(c.force) && (e.clear(), e.pause().totalProgress(0), f.pause().totalProgress(0), d.drawn = !0);

          if (!e.isActive() && !f.isActive() && d.drawn) {
            q && v.reverse();
            d.morph && d.colorsWhenMorph && m(a.find("svg")[0]).selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use").forEach(function (a) {
              a.data("curFill", k(a.node).attr("fill"));
              a.data("curStroke", a.attr("stroke"));
              a.data("curOpacity", a.attr("opacity"));
            });

            f = function f() {
              "none" === m(this.target).data("curStroke") && m(this.target).attr({
                "stroke-width": 1 / d.scaleStrokeFactor,
                stroke: m(this.target).data("curFill")
              });
              g.to(this.target, u, {
                fillOpacity: 0
              });
            };

            q = function q() {
              g.set(this.target, {
                strokeOpacity: 0,
                fillOpacity: 0
              });
              "none" === m(this.target).data("curStroke") && g.set(this.target, {
                "stroke-width": 0,
                stroke: "none"
              });
            };

            var z = function z() {
              d.drawn = !1;
            };

            e.clear();
            "function" === typeof n && e.eventCallback("onStart", n);
            "function" === typeof A && e.eventCallback("onComplete", A);
            "function" === typeof w && e.eventCallback("onUpdate", w);
            "string" === typeof p && (p = N(p));
            e.delay(b);
            g.set(v, {
              strokeOpacity: 1,
              fillOpacity: 1
            });
            a.css("visibility", "visible");

            switch (r) {
              case "middle":
                e.staggerFromTo(v, u, {
                  drawSVG: "0% 100%"
                }, {
                  drawSVG: "50% 50%",
                  ease: p,
                  onStart: f,
                  onComplete: q
                }, t, 0, z);
                break;

              case "end":
                e.staggerFromTo(v, u, {
                  drawSVG: "0% 100%"
                }, {
                  drawSVG: "100% 100%",
                  ease: p,
                  onStart: f,
                  onComplete: q
                }, t, 0, z);
                break;

              default:
                e.staggerFromTo(v, u, {
                  drawSVG: "0% 100%"
                }, {
                  drawSVG: 0,
                  ease: p,
                  onStart: f,
                  onComplete: q
                }, t, 0, z);
            }

            e.restart(!0);
          }
        } else a.addLiviconEvo(c);
      });
    },
    playLiviconEvo: function playLiviconEvo(b, a, e) {
      if (1 >= arguments.length) {
        if (b === Object(b)) var c = b;else c = {}, c.force = b;
      } else 2 === arguments.length ? b === Object(b) ? (c = b, c.force = a) : (c = {}, c[b] = a, c.force || (c.force = !1)) : (c = {}, c[b] = a, c.force = e);

      for (var f in c) {
        c.hasOwnProperty(f) && (c[f] = t(c[f]), c[f] = D(c[f]));
      }

      return this.each(function () {
        var a = k(this),
            b = a.data(),
            d = b.savedOptions;

        if (d) {
          a = b.drawTL;
          b = b.mainTL;
          var e = 0 === c.duration || c.duration ? c.duration : d.duration,
              f = 0 === c.delay || c.delay ? c.delay : d.delay,
              g = 0 === c.repeat || c.repeat ? c.repeat : d.repeat,
              m = 0 === c.repeatDelay || c.repeatDelay ? c.repeatDelay : d.repeatDelay,
              r = c.beforeAnim ? c.beforeAnim : d.beforeAnim,
              p = c.afterAnim ? c.afterAnim : d.afterAnim,
              n = c.duringAnim ? c.duringAnim : d.duringAnim;

          if (d.animated) {
            D(c.force) && (a.pause().totalProgress(1), b.pause().totalProgress(0), d.drawn = !0);
            "default" === e && (e = d.defaultDuration);
            var t = b.getChildren(!1, !1, !0);
            t.forEach(function (a) {
              a.duration(e);
            });
            0 >= f && (f = .001);
            b.delay(f);
            "default" === g ? g = d.defaultRepeat : "loop" === g && (g = -1);
            "default" === m && (m = d.defaultRepeatDelay);
            0 >= m && (m = .001);
            d.morph ? (b.repeat(0).repeatDelay(0), "function" === typeof r && b.eventCallback("onStart", r), "function" === typeof n && b.eventCallback("onUpdate", n), b.eventCallback("onComplete", function () {
              d.curMorphState = "end" === d.morphState ? "start" : "end";
              "function" === typeof p && p();
            }), b.eventCallback("onReverseComplete", function () {
              d.curMorphState = "end" === d.morphState ? "end" : "start";
              "function" === typeof p && p();
            }), a.isActive() || b.isActive() || !d.drawn || (a = b.progress(), 0 === a ? b.restart(!0) : b.paused() && 0 < a && 1 > a ? b.resume() : b.pause().reverse(0))) : (b.repeat(g).repeatDelay(m), "function" === typeof r && b.eventCallback("onStart", r), "function" === typeof p && -1 !== g && b.eventCallback("onComplete", p), "function" === typeof n && b.eventCallback("onUpdate", n), a.isActive() || b.isActive() || !d.drawn || (a = b.totalProgress(), b.paused() && 0 < a && 1 > a ? b.resume() : (b.restart(!0), d.ending = !0)));
          }
        } else a.addLiviconEvo(c);
      });
    },
    stopLiviconEvo: function stopLiviconEvo() {
      return this.each(function () {
        var b = k(this),
            a = b.data(),
            e = a.savedOptions;
        e ? (b = a.mainTL, e.morph ? b.pause().progress(0) : (b.pause().totalProgress(0), e.ending = !1)) : b.addLiviconEvo();
      });
    },
    pauseLiviconEvo: function pauseLiviconEvo() {
      return this.each(function () {
        var b = k(this).data("mainTL");
        b && b.pause();
      });
    },
    resumeLiviconEvo: function resumeLiviconEvo() {
      return this.each(function () {
        var b = k(this).data("mainTL");
        b && b.resume();
      });
    },
    removeLiviconEvo: function removeLiviconEvo(b, a, e) {
      if (1 >= arguments.length) {
        if (b === Object(b)) var c = b;else c = {}, c.total = b;
      } else 2 === arguments.length ? b === Object(b) ? (c = b, c.total = a) : (c = {}, c[b] = a, c.total || (c.total = !1)) : (c = {}, c[b] = a, c.total = e);
      return this.each(function () {
        var a = k(this),
            b = a.data("savedOptions");

        if (b) {
          var e = c.beforeRemove ? c.beforeRemove : b.beforeRemove,
              d = c.afterRemove ? c.afterRemove : b.afterRemove;
          b.eventElement && b.eventElement.off(".LiviconEvo");
          b.eventElement = H;
          "function" === typeof e && e();
          a.removeData("savedOptions drawTL mainTL");
          D(c.total) ? a.remove() : a.empty();
          "function" === typeof d && d();
        }
      });
    },
    liviconEvoState: function liviconEvoState(b) {
      if (0 === arguments.length) return k(this).data("savedOptions").curMorphState;
      if (1 <= arguments.length) return this.each(function () {
        var a = k(this).data("savedOptions"),
            e = k(this).data("mainTL");
        "start" === b.toLowerCase() ? e && a.morph && ("end" === a.morphState ? e.pause().progress(1) : e.pause().progress(0), a.curMorphState = "start") : "end" === b.toLowerCase() && e && a.morph && ("end" === a.morphState ? e.pause().progress(0) : e.pause().progress(1), a.curMorphState = "end");
      });
    },
    liviconEvoOptions: function liviconEvoOptions() {
      var b = k(this).data("savedOptions");

      if (b) {
        var a = {};
        a.afterAdd = b.afterAdd;
        a.afterAnim = b.afterAnim;
        a.afterDraw = b.afterDraw;
        a.afterErase = b.afterErase;
        a.afterRemove = b.afterRemove;
        a.afterUpdate = b.afterUpdate;
        a.allowMorphImageTransform = b.allowMorphImageTransform;
        a.animated = b.animated;
        a.autoPlay = b.autoPlay;
        a.beforeAdd = b.beforeAdd;
        a.beforeAnim = b.beforeAnim;
        a.beforeDraw = b.beforeDraw;
        a.beforeErase = b.beforeErase;
        a.beforeRemove = b.beforeRemove;
        a.beforeUpdate = b.beforeUpdate;
        a.brightness = b.brightness;
        a.colorsHoverTime = b.colorsHoverTime;
        a.colorsOnHover = !1 === b.colorsOnHover ? "none" : b.colorsOnHover;
        a.colorsWhenMorph = !1 === b.colorsWhenMorph ? "none" : b.colorsWhenMorph;
        a.delay = .001 === b.delay ? 0 : b.delay;
        a.drawColor = b.drawColor;
        a.drawColorTime = b.drawColorTime;
        a.drawDelay = .001 === b.drawDelay ? 0 : b.drawDelay;
        a.drawEase = b.drawEase;
        a.drawOnViewport = b.drawOnViewport;
        a.drawReversed = b.drawReversed;
        a.drawStagger = b.drawStagger;
        a.drawStartPoint = b.drawStartPoint;
        a.drawTime = b.drawTime;
        a.duration = b.duration;
        a.duringAnim = b.duringAnim;
        a.duringDraw = b.duringDraw;
        a.duringErase = b.duringErase;
        a.eraseDelay = .001 === b.eraseDelay ? 0 : b.eraseDelay;
        a.eraseEase = b.eraseEase;
        a.eraseReversed = b.eraseReversed;
        a.eraseStagger = b.eraseStagger;
        a.eraseStartPoint = b.eraseStartPoint;
        a.eraseTime = b.eraseTime;
        a.eventOn = b.eventOn;
        a.eventType = !1 === b.eventType ? "none" : b.eventType;
        a.fillColor = b.fillColor;
        a.fillColorAction = b.fillColorAction;
        a.flipHorizontal = b.flipHorizontal;
        a.flipVertical = b.flipVertical;
        a.keepStrokeWidthOnResize = b.keepStrokeWidthOnResize;
        a.morphImage = !1 === b.morphImage ? "none" : b.morphImage;
        a.morphState = b.morphState;
        a.name = b.name;
        a.pathToFolder = b.pathToFolder;
        a.repeat = b.repeat;
        a.repeatDelay = b.repeatDelay;
        a.rotate = !1 === b.rotate ? "none" : b.rotate;
        a.saturation = b.saturation;
        a.size = b.size;
        a.solidColor = b.solidColor;
        a.solidColorAction = b.solidColorAction;
        a.solidColorBg = b.solidColorBg;
        a.solidColorBgAction = b.solidColorBgAction;
        a.strokeColor = b.strokeColor;
        a.strokeColorAction = b.strokeColorAction;
        a.strokeColorAlt = b.strokeColorAlt;
        a.strokeColorAltAction = b.strokeColorAltAction;
        a.strokeStyle = b.strokeStyle;
        a.strokeWidth = b.strokeWidth;
        a.strokeWidthFactorOnHover = !1 === b.strokeWidthFactorOnHover ? "none" : b.strokeWidthFactorOnHover;
        a.strokeWidthOnHoverTime = b.strokeWidthOnHoverTime;
        a.style = b.style;
        a.touchEvents = b.touchEvents;
        a.tryToSharpen = b.tryToSharpen;
        a.viewportShift = !1 === b.viewportShift ? "none" : b.viewportShift;
        a.defaultDuration = b.defaultDuration;
        a.defaultRepeat = b.defaultRepeat;
        a.defaultRepeatDelay = b.defaultRepeatDelay;
        return a;
      }

      return H;
    }
  });
  k(document).ready(function () {
    k(".livicon-evo").addLiviconEvo();
  });
  k(window).on("orientationchange", function () {
    k(window).resize();
  });
  L.counter = 1;
})(window.jQuery);

/***/ }),

/***/ "./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js":
/*!************************************************************************!*\
  !*** ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/****************************************************************************************************
 * @name:       LivIconsEvo.tools.js - the third party libraries for LivIcons (Live Icons) Evolution
 * @version:    2.8.XXX (XXX is a total number of icons)
 * @URL:        https://livicons.com
 *
 * Content:     Snap.svg 0.5.1
 *              GreenSock TweenMax 2.1.2
 *              GreenSock DrawSVGPlugin 0.2.1
 *              GreenSock MorphSVGPlugin 0.8.11
 *              verge 1.10.2+201705300050
 *
 * @licenses:   see details in the comments for each library
*****************************************************************************************************/
// Snap.svg 0.5.1
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-07
!function (a) {
  var b,
      c,
      d = "0.5.0",
      e = "hasOwnProperty",
      f = /[\.\/]/,
      g = /\s*,\s*/,
      h = "*",
      i = function i(a, b) {
    return a - b;
  },
      j = {
    n: {}
  },
      k = function k() {
    for (var a = 0, b = this.length; b > a; a++) {
      if ("undefined" != typeof this[a]) return this[a];
    }
  },
      l = function l() {
    for (var a = this.length; --a;) {
      if ("undefined" != typeof this[a]) return this[a];
    }
  },
      m = Object.prototype.toString,
      n = String,
      o = Array.isArray || function (a) {
    return a instanceof Array || "[object Array]" == m.call(a);
  };

  eve = function (_eve) {
    function eve(_x, _x2) {
      return _eve.apply(this, arguments);
    }

    eve.toString = function () {
      return _eve.toString();
    };

    return eve;
  }(function (a, d) {
    var e,
        f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = eve.listeners(a),
        j = 0,
        m = [],
        n = {},
        o = [],
        p = b;
    o.firstDefined = k, o.lastDefined = l, b = a, c = 0;

    for (var q = 0, r = h.length; r > q; q++) {
      "zIndex" in h[q] && (m.push(h[q].zIndex), h[q].zIndex < 0 && (n[h[q].zIndex] = h[q]));
    }

    for (m.sort(i); m[j] < 0;) {
      if (e = n[m[j++]], o.push(e.apply(d, g)), c) return c = f, o;
    }

    for (q = 0; r > q; q++) {
      if (e = h[q], "zIndex" in e) {
        if (e.zIndex == m[j]) {
          if (o.push(e.apply(d, g)), c) break;

          do {
            if (j++, e = n[m[j]], e && o.push(e.apply(d, g)), c) break;
          } while (e);
        } else n[e.zIndex] = e;
      } else if (o.push(e.apply(d, g)), c) break;
    }

    return c = f, b = p, o;
  }), eve._events = j, eve.listeners = function (a) {
    var b,
        c,
        d,
        e,
        g,
        i,
        k,
        l,
        m = o(a) ? a : a.split(f),
        n = j,
        p = [n],
        q = [];

    for (e = 0, g = m.length; g > e; e++) {
      for (l = [], i = 0, k = p.length; k > i; i++) {
        for (n = p[i].n, c = [n[m[e]], n[h]], d = 2; d--;) {
          b = c[d], b && (l.push(b), q = q.concat(b.f || []));
        }
      }

      p = l;
    }

    return q;
  }, eve.separator = function (a) {
    a ? (a = n(a).replace(/(?=[\.\^\]\[\-])/g, "\\"), a = "[" + a + "]", f = new RegExp(a)) : f = /[\.\/]/;
  }, eve.on = function (a, b) {
    if ("function" != typeof b) return function () {};

    for (var c = o(a) ? o(a[0]) ? a : [a] : n(a).split(g), d = 0, e = c.length; e > d; d++) {
      !function (a) {
        for (var c, d = o(a) ? a : n(a).split(f), e = j, g = 0, h = d.length; h > g; g++) {
          e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
            n: {}
          });
        }

        for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++) {
          if (e.f[g] == b) {
            c = !0;
            break;
          }
        }

        !c && e.f.push(b);
      }(c[d]);
    }

    return function (a) {
      +a == +a && (b.zIndex = +a);
    };
  }, eve.f = function (a) {
    var b = [].slice.call(arguments, 1);
    return function () {
      eve.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)));
    };
  }, eve.stop = function () {
    c = 1;
  }, eve.nt = function (a) {
    var c = o(b) ? b.join(".") : b;
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(c) : c;
  }, eve.nts = function () {
    return o(b) ? b : b.split(f);
  }, eve.off = eve.unbind = function (a, b) {
    if (!a) return void (eve._events = j = {
      n: {}
    });
    var c = o(a) ? o(a[0]) ? a : [a] : n(a).split(g);
    if (c.length > 1) for (var d = 0, i = c.length; i > d; d++) {
      eve.off(c[d], b);
    } else {
      c = o(a) ? a : n(a).split(f);
      var k,
          l,
          m,
          d,
          i,
          p,
          q,
          r = [j],
          s = [];

      for (d = 0, i = c.length; i > d; d++) {
        for (p = 0; p < r.length; p += m.length - 2) {
          if (m = [p, 1], k = r[p].n, c[d] != h) k[c[d]] && (m.push(k[c[d]]), s.unshift({
            n: k,
            name: c[d]
          }));else for (l in k) {
            k[e](l) && (m.push(k[l]), s.unshift({
              n: k,
              name: l
            }));
          }
          r.splice.apply(r, m);
        }
      }

      for (d = 0, i = r.length; i > d; d++) {
        for (k = r[d]; k.n;) {
          if (b) {
            if (k.f) {
              for (p = 0, q = k.f.length; q > p; p++) {
                if (k.f[p] == b) {
                  k.f.splice(p, 1);
                  break;
                }
              }

              !k.f.length && delete k.f;
            }

            for (l in k.n) {
              if (k.n[e](l) && k.n[l].f) {
                var t = k.n[l].f;

                for (p = 0, q = t.length; q > p; p++) {
                  if (t[p] == b) {
                    t.splice(p, 1);
                    break;
                  }
                }

                !t.length && delete k.n[l].f;
              }
            }
          } else {
            delete k.f;

            for (l in k.n) {
              k.n[e](l) && k.n[l].f && delete k.n[l].f;
            }
          }

          k = k.n;
        }
      }

      a: for (d = 0, i = s.length; i > d; d++) {
        k = s[d];

        for (l in k.n[k.name].f) {
          continue a;
        }

        for (l in k.n[k.name].n) {
          continue a;
        }

        delete k.n[k.name];
      }
    }
  }, eve.once = function (a, b) {
    var c = function c() {
      return eve.off(a, c), b.apply(this, arguments);
    };

    return eve.on(a, c);
  }, eve.version = d, eve.toString = function () {
    return "You are running Eve " + d;
  },  true && module.exports ? module.exports = eve :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function () {
    return eve;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(this), function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c) {
    return b(a, c);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }
}(window || this, function (a, b) {
  var c = function (b) {
    var c,
        d = {},
        e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
      return setTimeout(a, 16, new Date().getTime()), !0;
    },
        f = Array.isArray || function (a) {
      return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a);
    },
        g = 0,
        h = "M" + (+new Date()).toString(36),
        i = function i() {
      return h + (g++).toString(36);
    },
        j = Date.now || function () {
      return +new Date();
    },
        k = function k(a) {
      var b = this;
      if (null == a) return b.s;
      var c = b.s - a;
      b.b += b.dur * c, b.B += b.dur * c, b.s = a;
    },
        l = function l(a) {
      var b = this;
      return null == a ? b.spd : void (b.spd = a);
    },
        m = function m(a) {
      var b = this;
      return null == a ? b.dur : (b.s = b.s * a / b.dur, void (b.dur = a));
    },
        n = function n() {
      var a = this;
      delete d[a.id], a.update(), b("mina.stop." + a.id, a);
    },
        o = function o() {
      var a = this;
      a.pdif || (delete d[a.id], a.update(), a.pdif = a.get() - a.b);
    },
        p = function p() {
      var a = this;
      a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, d[a.id] = a, r());
    },
        q = function q() {
      var a,
          b = this;

      if (f(b.start)) {
        a = [];

        for (var c = 0, d = b.start.length; d > c; c++) {
          a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s);
        }
      } else a = +b.start + (b.end - b.start) * b.easing(b.s);

      b.set(a);
    },
        r = function r(a) {
      if (!a) return void (c || (c = e(r)));
      var f = 0;

      for (var g in d) {
        if (d.hasOwnProperty(g)) {
          var h = d[g],
              i = h.get();
          f++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete d[g], h.s = 1, f--, function (a) {
            setTimeout(function () {
              b("mina.finish." + a.id, a);
            });
          }(h)), h.update();
        }
      }

      c = f ? e(r) : !1;
    },
        s = function s(a, b, c, e, f, g, h) {
      var j = {
        id: i(),
        start: a,
        end: b,
        b: c,
        s: 0,
        dur: e - c,
        spd: 1,
        get: f,
        set: g,
        easing: h || s.linear,
        status: k,
        speed: l,
        duration: m,
        stop: n,
        pause: o,
        resume: p,
        update: q
      };
      d[j.id] = j;
      var t,
          u = 0;

      for (t in d) {
        if (d.hasOwnProperty(t) && (u++, 2 == u)) break;
      }

      return 1 == u && r(), j;
    };

    return s.time = j, s.getById = function (a) {
      return d[a] || null;
    }, s.linear = function (a) {
      return a;
    }, s.easeout = function (a) {
      return Math.pow(a, 1.7);
    }, s.easein = function (a) {
      return Math.pow(a, .48);
    }, s.easeinout = function (a) {
      if (1 == a) return 1;
      if (0 == a) return 0;
      var b = .48 - a / 1.04,
          c = Math.sqrt(.1734 + b * b),
          d = c - b,
          e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
          f = -c - b,
          g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
          h = e + g + .5;
      return 3 * (1 - h) * h * h + h * h * h;
    }, s.backin = function (a) {
      if (1 == a) return 1;
      var b = 1.70158;
      return a * a * ((b + 1) * a - b);
    }, s.backout = function (a) {
      if (0 == a) return 0;
      a -= 1;
      var b = 1.70158;
      return a * a * ((b + 1) * a + b) + 1;
    }, s.elastic = function (a) {
      return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * (2 * Math.PI) / .3) + 1;
    }, s.bounce = function (a) {
      var b,
          c = 7.5625,
          d = 2.75;
      return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b;
    }, a.mina = s, s;
  }("undefined" == typeof b ? function () {} : b),
      d = function (a) {
    function c(a, b) {
      if (a) {
        if (a.nodeType) return w(a);
        if (e(a, "array") && c.set) return c.set.apply(c, a);
        if (a instanceof s) return a;
        if (null == b) try {
          return a = y.doc.querySelector(String(a)), w(a);
        } catch (d) {
          return null;
        }
      }

      return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b);
    }

    function d(a, b) {
      if (b) {
        if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;

        if (1 == a.nodeType) {
          for (var c in b) {
            if (b[z](c)) {
              var e = A(b[c]);
              e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c);
            }
          }
        } else "text" in b && (a.nodeValue = b.text);
      } else a = y.doc.createElementNS(U, a);

      return a;
    }

    function e(a, b) {
      return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == _typeof(a) && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b;
    }

    function f(a) {
      if ("function" == typeof a || Object(a) !== a) return a;
      var b = new a.constructor();

      for (var c in a) {
        a[z](c) && (b[c] = f(a[c]));
      }

      return b;
    }

    function h(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return a.push(a.splice(c, 1)[0]);
      }
    }

    function i(a, b, c) {
      function d() {
        var e = Array.prototype.slice.call(arguments, 0),
            f = e.join("␀"),
            g = d.cache = d.cache || {},
            i = d.count = d.count || [];
        return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f]);
      }

      return d;
    }

    function j(a, b, c, d, e, f) {
      if (null == e) {
        var g = a - c,
            h = b - d;
        return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0;
      }

      return j(a, b, e, f) - j(c, d, e, f);
    }

    function k(a) {
      return a % 360 * H / 180;
    }

    function l(a) {
      return 180 * a / H % 360;
    }

    function m(a) {
      var b = [];
      return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
        return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, D.tan(k(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, D.tan(k(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a;
      }), b;
    }

    function n(a, b) {
      var d = aa(a),
          e = new c.Matrix();
      if (d) for (var f = 0, g = d.length; g > f; f++) {
        var h,
            i,
            j,
            k,
            l,
            m = d[f],
            n = m.length,
            o = A(m[0]).toLowerCase(),
            p = m[0] != o,
            q = p ? e.invert() : 0;
        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6]);
      }
      return e;
    }

    function o(a) {
      var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
          d = b.select("defs"),
          e = null == d ? !1 : d.node;
      return e || (e = u("defs", b.node).node), e;
    }

    function p(a) {
      return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg");
    }

    function q(a, b, c) {
      function e(a) {
        if (null == a) return I;
        if (a == +a) return a;
        d(j, {
          width: a
        });

        try {
          return j.getBBox().width;
        } catch (b) {
          return 0;
        }
      }

      function f(a) {
        if (null == a) return I;
        if (a == +a) return a;
        d(j, {
          height: a
        });

        try {
          return j.getBBox().height;
        } catch (b) {
          return 0;
        }
      }

      function g(d, e) {
        null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c));
      }

      var h = p(a).node,
          i = {},
          j = h.querySelector(".svg---mgr");

      switch (j || (j = d("rect"), d(j, {
        x: -9e9,
        y: -9e9,
        width: 10,
        height: 10,
        "class": "svg---mgr",
        fill: "none"
      }), h.appendChild(j)), a.type) {
        case "rect":
          g("rx", e), g("ry", f);

        case "image":
          g("width", e), g("height", f);

        case "text":
          g("x", e), g("y", f);
          break;

        case "circle":
          g("cx", e), g("cy", f), g("r", e);
          break;

        case "ellipse":
          g("cx", e), g("cy", f), g("rx", e), g("ry", f);
          break;

        case "line":
          g("x1", e), g("x2", e), g("y1", f), g("y2", f);
          break;

        case "marker":
          g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
          break;

        case "radialGradient":
          g("fx", e), g("fy", f);
          break;

        case "tspan":
          g("dx", e), g("dy", f);
          break;

        default:
          g(b, e);
      }

      return h.removeChild(j), i;
    }

    function r(a) {
      e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));

      for (var b = 0, c = 0, d = this.node; this[b];) {
        delete this[b++];
      }

      for (b = 0; b < a.length; b++) {
        "set" == a[b].type ? a[b].forEach(function (a) {
          d.appendChild(a.node);
        }) : d.appendChild(a[b].node);
      }

      var f = d.childNodes;

      for (b = 0; b < f.length; b++) {
        this[c++] = w(f[b]);
      }

      return this;
    }

    function s(a) {
      if (a.snap in V) return V[a.snap];
      var b;

      try {
        b = a.ownerSVGElement;
      } catch (c) {}

      this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
      var d = this.id = S(this);
      if (this.anims = {}, this._ = {
        transform: []
      }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
        g: 1,
        mask: 1,
        pattern: 1,
        symbol: 1
      }) for (var e in v.prototype) {
        v.prototype[z](e) && (this[e] = v.prototype[e]);
      }
    }

    function t(a) {
      this.node = a;
    }

    function u(a, b) {
      var c = d(a);
      b.appendChild(c);
      var e = w(c);
      return e;
    }

    function v(a, b) {
      var c,
          e,
          f,
          g = v.prototype;

      if (a && a.tagName && "svg" == a.tagName.toLowerCase()) {
        if (a.snap in V) return V[a.snap];
        var h = a.ownerDocument;
        c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;

        for (var i in g) {
          g[z](i) && (c[i] = g[i]);
        }

        c.paper = c.root = c;
      } else c = u("svg", y.doc.body), d(c.node, {
        height: b,
        version: 1.1,
        width: a,
        xmlns: U
      });

      return c;
    }

    function w(a) {
      return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a;
    }

    function x(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        var e = {
          type: a[c].type,
          attr: a[c].attr()
        },
            f = a[c].children();
        b.push(e), f.length && x(f, e.childNodes = []);
      }
    }

    c.version = "0.5.1", c.toString = function () {
      return "Snap v" + this.version;
    }, c._ = {};
    var y = {
      win: a.window,
      doc: a.window.document
    };
    c._.glob = y;

    var z = "hasOwnProperty",
        A = String,
        B = parseFloat,
        C = parseInt,
        D = Math,
        E = D.max,
        F = D.min,
        G = D.abs,
        H = (D.pow, D.PI),
        I = (D.round, ""),
        J = Object.prototype.toString,
        K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
        M = {
      hs: 1,
      rg: 1
    },
        N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        P = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
        Q = 0,
        R = "S" + (+new Date()).toString(36),
        S = function S(a) {
      return (a && a.type ? a.type : I) + R + (Q++).toString(36);
    },
        T = "http://www.w3.org/1999/xlink",
        U = "http://www.w3.org/2000/svg",
        V = {};

    c.url = function (a) {
      return "url('#" + a + "')";
    };

    c._.$ = d, c._.id = S, c.format = function () {
      var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function c(a, _c, d) {
        var e = d;
        return _c.replace(b, function (a, b, c, d, f) {
          b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
        }), e = (null == e || e == d ? a : e) + "";
      };

      return function (b, d) {
        return A(b).replace(a, function (a, b) {
          return c(a, b, d);
        });
      };
    }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function (a) {
      return D.sin(c.rad(a));
    }, c.tan = function (a) {
      return D.tan(c.rad(a));
    }, c.cos = function (a) {
      return D.cos(c.rad(a));
    }, c.asin = function (a) {
      return c.deg(D.asin(a));
    }, c.acos = function (a) {
      return c.deg(D.acos(a));
    }, c.atan = function (a) {
      return c.deg(D.atan(a));
    }, c.atan2 = function (a) {
      return c.deg(D.atan2(a));
    }, c.angle = j, c.len = function (a, b, d, e) {
      return Math.sqrt(c.len2(a, b, d, e));
    }, c.len2 = function (a, b, c, d) {
      return (a - c) * (a - c) + (b - d) * (b - d);
    }, c.closestPoint = function (a, b, c) {
      function d(a) {
        var d = a.x - b,
            e = a.y - c;
        return d * d + e * e;
      }

      for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k) {
        (h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
      }

      for (k *= .5; k > .5;) {
        var n, o, p, q, r, s;
        (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5;
      }

      return e = {
        x: e.x,
        y: e.y,
        length: f,
        distance: Math.sqrt(l)
      };
    }, c.is = e, c.snapTo = function (a, b, c) {
      if (c = e(c, "finite") ? c : 10, e(a, "array")) {
        for (var d = a.length; d--;) {
          if (G(a[d] - b) <= c) return a[d];
        }
      } else {
        a = +a;
        var f = b % a;
        if (c > f) return b - f;
        if (f > a - c) return b - f + a;
      }

      return b;
    }, c.getRGB = i(function (a) {
      if (!a || (a = A(a)).indexOf("-") + 1) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: Z
      };
      if ("none" == a) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        toString: Z
      };
      if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = _W(a)), !a) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: Z
      };
      var b,
          d,
          f,
          g,
          h,
          i,
          j = a.match(K);
      return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
        r: b,
        g: d,
        b: f,
        toString: Z
      }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: Z
      };
    }, c), c.hsb = i(function (a, b, d) {
      return c.hsb2rgb(a, b, d).hex;
    }), c.hsl = i(function (a, b, d) {
      return c.hsl2rgb(a, b, d).hex;
    }), c.rgb = i(function (a, b, c, d) {
      if (e(d, "finite")) {
        var f = D.round;
        return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")";
      }

      return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1);
    });

    var _W = function W(a) {
      var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
          c = "rgb(255, 0, 0)";
      return (_W = i(function (a) {
        if ("red" == a.toLowerCase()) return c;
        b.style.color = c, b.style.color = a;
        var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
        return d == c ? null : d;
      }))(a);
    },
        X = function X() {
      return "hsb(" + [this.h, this.s, this.b] + ")";
    },
        Y = function Y() {
      return "hsl(" + [this.h, this.s, this.l] + ")";
    },
        Z = function Z() {
      return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
    },
        $ = function $(a, b, d) {
      if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
        var f = c.getRGB(a);
        a = f.r, b = f.g, d = f.b;
      }

      return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d];
    },
        _ = function _(a, b, d, f) {
      a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
      var g = {
        r: a,
        g: b,
        b: d,
        opacity: e(f, "finite") ? f : 1,
        hex: c.rgb(a, b, d),
        toString: Z
      };
      return e(f, "finite") && (g.opacity = f), g;
    };

    c.color = function (a) {
      var b;
      return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
        hex: "none"
      }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a;
    }, c.hsb2rgb = function (a, b, c, d) {
      e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
      var f, g, h, i, j;
      return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d);
    }, c.hsl2rgb = function (a, b, c, d) {
      e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
      var f, g, h, i, j;
      return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d);
    }, c.rgb2hsb = function (a, b, c) {
      c = $(a, b, c), a = c[0], b = c[1], c = c[2];
      var d, e, f, g;
      return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
        h: d,
        s: e,
        b: f,
        toString: X
      };
    }, c.rgb2hsl = function (a, b, c) {
      c = $(a, b, c), a = c[0], b = c[1], c = c[2];
      var d, e, f, g, h, i;
      return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
        h: d,
        s: e,
        l: f,
        toString: Y
      };
    }, c.parsePathString = function (a) {
      if (!a) return null;
      var b = c.path(a);
      if (b.arr) return c.path.clone(b.arr);
      var d = {
        a: 7,
        c: 6,
        o: 2,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        u: 3,
        z: 0
      },
          f = [];
      return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function (a, b, c) {
        var e = [],
            g = b.toLowerCase();
        if (c.replace(P, function (a, b) {
          b && e.push(+b);
        }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));else for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]);) {
          ;
        }
      }), f.toString = c.path.toString, b.arr = c.path.clone(f), f;
    };

    var aa = c.parseTransformString = function (a) {
      if (!a) return null;
      var b = [];
      return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function (a, c, d) {
        var e = [];
        c.toLowerCase();
        d.replace(P, function (a, b) {
          b && e.push(+b);
        }), b.push([c].concat(e));
      }), b.toString = c.path.toString, b;
    };

    c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
    y.doc.contains || y.doc.compareDocumentPosition ? function (a, b) {
      var c = 9 == a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
      return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
    } : function (a, b) {
      if (b) for (; b;) {
        if (b = b.parentNode, b == a) return !0;
      }
      return !1;
    };
    c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function (a) {
      return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a));
    }, c.selectAll = function (a) {
      for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) {
        d.push(w(b[e]));
      }

      return d;
    }, setInterval(function () {
      for (var a in V) {
        if (V[z](a)) {
          var b = V[a],
              c = b.node;
          ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a];
        }
      }
    }, 1e4), s.prototype.attr = function (a, c) {
      var d = this,
          f = d.node;

      if (!a) {
        if (1 != f.nodeType) return {
          text: f.nodeValue
        };

        for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) {
          h[g[i].nodeName] = g[i].nodeValue;
        }

        return h;
      }

      if (e(a, "string")) {
        if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
        var k = {};
        k[a] = c, a = k;
      }

      for (var l in a) {
        a[z](l) && b("snap.util.attr." + l, d, a[l]);
      }

      return d;
    }, c.parse = function (a) {
      var b = y.doc.createDocumentFragment(),
          c = !0,
          d = y.doc.createElement("div");
      if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0]) if (c) b = a;else for (; a.firstChild;) {
        b.appendChild(a.firstChild);
      }
      return new t(b);
    }, c.fragment = function () {
      for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
        var f = a[d];
        f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node);
      }

      return new t(b);
    }, c._.make = u, c._.wrap = w, v.prototype.el = function (a, b) {
      var c = u(a, this.node);
      return b && c.attr(b), c;
    }, s.prototype.children = function () {
      for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) {
        a[d] = c(b[d]);
      }

      return a;
    }, s.prototype.toJSON = function () {
      var a = [];
      return x([this], a), a[0];
    }, b.on("snap.util.getattr", function () {
      var a = b.nt();
      a = a.substring(a.lastIndexOf(".") + 1);
      var c = a.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase();
      });
      return ba[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a);
    });
    var ba = {
      "alignment-baseline": 0,
      "baseline-shift": 0,
      clip: 0,
      "clip-path": 0,
      "clip-rule": 0,
      color: 0,
      "color-interpolation": 0,
      "color-interpolation-filters": 0,
      "color-profile": 0,
      "color-rendering": 0,
      cursor: 0,
      direction: 0,
      display: 0,
      "dominant-baseline": 0,
      "enable-background": 0,
      fill: 0,
      "fill-opacity": 0,
      "fill-rule": 0,
      filter: 0,
      "flood-color": 0,
      "flood-opacity": 0,
      font: 0,
      "font-family": 0,
      "font-size": 0,
      "font-size-adjust": 0,
      "font-stretch": 0,
      "font-style": 0,
      "font-variant": 0,
      "font-weight": 0,
      "glyph-orientation-horizontal": 0,
      "glyph-orientation-vertical": 0,
      "image-rendering": 0,
      kerning: 0,
      "letter-spacing": 0,
      "lighting-color": 0,
      marker: 0,
      "marker-end": 0,
      "marker-mid": 0,
      "marker-start": 0,
      mask: 0,
      opacity: 0,
      overflow: 0,
      "pointer-events": 0,
      "shape-rendering": 0,
      "stop-color": 0,
      "stop-opacity": 0,
      stroke: 0,
      "stroke-dasharray": 0,
      "stroke-dashoffset": 0,
      "stroke-linecap": 0,
      "stroke-linejoin": 0,
      "stroke-miterlimit": 0,
      "stroke-opacity": 0,
      "stroke-width": 0,
      "text-anchor": 0,
      "text-decoration": 0,
      "text-rendering": 0,
      "unicode-bidi": 0,
      visibility: 0,
      "word-spacing": 0,
      "writing-mode": 0
    };
    b.on("snap.util.attr", function (a) {
      var c = b.nt(),
          e = {};
      c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
      var f = c.replace(/-(\w)/gi, function (a, b) {
        return b.toUpperCase();
      }),
          g = c.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase();
      });
      ba[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e);
    }), function (a) {}(v.prototype), c.ajax = function (a, c, d, f) {
      var g = new XMLHttpRequest(),
          h = S();

      if (g) {
        if (e(c, "function")) f = d, d = c, c = null;else if (e(c, "object")) {
          var i = [];

          for (var j in c) {
            c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
          }

          c = i.join("&");
        }
        return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
          4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g);
        }, 4 == g.readyState ? g : (g.send(c), g);
      }
    }, c.load = function (a, b, d) {
      c.ajax(a, function (a) {
        var e = c.parse(a.responseText);
        d ? b.call(d, e) : b(e);
      });
    };

    var ca = function ca(a) {
      var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.body,
          e = c.documentElement,
          f = e.clientTop || d.clientTop || 0,
          h = e.clientLeft || d.clientLeft || 0,
          i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
          j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
      return {
        y: i,
        x: j
      };
    };

    return c.getElementByPoint = function (a, b) {
      var c = this,
          d = (c.canvas, y.doc.elementFromPoint(a, b));

      if (y.win.opera && "svg" == d.tagName) {
        var e = ca(d),
            f = d.createSVGRect();
        f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
        var g = d.getIntersectionList(f, null);
        g.length && (d = g[g.length - 1]);
      }

      return d ? w(d) : null;
    }, c.plugin = function (a) {
      a(c, s, v, y, t);
    }, y.win.Snap = c, c;
  }(a || this);

  return d.plugin(function (c, d, e, f, g) {
    function h(a, b) {
      if (null == b) {
        var d = !0;
        if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new c.Matrix();
        b = c._.svgTransform2string(b);
      } else b = c._.rgTransform.test(b) ? m(b).replace(/\.{3}|\u2026/g, a._.transform || "") : c._.svgTransform2string(b), l(b, "array") && (b = c.path ? c.path.toString.call(b) : m(b)), a._.transform = b;

      var e = c._.transform2matrix(b, a.getBBox(1));

      return d ? e : void (a.matrix = e);
    }

    function i(a) {
      function b(a, b) {
        var d = o(a.node, b);
        d = d && d.match(g), d = d && d[2], d && "#" == d.charAt() && (d = d.substring(1), d && (i[d] = (i[d] || []).concat(function (d) {
          var e = {};
          e[b] = c.url(d), o(a.node, e);
        })));
      }

      function d(a) {
        var b = o(a.node, "xlink:href");
        b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
          a.attr("xlink:href", "#" + b);
        })));
      }

      for (var e, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
        e = f[j], b(e, "fill"), b(e, "stroke"), b(e, "filter"), b(e, "mask"), b(e, "clip-path"), d(e);
        var l = o(e.node, "id");
        l && (o(e.node, {
          id: e.id
        }), h.push({
          old: l,
          id: e.id
        }));
      }

      for (j = 0, k = h.length; k > j; j++) {
        var m = i[h[j].old];
        if (m) for (var n = 0, p = m.length; p > n; n++) {
          m[n](h[j].id);
        }
      }
    }

    function j(a) {
      return function () {
        var b = a ? "<" + this.type : "",
            c = this.node.attributes,
            d = this.node.childNodes;
        if (a) for (var e = 0, f = c.length; f > e; e++) {
          b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
        }

        if (d.length) {
          for (a && (b += ">"), e = 0, f = d.length; f > e; e++) {
            3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += s(d[e]).toString());
          }

          a && (b += "</" + this.type + ">");
        } else a && (b += "/>");

        return b;
      };
    }

    var k = d.prototype,
        l = c.is,
        m = String,
        n = c._unit2px,
        o = c._.$,
        p = c._.make,
        q = c._.getSomeDefs,
        r = "hasOwnProperty",
        s = c._.wrap;

    k.getBBox = function (a) {
      if ("tspan" == this.type) return c._.box(this.node.getClientRects().item(0));
      if (!c.Matrix || !c.path) return this.node.getBBox();
      var b = this,
          d = new c.Matrix();
      if (b.removed) return c._.box();

      for (; "use" == b.type;) {
        if (a || (d = d.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;else {
          var e = b.attr("xlink:href");
          b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1));
        }
      }

      var f = b._,
          g = c.path.get[b.type] || c.path.get.deflt;

      try {
        return a ? (f.bboxwt = g ? c.path.getBBox(b.realPath = g(b)) : c._.box(b.node.getBBox()), c._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = c.path.getBBox(c.path.map(b.realPath, d.add(b.matrix))), c._.box(f.bbox));
      } catch (h) {
        return c._.box();
      }
    };

    var t = function t() {
      return this.string;
    };

    k.transform = function (a) {
      var b = this._;

      if (null == a) {
        for (var d, e = this, f = new c.Matrix(this.node.getCTM()), g = h(this), i = [g], j = new c.Matrix(), k = g.toTransformString(), l = m(g) == m(this.matrix) ? m(b.transform) : k; "svg" != e.type && (e = e.parent());) {
          i.push(h(e));
        }

        for (d = i.length; d--;) {
          j.add(i[d]);
        }

        return {
          string: l,
          globalMatrix: f,
          totalMatrix: j,
          localMatrix: g,
          diffMatrix: f.clone().add(g.invert()),
          global: f.toTransformString(),
          total: j.toTransformString(),
          local: k,
          toString: t
        };
      }

      return a instanceof c.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : h(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? o(this.node, {
        gradientTransform: this.matrix
      }) : "pattern" == this.type ? o(this.node, {
        patternTransform: this.matrix
      }) : o(this.node, {
        transform: this.matrix
      })), this;
    }, k.parent = function () {
      return s(this.node.parentNode);
    }, k.append = k.add = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b = this;
          return a.forEach(function (a) {
            b.add(a);
          }), this;
        }

        a = s(a), this.node.appendChild(a.node), a.paper = this.paper;
      }

      return this;
    }, k.appendTo = function (a) {
      return a && (a = s(a), a.append(this)), this;
    }, k.prepend = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b,
              c = this;
          return a.forEach(function (a) {
            b ? b.after(a) : c.prepend(a), b = a;
          }), this;
        }

        a = s(a);
        var d = a.parent();
        this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add();
      }

      return this;
    }, k.prependTo = function (a) {
      return a = s(a), a.prepend(this), this;
    }, k.before = function (a) {
      if ("set" == a.type) {
        var b = this;
        return a.forEach(function (a) {
          var c = a.parent();
          b.node.parentNode.insertBefore(a.node, b.node), c && c.add();
        }), this.parent().add(), this;
      }

      a = s(a);
      var c = a.parent();
      return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this;
    }, k.after = function (a) {
      a = s(a);
      var b = a.parent();
      return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this;
    }, k.insertBefore = function (a) {
      a = s(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this;
    }, k.insertAfter = function (a) {
      a = s(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this;
    }, k.remove = function () {
      var a = this.parent();
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this;
    }, k.select = function (a) {
      return s(this.node.querySelector(a));
    }, k.selectAll = function (a) {
      for (var b = this.node.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) {
        d.push(s(b[e]));
      }

      return d;
    }, k.asPX = function (a, b) {
      return null == b && (b = this.attr(a)), +n(this, a, b);
    }, k.use = function () {
      var a,
          b = this.node.id;
      return b || (b = this.id, o(this.node, {
        id: b
      })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode), o(a.node, {
        "xlink:href": "#" + b
      }), a.original = this, a;
    }, k.clone = function () {
      var a = s(this.node.cloneNode(!0));
      return o(a.node, "id") && o(a.node, {
        id: a.id
      }), i(a), a.insertAfter(this), a;
    }, k.toDefs = function () {
      var a = q(this);
      return a.appendChild(this.node), this;
    }, k.pattern = k.toPattern = function (a, b, c, d) {
      var e = p("pattern", q(this));
      return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), o(e.node, {
        x: a,
        y: b,
        width: c,
        height: d,
        patternUnits: "userSpaceOnUse",
        id: e.id,
        viewBox: [a, b, c, d].join(" ")
      }), e.node.appendChild(this.node), e;
    }, k.marker = function (a, b, c, d, e, f) {
      var g = p("marker", q(this));
      return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), o(g.node, {
        viewBox: [a, b, c, d].join(" "),
        markerWidth: c,
        markerHeight: d,
        orient: "auto",
        refX: e || 0,
        refY: f || 0,
        id: g.id
      }), g.node.appendChild(this.node), g;
    };
    var u = {};
    k.data = function (a, d) {
      var e = u[this.id] = u[this.id] || {};
      if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;

      if (1 == arguments.length) {
        if (c.is(a, "object")) {
          for (var f in a) {
            a[r](f) && this.data(f, a[f]);
          }

          return this;
        }

        return b("snap.data.get." + this.id, this, e[a], a), e[a];
      }

      return e[a] = d, b("snap.data.set." + this.id, this, d, a), this;
    }, k.removeData = function (a) {
      return null == a ? u[this.id] = {} : u[this.id] && delete u[this.id][a], this;
    }, k.outerSVG = k.toString = j(1), k.innerSVG = j(), k.toDataURL = function () {
      if (a && a.btoa) {
        var b = this.getBBox(),
            d = c.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
          x: +b.x.toFixed(3),
          y: +b.y.toFixed(3),
          width: +b.width.toFixed(3),
          height: +b.height.toFixed(3),
          contents: this.outerSVG()
        });
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(d)));
      }
    }, g.prototype.select = k.select, g.prototype.selectAll = k.selectAll;
  }), d.plugin(function (a, d, e, f, g) {
    function h(a, b, c) {
      return function (d) {
        var e = d.slice(a, b);
        return 1 == e.length && (e = e[0]), c ? c(e) : e;
      };
    }

    var i = d.prototype,
        j = a.is,
        k = String,
        l = "hasOwnProperty",
        m = function m(a, b, d, e) {
      "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e);
    };

    a._.Animation = m, a.animation = function (a, b, c, d) {
      return new m(a, b, c, d);
    }, i.inAnim = function () {
      var a = this,
          b = [];

      for (var c in a.anims) {
        a.anims[l](c) && !function (a) {
          b.push({
            anim: new m(a._attrs, a.dur, a.easing, a._callback),
            mina: a,
            curStatus: a.status(),
            status: function status(b) {
              return a.status(b);
            },
            stop: function stop() {
              a.stop();
            }
          });
        }(a.anims[c]);
      }

      return b;
    }, a.animate = function (a, d, e, f, g, h) {
      "function" != typeof g || g.length || (h = g, g = c.linear);
      var i = c.time(),
          j = c(a, d, i, i + f, c.time, e, g);
      return h && b.once("mina.finish." + j.id, h), j;
    }, i.stop = function () {
      for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) {
        a[b].stop();
      }

      return this;
    }, i.animate = function (a, d, e, f) {
      "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof m && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
      var g,
          i,
          n,
          o,
          p = [],
          q = [],
          r = {},
          s = this;

      for (var t in a) {
        if (a[l](t)) {
          s.equal ? (o = s.equal(t, k(a[t])), g = o.from, i = o.to, n = o.f) : (g = +s.attr(t), i = +a[t]);
          var u = j(g, "array") ? g.length : 1;
          r[t] = h(p.length, p.length + u, n), p = p.concat(g), q = q.concat(i);
        }
      }

      var v = c.time(),
          w = c(p, q, v, v + d, c.time, function (a) {
        var b = {};

        for (var c in r) {
          r[l](c) && (b[c] = r[c](a));
        }

        s.attr(b);
      }, e);
      return s.anims[w.id] = w, w._attrs = a, w._callback = f, b("snap.animcreated." + s.id, w), b.once("mina.finish." + w.id, function () {
        b.off("mina.*." + w.id), delete s.anims[w.id], f && f.call(s);
      }), b.once("mina.stop." + w.id, function () {
        b.off("mina.*." + w.id), delete s.anims[w.id];
      }), s;
    };
  }), d.plugin(function (a, b, c, d, e) {
    function f(a, b, c, d, e, f) {
      return null == b && "[object SVGMatrix]" == g.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void (this.f = a.f)) : void (null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0));
    }

    var g = Object.prototype.toString,
        h = String,
        i = Math,
        j = "";
    !function (b) {
      function c(a) {
        return a[0] * a[0] + a[1] * a[1];
      }

      function d(a) {
        var b = i.sqrt(c(a));
        a[0] && (a[0] /= b), a[1] && (a[1] /= b);
      }

      b.add = function (a, b, c, d, e, g) {
        if (a && a instanceof f) return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
        var h = a * this.a + b * this.c,
            i = a * this.b + b * this.d;
        return this.e += e * this.a + g * this.c, this.f += e * this.b + g * this.d, this.c = c * this.a + d * this.c, this.d = c * this.b + d * this.d, this.a = h, this.b = i, this;
      }, f.prototype.multLeft = function (a, b, c, d, e, g) {
        if (a && a instanceof f) return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
        var h = a * this.a + c * this.b,
            i = a * this.c + c * this.d,
            j = a * this.e + c * this.f + e;
        return this.b = b * this.a + d * this.b, this.d = b * this.c + d * this.d, this.f = b * this.e + d * this.f + g, this.a = h, this.c = i, this.e = j, this;
      }, b.invert = function () {
        var a = this,
            b = a.a * a.d - a.b * a.c;
        return new f(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b);
      }, b.clone = function () {
        return new f(this.a, this.b, this.c, this.d, this.e, this.f);
      }, b.translate = function (a, b) {
        return this.e += a * this.a + b * this.c, this.f += a * this.b + b * this.d, this;
      }, b.scale = function (a, b, c, d) {
        return null == b && (b = a), (c || d) && this.translate(c, d), this.a *= a, this.b *= a, this.c *= b, this.d *= b, (c || d) && this.translate(-c, -d), this;
      }, b.rotate = function (b, c, d) {
        b = a.rad(b), c = c || 0, d = d || 0;
        var e = +i.cos(b).toFixed(9),
            f = +i.sin(b).toFixed(9);
        return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d);
      }, b.skewX = function (a) {
        return this.skew(a, 0);
      }, b.skewY = function (a) {
        return this.skew(0, a);
      }, b.skew = function (b, c) {
        b = b || 0, c = c || 0, b = a.rad(b), c = a.rad(c);
        var d = i.tan(b).toFixed(9),
            e = i.tan(c).toFixed(9);
        return this.add(1, e, d, 1, 0, 0);
      }, b.x = function (a, b) {
        return a * this.a + b * this.c + this.e;
      }, b.y = function (a, b) {
        return a * this.b + b * this.d + this.f;
      }, b.get = function (a) {
        return +this[h.fromCharCode(97 + a)].toFixed(4);
      }, b.toString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
      }, b.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)];
      }, b.determinant = function () {
        return this.a * this.d - this.b * this.c;
      }, b.split = function () {
        var b = {};
        b.dx = this.e, b.dy = this.f;
        var e = [[this.a, this.b], [this.c, this.d]];
        b.scalex = i.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = i.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
        var f = e[0][1],
            g = e[1][1];
        return 0 > g ? (b.rotate = a.deg(i.acos(g)), 0 > f && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(i.asin(f)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b;
      }, b.toTransformString = function (a) {
        var b = a || this.split();
        return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : j) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : j) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : j));
      };
    }(f.prototype), a.Matrix = f, a.matrix = function (a, b, c, d, e, g) {
      return new f(a, b, c, d, e, g);
    };
  }), d.plugin(function (a, c, d, e, f) {
    function g(d) {
      return function (e) {
        if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c) {
          if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
            e.node.id || p(e.node, {
              id: e.id
            });
            var g = q(e.node.id);
          } else g = e.attr(d);
        } else if (g = a.color(e), g.error) {
          var h = a(n(this).ownerSVGElement).gradient(e);
          h ? (h.node.id || p(h.node, {
            id: h.id
          }), g = q(h.node.id)) : g = e;
        } else g = r(g);
        var i = {};
        i[d] = g, p(this.node, i), this.node.style[d] = t;
      };
    }

    function h(a) {
      b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a;
    }

    function i(a) {
      for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
        var f = c[d];
        3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(i(f)));
      }

      return b;
    }

    function j() {
      return b.stop(), this.node.style.fontSize;
    }

    var k = a._.make,
        l = a._.wrap,
        m = a.is,
        n = a._.getSomeDefs,
        o = /^url\((['"]?)([^)]+)\1\)$/,
        p = a._.$,
        q = a.url,
        r = String,
        s = a._.separator,
        t = "";
    a.deurl = function (a) {
      var b = String(a).match(o);
      return b ? b[2] : a;
    }, b.on("snap.util.attr.mask", function (a) {
      if (a instanceof c || a instanceof f) {
        if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;else d = k("mask", n(this)), d.node.appendChild(a.node);
        !d.node.id && p(d.node, {
          id: d.id
        }), p(this.node, {
          mask: q(d.id)
        });
      }
    }), function (a) {
      b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a);
    }(function (a) {
      if (a instanceof c || a instanceof f) {
        b.stop();

        for (var d, e = a.node; e;) {
          if ("clipPath" === e.nodeName) {
            d = new c(e);
            break;
          }

          if ("svg" === e.nodeName) {
            d = void 0;
            break;
          }

          e = e.parentNode;
        }

        d || (d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
          id: d.id
        })), p(this.node, {
          "clip-path": q(d.node.id || d.id)
        });
      }
    }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
    var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    b.on("snap.util.grad.parse", function (a) {
      function b(a, b) {
        for (var c = (b - h) / (a - i), d = i; a > d; d++) {
          f[d].offset = +(+h + c * (d - i)).toFixed(2);
        }

        i = a, h = b;
      }

      a = r(a);
      var c = a.match(u);
      if (!c) return null;
      var d = c[1],
          e = c[2],
          f = c[3];
      e = e.split(/\s*,\s*/).map(function (a) {
        return +a == a ? +a : a;
      }), 1 == e.length && 0 == e[0] && (e = []), f = f.split("-"), f = f.map(function (a) {
        a = a.split(":");
        var b = {
          color: a[0]
        };
        return a[1] && (b.offset = parseFloat(a[1])), b;
      });
      var g = f.length,
          h = 0,
          i = 0;
      g--;

      for (var j = 0; g > j; j++) {
        "offset" in f[j] && b(j, f[j].offset);
      }

      return f[g].offset = f[g].offset || 100, b(g, f[g].offset), {
        type: d,
        params: e,
        stops: f
      };
    }), b.on("snap.util.attr.d", function (c) {
      b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
        d: c
      });
    })(-1), b.on("snap.util.attr.#text", function (a) {
      b.stop(), a = r(a);

      for (var c = e.doc.createTextNode(a); this.node.firstChild;) {
        this.node.removeChild(this.node.firstChild);
      }

      this.node.appendChild(c);
    })(-1), b.on("snap.util.attr.path", function (a) {
      b.stop(), this.attr({
        d: a
      });
    })(-1), b.on("snap.util.attr.class", function (a) {
      b.stop(), this.node.className.baseVal = a;
    })(-1), b.on("snap.util.attr.viewBox", function (a) {
      var c;
      c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
        viewBox: c
      }), b.stop();
    })(-1), b.on("snap.util.attr.transform", function (a) {
      this.transform(a), b.stop();
    })(-1), b.on("snap.util.attr.r", function (a) {
      "rect" == this.type && (b.stop(), p(this.node, {
        rx: a,
        ry: a
      }));
    })(-1), b.on("snap.util.attr.textpath", function (a) {
      if (b.stop(), "text" == this.type) {
        var d, e, f;

        if (!a && this.textPath) {
          for (e = this.textPath; e.node.firstChild;) {
            this.node.appendChild(e.node.firstChild);
          }

          return e.remove(), void delete this.textPath;
        }

        if (m(a, "string")) {
          var g = n(this),
              h = l(g.parentNode).path(a);
          g.appendChild(h.node), d = h.id, h.attr({
            id: d
          });
        } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
          id: d
        })));

        if (d) if (e = this.textPath, f = this.node, e) e.attr({
          "xlink:href": "#" + d
        });else {
          for (e = p("textPath", {
            "xlink:href": "#" + d
          }); f.firstChild;) {
            e.appendChild(f.firstChild);
          }

          f.appendChild(e), this.textPath = l(e);
        }
      }
    })(-1), b.on("snap.util.attr.text", function (a) {
      if ("text" == this.type) {
        for (var c = this.node, d = function d(a) {
          var b = p("tspan");
          if (m(a, "array")) for (var c = 0; c < a.length; c++) {
            b.appendChild(d(a[c]));
          } else b.appendChild(e.doc.createTextNode(a));
          return b.normalize && b.normalize(), b;
        }; c.firstChild;) {
          c.removeChild(c.firstChild);
        }

        for (var f = d(a); f.firstChild;) {
          c.appendChild(f.firstChild);
        }
      }

      b.stop();
    })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function () {
      return b.stop(), this.transform();
    })(-1), b.on("snap.util.getattr.textpath", function () {
      return b.stop(), this.textPath;
    })(-1), function () {
      function c(c) {
        return function () {
          b.stop();
          var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
          return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]));
        };
      }

      function d(a) {
        return function (c) {
          b.stop();
          var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
          if ("" == c || !c) return void (this.node.style[d] = "none");

          if ("marker" == c.type) {
            var e = c.node.id;
            return e || p(c.node, {
              id: c.id
            }), void (this.node.style[d] = q(e));
          }
        };
      }

      b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1);
    }(), b.on("snap.util.getattr.r", function () {
      return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0;
    })(-1), b.on("snap.util.getattr.text", function () {
      if ("text" == this.type || "tspan" == this.type) {
        b.stop();
        var a = i(this.node);
        return 1 == a.length ? a[0] : a;
      }
    })(-1), b.on("snap.util.getattr.#text", function () {
      return this.node.textContent;
    })(-1), b.on("snap.util.getattr.fill", function (c) {
      if (!c) {
        b.stop();
        var d = b("snap.util.getattr.fill", this, !0).firstDefined();
        return a(a.deurl(d)) || d;
      }
    })(-1), b.on("snap.util.getattr.stroke", function (c) {
      if (!c) {
        b.stop();
        var d = b("snap.util.getattr.stroke", this, !0).firstDefined();
        return a(a.deurl(d)) || d;
      }
    })(-1), b.on("snap.util.getattr.viewBox", function () {
      b.stop();
      var c = p(this.node, "viewBox");
      return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0;
    })(-1), b.on("snap.util.getattr.points", function () {
      var a = p(this.node, "points");
      return b.stop(), a ? a.split(s) : void 0;
    })(-1), b.on("snap.util.getattr.path", function () {
      var a = p(this.node, "d");
      return b.stop(), a;
    })(-1), b.on("snap.util.getattr.class", function () {
      return this.node.className.baseVal;
    })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1);
  }), d.plugin(function (a, b, c, d, e) {
    var f = /\S+/g,
        g = String,
        h = b.prototype;
    h.addClass = function (a) {
      var b,
          c,
          d,
          e,
          h = g(a || "").match(f) || [],
          i = this.node,
          j = i.className.baseVal,
          k = j.match(f) || [];

      if (h.length) {
        for (b = 0; d = h[b++];) {
          c = k.indexOf(d), ~c || k.push(d);
        }

        e = k.join(" "), j != e && (i.className.baseVal = e);
      }

      return this;
    }, h.removeClass = function (a) {
      var b,
          c,
          d,
          e,
          h = g(a || "").match(f) || [],
          i = this.node,
          j = i.className.baseVal,
          k = j.match(f) || [];

      if (k.length) {
        for (b = 0; d = h[b++];) {
          c = k.indexOf(d), ~c && k.splice(c, 1);
        }

        e = k.join(" "), j != e && (i.className.baseVal = e);
      }

      return this;
    }, h.hasClass = function (a) {
      var b = this.node,
          c = b.className.baseVal,
          d = c.match(f) || [];
      return !!~d.indexOf(a);
    }, h.toggleClass = function (a, b) {
      if (null != b) return b ? this.addClass(a) : this.removeClass(a);
      var c,
          d,
          e,
          g,
          h = (a || "").match(f) || [],
          i = this.node,
          j = i.className.baseVal,
          k = j.match(f) || [];

      for (c = 0; e = h[c++];) {
        d = k.indexOf(e), ~d ? k.splice(d, 1) : k.push(e);
      }

      return g = k.join(" "), j != g && (i.className.baseVal = g), this;
    };
  }), d.plugin(function (a, c, d, e, f) {
    function g(a) {
      return a;
    }

    function h(a) {
      return function (b) {
        return +b.toFixed(3) + a;
      };
    }

    var i = {
      "+": function _(a, b) {
        return a + b;
      },
      "-": function _(a, b) {
        return a - b;
      },
      "/": function _(a, b) {
        return a / b;
      },
      "*": function _(a, b) {
        return a * b;
      }
    },
        j = String,
        k = /[a-z]+$/i,
        l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    b.on("snap.util.attr", function (a) {
      var c = j(a).match(l);

      if (c) {
        var d = b.nt(),
            e = d.substring(d.lastIndexOf(".") + 1),
            f = this.attr(e),
            g = {};
        b.stop();
        var h = c[3] || "",
            m = f.match(k),
            n = i[c[1]];
        if (m && m == h ? a = n(parseFloat(f), +c[2]) : (f = this.asPX(e), a = n(this.asPX(e), this.asPX(e, c[2] + h))), isNaN(f) || isNaN(a)) return;
        g[e] = a, this.attr(g);
      }
    })(-10), b.on("snap.util.equal", function (a, c) {
      var d = j(this.attr(a) || ""),
          e = j(c).match(l);

      if (e) {
        b.stop();
        var f = e[3] || "",
            m = d.match(k),
            n = i[e[1]];
        return m && m == f ? {
          from: parseFloat(d),
          to: n(parseFloat(d), +e[2]),
          f: h(m)
        } : (d = this.asPX(a), {
          from: d,
          to: n(d, this.asPX(a, e[2] + f)),
          f: g
        });
      }
    })(-10);
  }), d.plugin(function (c, d, e, f, g) {
    var h = e.prototype,
        i = c.is;
    h.rect = function (a, b, c, d, e, f) {
      var g;
      return null == f && (f = e), i(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
        x: a,
        y: b,
        width: c,
        height: d
      }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g);
    }, h.circle = function (a, b, c) {
      var d;
      return i(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
        cx: a,
        cy: b,
        r: c
      }), this.el("circle", d);
    };

    var j = function () {
      function a() {
        this.parentNode.removeChild(this);
      }

      return function (b, c) {
        var d = f.doc.createElement("img"),
            e = f.doc.body;
        d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
          c.call(d), d.onload = d.onerror = null, e.removeChild(d);
        }, d.onerror = a, e.appendChild(d), d.src = b;
      };
    }();

    h.image = function (a, b, d, e, f) {
      var g = this.el("image");
      if (i(a, "object") && "src" in a) g.attr(a);else if (null != a) {
        var h = {
          "xlink:href": a,
          preserveAspectRatio: "none"
        };
        null != b && null != d && (h.x = b, h.y = d), null != e && null != f ? (h.width = e, h.height = f) : j(a, function () {
          c._.$(g.node, {
            width: this.offsetWidth,
            height: this.offsetHeight
          });
        }), c._.$(g.node, h);
      }
      return g;
    }, h.ellipse = function (a, b, c, d) {
      var e;
      return i(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
        cx: a,
        cy: b,
        rx: c,
        ry: d
      }), this.el("ellipse", e);
    }, h.path = function (a) {
      var b;
      return i(a, "object") && !i(a, "array") ? b = a : a && (b = {
        d: a
      }), this.el("path", b);
    }, h.group = h.g = function (a) {
      var b = this.el("g");
      return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b;
    }, h.svg = function (a, b, c, d, e, f, g, h) {
      var j = {};
      return i(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h && (j.viewBox = [e, f, g, h])), this.el("svg", j);
    }, h.mask = function (a) {
      var b = this.el("mask");
      return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b;
    }, h.ptrn = function (a, b, c, d, e, f, g, h) {
      if (i(a, "object")) var j = a;else j = {
        patternUnits: "userSpaceOnUse"
      }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h ? j.viewBox = [e, f, g, h] : j.viewBox = [a || 0, b || 0, c || 0, d || 0];
      return this.el("pattern", j);
    }, h.use = function (a) {
      return null != a ? (a instanceof d && (a.attr("id") || a.attr({
        id: c._.id(a)
      }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
        "xlink:href": "#" + a
      })) : d.prototype.use.call(this);
    }, h.symbol = function (a, b, c, d) {
      var e = {};
      return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e);
    }, h.text = function (a, b, c) {
      var d = {};
      return i(a, "object") ? d = a : null != a && (d = {
        x: a,
        y: b,
        text: c || ""
      }), this.el("text", d);
    }, h.line = function (a, b, c, d) {
      var e = {};
      return i(a, "object") ? e = a : null != a && (e = {
        x1: a,
        x2: c,
        y1: b,
        y2: d
      }), this.el("line", e);
    }, h.polyline = function (a) {
      arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
      var b = {};
      return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
        points: a
      }), this.el("polyline", b);
    }, h.polygon = function (a) {
      arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
      var b = {};
      return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
        points: a
      }), this.el("polygon", b);
    }, function () {
      function d() {
        return this.selectAll("stop");
      }

      function e(a, b) {
        var d = l("stop"),
            e = {
          offset: +b + "%"
        };
        a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), l(d, e);

        for (var f, g = this.stops(), h = 0; h < g.length; h++) {
          var i = parseFloat(g[h].attr("offset"));

          if (i > b) {
            this.node.insertBefore(d, g[h].node), f = !0;
            break;
          }
        }

        return f || this.node.appendChild(d), this;
      }

      function f() {
        if ("linearGradient" == this.type) {
          var a = l(this.node, "x1") || 0,
              b = l(this.node, "x2") || 1,
              d = l(this.node, "y1") || 0,
              e = l(this.node, "y2") || 0;
          return c._.box(a, d, math.abs(b - a), math.abs(e - d));
        }

        var f = this.node.cx || .5,
            g = this.node.cy || .5,
            h = this.node.r || 0;
        return c._.box(f - h, g - h, 2 * h, 2 * h);
      }

      function g(a) {
        var d = a,
            e = this.stops();

        if ("string" == typeof a && (d = b("snap.util.grad.parse", null, "l(0,0,0,1)" + a).firstDefined().stops), c.is(d, "array")) {
          for (var f = 0; f < e.length; f++) {
            if (d[f]) {
              var g = c.color(d[f].color),
                  h = {
                offset: d[f].offset + "%"
              };
              h["stop-color"] = g.hex, g.opacity < 1 && (h["stop-opacity"] = g.opacity), e[f].attr(h);
            } else e[f].remove();
          }

          for (f = e.length; f < d.length; f++) {
            this.addStop(d[f].color, d[f].offset);
          }

          return this;
        }
      }

      function i(a, c) {
        var d,
            e = b("snap.util.grad.parse", null, c).firstDefined();
        if (!e) return null;
        e.params.unshift(a), d = "l" == e.type.toLowerCase() ? j.apply(0, e.params) : k.apply(0, e.params), e.type != e.type.toLowerCase() && l(d.node, {
          gradientUnits: "userSpaceOnUse"
        });

        for (var f = e.stops, g = f.length, h = 0; g > h; h++) {
          var i = f[h];
          d.addStop(i.color, i.offset);
        }

        return d;
      }

      function j(a, b, h, i, j) {
        var k = c._.make("linearGradient", a);

        return k.stops = d, k.addStop = e, k.getBBox = f, k.setStops = g, null != b && l(k.node, {
          x1: b,
          y1: h,
          x2: i,
          y2: j
        }), k;
      }

      function k(a, b, g, h, i, j) {
        var k = c._.make("radialGradient", a);

        return k.stops = d, k.addStop = e, k.getBBox = f, null != b && l(k.node, {
          cx: b,
          cy: g,
          r: h
        }), null != i && null != j && l(k.node, {
          fx: i,
          fy: j
        }), k;
      }

      var l = c._.$;
      h.gradient = function (a) {
        return i(this.defs, a);
      }, h.gradientLinear = function (a, b, c, d) {
        return j(this.defs, a, b, c, d);
      }, h.gradientRadial = function (a, b, c, d, e) {
        return k(this.defs, a, b, c, d, e);
      }, h.toString = function () {
        var a,
            b = this.node.ownerDocument,
            d = b.createDocumentFragment(),
            e = b.createElement("div"),
            f = this.node.cloneNode(!0);
        return d.appendChild(e), e.appendChild(f), c._.$(f, {
          xmlns: "http://www.w3.org/2000/svg"
        }), a = e.innerHTML, d.removeChild(d.firstChild), a;
      }, h.toDataURL = function () {
        return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0;
      }, h.clear = function () {
        for (var a, b = this.node.firstChild; b;) {
          a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : h.clear.call({
            node: b
          }), b = a;
        }
      };
    }();
  }), d.plugin(function (a, b, c, d) {
    function e(a) {
      var b = e.ps = e.ps || {};
      return b[a] ? b[a].sleep = 100 : b[a] = {
        sleep: 100
      }, setTimeout(function () {
        for (var c in b) {
          b[M](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
        }
      }), b[a];
    }

    function f(a, b, c, d) {
      return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
        x: a,
        y: b,
        width: c,
        w: c,
        height: d,
        h: d,
        x2: a + c,
        y2: b + d,
        cx: a + c / 2,
        cy: b + d / 2,
        r1: P.min(c, d) / 2,
        r2: P.max(c, d) / 2,
        r0: P.sqrt(c * c + d * d) / 2,
        path: y(a, b, c, d),
        vb: [a, b, c, d].join(" ")
      };
    }

    function g() {
      return this.join(",").replace(N, "$1");
    }

    function h(a) {
      var b = L(a);
      return b.toString = g, b;
    }

    function i(a, b, c, d, e, f, g, h, i) {
      return null == i ? p(a, b, c, d, e, f, g, h) : k(a, b, c, d, e, f, g, h, q(a, b, c, d, e, f, g, h, i));
    }

    function j(c, d) {
      function e(a) {
        return +(+a).toFixed(3);
      }

      return a._.cacher(function (a, f, g) {
        a instanceof b && (a = a.attr("d")), a = G(a);

        for (var h, j, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
          if (l = a[r], "M" == l[0]) h = +l[1], j = +l[2];else {
            if (m = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
              if (d && !p.start) {
                if (n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], g) return o;
                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, h = +l[5], j = +l[6];
                continue;
              }

              if (!c && !d) return n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q);
            }

            q += m, h = +l[5], j = +l[6];
          }
          o += l.shift() + l;
        }

        return p.end = o, n = c ? q : d ? p : k(h, j, l[0], l[1], l[2], l[3], l[4], l[5], 1);
      }, null, a._.clone);
    }

    function k(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
          k = T(j, 3),
          l = T(j, 2),
          m = i * i,
          n = m * i,
          o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
          p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
          q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
          r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
          s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
          t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
          u = j * a + i * c,
          v = j * b + i * d,
          w = j * e + i * g,
          x = j * f + i * h,
          y = 90 - 180 * P.atan2(q - s, r - t) / Q;
      return {
        x: o,
        y: p,
        m: {
          x: q,
          y: r
        },
        n: {
          x: s,
          y: t
        },
        start: {
          x: u,
          y: v
        },
        end: {
          x: w,
          y: x
        },
        alpha: y
      };
    }

    function l(b, c, d, e, g, h, i, j) {
      a.is(b, "array") || (b = [b, c, d, e, g, h, i, j]);
      var k = F.apply(null, b);
      return f(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y);
    }

    function m(a, b, c) {
      return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height;
    }

    function n(a, b) {
      return a = f(a), b = f(b), m(b, a.x, a.y) || m(b, a.x2, a.y) || m(b, a.x, a.y2) || m(b, a.x2, a.y2) || m(a, b.x, b.y) || m(a, b.x2, b.y) || m(a, b.x, b.y2) || m(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y);
    }

    function o(a, b, c, d, e) {
      var f = -3 * b + 9 * c - 9 * d + 3 * e,
          g = a * f + 6 * b - 12 * c + 6 * d;
      return a * g - 3 * b + 3 * c;
    }

    function p(a, b, c, d, e, f, g, h, i) {
      null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;

      for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, p = 0; k > p; p++) {
        var q = j * l[p] + j,
            r = o(q, a, c, e, g),
            s = o(q, b, d, f, h),
            t = r * r + s * s;
        n += m[p] * P.sqrt(t);
      }

      return j * n;
    }

    function q(a, b, c, d, e, f, g, h, i) {
      if (!(0 > i || p(a, b, c, d, e, f, g, h) < i)) {
        var j,
            k = 1,
            l = k / 2,
            m = k - l,
            n = .01;

        for (j = p(a, b, c, d, e, f, g, h, m); U(j - i) > n;) {
          l /= 2, m += (i > j ? 1 : -1) * l, j = p(a, b, c, d, e, f, g, h, m);
        }

        return m;
      }
    }

    function r(a, b, c, d, e, f, g, h) {
      if (!(S(a, c) < R(e, g) || R(a, c) > S(e, g) || S(b, d) < R(f, h) || R(b, d) > S(f, h))) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
            j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
            k = (a - c) * (f - h) - (b - d) * (e - g);

        if (k) {
          var l = i / k,
              m = j / k,
              n = +l.toFixed(2),
              o = +m.toFixed(2);
          if (!(n < +R(a, c).toFixed(2) || n > +S(a, c).toFixed(2) || n < +R(e, g).toFixed(2) || n > +S(e, g).toFixed(2) || o < +R(b, d).toFixed(2) || o > +S(b, d).toFixed(2) || o < +R(f, h).toFixed(2) || o > +S(f, h).toFixed(2))) return {
            x: l,
            y: m
          };
        }
      }
    }

    function s(a, b, c) {
      var d = l(a),
          e = l(b);
      if (!n(d, e)) return c ? 0 : [];

      for (var f = p.apply(0, a), g = p.apply(0, b), h = ~~(f / 8), i = ~~(g / 8), j = [], m = [], o = {}, q = c ? 0 : [], s = 0; h + 1 > s; s++) {
        var t = k.apply(0, a.concat(s / h));
        j.push({
          x: t.x,
          y: t.y,
          t: s / h
        });
      }

      for (s = 0; i + 1 > s; s++) {
        t = k.apply(0, b.concat(s / i)), m.push({
          x: t.x,
          y: t.y,
          t: s / i
        });
      }

      for (s = 0; h > s; s++) {
        for (var u = 0; i > u; u++) {
          var v = j[s],
              w = j[s + 1],
              x = m[u],
              y = m[u + 1],
              z = U(w.x - v.x) < .001 ? "y" : "x",
              A = U(y.x - x.x) < .001 ? "y" : "x",
              B = r(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);

          if (B) {
            if (o[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
            o[B.x.toFixed(4)] = B.y.toFixed(4);
            var C = v.t + U((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                D = x.t + U((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
            C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? q++ : q.push({
              x: B.x,
              y: B.y,
              t1: C,
              t2: D
            }));
          }
        }
      }

      return q;
    }

    function t(a, b) {
      return v(a, b);
    }

    function u(a, b) {
      return v(a, b, 1);
    }

    function v(a, b, c) {
      a = G(a), b = G(b);

      for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
        var q = a[o];
        if ("M" == q[0]) d = h = q[1], e = i = q[2];else {
          "C" == q[0] ? (l = [d, e].concat(q.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);

          for (var r = 0, t = b.length; t > r; r++) {
            var u = b[r];
            if ("M" == u[0]) f = j = u[1], g = k = u[2];else {
              "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
              var v = s(l, m, c);
              if (c) n += v;else {
                for (var w = 0, x = v.length; x > w; w++) {
                  v[w].segment1 = o, v[w].segment2 = r, v[w].bez1 = l, v[w].bez2 = m;
                }

                n = n.concat(v);
              }
            }
          }
        }
      }

      return n;
    }

    function w(a, b, c) {
      var d = x(a);
      return m(d, b, c) && v(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2 == 1;
    }

    function x(a) {
      var b = e(a);
      if (b.bbox) return L(b.bbox);
      if (!a) return f();
      a = G(a);

      for (var c, d = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++) {
        if (c = a[j], "M" == c[0]) d = c[1], g = c[2], h.push(d), i.push(g);else {
          var l = F(d, g, c[1], c[2], c[3], c[4], c[5], c[6]);
          h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), d = c[5], g = c[6];
        }
      }

      var m = R.apply(0, h),
          n = R.apply(0, i),
          o = S.apply(0, h),
          p = S.apply(0, i),
          q = f(m, n, o - m, p - n);
      return b.bbox = L(q), q;
    }

    function y(a, b, c, d, e) {
      if (e) return [["M", +a + +e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]];
      var f = [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];
      return f.toString = g, f;
    }

    function z(a, b, c, d, e) {
      if (null == e && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != e) var f = Math.PI / 180,
          h = a + c * Math.cos(-d * f),
          i = a + c * Math.cos(-e * f),
          j = b + c * Math.sin(-d * f),
          k = b + c * Math.sin(-e * f),
          l = [["M", h, j], ["A", c, c, 0, +(e - d > 180), 0, i, k]];else l = [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];
      return l.toString = g, l;
    }

    function A(b) {
      var c = e(b),
          d = String.prototype.toLowerCase;
      if (c.rel) return h(c.rel);
      a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
      var f = [],
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;
      "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, f.push(["M", i, j]));

      for (var n = m, o = b.length; o > n; n++) {
        var p = f[n] = [],
            q = b[n];
        if (q[0] != d.call(q[0])) switch (p[0] = d.call(q[0]), p[0]) {
          case "a":
            p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
            break;

          case "v":
            p[1] = +(q[1] - j).toFixed(3);
            break;

          case "m":
            k = q[1], l = q[2];

          default:
            for (var r = 1, s = q.length; s > r; r++) {
              p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3);
            }

        } else {
          p = f[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);

          for (var t = 0, u = q.length; u > t; t++) {
            f[n][t] = q[t];
          }
        }
        var v = f[n].length;

        switch (f[n][0]) {
          case "z":
            i = k, j = l;
            break;

          case "h":
            i += +f[n][v - 1];
            break;

          case "v":
            j += +f[n][v - 1];
            break;

          default:
            i += +f[n][v - 2], j += +f[n][v - 1];
        }
      }

      return f.toString = g, c.rel = h(f), f;
    }

    function B(b) {
      var c = e(b);
      if (c.abs) return h(c.abs);
      if (K(b, "array") && K(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];
      var d,
          f = [],
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;
      "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, f[0] = ["M", i, j]);

      for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
        if (f.push(n = []), o = b[q], d = o[0], d != d.toUpperCase()) switch (n[0] = d.toUpperCase(), n[0]) {
          case "A":
            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
            break;

          case "V":
            n[1] = +o[1] + j;
            break;

          case "H":
            n[1] = +o[1] + i;
            break;

          case "R":
            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) {
              s[t] = +s[t] + i, s[++t] = +s[t] + j;
            }

            f.pop(), f = f.concat(I(s, p));
            break;

          case "O":
            f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
            break;

          case "U":
            f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
            break;

          case "M":
            k = +o[1] + i, l = +o[2] + j;

          default:
            for (t = 1, u = o.length; u > t; t++) {
              n[t] = +o[t] + (t % 2 ? i : j);
            }

        } else if ("R" == d) s = [i, j].concat(o.slice(1)), f.pop(), f = f.concat(I(s, p)), n = ["R"].concat(o.slice(-2));else if ("O" == d) f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);else if ("U" == d) f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));else for (var v = 0, w = o.length; w > v; v++) {
          n[v] = o[v];
        }
        if (d = d.toUpperCase(), "O" != d) switch (n[0]) {
          case "Z":
            i = +k, j = +l;
            break;

          case "H":
            i = n[1];
            break;

          case "V":
            j = n[1];
            break;

          case "M":
            k = n[n.length - 2], l = n[n.length - 1];

          default:
            i = n[n.length - 2], j = n[n.length - 1];
        }
      }

      return f.toString = g, c.abs = h(f), f;
    }

    function C(a, b, c, d) {
      return [a, b, c, d, c, d];
    }

    function D(a, b, c, d, e, f) {
      var g = 1 / 3,
          h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f];
    }

    function E(b, c, d, e, f, g, h, i, j, k) {
      var l,
          m = 120 * Q / 180,
          n = Q / 180 * (+f || 0),
          o = [],
          p = a._.cacher(function (a, b, c) {
        var d = a * P.cos(c) - b * P.sin(c),
            e = a * P.sin(c) + b * P.cos(c);
        return {
          x: d,
          y: e
        };
      });

      if (!d || !e) return [b, c, i, j, i, j];
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];else {
        l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (P.cos(Q / 180 * f), P.sin(Q / 180 * f), (b - i) / 2),
            r = (c - j) / 2,
            s = q * q / (d * d) + r * r / (e * e);
        s > 1 && (s = P.sqrt(s), d = s * d, e = s * e);
        var t = d * d,
            u = e * e,
            v = (g == h ? -1 : 1) * P.sqrt(U((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
            w = v * d * r / e + (b + i) / 2,
            x = v * -e * q / d + (c + j) / 2,
            y = P.asin(((c - x) / e).toFixed(9)),
            z = P.asin(((j - x) / e).toFixed(9));
        y = w > b ? Q - y : y, z = w > i ? Q - z : z, 0 > y && (y = 2 * Q + y), 0 > z && (z = 2 * Q + z), h && y > z && (y -= 2 * Q), !h && z > y && (z -= 2 * Q);
      }
      var A = z - y;

      if (U(A) > m) {
        var B = z,
            C = i,
            D = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + d * P.cos(z), j = x + e * P.sin(z), o = E(i, j, d, e, f, 0, h, C, D, [z, B, w, x]);
      }

      A = z - y;
      var F = P.cos(y),
          G = P.sin(y),
          H = P.cos(z),
          I = P.sin(z),
          J = P.tan(A / 4),
          K = 4 / 3 * d * J,
          L = 4 / 3 * e * J,
          M = [b, c],
          N = [b + K * G, c - L * F],
          O = [i + K * I, j - L * H],
          R = [i, j];
      if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, O, R].concat(o);
      o = [N, O, R].concat(o).join().split(",");

      for (var S = [], T = 0, V = o.length; V > T; T++) {
        S[T] = T % 2 ? p(o[T - 1], o[T], n).y : p(o[T], o[T + 1], n).x;
      }

      return S;
    }

    function F(a, b, c, d, e, f, g, h) {
      for (var i, j, k, l, m, n, o, p, q = [], r = [[], []], s = 0; 2 > s; ++s) {
        if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), U(i) < 1e-12) {
          if (U(j) < 1e-12) continue;
          l = -k / j, l > 0 && 1 > l && q.push(l);
        } else o = j * j - 4 * k * i, p = P.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
      }

      for (var t, u = q.length, v = u; u--;) {
        l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
      }

      return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
        min: {
          x: R.apply(0, r[0]),
          y: R.apply(0, r[1])
        },
        max: {
          x: S.apply(0, r[0]),
          y: S.apply(0, r[1])
        }
      };
    }

    function G(a, b) {
      var c = !b && e(a);
      if (!b && c.curve) return h(c.curve);

      for (var d = B(a), f = b && B(b), g = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null
      }, i = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null
      }, j = function j(a, b, c) {
        var d, e;
        if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];

        switch (!(a[0] in {
          T: 1,
          Q: 1
        }) && (b.qx = b.qy = null), a[0]) {
          case "M":
            b.X = a[1], b.Y = a[2];
            break;

          case "A":
            a = ["C"].concat(E.apply(0, [b.x, b.y].concat(a.slice(1))));
            break;

          case "S":
            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
            break;

          case "T":
            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(D(b.x, b.y, b.qx, b.qy, a[1], a[2]));
            break;

          case "Q":
            b.qx = a[1], b.qy = a[2], a = ["C"].concat(D(b.x, b.y, a[1], a[2], a[3], a[4]));
            break;

          case "L":
            a = ["C"].concat(C(b.x, b.y, a[1], a[2]));
            break;

          case "H":
            a = ["C"].concat(C(b.x, b.y, a[1], b.y));
            break;

          case "V":
            a = ["C"].concat(C(b.x, b.y, b.x, a[1]));
            break;

          case "Z":
            a = ["C"].concat(C(b.x, b.y, b.X, b.Y));
        }

        return a;
      }, k = function k(a, b) {
        if (a[b].length > 7) {
          a[b].shift();

          for (var c = a[b]; c.length;) {
            m[b] = "A", f && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
          }

          a.splice(b, 1), r = S(d.length, f && f.length || 0);
        }
      }, l = function l(a, b, c, e, g) {
        a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", e.x, e.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], r = S(d.length, f && f.length || 0));
      }, m = [], n = [], o = "", p = "", q = 0, r = S(d.length, f && f.length || 0); r > q; q++) {
        d[q] && (o = d[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), d[q] = j(d[q], g, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(d, q), f && (f[q] && (o = f[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), f[q] = j(f[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(f, q)), l(d, f, g, i, q), l(f, d, i, g, q);
        var s = d[q],
            t = f && f[q],
            u = s.length,
            v = f && t.length;
        g.x = s[u - 2], g.y = s[u - 1], g.bx = O(s[u - 4]) || g.x, g.by = O(s[u - 3]) || g.y, i.bx = f && (O(t[v - 4]) || i.x), i.by = f && (O(t[v - 3]) || i.y), i.x = f && t[v - 2], i.y = f && t[v - 1];
      }

      return f || (c.curve = h(d)), f ? [d, f] : d;
    }

    function H(a, b) {
      if (!b) return a;
      var c, d, e, f, g, h, i;

      for (a = G(a), e = 0, g = a.length; g > e; e++) {
        for (i = a[e], f = 1, h = i.length; h > f; f += 2) {
          c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
        }
      }

      return a;
    }

    function I(a, b) {
      for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
        var f = [{
          x: +a[d - 2],
          y: +a[d - 1]
        }, {
          x: +a[d],
          y: +a[d + 1]
        }, {
          x: +a[d + 2],
          y: +a[d + 3]
        }, {
          x: +a[d + 4],
          y: +a[d + 5]
        }];
        b ? d ? e - 4 == d ? f[3] = {
          x: +a[0],
          y: +a[1]
        } : e - 2 == d && (f[2] = {
          x: +a[0],
          y: +a[1]
        }, f[3] = {
          x: +a[2],
          y: +a[3]
        }) : f[0] = {
          x: +a[e - 2],
          y: +a[e - 1]
        } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
          x: +a[d],
          y: +a[d + 1]
        }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]);
      }

      return c;
    }

    var J = b.prototype,
        K = a.is,
        L = a._.clone,
        M = "hasOwnProperty",
        N = /,?([a-z]),?/gi,
        O = parseFloat,
        P = Math,
        Q = P.PI,
        R = P.min,
        S = P.max,
        T = P.pow,
        U = P.abs,
        V = j(1),
        W = j(),
        X = j(0, 1),
        Y = a._unit2px,
        Z = {
      path: function path(a) {
        return a.attr("path");
      },
      circle: function circle(a) {
        var b = Y(a);
        return z(b.cx, b.cy, b.r);
      },
      ellipse: function ellipse(a) {
        var b = Y(a);
        return z(b.cx || 0, b.cy || 0, b.rx, b.ry);
      },
      rect: function rect(a) {
        var b = Y(a);
        return y(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry);
      },
      image: function image(a) {
        var b = Y(a);
        return y(b.x || 0, b.y || 0, b.width, b.height);
      },
      line: function line(a) {
        return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")];
      },
      polyline: function polyline(a) {
        return "M" + a.attr("points");
      },
      polygon: function polygon(a) {
        return "M" + a.attr("points") + "z";
      },
      deflt: function deflt(a) {
        var b = a.node.getBBox();
        return y(b.x, b.y, b.width, b.height);
      }
    };
    a.path = e, a.path.getTotalLength = V, a.path.getPointAtLength = W, a.path.getSubpath = function (a, b, c) {
      if (this.getTotalLength(a) - c < 1e-6) return X(a, b).end;
      var d = X(a, c, 1);
      return b ? X(d, b).end : d;
    }, J.getTotalLength = function () {
      return this.node.getTotalLength ? this.node.getTotalLength() : void 0;
    }, J.getPointAtLength = function (a) {
      return W(this.attr("d"), a);
    }, J.getSubpath = function (b, c) {
      return a.path.getSubpath(this.attr("d"), b, c);
    }, a._.box = f, a.path.findDotsAtSegment = k, a.path.bezierBBox = l, a.path.isPointInsideBBox = m, a.closest = function (b, c, d, e) {
      for (var g = 100, h = f(b - g / 2, c - g / 2, g, g), i = [], j = d[0].hasOwnProperty("x") ? function (a) {
        return {
          x: d[a].x,
          y: d[a].y
        };
      } : function (a) {
        return {
          x: d[a],
          y: e[a]
        };
      }, k = 0; 1e6 >= g && !k;) {
        for (var l = 0, n = d.length; n > l; l++) {
          var o = j(l);

          if (m(h, o.x, o.y)) {
            k++, i.push(o);
            break;
          }
        }

        k || (g *= 2, h = f(b - g / 2, c - g / 2, g, g));
      }

      if (1e6 != g) {
        var p,
            q = 1 / 0;

        for (l = 0, n = i.length; n > l; l++) {
          var r = a.len(b, c, i[l].x, i[l].y);
          q > r && (q = r, i[l].len = r, p = i[l]);
        }

        return p;
      }
    }, a.path.isBBoxIntersect = n, a.path.intersection = t, a.path.intersectionNumber = u, a.path.isPointInside = w, a.path.getBBox = x, a.path.get = Z, a.path.toRelative = A, a.path.toAbsolute = B, a.path.toCubic = G, a.path.map = H, a.path.toString = g, a.path.clone = h;
  }), d.plugin(function (a, d, e, f) {
    var g = Math.max,
        h = Math.min,
        i = function i(a) {
      if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) {
        a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++);
      }
    },
        j = i.prototype;

    j.push = function () {
      for (var a, b, c = 0, d = arguments.length; d > c; c++) {
        a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
      }

      return this;
    }, j.pop = function () {
      return this.length && delete this[this.length--], this.items.pop();
    }, j.forEach = function (a, b) {
      for (var c = 0, d = this.items.length; d > c; c++) {
        if (a.call(b, this.items[c], c) === !1) return this;
      }

      return this;
    }, j.animate = function (d, e, f, g) {
      "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
      var h = arguments;
      if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;

      var j,
          k = function k() {
        j ? this.b = j : j = this.b;
      },
          l = 0,
          m = this,
          n = g && function () {
        ++l == m.length && g.call(this);
      };

      return this.forEach(function (a, c) {
        b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n);
      });
    }, j.remove = function () {
      for (; this.length;) {
        this.pop().remove();
      }

      return this;
    }, j.bind = function (a, b, c) {
      var d = {};
      if ("function" == typeof b) this.bindings[a] = b;else {
        var e = c || a;

        this.bindings[a] = function (a) {
          d[e] = a, b.attr(d);
        };
      }
      return this;
    }, j.attr = function (a) {
      var b = {};

      for (var c in a) {
        this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
      }

      for (var d = 0, e = this.items.length; e > d; d++) {
        this.items[d].attr(b);
      }

      return this;
    }, j.clear = function () {
      for (; this.length;) {
        this.pop();
      }
    }, j.splice = function (a, b, c) {
      a = 0 > a ? g(this.length + a, 0) : a, b = g(0, h(this.length - a, b));
      var d,
          e = [],
          f = [],
          j = [];

      for (d = 2; d < arguments.length; d++) {
        j.push(arguments[d]);
      }

      for (d = 0; b > d; d++) {
        f.push(this[a + d]);
      }

      for (; d < this.length - a; d++) {
        e.push(this[a + d]);
      }

      var k = j.length;

      for (d = 0; d < k + e.length; d++) {
        this.items[a + d] = this[a + d] = k > d ? j[d] : e[d - k];
      }

      for (d = this.items.length = this.length -= b - k; this[d];) {
        delete this[d++];
      }

      return new i(f);
    }, j.exclude = function (a) {
      for (var b = 0, c = this.length; c > b; b++) {
        if (this[b] == a) return this.splice(b, 1), !0;
      }

      return !1;
    }, j.insertAfter = function (a) {
      for (var b = this.items.length; b--;) {
        this.items[b].insertAfter(a);
      }

      return this;
    }, j.getBBox = function () {
      for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;) {
        if (!this.items[e].removed) {
          var f = this.items[e].getBBox();
          a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height);
        }
      }

      return a = h.apply(0, a), b = h.apply(0, b), c = g.apply(0, c), d = g.apply(0, d), {
        x: a,
        y: b,
        x2: c,
        y2: d,
        width: c - a,
        height: d - b,
        cx: a + (c - a) / 2,
        cy: b + (d - b) / 2
      };
    }, j.clone = function (a) {
      a = new i();

      for (var b = 0, c = this.items.length; c > b; b++) {
        a.push(this.items[b].clone());
      }

      return a;
    }, j.toString = function () {
      return "Snap‘s set";
    }, j.type = "set", a.Set = i, a.set = function () {
      var a = new i();
      return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a;
    };
  }), d.plugin(function (a, c, d, e) {
    function f(a) {
      var b = a[0];

      switch (b.toLowerCase()) {
        case "t":
          return [b, 0, 0];

        case "m":
          return [b, 1, 0, 0, 1, 0, 0];

        case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];

        case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1];
      }
    }

    function g(b, c, d) {
      b = b || new a.Matrix(), c = c || new a.Matrix(), b = a.parseTransformString(b.toTransformString()) || [], c = a.parseTransformString(c.toTransformString()) || [];

      for (var e, g, h, i, j = Math.max(b.length, c.length), k = [], n = [], o = 0; j > o; o++) {
        if (h = b[o] || f(c[o]), i = c[o] || f(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
          b = a._.transform2matrix(b, d()), c = a._.transform2matrix(c, d()), k = [["m", b.a, b.b, b.c, b.d, b.e, b.f]], n = [["m", c.a, c.b, c.c, c.d, c.e, c.f]];
          break;
        }

        for (k[o] = [], n[o] = [], e = 0, g = Math.max(h.length, i.length); g > e; e++) {
          e in h && (k[o][e] = h[e]), e in i && (n[o][e] = i[e]);
        }
      }

      return {
        from: m(k),
        to: m(n),
        f: l(k)
      };
    }

    function h(a) {
      return a;
    }

    function i(a) {
      return function (b) {
        return +b.toFixed(3) + a;
      };
    }

    function j(a) {
      return a.join(" ");
    }

    function k(b) {
      return a.rgb(b[0], b[1], b[2], b[3]);
    }

    function l(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = [];

      for (b = 0, c = a.length; c > b; b++) {
        for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) {
          g[d] = "val[" + h++ + "]";
        }

        f += g + "]", i[b] = f;
      }

      return Function("val", "return Snap.path.toString.call([" + i + "])");
    }

    function m(a) {
      for (var b = [], c = 0, d = a.length; d > c; c++) {
        for (var e = 1, f = a[c].length; f > e; e++) {
          b.push(a[c][e]);
        }
      }

      return b;
    }

    function n(a) {
      return isFinite(a);
    }

    function o(b, c) {
      return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1;
    }

    var p = {},
        q = /[%a-z]+$/i,
        r = String;
    p.stroke = p.fill = "colour", c.prototype.equal = function (a, c) {
      return b("snap.util.equal", this, a, c).firstDefined();
    }, b.on("snap.util.equal", function (b, c) {
      var d,
          e,
          f = r(this.attr(b) || ""),
          s = this;
      if ("colour" == p[b]) return d = a.color(f), e = a.color(c), {
        from: [d.r, d.g, d.b, d.opacity],
        to: [e.r, e.g, e.b, e.opacity],
        f: k
      };
      if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), e = c.split(" ").map(Number), {
        from: d,
        to: e,
        f: j
      };
      if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return "string" == typeof c && (c = r(c).replace(/\.{3}|\u2026/g, f)), f = this.matrix, c = a._.rgTransform.test(c) ? a._.transform2matrix(c, this.getBBox()) : a._.transform2matrix(a._.svgTransform2string(c), this.getBBox()), g(f, c, function () {
        return s.getBBox(1);
      });
      if ("d" == b || "path" == b) return d = a.path.toCubic(f, c), {
        from: m(d[0]),
        to: m(d[1]),
        f: l(d[0])
      };
      if ("points" == b) return d = r(f).split(a._.separator), e = r(c).split(a._.separator), {
        from: d,
        to: e,
        f: function f(a) {
          return a;
        }
      };
      if (n(f) && n(c)) return {
        from: parseFloat(f),
        to: parseFloat(c),
        f: h
      };
      var t = f.match(q),
          u = r(c).match(q);
      return t && o(t, u) ? {
        from: parseFloat(f),
        to: parseFloat(c),
        f: i(t)
      } : {
        from: this.asPX(b),
        to: this.asPX(b, c),
        f: h
      };
    });
  }), d.plugin(function (a, c, d, e) {
    for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend"
    }, k = function k(a, b) {
      var c = "y" == a ? "scrollTop" : "scrollLeft",
          d = b && b.node ? b.node.ownerDocument : e.doc;
      return d[(c in d.documentElement) ? "documentElement" : "body"][c];
    }, l = function l() {
      return this.originalEvent.preventDefault();
    }, m = function m() {
      return this.originalEvent.stopPropagation();
    }, n = function n(a, b, c, d) {
      var e = h && j[b] ? j[b] : b,
          f = function f(e) {
        var f = k("y", d),
            i = k("x", d);
        if (h && j[g](b)) for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++) {
          if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
            var p = e;
            e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
            break;
          }
        }
        var q = e.clientX + i,
            r = e.clientY + f;
        return c.call(d, e, q, r);
      };

      return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1), function () {
        return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0;
      };
    }, o = [], p = function p(a) {
      for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
        if (c = o[i], h) {
          for (var j, l = a.touches && a.touches.length; l--;) {
            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
              d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
              break;
            }
          }
        } else a.preventDefault();

        var m = c.el.node;
        m.nextSibling, m.parentNode, m.style.display;
        d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a);
      }
    }, q = function q(c) {
      a.unmousemove(p).unmouseup(q);

      for (var d, e = o.length; e--;) {
        d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
      }

      o = [];
    }, r = i.length; r--;) {
      !function (b) {
        a[b] = f[b] = function (c, d) {
          if (a.is(c, "function")) this.events = this.events || [], this.events.push({
            name: b,
            f: c,
            unbind: n(this.node || document, b, c, d || this)
          });else for (var e = 0, f = this.events.length; f > e; e++) {
            if (this.events[e].name == b) try {
              this.events[e].f.call(this);
            } catch (g) {}
          }
          return this;
        }, a["un" + b] = f["un" + b] = function (a) {
          for (var c = this.events || [], d = c.length; d--;) {
            if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
          }

          return this;
        };
      }(i[r]);
    }

    f.hover = function (a, b, c, d) {
      return this.mouseover(a, c).mouseout(b, d || c);
    }, f.unhover = function (a, b) {
      return this.unmouseover(a).unmouseout(b);
    };
    var s = [];
    f.drag = function (c, d, e, f, g, h) {
      function i(i, j, l) {
        (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
          el: k,
          move_scope: f,
          start_scope: g,
          end_scope: h
        }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i);
      }

      function j(a, c, d) {
        b("snap.draginit." + k.id, k, a, c, d);
      }

      var k = this;

      if (!arguments.length) {
        var l;
        return k.drag(function (a, b) {
          this.attr({
            transform: l + (l ? "T" : "t") + [a, b]
          });
        }, function () {
          l = this.transform().local;
        });
      }

      return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
        el: k,
        start: i,
        init: j
      }), k.mousedown(j), k;
    }, f.undrag = function () {
      for (var c = s.length; c--;) {
        s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
      }

      return !s.length && a.unmousemove(p).unmouseup(q), this;
    };
  }), d.plugin(function (a, c, d, e) {
    var f = (c.prototype, d.prototype),
        g = /^\s*url\((.+)\)/,
        h = String,
        i = a._.$;
    a.filter = {}, f.filter = function (b) {
      var d = this;
      "svg" != d.type && (d = d.paper);

      var e = a.parse(h(b)),
          f = a._.id(),
          g = (d.node.offsetWidth, d.node.offsetHeight, i("filter"));

      return i(g, {
        id: f,
        filterUnits: "userSpaceOnUse"
      }), g.appendChild(e.node), d.defs.appendChild(g), new c(g);
    }, b.on("snap.util.getattr.filter", function () {
      b.stop();
      var c = i(this.node, "filter");

      if (c) {
        var d = h(c).match(g);
        return d && a.select(d[1]);
      }
    }), b.on("snap.util.attr.filter", function (d) {
      if (d instanceof c && "filter" == d.type) {
        b.stop();
        var e = d.node.id;
        e || (i(d.node, {
          id: d.id
        }), e = d.id), i(this.node, {
          filter: a.url(e)
        });
      }

      d && "none" != d || (b.stop(), this.node.removeAttribute("filter"));
    }), a.filter.blur = function (b, c) {
      null == b && (b = 2);
      var d = null == c ? b : [b, c];
      return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
        def: d
      });
    }, a.filter.blur.toString = function () {
      return this();
    }, a.filter.shadow = function (b, c, d, e, f) {
      return null == f && (null == e ? (f = d, d = 4, e = "#000") : (f = e, e = d, d = 4)), null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
        color: e,
        dx: b,
        dy: c,
        blur: d,
        opacity: f
      });
    }, a.filter.shadow.toString = function () {
      return this();
    }, a.filter.grayscale = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
        a: .2126 + .7874 * (1 - b),
        b: .7152 - .7152 * (1 - b),
        c: .0722 - .0722 * (1 - b),
        d: .2126 - .2126 * (1 - b),
        e: .7152 + .2848 * (1 - b),
        f: .0722 - .0722 * (1 - b),
        g: .2126 - .2126 * (1 - b),
        h: .0722 + .9278 * (1 - b)
      });
    }, a.filter.grayscale.toString = function () {
      return this();
    }, a.filter.sepia = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
        a: .393 + .607 * (1 - b),
        b: .769 - .769 * (1 - b),
        c: .189 - .189 * (1 - b),
        d: .349 - .349 * (1 - b),
        e: .686 + .314 * (1 - b),
        f: .168 - .168 * (1 - b),
        g: .272 - .272 * (1 - b),
        h: .534 - .534 * (1 - b),
        i: .131 + .869 * (1 - b)
      });
    }, a.filter.sepia.toString = function () {
      return this();
    }, a.filter.saturate = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
        amount: 1 - b
      });
    }, a.filter.saturate.toString = function () {
      return this();
    }, a.filter.hueRotate = function (b) {
      return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
        angle: b
      });
    }, a.filter.hueRotate.toString = function () {
      return this();
    }, a.filter.invert = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: 1 - b
      });
    }, a.filter.invert.toString = function () {
      return this();
    }, a.filter.brightness = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
        amount: b
      });
    }, a.filter.brightness.toString = function () {
      return this();
    }, a.filter.contrast = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: .5 - b / 2
      });
    }, a.filter.contrast.toString = function () {
      return this();
    };
  }), d.plugin(function (a, b, c, d, e) {
    var f = a._.box,
        g = a.is,
        h = /^[^a-z]*([tbmlrc])/i,
        i = function i() {
      return "T" + this.dx + "," + this.dy;
    };

    b.prototype.getAlign = function (a, b) {
      null == b && g(a, "string") && (b = a, a = null), a = a || this.paper;
      var c = a.getBBox ? a.getBBox() : f(a),
          d = this.getBBox(),
          e = {};

      switch (b = b && b.match(h), b = b ? b[1].toLowerCase() : "c") {
        case "t":
          e.dx = 0, e.dy = c.y - d.y;
          break;

        case "b":
          e.dx = 0, e.dy = c.y2 - d.y2;
          break;

        case "m":
          e.dx = 0, e.dy = c.cy - d.cy;
          break;

        case "l":
          e.dx = c.x - d.x, e.dy = 0;
          break;

        case "r":
          e.dx = c.x2 - d.x2, e.dy = 0;
          break;

        default:
          e.dx = c.cx - d.cx, e.dy = 0;
      }

      return e.toString = i, e;
    }, b.prototype.align = function (a, b) {
      return this.transform("..." + this.getAlign(a, b));
    };
  }), d.plugin(function (b, c, d, e) {
    function f(a) {
      a = a.split(/(?=#)/);
      var b = new String(a[5]);
      return b[50] = a[0], b[100] = a[1], b[200] = a[2], b[300] = a[3], b[400] = a[4], b[500] = a[5], b[600] = a[6], b[700] = a[7], b[800] = a[8], b[900] = a[9], a[10] && (b.A100 = a[10], b.A200 = a[11], b.A400 = a[12], b.A700 = a[13]), b;
    }

    var g = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        h = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        i = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        j = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        k = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        l = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        m = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        n = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        o = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        p = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        q = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        r = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        s = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        t = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        u = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        v = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        w = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        x = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        y = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    b.mui = {}, b.flat = {}, b.mui.red = f(g), b.mui.pink = f(h), b.mui.purple = f(i), b.mui.deeppurple = f(j), b.mui.indigo = f(k), b.mui.blue = f(l), b.mui.lightblue = f(m), b.mui.cyan = f(n), b.mui.teal = f(o), b.mui.green = f(p), b.mui.lightgreen = f(q), b.mui.lime = f(r), b.mui.yellow = f(s), b.mui.amber = f(t), b.mui.orange = f(u), b.mui.deeporange = f(v), b.mui.brown = f(w), b.mui.grey = f(x), b.mui.bluegrey = f(y), b.flat.turquoise = "#1abc9c", b.flat.greensea = "#16a085", b.flat.sunflower = "#f1c40f", b.flat.orange = "#f39c12", b.flat.emerland = "#2ecc71", b.flat.nephritis = "#27ae60", b.flat.carrot = "#e67e22", b.flat.pumpkin = "#d35400", b.flat.peterriver = "#3498db", b.flat.belizehole = "#2980b9", b.flat.alizarin = "#e74c3c", b.flat.pomegranate = "#c0392b", b.flat.amethyst = "#9b59b6", b.flat.wisteria = "#8e44ad", b.flat.clouds = "#ecf0f1", b.flat.silver = "#bdc3c7", b.flat.wetasphalt = "#34495e", b.flat.midnightblue = "#2c3e50", b.flat.concrete = "#95a5a6", b.flat.asbestos = "#7f8c8d", b.importMUIColors = function () {
      for (var c in b.mui) {
        b.mui.hasOwnProperty(c) && (a[c] = b.mui[c]);
      }
    };
  }), d;
});
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        e = function e(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
      }

      delete a.cycle;
    },
        f = function f(a) {
      if ("function" == typeof a) return a;
      var b = "object" == _typeof(a) ? a : {
        each: a
      },
          c = b.ease,
          d = b.from || 0,
          e = b.base || 0,
          f = {},
          g = isNaN(d),
          h = b.axis,
          i = {
        center: .5,
        end: 1
      }[d] || 0;
      return function (a, j, k) {
        var l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = (k || b).length,
            v = f[u];

        if (!v) {
          if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
            for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;) {
              ;
            }

            t--;
          }

          for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) {
            n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
          }

          v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
        }

        return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
      };
    },
        g = function g(a, b, d) {
      c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = g.prototype.render;
    },
        h = 1e-8,
        i = c._internals,
        j = i.isSelector,
        k = i.isArray,
        l = g.prototype = c.to({}, .1, {}),
        m = [];

    g.version = "2.1.2", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, g.render = c.render, g.distribute = f, l.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this);
    }, l.updateTo = function (a, b) {
      var d,
          e = this,
          f = e.ratio,
          g = e.vars.immediateRender || a.immediateRender;
      b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));

      for (d in a) {
        e.vars[d] = a[d];
      }

      if (e._initted || g) if (b) e._initted = !1, g && e.render(0, !0, !0);else if (e._gc && e._enabled(!0, !1), e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), e._time / e._duration > .998) {
        var h = e._totalTime;
        e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1);
      } else if (e._initted = !1, e._init(), e._time > 0 || g) for (var i, j = 1 / (1 - f), k = e._firstPT; k;) {
        i = k.s + k.c, k.c *= j, k.s = i - k.c, k = k._next;
      }
      return e;
    }, l.render = function (a, b, d) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var e,
          f,
          g,
          j,
          k,
          l,
          m,
          n,
          o,
          p = this,
          q = p._dirty ? p.totalDuration() : p._totalDuration,
          r = p._time,
          s = p._totalTime,
          t = p._cycle,
          u = p._duration,
          v = p._rawPrevTime;
      if (a >= q - h && a >= 0 ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0), (0 > v || 0 >= a && a >= -h || v === h && "isPause" !== p.data) && v !== a && (d = !0, v > h && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : h > a ? (p._totalTime = p._time = p._cycle = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete", e = p._reversed), a > -h ? a = 0 : 0 > a && (p._active = !1, 0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0), p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--, p._time = p._totalTime - p._cycle * j, p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time, o = p._yoyoEase || p.vars.yoyoEase, o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), p._easeType && !o ? (k = p._time / u, l = p._easeType, m = p._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), r === p._time && !d && t === p._cycle) return void (s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));

      if (!p._initted) {
        if (p._init(), !p._initted || p._gc) return;
        if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration)) return p._time = r, p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void (p._lazy = [a, b]);
        !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u);
      }

      for (p._lazy !== !1 && (p._lazy = !1), p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0), 0 === s && (2 === p._initted && a > 0 && p._init(), p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")), p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))), g = p._firstPT; g;) {
        g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, g = g._next;
      }

      p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d), b || (p._totalTime !== s || f) && p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0));
    }, g.to = function (a, b, c) {
      return new g(a, b, c);
    }, g.from = function (a, b, c) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c);
    }, g.fromTo = function (a, b, c, d) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new g(a, b, d);
    }, g.staggerTo = g.allTo = function (a, b, h, i, l, n, o) {
      var p,
          q,
          r,
          s,
          t = [],
          u = f(h.stagger || i),
          v = h.cycle,
          w = (h.startAt || m).cycle;

      for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), a = a || [], p = a.length - 1, r = 0; p >= r; r++) {
        q = {};

        for (s in h) {
          q[s] = h[s];
        }

        if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), w) {
          w = q.startAt = {};

          for (s in h.startAt) {
            w[s] = h.startAt[s];
          }

          e(q.startAt, a, r);
        }

        q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function () {
          h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m);
        }), t[r] = new g(a[r], b, q);
      }

      return t;
    }, g.staggerFrom = g.allFrom = function (a, b, c, d, e, f, h) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h);
    }, g.staggerFromTo = g.allFromTo = function (a, b, c, d, e, f, h, i) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, g.staggerTo(a, b, d, e, f, h, i);
    }, g.delayedCall = function (a, b, c, d, e) {
      return new g(b, 0, {
        delay: a,
        onComplete: b,
        onCompleteParams: c,
        callbackScope: d,
        onReverseComplete: b,
        onReverseCompleteParams: c,
        immediateRender: !1,
        useFrames: e,
        overwrite: 0
      });
    }, g.set = function (a, b) {
      return new g(a, 0, b);
    }, g.isTweening = function (a) {
      return c.getTweensOf(a, !0).length > 0;
    };

    var n = function n(a, b) {
      for (var d = [], e = 0, f = a._first; f;) {
        f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(n(f, b)), e = d.length), f = f._next;
      }

      return d;
    },
        o = g.getAllTweens = function (b) {
      return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
    };

    g.killAll = function (a, c, d, e) {
      null == c && (c = !0), null == d && (d = !0);
      var f,
          g,
          h,
          i = o(0 != e),
          j = i.length,
          k = c && d && e;

      for (h = 0; j > h; h++) {
        g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
      }
    }, g.killChildTweensOf = function (a, b) {
      if (null != a) {
        var e,
            f,
            h,
            l,
            m,
            n = i.tweenLookup;
        if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a)) for (l = a.length; --l > -1;) {
          g.killChildTweensOf(a[l], b);
        } else {
          e = [];

          for (h in n) {
            for (f = n[h].target.parentNode; f;) {
              f === a && (e = e.concat(n[h].tweens)), f = f.parentNode;
            }
          }

          for (m = e.length, l = 0; m > l; l++) {
            b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
          }
        }
      }
    };

    var p = function p(a, c, d, e) {
      c = c !== !1, d = d !== !1, e = e !== !1;

      for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1;) {
        g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
      }
    };

    return g.pauseAll = function (a, b, c) {
      p(!0, a, b, c);
    }, g.resumeAll = function (a, b, c) {
      p(!1, a, b, c);
    }, g.globalTimeScale = function (b) {
      var d = a._rootTimeline,
          e = c.ticker.time;
      return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
    }, l.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
    }, l.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
    }, l.time = function (a, b) {
      if (!arguments.length) return this._time;
      this._dirty && this.totalDuration();
      var c = this._duration,
          d = this._cycle,
          e = d * (c + this._repeatDelay);
      return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
    }, l.duration = function (b) {
      return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
    }, l.totalDuration = function (a) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, l.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, l.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, l.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, g;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      b.call(this, a);
      var c,
          d,
          e = this,
          f = e.vars;
      e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, e._sortChildren = !0, e._onUpdate = f.onUpdate;

      for (d in f) {
        c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
      }

      i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
    },
        e = 1e-8,
        f = c._internals,
        g = d._internals = {},
        h = f.isSelector,
        i = f.isArray,
        j = f.lazyTweens,
        k = f.lazyRender,
        l = _gsScope._gsDefine.globals,
        m = function m(a) {
      var b,
          c = {};

      for (b in a) {
        c[b] = a[b];
      }

      return c;
    },
        n = function n(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
      }

      delete a.cycle;
    },
        o = g.pauseCallback = function () {},
        p = function p(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        q = function q(a, b, c, d) {
      var e = "immediateRender";
      return e in b || (b[e] = !(c && c[e] === !1 || d)), b;
    },
        r = function r(a) {
      if ("function" == typeof a) return a;
      var b = "object" == _typeof(a) ? a : {
        each: a
      },
          c = b.ease,
          d = b.from || 0,
          e = b.base || 0,
          f = {},
          g = isNaN(d),
          h = b.axis,
          i = {
        center: .5,
        end: 1
      }[d] || 0;
      return function (a, j, k) {
        var l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = (k || b).length,
            v = f[u];

        if (!v) {
          if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
            for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;) {
              ;
            }

            t--;
          }

          for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) {
            n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
          }

          v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e;
        }

        return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v;
      };
    },
        s = d.prototype = new b();

    return d.version = "2.1.2", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, s.to = function (a, b, d, e) {
      var f = d.repeat && l.TweenMax || c;
      return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
    }, s.from = function (a, b, d, e) {
      return this.add((d.repeat && l.TweenMax || c).from(a, b, q(this, d)), e);
    }, s.fromTo = function (a, b, d, e, f) {
      var g = e.repeat && l.TweenMax || c;
      return e = q(this, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
    }, s.staggerTo = function (a, b, e, f, g, i, j, k) {
      var l,
          o,
          q = new d({
        onComplete: i,
        onCompleteParams: j,
        callbackScope: k,
        smoothChildTiming: this.smoothChildTiming
      }),
          s = r(e.stagger || f),
          t = e.startAt,
          u = e.cycle;

      for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), o = 0; o < a.length; o++) {
        l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
      }

      return this.add(q, g);
    }, s.staggerFrom = function (a, b, c, d, e, f, g, h) {
      return c.runBackwards = !0, this.staggerTo(a, b, q(this, c), d, e, f, g, h);
    }, s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
      return d.startAt = c, this.staggerTo(a, b, q(this, d, c), e, f, g, h, i);
    }, s.call = function (a, b, d, e) {
      return this.add(c.delayedCall(0, a, b, d), e);
    }, s.set = function (a, b, d) {
      return this.add(new c(a, 0, q(this, b, null, !0)), d);
    }, d.exportRoot = function (a, b) {
      a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
      var e,
          f,
          g,
          h,
          i = new d(a),
          j = i._timeline;

      for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) {
        h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
      }

      return j.add(i, 0), e && i.totalDuration(), i;
    }, s.add = function (e, f, g, h) {
      var j,
          k,
          l,
          m,
          n,
          o,
          p = this;

      if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
        if (e instanceof Array || e && e.push && i(e)) {
          for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) {
            i(m = e[l]) && (m = new d({
              tweens: m
            })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
          }

          return p._uncache(!0);
        }

        if ("string" == typeof e) return p.addLabel(e, f);
        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
        e = c.delayedCall(0, e);
      }

      if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration()) for (n = p, o = n.rawTime() > e._startTime; n._timeline;) {
        o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
      }
      return p;
    }, s.remove = function (b) {
      if (b instanceof a) {
        this._remove(b, !1);

        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
      }

      if (b instanceof Array || b && b.push && i(b)) {
        for (var d = b.length; --d > -1;) {
          this.remove(b[d]);
        }

        return this;
      }

      return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
    }, s._remove = function (a, c) {
      b.prototype._remove.call(this, a, c);

      var d = this._last;
      return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, s.append = function (a, b) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
    }, s.insert = s.insertMultiple = function (a, b, c, d) {
      return this.add(a, b || 0, c, d);
    }, s.appendMultiple = function (a, b, c, d) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
    }, s.addLabel = function (a, b) {
      return this._labels[a] = this._parseTimeOrLabel(b), this;
    }, s.addPause = function (a, b, d, e) {
      var f = c.delayedCall(0, o, d, e || this);
      return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
    }, s.removeLabel = function (a) {
      return delete this._labels[a], this;
    }, s.getLabelTime = function (a) {
      return null != this._labels[a] ? this._labels[a] : -1;
    }, s._parseTimeOrLabel = function (b, c, d, e) {
      var f, g;
      if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;) {
        e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
      }
      if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
      if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);else {
        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
      }
      return Number(b) + c;
    }, s.seek = function (a, b) {
      return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
    }, s.stop = function () {
      return this.paused(!0);
    }, s.gotoAndPlay = function (a, b) {
      return this.play(a, b);
    }, s.gotoAndStop = function (a, b) {
      return this.pause(a, b);
    }, s.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          g,
          h,
          i,
          l,
          m,
          n,
          o = this,
          p = o._time,
          q = o._dirty ? o.totalDuration() : o._totalDuration,
          r = o._startTime,
          s = o._timeScale,
          t = o._paused;
      if (p !== o._time && (a += o._time - p), a >= q - e && a >= 0) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (0 >= a && a >= -e || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, a = q + 1e-4;else if (e > a) {
        if (o._totalTime = o._time = 0, a > -e && (a = 0), (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete", f = o._reversed), 0 > a) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0), o._rawPrevTime = a;else {
          if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f) for (d = o._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, o._initted || (i = !0);
        }
      } else {
        if (o._hasPause && !o._forcingPlayhead && !b) {
          if (a >= p) for (d = o._first; d && d._startTime <= a && !l;) {
            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), d = d._next;
          } else for (d = o._last; d && d._startTime >= a && !l;) {
            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
          }
          l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + a / o._timeScale);
        }

        o._totalTime = o._time = o._rawPrevTime = a;
      }

      if (o._time !== p && o._first || c || i || l) {
        if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0), 0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), m = o._time, m >= p) for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t));) {
          (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
        } else for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t));) {
          if (d._active || d._startTime <= p && !d._paused && !d._gc) {
            if (l === d) {
              for (l = d._prev; l && l.endTime() > o._time;) {
                l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
              }

              l = null, o.pause(), o._pauseTime = n;
            }

            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
          }

          d = g;
        }
        o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)));
      }
    }, s._hasPausedChild = function () {
      for (var a = this._first; a;) {
        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
        a = a._next;
      }

      return !1;
    }, s.getChildren = function (a, b, d, e) {
      e = e || -9999999999;

      for (var f = [], g = this._first, h = 0; g;) {
        g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
      }

      return f;
    }, s.getTweensOf = function (a, b) {
      var d,
          e,
          f = this._gc,
          g = [],
          h = 0;

      for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) {
        (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
      }

      return f && this._enabled(!1, !0), g;
    }, s.recent = function () {
      return this._recent;
    }, s._contains = function (a) {
      for (var b = a.timeline; b;) {
        if (b === this) return !0;
        b = b.timeline;
      }

      return !1;
    }, s.shiftChildren = function (a, b, c) {
      c = c || 0;

      for (var d, e = this._first, f = this._labels; e;) {
        e._startTime >= c && (e._startTime += a), e = e._next;
      }

      if (b) for (d in f) {
        f[d] >= c && (f[d] += a);
      }
      return this._uncache(!0);
    }, s._kill = function (a, b) {
      if (!a && !b) return this._enabled(!1, !1);

      for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) {
        c[d]._kill(a, b) && (e = !0);
      }

      return e;
    }, s.clear = function (a) {
      var b = this.getChildren(!1, !0, !0),
          c = b.length;

      for (this._time = this._totalTime = 0; --c > -1;) {
        b[c]._enabled(!1, !1);
      }

      return a !== !1 && (this._labels = {}), this._uncache(!0);
    }, s.invalidate = function () {
      for (var b = this._first; b;) {
        b.invalidate(), b = b._next;
      }

      return a.prototype.invalidate.call(this);
    }, s._enabled = function (a, c) {
      if (a === this._gc) for (var d = this._first; d;) {
        d._enabled(a, !0), d = d._next;
      }
      return b.prototype._enabled.call(this, a, c);
    }, s.totalTime = function (b, c, d) {
      this._forcingPlayhead = !0;
      var e = a.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, s.duration = function (a) {
      return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
    }, s.totalDuration = function (a) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;) {
            b = f._prev, f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), c = f._startTime + f._totalDuration / f._timeScale, c > d && (d = c), f = b;
          }

          e._duration = e._totalDuration = d, e._dirty = !1;
        }

        return this._totalDuration;
      }

      return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
    }, s.paused = function (b) {
      if (b === !1 && this._paused) for (var c = this._first; c;) {
        c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
      }
      return a.prototype.paused.apply(this, arguments);
    }, s.usesFrames = function () {
      for (var b = this._timeline; b._timeline;) {
        b = b._timeline;
      }

      return b === a._rootFramesTimeline;
    }, s.rawTime = function (a) {
      return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
    }, d;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
    var d = function d(b) {
      a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0;
    },
        e = 1e-8,
        f = b._internals,
        g = f.lazyTweens,
        h = f.lazyRender,
        i = _gsScope._gsDefine.globals,
        j = new c(null, null, 1, 0),
        k = d.prototype = new a();

    return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.2", k.invalidate = function () {
      return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
    }, k.addCallback = function (a, c, d, e) {
      return this.add(b.delayedCall(0, a, d, e), c);
    }, k.removeCallback = function (a, b) {
      if (a) if (null == b) this._kill(null, a);else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) {
        c[d]._startTime === e && c[d]._enabled(!1, !1);
      }
      return this;
    }, k.removePause = function (b) {
      return this.removeCallback(a._internals.pauseCallback, b);
    }, k.tweenTo = function (a, c) {
      c = c || {};
      var d,
          e,
          f,
          g = {
        ease: j,
        useFrames: this.usesFrames(),
        immediateRender: !1,
        lazy: !1
      },
          h = c.repeat && i.TweenMax || b;

      for (e in c) {
        g[e] = c[e];
      }

      return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
      }, f;
    }, k.tweenFromTo = function (a, b, c) {
      c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
        onComplete: this.seek,
        onCompleteParams: [a],
        callbackScope: this
      }, c.immediateRender = c.immediateRender !== !1;
      var d = this.tweenTo(b, c);
      return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
    }, k.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = this,
          q = p._time,
          r = p._dirty ? p.totalDuration() : p._totalDuration,
          s = p._duration,
          t = p._totalTime,
          u = p._startTime,
          v = p._timeScale,
          w = p._rawPrevTime,
          x = p._paused,
          y = p._cycle;
      if (q !== p._time && (a += p._time - q), a >= r - e && a >= 0) p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a && a >= -e || 0 > w || w === e) && w !== a && p._first && (k = !0, w > e && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s, a = s + 1e-4);else if (e > a) {
        if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a > -e && (a = 0), (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete", f = p._reversed), 0 > a) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, j = "onReverseComplete") : w >= 0 && p._first && (k = !0), p._rawPrevTime = a;else {
          if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f) for (d = p._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, p._initted || (k = !0);
        }
      } else if (0 === s && 0 > w && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time)), p._hasPause && !p._forcingPlayhead && !b) {
        if (a = p._time, a >= q || p._repeat && y !== p._cycle) for (d = p._first; d && d._startTime <= a && !m;) {
          d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), d = d._next;
        } else for (d = p._last; d && d._startTime >= a && !m;) {
          d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
        }
        m && (o = p._startTime + m._startTime / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)));
      }

      if (p._cycle !== y && !p._locked) {
        var z = p._yoyo && 0 !== (1 & y),
            A = z === (p._yoyo && 0 !== (1 & p._cycle)),
            B = p._totalTime,
            C = p._cycle,
            D = p._rawPrevTime,
            E = p._time;
        if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, p._callback("onRepeat")), q !== p._time) return;
        if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), p._locked = !1, p._paused && !x) return;
        p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
      }

      if (!(p._time !== q && p._first || c || k || m)) return void (t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
      if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), n = p._time, n >= q) for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x));) {
        (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
      } else for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x));) {
        if (d._active || d._startTime <= q && !d._paused && !d._gc) {
          if (m === d) {
            for (m = d._prev; m && m.endTime() > p._time;) {
              m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
            }

            m = null, p.pause(), p._pauseTime = o;
          }

          d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
        }

        d = i;
      }
      p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g.length && h(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)));
    }, k.getActive = function (a, b, c) {
      var d,
          e,
          f = [],
          g = this.getChildren(a || null == a, b || null == a, !!c),
          h = 0,
          i = g.length;

      for (d = 0; i > d; d++) {
        e = g[d], e.isActive() && (f[h++] = e);
      }

      return f;
    }, k.getLabelAfter = function (a) {
      a || 0 !== a && (a = this._time);
      var b,
          c = this.getLabelsArray(),
          d = c.length;

      for (b = 0; d > b; b++) {
        if (c[b].time > a) return c[b].name;
      }

      return null;
    }, k.getLabelBefore = function (a) {
      null == a && (a = this._time);

      for (var b = this.getLabelsArray(), c = b.length; --c > -1;) {
        if (b[c].time < a) return b[c].name;
      }

      return null;
    }, k.getLabelsArray = function () {
      var a,
          b = [],
          c = 0;

      for (a in this._labels) {
        b[c++] = {
          time: this._labels[a],
          name: a
        };
      }

      return b.sort(function (a, b) {
        return a.time - b.time;
      }), b;
    }, k.invalidate = function () {
      return this._locked = !1, a.prototype.invalidate.call(this);
    }, k.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
    }, k.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
    }, k.totalDuration = function (b) {
      return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, k.time = function (a, b) {
      if (!arguments.length) return this._time;
      this._dirty && this.totalDuration();
      var c = this._duration,
          d = this._cycle,
          e = d * (c + this._repeatDelay);
      return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b);
    }, k.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, k.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, k.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, k.currentLabel = function (a) {
      return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e);
    }, d;
  }, !0), function () {
    var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function g(a, b, c, d) {
      c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
    },
        h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function i(a, b, c, d) {
      var e = {
        a: a
      },
          f = {},
          g = {},
          h = {
        c: d
      },
          i = (a + b) / 2,
          j = (b + c) / 2,
          k = (c + d) / 2,
          l = (i + j) / 2,
          m = (j + k) / 2,
          n = (m - l) / 8;
      return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h];
    },
        j = function j(a, e, f, g, h) {
      var j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w = a.length - 1,
          x = 0,
          y = a[0].a;

      for (j = 0; w > j; j++) {
        n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
      }

      n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    },
        k = function k(a, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n = [];
      if (f) for (a = [f].concat(a), i = a.length; --i > -1;) {
        "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
      }
      if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;

      for (i = 0; h > i; i++) {
        j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
      }

      return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
    },
        l = function l(a, f, g, i, _l, m) {
      var n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = {},
          w = [],
          x = m || a[0];
      _l = "string" == typeof _l ? "," + _l + "," : h, null == f && (f = 1);

      for (o in a[0]) {
        w.push(o);
      }

      if (a.length > 1) {
        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;) {
          if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
            t = !1;
            break;
          }
        }

        t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
      }

      for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) {
        o = w[n], e[o] = -1 !== _l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
      }

      for (n = b.length; --n > -1;) {
        b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
      }

      if (!i) {
        for (n = w.length; --n > -1;) {
          if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) {
            r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
          }
        }

        for (n = d.length; --n > -1;) {
          d[n] = Math.sqrt(d[n]);
        }
      }

      for (n = w.length, q = g ? 4 : 1; --n > -1;) {
        o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
      }

      return v;
    },
        m = function m(a, b, c) {
      b = b || "soft";
      var d,
          e,
          f,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = {},
          q = "cubic" === b ? 3 : 2,
          r = "soft" === b,
          s = [];
      if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";

      for (m in a[0]) {
        s.push(m);
      }

      for (j = s.length; --j > -1;) {
        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) {
          d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
        }

        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) {
          d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
        }

        i.length = n;
      }

      return p;
    },
        n = function n(a, b, c) {
      for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;) {
        for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) {
          j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
        }
      }
    },
        o = function o(a, b) {
      b = b >> 0 || 6;
      var c,
          d,
          e,
          f,
          g = [],
          h = [],
          i = 0,
          j = 0,
          k = b - 1,
          l = [],
          m = [];

      for (c in a) {
        n(a[c], g, b);
      }

      for (e = g.length, d = 0; e > d; d++) {
        i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
      }

      return {
        length: j,
        lengths: h,
        segments: l
      };
    },
        p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function init(a, b, c) {
        this._target = a, b instanceof Array && (b = {
          values: b
        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
        var d,
            e,
            f,
            g,
            h,
            i = b.values || [],
            j = {},
            k = i[0],
            n = b.autoRotate || c.vars.orientToBezier;
        this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;

        for (d in k) {
          this._props.push(d);
        }

        for (f = this._props.length; --f > -1;) {
          d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
        }

        if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
          var p = o(this._beziers, this._timeRes);
          this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
          for (g = 0; 3 > g; g++) {
            d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
          }

          d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d);
        }
        return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = this._segCount,
            n = this._func,
            o = this._target,
            p = b !== this._startRatio;

        if (this._timeRes) {
          if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
            for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;) {
              ;
            }

            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
          } else if (b < this._l1 && e > 0) {
            for (; e > 0 && (this._l1 = k[--e]) >= b;) {
              ;
            }

            0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
          }

          if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;) {
              ;
            }

            this._s1 = l[e - 1], this._si = e;
          } else if (b < this._s1 && e > 0) {
            for (; e > 0 && (this._s1 = l[--e]) >= b;) {
              ;
            }

            0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
          }

          h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;

        for (d = 1 - h, e = this._props.length; --e > -1;) {
          f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
        }

        if (this._autoRotate) {
          var q,
              r,
              s,
              t,
              u,
              v,
              w,
              x = this._autoRotate;

          for (e = x.length; --e > -1;) {
            f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i);
          }
        }
      }
    }),
        q = p.prototype;

    p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
      return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }, p._cssRegister = function () {
      var a = f.CSSPlugin;

      if (a) {
        var b = a._internals,
            c = b._parseToProxy,
            d = b._setPluginRatio,
            e = b.CSSPropTween;

        b._registerComplexSpecialProp("bezier", {
          parser: function parser(a, b, f, g, h, i) {
            b instanceof Array && (b = {
              values: b
            }), i = new p();
            var j,
                k,
                l,
                m = b.values,
                n = m.length - 1,
                o = [],
                q = {};
            if (0 > n) return h;

            for (j = 0; n >= j; j++) {
              l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
            }

            for (k in b) {
              q[k] = b[k];
            }

            return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
          }
        });
      }
    }, q._mod = function (a) {
      for (var b, c = this._overwriteProps, d = c.length; --d > -1;) {
        b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b);
      }
    }, q._kill = function (a) {
      var b,
          c,
          d = this._props;

      for (b in this._beziers) {
        if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) {
          d[c] === b && d.splice(c, 1);
        }
      }

      if (d = this._autoRotate) for (c = d.length; --c > -1;) {
        a[d[c][2]] && d.splice(c, 1);
      }
      return this._super._kill.call(this, a);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
    var c,
        d,
        e,
        f,
        g = function g() {
      a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
    },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = g.prototype = new a("css");

    j.constructor = g, g.version = "2.1.0", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
      top: j,
      right: j,
      bottom: j,
      left: j,
      width: j,
      height: j,
      fontSize: j,
      padding: j,
      margin: j,
      perspective: j,
      lineHeight: ""
    };

    var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        w = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        y = /opacity:([^;]*)/i,
        z = /alpha\(opacity *=.+?\)/i,
        A = /^(rgb|hsl)/,
        B = /([A-Z])/g,
        C = /-([a-z])/gi,
        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function E(a, b) {
      return b.toUpperCase();
    },
        F = /(?:Left|Right|Width)/i,
        G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        I = /,(?=[^\)]*(?:\(|$))/gi,
        J = /[\s,\(]/i,
        K = Math.PI / 180,
        L = 180 / Math.PI,
        M = {},
        N = {
      style: {}
    },
        O = _gsScope.document || {
      createElement: function createElement() {
        return N;
      }
    },
        P = function P(a, b) {
      return b && O.createElementNS ? O.createElementNS(b, a) : O.createElement(a);
    },
        Q = P("div"),
        R = P("img"),
        S = g._internals = {
      _specialProps: i
    },
        T = (_gsScope.navigator || {}).userAgent || "",
        U = function () {
      var a = T.indexOf("Android"),
          b = P("a");
      return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
    }(),
        V = function V(a) {
      return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        W = function W(a) {
      _gsScope.console && console.log(a);
    },
        X = "",
        Y = "",
        Z = function Z(a, b) {
      b = b || Q;
      var c,
          d,
          e = b.style;
      if (void 0 !== e[a]) return a;

      for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) {
        ;
      }

      return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null;
    },
        $ = "undefined" != typeof window ? window : O.defaultView || {
      getComputedStyle: function getComputedStyle() {}
    },
        _ = function _(a) {
      return $.getComputedStyle(a);
    },
        aa = g.getStyle = function (a, b, c, d, e) {
      var f;
      return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || _(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a);
    },
        ba = S.convertToPixels = function (a, c, d, e, f) {
      if ("px" === e || !e && "lineHeight" !== c) return d;
      if ("auto" === e || !d) return 0;
      var h,
          i,
          j,
          k = F.test(c),
          l = a,
          m = Q.style,
          n = 0 > d,
          o = 1 === d;
      if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
        if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);else {
          if (m.cssText = "border:0 solid red;position:" + aa(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;else {
            if (l = a.parentNode || O.body, -1 !== aa(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
            m[k ? "width" : "height"] = d + e;
          }
          l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = ba(a, c, d, e, !0));
        }
      } else i = _(a).lineHeight, a.style.lineHeight = d, h = parseFloat(_(a).lineHeight), a.style.lineHeight = i;
      return o && (h /= 100), n ? -h : h;
    },
        ca = S.calculateOffset = function (a, b, c) {
      if ("absolute" !== aa(a, "position", c)) return 0;
      var d = "left" === b ? "Left" : "Top",
          e = aa(a, "margin" + d, c);
      return a["offset" + d] - (ba(a, b, parseFloat(e), e.replace(w, "")) || 0);
    },
        da = function da(a, b) {
      var c,
          d,
          e,
          f = {};
      if (b = b || _(a, null)) {
        if (c = b.length) for (; --c > -1;) {
          e = b[c], (-1 === e.indexOf("-transform") || Ea === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
        } else for (c in b) {
          (-1 === c.indexOf("Transform") || Da === c) && (f[c] = b[c]);
        }
      } else if (b = a.currentStyle || a.style) for (c in b) {
        "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
      }
      return U || (f.opacity = V(a)), d = Sa(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ga && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
    },
        ea = function ea(a, b, c, d, e) {
      var f,
          g,
          h,
          i = {},
          j = a.style;

      for (g in c) {
        "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ca(a, g), void 0 !== j[g] && (h = new ta(j, g, j[g], h)));
      }

      if (d) for (g in d) {
        "className" !== g && (i[g] = d[g]);
      }
      return {
        difs: i,
        firstMPT: h
      };
    },
        fa = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        ga = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ha = function ha(a, b, c) {
      if ("svg" === (a.nodeName + "").toLowerCase()) return (c || _(a))[b] || 0;
      if (a.getCTM && Pa(a)) return a.getBBox()[b] || 0;
      var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
          e = fa[b],
          f = e.length;

      for (c = c || _(a, null); --f > -1;) {
        d -= parseFloat(aa(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(aa(a, "border" + e[f] + "Width", c, !0)) || 0;
      }

      return d;
    },
        ia = function ia(a, b) {
      if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
      (null == a || "" === a) && (a = "0 0");
      var c,
          d = a.split(" "),
          e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
          f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];

      if (d.length > 3 && !b) {
        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) {
          a.push(ia(d[c]));
        }

        return a.join(",");
      }

      return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a;
    },
        ja = function ja(a, b) {
      return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
    },
        ka = function ka(a, b) {
      "function" == typeof a && (a = a(r, q));
      var c = "string" == typeof a && "=" === a.charAt(1);
      return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
    },
        la = function la(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = 1e-6;
      return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
    },
        ma = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        na = function na(a, b, c) {
      return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
    },
        oa = g.parseColor = function (a, b) {
      var c, d, e, f, g, h, i, j, k, l, m;
      if (a) {
        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];else {
          if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ma[a]) c = ma[a];else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];else if ("hsl" === a.substr(0, 3)) {
            if (c = m = a.match(s), b) {
              if (-1 !== a.indexOf("=")) return a.match(t);
            } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = na(g + 1 / 3, d, e), c[1] = na(g, d, e), c[2] = na(g - 1 / 3, d, e);
          } else c = a.match(s) || ma.transparent;
          c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
        }
      } else c = ma.black;
      return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
    },
        pa = function pa(a, b) {
      var c,
          d,
          e,
          f = a.match(qa) || [],
          g = 0,
          h = "";
      if (!f.length) return a;

      for (c = 0; c < f.length; c++) {
        d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = oa(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
      }

      return h + a.substr(g);
    },
        qa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (j in ma) {
      qa += "|" + j + "\\b";
    }

    qa = new RegExp(qa + ")", "gi"), g.colorStringFilter = function (a) {
      var b,
          c = a[0] + " " + a[1];
      qa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = pa(a[0], b), a[1] = pa(a[1], b)), qa.lastIndex = 0;
    }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);

    var ra = function ra(a, b, c, d) {
      if (null == a) return function (a) {
        return a;
      };
      var e,
          f = b ? (a.match(qa) || [""])[0] : "",
          g = a.split(f).join("").match(u) || [],
          h = a.substr(0, a.indexOf(g[0])),
          i = ")" === a.charAt(a.length - 1) ? ")" : "",
          j = -1 !== a.indexOf(" ") ? " " : ",",
          k = g.length,
          l = k > 0 ? g[0].replace(s, "") : "";
      return k ? e = b ? function (a) {
        var b, m, n, o;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) {
            o[n] = e(o[n]);
          }

          return o.join(",");
        }
        if (b = (a.match(qa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) {
          m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
        }
        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
      } : function (a) {
        var b, f, m;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) {
            f[m] = e(f[m]);
          }

          return f.join(",");
        }
        if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;) {
          b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
        }
        return h + b.join(j) + i;
      } : function (a) {
        return a;
      };
    },
        sa = function sa(a) {
      return a = a.split(","), function (b, c, d, e, f, g, h) {
        var i,
            j = (c + "").split(" ");

        for (h = {}, i = 0; 4 > i; i++) {
          h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
        }

        return e.parse(b, h, f, g);
      };
    },
        ta = (S._setPluginRatio = function (a) {
      this.plugin.setRatio(a);

      for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) {
        b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
      }

      if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
        if (c = i.t, c.type) {
          if (1 === c.type) {
            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) {
              e += c["xn" + d] + c["xs" + (d + 1)];
            }

            c[f] = e;
          }
        } else c[f] = c.s + c.xs0;

        i = i._next;
      }
    }, function (a, b, c, d, e) {
      this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
    }),
        ua = (S._parseToProxy = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l = d,
          m = {},
          n = {},
          o = c._transform,
          p = M;

      for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ta(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) {
          i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ta(d, i, h, j, d.rxp[i]));
        }
        d = d._next;
      }

      return {
        proxy: m,
        end: n,
        firstMPT: j,
        pt: k
      };
    }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
      this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ua || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
    }),
        va = function va(a, b, c, d, e, f) {
      var g = new ua(a, b, c, d - c, e, -1, f);
      return g.b = c, g.e = g.xs0 = d, g;
    },
        wa = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
      c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ua(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && qa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
      var m,
          n,
          o,
          p,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D = c.split(", ").join(",").split(" "),
          E = d.split(", ").join(",").split(" "),
          F = D.length,
          G = k !== !1;

      for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, qa.lastIndex = 0, m = 0; F > m; m++) {
        if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ja(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);else if (e && qa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = oa(p, C), u = oa(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ja(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ja(u[1], p[1]), "%,", !1).appendXtra("", p[2], ja(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), qa.lastIndex = 0;else if (v = p.match(s)) {
          if (w = u.match(t), !w || w.length !== v.length) return h;

          for (o = 0, n = 0; n < v.length; n++) {
            A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ja(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
          }

          h["xs" + h.l] += p.substr(o);
        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
      }

      if (-1 !== d.indexOf("=") && h.data) {
        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) {
          B += h["xs" + m] + h.data["xn" + m];
        }

        h.e = B + h["xs" + m];
      }

      return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
    },
        xa = 9;

    for (j = ua.prototype, j.l = j.pr = 0; --xa > 0;) {
      j["xn" + xa] = 0, j["xs" + xa] = "";
    }

    j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
      var g = this,
          h = g.l;
      return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ua(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
        s: b + c
      }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
    };

    var ya = function ya(a, b) {
      b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || ra(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, this.pr = b.priority || 0;
    },
        za = S._registerComplexSpecialProp = function (a, b, c) {
      "object" != _typeof(b) && (b = {
        parser: c
      });
      var d,
          e,
          f = a.split(","),
          g = b.defaultValue;

      for (c = c || [g], d = 0; d < f.length; d++) {
        b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ya(f[d], b);
      }
    },
        Aa = S._registerPluginProp = function (a) {
      if (!i[a]) {
        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
        za(a, {
          parser: function parser(a, c, d, e, f, g, j) {
            var k = h.com.greensock.plugins[b];
            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
          }
        });
      }
    };

    j = ya.prototype, j.parseComplex = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l,
          m = this.keyword;

      if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) {
          b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
        }

        b = h.join(", "), c = i.join(", ");
      }

      return wa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
    }, j.parse = function (a, b, c, d, f, g, h) {
      return this.parseComplex(a.style, this.format(aa(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
    }, g.registerSpecialProp = function (a, b, c) {
      za(a, {
        parser: function parser(a, d, e, f, g, h, i) {
          var j = new ua(a, e, 0, 0, g, 2, e, !1, c);
          return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
        },
        priority: c
      });
    }, g.useSVGTransformAttr = !0;

    var Ba,
        Ca = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Da = Z("transform"),
        Ea = X + "transform",
        Fa = Z("transformOrigin"),
        Ga = null !== Z("perspective"),
        Ha = S.Transform = function () {
      this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ga ? g.defaultForce3D || "auto" : !1;
    },
        Ia = _gsScope.SVGElement,
        Ja = function Ja(a, b, c) {
      var d,
          e = O.createElementNS("http://www.w3.org/2000/svg", a),
          f = /([a-z])([A-Z])/g;

      for (d in c) {
        e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
      }

      return b.appendChild(e), e;
    },
        Ka = O.documentElement || {},
        La = function () {
      var a,
          b,
          c,
          d = p || /Android/i.test(T) && !_gsScope.chrome;
      return O.createElementNS && !d && (a = Ja("svg", Ka), b = Ja("rect", a, {
        width: 100,
        height: 50,
        x: 100
      }), c = b.getBoundingClientRect().width, b.style[Fa] = "50% 50%", b.style[Da] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ga), Ka.removeChild(a)), d;
    }(),
        Ma = function Ma(a, b, c, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = a._gsTransform,
          w = Ra(a, !0);
      v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
        width: 0,
        height: 0
      }), b = ia(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Qa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
    },
        Na = function Na(a) {
      var b,
          c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          d = this.parentNode,
          e = this.nextSibling,
          f = this.style.cssText;
      if (Ka.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Na;
      } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
      return e ? d.insertBefore(this, e) : d.appendChild(this), Ka.removeChild(c), this.style.cssText = f, b;
    },
        Oa = function Oa(a) {
      try {
        return a.getBBox();
      } catch (b) {
        return Na.call(a, !0);
      }
    },
        Pa = function Pa(a) {
      return !(!Ia || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Oa(a));
    },
        Qa = [1, 0, 0, 1, 0, 0],
        Ra = function Ra(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = a._gsTransform || new Ha(),
          k = 1e5,
          l = a.style;
      if (Da ? d = aa(a, Ea, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Da && c && !a.offsetParent && (f = l.display, l.display = "block", i = a.parentNode, i && a.offsetParent || (g = 1, h = a.nextSibling, Ka.appendChild(a)), d = aa(a, Ea, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? l.display = f : Wa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : Ka.removeChild(a))), (j.svg || a.getCTM && Pa(a)) && (c && -1 !== (l[Da] + "").indexOf("matrix") && (d = l[Da], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Qa;

      for (e = (d || "").match(s) || [], xa = e.length; --xa > -1;) {
        f = Number(e[xa]), e[xa] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -.5 : .5) | 0) / k + f : f;
      }

      return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
    },
        Sa = S.getTransform = function (a, c, d, e) {
      if (a._gsTransform && d && !e) return a._gsTransform;
      var f,
          h,
          i,
          j,
          k,
          l,
          m = d ? a._gsTransform || new Ha() : new Ha(),
          n = m.scaleX < 0,
          o = 2e-5,
          p = 1e5,
          q = Ga ? parseFloat(aa(a, Fa, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
          r = parseFloat(g.defaultTransformPerspective) || 0;

      if (m.svg = !(!a.getCTM || !Pa(a)), m.svg && (Ma(a, aa(a, Fa, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ba = g.useSVGTransformAttr || La), f = Ra(a), f !== Qa) {
        if (16 === f.length) {
          var s,
              t,
              u,
              v,
              w,
              x = f[0],
              y = f[1],
              z = f[2],
              A = f[3],
              B = f[4],
              C = f[5],
              D = f[6],
              E = f[7],
              F = f[8],
              G = f[9],
              H = f[10],
              I = f[12],
              J = f[13],
              K = f[14],
              M = f[11],
              N = Math.atan2(D, H);
          m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
        } else if (!Ga || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
          var O = f.length >= 6,
              P = O ? f[0] : 1,
              Q = f[1] || 0,
              R = f[2] || 0,
              S = O ? f[3] : 1;
          m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ga && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
        }

        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;

        for (h in m) {
          m[h] < o && m[h] > -o && (m[h] = 0);
        }
      }

      return d && (a._gsTransform = m, m.svg && (Ba && a.style[Da] ? b.delayedCall(.001, function () {
        Wa(a.style, Da);
      }) : !Ba && a.getAttribute("transform") && b.delayedCall(.001, function () {
        a.removeAttribute("transform");
      }))), m;
    },
        Ta = function Ta(a) {
      var b,
          c,
          d = this.data,
          e = -d.rotation * K,
          f = e + d.skewX * K,
          g = 1e5,
          h = (Math.cos(e) * d.scaleX * g | 0) / g,
          i = (Math.sin(e) * d.scaleX * g | 0) / g,
          j = (Math.sin(f) * -d.scaleY * g | 0) / g,
          k = (Math.cos(f) * d.scaleY * g | 0) / g,
          l = this.t.style,
          m = this.t.currentStyle;

      if (m) {
        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
        var n,
            o,
            q = this.t.offsetWidth,
            r = this.t.offsetHeight,
            s = "absolute" !== m.position,
            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
            u = d.x + q * d.xPercent / 100,
            v = d.y + r * d.yPercent / 100;

        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
          var y,
              z,
              A,
              B = 8 > p ? 1 : -1;

          for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), xa = 0; 4 > xa; xa++) {
            z = ga[xa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : ba(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > xa ? -d.ieOffsetX : -d.ieOffsetY : 2 > xa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === xa || 2 === xa ? 1 : B))) + "px";
          }
        }
      }
    },
        Ua = S.set3DTransformRatio = S.setTransformRatio = function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z = this.data,
          A = this.t.style,
          B = z.rotation,
          C = z.rotationX,
          D = z.rotationY,
          E = z.scaleX,
          F = z.scaleY,
          G = z.scaleZ,
          H = z.x,
          I = z.y,
          J = z.z,
          L = z.svg,
          M = z.perspective,
          N = z.force3D,
          O = z.skewY,
          P = z.skewX;
      if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ba && L || !Ga) return void (B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Ba && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Ba ? this.t.setAttribute("transform", "matrix(" + u) : A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
      if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;else {
        if (!(D || C || 1 !== G || M || L)) return void (A[Da] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
        c = g = 1, d = f = 0;
      }
      k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Da] = u;
    };

    j = Ha.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, za("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(a, b, c, d, f, h, i) {
        if (d._lastParsedTransform === i) return f;
        d._lastParsedTransform = i;
        var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
        j && (i.scale = j(r, a));
        var k,
            l,
            m,
            n,
            o,
            p,
            s,
            t,
            u,
            v = a._gsTransform,
            w = a.style,
            x = 1e-6,
            y = Ca.length,
            z = i,
            A = {},
            B = "transformOrigin",
            C = Sa(a, e, !0, z.parseTransform),
            D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
        if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Da) l = Q.style, l[Da] = D, l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = aa(a, "width"), l.height = aa(a, "height")), O.body.appendChild(Q), k = Sa(Q, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * K)), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Ma(a, ia(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Ra(Q, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), O.body.removeChild(Q), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = ka(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = ka(z.yPercent, C.yPercent));else if ("object" == _typeof(z)) {
          if (k = {
            scaleX: ka(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
            scaleY: ka(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
            scaleZ: ka(z.scaleZ, C.scaleZ),
            x: ka(z.x, C.x),
            y: ka(z.y, C.y),
            z: ka(z.z, C.z),
            xPercent: ka(z.xPercent, C.xPercent),
            yPercent: ka(z.yPercent, C.yPercent),
            perspective: ka(z.transformPerspective, C.perspective)
          }, o = z.directionalRotation, null != o) if ("object" == _typeof(o)) for (l in o) {
            z[l] = o[l];
          } else z.rotation = o;
          "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = ka(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = ka(z.y, C.yPercent)), k.rotation = la("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), Ga && (k.rotationX = la("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = la("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = la(z.skewX, C.skewX), k.skewY = la(z.skewY, C.skewY);
        }

        for (Ga && null != z.force3D && (C.force3D = z.force3D, n = !0), m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;) {
          u = Ca[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != M[u]) && (n = !0, f = new ua(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
        }

        return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Ma(a, ia(D), k, z.svgOrigin, z.smoothOrigin), f = va(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = va(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = va(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = va(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ga && m && C.zOrigin) && (Da ? (n = !0, u = Fa, D || (D = (aa(a, u, e, !1, "50% 50%") + "").split(" "), D = D[0] + " " + D[1] + " " + C.zOrigin + "px"), D += "", f = new ua(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ga ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new ua(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ia(D + "", C)), n && (d._transformType = C.svg && Ba || !m && 3 !== this._transformType ? 2 : 3), j && (i.scale = j), f;
      },
      allowFunc: !0,
      prefix: !0
    }), za("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), za("clipPath", {
      defaultValue: "inset(0px)",
      prefix: !0,
      multi: !0,
      formatter: ra("inset(0px 0px 0px 0px)", !1, !0)
    }), za("borderRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, f, g, h) {
        b = this.format(b);
        var i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            z = a.style;

        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) {
          this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = aa(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = ba(a, "borderLeft", o, t), w = ba(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = ba(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = wa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
        }

        return g;
      },
      prefix: !0,
      formatter: ra("0px 0px 0px 0px", !1, !0)
    }), za("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, d, f, g) {
        return wa(a.style, c, this.format(aa(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
      },
      prefix: !0,
      formatter: ra("0px 0px", !1, !0)
    }), za("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(a, b, c, d, f, g) {
        var h,
            i,
            j,
            k,
            l,
            m,
            n = "background-position",
            o = e || _(a, null),
            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
            r = this.format(b);

        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = aa(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
          for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) {
            q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
          }

          q = h.join(" ");
        }

        return this.parseComplex(a.style, q, r, f, g);
      },
      formatter: ia
    }), za("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(a) {
        return a += "", "co" === a.substr(0, 2) ? a : ia(-1 === a.indexOf(" ") ? a + " " + a : a);
      }
    }), za("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), za("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), za("transformStyle", {
      prefix: !0
    }), za("backfaceVisibility", {
      prefix: !0
    }), za("userSelect", {
      prefix: !0
    }), za("margin", {
      parser: sa("marginTop,marginRight,marginBottom,marginLeft")
    }), za("padding", {
      parser: sa("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), za("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(a, b, c, d, f, g) {
        var h, i, j;
        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(aa(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
      }
    }), za("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), za("autoRound,strictUnits", {
      parser: function parser(a, b, c, d, e) {
        return e;
      }
    }), za("border", {
      defaultValue: "0px solid #000",
      parser: function parser(a, b, c, d, f, g) {
        var h = aa(a, "borderTopWidth", e, !1, "0px"),
            i = this.format(b).split(" "),
            j = i[0].replace(w, "");
        return "px" !== j && (h = parseFloat(h) / ba(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + aa(a, "borderTopStyle", e, !1, "solid") + " " + aa(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
      },
      color: !0,
      formatter: function formatter(a) {
        var b = a.split(" ");
        return b[0] + " " + (b[1] || "solid") + " " + (a.match(qa) || ["#000"])[0];
      }
    }), za("borderWidth", {
      parser: sa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), za("float,cssFloat,styleFloat", {
      parser: function parser(a, b, c, d, e, f) {
        var g = a.style,
            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
        return new ua(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
      }
    });

    var Va = function Va(a) {
      var b,
          c = this.t,
          d = c.filter || aa(this.data, "filter") || "",
          e = this.s + this.c * a | 0;
      100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !aa(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e));
    };

    za("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(a, b, c, d, f, g) {
        var h = parseFloat(aa(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === aa(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ua(i, "opacity", h, b - h, f) : (f = new ua(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Va), j && (f = new ua(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
      }
    });

    var Wa = function Wa(a, b) {
      b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
    },
        Xa = function Xa(a) {
      if (this.t._gsClassPT = this, 1 === a || 0 === a) {
        this.t.setAttribute("class", 0 === a ? this.b : this.e);

        for (var b = this.data, c = this.t.style; b;) {
          b.v ? c[b.p] = b.v : Wa(c, b.p), b = b._next;
        }

        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    za("className", {
      parser: function parser(a, b, d, f, g, h, i) {
        var j,
            k,
            l,
            m,
            n,
            o = a.getAttribute("class") || "",
            p = a.style.cssText;

        if (g = f._classNamePT = new ua(a, d, 0, 0, g, 2), g.setRatio = Xa, g.pr = -11, c = !0, g.b = o, k = da(a, e), l = a._gsClassPT) {
          for (m = {}, n = l.data; n;) {
            m[n.p] = 1, n = n._next;
          }

          l.setRatio(1);
        }

        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = ea(a, k, da(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h);
      }
    });

    var Ya = function Ya(a) {
      if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var b,
            c,
            d,
            e,
            f,
            g = this.t.style,
            h = i.transform.parse;
        if ("all" === this.e) g.cssText = "", e = !0;else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) {
          c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Fa : i[c].p), Wa(g, c);
        }
        e && (Wa(g, Da), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };

    for (za("clearProps", {
      parser: function parser(a, b, d, e, f) {
        return f = new ua(a, d, 0, 0, f, 2), f.setRatio = Ya, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f;
      }
    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), xa = j.length; xa--;) {
      Aa(j[xa]);
    }

    j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
      if (!a.nodeType) return !1;
      this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = _(a, ""), f = this._overwriteProps;
      var n,
          p,
          s,
          t,
          u,
          v,
          w,
          x,
          z,
          A = a.style;

      if (l && "" === A.zIndex && (n = aa(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = da(a, e), A.cssText = t + ";" + b, n = ea(a, n, da(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
        for (z = 3 === this._transformType, Da ? m && (l = !0, "" === A.zIndex && (w = aa(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) {
          s = s._next;
        }

        x = new ua(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Da ? Ua : Ta, x.data = this._transform || Sa(a, e, !0), x.tween = h, x.pr = -1, f.pop();
      }

      if (c) {
        for (; p;) {
          for (v = p._next, s = t; s && s.pr > p.pr;) {
            s = s._next;
          }

          (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
        }

        this._firstPT = t;
      }

      return !0;
    }, j.parse = function (a, b, c, f) {
      var g,
          h,
          j,
          l,
          m,
          n,
          o,
          p,
          s,
          t,
          u = a.style;

      for (g in b) {
        if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), h) c = h.parse(a, n, g, this, c, f, b);else {
          if ("--" === g.substr(0, 2)) {
            this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", _(a).getPropertyValue(g) + "", n + "", g, !1, g);
            continue;
          }

          m = aa(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = oa(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = wa(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = wa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ha(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ca(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ba(a, g, j, o), "%" === p ? (j /= ba(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ba(a, g, 1, p) : "px" !== p && (l = ba(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ua(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ua(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
        }
        f && c && !c.plugin && (c.plugin = f);
      }

      return c;
    }, j.setRatio = function (a) {
      var b,
          c,
          d,
          e = this._firstPT,
          f = 1e-6;
      if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
          if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type) {
            if (1 === e.type) {
              if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {
                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
          } else e.t[e.p] = b + e.xs0;
          e = e._next;
        } else for (; e;) {
          2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
        }
      } else for (; e;) {
        if (2 !== e.type) {
          if (e.r && -1 !== e.type) {
            if (b = e.r(e.s + e.c), e.type) {
              if (1 === e.type) {
                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else e.t[e.p] = b + e.xs0;
          } else e.t[e.p] = e.e;
        } else e.setRatio(a);
        e = e._next;
      }
    }, j._enableTransforms = function (a) {
      this._transform = this._transform || Sa(this._target, e, !0), this._transformType = this._transform.svg && Ba || !a && 3 !== this._transformType ? 2 : 3;
    };

    var Za = function Za(a) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    j._addLazySet = function (a, b, c) {
      var d = this._firstPT = new ua(a, b, 0, 0, this._firstPT, 2);
      d.e = c, d.setRatio = Za, d.data = this;
    }, j._linkCSSP = function (a, b, c, d) {
      return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
    }, j._mod = function (a) {
      for (var b = this._firstPT; b;) {
        "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next;
      }
    }, j._kill = function (b) {
      var c,
          d,
          e,
          f = b;

      if (b.autoAlpha || b.alpha) {
        f = {};

        for (d in b) {
          f[d] = b[d];
        }

        f.opacity = 1, f.autoAlpha && (f.visibility = 1);
      }

      for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) {
        c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
      }

      return a.prototype._kill.call(this, f);
    };

    var $a = function $a(a, b, c) {
      var d, e, f, g;
      if (a.slice) for (e = a.length; --e > -1;) {
        $a(a[e], b, c);
      } else for (d = a.childNodes, e = d.length; --e > -1;) {
        f = d[e], g = f.type, f.style && (b.push(da(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || $a(f, b, c);
      }
    };

    return g.cascadeTo = function (a, c, d) {
      var e,
          f,
          g,
          h,
          i = b.to(a, c, d),
          j = [i],
          k = [],
          l = [],
          m = [],
          n = b._internals.reservedProps;

      for (a = i._targets || i.target, $a(a, k, m), i.render(c, !0, !0), $a(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) {
        if (f = ea(m[e], k[e], l[e]), f.firstMPT) {
          f = f.difs;

          for (g in d) {
            n[g] && (f[g] = d[g]);
          }

          h = {};

          for (g in f) {
            h[g] = k[e][g];
          }

          j.push(b.fromTo(m[e], c, h, f));
        }
      }

      return j;
    }, a.activate([g]), g;
  }, !0), function () {
    var a = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function init(a, b, c) {
        return this._tween = c, !0;
      }
    }),
        b = function b(a) {
      var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
      return function (c) {
        return (Math.round(c / a) * a * b | 0) / b;
      };
    },
        c = function c(a, b) {
      for (; a;) {
        a.f || a.blob || (a.m = b || Math.round), a = a._next;
      }
    },
        d = a.prototype;

    d._onInitAllProps = function () {
      var a,
          d,
          e,
          f,
          g = this._tween,
          h = g.vars.roundProps,
          i = {},
          j = g._propLookup.roundProps;
      if ("object" != _typeof(h) || h.push) for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) {
        i[h[e]] = Math.round;
      } else for (f in h) {
        i[f] = b(h[f]);
      }

      for (f in i) {
        for (a = g._firstPT; a;) {
          d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
        }
      }

      return !1;
    }, d._add = function (a, b, c, d, e) {
      this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b);
    };
  }(), function () {
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function init(a, b, c, d) {
        var e, f;
        if ("function" != typeof a.setAttribute) return !1;

        for (e in b) {
          f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
        }

        return !0;
      }
    });
  }(), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.3.1",
    API: 2,
    init: function init(a, b, c, d) {
      "object" != _typeof(b) && (b = {
        rotation: b
      }), this.finals = {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;

      for (e in b) {
        "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
      }

      return !0;
    },
    set: function set(a) {
      var b;
      if (1 !== a) this._super.setRatio.call(this, a);else for (b = this._firstPT; b;) {
        b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
    var b,
        c,
        d,
        e,
        f = _gsScope.GreenSockGlobals || _gsScope,
        g = f.com.greensock,
        h = 2 * Math.PI,
        i = Math.PI / 2,
        j = g._class,
        k = function k(b, c) {
      var d = j("easing." + b, function () {}, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, d;
    },
        l = a.register || function () {},
        m = function m(a, b, c, d, e) {
      var f = j("easing." + a, {
        easeOut: new b(),
        easeIn: new c(),
        easeInOut: new d()
      }, !0);
      return l(f, a), f;
    },
        n = function n(a, b, c) {
      this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
    },
        o = function o(b, c) {
      var d = j("easing." + b, function (a) {
        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, e.config = function (a) {
        return new d(a);
      }, d;
    },
        p = m("Back", o("BackOut", function (a) {
      return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
    }), o("BackIn", function (a) {
      return a * a * ((this._p1 + 1) * a - this._p1);
    }), o("BackInOut", function (a) {
      return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
    })),
        q = j("easing.SlowMo", function (a, b, c) {
      b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
    }, !0),
        r = q.prototype = new a();

    return r.constructor = q, r.getRatio = function (a) {
      var b = a + (.5 - a) * this._p;
      return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
    }, q.ease = new q(.7, .7), r.config = q.config = function (a, b, c) {
      return new q(a, b, c);
    }, b = j("easing.SteppedEase", function (a, b) {
      a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
    }, !0), r = b.prototype = new a(), r.constructor = b, r.getRatio = function (a) {
      return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
    }, r.config = b.config = function (a, c) {
      return new b(a, c);
    }, c = j("easing.ExpoScaleEase", function (a, b, c) {
      this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
    }, !0), r = c.prototype = new a(), r.constructor = c, r.getRatio = function (a) {
      return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
    }, r.config = c.config = function (a, b, d) {
      return new c(a, b, d);
    }, d = j("easing.RoughEase", function (b) {
      b = b || {};

      for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) {
        c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
          x: c,
          y: d
        };
      }

      for (j.sort(function (a, b) {
        return a.x - b.x;
      }), h = new n(1, 1, null), m = l; --m > -1;) {
        g = j[m], h = new n(g.x, g.y, h);
      }

      this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
    }, !0), r = d.prototype = new a(), r.constructor = d, r.getRatio = function (a) {
      var b = this._prev;

      if (a > b.t) {
        for (; b.next && a >= b.t;) {
          b = b.next;
        }

        b = b.prev;
      } else for (; b.prev && a <= b.t;) {
        b = b.prev;
      }

      return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
    }, r.config = function (a) {
      return new d(a);
    }, d.ease = new d(), m("Bounce", k("BounceOut", function (a) {
      return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
    }), k("BounceIn", function (a) {
      return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
    }), k("BounceInOut", function (a) {
      var b = .5 > a;
      return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5;
    })), m("Circ", k("CircOut", function (a) {
      return Math.sqrt(1 - (a -= 1) * a);
    }), k("CircIn", function (a) {
      return -(Math.sqrt(1 - a * a) - 1);
    }), k("CircInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
    })), e = function e(b, c, d) {
      var e = j("easing." + b, function (a, b) {
        this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2;
      }, !0),
          f = e.prototype = new a();
      return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
        return new e(a, b);
      }, e;
    }, m("Elastic", e("ElasticOut", function (a) {
      return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
    }, .3), e("ElasticIn", function (a) {
      return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
    }, .3), e("ElasticInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
    }, .45)), m("Expo", k("ExpoOut", function (a) {
      return 1 - Math.pow(2, -10 * a);
    }), k("ExpoIn", function (a) {
      return Math.pow(2, 10 * (a - 1)) - .001;
    }), k("ExpoInOut", function (a) {
      return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
    })), m("Sine", k("SineOut", function (a) {
      return Math.sin(a * i);
    }), k("SineIn", function (a) {
      return -Math.cos(a * i) + 1;
    }), k("SineInOut", function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    })), j("easing.EaseLookup", {
      find: function find(b) {
        return a.map[b];
      }
    }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
  "use strict";

  var c = {},
      d = a.document,
      e = a.GreenSockGlobals = a.GreenSockGlobals || a,
      f = e[b];
  if (f) return  true && module.exports && (module.exports = f), f;

  var g,
      h,
      i,
      j,
      k,
      l = function l(a) {
    var b,
        c = a.split("."),
        d = e;

    for (b = 0; b < c.length; b++) {
      d[c[b]] = d = d[c[b]] || {};
    }

    return d;
  },
      m = l("com.greensock"),
      n = 1e-8,
      o = function o(a) {
    var b,
        c = [],
        d = a.length;

    for (b = 0; b !== d; c.push(a[b++])) {
      ;
    }

    return c;
  },
      p = function p() {},
      q = function () {
    var a = Object.prototype.toString,
        b = a.call([]);
    return function (c) {
      return null != c && (c instanceof Array || "object" == _typeof(c) && !!c.push && a.call(c) === b);
    };
  }(),
      r = {},
      s = function s(d, f, g, h) {
    this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
    var i = [];
    this.check = function (j) {
      for (var k, m, n, o, p = f.length, q = p; --p > -1;) {
        (k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
      }

      if (0 === q && g) {
        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o,  true && module.exports) {
          if (d === b) {
            module.exports = c[b] = o;

            for (p in c) {
              o[p] = c[p];
            }
          } else c[b] && (c[b][n] = o);
        } else  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
          return o;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        for (p = 0; p < this.sc.length; p++) {
          this.sc[p].check();
        }
      }
    }, this.check(!0);
  },
      t = a._gsDefine = function (a, b, c, d) {
    return new s(a, b, c, d);
  },
      u = m._class = function (a, b, c) {
    return b = b || function () {}, t(a, [], function () {
      return b;
    }, c), b;
  };

  t.globals = e;

  var v = [0, 0, 1, 1],
      w = u("easing.Ease", function (a, b, c, d) {
    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v;
  }, !0),
      x = w.map = {},
      y = w.register = function (a, b, c, d) {
    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
      for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) {
        h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
      }
    }
  };

  for (i = w.prototype, i._calcEnd = !1, i.getRatio = function (a) {
    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
    var b = this._type,
        c = this._power,
        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
  }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) {
    i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
  }

  x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
  var z = u("events.EventDispatcher", function (a) {
    this._listeners = {}, this._eventTarget = a || this;
  });
  i = z.prototype, i.addEventListener = function (a, b, c, d, e) {
    e = e || 0;
    var f,
        g,
        h = this._listeners[a],
        i = 0;

    for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) {
      f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
    }

    h.splice(i, 0, {
      c: b,
      s: c,
      up: d,
      pr: e
    });
  }, i.removeEventListener = function (a, b) {
    var c,
        d = this._listeners[a];
    if (d) for (c = d.length; --c > -1;) {
      if (d[c].c === b) return void d.splice(c, 1);
    }
  }, i.dispatchEvent = function (a) {
    var b,
        c,
        d,
        e = this._listeners[a];
    if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
      d = e[b], d && (d.up ? d.c.call(d.s || c, {
        type: a,
        target: c
      }) : d.c.call(d.s || c));
    }
  };

  var A = a.requestAnimationFrame,
      B = a.cancelAnimationFrame,
      C = Date.now || function () {
    return new Date().getTime();
  },
      D = C();

  for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) {
    A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
  }

  u("Ticker", function (a, b) {
    var c,
        e,
        f,
        g,
        h,
        i = this,
        l = C(),
        m = b !== !1 && A ? "auto" : !1,
        o = 500,
        q = 33,
        r = "tick",
        s = function s(a) {
      var b,
          d,
          j = C() - D;
      j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r);
    };

    z.call(i), i.time = i.frame = 0, i.tick = function () {
      s(!0);
    }, i.lagSmoothing = function (a, b) {
      return arguments.length ? (o = a || 1 / n, void (q = Math.min(b, o, 0))) : 1 / n > o;
    }, i.sleep = function () {
      null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1));
    }, i.wake = function (a) {
      null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function (a) {
        return setTimeout(a, 1e3 * (h - i.time) + 1 | 0);
      }, i === j && (k = !0), s(2);
    }, i.fps = function (a) {
      return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c;
    }, i.useRAF = function (a) {
      return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m;
    }, i.fps(a), setTimeout(function () {
      "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1);
    }, 1500);
  }), i = m.Ticker.prototype = new m.events.EventDispatcher(), i.constructor = m.Ticker;
  var E = u("core.Animation", function (a, b) {
    if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, Z) {
      k || j.wake();
      var c = this.vars.useFrames ? Y : Z;
      c.add(this, c._time), this.vars.paused && this.paused(!0);
    }
  });
  j = E.ticker = new m.Ticker(), i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;

  var F = function F() {
    k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
    var a = setTimeout(F, 2e3);
    a.unref && a.unref();
  };

  F(), i.play = function (a, b) {
    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
  }, i.pause = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!0);
  }, i.resume = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!1);
  }, i.seek = function (a, b) {
    return this.totalTime(Number(a), b !== !1);
  }, i.restart = function (a, b) {
    return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
  }, i.reverse = function (a, b) {
    return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
  }, i.render = function (a, b, c) {}, i.invalidate = function () {
    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
  }, i.isActive = function () {
    var a,
        b = this._timeline,
        c = this._startTime;
    return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n;
  }, i._enabled = function (a, b) {
    return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
  }, i._kill = function (a, b) {
    return this._enabled(!1, !1);
  }, i.kill = function (a, b) {
    return this._kill(a, b), this;
  }, i._uncache = function (a) {
    for (var b = a ? this : this.timeline; b;) {
      b._dirty = !0, b = b.timeline;
    }

    return this;
  }, i._swapSelfInParams = function (a) {
    for (var b = a.length, c = a.concat(); --b > -1;) {
      "{self}" === a[b] && (c[b] = this);
    }

    return c;
  }, i._callback = function (a) {
    var b = this.vars,
        c = b[a],
        d = b[a + "Params"],
        e = b[a + "Scope"] || b.callbackScope || this,
        f = d ? d.length : 0;

    switch (f) {
      case 0:
        c.call(e);
        break;

      case 1:
        c.call(e, d[0]);
        break;

      case 2:
        c.call(e, d[0], d[1]);
        break;

      default:
        c.apply(e, d);
    }
  }, i.eventCallback = function (a, b, c, d) {
    if ("on" === (a || "").substr(0, 2)) {
      var e = this.vars;
      if (1 === arguments.length) return e[a];
      null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
    }

    return this;
  }, i.delay = function (a) {
    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
  }, i.duration = function (a) {
    return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
  }, i.totalDuration = function (a) {
    return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
  }, i.time = function (a, b) {
    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
  }, i.totalTime = function (a, b, c) {
    if (k || j.wake(), !arguments.length) return this._totalTime;

    if (this._timeline) {
      if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var d = this._totalDuration,
            e = this._timeline;
        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
          e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
        }
      }

      this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && _(), this.render(a, b, !1), K.length && _());
    }

    return this;
  }, i.progress = i.totalProgress = function (a, b) {
    var c = this.duration();
    return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
  }, i.startTime = function (a) {
    return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
  }, i.endTime = function (a) {
    return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
  }, i.timeScale = function (a) {
    if (!arguments.length) return this._timeScale;
    var b, c;

    for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) {
      c._dirty = !0, c.totalDuration(), c = c.timeline;
    }

    return this;
  }, i.reversed = function (a) {
    return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
  }, i.paused = function (a) {
    if (!arguments.length) return this._paused;
    var b,
        c,
        d = this._timeline;
    return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
  };
  var G = u("core.SimpleTimeline", function (a) {
    E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
  });
  i = G.prototype = new E(), i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function (a, b, c, d) {
    var e, f;
    if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
      e = e._prev;
    }
    return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
  }, i._remove = function (a, b) {
    return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
  }, i.render = function (a, b, c) {
    var d,
        e = this._first;

    for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
      d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
    }
  }, i.rawTime = function () {
    return k || j.wake(), this._totalTime;
  };

  var H = u("TweenLite", function (b, c, d) {
    if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
    this.target = b = "string" != typeof b ? b : H.selector(b) || b;
    var e,
        f,
        g,
        h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
        i = this.vars.overwrite;
    if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0]) for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
      f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
    } else this._propLookup = {}, this._siblings = aa(b, this, !1), 1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)));
  }, !0),
      I = function I(b) {
    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
  },
      J = function J(a, b) {
    var c,
        d = {};

    for (c in a) {
      W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
    }

    a.css = d;
  };

  i = H.prototype = new E(), i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.2", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function (a, b) {
    j.lagSmoothing(a, b);
  }, H.selector = a.$ || a.jQuery || function (b) {
    var c = a.$ || a.jQuery;
    return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b);
  };

  var K = [],
      L = {},
      M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      N = /[\+-]=-?[\.\d]/,
      O = function O(a) {
    for (var b, c = this._firstPT, d = 1e-6; c;) {
      b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }
  },
      P = function P(a) {
    return (1e3 * a | 0) / 1e3 + "";
  },
      Q = function Q(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = [],
        m = 0,
        n = "",
        o = 0;

    for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
      k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
        _next: l._firstPT,
        t: l,
        p: l.length - 1,
        s: g,
        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
        f: 0,
        m: o && 4 > o ? Math.round : P
      }), m += k.length;
    }

    return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l;
  },
      R = function R(a, b, c, d, e, f, g, h, i) {
    "function" == typeof d && (d = d(i || 0, a));

    var j,
        k = _typeof(a[b]),
        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
        n = "string" == typeof d && "=" === d.charAt(1),
        o = {
      t: a,
      p: b,
      s: m,
      f: "function" === k,
      pg: 0,
      n: e || b,
      m: f ? "function" == typeof f ? f : Math.round : 0,
      pr: 0,
      c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
    };

    return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
      t: j,
      p: "setRatio",
      s: 0,
      c: 1,
      f: 2,
      pg: 0,
      n: e || b,
      pr: 0,
      m: 0
    }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
  },
      S = H._internals = {
    isArray: q,
    isSelector: I,
    lazyTweens: K,
    blobDif: Q
  },
      T = H._plugins = {},
      U = S.tweenLookup = {},
      V = 0,
      W = S.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1,
    stagger: 1
  },
      X = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      Y = E._rootFramesTimeline = new G(),
      Z = E._rootTimeline = new G(),
      $ = 30,
      _ = S.lazyRender = function () {
    var a,
        b,
        c = K.length;

    for (L = {}, a = 0; c > a; a++) {
      b = K[a], b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0), b._lazy = !1);
    }

    K.length = 0;
  };

  Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), E._updateRoot = H.render = function () {
    var a, b, c;

    if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), K.length && _(), j.frame >= $) {
      $ = j.frame + (parseInt(H.autoSleep, 10) || 120);

      for (c in U) {
        for (b = U[c].tweens, a = b.length; --a > -1;) {
          b[a]._gc && b.splice(a, 1);
        }

        0 === b.length && delete U[c];
      }

      if (c = Z._first, (!c || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
        for (; c && c._paused;) {
          c = c._next;
        }

        c || j.sleep();
      }
    }
  }, j.addEventListener("tick", E._updateRoot);

  var aa = function aa(a, b, c) {
    var d,
        e,
        f = a._gsTweenID;
    if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
      target: a,
      tweens: []
    }), b && (d = U[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
      d[e] === b && d.splice(e, 1);
    }
    return U[f].tweens;
  },
      ba = function ba(a, b, c, d) {
    var e,
        f,
        g = a.vars.onOverwrite;
    return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
  },
      ca = function ca(a, b, c, d, e) {
    var f, g, h, i;

    if (1 === d || d >= 4) {
      for (i = e.length, f = 0; i > f; f++) {
        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
      }

      return g;
    }

    var j,
        k = b._startTime + n,
        l = [],
        m = 0,
        o = 0 === b._duration;

    for (f = e.length; --f > -1;) {
      (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
    }

    for (f = m; --f > -1;) {
      if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
        if (2 !== d && !ba(h, b)) continue;
        h._enabled(!1, !1) && (g = !0);
      }
    }

    return g;
  },
      da = function da(a, b, c) {
    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
      if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
      d = d._timeline;
    }

    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n;
  };

  i._init = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease,
        l = this._startAt;

    if (g.startAt) {
      l && (l.render(-1, !0), l.kill()), e = {};

      for (d in g.startAt) {
        e[d] = g.startAt[d];
      }

      if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
    } else if (g.runBackwards && 0 !== i) if (l) l.render(-1, !0), l.kill(), this._startAt = null;else {
      0 !== this._time && (j = !1), c = {};

      for (d in g) {
        W[d] && "autoCSS" !== d || (c[d] = g[d]);
      }

      if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
        if (0 === this._time) return;
      } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
    }

    if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
      this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
    } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
    if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
      c.s += c.c, c.c = -c.c, c = c._next;
    }
    this._onUpdate = g.onUpdate, this._initted = !0;
  }, i._initProps = function (b, c, d, e, f) {
    var g, h, i, j, k, l;
    if (null == b) return !1;
    L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);

    for (g in this.vars) {
      if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (T[g] && (j = new T[g]())._onInitTween(b, this.vars[g], this, f)) {
        for (this._firstPT = k = {
          _next: this._firstPT,
          t: j,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: g,
          pg: 1,
          pr: j._priority,
          m: 0
        }, h = j._overwriteProps.length; --h > -1;) {
          c[j._overwriteProps[h]] = this._firstPT;
        }

        (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
      } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
    }

    return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i);
  }, i.render = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = this,
        i = h._time,
        j = h._duration,
        k = h._rawPrevTime;
    if (a >= j - n && a >= 0) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0), (0 > k || 0 >= a && a >= -n || k === n && "isPause" !== h.data) && k !== a && (c = !0, k > n && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n);else if (n > a) h._totalTime = h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete", d = h._reversed), a > -n ? a = 0 : 0 > a && (h._active = !1, 0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0), h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);else if (h._totalTime = h._time = a, h._easeType) {
      var l = a / j,
          m = h._easeType,
          o = h._easePower;
      (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2;
    } else h.ratio = h._ease.getRatio(a / j);

    if (h._time !== i || c) {
      if (!h._initted) {
        if (h._init(), !h._initted || h._gc) return;
        if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, h._rawPrevTime = k, K.push(h), void (h._lazy = [a, b]);
        h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
      }

      for (h._lazy !== !1 && (h._lazy = !1), h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0), 0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")), h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))), f = h._firstPT; f;) {
        f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, f = f._next;
      }

      h._onUpdate && (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c), b || (h._time !== i || d || c) && h._callback("onUpdate")), e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -1e-4 && h._startAt.render(a, !0, c), d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0));
    }
  }, i._kill = function (a, b, c) {
    if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
    b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
        n = this._firstPT;
    if ((q(b) || I(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
      this._kill(a, b[d], c) && (i = !0);
    } else {
      if (this._targets) {
        for (d = this._targets.length; --d > -1;) {
          if (b === this._targets[d]) {
            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
            break;
          }
        }
      } else {
        if (b !== this.target) return !1;
        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
      }

      if (h) {
        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != _typeof(a) || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
          for (f in j) {
            h[f] && (l || (l = []), l.push(f));
          }

          if ((l || !a) && !ba(this, c, b, l)) return !1;
        }

        for (f in j) {
          (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
        }

        !this._firstPT && this._initted && n && this._enabled(!1, !1);
      }
    }
    return i;
  }, i.invalidate = function () {
    this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
    var a = this._time;
    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(a, !1, this.vars.lazy !== !1)), this;
  }, i._enabled = function (a, b) {
    if (k || j.wake(), a && this._gc) {
      var c,
          d = this._targets;
      if (d) for (c = d.length; --c > -1;) {
        this._siblings[c] = aa(d[c], this, !0);
      } else this._siblings = aa(this.target, this, !0);
    }

    return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
  }, H.to = function (a, b, c) {
    return new H(a, b, c);
  }, H.from = function (a, b, c) {
    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c);
  }, H.fromTo = function (a, b, c, d) {
    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d);
  }, H.delayedCall = function (a, b, c, d, e) {
    return new H(b, 0, {
      delay: a,
      onComplete: b,
      onCompleteParams: c,
      callbackScope: d,
      onReverseComplete: b,
      onReverseCompleteParams: c,
      immediateRender: !1,
      lazy: !1,
      useFrames: e,
      overwrite: 0
    });
  }, H.set = function (a, b) {
    return new H(a, 0, b);
  }, H.getTweensOf = function (a, b) {
    if (null == a) return [];
    a = "string" != typeof a ? a : H.selector(a) || a;
    var c, d, e, f;

    if ((q(a) || I(a)) && "number" != typeof a[0]) {
      for (c = a.length, d = []; --c > -1;) {
        d = d.concat(H.getTweensOf(a[c], b));
      }

      for (c = d.length; --c > -1;) {
        for (f = d[c], e = c; --e > -1;) {
          f === d[e] && d.splice(c, 1);
        }
      }
    } else if (a._gsTweenID) for (d = aa(a).concat(), c = d.length; --c > -1;) {
      (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
    }

    return d || [];
  }, H.killTweensOf = H.killDelayedCallsTo = function (a, b, c) {
    "object" == _typeof(b) && (c = b, b = !1);

    for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) {
      d[e]._kill(c, a);
    }
  };
  var ea = u("plugins.TweenPlugin", function (a, b) {
    this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype;
  }, !0);

  if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, i.setRatio = O, i._kill = function (a) {
    var b,
        c = this._overwriteProps,
        d = this._firstPT;
    if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
      null != a[c[b]] && c.splice(b, 1);
    }

    for (; d;) {
      null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
    }

    return !1;
  }, i._mod = i._roundProps = function (a) {
    for (var b, c = this._firstPT; c;) {
      b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
    }
  }, H._onPluginEvent = function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = b._firstPT;

    if ("_onInitAllProps" === a) {
      for (; h;) {
        for (g = h._next, d = e; d && d.pr > h.pr;) {
          d = d._next;
        }

        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
      }

      h = b._firstPT = e;
    }

    for (; h;) {
      h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
    }

    return c;
  }, ea.activate = function (a) {
    for (var b = a.length; --b > -1;) {
      a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
    }

    return !0;
  }, t.plugin = function (a) {
    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
    var b,
        c = a.propName,
        d = a.priority || 0,
        e = a.overwriteProps,
        f = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
      ea.call(this, c, d), this._overwriteProps = e || [];
    }, a.global === !0),
        h = g.prototype = new ea(c);
    h.constructor = g, g.API = a.API;

    for (b in f) {
      "function" == typeof a[b] && (h[f[b]] = a[b]);
    }

    return g.version = a.version, ea.activate([g]), g;
  }, g = a._gsQueue) {
    for (h = 0; h < g.length; h++) {
      g[h]();
    }

    for (i in r) {
      r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
  }

  k = !1;
}( true && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*!
 * VERSION: 0.2.1
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  function a(a, b, c, d, e, f) {
    return c = (parseFloat(c || 0) - parseFloat(a || 0)) * e, d = (parseFloat(d || 0) - parseFloat(b || 0)) * f, Math.sqrt(c * c + d * d);
  }

  function b(a) {
    return "string" != typeof a && a.nodeType || (a = _gsScope.TweenLite.selector(a), a.length && (a = a[0])), a;
  }

  function c(a, b, c) {
    var d,
        e,
        f = a.indexOf(" ");
    return -1 === f ? (d = void 0 !== c ? c + "" : a, e = a) : (d = a.substr(0, f), e = a.substr(f + 1)), d = -1 !== d.indexOf("%") ? parseFloat(d) / 100 * b : parseFloat(d), e = -1 !== e.indexOf("%") ? parseFloat(e) / 100 * b : parseFloat(e), d > e ? [e, d] : [d, e];
  }

  function d(c) {
    if (!c) return 0;
    c = b(c);
    var d,
        e,
        f,
        g,
        h,
        i,
        k,
        m = c.tagName.toLowerCase(),
        n = 1,
        o = 1;
    "non-scaling-stroke" === c.getAttribute("vector-effect") && (o = c.getScreenCTM(), n = Math.sqrt(o.a * o.a + o.b * o.b), o = Math.sqrt(o.d * o.d + o.c * o.c));

    try {
      e = c.getBBox();
    } catch (p) {
      console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).");
    }

    if (e && (e.width || e.height) || !l[m] || (e = {
      width: parseFloat(c.getAttribute(l[m][0])),
      height: parseFloat(c.getAttribute(l[m][1]))
    }, "rect" !== m && "line" !== m && (e.width *= 2, e.height *= 2), "line" === m && (e.x = parseFloat(c.getAttribute("x1")), e.y = parseFloat(c.getAttribute("y1")), e.width = Math.abs(e.width - e.x), e.height = Math.abs(e.height - e.y))), "path" === m) g = c.style.strokeDasharray, c.style.strokeDasharray = "none", d = c.getTotalLength() || 0, n !== o && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), d *= (n + o) / 2, c.style.strokeDasharray = g;else if ("rect" === m) d = 2 * e.width * n + 2 * e.height * o;else if ("line" === m) d = a(e.x, e.y, e.x + e.width, e.y + e.height, n, o);else if ("polyline" === m || "polygon" === m) for (f = c.getAttribute("points").match(j) || [], "polygon" === m && f.push(f[0], f[1]), d = 0, h = 2; h < f.length; h += 2) {
      d += a(f[h - 2], f[h - 1], f[h], f[h + 1], n, o) || 0;
    } else ("circle" === m || "ellipse" === m) && (i = e.width / 2 * n, k = e.height / 2 * o, d = Math.PI * (3 * (i + k) - Math.sqrt((3 * i + k) * (i + 3 * k))));
    return d || 0;
  }

  function e(a, c) {
    if (!a) return [0, 0];
    a = b(a), c = c || d(a) + 1;
    var e = i(a),
        f = e.strokeDasharray || "",
        g = parseFloat(e.strokeDashoffset),
        h = f.indexOf(",");
    return 0 > h && (h = f.indexOf(" ")), f = 0 > h ? c : parseFloat(f.substr(0, h)) || 1e-5, f > c && (f = c), [Math.max(0, -g), Math.max(0, f - g)];
  }

  var f,
      g = _gsScope.document,
      h = "undefined" != typeof window ? window : g.defaultView || {
    getComputedStyle: function getComputedStyle() {}
  },
      i = function i(a) {
    return h.getComputedStyle(a);
  },
      j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      k = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge"),
      l = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
  };

  f = _gsScope._gsDefine.plugin({
    propName: "drawSVG",
    API: 2,
    version: "0.2.1",
    global: !0,
    overwriteProps: ["drawSVG"],
    init: function init(a, b, f, g) {
      if (!a.getBBox) return !1;
      var h,
          j,
          l,
          m,
          n = d(a) + 1;
      return this._style = a.style, this._target = a, "function" == typeof b && (b = b(g, a)), b === !0 || "true" === b ? b = "0 100%" : b ? -1 === (b + "").indexOf(" ") && (b = "0 " + b) : b = "0 0", h = e(a, n), j = c(b, n, h[0]), this._length = n + 10, 0 === h[0] && 0 === j[0] ? (l = Math.max(1e-5, j[1] - n), this._dash = n + l, this._offset = n - h[1] + l, this._offsetPT = this._addTween(this, "_offset", this._offset, n - j[1] + l, "drawSVG")) : (this._dash = h[1] - h[0] || 1e-6, this._offset = -h[0], this._dashPT = this._addTween(this, "_dash", this._dash, j[1] - j[0] || 1e-5, "drawSVG"), this._offsetPT = this._addTween(this, "_offset", this._offset, -j[0], "drawSVG")), k && (m = i(a), m.strokeLinecap !== m.strokeLinejoin && (j = parseFloat(m.strokeMiterlimit), this._addTween(a.style, "strokeMiterlimit", j, j + 1e-4, "strokeMiterlimit"))), this._live = "non-scaling-stroke" === a.getAttribute("vector-effect") || -1 !== (b + "").indexOf("live"), !0;
    },
    set: function set(a) {
      if (this._firstPT) {
        if (this._live) {
          var b,
              c = d(this._target) + 11;
          c !== this._length && (b = c / this._length, this._length = c, this._offsetPT.s *= b, this._offsetPT.c *= b, this._dashPT ? (this._dashPT.s *= b, this._dashPT.c *= b) : this._dash *= b);
        }

        this._super.setRatio.call(this, a), this._style.strokeDashoffset = this._offset, 1 === a || 0 === a ? this._style.strokeDasharray = this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._style.strokeDasharray = this._dash + "px," + this._length + "px";
      }
    }
  }), f.getLength = d, f.getPosition = e;
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

   true && module.exports ? (__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../TweenLite.min.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), module.exports = b()) :  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'TweenLite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}("DrawSVGPlugin");
/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  var a = Math.PI / 180,
      b = 180 / Math.PI,
      c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      e = /(^[#\.][a-z]|[a-y][a-z])/gi,
      f = /[achlmqstvz]/gi,
      g = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      h = _gsScope._gsDefine.globals.TweenLite,
      i = function i(a) {
    _gsScope.console && console.log(a);
  },
      j = function j(b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j = Math.ceil(Math.abs(c) / 90),
        k = 0,
        l = [];

    for (b *= a, c *= a, d = c / j, e = 4 / 3 * Math.sin(d / 2) / (1 + Math.cos(d / 2)), i = 0; j > i; i++) {
      f = b + i * d, g = Math.cos(f), h = Math.sin(f), l[k++] = g - e * h, l[k++] = h + e * g, f += d, g = Math.cos(f), h = Math.sin(f), l[k++] = g + e * h, l[k++] = h - e * g, l[k++] = g, l[k++] = h;
    }

    return l;
  },
      k = function k(c, d, e, f, g, h, i, _k, l) {
    if (c !== _k || d !== l) {
      e = Math.abs(e), f = Math.abs(f);
      var m = g % 360 * a,
          n = Math.cos(m),
          o = Math.sin(m),
          p = (c - _k) / 2,
          q = (d - l) / 2,
          r = n * p + o * q,
          s = -o * p + n * q,
          t = e * e,
          u = f * f,
          v = r * r,
          w = s * s,
          x = v / t + w / u;
      x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f);
      var y = h === i ? -1 : 1,
          z = (t * u - t * w - u * v) / (t * w + u * v);
      0 > z && (z = 0);
      var A = y * Math.sqrt(z),
          B = A * (e * s / f),
          C = A * -(f * r / e),
          D = (c + _k) / 2,
          E = (d + l) / 2,
          F = D + (n * B - o * C),
          G = E + (o * B + n * C),
          H = (r - B) / e,
          I = (s - C) / f,
          J = (-r - B) / e,
          K = (-s - C) / f,
          L = Math.sqrt(H * H + I * I),
          M = H;
      y = 0 > I ? -1 : 1;
      var N = y * Math.acos(M / L) * b;
      L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1;
      var O = y * Math.acos(M / L) * b;
      !i && O > 0 ? O -= 360 : i && 0 > O && (O += 360), O %= 360, N %= 360;
      var P,
          Q,
          R,
          S = j(N, O),
          T = n * e,
          U = o * e,
          V = o * -f,
          W = n * f,
          X = S.length - 2;

      for (P = 0; X > P; P += 2) {
        Q = S[P], R = S[P + 1], S[P] = Q * T + R * V + F, S[P + 1] = Q * U + R * W + G;
      }

      return S[S.length - 2] = _k, S[S.length - 1] = l, S;
    }
  },
      l = function l(a) {
    var b,
        d,
        e,
        f,
        h,
        j,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = (a + "").replace(g, function (a) {
      var b = +a;
      return 1e-4 > b && b > -1e-4 ? 0 : b;
    }).match(c) || [],
        t = [],
        u = 0,
        v = 0,
        w = s.length,
        x = 2,
        y = 0;
    if (!a || !isNaN(s[0]) || isNaN(s[1])) return i("ERROR: malformed path data: " + a), t;

    for (b = 0; w > b; b++) {
      if (r = h, isNaN(s[b]) ? (h = s[b].toUpperCase(), j = h !== s[b]) : b--, e = +s[b + 1], f = +s[b + 2], j && (e += u, f += v), 0 === b && (m = e, n = f), "M" === h) l && l.length < 8 && (t.length -= 1, x = 0), u = m = e, v = n = f, l = [e, f], y += x, x = 2, t.push(l), b += 2, h = "L";else if ("C" === h) l || (l = [0, 0]), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u + 1 * s[b + 3], l[x++] = v + 1 * s[b + 4], l[x++] = u += 1 * s[b + 5], l[x++] = v += 1 * s[b + 6], b += 6;else if ("S" === h) "C" === r || "S" === r ? (o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p) : (l[x++] = u, l[x++] = v), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u += 1 * s[b + 3], l[x++] = v += 1 * s[b + 4], b += 4;else if ("Q" === h) o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, j || (u = v = 0), u += 1 * s[b + 3], v += 1 * s[b + 4], o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, l[x++] = u, l[x++] = v, b += 4;else if ("T" === h) o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p, o = u + 1.5 * o - e, p = v + 1.5 * p - f, l[x++] = e + 2 * o / 3, l[x++] = f + 2 * p / 3, l[x++] = u = e, l[x++] = v = f, b += 2;else if ("H" === h) f = v, l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = u = e, l[x++] = f, b += 1;else if ("V" === h) f = e, e = u, j && (f += v - u), l[x++] = e, l[x++] = v + (f - v) / 3, l[x++] = e, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = v = f, b += 1;else if ("L" === h || "Z" === h) "Z" === h && (e = m, f = n, l.closed = !0), ("L" === h || Math.abs(u - e) > .5 || Math.abs(v - f) > .5) && (l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = f, "L" === h && (b += 2)), u = e, v = f;else if ("A" === h) {
        if (q = k(u, v, 1 * s[b + 1], 1 * s[b + 2], 1 * s[b + 3], 1 * s[b + 4], 1 * s[b + 5], (j ? u : 0) + 1 * s[b + 6], (j ? v : 0) + 1 * s[b + 7])) for (d = 0; d < q.length; d++) {
          l[x++] = q[d];
        }
        u = l[x - 2], v = l[x - 1], b += 7;
      } else i("Error: malformed path data: " + a);
    }

    return t.totalPoints = y + x, t;
  },
      m = function m(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = 0,
        r = .999999,
        s = a.length,
        t = b / ((s - 2) / 6);

    for (o = 2; s > o; o += 6) {
      for (q += t; q > r;) {
        c = a[o - 2], d = a[o - 1], e = a[o], f = a[o + 1], g = a[o + 2], h = a[o + 3], i = a[o + 4], j = a[o + 5], p = 1 / (Math.floor(q) + 1), k = c + (e - c) * p, m = e + (g - e) * p, k += (m - k) * p, m += (g + (i - g) * p - m) * p, l = d + (f - d) * p, n = f + (h - f) * p, l += (n - l) * p, n += (h + (j - h) * p - n) * p, a.splice(o, 4, c + (e - c) * p, d + (f - d) * p, k, l, k + (m - k) * p, l + (n - l) * p, m, n, g + (i - g) * p, h + (j - h) * p), o += 6, s += 6, q--;
      }
    }

    return a;
  },
      n = function n(a) {
    var b,
        c,
        d,
        e,
        f = "",
        g = a.length,
        h = 100;

    for (c = 0; g > c; c++) {
      for (e = a[c], f += "M" + e[0] + "," + e[1] + " C", b = e.length, d = 2; b > d; d++) {
        f += (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d] * h | 0) / h + " ";
      }

      e.closed && (f += "z");
    }

    return f;
  },
      o = function o(a) {
    for (var b = [], c = a.length - 1, d = 0; --c > -1;) {
      b[d++] = a[c], b[d++] = a[c + 1], c--;
    }

    for (c = 0; d > c; c++) {
      a[c] = b[c];
    }

    a.reversed = a.reversed ? !1 : !0;
  },
      p = function p(a) {
    var b,
        c = a.length,
        d = 0,
        e = 0;

    for (b = 0; c > b; b++) {
      d += a[b++], e += a[b];
    }

    return [d / (c / 2), e / (c / 2)];
  },
      q = function q(a) {
    var b,
        c,
        d,
        e = a.length,
        f = a[0],
        g = f,
        h = a[1],
        i = h;

    for (d = 6; e > d; d += 6) {
      b = a[d], c = a[d + 1], b > f ? f = b : g > b && (g = b), c > h ? h = c : i > c && (i = c);
    }

    return a.centerX = (f + g) / 2, a.centerY = (h + i) / 2, a.size = (f - g) * (h - i);
  },
      r = function r(a) {
    for (var b, c, d, e, f, g = a.length, h = a[0][0], i = h, j = a[0][1], k = j; --g > -1;) {
      for (f = a[g], b = f.length, e = 6; b > e; e += 6) {
        c = f[e], d = f[e + 1], c > h ? h = c : i > c && (i = c), d > j ? j = d : k > d && (k = d);
      }
    }

    return a.centerX = (h + i) / 2, a.centerY = (j + k) / 2, a.size = (h - i) * (j - k);
  },
      s = function s(a, b) {
    return b.length - a.length;
  },
      t = function t(a, b) {
    var c = a.size || q(a),
        d = b.size || q(b);
    return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c;
  },
      u = function u(a, b) {
    var c,
        d,
        e = a.slice(0),
        f = a.length,
        g = f - 2;

    for (b = 0 | b, c = 0; f > c; c++) {
      d = (c + b) % g, a[c++] = e[d], a[c] = e[d + 1];
    }
  },
      v = function v(a, b, c, d, e) {
    var f,
        g,
        h,
        i,
        j = a.length,
        k = 0,
        l = j - 2;

    for (c *= 6, g = 0; j > g; g += 6) {
      f = (g + c) % l, i = a[f] - (b[g] - d), h = a[f + 1] - (b[g + 1] - e), k += Math.sqrt(h * h + i * i);
    }

    return k;
  },
      w = function w(a, b, c) {
    var d,
        e,
        f,
        g = a.length,
        h = p(a),
        i = p(b),
        j = i[0] - h[0],
        k = i[1] - h[1],
        l = v(a, b, 0, j, k),
        m = 0;

    for (f = 6; g > f; f += 6) {
      e = v(a, b, f / 6, j, k), l > e && (l = e, m = f);
    }

    if (c) for (d = a.slice(0), o(d), f = 6; g > f; f += 6) {
      e = v(d, b, f / 6, j, k), l > e && (l = e, m = -f);
    }
    return m / 6;
  },
      x = function x(a, b, c) {
    for (var d, e, f, g, h, i, j = a.length, k = 99999999999, l = 0, m = 0; --j > -1;) {
      for (d = a[j], i = d.length, h = 0; i > h; h += 6) {
        e = d[h] - b, f = d[h + 1] - c, g = Math.sqrt(e * e + f * f), k > g && (k = g, l = d[h], m = d[h + 1]);
      }
    }

    return [l, m];
  },
      y = function y(a, b, c, d, e, f) {
    var g,
        h,
        i,
        j,
        k,
        l = b.length,
        m = 0,
        n = Math.min(a.size || q(a), b[c].size || q(b[c])) * d,
        o = 999999999999,
        p = a.centerX + e,
        r = a.centerY + f;

    for (h = c; l > h && (g = b[h].size || q(b[h]), !(n > g)); h++) {
      i = b[h].centerX - p, j = b[h].centerY - r, k = Math.sqrt(i * i + j * j), o > k && (m = h, o = k);
    }

    return k = b[m], b.splice(m, 1), k;
  },
      z = function z(a, b, c, d) {
    var e,
        f,
        g,
        h,
        j,
        k,
        l,
        n = b.length - a.length,
        p = n > 0 ? b : a,
        v = n > 0 ? a : b,
        z = 0,
        A = "complexity" === d ? s : t,
        B = "position" === d ? 0 : "number" == typeof d ? d : .8,
        C = v.length,
        D = "object" == _typeof(c) && c.push ? c.slice(0) : [c],
        E = "reverse" === D[0] || D[0] < 0,
        F = "log" === c;

    if (v[0]) {
      if (p.length > 1 && (a.sort(A), b.sort(A), k = p.size || r(p), k = v.size || r(v), k = p.centerX - v.centerX, l = p.centerY - v.centerY, A === t)) for (C = 0; C < v.length; C++) {
        p.splice(C, 0, y(v[C], p, C, B, k, l));
      }
      if (n) for (0 > n && (n = -n), p[0].length > v[0].length && m(v[0], (p[0].length - v[0].length) / 6 | 0), C = v.length; n > z;) {
        h = p[C].size || q(p[C]), g = x(v, p[C].centerX, p[C].centerY), h = g[0], j = g[1], v[C++] = [h, j, h, j, h, j, h, j], v.totalPoints += 8, z++;
      }

      for (C = 0; C < a.length; C++) {
        e = b[C], f = a[C], n = e.length - f.length, 0 > n ? m(e, -n / 6 | 0) : n > 0 && m(f, n / 6 | 0), E && !f.reversed && o(f), c = D[C] || 0 === D[C] ? D[C] : "auto", c && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? "auto" === c || "log" === c ? (D[C] = c = w(f, e, 0 === C), 0 > c && (E = !0, o(f), c = -c), u(f, 6 * c)) : "reverse" !== c && (C && 0 > c && o(f), u(f, 6 * (0 > c ? -c : c))) : !E && ("auto" === c && Math.abs(e[0] - f[0]) + Math.abs(e[1] - f[1]) + Math.abs(e[e.length - 2] - f[f.length - 2]) + Math.abs(e[e.length - 1] - f[f.length - 1]) > Math.abs(e[0] - f[f.length - 2]) + Math.abs(e[1] - f[f.length - 1]) + Math.abs(e[e.length - 2] - f[0]) + Math.abs(e[e.length - 1] - f[1]) || c % 2) ? (o(f), D[C] = -1, E = !0) : "auto" === c ? D[C] = 0 : "reverse" === c && (D[C] = -1), f.closed !== e.closed && (f.closed = e.closed = !1));
      }

      return F && i("shapeIndex:[" + D.join(",") + "]"), D;
    }
  },
      A = function A(a, b, c, d) {
    var e = l(a[0]),
        f = l(a[1]);
    z(e, f, b || 0 === b ? b : "auto", c) && (a[0] = n(e), a[1] = n(f), ("log" === d || d === !0) && i('precompile:["' + a[0] + '","' + a[1] + '"]'));
  },
      B = function B(a, b, c) {
    return b || c || a || 0 === a ? function (d) {
      A(d, a, b, c);
    } : A;
  },
      C = function C(a, b) {
    if (!b) return a;
    var c,
        e,
        f,
        g = a.match(d) || [],
        h = g.length,
        i = "";

    for ("reverse" === b ? (e = h - 1, c = -2) : (e = (2 * (parseInt(b, 10) || 0) + 1 + 100 * h) % h, c = 2), f = 0; h > f; f += 2) {
      i += g[e - 1] + "," + g[e] + " ", e = (e + c) % h;
    }

    return i;
  },
      D = function D(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = 0,
        k = parseFloat(a[0]),
        l = parseFloat(a[1]),
        m = k + "," + l + " ",
        n = .999999;

    for (e = a.length, c = .5 * b / (.5 * e - 1), d = 0; e - 2 > d; d += 2) {
      if (j += c, h = parseFloat(a[d + 2]), i = parseFloat(a[d + 3]), j > n) for (g = 1 / (Math.floor(j) + 1), f = 1; j > n;) {
        m += (k + (h - k) * g * f).toFixed(2) + "," + (l + (i - l) * g * f).toFixed(2) + " ", j--, f++;
      }
      m += h + "," + i + " ", k = h, l = i;
    }

    return m;
  },
      E = function E(a) {
    var b = a[0].match(d) || [],
        c = a[1].match(d) || [],
        e = c.length - b.length;
    e > 0 ? a[0] = D(b, e) : a[1] = D(c, -e);
  },
      F = function F(a) {
    return isNaN(a) ? E : function (b) {
      E(b), b[1] = C(b[1], parseInt(a, 10));
    };
  },
      G = function G(a, b) {
    var c,
        d = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
        e = Array.prototype.slice.call(a.attributes),
        f = e.length;

    for (b = "," + b + ","; --f > -1;) {
      c = e[f].nodeName.toLowerCase(), -1 === b.indexOf("," + c + ",") && d.setAttributeNS(null, c, e[f].nodeValue);
    }

    return d;
  },
      H = function H(a, b) {
    var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A = a.tagName.toLowerCase(),
        B = .552284749831;
    return "path" !== A && a.getBBox ? (i = G(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === A ? (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, e = +a.getAttribute("x") || 0, f = +a.getAttribute("y") || 0, o = (+a.getAttribute("width") || 0) - 2 * g, p = (+a.getAttribute("height") || 0) - 2 * h, g || h ? (q = e + g * (1 - B), r = e + g, s = r + o, t = s + g * B, u = s + g, v = f + h * (1 - B), w = f + h, x = w + p, y = x + h * B, z = x + h, c = "M" + u + "," + w + " V" + x + " C" + [u, y, t, z, s, z, s - (s - r) / 3, z, r + (s - r) / 3, z, r, z, q, z, e, y, e, x, e, x - (x - w) / 3, e, w + (x - w) / 3, e, w, e, v, q, f, r, f, r + (s - r) / 3, f, s - (s - r) / 3, f, s, f, t, f, u, v, u, w].join(",") + "z") : c = "M" + (e + o) + "," + f + " v" + p + " h" + -o + " v" + -p + " h" + o + "z") : "circle" === A || "ellipse" === A ? ("circle" === A ? (g = h = +a.getAttribute("r") || 0, k = g * B) : (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, k = h * B), e = +a.getAttribute("cx") || 0, f = +a.getAttribute("cy") || 0, j = g * B, c = "M" + (e + g) + "," + f + " C" + [e + g, f + k, e + j, f + h, e, f + h, e - j, f + h, e - g, f + k, e - g, f, e - g, f - k, e - j, f - h, e, f - h, e + j, f - h, e + g, f - k, e + g, f].join(",") + "z") : "line" === A ? c = n(l("M" + (a.getAttribute("x1") || 0) + "," + (a.getAttribute("y1") || 0) + " L" + (a.getAttribute("x2") || 0) + "," + (a.getAttribute("y2") || 0))) : ("polyline" === A || "polygon" === A) && (m = (a.getAttribute("points") + "").match(d) || [], e = m.shift(), f = m.shift(), c = "M" + e + "," + f + " L" + m.join(","), "polygon" === A && (c += "," + e + "," + f + "z")), i.setAttribute("d", c), b && a.parentNode && (a.parentNode.insertBefore(i, a), a.parentNode.removeChild(a)), i) : a;
  },
      I = function I(a, b, c) {
    var f,
        g,
        j = "string" == typeof a;
    return (!j || e.test(a) || (a.match(d) || []).length < 3) && (f = j ? h.selector(a) : a && a[0] ? a : [a], f && f[0] ? (f = f[0], g = f.nodeName.toUpperCase(), b && "PATH" !== g && (f = H(f, !1), g = "PATH"), a = f.getAttribute("PATH" === g ? "d" : "points") || "", f === c && (a = f.getAttributeNS(null, "data-original") || a)) : (i("WARNING: invalid morph to: " + a), a = !1)), a;
  },
      J = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
      K = _gsScope._gsDefine.plugin({
    propName: "morphSVG",
    API: 2,
    global: !0,
    version: "0.8.11",
    init: function init(a, b, c, d) {
      var e, g, h, j, k;
      return "function" != typeof a.setAttribute ? !1 : ("function" == typeof b && (b = b(d, a)), e = a.nodeName.toUpperCase(), k = "POLYLINE" === e || "POLYGON" === e, "PATH" === e || k ? (g = "PATH" === e ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = {
        shape: b
      }), j = I(b.shape || b.d || b.points || "", "d" === g, a), k && f.test(j) ? (i("WARNING: a <" + e + "> cannot accept path data. " + J), !1) : (j && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(g)), h = this._addTween(a, "setAttribute", a.getAttribute(g) + "", j + "", "morphSVG", !1, g, "object" == _typeof(b.precompile) ? function (a) {
        a[0] = b.precompile[0], a[1] = b.precompile[1];
      } : "d" === g ? B(b.shapeIndex, b.map || K.defaultMap, b.precompile) : F(b.shapeIndex)), h && (this._overwriteProps.push("morphSVG"), h.end = j, h.endProp = g)), !0)) : (i("WARNING: cannot morph a <" + e + "> SVG element. " + J), !1));
    },
    set: function set(a) {
      var b;
      if (this._super.setRatio.call(this, a), 1 === a) for (b = this._firstPT; b;) {
        b.end && this._target.setAttribute(b.endProp, b.end), b = b._next;
      }
    }
  });

  K.pathFilter = A, K.pointsFilter = E, K.subdivideRawBezier = m, K.defaultMap = "size", K.pathDataToRawBezier = function (a) {
    return l(I(a, !0));
  }, K.equalizeSegmentQuantity = z, K.convertToPath = function (a, b) {
    "string" == typeof a && (a = h.selector(a));

    for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;) {
      c[d] = H(c[d], b !== !1);
    }

    return c;
  }, K.pathDataToBezier = function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        i,
        j,
        k,
        m = l(I(a, !0))[0] || [],
        n = 0;
    if (b = b || {}, k = b.align || b.relative, f = b.matrix || [1, 0, 0, 1, 0, 0], g = b.offsetX || 0, i = b.offsetY || 0, "relative" === k || k === !0 ? (g -= m[0] * f[0] + m[1] * f[2], i -= m[0] * f[1] + m[1] * f[3], n = "+=") : (g += f[4], i += f[5], k && (k = "string" == typeof k ? h.selector(k) : k && k[0] ? k : [k], k && k[0] && (j = k[0].getBBox() || {
      x: 0,
      y: 0
    }, g -= j.x, i -= j.y))), c = [], e = m.length, f && "1,0,0,1,0,0" !== f.join(",")) for (d = 0; e > d; d += 2) {
      c.push({
        x: n + (m[d] * f[0] + m[d + 1] * f[2] + g),
        y: n + (m[d] * f[1] + m[d + 1] * f[3] + i)
      });
    } else for (d = 0; e > d; d += 2) {
      c.push({
        x: n + (m[d] + g),
        y: n + (m[d + 1] + i)
      });
    }
    return c;
  };
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

   true && module.exports ? (__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../TweenLite.min.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), module.exports = b()) :  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'TweenLite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}("MorphSVGPlugin");
/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */

!function (a, b, c) {
   true && module.exports ? module.exports = c() : a[b] = c();
}(this, "verge", function () {
  function a() {
    return {
      width: k(),
      height: l()
    };
  }

  function b(a, b) {
    var c = {};
    return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c;
  }

  function c(a, c) {
    return !(!(a = a && !a.nodeType ? a[0] : a) || 1 !== a.nodeType) && b(a.getBoundingClientRect(), c);
  }

  function d(b) {
    b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
    var d = b.height,
        e = b.width;
    return d = "function" == typeof d ? d.call(b) : d, (e = "function" == typeof e ? e.call(b) : e) / d;
  }

  var e = {},
      f = "undefined" != typeof window && window,
      g = "undefined" != typeof document && document,
      h = g && g.documentElement,
      i = f.matchMedia || f.msMatchMedia,
      j = i ? function (a) {
    return !!i.call(f, a).matches;
  } : function () {
    return !1;
  },
      k = e.viewportW = function () {
    var a = h.clientWidth,
        b = f.innerWidth;
    return a < b ? b : a;
  },
      l = e.viewportH = function () {
    var a = h.clientHeight,
        b = f.innerHeight;
    return a < b ? b : a;
  };

  return e.mq = j, e.matchMedia = i ? function () {
    return i.apply(f, arguments);
  } : function () {
    return {};
  }, e.viewport = a, e.scrollX = function () {
    return f.pageXOffset || h.scrollLeft;
  }, e.scrollY = function () {
    return f.pageYOffset || h.scrollTop;
  }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) {
    var d = c(a, b);
    return !!d && d.right >= 0 && d.left <= k();
  }, e.inY = function (a, b) {
    var d = c(a, b);
    return !!d && d.bottom >= 0 && d.top <= l();
  }, e.inViewport = function (a, b) {
    var d = c(a, b);
    return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k();
  }, e;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/app-assets/js/core/app-menu.js":
/*!**************************************************!*\
  !*** ./resources/app-assets/js/core/app-menu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Frest HTML Admin Template
  Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  $.app = $.app || {};
  var $body = $('body');
  var $window = $(window);
  var menuWrapper_el = $('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = $('div[data-menu="menu-wrapper"]').attr('class'); // Main menu

  $.app.menu = {
    expanded: null,
    collapsed: null,
    hidden: null,
    container: null,
    horizontalMenu: false,
    manualScroller: {
      obj: null,
      init: function init() {
        var scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark';
        this.obj = new PerfectScrollbar(".main-menu-content", {
          suppressScrollX: true,
          wheelPropagation: false
        });
      },
      update: function update() {
        if (this.obj) {
          // Scroll to currently active menu on page load if data-scroll-to-active is true
          if ($('.main-menu').data('scroll-to-active') === true) {
            var activeEl, menu, activeElHeight;
            activeEl = document.querySelector('.main-menu-content li.active');

            if ($body.hasClass('menu-collapsed')) {
              if ($('.main-menu-content li.sidebar-group-active').length) {
                activeEl = document.querySelector('.main-menu-content li.sidebar-group-active');
              }
            } else {
              menu = document.querySelector('.main-menu-content');

              if (activeEl) {
                activeElHeight = activeEl.getBoundingClientRect().top + menu.scrollTop;
              } // If active element's top position is less than 2/3 (66%) of menu height than do not scroll


              if (activeElHeight > parseInt(menu.clientHeight * 2 / 3)) {
                var start = menu.scrollTop,
                    change = activeElHeight - start - parseInt(menu.clientHeight / 2);
              }
            }

            setTimeout(function () {
              $.app.menu.container.stop().animate({
                scrollTop: change
              }, 300);
              $('.main-menu').data('scroll-to-active', 'false');
            }, 300);
          }

          this.obj.update();
        }
      },
      enable: function enable() {
        if (!$('.main-menu-content').hasClass('ps')) {
          this.init();
        }
      },
      disable: function disable() {
        if (this.obj) {
          this.obj.destroy();
        }
      },
      updateHeight: function updateHeight() {
        if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern' || $body.data('menu') == 'vertical-overlay-menu') && $('.main-menu').hasClass('menu-fixed')) {
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
          this.update();
        }
      }
    },
    init: function init(compactMenu) {
      if ($('.main-menu-content').length > 0) {
        this.container = $('.main-menu-content');
        var menuObj = this;
        var defMenu = '';

        if (compactMenu === true) {
          defMenu = 'collapsed';
        }

        if ($body.data('menu') == 'vertical-menu-modern') {
          var menuToggle = '';

          if (menuToggle === "false") {
            this.change('collapsed');
          } else {
            this.change(defMenu);
          }
        } else {
          this.change(defMenu);
        }
      }
    },
    drillDownMenu: function drillDownMenu(screenSize) {
      if ($('.drilldown-menu').length) {
        if (screenSize == 'sm' || screenSize == 'xs') {
          if ($('#navbar-mobile').attr('aria-expanded') == 'true') {
            $('.drilldown-menu').slidingMenu({
              backLabel: true
            });
          }
        } else {
          $('.drilldown-menu').slidingMenu({
            backLabel: true
          });
        }
      }
    },
    change: function change(defMenu, menuIconColorsObj) {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();
      var menuType = $body.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
            if (menuType === 'vertical-overlay-menu') {
              this.hide();
            } else {
              if (defMenu === 'collapsed') this.collapse(defMenu);else this.expand();
            }

            break;

          case 'lg':
            if (menuType === 'vertical-overlay-menu' || menuType === 'vertical-menu-modern' || menuType === 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }

            break;

          case 'md':
          case 'sm':
            this.hide();
            break;

          case 'xs':
            this.hide();
            break;
        }
      } // On the small and extra small screen make them overlay menu


      if (menuType === 'vertical-menu' || menuType === 'vertical-menu-modern') {
        this.toOverlayMenu(currentBreakpoint.name, menuType);
      }

      if ($body.is('.horizontal-layout') && !$body.hasClass('.horizontal-menu-demo')) {
        this.changeMenu(currentBreakpoint.name);
        $('.menu-toggle').removeClass('is-active');
      } // Initialize drill down menu for vertical layouts, for horizontal layouts drilldown menu is intitialized in changemenu function


      if (menuType != 'horizontal-menu') {
        // Drill down menu
        // ------------------------------
        this.drillDownMenu(currentBreakpoint.name);
      } // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------


      if (currentBreakpoint.name == 'xl') {
        $('body[data-open="hover"] .dropdown').on('mouseenter', function () {
          if (!$(this).hasClass('show')) {
            $(this).addClass('show');
          } else {
            $(this).removeClass('show');
          }
        }).on('mouseleave', function (event) {
          $(this).removeClass('show');
        });
        $('body[data-open="hover"] .dropdown a').on('click', function (e) {
          if (menuType == 'horizontal-menu') {
            var $this = $(this);

            if ($this.hasClass('dropdown-toggle')) {
              return false;
            }
          }
        });
      } // Added data attribute brand-center for navbar-brand-center
      // TODO:AJ: Shift this feature in JADE.


      if ($('.header-navbar').hasClass('navbar-brand-center')) {
        $('.header-navbar').attr('data-nav', 'brand-center');
      }

      if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
        $('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      } else {
        $('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      } // Dropdown submenu on small screen on click
      // --------------------------------------------------


      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        if ($(this).siblings('ul.dropdown-menu').length > 0) {
          event.preventDefault();
        }

        event.stopPropagation();
        $(this).parent().siblings().removeClass('show');
        $(this).parent().toggleClass('show');
      }); // Horizontal layout submenu drawer scrollbar

      if (menuType == 'horizontal-menu') {
        $('li.dropdown-submenu').on('mouseenter', function () {
          if (!$(this).parent('.dropdown').hasClass('show')) {
            $(this).removeClass('openLeft');
          }

          var dd = $(this).find('.dropdown-menu');

          if (dd) {
            var pageHeight = $(window).height(),
                // ddTop = dd.offset().top,
            ddTop = $(this).position().top,
                ddLeft = dd.offset().left,
                ddWidth = dd.width(),
                ddHeight = dd.height();

            if (pageHeight - ddTop - ddHeight - 28 < 1) {
              var maxHeight = pageHeight - ddTop - 170;
              $(this).find('.dropdown-menu').css({
                'max-height': maxHeight + 'px',
                'overflow-y': 'auto',
                'overflow-x': 'hidden'
              });
              var menu_content = new PerfectScrollbar('li.dropdown-submenu.show .dropdown-menu', {
                wheelPropagation: false
              });
            } // Add class to horizontal sub menu if screen width is small


            if (ddLeft + ddWidth - (window.innerWidth - 16) >= 0) {
              $(this).addClass('openLeft');
            }
          }
        });
      }
      /********************************************
      *             Searchable Menu               *
      ********************************************/


      function searchMenu(list) {
        var input = $(".menu-search");
        $(input).change(function () {
          var filter = $(this).val();

          if (filter) {
            // Hide Main Navigation Headers
            $('.navigation-header').hide(); // this finds all links in a list that contain the input,
            // and hide the ones not containing the input while showing the ones that do

            $(list).find("li a:not(:Contains(" + filter + "))").hide().parent().hide(); // $(list).find("li a:Contains(" + filter + ")").show().parents('li').show().addClass('open').closest('li').children('a').show();

            var searchFilter = $(list).find("li a:Contains(" + filter + ")");

            if (searchFilter.parent().hasClass('has-sub')) {
              searchFilter.show().parents('li').show().addClass('open').closest('li').children('a').show().children('li').show(); // searchFilter.parents('li').find('li').show().children('a').show();

              if (searchFilter.siblings('ul').length > 0) {
                searchFilter.siblings('ul').children('li').show().children('a').show();
              }
            } else {
              searchFilter.show().parents('li').show().addClass('open').closest('li').children('a').show();
            }
          } else {
            // return to default
            $('.navigation-header').show();
            $(list).find("li a").show().parent().show().removeClass('open');
          }

          $.app.menu.manualScroller.update();
          return false;
        }).keyup(function () {
          // fire the above change event after every letter
          $(this).change();
        });
      }

      if (menuType === 'vertical-menu' || menuType === 'vertical-overlay-menu') {
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function (a, i, m) {
          return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };

        searchMenu($("#main-menu-navigation"));
      }
    },
    transit: function transit(callback1, callback2) {
      var menuObj = this;
      $body.addClass('changing-menu');
      callback1.call(menuObj);

      if ($body.hasClass('vertical-layout')) {
        if ($body.hasClass('menu-open') || $body.hasClass('menu-expanded')) {
          $('.menu-toggle').addClass('is-active'); // Show menu header search when menu is normally visible

          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').show();
            }
          }
        } else {
          $('.menu-toggle').removeClass('is-active'); // Hide menu header search when only menu icons are visible

          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function () {
        callback2.call(menuObj);
        $body.removeClass('changing-menu');
        menuObj.update();
      }, 500);
    },
    open: function open() {
      this.transit(function () {
        $body.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-none').addClass('d-block');
          $('body').css('overflow', 'hidden');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block d-none');
          $('body').css('overflow', 'auto');
        }
      });
    },
    hide: function hide() {
      this.transit(function () {
        $body.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block').addClass('d-none');
          $('body').css('overflow', 'auto');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block d-none');
          $('body').css('overflow', 'auto');
        }
      });
    },
    expand: function expand() {
      if (this.expanded === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.toggle-icon').removeClass('bx bx-circle').addClass('bx bx-disc');
        }

        this.transit(function () {
          $body.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;
          $('.sidenav-overlay').removeClass('d-block d-none');
        }, function () {
          if ($('.main-menu').hasClass('menu-native-scroll') || $body.data('menu') == 'horizontal-menu') {
            this.manualScroller.disable();
          } else {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
          }
        });
      }
    },
    collapse: function collapse(defMenu) {
      if (this.collapsed === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.toggle-icon').removeClass('bx bx-disc').addClass('bx bx-circle');
        }

        this.transit(function () {
          $body.removeClass('menu-expanded').addClass('menu-collapsed');
          this.collapsed = true;
          this.expanded = false;
          $('.content-overlay').removeClass('d-block d-none');
        }, function () {
          if ($body.data('menu') == 'horizontal-menu' && $body.hasClass('vertical-overlay-menu')) {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height()); // this.manualScroller.update();
          }

          if ($body.data('menu') == 'vertical-menu-modern') {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }
        });
      }
    },
    toOverlayMenu: function toOverlayMenu(screen, menuType) {
      var menu = $body.data('menu');

      if (menuType == 'vertical-menu-modern') {
        if (screen == 'lg' || screen == 'md' || screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      } else {
        if (screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      }
    },
    changeMenu: function changeMenu(screen) {
      // Replace menu html
      $('div[data-menu="menu-wrapper"]').html('');
      $('div[data-menu="menu-wrapper"]').html(menuWrapper_el); // Destroy Icons when screen size changes

      $('.menu-livicon').removeLiviconEvo(); // Initialize Menu Icons with configs

      $.each($('.menu-livicon'), function (i) {
        var $this = $(this),
            icon = $this.data('icon'),
            iconStyle = $('#main-menu-navigation').data("icon-style");
        $this.addLiviconEvo({
          name: icon,
          style: iconStyle,
          duration: 0.85,
          strokeWidth: '1.3px',
          eventOn: 'parent',
          strokeColor: menuIconColorsObj.iconStrokeColor,
          solidColor: menuIconColorsObj.iconSolidColor,
          fillColor: menuIconColorsObj.iconFillColor,
          strokeColorAlt: menuIconColorsObj.iconStrokeColorAlt,
          afterAdd: function afterAdd() {
            if (i === $(".main-menu-content .menu-livicon").length - 1) {
              // When hover over any menu item, start animation and stop all other animation
              $(".main-menu-content .nav-item a").on("mouseenter", function () {
                if ($(".main-menu-content .menu-livicon").length) {
                  $(".main-menu-content .menu-livicon").stopLiviconEvo();
                  $(this).find(".menu-livicon").playLiviconEvo();
                }
              });
            }
          }
        });
      });
      var menuWrapper = $('div[data-menu="menu-wrapper"]'),
          menuContainer = $('div[data-menu="menu-container"]'),
          menuNavigation = $('ul[data-menu="menu-navigation"]'),

      /*megaMenu           = $('li[data-menu="megamenu"]'),
      megaMenuCol        = $('li[data-mega-col]'),*/
      dropdownMenu = $('li[data-menu="dropdown"]'),
          dropdownSubMenu = $('li[data-menu="dropdown-submenu"]');

      if (screen === 'xl') {
        // Change body classes
        $body.removeClass('vertical-layout vertical-overlay-menu fixed-navbar').addClass($body.data('menu')); // Remove navbar-fix-top class on large screens

        $('nav.header-navbar').removeClass('fixed-top'); // Change menu wrapper, menu container, menu navigation classes

        menuWrapper.removeClass().addClass(menuWrapperClasses); // Intitialize drill down menu for horizontal layouts
        // --------------------------------------------------

        this.drillDownMenu(screen);
        $('a.dropdown-item.nav-has-children').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
        $('a.dropdown-item.nav-has-parent').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
      } else {
        // Change body classes
        $body.removeClass($body.data('menu')).addClass('vertical-layout vertical-overlay-menu fixed-navbar'); // Add navbar-fix-top class on small screens

        $('nav.header-navbar').addClass('fixed-top'); // Change menu wrapper, menu container, menu navigation classes

        menuWrapper.removeClass().addClass('main-menu menu-fixed menu-shadow');

        if ($body.data('layout') === "dark-layout" || $body.data('layout') === "semi-dark-layout") {
          menuWrapper.addClass('menu-dark');
        } else {
          menuWrapper.addClass('menu-light');
        } // menuContainer.removeClass().addClass('main-menu-content');


        menuNavigation.removeClass().addClass('navigation navigation-main'); // If Dropdown Menu

        dropdownMenu.removeClass('dropdown').addClass('has-sub');
        dropdownMenu.find('a').removeClass('dropdown-toggle nav-link');
        dropdownMenu.children('ul').find('a').removeClass('dropdown-item');
        dropdownMenu.find('ul').removeClass('dropdown-menu');
        dropdownSubMenu.removeClass().addClass('has-sub');
        $.app.nav.init(); // Dropdown submenu on small screen on click
        // --------------------------------------------------

        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent().siblings().removeClass('open');
          $(this).parent().toggleClass('open');
        }); // $('.shadow-bottom').css('display', 'block');
      }

      $(".main-menu-content").find('li.active').parents('li').addClass('sidebar-group-active');

      function updateLivicon(el) {
        el.updateLiviconEvo({
          strokeColor: menuActiveIconColorsObj.iconStrokeColor,
          solidColor: menuActiveIconColorsObj.iconSolidColor,
          fillColor: menuActiveIconColorsObj.iconFillColor,
          strokeColorAlt: menuActiveIconColorsObj.iconStrokeColorAlt
        });
      } // Update Active Menu item Icon with active color


      if ($('.nav-item.active .menu-livicon').length) {
        updateLivicon($('.nav-item.active .menu-livicon'));
      } // Update Active sidebar group menu icon with active ccolor


      if ($(".main-menu-content li.sidebar-group-active .menu-livicon").length) {
        updateLivicon($(".main-menu-content li.sidebar-group-active .menu-livicon"));
      }
    },
    toggle: function toggle() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      var collapsed = this.collapsed;
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = $body.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu') {
              this.open();
            } else {
              this.expand();
            }
          }

          break;

        case 'lg':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.open();
            } else {
              this.expand();
            }
          }

          break;

        case 'md':
        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;

        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;
      } // Re-init sliding menu to update width


      this.drillDownMenu(currentBreakpoint.name);
    },
    update: function update() {
      this.manualScroller.update();
    },
    reset: function reset() {
      this.expanded = false;
      this.collapsed = false;
      this.hidden = false;
      $body.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    }
  }; // Navigation Menu

  $.app.nav = {
    container: $('.navigation-main'),
    initialized: false,
    navItem: $('.navigation-main').find('li').not('.navigation-category'),
    config: {
      speed: 300
    },
    init: function init(config) {
      this.initialized = true; // Set to true when initialized

      $.extend(this.config, config);
      this.bind_events();
    },
    bind_events: function bind_events() {
      var menuObj = this;
      $('.navigation-main').on('mouseenter.app.menu', 'li', function () {
        var $this = $(this);
        $('.hover', '.navigation-main').removeClass('hover');

        if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove(); // Title

          var menuTitle = $this.find('span.menu-title').clone(),
              tempTitle,
              tempLink;

          if (!$this.hasClass('has-sub')) {
            tempTitle = $this.find('span.menu-title').text();
            tempLink = $this.children('a').attr('href');

            if (tempTitle !== '') {
              menuTitle = $("<a>");
              menuTitle.attr("href", tempLink);
              menuTitle.attr("title", tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass("menu-title");
            }
          } // menu_header_height = ($('.main-menu-header').length) ? $('.main-menu-header').height() : 0,
          // fromTop = menu_header_height + $this.position().top + parseInt($this.css( "border-top" ),10);


          var fromTop;

          if ($this.css("border-top")) {
            fromTop = $this.position().top + parseInt($this.css("border-top"), 10);
          } else {
            fromTop = $this.position().top;
          }

          if ($body.data('menu') !== 'vertical-compact-menu') {
            menuTitle.appendTo('.main-menu-content').css({
              position: 'fixed',
              top: fromTop
            });
          } // Content


          if ($this.hasClass('has-sub') && $this.hasClass('nav-item')) {
            var menuContent = $this.children('ul:first');
            menuObj.adjustSubmenu($this);
          }
        }

        $this.addClass('hover');
      }).on('mouseleave.app.menu', 'li', function () {// $(this).removeClass('hover');
      }).on('active.app.menu', 'li', function (e) {
        $(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function (e) {
        $(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function (e) {
        var $listItem = $(this);
        $listItem.addClass('open');
        menuObj.expand($listItem); // If menu collapsible then do not take any action

        if ($('.main-menu').hasClass('menu-collapsible')) {
          return false;
        } // If menu accordion then close all except clicked once
        else {
            $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
            $listItem.siblings('.open').trigger('close.app.menu');
          }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function (e) {
        var $listItem = $(this);
        $listItem.removeClass('open');
        menuObj.collapse($listItem);
        e.stopPropagation();
      }).on('click.app.menu', 'li', function (e) {
        var $listItem = $(this);

        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
            e.preventDefault();
          } else {
            if ($listItem.has('ul')) {
              if ($listItem.is('.open')) {
                $listItem.trigger('close.app.menu');
              } else {
                $listItem.trigger('open.app.menu');
              }
            } else {
              if (!$listItem.is('.active')) {
                $listItem.siblings('.active').trigger('deactive.app.menu');
                $listItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });
      $('.navbar-header, .main-menu').on('mouseenter', modernMenuExpand).on('mouseleave', modernMenuCollapse);

      function modernMenuExpand() {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.main-menu, .navbar-header').addClass('expanded');

          if ($body.hasClass('menu-collapsed')) {
            if ($('.main-menu li.open').length === 0) {
              $(".main-menu-content").find('li.active').parents('li').addClass('open');
            }

            var $listItem = $('.main-menu li.menu-collapsed-open'),
                $subList = $listItem.children('ul');
            $subList.hide().slideDown(200, function () {
              $(this).css('display', '');
            });
            $listItem.addClass('open').removeClass('menu-collapsed-open'); // $.app.menu.changeLogo('expand');
          }
        }
      }

      function modernMenuCollapse() {
        if ($body.hasClass('menu-collapsed') && $body.data('menu') == 'vertical-menu-modern') {
          setTimeout(function () {
            if ($('.main-menu:hover').length === 0 && $('.navbar-header:hover').length === 0) {
              $('.main-menu, .navbar-header').removeClass('expanded');

              if ($body.hasClass('menu-collapsed')) {
                var $listItem = $('.main-menu li.open'),
                    $subList = $listItem.children('ul');
                $listItem.addClass('menu-collapsed-open');
                $subList.show().slideUp(200, function () {
                  $(this).css('display', '');
                });
                $listItem.removeClass('open'); // $.app.menu.changeLogo();
              }
            }
          }, 1);
        }
      }

      $('.main-menu-content').on('mouseleave', function () {
        if ($body.hasClass('menu-collapsed')) {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();
        }

        $('.hover', '.navigation-main').removeClass('hover');
      }); // If list item has sub menu items then prevent redirection.

      $('.navigation-main li.has-sub > a').on('click', function (e) {
        e.preventDefault();
      });
      $('ul.menu-content').on('click', 'li', function (e) {
        var $listItem = $(this);

        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($listItem.has('ul')) {
            if ($listItem.is('.open')) {
              $listItem.removeClass('open');
              menuObj.collapse($listItem);
            } else {
              $listItem.addClass('open');
              menuObj.expand($listItem); // If menu collapsible then do not take any action

              if ($('.main-menu').hasClass('menu-collapsible')) {
                return false;
              } // If menu accordion then close all except clicked once
              else {
                  $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
                  $listItem.siblings('.open').trigger('close.app.menu');
                }

              e.stopPropagation();
            }
          } else {
            if (!$listItem.is('.active')) {
              $listItem.siblings('.active').trigger('deactive.app.menu');
              $listItem.trigger('active.app.menu');
            }
          }
        }

        e.stopPropagation();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} $menuItem The parent menu item containing the submenu.
     */
    adjustSubmenu: function adjustSubmenu($menuItem) {
      var menuHeaderHeight,
          menutop,
          topPos,
          winHeight,
          bottomOffset,
          subMenuHeight,
          popOutMenuHeight,
          borderWidth,
          scroll_theme,
          $submenu = $menuItem.children('ul:first'),
          ul = $submenu.clone(true);
      menuHeaderHeight = $('.main-menu-header').height();
      menutop = $menuItem.position().top;
      winHeight = $window.height() - $('.header-navbar').height();
      borderWidth = 0;
      subMenuHeight = $submenu.height();

      if (parseInt($menuItem.css("border-top"), 10) > 0) {
        borderWidth = parseInt($menuItem.css("border-top"), 10);
      }

      popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
      scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark';
      topPos = menutop + $menuItem.height() + borderWidth;
      ul.addClass('menu-popout').appendTo('.main-menu-content').css({
        'top': topPos,
        'position': 'fixed',
        'max-height': popOutMenuHeight
      });
      var menu_content = new PerfectScrollbar('.main-menu-content > ul.menu-content', {
        wheelPropagation: false
      });
    },
    collapse: function collapse($listItem, callback) {
      var $subList = $listItem.children('ul');
      $subList.show().slideUp($.app.nav.config.speed, function () {
        $(this).css('display', '');
        $(this).find('> li').removeClass('is-shown');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('collapsed.app.menu');
      });
    },
    expand: function expand($listItem, callback) {
      var $subList = $listItem.children('ul');
      var $children = $subList.children('li').addClass('is-hidden');
      $subList.hide().slideDown($.app.nav.config.speed, function () {
        $(this).css('display', '');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('expanded.app.menu');
      });
      setTimeout(function () {
        $children.addClass('is-shown');
        $children.removeClass('is-hidden');
      }, 0);
    },
    refresh: function refresh() {
      $.app.nav.container.find('.open').removeClass('open');
    }
  };
})(window, document, jQuery);

/***/ }),

/***/ "./resources/app-assets/js/core/app.js":
/*!*********************************************!*\
  !*** ./resources/app-assets/js/core/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Frest HTML Admin Template
  Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
;

(function (window, document, $) {
  "use strict";

  var $html = $("html");
  var $body = $("body");
  var $danger = "#FF5B5C";
  var $primary = "#5A8DEE";
  var $primary_lighten = "#e7edf3";
  var $warning = "#FDAC41";
  var $textcolor = "#304156";

  function scrollTopFn() {
    var $scrollTop = $(window).scrollTop();

    if ($scrollTop > 60) {
      $("body").addClass("navbar-scrolled");
    } else {
      $("body").removeClass("navbar-scrolled");
    }

    if ($scrollTop > 20) {
      $("body").addClass("page-scrolled");
    } else {
      $("body").removeClass("page-scrolled");
    }
  }

  $(window).scroll(function () {
    scrollTopFn();
  });
  $(window).on("load", function () {
    var rtl;
    var compactMenu = false; // Set it to true, if you want default menu to be compact

    if ($body.hasClass("menu-collapsed")) {
      compactMenu = true;
    }

    if ($("html").data("textdirection") == "rtl") {
      rtl = true;
    }

    setTimeout(function () {
      $html.removeClass("loading").addClass("loaded");
    }, 1200);
    $.app.menu.init(compactMenu); // Livioncs are initialized for vertical menu

    $.each($(".menu-livicon"), function (i) {
      var $this = $(this),
          icon = $this.data("icon"),
          iconStyle = $("#main-menu-navigation").data("icon-style");
      $this.addLiviconEvo({
        name: icon,
        style: iconStyle,
        duration: 0.85,
        strokeWidth: "1.3px",
        eventOn: "none",
        strokeColor: menuIconColorsObj.iconStrokeColor,
        solidColor: menuIconColorsObj.iconSolidColor,
        fillColor: menuIconColorsObj.iconFillColor,
        strokeColorAlt: menuIconColorsObj.iconStrokeColorAlt,
        afterAdd: function afterAdd() {
          if (i === $(".main-menu-content .menu-livicon").length - 1) {
            // When hover over any menu item, start animation and stop all other animation
            $(".main-menu-content .nav-item a").on("mouseenter", function () {
              if ($(".main-menu-content .menu-livicon").length) {
                $(".main-menu-content .menu-livicon").stopLiviconEvo();
                $(this).find(".menu-livicon").playLiviconEvo();
              }
            });
          }
        }
      });
    });

    function updateLivicon(el) {
      el.updateLiviconEvo({
        strokeColor: menuActiveIconColorsObj.iconStrokeColor,
        solidColor: menuActiveIconColorsObj.iconSolidColor,
        fillColor: menuActiveIconColorsObj.iconFillColor,
        strokeColorAlt: menuActiveIconColorsObj.iconStrokeColorAlt
      });
    } // Navigation configurations


    var config = {
      speed: 300 // set speed to expand / collpase menu

    };

    if ($.app.nav.initialized === false) {
      $.app.nav.init(config);
    }

    Unison.on("change", function (bp) {
      $.app.menu.change(compactMenu);
    }); // Tooltip Initialization

    $('[data-toggle="tooltip"]').tooltip({
      container: "body"
    }); // Tooltip For Horizontal Layout - Bookmark Icons

    /* tooltip-horizontal-bookmark - Add Custom Class */

    $(".tooltip-horizontal-bookmark").tooltip({
      customClass: "tooltip-horizontal-bookmark"
    }); // Top Navbars - Hide on Scroll

    if ($(".navbar-hide-on-scroll").length > 0) {
      $(".navbar-hide-on-scroll.fixed-top").headroom({
        offset: 205,
        tolerance: 5,
        classes: {
          // when element is initialised
          initial: "headroom",
          // when scrolling up
          pinned: "headroom--pinned-top",
          // when scrolling down
          unpinned: "headroom--unpinned-top"
        }
      }); // Bottom Navbars - Hide on Scroll

      $(".navbar-hide-on-scroll.fixed-bottom").headroom({
        offset: 205,
        tolerance: 5,
        classes: {
          // when element is initialised
          initial: "headroom",
          // when scrolling up
          pinned: "headroom--pinned-bottom",
          // when scrolling down
          unpinned: "headroom--unpinned-bottom"
        }
      });
    } // Collapsible Card


    $('a[data-action="collapse"]').on("click", function (e) {
      e.preventDefault();
      $(this).closest(".card").children(".card-content").collapse("toggle"); // Adding bottom padding on card collapse

      $(this).closest(".card").children(".card-header").css("padding-bottom", "1.5rem");
      $(this).closest(".card").find('[data-action="collapse"]').toggleClass("rotate");
    }); // Toggle fullscreen

    $('a[data-action="expand"]').on("click", function (e) {
      e.preventDefault();
      $(this).closest(".card").find('[data-action="expand"] i').toggleClass("bx-fullscreen bx-exit-fullscreen");
      $(this).closest(".card").toggleClass("card-fullscreen");
    }); //  Notifications & messages scrollable

    $(".scrollable-container").each(function () {
      var scrollable_container = new PerfectScrollbar($(this)[0], {
        wheelPropagation: false
      });
    }); // Reload Card

    $('a[data-action="reload"]').on("click", function () {
      var block_ele = $(this).closest(".card").find(".card-content");
      var reloadActionOverlay;

      if ($body.hasClass("dark-layout")) {
        var reloadActionOverlay = "#10163a";
      } else {
        var reloadActionOverlay = "#fff";
      } // Block Element


      block_ele.block({
        message: '<div class="bx bx-sync icon-spin font-medium-2 text-primary"></div>',
        timeout: 2000,
        //unblock after 2 seconds
        overlayCSS: {
          backgroundColor: reloadActionOverlay,
          cursor: "wait"
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "none"
        }
      });
    }); // Close Card

    $('a[data-action="close"]').on("click", function () {
      $(this).closest(".card").removeClass().slideUp("fast");
    }); // Match the height of each card in a row

    setTimeout(function () {
      $(".row.match-height").each(function () {
        $(this).find(".card").not(".card .card").matchHeight(); // Not .card .card prevents collapsible cards from taking height
      });
    }, 500);
    $('.card .heading-elements a[data-action="collapse"]').on("click", function () {
      var $this = $(this),
          card = $this.closest(".card");
      var cardHeight;

      if (parseInt(card[0].style.height, 10) > 0) {
        cardHeight = card.css("height");
        card.css("height", "").attr("data-height", cardHeight);
      } else {
        if (card.data("height")) {
          cardHeight = card.data("height");
          card.css("height", cardHeight).attr("data-height", "");
        }
      }
    }); // Add sidebar group active class to active menu

    $(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active"); // Update Active Menu item Icon with active color

    if ($(".nav-item.active .menu-livicon").length) {
      updateLivicon($(".nav-item.active .menu-livicon"));
    } // Update Active sidebar group menu icon with active ccolor


    if ($(".main-menu-content li.sidebar-group-active .menu-livicon").length) {
      updateLivicon($(".main-menu-content li.sidebar-group-active .menu-livicon"));
    } // Add open class to parent list item if subitem is active except compact menu


    var menuType = $body.data("menu");

    if (menuType != "horizontal-menu" && compactMenu === false) {
      $(".main-menu-content").find("li.active").parents("li").addClass("open");
    }

    if (menuType == "horizontal-menu") {
      $(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open");
      $(".main-menu-content").find("li.active").parents("li").addClass("active");
    } //card heading actions buttons small screen support


    $(".heading-elements-toggle").on("click", function () {
      $(this).next(".heading-elements").toggleClass("visible");
    }); //  Dynamic height for the chartjs div for the chart animations to work

    var chartjsDiv = $(".chartjs"),
        canvasHeight = chartjsDiv.children("canvas").attr("height");
    chartjsDiv.css("height", canvasHeight);

    if ($body.hasClass("boxed-layout")) {
      if ($body.hasClass("vertical-overlay-menu")) {
        var menuWidth = $(".main-menu").width();
        var contentPosition = $(".app-content").position().left;
        var menuPositionAdjust = contentPosition - menuWidth;

        if ($body.hasClass("menu-flipped")) {
          $(".main-menu").css("right", menuPositionAdjust + "px");
        } else {
          $(".main-menu").css("left", menuPositionAdjust + "px");
        }
      }
    } //Custom File Input


    $(".custom-file input").change(function (e) {
      $(this).next(".custom-file-label").html(e.target.files[0].name);
    });
    /* Text Area Counter Set Start */

    $(".char-textarea").on("keyup", function (event) {
      checkTextAreaMaxLength(this, event); // to later change text color in dark layout

      $(this).addClass("active");
    });
    /*
    Checks the MaxLength of the Textarea
    -----------------------------------------------------
    @prerequisite:  textBox = textarea dom element
            e = textarea event
                    length = Max length of characters
    */

    function checkTextAreaMaxLength(textBox, e) {
      var maxLength = parseInt($(textBox).data("length"));

      if (!checkSpecialKeys(e)) {
        if (textBox.value.length < maxLength - 1) textBox.value = textBox.value.substring(0, maxLength);
      }

      $(".char-count").html(textBox.value.length);

      if (textBox.value.length > maxLength) {
        $(".counter-value").css("background-color", $danger);
        $(".char-textarea").css("color", $danger); // to change text color after limit is maxedout out

        $(".char-textarea").addClass("max-limit");
      } else {
        $(".counter-value").css("background-color", $primary);
        $(".char-textarea").css("color", $textcolor);
        $(".char-textarea").removeClass("max-limit");
      }

      return true;
    }
    /*
    Checks if the keyCode pressed is inside special chars
    -------------------------------------------------------
    @prerequisite:  e = e.keyCode object for the key pressed
    */


    function checkSpecialKeys(e) {
      if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) return false;else return true;
    }

    $(".content-overlay").on("click", function () {
      $(".search-list").removeClass("show");
      $(".app-content").removeClass("show-overlay");
      $(".bookmark-wrapper .bookmark-input").removeClass("show");
    }); // To show shadow in main menu when menu scrolls

    var container = document.getElementsByClassName("main-menu-content");

    if (container.length > 0) {
      container[0].addEventListener("ps-scroll-y", function () {
        if ($(this).find(".ps__thumb-y").position().top > 0) {
          $(".shadow-bottom").css("display", "block");
        } else {
          $(".shadow-bottom").css("display", "none");
        }
      });
    }
  }); // Hide overlay menu on content overlay click on small screens

  $(document).on("click", ".sidenav-overlay", function (e) {
    // Hide menu
    $.app.menu.hide();
    return false;
  }); // Execute below code only if we find hammer js for touch swipe feature on small screen

  if (typeof Hammer !== "undefined") {
    // Swipe menu gesture
    var swipeInElement = document.querySelector(".drag-target");

    if ($(swipeInElement).length > 0) {
      var swipeInMenu = new Hammer(swipeInElement);
      swipeInMenu.on("panright", function (ev) {
        if ($body.hasClass("vertical-overlay-menu")) {
          $.app.menu.open();
          return false;
        }
      });
    } // menu swipe out gesture


    setTimeout(function () {
      var swipeOutElement = document.querySelector(".main-menu");
      var swipeOutMenu;

      if ($(swipeOutElement).length > 0) {
        swipeOutMenu = new Hammer(swipeOutElement);
        swipeOutMenu.get("pan").set({
          direction: Hammer.DIRECTION_ALL,
          threshold: 100
        });
        swipeOutMenu.on("panleft", function (ev) {
          if ($body.hasClass("vertical-overlay-menu")) {
            $.app.menu.hide();
            return false;
          }
        });
      }
    }, 300); // menu overlay swipe out gestrue

    var swipeOutOverlayElement = document.querySelector(".sidenav-overlay");

    if ($(swipeOutOverlayElement).length > 0) {
      var swipeOutOverlayMenu = new Hammer(swipeOutOverlayElement);
      swipeOutOverlayMenu.on("panleft", function (ev) {
        if ($body.hasClass("vertical-overlay-menu")) {
          $.app.menu.hide();
          return false;
        }
      });
    }
  }

  $(document).on("click", ".menu-toggle, .modern-nav-toggle", function (e) {
    e.preventDefault(); // Toggle menu

    $.app.menu.toggle();
    setTimeout(function () {
      $(window).trigger("resize");
    }, 200);

    if ($("#collapsed-sidebar").length > 0) {
      setTimeout(function () {
        if ($body.hasClass("menu-expanded") || $body.hasClass("menu-open")) {
          $("#collapsed-sidebar").prop("checked", false);
        } else {
          $("#collapsed-sidebar").prop("checked", true);
        }
      }, 1000);
    } // Hides dropdown on click of menu toggle
    // $('[data-toggle="dropdown"]').dropdown('hide');
    // Hides collapse dropdown on click of menu toggle


    if ($(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").hasClass("show")) {
      $(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").removeClass("show");
    }

    return false;
  }); // Add Children Class

  $(".navigation").find("li").has("ul").addClass("has-sub");
  $(".carousel").carousel({
    interval: 2000
  }); // Page full screen

  $(".nav-link-expand").on("click", function (e) {
    if (typeof screenfull != "undefined") {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }
  });

  if (typeof screenfull != "undefined") {
    if (screenfull.enabled) {
      $(document).on(screenfull.raw.fullscreenchange, function () {
        if (screenfull.isFullscreen) {
          $(".nav-link-expand").find("i").toggleClass("bx-exit-fullscreen bx-fullscreen");
          $("html").addClass("full-screen");
        } else {
          $(".nav-link-expand").find("i").toggleClass("bx-fullscreen bx-exit-fullscreen");
          $("html").removeClass("full-screen");
        }
      });
    }
  }

  $(document).ready(function () {
    /**********************************
     *   Form Wizard Step Icon
     **********************************/
    $(".step-icon").each(function () {
      var $this = $(this);

      if ($this.siblings("span.step").length > 0) {
        $this.siblings("span.step").empty();
        $(this).appendTo($(this).siblings("span.step"));
      }
    });
  }); // Update manual scroller when window is resized

  $(window).resize(function () {
    $.app.menu.manualScroller.updateHeight(); // To show shadow in main menu when menu scrolls

    var container = document.getElementsByClassName("main-menu-content");

    if (container.length > 0) {
      container[0].addEventListener("ps-scroll-y", function () {
        if ($(this).find(".ps__thumb-y").position().top > 0) {
          $(".shadow-bottom").css("display", "block");
        } else {
          $(".shadow-bottom").css("display", "none");
        }
      });
    }
  });
  $("#sidebar-page-navigation").on("click", "a.nav-link", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this),
        href = $this.attr("href");
    var offset = $(href).offset();
    var scrollto = offset.top - 80; // minus fixed header height

    $("html, body").animate({
      scrollTop: scrollto
    }, 0);
    setTimeout(function () {
      $this.parent(".nav-item").siblings(".nav-item").children(".nav-link").removeClass("active");
      $this.addClass("active");
    }, 100);
  }); // main menu internationalization
  // init i18n and load language file

  i18next.use(window.i18nextXHRBackend).init({
    debug: false,
    fallbackLng: "en",
    backend: {
      loadPath: "../../../app-assets/data/locales/{{lng}}.json"
    },
    returnObjects: true
  }, function (err, t) {
    // resources have been loaded
    jqueryI18next.init(i18next, $);
  }); // change language according to data-language of dropdown item

  $(".dropdown-language .dropdown-item").on("click", function () {
    var $this = $(this);
    $this.siblings(".selected").removeClass("selected");
    $this.addClass("selected");
    var selectedLang = $this.text();
    var selectedFlag = $this.find(".flag-icon").attr("class");
    $("#dropdown-flag .selected-language").text(selectedLang);
    $("#dropdown-flag .flag-icon").removeClass().addClass(selectedFlag);
    var currentLanguage = $this.data("language");
    i18next.changeLanguage(currentLanguage, function (err, t) {
      $(".main-menu").localize();
    });
  });
  /********************* Bookmark & Search ***********************/
  // This variable is used for mouseenter and mouseleave events of search list

  var $filename = $(".search-input input").data("search"); // Bookmark icon click

  $(".bookmark-wrapper .bookmark-star").on("click", function (e) {
    e.stopPropagation();
    $(".bookmark-wrapper .bookmark-input").toggleClass("show");
    $(".bookmark-wrapper .bookmark-input input").val("");
    $(".bookmark-wrapper .bookmark-input input").blur();
    $(".bookmark-wrapper .bookmark-input input").focus();
    $(".bookmark-wrapper .search-list").addClass("show");
    var arrList = $("ul.nav.navbar-nav.bookmark-icons li"),
        $arrList = "",
        $activeItemClass = "";
    $("ul.search-list li").remove();

    for (var i = 0; i < arrList.length; i++) {
      if (i === 0) {
        $activeItemClass = "current_item";
      } else {
        $activeItemClass = "";
      }

      $arrList += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + arrList[i].firstChild.href + ">" + '<div class="d-flex justify-content-start">' + '<span class="mr-75 ' + arrList[i].firstChild.firstChild.className + '"  data-icon="' + arrList[i].firstChild.firstChild.className + '"></span>' + "<span>" + arrList[i].firstChild.dataset.originalTitle + "</span>" + "</div>" + '<span class="float-right bookmark-icon bx bx-star warning"></span>' + "</a>" + "</li>";
    }

    $("ul.search-list").append($arrList);
  }); // Navigation Search area Open

  $(".nav-link-search").on("click", function () {
    var $this = $(this);
    var searchInput = $(this).parent(".nav-search").find(".search-input");
    searchInput.addClass("open");
    $(".search-input input").focus();
    $(".search-input .search-list li").remove();
    $(".search-input .search-list").addClass("show");
    $(".bookmark-wrapper .bookmark-input").removeClass("show");
  }); // Navigation Search area Close

  $(".search-input-close i").on("click", function () {
    var $this = $(this),
        searchInput = $(this).closest(".search-input");

    if (searchInput.hasClass("open")) {
      searchInput.removeClass("open");
      $(".search-input input").val("");
      $(".search-input input").blur();
      $(".search-input .search-list").removeClass("show");

      if ($(".app-content").hasClass("show-overlay")) {
        $(".app-content").removeClass("show-overlay");
      }
    }
  }); // Navigation Search area Close on click of app-content

  $(".app-content").on("click", function () {
    var $this = $(".search-input-close"),
        searchInput = $($this).parent(".search-input");

    if (searchInput.hasClass("open")) {
      searchInput.removeClass("open");
    }
  }); // Filter

  $(".search-input .input").on("keyup", function (e) {
    if (e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 13) {
      if (e.keyCode == 27) {
        $(".app-content").removeClass("show-overlay");
        $(".bookmark-input input").val("");
        $(".bookmark-input input").blur();
        $(".search-input input").val("");
        $(".search-input input").blur();
        $(".search-input").removeClass("open");

        if ($(".search-list").hasClass("show")) {
          $(this).removeClass("show");
          $(".search-input").removeClass("show");
        }
      } // Define variables


      var value = $(this).val().toLowerCase(),
          //get values of inout on keyup
      activeClass = "",
          bookmark = false,
          liList = $("ul.search-list li"); // get all the list items of the search

      liList.remove(); // To check if current is bookmark input

      if ($(this).parent().hasClass("bookmark-input")) {
        bookmark = true;
      } // If input value is blank


      if (value != "") {
        $(".app-content").addClass("show-overlay"); // condition for bookmark and search input click

        if ($(".bookmark-input").focus()) {
          $(".bookmark-input .search-list").addClass("show");
        } else {
          $(".search-input .search-list").addClass("show");
          $(".bookmark-input .search-list").removeClass("show");
        }

        if (bookmark === false) {
          $(".search-input .search-list").addClass("show");
          $(".bookmark-input .search-list").removeClass("show");
        }

        var $startList = "",
            $otherList = "",
            $htmlList = "",
            $activeItemClass = "",
            $bookmarkIcon = "",
            a = 0; // getting json data from file for search results

        $.getJSON("../../../app-assets/data/" + $filename + ".json", function (data) {
          for (var i = 0; i < data.listItems.length; i++) {
            // if current is bookmark then give class to star icon
            if (bookmark === true) {
              activeClass = ""; // resetting active bookmark class

              var arrList = $("ul.nav.navbar-nav.bookmark-icons li"),
                  $arrList = ""; // Loop to check if current seach value match with the bookmarks already there in navbar

              for (var j = 0; j < arrList.length; j++) {
                if (data.listItems[i].name === arrList[j].firstChild.dataset.originalTitle) {
                  activeClass = " warning";
                  break;
                } else {
                  activeClass = "";
                }
              }

              $bookmarkIcon = '<span class="float-right bookmark-icon bx bx-star' + activeClass + '"></span>';
            } // Search list item start with entered letters and create list


            if (data.listItems[i].name.toLowerCase().indexOf(value) == 0 && a < 10 || !(data.listItems[i].name.toLowerCase().indexOf(value) == 0) && data.listItems[i].name.toLowerCase().indexOf(value) > -1 && a < 10) {
              if (a === 0) {
                $activeItemClass = "current_item";
              } else {
                $activeItemClass = "";
              }

              $startList += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + data.listItems[i].url + ">" + '<div class="d-flex justify-content-start">' + '<span class="mr-75 ' + data.listItems[i].icon + '" data-icon="' + data.listItems[i].icon + '"></span>' + "<span>" + data.listItems[i].name + "</span>" + "</div>" + $bookmarkIcon + "</a>" + "</li>";
              a++;
            }
          }

          for (var i = 0; i < data.listItems.length; i++) {
            if (bookmark === true) {
              activeClass = ""; // resetting active bookmark class

              var arrList = $("ul.nav.navbar-nav.bookmark-icons li"),
                  $arrList = ""; // Loop to check if current seach value match with the bookmarks already there in navbar

              for (var j = 0; j < arrList.length; j++) {
                if (data.listItems[i].name === arrList[j].firstChild.dataset.originalTitle) {
                  activeClass = " warning";
                } else {
                  activeClass = "";
                }
              }

              $bookmarkIcon = '<span class="float-right bookmark-icon bx bx-star' + activeClass + '"></span>';
            } // Search list item not start with letters and create list


            if (!(data.listItems[i].name.toLowerCase().indexOf(value) == 0) && data.listItems[i].name.toLowerCase().indexOf(value) > -1 && a < 10) {
              if (a === 0) {
                $activeItemClass = "current_item";
              } else {
                $activeItemClass = "";
              }

              $otherList += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + data.listItems[i].url + ">" + '<div class="d-flex justify-content-start">' + '<span class="mr-75 ' + data.listItems[i].icon + '" data-icon="' + data.listItems[i].icon + '"></span>' + "<span>" + data.listItems[i].name + "</span>" + "</div>" + $bookmarkIcon + "</a>" + "</li>";
              a++;
            }
          }

          if ($startList == "" && $otherList == "") {
            $otherList = '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">' + '<a class="d-flex align-items-center justify-content-between w-100">' + '<div class="d-flex justify-content-start">' + '<span class="mr-75 bx bx-error-circle"></span>' + "<span>No results found.</span>" + "</div>" + "</a>" + "</li>";
          }

          $htmlList = $startList.concat($otherList); // merging start with and other list

          $("ul.search-list").html($htmlList); // Appending list to <ul>
        });
      } else {
        if (bookmark === true) {
          var arrList = $("ul.nav.navbar-nav.bookmark-icons li"),
              $arrList = "";

          for (var i = 0; i < arrList.length; i++) {
            if (i === 0) {
              $activeItemClass = "current_item";
            } else {
              $activeItemClass = "";
            }

            $arrList += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + arrList[i].firstChild.href + ">" + '<div class="d-flex justify-content-start">' + '<span class="mr-75 ' + arrList[i].firstChild.firstChild.className + '"  data-icon="' + arrList[i].firstChild.firstChild.className + '"></span>' + "<span>" + arrList[i].firstChild.dataset.originalTitle + "</span>" + "</div>" + '<span class="float-right bookmark-icon bx bx-star warning"></span>' + "</a>" + "</li>";
          }

          $("ul.search-list").append($arrList);
        } else {
          // if search input blank, hide overlay
          if ($(".app-content").hasClass("show-overlay")) {
            $(".app-content").removeClass("show-overlay");
          } // If filter box is empty


          if ($(".search-list").hasClass("show")) {
            $(".search-list").removeClass("show");
          }
        }
      }
    }
  }); // Add class on hover of the list

  $(document).on("mouseenter", ".search-list li", function (e) {
    $(this).siblings().removeClass("current_item");
    $(this).addClass("current_item");
  });
  $(document).on("click", ".search-list li", function (e) {
    e.stopPropagation();
  });
  $("html").on("click", function ($this) {
    if (!$($this.target).hasClass("bookmark-icon")) {
      if ($(".bookmark-input .search-list").hasClass("show")) {
        $(".bookmark-input .search-list").removeClass("show");
      }

      if ($(".bookmark-input").hasClass("show")) {
        $(".bookmark-input").removeClass("show");
      }
    }
  }); // Favorite star click

  $(document).on("click", ".bookmark-input .search-list .bookmark-icon", function (e) {
    e.stopPropagation();

    if ($(this).hasClass("warning")) {
      $(this).removeClass("warning");
      var arrList = $("ul.nav.navbar-nav.bookmark-icons li");

      for (var i = 0; i < arrList.length; i++) {
        if (arrList[i].firstChild.dataset.originalTitle == $(this).parent()[0].innerText) {
          arrList[i].remove();
        }
      }

      e.preventDefault();
    } else {
      var arrList = $("ul.nav.navbar-nav.bookmark-icons li");
      $(this).addClass("warning");
      e.preventDefault();
      var $url = $(this).parent()[0].href,
          $name = $(this).parent()[0].innerText,
          $icon = $(this).parent()[0].firstChild.firstChild.dataset.icon,
          $listItem = "",
          $listItemDropdown = "";
      $listItem = '<li class="nav-item d-none d-lg-block">' + '<a class="nav-link" href="' + $url + '" data-toggle="tooltip" data-placement="top" title="' + $name + '">' + '<i class="ficon ' + $icon + '"></i>' + "</a>" + "</li>";
      $("ul.nav.bookmark-icons").append($listItem);
      $('[data-toggle="tooltip"]').tooltip();
    }
  }); // If we use up key(38) Down key (40) or Enter key(13)

  $(window).on("keydown", function (e) {
    var $current = $(".search-list li.current_item"),
        $next,
        $prev;

    if (e.keyCode === 40) {
      $next = $current.next();
      $current.removeClass("current_item");
      $current = $next.addClass("current_item");
    } else if (e.keyCode === 38) {
      $prev = $current.prev();
      $current.removeClass("current_item");
      $current = $prev.addClass("current_item");
    }

    if (e.keyCode === 13 && $(".search-list li.current_item").length > 0) {
      var selected_item = $(".search-list li.current_item a");
      window.location = selected_item.attr("href");
      $(selected_item).trigger("click");
    }
  }); // Navbar Sticky - add classes on reload of page

  var $scrollTop = $(window).scrollTop();

  if ($scrollTop > 20) {
    $(".navbar-sticky .main-header-navbar").css({
      "background-color": "#ffff",
      "box-shadow": "-8px 12px 18px 0 rgba(25, 42, 70, 0.13)"
    });
    $(".navbar-static .main-header-navbar").css({
      "background-color": "transparent",
      "box-shadow": "none"
    });
  } // Navbar Sticky -  add classes on scroll down the page


  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".navbar-sticky .main-header-navbar").css({
        "background-color": "#ffff",
        "box-shadow": "-8px 12px 18px 0 rgba(25, 42, 70, 0.13)"
      });
      $(".navbar-static .main-header-navbar").css({
        "background-color": "transparent",
        "box-shadow": "none"
      });
    } else {
      $(".navbar-sticky .main-header-navbar").css({
        "background-color": "#f2f4f4",
        "box-shadow": "none"
      });
      $(".navbar-static .main-header-navbar").css({
        "background-color": "transparent",
        "box-shadow": "none"
      });
    }
  }); // Navbar Sticky - add classes on reload of page

  var $scrollTop = $(window).scrollTop();

  if ($scrollTop > 20) {
    $(".dark-layout.navbar-sticky .main-header-navbar").css({
      "background-color": "#272e48",
      "box-shadow": "rgba(26, 35, 59, .70) -8px 12px 18px 0px"
    });
  } // Navbar Sticky -  add classes on scroll down the page


  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".dark-layout.navbar-sticky .main-header-navbar").css({
        "background-color": "#272e48",
        "box-shadow": "rgba(26, 35, 59, .70) -8px 12px 18px 0px"
      });
    } else {
      $(".dark-layout.navbar-sticky .main-header-navbar").css({
        "background-color": "transparent",
        "box-shadow": "none"
      });
    }
  }); // Header Notification Dropdown Remains Opened on click of switch Label

  $(".header-navbar .dropdown-notification label").on("click", function (e) {
    e.stopPropagation();
  });
})(window, document, jQuery);

/***/ }),

/***/ "./resources/app-assets/js/scripts/components.js":
/*!*******************************************************!*\
  !*** ./resources/app-assets/js/scripts/components.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: Components.js
  Description: For Generic Components.
  ----------------------------------------------------------------------------------------
  Item Name: Frest HTML Admin Template
  Version: 1.0
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function (window, document, $) {
  /***********************/
  // Component Variables //

  /***********************/
  var accordion = $(".accordion"),
      defaultaccordion = $(".accordion .card-header"),
      collapseTitle = $(".collapsible .card-header"),
      collapseHoverTitle = $(".card-hover .card-header"),
      dropdownMenuIcon = $(".dropdown-icon-wrapper .dropdown-item"); // To open Collapse on hover

  if (accordion.attr("data-toggle-hover", "true")) {
    collapseHoverTitle.closest(".card").on("mouseenter", function () {
      var $this = $(this);
      $this.children(".collapse").collapse("show");
      $this.closest(".card").addClass("open");
    });
    collapseHoverTitle.closest(".card").on("mouseleave", function () {
      var $this = $(this);
      $this.children(".collapse").collapse("hide");
      $this.closest(".card").removeClass("open");
    });
  } // When Collapse open on click


  collapseTitle.on("click", function () {
    var $this = $(this);
    $this.next(".collapse").on('show.bs.collapse', function () {
      $this.parent().addClass("open");
    });
    $this.next(".collapse.show").on('hide.bs.collapse', function () {
      $this.parent().removeClass("open");
    });
  }); // When accordion open on click

  defaultaccordion.on("click", function () {
    var $this = $(this);

    if ($this.parent().next(".show")) {
      $this.closest(".card").toggleClass("open");
      $this.closest(".card").siblings(".open").removeClass("open");
    }
  });
  /************/
  // Dropdown //

  /************/
  // For Dropdown With Icons

  dropdownMenuIcon.on("click", function () {
    $(".dropdown-icon-wrapper .dropdown-toggle i").remove();
    $(this).find("i").clone().appendTo(".dropdown-icon-wrapper .dropdown-toggle");
    $(".dropdown-icon-wrapper .dropdown-toggle .dropdown-item").removeClass("dropdown-item");
  });
  /*********/
  // Chips //

  /*********/
  // To close chips

  $('.chip-closeable').on('click', function () {
    $(this).closest('.chip').remove();
  });
  /***********/
  // Tooltip //

  /***********/
  // Add Custom Class For Light Tooltip

  if (typeof $.fn.tooltip.Constructor === 'undefined') {
    throw new Error('Bootstrap Tooltip must be included first!');
  }

  var Tooltip = $.fn.tooltip.Constructor; // add customClass option to Bootstrap Tooltip

  $.extend(Tooltip.Default, {
    customClass: ''
  });
  var _show = Tooltip.prototype.show;

  Tooltip.prototype.show = function () {
    // invoke parent method
    _show.apply(this, Array.prototype.slice.apply(arguments));

    if (this.config.customClass) {
      var tip = this.getTipElement();
      $(tip).addClass(this.config.customClass);
    }
  };
  /***************/
  // widget chat //

  /**************/
  // Widget - chat area perfect scrollbar initialization


  if ($(".widget-chat-demo-scroll").length > 0) {
    var chat_scroll_owner_user = new PerfectScrollbar(".widget-chat-demo-scroll", {
      wheelPropagation: false
    });
  } // widget chat hide/show on demo chat button click


  $(".chat-demo-button").click(function () {
    $(".widget-chat-demo").toggleClass("d-block d-none");
  }); // widget chat hide on close button click

  $(".widget-chat-close").click(function () {
    $(".widget-chat-demo").toggleClass("d-block d-none");
  }); // widget chat autoscroll to bottom of Chat area on click on demo chat button

  $(".chat-demo-button").on("click", function () {
    $(".widget-chat-demo-scroll").animate({
      scrollTop: $(".widget-chat-demo-scroll")[0].scrollHeight
    }, 800);
  });
})(window, document, jQuery); // widget chat function to add message to chat demo


function widgetChatMessageDemo(source) {
  var message = $(".chat-message-demo").val();

  if (message != "") {
    var html = '<div class="chat-message">' + "<p>" + message + "</p>" + "<div class=" + "chat-time" + ">5:01 PM</div></div>";
    $(".widget-chat-demo .chat:last-child .chat-body").append(html);
    $(".chat-message-demo").val("");
    $(".widget-chat-demo-scroll").scrollTop($(".widget-chat-demo-scroll > .chat-content").height());
  }
}

/***/ }),

/***/ "./resources/app-assets/js/scripts/configs/vertical-menu-dark.js":
/*!***********************************************************************!*\
  !*** ./resources/app-assets/js/scripts/configs/vertical-menu-dark.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Menu Icon Color Config
var menuIconColorsObj = {
  iconStrokeColor: "#8baff3ad",
  iconSolidColor: "#8baff3ad",
  iconFillColor: "#d4ebf9",
  iconStrokeColorAlt: "#5A8DEE"
}; // Active Menu Icon Color Config

var menuActiveIconColorsObj = {
  iconStrokeColor: "#8baff3ad",
  iconSolidColor: "#8baff3ad",
  iconFillColor: "#d4ebf9",
  iconStrokeColorAlt: "#5A8DEE"
};

/***/ }),

/***/ "./resources/app-assets/js/scripts/footer.js":
/*!***************************************************!*\
  !*** ./resources/app-assets/js/scripts/footer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: footer.js
  Description: Template footer js.
  ----------------------------------------------------------------------------------------
  Item Name: Frest HTML Admin Template
 Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
//Check to see if the window is top if not then display button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  }); //Click event to scroll to top

  $('.scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});

/***/ }),

/***/ "./resources/app-assets/vendors/js/vendors.min.js":
/*!********************************************************!*\
  !*** ./resources/app-assets/vendors/js/vendors.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n2, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n2 = function n(e) {
          return function () {
            _n2 && (_n2 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n2(), r = s.onerror = s.ontimeout = _n2("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n2 && r();
          });
        }, _n2 = _n2("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n2) throw e;
        }
      },
      abort: function abort() {
        _n2 && _n2();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n3;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n3 = function n(e) {
            t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n3 && _n3();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function () {
    return w;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/* popper JS */

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

(function (e, t) {
  'object' == ( false ? undefined : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }

  function p(e) {
    if (!e) return document.documentElement;

    for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;

    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }

  function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }

  function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);
    return {
      height: h('Height', t, o, n),
      width: h('Width', t, o, n)
    };
  }

  function g(e) {
    return fe({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function u(e) {
    var o = {};

    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
            i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}

    var p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;

    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }

    return g(p);
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
    i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });

    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);
      b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }

    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }

  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }

  function y(e) {
    var n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) return !1;
    if ('fixed' === t(e, 'position')) return !0;
    var i = o(e);
    return !!i && y(i);
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }

    return o || document.documentElement;
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = {
      top: 0,
      left: 0
    },
        d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = w(d, p);else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);

      if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
            h = m.height,
            g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }
    i = i || 0;
    var u = 'number' == typeof i;
    return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s;
  }

  function x(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return fe({
        key: e
      }, s[e], {
        area: x(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }

  function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
    return r;
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function D(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
        i = {
      width: n.width,
      height: n.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }

  function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var n = C(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;
      return n && o === t;
    });
  }

  function H(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function B() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }

  function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }

  function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = $,
        p = function p(e) {
      return e;
    },
        s = r(i.width),
        d = r(n.width),
        a = -1 !== ['left', 'right'].indexOf(e.placement),
        l = -1 !== e.placement.indexOf('-'),
        f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
        m = t ? r : p;

    return {
      left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right)
    };
  }

  function K(e, t, o) {
    var n = C(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });

    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return i;
  }

  function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ce.indexOf(e),
        n = ce.slice(o + 1).concat(ce.slice(0, o));
    return t ? n.reverse() : n;
  }

  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = n;
      }

      var d = g(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(C(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }

  function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1) {
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;
      break;
    }
  }

  var i = te && window.Promise,
      re = i ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ne));
    };
  },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function de(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      ae = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      le = function le(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      fe = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ce = he.slice(3),
      ge = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      ue = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      de(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return fe({
          name: e
        }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return ae(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return B.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return U.call(this);
      }
    }]), t;
  }();

  return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];

          if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: le({}, d, r[d]),
              end: le({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = fe({}, p, l[n]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: J,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = H('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
              f = e.offsets.popper,
              m = {
            primary: function primary(e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = fe({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var n;
          if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
          return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case ge.FLIP:
              p = [n, i];
              break;

            case ge.CLOCKWISE:
              p = G(n);
              break;

            case ge.COUNTERCLOCKWISE:
              p = G(n, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
            (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = C(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = {
            position: i.position
          },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = H('transform');
          if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;
            m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, ue;
});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      f = "alert",
      d = "fade",
      m = "show",
      p = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(r);
        e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = {
    CLICK_DATA_API: "click" + E + C,
    FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
  },
      P = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];

      if (n) {
        var i = this._element.querySelector(A);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(N);
            o && g(o).removeClass(S);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(S), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);
        t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface;
  };

  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
    SLIDE: "slide" + H,
    SLID: "slid" + H,
    KEYDOWN: "keydown" + H,
    MOUSEENTER: "mouseenter" + H,
    MOUSELEAVE: "mouseleave" + H,
    TOUCHSTART: "touchstart" + H,
    TOUCHMOVE: "touchmove" + H,
    TOUCHEND: "touchend" + H,
    POINTERDOWN: "pointerdown" + H,
    POINTERUP: "pointerup" + H,
    DRAG_START: "dragstart" + H,
    LOAD_DATA_API: "load" + H + R,
    CLICK_DATA_API: "click" + H + R
  },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = {
    TOUCH: "touch",
    PEN: "pen"
  },
      lt = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(tt);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? W : q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t);
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t);
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === q ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        g(e).removeClass(V);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j),
            e = l({}, F, g(this).data());
        "object" == _typeof(i) && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }]), r;
  }();

  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      lt._jQueryInterface.call(i, i.data());
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface;
  };

  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = {
    toggle: !0,
    parent: ""
  },
      gt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _t = {
    SHOW: "show" + ut,
    SHOWN: "shown" + ut,
    HIDE: "hide" + ut,
    HIDDEN: "hidden" + ut,
    CLICK_DATA_API: "click" + ut + ".data-api"
  },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));

          var o = this._getDimension();

          g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);
      e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), a;
  }();

  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(ht) ? "toggle" : n.data();

      bt._jQueryInterface.call(t, e);
    });
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface;
  };

  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = {
    HIDE: "hide" + wt,
    HIDDEN: "hidden" + wt,
    SHOW: "show" + wt,
    SHOWN: "shown" + wt,
    CLICK: "click" + wt,
    CLICK_DATA_API: "click" + wt + At,
    KEYDOWN_DATA_API: "keydown" + wt + At,
    KEYUP_DATA_API: "keyup" + wt + At
  },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      Gt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Jt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = g.Event(kt.SHOW, n);

          if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Vt;
      return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Dt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(kt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Ut);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return $t;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gt;
      }
    }]), c;
  }();

  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation();
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface;
  };

  var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      oe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      re = {
    HIDE: "hide" + ee,
    HIDDEN: "hidden" + ee,
    SHOW: "show" + ee,
    SHOWN: "shown" + ee,
    FOCUSIN: "focusin" + ee,
    RESIZE: "resize" + ee,
    CLICK_DISMISS: "click.dismiss" + ee,
    KEYDOWN_DISMISS: "keydown.dismiss" + ee,
    MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
    CLICK_DATA_API: "click" + ee + ".data-api"
  },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);
        var n = g.Event(re.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(he);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee);
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(he);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();

      var i = g.Event(re.SHOWN, {
        relatedTarget: t
      }),
          o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
      };

      if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(re.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(he) ? he : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(ce);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + pe));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = ae, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ie;
      }
    }]), o;
  }();

  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    ve._jQueryInterface.call(g(e), o, this);
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface;
  };
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
      o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      Pe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Ee
  },
      je = "show",
      He = "out",
      Re = {
    HIDE: "hide" + De,
    HIDDEN: "hidden" + De,
    SHOW: "show" + De,
    SHOWN: "shown" + De,
    INSERTED: "inserted" + De,
    CLICK: "click" + De,
    FOCUSIN: "focusin" + De,
    FOCUSOUT: "focusout" + De,
    MOUSEENTER: "mouseenter" + De,
    MOUSELEAVE: "mouseleave" + De
  },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: We
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
        };

        if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function o() {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);

          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== Oe.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ie;
      }
    }, {
      key: "Event",
      get: function get() {
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return De;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ke;
      }
    }]), i;
  }();

  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface;
  };

  var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ze = l({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = {
    HIDE: "hide" + ze,
    HIDDEN: "hidden" + ze,
    SHOW: "show" + ze,
    SHOWN: "shown" + ze,
    INSERTED: "inserted" + ze,
    CLICK: "click" + ze,
    FOCUSIN: "focusin" + ze,
    FOCUSOUT: "focusout" + ze,
    MOUSEENTER: "mouseenter" + ze,
    MOUSELEAVE: "mouseleave" + ze
  },
      sn = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(nn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Je;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ve;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ye;
      }
    }, {
      key: "Event",
      get: function get() {
        return rn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ze;
      }
    }]), i;
  }(Be);

  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface;
  };

  var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = {
    offset: 10,
    method: "auto",
    target: ""
  },
      fn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      dn = {
    ACTIVATE: "activate" + cn,
    SCROLL: "scroll" + cn,
    LOAD_DATA_API: "load" + cn + ".data-api"
  },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, un, "object" == _typeof(t) && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(an, t, fn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n);
      }).forEach(function (t) {
        return t.classList.remove(_n);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);

        if (t || (t = new n(this, "object" == _typeof(e) && e), g(this).data(ln, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return un;
      }
    }]), n;
  }();

  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);

      Dn._jQueryInterface.call(n, n.data());
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface;
  };

  var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = {
    HIDE: "hide" + An,
    HIDDEN: "hidden" + An,
    SHOW: "show" + An,
    SHOWN: "shown" + An,
    CLICK_DATA_API: "click" + An + ".data-api"
  },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t,
            i,
            e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(On.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(On.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(On.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(On.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = _.getTransitionDurationFromElement(o);

        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);
        var i = g(e.parentNode).find(Mn)[0];
        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));
          g(r).addClass(Pn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(wn);

        if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface;
  };

  var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = {
    CLICK_DISMISS: "click.dismiss" + Vn,
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn
  },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ti = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ei = '[data-dismiss="toast"]',
      ni = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);

      var e = function e() {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), "object" == _typeof(t) && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
      };

      if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Bn);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Bn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }, {
      key: "Default",
      get: function get() {
        return ti;
      }
    }]), i;
  }();

  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface;
  }, function () {
    if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = g.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t) {
    return getComputedStyle(t);
  }

  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), t.style[i] = r;
    }

    return t;
  }

  function i(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }

  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function n(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return r(t, e);
    });
  }

  function o(t, e) {
    var i = t.element.classList,
        r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
  }

  function s(t, e) {
    Y[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  function a(t, e) {
    o(t, e), s(t, e);
  }

  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function h(t, e, i, r, l) {
    var n = i[0],
        o = i[1],
        s = i[2],
        h = i[3],
        u = i[4],
        d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }

  function u(t) {
    return parseInt(t, 10) || 0;
  }

  function d(t) {
    return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]");
  }

  function f(e) {
    var i = t(e);
    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
  }

  function p(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function b(t, i) {
    var r = {
      width: i.railXWidth
    },
        l = Math.floor(t.scrollTop);
    i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r);
    var n = {
      top: l,
      height: i.railYHeight
    };
    i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth
    }), e(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth
    });
  }

  function g(t, e) {
    function i(e) {
      b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault();
    }

    function r() {
      s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i);
    }

    var l = e[0],
        n = e[1],
        a = e[2],
        c = e[3],
        h = e[4],
        u = e[5],
        d = e[6],
        f = e[7],
        p = e[8],
        b = t.element,
        g = null,
        v = null,
        Y = null;
    t.event.bind(t[h], "mousedown", function (e) {
      g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault();
    });
  }

  var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
      m = {
    main: "ps",
    element: {
      thumb: function thumb(t) {
        return "ps__thumb-" + t;
      },
      rail: function rail(t) {
        return "ps__rail-" + t;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      clicking: "ps--clicking",
      active: function active(t) {
        return "ps--active-" + t;
      },
      scrolling: function scrolling(t) {
        return "ps--scrolling-" + t;
      }
    }
  },
      Y = {
    x: null,
    y: null
  },
      X = function X(t) {
    this.element = t, this.handlers = {};
  },
      w = {
    isEmpty: {
      configurable: !0
    }
  };

  X.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, X.prototype.unbind = function (t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function (r) {
      return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
    });
  }, X.prototype.unbindAll = function () {
    var t = this;

    for (var e in t.handlers) {
      t.unbind(e);
    }
  }, w.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(X.prototype, w);

  var y = function y() {
    this.eventElements = [];
  };

  y.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new X(t), this.eventElements.push(e)), e;
  }, y.prototype.bind = function (t, e, i) {
    this.eventElement(t).bind(e, i);
  }, y.prototype.unbind = function (t, e, i) {
    var r = this.eventElement(t);
    r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
  }, y.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, y.prototype.once = function (t, e, i) {
    var r = this.eventElement(t),
        l = function l(t) {
      r.unbind(e, l), i(t);
    };

    r.bind(e, l);
  };

  var W = function W(t, e, i, r, l) {
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var n;
    if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    h(t, i, n, r, l);
  },
      L = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  },
      R = function R(t) {
    var e = t.element,
        i = Math.floor(e.scrollTop);
    t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  },
      T = {
    "click-rail": function clickRail(t) {
      t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
    },
    keyboard: function keyboard(t) {
      function e(e, r) {
        var l = Math.floor(i.scrollTop);

        if (0 === e) {
          if (!t.scrollbarYActive) return !1;
          if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation;
        }

        var n = i.scrollLeft;

        if (0 === r) {
          if (!t.scrollbarXActive) return !1;
          if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
        }

        return !0;
      }

      var i = t.element,
          l = function l() {
        return r(i, ":hover");
      },
          n = function n() {
        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
      };

      t.event.bind(t.ownerDocument, "keydown", function (r) {
        if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
          var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (d(o)) return;
          }

          var s = 0,
              a = 0;

          switch (r.which) {
            case 37:
              s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
              break;

            case 39:
              s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
              break;

            case 40:
              a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              a = r.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              a = t.containerHeight;
              break;

            case 34:
              a = -t.containerHeight;
              break;

            case 36:
              a = t.contentHeight;
              break;

            case 35:
              a = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault());
        }
      });
    },
    wheel: function wheel(e) {
      function i(t, i) {
        var r = Math.floor(o.scrollTop),
            l = 0 === o.scrollTop,
            n = r + o.offsetHeight === o.scrollHeight,
            s = 0 === o.scrollLeft,
            a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
        return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation;
      }

      function r(t) {
        var e = t.deltaX,
            i = -1 * t.deltaY;
        return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i];
      }

      function l(e, i, r) {
        if (!L.isWebKit && o.querySelector("select:focus")) return !0;
        if (!o.contains(e)) return !1;

        for (var l = e; l && l !== o;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var s = l.scrollHeight - l.clientHeight;
            if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0;
            var a = l.scrollWidth - l.clientWidth;
            if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function n(t) {
        var n = r(t),
            s = n[0],
            a = n[1];

        if (!l(t.target, s, a)) {
          var c = !1;
          e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
        }
      }

      var o = e.element;
      void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
    },
    touch: function touch(e) {
      function i(t, i) {
        var r = Math.floor(h.scrollTop),
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);

        if (o > n) {
          if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome;
        } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0;

        return !0;
      }

      function r(t, i) {
        h.scrollTop -= i, h.scrollLeft -= t, R(e);
      }

      function l(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function n(t) {
        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function o(t) {
        if (n(t)) {
          var e = l(t);
          u.pageX = e.pageX, u.pageY = e.pageY, d = new Date().getTime(), null !== p && clearInterval(p);
        }
      }

      function s(e, i, r) {
        if (!h.contains(e)) return !1;

        for (var l = e; l && l !== h;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var o = l.scrollHeight - l.clientHeight;
            if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0;
            var s = l.scrollLeft - l.clientWidth;
            if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function a(t) {
        if (n(t)) {
          var e = l(t),
              o = {
            pageX: e.pageX,
            pageY: e.pageY
          },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
          if (s(t.target, a, c)) return;
          r(a, c), u = o;
          var h = new Date().getTime(),
              p = h - d;
          p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault();
        }
      }

      function c() {
        e.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
          e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p);
        }, 10));
      }

      if (L.supportsTouch || L.supportsIePointer) {
        var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
        L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)));
      }
    }
  },
      H = function H(r, l) {
    var n = this;
    if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
    this.element = r, r.classList.add(m.main), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    };

    for (var o in l) {
      n.settings[o] = l[o];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var s = function s() {
      return r.classList.add(m.state.focus);
    },
        a = function a() {
      return r.classList.remove(m.state.focus);
    };

    this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function () {
      var t = r.scrollLeft,
          e = null;
      return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e;
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y(), this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var c = t(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var h = t(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return T[t](n);
    }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return n.onScroll(t);
    }), R(this);
  };

  return H.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
      display: "block"
    }), e(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
      display: "none"
    }), e(this.scrollbarYRail, {
      display: "none"
    }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
      display: ""
    }), e(this.scrollbarYRail, {
      display: ""
    }));
  }, H.prototype.onScroll = function (t) {
    this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
  }, H.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  }, H;
});
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */

!function (a, b, c, d) {
  "use strict";

  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }

  function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }

  function g(a, b, c) {
    var e;
    if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }

  function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
    return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);
      return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }

  function i(a, b, c) {
    var d,
        e = b.prototype;
    d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }

  function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }

  function k(a, b) {
    return _typeof(a) == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }

  function l(a, b) {
    return a === d ? b : a;
  }

  function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }

  function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }

  function o(a, b) {
    for (; a;) {
      if (a == b) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  function p(a, b) {
    return a.indexOf(b) > -1;
  }

  function q(a) {
    return a.trim().split(/\s+/g);
  }

  function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);

    for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;
      d++;
    }

    return -1;
  }

  function s(a) {
    return Array.prototype.slice.call(a, 0);
  }

  function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];
      r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }

    return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }

  function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if (c = ma[g], e = c ? c + f : b, e in a) return e;
      g++;
    }

    return d;
  }

  function v() {
    return ua++;
  }

  function w(b) {
    var c = b.ownerDocument || b;
    return c.defaultView || c.parentWindow || a;
  }

  function x(a, b) {
    var c = this;
    this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }

  function y(a) {
    var b,
        c = a.options.inputClass;
    return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }

  function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;
    c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }

  function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;
    c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
    var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);
    b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
    var j = F(b.deltaTime, b.deltaX, b.deltaY);
    b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
    var k = a.element;
    o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }

  function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
    b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
      x: f.deltaX || 0,
      y: f.deltaY || 0
    }, d = a.offsetDelta = {
      x: c.x,
      y: c.y
    }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }

  function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;

    if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);
      e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;

    b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }

  function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = {
        clientX: pa(a.pointers[c].clientX),
        clientY: pa(a.pointers[c].clientY)
      }, c++;
    }

    return {
      timeStamp: ra(),
      pointers: b,
      center: E(b),
      deltaX: a.deltaX,
      deltaY: a.deltaY
    };
  }

  function E(a) {
    var b = a.length;
    if (1 === b) return {
      x: pa(a[0].clientX),
      y: pa(a[0].clientY)
    };

    for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }

    return {
      x: pa(c / b),
      y: pa(d / b)
    };
  }

  function F(a, b, c) {
    return {
      x: b / a || 0,
      y: c / a || 0
    };
  }

  function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }

  function H(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
    return Math.sqrt(d * d + e * e);
  }

  function I(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
    return 180 * Math.atan2(e, d) / Math.PI;
  }

  function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }

  function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }

  function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }

  function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }

  function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }

  function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);
    return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }

  function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }

  function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;
    if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
    var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;
    if (f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }

    for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
    }

    return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }

  function R() {
    x.apply(this, arguments);
    var a = j(this.handler, this);
    this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }

  function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }

  function T(a) {
    var b = a.changedPointers[0];

    if (b.identifier === this.primaryTouch) {
      var c = {
        x: b.clientX,
        y: b.clientY
      };
      this.lastTouches.push(c);

      var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);
        a > -1 && d.splice(a, 1);
      };

      setTimeout(e, cb);
    }
  }

  function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);
      if (db >= f && db >= g) return !0;
    }

    return !1;
  }

  function V(a, b) {
    this.manager = a, this.set(b);
  }

  function W(a) {
    if (p(a, jb)) return jb;
    var b = p(a, kb),
        c = p(a, lb);
    return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }

  function X() {
    if (!fb) return !1;
    var b = {},
        c = a.CSS && a.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }

  function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }

  function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }

  function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }

  function _(a, b) {
    var c = b.manager;
    return c ? c.get(a) : a;
  }

  function aa() {
    Y.apply(this, arguments);
  }

  function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }

  function ca() {
    aa.apply(this, arguments);
  }

  function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }

  function ea() {
    aa.apply(this, arguments);
  }

  function fa() {
    aa.apply(this, arguments);
  }

  function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }

  function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }

  function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));
      a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }

  function ja(a, b) {
    var c = a.element;

    if (c.style) {
      var d;
      g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }

  function ka(a, c) {
    var d = b.createEvent("Event");
    d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }

  var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;
  la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");

    for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      if (e !== d && null !== e) for (var f in e) {
        e.hasOwnProperty(f) && (b[f] = e[f]);
      }
    }

    return b;
  } : Object.assign;
  var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }

    return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = ("ontouchstart" in a),
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];
  x.prototype = {
    handler: function handler() {},
    init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    },
    destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    }
  };
  var Sa = {
    mousedown: Ea,
    mousemove: Fa,
    mouseup: Ga
  },
      Ta = "mousedown",
      Ua = "mousemove mouseup";
  i(L, x, {
    handler: function handler(a) {
      var b = Sa[a.type];
      b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
        pointers: [a],
        changedPointers: [a],
        pointerType: Ba,
        srcEvent: a
      }));
    }
  });
  var Va = {
    pointerdown: Ea,
    pointermove: Fa,
    pointerup: Ga,
    pointercancel: Ha,
    pointerout: Ha
  },
      Wa = {
    2: za,
    3: Aa,
    4: Ba,
    5: Ca
  },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";
  a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
    handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");
      e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
        pointers: b,
        changedPointers: [a],
        pointerType: f,
        srcEvent: a
      }), c && b.splice(h, 1));
    }
  });
  var Za = {
    touchstart: Ea,
    touchmove: Fa,
    touchend: Ga,
    touchcancel: Ha
  },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";
  i(N, x, {
    handler: function handler(a) {
      var b = Za[a.type];

      if (b === Ea && (this.started = !0), this.started) {
        var c = O.call(this, a, b);
        b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: za,
          srcEvent: a
        });
      }
    }
  });
  var ab = {
    touchstart: Ea,
    touchmove: Fa,
    touchend: Ga,
    touchcancel: Ha
  },
      bb = "touchstart touchmove touchend touchcancel";
  i(P, x, {
    handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);
      c && this.callback(this.manager, b, {
        pointers: c[0],
        changedPointers: c[1],
        pointerType: za,
        srcEvent: a
      });
    }
  });
  var cb = 2500,
      db = 25;
  i(R, x, {
    handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;

      if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;
        this.callback(a, b, c);
      }
    },
    destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    }
  });
  var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();
  V.prototype = {
    set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    },
    update: function update() {
      this.set(this.manager.options.touchAction);
    },
    compute: function compute() {
      var a = [];
      return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    },
    preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;
      if (this.manager.session.prevented) return void b.preventDefault();
      var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];

      if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;
        if (h && i && j) return;
      }

      return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    },
    preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    }
  };
  var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;
  Y.prototype = {
    defaults: {},
    set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    },
    recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;
      var b = this.simultaneous;
      return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    },
    dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    },
    requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;
      var b = this.requireFail;
      return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    },
    dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;
      a = _(a, this);
      var b = r(this.requireFail, a);
      return b > -1 && this.requireFail.splice(b, 1), this;
    },
    hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    },
    emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }

      var c = this,
          d = this.state;
      qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    },
    tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    },
    canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;
        a++;
      }

      return !0;
    },
    recognize: function recognize(a) {
      var b = la({}, a);
      return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    },
    process: function process(a) {},
    getTouchAction: function getTouchAction() {},
    reset: function reset() {}
  }, i(aa, Y, {
    defaults: {
      pointers: 1
    },
    attrTest: function attrTest(a) {
      var b = this.options.pointers;
      return 0 === b || a.pointers.length === b;
    },
    process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);
      return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    }
  }), i(ba, aa, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: Pa
    },
    getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];
      return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    },
    directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;
      return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    },
    attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    },
    emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;
      var b = $(a.direction);
      b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    }
  }), i(ca, aa, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [jb];
    },
    attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    },
    emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";
        a.additionalEvent = this.options.event + b;
      }

      this._super.emit.call(this, a);
    }
  }), i(da, Y, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function getTouchAction() {
      return [hb];
    },
    process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;
      if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;
      return tb;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    }
  }), i(ea, aa, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [jb];
    },
    attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    }
  }), i(fa, aa, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: Na | Oa,
      pointers: 1
    },
    getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    },
    attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;
      return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    },
    emit: function emit(a) {
      var b = $(a.offsetDirection);
      b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    }
  }), i(ga, Y, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function getTouchAction() {
      return [ib];
    },
    process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;
      if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();

      if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();
        var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
        this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
        var i = this.count % b.taps;
        if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }

      return tb;
    },
    failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    }
  }), ha.VERSION = "2.0.8", ha.defaults = {
    domEvents: !1,
    touchAction: gb,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[ea, {
      enable: !1
    }], [ca, {
      enable: !1
    }, ["rotate"]], [fa, {
      direction: Na
    }], [ba, {
      direction: Na
    }, ["swipe"]], [ga], [ga, {
      event: "doubletap",
      taps: 2
    }, ["tap"]], [da]],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var ub = 1,
      vb = 2;
  ia.prototype = {
    set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    },
    stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    },
    recognize: function recognize(a) {
      var b = this.session;

      if (!b.stopped) {
        this.touchAction.preventDefaults(a);
        var c,
            d = this.recognizers,
            e = b.curRecognizer;
        (!e || e && e.state & rb) && (e = b.curRecognizer = null);

        for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
        }
      }
    },
    get: function get(a) {
      if (a instanceof Y) return a;

      for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }

      return null;
    },
    add: function add(a) {
      if (f(a, "add", this)) return this;
      var b = this.get(a.options.event);
      return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    },
    remove: function remove(a) {
      if (f(a, "remove", this)) return this;

      if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);
        -1 !== c && (b.splice(c, 1), this.touchAction.update());
      }

      return this;
    },
    on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;
        return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    },
    off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;
        return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    },
    emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);
      var c = this.handlers[a] && this.handlers[a].slice();

      if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };

        for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    },
    destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    }
  }, la(ha, {
    INPUT_START: Ea,
    INPUT_MOVE: Fa,
    INPUT_END: Ga,
    INPUT_CANCEL: Ha,
    STATE_POSSIBLE: nb,
    STATE_BEGAN: ob,
    STATE_CHANGED: pb,
    STATE_ENDED: qb,
    STATE_RECOGNIZED: rb,
    STATE_CANCELLED: sb,
    STATE_FAILED: tb,
    DIRECTION_NONE: Ia,
    DIRECTION_LEFT: Ja,
    DIRECTION_RIGHT: Ka,
    DIRECTION_UP: La,
    DIRECTION_DOWN: Ma,
    DIRECTION_HORIZONTAL: Na,
    DIRECTION_VERTICAL: Oa,
    DIRECTION_ALL: Pa,
    Manager: ia,
    Input: x,
    TouchAction: V,
    TouchInput: P,
    MouseInput: L,
    PointerEventInput: M,
    TouchMouseInput: R,
    SingleTouchInput: N,
    Recognizer: Y,
    AttrRecognizer: aa,
    Tap: ga,
    Pan: ba,
    Swipe: fa,
    Pinch: ca,
    Rotate: ea,
    Press: da,
    on: m,
    off: n,
    each: g,
    merge: ta,
    extend: sa,
    assign: la,
    inherit: i,
    bindFn: j,
    prefixed: u
  });
  var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  wb.Hammer = ha,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return ha;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, document, "Hammer");
/* Unison JS */

Unison = function () {
  "use strict";

  var a,
      b = window,
      c = document,
      d = c.head,
      e = {},
      f = !1,
      g = {
    parseMQ: function parseMQ(a) {
      var c = b.getComputedStyle(a, null).getPropertyValue("font-family");
      return c.replace(/"/g, "").replace(/'/g, "");
    },
    debounce: function debounce(a, b, c) {
      var d;
      return function () {
        var e = this,
            f = arguments;
        clearTimeout(d), d = setTimeout(function () {
          d = null, c || a.apply(e, f);
        }, b), c && !d && a.apply(e, f);
      };
    },
    isObject: function isObject(a) {
      return "object" == _typeof(a);
    },
    isUndefined: function isUndefined(a) {
      return "undefined" == typeof a;
    }
  },
      h = {
    on: function on(a, b) {
      g.isObject(e[a]) || (e[a] = []), e[a].push(b);
    },
    emit: function emit(a, b) {
      if (g.isObject(e[a])) for (var c = e[a].slice(), d = 0; d < c.length; d++) {
        c[d].call(this, b);
      }
    }
  },
      i = {
    all: function all() {
      for (var a = {}, b = g.parseMQ(c.querySelector("title")).split(","), d = 0; d < b.length; d++) {
        var e = b[d].trim().split(" ");
        a[e[0]] = e[1];
      }

      return f ? a : null;
    },
    now: function now(a) {
      var b = g.parseMQ(d).split(" "),
          c = {
        name: b[0],
        width: b[1]
      };
      return f ? g.isUndefined(a) ? c : a(c) : null;
    },
    update: function update() {
      i.now(function (b) {
        b.name !== a && (h.emit(b.name), h.emit("change", b), a = b.name);
      });
    }
  };
  return b.onresize = g.debounce(i.update, 100), c.addEventListener("DOMContentLoaded", function () {
    f = "none" !== b.getComputedStyle(d, null).getPropertyValue("clear"), i.update();
  }), {
    fetch: {
      all: i.all,
      now: i.now
    },
    on: h.on,
    emit: h.emit,
    util: {
      debounce: g.debounce,
      isObject: g.isObject
    }
  };
}();
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */


!function () {
  "use strict";

  function e(e) {
    function t(t, n) {
      var s,
          h,
          k = t == window,
          y = n && void 0 !== n.message ? n.message : void 0;

      if (n = e.extend({}, e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
        if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = void 0 === y ? n.message : y, k && p && o(window, {
          fadeOut: 0
        }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
          var m = y.jquery ? y[0] : y,
              v = {};
          e(t).data("blockUI.history", v), v.el = m, v.parent = m.parentNode, v.display = m.style.display, v.position = m.style.position, v.parent && v.parent.removeChild(m);
        }

        e(t).data("blockUI.onUnblock", n.onUnblock);
        var g,
            I,
            w,
            U,
            x = n.baseZ;
        g = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && g.css("opacity", 0);
        var C = [g, I, w],
            S = e(k ? "body" : t);
        e.each(C, function () {
          this.appendTo(S);
        }), n.theme && n.draggable && e.fn.draggable && w.draggable({
          handle: ".ui-dialog-titlebar",
          cancel: "li"
        });
        var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);

        if (u || O) {
          if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(t, "borderTopWidth"),
              T = d(t, "borderLeftWidth"),
              M = E ? "(0 - " + E + ")" : 0,
              B = T ? "(0 - " + T + ")" : 0;
          e.each(C, function (e, t) {
            var o = t[0].style;
            if (o.position = "absolute", 2 > e) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;else if (!n.centerY && k) {
              var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                  s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
              o.setExpression("top", s);
            }
          });
        }

        if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn) {
          var j = n.onBlock ? n.onBlock : c,
              H = n.showOverlay && !y ? j : c,
              z = y ? j : c;
          n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z);
        } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();

        if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout) {
          var W = setTimeout(function () {
            k ? e.unblockUI(n) : e(t).unblock(n);
          }, n.timeout);
          e(t).data("blockUI.timeout", W);
        }
      }
    }

    function o(t, o) {
      var s,
          l = t == window,
          a = e(t),
          d = a.data("blockUI.history"),
          c = a.data("blockUI.timeout");
      c && (clearTimeout(c), a.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
      var r;
      r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
        0 === --s && n(r, d, o, t);
      })) : n(r, d, o, t);
    }

    function n(t, o, n, i) {
      var s = e(i);

      if (!s.data("blockUI.isBlocked")) {
        t.each(function (e, t) {
          this.parentNode && this.parentNode.removeChild(this);
        }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
        var l = e(document.body),
            a = l.width(),
            d = l[0].style.width;
        l.width(a - 1).width(a), l[0].style.width = d;
      }
    }

    function i(t, o, n) {
      var i = o == window,
          l = e(o);

      if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
        var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        t ? e(document).bind(a, n, s) : e(document).unbind(a, s);
      }
    }

    function s(t) {
      if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
        var o = b,
            n = !t.shiftKey && t.target === o[o.length - 1],
            i = t.shiftKey && t.target === o[0];
        if (n || i) return setTimeout(function () {
          l(i);
        }, 10), !1;
      }

      var s = t.data,
          a = e(t.target);
      return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length;
    }

    function l(e) {
      if (b) {
        var t = b[e === !0 ? b.length - 1 : 0];
        t && t.focus();
      }
    }

    function a(e, t, o) {
      var n = e.parentNode,
          i = e.style,
          s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
          l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");
      t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0");
    }

    function d(t, o) {
      return parseInt(e.css(t, o), 10) || 0;
    }

    e.fn._fadeIn = e.fn.fadeIn;

    var c = e.noop || function () {},
        r = /MSIE/.test(navigator.userAgent),
        u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
        f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));

    e.blockUI = function (e) {
      t(window, e);
    }, e.unblockUI = function (e) {
      o(window, e);
    }, e.growlUI = function (t, o, n, i) {
      var s = e('<div class="growlUI"></div>');
      t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3);

      var l = function l(t) {
        t = t || {}, e.blockUI({
          message: s,
          fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
          fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
          timeout: "undefined" != typeof t.timeout ? t.timeout : n,
          centerY: !1,
          showOverlay: !1,
          onUnblock: i,
          css: e.blockUI.defaults.growlCSS
        });
      };

      l();
      s.css("opacity");
      s.mouseover(function () {
        l({
          fadeIn: 0,
          timeout: 3e4
        });
        var t = e(".blockMsg");
        t.stop(), t.fadeTo(300, 1);
      }).mouseout(function () {
        e(".blockMsg").fadeOut(1e3);
      });
    }, e.fn.block = function (o) {
      if (this[0] === window) return e.blockUI(o), this;
      var n = e.extend({}, e.blockUI.defaults, o || {});
      return this.each(function () {
        var t = e(this);
        n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
          fadeOut: 0
        });
      }), this.each(function () {
        "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o);
      });
    }, e.fn.unblock = function (t) {
      return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
        o(this, t);
      });
    }, e.blockUI.version = 2.7, e.blockUI.defaults = {
      message: "<h1>Please wait...</h1>",
      title: null,
      draggable: !0,
      theme: !1,
      css: {
        padding: 0,
        margin: 0,
        width: "30%",
        top: "40%",
        left: "35%",
        textAlign: "center",
        color: "#000",
        border: "3px solid #aaa",
        backgroundColor: "#fff",
        cursor: "wait"
      },
      themedCSS: {
        width: "30%",
        top: "40%",
        left: "35%"
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: .6,
        cursor: "wait"
      },
      cursorReset: "default",
      growlCSS: {
        width: "350px",
        top: "10px",
        left: "",
        right: "10px",
        border: "none",
        padding: "5px",
        opacity: .6,
        cursor: "default",
        color: "#fff",
        backgroundColor: "#000",
        "-webkit-border-radius": "10px",
        "-moz-border-radius": "10px",
        "border-radius": "10px"
      },
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
      forceIframe: !1,
      baseZ: 1e3,
      centerX: !0,
      centerY: !0,
      allowBodyStretch: !0,
      bindEvents: !0,
      constrainTabKey: !0,
      fadeIn: 200,
      fadeOut: 400,
      timeout: 0,
      showOverlay: !0,
      focusInput: !0,
      focusableElements: ":input:enabled:visible",
      onBlock: null,
      onUnblock: null,
      onOverlayClick: null,
      quirksmodeOffsetHack: 4,
      blockMsgClass: "blockMsg",
      ignoreIfBlocked: !1
    };
    var p = null,
        b = [];
  }

   true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}();
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/

!function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  var e = -1,
      o = -1,
      n = function n(t) {
    return parseFloat(t) || 0;
  },
      a = function a(e) {
    var o = 1,
        a = t(e),
        i = null,
        r = [];
    return a.each(function () {
      var e = t(this),
          a = e.offset().top - n(e.css("margin-top")),
          s = r.length > 0 ? r[r.length - 1] : null;
      null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a;
    }), r;
  },
      i = function i(e) {
    var o = {
      byRow: !0,
      property: "height",
      target: null,
      remove: !1
    };
    return "object" == _typeof(e) ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o);
  },
      r = t.fn.matchHeight = function (e) {
    var o = i(e);

    if (o.remove) {
      var n = this;
      return this.css(o.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(n);
      }), this;
    }

    return this.length <= 1 && !o.target ? this : (r._groups.push({
      elements: this,
      options: o
    }), r._apply(this, o), this);
  };

  r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
    var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");
    return u.each(function () {
      var e = t(this);
      e.data("style-cache", e.attr("style"));
    }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
      var e = t(this),
          o = e.css("display");
      "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
        display: o,
        "padding-top": "0",
        "padding-bottom": "0",
        "margin-top": "0",
        "margin-bottom": "0",
        "border-top-width": "0",
        "border-bottom-width": "0",
        height: "100px",
        overflow: "hidden"
      });
    }), l = a(h), h.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || "");
    })), t.each(l, function (e, o) {
      var a = t(o),
          i = 0;
      if (s.target) i = s.target.outerHeight(!1);else {
        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
        a.each(function () {
          var e = t(this),
              o = e.attr("style"),
              n = e.css("display");
          "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
          var a = {
            display: n
          };
          a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "");
        });
      }
      a.each(function () {
        var e = t(this),
            o = 0;
        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"));
      });
    }), u.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || null);
    }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var e = {};
    t("[data-match-height], [data-mh]").each(function () {
      var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");
      n in e ? e[n] = e[n].add(o) : e[n] = o;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };

  var s = function s(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(e, r._groups);
  };

  r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }

    n ? o === -1 && (o = setTimeout(function () {
      s(a), o = -1;
    }, r._throttle)) : s(a);
  }, t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t);
  }), t(window)[h]("resize orientationchange", function (t) {
    r._update(!0, t);
  });
});
/*
 *	jQuery Sliding Menu Plugin
 *	Mobile app list-style navigation in the browser
 *
 *	Written by Ali Zahid
 *	http://designplox.com/jquery-sliding-menu
 */

!function (a) {
  var e = [];

  a.fn.slidingMenu = function (t) {
    function n(e) {
      var t = a("ul", e),
          n = [];
      return a(t).each(function (e, t) {
        var r = a(t),
            s = r.prev(),
            l = i();
        if (1 == s.length && (s.addClass("nav-has-children dropdown-item").attr("href", "#menu-panel-" + l), s.append('<i class="ft-arrow-right children-in"></i>')), r.attr("id", "menu-panel-" + l), 0 == e) r.addClass("menu-panel-root");else {
          r.addClass("menu-panel");
          var d = (a("<li></li>"), a("<a></a>").addClass("nav-has-parent back primary dropdown-item").attr("href", "#menu-panel-back"));
          r.prepend(d);
        }
        n.push(t);
      }), n;
    }

    function r(e, t) {
      var n = {
        id: "menu-panel-" + i(),
        children: [],
        root: t ? !1 : !0
      },
          s = [];
      return t && n.children.push({
        styleClass: "back",
        href: "#" + t.id
      }), a(e).each(function (a, e) {
        if (n.children.push(e), e.children) {
          var t = r(e.children, n);
          e.href = "#" + t[0].id, e.styleClass = "nav", s = s.concat(t);
        }
      }), [n].concat(s);
    }

    function i() {
      var a;

      do {
        a = Math.random().toString(36).substring(3, 8);
      } while (e.indexOf(a) >= 0);

      return e.push(a), a;
    }

    function s() {
      var e = a(".sliding-menu-wrapper"),
          t = a(".sliding-menu-wrapper ul");
      t.length && setTimeout(function () {
        var n = a(l).width();
        e.width(t.length * n), t.each(function (e, t) {
          var r = a(t);
          r.width(n);
        }), e.css("margin-left", "");
      }, 300);
    }

    var l = this.selector,
        d = !1;
    "rtl" == a("html").data("textdirection") && (d = !0);
    var h = a.extend({
      dataJSON: !1,
      backLabel: "Back"
    }, t);
    return this.each(function () {
      var e,
          t = this,
          i = a(t);
      if (i.hasClass("sliding-menu")) return void s();
      var l = i.outerWidth();
      e = h.dataJSON ? r(h.dataJSON) : n(i), i.empty().addClass("sliding-menu");
      var p;
      h.dataJSON ? a(e).each(function (e, t) {
        var n = a("<ul></ul>");
        t.root && (p = "#" + t.id), n.attr("id", t.id), n.addClass("menu-panel"), n.width(l), a(t.children).each(function (e, t) {
          var r = a("<a></a>");
          r.attr("class", t.styleClass), r.attr("href", t.href), r.text(t.label);
          var i = a("<li></li>");
          i.append(r), n.append(i);
        }), i.append(n);
      }) : a(e).each(function (e, t) {
        var n = a(t);
        n.hasClass("menu-panel-root") && (p = "#" + n.attr("id")), n.width(l), i.append(t);
      }), p = a(p), p.addClass("menu-panel-root");
      var c = p;
      i.height(p.height());
      var u = a("<div></div>").addClass("sliding-menu-wrapper").width(e.length * l);
      return i.wrapInner(u), u = a(".sliding-menu-wrapper", i), a("a", t).on("click", function (e) {
        var t = a(this).attr("href"),
            n = a(this).text();
        if (u.is(":animated")) return void e.preventDefault();
        if ("#" == t) e.preventDefault();else if (0 == t.indexOf("#menu-panel")) {
          var r,
              s,
              l = a(t),
              o = a(this).hasClass("back");
          d === !0 ? s = parseInt(u.css("margin-right")) : r = parseInt(u.css("margin-left"));
          var f = i.width();
          a(this).closest("ul").hasClass("menu-panel-root") && (c = p), o ? ("#menu-panel-back" == t && (l = c.prev()), d === !0 ? properties = {
            marginRight: s + f
          } : properties = {
            marginLeft: r + f
          }, u.stop(!0, !0).animate(properties, "fast")) : (l.insertAfter(c), h.backLabel === !0 ? a(".back", l).html('<i class="fa fa-arrow-circle-o-left back-in"></i>' + n) : a(".back", l).text(h.backLabel), d === !0 ? properties = {
            marginRight: s - f
          } : properties = {
            marginLeft: r - f
          }, u.stop(!0, !0).animate(properties, "fast")), c = l, i.stop(!0, !0).animate({
            height: l.height()
          }, "fast"), e.preventDefault();
        }
      }), this;
    });
  };
}(jQuery);
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/

!function () {
  "use strict";

  var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
      e =  true && module.exports,
      t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      c = function () {
    for (var e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, l = n.length, t = {}; r < l; r++) {
      if ((e = n[r]) && e[1] in u) {
        for (r = 0; r < e.length; r++) {
          t[n[0][r]] = e[r];
        }

        return t;
      }
    }

    return !1;
  }(),
      l = {
    change: c.fullscreenchange,
    error: c.fullscreenerror
  },
      n = {
    request: function request(l) {
      return new Promise(function (e) {
        var n = c.requestFullscreen,
            r = function () {
          this.off("change", r), e();
        }.bind(this);

        l = l || u.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r);
      }.bind(this));
    },
    exit: function exit() {
      return new Promise(function (e) {
        var n = function () {
          this.off("change", n), e();
        }.bind(this);

        u[c.exitFullscreen](), this.on("change", n);
      }.bind(this));
    },
    toggle: function toggle(e) {
      return this.isFullscreen ? this.exit() : this.request(e);
    },
    onchange: function onchange(e) {
      this.on("change", e);
    },
    onerror: function onerror(e) {
      this.on("error", e);
    },
    on: function on(e, n) {
      var r = l[e];
      r && u.addEventListener(r, n, !1);
    },
    off: function off(e, n) {
      var r = l[e];
      r && u.removeEventListener(r, n, !1);
    },
    raw: c
  };

  c ? (Object.defineProperties(n, {
    isFullscreen: {
      get: function get() {
        return Boolean(u[c.fullscreenElement]);
      }
    },
    element: {
      enumerable: !0,
      get: function get() {
        return u[c.fullscreenElement];
      }
    },
    enabled: {
      enumerable: !0,
      get: function get() {
        return Boolean(u[c.fullscreenEnabled]);
      }
    }
  }), e ? module.exports = n : window.screenfull = n) : e ? module.exports = !1 : window.screenfull = !1;
}();
/*! pace 1.0.2 */

(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      _v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function Z(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      Y.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      $ = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  for (u = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function C() {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
    return setTimeout(a, 50);
  }, t = function t(a) {
    return clearTimeout(a);
  }), G = function G(a) {
    var b, _c;

    return b = C(), (_c = function c() {
      var d;
      return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
        return E(_c);
      })) : setTimeout(_c, 33 - d);
    })();
  }, F = function F() {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, _v = function v() {
    var a, b, c, d, e, f, g;

    for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
      if (c = d[f]) for (a in c) {
        Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
      }
    }

    return b;
  }, q = function q(a) {
    var b, c, d, e, f;

    for (c = b = 0, e = 0, f = a.length; f > e; e++) {
      d = a[e], c += Math.abs(d), b++;
    }

    return c / b;
  }, x = function x(a, b) {
    var c, d, e;

    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;

      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}

    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;

      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];

        for (c = 0, e = []; c < this.bindings[a].length;) {
          e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        }

        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;

      if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) {
          h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        }

        return i;
      }
    }, a;
  }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
    K = U[Q], D[K] === !0 && (D[K] = u[K]);
  }

  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments);
    }

    return Z(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }

    return a.prototype.getElement = function () {
      var a;

      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }

      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }

      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;

      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
        b = g[e], a.children[0].style[b] = d;
      }

      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }

    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;

      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
          c = f[d], g.push(c.call(this, b));
        }

        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
    var c, d, e;
    e = [];

    for (d in b.prototype) {
      try {
        e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, {
          get: function get() {
            return b.prototype[d];
          },
          configurable: !0,
          enumerable: !0
        }) : a[d] = b.prototype[d] : void 0);
      } catch (f) {
        c = f;
      }
    }

    return e;
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
  }, J = function J(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";

    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
    }

    return !1;
  }, k = function (a) {
    function b() {
      var a,
          c = this;
      b.__super__.constructor.apply(this, arguments), a = function a(_a2) {
        var b;
        return b = _a2.open, _a2.open = function (d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: _a2
          }), b.apply(_a2, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c;
      };

      try {
        w(window.XMLHttpRequest, P);
      } catch (d) {}

      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O(), a(b), b;
        };

        try {
          w(window.XDomainRequest, O);
        } catch (d) {}
      }

      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        };

        try {
          w(window.WebSocket, N);
        } catch (d) {}
      }
    }

    return Z(b, a), b;
  }(h), R = null, y = function y() {
    return null == R && (R = new k()), R;
  }, I = function I(a) {
    var b, c, d, e;

    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0;
      } else if (b.test(a)) return !0;
    }

    return !1;
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;

      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break;
          }

          k.push(void 0);
        }

        return k;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }

    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
    }, a;
  }(), o = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
        b = g[d], a.addEventListener(b, function () {
          return h.progress = 100;
        }, !1);
      } else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }

    return a;
  }(), n = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;

      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
        b = e[c], a.addEventListener(b, function () {
          return f.progress = 100;
        }, !1);
      }
    }

    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;

      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
        b = f[c], this.elements.push(new e(b));
      }
    }

    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }

    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, D.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
          b,
          c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }

    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }

    return a;
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
    }

    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
    return D.restartOnPushState ? j.restart() : void 0;
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments);
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments);
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function B() {
    var a, c, d, e, f, g, h, i;

    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
      a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    }

    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
      K = i[d], L.push(new K(D));
    }

    return j.bar = r = new b(), H = [], M = new m();
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start();
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;

      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
          g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
        }
      }

      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide");
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
    });
  }, j.start = function (a) {
    _v(D, a), j.running = !0;

    try {
      r.render();
    } catch (b) {
      i = b;
    }

    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'pace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return j;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}).call(this); // Internationalization

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(t);
  }

  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function r(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), r.forEach(function (t) {
        o(e, t, n[t]);
      });
    }

    return e;
  }

  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && u(e, t);
  }

  function s(e) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function u(e, t) {
    return (u = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function l(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function c(e, t) {
    return !t || "object" != _typeof(t) && "function" != typeof t ? l(e) : t;
  }

  function f(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
          ;
        }
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          r || null == s["return"] || s["return"]();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  function p(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  var g = {
    type: "logger",
    log: function log(e) {
      this.output("log", e);
    },
    warn: function warn(e) {
      this.output("warn", e);
    },
    error: function error(e) {
      this.output("error", e);
    },
    output: function output(e, t) {
      var n;
      console && console[e] && (n = console)[e].apply(n, p(t));
    }
  },
      h = new (function () {
    function e(n) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t(this, e), this.init(n, r);
    }

    return r(e, [{
      key: "init",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.prefix = t.prefix || "i18next:", this.logger = e || g, this.options = t, this.debug = t.debug;
      }
    }, {
      key: "setDebug",
      value: function value(e) {
        this.debug = e;
      }
    }, {
      key: "log",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        return this.forward(t, "log", "", !0);
      }
    }, {
      key: "warn",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        return this.forward(t, "warn", "", !0);
      }
    }, {
      key: "error",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        return this.forward(t, "error", "");
      }
    }, {
      key: "deprecate",
      value: function value() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
      }
    }, {
      key: "forward",
      value: function value(e, t, n, r) {
        return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
      }
    }, {
      key: "create",
      value: function value(t) {
        return new e(this.logger, i({}, {
          prefix: "".concat(this.prefix, ":").concat(t, ":")
        }, this.options));
      }
    }]), e;
  }())(),
      d = function () {
    function e() {
      t(this, e), this.observers = {};
    }

    return r(e, [{
      key: "on",
      value: function value(e, t) {
        var n = this;
        return e.split(" ").forEach(function (e) {
          n.observers[e] = n.observers[e] || [], n.observers[e].push(t);
        }), this;
      }
    }, {
      key: "off",
      value: function value(e, t) {
        var n = this;
        this.observers[e] && this.observers[e].forEach(function () {
          if (t) {
            var r = n.observers[e].indexOf(t);
            r > -1 && n.observers[e].splice(r, 1);
          } else delete n.observers[e];
        });
      }
    }, {
      key: "emit",
      value: function value(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }

        this.observers[e] && [].concat(this.observers[e]).forEach(function (e) {
          e.apply(void 0, n);
        });
        this.observers["*"] && [].concat(this.observers["*"]).forEach(function (t) {
          t.apply(t, [e].concat(n));
        });
      }
    }]), e;
  }();

  function v() {
    var e,
        t,
        n = new Promise(function (n, r) {
      e = n, t = r;
    });
    return n.resolve = e, n.reject = t, n;
  }

  function y(e) {
    return null == e ? "" : "" + e;
  }

  function m(e, t, n) {
    function r(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
    }

    function o() {
      return !e || "string" == typeof e;
    }

    for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
      if (o()) return {};
      var a = r(i.shift());
      !e[a] && n && (e[a] = new n()), e = e[a];
    }

    return o() ? {} : {
      obj: e,
      k: r(i.shift())
    };
  }

  function b(e, t, n) {
    var r = m(e, t, Object);
    r.obj[r.k] = n;
  }

  function k(e, t) {
    var n = m(e, t),
        r = n.obj,
        o = n.k;
    if (r) return r[o];
  }

  function x(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  var S = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };

  function w(e) {
    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function (e) {
      return S[e];
    }) : e;
  }

  var O = function (e) {
    function n(e) {
      var r,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        ns: ["translation"],
        defaultNS: "translation"
      };
      return t(this, n), r = c(this, s(n).call(this)), d.call(l(l(r))), r.data = e || {}, r.options = o, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r;
    }

    return a(n, d), r(n, [{
      key: "addNamespaces",
      value: function value(e) {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
      }
    }, {
      key: "removeNamespaces",
      value: function value(e) {
        var t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1);
      }
    }, {
      key: "getResource",
      value: function value(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
            i = [e, t];
        return n && "string" != typeof n && (i = i.concat(n)), n && "string" == typeof n && (i = i.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = e.split(".")), k(this.data, i);
      }
    }, {
      key: "addResource",
      value: function value(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          silent: !1
        },
            i = this.options.keySeparator;
        void 0 === i && (i = ".");
        var a = [e, t];
        n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = t, t = (a = e.split("."))[1]), this.addNamespaces(t), b(this.data, a, r), o.silent || this.emit("added", e, t, n, r);
      }
    }, {
      key: "addResources",
      value: function value(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
          silent: !1
        };

        for (var o in n) {
          "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
            silent: !0
          });
        }

        r.silent || this.emit("added", e, t, n);
      }
    }, {
      key: "addResourceBundle",
      value: function value(e, t, n, r, o) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
          silent: !1
        },
            s = [e, t];
        e.indexOf(".") > -1 && (r = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
        var u = k(this.data, s) || {};
        r ? function e(t, n, r) {
          for (var o in n) {
            o in t ? "string" == typeof t[o] || t[o] instanceof String || "string" == typeof n[o] || n[o] instanceof String ? r && (t[o] = n[o]) : e(t[o], n[o], r) : t[o] = n[o];
          }

          return t;
        }(u, n, o) : u = i({}, u, n), b(this.data, s, u), a.silent || this.emit("added", e, t, n);
      }
    }, {
      key: "removeResourceBundle",
      value: function value(e, t) {
        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
      }
    }, {
      key: "hasResourceBundle",
      value: function value(e, t) {
        return void 0 !== this.getResource(e, t);
      }
    }, {
      key: "getResourceBundle",
      value: function value(e, t) {
        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? i({}, {}, this.getResource(e, t)) : this.getResource(e, t);
      }
    }, {
      key: "getDataByLanguage",
      value: function value(e) {
        return this.data[e];
      }
    }, {
      key: "toJSON",
      value: function value() {
        return this.data;
      }
    }]), n;
  }(),
      R = {
    processors: {},
    addPostProcessor: function addPostProcessor(e) {
      this.processors[e.name] = e;
    },
    handle: function handle(e, t, n, r, o) {
      var i = this;
      return e.forEach(function (e) {
        i.processors[e] && (t = i.processors[e].process(t, n, r, o));
      }), t;
    }
  },
      j = function (n) {
    function o(e) {
      var n,
          r,
          i,
          a,
          u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return t(this, o), n = c(this, s(o).call(this)), d.call(l(l(n))), r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"], i = e, a = l(l(n)), r.forEach(function (e) {
        i[e] && (a[e] = i[e]);
      }), n.options = u, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = h.create("translator"), n;
    }

    return a(o, d), r(o, [{
      key: "changeLanguage",
      value: function value(e) {
        e && (this.language = e);
      }
    }, {
      key: "exists",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          interpolation: {}
        },
            n = this.resolve(e, t);
        return n && void 0 !== n.res;
      }
    }, {
      key: "extractFromKey",
      value: function value(e, t) {
        var n = t.nsSeparator || this.options.nsSeparator;
        void 0 === n && (n = ":");
        var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
            o = t.ns || this.options.defaultNS;

        if (n && e.indexOf(n) > -1) {
          var i = e.split(n);
          (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()), e = i.join(r);
        }

        return "string" == typeof o && (o = [o]), {
          key: e,
          namespaces: o
        };
      }
    }, {
      key: "translate",
      value: function value(t, n) {
        var r = this;
        if ("object" !== e(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == t) return "";
        Array.isArray(t) || (t = [String(t)]);
        var o = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
            a = this.extractFromKey(t[t.length - 1], n),
            s = a.key,
            u = a.namespaces,
            l = u[u.length - 1],
            c = n.lng || this.language,
            f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

        if (c && "cimode" === c.toLowerCase()) {
          if (f) {
            var p = n.nsSeparator || this.options.nsSeparator;
            return l + p + s;
          }

          return s;
        }

        var g = this.resolve(t, n),
            h = g && g.res,
            d = g && g.usedKey || s,
            v = g && g.exactUsedKey || s,
            y = Object.prototype.toString.apply(h),
            m = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
            b = !this.i18nFormat || this.i18nFormat.handleAsObject;

        if (b && h && "string" != typeof h && "boolean" != typeof h && "number" != typeof h && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(y) < 0 && ("string" != typeof m || "[object Array]" !== y)) {
          if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, n) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");

          if (o) {
            var k = "[object Array]" === y,
                x = k ? [] : {},
                S = k ? v : d;

            for (var w in h) {
              if (Object.prototype.hasOwnProperty.call(h, w)) {
                var O = "".concat(S).concat(o).concat(w);
                x[w] = this.translate(O, i({}, n, {
                  joinArrays: !1,
                  ns: u
                })), x[w] === O && (x[w] = h[w]);
              }
            }

            h = x;
          }
        } else if (b && "string" == typeof m && "[object Array]" === y) (h = h.join(m)) && (h = this.extendTranslation(h, t, n));else {
          var R = !1,
              j = !1;

          if (!this.isValidLookup(h) && void 0 !== n.defaultValue) {
            if (R = !0, void 0 !== n.count) {
              var L = this.pluralResolver.getSuffix(c, n.count);
              h = n["defaultValue".concat(L)];
            }

            h || (h = n.defaultValue);
          }

          this.isValidLookup(h) || (j = !0, h = s);
          var N = n.defaultValue && n.defaultValue !== h && this.options.updateMissing;

          if (j || R || N) {
            this.logger.log(N ? "updateKey" : "missingKey", c, l, s, N ? n.defaultValue : h);
            var P = [],
                C = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
            if ("fallback" === this.options.saveMissingTo && C && C[0]) for (var E = 0; E < C.length; E++) {
              P.push(C[E]);
            } else "all" === this.options.saveMissingTo ? P = this.languageUtils.toResolveHierarchy(n.lng || this.language) : P.push(n.lng || this.language);

            var F = function F(e, t) {
              r.options.missingKeyHandler ? r.options.missingKeyHandler(e, l, t, N ? n.defaultValue : h, N, n) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, l, t, N ? n.defaultValue : h, N, n), r.emit("missingKey", e, l, t, h);
            };

            if (this.options.saveMissing) {
              var A = void 0 !== n.count && "string" != typeof n.count;
              this.options.saveMissingPlurals && A ? P.forEach(function (e) {
                r.pluralResolver.getPluralFormsOfKey(e, s).forEach(function (t) {
                  return F([e], t);
                });
              }) : F(P, s);
            }
          }

          h = this.extendTranslation(h, t, n, g), j && h === s && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(s)), j && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h));
        }

        return h;
      }
    }, {
      key: "extendTranslation",
      value: function value(e, t, n, r) {
        var o = this;
        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
          resolved: r
        });else if (!n.skipInterpolation) {
          n.interpolation && this.interpolator.init(i({}, n, {
            interpolation: i({}, this.options.interpolation, n.interpolation)
          }));
          var a = n.replace && "string" != typeof n.replace ? n.replace : n;
          this.options.interpolation.defaultVariables && (a = i({}, this.options.interpolation.defaultVariables, a)), e = this.interpolator.interpolate(e, a, n.lng || this.language, n), !1 !== n.nest && (e = this.interpolator.nest(e, function () {
            return o.translate.apply(o, arguments);
          }, n)), n.interpolation && this.interpolator.reset();
        }
        var s = n.postProcess || this.options.postProcess,
            u = "string" == typeof s ? [s] : s;
        return null != e && u && u.length && !1 !== n.applyPostProcessor && (e = R.handle(u, e, t, n, this)), e;
      }
    }, {
      key: "resolve",
      value: function value(e) {
        var t,
            n,
            r,
            o,
            i,
            a = this,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof e && (e = [e]), e.forEach(function (e) {
          if (!a.isValidLookup(t)) {
            var u = a.extractFromKey(e, s),
                l = u.key;
            n = l;
            var c = u.namespaces;
            a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
            var f = void 0 !== s.count && "string" != typeof s.count,
                p = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
            c.forEach(function (e) {
              a.isValidLookup(t) || (i = e, g.forEach(function (n) {
                if (!a.isValidLookup(t)) {
                  o = n;
                  var i,
                      u,
                      c = l,
                      g = [c];
                  if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(g, l, n, e, s);else f && (i = a.pluralResolver.getSuffix(n, s.count)), f && p && g.push(c + i), p && g.push(c += "".concat(a.options.contextSeparator).concat(s.context)), f && g.push(c += i);

                  for (; u = g.pop();) {
                    a.isValidLookup(t) || (r = u, t = a.getResource(n, e, u, s));
                  }
                }
              }));
            });
          }
        }), {
          res: t,
          usedKey: n,
          exactUsedKey: r,
          usedLng: o,
          usedNS: i
        };
      }
    }, {
      key: "isValidLookup",
      value: function value(e) {
        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e);
      }
    }, {
      key: "getResource",
      value: function value(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
      }
    }]), o;
  }();

  function L(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }

  var N = function () {
    function e(n) {
      t(this, e), this.options = n, this.whitelist = this.options.whitelist || !1, this.logger = h.create("languageUtils");
    }

    return r(e, [{
      key: "getScriptPartFromCode",
      value: function value(e) {
        if (!e || e.indexOf("-") < 0) return null;
        var t = e.split("-");
        return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")));
      }
    }, {
      key: "getLanguagePartFromCode",
      value: function value(e) {
        if (!e || e.indexOf("-") < 0) return e;
        var t = e.split("-");
        return this.formatLanguageCode(t[0]);
      }
    }, {
      key: "formatLanguageCode",
      value: function value(e) {
        if ("string" == typeof e && e.indexOf("-") > -1) {
          var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
          return this.options.lowerCaseLng ? n = n.map(function (e) {
            return e.toLowerCase();
          }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = L(n[2].toLowerCase()))), n.join("-");
        }

        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
      }
    }, {
      key: "isWhitelisted",
      value: function value(e) {
        return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1;
      }
    }, {
      key: "getFallbackCodes",
      value: function value(e, t) {
        if (!e) return [];
        if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
        if (!t) return e["default"] || [];
        var n = e[t];
        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e["default"]), n || [];
      }
    }, {
      key: "toResolveHierarchy",
      value: function value(e, t) {
        var n = this,
            r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            o = [],
            i = function i(e) {
          e && (n.isWhitelisted(e) ? o.push(e) : n.logger.warn("rejecting non-whitelisted language code: ".concat(e)));
        };

        return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), r.forEach(function (e) {
          o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
        }), o;
      }
    }]), e;
  }(),
      P = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
  }, {
    lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ["he"],
    nr: [1, 2, 20, 21],
    fc: 22
  }],
      C = {
    1: function _(e) {
      return Number(e > 1);
    },
    2: function _(e) {
      return Number(1 != e);
    },
    3: function _(e) {
      return 0;
    },
    4: function _(e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    5: function _(e) {
      return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
    },
    6: function _(e) {
      return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
    },
    7: function _(e) {
      return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    8: function _(e) {
      return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
    },
    9: function _(e) {
      return Number(e >= 2);
    },
    10: function _(e) {
      return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
    },
    11: function _(e) {
      return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
    },
    12: function _(e) {
      return Number(e % 10 != 1 || e % 100 == 11);
    },
    13: function _(e) {
      return Number(0 !== e);
    },
    14: function _(e) {
      return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
    },
    15: function _(e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    16: function _(e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
    },
    17: function _(e) {
      return Number(1 == e || e % 10 == 1 ? 0 : 1);
    },
    18: function _(e) {
      return Number(0 == e ? 0 : 1 == e ? 1 : 2);
    },
    19: function _(e) {
      return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
    },
    20: function _(e) {
      return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2);
    },
    21: function _(e) {
      return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
    },
    22: function _(e) {
      return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
    }
  };

  var E = function () {
    function e(n) {
      var r,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t(this, e), this.languageUtils = n, this.options = o, this.logger = h.create("pluralResolver"), this.rules = (r = {}, P.forEach(function (e) {
        e.lngs.forEach(function (t) {
          r[t] = {
            numbers: e.nr,
            plurals: C[e.fc]
          };
        });
      }), r);
    }

    return r(e, [{
      key: "addRule",
      value: function value(e, t) {
        this.rules[e] = t;
      }
    }, {
      key: "getRule",
      value: function value(e) {
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
      }
    }, {
      key: "needsPlural",
      value: function value(e) {
        var t = this.getRule(e);
        return t && t.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function value(e, t) {
        var n = this,
            r = [],
            o = this.getRule(e);
        return o ? (o.numbers.forEach(function (o) {
          var i = n.getSuffix(e, o);
          r.push("".concat(t).concat(i));
        }), r) : r;
      }
    }, {
      key: "getSuffix",
      value: function value(e, t) {
        var n = this,
            r = this.getRule(e);

        if (r) {
          var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
              i = r.numbers[o];
          this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));

          var a = function a() {
            return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString();
          };

          return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
        }

        return this.logger.warn("no plural rule found for: ".concat(e)), "";
      }
    }]), e;
  }(),
      F = function () {
    function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.logger = h.create("interpolator"), this.init(n, !0);
    }

    return r(e, [{
      key: "init",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (arguments.length > 1 ? arguments[1] : void 0) && (this.options = e, this.format = e.interpolation && e.interpolation.format || function (e) {
          return e;
        }), e.interpolation || (e.interpolation = {
          escapeValue: !0
        });
        var t = e.interpolation;
        this.escape = void 0 !== t.escape ? t.escape : w, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("), this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"), this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function value() {
        this.options && this.init(this.options);
      }
    }, {
      key: "resetRegExp",
      value: function value() {
        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = new RegExp(e, "g");
        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        this.regexpUnescape = new RegExp(t, "g");
        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        this.nestingRegexp = new RegExp(n, "g");
      }
    }, {
      key: "interpolate",
      value: function value(e, t, n, r) {
        var o,
            i,
            a,
            s = this;

        function u(e) {
          return e.replace(/\$/g, "$$$$");
        }

        var l = function l(e) {
          if (e.indexOf(s.formatSeparator) < 0) return k(t, e);
          var r = e.split(s.formatSeparator),
              o = r.shift().trim(),
              i = r.join(s.formatSeparator).trim();
          return s.format(k(t, o), i, n);
        };

        this.resetRegExp();
        var c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler;

        for (a = 0; (o = this.regexpUnescape.exec(e)) && (i = l(o[1].trim()), e = e.replace(o[0], i), this.regexpUnescape.lastIndex = 0, !(++a >= this.maxReplaces));) {
          ;
        }

        for (a = 0; o = this.regexp.exec(e);) {
          if (void 0 === (i = l(o[1].trim()))) {
            if ("function" == typeof c) {
              var f = c(e, o, r);
              i = "string" == typeof f ? f : "";
            } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = "";
          } else "string" == typeof i || this.useRawValueToEscape || (i = y(i));
          if (i = this.escapeValue ? u(this.escape(i)) : u(i), e = e.replace(o[0], i), this.regexp.lastIndex = 0, ++a >= this.maxReplaces) break;
        }

        return e;
      }
    }, {
      key: "nest",
      value: function value(e, t) {
        var n,
            r,
            o = i({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});

        function a(e, t) {
          if (e.indexOf(",") < 0) return e;
          var n = e.split(",");
          e = n.shift();
          var r = n.join(",");
          r = (r = this.interpolate(r, o)).replace(/'/g, '"');

          try {
            o = JSON.parse(r), t && (o = i({}, t, o));
          } catch (t) {
            this.logger.error("failed parsing options string in nesting for key ".concat(e), t);
          }

          return e;
        }

        for (o.applyPostProcessor = !1; n = this.nestingRegexp.exec(e);) {
          if ((r = t(a.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof r) return r;
          "string" != typeof r && (r = y(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), e = e.replace(n[0], r), this.regexp.lastIndex = 0;
        }

        return e;
      }
    }]), e;
  }();

  var A = function (e) {
    function n(e, r, o) {
      var i,
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return t(this, n), i = c(this, s(n).call(this)), d.call(l(l(i))), i.backend = e, i.store = r, i.languageUtils = o.languageUtils, i.options = a, i.logger = h.create("backendConnector"), i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(o, a.backend, a), i;
    }

    return a(n, d), r(n, [{
      key: "queueLoad",
      value: function value(e, t, n, r) {
        var o = this,
            i = [],
            a = [],
            s = [],
            u = [];
        return e.forEach(function (e) {
          var r = !0;
          t.forEach(function (t) {
            var s = "".concat(e, "|").concat(t);
            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(t) < 0 && u.push(t)));
          }), r || s.push(e);
        }), (i.length || a.length) && this.queue.push({
          pending: a,
          loaded: {},
          errors: [],
          callback: r
        }), {
          toLoad: i,
          pending: a,
          toLoadLanguages: s,
          toLoadNamespaces: u
        };
      }
    }, {
      key: "loaded",
      value: function value(e, t, n) {
        var r = f(e.split("|"), 2),
            o = r[0],
            i = r[1];
        t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), this.state[e] = t ? -1 : 2;
        var a = {};
        this.queue.forEach(function (n) {
          var r, s, u, l, c, f;
          r = n.loaded, s = i, l = m(r, [o], Object), c = l.obj, f = l.k, c[f] = c[f] || [], u && (c[f] = c[f].concat(s)), u || c[f].push(s), function (e, t) {
            for (var n = e.indexOf(t); -1 !== n;) {
              e.splice(n, 1), n = e.indexOf(t);
            }
          }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function (e) {
            a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach(function (t) {
              a[e].indexOf(t) < 0 && a[e].push(t);
            });
          }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback());
        }), this.emit("loaded", a), this.queue = this.queue.filter(function (e) {
          return !e.done;
        });
      }
    }, {
      key: "read",
      value: function value(e, t, n) {
        var r = this,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
            a = arguments.length > 5 ? arguments[5] : void 0;
        return e.length ? this.backend[n](e, t, function (s, u) {
          s && u && o < 5 ? setTimeout(function () {
            r.read.call(r, e, t, n, o + 1, 2 * i, a);
          }, i) : a(s, u);
        }) : a(null, {});
      }
    }, {
      key: "prepareLoading",
      value: function value(e, t) {
        var n = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
        var i = this.queueLoad(e, t, r, o);
        if (!i.toLoad.length) return i.pending.length || o(), null;
        i.toLoad.forEach(function (e) {
          n.loadOne(e);
        });
      }
    }, {
      key: "load",
      value: function value(e, t, n) {
        this.prepareLoading(e, t, {}, n);
      }
    }, {
      key: "reload",
      value: function value(e, t, n) {
        this.prepareLoading(e, t, {
          reload: !0
        }, n);
      }
    }, {
      key: "loadOne",
      value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = f(e.split("|"), 2),
            o = r[0],
            i = r[1];
        this.read(o, i, "read", null, null, function (r, a) {
          r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), t.loaded(e, r, a);
        });
      }
    }, {
      key: "saveMissing",
      value: function value(e, t, n, r, o) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
        this.backend && this.backend.create && this.backend.create(e, t, n, r, null, i({}, a, {
          isUpdate: o
        })), e && e[0] && this.store.addResource(e[0], t, n, r);
      }
    }]), n;
  }();

  function T(e) {
    return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e;
  }

  function V() {}

  return new (function (n) {
    function o() {
      var e,
          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 ? arguments[1] : void 0;

      if (t(this, o), e = c(this, s(o).call(this)), d.call(l(l(e))), e.options = T(n), e.services = {}, e.logger = h, e.modules = {
        external: []
      }, r && !e.isInitialized && !n.isClone) {
        if (!e.options.initImmediate) return e.init(n, r), c(e, l(l(e)));
        setTimeout(function () {
          e.init(n, r);
        }, 0);
      }

      return e;
    }

    return a(o, d), r(o, [{
      key: "init",
      value: function value() {
        var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;

        function o(e) {
          return e ? "function" == typeof e ? new e() : e : null;
        }

        if ("function" == typeof n && (r = n, n = {}), this.options = i({}, {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          whitelist: !1,
          nonExplicitWhitelist: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: function returnedObjectHandler() {},
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function overloadTranslationOptionHandler(t) {
            var n = {};

            if ("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3])) {
              var r = t[3] || t[2];
              Object.keys(r).forEach(function (e) {
                n[e] = r[e];
              });
            }

            return n;
          },
          interpolation: {
            escapeValue: !0,
            format: function format(e, t, n) {
              return e;
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            maxReplaces: 1e3
          }
        }, this.options, T(n)), this.format = this.options.interpolation.format, r || (r = V), !this.options.isClone) {
          this.modules.logger ? h.init(o(this.modules.logger), this.options) : h.init(null, this.options);
          var a = new N(this.options);
          this.store = new O(this.options.resources, this.options);
          var s = this.services;
          s.logger = h, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new E(a, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          }), s.interpolator = new F(this.options), s.backendConnector = new A(o(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function (e) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
              r[o - 1] = arguments[o];
            }

            t.emit.apply(t, [e].concat(r));
          }), this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new j(this.services, this.options), this.translator.on("*", function (e) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
              r[o - 1] = arguments[o];
            }

            t.emit.apply(t, [e].concat(r));
          }), this.modules.external.forEach(function (e) {
            e.init && e.init(t);
          });
        }

        ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (e) {
          t[e] = function () {
            var n;
            return (n = t.store)[e].apply(n, arguments);
          };
        });

        var u = v(),
            l = function l() {
          t.changeLanguage(t.options.lng, function (e, n) {
            t.isInitialized = !0, t.logger.log("initialized", t.options), t.emit("initialized", t.options), u.resolve(n), r(e, n);
          });
        };

        return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u;
      }
    }, {
      key: "loadResources",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V;

        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (this.language && "cimode" === this.language.toLowerCase()) return t();

          var n = [],
              r = function r(t) {
            t && e.services.languageUtils.toResolveHierarchy(t).forEach(function (e) {
              n.indexOf(e) < 0 && n.push(e);
            });
          };

          if (this.language) r(this.language);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
            return r(e);
          });
          this.options.preload && this.options.preload.forEach(function (e) {
            return r(e);
          }), this.services.backendConnector.load(n, this.options.ns, t);
        } else t(null);
      }
    }, {
      key: "reloadResources",
      value: function value(e, t, n) {
        var r = v();
        return e || (e = this.languages), t || (t = this.options.ns), n || (n = V), this.services.backendConnector.reload(e, t, function (e) {
          r.resolve(), n(e);
        }), r;
      }
    }, {
      key: "use",
      value: function value(e) {
        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && R.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this;
      }
    }, {
      key: "changeLanguage",
      value: function value(e, t) {
        var n = this,
            r = v(),
            o = function o(e) {
          e && (n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.translator.language || n.translator.changeLanguage(e), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)), n.loadResources(function (o) {
            !function (e, o) {
              n.translator.changeLanguage(o), o && (n.emit("languageChanged", o), n.logger.log("languageChanged", o)), r.resolve(function () {
                return n.t.apply(n, arguments);
              }), t && t(e, function () {
                return n.t.apply(n, arguments);
              });
            }(o, e);
          });
        };

        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r;
      }
    }, {
      key: "getFixedT",
      value: function value(t, n) {
        var r = this,
            o = function t(n, o) {
          var a = i({}, o);

          if ("object" !== e(o)) {
            for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) {
              u[l - 2] = arguments[l];
            }

            a = r.options.overloadTranslationOptionHandler([n, o].concat(u));
          }

          return a.lng = a.lng || t.lng, a.lngs = a.lngs || t.lngs, a.ns = a.ns || t.ns, r.t(n, a);
        };

        return "string" == typeof t ? o.lng = t : o.lngs = t, o.ns = n, o;
      }
    }, {
      key: "t",
      value: function value() {
        var e;
        return this.translator && (e = this.translator).translate.apply(e, arguments);
      }
    }, {
      key: "exists",
      value: function value() {
        var e;
        return this.translator && (e = this.translator).exists.apply(e, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function value(e) {
        this.options.defaultNS = e;
      }
    }, {
      key: "loadNamespaces",
      value: function value(e, t) {
        var n = this,
            r = v();
        return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function (e) {
          n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
        }), this.loadResources(function (e) {
          r.resolve(), t && t(e);
        }), r) : (t && t(), Promise.resolve());
      }
    }, {
      key: "loadLanguages",
      value: function value(e, t) {
        var n = v();
        "string" == typeof e && (e = [e]);
        var r = this.options.preload || [],
            o = e.filter(function (e) {
          return r.indexOf(e) < 0;
        });
        return o.length ? (this.options.preload = r.concat(o), this.loadResources(function (e) {
          n.resolve(), t && t(e);
        }), n) : (t && t(), Promise.resolve());
      }
    }, {
      key: "dir",
      value: function value(e) {
        if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr";
      }
    }, {
      key: "createInstance",
      value: function value() {
        return new o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
      }
    }, {
      key: "cloneInstance",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
            r = i({}, this.options, t, {
          isClone: !0
        }),
            a = new o(r);
        return ["store", "services", "language"].forEach(function (t) {
          a[t] = e[t];
        }), a.translator = new j(a.services, a.options), a.translator.on("*", function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
            n[r - 1] = arguments[r];
          }

          a.emit.apply(a, [e].concat(n));
        }), a.init(r, n), a.translator.options = a.options, a;
      }
    }]), o;
  }())();
}); // I18n XHR Backend

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t) {
    return r.call(s.call(arguments, 1), function (e) {
      if (e) for (var n in e) {
        void 0 === t[n] && (t[n] = e[n]);
      }
    }), t;
  }

  function e(t, e) {
    if (e && "object" === (void 0 === e ? "undefined" : l(e))) {
      var n = "",
          o = encodeURIComponent;

      for (var i in e) {
        n += "&" + o(i) + "=" + o(e[i]);
      }

      if (!n) return t;
      t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1);
    }

    return t;
  }

  function n(t, n, o, i, a) {
    i && "object" === (void 0 === i ? "undefined" : l(i)) && (a || (i._t = new Date()), i = e("", i).slice(1)), n.queryStringParams && (t = e(t, n.queryStringParams));

    try {
      var r;
      r = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0"), r.open(i ? "POST" : "GET", t, 1), n.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.withCredentials = !!n.withCredentials, i && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.overrideMimeType && r.overrideMimeType("application/json");
      var s = n.customHeaders;
      if (s) for (var u in s) {
        r.setRequestHeader(u, s[u]);
      }
      r.onreadystatechange = function () {
        r.readyState > 3 && o && o(r.responseText, r);
      }, r.send(i);
    } catch (t) {
      console && console.log(t);
    }
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i() {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      allowMultiLoading: !1,
      parse: JSON.parse,
      crossDomain: !1,
      ajax: n
    };
  }

  var a = [],
      r = a.forEach,
      s = a.slice,
      l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      u = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    return function (e, n, o) {
      return n && t(e.prototype, n), o && t(e, o), e;
    };
  }(),
      c = function () {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o(this, e), this.init(t, n), this.type = "backend";
    }

    return u(e, [{
      key: "init",
      value: function value(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.services = e, this.options = t(n, this.options || {}, i());
      }
    }, {
      key: "readMulti",
      value: function value(t, e, n) {
        var o = this.options.loadPath;
        "function" == typeof this.options.loadPath && (o = this.options.loadPath(t, e));
        var i = this.services.interpolator.interpolate(o, {
          lng: t.join("+"),
          ns: e.join("+")
        });
        this.loadUrl(i, n);
      }
    }, {
      key: "read",
      value: function value(t, e, n) {
        var o = this.options.loadPath;
        "function" == typeof this.options.loadPath && (o = this.options.loadPath([t], [e]));
        var i = this.services.interpolator.interpolate(o, {
          lng: t,
          ns: e
        });
        this.loadUrl(i, n);
      }
    }, {
      key: "loadUrl",
      value: function value(t, e) {
        var n = this;
        this.options.ajax(t, this.options, function (o, i) {
          if (i.status >= 500 && i.status < 600) return e("failed loading " + t, !0);
          if (i.status >= 400 && i.status < 500) return e("failed loading " + t, !1);
          var a = void 0,
              r = void 0;

          try {
            a = n.options.parse(o, t);
          } catch (e) {
            r = "failed parsing " + t + " to json";
          }

          if (r) return e(r, !1);
          e(null, a);
        });
      }
    }, {
      key: "create",
      value: function value(t, e, n, o) {
        var i = this;
        "string" == typeof t && (t = [t]);
        var a = {};
        a[n] = o || "", t.forEach(function (t) {
          var n = i.services.interpolator.interpolate(i.options.addPath, {
            lng: t,
            ns: e
          });
          i.options.ajax(n, i.options, function (t, e) {}, a);
        });
      }
    }]), e;
  }();

  return c.type = "backend", c;
}); // Language detector i18n

!function (e, o) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = o() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e) {
    return a.call(i.call(arguments, 1), function (o) {
      if (o) for (var t in o) {
        void 0 === e[t] && (e[t] = o[t]);
      }
    }), e;
  }

  function o(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
  }

  function t() {
    return {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"]
    };
  }

  var n = [],
      a = n.forEach,
      i = n.slice,
      r = {
    create: function create(e, o, t, n) {
      var a = void 0;

      if (t) {
        var i = new Date();
        i.setTime(i.getTime() + 60 * t * 1e3), a = "; expires=" + i.toGMTString();
      } else a = "";

      n = n ? "domain=" + n + ";" : "", document.cookie = e + "=" + o + a + ";" + n + "path=/";
    },
    read: function read(e) {
      for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
        for (var a = t[n]; " " === a.charAt(0);) {
          a = a.substring(1, a.length);
        }

        if (0 === a.indexOf(o)) return a.substring(o.length, a.length);
      }

      return null;
    },
    remove: function remove(e) {
      this.create(e, "", -1);
    }
  },
      u = {
    name: "cookie",
    lookup: function lookup(e) {
      var o = void 0;

      if (e.lookupCookie && "undefined" != typeof document) {
        var t = r.read(e.lookupCookie);
        t && (o = t);
      }

      return o;
    },
    cacheUserLanguage: function cacheUserLanguage(e, o) {
      o.lookupCookie && "undefined" != typeof document && r.create(o.lookupCookie, e, o.cookieMinutes, o.cookieDomain);
    }
  },
      c = {
    name: "querystring",
    lookup: function lookup(e) {
      var o = void 0;
      if ("undefined" != typeof window) for (var t = window.location.search.substring(1), n = t.split("&"), a = 0; a < n.length; a++) {
        var i = n[a].indexOf("=");

        if (i > 0) {
          var r = n[a].substring(0, i);
          r === e.lookupQuerystring && (o = n[a].substring(i + 1));
        }
      }
      return o;
    }
  },
      l = void 0;

  try {
    l = "undefined" !== window && null !== window.localStorage;
    window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
  } catch (e) {
    l = !1;
  }

  var s = {
    name: "localStorage",
    lookup: function lookup(e) {
      var o = void 0;

      if (e.lookupLocalStorage && l) {
        var t = window.localStorage.getItem(e.lookupLocalStorage);
        t && (o = t);
      }

      return o;
    },
    cacheUserLanguage: function cacheUserLanguage(e, o) {
      o.lookupLocalStorage && l && window.localStorage.setItem(o.lookupLocalStorage, e);
    }
  },
      d = {
    name: "navigator",
    lookup: function lookup(e) {
      var o = [];

      if ("undefined" != typeof navigator) {
        if (navigator.languages) for (var t = 0; t < navigator.languages.length; t++) {
          o.push(navigator.languages[t]);
        }
        navigator.userLanguage && o.push(navigator.userLanguage), navigator.language && o.push(navigator.language);
      }

      return o.length > 0 ? o : void 0;
    }
  },
      f = {
    name: "htmlTag",
    lookup: function lookup(e) {
      var o = void 0,
          t = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
      return t && "function" == typeof t.getAttribute && (o = t.getAttribute("lang")), o;
    }
  },
      g = {
    name: "path",
    lookup: function lookup(e) {
      var o = void 0;

      if ("undefined" != typeof window) {
        var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (t instanceof Array) if ("number" == typeof e.lookupFromPathIndex) {
          if ("string" != typeof t[e.lookupFromPathIndex]) return;
          o = t[e.lookupFromPathIndex].replace("/", "");
        } else o = t[0].replace("/", "");
      }

      return o;
    }
  },
      p = {
    name: "subdomain",
    lookup: function lookup(e) {
      var o = void 0;

      if ("undefined" != typeof window) {
        var t = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
        t instanceof Array && (o = "number" == typeof e.lookupFromSubdomainIndex ? t[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : t[0].replace("http://", "").replace("https://", "").replace(".", ""));
      }

      return o;
    }
  },
      h = function () {
    function e(e, o) {
      for (var t = 0; t < o.length; t++) {
        var n = o[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    return function (o, t, n) {
      return t && e(o.prototype, t), n && e(o, n), o;
    };
  }(),
      v = function () {
    function n(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o(this, n), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
    }

    return h(n, [{
      key: "init",
      value: function value(o) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.services = o, this.options = e(n, this.options || {}, t()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = a, this.addDetector(u), this.addDetector(c), this.addDetector(s), this.addDetector(d), this.addDetector(f), this.addDetector(g), this.addDetector(p);
      }
    }, {
      key: "addDetector",
      value: function value(e) {
        this.detectors[e.name] = e;
      }
    }, {
      key: "detect",
      value: function value(e) {
        var o = this;
        e || (e = this.options.order);
        var t = [];
        e.forEach(function (e) {
          if (o.detectors[e]) {
            var n = o.detectors[e].lookup(o.options);
            n && "string" == typeof n && (n = [n]), n && (t = t.concat(n));
          }
        });
        var n = void 0;

        if (t.forEach(function (e) {
          if (!n) {
            var t = o.services.languageUtils.formatLanguageCode(e);
            o.services.languageUtils.isWhitelisted(t) && (n = t);
          }
        }), !n) {
          var a = this.i18nOptions.fallbackLng;
          "string" == typeof a && (a = [a]), a || (a = []), n = "[object Array]" === Object.prototype.toString.apply(a) ? a[0] : a[0] || a["default"] && a["default"][0];
        }

        return n;
      }
    }, {
      key: "cacheUserLanguage",
      value: function value(e, o) {
        var t = this;
        o || (o = this.options.caches), o && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || o.forEach(function (o) {
          t.detectors[o] && t.detectors[o].cacheUserLanguage(e, t.options);
        }));
      }
    }]), n;
  }();

  return v.type = "languageDetector", v;
}); // I18n Jquery

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t, a) {
    function i(n, a, i) {
      function r(t, n) {
        return f.parseDefaultValueFromContent ? e({}, t, {
          defaultValue: n
        }) : t;
      }

      if (0 !== a.length) {
        var o = "text";

        if (0 === a.indexOf("[")) {
          var l = a.split("]");
          a = l[1], o = l[0].substr(1, l[0].length - 1);
        }

        if (a.indexOf(";") === a.length - 1 && (a = a.substr(0, a.length - 2)), "html" === o) n.html(t.t(a, r(i, n.html())));else if ("text" === o) n.text(t.t(a, r(i, n.text())));else if ("prepend" === o) n.prepend(t.t(a, r(i, n.html())));else if ("append" === o) n.append(t.t(a, r(i, n.html())));else if (0 === o.indexOf("data-")) {
          var s = o.substr("data-".length),
              d = t.t(a, r(i, n.data(s)));
          n.data(s, d), n.attr(o, d);
        } else n.attr(o, t.t(a, r(i, n.attr(o))));
      }
    }

    function r(t, n) {
      var r = t.attr(f.selectorAttr);

      if (r || void 0 === r || !1 === r || (r = t.text() || t.val()), r) {
        var o = t,
            l = t.data(f.targetAttr);

        if (l && (o = t.find(l) || t), n || !0 !== f.useOptionsAttr || (n = t.data(f.optionsAttr)), n = n || {}, r.indexOf(";") >= 0) {
          var s = r.split(";");
          a.each(s, function (t, e) {
            "" !== e && i(o, e.trim(), n);
          });
        } else i(o, r, n);

        if (!0 === f.useOptionsAttr) {
          var d = {};
          d = e({
            clone: d
          }, n), delete d.lng, t.data(f.optionsAttr, d);
        }
      }
    }

    function o(t) {
      return this.each(function () {
        r(a(this), t), a(this).find("[" + f.selectorAttr + "]").each(function () {
          r(a(this), t);
        });
      });
    }

    var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    f = e({}, n, f), a[f.tName] = t.t.bind(t), a[f.i18nName] = t, a.fn[f.handleName] = o;
  }

  var e = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var a in n) {
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
      }
    }

    return t;
  },
      n = {
    tName: "t",
    i18nName: "i18n",
    handleName: "localize",
    selectorAttr: "data-i18n",
    targetAttr: "i18n-target",
    optionsAttr: "i18n-options",
    useOptionsAttr: !1,
    parseDefaultValueFromContent: !0
  };

  return {
    init: t
  };
}); // Promises - for IE11

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

(function () {
  "use strict";

  function t(t) {
    return "function" == typeof t || "object" == _typeof(t) && null !== t;
  }

  function e(t) {
    return "function" == typeof t;
  }

  function n(t) {
    G = t;
  }

  function r(t) {
    Q = t;
  }

  function o() {
    return function () {
      process.nextTick(a);
    };
  }

  function i() {
    return function () {
      B(a);
    };
  }

  function s() {
    var t = 0,
        e = new X(a),
        n = document.createTextNode("");
    return e.observe(n, {
      characterData: !0
    }), function () {
      n.data = t = ++t % 2;
    };
  }

  function u() {
    var t = new MessageChannel();
    return t.port1.onmessage = a, function () {
      t.port2.postMessage(0);
    };
  }

  function c() {
    return function () {
      setTimeout(a, 1);
    };
  }

  function a() {
    for (var t = 0; J > t; t += 2) {
      var e = tt[t],
          n = tt[t + 1];
      e(n), tt[t] = void 0, tt[t + 1] = void 0;
    }

    J = 0;
  }

  function f() {
    try {
      var t = require,
          e = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vertx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      return B = e.runOnLoop || e.runOnContext, i();
    } catch (n) {
      return c();
    }
  }

  function l(t, e) {
    var n = this,
        r = new this.constructor(p);
    void 0 === r[rt] && k(r);
    var o = n._state;

    if (o) {
      var i = arguments[o - 1];
      Q(function () {
        x(o, r, i, n._result);
      });
    } else E(n, r, t, e);

    return r;
  }

  function h(t) {
    var e = this;
    if (t && "object" == _typeof(t) && t.constructor === e) return t;
    var n = new e(p);
    return g(n, t), n;
  }

  function p() {}

  function _() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function d() {
    return new TypeError("A promises callback cannot return that same promise.");
  }

  function v(t) {
    try {
      return t.then;
    } catch (e) {
      return ut.error = e, ut;
    }
  }

  function y(t, e, n, r) {
    try {
      t.call(e, n, r);
    } catch (o) {
      return o;
    }
  }

  function m(t, e, n) {
    Q(function (t) {
      var r = !1,
          o = y(n, e, function (n) {
        r || (r = !0, e !== n ? g(t, n) : S(t, n));
      }, function (e) {
        r || (r = !0, j(t, e));
      }, "Settle: " + (t._label || " unknown promise"));
      !r && o && (r = !0, j(t, o));
    }, t);
  }

  function b(t, e) {
    e._state === it ? S(t, e._result) : e._state === st ? j(t, e._result) : E(e, void 0, function (e) {
      g(t, e);
    }, function (e) {
      j(t, e);
    });
  }

  function w(t, n, r) {
    n.constructor === t.constructor && r === et && constructor.resolve === nt ? b(t, n) : r === ut ? j(t, ut.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n);
  }

  function g(e, n) {
    e === n ? j(e, _()) : t(n) ? w(e, n, v(n)) : S(e, n);
  }

  function A(t) {
    t._onerror && t._onerror(t._result), T(t);
  }

  function S(t, e) {
    t._state === ot && (t._result = e, t._state = it, 0 !== t._subscribers.length && Q(T, t));
  }

  function j(t, e) {
    t._state === ot && (t._state = st, t._result = e, Q(A, t));
  }

  function E(t, e, n, r) {
    var o = t._subscribers,
        i = o.length;
    t._onerror = null, o[i] = e, o[i + it] = n, o[i + st] = r, 0 === i && t._state && Q(T, t);
  }

  function T(t) {
    var e = t._subscribers,
        n = t._state;

    if (0 !== e.length) {
      for (var r, o, i = t._result, s = 0; s < e.length; s += 3) {
        r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
      }

      t._subscribers.length = 0;
    }
  }

  function M() {
    this.error = null;
  }

  function P(t, e) {
    try {
      return t(e);
    } catch (n) {
      return ct.error = n, ct;
    }
  }

  function x(t, n, r, o) {
    var i,
        s,
        u,
        c,
        a = e(r);

    if (a) {
      if (i = P(r, o), i === ct ? (c = !0, s = i.error, i = null) : u = !0, n === i) return void j(n, d());
    } else i = o, u = !0;

    n._state !== ot || (a && u ? g(n, i) : c ? j(n, s) : t === it ? S(n, i) : t === st && j(n, i));
  }

  function C(t, e) {
    try {
      e(function (e) {
        g(t, e);
      }, function (e) {
        j(t, e);
      });
    } catch (n) {
      j(t, n);
    }
  }

  function O() {
    return at++;
  }

  function k(t) {
    t[rt] = at++, t._state = void 0, t._result = void 0, t._subscribers = [];
  }

  function Y(t) {
    return new _t(this, t).promise;
  }

  function q(t) {
    var e = this;
    return new e(I(t) ? function (n, r) {
      for (var o = t.length, i = 0; o > i; i++) {
        e.resolve(t[i]).then(n, r);
      }
    } : function (t, e) {
      e(new TypeError("You must pass an array to race."));
    });
  }

  function F(t) {
    var e = this,
        n = new e(p);
    return j(n, t), n;
  }

  function D() {
    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
  }

  function K() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  function L(t) {
    this[rt] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && D(), this instanceof L ? C(this, t) : K());
  }

  function N(t, e) {
    this._instanceConstructor = t, this.promise = new t(p), this.promise[rt] || k(this.promise), I(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, U());
  }

  function U() {
    return new Error("Array Methods must be provided an Array");
  }

  function W() {
    var t;
    if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
      t = Function("return this")();
    } catch (e) {
      throw new Error("polyfill failed because global object is unavailable in this environment");
    }
    var n = t.Promise;
    (!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (t.Promise = pt);
  }

  var z;
  z = Array.isArray ? Array.isArray : function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };

  var B,
      G,
      H,
      I = z,
      J = 0,
      Q = function Q(t, e) {
    tt[J] = t, tt[J + 1] = e, J += 2, 2 === J && (G ? G(a) : H());
  },
      R = "undefined" != typeof window ? window : void 0,
      V = R || {},
      X = V.MutationObserver || V.WebKitMutationObserver,
      Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
      $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
      tt = new Array(1e3);

  H = Z ? o() : X ? s() : $ ? u() : void 0 === R && "function" == "function" ? f() : c();
  var et = l,
      nt = h,
      rt = Math.random().toString(36).substring(16),
      ot = void 0,
      it = 1,
      st = 2,
      ut = new M(),
      ct = new M(),
      at = 0,
      ft = Y,
      lt = q,
      ht = F,
      pt = L;
  L.all = ft, L.race = lt, L.resolve = nt, L.reject = ht, L._setScheduler = n, L._setAsap = r, L._asap = Q, L.prototype = {
    constructor: L,
    then: et,
    "catch": function _catch(t) {
      return this.then(null, t);
    }
  };
  var _t = N;
  N.prototype._enumerate = function () {
    for (var t = this.length, e = this._input, n = 0; this._state === ot && t > n; n++) {
      this._eachEntry(e[n], n);
    }
  }, N.prototype._eachEntry = function (t, e) {
    var n = this._instanceConstructor,
        r = n.resolve;

    if (r === nt) {
      var o = v(t);
      if (o === et && t._state !== ot) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === pt) {
        var i = new n(p);
        w(i, t, o), this._willSettleAt(i, e);
      } else this._willSettleAt(new n(function (e) {
        e(t);
      }), e);
    } else this._willSettleAt(r(t), e);
  }, N.prototype._settledAt = function (t, e, n) {
    var r = this.promise;
    r._state === ot && (this._remaining--, t === st ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result);
  }, N.prototype._willSettleAt = function (t, e) {
    var n = this;
    E(t, void 0, function (t) {
      n._settledAt(it, e, t);
    }, function (t) {
      n._settledAt(st, e, t);
    });
  };
  var dt = W,
      vt = {
    Promise: pt,
    polyfill: dt
  };
   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return vt;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined, dt();
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/app-assets/vendors/js/vendors.min.js ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js ./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js ./resources/app-assets/js/scripts/configs/vertical-menu-dark.js ./resources/app-assets/js/core/app-menu.js ./resources/app-assets/js/core/app.js ./resources/app-assets/js/scripts/components.js ./resources/app-assets/js/scripts/footer.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\vendors\js\vendors.min.js */"./resources/app-assets/vendors/js/vendors.min.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\fonts\LivIconsEvo\js\LivIconsEvo.tools.js */"./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\fonts\LivIconsEvo\js\LivIconsEvo.defaults.js */"./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\fonts\LivIconsEvo\js\LivIconsEvo.min.js */"./resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\js\scripts\configs\vertical-menu-dark.js */"./resources/app-assets/js/scripts/configs/vertical-menu-dark.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\js\core\app-menu.js */"./resources/app-assets/js/core/app-menu.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\js\core\app.js */"./resources/app-assets/js/core/app.js");
__webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\js\scripts\components.js */"./resources/app-assets/js/scripts/components.js");
module.exports = __webpack_require__(/*! C:\OSPanel\domains\multymodal\resources\app-assets\js\scripts\footer.js */"./resources/app-assets/js/scripts/footer.js");


/***/ })

/******/ });