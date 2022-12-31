"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{4219:function(r,e,t){t.r(e),t.d(e,{default:function(){return Z}});var n,a,o,s,c=t(5861),u=t(9439),i=t(7757),p=t.n(i),f=t(7689),h=t(2791),l=t(7596),d=t(761),w=t(985),g=t(168),v=t(6444),x=v.ZP.ul(n||(n=(0,g.Z)(["\n  padding: 10px 0;\n  text-decoration: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 20px;\n"]))),y=v.ZP.li(a||(a=(0,g.Z)(["\n  padding-top: 30px;\n  padding-left: 80px;\n"]))),m=v.ZP.img(o||(o=(0,g.Z)(["\n  padding-bottom: 10px;\n  width: 500px;\n  border-radius: 5px;\n"]))),b=v.ZP.p(s||(s=(0,g.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),k=t(184),Z=function(){var r=(0,f.UO)().movieId,e=(0,h.useState)([]),t=(0,u.Z)(e,2),n=t[0],a=t[1];if((0,h.useEffect)((function(){function e(){return(e=(0,c.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.zv)(r);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,l.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),n)return(0,k.jsx)(x,{children:n.map((function(r){return(0,k.jsxs)(y,{children:[(0,k.jsx)(m,{src:r.profile_path?"https://image.tmdb.org/t/p/w500"+r.profile_path:w,alt:r.name}),(0,k.jsx)(b,{children:r.name}),(0,k.jsxs)(b,{children:["Character: ",r.character," "]})]},r.id)}))})}},761:function(r,e,t){t.d(e,{NV:function(){return p},TP:function(){return d},UF:function(){return u},tx:function(){return g},zv:function(){return h}});var n=t(5861),a=t(7757),o=t.n(a),s=t(2388),c="53391f0255c4ebe5a2e85a821642826a";function u(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(o().mark((function r(){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/trending/movie/day?api_key=".concat(c));case 3:if(0!==(e=r.sent).data.results.length){r.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return r.abrupt("return",e.data.results);case 9:if(r.prev=9,r.t0=r.catch(0),!r.t0.request&&!r.t0.response){r.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw r.t0;case 16:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function p(r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function r(e){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&include_adult=false"));case 3:if((t=r.sent).data.results.length){r.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return r.abrupt("return",t.data.results);case 10:if(r.prev=10,r.t0=r.catch(0),!r.t0.request&&!r.t0.response){r.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw r.t0;case 17:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function h(r){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function r(e){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 3:if((t=r.sent).data.cast.length){r.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return r.abrupt("return",t.data.cast);case 10:if(r.prev=10,r.t0=r.catch(0),!r.t0.request&&!r.t0.response){r.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw r.t0;case 17:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function d(r){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(o().mark((function r(e){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 3:if(0!==(t=r.sent).data.length){r.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return r.abrupt("return",t.data);case 10:if(r.prev=10,r.t0=r.catch(0),!r.t0.request&&!r.t0.response){r.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw r.t0;case 17:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function g(r){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function r(e){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 3:if((t=r.sent).data.results.length){r.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return r.abrupt("return",t.data.results);case 10:if(r.prev=10,r.t0=r.catch(0),!r.t0.request&&!r.t0.response){r.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw r.t0;case 17:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},985:function(r,e,t){r.exports=t.p+"static/media/poster.4dcb9bf2a4987bbe3077.png"}}]);
//# sourceMappingURL=219.edf118c4.chunk.js.map