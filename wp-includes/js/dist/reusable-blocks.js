<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["reusableBlocks"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "iqm2");
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

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "iqm2":
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
__webpack_require__.d(__webpack_exports__, "ReusableBlocksMenuItems", function() { return /* reexport */ reusable_blocks_menu_items; });
=======
__webpack_require__.d(__webpack_exports__, {
  "ReusableBlocksMenuItems": function() { return /* reexport */ reusable_blocks_menu_items; },
  "store": function() { return /* reexport */ store; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlockToStatic", function() { return __experimentalConvertBlockToStatic; });
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlocksToReusable", function() { return __experimentalConvertBlocksToReusable; });
__webpack_require__.d(actions_namespaceObject, "__experimentalDeleteReusableBlock", function() { return __experimentalDeleteReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalSetEditingReusableBlock", function() { return __experimentalSetEditingReusableBlock; });
=======
__webpack_require__.d(actions_namespaceObject, {
  "__experimentalConvertBlockToStatic": function() { return __experimentalConvertBlockToStatic; },
  "__experimentalConvertBlocksToReusable": function() { return __experimentalConvertBlocksToReusable; },
  "__experimentalDeleteReusableBlock": function() { return __experimentalDeleteReusableBlock; },
  "__experimentalSetEditingReusableBlock": function() { return __experimentalSetEditingReusableBlock; }
});
>>>>>>> main

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
<<<<<<< HEAD
__webpack_require__.d(selectors_namespaceObject, "__experimentalIsEditingReusableBlock", function() { return __experimentalIsEditingReusableBlock; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
=======
__webpack_require__.d(selectors_namespaceObject, {
  "__experimentalIsEditingReusableBlock": function() { return __experimentalIsEditingReusableBlock; }
});

;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
>>>>>>> main
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Returns a generator converting a reusable block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */

const __experimentalConvertBlockToStatic = clientId => _ref => {
  let {
    registry
  } = _ref;
<<<<<<< HEAD
  const oldBlock = registry.select(external_wp_blockEditor_["store"]).getBlock(clientId);
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
  const newBlocks = Object(external_wp_blocks_["parse"])(Object(external_lodash_["isFunction"])(reusableBlock.content) ? reusableBlock.content(reusableBlock) : reusableBlock.content);
  registry.dispatch(external_wp_blockEditor_["store"]).replaceBlocks(oldBlock.clientId, newBlocks);
=======
  const oldBlock = registry.select(external_wp_blockEditor_namespaceObject.store).getBlock(clientId);
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
  const newBlocks = (0,external_wp_blocks_namespaceObject.parse)((0,external_lodash_namespaceObject.isFunction)(reusableBlock.content) ? reusableBlock.content(reusableBlock) : reusableBlock.content);
  registry.dispatch(external_wp_blockEditor_namespaceObject.store).replaceBlocks(oldBlock.clientId, newBlocks);
>>>>>>> main
};
/**
 * Returns a generator converting one or more static blocks into a reusable block.
 *
 * @param {string[]} clientIds The client IDs of the block to detach.
 * @param {string}   title     Reusable block title.
 */

const __experimentalConvertBlocksToReusable = (clientIds, title) => async _ref2 => {
  let {
    registry,
    dispatch
  } = _ref2;
  const reusableBlock = {
<<<<<<< HEAD
    title: title || Object(external_wp_i18n_["__"])('Untitled Reusable block'),
    content: Object(external_wp_blocks_["serialize"])(registry.select(external_wp_blockEditor_["store"]).getBlocksByClientId(clientIds)),
    status: 'publish'
  };
  const updatedRecord = await registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);
  const newBlock = Object(external_wp_blocks_["createBlock"])('core/block', {
    ref: updatedRecord.id
  });
  registry.dispatch(external_wp_blockEditor_["store"]).replaceBlocks(clientIds, newBlock);
=======
    title: title || (0,external_wp_i18n_namespaceObject.__)('Untitled Reusable block'),
    content: (0,external_wp_blocks_namespaceObject.serialize)(registry.select(external_wp_blockEditor_namespaceObject.store).getBlocksByClientId(clientIds)),
    status: 'publish'
  };
  const updatedRecord = await registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);
  const newBlock = (0,external_wp_blocks_namespaceObject.createBlock)('core/block', {
    ref: updatedRecord.id
  });
  registry.dispatch(external_wp_blockEditor_namespaceObject.store).replaceBlocks(clientIds, newBlock);
>>>>>>> main

  dispatch.__experimentalSetEditingReusableBlock(newBlock.clientId, true);
};
/**
 * Returns a generator deleting a reusable block.
 *
 * @param {string} id The ID of the reusable block to delete.
 */

const __experimentalDeleteReusableBlock = id => async _ref3 => {
  let {
    registry
  } = _ref3;
<<<<<<< HEAD
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted

  if (!reusableBlock) {
    return;
  } // Remove any other blocks that reference this reusable block


  const allBlocks = registry.select(external_wp_blockEditor_["store"]).getBlocks();
  const associatedBlocks = allBlocks.filter(block => Object(external_wp_blocks_["isReusableBlock"])(block) && block.attributes.ref === id);
  const associatedBlockClientIds = associatedBlocks.map(block => block.clientId); // Remove the parsed block.

  if (associatedBlockClientIds.length) {
    registry.dispatch(external_wp_blockEditor_["store"]).removeBlocks(associatedBlockClientIds);
=======
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted.

  if (!reusableBlock) {
    return;
  } // Remove any other blocks that reference this reusable block.


  const allBlocks = registry.select(external_wp_blockEditor_namespaceObject.store).getBlocks();
  const associatedBlocks = allBlocks.filter(block => (0,external_wp_blocks_namespaceObject.isReusableBlock)(block) && block.attributes.ref === id);
  const associatedBlockClientIds = associatedBlocks.map(block => block.clientId); // Remove the parsed block.

  if (associatedBlockClientIds.length) {
    registry.dispatch(external_wp_blockEditor_namespaceObject.store).removeBlocks(associatedBlockClientIds);
>>>>>>> main
  }

  await registry.dispatch('core').deleteEntityRecord('postType', 'wp_block', id);
};
/**
 * Returns an action descriptor for SET_EDITING_REUSABLE_BLOCK action.
 *
 * @param {string}  clientId  The clientID of the reusable block to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */

function __experimentalSetEditingReusableBlock(clientId, isEditing) {
  return {
    type: 'SET_EDITING_REUSABLE_BLOCK',
    clientId,
    isEditing
  };
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js
>>>>>>> main
/**
 * WordPress dependencies
 */

function isEditingReusableBlock() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if ((action === null || action === void 0 ? void 0 : action.type) === 'SET_EDITING_REUSABLE_BLOCK') {
    return { ...state,
      [action.clientId]: action.isEditing
    };
  }

  return state;
}
<<<<<<< HEAD
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  isEditingReusableBlock
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
=======
/* harmony default export */ var reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  isEditingReusableBlock
}));

;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
>>>>>>> main
/**
 * Returns true if reusable block is in the editing state.
 *
 * @param {Object} state    Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the reusable block is in the editing state.
 */
function __experimentalIsEditingReusableBlock(state, clientId) {
  return state.isEditingReusableBlock[clientId];
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/index.js
>>>>>>> main
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/reusable-blocks';
/**
 * Store definition for the reusable blocks namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

<<<<<<< HEAD
const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  actions: actions_namespaceObject,
  reducer: reducer,
  selectors: selectors_namespaceObject,
  __experimentalUseThunks: true
});
Object(external_wp_data_["register"])(store);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/reusable-block.js
=======
const store = (0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME, {
  actions: actions_namespaceObject,
  reducer: reducer,
  selectors: selectors_namespaceObject
});
(0,external_wp_data_namespaceObject.register)(store);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/symbol.js
>>>>>>> main


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
const reusable_block_reusableBlock = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"
}));
/* harmony default export */ var reusable_block = (reusable_block_reusableBlock);

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__("onLe");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js
=======
const symbol = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ var library_symbol = (symbol);

;// CONCATENATED MODULE: external ["wp","notices"]
var external_wp_notices_namespaceObject = window["wp"]["notices"];
;// CONCATENATED MODULE: external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js
>>>>>>> main


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


/**
 * Menu control to convert block(s) to reusable block.
 *
 * @param {Object}   props              Component props.
 * @param {string[]} props.clientIds    Client ids of selected blocks.
 * @param {string}   props.rootClientId ID of the currently selected top-level block.
 * @return {import('@wordpress/element').WPComponent} The menu control or null.
 */

function ReusableBlockConvertButton(_ref) {
  let {
    clientIds,
    rootClientId
  } = _ref;
<<<<<<< HEAD
  const [isModalOpen, setIsModalOpen] = Object(external_wp_element_["useState"])(false);
  const [title, setTitle] = Object(external_wp_element_["useState"])('');
  const canConvert = Object(external_wp_data_["useSelect"])(select => {
=======
  const [isModalOpen, setIsModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)('');
  const canConvert = (0,external_wp_data_namespaceObject.useSelect)(select => {
>>>>>>> main
    var _getBlocksByClientId;

    const {
      canUser
<<<<<<< HEAD
    } = select(external_wp_coreData_["store"]);
    const {
      getBlocksByClientId,
      canInsertBlockType
    } = select(external_wp_blockEditor_["store"]);
    const blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
    const isReusable = blocks.length === 1 && blocks[0] && Object(external_wp_blocks_["isReusableBlock"])(blocks[0]) && !!select(external_wp_coreData_["store"]).getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);
=======
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      getBlocksByClientId,
      canInsertBlockType
    } = select(external_wp_blockEditor_namespaceObject.store);
    const blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
    const isReusable = blocks.length === 1 && blocks[0] && (0,external_wp_blocks_namespaceObject.isReusableBlock)(blocks[0]) && !!select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);
>>>>>>> main

    const _canConvert = // Hide when this is already a reusable block.
    !isReusable && // Hide when reusable blocks are disabled.
    canInsertBlockType('core/block', rootClientId) && blocks.every(block => // Guard against the case where a regular block has *just* been converted.
    !!block && // Hide on invalid blocks.
    block.isValid && // Hide when block doesn't support being made reusable.
<<<<<<< HEAD
    Object(external_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)) && // Hide when current doesn't have permission to do that.
=======
    (0,external_wp_blocks_namespaceObject.hasBlockSupport)(block.name, 'reusable', true)) && // Hide when current doesn't have permission to do that.
>>>>>>> main
    !!canUser('create', 'blocks');

    return _canConvert;
  }, [clientIds]);
  const {
    __experimentalConvertBlocksToReusable: convertBlocksToReusable
<<<<<<< HEAD
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const onConvert = Object(external_wp_element_["useCallback"])(async function (reusableBlockTitle) {
    try {
      await convertBlocksToReusable(clientIds, reusableBlockTitle);
      createSuccessNotice(Object(external_wp_i18n_["__"])('Reusable block created.'), {
=======
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const onConvert = (0,external_wp_element_namespaceObject.useCallback)(async function (reusableBlockTitle) {
    try {
      await convertBlocksToReusable(clientIds, reusableBlockTitle);
      createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Reusable block created.'), {
>>>>>>> main
        type: 'snackbar'
      });
    } catch (error) {
      createErrorNotice(error.message, {
        type: 'snackbar'
      });
    }
  }, [clientIds]);

  if (!canConvert) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSettingsMenuControls"], null, _ref2 => {
    let {
      onClose
    } = _ref2;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
      icon: reusable_block,
      onClick: () => {
        setIsModalOpen(true);
      }
    }, Object(external_wp_i18n_["__"])('Add to Reusable blocks')), isModalOpen && Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
      title: Object(external_wp_i18n_["__"])('Create Reusable block'),
      closeLabel: Object(external_wp_i18n_["__"])('Close'),
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, null, _ref2 => {
    let {
      onClose
    } = _ref2;
    return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
      icon: library_symbol,
      onClick: () => {
        setIsModalOpen(true);
      }
    }, (0,external_wp_i18n_namespaceObject.__)('Add to Reusable blocks')), isModalOpen && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
      title: (0,external_wp_i18n_namespaceObject.__)('Create Reusable block'),
      closeLabel: (0,external_wp_i18n_namespaceObject.__)('Close'),
>>>>>>> main
      onRequestClose: () => {
        setIsModalOpen(false);
        setTitle('');
      },
      overlayClassName: "reusable-blocks-menu-items__convert-modal"
<<<<<<< HEAD
    }, Object(external_wp_element_["createElement"])("form", {
=======
    }, (0,external_wp_element_namespaceObject.createElement)("form", {
>>>>>>> main
      onSubmit: event => {
        event.preventDefault();
        onConvert(title);
        setIsModalOpen(false);
        setTitle('');
        onClose();
      }
<<<<<<< HEAD
    }, Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
      label: Object(external_wp_i18n_["__"])('Name'),
      value: title,
      onChange: setTitle
    }), Object(external_wp_element_["createElement"])(external_wp_components_["Flex"], {
      className: "reusable-blocks-menu-items__convert-modal-actions",
      justify: "flex-end"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["FlexItem"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      variant: "secondary",
=======
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
      label: (0,external_wp_i18n_namespaceObject.__)('Name'),
      value: title,
      onChange: setTitle
    }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex, {
      className: "reusable-blocks-menu-items__convert-modal-actions",
      justify: "flex-end"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      variant: "tertiary",
>>>>>>> main
      onClick: () => {
        setIsModalOpen(false);
        setTitle('');
      }
<<<<<<< HEAD
    }, Object(external_wp_i18n_["__"])('Cancel'))), Object(external_wp_element_["createElement"])(external_wp_components_["FlexItem"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      variant: "primary",
      type: "submit"
    }, Object(external_wp_i18n_["__"])('Save')))))));
  });
}

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js
=======
    }, (0,external_wp_i18n_namespaceObject.__)('Cancel'))), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      variant: "primary",
      type: "submit"
    }, (0,external_wp_i18n_namespaceObject.__)('Save')))))));
  });
}

;// CONCATENATED MODULE: external ["wp","url"]
var external_wp_url_namespaceObject = window["wp"]["url"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js
>>>>>>> main


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function ReusableBlocksManageButton(_ref) {
  let {
    clientId
  } = _ref;
  const {
<<<<<<< HEAD
    isVisible
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getBlock
    } = select(external_wp_blockEditor_["store"]);
    const {
      canUser
    } = select(external_wp_coreData_["store"]);
    const reusableBlock = getBlock(clientId);
    return {
      isVisible: !!reusableBlock && Object(external_wp_blocks_["isReusableBlock"])(reusableBlock) && !!canUser('update', 'blocks', reusableBlock.attributes.ref)
=======
    canRemove,
    isVisible
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlock,
      canRemoveBlock
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      canUser
    } = select(external_wp_coreData_namespaceObject.store);
    const reusableBlock = getBlock(clientId);
    return {
      canRemove: canRemoveBlock(clientId),
      isVisible: !!reusableBlock && (0,external_wp_blocks_namespaceObject.isReusableBlock)(reusableBlock) && !!canUser('update', 'blocks', reusableBlock.attributes.ref)
>>>>>>> main
    };
  }, [clientId]);
  const {
    __experimentalConvertBlockToStatic: convertBlockToStatic
<<<<<<< HEAD
  } = Object(external_wp_data_["useDispatch"])(store);
=======
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
>>>>>>> main

  if (!isVisible) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSettingsMenuControls"], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    href: Object(external_wp_url_["addQueryArgs"])('edit.php', {
      post_type: 'wp_block'
    })
  }, Object(external_wp_i18n_["__"])('Manage Reusable blocks')), Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: () => convertBlockToStatic(clientId)
  }, Object(external_wp_i18n_["__"])('Convert to regular blocks')));
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    href: (0,external_wp_url_namespaceObject.addQueryArgs)('edit.php', {
      post_type: 'wp_block'
    })
  }, (0,external_wp_i18n_namespaceObject.__)('Manage Reusable blocks')), canRemove && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    onClick: () => convertBlockToStatic(clientId)
  }, (0,external_wp_i18n_namespaceObject.__)('Convert to regular blocks')));
>>>>>>> main
}

/* harmony default export */ var reusable_blocks_manage_button = (ReusableBlocksManageButton);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ReusableBlocksMenuItems(_ref) {
  let {
    clientIds,
    rootClientId
  } = _ref;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(ReusableBlockConvertButton, {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && Object(external_wp_element_["createElement"])(reusable_blocks_manage_button, {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(ReusableBlockConvertButton, {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && (0,external_wp_element_namespaceObject.createElement)(reusable_blocks_manage_button, {
>>>>>>> main
    clientId: clientIds[0]
  }));
}

<<<<<<< HEAD
/* harmony default export */ var reusable_blocks_menu_items = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getSelectedBlockClientIds
  } = select(external_wp_blockEditor_["store"]);
=======
/* harmony default export */ var reusable_blocks_menu_items = ((0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    getSelectedBlockClientIds
  } = select(external_wp_blockEditor_namespaceObject.store);
>>>>>>> main
  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ReusableBlocksMenuItems));

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/index.js




/***/ }),

/***/ "jZUy":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "onLe":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ })

/******/ });
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/index.js


;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/index.js



(window.wp = window.wp || {}).reusableBlocks = __webpack_exports__;
/******/ })()
;
>>>>>>> main
