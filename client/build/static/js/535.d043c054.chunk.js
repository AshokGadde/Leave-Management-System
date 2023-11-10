"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[535],{783:function(e,n,t){var r=t(74165),a=t(15861),i=t(15671),s=t(43144),u=t(61044),o=t(34948),c=t(70211),d=t(24500),l=t(36877),f=t(69334),p=t(40109);function h(){u.ZP.defaults.headers.common.Authorization="Bearer "+o.Z.GetToken()}u.ZP.defaults.baseURL="/api/v1",u.ZP.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var v=function(e){return p.Z.dispatch((0,l.zy)()),e},m=function(e){return p.Z.dispatch((0,l.zy)()),500===e.response.status?c.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(c.Z.errorMessage(e.response.data.message),p.Z.dispatch((0,d.hf)()),p.Z.dispatch((0,f.c1)())):c.Z.errorMessage(e.response.data.message),!1},g=function(){function e(){(0,i.Z)(this,e)}return(0,s.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,l.Pl)()),e.next=3,u.ZP.get(n,h()).then((function(e){return v(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,l.Pl)()),e.next=3,u.ZP.post(n,t,h()).then((function(e){return v(e)})).catch((function(e){return p.Z.dispatch((0,l.zy)()),m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,l.Pl)()),e.next=3,u.ZP.patch(n,t,h()).then((function(e){return v(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,l.Pl)()),e.next=3,u.ZP.put(n,t,h()).then((function(e){return v(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Z.dispatch((0,l.Pl)()),e.next=3,u.ZP.delete(n,h()).then((function(e){return v(e)})).catch((function(e){return m(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}();n.Z=g},54547:function(e,n,t){var r=t(74165),a=t(15861),i=t(15671),s=t(43144),u=t(33861),o=t(40109),c=t(783),d=function(){function e(){(0,i.Z)(this,e)}return(0,s.Z)(e,null,[{key:"DashboardSummaryAdmin",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a,i,s,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.getRequest("/Summary/DashboardSummaryAdmin");case 2:n=e.sent,(t=n.data)&&(d=null===t||void 0===t||null===(a=t[0])||void 0===a||null===(i=a.Total[0])||void 0===i?void 0:i.count,o.Z.dispatch((0,u.BO)(null===t||void 0===t||null===(s=t[0])||void 0===s?void 0:s.Data)),o.Z.dispatch((0,u.mB)(d||0)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"DashboardSummaryHod",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a,i,s,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.getRequest("/Summary/DashboardSummaryHod");case 2:n=e.sent,(t=n.data)&&(d=null===t||void 0===t||null===(a=t[0])||void 0===a||null===(i=a.Total[0])||void 0===i?void 0:i.count,o.Z.dispatch((0,u.BO)(null===t||void 0===t||null===(s=t[0])||void 0===s?void 0:s.Data)),o.Z.dispatch((0,u.mB)(d||0)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"DashboardSummaryEmployee",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a,i,s,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.getRequest("/Summary/DashboardSummaryEmployee");case 2:n=e.sent,(t=n.data)&&(d=null===t||void 0===t||null===(a=t[0])||void 0===a||null===(i=a.Total[0])||void 0===i?void 0:i.count,o.Z.dispatch((0,u.BO)(null===t||void 0===t||null===(s=t[0])||void 0===s?void 0:s.Data)),o.Z.dispatch((0,u.mB)(d||0)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();n.Z=d},70211:function(e,n,t){var r=t(15671),a=t(43144),i=t(65218),s=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"successMessage",value:function(e){return i.ZP.success(e,{position:"top-center"})}},{key:"errorMessage",value:function(e){return i.ZP.error(e,{position:"top-center"})}}]),e}();n.Z=s},42535:function(e,n,t){t.r(n);var r=t(72791),a=t(89743),i=t(2677),s=t(33168),u=t(55587),o=t(59434),c=t(54547),d=t(80184);n.default=function(){var e=(0,s.$)().t;(0,r.useEffect)((function(){c.Z.DashboardSummaryHod()}),[]);var n=(0,o.v9)((function(e){return e.Summary})),t=n.SummaryLists,l=n.TotalSummary;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{xs:12,children:(0,d.jsxs)("div",{className:"page-title-box",children:[(0,d.jsx)("div",{className:"page-title-right"}),(0,d.jsxs)("h4",{className:"page-title",children:[" ",e("Dashboard")]})]})})}),(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{children:(0,d.jsx)(u.Z,{totalLeave:l,summaryLists:t})})})]})}},55587:function(e,n,t){var r=t(81694),a=t.n(r),i=(t(72791),t(89743)),s=t(2677),u=t(19089),o=t(80184);n.Z=function(e){var n=e.totalLeave,t=e.summaryLists;return(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.Z,{xs:12,children:(0,o.jsx)(u.Z,{className:"widget-inline",children:(0,o.jsx)(u.Z.Body,{className:"p-0",children:(0,o.jsxs)(i.Z,{className:"g-0",children:[(0,o.jsx)(s.Z,{sm:6,lg:3,children:(0,o.jsx)(u.Z,{className:"shadow-none m-0",children:(0,o.jsxs)(u.Z.Body,{className:"text-center",children:[(0,o.jsx)("i",{className:"dripicons-clipboard text-muted font-24"}),(0,o.jsx)("h3",{children:(0,o.jsx)("span",{children:n||0})}),(0,o.jsx)("p",{className:"text-muted font-15 mb-0",children:"Total Leave"})]})})}),null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(s.Z,{sm:6,lg:3,children:(0,o.jsx)(u.Z,{className:"shadow-none m-0 border-start",children:(0,o.jsxs)(u.Z.Body,{className:"text-center",children:[(0,o.jsx)("i",{className:a()("text-muted font-24",{"dripicons-hourglass":"Pending"===(null===e||void 0===e?void 0:e._id),"dripicons-document-delete":"Rejected"===(null===e||void 0===e?void 0:e._id),"dripicons-thumbs-up":"Approved"===(null===e||void 0===e?void 0:e._id)})}),(0,o.jsxs)("h3",{children:[(0,o.jsx)("span",{children:(null===e||void 0===e?void 0:e.count)||0}),(0,o.jsx)("i",{className:a()("mdi mdi-arrow-up",{"text-warning":"Pending"===(null===e||void 0===e?void 0:e._id),"text-danger":"Rejected"===(null===e||void 0===e?void 0:e._id),"text-success":"Approved"===(null===e||void 0===e?void 0:e._id)})})]}),(0,o.jsxs)("p",{className:"text-muted font-15 mb-0",children:[null===e||void 0===e?void 0:e._id," Leave"]})]})})})}))]})})})})})}},33168:function(e,n,t){t.d(n,{$:function(){return m}});var r=t(29439),a=t(4942),i=t(72791),s=t(38589);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var o={};function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&o[n[0]]||("string"===typeof n[0]&&(o[n[0]]=new Date),u.apply(void 0,n))}function d(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!s(r,e)||a&&!s(i,e))))}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return c("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):l(e,n,t)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e,n){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,a=(0,i.useContext)(s.OO)||{},u=a.i18n,o=a.defaultNS,l=t||u||(0,s.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new s.zv),!l){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},m=[p,{},!1];return m.t=p,m.i18n={},m.ready=!1,m}l.options.react&&void 0!==l.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=h(h(h({},(0,s.JP)()),l.options.react),n),Z=g.useSuspense,y=g.keyPrefix,x=e||o||l.options&&l.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(x);var b=(l.isInitialized||l.initializedStoreOnce)&&x.every((function(e){return f(e,l,g)}));function w(){return l.getFixedT(null,"fallback"===g.nsMode?x:x[0],y)}var j=(0,i.useState)(w),k=(0,r.Z)(j,2),P=k[0],N=k[1],O=x.join(),S=v(O),D=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){D.current&&N(w)}return D.current=!0,b||Z||d(l,x,(function(){D.current&&N(w)})),b&&S&&S!==O&&D.current&&N(w),e&&l&&l.on(e,t),n&&l&&l.store.on(n,t),function(){D.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),n&&l&&n.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[l,O]);var L=(0,i.useRef)(!0);(0,i.useEffect)((function(){D.current&&!L.current&&N(w),L.current=!1}),[l,y]);var R=[P,l,b];if(R.t=P,R.i18n=l,R.ready=b,b)return R;if(!b&&!Z)return R;throw new Promise((function(e){d(l,x,(function(){e()}))}))}}}]);
//# sourceMappingURL=535.d043c054.chunk.js.map