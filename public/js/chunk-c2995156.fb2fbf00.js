(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2995156"],{"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),r=n("17c2"),s=n("9112");for(var c in a){var o=i[c],h=o&&o.prototype;if(h&&h.forEach!==r)try{s(h,"forEach",r)}catch(u){h.forEach=r}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),r=n("ae40"),s=a("forEach"),c=r("forEach");t.exports=s&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),a=n("825a"),r=n("d039"),s=n("ad6d"),c="toString",o=RegExp.prototype,h=o[c],u=r((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=h.name!=c;(u||f)&&i(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in o)?s.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2c29":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"canvas",height:"260"}})},a=[];n("cb29"),n("4de4"),n("4160"),n("fb6a"),n("d3b7"),n("25f0"),n("159b");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var o=function(){function t(e,n){r(this,t),this.x=e,this.y=n,this.vx=3*Math.random()-1.5,this.vy=3*Math.random()-1.5,this.r=3*Math.random()+3,this.dead=!1,this.color="#"+Math.random().toString(16).slice(2,8)}return c(t,[{key:"render",value:function(t){t.beginPath(),t.fillStyle=this.color,t.globalCompositeOperation="lighter",t.arc(this.x,this.y,this.r,0,2*Math.PI),t.fill()}},{key:"update",value:function(){this.r*=.96,this.x+=this.vx,this.y+=this.vy,this.r<.01&&(this.dead=!0)}}]),t}(),h={name:"can-animation",data:function(){return{canvas:null,bubbles:[],timer:null,animateState:!0}},mounted:function(){this.init(),this.register(),this.render()},beforeDestroy:function(){clearInterval(this.timer),window.removeEventListener("resize",this.handleResize),this.canvas.removeEventListener("mousemove",this.handleMousemove),this.animateState=!1},watch:{width:function(){this.canvas.width=this.width||500},height:function(){this.canvas.height=this.height||260}},methods:{init:function(){this.canvas=document.querySelector("#canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=document.documentElement.offsetWidth,this.canvas.height=260,this.auto()},auto:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.bubbles.push(new o(t.canvas.width*Math.random(),t.canvas.height*Math.random()))}),30)},register:function(){window.addEventListener("resize",this.handleResize),this.canvas.addEventListener("mousemove",this.handleMousemove)},render:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.bubbles.forEach((function(e){e.render(t.ctx),e.update()})),this.bubbles=this.bubbles.filter((function(t){return!t.dead})),this.animateState&&requestAnimationFrame((function(){return t.render()}))},handleResize:function(){this.canvas.width=document.documentElement.offsetWidth},handleMousemove:function(t){this.bubbles.push(new o(t.offsetX,t.offsetY))}}},u=h,f=(n("d28d"),n("2877")),l=Object(f["a"])(u,i,a,!1,null,"0d9892c4",null);e["a"]=l.exports},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").filter,r=n("1dde"),s=n("ae40"),c=r("filter"),o=s("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),a=n("23cb"),r=n("50c4");t.exports=function(t){var e=i(this),n=r(e.length),s=arguments.length,c=a(s>1?arguments[1]:void 0,n),o=s>2?arguments[2]:void 0,h=void 0===o?n:a(o,n);while(h>c)e[c++]=t;return e}},"8d1c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Links"},[n("Nav"),n("div",{ref:"can",staticClass:"canvas"},[t._m(0),n("can-animation")],1),n("div",{staticClass:"link-main"},[t._m(1),n("div",{staticClass:"container"},[n("ul",t._l(t.linksList,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.href,target:"_blank"}},[n("img",{attrs:{src:e.icon}}),n("h3",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.des))])])])})),0)])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txt"},[n("h2",[t._v("友情链接")]),n("p",[t._v("对影潭兮欲揽月，只为再抚卿柔面。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rule"},[n("h3",[t._v("链接申请说明")]),n("p",[n("i",{staticClass:"fa fa-close"}),t._v("经常宕机 "),n("i",{staticClass:"fa fa-close"}),t._v("不合法规 "),n("i",{staticClass:"fa fa-close"}),t._v("插边球站 "),n("i",{staticClass:"fa fa-close"}),t._v("红标报毒 "),n("i",{staticClass:"fa fa-check"}),t._v("原创优先 "),n("i",{staticClass:"fa fa-check"}),t._v("技术优先 ")]),n("p",[t._v("交换友链可在留言板留言.本站链接如下："),n("br"),t._v(" 名称：燕十三"),n("br"),t._v(" 网址：https://www.yanshisan.cn"),n("br"),t._v(" 图标：https://www.yanshisan.cn/logo.png"),n("br"),t._v(" 描述：燕十三·一个人的江湖")]),n("p",[t._v("申请提交后若无其它原因将在24小时内审核,如超过时间还未通过,请私信我.(各种额外因素)")])])}],r=n("216c"),s=n("2c29"),c=n("365c"),o={name:"Links",components:{CanAnimation:s["a"],Nav:r["a"]},data:function(){return{linksList:[]}},created:function(){var t=this;Object(c["s"])().then((function(e){t.linksList=e.data.data}))}},h=o,u=(n("d942"),n("2877")),f=Object(u["a"])(h,i,a,!1,null,"2facad2e",null);e["default"]=f.exports},"8e9f":function(t,e,n){},ad25:function(t,e,n){},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,n){var i=n("0366"),a=n("44ad"),r=n("7b0b"),s=n("50c4"),c=n("65f0"),o=[].push,h=function(t){var e=1==t,n=2==t,h=3==t,u=4==t,f=6==t,l=5==t||f;return function(d,v,b,m){for(var p,g,y=r(d),w=a(y),_=i(v,b,3),E=s(w.length),x=0,C=m||c,k=e?C(d,E):n?C(d,0):void 0;E>x;x++)if((l||x in w)&&(p=w[x],g=_(p,x,y),t))if(e)k[x]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return x;case 2:o.call(k,p)}else if(u)return!1;return f?-1:h||u?u:k}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6)}},cb29:function(t,e,n){var i=n("23e7"),a=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:a}),r("fill")},d28d:function(t,e,n){"use strict";var i=n("8e9f"),a=n.n(i);a.a},d942:function(t,e,n){"use strict";var i=n("ad25"),a=n.n(i);a.a},fb6a:function(t,e,n){"use strict";var i=n("23e7"),a=n("861d"),r=n("e8b5"),s=n("23cb"),c=n("50c4"),o=n("fc6a"),h=n("8418"),u=n("b622"),f=n("1dde"),l=n("ae40"),d=f("slice"),v=l("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),m=[].slice,p=Math.max;i({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,e){var n,i,u,f=o(this),l=c(f.length),d=s(t,l),v=s(void 0===e?l:e,l);if(r(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,d,v);for(i=new(void 0===n?Array:n)(p(v-d,0)),u=0;d<v;d++,u++)d in f&&h(i,u,f[d]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-c2995156.fb2fbf00.js.map