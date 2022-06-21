<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["customizeWidgets"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "9pbN");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1CF3":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "6aBm":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "9pbN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

=======
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4403:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
>>>>>>> main
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
<<<<<<< HEAD
__webpack_require__.d(__webpack_exports__, "initialize", function() { return /* binding */ initialize; });
=======
__webpack_require__.d(__webpack_exports__, {
  "initialize": function() { return /* binding */ initialize; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(selectors_namespaceObject, "isInserterOpened", function() { return selectors_isInserterOpened; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetInsertionPoint", function() { return __experimentalGetInsertionPoint; });
=======
__webpack_require__.d(selectors_namespaceObject, {
  "__experimentalGetInsertionPoint": function() { return __experimentalGetInsertionPoint; },
  "isInserterOpened": function() { return isInserterOpened; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/customize-widgets/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(actions_namespaceObject, "setIsInserterOpened", function() { return actions_setIsInserterOpened; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","blockLibrary"]
var external_wp_blockLibrary_ = __webpack_require__("QyPg");

// EXTERNAL MODULE: external ["wp","widgets"]
var external_wp_widgets_ = __webpack_require__("GLVC");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: ./node_modules/@wordpress/interface/build-module/index.js + 17 modules
var build_module = __webpack_require__("U60i");

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__("hF7m");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js
=======
__webpack_require__.d(actions_namespaceObject, {
  "setIsInserterOpened": function() { return setIsInserterOpened; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/actions.js
var store_actions_namespaceObject = {};
__webpack_require__.r(store_actions_namespaceObject);
__webpack_require__.d(store_actions_namespaceObject, {
  "disableComplementaryArea": function() { return disableComplementaryArea; },
  "enableComplementaryArea": function() { return enableComplementaryArea; },
  "pinItem": function() { return pinItem; },
  "setFeatureDefaults": function() { return setFeatureDefaults; },
  "setFeatureValue": function() { return setFeatureValue; },
  "toggleFeature": function() { return toggleFeature; },
  "unpinItem": function() { return unpinItem; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/selectors.js
var store_selectors_namespaceObject = {};
__webpack_require__.r(store_selectors_namespaceObject);
__webpack_require__.d(store_selectors_namespaceObject, {
  "getActiveComplementaryArea": function() { return getActiveComplementaryArea; },
  "isFeatureActive": function() { return isFeatureActive; },
  "isItemPinned": function() { return isItemPinned; }
});

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","blockLibrary"]
var external_wp_blockLibrary_namespaceObject = window["wp"]["blockLibrary"];
;// CONCATENATED MODULE: external ["wp","widgets"]
var external_wp_widgets_namespaceObject = window["wp"]["widgets"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","preferences"]
var external_wp_preferences_namespaceObject = window["wp"]["preferences"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_namespaceObject = window["wp"]["keyboardShortcuts"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */






function CopyButton(_ref) {
  let {
    text,
    children
  } = _ref;
<<<<<<< HEAD
  const ref = Object(external_wp_compose_["useCopyToClipboard"])(text);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
=======
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
>>>>>>> main
    variant: "secondary",
    ref: ref
  }, children);
}

<<<<<<< HEAD
class error_boundary_ErrorBoundary extends external_wp_element_["Component"] {
=======
class ErrorBoundary extends external_wp_element_namespaceObject.Component {
>>>>>>> main
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
      className: "customize-widgets-error-boundary",
      actions: [Object(external_wp_element_["createElement"])(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, Object(external_wp_i18n_["__"])('Copy Error'))]
    }, Object(external_wp_i18n_["__"])('The editor has encountered an unexpected error.'));
=======
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.Warning, {
      className: "customize-widgets-error-boundary",
      actions: [(0,external_wp_element_namespaceObject.createElement)(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, (0,external_wp_i18n_namespaceObject.__)('Copy Error'))]
    }, (0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error.'));
>>>>>>> main
  }

}

<<<<<<< HEAD
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// EXTERNAL MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_ = __webpack_require__("6aBm");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js
=======
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_namespaceObject = window["wp"]["mediaUtils"];
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
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js
>>>>>>> main



/**
 * WordPress dependencies
 */






function BlockInspectorButton(_ref) {
  let {
    inspector,
    closeMenu,
    ...props
  } = _ref;
<<<<<<< HEAD
  const selectedBlockClientId = Object(external_wp_data_["useSelect"])(select => select(external_wp_blockEditor_["store"]).getSelectedBlockClientId(), []);
  const selectedBlock = Object(external_wp_element_["useMemo"])(() => document.getElementById(`block-${selectedBlockClientId}`), [selectedBlockClientId]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], Object(esm_extends["a" /* default */])({
=======
  const selectedBlockClientId = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_blockEditor_namespaceObject.store).getSelectedBlockClientId(), []);
  const selectedBlock = (0,external_wp_element_namespaceObject.useMemo)(() => document.getElementById(`block-${selectedBlockClientId}`), [selectedBlockClientId]);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, _extends({
>>>>>>> main
    onClick: () => {
      // Open the inspector.
      inspector.open({
        returnFocusWhenClose: selectedBlock
      }); // Then close the dropdown menu.

      closeMenu();
    }
<<<<<<< HEAD
  }, props), Object(external_wp_i18n_["__"])('Show more settings'));
=======
  }, props), (0,external_wp_i18n_namespaceObject.__)('Show more settings'));
>>>>>>> main
}

/* harmony default export */ var block_inspector_button = (BlockInspectorButton);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
<<<<<<< HEAD
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js
var library_undo = __webpack_require__("Ntru");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js
var library_redo = __webpack_require__("K2cm");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plus.js
var plus = __webpack_require__("Q4Sy");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js
=======
var classnames = __webpack_require__(4403);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: external ["wp","keycodes"]
var external_wp_keycodes_namespaceObject = window["wp"]["keycodes"];
;// CONCATENATED MODULE: external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js


/**
 * WordPress dependencies
 */

const undo = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ var library_undo = (undo);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js


/**
 * WordPress dependencies
 */

const redo = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ var library_redo = (redo);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus.js


/**
 * WordPress dependencies
 */

const plus = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ var library_plus = (plus);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js


/**
 * WordPress dependencies
 */

const closeSmall = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ var close_small = (closeSmall);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Reducer tracking whether the inserter is open.
 *
 * @param {boolean|Object} state
 * @param {Object}         action
 */

function blockInserterPanel() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}

<<<<<<< HEAD
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  blockInserterPanel
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js
=======
/* harmony default export */ var reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  blockInserterPanel
}));

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js
>>>>>>> main
/**
 * Returns true if the inserter is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the inserter is opened.
 */
<<<<<<< HEAD
function selectors_isInserterOpened(state) {
=======
function isInserterOpened(state) {
>>>>>>> main
  return !!state.blockInserterPanel;
}
/**
 * Get the insertion point for the inserter.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID and index to insert at.
 */

function __experimentalGetInsertionPoint(state) {
  const {
    rootClientId,
    insertionIndex
  } = state.blockInserterPanel;
  return {
    rootClientId,
    insertionIndex
  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/actions.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/actions.js
>>>>>>> main
/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @return {Object} Action object.
 */
<<<<<<< HEAD
function actions_setIsInserterOpened(value) {
=======
function setIsInserterOpened(value) {
>>>>>>> main
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/constants.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/constants.js
>>>>>>> main
/**
 * Module Constants
 */
const STORE_NAME = 'core/customize-widgets';

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/store/index.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Block editor data store configuration.
 *
<<<<<<< HEAD
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
=======
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registering-a-store
>>>>>>> main
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject
};
/**
 * Store definition for the edit widgets namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

<<<<<<< HEAD
const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, storeConfig); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, storeConfig);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js
=======
const store = (0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME, storeConfig);
(0,external_wp_data_namespaceObject.register)(store);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function Inserter(_ref) {
  let {
    setIsOpened
  } = _ref;
<<<<<<< HEAD
  const inserterTitleId = Object(external_wp_compose_["useInstanceId"])(Inserter, 'customize-widget-layout__inserter-panel-title');
  const insertionPoint = Object(external_wp_data_["useSelect"])(select => select(store).__experimentalGetInsertionPoint(), []);
  return Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-layout__inserter-panel",
    "aria-labelledby": inserterTitleId
  }, Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-layout__inserter-panel-header"
  }, Object(external_wp_element_["createElement"])("h2", {
    id: inserterTitleId,
    className: "customize-widgets-layout__inserter-panel-header-title"
  }, Object(external_wp_i18n_["__"])('Add a block')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "customize-widgets-layout__inserter-panel-header-close-button",
    icon: close_small["a" /* default */],
    onClick: () => setIsOpened(false),
    "aria-label": Object(external_wp_i18n_["__"])('Close inserter')
  })), Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-layout__inserter-panel-content"
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalLibrary"], {
=======
  const inserterTitleId = (0,external_wp_compose_namespaceObject.useInstanceId)(Inserter, 'customize-widget-layout__inserter-panel-title');
  const insertionPoint = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).__experimentalGetInsertionPoint(), []);
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel",
    "aria-labelledby": inserterTitleId
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel-header"
  }, (0,external_wp_element_namespaceObject.createElement)("h2", {
    id: inserterTitleId,
    className: "customize-widgets-layout__inserter-panel-header-title"
  }, (0,external_wp_i18n_namespaceObject.__)('Add a block')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    className: "customize-widgets-layout__inserter-panel-header-close-button",
    icon: close_small,
    onClick: () => setIsOpened(false),
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Close inserter')
  })), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel-content"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__experimentalLibrary, {
>>>>>>> main
    rootClientId: insertionPoint.rootClientId,
    __experimentalInsertionIndex: insertionPoint.insertionIndex,
    showInserterHelpPanel: true,
    onSelect: () => setIsOpened(false)
  })));
}

/* harmony default export */ var components_inserter = (Inserter);

<<<<<<< HEAD
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__("K+tz");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js


/**
 * WordPress dependencies
 */

const external = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ var library_external = (external);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/more-vertical.js


/**
 * WordPress dependencies
 */

const moreVertical = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ var more_vertical = (moreVertical);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function MoreMenuDropdown(_ref) {
  let {
    as: DropdownComponent = external_wp_components_namespaceObject.DropdownMenu,
    className,

    /* translators: button label text should, if possible, be under 16 characters. */
    label = (0,external_wp_i18n_namespaceObject.__)('Options'),
    popoverProps,
    toggleProps,
    children
  } = _ref;
  return (0,external_wp_element_namespaceObject.createElement)(DropdownComponent, {
    className: classnames_default()('interface-more-menu-dropdown', className),
    icon: more_vertical,
    label: label,
    popoverProps: {
      position: 'bottom left',
      ...popoverProps,
      className: classnames_default()('interface-more-menu-dropdown__content', popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js













;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * WordPress dependencies
 */


/**
 * Enable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 */

const enableComplementaryArea = (scope, area) => _ref => {
  let {
    registry
  } = _ref;

  // Return early if there's no area.
  if (!area) {
    return;
  }

  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'complementaryArea', area);
};
/**
 * Disable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 */

const disableComplementaryArea = scope => _ref2 => {
  let {
    registry
  } = _ref2;
  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'complementaryArea', null);
};
/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */

const pinItem = (scope, item) => _ref3 => {
  let {
    registry
  } = _ref3;

  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems'); // The item is already pinned, there's nothing to do.

  if ((pinnedItems === null || pinnedItems === void 0 ? void 0 : pinnedItems[item]) === true) {
    return;
  }

  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: true
  });
};
/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */

const unpinItem = (scope, item) => _ref4 => {
  let {
    registry
  } = _ref4;

  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: false
  });
};
/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */

function toggleFeature(scope, featureName) {
  return function (_ref5) {
    let {
      registry
    } = _ref5;
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).toggle(scope, featureName);
  };
}
/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */

function setFeatureValue(scope, featureName, value) {
  return function (_ref6) {
    let {
      registry
    } = _ref6;
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, featureName, !!value);
  };
}
/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */

function setFeatureDefaults(scope, defaults) {
  return function (_ref7) {
    let {
      registry
    } = _ref7;
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).setDefaults(scope, defaults);
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/selectors.js
/**
 * WordPress dependencies
 */



/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string} The complementary area that is active in the given scope.
 */

const getActiveComplementaryArea = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope) => {
  return select(external_wp_preferences_namespaceObject.store).get(scope, 'complementaryArea');
});
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */

const isItemPinned = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope, item) => {
  var _pinnedItems$item;

  const pinnedItems = select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems === null || pinnedItems === void 0 ? void 0 : pinnedItems[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});
/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */

const isFeatureActive = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope, featureName) => {
  external_wp_deprecated_default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(external_wp_preferences_namespaceObject.store).get(scope, featureName);
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/constants.js
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const constants_STORE_NAME = 'core/interface';

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store_store = (0,external_wp_data_namespaceObject.createReduxStore)(constants_STORE_NAME, {
  reducer: () => {},
  actions: store_actions_namespaceObject,
  selectors: store_selectors_namespaceObject
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

(0,external_wp_data_namespaceObject.register)(store_store);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js



;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js
>>>>>>> main
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
<<<<<<< HEAD
  description: Object(external_wp_i18n_["__"])('Make the selected text bold.')
=======
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text bold.')
>>>>>>> main
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
<<<<<<< HEAD
  description: Object(external_wp_i18n_["__"])('Make the selected text italic.')
=======
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text italic.')
>>>>>>> main
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
<<<<<<< HEAD
  description: Object(external_wp_i18n_["__"])('Convert the selected text into a link.')
=======
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the selected text into a link.')
>>>>>>> main
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
<<<<<<< HEAD
  description: Object(external_wp_i18n_["__"])('Remove a link.')
=======
  description: (0,external_wp_i18n_namespaceObject.__)('Remove a link.')
>>>>>>> main
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
<<<<<<< HEAD
  description: Object(external_wp_i18n_["__"])('Underline the selected text.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js
=======
  description: (0,external_wp_i18n_namespaceObject.__)('Underline the selected text.')
}];

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js
>>>>>>> main


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function KeyCombination(_ref) {
  let {
    keyCombination,
    forceAriaLabel
  } = _ref;
<<<<<<< HEAD
  const shortcut = keyCombination.modifier ? external_wp_keycodes_["displayShortcutList"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? external_wp_keycodes_["shortcutAriaLabel"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return Object(external_wp_element_["createElement"])("kbd", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, Object(external_lodash_["castArray"])(shortcut).map((character, index) => {
    if (character === '+') {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
=======
  const shortcut = keyCombination.modifier ? external_wp_keycodes_namespaceObject.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? external_wp_keycodes_namespaceObject.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return (0,external_wp_element_namespaceObject.createElement)("kbd", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, (0,external_lodash_namespaceObject.castArray)(shortcut).map((character, index) => {
    if (character === '+') {
      return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, {
>>>>>>> main
        key: index
      }, character);
    }

<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])("kbd", {
=======
    return (0,external_wp_element_namespaceObject.createElement)("kbd", {
>>>>>>> main
      key: index,
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key"
    }, character);
  }));
}

function Shortcut(_ref2) {
  let {
    description,
    keyCombination,
    aliases = [],
    ariaLabel
  } = _ref2;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-description"
  }, description), Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-term"
  }, Object(external_wp_element_["createElement"])(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map((alias, index) => Object(external_wp_element_["createElement"])(KeyCombination, {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-term"
  }, (0,external_wp_element_namespaceObject.createElement)(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map((alias, index) => (0,external_wp_element_namespaceObject.createElement)(KeyCombination, {
>>>>>>> main
    keyCombination: alias,
    forceAriaLabel: ariaLabel,
    key: index
  }))));
}

/* harmony default export */ var keyboard_shortcut_help_modal_shortcut = (Shortcut);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js
>>>>>>> main


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DynamicShortcut(_ref) {
  let {
    name
  } = _ref;
  const {
    keyCombination,
    description,
    aliases
<<<<<<< HEAD
  } = Object(external_wp_data_["useSelect"])(select => {
=======
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
>>>>>>> main
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
<<<<<<< HEAD
    } = select(external_wp_keyboardShortcuts_["store"]);
=======
    } = select(external_wp_keyboardShortcuts_namespaceObject.store);
>>>>>>> main
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);

  if (!keyCombination) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, {
=======
  return (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcut_help_modal_shortcut, {
>>>>>>> main
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}

/* harmony default export */ var dynamic_shortcut = (DynamicShortcut);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js
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





const ShortcutList = _ref => {
  let {
    shortcuts
  } = _ref;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
<<<<<<< HEAD
    Object(external_wp_element_["createElement"])("ul", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-list",
      role: "list"
    }, shortcuts.map((shortcut, index) => Object(external_wp_element_["createElement"])("li", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut",
      key: index
    }, Object(external_lodash_["isString"])(shortcut) ? Object(external_wp_element_["createElement"])(dynamic_shortcut, {
      name: shortcut
    }) : Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, shortcut))))
=======
    (0,external_wp_element_namespaceObject.createElement)("ul", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-list",
      role: "list"
    }, shortcuts.map((shortcut, index) => (0,external_wp_element_namespaceObject.createElement)("li", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut",
      key: index
    }, (0,external_lodash_namespaceObject.isString)(shortcut) ? (0,external_wp_element_namespaceObject.createElement)(dynamic_shortcut, {
      name: shortcut
    }) : (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcut_help_modal_shortcut, shortcut))))
>>>>>>> main
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
};

const ShortcutSection = _ref2 => {
  let {
    title,
    shortcuts,
    className
  } = _ref2;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("section", {
    className: classnames_default()('customize-widgets-keyboard-shortcut-help-modal__section', className)
  }, !!title && Object(external_wp_element_["createElement"])("h2", {
    className: "customize-widgets-keyboard-shortcut-help-modal__section-title"
  }, title), Object(external_wp_element_["createElement"])(ShortcutList, {
=======
  return (0,external_wp_element_namespaceObject.createElement)("section", {
    className: classnames_default()('customize-widgets-keyboard-shortcut-help-modal__section', className)
  }, !!title && (0,external_wp_element_namespaceObject.createElement)("h2", {
    className: "customize-widgets-keyboard-shortcut-help-modal__section-title"
  }, title), (0,external_wp_element_namespaceObject.createElement)(ShortcutList, {
>>>>>>> main
    shortcuts: shortcuts
  }));
};

const ShortcutCategorySection = _ref3 => {
  let {
    title,
    categoryName,
    additionalShortcuts = []
  } = _ref3;
<<<<<<< HEAD
  const categoryShortcuts = Object(external_wp_data_["useSelect"])(select => {
    return select(external_wp_keyboardShortcuts_["store"]).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return Object(external_wp_element_["createElement"])(ShortcutSection, {
=======
  const categoryShortcuts = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_keyboardShortcuts_namespaceObject.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return (0,external_wp_element_namespaceObject.createElement)(ShortcutSection, {
>>>>>>> main
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal(_ref4) {
  let {
    isModalActive,
    toggleModal
  } = _ref4;
  const {
    registerShortcut
<<<<<<< HEAD
  } = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]);
  registerShortcut({
    name: 'core/customize-widgets/keyboard-shortcuts',
    category: 'main',
    description: Object(external_wp_i18n_["__"])('Display these keyboard shortcuts.'),
=======
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_keyboardShortcuts_namespaceObject.store);
  registerShortcut({
    name: 'core/customize-widgets/keyboard-shortcuts',
    category: 'main',
    description: (0,external_wp_i18n_namespaceObject.__)('Display these keyboard shortcuts.'),
>>>>>>> main
    keyCombination: {
      modifier: 'access',
      character: 'h'
    }
  });
<<<<<<< HEAD
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/customize-widgets/keyboard-shortcuts', toggleModal);
=======
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleModal);
>>>>>>> main

  if (!isModalActive) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    className: "customize-widgets-keyboard-shortcut-help-modal",
    title: Object(external_wp_i18n_["__"])('Keyboard shortcuts'),
    closeLabel: Object(external_wp_i18n_["__"])('Close'),
    onRequestClose: toggleModal
  }, Object(external_wp_element_["createElement"])(ShortcutSection, {
    className: "customize-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/customize-widgets/keyboard-shortcuts']
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Global shortcuts'),
    categoryName: "global"
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Selection shortcuts'),
    categoryName: "selection"
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Block shortcuts'),
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    className: "customize-widgets-keyboard-shortcut-help-modal",
    title: (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts'),
    closeLabel: (0,external_wp_i18n_namespaceObject.__)('Close'),
    onRequestClose: toggleModal
  }, (0,external_wp_element_namespaceObject.createElement)(ShortcutSection, {
    className: "customize-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/customize-widgets/keyboard-shortcuts']
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Global shortcuts'),
    categoryName: "global"
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Selection shortcuts'),
    categoryName: "selection"
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Block shortcuts'),
>>>>>>> main
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
<<<<<<< HEAD
      description: Object(external_wp_i18n_["__"])('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: Object(external_wp_i18n_["__"])('Forward-slash')
    }]
  }), Object(external_wp_element_["createElement"])(ShortcutSection, {
    title: Object(external_wp_i18n_["__"])('Text formatting'),
=======
      description: (0,external_wp_i18n_namespaceObject.__)('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: (0,external_wp_i18n_namespaceObject.__)('Forward-slash')
    }]
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutSection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Text formatting'),
>>>>>>> main
    shortcuts: textFormattingShortcuts
  }));
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */







<<<<<<< HEAD
=======

>>>>>>> main
/**
 * Internal dependencies
 */


<<<<<<< HEAD
const POPOVER_PROPS = {
  className: 'customize-widgets-more-menu__content'
};
function MoreMenu() {
  const [isKeyboardShortcutsModalActive, setIsKeyboardShortcutsModalVisible] = Object(external_wp_element_["useState"])(false);

  const toggleKeyboardShortcutsModal = () => setIsKeyboardShortcutsModalVisible(!isKeyboardShortcutsModalActive);

  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/customize-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(build_module["f" /* MoreMenuDropdown */], {
    as: external_wp_components_["ToolbarDropdownMenu"],
    className: "customize-widgets-more-menu",
    popoverProps: POPOVER_PROPS
  }, () => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["_x"])('View', 'noun')
  }, Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/customize-widgets",
    feature: "fixedToolbar",
    label: Object(external_wp_i18n_["__"])('Top toolbar'),
    info: Object(external_wp_i18n_["__"])('Access all block and document tools in a single place'),
    messageActivated: Object(external_wp_i18n_["__"])('Top toolbar activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Top toolbar deactivated')
  })), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["__"])('Tools')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: () => {
      setIsKeyboardShortcutsModalVisible(true);
    },
    shortcut: external_wp_keycodes_["displayShortcut"].access('h')
  }, Object(external_wp_i18n_["__"])('Keyboard shortcuts')), Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/customize-widgets",
    feature: "welcomeGuide",
    label: Object(external_wp_i18n_["__"])('Welcome Guide')
  }), Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    role: "menuitem",
    icon: external["a" /* default */],
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(external_wp_i18n_["__"])('Help'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "span"
  },
  /* translators: accessibility text */
  Object(external_wp_i18n_["__"])('(opens in a new tab)')))), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["__"])('Preferences')
  }, Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/customize-widgets",
    feature: "keepCaretInsideBlock",
    label: Object(external_wp_i18n_["__"])('Contain text cursor inside block'),
    info: Object(external_wp_i18n_["__"])('Aids screen readers by stopping text caret from leaving blocks.'),
    messageActivated: Object(external_wp_i18n_["__"])('Contain text cursor inside block activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Contain text cursor inside block deactivated')
  })))), Object(external_wp_element_["createElement"])(KeyboardShortcutHelpModal, {
=======
function MoreMenu() {
  const [isKeyboardShortcutsModalActive, setIsKeyboardShortcutsModalVisible] = (0,external_wp_element_namespaceObject.useState)(false);

  const toggleKeyboardShortcutsModal = () => setIsKeyboardShortcutsModalVisible(!isKeyboardShortcutsModalActive);

  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(MoreMenuDropdown, {
    as: external_wp_components_namespaceObject.ToolbarDropdownMenu
  }, () => (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuGroup, {
    label: (0,external_wp_i18n_namespaceObject._x)('View', 'noun')
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
    name: "fixedToolbar",
    label: (0,external_wp_i18n_namespaceObject.__)('Top toolbar'),
    info: (0,external_wp_i18n_namespaceObject.__)('Access all block and document tools in a single place'),
    messageActivated: (0,external_wp_i18n_namespaceObject.__)('Top toolbar activated'),
    messageDeactivated: (0,external_wp_i18n_namespaceObject.__)('Top toolbar deactivated')
  })), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuGroup, {
    label: (0,external_wp_i18n_namespaceObject.__)('Tools')
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    onClick: () => {
      setIsKeyboardShortcutsModalVisible(true);
    },
    shortcut: external_wp_keycodes_namespaceObject.displayShortcut.access('h')
  }, (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts')), (0,external_wp_element_namespaceObject.createElement)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
    name: "welcomeGuide",
    label: (0,external_wp_i18n_namespaceObject.__)('Welcome Guide')
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    role: "menuitem",
    icon: library_external,
    href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/support/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,external_wp_i18n_namespaceObject.__)('Help'), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "span"
  },
  /* translators: accessibility text */
  (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)')))), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuGroup, {
    label: (0,external_wp_i18n_namespaceObject.__)('Preferences')
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
    name: "keepCaretInsideBlock",
    label: (0,external_wp_i18n_namespaceObject.__)('Contain text cursor inside block'),
    info: (0,external_wp_i18n_namespaceObject.__)('Aids screen readers by stopping text caret from leaving blocks.'),
    messageActivated: (0,external_wp_i18n_namespaceObject.__)('Contain text cursor inside block activated'),
    messageDeactivated: (0,external_wp_i18n_namespaceObject.__)('Contain text cursor inside block deactivated')
  })))), (0,external_wp_element_namespaceObject.createElement)(KeyboardShortcutHelpModal, {
>>>>>>> main
    isModalActive: isKeyboardShortcutsModalActive,
    toggleModal: toggleKeyboardShortcutsModal
  }));
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js
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




function Header(_ref) {
  let {
    sidebar,
    inserter,
    isInserterOpened,
    setIsInserterOpened,
    isFixedToolbarActive
  } = _ref;
<<<<<<< HEAD
  const [[hasUndo, hasRedo], setUndoRedo] = Object(external_wp_element_["useState"])([sidebar.hasUndo(), sidebar.hasRedo()]);
  Object(external_wp_element_["useEffect"])(() => {
=======
  const [[hasUndo, hasRedo], setUndoRedo] = (0,external_wp_element_namespaceObject.useState)([sidebar.hasUndo(), sidebar.hasRedo()]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    return sidebar.subscribeHistory(() => {
      setUndoRedo([sidebar.hasUndo(), sidebar.hasRedo()]);
    });
  }, [sidebar]);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('customize-widgets-header', {
      'is-fixed-toolbar-active': isFixedToolbarActive
    })
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["NavigableToolbar"], {
    className: "customize-widgets-header-toolbar",
    "aria-label": Object(external_wp_i18n_["__"])('Document tools')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarButton"], {
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_undo["a" /* default */] : library_redo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Undo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: classnames_default()('customize-widgets-header', {
      'is-fixed-toolbar-active': isFixedToolbarActive
    })
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.NavigableToolbar, {
    className: "customize-widgets-header-toolbar",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Document tools')
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {
    icon: !(0,external_wp_i18n_namespaceObject.isRTL)() ? library_undo : library_redo
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
    shortcut: external_wp_keycodes_namespaceObject.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
>>>>>>> main
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: sidebar.undo,
    className: "customize-widgets-editor-history-button undo-button"
<<<<<<< HEAD
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarButton"], {
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_redo["a" /* default */] : library_undo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Redo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no undo levels we don't want to actually disable this
=======
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {
    icon: !(0,external_wp_i18n_namespaceObject.isRTL)() ? library_redo : library_undo
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,external_wp_i18n_namespaceObject.__)('Redo'),
    shortcut: external_wp_keycodes_namespaceObject.displayShortcut.primaryShift('z') // If there are no undo levels we don't want to actually disable this
>>>>>>> main
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: sidebar.redo,
    className: "customize-widgets-editor-history-button redo-button"
<<<<<<< HEAD
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarButton"], {
    className: "customize-widgets-header-toolbar__inserter-toggle",
    isPressed: isInserterOpened,
    variant: "primary",
    icon: plus["a" /* default */],
    label: Object(external_wp_i18n_["_x"])('Add block', 'Generic label for block inserter button'),
    onClick: () => {
      setIsInserterOpened(isOpen => !isOpen);
    }
  }), Object(external_wp_element_["createElement"])(MoreMenu, null))), Object(external_wp_element_["createPortal"])(Object(external_wp_element_["createElement"])(components_inserter, {
=======
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {
    className: "customize-widgets-header-toolbar__inserter-toggle",
    isPressed: isInserterOpened,
    variant: "primary",
    icon: library_plus,
    label: (0,external_wp_i18n_namespaceObject._x)('Add block', 'Generic label for block inserter button'),
    onClick: () => {
      setIsInserterOpened(isOpen => !isOpen);
    }
  }), (0,external_wp_element_namespaceObject.createElement)(MoreMenu, null))), (0,external_wp_element_namespaceObject.createPortal)((0,external_wp_element_namespaceObject.createElement)(components_inserter, {
>>>>>>> main
    setIsOpened: setIsInserterOpened
  }), inserter.contentContainer[0]));
}

/* harmony default export */ var header = (Header);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js
>>>>>>> main
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function useInserter(inserter) {
<<<<<<< HEAD
  const isInserterOpened = Object(external_wp_data_["useSelect"])(select => select(store).isInserterOpened(), []);
  const {
    setIsInserterOpened
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_element_["useEffect"])(() => {
=======
  const isInserterOpened = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).isInserterOpened(), []);
  const {
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    if (isInserterOpened) {
      inserter.open();
    } else {
      inserter.close();
    }
  }, [inserter, isInserterOpened]);
<<<<<<< HEAD
  return [isInserterOpened, Object(external_wp_element_["useCallback"])(updater => {
    let isOpen = updater;

    if (typeof updater === 'function') {
      isOpen = updater(Object(external_wp_data_["select"])(store).isInserterOpened());
=======
  return [isInserterOpened, (0,external_wp_element_namespaceObject.useCallback)(updater => {
    let isOpen = updater;

    if (typeof updater === 'function') {
      isOpen = updater((0,external_wp_data_namespaceObject.select)(store).isInserterOpened());
>>>>>>> main
    }

    setIsInserterOpened(isOpen);
  }, [setIsInserterOpened])];
}

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_ = __webpack_require__("rl8x");
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/utils.js
=======
;// CONCATENATED MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_namespaceObject = window["wp"]["isShallowEqual"];
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/utils.js
>>>>>>> main
// @ts-check

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Convert settingId to widgetId.
 *
 * @param {string} settingId The setting id.
 * @return {string} The widget id.
 */

function settingIdToWidgetId(settingId) {
  const matches = settingId.match(/^widget_(.+)(?:\[(\d+)\])$/);

  if (matches) {
    const idBase = matches[1];
    const number = parseInt(matches[2], 10);
    return `${idBase}-${number}`;
  }

  return settingId;
}
/**
 * Transform a block to a customizable widget.
 *
 * @param {WPBlock} block          The block to be transformed from.
 * @param {Object}  existingWidget The widget to be extended from.
 * @return {Object} The transformed widget.
 */

function blockToWidget(block) {
  let existingWidget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);

  if (isValidLegacyWidgetBlock) {
    if (block.attributes.id) {
      // Widget that does not extend WP_Widget.
      widget = {
        id: block.attributes.id
      };
    } else {
      const {
        encoded,
        hash,
        raw,
        ...rest
      } = block.attributes.instance; // Widget that extends WP_Widget.

      widget = {
        idBase: block.attributes.idBase,
        instance: { ...(existingWidget === null || existingWidget === void 0 ? void 0 : existingWidget.instance),
          // Required only for the customizer.
          is_widget_customizer_js_value: true,
          encoded_serialized_instance: encoded,
          instance_hash_key: hash,
          raw_instance: raw,
          ...rest
        }
      };
    }
  } else {
    const instance = {
<<<<<<< HEAD
      content: Object(external_wp_blocks_["serialize"])(block)
=======
      content: (0,external_wp_blocks_namespaceObject.serialize)(block)
>>>>>>> main
    };
    widget = {
      idBase: 'block',
      widgetClass: 'WP_Widget_Block',
      instance: {
        raw_instance: instance
      }
    };
  }

<<<<<<< HEAD
  return { ...Object(external_lodash_["omit"])(existingWidget, ['form', 'rendered']),
=======
  return { ...(0,external_lodash_namespaceObject.omit)(existingWidget, ['form', 'rendered']),
>>>>>>> main
    ...widget
  };
}
/**
 * Transform a widget to a block.
 *
 * @param {Object} widget          The widget to be transformed from.
 * @param {string} widget.id       The widget id.
 * @param {string} widget.idBase   The id base of the widget.
 * @param {number} widget.number   The number/index of the widget.
 * @param {Object} widget.instance The instance of the widget.
 * @return {WPBlock} The transformed block.
 */

function widgetToBlock(_ref) {
  let {
    id,
    idBase,
    number,
    instance
  } = _ref;
  let block;
  const {
    encoded_serialized_instance: encoded,
    instance_hash_key: hash,
    raw_instance: raw,
    ...rest
  } = instance;

  if (idBase === 'block') {
<<<<<<< HEAD
    const parsedBlocks = Object(external_wp_blocks_["parse"])(raw.content);
    block = parsedBlocks.length ? parsedBlocks[0] : Object(external_wp_blocks_["createBlock"])('core/paragraph', {});
  } else if (number) {
    // Widget that extends WP_Widget.
    block = Object(external_wp_blocks_["createBlock"])('core/legacy-widget', {
=======
    const parsedBlocks = (0,external_wp_blocks_namespaceObject.parse)(raw.content);
    block = parsedBlocks.length ? parsedBlocks[0] : (0,external_wp_blocks_namespaceObject.createBlock)('core/paragraph', {});
  } else if (number) {
    // Widget that extends WP_Widget.
    block = (0,external_wp_blocks_namespaceObject.createBlock)('core/legacy-widget', {
>>>>>>> main
      idBase,
      instance: {
        encoded,
        hash,
        raw,
        ...rest
      }
    });
  } else {
    // Widget that does not extend WP_Widget.
<<<<<<< HEAD
    block = Object(external_wp_blocks_["createBlock"])('core/legacy-widget', {
=======
    block = (0,external_wp_blocks_namespaceObject.createBlock)('core/legacy-widget', {
>>>>>>> main
      id
    });
  }

<<<<<<< HEAD
  return Object(external_wp_widgets_["addWidgetIdToBlock"])(block, id);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js
=======
  return (0,external_wp_widgets_namespaceObject.addWidgetIdToBlock)(block, id);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js
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



function widgetsToBlocks(widgets) {
  return widgets.map(widget => widgetToBlock(widget));
}

function useSidebarBlockEditor(sidebar) {
<<<<<<< HEAD
  const [blocks, setBlocks] = Object(external_wp_element_["useState"])(() => widgetsToBlocks(sidebar.getWidgets()));
  Object(external_wp_element_["useEffect"])(() => {
    return sidebar.subscribe((prevWidgets, nextWidgets) => {
      setBlocks(prevBlocks => {
        const prevWidgetsMap = new Map(prevWidgets.map(widget => [widget.id, widget]));
        const prevBlocksMap = new Map(prevBlocks.map(block => [Object(external_wp_widgets_["getWidgetIdFromBlock"])(block), block]));
=======
  const [blocks, setBlocks] = (0,external_wp_element_namespaceObject.useState)(() => widgetsToBlocks(sidebar.getWidgets()));
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    return sidebar.subscribe((prevWidgets, nextWidgets) => {
      setBlocks(prevBlocks => {
        const prevWidgetsMap = new Map(prevWidgets.map(widget => [widget.id, widget]));
        const prevBlocksMap = new Map(prevBlocks.map(block => [(0,external_wp_widgets_namespaceObject.getWidgetIdFromBlock)(block), block]));
>>>>>>> main
        const nextBlocks = nextWidgets.map(nextWidget => {
          const prevWidget = prevWidgetsMap.get(nextWidget.id); // Bail out updates.

          if (prevWidget && prevWidget === nextWidget) {
            return prevBlocksMap.get(nextWidget.id);
          }

          return widgetToBlock(nextWidget);
        }); // Bail out updates.

        if (external_wp_isShallowEqual_default()(prevBlocks, nextBlocks)) {
          return prevBlocks;
        }

        return nextBlocks;
      });
    });
  }, [sidebar]);
<<<<<<< HEAD
  const onChangeBlocks = Object(external_wp_element_["useCallback"])(nextBlocks => {
=======
  const onChangeBlocks = (0,external_wp_element_namespaceObject.useCallback)(nextBlocks => {
>>>>>>> main
    setBlocks(prevBlocks => {
      if (external_wp_isShallowEqual_default()(prevBlocks, nextBlocks)) {
        return prevBlocks;
      }

<<<<<<< HEAD
      const prevBlocksMap = new Map(prevBlocks.map(block => [Object(external_wp_widgets_["getWidgetIdFromBlock"])(block), block]));
      const nextWidgets = nextBlocks.map(nextBlock => {
        const widgetId = Object(external_wp_widgets_["getWidgetIdFromBlock"])(nextBlock); // Update existing widgets.
=======
      const prevBlocksMap = new Map(prevBlocks.map(block => [(0,external_wp_widgets_namespaceObject.getWidgetIdFromBlock)(block), block]));
      const nextWidgets = nextBlocks.map(nextBlock => {
        const widgetId = (0,external_wp_widgets_namespaceObject.getWidgetIdFromBlock)(nextBlock); // Update existing widgets.
>>>>>>> main

        if (widgetId && prevBlocksMap.has(widgetId)) {
          const prevBlock = prevBlocksMap.get(widgetId);
          const prevWidget = sidebar.getWidget(widgetId); // Bail out updates by returning the previous widgets.
          // Deep equality is necessary until the block editor's internals changes.

<<<<<<< HEAD
          if (Object(external_lodash_["isEqual"])(nextBlock, prevBlock) && prevWidget) {
=======
          if ((0,external_lodash_namespaceObject.isEqual)(nextBlock, prevBlock) && prevWidget) {
>>>>>>> main
            return prevWidget;
          }

          return blockToWidget(nextBlock, prevWidget);
        } // Add a new widget.


        return blockToWidget(nextBlock);
      }); // Bail out updates if the updated widgets are the same.

      if (external_wp_isShallowEqual_default()(sidebar.getWidgets(), nextWidgets)) {
        return prevBlocks;
      }

      const addedWidgetIds = sidebar.setWidgets(nextWidgets);
      return nextBlocks.reduce((updatedNextBlocks, nextBlock, index) => {
        const addedWidgetId = addedWidgetIds[index];

        if (addedWidgetId !== null) {
          // Only create a new instance if necessary to prevent
          // the whole editor from re-rendering on every edit.
          if (updatedNextBlocks === nextBlocks) {
            updatedNextBlocks = nextBlocks.slice();
          }

<<<<<<< HEAD
          updatedNextBlocks[index] = Object(external_wp_widgets_["addWidgetIdToBlock"])(nextBlock, addedWidgetId);
=======
          updatedNextBlocks[index] = (0,external_wp_widgets_namespaceObject.addWidgetIdToBlock)(nextBlock, addedWidgetId);
>>>>>>> main
        }

        return updatedNextBlocks;
      }, nextBlocks);
    });
  }, [sidebar]);
  return [blocks, onChangeBlocks, onChangeBlocks];
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


<<<<<<< HEAD
const FocusControlContext = Object(external_wp_element_["createContext"])();
=======
const FocusControlContext = (0,external_wp_element_namespaceObject.createContext)();
>>>>>>> main
function FocusControl(_ref) {
  let {
    api,
    sidebarControls,
    children
  } = _ref;
<<<<<<< HEAD
  const [focusedWidgetIdRef, setFocusedWidgetIdRef] = Object(external_wp_element_["useState"])({
    current: null
  });
  const focusWidget = Object(external_wp_element_["useCallback"])(widgetId => {
=======
  const [focusedWidgetIdRef, setFocusedWidgetIdRef] = (0,external_wp_element_namespaceObject.useState)({
    current: null
  });
  const focusWidget = (0,external_wp_element_namespaceObject.useCallback)(widgetId => {
>>>>>>> main
    for (const sidebarControl of sidebarControls) {
      const widgets = sidebarControl.setting.get();

      if (widgets.includes(widgetId)) {
        sidebarControl.sectionInstance.expand({
          // Schedule it after the complete callback so that
          // it won't be overridden by the "Back" button focus.
          completeCallback() {
            // Create a "ref-like" object every time to ensure
            // the same widget id can also triggers the focus control.
            setFocusedWidgetIdRef({
              current: widgetId
            });
          }

        });
        break;
      }
    }
  }, [sidebarControls]);
<<<<<<< HEAD
  Object(external_wp_element_["useEffect"])(() => {
=======
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    function handleFocus(settingId) {
      const widgetId = settingIdToWidgetId(settingId);
      focusWidget(widgetId);
    }

    function handleReady() {
      api.previewer.preview.bind('focus-control-for-setting', handleFocus);
    }

    api.previewer.bind('ready', handleReady);
    return () => {
      api.previewer.unbind('ready', handleReady);
      api.previewer.preview.unbind('focus-control-for-setting', handleFocus);
    };
  }, [api, focusWidget]);
<<<<<<< HEAD
  const context = Object(external_wp_element_["useMemo"])(() => [focusedWidgetIdRef, focusWidget], [focusedWidgetIdRef, focusWidget]);
  return Object(external_wp_element_["createElement"])(FocusControlContext.Provider, {
    value: context
  }, children);
}
const useFocusControl = () => Object(external_wp_element_["useContext"])(FocusControlContext);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js
=======
  const context = (0,external_wp_element_namespaceObject.useMemo)(() => [focusedWidgetIdRef, focusWidget], [focusedWidgetIdRef, focusWidget]);
  return (0,external_wp_element_namespaceObject.createElement)(FocusControlContext.Provider, {
    value: context
  }, children);
}
const useFocusControl = () => (0,external_wp_element_namespaceObject.useContext)(FocusControlContext);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js
>>>>>>> main
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function useBlocksFocusControl(blocks) {
  const {
    selectBlock
<<<<<<< HEAD
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  const [focusedWidgetIdRef] = useFocusControl();
  const blocksRef = Object(external_wp_element_["useRef"])(blocks);
  Object(external_wp_element_["useEffect"])(() => {
    blocksRef.current = blocks;
  }, [blocks]);
  Object(external_wp_element_["useEffect"])(() => {
    if (focusedWidgetIdRef.current) {
      const focusedBlock = blocksRef.current.find(block => Object(external_wp_widgets_["getWidgetIdFromBlock"])(block) === focusedWidgetIdRef.current);
=======
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  const [focusedWidgetIdRef] = useFocusControl();
  const blocksRef = (0,external_wp_element_namespaceObject.useRef)(blocks);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    blocksRef.current = blocks;
  }, [blocks]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (focusedWidgetIdRef.current) {
      const focusedBlock = blocksRef.current.find(block => (0,external_wp_widgets_namespaceObject.getWidgetIdFromBlock)(block) === focusedWidgetIdRef.current);
>>>>>>> main

      if (focusedBlock) {
        selectBlock(focusedBlock.clientId); // If the block is already being selected, the DOM node won't
        // get focused again automatically.
        // We select the DOM and focus it manually here.

        const blockNode = document.querySelector(`[data-block="${focusedBlock.clientId}"]`);
        blockNode === null || blockNode === void 0 ? void 0 : blockNode.focus();
      }
    }
  }, [focusedWidgetIdRef, selectBlock]);
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js
>>>>>>> main


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function SidebarEditorProvider(_ref) {
  let {
    sidebar,
    settings,
    children
  } = _ref;
  const [blocks, onInput, onChange] = useSidebarBlockEditor(sidebar);
  useBlocksFocusControl(blocks);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorProvider"], {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockEditorProvider, {
>>>>>>> main
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false
  }, children);
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */




function WelcomeGuide(_ref) {
  let {
    sidebar
  } = _ref;
  const {
<<<<<<< HEAD
    toggleFeature
  } = Object(external_wp_data_["useDispatch"])(build_module["i" /* store */]);
  const isEntirelyBlockWidgets = sidebar.getWidgets().every(widget => widget.id.startsWith('block-'));
  return Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-welcome-guide"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-welcome-guide__image__wrapper"
  }, Object(external_wp_element_["createElement"])("picture", null, Object(external_wp_element_["createElement"])("source", {
    srcSet: "https://s.w.org/images/block-editor/welcome-editor.svg",
    media: "(prefers-reduced-motion: reduce)"
  }), Object(external_wp_element_["createElement"])("img", {
=======
    toggle
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_preferences_namespaceObject.store);
  const isEntirelyBlockWidgets = sidebar.getWidgets().every(widget => widget.id.startsWith('block-'));
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-welcome-guide"
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-welcome-guide__image__wrapper"
  }, (0,external_wp_element_namespaceObject.createElement)("picture", null, (0,external_wp_element_namespaceObject.createElement)("source", {
    srcSet: "https://s.w.org/images/block-editor/welcome-editor.svg",
    media: "(prefers-reduced-motion: reduce)"
  }), (0,external_wp_element_namespaceObject.createElement)("img", {
>>>>>>> main
    className: "customize-widgets-welcome-guide__image",
    src: "https://s.w.org/images/block-editor/welcome-editor.gif",
    width: "312",
    height: "240",
    alt: ""
<<<<<<< HEAD
  }))), Object(external_wp_element_["createElement"])("h1", {
    className: "customize-widgets-welcome-guide__heading"
  }, Object(external_wp_i18n_["__"])('Welcome to block Widgets')), Object(external_wp_element_["createElement"])("p", {
    className: "customize-widgets-welcome-guide__text"
  }, isEntirelyBlockWidgets ? Object(external_wp_i18n_["__"])('Your theme provides different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.') : Object(external_wp_i18n_["__"])('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "customize-widgets-welcome-guide__button",
    variant: "primary",
    onClick: () => toggleFeature('core/customize-widgets', 'welcomeGuide')
  }, Object(external_wp_i18n_["__"])('Got it')), Object(external_wp_element_["createElement"])("hr", {
    className: "customize-widgets-welcome-guide__separator"
  }), !isEntirelyBlockWidgets && Object(external_wp_element_["createElement"])("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, Object(external_wp_i18n_["__"])('Want to stick with the old widgets?'), Object(external_wp_element_["createElement"])("br", null), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/plugins/classic-widgets/')
  }, Object(external_wp_i18n_["__"])('Get the Classic Widgets plugin.'))), Object(external_wp_element_["createElement"])("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, Object(external_wp_i18n_["__"])('New to the block editor?'), Object(external_wp_element_["createElement"])("br", null), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/wordpress-editor/')
  }, Object(external_wp_i18n_["__"])("Here's a detailed guide."))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js
=======
  }))), (0,external_wp_element_namespaceObject.createElement)("h1", {
    className: "customize-widgets-welcome-guide__heading"
  }, (0,external_wp_i18n_namespaceObject.__)('Welcome to block Widgets')), (0,external_wp_element_namespaceObject.createElement)("p", {
    className: "customize-widgets-welcome-guide__text"
  }, isEntirelyBlockWidgets ? (0,external_wp_i18n_namespaceObject.__)('Your theme provides different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.') : (0,external_wp_i18n_namespaceObject.__)('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    className: "customize-widgets-welcome-guide__button",
    variant: "primary",
    onClick: () => toggle('core/customize-widgets', 'welcomeGuide')
  }, (0,external_wp_i18n_namespaceObject.__)('Got it')), (0,external_wp_element_namespaceObject.createElement)("hr", {
    className: "customize-widgets-welcome-guide__separator"
  }), !isEntirelyBlockWidgets && (0,external_wp_element_namespaceObject.createElement)("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, (0,external_wp_i18n_namespaceObject.__)('Want to stick with the old widgets?'), (0,external_wp_element_namespaceObject.createElement)("br", null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
    href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/plugins/classic-widgets/')
  }, (0,external_wp_i18n_namespaceObject.__)('Get the Classic Widgets plugin.'))), (0,external_wp_element_namespaceObject.createElement)("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, (0,external_wp_i18n_namespaceObject.__)('New to the block editor?'), (0,external_wp_element_namespaceObject.createElement)("br", null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
    href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/support/article/wordpress-editor/')
  }, (0,external_wp_i18n_namespaceObject.__)("Here's a detailed guide."))));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js
>>>>>>> main
/**
 * WordPress dependencies
 */





function KeyboardShortcuts(_ref) {
  let {
    undo,
    redo,
    save
  } = _ref;
<<<<<<< HEAD
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/customize-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/customize-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/customize-widgets/save', event => {
=======
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/customize-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/customize-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/customize-widgets/save', event => {
>>>>>>> main
    event.preventDefault();
    save();
  });
  return null;
}

function KeyboardShortcutsRegister() {
  const {
    registerShortcut,
    unregisterShortcut
<<<<<<< HEAD
  } = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]);
  Object(external_wp_element_["useEffect"])(() => {
    registerShortcut({
      name: 'core/customize-widgets/undo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Undo your last changes.'),
=======
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_keyboardShortcuts_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    registerShortcut({
      name: 'core/customize-widgets/undo',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Undo your last changes.'),
>>>>>>> main
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/customize-widgets/redo',
      category: 'global',
<<<<<<< HEAD
      description: Object(external_wp_i18n_["__"])('Redo your last undo.'),
=======
      description: (0,external_wp_i18n_namespaceObject.__)('Redo your last undo.'),
>>>>>>> main
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/customize-widgets/save',
      category: 'global',
<<<<<<< HEAD
      description: Object(external_wp_i18n_["__"])('Save your changes.'),
=======
      description: (0,external_wp_i18n_namespaceObject.__)('Save your changes.'),
>>>>>>> main
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    return () => {
      unregisterShortcut('core/customize-widgets/undo');
      unregisterShortcut('core/customize-widgets/redo');
      unregisterShortcut('core/customize-widgets/save');
    };
  }, [registerShortcut]);
  return null;
}

KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ var keyboard_shortcuts = (KeyboardShortcuts);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js
>>>>>>> main



/**
 * WordPress dependencies
 */



function BlockAppender(props) {
<<<<<<< HEAD
  const ref = Object(external_wp_element_["useRef"])();
  const isBlocksListEmpty = Object(external_wp_data_["useSelect"])(select => select(external_wp_blockEditor_["store"]).getBlockCount() === 0); // Move the focus to the block appender to prevent focus from
  // being lost when emptying the widget area.

  Object(external_wp_element_["useEffect"])(() => {
=======
  const ref = (0,external_wp_element_namespaceObject.useRef)();
  const isBlocksListEmpty = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_blockEditor_namespaceObject.store).getBlockCount() === 0); // Move the focus to the block appender to prevent focus from
  // being lost when emptying the widget area.

  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    if (isBlocksListEmpty && ref.current) {
      const {
        ownerDocument
      } = ref.current;

      if (!ownerDocument.activeElement || ownerDocument.activeElement === ownerDocument.body) {
        ref.current.focus();
      }
    }
  }, [isBlocksListEmpty]);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["ButtonBlockAppender"], Object(esm_extends["a" /* default */])({}, props, {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.ButtonBlockAppender, _extends({}, props, {
>>>>>>> main
    ref: ref
  }));
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js
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








function SidebarBlockEditor(_ref) {
  let {
    blockEditorSettings,
    sidebar,
    inserter,
    inspector
  } = _ref;
  const [isInserterOpened, setIsInserterOpened] = useInserter(inserter);
  const {
    hasUploadPermissions,
    isFixedToolbarActive,
    keepCaretInsideBlock,
    isWelcomeGuideActive
<<<<<<< HEAD
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isFeatureActive
    } = select(build_module["i" /* store */]);
    return {
      hasUploadPermissions: Object(external_lodash_["defaultTo"])(select(external_wp_coreData_["store"]).canUser('create', 'media'), true),
      isFixedToolbarActive: isFeatureActive('core/customize-widgets', 'fixedToolbar'),
      keepCaretInsideBlock: isFeatureActive('core/customize-widgets', 'keepCaretInsideBlock'),
      isWelcomeGuideActive: isFeatureActive('core/customize-widgets', 'welcomeGuide')
    };
  }, []);
  const settings = Object(external_wp_element_["useMemo"])(() => {
=======
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    return {
      hasUploadPermissions: (0,external_lodash_namespaceObject.defaultTo)(select(external_wp_coreData_namespaceObject.store).canUser('create', 'media'), true),
      isFixedToolbarActive: !!get('core/customize-widgets', 'fixedToolbar'),
      keepCaretInsideBlock: !!get('core/customize-widgets', 'keepCaretInsideBlock'),
      isWelcomeGuideActive: !!get('core/customize-widgets', 'welcomeGuide')
    };
  }, []);
  const settings = (0,external_wp_element_namespaceObject.useMemo)(() => {
>>>>>>> main
    let mediaUploadBlockEditor;

    if (hasUploadPermissions) {
      mediaUploadBlockEditor = _ref2 => {
        let {
          onError,
          ...argumentsObject
        } = _ref2;
<<<<<<< HEAD
        Object(external_wp_mediaUtils_["uploadMedia"])({
=======
        (0,external_wp_mediaUtils_namespaceObject.uploadMedia)({
>>>>>>> main
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: _ref3 => {
            let {
              message
            } = _ref3;
            return onError(message);
          },
          ...argumentsObject
        });
      };
    }

    return { ...blockEditorSettings,
      __experimentalSetIsInserterOpened: setIsInserterOpened,
      mediaUpload: mediaUploadBlockEditor,
      hasFixedToolbar: isFixedToolbarActive,
      keepCaretInsideBlock,
      __unstableHasCustomAppender: true
    };
  }, [hasUploadPermissions, blockEditorSettings, isFixedToolbarActive, keepCaretInsideBlock, setIsInserterOpened]);

  if (isWelcomeGuideActive) {
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(WelcomeGuide, {
=======
    return (0,external_wp_element_namespaceObject.createElement)(WelcomeGuide, {
>>>>>>> main
      sidebar: sidebar
    });
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null), Object(external_wp_element_["createElement"])(keyboard_shortcuts.Register, null), Object(external_wp_element_["createElement"])(SidebarEditorProvider, {
    sidebar: sidebar,
    settings: settings
  }, Object(external_wp_element_["createElement"])(keyboard_shortcuts, {
    undo: sidebar.undo,
    redo: sidebar.redo,
    save: sidebar.save
  }), Object(external_wp_element_["createElement"])(header, {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockEditorKeyboardShortcuts.Register, null), (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcuts.Register, null), (0,external_wp_element_namespaceObject.createElement)(SidebarEditorProvider, {
    sidebar: sidebar,
    settings: settings
  }, (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcuts, {
    undo: sidebar.undo,
    redo: sidebar.redo,
    save: sidebar.save
  }), (0,external_wp_element_namespaceObject.createElement)(header, {
>>>>>>> main
    sidebar: sidebar,
    inserter: inserter,
    isInserterOpened: isInserterOpened,
    setIsInserterOpened: setIsInserterOpened,
    isFixedToolbarActive: isFixedToolbarActive
<<<<<<< HEAD
  }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["CopyHandler"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockTools"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableEditorStyles"], {
    styles: settings.defaultEditorStyles
  }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSelectionClearer"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["WritingFlow"], {
    className: "editor-styles-wrapper"
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["ObserveTyping"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockList"], {
    renderAppender: BlockAppender
  })))))), Object(external_wp_element_["createPortal"])( // This is a temporary hack to prevent button component inside <BlockInspector>
  // from submitting form when type="button" is not specified.
  Object(external_wp_element_["createElement"])("form", {
    onSubmit: event => event.preventDefault()
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockInspector"], null)), inspector.contentContainer[0])), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableBlockSettingsMenuFirstItem"], null, _ref4 => {
    let {
      onClose
    } = _ref4;
    return Object(external_wp_element_["createElement"])(block_inspector_button, {
=======
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.CopyHandler, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockTools, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__unstableEditorStyles, {
    styles: settings.defaultEditorStyles
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSelectionClearer, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.WritingFlow, {
    className: "editor-styles-wrapper"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.ObserveTyping, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockList, {
    renderAppender: BlockAppender
  })))))), (0,external_wp_element_namespaceObject.createPortal)( // This is a temporary hack to prevent button component inside <BlockInspector>
  // from submitting form when type="button" is not specified.
  (0,external_wp_element_namespaceObject.createElement)("form", {
    onSubmit: event => event.preventDefault()
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockInspector, null)), inspector.contentContainer[0])), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__unstableBlockSettingsMenuFirstItem, null, _ref4 => {
    let {
      onClose
    } = _ref4;
    return (0,external_wp_element_namespaceObject.createElement)(block_inspector_button, {
>>>>>>> main
      inspector: inspector,
      closeMenu: onClose
    });
  }));
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
const SidebarControlsContext = Object(external_wp_element_["createContext"])();
=======
const SidebarControlsContext = (0,external_wp_element_namespaceObject.createContext)();
>>>>>>> main
function SidebarControls(_ref) {
  let {
    sidebarControls,
    activeSidebarControl,
    children
  } = _ref;
<<<<<<< HEAD
  const context = Object(external_wp_element_["useMemo"])(() => ({
    sidebarControls,
    activeSidebarControl
  }), [sidebarControls, activeSidebarControl]);
  return Object(external_wp_element_["createElement"])(SidebarControlsContext.Provider, {
=======
  const context = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    sidebarControls,
    activeSidebarControl
  }), [sidebarControls, activeSidebarControl]);
  return (0,external_wp_element_namespaceObject.createElement)(SidebarControlsContext.Provider, {
>>>>>>> main
    value: context
  }, children);
}
function useSidebarControls() {
  const {
    sidebarControls
<<<<<<< HEAD
  } = Object(external_wp_element_["useContext"])(SidebarControlsContext);
=======
  } = (0,external_wp_element_namespaceObject.useContext)(SidebarControlsContext);
>>>>>>> main
  return sidebarControls;
}
function useActiveSidebarControl() {
  const {
    activeSidebarControl
<<<<<<< HEAD
  } = Object(external_wp_element_["useContext"])(SidebarControlsContext);
  return activeSidebarControl;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js
=======
  } = (0,external_wp_element_namespaceObject.useContext)(SidebarControlsContext);
  return activeSidebarControl;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js
>>>>>>> main
/**
 * WordPress dependencies
 */



/**
 * We can't just use <BlockSelectionClearer> because the customizer has
 * many root nodes rather than just one in the post editor.
 * We need to listen to the focus events in all those roots, and also in
 * the preview iframe.
 * This hook will clear the selected block when focusing outside the editor,
 * with a few exceptions:
 * 1. Focusing on popovers.
 * 2. Focusing on the inspector.
 * 3. Focusing on any modals/dialogs.
 * These cases are normally triggered by user interactions from the editor,
 * not by explicitly focusing outside the editor, hence no need for clearing.
 *
 * @param {Object} sidebarControl The sidebar control instance.
 * @param {Object} popoverRef     The ref object of the popover node container.
 */

function useClearSelectedBlock(sidebarControl, popoverRef) {
  const {
    hasSelectedBlock,
    hasMultiSelection
<<<<<<< HEAD
  } = Object(external_wp_data_["useSelect"])(external_wp_blockEditor_["store"]);
  const {
    clearSelectedBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  Object(external_wp_element_["useEffect"])(() => {
=======
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_blockEditor_namespaceObject.store);
  const {
    clearSelectedBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    if (popoverRef.current && sidebarControl) {
      const inspector = sidebarControl.inspector;
      const container = sidebarControl.container[0];
      const ownerDocument = container.ownerDocument;
      const ownerWindow = ownerDocument.defaultView;

      function handleClearSelectedBlock(element) {
        if ( // 1. Make sure there are blocks being selected.
        (hasSelectedBlock() || hasMultiSelection()) && // 2. The element should exist in the DOM (not deleted).
        element && ownerDocument.contains(element) && // 3. It should also not exist in the container, the popover, nor the dialog.
        !container.contains(element) && !popoverRef.current.contains(element) && !element.closest('[role="dialog"]') && // 4. The inspector should not be opened.
        !inspector.expanded()) {
          clearSelectedBlock();
        }
      } // Handle mouse down in the same document.


      function handleMouseDown(event) {
        handleClearSelectedBlock(event.target);
      } // Handle focusing outside the current document, like to iframes.


      function handleBlur() {
        handleClearSelectedBlock(ownerDocument.activeElement);
      }

      ownerDocument.addEventListener('mousedown', handleMouseDown);
      ownerWindow.addEventListener('blur', handleBlur);
      return () => {
        ownerDocument.removeEventListener('mousedown', handleMouseDown);
        ownerWindow.removeEventListener('blur', handleBlur);
      };
    }
  }, [popoverRef, sidebarControl, hasSelectedBlock, hasMultiSelection, clearSelectedBlock]);
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function CustomizeWidgets(_ref) {
  let {
    api,
    sidebarControls,
    blockEditorSettings
  } = _ref;
<<<<<<< HEAD
  const [activeSidebarControl, setActiveSidebarControl] = Object(external_wp_element_["useState"])(null);
  const parentContainer = document.getElementById('customize-theme-controls');
  const popoverRef = Object(external_wp_element_["useRef"])();
  useClearSelectedBlock(activeSidebarControl, popoverRef);
  Object(external_wp_element_["useEffect"])(() => {
=======
  const [activeSidebarControl, setActiveSidebarControl] = (0,external_wp_element_namespaceObject.useState)(null);
  const parentContainer = document.getElementById('customize-theme-controls');
  const popoverRef = (0,external_wp_element_namespaceObject.useRef)();
  useClearSelectedBlock(activeSidebarControl, popoverRef);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    const unsubscribers = sidebarControls.map(sidebarControl => sidebarControl.subscribe(expanded => {
      if (expanded) {
        setActiveSidebarControl(sidebarControl);
      }
    }));
    return () => {
      unsubscribers.forEach(unsubscriber => unsubscriber());
    };
  }, [sidebarControls]);
<<<<<<< HEAD
  const activeSidebar = activeSidebarControl && Object(external_wp_element_["createPortal"])(Object(external_wp_element_["createElement"])(error_boundary_ErrorBoundary, null, Object(external_wp_element_["createElement"])(SidebarBlockEditor, {
=======
  const activeSidebar = activeSidebarControl && (0,external_wp_element_namespaceObject.createPortal)((0,external_wp_element_namespaceObject.createElement)(ErrorBoundary, null, (0,external_wp_element_namespaceObject.createElement)(SidebarBlockEditor, {
>>>>>>> main
    key: activeSidebarControl.id,
    blockEditorSettings: blockEditorSettings,
    sidebar: activeSidebarControl.sidebarAdapter,
    inserter: activeSidebarControl.inserter,
    inspector: activeSidebarControl.inspector
  })), activeSidebarControl.container[0]); // We have to portal this to the parent of both the editor and the inspector,
  // so that the popovers will appear above both of them.

<<<<<<< HEAD
  const popover = parentContainer && Object(external_wp_element_["createPortal"])(Object(external_wp_element_["createElement"])("div", {
    className: "customize-widgets-popover",
    ref: popoverRef
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Popover"].Slot, null)), parentContainer);
  return Object(external_wp_element_["createElement"])(external_wp_keyboardShortcuts_["ShortcutProvider"], null, Object(external_wp_element_["createElement"])(external_wp_components_["SlotFillProvider"], null, Object(external_wp_element_["createElement"])(SidebarControls, {
    sidebarControls: sidebarControls,
    activeSidebarControl: activeSidebarControl
  }, Object(external_wp_element_["createElement"])(FocusControl, {
=======
  const popover = parentContainer && (0,external_wp_element_namespaceObject.createPortal)((0,external_wp_element_namespaceObject.createElement)("div", {
    className: "customize-widgets-popover",
    ref: popoverRef
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Popover.Slot, null)), parentContainer);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_keyboardShortcuts_namespaceObject.ShortcutProvider, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SlotFillProvider, null, (0,external_wp_element_namespaceObject.createElement)(SidebarControls, {
    sidebarControls: sidebarControls,
    activeSidebarControl: activeSidebarControl
  }, (0,external_wp_element_namespaceObject.createElement)(FocusControl, {
>>>>>>> main
    api: api,
    sidebarControls: sidebarControls
  }, activeSidebar, popover))));
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js
>>>>>>> main
function getInspectorSection() {
  const {
    wp: {
      customize
    }
  } = window;
  return class InspectorSection extends customize.Section {
    constructor(id, options) {
      super(id, options);
      this.parentSection = options.parentSection;
      this.returnFocusWhenClose = null;
      this._isOpen = false;
    }

    get isOpen() {
      return this._isOpen;
    }

    set isOpen(value) {
      this._isOpen = value;
      this.triggerActiveCallbacks();
    }

    ready() {
      this.contentContainer[0].classList.add('customize-widgets-layout__inspector');
    }

    isContextuallyActive() {
      return this.isOpen;
    }

    onChangeExpanded(expanded, args) {
      super.onChangeExpanded(expanded, args);

      if (this.parentSection && !args.unchanged) {
        if (expanded) {
          this.parentSection.collapse({
            manualTransition: true
          });
        } else {
          this.parentSection.expand({
            manualTransition: true,
            completeCallback: () => {
              // Return focus after finishing the transition.
              if (this.returnFocusWhenClose && !this.contentContainer[0].contains(this.returnFocusWhenClose)) {
                this.returnFocusWhenClose.focus();
              }
            }
          });
        }
      }
    }

    open() {
      let {
        returnFocusWhenClose
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.isOpen = true;
      this.returnFocusWhenClose = returnFocusWhenClose;
      this.expand({
        allowMultiple: true
      });
    }

    close() {
      this.collapse({
        allowMultiple: true
      });
    }

    collapse(options) {
      // Overridden collapse() function. Mostly call the parent collapse(), but also
      // move our .isOpen to false.
      // Initially, I tried tracking this with onChangeExpanded(), but it doesn't work
      // because the block settings sidebar is a layer "on top of" the G editor sidebar.
      //
      // For example, when closing the block settings sidebar, the G
      // editor sidebar would display, and onChangeExpanded in
      // inspector-section would run with expanded=true, but I want
      // isOpen to be false when the block settings is closed.
      this.isOpen = false;
      super.collapse(options);
    }

    triggerActiveCallbacks() {
      // Manually fire the callbacks associated with moving this.active
      // from false to true.  "active" is always true for this section,
      // and "isContextuallyActive" reflects if the block settings
      // sidebar is currently visible, that is, it has replaced the main
      // Gutenberg view.
      // The WP customizer only checks ".isContextuallyActive()" when
      // ".active" changes values. But our ".active" never changes value.
      // The WP customizer never foresaw a section being used a way we
      // fit the block settings sidebar into a section. By manually
      // triggering the "this.active" callbacks, we force the WP
      // customizer to query our .isContextuallyActive() function and
      // update its view of our status.
      this.active.callbacks.fireWith(this.active, [false, true]);
    }

  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const getInspectorSectionId = sidebarId => `widgets-inspector-${sidebarId}`;

function getSidebarSection() {
  const {
    wp: {
      customize
    }
  } = window;
<<<<<<< HEAD
=======
  const reduceMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reduceMotionMediaQuery.matches;
  reduceMotionMediaQuery.addEventListener('change', event => {
    isReducedMotion = event.matches;
  });
>>>>>>> main
  return class SidebarSection extends customize.Section {
    ready() {
      const InspectorSection = getInspectorSection();
      this.inspector = new InspectorSection(getInspectorSectionId(this.id), {
<<<<<<< HEAD
        title: Object(external_wp_i18n_["__"])('Block Settings'),
        parentSection: this,
        customizeAction: [Object(external_wp_i18n_["__"])('Customizing'), Object(external_wp_i18n_["__"])('Widgets'), this.params.title].join(' ▸ ')
=======
        title: (0,external_wp_i18n_namespaceObject.__)('Block Settings'),
        parentSection: this,
        customizeAction: [(0,external_wp_i18n_namespaceObject.__)('Customizing'), (0,external_wp_i18n_namespaceObject.__)('Widgets'), this.params.title].join(' ▸ ')
>>>>>>> main
      });
      customize.section.add(this.inspector);
      this.contentContainer[0].classList.add('customize-widgets__sidebar-section');
    }

    hasSubSectionOpened() {
      return this.inspector.expanded();
    }

    onChangeExpanded(expanded, _args) {
      const controls = this.controls();
      const args = { ..._args,

        completeCallback() {
          var _args$completeCallbac;

          controls.forEach(control => {
            var _control$onChangeSect;

            (_control$onChangeSect = control.onChangeSectionExpanded) === null || _control$onChangeSect === void 0 ? void 0 : _control$onChangeSect.call(control, expanded, args);
          });
          (_args$completeCallbac = _args.completeCallback) === null || _args$completeCallbac === void 0 ? void 0 : _args$completeCallbac.call(_args);
        }

      };

      if (args.manualTransition) {
        if (expanded) {
          this.contentContainer.addClass(['busy', 'open']);
          this.contentContainer.removeClass('is-sub-section-open');
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
<<<<<<< HEAD
          this.contentContainer.one('transitionend', () => {
            this.contentContainer.removeClass('busy');
            args.completeCallback();
          });
=======
>>>>>>> main
        } else {
          this.contentContainer.addClass(['busy', 'is-sub-section-open']);
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
          this.contentContainer.removeClass('open');
<<<<<<< HEAD
          this.contentContainer.one('transitionend', () => {
            this.contentContainer.removeClass('busy');
            args.completeCallback();
          });
=======
        }

        const handleTransitionEnd = () => {
          this.contentContainer.removeClass('busy');
          args.completeCallback();
        };

        if (isReducedMotion) {
          handleTransitionEnd();
        } else {
          this.contentContainer.one('transitionend', handleTransitionEnd);
>>>>>>> main
        }
      } else {
        super.onChangeExpanded(expanded, args);
      }
    }

  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js
>>>>>>> main
/**
 * Internal dependencies
 */

const {
  wp
} = window;

function parseWidgetId(widgetId) {
  const matches = widgetId.match(/^(.+)-(\d+)$/);

  if (matches) {
    return {
      idBase: matches[1],
      number: parseInt(matches[2], 10)
    };
  } // Likely an old single widget.


  return {
    idBase: widgetId
  };
}

function widgetIdToSettingId(widgetId) {
  const {
    idBase,
    number
  } = parseWidgetId(widgetId);

  if (number) {
    return `widget_${idBase}[${number}]`;
  }

  return `widget_${idBase}`;
}
/**
 * This is a custom debounce function to call different callbacks depending on
 * whether it's the _leading_ call or not.
 *
 * @param {Function} leading  The callback that gets called first.
 * @param {Function} callback The callback that gets called after the first time.
 * @param {number}   timeout  The debounced time in milliseconds.
 * @return {Function} The debounced function.
 */


function debounce(leading, callback, timeout) {
  let isLeading = false;
  let timerID;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const result = (isLeading ? callback : leading).apply(this, args);
    isLeading = true;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      isLeading = false;
    }, timeout);
    return result;
  }

  debounced.cancel = () => {
    isLeading = false;
    clearTimeout(timerID);
  };

  return debounced;
}

<<<<<<< HEAD
class sidebar_adapter_SidebarAdapter {
=======
class SidebarAdapter {
>>>>>>> main
  constructor(setting, api) {
    this.setting = setting;
    this.api = api;
    this.locked = false;
    this.widgetsCache = new WeakMap();
    this.subscribers = new Set();
    this.history = [this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex = 0;
    this.historySubscribers = new Set(); // Debounce the input for 1 second.

    this._debounceSetHistory = debounce(this._pushHistory, this._replaceHistory, 1000);
    this.setting.bind(this._handleSettingChange.bind(this));
    this.api.bind('change', this._handleAllSettingsChange.bind(this));
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.save = this.save.bind(this);
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  getWidgets() {
    return this.history[this.historyIndex];
  }

  _emit() {
    for (const callback of this.subscribers) {
      callback(...arguments);
    }
  }

  _getWidgetIds() {
    return this.setting.get();
  }

  _pushHistory() {
    this.history = [...this.history.slice(0, this.historyIndex + 1), this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex += 1;
    this.historySubscribers.forEach(listener => listener());
  }

  _replaceHistory() {
    this.history[this.historyIndex] = this._getWidgetIds().map(widgetId => this.getWidget(widgetId));
  }

  _handleSettingChange() {
    if (this.locked) {
      return;
    }

    const prevWidgets = this.getWidgets();

    this._pushHistory();

    this._emit(prevWidgets, this.getWidgets());
  }

  _handleAllSettingsChange(setting) {
    if (this.locked) {
      return;
    }

    if (!setting.id.startsWith('widget_')) {
      return;
    }

    const widgetId = settingIdToWidgetId(setting.id);

    if (!this.setting.get().includes(widgetId)) {
      return;
    }

    const prevWidgets = this.getWidgets();

    this._pushHistory();

    this._emit(prevWidgets, this.getWidgets());
  }

  _createWidget(widget) {
    const widgetModel = wp.customize.Widgets.availableWidgets.findWhere({
      id_base: widget.idBase
    });
    let number = widget.number;

    if (widgetModel.get('is_multi') && !number) {
      widgetModel.set('multi_number', widgetModel.get('multi_number') + 1);
      number = widgetModel.get('multi_number');
    }

    const settingId = number ? `widget_${widget.idBase}[${number}]` : `widget_${widget.idBase}`;
    const settingArgs = {
      transport: wp.customize.Widgets.data.selectiveRefreshableWidgets[widgetModel.get('id_base')] ? 'postMessage' : 'refresh',
      previewer: this.setting.previewer
    };
    const setting = this.api.create(settingId, settingId, '', settingArgs);
    setting.set(widget.instance);
    const widgetId = settingIdToWidgetId(settingId);
    return widgetId;
  }

  _removeWidget(widget) {
    const settingId = widgetIdToSettingId(widget.id);
    const setting = this.api(settingId);

    if (setting) {
      const instance = setting.get();
      this.widgetsCache.delete(instance);
    }

    this.api.remove(settingId);
  }

  _updateWidget(widget) {
    const prevWidget = this.getWidget(widget.id); // Bail out update if nothing changed.

    if (prevWidget === widget) {
      return widget.id;
    } // Update existing setting if only the widget's instance changed.


    if (prevWidget.idBase && widget.idBase && prevWidget.idBase === widget.idBase) {
      const settingId = widgetIdToSettingId(widget.id);
      this.api(settingId).set(widget.instance);
      return widget.id;
    } // Otherwise delete and re-create.


    this._removeWidget(widget);

    return this._createWidget(widget);
  }

  getWidget(widgetId) {
    if (!widgetId) {
      return null;
    }

    const {
      idBase,
      number
    } = parseWidgetId(widgetId);
    const settingId = widgetIdToSettingId(widgetId);
    const setting = this.api(settingId);

    if (!setting) {
      return null;
    }

    const instance = setting.get();

    if (this.widgetsCache.has(instance)) {
      return this.widgetsCache.get(instance);
    }

    const widget = {
      id: widgetId,
      idBase,
      number,
      instance
    };
    this.widgetsCache.set(instance, widget);
    return widget;
  }

  _updateWidgets(nextWidgets) {
    this.locked = true;
    const addedWidgetIds = [];
    const nextWidgetIds = nextWidgets.map(nextWidget => {
      if (nextWidget.id && this.getWidget(nextWidget.id)) {
        addedWidgetIds.push(null);
        return this._updateWidget(nextWidget);
      }

      const widgetId = this._createWidget(nextWidget);

      addedWidgetIds.push(widgetId);
      return widgetId;
    });
    const deletedWidgets = this.getWidgets().filter(widget => !nextWidgetIds.includes(widget.id));
    deletedWidgets.forEach(widget => this._removeWidget(widget));
    this.setting.set(nextWidgetIds);
    this.locked = false;
    return addedWidgetIds;
  }

  setWidgets(nextWidgets) {
    const addedWidgetIds = this._updateWidgets(nextWidgets);

    this._debounceSetHistory();

    return addedWidgetIds;
  }
  /**
   * Undo/Redo related features
   */


  hasUndo() {
    return this.historyIndex > 0;
  }

  hasRedo() {
    return this.historyIndex < this.history.length - 1;
  }

  _seek(historyIndex) {
    const currentWidgets = this.getWidgets();
    this.historyIndex = historyIndex;
    const widgets = this.history[this.historyIndex];

    this._updateWidgets(widgets);

    this._emit(currentWidgets, this.getWidgets());

    this.historySubscribers.forEach(listener => listener());

    this._debounceSetHistory.cancel();
  }

  undo() {
    if (!this.hasUndo()) {
      return;
    }

    this._seek(this.historyIndex - 1);
  }

  redo() {
    if (!this.hasRedo()) {
      return;
    }

    this._seek(this.historyIndex + 1);
  }

  subscribeHistory(listener) {
    this.historySubscribers.add(listener);
    return () => {
      this.historySubscribers.delete(listener);
    };
  }

  save() {
    this.api.previewer.save();
  }

}

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__("1CF3");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js
=======
;// CONCATENATED MODULE: external ["wp","dom"]
var external_wp_dom_namespaceObject = window["wp"]["dom"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js
>>>>>>> main
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function getInserterOuterSection() {
  const {
    wp: {
      customize
    }
  } = window;
  const OuterSection = customize.OuterSection; // Override the OuterSection class to handle multiple outer sections.
  // It closes all the other outer sections whenever one is opened.
  // The result is that at most one outer section can be opened at the same time.

  customize.OuterSection = class extends OuterSection {
    onChangeExpanded(expanded, args) {
      if (expanded) {
        customize.section.each(section => {
          if (section.params.type === 'outer' && section.id !== this.id) {
            if (section.expanded()) {
              section.collapse();
            }
          }
        });
      }

      return super.onChangeExpanded(expanded, args);
    }

  }; // Handle constructor so that "params.type" can be correctly pointed to "outer".

  customize.sectionConstructor.outer = customize.OuterSection;
  return class InserterOuterSection extends customize.OuterSection {
    constructor() {
      super(...arguments); // This is necessary since we're creating a new class which is not identical to the original OuterSection.
      // @See https://github.com/WordPress/wordpress-develop/blob/42b05c397c50d9dc244083eff52991413909d4bd/src/js/_enqueues/wp/customize/controls.js#L1427-L1436

      this.params.type = 'outer';
      this.activeElementBeforeExpanded = null;
      const ownerWindow = this.contentContainer[0].ownerDocument.defaultView; // Handle closing the inserter when pressing the Escape key.

      ownerWindow.addEventListener('keydown', event => {
<<<<<<< HEAD
        if (this.expanded() && (event.keyCode === external_wp_keycodes_["ESCAPE"] || event.code === 'Escape') && !event.defaultPrevented) {
          event.preventDefault();
          event.stopPropagation();
          Object(external_wp_data_["dispatch"])(store).setIsInserterOpened(false);
=======
        if (this.expanded() && (event.keyCode === external_wp_keycodes_namespaceObject.ESCAPE || event.code === 'Escape') && !event.defaultPrevented) {
          event.preventDefault();
          event.stopPropagation();
          (0,external_wp_data_namespaceObject.dispatch)(store).setIsInserterOpened(false);
>>>>>>> main
        }
      }, // Use capture mode to make this run before other event listeners.
      true);
      this.contentContainer.addClass('widgets-inserter'); // Set a flag if the state is being changed from open() or close().
      // Don't propagate the event if it's an internal action to prevent infinite loop.

      this.isFromInternalAction = false;
      this.expanded.bind(() => {
        if (!this.isFromInternalAction) {
          // Propagate the event to React to sync the state.
<<<<<<< HEAD
          Object(external_wp_data_["dispatch"])(store).setIsInserterOpened(this.expanded());
=======
          (0,external_wp_data_namespaceObject.dispatch)(store).setIsInserterOpened(this.expanded());
>>>>>>> main
        }

        this.isFromInternalAction = false;
      });
    }

    open() {
      if (!this.expanded()) {
        const contentContainer = this.contentContainer[0];
        this.activeElementBeforeExpanded = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.expand({
          completeCallback() {
            // We have to do this in a "completeCallback" or else the elements will not yet be visible/tabbable.
            // The first one should be the close button,
            // we want to skip it and choose the second one instead, which is the search box.
<<<<<<< HEAD
            const searchBox = external_wp_dom_["focus"].tabbable.find(contentContainer)[1];
=======
            const searchBox = external_wp_dom_namespaceObject.focus.tabbable.find(contentContainer)[1];
>>>>>>> main

            if (searchBox) {
              searchBox.focus();
            }
          }

        });
      }
    }

    close() {
      if (this.expanded()) {
        const contentContainer = this.contentContainer[0];
        const activeElement = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.collapse({
          completeCallback() {
            // Return back the focus when closing the inserter.
            // Only do this if the active element which triggers the action is inside the inserter,
            // (the close button for instance). In that case the focus will be lost.
            // Otherwise, we don't hijack the focus when the user is focusing on other elements
            // (like the quick inserter).
            if (contentContainer.contains(activeElement)) {
              // Return back the focus when closing the inserter.
              if (this.activeElementBeforeExpanded) {
                this.activeElementBeforeExpanded.focus();
              }
            }
          }

        });
      }
    }

  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const getInserterId = controlId => `widgets-inserter-${controlId}`;

function getSidebarControl() {
  const {
    wp: {
      customize
    }
  } = window;
  return class SidebarControl extends customize.Control {
    constructor() {
      super(...arguments);
      this.subscribers = new Set();
    }

    ready() {
      const InserterOuterSection = getInserterOuterSection();
      this.inserter = new InserterOuterSection(getInserterId(this.id), {});
      customize.section.add(this.inserter);
      this.sectionInstance = customize.section(this.section());
      this.inspector = this.sectionInstance.inspector;
<<<<<<< HEAD
      this.sidebarAdapter = new sidebar_adapter_SidebarAdapter(this.setting, customize);
=======
      this.sidebarAdapter = new SidebarAdapter(this.setting, customize);
>>>>>>> main
    }

    subscribe(callback) {
      this.subscribers.add(callback);
      return () => {
        this.subscribers.delete(callback);
      };
    }

    onChangeSectionExpanded(expanded, args) {
      if (!args.unchanged) {
        // Close the inserter when the section collapses.
        if (!expanded) {
<<<<<<< HEAD
          Object(external_wp_data_["dispatch"])(store).setIsInserterOpened(false);
=======
          (0,external_wp_data_namespaceObject.dispatch)(store).setIsInserterOpened(false);
>>>>>>> main
        }

        this.subscribers.forEach(subscriber => subscriber(expanded, args));
      }
    }

  };
}

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js
=======
;// CONCATENATED MODULE: external ["wp","hooks"]
var external_wp_hooks_namespaceObject = window["wp"]["hooks"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js
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




<<<<<<< HEAD
const withMoveToSidebarToolbarItem = Object(external_wp_compose_["createHigherOrderComponent"])(BlockEdit => props => {
  let widgetId = Object(external_wp_widgets_["getWidgetIdFromBlock"])(props);
=======
const withMoveToSidebarToolbarItem = (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => props => {
  let widgetId = (0,external_wp_widgets_namespaceObject.getWidgetIdFromBlock)(props);
>>>>>>> main
  const sidebarControls = useSidebarControls();
  const activeSidebarControl = useActiveSidebarControl();
  const hasMultipleSidebars = (sidebarControls === null || sidebarControls === void 0 ? void 0 : sidebarControls.length) > 1;
  const blockName = props.name;
  const clientId = props.clientId;
<<<<<<< HEAD
  const canInsertBlockInSidebar = Object(external_wp_data_["useSelect"])(select => {
    // Use an empty string to represent the root block list, which
    // in the customizer editor represents a sidebar/widget area.
    return select(external_wp_blockEditor_["store"]).canInsertBlockType(blockName, '');
  }, [blockName]);
  const block = Object(external_wp_data_["useSelect"])(select => select(external_wp_blockEditor_["store"]).getBlock(clientId), [clientId]);
  const {
    removeBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
=======
  const canInsertBlockInSidebar = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // Use an empty string to represent the root block list, which
    // in the customizer editor represents a sidebar/widget area.
    return select(external_wp_blockEditor_namespaceObject.store).canInsertBlockType(blockName, '');
  }, [blockName]);
  const block = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_blockEditor_namespaceObject.store).getBlock(clientId), [clientId]);
  const {
    removeBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
>>>>>>> main
  const [, focusWidget] = useFocusControl();

  function moveToSidebar(sidebarControlId) {
    const newSidebarControl = sidebarControls.find(sidebarControl => sidebarControl.id === sidebarControlId);

    if (widgetId) {
      /**
       * If there's a widgetId, move it to the other sidebar.
       */
      const oldSetting = activeSidebarControl.setting;
      const newSetting = newSidebarControl.setting;
<<<<<<< HEAD
      oldSetting(Object(external_lodash_["without"])(oldSetting(), widgetId));
=======
      oldSetting((0,external_lodash_namespaceObject.without)(oldSetting(), widgetId));
>>>>>>> main
      newSetting([...newSetting(), widgetId]);
    } else {
      /**
       * If there isn't a widgetId, it's most likely a inner block.
       * First, remove the block in the original sidebar,
       * then, create a new widget in the new sidebar and get back its widgetId.
       */
      const sidebarAdapter = newSidebarControl.sidebarAdapter;
      removeBlock(clientId);
      const addedWidgetIds = sidebarAdapter.setWidgets([...sidebarAdapter.getWidgets(), blockToWidget(block)]); // The last non-null id is the added widget's id.

      widgetId = addedWidgetIds.reverse().find(id => !!id);
    } // Move focus to the moved widget and expand the sidebar.


    focusWidget(widgetId);
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(BlockEdit, props), hasMultipleSidebars && canInsertBlockInSidebar && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockControls"], null, Object(external_wp_element_["createElement"])(external_wp_widgets_["MoveToWidgetArea"], {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(BlockEdit, props), hasMultipleSidebars && canInsertBlockInSidebar && (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockControls, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_widgets_namespaceObject.MoveToWidgetArea, {
>>>>>>> main
    widgetAreas: sidebarControls.map(sidebarControl => ({
      id: sidebarControl.id,
      name: sidebarControl.params.label,
      description: sidebarControl.params.description
    })),
    currentWidgetAreaId: activeSidebarControl === null || activeSidebarControl === void 0 ? void 0 : activeSidebarControl.id,
    onSelect: moveToSidebar
  })));
}, 'withMoveToSidebarToolbarItem');
<<<<<<< HEAD
Object(external_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/customize-widgets/block-edit', withMoveToSidebarToolbarItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js
=======
(0,external_wp_hooks_namespaceObject.addFilter)('editor.BlockEdit', 'core/customize-widgets/block-edit', withMoveToSidebarToolbarItem);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js
>>>>>>> main
/**
 * WordPress dependencies
 */



<<<<<<< HEAD
const replaceMediaUpload = () => external_wp_mediaUtils_["MediaUpload"];

Object(external_wp_hooks_["addFilter"])('editor.MediaUpload', 'core/edit-widgets/replace-media-upload', replaceMediaUpload);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js
=======
const replaceMediaUpload = () => external_wp_mediaUtils_namespaceObject.MediaUpload;

(0,external_wp_hooks_namespaceObject.addFilter)('editor.MediaUpload', 'core/edit-widgets/replace-media-upload', replaceMediaUpload);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js
>>>>>>> main



/**
 * WordPress dependencies
 */


const {
  wp: wide_widget_display_wp
} = window;
<<<<<<< HEAD
const withWideWidgetDisplay = Object(external_wp_compose_["createHigherOrderComponent"])(BlockEdit => props => {
=======
const withWideWidgetDisplay = (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => props => {
>>>>>>> main
  var _wp$customize$Widgets, _wp$customize$Widgets2;

  const {
    idBase
  } = props.attributes;
  const isWide = (_wp$customize$Widgets = (_wp$customize$Widgets2 = wide_widget_display_wp.customize.Widgets.data.availableWidgets.find(widget => widget.id_base === idBase)) === null || _wp$customize$Widgets2 === void 0 ? void 0 : _wp$customize$Widgets2.is_wide) !== null && _wp$customize$Widgets !== void 0 ? _wp$customize$Widgets : false;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({}, props, {
    isWide: isWide
  }));
}, 'withWideWidgetDisplay');
Object(external_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/customize-widgets/wide-widget-display', withWideWidgetDisplay);

// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/index.js
=======
  return (0,external_wp_element_namespaceObject.createElement)(BlockEdit, _extends({}, props, {
    isWide: isWide
  }));
}, 'withWideWidgetDisplay');
(0,external_wp_hooks_namespaceObject.addFilter)('editor.BlockEdit', 'core/customize-widgets/wide-widget-display', withWideWidgetDisplay);

;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/filters/index.js
>>>>>>> main
/**
 * Internal dependencies
 */




<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/customize-widgets/build-module/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





const {
  wp: build_module_wp
} = window;
const DISABLED_BLOCKS = ['core/more', 'core/block', 'core/freeform', 'core/template-part'];
const ENABLE_EXPERIMENTAL_FSE_BLOCKS = false;
/**
 * Initializes the widgets block editor in the customizer.
 *
 * @param {string} editorName          The editor name.
 * @param {Object} blockEditorSettings Block editor settings.
 */

function initialize(editorName, blockEditorSettings) {
<<<<<<< HEAD
  Object(external_wp_data_["dispatch"])(build_module["i" /* store */]).setFeatureDefaults('core/customize-widgets', {
=======
  (0,external_wp_data_namespaceObject.dispatch)(external_wp_preferences_namespaceObject.store).setDefaults('core/customize-widgets', {
>>>>>>> main
    fixedToolbar: false,
    welcomeGuide: true
  });

<<<<<<< HEAD
  Object(external_wp_data_["dispatch"])(external_wp_blocks_["store"]).__experimentalReapplyBlockTypeFilters();

  const coreBlocks = Object(external_wp_blockLibrary_["__experimentalGetCoreBlocks"])().filter(block => {
    return !(DISABLED_BLOCKS.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });

  Object(external_wp_blockLibrary_["registerCoreBlocks"])(coreBlocks);
  Object(external_wp_widgets_["registerLegacyWidgetBlock"])();

  if (false) {}

  Object(external_wp_widgets_["registerLegacyWidgetVariations"])(blockEditorSettings);
  Object(external_wp_widgets_["registerWidgetGroupBlock"])(); // As we are unregistering `core/freeform` to avoid the Classic block, we must
=======
  (0,external_wp_data_namespaceObject.dispatch)(external_wp_blocks_namespaceObject.store).__experimentalReapplyBlockTypeFilters();

  const coreBlocks = (0,external_wp_blockLibrary_namespaceObject.__experimentalGetCoreBlocks)().filter(block => {
    return !(DISABLED_BLOCKS.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });

  (0,external_wp_blockLibrary_namespaceObject.registerCoreBlocks)(coreBlocks);
  (0,external_wp_widgets_namespaceObject.registerLegacyWidgetBlock)();

  if (false) {}

  (0,external_wp_widgets_namespaceObject.registerLegacyWidgetVariations)(blockEditorSettings);
  (0,external_wp_widgets_namespaceObject.registerWidgetGroupBlock)(); // As we are unregistering `core/freeform` to avoid the Classic block, we must
>>>>>>> main
  // replace it with something as the default freeform content handler. Failure to
  // do this will result in errors in the default block parser.
  // see: https://github.com/WordPress/gutenberg/issues/33097

<<<<<<< HEAD
  Object(external_wp_blocks_["setFreeformContentHandlerName"])('core/html');
=======
  (0,external_wp_blocks_namespaceObject.setFreeformContentHandlerName)('core/html');
>>>>>>> main
  const SidebarControl = getSidebarControl(blockEditorSettings);
  build_module_wp.customize.sectionConstructor.sidebar = getSidebarSection();
  build_module_wp.customize.controlConstructor.sidebar_block_editor = SidebarControl;
  const container = document.createElement('div');
  document.body.appendChild(container);
  build_module_wp.customize.bind('ready', () => {
    const sidebarControls = [];
    build_module_wp.customize.control.each(control => {
      if (control instanceof SidebarControl) {
        sidebarControls.push(control);
      }
    });
<<<<<<< HEAD
    Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(CustomizeWidgets, {
=======
    (0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(CustomizeWidgets, {
>>>>>>> main
      api: build_module_wp.customize,
      sidebarControls: sidebarControls,
      blockEditorSettings: blockEditorSettings
    }), container);
  });
}

<<<<<<< HEAD

/***/ }),

/***/ "GLVC":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["widgets"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "K+tz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (external);


/***/ }),

/***/ "K2cm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (redo);


/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "KEfo":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["viewport"]; }());

/***/ }),

/***/ "Ntru":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["a"] = (undo);


/***/ }),

/***/ "Q4Sy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plus);


/***/ }),

/***/ "QyPg":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockLibrary"]; }());

/***/ }),

/***/ "RMJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "RxS6":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "TvNi":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "U60i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ complementary_area; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ComplementaryAreaMoreMenuItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ fullscreen_mode; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ interface_skeleton; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ pinned_items; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ MoreMenuDropdown; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ MoreMenuFeatureToggle; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ action_item; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ store; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "enableComplementaryArea", function() { return actions_enableComplementaryArea; });
__webpack_require__.d(actions_namespaceObject, "disableComplementaryArea", function() { return actions_disableComplementaryArea; });
__webpack_require__.d(actions_namespaceObject, "pinItem", function() { return actions_pinItem; });
__webpack_require__.d(actions_namespaceObject, "unpinItem", function() { return actions_unpinItem; });
__webpack_require__.d(actions_namespaceObject, "toggleFeature", function() { return actions_toggleFeature; });
__webpack_require__.d(actions_namespaceObject, "setFeatureValue", function() { return setFeatureValue; });
__webpack_require__.d(actions_namespaceObject, "setFeatureDefaults", function() { return setFeatureDefaults; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getActiveComplementaryArea", function() { return selectors_getActiveComplementaryArea; });
__webpack_require__.d(selectors_namespaceObject, "isItemPinned", function() { return selectors_isItemPinned; });
__webpack_require__.d(selectors_namespaceObject, "isFeatureActive", function() { return isFeatureActive; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__("RMJe");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__("URob");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
var star_empty = __webpack_require__("Xxwi");

// EXTERNAL MODULE: external ["wp","viewport"]
var external_wp_viewport_ = __webpack_require__("KEfo");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer to keep tract of the active area per scope.
 *
 * @param {boolean} state           Previous state.
 * @param {Object}  action          Action object.
 * @param {string}  action.type     Action type.
 * @param {string}  action.itemType Type of item.
 * @param {string}  action.scope    Item scope.
 * @param {string}  action.item     Item name.
 *
 * @return {Object} Updated state.
 */

function singleEnableItems() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    type,
    itemType,
    scope,
    item
  } = arguments.length > 1 ? arguments[1] : undefined;

  if (type !== 'SET_SINGLE_ENABLE_ITEM' || !itemType || !scope) {
    return state;
  }

  return { ...state,
    [itemType]: { ...state[itemType],
      [scope]: item || null
    }
  };
}
/**
 * Reducer keeping track of the "pinned" items per scope.
 *
 * @param {boolean} state           Previous state.
 * @param {Object}  action          Action object.
 * @param {string}  action.type     Action type.
 * @param {string}  action.itemType Type of item.
 * @param {string}  action.scope    Item scope.
 * @param {string}  action.item     Item name.
 * @param {boolean} action.isEnable Whether the item is pinned.
 *
 * @return {Object} Updated state.
 */

function multipleEnableItems() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    type,
    itemType,
    scope,
    item,
    isEnable
  } = arguments.length > 1 ? arguments[1] : undefined;

  if (type !== 'SET_MULTIPLE_ENABLE_ITEM' || !itemType || !scope || !item || Object(external_lodash_["get"])(state, [itemType, scope, item]) === isEnable) {
    return state;
  }

  const currentTypeState = state[itemType] || {};
  const currentScopeState = currentTypeState[scope] || {};
  return { ...state,
    [itemType]: { ...currentTypeState,
      [scope]: { ...currentScopeState,
        [item]: isEnable || false
      }
    }
  };
}
/**
 * Reducer returning the defaults for user preferences.
 *
 * This is kept intentionally separate from the preferences
 * themselves so that defaults are not persisted.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const preferenceDefaults = Object(external_wp_data_["combineReducers"])({
  features() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type === 'SET_FEATURE_DEFAULTS') {
      const {
        scope,
        defaults
      } = action;
      return { ...state,
        [scope]: { ...state[scope],
          ...defaults
        }
      };
    }

    return state;
  }

});
/**
 * Reducer returning the user preferences.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const preferences = Object(external_wp_data_["combineReducers"])({
  features() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type === 'SET_FEATURE_VALUE') {
      const {
        scope,
        featureName,
        value
      } = action;
      return { ...state,
        [scope]: { ...state[scope],
          [featureName]: value
        }
      };
    }

    return state;
  }

});
const enableItems = Object(external_wp_data_["combineReducers"])({
  singleEnableItems,
  multipleEnableItems
});
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  enableItems,
  preferenceDefaults,
  preferences
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * Returns an action object used in signalling that an active area should be changed.
 *
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 * @param {string} item     Item identifier.
 *
 * @return {Object} Action object.
 */
function setSingleEnableItem(itemType, scope, item) {
  return {
    type: 'SET_SINGLE_ENABLE_ITEM',
    itemType,
    scope,
    item
  };
}
/**
 * Returns an action object used in signalling that a complementary item should be enabled.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */


function actions_enableComplementaryArea(scope, area) {
  return setSingleEnableItem('complementaryArea', scope, area);
}
/**
 * Returns an action object used in signalling that the complementary area of a given scope should be disabled.
 *
 * @param {string} scope Complementary area scope.
 *
 * @return {Object} Action object.
 */

function actions_disableComplementaryArea(scope) {
  return setSingleEnableItem('complementaryArea', scope, undefined);
}
/**
 * Returns an action object to make an area enabled/disabled.
 *
 * @param {string}  itemType Type of item.
 * @param {string}  scope    Item scope.
 * @param {string}  item     Item identifier.
 * @param {boolean} isEnable Boolean indicating if an area should be pinned or not.
 *
 * @return {Object} Action object.
 */

function setMultipleEnableItem(itemType, scope, item, isEnable) {
  return {
    type: 'SET_MULTIPLE_ENABLE_ITEM',
    itemType,
    scope,
    item,
    isEnable
  };
}
/**
 * Returns an action object used in signalling that an item should be pinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */


function actions_pinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, true);
}
/**
 * Returns an action object used in signalling that an item should be unpinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */

function actions_unpinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, false);
}
/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */

function actions_toggleFeature(scope, featureName) {
  return function (_ref) {
    let {
      select,
      dispatch
    } = _ref;
    const currentValue = select.isFeatureActive(scope, featureName);
    dispatch.setFeatureValue(scope, featureName, !currentValue);
  };
}
/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */

function setFeatureValue(scope, featureName, value) {
  return {
    type: 'SET_FEATURE_VALUE',
    scope,
    featureName,
    value: !!value
  };
}
/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */

function setFeatureDefaults(scope, defaults) {
  return {
    type: 'SET_FEATURE_DEFAULTS',
    scope,
    defaults
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/selectors.js
/**
 * External dependencies
 */

/**
 * Returns the item that is enabled in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 *
 * @return {?string|null} The item that is enabled in the passed scope and type.
 */

function getSingleEnableItem(state, itemType, scope) {
  return Object(external_lodash_["get"])(state.enableItems.singleEnableItems, [itemType, scope]);
}
/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string} The complementary area that is active in the given scope.
 */


function selectors_getActiveComplementaryArea(state, scope) {
  return getSingleEnableItem(state, 'complementaryArea', scope);
}
/**
 * Returns a boolean indicating if an item is enabled or not in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean|undefined} True if the item is enabled, false otherwise if the item is explicitly disabled, and undefined if there is no information for that item.
 */

function isMultipleEnabledItemEnabled(state, itemType, scope, item) {
  return Object(external_lodash_["get"])(state.enableItems.multipleEnableItems, [itemType, scope, item]);
}
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */


function selectors_isItemPinned(state, scope, item) {
  return isMultipleEnabledItemEnabled(state, 'pinnedItems', scope, item) !== false;
}
/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */

function isFeatureActive(state, scope, featureName) {
  var _state$preferences$fe, _state$preferenceDefa;

  const featureValue = (_state$preferences$fe = state.preferences.features[scope]) === null || _state$preferences$fe === void 0 ? void 0 : _state$preferences$fe[featureName];
  const defaultedFeatureValue = featureValue !== undefined ? featureValue : (_state$preferenceDefa = state.preferenceDefaults.features[scope]) === null || _state$preferenceDefa === void 0 ? void 0 : _state$preferenceDefa[featureName];
  return !!defaultedFeatureValue;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/constants.js
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/interface';

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems', 'preferences'],
  __experimentalUseThunks: true
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems', 'preferences'],
  __experimentalUseThunks: true
});

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__("TvNi");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js
/**
 * WordPress dependencies
 */

/* harmony default export */ var complementary_area_context = (Object(external_wp_plugins_["withPluginContext"])((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || `${context.name}/${ownProps.name}`
  };
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function ComplementaryAreaToggle(_ref) {
  let {
    as = external_wp_components_["Button"],
    scope,
    identifier,
    icon,
    selectedIcon,
    ...props
  } = _ref;
  const ComponentToUse = as;
  const isSelected = Object(external_wp_data_["useSelect"])(select => select(store).getActiveComplementaryArea(scope) === identifier, [identifier]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["createElement"])(ComponentToUse, Object(esm_extends["a" /* default */])({
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    }
  }, Object(external_lodash_["omit"])(props, ['name'])));
}

/* harmony default export */ var complementary_area_toggle = (complementary_area_context(ComplementaryAreaToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const ComplementaryAreaHeader = _ref => {
  let {
    smallScreenTitle,
    children,
    className,
    toggleButtonProps
  } = _ref;
  const toggleButton = Object(external_wp_element_["createElement"])(complementary_area_toggle, Object(esm_extends["a" /* default */])({
    icon: close_small["a" /* default */]
  }, toggleButtonProps));
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && Object(external_wp_element_["createElement"])("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

/* harmony default export */ var complementary_area_header = (ComplementaryAreaHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/action-item/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function ActionItemSlot(_ref) {
  let {
    name,
    as: Component = external_wp_components_["ButtonGroup"],
    fillProps = {},
    bubblesVirtually,
    ...props
  } = _ref;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps
  }, fills => {
    if (Object(external_lodash_["isEmpty"])(external_wp_element_["Children"].toArray(fills))) {
      return null;
    } // Special handling exists for backward compatibility.
    // It ensures that menu items created by plugin authors aren't
    // duplicated with automatically injected menu items coming
    // from pinnable plugin sidebars.
    // @see https://github.com/WordPress/gutenberg/issues/14457


    const initializedByPlugins = [];
    external_wp_element_["Children"].forEach(fills, _ref2 => {
      let {
        props: {
          __unstableExplicitMenuItem,
          __unstableTarget
        }
      } = _ref2;

      if (__unstableTarget && __unstableExplicitMenuItem) {
        initializedByPlugins.push(__unstableTarget);
      }
    });
    const children = external_wp_element_["Children"].map(fills, child => {
      if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
        return null;
      }

      return child;
    });
    return Object(external_wp_element_["createElement"])(Component, props, children);
  });
}

function ActionItem(_ref3) {
  let {
    name,
    as: Component = external_wp_components_["Button"],
    onClick,
    ...props
  } = _ref3;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], {
    name: name
  }, _ref4 => {
    let {
      onClick: fpOnClick
    } = _ref4;
    return Object(external_wp_element_["createElement"])(Component, Object(esm_extends["a" /* default */])({
      onClick: onClick || fpOnClick ? function () {
        (onClick || external_lodash_["noop"])(...arguments);
        (fpOnClick || external_lodash_["noop"])(...arguments);
      } : undefined
    }, props));
  });
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ var action_item = (ActionItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const PluginsMenuItem = props => // Menu item is marked with unstable prop for backward compatibility.
// They are removed so they don't leak to DOM elements.
// @see https://github.com/WordPress/gutenberg/issues/14457
Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], Object(external_lodash_["omit"])(props, ['__unstableExplicitMenuItem', '__unstableTarget']));

function ComplementaryAreaMoreMenuItem(_ref) {
  let {
    scope,
    target,
    __unstableExplicitMenuItem,
    ...props
  } = _ref;
  return Object(external_wp_element_["createElement"])(complementary_area_toggle, Object(esm_extends["a" /* default */])({
    as: toggleProps => {
      return Object(external_wp_element_["createElement"])(action_item, Object(esm_extends["a" /* default */])({
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`
      }, toggleProps));
    },
    role: "menuitemcheckbox",
    selectedIcon: check["a" /* default */],
    name: target,
    scope: scope
  }, props));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



function PinnedItems(_ref) {
  let {
    scope,
    ...props
  } = _ref;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], Object(esm_extends["a" /* default */])({
    name: `PinnedItems/${scope}`
  }, props));
}

function PinnedItemsSlot(_ref2) {
  let {
    scope,
    className,
    ...props
  } = _ref2;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], Object(esm_extends["a" /* default */])({
    name: `PinnedItems/${scope}`
  }, props), fills => !Object(external_lodash_["isEmpty"])(fills) && Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()(className, 'interface-pinned-items')
  }, fills));
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ var pinned_items = (PinnedItems);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */








function ComplementaryAreaSlot(_ref) {
  let {
    scope,
    ...props
  } = _ref;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], Object(esm_extends["a" /* default */])({
    name: `ComplementaryArea/${scope}`
  }, props));
}

function ComplementaryAreaFill(_ref2) {
  let {
    scope,
    children,
    className
  } = _ref2;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], {
    name: `ComplementaryArea/${scope}`
  }, Object(external_wp_element_["createElement"])("div", {
    className: className
  }, children));
}

function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmall = Object(external_wp_element_["useRef"])(false);
  const shouldOpenWhenNotSmall = Object(external_wp_element_["useRef"])(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_element_["useEffect"])(() => {
    // If the complementary area is active and the editor is switching from a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      // Disable the complementary area.
      disableComplementaryArea(scope); // Flag the complementary area to be reopened when the window size goes from small to big.

      shouldOpenWhenNotSmall.current = true;
    } else if ( // If there is a flag indicating the complementary area should be enabled when we go from small to big window size
    // and we are going from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be enabled.
      shouldOpenWhenNotSmall.current = false; // Enable the complementary area.

      enableComplementaryArea(scope, identifier);
    } else if ( // If the flag is indicating the current complementary should be reopened but another complementary area becomes active,
    // remove the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }

    if (isSmall !== previousIsSmall.current) {
      previousIsSmall.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea]);
}

function ComplementaryArea(_ref3) {
  let {
    children,
    className,
    closeLabel = Object(external_wp_i18n_["__"])('Close plugin'),
    identifier,
    header,
    headerClassName,
    icon,
    isPinnable = true,
    panelClassName,
    scope,
    name,
    smallScreenTitle,
    title,
    toggleShortcut,
    isActiveByDefault,
    showIconLabels = false
  } = _ref3;
  const {
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getActiveComplementaryArea,
      isItemPinned
    } = select(store);

    const _activeArea = getActiveComplementaryArea(scope);

    return {
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(external_wp_viewport_["store"]).isViewportMatch('< medium'),
      isLarge: select(external_wp_viewport_["store"]).isViewportMatch('large')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_element_["useEffect"])(() => {
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isPinnable && Object(external_wp_element_["createElement"])(pinned_items, {
    scope: scope
  }, isPinned && Object(external_wp_element_["createElement"])(complementary_area_toggle, {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    label: title,
    icon: showIconLabels ? check["a" /* default */] : icon,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  })), name && isPinnable && Object(external_wp_element_["createElement"])(ComplementaryAreaMoreMenuItem, {
    target: name,
    scope: scope,
    icon: icon
  }, title), isActive && Object(external_wp_element_["createElement"])(ComplementaryAreaFill, {
    className: classnames_default()('interface-complementary-area', className),
    scope: scope
  }, Object(external_wp_element_["createElement"])(complementary_area_header, {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: () => disableComplementaryArea(scope),
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope,
      identifier
    }
  }, header || Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("strong", null, title), isPinnable && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "interface-complementary-area__pin-unpin-item",
    icon: isPinned ? star_filled["a" /* default */] : star_empty["a" /* default */],
    label: isPinned ? Object(external_wp_i18n_["__"])('Unpin from toolbar') : Object(external_wp_i18n_["__"])('Pin to toolbar'),
    onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
    isPressed: isPinned,
    "aria-expanded": isPinned
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["Panel"], {
    className: panelClassName
  }, children)));
}

const ComplementaryAreaWrapped = complementary_area_context(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ var complementary_area = (ComplementaryAreaWrapped);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js
/**
 * WordPress dependencies
 */


const FullscreenMode = _ref => {
  let {
    isActive
  } = _ref;
  Object(external_wp_element_["useEffect"])(() => {
    let isSticky = false; // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup

    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }

    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }

    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};

/* harmony default export */ var fullscreen_mode = (FullscreenMode);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */






function useHTMLClass(className) {
  Object(external_wp_element_["useEffect"])(() => {
    const element = document && document.querySelector(`html:not(.${className})`);

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}

function InterfaceSkeleton(_ref, ref) {
  let {
    footer,
    header,
    sidebar,
    secondarySidebar,
    notices,
    content,
    drawer,
    actions,
    labels,
    className,
    shortcuts
  } = _ref;
  const navigateRegionsProps = Object(external_wp_components_["__unstableUseNavigateRegions"])(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the nav bar landmark region. */
    drawer: Object(external_wp_i18n_["__"])('Drawer'),

    /* translators: accessibility text for the top bar landmark region. */
    header: Object(external_wp_i18n_["__"])('Header'),

    /* translators: accessibility text for the content landmark region. */
    body: Object(external_wp_i18n_["__"])('Content'),

    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: Object(external_wp_i18n_["__"])('Block Library'),

    /* translators: accessibility text for the settings landmark region. */
    sidebar: Object(external_wp_i18n_["__"])('Settings'),

    /* translators: accessibility text for the publish landmark region. */
    actions: Object(external_wp_i18n_["__"])('Publish'),

    /* translators: accessibility text for the footer landmark region. */
    footer: Object(external_wp_i18n_["__"])('Footer')
  };
  const mergedLabels = { ...defaultLabels,
    ...labels
  };
  return Object(external_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({}, navigateRegionsProps, {
    ref: Object(external_wp_compose_["useMergeRefs"])([ref, navigateRegionsProps.ref]),
    className: classnames_default()(className, 'interface-interface-skeleton', navigateRegionsProps.className, !!footer && 'has-footer')
  }), !!drawer && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__drawer",
    role: "region",
    "aria-label": mergedLabels.drawer,
    tabIndex: "-1"
  }, drawer), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__editor"
  }, !!header && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__header",
    role: "region",
    "aria-label": mergedLabels.header,
    tabIndex: "-1"
  }, header), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__body"
  }, !!secondarySidebar && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__secondary-sidebar",
    role: "region",
    "aria-label": mergedLabels.secondarySidebar,
    tabIndex: "-1"
  }, secondarySidebar), !!notices && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__notices"
  }, notices), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__content",
    role: "region",
    "aria-label": mergedLabels.body,
    tabIndex: "-1"
  }, content), !!sidebar && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__sidebar",
    role: "region",
    "aria-label": mergedLabels.sidebar,
    tabIndex: "-1"
  }, sidebar), !!actions && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__actions",
    role: "region",
    "aria-label": mergedLabels.actions,
    tabIndex: "-1"
  }, actions))), !!footer && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__footer",
    role: "region",
    "aria-label": mergedLabels.footer,
    tabIndex: "-1"
  }, footer));
}

/* harmony default export */ var interface_skeleton = (Object(external_wp_element_["forwardRef"])(InterfaceSkeleton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/more-vertical.js
var more_vertical = __webpack_require__("VKE3");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function MoreMenuDropdown(_ref) {
  let {
    as: DropdownComponent = external_wp_components_["DropdownMenu"],
    className,

    /* translators: button label text should, if possible, be under 16 characters. */
    label = Object(external_wp_i18n_["__"])('Options'),
    popoverProps,
    toggleProps,
    children
  } = _ref;
  return Object(external_wp_element_["createElement"])(DropdownComponent, {
    className: classnames_default()('interface-more-menu-dropdown', className),
    icon: more_vertical["a" /* default */],
    label: label,
    popoverProps: {
      position: 'bottom left',
      ...popoverProps,
      className: classnames_default()('interface-more-menu-dropdown__content', popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__("gdqT");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function MoreMenuFeatureToggle(_ref) {
  let {
    scope,
    label,
    info,
    messageActivated,
    messageDeactivated,
    shortcut,
    feature
  } = _ref;
  const isActive = Object(external_wp_data_["useSelect"])(select => select(store).isFeatureActive(scope, feature), [feature]);
  const {
    toggleFeature
  } = Object(external_wp_data_["useDispatch"])(store);

  const speakMessage = () => {
    if (isActive) {
      Object(external_wp_a11y_["speak"])(messageDeactivated || Object(external_wp_i18n_["__"])('Feature deactivated'));
    } else {
      Object(external_wp_a11y_["speak"])(messageActivated || Object(external_wp_i18n_["__"])('Feature activated'));
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    icon: isActive && check["a" /* default */],
    isSelected: isActive,
    onClick: () => {
      toggleFeature(scope, feature);
      speakMessage();
    },
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut
  }, label);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js









// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js




/***/ }),

/***/ "URob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


/***/ }),

/***/ "VKE3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (moreVertical);


/***/ }),

/***/ "Xxwi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "bWcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "gdqT":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ "hF7m":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keyboardShortcuts"]; }());

/***/ }),

/***/ "jZUy":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "rl8x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

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
}();
(window.wp = window.wp || {}).customizeWidgets = __webpack_exports__;
/******/ })()
;
>>>>>>> main
