(function(e){function t(t){for(var n,a,o=t[0],u=t[1],i=t[2],f=0,d=[];f<o.length;f++)a=o[f],c[a]&&d.push(c[a][0]),c[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},c={app:0},s=[];function o(e){return u.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-143a6d09":"d19b3ac0","chunk-1f25a894":"e272da47","chunk-2d0d0f7a":"b0c18250","chunk-45449728":"0f73bf9d","chunk-5cdac2d8":"efbdc240","chunk-7ba2f2f0":"0266fcf5","chunk-8994ef96":"d0b839b1","chunk-fab198e4":"9e3ea17d"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-143a6d09":1,"chunk-5cdac2d8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-143a6d09":"557de903","chunk-1f25a894":"31d6cfe0","chunk-2d0d0f7a":"31d6cfe0","chunk-45449728":"31d6cfe0","chunk-5cdac2d8":"649a6e5e","chunk-7ba2f2f0":"31d6cfe0","chunk-8994ef96":"31d6cfe0","chunk-fab198e4":"31d6cfe0"}[e]+".css",c=u.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===n||f===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],f=i.getAttribute("data-href");if(f===n||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete a[e],l.parentNode.removeChild(l),r(s)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=s);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=o(e),i=function(t){f.onerror=f.onload=null,clearTimeout(d);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-antd-boilerplate/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"11c0":function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return u})),r.d(t,"getters",(function(){return i})),r.d(t,"actions",(function(){return f}));r("96cf");var n=r("3b8d"),a=r("bc3a"),c=r.n(a),s="http://localhost:3000/",o={authToken:d("authToken")},u={SET_CURRENT_USER_AUTHTOKEN:function(e,t){e.authToken=t,l("authToken",t),p(e)}},i={signedIn:function(e){return!!e.authToken},getAuthenticationToken:function(e){return e.authToken}},f={init:function(e){var t=e.state;e.dispatch;null!==t.authToken&&p(t)},signIn:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,u,i,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=f.length>1&&void 0!==f[1]?f[1]:{},a=n.email,o=n.password,e.prev=2,e.next=5,c()({method:"post",url:"".concat(s,"customers/signin"),data:{email:a,password:o}});case 5:if(u=e.sent,i=u.data,200!==i.status.code){e.next=12;break}return r("SET_CURRENT_USER_AUTHTOKEN",i),e.abrupt("return",i);case 12:throw i;case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e["catch"](2),e.t0;case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));function t(t){return e.apply(this,arguments)}return t}(),signOut:function(e){var t=e.commit;t("SET_CURRENT_USER_AUTHTOKEN",null)}};function d(e){return JSON.parse(window.sessionStorage.getItem(e))}function l(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function p(e){c.a.defaults.headers.common["auth"]=e.authToken?e.authToken.result.token:""}},"22ca":function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return u})),r.d(t,"mutations",(function(){return i})),r.d(t,"actions",(function(){return f}));r("96cf");var n=r("3b8d"),a=r("bc3a"),c=r.n(a),s="http://localhost:3000/",o={},u={},i={},f={getAllProducts:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c()({method:"get",url:"".concat(s,"products")});case 4:if(r=e.sent,n=r.data,200!==n.status.code){e.next=10;break}return e.abrupt("return",n);case 10:throw n;case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e["catch"](1),d(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));function t(t){return e.apply(this,arguments)}return t}(),getProductById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,c()({method:"get",url:"".concat(s,"products/").concat(n)});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getCustomerProducts:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c()({method:"get",url:"".concat(s,"customers/products")});case 4:if(r=e.sent,n=r.data,200!==n.status.code){e.next=10;break}return e.abrupt("return",n);case 10:throw n;case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e["catch"](1),d(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));function t(t){return e.apply(this,arguments)}return t}(),markProductFavorite:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,c()({method:"get",url:"".concat(s,"customers/favorite/").concat(n)});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),unmarkProductFavorite:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,c()({method:"delete",url:"".concat(s,"customers/favorite/").concat(n)});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),d(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}()};function d(e){return e.message?e.message:e.status.message}},2883:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader"},[r("a-spin")],1)},a=[],c={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{}},s=c,o=r("2877"),u=Object(o["a"])(s,n,a,!1,null,"6270fa95",null);t["default"]=u.exports},"3d83":function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return u})),r.d(t,"mutations",(function(){return i})),r.d(t,"actions",(function(){return f}));r("96cf");var n=r("3b8d"),a=r("bc3a"),c=r.n(a),s="http://localhost:3000/",o={},u={},i={},f={getAllCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c()({method:"get",url:"".concat(s,"categories")});case 4:if(r=e.sent,n=r.data,200!==n.status.code){e.next=10;break}return e.abrupt("return",n);case 10:throw n;case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e["catch"](1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));function t(t){return e.apply(this,arguments)}return t}(),getCategoryById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,c()({method:"get",url:"".concat(s,"categories/").concat(n)});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}()}},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return r(t)}function c(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{mode:"out-in"}},[r("RouterView",{key:e.$route.fullPath})],1)],1)},c=[],s=r("c2a4"),o={page:{titleTemplate:function(e){return e="function"===typeof e?e(this.$store):e,e?"".concat(e," | ").concat(s.title):s.title}}},u=o,i=(r("5c0b"),r("2877")),f=Object(i["a"])(u,a,c,!1,null,null,null),d=f.exports,l=(r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("ac6a"),r("96cf"),r("3b8d")),p=(r("7f7f"),r("8c4f")),h=r("58ca"),m=r("323e"),b=r.n(m),v=r("2f62"),j=(r("3846"),r("8e6e"),r("456d"),r("bd86")),g=(r("a481"),r("28a5"),r("bba4")),w=r.n(g);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={},O={modules:{}};function R(e,t){if(1===t.length)return e;var r=t.shift();return e.modules[r]=y({modules:{},namespaced:!0},e.modules[r]),R(e.modules[r],t)}(function(){var e=r("cfa9");e.keys().forEach((function(t){var r=e(t);if(x[t]!==r){x[t]=r;var n=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(w.a),a=R(O,n),c=a.modules;c[n.pop()]=y({namespaced:!0},r)}}))})();var E=O.modules;function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.modules,n=void 0===r?E:r,a=t.modulePrefix,c=void 0===a?"":a,s=t.flags,o=void 0===s?{}:s;for(var u in n){var i=n[u];i.actions&&i.actions[e]&&(i.namespaced?S.dispatch("".concat(c).concat(u,"/").concat(e)):o.dispatchGlobal=!0),i.modules&&P(e,{modules:i.modules,modulePrefix:c+u+"/",flags:o})}!c&&o.dispatchGlobal&&S.dispatch(e)}n["a"].use(v["a"]);var T=new v["a"].Store({modules:E,strict:!1}),S=T;P("init");var _=[{path:"",component:function(){return z(r.e("chunk-2d0d0f7a").then(r.bind(null,"69de")))},children:[{path:"/",redirect:"signin"},{path:"/signin",name:"signin",component:function(){return z(r.e("chunk-7ba2f2f0").then(r.bind(null,"98a3")))}},{path:"/register",name:"register",component:function(){return z(r.e("chunk-5cdac2d8").then(r.bind(null,"ddbb")))}},{path:"/forgot-password",name:"forgotPassword",component:function(){return z(r.e("chunk-8994ef96").then(r.bind(null,"91e1")))}},{path:"/reset-password",name:"resetPassword",component:function(){return z(r.e("chunk-1f25a894").then(r.bind(null,"4c2f")))}},{path:"/verify",name:"verifyEmail",component:function(){return z(r.e("chunk-45449728").then(r.bind(null,"20c2")))}},{path:"/404",name:"404",component:r("bdd2").default,props:!0}]},{path:"",component:function(){return z(r.e("chunk-fab198e4").then(r.bind(null,"d0e2")))},children:[{path:"/home",name:"home",component:function(){return z(r.e("chunk-143a6d09").then(r.bind(null,"2b25")))},meta:{authRequired:!0}}]},{path:"*",redirect:"404"}];function z(e){var t=function(){return{component:e,loading:r("2883").default,delay:400,error:r("ef68").default,timeout:1e4}};return Promise.resolve({functional:!0,render:function(e,r){var n=r.data,a=r.children;return e(t,n,a)}})}function A(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=C(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,c=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw c}}}}function C(e,t){if(e){if("string"===typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}n["a"].use(p["a"]),n["a"].use(h["a"],{keyName:"metaInfo"});var U=new p["a"]({routes:_,base:"/vue-antd-boilerplate/",mode:"history",scrollBehavior:function(e,t,r){return r||{x:0,y:0}}});U.beforeEach((function(e,t,r){null!==t.name&&b.a.start();var n=e.matched.some((function(e){return e.meta.authRequired}));if(n){var a=S.getters["auth/getAuthenticationToken"];a&&a.result.token?r():c()}else r();function c(){r({name:"signin",query:{redirectFrom:e.fullPath}})}})),U.beforeResolve(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,a=A(t.matched),e.prev=2,s=regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=c.value,e.next=3,new Promise((function(e,c){a.meta&&a.meta.beforeResolve?a.meta.beforeResolve(t,r,(function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];a.length?(r.name===a[0].name&&b.a.done(),n.apply(void 0,a),c(new Error("Redirected"))):e()})):e()}));case 3:case"end":return e.stop()}}),e)})),a.s();case 5:if((c=a.n()).done){e.next=9;break}return e.delegateYield(s(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e["catch"](2),a.e(e.t1);case 14:return e.prev=14,a.f(),e.finish(14);case 17:e.next=22;break;case 19:return e.prev=19,e.t2=e["catch"](0),e.abrupt("return");case 22:n();case 23:case"end":return e.stop()}}),e,null,[[0,19],[2,11,14,17]])})));return function(t,r,n){return e.apply(this,arguments)}}()),U.afterEach((function(e,t){b.a.done()}));var $=U,I=r("1dce"),B=r.n(I),D=r("caf9"),M=r("f23d"),q=r("e37d");q["a"].options.defaultPlacement="bottom",n["a"].directive("tooltip",q["a"]),n["a"].use(M["a"]),n["a"].use(D["a"]),n["a"].use(B.a),n["a"].config.productionTip=!0;new n["a"]({router:$,store:S,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){},"93fe":function(e,t,r){e.exports={title:"_timeout_title_QmghM"}},9400:function(e,t,r){"use strict";r.r(t),r.d(t,"EventBus",(function(){return a}));var n=r("2b0e"),a=new n["a"]},b20d:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return u})),r.d(t,"mutations",(function(){return i})),r.d(t,"actions",(function(){return f}));r("96cf");var n=r("3b8d"),a=r("bc3a"),c=r.n(a),s="http://localhost:3000/",o={},u={},i={},f={registration:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"post",url:"".concat(s,"customers/register"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),verifyEmail:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.token,e.prev=2,e.next=5,c()({method:"post",url:"".concat(s,"customers/verifyemail"),data:{token:n}});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),changePassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"put",url:"".concat(s,"customers/changepassword"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),forgotPassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"post",url:"".concat(s,"customers/forgotpassword"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),resetPassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"put",url:"".concat(s,"customers/resetpassword"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getProfile:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"get",url:"".concat(s,"customers/profile"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateProfile:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"patch",url:"".concat(s,"customers/profile"),data:n});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),uploadImage:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,c()({method:"post",url:"".concat(s,"images"),data:n,headers:{"Content-Type":"multipart/form-data"}});case 5:if(a=e.sent,o=a.data,200!==o.status.code){e.next=11;break}return e.abrupt("return",o);case 11:throw o;case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}()}},bdd2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-result",{attrs:{status:"404",title:"404","sub-title":"Sorry, the page you visited does not exist."},scopedSlots:e._u([{key:"extra",fn:function(){return[r("a-button",{attrs:{type:"primary"}},[e._v("\n      Back Home\n    ")])]},proxy:!0}])})},a=[],c={name:"FourOhFour",created:function(){this.$ssrContext&&this.$ssrContext.res.status(404)}},s=c,o=r("2877"),u=Object(o["a"])(s,n,a,!1,null,null,null);t["default"]=u.exports},c2a4:function(e){e.exports={title:"Smart Store v1.0: Online Shopping site, best deals and offers",description:"Online Shopping site, best deals and offers"}},cfa9:function(e,t,r){var n={"./auth.js":"11c0","./categories.js":"3d83","./event-bus.js":"9400","./products.js":"22ca","./users.js":"b20d"};function a(e){var t=c(e);return r(t)}function c(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="cfa9"},d746:function(e,t,r){"use strict";var n=r("93fe"),a=r.n(n);t["default"]=a.a},ef68:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-result",{attrs:{status:"500",title:"500","sub-title":"Sorry, the server is wrong."},scopedSlots:e._u([{key:"extra",fn:function(){return[r("a-button",{attrs:{type:"primary"}},[e._v("\n       Back Home\n     ")])]},proxy:!0}])})},a=[],c={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{}},s=c,o=r("d746"),u=r("2877");function i(e){this["$style"]=o["default"].locals||o["default"]}var f=Object(u["a"])(s,n,a,!1,i,null,null);t["default"]=f.exports}});