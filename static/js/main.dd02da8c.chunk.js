(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports={tasksBlock:"Affairs_tasksBlock__1yDEa",task:"Affairs_task__3yGWZ",priority:"Affairs_priority__3sWkT",low:"Affairs_low__1RrbR",middle:"Affairs_middle__1oKMT",high:"Affairs_high__3bfAG",button:"Affairs_button__3YaQm",active:"Affairs_active__2Quho",buttonX:"Affairs_buttonX__2RlCB"}},,,function(e,t,a){e.exports={message:"Message_message__8WR15",avatar_body:"Message_avatar_body__3Dy2N",box:"Message_box__1UsOy",box1:"Message_box1__2yaFF",message_body:"Message_message_body__jscGe",name_user:"Message_name_user__2Cc3e",text_time:"Message_text_time__3Ho1N",message_text:"Message_message_text__lSwLv",time:"Message_time__HOFTG"}},,function(e,t,a){e.exports={link:"Header_link__1oUIl",active:"Header_active__1dmn0",block:"Header_block__3dX0N",header:"Header_header__1amup"}},,function(e,t,a){e.exports={greeting:"Greeting_greeting__21ydZ",errorMessage:"Greeting_errorMessage__zEoF5",input:"Greeting_input__2kXLu",errorInput:"Greeting_errorInput__2Khas",button:"Greeting_button__24QRF",totalUsers:"Greeting_totalUsers__2owre",spanClass:"Greeting_spanClass__2xqHV"}},,,function(e,t,a){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,t,a){e.exports={button:"SuperButton_button__cV79v",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},function(e,t,a){e.exports={display:"HW1_display__1yg4a"}},function(e,t,a){e.exports={span:"SuperEditableSpan_span__TqnG3"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),c=a.n(s),i=(a(28),a(20)),o=a.n(i),l=a(10),j=a(2),u=a(7),b=a.n(u),d=a(0);var _=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("div",{className:b.a.avatar_body,children:Object(d.jsx)("div",{className:b.a.box,children:Object(d.jsx)("div",{className:b.a.box1,children:Object(d.jsx)("img",{src:e.avatar})})})}),Object(d.jsxs)("div",{className:b.a.message_body,children:[Object(d.jsx)("div",{className:b.a.name_user,children:e.name}),Object(d.jsxs)("div",{className:b.a.text_time,children:[Object(d.jsx)("div",{className:b.a.message_text,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:Object(d.jsx)("span",{children:e.time})})]})]})]})},h=a(21),x=a.n(h),O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Artem",p="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",f="22:00";var v=function(){return Object(d.jsxs)("div",{className:x.a.display,children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(_,{avatar:O,name:m,message:p,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},g=a(3),k=a(4),N=a.n(k),C=a(6),y=a(8),S=a(15),w=a.n(S),A=function(e){var t=e.red,a=e.className,n=Object(y.a)(e,["red","className"]),r="".concat(w.a.button," ").concat(t?w.a.red:""," ").concat(a||w.a.default);return Object(d.jsx)("button",Object(C.a)({className:r},n))};var I=function(e){var t=N.a.priority+" "+N.a[e.affair.priority];return Object(d.jsxs)("div",{className:N.a.tasksBlock,children:[Object(d.jsx)("div",{className:N.a.task,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)(A,{red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X "})]})};var E=function(e){var t=e.data.map((function(t){return Object(d.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a=N.a.button+" "+("all"===e.filter?N.a.active:""),n=N.a.button+" "+("high"===e.filter?N.a.active:""),r=N.a.button+" "+("middle"===e.filter?N.a.active:""),s=N.a.button+" "+("low"===e.filter?N.a.active:"");return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(A,{onClick:function(){e.setFilter("all")},className:a,children:"all "}),Object(d.jsx)(A,{onClick:function(){e.setFilter("high")},className:n,children:"high "}),Object(d.jsx)(A,{onClick:function(){e.setFilter("middle")},className:r,children:"middle "}),Object(d.jsx)(A,{onClick:function(){e.setFilter("low")},className:s,children:"low "})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(F),t=Object(g.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("all"),c=Object(g.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:"high"===t||"low"===t?e.filter((function(e){return"high"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(E,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},B=a(23),M=a(11),U=a.n(M),G=a(14),H=a.n(G),J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(H.a.error," ").concat(i||""),j="".concat(H.a.input," ").concat(s?H.a.errorInput:H.a.superInput," ").concat(c);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),Object(d.jsx)("span",{className:l,children:s})]})},P=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,s=e.totalUsers,c=e.onEnter,i=r?U.a.errorInput:U.a.input;return Object(d.jsxs)("div",{className:U.a.greeting,children:[Object(d.jsx)("div",{children:Object(d.jsx)(J,{value:t,onChange:a,className:i,onKeyPress:c,onBlur:a,error:r,spanClassName:U.a.spanClass})}),Object(d.jsx)(A,{onClick:n,disabled:!t,className:U.a.button,children:"add "}),Object(d.jsx)("div",{className:U.a.totalUsers,children:s})]})},R=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(g.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),l=Object(g.a)(o,2),j=l[0],u=l[1],b=function(){alert("Hello ".concat(c," !")),a(c),i("")},_=t.length;return Object(d.jsx)(P,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):(c&&i(""),u("name is require!"))},addUser:b,error:j,totalUsers:_,onEnter:function(e){"Enter"===e.key&&c?b():"Enter"!==e.key||c||u("name is require!")}})},W=a(32);var X=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(R,{users:a,addUserCallback:function(e){var t={_id:Object(W.a)(),name:e};r([].concat(Object(B.a)(a),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},K=a(18),q=a.n(K),D=a(16),Z=a.n(D),Q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Z.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{className:Z.a.label,children:[Object(d.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:c},s)),r&&Object(d.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var z=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],r=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(g.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(J,{value:a,onChangeText:r,onEnter:c,error:s}),Object(d.jsx)(J,{className:q.a.blue}),Object(d.jsx)(A,{children:"default"}),Object(d.jsx)(A,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(A,{disabled:!0,children:"disabled"}),Object(d.jsx)(Q,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(Q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=a(22),V=a.n(L),Y=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,s=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),c=Object(n.useState)(!1),i=Object(g.a)(c,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,_=j.className,h=Object(y.a)(j,["children","onDoubleClick","className"]),x="".concat(V.a.span," ").concat(_);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(J,Object(C.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()}},s)):Object(d.jsxs)("span",Object(C.a)(Object(C.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},h),{},{children:["\u270e ",u||s.value]}))})};function $(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ee(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Y,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}})}),Object(d.jsx)(A,{onClick:function(){$("editable-span-value",a)},children:"save"}),Object(d.jsx)(A,{onClick:function(){r(ee("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function ae(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(T,{}),Object(d.jsx)(X,{}),Object(d.jsx)(z,{}),Object(d.jsx)(te,{})]})}var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};function re(){return Object(d.jsx)("div",{children:"Junior"})}function se(){return Object(d.jsx)("div",{children:"JuniorPlus"})}var ce="/pre-junior",ie="/junior",oe="/junior-plus";function le(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(ae,{})}),Object(d.jsx)(j.a,{path:ce,element:Object(d.jsx)(ae,{})}),Object(d.jsx)(j.a,{path:ie,element:Object(d.jsx)(re,{})}),Object(d.jsx)(j.a,{path:oe,element:Object(d.jsx)(se,{})}),Object(d.jsx)(j.a,{path:"*",element:Object(d.jsx)(ne,{})})]})})}var je=a(9),ue=a.n(je);var be=function(){return Object(d.jsxs)("div",{className:ue.a.header,children:[Object(d.jsx)(l.b,{className:function(e){return e.isActive?ue.a.active:ue.a.link},to:ce,children:"PRE-JUNIOR"}),Object(d.jsx)(l.b,{className:function(e){return e.isActive?ue.a.active:ue.a.link},to:ie,children:"JUNIOR"}),Object(d.jsx)(l.b,{className:function(e){return e.isActive?ue.a.active:ue.a.link},to:oe,children:"JUNIOR+"}),Object(d.jsx)("div",{className:ue.a.block})]})};var de=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(be,{}),Object(d.jsx)(le,{})]})})};var _e=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(de,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_e,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.dd02da8c.chunk.js.map