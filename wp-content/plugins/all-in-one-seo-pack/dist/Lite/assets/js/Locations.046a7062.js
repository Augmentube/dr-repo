import{C as u}from"./Blur.920c6287.js";import{C as _}from"./SettingsRow.d7400549.js";import{S as p}from"./Plus.92a90910.js";import{n as o}from"./vueComponentNormalizer.67c9b86e.js";import{R as m}from"./RequiredPlans.0a20e7e8.js";import{C as d}from"./Card.efd2e18e.js";import{C as f}from"./ProBadge.3e5c17e9.js";import{C as h}from"./Index.92416e95.js";import{A as v}from"./WpTable.36ecda37.js";import"./index.7b63dad7.js";import"./SaveChanges.68e73792.js";import"./Row.2d17f2cd.js";import"./index.81e35b24.js";import"./client.90beecd8.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./default-i18n.0e73c33c.js";import"./Caret.eeb84d06.js";import"./helpers.a2b0759e.js";import"./constants.8bff9f56.js";import"./isArrayLikeObject.5268a676.js";import"./portal-vue.esm.18ed59c3.js";import"./vuex.esm.19624049.js";import"./Tooltip.d723c3c3.js";import"./Slide.9538a421.js";import"./attachments.e5102eba.js";import"./cleanForSlug.7a45fb51.js";import"./html.bcbe747e.js";import"./Index.cb09fd7a.js";var $=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-locations-blur"},[s("core-blur",[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"location-description"},[t._v(t._s(t.strings.description))])]),s("core-settings-row",{staticClass:"info-name-row",attrs:{name:t.strings.name,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("base-input",{attrs:{type:"text",size:"medium"}}),s("span",{staticClass:"field-description"},[t._v(t._s(t.strings.nameDesc))])],1)]},proxy:!0}])}),s("core-settings-row",{staticClass:"info-business-image",attrs:{name:t.strings.image},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"image-upload"},[s("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl}}),s("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),s("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.minimumSize)+" ")])]},proxy:!0}])}),s("core-settings-row",{staticClass:"info-business-type",attrs:{name:t.strings.businessType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-select",{attrs:{size:"large",options:t.businessTypes,value:"default"}})]},proxy:!0}])}),s("core-settings-row",{staticClass:"info-urls-row",attrs:{name:t.strings.urls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("span",{staticClass:"field-description"},[t._v(t._s(t.strings.websiteDesc))]),s("base-input",{attrs:{type:"text",size:"medium"}})],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.aboutDesc))]),s("base-input",{attrs:{type:"text",size:"medium"}})],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.contactDesc))]),s("base-input",{attrs:{type:"text",size:"medium"}})],1)])]},proxy:!0}])})],1)],1)},g=[];const y={components:{CoreBlur:u,CoreSettingsRow:_,SvgCirclePlus:p},data(){return{strings:{description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),name:this.$t.__("name",this.$td),nameDesc:this.$t.__("Your name or company name.",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),image:this.$t.__("Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),websiteDesc:this.$t.__("Website URL:",this.$td),aboutDesc:this.$t.__("About Page URL:",this.$td),contactDesc:this.$t.__("Contact Page URL:",this.$td)},businessTypes:[{label:this.$t.__("default",this.$td),value:"LocalBusiness"},{label:this.$t.__("Animal Shelter",this.$td),value:"Animal Shelter"}]}}},n={};var x=o(y,$,g,!1,b,null,null,null);function b(t){for(let e in n)this[e]=n[e]}const C=function(){return x.exports}();var S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-locations-lite"},[s("core-card",{staticClass:"aioseo-locations-card",attrs:{slug:"localBusinessInfo",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.businessInfo))]),s("core-pro-badge")]},proxy:!0}])},[s("blur"),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":t.features,"align-top":""},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[s("required-plans",{attrs:{addon:"aioseo-local-business"}}),t._v(" "+t._s(t.strings.locationInfo1)+" ")]},proxy:!0}])})],1)],1)},L=[];const w={components:{Blur:C,RequiredPlans:m,CoreCard:d,CoreProBadge:f,Cta:h},data(){return{features:[this.$t.__("Local Business Schema",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Business Info and Location blocks, widgets and shortcodes",this.$td),this.$t.__("Detailed Address, Contact and Payment Info",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},i={};var I=o(w,S,L,!1,k,null,null,null);function k(t){for(let e in i)this[e]=i[e]}const r=function(){return I.exports}();var U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},R=[];const P={},a={};var A=o(P,U,R,!1,B,null,null,null);function B(t){for(let e in a)this[e]=a[e]}const z=function(){return A.exports}();var E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},D=[];const T={},l={};var M=o(T,E,D,!1,O,null,null,null);function O(t){for(let e in l)this[e]=l[e]}const j=function(){return M.exports}();var F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-locations"},[t.shouldShowMain?s("locations"):t._e(),t.shouldShowActivate?s("activate"):t._e(),t.shouldShowUpdate?s("update"):t._e(),t.shouldShowLite?s("lite"):t._e()],1)},G=[];const Y={mixins:[v],components:{Locations:r,Activate:z,Lite:r,Update:j},data(){return{addonSlug:"aioseo-local-business"}}},c={};var W=o(Y,F,G,!1,q,null,null,null);function q(t){for(let e in c)this[e]=c[e]}const xt=function(){return W.exports}();export{xt as default};
