(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aae9798"],{"3b87":function(e,r,t){"use strict";var a=t("90b5"),n=t.n(a);n.a},"90b5":function(e,r,t){},"98a3":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form},on:{submit:function(r){return r.preventDefault(),e.handleSubmit(r)}}},[t("h3",[e._v("Login")]),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{rules:[{required:!0,message:"Please input your username!"}]}],expression:"[\n        'userName',\n        {\n          rules: [{ required: true, message: 'Please input your username!' }],\n        },\n      ]"}],attrs:{placeholder:"Username"}},[t("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"}]}],expression:"[\n        'password',\n        {\n          rules: [{ required: true, message: 'Please input your Password!' }],\n        },\n      ]"}],attrs:{type:"password",placeholder:"Password"}},[t("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember",{valuePropName:"checked",initialValue:!0}],expression:"[\n        'remember',\n        {\n          valuePropName: 'checked',\n          initialValue: true,\n        },\n      ]"}]},[e._v("\n      Remember me\n    ")]),t("a",{staticClass:"login-form-forgot",attrs:{href:""}},[e._v("\n      Forgot password\n    ")]),t("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v("\n      Log in\n    ")]),e._v("\n    Or\n    "),t("router-link",{attrs:{to:"/register"}},[e._v("\n      register now!\n    ")])],1)],1)},n=[],o={page:{title:"signIn",meta:[{name:"description",content:"signIn"}]},components:{},data:function(){return{}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},methods:{handleSubmit:function(e){this.form.validateFields((function(e,r){e||console.log("Received values of form: ",r)}))}}},s=o,i=(t("3b87"),t("2877")),u=Object(i["a"])(s,a,n,!1,null,"1993dce0",null);r["default"]=u.exports}}]);