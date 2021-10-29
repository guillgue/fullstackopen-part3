(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r=n(16),u=n.n(r),o=n(7),c=n(3),i=n(1),a=n(4),l=n.n(a),d="/api/persons",s={getAll:function(){return l.a.get(d).then((function(e){return e.data}))},create:function(e){return l.a.post(d,e).then((function(e){return e.data}))},update:function(e,t){return l.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},del:function(e){return l.a.delete("".concat(d,"/").concat(e))}},m=n(0),b=function(e){var t=e.value,n=e.handleChange;return Object(m.jsxs)("div",{children:["filter shown with\xa0",Object(m.jsx)("input",{value:t,onChange:n})]})},f=function(e){var t=e.name,n=e.number,r=e.handleName,u=e.handleNumber,o=e.handleSubmit;return Object(m.jsxs)("form",{onSubmit:o,children:[Object(m.jsxs)("div",{children:["name:\xa0",Object(m.jsx)("input",{value:t,onChange:r})]}),Object(m.jsxs)("div",{children:["number:\xa0",Object(m.jsx)("input",{value:n,onChange:u})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.person,n=e.handleDelete;return Object(m.jsxs)("div",{children:[t.name," ",t.number,"\xa0",Object(m.jsx)("button",{onClick:n,children:"delete"})]})},h=function(e){var t=e.personList,n=e.handleDelete;return Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)(j,{person:e,handleDelete:function(){return n(e.id)}},e.id)}))})},v=function(e){var t=e.message;if(null===t)return null;var n={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return t.error&&(n.color="red"),Object(m.jsx)("div",{style:n,children:t.text})},O=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],u=Object(i.useState)(""),a=Object(c.a)(u,2),l=a[0],d=a[1],j=Object(i.useState)(""),O=Object(c.a)(j,2),x=O[0],p=O[1],g=Object(i.useState)(""),D=Object(c.a)(g,2),w=D[0],I=D[1],T=Object(i.useState)(null),S=Object(c.a)(T,2),k=S[0],y=S[1],C=""===w?n:n.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(i.useEffect)((function(){s.getAll().then((function(e){r(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(v,{message:k}),Object(m.jsx)(b,{value:w,handleChange:function(e){I(e.target.value)}}),Object(m.jsx)("h3",{children:"add a new"}),Object(m.jsx)(f,{name:l,number:x,handleName:function(e){d(e.target.value)},handleNumber:function(e){p(e.target.value)},handleSubmit:function(e){e.preventDefault();var t=n.find((function(e){return e.name===l}));if(void 0!==t&&window.confirm(t.name+" is already in the phonebook, replace the old number with a new one ?")){var u=Object(o.a)(Object(o.a)({},t),{},{number:x});s.update(t.id,u).then((function(e){r(n.map((function(n){return n.id!==t.id?n:e}))),d(""),p(""),null!==k&&clearTimeout(k.timeoutID);var u=setTimeout((function(){y(null)}),5e3);y({timeoutID:u,text:"Updated ".concat(e.name),error:!1})})).catch((function(){null!==k&&clearTimeout(k.timeoutID);var e=setTimeout((function(){y(null)}),5e3);y({timeoutID:e,text:"".concat(u.name," was already deleted from server"),error:!0}),r(n.filter((function(e){return e.id!==u.id})))}))}else if(void 0===t){var c={name:l,number:x};s.create(c).then((function(e){r(n.concat(e)),d(""),p(""),null!==k&&clearTimeout(k.timeoutID);var t=setTimeout((function(){y(null)}),5e3);y({timeoutID:t,text:"Added ".concat(e.name),error:!1})})).catch((function(e){null!==k&&clearTimeout(k.timeoutID);var t=setTimeout((function(){y(null)}),5e3);y({timeoutID:t,text:e.response.data.error,error:!0})}))}}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(h,{personList:C,handleDelete:function(e){var t=n.find((function(t){return t.id===e})).name;s.del(e).then((function(){r(n.filter((function(t){return t.id!==e}))),null!==k&&clearTimeout(k.timeoutID);var u=setTimeout((function(){y(null)}),5e3);y({timeoutID:u,text:"deleted ".concat(t),error:!1})})).catch((function(){null!==k&&clearTimeout(k.timeoutID);var u=setTimeout((function(){y(null)}),5e3);y({timeoutID:u,text:"".concat(t," was already deleted from server"),error:!0}),r(n.filter((function(t){return t.id!==e})))}))}})]})};u.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.87c8bb65.chunk.js.map