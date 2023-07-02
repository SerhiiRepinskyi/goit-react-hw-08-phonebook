"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{3974:function(n,e,t){t.r(e),t.d(e,{default:function(){return Cn}});var r,o,i,a,c,s,p,x,d,l,u,f,h,b,g,m,Z,j,w,v,y,k,P,z,C,S,A=t(2791),L=t(9434),E=t(6052),I=t(3433),N=t(6916),T=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},q=function(n){return n.contacts.error},_=function(n){return n.filter},K=(0,N.P1)([function(n){return(0,I.Z)(n.contacts.items).sort((function(n,e){return n.name.localeCompare(e.name)}))},_],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),B=t(9439),D=t(8174),J=t(8617),M=t(168),G=t(6444),Q=G.ZP.form(r||(r=(0,M.Z)(["\n  display: flex;\n  gap: 25px;\n  flex-direction: column;\n  padding: 30px;\n\n  border: 1px solid #62ada0;\n  border-radius: 6px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n"]))),R=G.ZP.input(o||(o=(0,M.Z)(["\n  width: 300px;\n  font-size: 14px;\n  padding: 4px;\n"]))),X=G.ZP.label(i||(i=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n\n  font-size: 16px;\n  font-weight: 500;\n"]))),Y=G.ZP.button(a||(a=(0,M.Z)(["\n  cursor: pointer;\n\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n  margin-top: 6px;\n\n  width: 100%;\n  max-width: 140px;\n  height: 30px;\n  padding: 2px 5px;\n\n  color: #fff;\n  background-color: #62ada0;\n  font-size: 14px;\n  font-weight: 700;\n\n  border: none;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #010101;\n    background-color: #c8e9e3;\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px,\n      rgba(0, 0, 0, 0.24) 2px 2px 5px;\n  }\n"]))),$=t(3329),H=function(){var n=(0,A.useState)(""),e=(0,B.Z)(n,2),t=e[0],r=e[1],o=(0,A.useState)(""),i=(0,B.Z)(o,2),a=i[0],c=i[1],s=(0,L.I0)(),p=(0,L.v9)(T),x=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":c(o)}},d=function(){r(""),c("")};return(0,$.jsxs)(Q,{onSubmit:function(n){if(n.preventDefault(),p.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return D.Am.error("".concat(t," is already in contacts."));var e={name:t,number:a};s((0,E.uK)(e)),d()},children:[(0,$.jsxs)(X,{children:["Name:",(0,$.jsx)(R,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:x})]}),(0,$.jsxs)(X,{children:["Number:",(0,$.jsx)(R,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:x})]}),(0,$.jsxs)(Y,{type:"submit",children:[(0,$.jsx)(J.J6z,{}),"Add contact"]})]})},O=t(4164),U=G.ZP.div(c||(c=(0,M.Z)(["\n  // z-index: 999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),V=G.ZP.div(s||(s=(0,M.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 180px;\n  max-width: 320px;\n  width: 100%;\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),W=document.querySelector("#modal-root"),nn=function(n){var e=n.children,t=n.onClose;(0,A.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,O.createPortal)((0,$.jsx)(U,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,$.jsx)(V,{children:e})}),W)},en=t(6355),tn=t(8820),rn=G.ZP.ul(p||(p=(0,M.Z)(["\n  max-width: 100%;\n  width: 720px;\n\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),on=G.ZP.li(x||(x=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: #f4efef;\n  padding: 2px 16px;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.01);\n  }\n"]))),an=G.ZP.span(d||(d=(0,M.Z)(["\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  align-items: center;\n"]))),cn=G.ZP.div(l||(l=(0,M.Z)(["\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n  align-items: center;\n"]))),sn=G.ZP.button(u||(u=(0,M.Z)(["\n  cursor: pointer;\n\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n\n  width: 75px;\n  height: 26px;\n  padding: 2px 8px;\n\n  color: #fff;\n  background-color: #62ada0;\n  font-size: 14px;\n  font-weight: 500;\n\n  border: none;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 5px 0px;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #010101;\n    background-color: #c8e9e3;\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px,\n      rgba(0, 0, 0, 0.24) 2px 2px 5px;\n  }\n"]))),pn=G.ZP.h2(f||(f=(0,M.Z)(["\n  text-align: center;\n  padding-bottom: 20px;\n"]))),xn=G.ZP.form(h||(h=(0,M.Z)(["\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n"]))),dn=G.ZP.input(b||(b=(0,M.Z)(["\n  width: 225px;\n  font-size: 14px;\n  padding: 4px;\n"]))),ln=G.ZP.label(g||(g=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n"]))),un=G.ZP.div(m||(m=(0,M.Z)(["\n  margin-top: 6px;\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n"]))),fn=G.ZP.button(Z||(Z=(0,M.Z)(["\n  cursor: pointer;\n\n  width: 80px;\n  height: 30px;\n  padding: 2px 5px;\n\n  color: #fff;\n  background-color: #62ada0;\n  font-size: 14px;\n  font-weight: 700;\n\n  border: none;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #010101;\n    background-color: #c8e9e3;\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px,\n      rgba(0, 0, 0, 0.24) 2px 2px 5px;\n  }\n"]))),hn=function(){var n=(0,A.useState)(""),e=(0,B.Z)(n,2),t=e[0],r=e[1],o=(0,A.useState)(""),i=(0,B.Z)(o,2),a=i[0],c=i[1],s=(0,A.useState)(null),p=(0,B.Z)(s,2),x=p[0],d=p[1],l=(0,A.useState)(!1),u=(0,B.Z)(l,2),f=u[0],h=u[1],b=(0,L.I0)(),g=(0,L.v9)(K),m=function(){h(!1)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(rn,{children:[g.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,$.jsxs)(on,{children:[(0,$.jsxs)(an,{children:[(0,$.jsx)(en.Xws,{color:"#c8e9e3"})," ",t,":"]}),(0,$.jsxs)(an,{children:[(0,$.jsx)(en.I7T,{color:"#c8e9e3"})," ",o]}),(0,$.jsxs)(cn,{children:[(0,$.jsxs)(sn,{type:"button",onClick:function(){return function(n,e,t){c(e),r(n),d(t),h(!0)}(t,o,e)},children:[(0,$.jsx)(tn.QML,{}),"Edit"]}),(0,$.jsxs)(sn,{type:"button",onClick:function(){return n=e,void b((0,E.GK)(n));var n},children:[(0,$.jsx)(tn.YK6,{}),"Delete"]})]})]},e)})),!(null!==g&&void 0!==g&&g.length)&&(0,$.jsx)("div",{children:"No contacts found."})]}),f&&(0,$.jsxs)(nn,{onClose:m,children:[(0,$.jsx)(pn,{children:"Edit this contact"}),(0,$.jsxs)(xn,{children:[(0,$.jsxs)(ln,{children:["Name:",(0,$.jsx)(dn,{type:"text",name:"name",value:t,onChange:function(n){r(n.target.value)}})]}),(0,$.jsxs)(ln,{children:["Number:",(0,$.jsx)(dn,{type:"tel",name:"number",value:a,onChange:function(n){c(n.target.value)}})]}),(0,$.jsxs)(un,{children:[(0,$.jsx)(fn,{type:"button",onClick:function(){h(!1),b((0,E.Tk)({id:x,name:t,number:a}))},children:"Save"}),(0,$.jsx)(fn,{type:"button",onClick:m,children:"Cancel"})]})]})]})]})},bn=t(4808),gn=G.ZP.div(j||(j=(0,M.Z)([""]))),mn=G.ZP.label(w||(w=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n"]))),Zn=G.ZP.input(v||(v=(0,M.Z)(["\n  width: 250px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  padding: 4px;\n"]))),jn=function(){var n=(0,L.I0)(),e=(0,L.v9)(_);return(0,$.jsx)(gn,{children:(0,$.jsxs)(mn,{children:["Find contacts by name",(0,$.jsx)(Zn,{type:"text",placeholder:"Search...",value:e,onChange:function(e){var t=e.currentTarget.value.trim();n((0,bn.T)(t))}})]})})},wn=(t(5462),G.ZP.section(y||(y=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  font-size: 16px;\n"])))),vn=G.ZP.h1(k||(k=(0,M.Z)(["\n  margin: 30px 0 20px;\n"]))),yn=G.ZP.h2(P||(P=(0,M.Z)(["\n  margin: 30px 0 20px;\n"]))),kn=G.ZP.div(z||(z=(0,M.Z)(["\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),Pn=G.ZP.span(C||(C=(0,M.Z)(["\n  padding: 2px 8px;\n  background-color: #f4efef;\n"]))),zn=G.ZP.p(S||(S=(0,M.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  padding: 40px 60px;\n  background-color: #f4efef;\n"]))),Cn=function(){var n=(0,L.I0)(),e=(0,L.v9)(T),t=(0,L.v9)(q),r=(0,L.v9)(F);return(0,A.useEffect)((function(){n((0,E.yF)())}),[n]),(0,$.jsxs)(wn,{children:[(0,$.jsx)(vn,{children:"PhoneBook"}),(0,$.jsx)(H,{}),(0,$.jsx)(yn,{children:"Contacts"}),(0,$.jsxs)(kn,{children:["All contacts in the phonebook:"," ",(0,$.jsx)(Pn,{children:e.length})]}),e.length>0?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(jn,{}),(0,$.jsx)(hn,{})]}):(0,$.jsx)(zn,{children:"Contact list is empty"}),r&&!t&&(0,$.jsx)("b",{children:"Request in progress..."}),t&&t,(0,$.jsx)(D.Ix,{autoClose:2e3,position:"top-center",theme:"colored"})]})}}}]);
//# sourceMappingURL=974.f11b6648.chunk.js.map