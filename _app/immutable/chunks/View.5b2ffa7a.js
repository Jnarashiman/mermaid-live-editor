import{S as st,i as rt,s as at,a as lt,k as T,c as ut,l as _,m as k,h as b,n as C,M as N,b as E,H as q,I as W,G as H,o as ht,a2 as ct,w as X,q as D,r as I,a3 as pt,e as F,a4 as ft}from"./index.787ce9b5.js";import{h as j,s as Y,j as K,B as mt,y as J,x as dt,b as vt}from"./state.8e131c2b.js";var gt=function(){var t="",e,o,i,s=[],n={passive:!0};window.addEventListener?(e="addEventListener",o="removeEventListener"):(e="attachEvent",o="detachEvent",t="on"),i="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";function r(m,u){var g=function(v){!v&&(v=window.event);var y={originalEvent:v,target:v.target||v.srcElement,type:"wheel",deltaMode:v.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){v.preventDefault?v.preventDefault():v.returnValue=!1}};return i=="mousewheel"?(y.deltaY=-.025*v.wheelDelta,v.wheelDeltaX&&(y.deltaX=-.025*v.wheelDeltaX)):y.deltaY=v.detail,u(y)};return s.push({element:m,fn:g}),g}function a(m){for(var u=0;u<s.length;u++)if(s[u].element===m)return s[u].fn;return function(){}}function p(m){for(var u=0;u<s.length;u++)if(s[u].element===m)return s.splice(u,1)}function w(m,u,g,v){var y;i==="wheel"?y=g:y=r(m,g),m[e](t+u,y,v?n:!1)}function l(m,u,g,v){var y;i==="wheel"?y=g:y=a(m),m[o](t+u,y,v?n:!1),p(m)}function f(m,u,g){w(m,i,u,g),i=="DOMMouseScroll"&&w(m,"MozMousePixelScroll",u,g)}function V(m,u,g){l(m,i,u,g),i=="DOMMouseScroll"&&l(m,"MozMousePixelScroll",u,g)}return{on:f,off:V}}(),U={extend:function(t,e){t=t||{};for(var o in e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},isObject:function(t){return Object.prototype.toString.call(t)==="[object Object]"},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else if(typeof t=="string"||t instanceof String){if(e=document.querySelector(t),!e)throw new Error("Provided selector did not find any elements. Selector: "+t)}else throw new Error("Provided selector is not an HTML object nor String");if(e.tagName.toLowerCase()==="svg")o=e;else if(e.tagName.toLowerCase()==="object")o=e.contentDocument.documentElement;else if(e.tagName.toLowerCase()==="embed")o=e.getSVGDocument().documentElement;else throw e.tagName.toLowerCase()==="img"?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(t.clientX===void 0||t.clientX===null)if(t.clientX=0,t.clientY=0,t.touches!==void 0&&t.touches.length){if(t.touches[0].clientX!==void 0)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(t.touches[0].pageX!==void 0){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else t.originalEvent!==void 0&&t.originalEvent.clientX!==void 0&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(t.detail===2)return!0;if(e!=null){var o=t.timeStamp-e.timeStamp,i=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&i<10}return!1},now:Date.now||function(){return new Date().getTime()},throttle:function(t,e,o){var i=this,s,n,r,a=null,p=0;o||(o={});var w=function(){p=o.leading===!1?0:i.now(),a=null,r=t.apply(s,n),a||(s=n=null)};return function(){var l=i.now();!p&&o.leading===!1&&(p=l);var f=e-(l-p);return s=this,n=arguments,f<=0||f>e?(clearTimeout(a),a=null,p=l,r=t.apply(s,n),a||(s=n=null)):!a&&o.trailing!==!1&&(a=setTimeout(w,f)),r}},createRequestAnimationFrame:function(t){var e=null;return t!=="auto"&&t<60&&t>1&&(e=Math.floor(1e3/t)),e===null?window.requestAnimationFrame||Q(33):Q(e)}};function Q(t){return function(e){window.setTimeout(e,t)}}var L=U,tt="unknown";document.documentMode&&(tt="ie");var G={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(L.isElement(e)?o=e:o=t.querySelector(e),!o){var i=Array.prototype.slice.call(t.childNodes||t.children).filter(function(p){return p.nodeName!=="defs"&&p.nodeName!=="#text"});i.length===1&&i[0].nodeName==="g"&&i[0].getAttribute("transform")===null&&(o=i[0])}if(!o){var s="viewport-"+new Date().toISOString().replace(/\D/g,"");o=document.createElementNS(this.svgNS,"g"),o.setAttribute("id",s);var n=t.childNodes||t.children;if(n&&n.length>0)for(var r=n.length;r>0;r--)n[n.length-r].nodeName!=="defs"&&o.appendChild(n[n.length-r]);t.appendChild(o)}var a=[];return o.getAttribute("class")&&(a=o.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),o.setAttribute("class",a.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),t.parentNode!==null){var e=t.getAttribute("style")||"";e.toLowerCase().indexOf("overflow")===-1&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:L.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var i=t[o];i.parentNode.insertBefore(i,i)}},j?j.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var i=this,s="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",s),"transform"in t.style?t.style.transform=s:"-ms-transform"in t.style?t.style["-ms-transform"]=s:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=s),tt==="ie"&&o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){i.refreshDefsGlobal()},i.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return L.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var i=t.createSVGPoint();return i.x=e,i.y=o,i}},S=G,bt={enable:function(t){var e=t.svg.querySelector("defs");e||(e=document.createElementNS(S.svgNS,"defs"),t.svg.appendChild(e));var o=e.querySelector("style#svg-pan-zoom-controls-styles");if(!o){var i=document.createElementNS(S.svgNS,"style");i.setAttribute("id","svg-pan-zoom-controls-styles"),i.setAttribute("type","text/css"),i.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(i)}var s=document.createElementNS(S.svgNS,"g");s.setAttribute("id","svg-pan-zoom-controls"),s.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),s.setAttribute("class","svg-pan-zoom-control"),s.appendChild(this._createZoomIn(t)),s.appendChild(this._createZoomReset(t)),s.appendChild(this._createZoomOut(t)),t.svg.appendChild(s),t.controlIcons=s},_createZoomIn:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");return i.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},_createZoomReset:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");i.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i);var s=document.createElementNS(S.svgNS,"path");return s.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),s.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(s),e},_createZoomOut:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");return i.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}},wt=G,P=U,d=function(t,e){this.init(t,e)};d.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=P.proxy(this.updateCTM,this),this.requestAnimationFrame=P.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()};d.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(i){return i}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()};d.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height};d.prototype.getViewBox=function(){return P.extend({},this.viewBox)};d.prototype.processCTM=function(){var t=this.getCTM();if(this.options.fit||this.options.contain){var e;this.options.fit?e=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):e=Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),t.a=e,t.d=e,t.e=-this.viewBox.x*e,t.f=-this.viewBox.y*e}if(this.options.center){var o=(this.options.width-(this.viewBox.width+this.viewBox.x*2)*t.a)*.5,i=(this.options.height-(this.viewBox.height+this.viewBox.y*2)*t.a)*.5;t.e=o,t.f=i}return this.originalState.zoom=t.a,this.originalState.x=t.e,this.originalState.y=t.f,t};d.prototype.getOriginalState=function(){return P.extend({},this.originalState)};d.prototype.getState=function(){return P.extend({},this.activeState)};d.prototype.getZoom=function(){return this.activeState.zoom};d.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom};d.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom};d.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}};d.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t};d.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))===!1?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var i=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),s=!1,n=!1;i===!1?(t.e=this.getPan().x,t.f=this.getPan().y,s=n=!0):P.isObject(i)&&(i.x===!1?(t.e=this.getPan().x,s=!0):P.isNumber(i.x)&&(t.e=i.x),i.y===!1?(t.f=this.getPan().y,n=!0):P.isNumber(i.y)&&(t.f=i.y)),s&&n||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}};d.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a};d.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f};d.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f};d.prototype.pendingUpdate=!1;d.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))};d.prototype.updateCTM=function(){var t=this.getCTM();wt.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)};var yt=function(t,e){return new d(t,e)},et=gt,R=bt,x=U,M=G,St=yt,c=function(t,e){this.init(t,e)},Et={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},ot={passive:!0};c.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),M.setupSvgAttributes(this.svg),this.options=x.extend(x.extend({},Et),e),this.state="none";var i=M.getBoundingClientRectNormalized(t);this.width=i.width,this.height=i.height,this.viewport=St(M.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(n,r){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(n,r)},onZoom:function(n){if(o.viewport&&o.options.onZoom)return o.options.onZoom(n)},beforePan:function(n,r){if(o.viewport&&o.options.beforePan)return o.options.beforePan(n,r)},onPan:function(n){if(o.viewport&&o.options.onPan)return o.options.onPan(n)},onUpdatedCTM:function(n){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(n)}});var s=this.getPublicInstance();s.setBeforeZoom(this.options.beforeZoom),s.setOnZoom(this.options.onZoom),s.setBeforePan(this.options.beforePan),s.setOnPan(this.options.onPan),s.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&R.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()};c.prototype.setupHandlers=function(){var t=this,e=null;if(this.eventListeners={mousedown:function(n){var r=t.handleMouseDown(n,e);return e=n,r},touchstart:function(n){var r=t.handleMouseDown(n,e);return e=n,r},mouseup:function(n){return t.handleMouseUp(n)},touchend:function(n){return t.handleMouseUp(n)},mousemove:function(n){return t.handleMouseMove(n)},touchmove:function(n){return t.handleMouseMove(n)},mouseleave:function(n){return t.handleMouseUp(n)},touchleave:function(n){return t.handleMouseUp(n)},touchcancel:function(n){return t.handleMouseUp(n)}},this.options.customEventsHandler!=null){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var o=this.options.customEventsHandler.haltEventListeners;if(o&&o.length)for(var i=o.length-1;i>=0;i--)this.eventListeners.hasOwnProperty(o[i])&&delete this.eventListeners[o[i]]}for(var s in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(s,this.eventListeners[s],this.options.preventMouseEventsDefault?!1:ot);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())};c.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var t=this;this.wheelListener=function(o){return t.handleMouseWheel(o)};var e=!this.options.preventMouseEventsDefault;et.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0}};c.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;et.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}};c.prototype.handleMouseWheel=function(t){if(!(!this.options.zoomEnabled||this.state!=="none")){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,i=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&t.deltaMode===0&&t.wheelDelta&&(e=t.deltaY===0?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/i;var s=this.svg.getScreenCTM().inverse(),n=M.getEventPoint(t,this.svg).matrixTransform(s),r=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(r,n)}};c.prototype.zoomAtPoint=function(t,e,o){var i=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*i.zoom,Math.min(this.options.maxZoom*i.zoom,t)),t=t/this.getZoom()):this.getZoom()*t<this.options.minZoom*i.zoom?t=this.options.minZoom*i.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*i.zoom&&(t=this.options.maxZoom*i.zoom/this.getZoom());var s=this.viewport.getCTM(),n=e.matrixTransform(s.inverse()),r=this.svg.createSVGMatrix().translate(n.x,n.y).scale(t).translate(-n.x,-n.y),a=s.multiply(r);a.a!==s.a&&this.viewport.setCTM(a)};c.prototype.zoom=function(t,e){this.zoomAtPoint(t,M.getSvgCenterPoint(this.svg,this.width,this.height),e)};c.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)};c.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),x.getType(e)!=="SVGPoint")if("x"in e&&"y"in e)e=M.createSVGPoint(this.svg,e.x,e.y);else throw new Error("Given point is invalid");this.zoomAtPoint(t,e,o)};c.prototype.getZoom=function(){return this.viewport.getZoom()};c.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()};c.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom};c.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)};c.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())};c.prototype.reset=function(){this.resetZoom(),this.resetPan()};c.prototype.handleDblClick=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled){var e=t.target.getAttribute("class")||"";if(e.indexOf("svg-pan-zoom-control")>-1)return!1}var o;t.shiftKey?o=1/((1+this.options.zoomScaleSensitivity)*2):o=(1+this.options.zoomScaleSensitivity)*2;var i=M.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(o,i)};c.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),x.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&x.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=M.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))};c.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&this.options.panEnabled){var e=M.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}};c.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&(this.state="none")};c.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.center=function(){var t=this.viewport.getViewBox(),e=(this.width-(t.width+t.x*2)*this.getZoom())*.5,o=(this.height-(t.height+t.y*2)*this.getZoom())*.5;this.getPublicInstance().pan({x:e,y:o})};c.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()};c.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)};c.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)};c.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}};c.prototype.resize=function(){var t=M.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())};c.prototype.destroy=function(){var t=this;this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,this.onUpdatedCTM=null,this.options.customEventsHandler!=null&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});for(var e in this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],this.options.preventMouseEventsDefault?!1:ot);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),z=z.filter(function(o){return o.svg!==t.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}};c.prototype.getPublicInstance=function(){var t=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return t.options.panEnabled=!0,t.pi},disablePan:function(){return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},setBeforePan:function(e){return t.options.beforePan=e===null?null:x.proxy(e,t.publicInstance),t.pi},setOnPan:function(e){return t.options.onPan=e===null?null:x.proxy(e,t.publicInstance),t.pi},enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},isZoomEnabled:function(){return!!t.options.zoomEnabled},enableControlIcons:function(){return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,R.enable(t)),t.pi},disableControlIcons:function(){return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,R.disable(t)),t.pi},isControlIconsEnabled:function(){return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){return t.options.minZoom=e,t.pi},setMaxZoom:function(e){return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){return t.options.beforeZoom=e===null?null:x.proxy(e,t.publicInstance),t.pi},setOnZoom:function(e){return t.options.onZoom=e===null?null:x.proxy(e,t.publicInstance),t.pi},zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,o){return t.publicZoomAtPoint(e,o,!0),t.pi},zoomAtPointBy:function(e,o){return t.publicZoomAtPoint(e,o,!1),t.pi},zoomIn:function(){return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){return t.options.onUpdatedCTM=e===null?null:x.proxy(e,t.publicInstance),t.pi},resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},center:function(){return t.center(),t.pi},updateBBox:function(){return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),this.publicInstance};var z=[],xt=function(t,e){var o=x.getSvg(t);if(o===null)return null;for(var i=z.length-1;i>=0;i--)if(z[i].svg===o)return z[i].instance.getPublicInstance();return z.push({svg:o,instance:new c(o,e)}),z[z.length-1].instance.getPublicInstance()},Mt=xt;function $(t){let e,o;function i(r,a){return r[2]?zt:Zt}let s=i(t),n=s(t);return{c(){e=T("div"),n.c(),this.h()},l(r){e=_(r,"DIV",{class:!0,id:!0});var a=k(e);n.l(a),a.forEach(b),this.h()},h(){C(e,"class",o="absolute w-full p-2 z-10 font-mono "+(t[2]?"text-red-600":"text-yellow-600")+" bg-base-100 bg-opacity-80 text-center"),C(e,"id","errorContainer")},m(r,a){E(r,e,a),n.m(e,null)},p(r,a){s===(s=i(r))&&n?n.p(r,a):(n.d(1),n=s(r),n&&(n.c(),n.m(e,null))),a&4&&o!==(o="absolute w-full p-2 z-10 font-mono "+(r[2]?"text-red-600":"text-yellow-600")+" bg-base-100 bg-opacity-80 text-center")&&C(e,"class",o)},d(r){r&&b(e),n.d()}}}function Zt(t){let e,o,i,s,n,r,a,p,w;return{c(){e=D("Diagram out of sync. "),o=T("br"),i=D(`
      Press `),s=T("i"),n=D(" (Sync button) or "),r=T("kbd"),a=D(J),p=D(" + Enter"),w=D(" to sync."),this.h()},l(l){e=I(l,"Diagram out of sync. "),o=_(l,"BR",{}),i=I(l,`
      Press `),s=_(l,"I",{class:!0}),k(s).forEach(b),n=I(l," (Sync button) or "),r=_(l,"KBD",{});var f=k(r);a=I(f,J),p=I(f," + Enter"),f.forEach(b),w=I(l," to sync."),this.h()},h(){C(s,"class","fas fa-sync")},m(l,f){E(l,e,f),E(l,o,f),E(l,i,f),E(l,s,f),E(l,n,f),E(l,r,f),q(r,a),q(r,p),E(l,w,f)},p:W,d(l){l&&b(e),l&&b(o),l&&b(i),l&&b(s),l&&b(n),l&&b(r),l&&b(w)}}}function zt(t){var s;let e,o=((s=t[5].error)==null?void 0:s.toString().replace(/\n/g,"<br />"))+"",i;return{c(){e=new pt(!1),i=F(),this.h()},l(n){e=ft(n,!1),i=F(),this.h()},h(){e.a=i},m(n,r){e.m(o,n,r),E(n,i,r)},p(n,r){var a;r&32&&o!==(o=((a=n[5].error)==null?void 0:a.toString().replace(/\n/g,"<br />"))+"")&&e.p(o)},d(n){n&&b(i),n&&e.d()}}}function Ct(t){let e,o,i,s=(t[2]&&t[5].error instanceof Error||t[3])&&$(t);return{c(){s&&s.c(),e=lt(),o=T("div"),i=T("div"),this.h()},l(n){s&&s.l(n),e=ut(n),o=_(n,"DIV",{id:!0,class:!0});var r=k(o);i=_(r,"DIV",{id:!0,class:!0}),k(i).forEach(b),r.forEach(b),this.h()},h(){C(i,"id","container"),C(i,"class","h-full overflow-auto svelte-1ewr4tw"),N(i,"hide",t[4]),C(o,"id","view"),C(o,"class","p-2 h-full svelte-1ewr4tw"),N(o,"error",t[2]),N(o,"outOfSync",t[3])},m(n,r){s&&s.m(n,r),E(n,e,r),E(n,o,r),q(o,i),t[6](i),t[7](o)},p(n,[r]){n[2]&&n[5].error instanceof Error||n[3]?s?s.p(n,r):(s=$(n),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r&16&&N(i,"hide",n[4]),r&4&&N(o,"error",n[2]),r&8&&N(o,"outOfSync",n[3])},i:W,o:W,d(n){s&&s.d(n),n&&b(e),n&&b(o),t[6](null),t[7](null)}}}function Pt(t,e,o){let i,s;H(t,Y,h=>o(5,i=h)),H(t,K,h=>o(13,s=h));let n="",r="",a,p,w=!1,l=!1,f=!1,V=!0,m=i.panZoom,u;const g=()=>{if(!u)return;const h=u.getPan(),Z=u.getZoom();dt({pan:h,zoom:Z}),vt("panZoom")},v=h=>{h.panZoom&&(o(4,f=!0),u==null||u.destroy(),u=void 0,Promise.resolve().then(()=>{const Z=document.getElementById("graph-div");if(!Z)return;u=Mt(Z,{onPan:g,onZoom:g,controlIconsEnabled:!0,fit:!0,center:!0});const{pan:B,zoom:A}=h;B!==void 0&&A!==void 0&&Number.isFinite(A)&&(u.zoom(A),u.pan(B)),o(4,f=!1)}))},y=async h=>{if(h.error!==void 0){o(2,w=!0);return}o(2,w=!1);try{if(a&&h&&(h.updateDiagram||h.autoSync)){if(h.autoSync||ct(K,s.updateDiagram=!1,s),o(3,l=!1),V=!0,n===h.code&&r===h.mermaid&&m===h.panZoom)return;n=h.code,r=h.mermaid,m=h.panZoom;const Z=p.parentElement.scrollTop;delete a.dataset.processed;const{svg:B,bindFunctions:A}=await mt(Object.assign({},JSON.parse(h.mermaid)),n,"graph-div");if(B.length>0){v(h),o(0,a.innerHTML=B,a),console.log({svg:B});const O=document.getElementById("graph-div");if(!O)throw new Error("graph-div not found");O.setAttribute("height","100%"),O.style.maxWidth="100%",A&&A(O)}o(1,p.parentElement.scrollTop=Z,p),o(2,w=!1)}else V?V=!1:(n!==h.code||r!==h.mermaid)&&o(3,l=!0)}catch(Z){console.error("view fail",Z),o(2,w=!0)}};ht(()=>{Y.subscribe(h=>{y(h)}),window.addEventListener("resize",()=>{i.panZoom&&u&&u.resize()})});function it(h){X[h?"unshift":"push"](()=>{a=h,o(0,a)})}function nt(h){X[h?"unshift":"push"](()=>{p=h,o(1,p)})}return[a,p,w,l,f,i,it,nt]}class Nt extends st{constructor(e){super(),rt(this,e,Pt,Ct,at,{})}}export{Nt as V};
