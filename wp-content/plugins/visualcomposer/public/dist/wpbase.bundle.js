(self.vcvWebpackJsonp4x=self.vcvWebpackJsonp4x||[]).push([["wpbase"],{"./public/base.js":function(e,n,t){"use strict";var r=t("./node_modules/vc-cake/index.js"),o=t.n(r);t("./public/variables.js"),t("./public/editor/services/dataManager/service.js"),t("./public/editor/services/utils/service.js"),t("./public/editor/services/dataProcessor/service.js");(0,window.jQuery)((function(){o().env("platform","wordpress").start((function(){o().env("editor","import")}))})),!0===o().env("VCV_DEBUG")&&(window.app=o())},"./public/editor/services/dataManager/service.js":function(e,n,t){var r,o=t("./node_modules/vc-cake/index.js"),i={get:function(e){return Object.prototype.hasOwnProperty.call(r,e)?r[e]():null},set:function(e,n){r[e]=function(){return n}},reset:function(){r={sourceID:function(){return window.vcvSourceID},nonce:function(){return window.vcvNonce},localizations:function(){return window.VCV_I18N?window.VCV_I18N():{}},adminAjaxUrl:function(){return window.vcvAdminAjaxUrl},editorType:function(){return window.VCV_EDITOR_TYPE?window.VCV_EDITOR_TYPE():"default"},pageTemplates:function(){return window.VCV_PAGE_TEMPLATES?window.VCV_PAGE_TEMPLATES():""},showFeedbackForm:function(){return window.VCV_SHOW_FEEDBACK_FORM&&window.VCV_SHOW_FEEDBACK_FORM()},showInitialHelpers:function(){return window.VCV_SHOW_INITIAL_HELPERS&&window.VCV_SHOW_INITIAL_HELPERS()},showDataCollectionPopup:function(){return window.VCV_SHOW_DATA_COLLECTION_POPUP&&window.VCV_SHOW_DATA_COLLECTION_POPUP()},hubGetElements:function(){return window.VCV_HUB_GET_ELEMENTS?window.VCV_HUB_GET_ELEMENTS():{}},elementsGlobalsUrl:function(){return window.vcvElementsGlobalsUrl},activationType:function(){return window.vcvActivationType},activationFinishedUrl:function(){return window.vcvActivationFinishedUrl},hubGetAddonTeaser:function(){return window.VCV_HUB_GET_ADDON_TEASER?window.VCV_HUB_GET_ADDON_TEASER():{}},hubGetAddons:function(){return window.VCV_HUB_GET_ADDONS?window.VCV_HUB_GET_ADDONS():{}},addonElementPresets:function(){return window.VCV_ADDON_ELEMENT_PRESETS?window.VCV_ADDON_ELEMENT_PRESETS():[]},hubGetGroups:function(){return window.VCV_HUB_GET_GROUPS?window.VCV_HUB_GET_GROUPS():{}},hubGetCategories:function(){return window.VCV_HUB_GET_CATEGORIES?window.VCV_HUB_GET_CATEGORIES():{}},hubGetTeaser:function(){return window.VCV_HUB_GET_TEASER?window.VCV_HUB_GET_TEASER():{}},hubGetTemplatesTeaser:function(){return window.VCV_HUB_GET_TEMPLATES_TEASER?window.VCV_HUB_GET_TEMPLATES_TEASER():{}},getSharedAssets:function(){return window.VCV_GET_SHARED_ASSETS?window.VCV_GET_SHARED_ASSETS():{}},isPremiumActivated:function(){return window.vcvIsPremiumActivated},pageTemplatesLayoutsCurrent:function(){return window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT&&window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT()},pageTemplatesLayouts:function(){return window.VCV_PAGE_TEMPLATES_LAYOUTS&&window.VCV_PAGE_TEMPLATES_LAYOUTS()},headerTemplates:function(){return window.VCV_HEADER_TEMPLATES&&window.VCV_HEADER_TEMPLATES()},sidebarTemplates:function(){return window.VCV_SIDEBAR_TEMPLATES&&window.VCV_SIDEBAR_TEMPLATES()},footerTemplates:function(){return window.VCV_FOOTER_TEMPLATES&&window.VCV_FOOTER_TEMPLATES()},showPremiumPromoPopup:function(){return window.VCV_SHOW_PREMIUM_PROMO_POPUP&&window.VCV_SHOW_PREMIUM_PROMO_POPUP()},tutorialPageUrl:function(){return window.VCV_TUTORIAL_PAGE_URL&&window.VCV_TUTORIAL_PAGE_URL()},tutorialPageCapability:function(){return window.VCV_TUTORIAL_PAGE_CAPABILITY&&window.VCV_TUTORIAL_PAGE_CAPABILITY()},createNewUrl:function(){return window.VCV_CREATE_NEW_URL&&window.VCV_CREATE_NEW_URL()},createNewText:function(){return window.VCV_CREATE_NEW_TEXT&&window.VCV_CREATE_NEW_TEXT()},manageOptions:function(){return window.VCV_MANAGE_OPTIONS&&window.VCV_MANAGE_OPTIONS()},vcvManageOptions:function(){return window.vcvManageOptions},updateUrl:function(){return window.VCV_UPDATE_URL&&window.VCV_UPDATE_URL()},goPremiumUrlWithRef:function(){return window.vcvGoPremiumUrlWithRef},goPremiumUrl:function(){return window.vcvGoPremiumUrl},gettingStartedUrl:function(){return window.vcvGettingStartedUrl},authorApiKey:function(){return window.VCV_AUTHOR_API_KEY&&window.VCV_AUTHOR_API_KEY()},updateActions:function(){return window.VCV_UPDATE_ACTIONS&&window.VCV_UPDATE_ACTIONS()},slug:function(){return window.VCV_SLUG&&window.VCV_SLUG()},updateProcessActionUrl:function(){return window.VCV_UPDATE_PROCESS_ACTION_URL&&window.VCV_UPDATE_PROCESS_ACTION_URL()},updateGlobalVariablesUrl:function(){return window.VCV_UPDATE_GLOBAL_VARIABLES_URL&&window.VCV_UPDATE_GLOBAL_VARIABLES_URL()},updateVendorUrl:function(){return window.VCV_UPDATE_VENDOR_URL&&window.VCV_UPDATE_VENDOR_URL()},updateWPBundleUrl:function(){return window.VCV_UPDATE_WP_BUNDLE_URL&&window.VCV_UPDATE_WP_BUNDLE_URL()},licenseType:function(){return window.VCV_LICENSE_TYPE&&window.VCV_LICENSE_TYPE()},rebuildPostSkipPost:function(){return window.vcvRebuildPostSkipPost},errorReportUrl:function(){return window.VCV_ERROR_REPORT_URL&&window.VCV_ERROR_REPORT_URL()},supportUrl:function(){return window.VCV_SUPPORT_URL&&window.VCV_SUPPORT_URL()},licenseKey:function(){return window.VCV_LICENSE_KEY&&window.VCV_LICENSE_KEY()},apiUrl:function(){return window.VCV_API_URL&&window.VCV_API_URL()},pluginUrl:function(){return window.VCV_PLUGIN_URL&&window.VCV_PLUGIN_URL()},licenseUnsplashAuthorApiKey:function(){return window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY&&window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY()},createMenuUrl:function(){return window.vcvCreateMenuUrl},utm:function(){return window.VCV_UTM?window.VCV_UTM():{}},hubServerTime:function(){return window.VCV_HUB_SERVER_TIME&&window.VCV_HUB_SERVER_TIME()},pageList:function(){return window.VCV_PAGE_LIST},excerpt:function(){return window.VCV_EXCERPT},authorList:function(){return window.VCV_AUTHOR_LIST},commentStatus:function(){return window.VCV_COMMENT_STATUS},pingStatus:function(){return window.VCV_PING_STATUS},manageMenuUrl:function(){return window.vcvManageMenuUrl},featuredImage:function(){return window.VCV_FEATURED_IMAGE&&window.VCV_FEATURED_IMAGE()},postData:function(){return window.vcvPostData||{}},hubTeaserShowBadge:function(){return window.vcvHubTeaserShowBadge},tags:function(){return window.VCV_TAGS},categories:function(){return window.VCV_CATEGORIES},pluginVersion:function(){return window.VCV_PLUGIN_VERSION&&window.VCV_PLUGIN_VERSION()},frontEndError:function(){return window.vcvFeError||"default"},pageEditableNonce:function(){return window.vcvPageEditableNonce},freezeReady:function(){return window.vcvFreezeReady},ajaxUrl:function(){return window.vcvAjaxUrl},pluginSourceUrl:function(){return window.vcvPluginSourceUrl},gutenbergEditorUrl:function(){return window.vcvGutenbergEditorUrl?window.vcvGutenbergEditorUrl:"/wp-admin/post-new.php?post_type=vcv_gutenberg_attr"},hubGetTemplates:function(){return window.VCV_HUB_GET_TEMPLATES&&window.VCV_HUB_GET_TEMPLATES()},agreeHubTerms:function(){return window.vcvAgreeHubTerms},showPricingPopup:function(){return window.vcvShowPricingPopup},isWpNativeLazyLoadExist:function(){return window.VCV_IS_WP_NATIVE_LAZY_LOAD_EXIST&&window.VCV_IS_WP_NATIVE_LAZY_LOAD_EXIST()},globalSettings:function(){return window.VCV_GLOBAL_DATA&&window.VCV_GLOBAL_DATA()},isBinaryContent:function(){return window.VCV_IS_BINARY_CONTENT&&window.VCV_IS_BINARY_CONTENT()},isEnvJsSaveZip:function(){return window.VCV_JS_SAVE_ZIP&&window.VCV_JS_SAVE_ZIP()}}}};i.reset(),o.addService("dataManager",i)},"./public/editor/services/dataProcessor/service.js":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/vc-cake/index.js"),o=(0,r.getService)("utils"),i=[],a=1,u={http:function(e){var n=function(e,n,t,o){var u=new Promise((function(i,a){var u=new window.XMLHttpRequest;u.open(e,n);var c="";(0,r.getService)("dataManager").get("isEnvJsSaveZip")?(t instanceof Blob?(u.setRequestHeader("Content-type","application/octet-stream"),u.setRequestHeader("Content-Transfer-Encoding","binary")):u.setRequestHeader("Content-type",o),t&&(c=t instanceof Blob?t:window.jQuery.param(t))):(u.setRequestHeader("Content-type",o),t&&(c=window.jQuery.param(t)));try{u.send(c)}catch(s){a(this.statusText)}u.onload=function(){this.status>=200&&this.status<300?i(this.response):a(this.statusText)},u.onerror=function(){a(this.statusText)}})),c=a;return u.key=c,a++,i.push(u),u.catch((function(e){throw console.warn("Ajax Request rejected",e),i=i.filter((function(e){return e.key!==c})),e}))};return{url:e,get:function(e){return this.ajax("GET",e)},post:function(e){return this.ajax("POST",e,"application/x-www-form-urlencoded")},put:function(e){return this.ajax("PUT",e,"application/x-www-form-urlencoded")},delete:function(e){return this.ajax("DELETE",e)},ajax:function(e,t,r){return n(e,this.url,t,r)}}},appServerRequest:function(e){return this.getServerRequest("ajaxUrl",e)},appAdminServerRequest:function(e){return this.getServerRequest("adminAjaxUrl",e)},getServerRequest:function(e,n){var t=(0,r.getService)("dataManager"),i=t.get(e);if(n=Object.assign({"vcv-nonce":t.get("nonce"),"vcv-source-id":t.get("sourceID")},n),t.get("isEnvJsSaveZip")){var a=o.compressData(n);n=a instanceof Blob?a:{"vcv-zip":a}}return this.http(i).post(n)},loadScript:function(e,n){return this.http(e).ajax("get",void 0,"application/javascript").then((function(e){var t=document.createElement("script");t.innerHTML=e,n?n.appendChild(t):document.body.appendChild(t)}))},appAllDone:function(){return Promise.all(i).then((function(){i=[]}))}};(0,r.addService)("dataProcessor",u)},"./public/editor/services/utils/service.js":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/vc-cake/index.js"),o=t("./node_modules/pako/dist/pako.esm.mjs"),i=t("./node_modules/base-64/base64.js"),a=t.n(i),u="rtl"===window.getComputedStyle(document.body).direction,c={ajaxRequests:[],ajaxCall:!1,base64encode:a().encode,base64decode:a().decode,createKey:function(){for(var e="",n=0;n<8;n++){var t=16*Math.random()|0;8!==n&&12!==n&&16!==n&&20!==n||(e+="-"),e+=(12===n?4:16===n?3&t|8:t).toString(16)}return e},setCookie:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:256,r=new Date;r.setDate(r.getDate()+t);var o=encodeURIComponent(n)+(null===t?"":"; expires="+r.toUTCString());document.cookie=e+"="+o},getCookie:function(e){var n,t,r,o=document.cookie.split(";");for(n=0;n<o.length;n++)if(t=o[n].substr(0,o[n].indexOf("=")),r=o[n].substr(o[n].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))===e)return decodeURIComponent(r)},hasCookie:function(e){return!!this.getCookie(e)},getRealWidth:function(e,n){var t=e.cloneNode(!0),r=0;if(t.style.position="fixed",n.appendChild(t),0===(r=t.offsetWidth))return t.remove(),0;var o=window.getComputedStyle(t,null);return r+=parseInt(o.marginLeft)+parseInt(o.marginRight),t.remove(),r},compressData:function(e){var n=(0,o.deflate)(JSON.stringify(e)),t=(0,r.getService)("dataManager");if(e["vcv-check-content-zip-type"]||t.get("isBinaryContent"))e=new Blob([new Uint8Array(n)],{type:"application/octet-stream"});else{for(var i="",u=new Uint8Array(n),c=u.byteLength,s=0;s<c;s++)i+=String.fromCharCode(u[s]);e=a().encode(i)}return e},ajax:function(e,n,t){var o=(0,r.getService)("dataManager"),i=new window.XMLHttpRequest;i.open("POST",o.get("adminAjaxUrl"),!0),i.onload=function(){i.status>=200&&i.status<400?n(i):"function"==typeof t&&t(i)},i.onerror=function(){"function"==typeof t&&t(i)};var a=window.jQuery.param(e);if(o.get("isEnvJsSaveZip")){var u=(0,r.getService)("utils").compressData(e);u instanceof Blob?(i.setRequestHeader("Content-type","application/octet-stream"),i.setRequestHeader("Content-Transfer-Encoding","binary"),a=u):(i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e={"vcv-zip":u},a=window.jQuery.param(e))}else i.setRequestHeader("Content-type","application/x-www-form-urlencoded");return i.send(a),i},normalizeHtml:function(e){e=e.replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g,"").replace(/<!--\[vcvSourceHtml]/g,"").replace(/\[\/vcvSourceHtml]-->/g,"");for(var n=document.createRange(),t=n.createContextualFragment(e),r=t.querySelector("vcvhelper, .vcvhelper");r;){var o=r.parentNode,i=r.getAttribute("data-vcvs-html");if(i){var a=n.createContextualFragment(i);o.insertBefore(a,r)}o.removeChild(r),r=t.querySelector("vcvhelper, .vcvhelper")}var u="data-vce-delete-attr",c=t.querySelectorAll("[".concat(u,"]"));(c=[].slice.call(c)).forEach((function(e){e.getAttribute(u).split(" ").forEach((function(n){e.removeAttribute(n)})),e.removeAttribute(u)}));var s="",d=[].slice.call(t.childNodes);d=d.filter((function(e){return e.nodeType===document.ELEMENT_NODE||e.nodeType===document.COMMENT_NODE}));for(var w=0;w<d.length;w++)d[w].nodeType===document.ELEMENT_NODE?s+=d[w].outerHTML:d[w].nodeType===document.COMMENT_NODE&&(s+="\x3c!-- ".concat(d[w].nodeValue.trim()," --\x3e"));var _=s.match(/url\(\s*(['"]?)(.*?)\1\s*\)/g);if(_&&_.length){var l=_.map((function(e){return e.replace(/&quot;/g,"'")}));_.forEach((function(e,n){s=s.replace(e,l[n])}))}return s},getTextContent:function(e){e=e.replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g,"").replace(/<!--\[vcvSourceHtml]/g,"").replace(/\[\/vcvSourceHtml]-->/g,"").replace(/<\//g," </");for(var n=document.createRange().createContextualFragment(e),t=n.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container");t;){t.parentNode.removeChild(t),t=n.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container")}return n.textContent.trim()},slugify:function(e){return(e=e||"").toString().toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"").trim()},wpAutoP:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content";return window.tinyMCEPreInit.mceInit[n]&&window.tinyMCEPreInit.mceInit[n].wpautop&&window.switchEditors&&window.switchEditors.wpautop?window.switchEditors.wpautop(e):e},checkIfElementIsHidden:function(e){var n=(0,r.getService)("document");if(e.hidden)return!0;if(e.parent){var t=n.get(e.parent);return!!t&&(!(!t.parent||t.parent!==e.id)||this.checkIfElementIsHidden(t))}return!1},getVisibleElements:function(e){var n=Object.assign({},e),t=function n(t){if(t.hidden)return!0;if(t.parent&&e[t.parent]){var r=e[t.parent];return!(!r.parent||r.parent!==t.id)||n(e[t.parent])}return!1};return Object.keys(n).forEach((function(e){var r=n[e];t(r)&&delete n[e]})),n},fixCorruptedElements:function(e){var n=Object.assign({},e),t=[],r=function e(r){return r&&r.parent?t.indexOf(r.parent)>=0?(r.parent=!1,!1):(t.push(r.parent),e(n[r.parent])):(t=[],!0)};return Object.keys(n).forEach((function(e){var o=n[e];r(o),t=[]})),n},buildVariables:function(e){e.length&&e.forEach((function(e){void 0===window[e.key]&&("constant"===e.type?window[e.key]=function(){return e.value}:window[e.key]=e.value)}))},isRTL:function(){return u},startDownload:function(e,n,t,r){this.ajaxRequests.push({tag:e,data:n,successCallback:t,errorCallback:r}),this.nextDownload()},nextDownload:function(){var e=this;if(0!==this.ajaxRequests.length&&!this.ajaxCall){this.ajaxCall=!0;var n=(0,r.getService)("dataProcessor"),t=this.ajaxRequests[0];n.appAdminServerRequest(t.data).then((function(n){e.ajaxCall=!1,e.ajaxRequests.splice(0,1),t.successCallback&&t.successCallback(n),e.nextDownload()}),(function(n){e.ajaxCall=!1,e.ajaxRequests.splice(0,1),t.errorCallback&&t.errorCallback(n),e.nextDownload()}))}},getShortcodesRegexp:function(){return new RegExp("\\[(\\[?)([\\w|-]+\\b)(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)")},getBlockRegexp:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?new RegExp(/<!--\s+(\/)?wp:(vcv-gutenberg-blocks\/)(dynamic-field-block)\s+({(?:(?=([^}]+|}+(?=})|(?!}\s+\/?-->)[^])*)\5|[^]*?)}\s+)?(\/)?-->/g):new RegExp(/<!--\s+(\/)?wp:([a-z][a-z0-9_-]*\/)?([a-z][a-z0-9_-]*)\s+({(?:(?=([^}]+|}+(?=})|(?!}\s+\/?-->)[^])*)\5|[^]*?)}\s+)?(\/)?-->/g)},parseDynamicBlock:function(e){if(e.match(c.getBlockRegexp())){var n=e.split(c.getBlockRegexp());return{value:e,blockScope:n[2],blockName:n[3],blockAtts:JSON.parse(n[4].trim()),blockContent:n[7],beforeBlock:n[0]||"",afterBlock:n[14]||""}}return!1},generateQuerySelector:function(e){if("html"===e.tagName.toLowerCase())return"HTML";var n=e.tagName;if(n+=""!==e.id?"#"+e.id:"",e.className&&"string"==typeof e.className)for(var t=e.className.split(/\s/),r=0;r<t.length;r++)n+="."+t[r];return c.generateQuerySelector(e.parentNode)+" > "+n}};(0,r.addService)("utils",c)},"./public/variables.js":function(e,n,t){"use strict";var r=t("./node_modules/vc-cake/index.js");if(void 0!==window.VCV_ENV){var o=window.VCV_ENV();Object.keys(o).forEach((function(e){(0,r.env)(e,o[e])})),o.VCV_DEBUG&&(0,r.env)("debug",!0)}}},function(e){e.O(0,["vendor"],(function(){return n="./public/base.js",e(e.s=n);var n}));e.O()}]);