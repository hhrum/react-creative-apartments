(this["webpackJsonpreact-creative-apartments"]=this["webpackJsonpreact-creative-apartments"]||[]).push([[0],{10:function(t){t.exports=JSON.parse('{"a":[{"type":"flat","id":1,"attributes":{"title":"3-\u0445 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u041c\u0438\u043d\u0441\u043a\u043e\u0439","rooms":3,"address":{"city":"Tyumen","street":"\u041c\u0438\u043d\u0441\u043a\u0430\u044f","house":"3a","room":"123"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":2,"attributes":{"first_name":"\u0412\u0430\u0441\u0438\u043b\u0438\u0439","last_name":"\u0414\u0440\u043e\u0437\u0434\u043e\u0432","middle_name":"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":2,"attributes":{"title":"1 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u0411\u0430\u0440\u0430\u0431\u0430\u0438\u043d\u0441\u043a\u043e\u0439","rooms":2,"address":{"city":"Tyumen","street":"\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a\u0430\u044f","house":"12","room":"45"},"area":34,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":10,"attributes":{"first_name":"\u041c\u0438\u0445\u0430\u0438\u043b","last_name":"\u0418\u0432\u0430\u043d\u043e\u0432","middle_name":"\u0414\u0435\u043c\u0438\u0434\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":3,"attributes":{"title":"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u041b\u0435\u043d\u0438\u043d\u0430","rooms":4,"address":{"city":"Tyumen","street":"\u041b\u0435\u043d\u0438\u043d\u0430","house":"134","room":"24"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":44,"attributes":{"first_name":"\u0421\u0442\u0435\u043f\u0430\u043d","last_name":"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432","middle_name":"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}}}]}')},20:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),n=a(5),r=a.n(n),c=a(2),l=a(3),d=a(4),o=a(11),u=Object(o.a)({name:"flats",initialState:{flats:[]},reducers:{setFlats:function(t,e){t.flats=e.payload},likeFlat:function(t,e){var a=t.flats.find((function(t){return t.id===e.payload}));a.like=!a.like}}}),f=u.actions,m=f.setFlats,j=f.likeFlat,b=u.reducer,p=(a(20),a(1)),O=function(t){var e=t.flat,a=Object(l.b)();if(e){var s=e.attributes,i=s.title,n=s.rooms,r=s.address,c=s.area,d=s.unit,o=e.relationships.attributes,u=o.first_name,f=o.last_name,m=o.middle_name,b=["flat-like"];return e.like&&b.push("flat-like--active"),Object(p.jsxs)("div",{className:"flat",children:[Object(p.jsxs)("div",{className:"flat__info",children:[Object(p.jsx)("div",{className:"flat__title",children:i}),Object(p.jsxs)("div",{className:"flat__rooms",children:["\u041a\u043e\u043c\u043d\u0430\u0442: ",n," ",Object(p.jsxs)("span",{children:["(",c," ",d,")"]})]}),Object(p.jsxs)("div",{className:"flat__address",children:["\u0410\u0434\u0440\u0435\u0441: \u0443\u043b.",r.street,", \u0434.",r.house,", \u043a\u0432.",r.room]}),Object(p.jsxs)("div",{className:"flat__agent",children:["\u0410\u0433\u0435\u043d\u0442: ",f," ",u," ",m]})]}),Object(p.jsx)("div",{className:"flat__like",children:Object(p.jsx)("div",{className:b.join(" "),onClick:function(t){t.preventDefault(),a(j(e.id))},children:"Like"})})]})}},h=(a(22),function(){var t=Object(l.c)((function(t){return t.flats})).flats;return Object(p.jsx)("div",{className:"flat-list",children:t.map((function(t){return Object(p.jsx)(O,{flat:t},t.id)}))})}),_=(a(23),a(9)),v=a(10);var x=function(){var t=Object(l.b)();return Object(s.useEffect)((function(){t((function(t){t(m(v.a.map((function(t){return Object(_.a)(Object(_.a)({},t),{},{like:!1})}))))}))}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(h,{})})},y=Object(c.b)({flats:b}),k=(a(24),Object(c.d)(y,Object(c.c)(Object(c.a)(d.a))));r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(l.a,{store:k,children:Object(p.jsx)(x,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9926c84e.chunk.js.map