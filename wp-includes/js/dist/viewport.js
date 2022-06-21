<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["viewport"] =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "PR0u");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "PR0u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
=======
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
>>>>>>> main
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
<<<<<<< HEAD
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });
__webpack_require__.d(__webpack_exports__, "ifViewportMatches", function() { return /* reexport */ if_viewport_matches; });
__webpack_require__.d(__webpack_exports__, "withViewportMatch", function() { return /* reexport */ with_viewport_match; });
=======
__webpack_require__.d(__webpack_exports__, {
  "ifViewportMatches": function() { return /* reexport */ if_viewport_matches; },
  "store": function() { return /* reexport */ store; },
  "withViewportMatch": function() { return /* reexport */ with_viewport_match; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/viewport/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(actions_namespaceObject, "setIsMatching", function() { return actions_setIsMatching; });
=======
__webpack_require__.d(actions_namespaceObject, {
  "setIsMatching": function() { return setIsMatching; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/viewport/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(selectors_namespaceObject, "isViewportMatch", function() { return isViewportMatch; });

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/reducer.js
=======
__webpack_require__.d(selectors_namespaceObject, {
  "isViewportMatch": function() { return isViewportMatch; }
});

;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/reducer.js
>>>>>>> main
/**
 * Reducer returning the viewport state, as keys of breakpoint queries with
 * boolean value representing whether query is matched.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_MATCHING':
      return action.values;
  }

  return state;
}

/* harmony default export */ var store_reducer = (reducer);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/actions.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/actions.js
>>>>>>> main
/**
 * Returns an action object used in signalling that viewport queries have been
 * updated. Values are specified as an object of breakpoint query keys where
 * value represents whether query matches.
 *
 * @param {Object} values Breakpoint query matches.
 *
 * @return {Object} Action object.
 */
<<<<<<< HEAD
function actions_setIsMatching(values) {
=======
function setIsMatching(values) {
>>>>>>> main
  return {
    type: 'SET_IS_MATCHING',
    values
  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/selectors.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/selectors.js
>>>>>>> main
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {Object} state Viewport state object.
 * @param {string} query Query string. Includes operator and breakpoint name,
 *                       space separated. Operator defaults to >=.
 *
 * @example
 *
 * ```js
 * isViewportMatch( state, '< huge' );
 * isViewPortMatch( state, 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */
function isViewportMatch(state, query) {
  // Default to `>=` if no operator is present.
  if (query.indexOf(' ') === -1) {
    query = '>= ' + query;
  }

  return !!state[query];
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/store/index.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/viewport';
/**
 * Store definition for the viewport namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

<<<<<<< HEAD
const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
=======
const store = (0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME, {
>>>>>>> main
  reducer: store_reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject
});
<<<<<<< HEAD
Object(external_wp_data_["register"])(store);

// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/listener.js
=======
(0,external_wp_data_namespaceObject.register)(store);

;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/listener.js
>>>>>>> main
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const addDimensionsEventListener = (breakpoints, operators) => {
  /**
   * Callback invoked when media query state should be updated. Is invoked a
   * maximum of one time per call stack.
   */
<<<<<<< HEAD
  const setIsMatching = Object(external_lodash_["debounce"])(() => {
    const values = Object(external_lodash_["mapValues"])(queries, query => query.matches);
    Object(external_wp_data_["dispatch"])(store).setIsMatching(values);
=======
  const setIsMatching = (0,external_lodash_namespaceObject.debounce)(() => {
    const values = (0,external_lodash_namespaceObject.mapValues)(queries, query => query.matches);
    (0,external_wp_data_namespaceObject.dispatch)(store).setIsMatching(values);
>>>>>>> main
  }, {
    leading: true
  });
  /**
   * Hash of breakpoint names with generated MediaQueryList for corresponding
   * media query.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
   *
   * @type {Object<string,MediaQueryList>}
   */

<<<<<<< HEAD
  const queries = Object(external_lodash_["reduce"])(breakpoints, (result, width, name) => {
    Object(external_lodash_["forEach"])(operators, (condition, operator) => {
=======
  const queries = (0,external_lodash_namespaceObject.reduce)(breakpoints, (result, width, name) => {
    (0,external_lodash_namespaceObject.forEach)(operators, (condition, operator) => {
>>>>>>> main
      const list = window.matchMedia(`(${condition}: ${width}px)`);
      list.addListener(setIsMatching);
      const key = [operator, name].join(' ');
      result[key] = list;
    });
    return result;
  }, {});
<<<<<<< HEAD
  window.addEventListener('orientationchange', setIsMatching); // Set initial values
=======
  window.addEventListener('orientationchange', setIsMatching); // Set initial values.
>>>>>>> main

  setIsMatching();
  setIsMatching.flush();
};

/* harmony default export */ var listener = (addDimensionsEventListener);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/with-viewport-match.js
=======
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/with-viewport-match.js
>>>>>>> main



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Higher-order component creator, creating a new component which renders with
 * the given prop names, where the value passed to the underlying component is
 * the result of the query assigned as the object's value.
 *
 * @see isViewportMatch
 *
 * @param {Object} queries Object of prop name to viewport query.
 *
 * @example
 *
 * ```jsx
 * function MyComponent( { isMobile } ) {
 * 	return (
 * 		<div>Currently: { isMobile ? 'Mobile' : 'Not Mobile' }</div>
 * 	);
 * }
 *
 * MyComponent = withViewportMatch( { isMobile: '< small' } )( MyComponent );
 * ```
 *
 * @return {Function} Higher-order component.
 */

const withViewportMatch = queries => {
<<<<<<< HEAD
  const useViewPortQueriesResult = () => Object(external_lodash_["mapValues"])(queries, query => {
=======
  const useViewPortQueriesResult = () => (0,external_lodash_namespaceObject.mapValues)(queries, query => {
>>>>>>> main
    let [operator, breakpointName] = query.split(' ');

    if (breakpointName === undefined) {
      breakpointName = operator;
      operator = '>=';
    } // Hooks should unconditionally execute in the same order,
    // we are respecting that as from the static query of the HOC we generate
    // a hook that calls other hooks always in the same order (because the query never changes).
    // eslint-disable-next-line react-hooks/rules-of-hooks


<<<<<<< HEAD
    return Object(external_wp_compose_["useViewportMatch"])(breakpointName, operator);
  });

  return Object(external_wp_compose_["createHigherOrderComponent"])(WrappedComponent => {
    return Object(external_wp_compose_["pure"])(props => {
      const queriesResult = useViewPortQueriesResult();
      return Object(external_wp_element_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({}, props, queriesResult));
=======
    return (0,external_wp_compose_namespaceObject.useViewportMatch)(breakpointName, operator);
  });

  return (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(WrappedComponent => {
    return (0,external_wp_compose_namespaceObject.pure)(props => {
      const queriesResult = useViewPortQueriesResult();
      return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, _extends({}, props, queriesResult));
>>>>>>> main
    });
  }, 'withViewportMatch');
};

/* harmony default export */ var with_viewport_match = (withViewportMatch);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/if-viewport-matches.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/if-viewport-matches.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Higher-order component creator, creating a new component which renders if
 * the viewport query is satisfied.
 *
 * @see withViewportMatches
 *
 * @param {string} query Viewport query.
 *
 * @example
 *
 * ```jsx
 * function MyMobileComponent() {
 * 	return <div>I'm only rendered on mobile viewports!</div>;
 * }
 *
 * MyMobileComponent = ifViewportMatches( '< small' )( MyMobileComponent );
 * ```
 *
 * @return {Function} Higher-order component.
 */

<<<<<<< HEAD
const ifViewportMatches = query => Object(external_wp_compose_["createHigherOrderComponent"])(Object(external_wp_compose_["compose"])([with_viewport_match({
  isViewportMatch: query
}), Object(external_wp_compose_["ifCondition"])(props => props.isViewportMatch)]), 'ifViewportMatches');

/* harmony default export */ var if_viewport_matches = (ifViewportMatches);

// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/index.js
=======
const ifViewportMatches = query => (0,external_wp_compose_namespaceObject.createHigherOrderComponent)((0,external_wp_compose_namespaceObject.compose)([with_viewport_match({
  isViewportMatch: query
}), (0,external_wp_compose_namespaceObject.ifCondition)(props => props.isViewportMatch)]), 'ifViewportMatches');

/* harmony default export */ var if_viewport_matches = (ifViewportMatches);

;// CONCATENATED MODULE: ./node_modules/@wordpress/viewport/build-module/index.js
>>>>>>> main
/**
 * Internal dependencies
 */




/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Object}
 */

const BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * Hash of query operators with corresponding condition for media query.
 *
 * @type {Object}
 */

const OPERATORS = {
  '<': 'max-width',
  '>=': 'min-width'
};
listener(BREAKPOINTS, OPERATORS);

<<<<<<< HEAD

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "wx14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ })

/******/ });
=======
(window.wp = window.wp || {}).viewport = __webpack_exports__;
/******/ })()
;
>>>>>>> main
