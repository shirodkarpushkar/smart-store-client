(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fab198e4"],{"4d77":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return m}));r("ac6a");var a=r("ade3"),s=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}n(n({},Object(s["d"])("auth",{currentUser:t=>t.currentUser})),Object(s["c"])("auth",["signedIn"]));const i=Object(s["c"])("auth",["getAuthenticationToken","signedIn"]),c=Object(s["b"])("auth",["signIn","signOut"]),u=Object(s["b"])("users",["registration","verifyEmail","changePassword","forgotPassword","resetPassword","getProfile","updateProfile","uploadImage"]),l=Object(s["b"])("products",["getAllProducts","getCustomerProducts","getFavoriteProducts","getProductById","getProductReviewsById","addProductReviewsById","markProductFavorite","unmarkProductFavorite"]),m=Object(s["b"])("categories",["getAllCategories","getCategoryById","getProductByCategoryId"])},"9b19":function(t,e,r){t.exports=r.p+"img/logo.7bd35323.svg"},d0e2:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticClass:"layout",attrs:{id:"components-layout-demo-top"}},[a("a-layout-header",{staticClass:"nav-head"},[a("div",{staticClass:"brand"},[a("div",{staticClass:"brand-drawer"},[a("a-icon",{attrs:{type:"menu"},on:{click:t.openDrawer}})],1),a("div",{staticClass:"brand-img"},[a("img",{attrs:{src:r("9b19"),alt:""}})]),a("h3",{staticClass:"brand-title cursor-pointer",on:{click:function(e){return t.gotoRoute({name:"home",path:"/home"})}}},[t._v("Smart Store "),a("small",[t._v("v1.0")])])]),a("a-menu",{staticClass:"nav-menu",attrs:{mode:"horizontal"}},[a("a-menu-item",{class:{"ant-menu-item-selected":t.currentRoute({name:"favorites",path:"/favorites"})},on:{click:function(e){return t.gotoRoute({name:"favorites"})}}},[a("a-icon",{attrs:{type:"heart"}}),t._v("Favourites\n      ")],1),a("a-menu-item",[a("a-icon",{attrs:{size:64,type:"shopping-cart"}}),t._v(" Orders\n      ")],1),t.user?a("a-menu-item",[a("a-dropdown",[a("a-avatar",{staticStyle:{"margin-top":"-5px"},attrs:{src:t.imgBaseUrl+t.user.result.avatar}}),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("h4",[t._v(" "+t._s(t.user.result.firstName)+" "+t._s(t.user.result.lastName))]),a("p",[t._v(" "+t._s(t.user.result.email))])]),a("a-menu-item",[a("a-icon",{attrs:{type:"setting"}}),t._v("Account Settings")],1),a("a-menu-item",[a("a-icon",{attrs:{type:"read"}}),t._v("About Us")],1),a("a-menu-item",[a("a-icon",{attrs:{type:"phone"}}),t._v("Contact Us")],1),a("a-menu-item",{on:{click:t.signOutUser}},[a("a-icon",{attrs:{type:"logout"}}),t._v("Sign Out")],1)],1)],1)],1):t._e()],1)],1),a("a-layout-content",[a("div",{staticClass:"nav-content"},[a("RouterView",{key:t.$route.fullPath})],1)]),a("layout-footer"),t.user?a("a-drawer",{attrs:{title:"Smart Store v1.0",placement:"left",closable:!1,visible:t.showDrawer},on:{close:t.onClose}},[a("a-avatar",{attrs:{size:64,src:t.imgBaseUrl+t.user.result.avatar}}),a("h3",{staticClass:"mt-1"},[t._v("Hello, "+t._s(t.user.result.firstName)+" "+t._s(t.user.result.lastName))]),a("p",[t._v(t._s(t.user.result.email))]),a("a-divider",{attrs:{type:"horizontal"}}),a("a-menu",{staticClass:"drawer-menu",attrs:{mode:"inline","default-open-keys":["category","account"]}},[a("a-sub-menu",{key:"category"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"apartment"}}),a("span",[t._v(" Available Categories")])],1),t._l(t.categoryList,(function(e){return a("a-menu-item",{key:e.id,class:{"ant-menu-item-selected":t.currentRoute({name:"category",params:{id:e.id},path:"/category/"+e.id})},on:{click:function(r){return t.gotoRoute({name:"category",params:{id:e.id},query:{categoryName:e.name},path:"/category/"+e.id})}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2),a("a-sub-menu",{key:"account"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"user"}}),a("span",[t._v("Personal")])],1),a("a-menu-item",[t._v("\n          Your Account\n        ")]),a("a-menu-item",[t._v("\n          Your Orders\n        ")]),a("a-menu-item",[t._v("\n          Favourites\n        ")])],1)],1),a("a-divider",{attrs:{type:"horizontal"}}),a("h4",{staticClass:"mt-1"},[t._v("Contact Us")]),a("h4",{staticClass:"mt-1"},[t._v("About Us")]),a("h4",{staticClass:"mt-1"},[t._v("Sign Out")])],1):t._e()],1)},s=[],o=(r("ac6a"),r("ade3")),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticStyle:{"text-align":"left"}},[t._v("\n  Smart Store ©2020 All rights reserved.\n")])},i=[],c={page:{title:"Footer",meta:[{name:"description",content:"Footer"}]},components:{}},u=c,l=r("2877"),m=Object(l["a"])(u,n,i,!1,null,"1c63fa40",null),p=m.exports,d=r("4d77");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={components:{layoutFooter:p},data(){return{showDrawer:!1,imgBaseUrl:"http://localhost:3000/",categoryList:[]}},computed:{user(){return this.getAuthenticationToken()}},created(){console.log("created -> this.$route",this.$route),this.getCategoryList()},methods:h(h(h(h({},d["a"]),d["b"]),d["c"]),{},{openDrawer(){this.showDrawer=!0},onClose(){this.showDrawer=!1},signOutUser(){this.$router.push({name:"signin"}),this.signOut()},currentRoute(t){return t.path===this.$route.path},gotoRoute(t){t.path===this.$route.path&&t.name===this.$route.name||this.$router.push(t)},getCategoryList(){this.getAllCategories().then(t=>{this.categoryList=t.result}).catch(t=>{this.$message.error(t)})}})},v=y,b=Object(l["a"])(v,a,s,!1,null,"67f5bb51",null);e["default"]=b.exports}}]);