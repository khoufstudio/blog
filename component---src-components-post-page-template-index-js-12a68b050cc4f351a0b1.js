(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+CA7":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return a}));var r=n("q1tI"),o=n.n(r),i=n("A2+M"),s=n("Zttt"),u=(n("ORnI"),{pre:n("wbTk").a}),a="352615912";e.default=function(t){var e=t.data.mdx,n=e.frontmatter,r=e.body,a=n.title;return o.a.createElement(s.a,{title:a},o.a.createElement("div",{className:"mt-4"}),o.a.createElement("h1",null,n.title),o.a.createElement("p",{className:"font-weight-lighter"},n.date),o.a.createElement(i.MDXRenderer,{components:u},r))}},"4M6O":function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,s=function(){r=null,n||t.apply(o,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(s,e),u&&t.apply(o,i)}},e.isReactElement=s,e.shallowComparison=function t(e,n){var r,i=new Set(Object.keys(e).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof e[r]){if(t(e[r],n[r]))return!0}else if(e[r]!==n[r]&&!s(e[r]))return!0})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function s(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},ORnI:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VUT9"));e.Disqus=o.default;var i=r(n("qASQ"));e.CommentCount=i.default;var s=r(n("vAJ3"));e.CommentEmbed=s.default;var u=o.default;e.default=u},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||s()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},VUT9:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),u=r(n("q1tI")),a=r(n("17x9")),c=n("4M6O"),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="khoufstudio",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var e=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);e.parentNode.removeChild(e)}},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return u.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},e}(u.default.Component);e.default=d,d.propTypes={config:a.default.shape({identifier:a.default.string,title:a.default.string,url:a.default.string,language:a.default.string,remoteAuthS3:a.default.string,apiKey:a.default.string})}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),s=n("8OQS");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n("q1tI"),d=n("7ljp").mdx,l=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=s(t,["scope","children"]),u=l(e),f=c.useMemo((function(){if(!n)return null;var t=a({React:c,mdx:d},u),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return c.createElement(f,a({},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qASQ:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),u=r(n("q1tI")),a=r(n("17x9")),c=n("4M6O"),d=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="khoufstudio",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,r=(0,i.default)(t,["config","placeholder"]);return u.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},e}(u.default.Component);e.default=l,l.defaultProps={placeholder:"..."},l.propTypes={config:a.default.shape({identifier:a.default.string,title:a.default.string,url:a.default.string}),placeholder:a.default.string}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function i(e,n,s){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},vAJ3:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),s=r(n("17x9")),u=function(t){function e(){return t.apply(this,arguments)||this}(0,o.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(i.default.Component);e.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}}}]);
//# sourceMappingURL=component---src-components-post-page-template-index-js-12a68b050cc4f351a0b1.js.map