(function(){"use strict";var t={776:function(t,n,e){var o=e(2856),i=e(4927),p=e.n(i),r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("FearHeader",{attrs:{"button-close-name":"РАЗДЕЛЫ"},on:{modal:t.visibleModal}}),n("vue-book-effects",{ref:"bookEffects",staticClass:"fear-book",attrs:{ambient:0,gloss:.1,nPolygons:15,pages:t.pages,startPage:t.currentBookOptions.page,loadingImage:e(4583)}}),n("FearLinks"),t.isVisibleDrawer?n("FearModal",{attrs:{chapters:t.chapters},on:{to:t.handleClickPushToPage},scopedSlots:t._u([{key:"title",fn:function(){return[n("FearHeader",{attrs:{"button-close-name":"ЗАКРЫТЬ"},on:{modal:t.visibleModal}})]},proxy:!0}],null,!1,1387522481)}):t._e()],1)},f=[],s=e(835),a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"fear-header"},[t._m(0),n("div",{staticClass:"fear-header__burger",on:{click:function(n){return t.$emit("modal")}}},[t._v(" "+t._s(t.buttonCloseName)+" ")])])},c=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"fear-header__logo"},[n("img",{attrs:{src:e(3935),alt:"Logo"}})])}],g={name:"FearHeader",props:{buttonCloseName:String}},u=g,l=e(1656),m=(0,l.A)(u,a,c,!1,null,null,null),d=m.exports,x=function(){var t=this;t._self._c;return t._m(0)},j=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"fear__links"},[n("div",{staticClass:"fear__link"},[n("i",{staticClass:"fa-solid fa-envelope"}),n("a",{attrs:{href:"mailto:fearfoxesdesign@gmail.com",target:"_blank"}},[t._v("fearfoxesdesign@gmail.com")])]),n("div",{staticClass:"fear__link"},[n("i",{staticClass:"fa-brands fa-square-instagram"}),n("a",{attrs:{href:"https://www.instagram.com/fear_612_/",target:"_blank"}},[t._v("fear_612_")])]),n("div",{staticClass:"fear__link"},[n("i",{staticClass:"fa-brands fa-vk"}),n("a",{attrs:{href:"https://vk.com/id108847211",target:"_blank"}},[t._v("Alina Naumova")])]),n("div",{staticClass:"fear__link"},[n("i",{staticClass:"fa-brands fa-telegram"}),n("a",{attrs:{href:"https://t.me/fearfoxes",target:"_blank"}},[t._v("fearfoxes")])])])}],b={name:"FearLinks"},v=b,h=(0,l.A)(v,x,j,!1,null,null,null),_=h.exports,k=function(){var t=this,n=t._self._c;return n("el-dialog",{attrs:{fullscreen:"","show-close":!1,visible:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"default",fn:function(){return[n("div",{staticClass:"fear-modal__chapters"},t._l(t.chapters,(function(e,o){return n("div",{key:o,staticClass:"fear-modal__chapter",on:{click:function(n){return t.$emit("to",e)}}},[t._v(" "+t._s(e.label)+" ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[n("FearLinks")]},proxy:!0}],null,!0)})},y=[],C={name:"FearModal",components:{FearLinks:_},props:{chapters:Array}},w=C,O=(0,l.A)(w,k,y,!1,null,null,null),F=O.exports,M={name:"App",components:{FearModal:F,FearLinks:_,FearHeader:d,VueBookEffects:s.A},data(){return{isVisibleDrawer:!1,currentBookOptions:{page:1,label:"арты"},pages:[],chapters:[{label:"обо мне",page:2},{label:"графика",page:4},{label:"наброски",page:44},{label:"граффити",page:46},{label:"арты",page:50},{label:"живопись",page:64},{label:"айдентика",page:70},{label:"коммерческие проекты",page:90},{label:"стикеры",page:98},{label:"инфографика",page:100},{label:"полиграфия",page:104}]}},mounted(){window.addEventListener("keydown",(t=>{const n=this.$refs.bookEffects;if(n)return 37===t.keyCode&&n.canFlipLeft&&n.flipLeft(),39===t.keyCode&&n.canFlipRight?n.flipRight():void 0})),setTimeout((()=>{this.pages=[null,e(8180),e(1777),e(5990),e(1732),e(9293),e(1200),e(1363),e(6598),e(8737),e(8788),e(295),e(2010),e(3376),e(8957),e(9058),e(6991),e(2676),e(721),e(1142),e(4307),e(6168),e(8533),e(7409),e(3076),e(9139),e(7273),e(5085),e(6512),e(863),e(2802),e(7193),e(6140),e(8042),e(9207),e(8280),e(2245),e(4910),e(9867),e(2892),e(4505),e(3698),e(3727),e(1211),e(2300),e(889),e(3328),e(951),e(8298),e(9285),e(714),e(1107),e(54),e(9932),e(7977),e(4894),e(2731),e(2728),e(9893),e(4909),e(1127),e(6708),e(4753),e(5277),e(5871),e(3855),e(7474),e(1073),e(1124),e(3699),e(5920),e(1573),e(3960),e(9030),e(7555),e(695),e(1050),e(6801),e(8875),e(7570),e(239),e(5904),e(477),e(1822),e(7659),e(727),e(6266),e(8869),e(6504),e(9179),e(4256),e(1753),e(6380),e(7327),e(9394),e(5016),e(2885),e(6634),e(279),e(6476),e(7637),e(414),e(8459),e(6848),e(5660),e(4042),e(7879),e(3128),e(6645),e(2499)]}),1)},methods:{handleClickPushToPage({page:t,label:n}){this.currentBookOptions.page=t,this.currentBookOptions.label=n,this.$nextTick((()=>{this.visibleModal()}))},visibleModal(){this.isVisibleDrawer=!this.isVisibleDrawer}}},P=M,L=(0,l.A)(P,r,f,!1,null,null,null),T=L.exports;o["default"].config.productionTip=!1,o["default"].use(p()),new o["default"]({render:t=>t(T)}).$mount("#app")},4583:function(t,n,e){t.exports=e.p+"img/loader.3c7f5cf5.svg"},3935:function(t,n,e){t.exports=e.p+"img/logo.68a57974.svg"},8180:function(t,n,e){t.exports=e.p+"img/0-0.7f2e9417.jpg"},1777:function(t,n,e){t.exports=e.p+"img/0-1.a7ac7a8d.jpg"},5990:function(t,n,e){t.exports=e.p+"img/0-2.a964a770.jpg"},1732:function(t,n,e){t.exports=e.p+"img/1-графика.b80e0627.jpg"},3376:function(t,n,e){t.exports=e.p+"img/10.441e8b1c.jpg"},4042:function(t,n,e){t.exports=e.p+"img/100.a2cdb6b3.jpg"},7879:function(t,n,e){t.exports=e.p+"img/101.016bac61.jpg"},3128:function(t,n,e){t.exports=e.p+"img/102.0dc8232d.jpg"},6645:function(t,n,e){t.exports=e.p+"img/103.ec6ae07f.jpg"},8957:function(t,n,e){t.exports=e.p+"img/11.9771c5da.jpg"},9058:function(t,n,e){t.exports=e.p+"img/12.1ffdbd99.jpg"},6991:function(t,n,e){t.exports=e.p+"img/13.4b65b55a.jpg"},2676:function(t,n,e){t.exports=e.p+"img/14.52199850.jpg"},721:function(t,n,e){t.exports=e.p+"img/15.304b2e37.jpg"},1142:function(t,n,e){t.exports=e.p+"img/16.fd6b4452.jpg"},4307:function(t,n,e){t.exports=e.p+"img/17.05da1811.jpg"},6168:function(t,n,e){t.exports=e.p+"img/18.8f6d8bc6.jpg"},8533:function(t,n,e){t.exports=e.p+"img/19.658dbe67.jpg"},9293:function(t,n,e){t.exports=e.p+"img/2.2bbbf7c1.jpg"},7409:function(t,n,e){t.exports=e.p+"img/20.25fccddb.jpg"},3076:function(t,n,e){t.exports=e.p+"img/21.b683c207.jpg"},9139:function(t,n,e){t.exports=e.p+"img/22.02f22904.jpg"},7273:function(t,n,e){t.exports=e.p+"img/23.31106882.jpg"},5085:function(t,n,e){t.exports=e.p+"img/24.dd925fa8.jpg"},6512:function(t,n,e){t.exports=e.p+"img/25.7ec14b4c.jpg"},863:function(t,n,e){t.exports=e.p+"img/26.e8cbbfd1.jpg"},2802:function(t,n,e){t.exports=e.p+"img/27.d1c71471.jpg"},7193:function(t,n,e){t.exports=e.p+"img/28.52ec7e22.jpg"},6140:function(t,n,e){t.exports=e.p+"img/29.38002ad5.jpg"},1200:function(t,n,e){t.exports=e.p+"img/3.bc7d661e.jpg"},8042:function(t,n,e){t.exports=e.p+"img/30.f034bd0c.jpg"},9207:function(t,n,e){t.exports=e.p+"img/31.5f8c0852.jpg"},8280:function(t,n,e){t.exports=e.p+"img/32.6acfd5f7.jpg"},2245:function(t,n,e){t.exports=e.p+"img/33.3fb2069a.jpg"},4910:function(t,n,e){t.exports=e.p+"img/34.599d602b.jpg"},9867:function(t,n,e){t.exports=e.p+"img/35.63297c24.jpg"},2892:function(t,n,e){t.exports=e.p+"img/36.a03f8562.jpg"},4505:function(t,n,e){t.exports=e.p+"img/37.1d1b7ffa.jpg"},3698:function(t,n,e){t.exports=e.p+"img/38.92ece03d.jpg"},3727:function(t,n,e){t.exports=e.p+"img/39.3b5dd466.jpg"},1363:function(t,n,e){t.exports=e.p+"img/4.20015b35.jpg"},1211:function(t,n,e){t.exports=e.p+"img/40.0e6c3ef8.jpg"},2300:function(t,n,e){t.exports=e.p+"img/41-наброски.f651abcd.jpg"},889:function(t,n,e){t.exports=e.p+"img/42.008fadca.jpg"},3328:function(t,n,e){t.exports=e.p+"img/43-граффити.8ee6b209.jpg"},951:function(t,n,e){t.exports=e.p+"img/44.c579c7e4.jpg"},8298:function(t,n,e){t.exports=e.p+"img/45.a69af96b.jpg"},9285:function(t,n,e){t.exports=e.p+"img/46.113a4a6f.jpg"},714:function(t,n,e){t.exports=e.p+"img/47-арты.c22591f9.jpg"},1107:function(t,n,e){t.exports=e.p+"img/48.34cd02ba.jpg"},54:function(t,n,e){t.exports=e.p+"img/49.2010d16c.jpg"},6598:function(t,n,e){t.exports=e.p+"img/5.9daafa16.jpg"},9932:function(t,n,e){t.exports=e.p+"img/50.3a55603f.jpg"},7977:function(t,n,e){t.exports=e.p+"img/51.7997bf4e.jpg"},4894:function(t,n,e){t.exports=e.p+"img/52.bece8436.jpg"},2731:function(t,n,e){t.exports=e.p+"img/53.1deb7d12.jpg"},2728:function(t,n,e){t.exports=e.p+"img/54.55e400c0.jpg"},9893:function(t,n,e){t.exports=e.p+"img/55.98048f7e.jpg"},4909:function(t,n,e){t.exports=e.p+"img/56.b8869ebc.jpg"},1127:function(t,n,e){t.exports=e.p+"img/57.056bc453.jpg"},6708:function(t,n,e){t.exports=e.p+"img/58.95863463.jpg"},4753:function(t,n,e){t.exports=e.p+"img/59.741d65a3.jpg"},8737:function(t,n,e){t.exports=e.p+"img/6.2f36b4d0.jpg"},5277:function(t,n,e){t.exports=e.p+"img/60.77d42ba5.jpg"},5871:function(t,n,e){t.exports=e.p+"img/61-живопись.92608556.jpg"},3855:function(t,n,e){t.exports=e.p+"img/62.7997fd5f.jpg"},7474:function(t,n,e){t.exports=e.p+"img/63.e79b2fd1.jpg"},1073:function(t,n,e){t.exports=e.p+"img/64.5fe19a0a.jpg"},1124:function(t,n,e){t.exports=e.p+"img/65.11a0ee0d.jpg"},3699:function(t,n,e){t.exports=e.p+"img/66.f73b73f4.jpg"},5920:function(t,n,e){t.exports=e.p+"img/67-айдентика.06d31a17.jpg"},1573:function(t,n,e){t.exports=e.p+"img/68.c8e6599a.jpg"},3960:function(t,n,e){t.exports=e.p+"img/69.1b9d7059.jpg"},8788:function(t,n,e){t.exports=e.p+"img/7.c9f25a5c.jpg"},9030:function(t,n,e){t.exports=e.p+"img/70.2b892cf3.jpg"},7555:function(t,n,e){t.exports=e.p+"img/71.37bcfbf1.jpg"},1050:function(t,n,e){t.exports=e.p+"img/72-1.6d6860c3.jpg"},695:function(t,n,e){t.exports=e.p+"img/72.686940c7.jpg"},8875:function(t,n,e){t.exports=e.p+"img/73-1.45d3191c.jpg"},6801:function(t,n,e){t.exports=e.p+"img/73.c837e62e.jpg"},7570:function(t,n,e){t.exports=e.p+"img/74.50a307d1.jpg"},239:function(t,n,e){t.exports=e.p+"img/75.6c9a6777.jpg"},5904:function(t,n,e){t.exports=e.p+"img/76.49d36944.jpg"},477:function(t,n,e){t.exports=e.p+"img/77.2d27f39a.jpg"},1822:function(t,n,e){t.exports=e.p+"img/78.8d174c54.jpg"},7659:function(t,n,e){t.exports=e.p+"img/79.639c5df2.jpg"},295:function(t,n,e){t.exports=e.p+"img/8.2afad246.jpg"},727:function(t,n,e){t.exports=e.p+"img/80.ffa039bc.jpg"},6266:function(t,n,e){t.exports=e.p+"img/81.f4ebd1fb.jpg"},8869:function(t,n,e){t.exports=e.p+"img/82.89dc4198.jpg"},6504:function(t,n,e){t.exports=e.p+"img/83.eb0553a0.jpg"},9179:function(t,n,e){t.exports=e.p+"img/84.c473b173.jpg"},4256:function(t,n,e){t.exports=e.p+"img/85-коммерческие-проекты.f0c7e9c6.jpg"},1753:function(t,n,e){t.exports=e.p+"img/86.2f8208c2.jpg"},6380:function(t,n,e){t.exports=e.p+"img/87.46f9764a.jpg"},7327:function(t,n,e){t.exports=e.p+"img/88.2c0b343d.jpg"},9394:function(t,n,e){t.exports=e.p+"img/89.69ed541f.jpg"},2010:function(t,n,e){t.exports=e.p+"img/9.ebfb7efa.jpg"},5016:function(t,n,e){t.exports=e.p+"img/90.3680922d.jpg"},2885:function(t,n,e){t.exports=e.p+"img/91.290f3cb9.jpg"},6634:function(t,n,e){t.exports=e.p+"img/92.19cf9242.jpg"},279:function(t,n,e){t.exports=e.p+"img/93-стикеры.0ffaaae7.jpg"},6476:function(t,n,e){t.exports=e.p+"img/94.d8020452.jpg"},7637:function(t,n,e){t.exports=e.p+"img/95-инфография.1e91c0c7.jpg"},414:function(t,n,e){t.exports=e.p+"img/96.cd794003.jpg"},8459:function(t,n,e){t.exports=e.p+"img/97.0163096c.jpg"},6848:function(t,n,e){t.exports=e.p+"img/98.421d9185.jpg"},5660:function(t,n,e){t.exports=e.p+"img/99-полиграфия.aab084c6.jpg"},2499:function(t,n,e){t.exports=e.p+"img/финальная.40cf2b20.jpg"}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var p=n[o]={id:o,loaded:!1,exports:{}};return t[o].call(p.exports,p,p.exports,e),p.loaded=!0,p.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(n,o,i,p){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],p=t[c][2];for(var f=!0,s=0;s<o.length;s++)(!1&p||r>=p)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(f=!1,p<r&&(r=p));if(f){t.splice(c--,1);var a=i();void 0!==a&&(n=a)}}return n}p=p||0;for(var c=t.length;c>0&&t[c-1][2]>p;c--)t[c]=t[c-1];t[c]=[o,i,p]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,p,r=o[0],f=o[1],s=o[2],a=0;if(r.some((function(n){return 0!==t[n]}))){for(i in f)e.o(f,i)&&(e.m[i]=f[i]);if(s)var c=s(e)}for(n&&n(o);a<r.length;a++)p=r[a],e.o(t,p)&&t[p]&&t[p][0](),t[p]=0;return e.O(c)},o=self["webpackChunkfearfoxes"]=self["webpackChunkfearfoxes"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(776)}));o=e.O(o)})();
//# sourceMappingURL=app.9b7641f8.js.map