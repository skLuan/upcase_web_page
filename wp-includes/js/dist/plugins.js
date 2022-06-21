<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["plugins"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "ey5A");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0Ene":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plugins = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plugins);


/***/ }),

/***/ "4eJC":
/***/ (function(module, exports, __webpack_require__) {
=======
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9756:
/***/ (function(module) {
>>>>>>> main

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


<<<<<<< HEAD
/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "ey5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

=======
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
__webpack_require__.d(__webpack_exports__, "PluginArea", function() { return /* reexport */ plugin_area; });
__webpack_require__.d(__webpack_exports__, "withPluginContext", function() { return /* reexport */ withPluginContext; });
__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return /* reexport */ registerPlugin; });
__webpack_require__.d(__webpack_exports__, "unregisterPlugin", function() { return /* reexport */ unregisterPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugin", function() { return /* reexport */ getPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugins", function() { return /* reexport */ getPlugins; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__("4eJC");
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-context/index.js
=======
__webpack_require__.d(__webpack_exports__, {
  "PluginArea": function() { return /* reexport */ plugin_area; },
  "getPlugin": function() { return /* reexport */ getPlugin; },
  "getPlugins": function() { return /* reexport */ getPlugins; },
  "registerPlugin": function() { return /* reexport */ registerPlugin; },
  "unregisterPlugin": function() { return /* reexport */ unregisterPlugin; },
  "withPluginContext": function() { return /* reexport */ withPluginContext; }
});

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(9756);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);
;// CONCATENATED MODULE: external ["wp","hooks"]
var external_wp_hooks_namespaceObject = window["wp"]["hooks"];
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
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-context/index.js
>>>>>>> main



/**
 * WordPress dependencies
 */


const {
  Consumer,
  Provider
<<<<<<< HEAD
} = Object(external_wp_element_["createContext"])({
=======
} = (0,external_wp_element_namespaceObject.createContext)({
>>>>>>> main
  name: null,
  icon: null
});

/**
 * A Higher Order Component used to inject Plugin context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {WPComponent} Enhanced component with injected context as props.
 */

<<<<<<< HEAD
const withPluginContext = mapContextToProps => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => {
  return props => Object(external_wp_element_["createElement"])(Consumer, null, context => Object(external_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, mapContextToProps(context, props))));
}, 'withPluginContext');

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plugins.js
var plugins = __webpack_require__("0Ene");

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/api/index.js
=======
const withPluginContext = mapContextToProps => (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(OriginalComponent => {
  return props => (0,external_wp_element_namespaceObject.createElement)(Consumer, null, context => (0,external_wp_element_namespaceObject.createElement)(OriginalComponent, _extends({}, props, mapContextToProps(context, props))));
}, 'withPluginContext');

;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-error-boundary/index.js
/**
 * WordPress dependencies
 */

class PluginErrorBoundary extends external_wp_element_namespaceObject.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error) {
    const {
      name,
      onError
    } = this.props;

    if (onError) {
      onError(name, error);
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return null;
  }

}

;// CONCATENATED MODULE: external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plugins.js


/**
 * WordPress dependencies
 */

const plugins = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ var library_plugins = (plugins);

;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/api/index.js
>>>>>>> main
/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Defined behavior of a plugin type.
 *
 * @typedef {Object} WPPlugin
 *
 * @property {string}                    name    A string identifying the plugin. Must be
 *                                               unique across all registered plugins.
 * @property {string|WPElement|Function} [icon]  An icon to be shown in the UI. It can
 *                                               be a slug of the Dashicon, or an element
 *                                               (or function returning an element) if you
 *                                               choose to render your own SVG.
 * @property {Function}                  render  A component containing the UI elements
 *                                               to be rendered.
 * @property {string}                    [scope] The optional scope to be used when rendering inside
 *                                               a plugin area. No scope by default.
 */

/**
 * Plugin definitions keyed by plugin name.
 *
 * @type {Object.<string,WPPlugin>}
 */

const api_plugins = {};
/**
 * Registers a plugin to the editor.
 *
 * @param {string}   name     A string identifying the plugin.Must be
 *                            unique across all registered plugins.
 * @param {WPPlugin} settings The settings for this plugin.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var Fragment = wp.element.Fragment;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function Component() {
 * 	return el(
 * 		Fragment,
 * 		{},
 * 		el(
 * 			PluginSidebarMoreMenuItem,
 * 			{
 * 				target: 'sidebar-name',
 * 			},
 * 			'My Sidebar'
 * 		),
 * 		el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'sidebar-name',
 * 				title: 'My Sidebar',
 * 			},
 * 			'Content of the sidebar'
 * 		)
 * 	);
 * }
 * registerPlugin( 'plugin-name', {
 * 	icon: moreIcon,
 * 	render: Component,
 * 	scope: 'my-page',
 * } );
 * ```
 *
 * @example
 * ```js
 * // Using ESNext syntax
 * import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
 * import { registerPlugin } from '@wordpress/plugins';
 * import { more } from '@wordpress/icons';
 *
 * const Component = () => (
 * 	<>
 * 		<PluginSidebarMoreMenuItem
 * 			target="sidebar-name"
 * 		>
 * 			My Sidebar
 * 		</PluginSidebarMoreMenuItem>
 * 		<PluginSidebar
 * 			name="sidebar-name"
 * 			title="My Sidebar"
 * 		>
 * 			Content of the sidebar
 * 		</PluginSidebar>
 * 	</>
 * );
 *
 * registerPlugin( 'plugin-name', {
 * 	icon: more,
 * 	render: Component,
 * 	scope: 'my-page',
 * } );
 * ```
 *
 * @return {WPPlugin} The final plugin settings object.
 */

function registerPlugin(name, settings) {
  if (typeof settings !== 'object') {
    console.error('No settings object provided!');
    return null;
  }

  if (typeof name !== 'string') {
    console.error('Plugin name must be string.');
    return null;
  }

  if (!/^[a-z][a-z0-9-]*$/.test(name)) {
    console.error('Plugin name must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".');
    return null;
  }

  if (api_plugins[name]) {
    console.error(`Plugin "${name}" is already registered.`);
  }

<<<<<<< HEAD
  settings = Object(external_wp_hooks_["applyFilters"])('plugins.registerPlugin', settings, name);
=======
  settings = (0,external_wp_hooks_namespaceObject.applyFilters)('plugins.registerPlugin', settings, name);
>>>>>>> main
  const {
    render,
    scope
  } = settings;

<<<<<<< HEAD
  if (!Object(external_lodash_["isFunction"])(render)) {
=======
  if (!(0,external_lodash_namespaceObject.isFunction)(render)) {
>>>>>>> main
    console.error('The "render" property must be specified and must be a valid function.');
    return null;
  }

  if (scope) {
    if (typeof scope !== 'string') {
      console.error('Plugin scope must be string.');
      return null;
    }

    if (!/^[a-z][a-z0-9-]*$/.test(scope)) {
      console.error('Plugin scope must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-page".');
      return null;
    }
  }

  api_plugins[name] = {
    name,
<<<<<<< HEAD
    icon: plugins["a" /* default */],
    ...settings
  };
  Object(external_wp_hooks_["doAction"])('plugins.pluginRegistered', settings, name);
=======
    icon: library_plugins,
    ...settings
  };
  (0,external_wp_hooks_namespaceObject.doAction)('plugins.pluginRegistered', settings, name);
>>>>>>> main
  return settings;
}
/**
 * Unregisters a plugin by name.
 *
 * @param {string} name Plugin name.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var unregisterPlugin = wp.plugins.unregisterPlugin;
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
 * @example
 * ```js
 * // Using ESNext syntax
 * import { unregisterPlugin } from '@wordpress/plugins';
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
 * @return {?WPPlugin} The previous plugin settings object, if it has been
 *                     successfully unregistered; otherwise `undefined`.
 */

function unregisterPlugin(name) {
  if (!api_plugins[name]) {
    console.error('Plugin "' + name + '" is not registered.');
    return;
  }

  const oldPlugin = api_plugins[name];
  delete api_plugins[name];
<<<<<<< HEAD
  Object(external_wp_hooks_["doAction"])('plugins.pluginUnregistered', oldPlugin, name);
=======
  (0,external_wp_hooks_namespaceObject.doAction)('plugins.pluginUnregistered', oldPlugin, name);
>>>>>>> main
  return oldPlugin;
}
/**
 * Returns a registered plugin settings.
 *
 * @param {string} name Plugin name.
 *
 * @return {?WPPlugin} Plugin setting.
 */

function getPlugin(name) {
  return api_plugins[name];
}
/**
 * Returns all registered plugins without a scope or for a given scope.
 *
 * @param {string} [scope] The scope to be used when rendering inside
 *                         a plugin area. No scope by default.
 *
 * @return {WPPlugin[]} The list of plugins without a scope or for a given scope.
 */

function getPlugins(scope) {
  return Object.values(api_plugins).filter(plugin => plugin.scope === scope);
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-area/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-area/index.js
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
=======

>>>>>>> main
/**
 * A component that renders all plugin fills in a hidden div.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var PluginArea = wp.plugins.PluginArea;
 *
 * function Layout() {
 * 	return el(
 * 		'div',
 * 		{ scope: 'my-page' },
 * 		'Content of the page',
 * 		PluginArea
 * 	);
 * }
 * ```
 *
 * @example
 * ```js
 * // Using ESNext syntax
 * import { PluginArea } from '@wordpress/plugins';
 *
 * const Layout = () => (
 * 	<div>
 * 		Content of the page
 * 		<PluginArea scope="my-page" />
 * 	</div>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

<<<<<<< HEAD
class plugin_area_PluginArea extends external_wp_element_["Component"] {
=======
class PluginArea extends external_wp_element_namespaceObject.Component {
>>>>>>> main
  constructor() {
    super(...arguments);
    this.setPlugins = this.setPlugins.bind(this);
    this.memoizedContext = memize_default()((name, icon) => {
      return {
        name,
        icon
      };
    });
    this.state = this.getCurrentPluginsState();
  }

  getCurrentPluginsState() {
    return {
<<<<<<< HEAD
      plugins: Object(external_lodash_["map"])(getPlugins(this.props.scope), _ref => {
=======
      plugins: (0,external_lodash_namespaceObject.map)(getPlugins(this.props.scope), _ref => {
>>>>>>> main
        let {
          icon,
          name,
          render
        } = _ref;
        return {
          Plugin: render,
          context: this.memoizedContext(name, icon)
        };
      })
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    Object(external_wp_hooks_["addAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered', this.setPlugins);
    Object(external_wp_hooks_["addAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered', this.setPlugins);
  }

  componentWillUnmount() {
    Object(external_wp_hooks_["removeAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered');
    Object(external_wp_hooks_["removeAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered');
=======
    (0,external_wp_hooks_namespaceObject.addAction)('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered', this.setPlugins);
    (0,external_wp_hooks_namespaceObject.addAction)('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered', this.setPlugins);
  }

  componentWillUnmount() {
    (0,external_wp_hooks_namespaceObject.removeAction)('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered');
    (0,external_wp_hooks_namespaceObject.removeAction)('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered');
>>>>>>> main
  }

  setPlugins() {
    this.setState(this.getCurrentPluginsState);
  }

  render() {
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])("div", {
      style: {
        display: 'none'
      }
    }, Object(external_lodash_["map"])(this.state.plugins, _ref2 => {
=======
    return (0,external_wp_element_namespaceObject.createElement)("div", {
      style: {
        display: 'none'
      }
    }, (0,external_lodash_namespaceObject.map)(this.state.plugins, _ref2 => {
>>>>>>> main
      let {
        context,
        Plugin
      } = _ref2;
<<<<<<< HEAD
      return Object(external_wp_element_["createElement"])(Provider, {
        key: context.name,
        value: context
      }, Object(external_wp_element_["createElement"])(Plugin, null));
=======
      return (0,external_wp_element_namespaceObject.createElement)(Provider, {
        key: context.name,
        value: context
      }, (0,external_wp_element_namespaceObject.createElement)(PluginErrorBoundary, {
        name: context.name,
        onError: this.props.onError
      }, (0,external_wp_element_namespaceObject.createElement)(Plugin, null)));
>>>>>>> main
    }));
  }

}

<<<<<<< HEAD
/* harmony default export */ var plugin_area = (plugin_area_PluginArea);

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/index.js



// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/index.js




/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

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
/* harmony default export */ var plugin_area = (PluginArea);

;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/index.js



;// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/index.js



}();
(window.wp = window.wp || {}).plugins = __webpack_exports__;
/******/ })()
;
>>>>>>> main
