(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Zdt":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return K})),t.d(a,"query",(function(){return J}));var r=t("q1tI"),n=t.n(r),l=t("Zttt"),i=t("rePB"),c=t("wx14"),s=t("zLVn"),o=t("TSYQ"),d=t.n(o),E=t("vUet"),u=t("YdCC"),m=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(c.a)({},a,{ref:t,className:d()(a.className,e)}))}))},f=t("Wzyw"),g=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.variant,i=e.as,o=void 0===i?"img":i,u=Object(s.a)(e,["bsPrefix","className","variant","as"]),m=Object(E.a)(t,"card-img");return n.a.createElement(o,Object(c.a)({ref:a,className:d()(l?m+"-"+l:m,r)},u))}));g.displayName="CardImg",g.defaultProps={variant:null};var b=g,v=m("h5"),A=m("h6"),j=Object(u.a)("card-body"),p=Object(u.a)("card-title",{Component:v}),I=Object(u.a)("card-subtitle",{Component:A}),h=Object(u.a)("card-link",{Component:"a"}),w=Object(u.a)("card-text",{Component:"p"}),O=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),y=Object(u.a)("card-img-overlay"),C=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.bg,o=e.text,u=e.border,m=e.body,g=e.children,b=e.as,v=void 0===b?"div":b,A=Object(s.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(E.a)(t,"card"),I=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return n.a.createElement(f.a.Provider,{value:I},n.a.createElement(v,Object(c.a)({ref:a},A,{className:d()(l,p,i&&"bg-"+i,o&&"text-"+o,u&&"border-"+u)}),m?n.a.createElement(j,null,g):g))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=b,C.Title=p,C.Subtitle=I,C.Body=j,C.Link=h,C.Text=w,C.Header=O,C.Footer=x,C.ImgOverlay=y;var B=C,N=t("Wbzz"),P=t("km0k"),W=t.n(P),S=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,l=e.pill,i=e.className,o=e.as,u=void 0===o?"span":o,m=Object(s.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(E.a)(t,"badge");return n.a.createElement(u,Object(c.a)({ref:a},m,{className:d()(i,f,l&&f+"-pill",r&&f+"-"+r)}))}));S.displayName="Badge",S.defaultProps={pill:!1};var R=S;function L(e){var a=e.tags;return a&&a.length>0?n.a.createElement("div",null,a.map((function(e,a){return n.a.createElement(R,{pill:!0,variant:"secondary",className:"mr-2"},e)}))):n.a.createElement("div",null,n.a.createElement(R,{pill:!0,variant:"secondary"},"Uncategorized"))}function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function q(e){var a=e.title,t=e.style,r=e.slug,l=(e.desc,e.thumbnail),i=e.tags,c=e.date,s=W.a;return null!=l&&(s=l.publicURL),n.a.createElement(B,{style:Y({width:"19rem"},t)},n.a.createElement(B.Img,{variant:"top",src:s}),n.a.createElement(B.Body,null,n.a.createElement(B.Title,{className:"font-weight-bold",style:{minHeight:"50px"}},n.a.createElement(N.a,{to:r},a)),n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement(L,{tags:i}),n.a.createElement("p",{className:"m-0 text-muted",style:{fontSize:"14px",lineHeight:"2"}},c))))}var G=t("dbZe"),Q=n.a.forwardRef((function(e,a){var t=e.active,r=e.disabled,l=e.className,i=e.style,o=e.activeLabel,E=e.children,u=Object(s.a)(e,["active","disabled","className","style","activeLabel","children"]),m=t||r?"span":G.a;return n.a.createElement("li",{ref:a,style:i,className:d()(l,"page-item",{active:t,disabled:r})},n.a.createElement(m,Object(c.a)({className:"page-link",disabled:r},u),E,t&&o&&n.a.createElement("span",{className:"sr-only"},o)))}));Q.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},Q.displayName="PageItem";var V=Q;function z(e,a,t){function r(e){var r=e.children,l=Object(s.a)(e,["children"]);return n.a.createElement(Q,l,n.a.createElement("span",{"aria-hidden":"true"},r||a),n.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),r.displayName=e,r}var D=z("First","«"),F=z("Prev","‹","Previous"),X=z("Ellipsis","…","More"),k=z("Next","›"),Z=z("Last","»"),T=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,i=e.size,o=Object(s.a)(e,["bsPrefix","className","children","size"]),u=Object(E.a)(t,"pagination");return n.a.createElement("ul",Object(c.a)({ref:a},o,{className:d()(r,u,i&&u+"-"+i)}),l)}));T.First=D,T.Prev=F,T.Ellipsis=X,T.Item=V,T.Next=k,T.Last=Z;var H=T;function U(e){var a=e.totalPages,t=e.activePage;return n.a.createElement(H,null,n.a.createElement(H.First,{href:"/blog",disabled:1===t}),n.a.createElement(H.Prev,{href:2===t?"/blog":"/blog/page/"+(parseInt(t)-1),disabled:1===t}),Array.from({length:a}).map((function(e,a){return n.a.createElement(H.Item,{key:++a,href:a>1?"/blog/page/"+a.toString():"/blog",active:a===t},a)})),n.a.createElement(H.Next,{href:"/blog/page/"+(parseInt(t)+1),disabled:t===a}),n.a.createElement(H.Last,{href:"/blog/page/"+a.toString(),disabled:t===a}))}function K(e){var a=e.data,t=Math.ceil(a.allMdx.pageInfo.totalCount/6),r=a.allMdx.pageInfo.currentPage;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:1===r?"Blog":"Blog - Page "+r},n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around justify-content-md-between"},a.allMdx.nodes.map((function(e,a){var t=e.excerpt,r=e.frontmatter,l=e.fields;return n.a.createElement(q,{key:a,slug:l.slug,style:{marginTop:"40px"},title:r.title,desc:t.substring(0,50)+"..",thumbnail:r.thumbnail,tags:r.tags,date:r.date})})),(a.allMdx.nodes.length%2!=0||a.allMdx.nodes.length<3)&&n.a.createElement("div",{style:{width:"19rem"}})),n.a.createElement("div",{className:"d-flex justify-content-center mt-5"},t>1&&n.a.createElement(U,{totalPages:t,activePage:r}))))}var J="3479440966"},TS5P:function(e,a,t){},Wzyw:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createContext(null);n.displayName="CardContext",a.a=n},Zttt:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var r=t("q1tI"),n=t.n(r),l=t("6ctO"),i=t("wx14"),c=t("zLVn"),s=t("TSYQ"),o=t.n(s),d=t("vUet"),E=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.fluid,l=e.as,s=void 0===l?"div":l,E=e.className,u=Object(c.a)(e,["bsPrefix","fluid","as","className"]),m=Object(d.a)(t,"container"),f="string"==typeof r?"-"+r:"-fluid";return n.a.createElement(s,Object(i.a)({ref:a},u,{className:o()(E,r?""+m+f:m)}))}));E.displayName="Container",E.defaultProps={fluid:!1};var u=E,m=(t("TS5P"),t("qhky")),f=t("Xq4P");function g(e){var a=e.children,t=e.title;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,"khoufstudio"," - ",t)),n.a.createElement(l.a,{bg:"dark",sticky:"top",height:"60"},n.a.createElement(u,null,n.a.createElement(l.a.Brand,{href:"/",className:"text-white"},n.a.createElement("img",{alt:"khoufstudio_logo",src:f.b,className:"mr-3",width:"23"}),"khoufstudio - ",n.a.createElement("strong",null,"Blog")))),n.a.createElement(u,{className:"px-3 px-md-0 mb-5 pb-5",style:{minHeight:"800px"}},a),n.a.createElement("footer",{className:"bg-dark",style:{height:"70px"}},n.a.createElement(u,{className:"d-flex justify-content-center align-items-center h-100"},n.a.createElement("p",{className:"text-center m-0 text-white"},"This blog is made using ",n.a.createElement("strong",null,"Gatsby.js")))))}},dbZe:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("q1tI"),i=t.n(l),c=t("Qg85");function s(e){return!e||"#"===e.trim()}var o=i.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"a":t,o=e.disabled,d=e.onKeyDown,E=Object(n.a)(e,["as","disabled","onKeyDown"]),u=function(e){var a=E.href,t=E.onClick;(o||s(a))&&e.preventDefault(),o?e.stopPropagation():t&&t(e)};return s(E.href)&&(E.role=E.role||"button",E.href=E.href||"#"),o&&(E.tabIndex=-1,E["aria-disabled"]=!0),i.a.createElement(l,Object(r.a)({ref:a},E,{onClick:u,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),u(e))}),d)}))}));o.displayName="SafeAnchor",a.a=o},km0k:function(e,a){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-components-browse-blog-posts-index-js-be9a789de4a0658b025f.js.map