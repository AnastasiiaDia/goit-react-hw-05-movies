"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{2606:function(n,t,r){r.d(t,{W:function(){return i}});var e,a,c=r(168),u=r(5706),i=u.Z.div(e||(e=(0,c.Z)(["\n  padding: 0 18px;\n"])));u.Z.section(a||(a=(0,c.Z)(["\n  padding: 50px 0;\n"])))},2521:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a,c=r(5861),u=r(9439),i=r(4687),s=r.n(i),o=r(2791),p=r(7689),f=r(4390),h=r(168),d=r(5706),l=d.Z.li(e||(e=(0,h.Z)(["\n  width: 198px;\n  height: 408px;\n  text-align: center;\n\n  img {\n    width: 204px;\n    height: 304px;\n    border: 1px solid black;\n  }\n"]))),v=r(184),x=function(n){var t=n.profile_path,r=n.name,e=n.character;return(0,v.jsxs)(l,{children:[t?(0,v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t),alt:e}):(0,v.jsx)("img",{src:"https://via.placeholder.com/200",alt:e}),(0,v.jsx)("h2",{children:r}),(0,v.jsx)("span",{children:e})]})},m=d.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]))),g=function(n){var t=n.cast,r=new Set;return(0,v.jsx)(m,{children:t&&t.map((function(n){var t=n.id,e=n.name,a=n.profile_path,c=n.character;return r.has(t)?null:(r.add(t),(0,v.jsx)(x,{name:e,profile_path:a,character:c},t))}))})},w=r(2606),Z=function(){var n=(0,o.useState)(""),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,o.useState)(!1),i=(0,u.Z)(a,2),h=i[0],d=i[1],l=(0,o.useState)(!1),x=(0,u.Z)(l,2),m=x[0],Z=x[1],k=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(t){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.iB)(t);case 3:r=n.sent,a=r.cast,e(a),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),Z(!0),d(!1);case 13:return n.prev=13,d(!0),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,8,13,16]])})));return function(t){return n.apply(this,arguments)}}();n(k)}),[k]),(0,v.jsx)(w.W,{children:(0,v.jsxs)("div",{children:[h&&(0,v.jsx)(g,{cast:r}),m&&(0,v.jsx)("h1",{children:"Error"})]})})}},4390:function(n,t,r){r.d(t,{Jh:function(){return h},TP:function(){return p},XT:function(){return s},gH:function(){return o},iB:function(){return f}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),i="https://api.themoviedb.org/3";u.Z.defaults.params={api_key:"0ae1424e97d66787bf898cb471961190"};var s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/all/day"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,u.Z.get("".concat(i,"/search/movie?query=").concat(t,"&page=").concat(r));case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=521.92e0e042.chunk.js.map