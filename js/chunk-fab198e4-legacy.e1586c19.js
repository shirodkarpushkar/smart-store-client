(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fab198e4"],{"4d77":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return l}));r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),a=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}s(s({},Object(a["d"])("auth",{currentUser:function(t){return t.currentUser}})),Object(a["c"])("auth",["signedIn"]));var i=Object(a["c"])("auth",["getAuthenticationToken","signedIn"]),u=Object(a["b"])("auth",["signIn","signOut"]),c=Object(a["b"])("users",["registration","verifyEmail","changePassword","forgotPassword","resetPassword","getProfile","updateProfile","uploadImage"]),l=Object(a["b"])("products",["getAllProducts","getCustomerProducts","getFavoriteProducts","getProductById","markProductFavorite","unmarkProductFavorite"]);Object(a["b"])("categories",["getAllCategories","getCategoryById"])},"9b19":function(t,e,r){t.exports=r.p+"img/logo.7bd35323.svg"},d0e2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticClass:"layout",attrs:{id:"components-layout-demo-top"}},[n("a-layout-header",{staticClass:"nav-head"},[n("div",{staticClass:"brand"},[n("div",{staticClass:"brand-drawer"},[n("a-icon",{attrs:{type:"menu"},on:{click:t.openDrawer}})],1),n("div",{staticClass:"brand-img cursor-pointer",on:{click:function(e){return t.gotoRoute({name:"home"})}}},[n("img",{attrs:{src:r("9b19"),alt:""}})]),n("h3",{staticClass:"brand-title cursor-pointer",on:{click:function(e){return t.gotoRoute({name:"home"})}}},[t._v("Smart Store "),n("small",[t._v("v1.0")])])]),n("a-menu",{staticClass:"nav-menu",attrs:{mode:"horizontal"}},[n("a-menu-item",{class:{"ant-menu-item-selected":t.currentRoute({name:"favorites"})},on:{click:function(e){return t.gotoRoute({name:"favorites"})}}},[n("a-icon",{attrs:{type:"heart"}}),t._v("Favourites\n      ")],1),n("a-menu-item",[n("a-icon",{attrs:{size:64,type:"shopping-cart"}}),t._v(" Orders\n      ")],1),t.user?n("a-menu-item",[n("a-dropdown",[n("a-avatar",{staticStyle:{"margin-top":"-5px"},attrs:{src:t.imgBaseUrl+t.user.result.avatar}}),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("h4",[t._v(" "+t._s(t.user.result.firstName)+" "+t._s(t.user.result.lastName))]),n("p",[t._v(" "+t._s(t.user.result.email))])]),n("a-menu-item",[n("a-icon",{attrs:{type:"setting"}}),t._v("Account Settings")],1),n("a-menu-item",[n("a-icon",{attrs:{type:"read"}}),t._v("About Us")],1),n("a-menu-item",[n("a-icon",{attrs:{type:"phone"}}),t._v("Contact Us")],1),n("a-menu-item",{on:{click:t.signOutUser}},[n("a-icon",{attrs:{type:"logout"}}),t._v("Sign Out")],1)],1)],1)],1):t._e()],1)],1),n("a-layout-content",[n("div",{staticClass:"nav-content"},[n("RouterView",{key:t.$route.fullPath})],1)]),n("layout-footer"),t.user?n("a-drawer",{attrs:{title:"Smart Store v1.0",placement:"left",closable:!1,visible:t.showDrawer},on:{close:t.onClose}},[n("a-avatar",{attrs:{size:64,src:t.imgBaseUrl+t.user.result.avatar}}),n("h3",{staticClass:"mt-1"},[t._v("Hello, "+t._s(t.user.result.firstName)+" "+t._s(t.user.result.lastName))]),n("p",[t._v(t._s(t.user.result.email))]),n("a-divider",{attrs:{type:"horizontal"}}),n("a-menu",{staticClass:"drawer-menu",attrs:{mode:"inline","default-open-keys":["category","account"]}},[n("a-sub-menu",{key:"category"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"apartment"}}),n("span",[t._v(" Avalaible Categories")])],1),n("a-menu-item",[t._v("\n          Home and Garden\n        ")]),n("a-menu-item",[t._v("\n          Electronic\n        ")]),n("a-menu-item",[t._v("\n          Fashion\n        ")]),n("a-menu-item",[t._v("\n          Music\n        ")]),n("a-menu-item",[t._v("\n          Sports\n        ")]),n("a-menu-item",[t._v("\n          Gaming\n        ")])],1),n("a-sub-menu",{key:"account"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"user"}}),n("span",[t._v("Personal")])],1),n("a-menu-item",[t._v("\n          Your Account\n        ")]),n("a-menu-item",[t._v("\n          Your Orders\n        ")]),n("a-menu-item",[t._v("\n          Favourites\n        ")])],1)],1),n("a-divider",{attrs:{type:"horizontal"}}),n("h4",{staticClass:"mt-1"},[t._v("Contact Us")]),n("h4",{staticClass:"mt-1"},[t._v("About Us")]),n("h4",{staticClass:"mt-1"},[t._v("Sign Out")])],1):t._e()],1)},a=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticStyle:{"text-align":"left"}},[t._v("\n  Smart Store ©2020 All rights reserved.\n")])},i=[],u={page:{title:"Footer",meta:[{name:"description",content:"Footer"}]},components:{}},c=u,l=r("2877"),m=Object(l["a"])(c,s,i,!1,null,"1c63fa40",null),p=m.exports,d=r("4d77");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={components:{layoutFooter:p},data:function(){return{showDrawer:!1,imgBaseUrl:"http://localhost:3000/"}},computed:{user:function(){return this.getAuthenticationToken()}},methods:f(f(f({},d["a"]),d["b"]),{},{openDrawer:function(){this.showDrawer=!0},onClose:function(){this.showDrawer=!1},signOutUser:function(){this.$router.push({name:"signin"}),this.signOut()},currentRoute:function(t){return t.name===this.$route.name},gotoRoute:function(t){this.$router.push(t)}})},g=b,y=Object(l["a"])(g,n,a,!1,null,"369e0fc3",null);e["default"]=y.exports}}]);