(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2W6z":function(e,t,a){"use strict";var r=function(){};e.exports=r},K9S6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function r(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,a);null!=t&&(n=t)}})),n}return(0,l.default)(r)};var r,n=a("pvIh"),l=(r=n)&&r.__esModule?r:{default:r};e.exports=t.default},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a("q1tI"),n=a.n(r),l=(a("Zttt"),a("6ctO")),c=a("wx14"),i=a("zLVn"),o=a("TSYQ"),s=a.n(o),u=(a("K9S6"),a("y8DL")),f=a("vUet"),d=a("qUpC"),v=a("Wzyw"),b=Function.prototype.bind.call(Function.prototype.call,[].slice);var m=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var y=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var a=m(e),r=m(t);return function(e){a&&a(e),r&&r(e)}}(e,t)}),[e,t])},p=n.a.createContext(null);p.displayName="NavContext";var h=p,j=a("ILyh"),x=n.a.createContext(null),w=function(){},O=n.a.forwardRef((function(e,t){var a,l,o=e.as,s=void 0===o?"ul":o,u=e.onSelect,f=e.activeKey,d=e.role,v=e.onKeyDown,m=Object(i.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),p=Object(r.useReducer)((function(e){return!e}),!1)[1],O=Object(r.useRef)(!1),N=Object(r.useContext)(j.a),g=Object(r.useContext)(x);g&&(d=d||"tablist",f=g.activeKey,a=g.getControlledId,l=g.getControllerId);var E=Object(r.useRef)(null),k=function(e){var t=E.current;if(!t)return null;var a,r=(a="[data-rb-event-key]:not(.disabled)",b(t.querySelectorAll(a))),n=t.querySelector(".active");if(!n)return null;var l=r.indexOf(n);if(-1===l)return null;var c=l+e;return c>=r.length&&(c=0),c<0&&(c=r.length-1),r[c]},C=function(e,t){null!=e&&(u&&u(e,t),N&&N(e,t))};Object(r.useEffect)((function(){if(E.current&&O.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var K=y(t,E);return n.a.createElement(j.a.Provider,{value:C},n.a.createElement(h.Provider,{value:{role:d,activeKey:Object(j.b)(f),getControlledId:a||w,getControllerId:l||w}},n.a.createElement(s,Object(c.a)({},m,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=k(-1);break;case"ArrowRight":case"ArrowDown":t=k(1);break;default:return}t&&(e.preventDefault(),C(t.dataset.rbEventKey,e),O.current=!0,p())},ref:K,role:d}))))})),N=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.children,o=e.as,u=void 0===o?"div":o,d=Object(i.a)(e,["bsPrefix","className","children","as"]);return a=Object(f.a)(a,"nav-item"),n.a.createElement(u,Object(c.a)({},d,{ref:t,className:s()(r,a)}),l)}));N.displayName="NavItem";var g=N,E=a("dbZe"),k=a("ZCiN"),C=(a("2W6z"),n.a.forwardRef((function(e,t){var a=e.active,l=e.className,o=e.eventKey,u=e.onSelect,f=e.onClick,d=e.as,v=Object(i.a)(e,["active","className","eventKey","onSelect","onClick","as"]),b=Object(j.b)(o,v.href),m=Object(r.useContext)(j.a),y=Object(r.useContext)(h),p=a;if(y){v.role||"tablist"!==y.role||(v.role="tab");var x=y.getControllerId(b),w=y.getControlledId(b);v["data-rb-event-key"]=b,v.id=x||v.id,v["aria-controls"]=w||v["aria-controls"],p=null==a&&null!=b?y.activeKey===b:a}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=p);var O=Object(k.a)((function(e){f&&f(e),null!=b&&(u&&u(b,e),m&&m(b,e))}));return n.a.createElement(d,Object(c.a)({},v,{ref:t,onClick:O,className:s()(l,p&&"active")}))})));C.defaultProps={disabled:!1};var K=C,P={disabled:!1,as:E.a},I=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.disabled,l=e.className,o=e.href,u=e.eventKey,d=e.onSelect,v=e.as,b=Object(i.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(f.a)(a,"nav-link"),n.a.createElement(K,Object(c.a)({},b,{href:o,ref:t,eventKey:u,as:v,disabled:r,onSelect:d,className:s()(l,a,r&&"disabled")}))}));I.displayName="NavLink",I.defaultProps=P;var S=I,R=n.a.forwardRef((function(e,t){var a,l,o,b=Object(u.a)(e,{activeKey:"onSelect"}),m=b.as,y=void 0===m?"div":m,p=b.bsPrefix,h=b.variant,j=b.fill,x=b.justify,w=b.navbar,N=b.className,g=b.children,E=b.activeKey,k=Object(i.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),C=Object(f.a)(p,"nav"),K=!1,P=Object(r.useContext)(d.a),I=Object(r.useContext)(v.a);return P?(l=P.bsPrefix,K=null==w||w):I&&(o=I.cardHeaderBsPrefix),n.a.createElement(O,Object(c.a)({as:y,ref:t,activeKey:E,className:s()(N,(a={},a[C]=!K,a[l+"-nav"]=K,a[o+"-"+h]=!!o,a[C+"-"+h]=!!h,a[C+"-fill"]=j,a[C+"-justified"]=x,a))},k),g)}));R.displayName="Nav",R.defaultProps={justify:!1,fill:!1},R.Item=g,R.Link=S;var q=R,D=a("cWnB"),z=a("qhky"),A=a("Xq4P");function L(){return n.a.createElement("div",{className:"bg-dark",style:{height:"100vh"}},n.a.createElement(z.b,null,n.a.createElement("title",null,"khoufstudio")),n.a.createElement(l.a,{bg:"dark",variant:"dark"},n.a.createElement(l.a.Brand,{href:"#home"},n.a.createElement("img",{alt:"",src:A.b,width:"30",height:"30",className:"d-inline-block align-top"})," ",n.a.createElement("strong",null,"khoufstudio")),n.a.createElement(q,{className:"ml-auto"},n.a.createElement(q.Link,{href:"/blog"},"Blog"))),n.a.createElement("div",{className:"d-flex text-white mt-5"},n.a.createElement("img",{alt:"",src:A.a,className:"mx-4 px-4",style:{width:"600px"}}),n.a.createElement("div",{className:"text-justify mx-5 px-5"},n.a.createElement("h2",{className:"mb-4"},"Who are we?"),n.a.createElement("p",{style:{fontSize:"20px"}},n.a.createElement("strong",null,"khoufstudio")," is a software house company that helps people to create a great application. We can create Web, Mobile and Desktop Apps. Let's gets start making the good product with us!"),n.a.createElement(D.a,{className:"btn btn-light"},n.a.createElement("strong",null,"Contact Us")))),n.a.createElement("p",{className:"text-center text-white w-100",style:{position:"absolute",bottom:0}},"Copyright ",n.a.createElement("strong",null,"2021")))}},Wzyw:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r).a.createContext(null);n.displayName="CardContext",t.a=n},cWnB:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),c=a.n(l),i=a("q1tI"),o=a.n(i),s=a("vUet"),u=a("dbZe"),f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,i=e.size,f=e.active,d=e.className,v=e.block,b=e.type,m=e.as,y=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(s.a)(a,"btn"),h=c()(d,p,f&&"active",l&&p+"-"+l,v&&p+"-block",i&&p+"-"+i);if(y.href)return o.a.createElement(u.a,Object(r.a)({},y,{as:m,ref:t,className:c()(h,y.disabled&&"disabled")}));t&&(y.ref=t),b?y.type=b:m||(y.type="button");var j=m||"button";return o.a.createElement(j,Object(r.a)({},y,{className:h}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},dbZe:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("q1tI"),c=a.n(l),i=a("Qg85");function o(e){return!e||"#"===e.trim()}var s=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"a":a,s=e.disabled,u=e.onKeyDown,f=Object(n.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,a=f.onClick;(s||o(t))&&e.preventDefault(),s?e.stopPropagation():a&&a(e)};return o(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),c.a.createElement(l,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(i.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},pvIh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,r,n,l,c){var i=n||"<<anonymous>>",o=c||r;if(null==a[r])return t?new Error("Required "+l+" `"+o+"` was not specified in `"+i+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[a,r,i,l,o].concat(u))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-a8ae181d39f3a2937aa4.js.map