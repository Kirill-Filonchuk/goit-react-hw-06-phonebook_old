(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ContactForm_form__2dbli",btnForm:"ContactForm_btnForm__G1NC-"}},16:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(2),u=n(3),s=n(15),l=n(13),b="contacts/Add",m="contacts/Delete",d="contacts/FilterContacts",j=n(16),f=Object(u.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(l.a)(j),t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case b:return[].concat(Object(l.a)(e),[r]);case m:return e.filter((function(e){return e.id!==r}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case d:return r;default:return e}}}),p=Object(u.combineReducers)({contacts:f}),v=Object(u.createStore)(p,Object(s.composeWithDevTools)()),h=(n(26),n(27),n(14)),O=n(17),C=n.n(O),x=function(e){var t=e.name,n=e.number;return{type:b,payload:{id:C.a.generate(),name:t,number:n}}},g=function(e){return{type:m,payload:e}},y=function(e){return{type:d,payload:e}},_=n(12),w=n.n(_),F=n(1);var N=Object(i.b)((function(e){return console.log("state",e),{value:e.contacts}}),(function(e){return{formSubmitHandler:function(t){return e(x(t))},HaHa:function(){return e()}}}))((function(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),o=n[0],a=n[1],c=Object(r.useState)(""),i=Object(h.a)(c,2),u=i[0],s=i[1],l=function(e){var t=e.currentTarget,n=t.name,r=t.value;"name"!==n?"number"===n&&s(r):a(r)};console.log("props.value.items",e.value.items),console.log("props",e);var b=function(){a(""),s("")};return Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=o.toLowerCase();if(e.value.items.some((function(e){return e.name.toLowerCase()==="".concat(n)})))return alert("".concat(o," is already in contacts")),void b();e.formSubmitHandler({name:o,number:u}),b()},className:w.a.form,children:["Name",Object(F.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:l}),"Number",Object(F.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:l}),Object(F.jsx)("button",{type:"submit",className:w.a.btnForm,children:"Add contact"})]})})),S=Object(i.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(y(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(F.jsxs)("label",{children:["Find contacts by name",Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",value:t,onChange:n})]})})),A=n(8),D=n.n(A),L=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},k=Object(i.b)((function(e){var t=e.contacts,n=t.items,r=t.filter;return{visibleContact:L(n,r)}}),(function(e){return{onDeleteCont:function(t){return e(g(t))}}}))((function(e){var t=e.visibleContact,n=e.onDeleteCont;return Object(F.jsx)("ul",{className:D.a.list,children:t.map((function(e){var t=e.id,r=e.name,o=e.number;return Object(F.jsxs)("li",{className:D.a.item,children:[r,":",Object(F.jsx)("span",{children:o}),Object(F.jsx)("button",{type:"button",onClick:function(){return n(t)},className:D.a.btnForm,children:"Delete"})]},t)}))})}));var H=function(){return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(N,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(S,{}),Object(F.jsx)(k,{})]})};console.log(v),c.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(i.a,{store:v,children:Object(F.jsx)(H,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={list:"ContactList_list__3DP4l",item:"ContactList_item__26220",btnForm:"ContactList_btnForm__gvvb8"}}},[[37,1,2]]]);
//# sourceMappingURL=main.fb660ac8.chunk.js.map