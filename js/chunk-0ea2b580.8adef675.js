(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ea2b580"],{"2e9f":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-2"},[r("h2",[t._v("Your Favourites")]),r("a-row",{attrs:{gutter:[16,16]}},t._l(t.products,(function(e,o){return r("a-col",t._b({key:o},"a-col",t.layout,!1),[r("product-card",{attrs:{product:e},on:{refreshList:t.getProducts}})],1)})),1)],1)},c=[],a=(r("ac6a"),r("ade3")),s=r("4d77"),n=r("ae46");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={components:{ProductCard:n["a"]},data(){return{collapsed:!1,products:[],imageBaseURL:"http://localhost:3000/",layout:{xs:{span:24},sm:{span:12},md:{span:8},lg:{span:6}}}},created(){this.getProducts()},methods:u(u({},s["d"]),{},{getProducts(){this.getFavoriteProducts().then(t=>{this.products=t.result}).catch(t=>{this.$message.error(t)})}})},p=d,l=r("2877"),f=Object(l["a"])(p,o,c,!1,null,null,null);e["default"]=f.exports},"4d77":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return p}));r("ac6a");var o=r("ade3"),c=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}s(s({},Object(c["d"])("auth",{currentUser:t=>t.currentUser})),Object(c["c"])("auth",["signedIn"]));const n=Object(c["c"])("auth",["getAuthenticationToken","signedIn"]),i=Object(c["b"])("auth",["signIn","signOut"]),u=Object(c["b"])("users",["registration","verifyEmail","changePassword","forgotPassword","resetPassword","getProfile","updateProfile","uploadImage"]),d=Object(c["b"])("products",["getAllProducts","getCustomerProducts","getFavoriteProducts","getProductById","getProductReviewsById","addProductReviewsById","markProductFavorite","unmarkProductFavorite"]),p=Object(c["b"])("categories",["getAllCategories","getCategoryById","getProductByCategoryId"])},ae46:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{staticStyle:{width:"300px"},attrs:{hoverable:""}},[r("img",{attrs:{slot:"cover",alt:"example",src:t.imageBaseURL+t.product.image},slot:"cover"}),r("h4",{staticClass:"float-right"},[t._v("₹"+t._s(t.product.price))]),r("template",{staticClass:"ant-card-actions",slot:"actions"},[r("svg",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.product.favorite?"Remove from favorites":"Add to favorites",expression:"\n        product.favorite ? 'Remove from favorites' : 'Add to favorites'\n      "}],attrs:{width:"1.5em",height:"1.5em",fill:t.product.favorite?"hotpink":"gray",viewBox:"0 0 1024 1024"},on:{click:function(e){return t.toggleFavorite(t.product)}}},[r("path",{attrs:{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"}})]),r("a-icon",{attrs:{type:"shopping-cart"}}),r("a-button",{attrs:{type:"primary"},on:{click:t.viewProduct}},[t._v("\n      View\n    ")])],1),r("a-card-meta",{attrs:{title:t.product.name,description:t.product.description}})],2)},c=[],a=(r("ac6a"),r("ade3")),s=r("4d77");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={props:{product:{type:Object,default:()=>null}},data(){return{imageBaseURL:"http://localhost:3000/"}},methods:i(i({},s["d"]),{},{toggleFavorite(t){t.favorite?this.unmarkProductFavorite({id:t.id}).then(t=>{this.$message.info(t.status.message),this.$emit("refreshList")}).catch(t=>{this.$message.error(t)}):this.markProductFavorite({id:t.id}).then(t=>{this.$message.info(t.status.message),this.$emit("refreshList")}).catch(t=>{this.$message.error(t)})},viewProduct(){this.$router.push({name:"product",params:{id:this.product.id}})}})},d=u,p=r("2877"),l=Object(p["a"])(d,o,c,!1,null,null,null);e["a"]=l.exports}}]);