(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,e,n){},303:function(t,e,n){"use strict";n(166);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return i(t={},"lay-button--".concat(this.type),!0),i(t,"is-disabled",this.disabled),i(t,"lay-button-".concat(this.size),!0),i(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){this.$emit("click",t)}}},o=(n(305),n(44)),a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"0eb422fc",null);e.a=a.exports},304:function(t,e,n){"use strict";n(66);var i=n(303);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},305:function(t,e,n){"use strict";var i=n(302);n.n(i).a},320:function(t,e,n){},353:function(t,e,n){"use strict";var i=n(320);n.n(i).a},354:function(t,e,n){},366:function(t,e,n){"use strict";var i=n(303),s={props:{title:{type:String,default:"温馨提示"},content:{type:String,default:""},type:{type:String,default:"confirm"},onOk:{type:Function},onCancel:{type:Function}},data:function(){return{visible:!1}},computed:{isConfirm:function(){return"alert"!==this.type}},components:{LayButton:i.a},mounted:function(){this.visible=!0,document.body.appendChild(this.$el)},methods:{clickHandle:function(t){"cancel"===t?(this.onCancel(),console.log(this.$el,"$el------cliock")):"confirm"===t&&(console.log(this.$el,"$el-----conform"),this.onOk()),this.close()},close:function(){this.visible=!1}},beforeDestroy:function(){var t=this.$el.parentNode.removeChild(this.$el);console.log(t,"remove value")},watch:{visible:function(t){t||this.$destroy()}}},o=(n(353),n(44)),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mask"},[n("transition",{attrs:{name:"message-fade"}},[t.visible?n("div",{staticClass:"lay-message-box"},[n("div",{staticClass:"lay-message-box-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"lay-message-box-content"},[t._v(t._s(t.content))]),t._v(" "),n("div",{staticClass:"lay-message-box-footer"},[t.isConfirm?n("lay-button",{on:{click:function(e){return t.clickHandle("cancel")}}},[t._v("取消")]):t._e(),t._v(" "),n("lay-button",{attrs:{type:"primary"},on:{click:function(e){return t.clickHandle("confirm")}}},[t._v("确定")])],1)]):t._e()])],1)}),[],!1,null,null,null).exports;e.a={install:function(t){function e(e){return new(t.extend(a))({propsData:e}).$mount(document.createElement("div"))}t.prototype.$confirm=function(t){e(t)},t.prototype.$alert=function(t){e(Object.assign(t,{type:"alert"}))}}}},411:function(t,e,n){"use strict";var i=n(354);n.n(i).a},437:function(t,e,n){"use strict";n.r(e);var i=n(304),s=n(0),o=n(366);s.a.use(o.a);var a={components:{LayButton:i.a},methods:{showMessageBox:function(){var t=this;this.$alert({title:"标题名称",content:"这是一段内容",onOk:function(){t.$message({message:"这个实现的是Alert的功能！",type:"success",duration:1500})}})}}},c=(n(411),n(44)),l=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-box-one"},[e("lay-button",{attrs:{type:"primary"},on:{click:this.showMessageBox}},[this._v("点击打开MessageBox")])],1)}),[],!1,null,"5248a45f",null);e.default=l.exports}}]);