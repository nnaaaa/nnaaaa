(this.webpackJsonpgame_puzzlee=this.webpackJsonpgame_puzzlee||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(15),r=n.n(o),a=(n(23),n(17)),l=n(2),s=(n(24),n(8)),u=n.p+"static/media/nobita.7f03c8a1.jpg",d=n.p+"static/media/doremon.5b7f91f8.jpg",h=n.p+"static/media/thanhphuong.f70d2b96.jpg",b=n.p+"static/media/luffy.b6f186f5.jpg",j=n.p+"static/media/sunFlower.0dec8add.jpg",f=n.p+"static/media/aurelionSol.cdc0da19.png",x=n(1),p=Object(c.createContext)();function g(e){var t=e.children,n=[{url:u},{url:d},{url:h},{url:f},{url:b},{url:j}],i=100*Math.floor((window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight)/100),o=Object(c.useState)(),r=Object(s.a)(o,2),a=r[0],l=r[1],g=Object(c.useState)([]),v=Object(s.a)(g,2),O=v[0],m=v[1],y=Object(c.useState)(50),k=Object(s.a)(y,2),w=k[0],z=k[1],C=Object(c.useState)({x:i-w,y:0}),P=Object(s.a)(C,2),S=P[0],I=P[1];return Object(c.useEffect)((function(){for(var e=0,t=[],n=0;n<i;n+=w){for(var c=[],o=0;o<i;o+=w)c.push({x:o,y:n,position:{x:o,y:n},id:e++});t.push(c)}var r=[];e=0;for(var a=0;a<t.length;++a){for(var l=[],s=0;s<t.length;++s)l.push({x:s,y:a,position:{x:s,y:a},id:e++});r.push(l)}for(var u=[],d=0;d<e;++d)u.push(d);for(var h=0,b=0,j=function(){for(var n=void 0,c=!0;c;)n=Math.floor(Math.random()*e),u.forEach((function(e){e==n&&(c=!1)}));u=u.filter((function(e){return e!=n})),t.forEach((function(e){e.forEach((function(e){e.id==n&&(r[h][b].x=e.x,r[h][b].y=e.y,r[h][b].position={x:b*w,y:h*w},r[h][b].id=n)}))})),b==t.length-1?(h<t.length&&h++,b=0):b++,u=u.filter((function(e){return e!=n}))};0!=u.length;)j();m(r)}),[w]),Object(x.jsx)(p.Provider,{value:{image:n,screenOfUser:i,activePic:a,setActivePic:l,puzzle:O,setPuzzle:m,level:w,setLevel:z,blank:S,setBlank:I},children:t})}n(26);var v=n(16),O=n.n(v);n(28),n(29);function m(){var e=Object(c.useContext)(p),t=e.setLevel,n=e.setBlank,i=e.screenOfUser;return Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsx)("button",{onClick:function(){document.getElementById("background").style.left="0"},children:"Ch\u1ecdn h\xecnh"}),Object(x.jsx)("span",{children:Object(x.jsx)(O.a,{placeholder:"Ch\u1ecdn \u0111\u1ed9 kh\xf3",options:[{label:"D\u1ec5",value:100},{label:"Th\u01b0\u1eddng",value:50},{label:"Kh\xf3",value:25},{label:"R\u1ea5t kh\xf3",value:10}],onChange:function(e){return function(e){t(e),n({x:i-e,y:0})}(e.value)}})})]})}function y(){var e=Object(c.useContext)(p),t=e.screenOfUser,n=e.activePic,i=e.puzzle,o=e.setPuzzle,r=e.level,a=(e.setLevel,e.blank),l=e.setBlank,u=Object(c.useState)(!1),d=Object(s.a)(u,2),h=d[0],b=d[1];function j(e,n,c,s){e=Math.floor(e/r),n=Math.floor(n/r);for(var u=new Array(i.length),d=0;d<i.length;++d)u[d]=i[d].slice(0);var h=a;u[s][c].position=h,l({x:e*r,y:n*r}),o(u),function(){for(var e=document.querySelectorAll(".piece"),n=1,c=0;c<(2*t-r)/r;++c){var i=e[c].style.backgroundPosition.split("px").join("").split("-").join("").split(" "),o=e[c].style.left.split("px").join("").split(" "),a=e[c].style.top.split("px").join("").split(" ");i[0]==o[0]&&i[1]==a[0]&&n++}console.log(n,Math.floor((2*t-r)/r),r,t),n==Math.floor((2*t-r)/r)&&console.log("win")}()}return Object(x.jsxs)("div",{id:"start",children:[Object(x.jsx)(m,{}),Object(x.jsx)("div",{style:{height:t,width:t,boxShadow:"0 0 10px rgba(0,0,0,0.7)",position:"relative",background:"linear-gradient(315deg,#4dff03,#00d0ff)"},id:"board",children:i.map((function(e,c){return Object(x.jsx)("div",{children:e.map((function(e,o){return o==i.length-1&&0==c?"":Object(x.jsx)("div",{style:{height:"".concat(r,"px"),width:"".concat(r,"px"),backgroundImage:'url("'.concat(n,'")'),backgroundPosition:"-".concat(e.x,"px -").concat(e.y,"px"),backgroundSize:"".concat(t,"px"),boxShadow:"0 0 10px rgba(0,0,0,0.7)",boxSizing:"border-box",position:"absolute",top:"".concat(e.position.y,"px"),left:"".concat(e.position.x,"px")},onClick:function(){return function(e,t,n,c){(e+r==a.x&&t==a.y||e-r==a.x&&t==a.y||e==a.x&&t+r==a.y||e==a.x&&t-r==a.y)&&j(e,t,n,c)}(e.position.x,e.position.y,o,c)},className:"piece"},"".concat(c).concat(o))}))})}))}),Object(x.jsx)("div",{style:{position:"absolute",height:t,width:t,background:"linear-gradient(315deg,#4dff03,#00d0ff)",zIndex:"-1",backgroundImage:'url("'.concat(n,'")'),backgroundSize:"".concat(t,"px")},id:"rootPic"}),Object(x.jsx)("button",{style:{position:"absolute",bottom:"2rem"},onClick:function(e){return function(e){0==h?(document.getElementById("rootPic").style.zIndex="0",e.target.innerText="Ch\u01a1i ti\u1ebfp",b(!0)):(document.getElementById("rootPic").style.zIndex="-1",e.target.innerText="Xem \u1ea3nh g\u1ed1c",b(!1))}(e)},children:"Xem \u1ea3nh g\u1ed1c"})]})}n(30);function k(){return Object(x.jsx)("div",{})}function w(){console.log("home");var e=Object(c.useContext)(p),t=e.image,n=e.activePic,i=e.setActivePic;function o(e,t){i(e),function(e){document.querySelectorAll(".active").forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active")}(t)}return Object(x.jsxs)("div",{id:"background",children:[Object(x.jsxs)("div",{id:"home",children:[Object(x.jsx)("h1",{children:"Puzzle Game"}),Object(x.jsx)("h3",{children:"Ch\u1ecdn h\xecnh"}),Object(x.jsx)("div",{id:"home__picture",children:t.map((function(e,t){return Object(x.jsx)("div",{style:{width:"100px",height:"100px",backgroundImage:"url(".concat(e.url,")"),backgroundSize:"cover",backgroundPosition:"center center",marginBottom:"1rem"},onClick:function(t){return o(e.url,t)},className:"picture"},t)}))}),Object(x.jsx)("button",{id:"home__play",onClick:function(e){n&&(document.getElementById("background").style.left="-100%")},href:"/start",children:"Ch\u01a1i"})]}),Object(x.jsx)("div",{id:"win",children:"Win"}),Object(x.jsx)(y,{}),Object(x.jsx)(k,{})]})}n(31);var z=function(){return Object(x.jsx)(g,{children:Object(x.jsx)(a.a,{children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.a,{exact:!0,from:"/",to:"/home"}),Object(x.jsx)(l.b,{path:"/home",children:Object(x.jsx)(w,{})}),Object(x.jsx)(l.b,{exact:!0,path:"/start",children:Object(x.jsx)(y,{})})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.41b97b24.chunk.js.map