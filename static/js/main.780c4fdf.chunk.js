(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),m=(a(22),a(7)),o=a(5);function i(e){var t=e.match,a=e.tabs,n=a.find(function(e){return e.id===t.params.currentTabId});return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"nav nav-tabs"},a.map(function(e){return c.a.createElement(m.b,{key:e.id,activeClassName:"active",className:"nav-link text-dark",to:"/tabs/".concat(e.id)},e.title)})),c.a.createElement("p",null,n&&n.content))}function s(e){var t=e.tabs,a=e.match;return c.a.createElement(i,{tabs:t,match:a})}var u=function(){return c.a.createElement("h1",null,"Home page")},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(e){var t=e.match;return c.a.createElement(s,{tabs:b,match:t})},d=function(){return c.a.createElement(m.a,null,c.a.createElement("h1",null,"Tabs with router"),c.a.createElement("nav",{className:"nav nav-tabs"},c.a.createElement(m.b,{to:"/",exact:!0,activeClassName:"active",className:"nav-link text-dark"},"Home Page"),c.a.createElement(m.b,{to:"/tabs",activeClassName:"active",className:"nav-link text-dark"},"Tabs Page")),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:u}),c.a.createElement(o.a,{path:"/tabs/:currentTabId?",component:v})))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.780c4fdf.chunk.js.map