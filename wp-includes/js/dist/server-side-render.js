<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["serverSideRender"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "4dqW");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "4dqW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/server-side-render.js
=======
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ build_module; }
});

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
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: external ["wp","url"]
var external_wp_url_namespaceObject = window["wp"]["url"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/server-side-render.js
>>>>>>> main



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








function rendererPath(block) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let urlQueryArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
<<<<<<< HEAD
  return Object(external_wp_url_["addQueryArgs"])(`/wp/v2/block-renderer/${block}`, {
=======
  return (0,external_wp_url_namespaceObject.addQueryArgs)(`/wp/v2/block-renderer/${block}`, {
>>>>>>> main
    context: 'edit',
    ...(null !== attributes ? {
      attributes
    } : {}),
    ...urlQueryArgs
  });
}

function DefaultEmptyResponsePlaceholder(_ref) {
  let {
    className
  } = _ref;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_components_["Placeholder"], {
    className: className
  }, Object(external_wp_i18n_["__"])('Block rendered as empty.'));
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Placeholder, {
    className: className
  }, (0,external_wp_i18n_namespaceObject.__)('Block rendered as empty.'));
>>>>>>> main
}

function DefaultErrorResponsePlaceholder(_ref2) {
  let {
    response,
    className
  } = _ref2;
<<<<<<< HEAD
  const errorMessage = Object(external_wp_i18n_["sprintf"])( // translators: %s: error message describing the problem
  Object(external_wp_i18n_["__"])('Error loading block: %s'), response.errorMsg);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Placeholder"], {
=======
  const errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %s: error message describing the problem
  (0,external_wp_i18n_namespaceObject.__)('Error loading block: %s'), response.errorMsg);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Placeholder, {
>>>>>>> main
    className: className
  }, errorMessage);
}

function DefaultLoadingResponsePlaceholder(_ref3) {
  let {
    children,
    showLoader
  } = _ref3;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("div", {
    style: {
      position: 'relative'
    }
  }, showLoader && Object(external_wp_element_["createElement"])("div", {
=======
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, showLoader && (0,external_wp_element_namespaceObject.createElement)("div", {
>>>>>>> main
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-9px',
      marginLeft: '-9px'
    }
<<<<<<< HEAD
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)), Object(external_wp_element_["createElement"])("div", {
=======
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Spinner, null)), (0,external_wp_element_namespaceObject.createElement)("div", {
>>>>>>> main
    style: {
      opacity: showLoader ? '0.3' : 1
    }
  }, children));
}

function ServerSideRender(props) {
  const {
    attributes,
    block,
    className,
    httpMethod = 'GET',
    urlQueryArgs,
    EmptyResponsePlaceholder = DefaultEmptyResponsePlaceholder,
    ErrorResponsePlaceholder = DefaultErrorResponsePlaceholder,
    LoadingResponsePlaceholder = DefaultLoadingResponsePlaceholder
  } = props;
<<<<<<< HEAD
  const isMountedRef = Object(external_wp_element_["useRef"])(true);
  const [showLoader, setShowLoader] = Object(external_wp_element_["useState"])(false);
  const fetchRequestRef = Object(external_wp_element_["useRef"])();
  const [response, setResponse] = Object(external_wp_element_["useState"])(null);
  const prevProps = Object(external_wp_compose_["usePrevious"])(props);
  const [isLoading, setIsLoading] = Object(external_wp_element_["useState"])(false);
=======
  const isMountedRef = (0,external_wp_element_namespaceObject.useRef)(true);
  const [showLoader, setShowLoader] = (0,external_wp_element_namespaceObject.useState)(false);
  const fetchRequestRef = (0,external_wp_element_namespaceObject.useRef)();
  const [response, setResponse] = (0,external_wp_element_namespaceObject.useState)(null);
  const prevProps = (0,external_wp_compose_namespaceObject.usePrevious)(props);
  const [isLoading, setIsLoading] = (0,external_wp_element_namespaceObject.useState)(false);
>>>>>>> main

  function fetchData() {
    if (!isMountedRef.current) {
      return;
    }

    setIsLoading(true);

<<<<<<< HEAD
    const sanitizedAttributes = attributes && Object(external_wp_blocks_["__experimentalSanitizeBlockAttributes"])(block, attributes); // If httpMethod is 'POST', send the attributes in the request body instead of the URL.
=======
    const sanitizedAttributes = attributes && (0,external_wp_blocks_namespaceObject.__experimentalSanitizeBlockAttributes)(block, attributes); // If httpMethod is 'POST', send the attributes in the request body instead of the URL.
>>>>>>> main
    // This allows sending a larger attributes object than in a GET request, where the attributes are in the URL.


    const isPostRequest = 'POST' === httpMethod;
    const urlAttributes = isPostRequest ? null : sanitizedAttributes !== null && sanitizedAttributes !== void 0 ? sanitizedAttributes : null;
    const path = rendererPath(block, urlAttributes, urlQueryArgs);
    const data = isPostRequest ? {
      attributes: sanitizedAttributes !== null && sanitizedAttributes !== void 0 ? sanitizedAttributes : null
    } : null; // Store the latest fetch request so that when we process it, we can
    // check if it is the current request, to avoid race conditions on slow networks.

    const fetchRequest = fetchRequestRef.current = external_wp_apiFetch_default()({
      path,
      data,
      method: isPostRequest ? 'POST' : 'GET'
    }).then(fetchResponse => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current && fetchResponse) {
        setResponse(fetchResponse.rendered);
      }
    }).catch(error => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setResponse({
          error: true,
          errorMsg: error.message
        });
      }
    }).finally(() => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setIsLoading(false);
      }
    });
    return fetchRequest;
  }

<<<<<<< HEAD
  const debouncedFetchData = Object(external_wp_compose_["useDebounce"])(fetchData, 500); // When the component unmounts, set isMountedRef to false. This will
  // let the async fetch callbacks know when to stop.

  Object(external_wp_element_["useEffect"])(() => () => {
    isMountedRef.current = false;
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    // Don't debounce the first fetch. This ensures that the first render
    // shows data as soon as possible
    if (prevProps === undefined) {
      fetchData();
    } else if (!Object(external_lodash_["isEqual"])(prevProps, props)) {
=======
  const debouncedFetchData = (0,external_wp_compose_namespaceObject.useDebounce)(fetchData, 500); // When the component unmounts, set isMountedRef to false. This will
  // let the async fetch callbacks know when to stop.

  (0,external_wp_element_namespaceObject.useEffect)(() => () => {
    isMountedRef.current = false;
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // Don't debounce the first fetch. This ensures that the first render
    // shows data as soon as possible.
    if (prevProps === undefined) {
      fetchData();
    } else if (!(0,external_lodash_namespaceObject.isEqual)(prevProps, props)) {
>>>>>>> main
      debouncedFetchData();
    }
  });
  /**
   * Effect to handle showing the loading placeholder.
   * Show it only if there is no previous response or
   * the request takes more than one second.
   */

<<<<<<< HEAD
  Object(external_wp_element_["useEffect"])(() => {
=======
  (0,external_wp_element_namespaceObject.useEffect)(() => {
>>>>>>> main
    if (!isLoading) {
      return;
    }

    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isLoading]);
  const hasResponse = !!response;
  const hasEmptyResponse = response === '';
  const hasError = response === null || response === void 0 ? void 0 : response.error;

  if (isLoading) {
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(LoadingResponsePlaceholder, Object(esm_extends["a" /* default */])({}, props, {
      showLoader: showLoader
    }), hasResponse && Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], {
=======
    return (0,external_wp_element_namespaceObject.createElement)(LoadingResponsePlaceholder, _extends({}, props, {
      showLoader: showLoader
    }), hasResponse && (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.RawHTML, {
>>>>>>> main
      className: className
    }, response));
  }

  if (hasEmptyResponse || !hasResponse) {
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(EmptyResponsePlaceholder, props);
  }

  if (hasError) {
    return Object(external_wp_element_["createElement"])(ErrorResponsePlaceholder, Object(esm_extends["a" /* default */])({
=======
    return (0,external_wp_element_namespaceObject.createElement)(EmptyResponsePlaceholder, props);
  }

  if (hasError) {
    return (0,external_wp_element_namespaceObject.createElement)(ErrorResponsePlaceholder, _extends({
>>>>>>> main
      response: response
    }, props));
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.RawHTML, {
>>>>>>> main
    className: className
  }, response);
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/index.js
>>>>>>> main



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Constants
 */

const EMPTY_OBJECT = {};
<<<<<<< HEAD
const ExportedServerSideRender = Object(external_wp_data_["withSelect"])(select => {
=======
const ExportedServerSideRender = (0,external_wp_data_namespaceObject.withSelect)(select => {
>>>>>>> main
  // FIXME: @wordpress/server-side-render should not depend on @wordpress/editor.
  // It is used by blocks that can be loaded into a *non-post* block editor.
  // eslint-disable-next-line @wordpress/data-no-store-string-literals
  const coreEditorSelect = select('core/editor');

  if (coreEditorSelect) {
    const currentPostId = coreEditorSelect.getCurrentPostId(); // For templates and template parts we use a custom ID format.
    // Since they aren't real posts, we don't want to use their ID
    // for server-side rendering. Since they use a string based ID,
    // we can assume real post IDs are numbers.

    if (currentPostId && typeof currentPostId === 'number') {
      return {
        currentPostId
      };
    }
  }

  return EMPTY_OBJECT;
})(_ref => {
  let {
    urlQueryArgs = EMPTY_OBJECT,
    currentPostId,
    ...props
  } = _ref;
<<<<<<< HEAD
  const newUrlQueryArgs = Object(external_wp_element_["useMemo"])(() => {
=======
  const newUrlQueryArgs = (0,external_wp_element_namespaceObject.useMemo)(() => {
>>>>>>> main
    if (!currentPostId) {
      return urlQueryArgs;
    }

    return {
      post_id: currentPostId,
      ...urlQueryArgs
    };
  }, [currentPostId, urlQueryArgs]);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(ServerSideRender, Object(esm_extends["a" /* default */])({
=======
  return (0,external_wp_element_namespaceObject.createElement)(ServerSideRender, _extends({
>>>>>>> main
    urlQueryArgs: newUrlQueryArgs
  }, props));
});

if (window && window.wp && window.wp.components) {
<<<<<<< HEAD
  window.wp.components.ServerSideRender = Object(external_wp_element_["forwardRef"])((props, ref) => {
    external_wp_deprecated_default()('wp.components.ServerSideRender', {
      since: '5.3',
      alternative: 'wp.serverSideRender'
    });
    return Object(external_wp_element_["createElement"])(ExportedServerSideRender, Object(esm_extends["a" /* default */])({}, props, {
=======
  window.wp.components.ServerSideRender = (0,external_wp_element_namespaceObject.forwardRef)((props, ref) => {
    external_wp_deprecated_default()('wp.components.ServerSideRender', {
      version: '6.2',
      since: '5.3',
      alternative: 'wp.serverSideRender'
    });
    return (0,external_wp_element_namespaceObject.createElement)(ExportedServerSideRender, _extends({}, props, {
>>>>>>> main
      ref: ref
    }));
  });
}

<<<<<<< HEAD
/* harmony default export */ var build_module = __webpack_exports__["default"] = (ExportedServerSideRender);


/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

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

/***/ }),

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ })["default"];
=======
/* harmony default export */ var build_module = (ExportedServerSideRender);

(window.wp = window.wp || {}).serverSideRender = __webpack_exports__["default"];
/******/ })()
;
>>>>>>> main
