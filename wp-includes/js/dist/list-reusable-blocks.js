<<<<<<< HEAD
this["wp"] = this["wp"] || {}; this["wp"]["listReusableBlocks"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "SdGz");
/******/ })
/************************************************************************/
/******/ ({

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "SdGz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js
>>>>>>> main
/**
 * Downloads a file.
 *
 * @param {string} fileName    File Name.
 * @param {string} content     File Content.
 * @param {string} contentType File mime type.
 */
function download(fileName, content, contentType) {
  const file = new window.Blob([content], {
    type: contentType
  }); // IE11 can't use the click to download technique
  // we use a specific IE11 technique instead.

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, fileName);
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
/**
 * Reads the textual content of the given file.
 *
 * @param {File} file File.
 * @return {Promise<string>}  Content of the file.
 */

function readTextFile(file) {
  const reader = new window.FileReader();
  return new Promise(resolve => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsText(file);
  });
}

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/export.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/export.js
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


/**
 * Export a reusable block as a JSON file.
 *
 * @param {number} id
 */

async function exportReusableBlock(id) {
  const postType = await external_wp_apiFetch_default()({
    path: `/wp/v2/types/wp_block`
  });
  const post = await external_wp_apiFetch_default()({
    path: `/wp/v2/${postType.rest_base}/${id}?context=edit`
  });
  const title = post.title.raw;
  const content = post.content.raw;
  const fileContent = JSON.stringify({
    __file: 'wp_block',
    title,
    content
  }, null, 2);
<<<<<<< HEAD
  const fileName = Object(external_lodash_["kebabCase"])(title) + '.json';
=======
  const fileName = (0,external_lodash_namespaceObject.kebabCase)(title) + '.json';
>>>>>>> main
  download(fileName, fileContent, 'application/json');
}

/* harmony default export */ var utils_export = (exportReusableBlock);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/import.js
=======
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/import.js
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


/**
 * Import a reusable block from a JSON file.
 *
 * @param {File} file File.
 * @return {Promise} Promise returning the imported reusable block.
 */

async function importReusableBlock(file) {
  const fileContent = await readTextFile(file);
  let parsedContent;

  try {
    parsedContent = JSON.parse(fileContent);
  } catch (e) {
    throw new Error('Invalid JSON file');
  }

<<<<<<< HEAD
  if (parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || !Object(external_lodash_["isString"])(parsedContent.title) || !Object(external_lodash_["isString"])(parsedContent.content)) {
=======
  if (parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || !(0,external_lodash_namespaceObject.isString)(parsedContent.title) || !(0,external_lodash_namespaceObject.isString)(parsedContent.content)) {
>>>>>>> main
    throw new Error('Invalid Reusable block JSON file');
  }

  const postType = await external_wp_apiFetch_default()({
    path: `/wp/v2/types/wp_block`
  });
  const reusableBlock = await external_wp_apiFetch_default()({
    path: `/wp/v2/${postType.rest_base}`,
    data: {
      title: parsedContent.title,
      content: parsedContent.content,
      status: 'publish'
    },
    method: 'POST'
  });
  return reusableBlock;
}

/* harmony default export */ var utils_import = (importReusableBlock);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-form/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-form/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



<<<<<<< HEAD
class import_form_ImportForm extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: false,
      error: null,
      file: null
    };
    this.isStillMounted = true;
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.isStillMounted = false;
  }

  onChangeFile(event) {
    this.setState({
      file: event.target.files[0],
      error: null
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      file
    } = this.state;
    const {
      onUpload
    } = this.props;
=======
function ImportForm(_ref) {
  let {
    instanceId,
    onUpload
  } = _ref;
  const inputId = 'list-reusable-blocks-import-form-' + instanceId;
  const formRef = (0,external_wp_element_namespaceObject.useRef)();
  const [isLoading, setIsLoading] = (0,external_wp_element_namespaceObject.useState)(false);
  const [error, setError] = (0,external_wp_element_namespaceObject.useState)(null);
  const [file, setFile] = (0,external_wp_element_namespaceObject.useState)(null);

  const onChangeFile = event => {
    setFile(event.target.files[0]);
    setError(null);
  };

  const onSubmit = event => {
    event.preventDefault();
>>>>>>> main

    if (!file) {
      return;
    }

<<<<<<< HEAD
    this.setState({
      isLoading: true
    });
    utils_import(file).then(reusableBlock => {
      if (!this.isStillMounted) {
        return;
      }

      this.setState({
        isLoading: false
      });
      onUpload(reusableBlock);
    }).catch(error => {
      if (!this.isStillMounted) {
=======
    setIsLoading({
      isLoading: true
    });
    utils_import(file).then(reusableBlock => {
      if (!formRef) {
        return;
      }

      setIsLoading(false);
      onUpload(reusableBlock);
    }).catch(errors => {
      if (!formRef) {
>>>>>>> main
        return;
      }

      let uiMessage;

<<<<<<< HEAD
      switch (error.message) {
        case 'Invalid JSON file':
          uiMessage = Object(external_wp_i18n_["__"])('Invalid JSON file');
          break;

        case 'Invalid Reusable block JSON file':
          uiMessage = Object(external_wp_i18n_["__"])('Invalid Reusable block JSON file');
          break;

        default:
          uiMessage = Object(external_wp_i18n_["__"])('Unknown error');
      }

      this.setState({
        isLoading: false,
        error: uiMessage
      });
    });
  }

  onDismissError() {
    this.setState({
      error: null
    });
  }

  render() {
    const {
      instanceId
    } = this.props;
    const {
      file,
      isLoading,
      error
    } = this.state;
    const inputId = 'list-reusable-blocks-import-form-' + instanceId;
    return Object(external_wp_element_["createElement"])("form", {
      className: "list-reusable-blocks-import-form",
      onSubmit: this.onSubmit
    }, error && Object(external_wp_element_["createElement"])(external_wp_components_["Notice"], {
      status: "error",
      onRemove: () => this.onDismissError()
    }, error), Object(external_wp_element_["createElement"])("label", {
      htmlFor: inputId,
      className: "list-reusable-blocks-import-form__label"
    }, Object(external_wp_i18n_["__"])('File')), Object(external_wp_element_["createElement"])("input", {
      id: inputId,
      type: "file",
      onChange: this.onChangeFile
    }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      type: "submit",
      isBusy: isLoading,
      disabled: !file || isLoading,
      variant: "secondary",
      className: "list-reusable-blocks-import-form__button"
    }, Object(external_wp_i18n_["_x"])('Import', 'button label')));
  }

}

/* harmony default export */ var import_form = (Object(external_wp_compose_["withInstanceId"])(import_form_ImportForm));

// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-dropdown/index.js
=======
      switch (errors.message) {
        case 'Invalid JSON file':
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Invalid JSON file');
          break;

        case 'Invalid Reusable block JSON file':
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Invalid Reusable block JSON file');
          break;

        default:
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Unknown error');
      }

      setIsLoading(false);
      setError(uiMessage);
    });
  };

  const onDismissError = () => {
    setError(null);
  };

  return (0,external_wp_element_namespaceObject.createElement)("form", {
    className: "list-reusable-blocks-import-form",
    onSubmit: onSubmit,
    ref: formRef
  }, error && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Notice, {
    status: "error",
    onRemove: () => onDismissError()
  }, error), (0,external_wp_element_namespaceObject.createElement)("label", {
    htmlFor: inputId,
    className: "list-reusable-blocks-import-form__label"
  }, (0,external_wp_i18n_namespaceObject.__)('File')), (0,external_wp_element_namespaceObject.createElement)("input", {
    id: inputId,
    type: "file",
    onChange: onChangeFile
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    type: "submit",
    isBusy: isLoading,
    disabled: !file || isLoading,
    variant: "secondary",
    className: "list-reusable-blocks-import-form__button"
  }, (0,external_wp_i18n_namespaceObject._x)('Import', 'button label')));
}

/* harmony default export */ var import_form = ((0,external_wp_compose_namespaceObject.withInstanceId)(ImportForm));

;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-dropdown/index.js
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



function ImportDropdown(_ref) {
  let {
    onUpload
  } = _ref;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
=======
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Dropdown, {
>>>>>>> main
    position: "bottom right",
    contentClassName: "list-reusable-blocks-import-dropdown__content",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
<<<<<<< HEAD
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "primary"
      }, Object(external_wp_i18n_["__"])('Import from JSON'));
=======
      return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "primary"
      }, (0,external_wp_i18n_namespaceObject.__)('Import from JSON'));
>>>>>>> main
    },
    renderContent: _ref3 => {
      let {
        onClose
      } = _ref3;
<<<<<<< HEAD
      return Object(external_wp_element_["createElement"])(import_form, {
        onUpload: Object(external_lodash_["flow"])(onClose, onUpload)
=======
      return (0,external_wp_element_namespaceObject.createElement)(import_form, {
        onUpload: (0,external_lodash_namespaceObject.flow)(onClose, onUpload)
>>>>>>> main
      });
    }
  });
}

/* harmony default export */ var import_dropdown = (ImportDropdown);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/index.js
=======
;// CONCATENATED MODULE: ./node_modules/@wordpress/list-reusable-blocks/build-module/index.js
>>>>>>> main


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


<<<<<<< HEAD
 // Setup Export Links
=======
 // Setup Export Links.
>>>>>>> main

document.body.addEventListener('click', event => {
  if (!event.target.classList.contains('wp-list-reusable-blocks__export')) {
    return;
  }

  event.preventDefault();
  utils_export(event.target.dataset.id);
<<<<<<< HEAD
}); // Setup Import Form
=======
}); // Setup Import Form.
>>>>>>> main

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.page-title-action');

  if (!button) {
    return;
  }

  const showNotice = () => {
    const notice = document.createElement('div');
    notice.className = 'notice notice-success is-dismissible';
<<<<<<< HEAD
    notice.innerHTML = `<p>${Object(external_wp_i18n_["__"])('Reusable block imported successfully!')}</p>`;
=======
    notice.innerHTML = `<p>${(0,external_wp_i18n_namespaceObject.__)('Reusable block imported successfully!')}</p>`;
>>>>>>> main
    const headerEnd = document.querySelector('.wp-header-end');

    if (!headerEnd) {
      return;
    }

    headerEnd.parentNode.insertBefore(notice, headerEnd);
  };

  const container = document.createElement('div');
  container.className = 'list-reusable-blocks__container';
  button.parentNode.insertBefore(container, button);
<<<<<<< HEAD
  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(import_dropdown, {
=======
  (0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(import_dropdown, {
>>>>>>> main
    onUpload: showNotice
  }), container);
});

<<<<<<< HEAD

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

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
=======
(window.wp = window.wp || {}).listReusableBlocks = __webpack_exports__;
/******/ })()
;
>>>>>>> main
