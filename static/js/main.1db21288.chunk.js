(this["webpackJsonpprimogem-tool"]=this["webpackJsonpprimogem-tool"]||[]).push([[0],{21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),o=a(8),l=(a(21),a(22),a(6)),i=a(16),j=a(9),u=a(7),b=a(13),m=a(5);var d=function(){var e=Object(n.useState)(parseInt(localStorage.getItem("primos"))||parseInt(0)),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(parseInt(localStorage.getItem("fates"))||parseInt(0)),s=Object(o.a)(r,2),d=s[0],O=s[1],h=Object(n.useState)(parseInt(localStorage.getItem("prevPulls"))||parseInt(0)),p=Object(o.a)(h,2),x=p[0],v=p[1],f=Object(n.useState)(0),g=Object(o.a)(f,2),y=g[0],I=g[1],S=Object(n.useState)(0),C=Object(o.a)(S,2),N=C[0],k=C[1],w=Object(n.useState)(14400),M=Object(o.a)(w,2),P=M[0],A=M[1];Object(n.useEffect)((function(){G(a,d,x)})),Object(n.useEffect)((function(){localStorage.setItem("primos",a),localStorage.setItem("fates",d),localStorage.setItem("prevPulls",x)}),[a,d,x]);var E=function(e){c(e),G(e,d,x)},G=function(e,t,a){var n=e/160+t+a;I(n);var c=Math.floor(n/90);k(c);var r=Math.ceil(160*(90-n%90));A(r)};return Object(m.jsxs)(i.a,{className:"mt-4",children:[Object(m.jsx)(j.a,{className:"justify-content-center",children:Object(m.jsx)(u.a,{lg:6,children:Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(l.a.Group,{className:"mb-3",controlId:"primos-amt",children:[Object(m.jsx)(l.a.Label,{children:"How many Primogems do you have?"}),Object(m.jsx)(l.a.Control,{type:"number",min:0,onChange:function(e){return E(parseInt(e.target.value))},value:0!==a?a:""}),Object(m.jsxs)(j.a,{className:"mt-1",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{variant:"outline-primary",onClick:function(){return E(a+60)},children:"Add Commissions (+60)"})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{className:"float-end",variant:"outline-primary",onClick:function(){return E(a+90)},children:"Add Welkin (+90)"})})]})]}),Object(m.jsxs)(l.a.Group,{className:"mb-3",controlId:"fates-amt",children:[Object(m.jsx)(l.a.Label,{children:"How many Fates do you have?"}),Object(m.jsx)(l.a.Control,{type:"number",min:0,onChange:function(e){return t=parseInt(e.target.value),O(t),void G(a,t,x);var t},value:0!==d?d:""})]}),Object(m.jsxs)(l.a.Group,{className:"mb-3",controlId:"prev-pulls-amt",children:[Object(m.jsx)(l.a.Label,{children:"How many pulls have you already done?"}),Object(m.jsx)(l.a.Control,{type:"number",min:0,onChange:function(e){return t=parseInt(e.target.value),v(t),void G(a,d,t);var t},value:0!==x?x:""})]})]})})}),Object(m.jsx)(j.a,{className:"justify-content-center",children:Object(m.jsxs)(u.a,{lg:6,style:{textAlign:"center"},children:[Object(m.jsxs)("p",{className:"h4 mb-3",children:["Total Pulls on Banner: ",Math.floor(y)]}),Object(m.jsxs)("div",{children:["You can hit hard pity ",N," ",1===N?"time":"times"]}),Object(m.jsxs)("div",{children:["You need ",Object(m.jsx)("span",{style:{color:"#0d6efd"},children:P})," primos to reach your next hard pity"]})]})})]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1db21288.chunk.js.map