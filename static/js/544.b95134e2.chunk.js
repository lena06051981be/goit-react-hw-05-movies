"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{4672:function(n,t,e){e.d(t,{Z:function(){return h}});var r,o,a,i,s=e(168),p=e(7691),c=e(1087),u=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  justify-content: center;\n  gap: 20px;\n  padding: 20px 0;\n  background-color: #fff;\n"]))),l=p.ZP.li(o||(o=(0,s.Z)(["\n    margin: 0 auto;\n    border: 1px solid lightgray;\n    width: 280px;\n  border-radius: 13px;\n  transition: box-shadow 250ms ease-in-out, border 150ms ease-in-out,transform 250ms ease-in-out ;\n  :hover{\n    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);\n    transform: scale(1.05);\n  }\n    > a {\n        text-overflow: clip;\n    text-decoration: none;\n  }\n"]))),d=(0,p.ZP)(c.rU)(a||(a=(0,s.Z)(["\n    object-fit: cover;\n    overflow: hidden;\n    width: 280px;  \n    display: flex;\n    flex-direction:column;\n    border-radius: 13px;\n    color:black;\n    > span {\n    padding-left: 10px;\n    padding-bottom: 3px;\n  }    \n"]))),f=p.ZP.img(i||(i=(0,s.Z)(["\n    width: 280px;\n    height: 420px;\n    margin-bottom:10px;\n    object-fit: cover;\n    overflow: hidden;\n"]))),x=e(7689),g=e(184),h=function(n){var t=n.Movies,e=(0,x.TH)();return(0,g.jsx)(u,{children:t.length>0&&t.map((function(n){return(0,g.jsx)(l,{children:(0,g.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,g.jsx)(f,{src:null===n.poster_path?"https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found":"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:n.title}),(0,g.jsxs)("span",{children:[" ",n.title]})]})},n.id)}))})}},9593:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o,a=e(168),i=e(5669),s=e(7691),p=s.ZP.div(r||(r=(0,a.Z)(["\n   display:flex;\n   justify-content:center;\n"]))),c=(0,s.ZP)(i.Z)(o||(o=(0,a.Z)(["\n    margin-top:30px;\n    margin-bottom:30px;\n"]))),u=e(184),l=function(n){var t=n.page,e=n.onChange,r=n.total_pages;return(0,u.jsx)(p,{children:(0,u.jsx)(c,{count:r,size:"large",page:t,variant:"outlined",shape:"rounded",onChange:e})})}},9544:function(n,t,e){e.r(t);var r=e(3433),o=e(5861),a=e(9439),i=e(4687),s=e.n(i),p=e(2791),c=e(9593),u=e(4672),l=e(7947),d=e(184);t.default=function(){var n=(0,p.useState)(1),t=(0,a.Z)(n,2),e=t[0],i=t[1],f=(0,p.useState)(2),x=(0,a.Z)(f,2),g=x[0],h=x[1],m=(0,p.useState)(!1),v=(0,a.Z)(m,2),Z=v[0],b=v[1],j=(0,p.useState)([]),_=(0,a.Z)(j,2),w=_[0],k=_[1];(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.z5)(e);case 3:if(t=n.sent,k((function(){return(0,r.Z)(t.results)})),h(t.total_pages),console.log(g),0!==t.results.length){n.next=9;break}return n.abrupt("return");case 9:0!==t.total_pages&&b(!0),0===t.total_pages&&b(!1),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e,g]);var y=function(n,t){i(t)};return(0,d.jsxs)(d.Fragment,{children:[Z&&(0,d.jsx)(c.Z,{page:e,total_pages:g,onChange:y}),(0,d.jsx)(u.Z,{Movies:w}),Z&&(0,d.jsx)(c.Z,{page:e,total_pages:g,onChange:y})]})}}}]);
//# sourceMappingURL=544.b95134e2.chunk.js.map