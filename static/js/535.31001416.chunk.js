"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[535],{3174:function(n,t,e){e.d(t,{Z:function(){return y}});e(2791);var r,a,i,u,c,s,o=e(7689),p=e(1087),d=e(3301),f=e(168),l=e(7924),h=l.ZP.ul(r||(r=(0,f.Z)(["\n  display: grid;\n  max-width: calc(100vw - 100px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=l.ZP.li(a||(a=(0,f.Z)(["\n  border-radius: 10px;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n  }\n"]))),v=l.ZP.div(i||(i=(0,f.Z)(["\n  border-radius: 10px;\n  justify-content: center;\n  align-items: center;\n  > img {\n    object-fit: cover;\n  }\n"]))),g=l.ZP.div(u||(u=(0,f.Z)(["\n  font-size: 18px;\n  padding: 10px;\n  overflow: hidden;\n"]))),x=l.ZP.h2(c||(c=(0,f.Z)(["\n  font-size: 18px;\n  padding-top: 10px 10px;\n  overflow: hidden;\n  margin-bottom: 10px;\n"]))),Z=l.ZP.img(s||(s=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  height: auto;\n  object-fit: cover;\n"]))),w=e(184);var y=function(n){var t=n.movies,e=(0,o.TH)();return(0,w.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,i=n.poster_path,u=n.original_title,c=n.vote_average,s=n.release_date;return(0,w.jsx)(p.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(Z,{src:i?"https://image.tmdb.org/t/p/w500"+i:d,alt:r||a})}),(0,w.jsxs)(g,{children:[(0,w.jsxs)(x,{children:[u||r||a,s?" (".concat(s.slice(0,4),")"):""]}),(0,w.jsxs)("p",{children:["Raiting:"," ",c?"".concat(Math.round(10*c),"%"):"-"]})]})]})},t)}))})}},2535:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(9439),i=e(2791),u=e(273),c=e(3174),s=e(168),o=e(7924).ZP.h1(r||(r=(0,s.Z)(["\n  margin-bottom: 20px;\n"]))),p=e(184),d=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,i.useEffect)((function(){(0,u.Df)().then(r)}),[]),(0,p.jsxs)("section",{children:[(0,p.jsx)(o,{children:"Trending today"}),(0,p.jsx)(c.Z,{movies:e})]})}},273:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},jP:function(){return v},q:function(){return f},zv:function(){return h}});var r=e(5861),a=e(4687),i=e.n(a),u=e(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="a56a1677bac2a6664dd2ad898620a49c";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{params:{api_key:c,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3301:function(n,t,e){n.exports=e.p+"static/media/default-image.817773d85d8896811e22.png"}}]);
//# sourceMappingURL=535.31001416.chunk.js.map