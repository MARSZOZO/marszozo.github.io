(function(){"use strict";var t={6556:function(t,i,e){var n=e(2856),p=function(){var t=this,i=t._self._c;return i("div",{staticClass:"app",attrs:{id:"app"}},[i("FearHeader",{attrs:{"button-close-name":t.buttonCloseName},on:{modal:t.visibleModal}}),i("div",{staticClass:"app__content"},[i("vue-book-effects",{directives:[{name:"show",rawName:"v-show",value:!t.isModalVisible,expression:"!isModalVisible"}],ref:"bookEffects",staticClass:"book-effects",attrs:{ambient:0,gloss:.1,nPolygons:15,pages:t.pages,loadingImage:"https://disk.yandex.ru/d/q-k7iD8AWSB08w",startPage:t.currentBookOptions.page},on:{"flip-left-end":t.onFlipLeftEnd,"flip-right-end":t.onFlipRightEnd}})],1),i("FearLinks"),i("FearModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],attrs:{chapters:t.chapters},on:{to:t.handleClickPushToPage,close:t.visibleModal}})],1)},o=[],s=e(835),a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"modal-backdrop"},[i("div",{staticClass:"modal"},[i("section",{staticClass:"modal-body"},[i("div",{staticClass:"app__modal"},[i("div",{staticClass:"app__modal-chapters"},t._l(t.chapters,(function(e,n){return i("div",{key:n,staticClass:"app__modal-chapter",on:{click:function(i){return t.$emit("to",e)}}},[t._v(" "+t._s(e.label)+" ")])})),0)])])])])},r=[],c={name:"FearModal",props:{chapters:Array},methods:{close(){this.$emit("close")}}},f=c,g=e(1656),u=(0,g.A)(f,a,r,!1,null,null,null),l=u.exports,m=function(){var t=this,i=t._self._c;return i("div",{staticClass:"fear-header"},[t._m(0),i("div",{staticClass:"fear-header__burger",on:{click:function(i){return t.$emit("modal")}}},[t._v(" "+t._s(t.buttonCloseName)+" ")])])},d=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"fear-header__logo"},[i("img",{attrs:{src:e(3935),alt:"Logo"}})])}],x={name:"FearHeader",props:{buttonCloseName:String}},b=x,j=(0,g.A)(b,m,d,!1,null,null,null),h=j.exports,v=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"fear__links"},[i("div",{staticClass:"fear__link"},[i("i",{staticClass:"fa-solid fa-envelope"}),i("a",{attrs:{href:"mailto:fearfoxesdesign@gmail.com",target:"_blank"}},[t._v("fearfoxesdesign@gmail.com")])]),i("div",{staticClass:"fear__link"},[i("i",{staticClass:"fa-brands fa-square-instagram"}),i("a",{attrs:{href:"https://www.instagram.com/fear_612_/",target:"_blank"}},[t._v("fear_612_")])]),i("div",{staticClass:"fear__link"},[i("i",{staticClass:"fa-brands fa-vk"}),i("a",{attrs:{href:"https://vk.com/id108847211",target:"_blank"}},[t._v("Alina Naumova")])]),i("div",{staticClass:"fear__link"},[i("i",{staticClass:"fa-brands fa-telegram"}),i("a",{attrs:{href:"https://t.me/fearfoxes",target:"_blank"}},[t._v("fearfoxes")])])])}],k={name:"FearLinks"},C=k,w=(0,g.A)(C,v,_,!1,null,null,null),y=w.exports,O={name:"App",components:{FearLinks:y,FearHeader:h,FearModal:l,VueBookEffects:s.A},data(){return{currentBookOptions:{page:1,label:"арты"},isModalVisible:!1,pages:[],isNotebookView:!0,chapters:[{label:"обо мне",page:2},{label:"графика",page:4},{label:"наброски",page:44},{label:"граффити",page:46},{label:"арты",page:50},{label:"живопись",page:64},{label:"айдентика",page:70},{label:"коммерческие проекты",page:90},{label:"стикеры",page:98},{label:"инфографика",page:100},{label:"полиграфия",page:104}]}},computed:{buttonCloseName(){return this.isModalVisible?"ЗАКРЫТЬ":"РАЗДЕЛЫ"}},mounted(){window.addEventListener("keydown",(t=>{const i=this.$refs.bookEffects;if(i)return 37===t.keyCode&&i.canFlipLeft&&i.flipLeft(),39===t.keyCode&&i.canFlipRight?i.flipRight():void 0})),setTimeout((()=>{this.pages=[null,e(8180),e(1777),e(5990),e(1732),e(9293),e(1200),e(1363),e(6598),e(8737),e(8788),e(295),e(2010),e(3376),e(8957),e(9058),e(6991),e(2676),e(721),e(1142),e(4307),e(6168),e(8533),e(7409),e(3076),e(9139),e(9654),e(5085),e(6512),e(863),e(2802),e(7193),e(6140),e(8042),e(9207),e(8280),e(2245),e(4910),e(9867),e(2892),e(4505),e(3698),e(3727),e(1211),e(2300),e(889),e(3328),e(951),e(8298),e(9285),e(714),e(1107),e(54),e(9932),e(7977),e(4894),e(2731),e(2728),e(9893),e(7290),e(1127),e(6708),e(4753),e(5277),e(5871),e(3855),e(7474),e(1073),e(1124),e(3699),e(5920),e(1573),e(3960),e(9030),e(7555),e(695),e(1050),e(6801),e(8875),e(7570),e(239),e(5904),e(477),e(1822),e(7659),e(727),e(6266),e(8869),e(6504),e(9179),e(4256),e(1753),e(6380),e(7327),e(9394),e(5016),e(2885),e(6634),e(279),e(6476),e(7637),e(414),e(8459),e(6848),e(5660),e(4042),e(7879),e(3128),e(6645),e(2499)]}),1)},methods:{handleClickPushToPage({page:t,label:i}){this.currentBookOptions.page=t,this.currentBookOptions.label=i,this.$nextTick((()=>{this.visibleModal()}))},onFlipLeftEnd(t){this.currentBookOptions.label=this.chapters.find((i=>i.page===t)).label},onFlipRightEnd(t){this.currentBookOptions.label=this.chapters.find((i=>i.page===t)).label},visibleModal(){this.isModalVisible=!this.isModalVisible}}},F=O,M=(0,g.A)(F,p,o,!1,null,null,null),A=M.exports;n.Ay.config.productionTip=!1,new n.Ay({render:t=>t(A)}).$mount("#app")},3935:function(t,i,e){t.exports=e.p+"img/logo.68a57974.svg"},8180:function(t,i,e){t.exports=e.p+"img/0-0.7f2e9417.jpg"},1777:function(t,i,e){t.exports=e.p+"img/0-1.a7ac7a8d.jpg"},5990:function(t,i,e){t.exports=e.p+"img/0-2.a964a770.jpg"},1732:function(t,i,e){t.exports=e.p+"img/1-графика.b80e0627.jpg"},3376:function(t,i,e){t.exports=e.p+"img/10.441e8b1c.jpg"},4042:function(t,i,e){t.exports=e.p+"img/100.a2cdb6b3.jpg"},7879:function(t,i,e){t.exports=e.p+"img/101.016bac61.jpg"},3128:function(t,i,e){t.exports=e.p+"img/102.0dc8232d.jpg"},6645:function(t,i,e){t.exports=e.p+"img/103.ec6ae07f.jpg"},8957:function(t,i,e){t.exports=e.p+"img/11.9771c5da.jpg"},9058:function(t,i,e){t.exports=e.p+"img/12.1ffdbd99.jpg"},6991:function(t,i,e){t.exports=e.p+"img/13.4b65b55a.jpg"},2676:function(t,i,e){t.exports=e.p+"img/14.52199850.jpg"},721:function(t,i,e){t.exports=e.p+"img/15.304b2e37.jpg"},1142:function(t,i,e){t.exports=e.p+"img/16.fd6b4452.jpg"},4307:function(t,i,e){t.exports=e.p+"img/17.05da1811.jpg"},6168:function(t,i,e){t.exports=e.p+"img/18.8f6d8bc6.jpg"},8533:function(t,i,e){t.exports=e.p+"img/19.658dbe67.jpg"},9293:function(t,i,e){t.exports=e.p+"img/2.2bbbf7c1.jpg"},7409:function(t,i,e){t.exports=e.p+"img/20.25fccddb.jpg"},3076:function(t,i,e){t.exports=e.p+"img/21.b683c207.jpg"},9139:function(t,i,e){t.exports=e.p+"img/22.02f22904.jpg"},9654:function(t,i,e){t.exports=e.p+"img/23.31106882.jpg"},5085:function(t,i,e){t.exports=e.p+"img/24.dd925fa8.jpg"},6512:function(t,i,e){t.exports=e.p+"img/25.7ec14b4c.jpg"},863:function(t,i,e){t.exports=e.p+"img/26.e8cbbfd1.jpg"},2802:function(t,i,e){t.exports=e.p+"img/27.d1c71471.jpg"},7193:function(t,i,e){t.exports=e.p+"img/28.52ec7e22.jpg"},6140:function(t,i,e){t.exports=e.p+"img/29.38002ad5.jpg"},1200:function(t,i,e){t.exports=e.p+"img/3.bc7d661e.jpg"},8042:function(t,i,e){t.exports=e.p+"img/30.f034bd0c.jpg"},9207:function(t,i,e){t.exports=e.p+"img/31.5f8c0852.jpg"},8280:function(t,i,e){t.exports=e.p+"img/32.6acfd5f7.jpg"},2245:function(t,i,e){t.exports=e.p+"img/33.3fb2069a.jpg"},4910:function(t,i,e){t.exports=e.p+"img/34.599d602b.jpg"},9867:function(t,i,e){t.exports=e.p+"img/35.63297c24.jpg"},2892:function(t,i,e){t.exports=e.p+"img/36.a03f8562.jpg"},4505:function(t,i,e){t.exports=e.p+"img/37.1d1b7ffa.jpg"},3698:function(t,i,e){t.exports=e.p+"img/38.92ece03d.jpg"},3727:function(t,i,e){t.exports=e.p+"img/39.3b5dd466.jpg"},1363:function(t,i,e){t.exports=e.p+"img/4.20015b35.jpg"},1211:function(t,i,e){t.exports=e.p+"img/40.0e6c3ef8.jpg"},2300:function(t,i,e){t.exports=e.p+"img/41-наброски.f651abcd.jpg"},889:function(t,i,e){t.exports=e.p+"img/42.008fadca.jpg"},3328:function(t,i,e){t.exports=e.p+"img/43-граффити.8ee6b209.jpg"},951:function(t,i,e){t.exports=e.p+"img/44.c579c7e4.jpg"},8298:function(t,i,e){t.exports=e.p+"img/45.a69af96b.jpg"},9285:function(t,i,e){t.exports=e.p+"img/46.113a4a6f.jpg"},714:function(t,i,e){t.exports=e.p+"img/47-арты.c22591f9.jpg"},1107:function(t,i,e){t.exports=e.p+"img/48.34cd02ba.jpg"},54:function(t,i,e){t.exports=e.p+"img/49.2010d16c.jpg"},6598:function(t,i,e){t.exports=e.p+"img/5.9daafa16.jpg"},9932:function(t,i,e){t.exports=e.p+"img/50.3a55603f.jpg"},7977:function(t,i,e){t.exports=e.p+"img/51.7997bf4e.jpg"},4894:function(t,i,e){t.exports=e.p+"img/52.bece8436.jpg"},2731:function(t,i,e){t.exports=e.p+"img/53.1deb7d12.jpg"},2728:function(t,i,e){t.exports=e.p+"img/54.55e400c0.jpg"},9893:function(t,i,e){t.exports=e.p+"img/55.98048f7e.jpg"},7290:function(t,i,e){t.exports=e.p+"img/56.b8869ebc.jpg"},1127:function(t,i,e){t.exports=e.p+"img/57.056bc453.jpg"},6708:function(t,i,e){t.exports=e.p+"img/58.95863463.jpg"},4753:function(t,i,e){t.exports=e.p+"img/59.741d65a3.jpg"},8737:function(t,i,e){t.exports=e.p+"img/6.2f36b4d0.jpg"},5277:function(t,i,e){t.exports=e.p+"img/60.77d42ba5.jpg"},5871:function(t,i,e){t.exports=e.p+"img/61-живопись.92608556.jpg"},3855:function(t,i,e){t.exports=e.p+"img/62.7997fd5f.jpg"},7474:function(t,i,e){t.exports=e.p+"img/63.e79b2fd1.jpg"},1073:function(t,i,e){t.exports=e.p+"img/64.5fe19a0a.jpg"},1124:function(t,i,e){t.exports=e.p+"img/65.11a0ee0d.jpg"},3699:function(t,i,e){t.exports=e.p+"img/66.f73b73f4.jpg"},5920:function(t,i,e){t.exports=e.p+"img/67-айдентика.06d31a17.jpg"},1573:function(t,i,e){t.exports=e.p+"img/68.c7317cc4.jpg"},3960:function(t,i,e){t.exports=e.p+"img/69.1b9d7059.jpg"},8788:function(t,i,e){t.exports=e.p+"img/7.c9f25a5c.jpg"},9030:function(t,i,e){t.exports=e.p+"img/70.2b892cf3.jpg"},7555:function(t,i,e){t.exports=e.p+"img/71.df22799a.jpg"},1050:function(t,i,e){t.exports=e.p+"img/72-1.6d6860c3.jpg"},695:function(t,i,e){t.exports=e.p+"img/72.686940c7.jpg"},8875:function(t,i,e){t.exports=e.p+"img/73-1.45d3191c.jpg"},6801:function(t,i,e){t.exports=e.p+"img/73.d89e8d76.jpg"},7570:function(t,i,e){t.exports=e.p+"img/74.c10f0df0.jpg"},239:function(t,i,e){t.exports=e.p+"img/75.6c9a6777.jpg"},5904:function(t,i,e){t.exports=e.p+"img/76.49d36944.jpg"},477:function(t,i,e){t.exports=e.p+"img/77.2d27f39a.jpg"},1822:function(t,i,e){t.exports=e.p+"img/78.8d174c54.jpg"},7659:function(t,i,e){t.exports=e.p+"img/79.639c5df2.jpg"},295:function(t,i,e){t.exports=e.p+"img/8.2afad246.jpg"},727:function(t,i,e){t.exports=e.p+"img/80.ffa039bc.jpg"},6266:function(t,i,e){t.exports=e.p+"img/81.f4ebd1fb.jpg"},8869:function(t,i,e){t.exports=e.p+"img/82.89dc4198.jpg"},6504:function(t,i,e){t.exports=e.p+"img/83.07ef0a27.jpg"},9179:function(t,i,e){t.exports=e.p+"img/84.51bff93a.jpg"},4256:function(t,i,e){t.exports=e.p+"img/85-коммерческие-проекты.f0c7e9c6.jpg"},1753:function(t,i,e){t.exports=e.p+"img/86.a7721655.jpg"},6380:function(t,i,e){t.exports=e.p+"img/87.46f9764a.jpg"},7327:function(t,i,e){t.exports=e.p+"img/88.2c0b343d.jpg"},9394:function(t,i,e){t.exports=e.p+"img/89.69ed541f.jpg"},2010:function(t,i,e){t.exports=e.p+"img/9.ebfb7efa.jpg"},5016:function(t,i,e){t.exports=e.p+"img/90.3680922d.jpg"},2885:function(t,i,e){t.exports=e.p+"img/91.290f3cb9.jpg"},6634:function(t,i,e){t.exports=e.p+"img/92.19cf9242.jpg"},279:function(t,i,e){t.exports=e.p+"img/93-стикеры.0ffaaae7.jpg"},6476:function(t,i,e){t.exports=e.p+"img/94.d8020452.jpg"},7637:function(t,i,e){t.exports=e.p+"img/95-инфография.1e91c0c7.jpg"},414:function(t,i,e){t.exports=e.p+"img/96.cd794003.jpg"},8459:function(t,i,e){t.exports=e.p+"img/97.0163096c.jpg"},6848:function(t,i,e){t.exports=e.p+"img/98.421d9185.jpg"},5660:function(t,i,e){t.exports=e.p+"img/99-полиграфия.aab084c6.jpg"},2499:function(t,i,e){t.exports=e.p+"img/финальная.40cf2b20.jpg"}},i={};function e(n){var p=i[n];if(void 0!==p)return p.exports;var o=i[n]={exports:{}};return t[n].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(i,n,p,o){if(!n){var s=1/0;for(f=0;f<t.length;f++){n=t[f][0],p=t[f][1],o=t[f][2];for(var a=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](n[r])}))?n.splice(r--,1):(a=!1,o<s&&(s=o));if(a){t.splice(f--,1);var c=p();void 0!==c&&(i=c)}}return i}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[n,p,o]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var p,o,s=n[0],a=n[1],r=n[2],c=0;if(s.some((function(i){return 0!==t[i]}))){for(p in a)e.o(a,p)&&(e.m[p]=a[p]);if(r)var f=r(e)}for(i&&i(n);c<s.length;c++)o=s[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(f)},n=self["webpackChunkfearfoxes"]=self["webpackChunkfearfoxes"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(6556)}));n=e.O(n)})();
//# sourceMappingURL=app.6ce2f320.js.map