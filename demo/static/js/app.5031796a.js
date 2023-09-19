(function(){"use strict";var t={8446:function(t,e,n){var i=n(6369),o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("BanneR")],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{to:{name:"guanyu"},"active-class":"active",replace:""}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",replace:"",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试go")])])},a=[],l={name:"BanneR",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(-2)}}},u=l,c=n(1001),v=(0,c.Z)(u,s,a,!1,null,"06aed3ca",null),f=v.exports,p={name:"App",components:{BanneR:f}},h=p,d=(0,c.Z)(h,o,r,!1,null,null,null),m=d.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"AbouT",beforeDestroy(){console.log("About组件即将被销毁")},mounted(){console.log("About组件挂载完毕了")},beforeRouteEnter(t,e,n){console.log(t,e,n),document.title=t.meta.title,t.meta.isAuth?"xiaohong"===localStorage.getItem("name")?n():alert("名字有误，没有权限查看！"):n()},beforeRouteLeave(t,e,n){n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,"8b608c16",null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:["NewS","MessagE"]}},[e("router-view")],1)],1)])},Z=[],O={name:"HomE",beforeDestroy(){console.log("Home组件即将被销毁")},mounted(){console.log("Home组件挂载完毕了",this)}},A=O,q=(0,c.Z)(A,C,Z,!1,null,"07e3949e",null),P=q.exports,S=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],R={name:"NewS",beforeDestroy(){},data(){return{opacity:1}},activated(){console.log("news组件被激活了"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("news组件失活了"),console.log("News组件即将被销毁"),clearInterval(this.timer)}},D=R,E=(0,c.Z)(D,S,j,!1,null,"635d384b",null),H=E.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),t._v("  --\x3e "),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},L=[],M=(n(7658),{name:"MessagE",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}}),N=M,T=(0,c.Z)(N,$,L,!1,null,"1b4dcb90",null),B=T.exports,I=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},V=[],z={name:"DetaiL",props:["id","title"]},F=z,G=(0,c.Z)(F,I,V,!1,null,"831e161c",null),J=G.exports;const K=new _.ZP({mode:"hash",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!1,title:"关于"}},{name:"zhuye",path:"/home",component:P,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:H,meta:{isAuth:!1,title:"新闻"}},{name:"xiaoxi",path:"message",component:B,meta:{isAuth:!1,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,meta:{title:"详情"},props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});var Q=K;i.ZP.config.productionTip=!1,i.ZP.use(_.ZP),new i.ZP({el:"#app",render:t=>t(m),router:Q})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkcli_test"]=self["webpackChunkcli_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8446)}));i=n.O(i)})();
//# sourceMappingURL=app.5031796a.js.map