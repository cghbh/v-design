(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{303:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(166);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},304:function(t,n,e){},311:function(t,n,e){"use strict";e(66);var i=e(312);i.a.install=function(t){t.component(i.a.name,i.a)},n.a=i.a},312:function(t,n,e){"use strict";var i=e(303),s={name:"m-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return t={},Object(i.a)(t,"m-button--".concat(this.type),!0),Object(i.a)(t,"is-disabled",this.disabled),Object(i.a)(t,"m-button-".concat(this.size),!0),Object(i.a)(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){if(this.disabled)return!1;this.$emit("click",t)}}},a=(e(313),e(44)),c=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"m-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"2bd535d0",null);n.a=c.exports},313:function(t,n,e){"use strict";var i=e(304);e.n(i).a},505:function(t,n,e){"use strict";e.r(n);var i={components:{MButton:e(311).a}},s=e(44),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"button-exam1"},[e("m-button",[t._v("默认按钮")]),t._v(" "),e("m-button",{attrs:{type:"warning"}},[t._v("warning按钮")]),t._v(" "),e("m-button",{attrs:{type:"danger"}},[t._v("danger按钮")]),t._v(" "),e("m-button",{attrs:{type:"primary"}},[t._v("primary按钮")]),t._v(" "),e("m-button",{attrs:{type:"success"}},[t._v("success按钮")])],1)}),[],!1,null,null,null);n.default=a.exports}}]);