(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(t,e,n){"use strict";n(11);e.a=function(t){var e=t.app;e.$axios.onRequest((function(t){var n=t.method,o=t.url,r=t.query,data=t.data;return t.withCredentials=!0,t.baseURL="https://api.example.com",e.$log("[Axios Request] Making request to ".concat(n.toUpperCase(),' "').concat(o,'"'),{query:r,data:data}),t})),e.$axios.onResponse((function(t){return e.$log("[Axios Response]",t.data.data),t.data.data})),e.$axios.onError((function(t){return e.$log("[Axios Error] ".concat(t.response.status),t.response.data),Promise.reject(t)}))}},110:function(t,e,n){"use strict";e.a=function(t,e){var n=t.isDev;e("log",(function(){var t;n&&(console.log("\n[Console Log] Visible only development mode."),(t=console).log.apply(t,arguments))}))}},111:function(t,e,n){"use strict";var o=n(184),r=n.n(o);e.a=function(t,e){e("cheerio",r.a)}},112:function(t,e,n){"use strict";(function(t){n(17);var o=n(0),r=n(185);e.a=function(e,n){var c=e.app.router;o.a.use(r.a,{enabled:!0,pageTrackerTemplate:function(t){return{page_title:t.name,page_path:t.fullPath}},config:{id:t.env.GOOGLE_ANALYTICS_ID}},c),e.$gtag=o.a.$gtag,n("gtag",o.a.$gtag)}}).call(this,n(94))},113:function(t,e,n){"use strict";var o=n(0),r=n(186),c=n.n(r);o.a.use(c.a)},114:function(t,e,n){"use strict";var o=n(0),r=n(115);o.a.use(r.a),e.a=function(t){var e=t.app,o=t.store;e.i18n=new r.a({locale:o.state.locales.locale,fallbackLocale:"en",messages:{en:n(315),ko:n(316)}})}},116:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("div",{staticStyle:{"padding-left":"20px","padding-right":"20px"}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},145:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("aba44ea4",content,!0,{sourceMap:!1})},146:function(t,e,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("e96d13c6",content,!0,{sourceMap:!1})},147:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("78aaf89d",content,!0,{sourceMap:!1})},148:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("02e76f0a",content,!0,{sourceMap:!1})},189:function(t,e,n){"use strict";var o=n(3),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"default__layout"}},[n("vue-navigation-bar"),t._v(" "),n("div",[n("nuxt")],1),t._v(" "),n("vue-footer-bar")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{VueNavigationBar:n(317).default,VueFooterBar:n(319).default})},190:function(t,e,n){n(191),t.exports=n(192)},236:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIxIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAgMEwyMSAwIDIxIDIwIDAgMjB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc5IC0xOCkgdHJhbnNsYXRlKDI3OSAxOCkiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMTY3IDE3aDE4LjY2NmMuNjQyIDAgMS4xNjctLjUyNSAxLjE2Ny0xLjE2NyAwLS42NDEtLjUyNS0xLjE2Ni0xLjE2Ny0xLjE2NkgxLjE2N2MtLjY0MiAwLTEuMTY3LjUyNS0xLjE2NyAxLjE2NkMwIDE2LjQ3NS41MjUgMTcgMS4xNjcgMTd6bTAtNS44MzNoMTguNjY2Yy42NDIgMCAxLjE2Ny0uNTI1IDEuMTY3LTEuMTY3cy0uNTI1LTEuMTY3LTEuMTY3LTEuMTY3SDEuMTY3Qy41MjUgOC44MzMgMCA5LjM1OCAwIDEwcy41MjUgMS4xNjcgMS4xNjcgMS4xNjd6TTAgNC4xNjdjMCAuNjQxLjUyNSAxLjE2NiAxLjE2NyAxLjE2NmgxOC42NjZjLjY0MiAwIDEuMTY3LS41MjUgMS4xNjctMS4xNjZDMjEgMy41MjUgMjAuNDc1IDMgMTkuODMzIDNIMS4xNjdDLjUyNSAzIDAgMy41MjUgMCA0LjE2N3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkgLTE4KSB0cmFuc2xhdGUoMjc5IDE4KSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},237:function(t,e,n){"use strict";n(145)},238:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,".nav--logo[data-v-6d5c2eb8]{width:78px}@media (min-width: 768px){.nav--logo[data-v-6d5c2eb8]{width:139.5px}}.nav--item[data-v-6d5c2eb8]{display:block;text-transform:uppercase;text-align:center;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));font-weight:600;font-size:16px;padding-top:15.5px;padding-bottom:15.5px}@media (min-width: 768px){.nav--item[data-v-6d5c2eb8]{display:inline-block}.nav--item[data-v-6d5c2eb8]{color:#050505;font-size:20px;padding-top:33.5px;padding-bottom:35px}}.nav--menu-icon[data-v-6d5c2eb8]{display:inline-block;padding-top:18px;padding-bottom:20px}.slide[data-v-6d5c2eb8]{position:fixed;left:0px;right:0px;bottom:0px;z-index:50;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity));--tw-bg-opacity:0.75;top:58px}.slide__menu-divider[data-v-6d5c2eb8]{height:1px;background-color:#ccc}",""]),t.exports=o},239:function(t,e,n){"use strict";n(146)},240:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"img[data-v-dcded5ce]{display:inline-block}",""]),t.exports=o},241:function(t,e,n){t.exports=n.p+"img/ic_language.ce323cf.svg"},242:function(t,e,n){"use strict";n(147)},243:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,".translate[data-v-564d9592]{cursor:pointer;display:inline-flex;align-items:center}@media (min-width: 768px){.translate[data-v-564d9592]{border-radius:9.6px;padding:6px 12px;box-shadow:0 4px 7px 0 rgba(0,0,0,.2)}}.translate__img[data-v-564d9592]{width:18px;height:18px;margin-right:3px}@media (min-width: 768px){.translate__img[data-v-564d9592]{width:22px;height:22px;margin-right:9px}}.translate__text[data-v-564d9592]{font-size:14px;color:#050505}@media (min-width: 768px){.translate__text[data-v-564d9592]{font-size:20px}}",""]),t.exports=o},244:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMSAtNjIzNCkgdHJhbnNsYXRlKDMxIDYyMzQpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTkiIHI9IjE5IiBmaWxsPSIjODQ4NDg0Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yOC42NTEgMTQuNjcyYy0uMjM5LS44ODktLjkzOS0xLjU4OS0xLjgyNy0xLjgyOEMyNS4yIDEyLjQgMTguNzEgMTIuNCAxOC43MSAxMi40cy02LjQ5IDAtOC4xMTMuNDI3Yy0uODcuMjM5LTEuNTg4Ljk1Ni0xLjgyNyAxLjg0NS0uNDI3IDEuNjIyLS40MjcgNC45ODctLjQyNyA0Ljk4N3MwIDMuMzgyLjQyNyA0Ljk4OGMuMjM5Ljg4OC45MzkgMS41ODggMS44MjcgMS44MjcgMS42NC40NDQgOC4xMTQuNDQ0IDguMTE0LjQ0NHM2LjQ5IDAgOC4xMTMtLjQyN2MuODg4LS4yMzkgMS41ODgtLjk0IDEuODI4LTEuODI3LjQyNy0xLjYyMy40MjctNC45ODguNDI3LTQuOTg4cy4wMTctMy4zODItLjQyOC01LjAwNHptLTEyLjAwNyA4LjA5NlYxNi41NWw1LjM5NyAzLjExLTUuMzk3IDMuMTA4eiIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},245:function(t,e,n){t.exports=n.p+"img/ic_footer_insta.63f9205.svg"},246:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDIgLTYyMzQpIHRyYW5zbGF0ZSgxNDIgNjIzNCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiM4NDg0ODQiLz4KICAgICAgICAgICAgICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTS4zNTYuNjc2Qy4xNC45NjMuMDE4IDEuMzE2LjAxOCAxLjY5NHYxNC45NjJjMCAuMzUuMTA1LjY4LjI5NC45NTZsOC4xNC04LjQ5MUwuMzU3LjY3NnpNOS4xOTggOC4zNDNsMi42NC0yLjc1NEwyLjU1Ny4yMjlDMi4xNTMtLjAwNCAxLjY5LS4wNTkgMS4yNTkuMDYybDcuOTM5IDguMjgxek05LjE5OCA5Ljg5OGwtOC4wMiA4LjM2NWMuMTc0LjA1OC4zNTMuMDg3LjUzMi4wODcuMjkgMCAuNTgtLjA3Ni44NDYtLjIzbDkuMzUtNS4zOTgtMi43MDgtMi44MjR6TTE1LjUxMyA3LjcxbC0yLjcxNC0xLjU2N0w5Ljk0MyA5LjEybDIuOTIyIDMuMDQ4IDIuNjQ4LTEuNTI5Yy41My0uMzA2Ljg0Ni0uODU0Ljg0Ni0xLjQ2NSAwLS42MTItLjMxNy0xLjE2LS44NDYtMS40NjV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi41IDkuNSkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},247:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTcgLTYyMzQpIHRyYW5zbGF0ZSgxOTcgNjIzNCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiM4NDg0ODQiLz4KICAgICAgICAgICAgICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuODQ3IDMuMTg4SDkuNlYuMTM1QzkuMjk4LjA5NCA4LjI1OCAwIDcuMDQ3IDAgNC41MiAwIDIuNzg5IDEuNTkgMi43ODkgNC41MTFWNy4ySDB2My40MTNoMi43ODlWMTkuMmgzLjQxOHYtOC41ODZoMi42NzZMOS4zMDggNy4ySDYuMjA3VjQuODVjMC0uOTg3LjI2Ni0xLjY2MiAxLjY0LTEuNjYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQgOSkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},248:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTIgLTYyMzQpIHRyYW5zbGF0ZSgyNTIgNjIzNCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiM4NDg0ODQiLz4KICAgICAgICAgICAgICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjY2OCAxLjc2M0wxOS4yLjMxN1YwaC01LjMwN0wxMC4xMSA5LjI5IDUuODA3IDBILjI0MnYuMzE3bDEuNzkgMi4xMjZjLjE3NC4xNTcuMjY2LjM4Ni4yNDIuNjE4djguMzU1Yy4wNTYuMy0uMDQ0LjYxLS4yNTguODI5TDAgMTQuNjU1di4zMTNoNS43MTZ2LS4zMTZMMy43IDEyLjI0NWMtLjIxOC0uMjItLjMyMi0uNTI0LS4yNzgtLjgzVjQuMTlMOC40NCAxNC45NzJoLjU4M0wxMy4zMzggNC4xOXY4LjU5YzAgLjIyNyAwIC4yNzMtLjE1LjQyMmwtMS41NTMgMS40ODJWMTVoNy41M3YtLjMxN2wtMS40OTYtMS40NDVjLS4xMzEtLjA5OC0uMi0uMjYyLS4xNzEtLjQyMlYyLjE4NGMtLjAyOC0uMTYuMDM5LS4zMjQuMTctLjQyMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkgMTEpIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},249:function(t,e,n){"use strict";n(148)},250:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"footer[data-v-bf0ea834]{background-color:#fff;padding-bottom:155px}@media (min-width: 768px){footer[data-v-bf0ea834]{padding-top:58px;padding-bottom:85.5px;background-color:#f0f0f0}}.footer-sns[data-v-bf0ea834]{display:flex;align-items:center;justify-content:space-around}@media (min-width: 768px){.footer-sns[data-v-bf0ea834]{justify-content:flex-end}.footer-sns__img[data-v-bf0ea834]{margin-left:18px}}.nav--item[data-v-bf0ea834]{display:inline-block;color:#3c3c3c;font-size:12px;font-weight:600;margin-right:14px}@media (min-width: 768px){.nav--item[data-v-bf0ea834]{font-size:16px;margin-right:30.6px}}.footer-content[data-v-bf0ea834]{margin-top:42px}@media (min-width: 768px){.footer-content[data-v-bf0ea834]{margin-top:69px}}.footer--info[data-v-bf0ea834]{color:#979797;font-size:10px;line-height:24px;letter-spacing:0;margin-top:60px}@media (min-width: 768px){.footer--info[data-v-bf0ea834]{font-size:16px}}.footer--info-item[data-v-bf0ea834]{margin-right:14px}@media (min-width: 768px){.footer--info[data-v-bf0ea834]{font-size:16px;line-height:24px}}.info--definition[data-v-bf0ea834]{font-weight:600}.info--description[data-v-bf0ea834]{font-weight:300}.footer--copyright[data-v-bf0ea834]{display:block;color:#979797;margin-top:40px;font-size:10px;font-weight:600}@media (min-width: 768px){.footer--copyright[data-v-bf0ea834]{display:block}.footer--copyright[data-v-bf0ea834]{font-size:16px;margin-top:51px}}",""]),t.exports=o},251:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var o=n(2),r=(n(47),function(){return{}}),c=function(){},l={},d={nuxtServerInit:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.app;case 2:case"end":return t.stop()}}),t)})))()}}},252:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=function(){return{}},r={},c={},l={SEARCH:function(){var t={method:"GET",url:"/v1/plans",params:this.$router.currentRoute.query};return this.$axios(t)}}},253:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));n(48),n(42);var o=function(){return{locales:["en","ko"],locale:"en"}},r={SET_LOCALE:function(t,e){t.locales.includes(e)&&(t.locale=e,this.app.i18n.locale=e)}}},315:function(t){t.exports=JSON.parse('{"hero":{"title":"Spend it like money.","desc":"Making the world that trades mobile data for anything"},"values":{"title1":"Ubiquitous","description1":"Data is already being used for anything, everywhere. Empo helps you spend your mobile data seamlessly wherever you are.","title2":"Essential","description2":"Empo supports your daily life so that you can focus on your work, friends, and family with no worries.","title3":"New standard for mobile data","description3":"Empo is building a culture, in which people share, save, purchase, and exchange mobile data freely in cash beyond simple consumption."},"empoapp":{"title":"A new way to share mobile data","description":"Unused data is helpless and expensive to pay. What if we could sell your unused data? It\'s the first step for the mobile data trade."},"kpi":{"kpi1":{"key":"Downloads","value":"153,450","unit":"","etc":""},"kpi2":{"key":"Total trade volume","value":"56,535,381","unit":"MB","etc":""},"kpi3":{"key":"Service markets","value":"India, Korea, UK, US","unit":"","etc":""},"kpi4":{"key":"Coverage","value":"4.4 miliion","unit":"m²","etc":"as large as 10 Vatican Cities"}},"datascanner":{"title":"Curation for more data, but at a half price","description":"Data plan is the most expensive subscription. For seamless data flow at a half price out of 2,022 data plans. Datascanner is your personal mobile store.","btn":"Go to Datascanner"},"datascannerPlan":{"title":"datascanner has <strong>2,020</strong> data plans","description":"Data plan DB is always up to date for precise curation."},"reviews":{"empoapp1":{"body":"I and my friends have installed this app. it easy to share data .Now the sign ups are quiet easy .for extra data for pubg update i used it and its fantastic","name":"S*lim T Viswanath"},"empoapp2":{"body":"Good app. Better with sharing to data. With this we can earn. Because, network and time with can be counted as a valuable asset.","name":"P*rushottam Batav"},"empoapp3":{"body":"The idea behind the app is really good.😊","name":"I*ternet Wanderer"},"datascanner1":{"body":"Although there is not much interest in the topic of affordable rates in Korea, It was helpful to know the need for the affordable rate plan and it solved my questions about the reasonable plan.","name":"*Young Choi"},"datascanner2":{"body":"The design is well organized. It doesn\'t feel like a telecom commercial. Also, it\'s useful.","name":"*Yeon Kim"},"datascanner3":{"body":"Like a fin-tech company, it seems to provide tremendous confidence in information! It was good to have the necessary information what I needed.","name":"*Jin Jeong"}},"brandStory":{"title":"Night sky is the Empo\'s color.","description":"More about the brand story >"},"bi":{"description":"<strong>Empo</strong> abbreviates an <strong>emporium</strong> meaning a shop or market.<br>The logo represents <strong>a platform that connects people with mobile data trade.</strong>"},"footer":{"about":"About","recruit":"Recruit","termsOfServices":"Terms of Services","privacyPolicy":"Privacy Policy","termsOfLocationBasedServices":"Terms of Location Based Services","customerSupport":"Customer Support","contact":"Contact","notice":"Notice"},"info":[{"definition":"","description":"Empo Inc."},{"definition":"Contact","description":"support@empo.im / 02-6365-3300"},{"definition":"CEO","description":"Jaehyung Lee"},{"definition":"Registration (ROK)","description":"810-88-01030"},{"definition":"Mail-order license (ROK)","description":"2021-서울종로-0249"},{"definition":"Address","description":"Jongno 51, Floor 18 Office 102, Jongno-gu, Seoul, Republic of Korea 03161"}],"terms":{"title":"Terms of Use","content":""}}')},316:function(t){t.exports=JSON.parse('{"hero":{"title":"데이터를 돈처럼 쓰세요.","desc":"데이터로 무엇이든 거래할 수 있는 세상을 만듭니다."},"values":{"title1":"어디서든지","description1":"데이터는 이미 모든 곳에서 쓰이고 있습니다.<br>앰포는 당신의 데이터가 남김없이 소비될 수 있도록 돕습니다.","title2":"필수적인","description2":"앰포는 일상 속에서 당신의 일, 친구, 가족에 온전히 집중할 수 있도록 돕습니다.","title3":"데이터 소비의 새로운 기준","description3":"데이터를 현금처럼 주고 받고, 모으고, 거래할 수 있는 플랫폼을 통해 새로운 데이터 소비문화를 만들고 있습니다."},"empoapp":{"title":"데이터를 공유하는 새로운 방법","description":"돈 주고 산 데이터, 부족할 땐 비싸고 남으면 팔 수도 없습니다. 남은 데이터를 중고 거래한다면? 공유로 시작하는 데이터 소비의 첫 걸음."},"kpi":{"kpi1":{"key":"누적 다운로드 수","value":"153,450","unit":"회"},"kpi2":{"key":"누적 데이터 거래량","value":"56,535,381","unit":"MB"},"kpi3":{"key":"서비스 국가","value":"4개국","etc":"인도, 한국, 영국, 미국"},"kpi4":{"key":"커버리지","value":"4.4 miliion","unit":"m²","etc":"바티칸 도시 면적의 10배"}},"datascanner":{"title":"데이터를 공유하는 새로운 방법","description":"돈 주고 산 데이터, 부족할 땐 비싸고 남으면 팔 수도 없습니다. 남은 데이터를 중고 거래한다면? 공유로 시작하는 데이터 소비의 첫 걸음.","btn":"데이터스캐너 바로가기"},"datascannerPlan":{"title":"데이터스캐너가 수집한 요금제 <strong>2,020</strong>","description":"요금제를 정확하게 추천해 주기 위해 DB를 지속적으로 업데이트하고 있습니다."},"reviews":{"empoapp1":{"body":"아이디어도 좋고 활용도도 좋은 어플인거 같아요!!! 강추!!","name":"이*희"},"empoapp2":{"body":"좋은 아이디어네요.<br>사용자들이 늘어, 전국이 와이파이존처럼 되면 참 좋을 듯 해요. 성공하는 날까지 응원할게요.","name":" 메*세데스"},"empoapp3":{"body":"친구랑 앱 설치하고<br>사용해봤더니 손쉽게 연결이 되네요. 좋아요.","name":"s*ng hejin"},"datascanner1":{"body":"깔끔하게 잘 구성됐다고 생각합니다.  통신사 광고처럼 느껴지지는 않고, 사용에 용이했습니다.","name":"김*연"},"datascanner2":{"body":"\'국내에 알뜰 요금제\'라는 주제에 대해 관심도가 높지 않지만, 홈페이지에서 알뜰 요금제가 필요성을 잘 알려주고  알뜰 요금제에 대한 궁금증을 해결할 수 있도록 도와줘서 좋았습니다.","name":"최*영"},"datascanner3":{"body":"핀테크 회사같이 신뢰감이 엄청 드는 정보를 제공하는것 같습니다! 필요한 정보만 딱 보이게 모아 놓아 좋았습니다.","name":"정*진"}},"brandStory":{"title":"앰포의 브랜드 컬러는 별이 빛나는 밤하늘의 색깔입니다.","description":"앰포 브랜드 스토리 보러가기 >"},"bi":{"description":"<strong>Empo</strong>는 상점, 시장을 의미하는 <strong>Emporium</strong>에서 비롯되었습니다.<br /><br />심볼은 <strong>\'데이터 거래로 사람과 사람을 연결하는 플랫폼\'</strong>을 의미합니다."},"footer":{"about":"회사소개","recruit":"채용정보","termsOfServices":"서비스이용약관","privacyPolicy":"개인정보처리방침","termsOfLocationBasedServices":"위치기반서비스 이용약관","customerSupport":"고객센터","contact":"제휴/광고 문의","notice":"공지사항"},"info":[{"definition":"상호명","description":"앰포 주식회사"},{"definition":"이메일(고객문의)","description":"support@empo.im / 02-6365-3300"},{"definition":"대표이사","description":"이재형"},{"definition":"사업자등록번호","description":"810-88-01030"},{"definition":"통신판매업신고번호","description":"2021-서울종로-0249"},{"definition":"주소","description":"03161 서울특별시 종로구 종로 51, 18층 102호 (종로2가, 종로타워)"}]}')},317:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1}},computed:{NavigationItems:function(){return[{title:"values",href:"/values",target:"_self"},{title:"empo app",href:"https://play.google.com/store/apps/details?id=com.empo.android.empoapp",target:"_blank"},{title:"datascanner",href:"https://www.datascanner.io",target:"_blank"},{title:"story",href:"/story",target:"_self"},{title:"bi",href:"/bi",target:"_self"}]}}},r=(n(237),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"relative"},[o("vue-container",[o("div",{staticClass:"flex justify-between items-center"},[o("a",{attrs:{href:"/"}},[o("vue-logo",{staticClass:"nav--logo"})],1),t._v(" "),o("ul",{staticClass:"hidden md:flex align-middle items-center space-x-20"},[t._l(t.NavigationItems,(function(e){return o("li",{key:e.title},[o("a",{staticClass:"nav--item",attrs:{href:e.href,target:e.target}},[t._v(t._s(e.title))])])})),t._v(" "),o("vue-translate")],2),t._v(" "),o("div",{staticClass:"flex md:hidden items-center space-x-4"},[o("vue-translate"),t._v(" "),o("vue-image",{staticClass:"nav--menu-icon",attrs:{src:n(236)},on:{click:function(e){t.isOpen=!t.isOpen}}})],1)])]),t._v(" "),o("transition",{attrs:{"enter-active-class":"ease-in-out duration-500","enter-class":"bg-opacity-0","enter-to-class":"bg-opacity-75","leave-active-class":"ease-in-out duration-500","leave-class":" bg-opacity-75","leave-to-class":"bg-opacity-0"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"slide"},[o("vue-container",{staticClass:"bg-white",staticStyle:{"padding-bottom":"10.5px"}},[o("ul",t._l(t.NavigationItems,(function(e,i){return o("li",{key:e.title},[i?o("div",{staticClass:"slide__menu-divider"}):t._e(),t._v(" "),o("a",{staticClass:"nav--item",attrs:{href:e.href}},[t._v(t._s(e.title))])])})),0)])],1)])],1)}),[],!1,null,"6d5c2eb8",null);e.default=component.exports;installComponents(component,{VueLogo:n(320).default,VueTranslate:n(318).default,VueImage:n(65).default,VueContainer:n(116).default})},318:function(t,e,n){"use strict";n.r(e);var o={computed:{GetLocale:function(){return this.$store.state.locales.locale.toUpperCase()}},methods:{OnTranslate:function(){switch(this.$store.state.locales.locale){case"ko":this.$store.commit("locales/SET_LOCALE","en");break;case"en":default:this.$store.commit("locales/SET_LOCALE","ko")}}}},r=(n(242),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"translate",on:{click:t.OnTranslate}},[o("vue-image",{staticClass:"translate__img",attrs:{src:n(241)}}),t._v(" "),o("span",{staticClass:"translate__text"},[t._v(t._s(t.GetLocale))])],1)}),[],!1,null,"564d9592",null);e.default=component.exports;installComponents(component,{VueImage:n(65).default})},319:function(t,e,n){"use strict";n.r(e);var o={computed:{NavigationItems:function(){return[{title:this.$t("footer.about"),href:"/about"},{title:this.$t("footer.recruit"),href:"/recruit"},{title:this.$t("footer.termsOfServices"),href:"/terms"},{title:this.$t("footer.privacyPolicy"),href:"/privacy"},{title:this.$t("footer.termsOfLocationBasedServices"),href:"/location_privacy"},{title:this.$t("footer.customerSupport"),href:"/contact"},{title:this.$t("footer.contact"),href:"/sponsored"},{title:this.$t("footer.notice"),href:"/notice"}]}},methods:{InfoItems:function(t){switch(t){case 1:return this.$t("info");case 2:default:return[]}}}},r=(n(249),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("vue-container",[o("div",{staticClass:"footer-sns"},[o("vue-image",{staticClass:"footer-sns__img",attrs:{src:n(244)}}),t._v(" "),o("vue-image",{staticClass:"footer-sns__img",attrs:{src:n(245)}}),t._v(" "),o("vue-image",{staticClass:"footer-sns__img",attrs:{src:n(246)}}),t._v(" "),o("vue-image",{staticClass:"footer-sns__img",attrs:{src:n(247)}}),t._v(" "),o("vue-image",{staticClass:"footer-sns__img",attrs:{src:n(248)}})],1),t._v(" "),o("div",{staticClass:"footer-content"},[o("ul",t._l(t.NavigationItems,(function(e){return o("li",{key:e.title,staticClass:"inline-block"},[o("a",{staticClass:"nav--item",attrs:{href:e.href}},[t._v(t._s(e.title))])])})),0),t._v(" "),o("ul",{staticClass:"footer--info"},t._l(t.InfoItems(1),(function(e){return o("li",{key:e.definition,staticClass:"footer--info-item"},[e.definition?o("span",{staticClass:"info--definition"},[t._v(t._s(e.definition)+" :")]):t._e(),t._v(" "),o("span",[t._v(t._s(e.description))])])})),0),t._v(" "),o("vue-copyright",{staticClass:"footer--copyright"})],1)])],1)}),[],!1,null,"bf0ea834",null);e.default=component.exports;installComponents(component,{VueImage:n(65).default,VueCopyright:n(321).default,VueContainer:n(116).default})},320:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("vue-image",{attrs:{src:"https://empoapp.s3.ap-northeast-2.amazonaws.com/public/symbol_text_logo.svg"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VueImage:n(65).default})},321:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("Copyright © 2021 by Empo, Inc. All rights reserved")])}),[],!1,null,null,null);e.default=component.exports},65:function(t,e,n){"use strict";n.r(e);var o={props:["src","alt"]},r=(n(239),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.src,alt:t.alt},on:{click:function(e){return t.$emit("click")}}})}),[],!1,null,"dcded5ce",null);e.default=component.exports}},[[190,19,3,20]]]);