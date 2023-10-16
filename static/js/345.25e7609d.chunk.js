"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[345,361],{2606:function(n,e,r){r.d(e,{W:function(){return o}});var t,a,c=r(168),i=r(5706),o=i.Z.div(t||(t=(0,c.Z)(["\n  padding: 0 18px;\n"])));i.Z.section(a||(a=(0,c.Z)(["\n  padding: 50px 0;\n"])))},2361:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});r(2791);var t,a=r(4727),c=r(168),i=r(5706).Z.div(t||(t=(0,c.Z)(["\n  text-align: center;\n"]))),o=r(184),s=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7345:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,c,i,o,s=r(5861),u=r(9439),p=r(4687),d=r.n(p),l=r(2361),x=r(2791),f=r(1087),v=r(7689),h=r(168),g=r(5706),m=(0,g.Z)(f.rU)(t||(t=(0,h.Z)(["\n  position: absolute;\n  display: flex;\n  padding: 10px;\n  margin-bottom: 20px;\n\n  font-weight: bold;\n  text-decoration: none;\n  background-color: yellow;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"]))),b=g.Z.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 30px;\n  padding-top: 40px;\n"]))),j=g.Z.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n"]))),w=g.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  p {\n    font-weight: bold;\n  }\n"]))),Z=r(2606),k=r(184),y=function(n){var e,r,t=n.movie,a=(0,v.TH)(),c=(0,x.useRef)(null!==(e=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),i=t.title,o=t.overview,s=t.genres,u=t.release_date,p=t.vote_average,d=t.poster_path;return t?(0,k.jsxs)(Z.W,{children:[(0,k.jsx)(m,{to:c.current,className:"go-back",children:"Go back"}),(0,k.jsxs)(b,{children:[(0,k.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(d),alt:i}),(0,k.jsxs)(w,{children:[(0,k.jsx)("h2",{children:i}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:o}),(0,k.jsxs)("p",{children:["Release date: ",u]}),(0,k.jsxs)("p",{children:["Rating: ",p]}),(0,k.jsx)("p",{children:"Genres:"}),(0,k.jsx)(j,{children:s&&s.map((function(n){var e=n.id,r=n.name;return(0,k.jsx)("li",{children:r},e)}))})]})]})]}):(0,k.jsx)(l.default,{})},_=g.Z.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  a {\n    display: block;\n    padding: 10px;\n    margin-bottom: 20px;\n\n    font-weight: bold;\n    text-decoration: none;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    &:hover,\n    &:focus {\n      background: yellow;\n    }\n  }\n"]))),C=function(n){var e=n.movie;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{movie:e}),(0,k.jsxs)(_,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]})]})},R=r(4390),S=function(){var n=(0,x.useState)(null),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=(0,x.useState)(!1),c=(0,u.Z)(a,2),i=c[0],o=c[1],p=(0,x.useState)(null),f=(0,u.Z)(p,2),h=f[0],g=f[1],m=(0,v.UO)().movieId;return(0,x.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(e){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,R.TP)(e);case 3:r=n.sent,t(r),o(!0),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),g(!0),o(!0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return n(m),function(){n(m)}}),[m]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("section",{children:(0,k.jsxs)("div",{className:"container",children:[h&&(0,k.jsx)("div",{className:"alert alert-danger",children:"Error"}),i?(0,k.jsx)(C,{movie:r}):(0,k.jsx)(l.default,{})]})}),(0,k.jsx)(x.Suspense,{fallback:(0,k.jsx)(l.default,{}),children:(0,k.jsx)(v.j3,{})})]})}},4390:function(n,e,r){r.d(e,{Jh:function(){return l},TP:function(){return p},XT:function(){return s},gH:function(){return u},iB:function(){return d}});var t=r(5861),a=r(4687),c=r.n(a),i=r(1243),o="https://api.themoviedb.org/3";i.Z.defaults.params={api_key:"0ae1424e97d66787bf898cb471961190"};var s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/trending/all/day"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,i.Z.get("".concat(o,"/search/movie?query=").concat(e,"&page=").concat(r));case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(e,"/credits?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(e,"/reviews?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=345.25e7609d.chunk.js.map