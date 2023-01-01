"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[94],{5094:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n,a,o,s,i,c,u,p,l=t(5861),h=t(9439),f=t(7757),d=t.n(f),x=t(1087),v=t(7689),w=t(9128),g=t(168),m=t(6444),y=(0,m.ZP)(x.rU)(n||(n=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-left: 100px;\n  :hover {\n    color: teal;\n    font-weight: bold;\n  }\n"]))),b=t(184),k=function(e){var r=e.back,t=e.children;return(0,b.jsxs)(y,{to:r,children:[(0,b.jsx)(w.jTe,{size:"22"}),t]})},Z=t(2791),j=t(7596),_=t(985),S=t(761),q=t(8033),E=m.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 40px;\n  padding-left: 100px;\n"]))),P=m.ZP.img(o||(o=(0,g.Z)(["\n  width: 700px;\n  border-radius: 5px;\n"]))),U=m.ZP.h2(s||(s=(0,g.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),z=m.ZP.p(i||(i=(0,g.Z)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n"]))),T=m.ZP.h3(c||(c=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),C=m.ZP.div(u||(u=(0,g.Z)(["\n  padding: 40px 0 40px 100px;\n  border-bottom: solid teal;\n"]))),A=m.ZP.li(p||(p=(0,g.Z)(["\n  padding-bottom: 10px;\n  font-size: 20px;\n\n  :hover {\n    text-decoration: underline;\n    color: teal;\n    font-weight: bold;\n  }\n"]))),F=function(){var e,r,t=null!==(e=null===(r=(0,v.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",n=(0,v.UO)().movieId,a=(0,Z.useState)([]),o=(0,h.Z)(a,2),s=o[0],i=o[1];return(0,Z.useEffect)((function(){function e(){return(e=(0,l.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,S.TP)(n);case 3:r=e.sent,i(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,j.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,b.jsxs)("main",{children:[(0,b.jsx)(k,{to:t,children:"Go back"}),(0,b.jsxs)(E,{children:[(0,b.jsx)(P,{src:s.poster_path?"https://image.tmdb.org/t/p/w400"+s.poster_path:_,alt:s.title||s.name}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(U,{children:[s.title," (",s.release_date?s.release_date.slice(0,4):" No year",")"]}),(0,b.jsxs)(z,{children:["User Score:"," ",s.vote_average?Math.floor(10*s.vote_average).toFixed(0):"","%"]}),(0,b.jsx)(T,{children:" Overview"}),(0,b.jsx)(z,{children:s.overview}),(0,b.jsx)(T,{children:"Genres"}),(0,b.jsx)(z,{children:s.genres?s.genres.map((function(e){return e.name})).join(" "):"Sorry genre not found."})]})]}),(0,b.jsxs)(C,{children:[(0,b.jsx)(U,{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)(A,{children:(0,b.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)(A,{children:(0,b.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(Z.Suspense,{fallback:(0,b.jsx)(q.a,{}),children:(0,b.jsx)(v.j3,{})})]})}},761:function(e,r,t){t.d(r,{NV:function(){return p},TP:function(){return d},UF:function(){return c},tx:function(){return v},zv:function(){return h}});var n=t(5861),a=t(7757),o=t.n(a),s=t(2388),i="53391f0255c4ebe5a2e85a821642826a";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(i));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},985:function(e,r,t){e.exports=t.p+"static/media/poster.4dcb9bf2a4987bbe3077.png"}}]);
//# sourceMappingURL=94.1029c5b9.chunk.js.map