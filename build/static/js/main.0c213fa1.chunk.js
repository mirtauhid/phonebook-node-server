(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(14),c=t.n(o),a=t(3),s=t(0),d=function(e){var n=e.setSearch;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:function(e){return n(e.target.value)}})]})},i=function(e){var n=e.addName,t=e.setNewName,r=e.setNewNumber;return Object(s.jsxs)("form",{onSubmit:function(e){return n(e)},children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:function(e){return t(e.target.value)}})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:function(e){return r(e.target.value)}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},u=function(e){var n=e.person,t=e.remove;return Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[n.name," - ",n.number," ",Object(s.jsx)("span",{children:Object(s.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&t(e.id)}(n)},children:"delete"})})]})})},b=function(e){var n=e.data,t=e.remove;return Object(s.jsx)("div",{children:n.map((function(e,n){return Object(s.jsx)(u,{person:e,remove:t},n)}))})},l=t(4),j=t.n(l),p="/api",g=function(){return j.a.get("".concat(p,"/persons"))},x=function(e){return j.a.post("".concat(p,"/persons"),e)},m=function(e){return j.a.delete("".concat(p,"/persons/").concat(e))},h=function(e){return j.a.put("".concat(p,"/persons/").concat(e))},f=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),u=Object(a.a)(c,2),l=u[0],j=u[1],p=Object(r.useState)(""),f=Object(a.a)(p,2),O=f[0],v=f[1],y=Object(r.useState)(""),k=Object(a.a)(y,2),C=k[0],w=k[1],N=Object(r.useState)(""),S=Object(a.a)(N,2),R=S[0],E=S[1],M=Object(r.useState)(""),B=Object(a.a)(M,2),I=B[0],T=B[1];Object(r.useEffect)((function(){g().then((function(e){if(""!==C){var n=e.data.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));o(n)}else o(e.data),console.log(e.data)}))}),[C]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(d,{setSearch:w}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)("div",{id:"successMessage",children:Object(s.jsx)("h3",{children:R})}),Object(s.jsx)("div",{id:"errorMessage",children:Object(s.jsx)("h3",{children:I})}),Object(s.jsx)(i,{addName:function(e){e.preventDefault();var n=t.find((function(e){return e.name===l}));n?h(n.id).then((function(e){E("Updated ".concat(e.data.name," successfully"));var n=document.getElementById("successMessage").style;n.border="3px solid green",n.color="green",n.backgroundColor="lightgrey",n.padding="0px 20px",n.margin="10px",n.borderRadius="8px",setTimeout((function(){E(""),n.border="none",n.color="none",n.backgroundColor="none",n.margin="0px",n.padding="0px",n.borderRadius="0px"}),5e3)})).catch((function(e){T(e.message);var n=document.getElementById("errorMessage").style;n.border="3px solid red",n.color="red",n.backgroundColor="lightgrey",n.padding="0px 20px",n.margin="10px",n.borderRadius="8px",setTimeout((function(){E(""),n.border="none",n.color="none",n.backgroundColor="none",n.margin="0px",n.padding="0px",n.borderRadius="0px",n.display="none"}),5e3)})):x({name:l,number:O}).then((function(e){E("Added ".concat(e.data.name," successfully"));var n=document.getElementById("successMessage").style;n.border="3px solid green",n.color="green",n.backgroundColor="lightgrey",n.padding="0px 20px",n.margin="10px",n.borderRadius="8px",setTimeout((function(){E(""),n.border="none",n.color="none",n.backgroundColor="none",n.margin="0px",n.padding="0px",n.borderRadius="0px"}),5e3)})).catch((function(e){T(e.message);var n=document.getElementById("errorMessage").style;n.border="3px solid red",n.color="red",n.backgroundColor="lightgrey",n.padding="0px 20px",n.margin="10px",n.borderRadius="8px",setTimeout((function(){E(""),n.border="none",n.color="none",n.backgroundColor="none",n.margin="0px",n.padding="0px",n.borderRadius="0px",n.display="none"}),5e3)}))},setNewName:j,setNewNumber:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(b,{data:t,remove:function(e){m(e).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e.message)}))}})]})};t(38);c.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0c213fa1.chunk.js.map