(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cd503f8"],{"4d77":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return d}));r("ac6a");var a=r("ade3"),s=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}o(o({},Object(s["d"])("auth",{currentUser:t=>t.currentUser})),Object(s["c"])("auth",["signedIn"]));const n=Object(s["c"])("auth",["getAuthenticationToken","signedIn"]),c=Object(s["b"])("auth",["signIn","signOut"]),u=Object(s["b"])("users",["registration","verifyEmail","changePassword","forgotPassword","resetPassword","getProfile","updateProfile","uploadImage"]),l=Object(s["b"])("products",["getAllProducts","getCustomerProducts","getFavoriteProducts","getProductById","getProductReviewsById","addProductReviewsById","markProductFavorite","unmarkProductFavorite"]),d=Object(s["b"])("categories",["getAllCategories","getCategoryById","getProductByCategoryId"])},"532d":function(t,e,r){},8374:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"p-2"},[r("a-row",{attrs:{type:"flex",align:"middle"}},[r("a-col",t._b({},"a-col",t.imgLayout,!1),[r("img",{staticClass:"product-img",attrs:{src:t.imageBaseURL+t.product.image,alt:""}})]),r("a-col",t._b({},"a-col",t.prodLayout,!1),[r("div",{staticClass:"m-3"},[r("h2",[t._v(t._s(t.product.name)+" \n          "),r("a-tag",{attrs:{color:"green"}},[t._v("\n            "+t._s(t.product.category)+"\n          ")])],1),r("p",[t._v(t._s(t.product.description))]),r("h4",[t._v(" No Cost EMI available ")]),r("h4",[t._v(" Payment Options : Credit/Debit/Cash on Delivery ")]),r("h4",{staticClass:"mt-2"},[t._v("Price: ₹"+t._s(t.product.price))]),r("a-button",[t._v("Buy Now")])],1)]),r("a-col",[r("h2",[t._v("Reviews")]),t._l(t.reviews,(function(t){return r("product-review",{key:t.id,attrs:{review:t}})})),r("add-review",{on:{refresh:t.getReviews}})],2)],1)],1):t._e()},s=[],i=(r("ac6a"),r("ade3")),o=r("4d77"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-comment",[r("template",{slot:"actions"},[r("a-rate",{attrs:{"default-value":t.review.rating,disabled:""}})],1),r("a",{attrs:{slot:"author"},slot:"author"},[t._v(" "+t._s(t.review.customer.name)+"  \n    "),r("span",{staticClass:"float-right"},[t._v(t._s(t._f("dateIST")(t.review.createdAt)))])]),r("a-avatar",{attrs:{slot:"avatar",src:t.imageBaseURL+t.review.customer.avatar,alt:"Han Solo"},slot:"avatar"}),r("div",{attrs:{slot:"content"},slot:"content"},[r("h4",[t._v(" "+t._s(t.review.title))]),r("p",[t._v(" "+t._s(t.review.body))])])],2)},c=[],u={filters:{dateIST:function(t){let e=new Date(t),r=e.getTimezoneOffset(),a=330,s=new Date(e.getTime()+6e4*(a+r));return s}},props:{review:{type:Object,default:()=>({id:null,title:"",body:"",rating:0,product:null,customer:{id:null,name:"",avatar:""},createdAt:""})}},data(){return{imageBaseURL:"http://localhost:3000/"}}},l=u,d=r("2877"),p=Object(d["a"])(l,n,c,!1,null,null,null),m=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form",{attrs:{form:t.form,"label-col":{span:24},"wrapper-col":{span:12}},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("a-form-item",{attrs:{label:"Title"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"Please input your Title!"}]}],expression:"[\n        'title',\n        { rules: [{ required: true, message: 'Please input your Title!' }] },\n      ]"}],attrs:{placeholder:"Title"}})],1),r("a-form-item",{attrs:{label:"Description"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"Please input your description"}]}],expression:"[\n        'description',\n        {\n          rules: [\n            { required: true, message: 'Please input your description' },\n          ],\n        },\n      ]"}],attrs:{rows:4,placeholder:"Description","max-length":255}})],1),r("a-form-item",{attrs:{label:"Rating"}},[r("a-rate",{model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1),r("a-form-item",[r("a-button",{attrs:{type:"primary","html-type":"submit",loading:t.submit}},[t._v("Post")])],1)],1)},b=[];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={data(){return{form:this.$form.createForm(this,{name:"add_review"}),submit:!1,rating:1}},methods:v(v({},o["d"]),{},{handleSubmit(t){this.form.validateFields((t,e)=>{if(!t){this.submit=!0;let t={title:e.title,description:e.description,rating:this.rating};this.addProductReviewsById({id:this.$route.params.id,data:t}).then(t=>{this.$message.success(t.status.message),this.form.resetFields(),this.$emit("refresh"),this.submit=!1}).catch(t=>{this.submit=!1,this.$message.error(t)})}})}})},O=h,y=Object(d["a"])(O,g,b,!1,null,null,null),w=y.exports;function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={page:{title:"ProductDetails",meta:[{name:"description",content:"ProductDetails"}]},components:{ProductReview:m,AddReview:w},data(){return{id:null,product:null,reviews:[],imageBaseURL:"http://localhost:3000/",imgLayout:{xs:{span:24},sm:{span:8}},prodLayout:{xs:{span:24},sm:{span:16}}}},created(){this.id=this.$route.params.id,this.getProduct(),this.getReviews()},methods:j(j({},o["d"]),{},{getProduct(){this.getProductById({id:this.id}).then(t=>{this.product=t.result}).catch(t=>{this.$message.error(t)})},getReviews(){this.getProductReviewsById({id:this.id}).then(t=>{this.reviews=t.result}).catch(t=>{this.$message.error(t)})}})},D=_,I=(r("d093"),Object(d["a"])(D,a,s,!1,null,"203301ef",null));e["default"]=I.exports},d093:function(t,e,r){"use strict";var a=r("532d"),s=r.n(a);s.a}}]);