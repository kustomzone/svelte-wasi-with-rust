!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(2)},function(t,e,n){},function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function u(){return Object.create(null)}function i(t){t.forEach(r)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}new Set;function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let m;function b(t){m=t}const y=[],g=[],_=[],x=[],w=Promise.resolve();let v=!1;function k(){v||(v=!0,w.then(T))}function O(t){_.push(t)}let S=!1;const j=new Set;function T(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),E(e.$$)}for(b(null),y.length=0;g.length;)g.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];j.has(e)||(j.add(e),e())}_.length=0}while(y.length);for(;x.length;)x.pop()();v=!1,S=!1,j.clear()}}function E(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const M=new Set;function C(t,e){t&&t.i&&(M.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let P;function q(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e,n,l,s,a,f=[-1]){const p=m;b(t);const h=e.props||{},$=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:s,bound:u(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:u(),dirty:f,skip_bound:!1};let g=!1;if($.ctx=n?n(t,h,(e,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&s($.ctx[e],$.ctx[e]=r)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](r),g&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),k(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],$.update(),g=!0,i($.before_update),$.fragment=!!l&&l($.ctx),e.target){if(e.hydrate){const t=(_=e.target,Array.from(_.childNodes));$.fragment&&$.fragment.l(t),t.forEach(d)}else $.fragment&&$.fragment.c();e.intro&&C(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:u,on_destroy:l,after_update:s}=t.$$;o&&o.m(e,n),O(()=>{const e=u.map(r).filter(c);l?l.push(...e):i(e),t.$$.on_mount=[]}),s.forEach(O)}(t,e.target,e.anchor),T()}var _;b(p)}"function"==typeof HTMLElement&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){q(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class H{$destroy(){q(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}n(1);function N(t){let e,n,r,u;return{c(){e=p("h1"),n=h("Hello "),r=h(t[0]),u=h("!"),$(e,"class","svelte-i7qo5m")},m(t,o){f(t,e,o),a(e,n),a(e,r),a(e,u)},p(t,[e]){var n,o;1&e&&(n=r,o=""+(o=t[0]),n.wholeText!==o&&(n.data=o))},i:o,o:o,d(t){t&&d(e)}}}function L(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}const B=new class extends H{constructor(t){super(),A(this,t,L,N,l,{name:0})}}({target:document.body,props:{name:"world"}});window.app=B;e.default=B}]);