(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{302:function(t,n,i){},303:function(t,n,i){"use strict";i(66);var e=i(304);e.a.install=function(t){t.component(e.a.name,e.a)},n.a=e.a},304:function(t,n,i){"use strict";i(166);function e(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var a={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return e(t={},"lay-button--".concat(this.type),!0),e(t,"is-disabled",this.disabled),e(t,"lay-button-".concat(this.size),!0),e(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){if(this.disabled)return!1;this.$emit("click",t)}}},s=(i(306),i(44)),o=Object(s.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"7279b4ab",null);n.a=o.exports},306:function(t,n,i){"use strict";var e=i(302);i.n(e).a},345:function(t,n,i){},410:function(t,n,i){"use strict";var e=i(345);i.n(e).a},444:function(t,n,i){"use strict";i.r(n);var e={name:"my-button",methods:{handleClick:function(t){console.log(t.target)}},components:{LayButton:i(303).a}},a=(i(410),i(44)),s=Object(a.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"button-exam5"},[n("lay-button",{attrs:{type:"primary",round:""}},[this._v("默认按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"medium",round:""}},[this._v("中型按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"small"}},[this._v("小型按钮")]),this._v(" "),n("lay-button",{attrs:{type:"primary",size:"mini"}},[this._v("超小按钮")])],1)}),[],!1,null,"7b0ad9f1",null);n.default=s.exports}}]);