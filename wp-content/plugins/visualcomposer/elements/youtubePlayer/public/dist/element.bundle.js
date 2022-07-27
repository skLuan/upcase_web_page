/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./youtubePlayer/component.js":
/*!************************************!*\
  !*** ./youtubePlayer/component.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YoutubePlayerComponent; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar vcvAPI = vc_cake__WEBPACK_IMPORTED_MODULE_7___default().getService('api');\n\nvar YoutubePlayerComponent = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(YoutubePlayerComponent, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(YoutubePlayerComponent);\n\n  function YoutubePlayerComponent() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, YoutubePlayerComponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(YoutubePlayerComponent, [{\n    key: \"parseTime\",\n    value: function parseTime(timeString) {\n      var time = {\n        h: 0,\n        m: 0,\n        s: 0,\n        toSeconds: function toSeconds() {\n          return this.h * 60 * 60 + this.m * 60 + this.s;\n        },\n        toString: function toString() {\n          return this.h + 'h' + this.m + 'm' + this.s + 's';\n        }\n      }; // replace all spaces\n\n      timeString = timeString.replace(/\\s+/g, ''); // get matched vars\n\n      var re = /([0-9]+[hms])|([0-9]+(?=:|$))/gi;\n      var timeData = timeString.match(re);\n\n      if (timeData) {\n        var findByLetter = function findByLetter(char, value) {\n          return value.slice(-1) === char;\n        }; // search for hours\n\n\n        var hi = timeData.findIndex(findByLetter.bind(null, 'h'));\n\n        if (hi !== -1) {\n          time.h = parseInt(timeData[hi]);\n          timeData.splice(hi, 1);\n        } // search for minutes\n\n\n        var mi = timeData.findIndex(findByLetter.bind(null, 'm'));\n\n        if (mi !== -1) {\n          time.m = parseInt(timeData[mi]);\n          timeData.splice(mi, 1);\n        } // search for seconds\n\n\n        var si = timeData.findIndex(findByLetter.bind(null, 's'));\n\n        if (si !== -1) {\n          time.s = parseInt(timeData[si]);\n          timeData.splice(si, 1);\n        } // get simple vars\n        // filter data and remove last matched elements\n\n\n        timeData = timeData.filter(function (value) {\n          var re = /^\\d+$/;\n\n          if (re.test(value)) {\n            return true;\n          }\n\n          return false;\n        });\n        timeData.splice(3); // get seconds\n\n        if (timeData.length) {\n          if (!time.s) {\n            time.s = parseInt(timeData.pop());\n          }\n        } // get minutes\n\n\n        if (timeData.length) {\n          if (!time.m) {\n            time.m = parseInt(timeData.pop());\n          }\n        } // get hours\n\n\n        if (timeData.length) {\n          if (!time.h) {\n            time.h = parseInt(timeData.pop());\n          }\n        }\n      }\n\n      return time.toSeconds();\n    }\n  }, {\n    key: \"validUnits\",\n    value: function validUnits(src) {\n      switch (src) {\n        case 'px':\n          return src;\n\n        case 'em':\n          return src;\n\n        case 'rem':\n          return src;\n\n        case 'vw':\n          return src;\n\n        case 'vh':\n          return src;\n\n        case '%':\n          return src;\n\n        default:\n          return 'px';\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var customClass = atts.customClass,\n          videoPlayer = atts.videoPlayer,\n          alignment = atts.alignment,\n          size = atts.size,\n          customSize = atts.customSize,\n          advanced = atts.advanced,\n          metaCustomId = atts.metaCustomId;\n      var classes = 'vce-yt-video-player';\n      var source, videoWidth, videoId, loop;\n      var autoplay = advanced && atts.autoplay ? 1 : 0;\n      var color = advanced && atts.color ? atts.color : 'red';\n      var controls = 1;\n      var rel = advanced && atts.rel ? 1 : 0;\n      var start = advanced && atts.start ? this.parseTime(atts.start) : 0;\n      var end = advanced && atts.end ? \"&end=\".concat(this.parseTime(atts.end)) : '';\n      var ytrx = /^.*((youtu\\.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?))\\??v?=?([^#&?]*)(?:(\\?t|&start)=(?:(\\d+)h)?(?:(\\d+)m)?(\\d+)s)?.*/;\n      var customProps = {};\n\n      if (advanced) {\n        controls = atts.controls ? 1 : 0;\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        classes = classes.concat(\" \".concat(customClass));\n      }\n\n      if (alignment) {\n        classes += \" vce-yt-video-player--align-\".concat(alignment);\n      }\n\n      if (size) {\n        classes += \" vce-yt-video-player--size-\".concat(size);\n\n        if (size === 'custom') {\n          if (/^[0-9.]+$/.test(customSize)) {\n            videoWidth = \"\".concat(parseFloat(customSize), \"px\");\n          } else if (parseFloat(customSize)) {\n            var chars = customSize.slice(parseFloat(customSize).toString().length);\n            videoWidth = \"\".concat(parseFloat(customSize)).concat(this.validUnits(chars));\n          } else {\n            videoWidth = '560px';\n          }\n        } else {\n          videoWidth = \"\".concat(size.slice(0, size.indexOf('x')), \"px\");\n        }\n      }\n\n      if (videoPlayer && videoPlayer.match(ytrx)) {\n        var url = videoPlayer.trim();\n        url = url.match(ytrx);\n        videoId = url[7];\n        loop = advanced && atts.loop ? \"&loop=1&playlist=\".concat(videoId) : '&loop=0';\n\n        if (url[8]) {\n          start += url[9] === undefined ? 0 : Number(url[9]) * 60 * 60;\n          start += url[10] === undefined ? 0 : Number(url[10]) * 60;\n          start += url[11] === undefined ? 0 : Number(url[11]);\n        }\n      }\n\n      source = \"https://www.youtube.com/embed/\".concat(videoId, \"?autoplay=\").concat(autoplay, \"&mute=\").concat(autoplay, \"&color=\").concat(color, \"&controls=\").concat(controls).concat(loop, \"&rel=\").concat(rel, \"&start=\").concat(start).concat(end, \"&cc_load_policy=0&iv_load_policy=3&enablejsapi=1\");\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var html = \"<iframe class='vce-yt-video-player-iframe' src='\".concat(source, \"' width='640' height='390' allowFullScreen title='YouTube video' />\");\n\n      if (vc_cake__WEBPACK_IMPORTED_MODULE_7___default().env('editor') === 'backend') {\n        source = \"https://www.youtube.com/embed/\".concat(videoId, \"?autoplay=false&color=\").concat(color, \"&controls=\").concat(controls).concat(loop, \"&rel=\").concat(rel, \"&start=\").concat(start).concat(end, \"&cc_load_policy=0&iv_load_policy=3&enablejsapi=1\");\n      }\n\n      var doAll = this.applyDO('all');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: classes\n      }, editor, customProps, {\n        \"data-vcv-element-disabled\": true\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce vce-yt-video-player-wrapper\",\n        id: 'el-' + id,\n        style: {\n          width: videoWidth\n        }\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"vce-yt-video-player-inner\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"vcvhelper\",\n        \"data-vcvs-html\": html\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"iframe\", {\n        className: \"vce-yt-video-player-iframe\",\n        src: source,\n        width: \"640\",\n        height: \"390\",\n        allowFullScreen: true\n      })))));\n    }\n  }]);\n\n  return YoutubePlayerComponent;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./youtubePlayer/component.js?");

/***/ }),

/***/ "./youtubePlayer/index.js":
/*!********************************!*\
  !*** ./youtubePlayer/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./youtubePlayer/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default().getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./youtubePlayer/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./youtubePlayer/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./youtubePlayer/editor.css\")\n}, // javascript callback\n'');\n\n//# sourceURL=webpack:///./youtubePlayer/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./youtubePlayer/editor.css":
/*!*************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./youtubePlayer/editor.css ***!
  \*************************************************************************/
/***/ (function(module) {

eval("module.exports = \"[data-vcv-element-disabled=\\\"true\\\"] .vce-yt-video-player-inner::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 999;\\n}\\n\\n.vce-yt-video-player {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./youtubePlayer/editor.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./youtubePlayer/styles.css":
/*!*************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./youtubePlayer/styles.css ***!
  \*************************************************************************/
/***/ (function(module) {

eval("module.exports = \"/* ----------------------------------------------\\n * YouTube Video Player\\n * ---------------------------------------------- */\\n.vce-yt-video-player-wrapper {\\n  display: inline-block;\\n  max-width: 100%;\\n  vertical-align: top;\\n  overflow: hidden;\\n}\\n.vce-yt-video-player-inner {\\n  position: relative;\\n}\\n.vce-yt-video-player-inner::before {\\n  content: '';\\n  width: 100%;\\n  display: block;\\n  padding-top: 56.25%;\\n}\\n[data-vcv-element-disabled=\\\"true\\\"] .vce-yt-video-player-inner::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 999;\\n}\\n.vce-yt-video-player-iframe {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  border: 0;\\n}\\n.vce-yt-video-player--align-center {\\n  text-align: center;\\n}\\n.vce-yt-video-player--align-right {\\n  text-align: right;\\n}\\n.vce-yt-video-player--align-left {\\n  text-align: left;\\n}\\n\"\n\n//# sourceURL=webpack:///./youtubePlayer/styles.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./youtubePlayer/settings.json":
/*!*************************************!*\
  !*** ./youtubePlayer/settings.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"videoPlayer\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"https://youtu.be/5Iz5bXIr0IY\",\"options\":{\"label\":\"YouTube video link\",\"description\":\"Enter a link to the YouTube video.\",\"link\":true}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"left\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"size\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"560x315\",\"options\":{\"label\":\"Size\",\"values\":[{\"label\":\"560x315\",\"value\":\"560x315\"},{\"label\":\"1280x720\",\"value\":\"1280x720\"},{\"label\":\"853x480\",\"value\":\"853x480\"},{\"label\":\"640x360\",\"value\":\"640x360\"},{\"label\":\"Custom size\",\"value\":\"custom\"}]}},\"customSize\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Custom width\",\"description\":\"Enter custom width and the height will be automatically calculated for 16:9 aspect ratio.\",\"onChange\":{\"rules\":{\"size\":{\"rule\":\"value\",\"options\":{\"value\":\"custom\"}}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"advanced\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Advanced options\"}},\"autoplay\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Autoplay\",\"description\":\"Automatically start to play the video when the player loads. The sound will be muted until the users\\' first interaction with the video.\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"color\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"red\",\"options\":{\"label\":\"Color\",\"description\":\"Specifies the color that will be used in the player\\'s video progress bar that highlights the amount of the video that the viewer has already seen.\",\"values\":[{\"label\":\"White\",\"value\":\"white\"},{\"label\":\"Red\",\"value\":\"red\"}],\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"controls\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":true,\"options\":{\"label\":\"Show controls\",\"description\":\"Indicates whether the video player controls are displayed.\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"loop\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Repeat video\",\"description\":\"Play the video again when it reaches the end.\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"rel\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Show related videos\",\"description\":\"Indicates whether the player should show related videos when playback of the initial video ends.\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"start\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Start at\",\"description\":\"Causes the player to begin playing the video at the given time (example: 2h09m34s or 2:09:34).\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"end\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"End at\",\"description\":\"Causes the player to stop playing the video at the given time (example: 2h09m34s or 2:09:34).\",\"onChange\":{\"rules\":{\"advanced\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"videoPlayer\",\"size\",\"customSize\",\"alignment\",\"advanced\",\"autoplay\",\"color\",\"controls\",\"loop\",\"rel\",\"start\",\"end\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"metaBackendLabels\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[{\"value\":[\"videoPlayer\"]}]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"youtubePlayer\"}}');\n\n//# sourceURL=webpack:///./youtubePlayer/settings.json?");

/***/ })

},[['./youtubePlayer/index.js']]]);