(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoHeaderMenuicon/cssMixins/menuicon.pcss":function(e,n){e.exports="@if ($iconSize != false || $pl != false || $pr != false || $bgColor != false || $color != false) {\r\n\t#header.header-builder .mobile-toggle {\r\n\t\t@if $iconSize != false {\r\n\t\t\tfont-size: $(iconSize);\r\n\t\t}\r\n\t\t@if $pl != false {\r\n\t\t\tpadding-left: $(pl);\r\n\t\t}\r\n\t\t@if $pr != false {\r\n\t\t\tpadding-right: $(pr);\r\n\t\t}\r\n\t\t@if $bgColor != false {\r\n\t\t\tbackground-color: $(bgColor);\r\n\t\t}\r\n\t\t@if $color != false {\r\n\t\t\tcolor: $(color);\r\n\t\t}\r\n\t}\r\n}"},"./portoHeaderMenuicon/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/vc-cake/index.js"),r=t.n(o),s=t("./node_modules/@babel/runtime/helpers/extends.js"),i=t.n(s),c=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=t.n(c),l=t("./node_modules/@babel/runtime/helpers/createClass.js"),p=t.n(l),u=t("./node_modules/@babel/runtime/helpers/inherits.js"),d=t.n(u),m=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),f=t.n(m),b=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),g=t.n(b),v=t("./node_modules/react/index.js"),x=t.n(v);function y(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=g()(e);if(n){var r=g()(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return f()(this,t)}}var h=function(e){d()(t,e);var n=y(t);function t(e){return a()(this,t),n.call(this,e)}return p()(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.editor,o=e.atts,r=this.applyDO("all"),s=(o.bg_color,o.color,o.icon_cl),c=o.el_class,a="vce-porto-hb-menuicon mobile-toggle";c&&(a+=" "+c);var l=s||"fas fa-bars";return x.a.createElement("a",i()({className:a},t,{id:"el-"+n},r),x.a.createElement("i",{className:l}))}}]),t}(Object(o.getService)("portoComponent").shortcodeComponent);(0,r.a.getService("cook").add)(t("./portoHeaderMenuicon/settings.json"),(function(e){e.add(h)}),{css:!1,editorCss:!1,mixins:{menuicon:{mixin:t("./node_modules/raw-loader/index.js!./portoHeaderMenuicon/cssMixins/menuicon.pcss")}}})},"./portoHeaderMenuicon/settings.json":function(e){e.exports=JSON.parse('{"icon_cl":{"type":"string","access":"public","value":"","options":{"label":"Custom Icon Class"}},"icon_size":{"type":"string","access":"public","value":"","options":{"label":"Icon Size","cssMixin":{"mixin":"menuicon","property":"iconSize","namePattern":"[\\\\da-f]+"}}},"pl":{"type":"string","access":"public","value":"","options":{"label":"Padding Left","cssMixin":{"mixin":"menuicon","property":"pl","namePattern":"[\\\\da-f]+"}}},"pr":{"type":"string","access":"public","value":"","options":{"label":"Padding Right","cssMixin":{"mixin":"menuicon","property":"pr","namePattern":"[\\\\da-f]+"}}},"bg_color":{"type":"color","access":"public","value":"","options":{"label":"Icon Background Color","cssMixin":{"mixin":"menuicon","property":"bgColor","namePattern":"[\\\\da-f]+"}}},"color":{"type":"color","access":"public","value":"","options":{"label":"Icon Color","cssMixin":{"mixin":"menuicon","property":"color","namePattern":"[\\\\da-f]+"}}},"el_class":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["icon_cl","icon_size","pl","pr","bg_color","color","el_class"],"options":{"label":"Mobile Menu Icon"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"tag":{"access":"protected","type":"string","value":"portoHeaderMenuicon"}}')}},[["./portoHeaderMenuicon/index.js"]]]);