(function(){"use strict";var t={2848:function(t,n,e){var i=e(8935),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav-bar"),e("div",{staticClass:"split"},[e("div",{staticClass:"content",attrs:{id:"split-0"}},[t._v(" A ")]),e("div",{staticClass:"content",attrs:{id:"split-1"}},[t._v(" B "),e("ul",[e("li",[t._v("sizes: "+t._s(t.sizes)+" ")]),e("li",[t._v("gutterSize: "+t._s(t.gutterSize)+" ")]),e("li",[t._v("minSize: "+t._s(t.minSize)+" ")]),e("li",[t._v("maxSize: "+t._s(t.maxSize)+" ")]),e("li",[t._v("cursor: "+t._s(t.cursor)+" ")])])])])],1)},s=[],o=e(2282),u=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",[e("h1",[t._v("Split Example")]),e("div",{staticClass:"description"},[e("a",{attrs:{href:"https://www.npmjs.com/package/split.js"}},[t._v("split.js")]),t._v("를 사용해서 2 columns layout을 구성한 예제입니다. ")])])}],l={name:"NavBar"},c=l,f=e(1001),p=(0,f.Z)(c,u,a,!1,null,null,null),v=p.exports,m={name:"App",components:{NavBar:v},data(){return{sizes:[20,80],gutterSize:10,minSize:[150,300],maxSize:[350,1/0],cursor:"col-resize"}},mounted(){let t=localStorage.getItem("split-sizes");t=t?JSON.parse(t):[20,80],this.sizes=t,(0,o.Z)(["#split-0","#split-1"],{sizes:t,gutterSize:this.gutterSize,minSize:this.minSize,maxSize:this.maxSize,cursor:this.cursor,onDragEnd:function(t){localStorage.setItem("split-sizes",JSON.stringify(t))}})}},d=m,h=(0,f.Z)(d,r,s,!1,null,null,null),_=h.exports;i.Z.config.productionTip=!1,new i.Z({render:t=>t(_)}).$mount("#app")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,s){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],s=t[c][2];for(var u=!0,a=0;a<i.length;a++)(!1&s||o>=s)&&Object.keys(e.O).every((function(t){return e.O[t](i[a])}))?i.splice(a--,1):(u=!1,s<o&&(o=s));if(u){t.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,r,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,s,o=i[0],u=i[1],a=i[2],l=0;if(o.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(a)var c=a(e)}for(n&&n(i);l<o.length;l++)s=o[l],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},i=self["webpackChunkmy_split"]=self["webpackChunkmy_split"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(2848)}));i=e.O(i)})();
//# sourceMappingURL=app.25adf01e.js.map