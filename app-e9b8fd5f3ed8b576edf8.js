webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n,o){"use strict";function t(e,n,o){var t=r.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function s(e,n,o){return r.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=s;var r=[{plugin:o("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,n,o){"use strict";var t;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o("./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"component---src-templates-project-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-project-js!./src/templates/project.js"),"component---src-pages-index-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},n.json=(t={"layout-index.json":o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"offline-plugin-app-shell-fallback.json":o("./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json")},t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["regularizing-gradient-domain.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---regularizing-gradient-domain!./.cache/json/regularizing-gradient-domain.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["bscthesis.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---bscthesis!./.cache/json/bscthesis.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t),n.layouts={"component---src-layouts-index-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},u=o("./node_modules/react/react.js"),l=t(u),c=o("./node_modules/prop-types/index.js"),d=t(c),p=o("./.cache/loader.js"),f=t(p),m=o("./.cache/emitter.js"),h=t(m),g=function(e){var n=e.children;return l.default.createElement("div",null,n())},j=function(e){function n(o){s(this,n);var t=r(this,e.call(this));return t.state={location:o.location,pageResources:f.default.getResourcesForPathname(o.location.pathname)},t}return a(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=f.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):f.default.getResourcesForPathname(e.location.pathname,function(o){n.setState({location:e.location,pageResources:o})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath)))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,u.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,u.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(l.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/mitt/dist/mitt.js"),r=t(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,n,o){"use strict";var t=o("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=o.slice(n.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby-module-loader/index.js?name=path---bscthesis!./.cache/json/bscthesis.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xc0d1382031d4,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/bscthesis.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xbf4c176e203a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---regularizing-gradient-domain!./.cache/json/regularizing-gradient-domain.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(19619765350615,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/regularizing-gradient-domain.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x67ef26645b2a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-stage-0/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/react/react.js"),r=(t(s),o("./.cache/find-page.js")),a=t(r),i=o("./.cache/emitter.js"),u=t(i),l=void 0,c={},d={},p={},f={},m={},h=[],g=[],j={},b=[],y={},v=function(e){return e&&e.default||e},_=void 0,x=!0;_=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){b=b.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var w=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},R=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},P=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){o(null,f[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(n,t){f[e]=t,o(n,t)})}},D=function(e,o){m[e]?n.nextTick(function(){o(null,m[e])}):P(e,function(n,t){if(n)o(n);else{var s=v(t());m[e]=s,o(n,s)}})},k=1,E={empty:function(){g=[],j={},y={},b=[],h=[]},addPagesArray:function(e){h=e;var n="";l=(0,a.default)(e,n)},addDevRequires:function(e){c=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,E.has(e)||g.unshift(e),g.sort(R);var o=l(e);return o.jsonName&&(y[o.jsonName]?y[o.jsonName]+=1+n:y[o.jsonName]=1+n,b.indexOf(o.jsonName)!==-1||f[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(y[o.componentChunkName]?y[o.componentChunkName]+=1+n:y[o.componentChunkName]=1+n,b.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(w),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return l(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(l(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var s;if(o){if(t>=n.length)break;s=n[t++]}else{if(t=n.next(),t.done)break;s=t.value}var r=s;r.unregister()}window.location.reload()})),x=!1;var t=l(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,p[e])return n.nextTick(function(){o(p[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:p[e]})}),p[e];u.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,a=void 0,i=function(){if(s&&r&&(!t.layoutComponentChunkName||a)){p[e]={component:s,json:r,layout:a};var n={component:s,json:r,layout:a};o(n),u.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return D(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),s=n,i()}),D(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),r=n,i()}),void(t.layoutComponentChunkName&&D(t.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+t.path+" failed"),a=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=E}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-project-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"regularizing-gradient-domain.json",path:"/regularizing-gradient-domain"},{componentChunkName:"component---src-templates-project-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bscthesis.json",path:"/bscthesis"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],s=[],r=function(){var e=n();e&&(s.push(e),o(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r=o("./.cache/api-runner-browser.js"),a=o("./node_modules/react/react.js"),i=t(a),u=o("./node_modules/react-dom/index.js"),l=t(u),c=o("./node_modules/react-router-dom/index.js"),d=o("./node_modules/react-router-scroll/lib/index.js"),p=o("./node_modules/history/createBrowserHistory.js"),f=t(p),m=o("./node_modules/domready/ready.js"),h=t(m),g=o("./.cache/emitter.js"),j=t(g),b=o("./.cache/pages.json"),y=t(b),v=o("./.cache/component-renderer.js"),_=t(v),x=o("./.cache/async-requires.js"),w=t(x),R=o("./.cache/loader.js"),P=t(R);o("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,P.default.addPagesArray(y.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=c.matchPath,(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var o=n.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var t=function(e){function n(t){t.page.path===P.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);P.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=t;var u=(0,f.default)();(0,r.apiRunner)("onRouteUpdate",{location:u.location,action:u.action});var p=(0,r.apiRunner)("replaceRouterComponent",{history:u})[0],m=function(e){var n=e.children;return i.default.createElement(c.Router,{history:u},n)};P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(p?p:m,null,(0,a.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,a.createElement)((0,c.withRouter)(_.default),{layout:!0,children:function(n){return(0,a.createElement)(c.Route,{render:function(o){e(o.history);var t=n?n:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(_.default,s({page:!0},t)):(0,a.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,h.default)(function(){return l.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./.cache/emitter.js"),r=t(s),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,s="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(s,e=function(){for(o.removeEventListener(s,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),s=o.e,r=o.s;o.e=function(t,a){var i=!1,u=!0,l=function(e){a&&(a(o,e),a=null)};return!r&&n&&n[t]?void l(!0):(s(t,function(){i||(i=!0,u?setTimeout(function(){l()}):l())}),void(i||(u=!1,e(function(){i||(i=!0,r?r[t]=void 0:(n||(n={}),n[t]=!0),l(!0))}))))}}t()},"./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(99219681209289,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,r=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,l=u&&u(Object);e.exports=function e(n,c,d){if("string"!=typeof c){if(l){var p=u(c);p&&p!==l&&e(n,p,d)}var f=r(c);a&&(f=f.concat(a(c)));for(var m=0;m<f.length;++m){var h=f[m];if(!(o[h]||t[h]||d&&d[h])){var g=i(c,h);try{s(n,h,g)}catch(e){}}}return n}return n}},"./node_modules/mitt/dist/mitt.js":function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(c===setTimeout)return setTimeout(e,0);if((c===o||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function a(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=s(a);h=!0;for(var n=m.length;n;){for(f=m,m=[];++g<n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,r(e)}}function u(e,n){this.fun=e,this.array=n}function l(){}var c,d,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:o}catch(e){c=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var f,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new u(e,n)),1!==m.length||h||s(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(35783957827783,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-stage-0/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-project-js!./src/templates/project.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x645317542b3b,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-stage-0/lib/index.js","/Users/vicini/Documents/PhD/code/websitepersonal/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/project.js')})})}}});
//# sourceMappingURL=app-e9b8fd5f3ed8b576edf8.js.map