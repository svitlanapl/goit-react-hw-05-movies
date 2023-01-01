"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1806:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n,a,o=t(5861),s=t(9439),u=t(7757),c=t.n(u),i=t(7689),p=t(2791),f=t(7596),h=t(761),l=t(168),w=t(6444),d=w.ZP.h2(n||(n=(0,l.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  padding-left: 100px;\n"]))),v=w.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n  padding-left: 100px;\n"]))),y=t(184),x=function(){var e=(0,i.UO)().movieId,r=(0,p.useState)([]),t=(0,s.Z)(r,2),n=t[0],a=t[1];if((0,p.useEffect)((function(){function r(){return(r=(0,o.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,h.tx)(e);case 3:t=r.sent,a(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,f.Am)(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),n)return(0,y.jsxs)("div",{children:[0===n.length&&(0,y.jsx)("p",{children:"Sorry, no reviews were found for this movie."}),(0,y.jsx)("ul",{children:n.map((function(e){return(0,y.jsxs)("li",{children:[(0,y.jsxs)(d,{children:["Author: ",e.author]}),(0,y.jsxs)(v,{children:[" ",e.content," "]})]},e.id)}))})]})}},761:function(e,r,t){t.d(r,{NV:function(){return p},TP:function(){return w},UF:function(){return c},tx:function(){return v},zv:function(){return h}});var n=t(5861),a=t(7757),o=t.n(a),s=t(2388),u="53391f0255c4ebe5a2e85a821642826a";function c(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(u));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=806.e3c8ecf8.chunk.js.map