(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),s=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),s=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),s=n(30),i=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&i(a,o,{configurable:!0,value:s(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7976),s=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),s=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(3013),a=n(9781),c=n(7854),l=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,y=n(7976),w=n(9518),v=n(7674),b=n(5112),E=n(9711),_=n(9909),I=_.enforce,T=_.get,k=c.Int8Array,C=k&&k.prototype,S=c.Uint8ClampedArray,O=S&&S.prototype,A=k&&w(k),x=C&&w(C),R=Object.prototype,P=c.TypeError,N=b("toStringTag"),D=E("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!v&&"Opera"!==d(c.opera),j=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(U,e)||h(F,e)},B=function(t){var e=w(t);if(u(e)){var n=T(e);return n&&h(n,L)?n[L]:B(e)}},q=function(t){if(!u(t))return!1;var e=d(t);return h(U,e)||h(F,e)},z=function(t){if(q(t))return t;throw P("Target is not a typed array")},H=function(t){if(l(t)&&(!v||y(A,t)))return t;throw P(f(t)+" is not a typed array constructor")},$=function(t,e,n,r){if(a){if(n)for(var s in U){var i=c[s];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(l){}}}x[t]&&!n||m(x,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,s;if(a){if(v){if(n)for(r in U)if(s=c[r],s&&h(s,t))try{delete s[t]}catch(i){}if(A[t]&&!n)return;try{return m(A,t,n?e:M&&A[t]||e)}catch(i){}}for(r in U)s=c[r],!s||s[t]&&!n||m(s,t,e)}};for(r in U)s=c[r],i=s&&s.prototype,i?I(i)[L]=s:M=!1;for(r in F)s=c[r],i=s&&s.prototype,i&&(I(i)[L]=s);if((!M||!l(A)||A===Function.prototype)&&(A=function(){throw P("Incorrect invocation")},M))for(r in U)c[r]&&v(c[r],A);if((!M||!x||x===R)&&(x=A.prototype,M))for(r in U)c[r]&&v(c[r].prototype,x);if(M&&w(O)!==x&&v(O,x),a&&!h(x,N))for(r in j=!0,g(x,N,{get:function(){return u(this)?this[D]:void 0}}),U)c[r]&&p(c[r],D,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:j&&D,aTypedArray:z,aTypedArrayConstructor:H,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:q,TypedArray:A,TypedArrayPrototype:x}},1318:function(t,e,n){var r=n(5656),s=n(1400),i=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),l=i(c),u=s(o,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9671:function(t,e,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var l,u,h=i(n),d=s(h),f=r(a,c),p=o(d);while(p-- >0)if(l=d[p],u=f(l,p,h),u)switch(t){case 0:return l;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},4326:function(t,e,n){var r=n(1702),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},648:function(t,e,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,l="Arguments"==i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),a))?n:l?i(e):"Object"==(r=i(e))&&s(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),c=o.f,l=i.f,u=0;u<a.length;u++){var h=a[u];r(t,h)||n&&r(n,h)||c(t,h,l(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),s=n(3070),i=n(9114);t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),s=n(3070),i=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(r(n)&&i(n,l,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(u){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),s=Error,i=r("".replace),o=function(t){return String(s(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=i(t,a,"");return t}},2914:function(t,e,n){var r=n(7293),s=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,m=t.target,g=t.global,y=t.stat;if(u=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=s(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.apply,o=s.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(i):function(){return o.apply(i,arguments)})},9974:function(t,e,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.bind,o=s.call,a=r&&i.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),s=n(614),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),s=n(8554);t.exports=function(t,e){var n=t[e];return s(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),s=n(7293),i=n(317);t.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),s=n(7293),i=n(4326),o=Object,a=r("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),s=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&r(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},2788:function(t,e,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var r=n(111),s=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&s(t,"cause",e.cause)}},9909:function(t,e,n){var r,s,i,o=n(4811),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,w=function(t){return i(t)?s(t):r(t,{})},v=function(t){return function(e){var n;if(!l(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new y),E=c(b.get),_=c(b.has),I=c(b.set);r=function(t,e){if(_(b,t))throw g(m);return e.facade=t,I(b,t,e),e},s=function(t){return E(b,t)||{}},i=function(t){return _(b,t)}}else{var T=f("state");p[T]=!0,r=function(t,e){if(h(t,T))throw g(m);return e.facade=t,u(t,T,e),e},s=function(t){return h(t,T)?t[T]:{}},i=function(t){return h(t,T)}}t.exports={set:r,get:s,has:i,enforce:w,getterFor:v}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==u||n!=l&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),s="object"==typeof document&&document.all,i="undefined"==typeof s&&void 0!==s;t.exports=i?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),s=n(614),i=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&i(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=u(t);return i(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,s=n(9670),i=n(6048),o=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},w=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?w(r):v():w(r);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=s(t),n=new g,g[f]=null,n[m]=t):n=b(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),s=n(3353),i=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!s?Object.defineProperties:function(t,e){o(t);var n,r=a(e),s=c(e),l=s.length,u=0;while(l>u)i.f(t,n=s[u++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),s=n(4664),i=n(3353),o=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?i?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=u(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!s(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),l=Object,u=l.prototype;t.exports=a?l.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?u:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),l=0,u=[];for(n in r)!s(a,n)&&s(r,n)&&c(u,n);while(e.length>l)s(r,n=e[l++])&&(~o(u,n)||c(u,n));return u}},1956:function(t,e,n){var r=n(6324),s=n(748);t.exports=Object.keys||function(t){return r(t,s)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),s=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),s=n(614),i=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!i(a=r(n,t)))return a;if(s(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!i(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var r=n(8554),s=TypeError;t.exports=function(t){if(r(t))throw s("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),s=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},5465:function(t,e,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});t.exports=o},2309:function(t,e,n){var r=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),s=n(4488);t.exports=function(t){return r(s(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),s=Object;t.exports=function(t){return s(r(t))}},7593:function(t,e,n){var r=n(6916),s=n(111),i=n(2190),o=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!s(t)||i(t))return t;var n,c=o(t,u);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!s(n)||i(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),s=n(2190);t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),s=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),s=n(7293);t.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),s=n(614),i=r.WeakMap;t.exports=s(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(6293),c=n(3307),l=s("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;t.exports=function(t){if(!i(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&i(u,t)?l[t]=u[t]:l[t]=c&&h?h(e):d(e)}return l[t]}},9191:function(t,e,n){"use strict";var r=n(5005),s=n(2597),i=n(8880),o=n(7976),a=n(7674),c=n(9920),l=n(2626),u=n(9587),h=n(6277),d=n(8340),f=n(1060),p=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,y){var w="stackTraceLimit",v=y?2:1,b=t.split("."),E=b[b.length-1],_=r.apply(null,b);if(_){var I=_.prototype;if(!g&&s(I,"cause")&&delete I.cause,!n)return _;var T=r("Error"),k=e((function(t,e){var n=h(y?e:t,void 0),r=y?new _(t):new _;return void 0!==n&&i(r,"message",n),p&&i(r,"stack",f(r.stack,2)),this&&o(I,this)&&u(r,this,k),arguments.length>v&&d(r,arguments[v]),r}));if(k.prototype=I,"Error"!==E?a?a(k,T):c(k,T,{name:!0}):m&&w in _&&(l(k,_,w),l(k,_,"prepareStackTrace")),c(k,_),!g)try{I.name!==E&&i(I,"name",E),I.constructor=k}catch(C){}return k}}},2262:function(t,e,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},1703:function(t,e,n){var r=n(2109),s=n(7854),i=n(2104),o=n(9191),a="WebAssembly",c=s[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,l),r({global:!0,constructor:!0,arity:1,forced:l},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,l),r({target:a,stat:!0,constructor:!0,arity:1,forced:l},n)}};u("Error",(function(t){return function(e){return i(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),u("URIError",(function(t){return function(e){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),s=n(1702),i=n(4488),o=n(9303),a=n(1340),c=n(7293),l=s("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:u},{at:function(t){var e=a(i(this)),n=e.length,r=o(t),s=r>=0?r:n+r;return s<0||s>=n?void 0:l(e,s)}})},8675:function(t,e,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=s(e),r=i(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},4590:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},1118:function(t,e,n){n(4590)},7380:function(t,e,n){n(3408)},2801:function(t,e,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=i("Error"),w=i(g),v=function(){l(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new w(e,n),s=y(e);return s.name=g,a(r,"stack",o(1,f(s.stack,1))),u(r,this,v),r},b=v.prototype=w.prototype,E="stack"in y(g),_="stack"in new w(1,2),I=w&&p&&Object.getOwnPropertyDescriptor(s,g),T=!!I&&!(I.writable&&I.configurable),k=E&&!T&&!_;r({global:!0,constructor:!0,forced:m||k},{DOMException:k?v:w});var C=i(g),S=C.prototype;if(S.constructor!==C)for(var O in m||a(S,"constructor",o(1,C)),d)if(c(d,O)){var A=d[O],x=A.s;c(C,x)||a(C,x,o(6,A.c))}},1683:function(t,e,n){"use strict";n.d(e,{v0:function(){return cr},Aj:function(){return ce},e5:function(){return ae},w7:function(){return le}});n(1703);var r=n(223),s=n(7077);function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${s.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const s=Object.assign(Object.assign({},l()),{[e]:n}),i=new r.LL("auth","Firebase",s);return i.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function y(t,e,...n){if(!t)throw g(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function v(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(t){v(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(v(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){const n=(0,s.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,v(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){v(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,s,i={}){return M(t,i,(async()=>{let i={},o={};s&&("GET"===e?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),R.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))}))}async function M(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},P),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(t,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const e=r.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw V(t,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(i){if(i instanceof r.ZR)throw i;f(t,"network-request-failed")}}async function j(t,e,n,r,s={}){const i=await L(t,e,n,r,s);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{_serverResponse:i}),i}function U(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?x(t.config,s):`${t.config.apiScheme}://${s}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(t,e,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),s=await n.getIdToken(e),i=K(s);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:z($(i.auth_time)),issuedAtTime:z($(i.iat)),expirationTime:z($(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function K(t){var e;const[n,s,i]=t.split(".");if(void 0===n||void 0===s||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(s);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function G(t){const e=K(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof r.ZR&&J(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){var e;const n=t.auth,r=await t.getIdToken(),s=await W(t,q(n,{idToken:r}));y(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await X(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=i(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=U(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,i=new rt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),i.accessToken=r),s&&(y("number"===typeof s,"internal-error",{appName:t}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,s=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Y(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,s,i,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,w=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:E,providerData:_,stsTokenManager:I}=e;y(v&&I,t,"internal-error");const T=rt.fromJSON(this.name,I);y("string"===typeof v,t,"internal-error"),st(u,t.name),st(h,t.name),y("boolean"===typeof b,t,"internal-error"),y("boolean"===typeof E,t,"internal-error"),st(d,t.name),st(f,t.name),st(p,t.name),st(m,t.name),st(g,t.name),st(w,t.name);const k=new it({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:w});return _&&Array.isArray(_)&&(k.providerData=_.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const s=new it({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await X(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,s),this.fullPersistenceKey=ct("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(E(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=r[0]||E(at);const i=ct(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(i);if(e){const n=it._fromJSON(t,e);l!==s&&(o=n),s=l;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(i)}catch(c){}}))),new lt(s,t,n)):new lt(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(yt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function yt(t=(0,r.z$)()){return/webos/i.test(t)}function wt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vt(t=(0,r.z$)()){var e;return wt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function Et(t=(0,r.z$)()){return wt(t)||mt(t)||yt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.z$)());break;case"Worker":n=`${ut((0,r.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(s){r(s)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.beforeStateQueue=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await X(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,r.m9)(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function Pt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Ot{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Nt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Nt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return xt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return At(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class Mt extends Ot{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,s=i(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Mt(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Dt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function Ut(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function Ft(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Vt={["USER_NOT_FOUND"]:"user-not-found"};async function Bt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),Vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ot{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new qt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new qt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ut(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Bt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}=t;return n||e||r||s?new qt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(t))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||e||t}class $t{constructor(t){var e,n,s,i,o,a;const c=(0,r.zd)((0,r.pd)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=zt(null!==(s=c["mode"])&&void 0!==s?s:null);y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new $t(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(t,e){return Nt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=$t.parseLink(e);return y(n,"argument-error"),Nt._fromEmailAndCode(t,n.code,n.tenantId)}}Kt.PROVIDER_ID="password",Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Wt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch(e){return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com",Qt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Wt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com",Xt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await it._fromIdTokenResponse(t,n,r),i=te(n),o=new Zt({user:s,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r.ZR{constructor(t,e,n,r){var s;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const r=await W(t,ne(s,i,e,t),n);y(r.idToken,s,"internal-error");const o=K(r.idToken);y(o,s,"internal-error");const{sub:a}=o;return y(t.uid===a,s,"user-mismatch"),Zt._forOperation(t,i,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(s,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const r="signIn",s=await ne(t,r,e),i=await Zt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function oe(t,e){return ie(Ct(t),e)}function ae(t,e,n){return oe((0,r.m9)(t),Kt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n,s){return(0,r.m9)(t).onAuthStateChanged(e,n,s)}function le(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function he(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const de="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(de,"1"),this.storage.removeItem(de),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){const t=(0,r.z$)();return dt(t)||wt(t)}const me=1e3,ge=10;class ye extends fe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pe()&&_t(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);bt()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ge):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ye.type="LOCAL";const we=ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends fe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ve.type="SESSION";const be=ve;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new _e(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async t=>t(e.origin,s))),a=await Ee(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e.receivers=[];class Te{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Ie("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return window}function Ce(t){ke().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return"undefined"!==typeof ke()["WorkerGlobalScope"]&&"function"===typeof ke()["importScripts"]}async function Oe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ae(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function xe(){return Se()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebaseLocalStorageDb",Pe=1,Ne="firebaseLocalStorage",De="fbase_key";class Le{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Me(t,e){return t.transaction([Ne],e?"readwrite":"readonly").objectStore(Ne)}function je(){const t=indexedDB.deleteDatabase(Re);return new Le(t).toPromise()}function Ue(){const t=indexedDB.open(Re,Pe);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ne,{keyPath:De})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ne)?e(n):(n.close(),await je(),e(await Ue()))}))}))}async function Fe(t,e,n){const r=Me(t,!0).put({[De]:e,value:n});return new Le(r).toPromise()}async function Ve(t,e){const n=Me(t,!1).get(e),r=await new Le(n).toPromise();return void 0===r?null:r.value}function Be(t,e){const n=Me(t,!0).delete(e);return new Le(n).toPromise()}const qe=800,ze=3;class He{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ue()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ze)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Se()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_e._getInstance(xe()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Oe(),!this.activeServiceWorker)return;this.sender=new Te(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ae()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ue();return await Fe(t,de,"1"),await Be(t,de),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ve(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Be(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Me(t,!1).getAll();return new Le(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}He.type="LOCAL";const $e=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function Ge(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Je(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",We().appendChild(r)}))}function Qe(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ye="recaptcha";async function Xe(t,e,n){var r;const s=await n.verify();try{let i;if(y("string"===typeof s,t,"argument-error"),y(n.type===Ye,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){y("enroll"===e.type,t,"internal-error");const n=await ue(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await Ke(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await jt(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(t){this.providerId=Ze.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return Xe(this.auth,t,(0,r.m9)(e))}static credential(t,e){return qt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ze.credentialFromTaggedObject(e)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?qt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(t,e){return e?E(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.PROVIDER_ID="phone",Ze.PHONE_SIGN_IN_METHOD="phone";class en extends Ot{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function nn(t){return ie(t.auth,new en(t),t.bypassAuthState)}function rn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),se(n,new en(t),t.bypassAuthState)}async function sn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),re(n,new en(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=t;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:f(this.auth,"internal-error")}}resolve(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new A(2e3,1e4);class cn extends on{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const t=Ie();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,an.get())};t()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",un=new Map;class hn extends on{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=un.get(this.auth._key());if(!t){try{const e=await dn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}un.set(this.auth._key(),t)}return this.bypassAuthState||un.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(t,e){const n=mn(e),r=pn(t);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function fn(t,e){un.set(t._key(),e)}function pn(t){return E(t._redirectPersistence)}function mn(t){return ct(ln,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e,n=!1){const r=Ct(t),s=tn(r,e),i=new hn(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=6e5;class wn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!En(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!bn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(t))}saveEventToCache(t){this.cachedEventUids.add(vn(t)),this.lastProcessedEventTime=Date.now()}}function vn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function bn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function En(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function kn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _n(t);for(const r of e)try{if(Cn(r))return}catch(n){}f(t,"unauthorized-domain")}function Cn(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Tn.test(n))return!1;if(In.test(t))return r===t;const s=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new A(3e4,6e4);function On(){const t=ke().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function An(t){return new Promise(((e,n)=>{var r,s,i;function o(){On(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(t,"network-request-failed"))},timeout:Sn.get()})}if(null===(s=null===(r=ke().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=ke().gapi)||void 0===i?void 0:i.load)){const e=Qe("iframefcb");return ke()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Je(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw xn=null,t}))}let xn=null;function Rn(t){return xn=xn||An(t),xn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new A(5e3,15e3),Nn="__/auth/iframe",Dn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jn(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x(e,Dn):`https://${t.config.authDomain}/${Nn}`,i={apiKey:e.apiKey,appName:t.name,v:s.Jn},o=Mn.get(t.config.apiHost);o&&(i.eid=o);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Un(t){const e=await Rn(t),n=ke().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:jn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const s=p(t,"network-request-failed"),i=ke().setTimeout((()=>{r(s)}),Pn.get());function o(){ke().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,Bn=600,qn="_blank",zn="http://localhost";class Hn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function $n(t,e,n,s=Vn,i=Bn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Fn),{width:s.toString(),height:i.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=ft(u)?qn:n),ht(u)&&(e=e||zn,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(vt(u)&&"_self"!==c)return Kn(e||"",c),new Hn(null);const d=window.open(e||"",c,h);y(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Hn(d)}function Kn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Wn="emulator/auth/handler";function Jn(t,e,n,i,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:s.Jn,eventId:o};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Wt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Qn(t)}?${(0,r.xO)(l).slice(1)}`}function Qn({config:t}){return t.emulator?x(t,Wn):`https://${t.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=be,this._completeRedirectFn=gn,this._overrideRedirectResult=fn}async _openPopup(t,e,n,r){var s;v(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=Jn(t,e,n,T(),r);return $n(t,i,Ie())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ce(Jn(t,e,n,T(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Un(t),n=new wn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Yn,{type:Yn},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Yn];void 0!==s&&e(!!s),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||dt()||wt()}}const Zn=Xn;class tr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class er extends tr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new er(t)}_finalizeEnroll(t,e,n){return he(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ge(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(t){return er._fromCredential(t)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",sr="0.20.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(t){(0,s.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((e,r)=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const s={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},a=new kt(e,r,s);return I(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new ir(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(rr,sr,or(t)),(0,s.KN)(rr,sr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t=(0,s.Mq)()){const e=(0,s.qX)(t,"auth");return e.isInitialized()?e.getImmediate():_(t,{popupRedirectResolver:Zn,persistence:[$e,we,be]})}ar("Browser")},7425:function(t,e,n){"use strict";n.d(e,{ET:function(){return ch},hJ:function(){return pu},oe:function(){return ah},JU:function(){return mu},QT:function(){return ih},ad:function(){return vu},cf:function(){return lh},Xo:function(){return eh},IO:function(){return Zu},Bt:function(){return dh}});n(1703),n(8675),n(7380),n(1118),n(2262),n(4506),n(2801);var r,s=n(7077),i=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function w(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:v,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function I(){this.s=this.s,this.o=this.o}var T=0,k={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var t=m(this);delete k[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var P=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return t<e?-1:t>e?1:0}function D(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function L(t){return-1!=D().indexOf(t)}function M(t){return M[" "](t),t}function j(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}M[" "]=d;var U,F=L("Opera"),V=L("Trident")||L("MSIE"),B=L("Edge"),q=B||V,z=L("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),H=-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge");function $(){var t=h.document;return t?t.documentMode:void 0}t:{var K="",G=function(){var t=D();return z?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(G&&(K=G?G[1]:""),V){var W=$();if(null!=W&&W>parseFloat(K)){U=String(W);break t}}U=K}var J,Q={};function Y(){return j((function(){let t=0;const e=P(String(U)).split("."),n=P("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&V){var X=$();J=X||(parseInt(U,10)||void 0)}else J=void 0;var Z=J;function tt(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{M(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}_(tt,A);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function st(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++rt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ut(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=C(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}ut.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new st(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,s){if(r&&r.once)return wt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mt(t,e[i],n,r,s);return null}return n=kt(n),t&&t[nt]?t.N(e,n,p(r)?!!r.capture:!!r,s):gt(t,e,n,!1,r,s)}function gt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=It(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)x||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function wt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);return null}return n=kt(n),t&&t[nt]?t.O(e,n,p(r)?!!r.capture:!!r,s):gt(t,e,n,!0,r,s)}function vt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=kt(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,r,s),-1<n&&(it(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,s)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):it(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function It(t){return t=t[ft],t instanceof ut?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function Ct(){I.call(this),this.i=new ut(this),this.P=this,this.I=null}function St(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var s=e;e=new A(r,t),lt(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ot(o,r,!0,e)&&s}if(o=e.g=t,s=Ot(o,r,!0,e)&&s,s=Ot(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ot(o,r,!1,e)&&s}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ht(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}_(Ct,I),Ct.prototype[nt]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){vt(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function xt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){h.setTimeout((()=>{throw t}),0)}function Mt(t,e){Pt||jt(),Ut||(Pt(),Ut=!0),Ft.add(t,e)}function jt(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(Vt)}}var Ut=!1,Ft=new Rt;function Vt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Bt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Ht(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Ht(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Bt,Ct),r=Bt.prototype,r.ca=!1,r.R=null,r.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(qt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.X.M.call(this),qt(this),delete this.g};class $t extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){I.call(this),this.h=t,this.g={}}_(Kt,I);var Gt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var s=0;s<n.length;s++){var i=mt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Qt(){this.g=!0}function Yt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return At(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.X.M.call(this),Jt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new Ct}function ie(t){A.call(this,ne.Oa,t)}function oe(t){const e=se();St(e,new ie(e,t))}function ae(t,e){A.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();St(e,new ae(e,t))}function le(t,e){A.call(this,ne.Pa,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Oa="serverreachability",_(ie,A),ne.STAT_EVENT="statevent",_(ae,A),ne.Pa="timingevent",_(le,A);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function me(){}fe.prototype.h=null;var ge,ye={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function we(){A.call(this,"d")}function ve(){A.call(this,"c")}function be(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Kt(this),this.O=Ie,t=q?125:void 0,this.T=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}_(we,A),_(ve,A),_(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},ge=new be;var Ie=45e3,Te={},ke={};function Ce(t,e,n){t.K=1,t.v=We(ze(e)),t.s=n,t.P=!0,Se(t,null)}function Se(t,e){t.F=Date.now(),Re(t),t.A=ze(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=dr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $t(b(t.Ka,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.hb),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ae(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==ke){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Oe(t)&&r!=ke&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sr(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),De(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ke:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?ke:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.V=Date.now()+t.O,Pe(t,t.O)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(b(t.fb,t),e)}function Ne(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||ar(t.l,t)}function Le(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Jt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Jn(n)}rr(n),ce(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ue(b(n.bb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(l){}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&or(n),!R(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=l[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ge(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=hr(r,r.H?r.ka:null,r.V),o.J){wn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ne(a),Re(a)),r.g=o}else nr(r);0<n.i.length&&Yn(n)}else"stop"!=l[0]&&"close"!=l[0]||lr(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?lr(n,7):Wn(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}oe(4)}catch(l){}}function je(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),r=je(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}r=Ee.prototype,r.setTimeout=function(t){this.O=t},r.hb=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.Ka(t)},r.Ka=function(t){try{if(t==this.g)t:{const u=qn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||q||this.g&&(this.h.h||this.g.fa()||zn(this.g)))){this.I||4!=u||7==e||oe(8==e||0>=d?3:2),Ne(this);var n=this.g.aa();this.Y=n;e:if(Oe(this)){var r=zn(this.g);t="";var s=r.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),De(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.P?(Ae(this,u,o),q&&this.i&&3==u&&(Wt(this.S,this.T,"tick",this.gb),this.T.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==u&&Le(this),this.i&&!this.I&&(4==u?ar(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),De(this)}}}catch(u){}},r.gb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Ne(this),Ae(this,t,e),this.i&&4!=t&&Re(this))}},r.cancel=function(){this.I=!0,Le(this)},r.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,De(this)):Pe(this,this.V-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,He(this,t.j),this.s=t.s,this.g=t.g,$e(this,t.m),this.l=t.l,e=t.i;var n=new rn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ke(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,He(this,n[1]||"",!0),this.s=Je(n[2]||""),this.g=Je(n[3]||"",!0),$e(this,n[4]),this.l=Je(n[5]||"",!0),Ke(this,n[6]||"",!0),this.o=Je(n[7]||"")):(this.h=!!e,this.i=new rn(null,this.h))}function ze(t){return new qe(t)}function He(t,e,n){t.j=n?Je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ke(t,e,n){e instanceof rn?(t.i=e,un(t.i,t.h)):(n||(e=Qe(e,en)),t.i=new rn(e,t.h))}function Ge(t,e,n){t.i.set(e,n)}function We(t){return Ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qe(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,nn)),t.join("")};var Xe=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){sn(t),e=ln(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return sn(t),e=ln(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(ln(t,e),S(n)),t.h+=n.length)}function ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}r=rn.prototype,r.add=function(t,e){sn(this),this.i=null,t=ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},r.W=function(t){sn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(ln(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return sn(this),this.i=null,t=ln(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function dn(t){this.l=t||fn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function mn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function wn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function bn(){}function En(){this.g=new bn}function _n(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let s=t;p(t)&&(s=At(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function In(t,e){const n=new Qt;if(h.Image){const r=new Image;r.onload=E(Tn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(Tn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(Tn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(Tn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Tn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function kn(t){this.l=t.$b||null,this.j=t.ib||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(kn,fe),kn.prototype.g=function(){return new Cn(this.l,this.j)},kn.prototype.i=function(t){return function(){return t}}({}),_(Cn,Ct);var Sn=0;function On(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Cn.prototype,r.open=function(t,e){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Sn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;On(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):xn(this),3==this.readyState&&On(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ta=function(t){this.g&&(this.response=t,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=h.JSON.parse;function Pn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}_(Pn,Ct);var Nn="",Dn=/^https?$/i,Ln=["POST","PUT"];function Mn(t){return V&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function jn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),Vn(t)}function Un(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function Fn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))zt(t.Ha,0,t);else if(St(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(Ve)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Dn.test(s?s.toLowerCase():"")}n=r}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Un(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){Bn(t);const r=t.g,s=t.C[0]?d:null;t.g=null,t.C=null,e||St(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ar){return null}}function Hn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ge(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gn(t){this.Ca=0,this.i=[],this.j=new Qt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Kn("baseRetryDelayMs",5e3,t),this.ab=Kn("retryDelaySeedMs",1e4,t),this.Za=Kn("forwardChannelMaxRetries",2,t),this.ta=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Qn(t),3==t.G){var e=t.U++,n=ze(t.F);Ge(n,"SID",t.I),Ge(n,"RID",e),Ge(n,"TYPE","terminate"),tr(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=We(ze(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=dr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}ur(t)}function Jn(t){t.g&&(sr(t),t.g.cancel(),t.g=null)}function Qn(t){Jn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Yn(t){pn(t.h)||t.m||(t.m=!0,Mt(t.Ja,t),t.C=0)}function Xn(t,e){return!(mn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za))&&(t.m=ue(b(t.Ja,t,e),cr(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const r=ze(t.F);Ge(r,"SID",t.I),Ge(r,"RID",n),Ge(r,"AID",t.T),tr(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=er(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),Ce(n,r,e)}function tr(t,e){t.ia&&ot(t.ia,(function(t,n){Ge(e,n,t)})),t.l&&Fe({},(function(t,n){Ge(e,n,t)}))}function er(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Qa,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{_n(a,t,"req"+n+"_")}catch(Fr){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function nr(t){t.g||t.u||(t.Z=1,Mt(t.Ia,t),t.A=0)}function rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ue(b(t.Ia,t),cr(t,t.A)),t.A++,!0)}function sr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ze(t.sa);Ge(e,"RID","rpc"),Ge(e,"SID",t.I),Ge(e,"CI",t.L?"0":"1"),Ge(e,"AID",t.T),Ge(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We(ze(e)),n.s=null,n.P=!0,Se(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ar(t,e){var n=null;if(t.g==e){or(t),sr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.D,wn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),St(r,new le(r,n,e,s)),Yn(t)}else nr(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==r&&Xn(t,e)||2==r&&rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}function cr(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.jb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||He(n,"https"),We(n)),In(n.toString(),r)}else ce(2);t.G=0,t.l&&t.l.va(e),ur(t),Qn(t)}function ur(t){if(t.G=0,t.la=[],t.l){const e=vn(t.h);0==e.length&&0==t.i.length||(O(t.la,e),O(t.la,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ua()}}function hr(t,e,n){var r=n instanceof qe?ze(n):new qe(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),$e(r,r.m);else{var s=h.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new qe(null,void 0);r&&He(i,r),e&&(i.g=e),s&&$e(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ge(r,n,e),Ge(r,"VER",t.ma),tr(t,r),r}function dr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pn(new kn({ib:!0})):new Pn(t.ra),e.L=t.H,e}function fr(){}function pr(){if(V&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(t,e){Ct.call(this),this.g=new Gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wr(this)}function gr(t){we.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function yr(){ve.call(this),this.status=1}function wr(t){this.g=t}r=Pn.prototype,r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void jn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=h.FormData&&t instanceof h.FormData,!(0<=C(Ln,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=zt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){jn(this,i)}},r.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),Vn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Pn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.eb())},r.eb=function(){Fn(this)},r.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},r.Ea=function(){return this.m},r.Na=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ee(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=at(i),lt(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=er(this,s,e),n=ze(this.F),Ge(n,"RID",t),Ge(n,"CVER",22),this.D&&Ge(n,"X-HTTP-Session-Id",this.D),tr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Hn(i)))+"&"+e:this.o&&$n(n,this.o,i)),yn(this.h,s),this.Xa&&Ge(n,"TYPE","init"),this.O?(Ge(n,"$req",e),Ge(n,"SID","null"),s.Z=!0,Ce(s,n,null)):Ce(s,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ue(b(this.cb,this),t)}},r.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Jn(this),ir(this))},r.bb=function(){null!=this.v&&(this.v=null,Jn(this),rr(this),ce(19))},r.jb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Qa=function(){},pr.prototype.g=function(t,e){return new mr(t,e)},_(mr,Ct),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hr(t,null,t.V),Yn(t)},mr.prototype.close=function(){Wn(this.g)},mr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new hn(e.$a++,t)),3==e.G&&Yn(e)},mr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,mr.X.M.call(this)},_(gr,we),_(yr,ve),_(wr,fr),wr.prototype.xa=function(){St(this.g,"a")},wr.prototype.wa=function(t){St(this.g,new gr(t))},wr.prototype.va=function(t){St(this.g,new yr(t))},wr.prototype.ua=function(){St(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Pn.prototype.listenOnce=Pn.prototype.O,Pn.prototype.getLastError=Pn.prototype.Na,Pn.prototype.getLastErrorCode=Pn.prototype.Ea,Pn.prototype.getStatus=Pn.prototype.aa,Pn.prototype.getResponseJson=Pn.prototype.Ra,Pn.prototype.getResponseText=Pn.prototype.fa,Pn.prototype.send=Pn.prototype.da;var vr=l.createWebChannelTransport=function(){return new pr},br=l.getStatEventTarget=function(){return se()},Er=l.ErrorCode=he,_r=l.EventType=de,Ir=l.Event=ne,Tr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},kr=l.FetchXmlHttpFactory=kn,Cr=l.WebChannel=me,Sr=l.XhrIo=Pn;const Or="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xr="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new o.Yd("@firebase/firestore");function Pr(){return Rr.logLevel}function Nr(t,...e){if(Rr.logLevel<=o["in"].DEBUG){const n=e.map(Mr);Rr.debug(`Firestore (${xr}): ${t}`,...n)}}function Dr(t,...e){if(Rr.logLevel<=o["in"].ERROR){const n=e.map(Mr);Rr.error(`Firestore (${xr}): ${t}`,...n)}}function Lr(t,...e){if(Rr.logLevel<=o["in"].WARN){const n=e.map(Mr);Rr.warn(`Firestore (${xr}): ${t}`,...n)}}function Mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+t;throw Dr(e),new Error(e)}function Ur(t,e){t||jr()}function Fr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ar.UNAUTHENTICATED)))}shutdown(){}}class $r{constructor(t){this.t=t,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ur("string"==typeof e.accessToken),new zr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(null===t||"string"==typeof t),new Ar(t)}}class Kr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ur("string"==typeof t.token),this.A=t.token,new Wr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Qr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Xr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Br(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Br(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Br(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Br(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ts.fromMillis(Date.now())}static fromDate(t){return ts.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ts(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Xr(this.nanoseconds,t.nanoseconds):Xr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this.timestamp=t}static fromTimestamp(t){return new es(t)}static min(){return new es(new ts(0,0))}static max(){return new es(new ts(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n){void 0===e?e=0:e>t.length&&jr(),void 0===n?n=t.length-e:n>t.length-e&&jr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ns.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ns?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rs extends ns{construct(t,e,n){return new rs(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Br(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new rs(e)}static emptyPath(){return new rs([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class is extends ns{construct(t,e,n){return new is(t,e,n)}static isValidIdentifier(t){return ss.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new is(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Br(Vr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Br(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Br(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Br(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new is(e)}static emptyPath(){return new is([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this.path=t}static fromPath(t){return new os(rs.fromString(t))}static fromName(t){return new os(rs.fromString(t).popFirst(5))}static empty(){return new os(rs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new os(new rs(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function cs(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=es.fromTimestamp(1e9===r?new ts(n+1,0):new ts(n,r));return new us(s,os.empty(),e)}function ls(t){return new us(t.readTime,t.key,-1)}class us{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new us(es.min(),os.empty(),-1)}static max(){return new us(es.max(),os.empty(),-1)}}function hs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=os.comparator(t.documentKey,e.documentKey),0!==n?n:Xr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){if(t.code!==Vr.FAILED_PRECONDITION||t.message!==ds)throw t;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ms(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ms?e:ms.resolve(e)}catch(t){return ms.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.reject(e)}static resolve(t){return new ms(((e,n)=>{e(t)}))}static reject(t){return new ms(((e,n)=>{n(t)}))}static waitFor(t){return new ms(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ms.resolve(!1);for(const n of t)e=e.next((t=>t?ms.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ms(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ms(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys.at=-1;class Es{constructor(t,e){this.comparator=t,this.root=e||Is.EMPTY}insert(t,e){return new Es(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Is.BLACK,null,null))}remove(t){return new Es(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Is.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _s(this.root,t,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _s(this.root,t,this.comparator,!0)}}class _s{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Is{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Is.RED,this.left=null!=r?r:Is.EMPTY,this.right=null!=s?s:Is.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Is(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Is.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Is.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Is.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Is.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw jr();if(this.right.isRed())throw jr();const t=this.left.check();if(t!==this.right.check())throw jr();return t+(this.isRed()?0:1)}}Is.EMPTY=null,Is.RED=!0,Is.BLACK=!1,Is.EMPTY=new class{constructor(){this.size=0}get key(){throw jr()}get value(){throw jr()}get color(){throw jr()}get left(){throw jr()}get right(){throw jr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Is(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.comparator=t,this.data=new Es(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ks(this.data.getIterator())}getIteratorFrom(t){return new ks(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ts))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ts(this.comparator);return e.data=t,e}}class ks{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t){this.fields=t,t.sort(is.comparator)}static empty(){return new Cs([])}unionWith(t){let e=new Ts(is.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Cs(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ss(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ss(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ss.EMPTY_BYTE_STRING=new Ss("");const Os=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(t){if(Ur(!!t),"string"==typeof t){let e=0;const n=Os.exec(t);if(Ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xs(t.seconds),nanos:xs(t.nanos)}}function xs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rs(t){return"string"==typeof t?Ss.fromBase64String(t):Ss.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ns(t){const e=t.mapValue.fields.__previous_value__;return Ps(e)?Ns(e):e}function Ds(t){const e=As(t.mapValue.fields.__local_write_time__.timestampValue);return new ts(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ms{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ms&&t.projectId===this.projectId&&t.database===this.database}}function js(t){return null==t}function Us(t){return 0===t&&1/t==-1/0}function Fs(t){return"number"==typeof t&&Number.isInteger(t)&&!Us(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ps(t)?4:ti(t)?9007199254740991:10:jr()}function qs(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ds(t).isEqual(Ds(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=As(t.timestampValue),r=As(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Rs(t.bytesValue).isEqual(Rs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xs(t.geoPointValue.latitude)===xs(e.geoPointValue.latitude)&&xs(t.geoPointValue.longitude)===xs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xs(t.integerValue)===xs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xs(t.doubleValue),r=xs(e.doubleValue);return n===r?Us(n)===Us(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],qs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ws(n)!==ws(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!qs(n[s],r[s])))return!1;return!0}(t,e);default:return jr()}}function zs(t,e){return void 0!==(t.values||[]).find((t=>qs(t,e)))}function Hs(t,e){if(t===e)return 0;const n=Bs(t),r=Bs(e);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xs(t.integerValue||t.doubleValue),r=xs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return $s(t.timestampValue,e.timestampValue);case 4:return $s(Ds(t),Ds(e));case 5:return Xr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rs(t),r=Rs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Xr(n[s],r[s]);if(0!==t)return t}return Xr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xr(xs(t.latitude),xs(e.latitude));return 0!==n?n:Xr(xs(t.longitude),xs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Hs(n[s],r[s]);if(t)return t}return Xr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Vs.mapValue&&e===Vs.mapValue)return 0;if(t===Vs.mapValue)return 1;if(e===Vs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Xr(r[o],i[o]);if(0!==t)return t;const e=Hs(n[r[o]],s[i[o]]);if(0!==e)return e}return Xr(r.length,i.length)}(t.mapValue,e.mapValue);default:throw jr()}}function $s(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xr(t,e);const n=As(t),r=As(e),s=Xr(n.seconds,r.seconds);return 0!==s?s:Xr(n.nanos,r.nanos)}function Ks(t){return Gs(t)}function Gs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=As(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,os.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Gs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Gs(t.fields[s])}`;return n+"}"}(t.mapValue):jr();var e,n}function Ws(t){return!!t&&"integerValue"in t}function Js(t){return!!t&&"arrayValue"in t}function Qs(t){return!!t&&"nullValue"in t}function Ys(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xs(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ti(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t){this.value=t}static empty(){return new ei({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zs(e)}setAll(t){let e=is.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Zs(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Xs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Xs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){vs(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ei(Zs(this.value))}}function ni(t){const e=[];return vs(t.fields,((t,n)=>{const r=new is([t]);if(Xs(n)){const t=ni(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Cs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ri{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new ri(t,0,es.min(),es.min(),ei.empty(),0)}static newFoundDocument(t,e,n){return new ri(t,1,e,es.min(),n,0)}static newNoDocument(t,e){return new ri(t,2,e,es.min(),ei.empty(),0)}static newUnknownDocument(t,e){return new ri(t,3,e,es.min(),ei.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ei.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=es.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ri&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ri(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ht=null}}function ii(t,e=null,n=[],r=[],s=null,i=null,o=null){return new si(t,e,n,r,s,i,o)}function oi(t){const e=Fr(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ks(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),js(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ks(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ks(t))).join(",")),e.ht=t}return e.ht}function ai(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ks(e.value)}`;var e})).join(", ")}]`),js(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ks(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ks(t))).join(",")),`Target(${e})`}function ci(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Ei(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!qs(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ii(t.startAt,e.startAt)&&Ii(t.endAt,e.endAt)}function li(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ui extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hi(t,e,n):"array-contains"===e?new mi(t,n):"in"===e?new gi(t,n):"not-in"===e?new yi(t,n):"array-contains-any"===e?new wi(t,n):new ui(t,e,n)}static lt(t,e,n){return"in"===e?new di(t,n):new fi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Hs(e,this.value)):null!==e&&Bs(this.value)===Bs(e)&&this.ft(Hs(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return jr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hi extends ui{constructor(t,e,n){super(t,e,n),this.key=os.fromName(n.referenceValue)}matches(t){const e=os.comparator(t.key,this.key);return this.ft(e)}}class di extends ui{constructor(t,e){super(t,"in",e),this.keys=pi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fi extends ui{constructor(t,e){super(t,"not-in",e),this.keys=pi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>os.fromName(t.referenceValue)))}class mi extends ui{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Js(e)&&zs(e.arrayValue,this.value)}}class gi extends ui{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zs(this.value.arrayValue,e)}}class yi extends ui{constructor(t,e){super(t,"not-in",e)}matches(t){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zs(this.value.arrayValue,e)}}class wi extends ui{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Js(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zs(this.value.arrayValue,t)))}}class vi{constructor(t,e){this.position=t,this.inclusive=e}}class bi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ei(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _i(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Hs(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ii(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ki(t,e,n,r,s,i,o,a){return new Ti(t,e,n,r,s,i,o,a)}function Ci(t){return new Ti(t)}function Si(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Oi(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ai(t){for(const e of t.filters)if(e.dt())return e.field;return null}function xi(t){return null!==t.collectionGroup}function Ri(t){const e=Fr(t);if(null===e._t){e._t=[];const t=Ai(e),n=Oi(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new bi(t)),e._t.push(new bi(is.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new bi(is.keyField(),t))}}}return e._t}function Pi(t){const e=Fr(t);if(!e.wt)if("F"===e.limitType)e.wt=ii(e.path,e.collectionGroup,Ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Ri(e)){const e="desc"===s.dir?"asc":"desc";t.push(new bi(s.field,e))}const n=e.endAt?new vi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vi(e.startAt.position,e.startAt.inclusive):null;e.wt=ii(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Ni(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Di(t,e){return ci(Pi(t),Pi(e))&&t.limitType===e.limitType}function Li(t){return`${oi(Pi(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${ai(Pi(t))}; limitType=${t.limitType})`}function ji(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):os.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ri(t),e))&&!(t.endAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ri(t),e))}(t,e)}function Ui(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fi(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const t=Vi(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Vi(t,e,n){const r=t.field.isKeyField()?os.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Hs(r,s):jr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function qi(t){return{integerValue:""+t}}function zi(t,e){return Fs(e)?qi(e):Bi(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function $i(t,e,n){return t instanceof Wi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ji?Qi(t,e):t instanceof Yi?Xi(t,e):function(t,e){const n=Gi(t,e),r=to(n)+to(t.yt);return Ws(n)&&Ws(t.yt)?qi(r):Bi(t.It,r)}(t,e)}function Ki(t,e,n){return t instanceof Ji?Qi(t,e):t instanceof Yi?Xi(t,e):n}function Gi(t,e){return t instanceof Zi?Ws(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Wi extends Hi{}class Ji extends Hi{constructor(t){super(),this.elements=t}}function Qi(t,e){const n=eo(e);for(const r of t.elements)n.some((t=>qs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Yi extends Hi{constructor(t){super(),this.elements=t}}function Xi(t,e){let n=eo(e);for(const r of t.elements)n=n.filter((t=>!qs(t,r)));return{arrayValue:{values:n}}}class Zi extends Hi{constructor(t,e){super(),this.It=t,this.yt=e}}function to(t){return xs(t.integerValue||t.doubleValue)}function eo(t){return Js(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){this.field=t,this.transform=e}}function ro(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ji&&e instanceof Ji||t instanceof Yi&&e instanceof Yi?Zr(t.elements,e.elements,qs):t instanceof Zi&&e instanceof Zi?qs(t.yt,e.yt):t instanceof Wi&&e instanceof Wi}(t.transform,e.transform)}class so{constructor(t,e){this.version=t,this.transformResults=e}}class io{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new io}static exists(t){return new io(void 0,t)}static updateTime(t){return new io(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ao{}function co(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new vo(t.key,io.none()):new po(t.key,t.data,io.none());{const n=t.data,r=ei.empty();let s=new Ts(is.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new mo(t.key,r,new Cs(s.toArray()),io.none())}}function lo(t,e,n){t instanceof po?function(t,e,n){const r=t.value.clone(),s=yo(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!oo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=yo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(go(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof po?function(t,e,n,r){if(!oo(t.precondition,e))return n;const s=t.value.clone(),i=wo(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof mo?function(t,e,n,r){if(!oo(t.precondition,e))return n;const s=wo(t.fieldTransforms,r,e),i=e.data;return i.setAll(go(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return oo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ho(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Gi(r.transform,t||null);null!=s&&(null===n&&(n=ei.empty()),n.set(r.field,s))}return n||null}function fo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>ro(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends ao{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mo extends ao{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function go(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yo(t,e,n){const r=new Map;Ur(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ki(o,a,n[s]))}return r}function wo(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,$i(t,i,e))}return r}class vo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o,Io;function To(t){switch(t){default:return jr();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function ko(t){if(void 0===t)return Dr("GRPC error has no .code"),Vr.UNKNOWN;switch(t){case _o.OK:return Vr.OK;case _o.CANCELLED:return Vr.CANCELLED;case _o.UNKNOWN:return Vr.UNKNOWN;case _o.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case _o.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case _o.INTERNAL:return Vr.INTERNAL;case _o.UNAVAILABLE:return Vr.UNAVAILABLE;case _o.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case _o.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case _o.NOT_FOUND:return Vr.NOT_FOUND;case _o.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case _o.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case _o.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case _o.ABORTED:return Vr.ABORTED;case _o.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case _o.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case _o.DATA_LOSS:return Vr.DATA_LOSS;default:return jr()}}(Io=_o||(_o={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){vs(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return bs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Es(os.comparator);function Oo(){return So}const Ao=new Es(os.comparator);function xo(...t){let e=Ao;for(const n of t)e=e.insert(n.key,n);return e}function Ro(t){let e=Ao;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Po(){return Do()}function No(){return Do()}function Do(){return new Co((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Lo=new Es(os.comparator),Mo=new Ts(os.comparator);function jo(...t){let e=Mo;for(const n of t)e=e.add(n);return e}const Uo=new Ts(Xr);function Fo(){return Uo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Bo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Vo(es.min(),n,Fo(),Oo(),jo())}}class Bo{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Bo(Ss.EMPTY_BYTE_STRING,e,jo(),jo(),jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class zo{constructor(t,e){this.targetId=t,this.At=e}}class Ho{constructor(t,e,n=Ss.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class $o{constructor(){this.Rt=0,this.bt=Wo(),this.Pt=Ss.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=jo(),e=jo(),n=jo();return this.bt.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:jr()}})),new Bo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Wo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ko{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Oo(),this.qt=Go(),this.Kt=new Ts(Xr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:jr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(li(t))if(0===n){const n=new os(t.path);this.jt(e,n,ri.newNoDocument(n,es.min()))}else Ur(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const s=this.Xt(r);if(s){if(n.current&&li(s.target)){const e=new os(s.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,ri.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=jo();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Vo(t,e,this.Kt,this.Ut,n);return this.Ut=Oo(),this.qt=Go(),this.Kt=new Ts(Xr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new $o,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ts(Xr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Nr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new $o),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Go(){return new Es(os.comparator)}function Wo(){return new Es(os.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Yo{constructor(t,e){this.databaseId=t,this.gt=e}}function Xo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ta(t,e){return Xo(t,e.toTimestamp())}function ea(t){return Ur(!!t),es.fromTimestamp(function(t){const e=As(t);return new ts(e.seconds,e.nanos)}(t))}function na(t,e){return function(t){return new rs(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ra(t){const e=rs.fromString(t);return Ur(Ca(e)),e}function sa(t,e){return na(t.databaseId,e.path)}function ia(t,e){const n=ra(e);if(n.get(1)!==t.databaseId.projectId)throw new Br(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Br(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new os(la(n))}function oa(t,e){return na(t.databaseId,e)}function aa(t){const e=ra(t);return 4===e.length?rs.emptyPath():la(e)}function ca(t){return new rs(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function la(t){return Ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ua(t,e,n){return{name:sa(t,e),fields:n.value.mapValue.fields}}function ha(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:jr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Ur(void 0===e||"string"==typeof e),Ss.fromBase64String(e||"")):(Ur(void 0===e||e instanceof Uint8Array),Ss.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vr.UNKNOWN:ko(t.code);return new Br(e,t.message||"")}(o);n=new Ho(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ia(t,r.document.name),i=ea(r.document.updateTime),o=new ei({mapValue:{fields:r.document.fields}}),a=ri.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new qo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ia(t,r.document),i=r.readTime?ea(r.readTime):es.min(),o=ri.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ia(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return jr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Eo(r),i=t.targetId;n=new zo(i,s)}}return n}function da(t,e){let n;if(e instanceof po)n={update:ua(t,e.key,e.value)};else if(e instanceof vo)n={delete:sa(t,e.key)};else if(e instanceof mo)n={update:ua(t,e.key,e.data),updateMask:ka(e.fieldMask)};else{if(!(e instanceof bo))return jr();n={verify:sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Wi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ji)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Yi)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw jr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ta(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:jr()}(t,e.precondition)),n}function fa(t,e){return t&&t.length>0?(Ur(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ea(t.updateTime):ea(e);return n.isEqual(es.min())&&(n=ea(e)),new so(n,t.transformResults||[])}(t,e)))):[]}function pa(t,e){return{documents:[oa(t,e.path)]}}function ma(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=oa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ys(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NAN"}};if(Qs(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ys(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NAN"}};if(Qs(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ea(t.field),op:ba(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ea(t.field),direction:va(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||js(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ga(t){let e=aa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ur(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=wa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bi(_a(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,js(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vi(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new vi(n,e)}(n.endAt)),ki(e,s,o,i,a,"F",c,l)}function ya(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return jr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function wa(t){return t?void 0!==t.unaryFilter?[Ta(t)]:void 0!==t.fieldFilter?[Ia(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wa(t))).reduce(((t,e)=>t.concat(e))):jr():[]}function va(t){return Jo[t]}function ba(t){return Qo[t]}function Ea(t){return{fieldPath:t.canonicalString()}}function _a(t){return is.fromServerFormat(t.fieldPath)}function Ia(t){return ui.create(_a(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return jr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ta(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_a(t.unaryFilter.field);return ui.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_a(t.unaryFilter.field);return ui.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_a(t.unaryFilter.field);return ui.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_a(t.unaryFilter.field);return ui.create(s,"!=",{nullValue:"NULL_VALUE"});default:return jr()}}function ka(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ca(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Aa=Oa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=No();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=co(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(es.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>fo(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>fo(t,e)))}}class Ra{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ur(t.mutations.length===n.length);let r=Lo;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Ra(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,r,s=es.min(),i=es.min(),o=Ss.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Na(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Na(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Na(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this.re=t}}function La(t){const e=ga({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ni(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(xs(t.integerValue));else if("doubleValue"in t){const n=xs(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Us(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Rs(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ti(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):jr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),os.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Ma.Te=new Ma;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.Ye=new Ua}addToCollectionParentIndex(t,e){return this.Ye.add(e),ms.resolve()}getCollectionParents(t,e){return ms.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return ms.resolve()}deleteFieldIndex(t,e){return ms.resolve()}getDocumentsMatchingTarget(t,e){return ms.resolve(null)}getIndexType(t,e){return ms.resolve(0)}getFieldIndexes(t,e){return ms.resolve([])}getNextCollectionGroupToUpdate(t){return ms.resolve(null)}getMinOffset(t,e){return ms.resolve(us.min())}getMinOffsetFromCollectionGroup(t,e){return ms.resolve(us.min())}updateCollectionGroup(t,e,n){return ms.resolve()}updateIndexEntries(t,e){return ms.resolve()}}class Ua{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ts(rs.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ts(rs.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Fa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Fa(t,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa.DEFAULT_COLLECTION_PERCENTILE=10,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fa.DEFAULT=new Fa(41943040,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fa.DISABLED=new Fa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new Co((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ri.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ms.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&uo(n.mutation,t,Cs.empty(),ts.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,jo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=jo()){const r=Po();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=xo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Po();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,jo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=Oo();const i=Do(),o=Do();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof mo)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),uo(o.mutation,e,o.mutation.getFieldMask(),ts.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new qa(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Do();let r=new Es(((t,e)=>t-e)),s=jo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Cs.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||jo()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=No();c.forEach((t=>{if(!s.has(t)){const r=co(e.get(t),n.get(t));null!==r&&l.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,l))}return ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xi(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ms.resolve(Po());let o=-1,a=s;return i.next((e=>ms.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ms.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,jo()))).next((t=>({batchId:o,changes:Ro(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new os(e)).next((t=>{let e=xo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=xo();return this.indexManager.getCollectionParents(t,r).next((i=>ms.forEach(i,(i=>{const o=function(t,e){return new Ti(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ri.newInvalidDocument(n)))}));let n=xo();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&uo(i.mutation,s,Cs.empty(),ts.now()),ji(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ms.resolve(ri.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return ms.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ea(n.createTime)}),ms.resolve()}getNamedQuery(t,e){return ms.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:La(t.bundledQuery),readTime:ea(t.readTime)}}(e)),ms.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.overlays=new Es(os.comparator),this.es=new Map}getOverlay(t,e){return ms.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Po();return ms.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),ms.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),ms.resolve()}getOverlaysForCollection(t,e,n){const r=Po(),s=e.length+1,i=new os(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ms.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Es(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Po(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Po(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ms.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Pa(e,n));let s=this.es.get(e);void 0===s&&(s=jo(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.ns=new Ts(Ga.ss),this.rs=new Ts(Ga.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ga(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ga(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new os(new rs([])),n=new Ga(e,t),r=new Ga(e,t+1),s=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new os(new rs([])),n=new Ga(e,t),r=new Ga(e,t+1);let s=jo();return this.rs.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ga(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ga{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return os.comparator(t.key,e.key)||Xr(t._s,e._s)}static os(t,e){return Xr(t._s,e._s)||os.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ts(Ga.ss)}checkEmpty(t){return ms.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new xa(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new Ga(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ms.resolve(i)}lookupMutationBatch(t,e){return ms.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),s=r<0?0:r;return ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ms.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ga(e,0),r=new Ga(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);s.push(e)})),ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ts(Xr);return e.forEach((t=>{const e=new Ga(t,0),r=new Ga(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),ms.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const i=new Ga(new os(s),0);let o=new Ts(Xr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),i),ms.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ur(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ms.forEach(e.mutations,(r=>{const s=new Ga(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ga(e,0),r=this.gs.firstAfterOrEqual(n);return ms.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ms.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.Es=t,this.docs=new Es(os.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ms.resolve(n?n.document.mutableCopy():ri.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ri.newInvalidDocument(t))})),ms.resolve(n)}getAllFromCollection(t,e,n){let r=Oo();const s=new os(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hs(ls(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ms.resolve(r)}getAllFromCollectionGroup(t,e,n,r){jr()}As(t,e){return ms.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return ms.resolve(this.size)}}class Qa extends Ba{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),ms.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.persistence=t,this.Rs=new Co((t=>oi(t)),ci),this.lastRemoteSnapshotVersion=es.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ka,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),ms.resolve()}getLastRemoteSnapshotVersion(t){return ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ms.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),ms.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),ms.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,ms.resolve()}updateTargetData(t,e){return this.Dn(e),ms.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,ms.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ms.waitFor(s).next((()=>r))}getTargetCount(t){return ms.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return ms.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),ms.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ms.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),ms.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return ms.resolve(n)}containsKey(t,e){return ms.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new ys(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ya(this),this.indexManager=new ja,this.remoteDocumentCache=function(t){return new Ja(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Da(e),this.Ns=new Ha(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $a,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Wa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Nr("MemoryPersistence","Starting transaction:",t);const r=new Za(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Ms(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Os(t,e){return ms.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Za extends fs{constructor(t){super(),this.currentSequenceNumber=t}}class tc{constructor(t){this.persistence=t,this.Fs=new Ka,this.$s=null}static Bs(t){return new tc(t)}get Ls(){if(this.$s)return this.$s;throw jr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),ms.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),ms.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),ms.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ms.forEach(this.Ls,(n=>{const r=os.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,es.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return ms.or([()=>ms.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=jo(),r=jo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ec(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((s=>s||this.Mi(t,e,r,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(Si(e))return ms.resolve(null);let n=Pi(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ni(e,null,"F"),n=Pi(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=jo(...r);return this.Ni.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,r);return this.$i(e,i,s,n.readTime)?this.ki(t,Ni(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Mi(t,e,n,r){return Si(e)||r.isEqual(es.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((s=>{const i=this.Fi(e,s);return this.$i(e,i,n,r)?this.Oi(t,e):(Pr()<=o["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mi(e)),this.Bi(t,i,e,cs(r,-1)))}))}Fi(t,e){let n=new Ts(Fi(t));return e.forEach(((e,r)=>{ji(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(t,e){return Pr()<=o["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",Mi(e)),this.Ni.getDocumentsMatchingQuery(t,e,us.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new Es(Xr),this.qi=new Co((t=>oi(t)),ci),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new za(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function sc(t,e,n,r){return new rc(t,e,n,r)}async function ic(t,e){const n=Fr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=jo();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function oc(t,e){const n=Fr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ms.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ur(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=jo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function ac(t){const e=Fr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function cc(t,e){const n=Fr(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Ss.EMPTY_BYTE_STRING,es.min()).withLastLimboFreeSnapshotVersion(es.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,i)&&o.push(n.Cs.updateTargetData(t,l))}));let a=Oo(),c=jo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(lc(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(es.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ms.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=s,t)))}function lc(t,e,n){let r=jo(),s=jo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Oo();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(es.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function uc(t,e){const n=Fr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function hc(t,e){const n=Fr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((s=>s?(r=s,ms.resolve(r)):n.Cs.allocateTargetId(t).next((s=>(r=new Na(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function dc(t,e,n){const r=Fr(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!gs(t))throw t;Nr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function fc(t,e,n){const r=Fr(t);let s=es.min(),i=jo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Fr(t),s=r.qi.get(n);return void 0!==s?ms.resolve(r.Ui.get(s)):r.Cs.getTargetData(e,n)}(r,t,Pi(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?s:es.min(),n?i:jo()))).next((t=>(pc(r,Ui(e),t),{documents:t,Hi:i})))))}function pc(t,e,n){let r=es.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class mc{constructor(){this.activeTargetIds=Fo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Lr=new mc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new mc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,r,s){const i=this.ao(t,e);Nr("RestConnection","Sending: ",i,n);const o={};return this.ho(o,r,s),this.lo(t,i,o,n).then((t=>(Nr("RestConnection","Received: ",t),t)),(e=>{throw Lr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}fo(t,e,n,r,s,i){return this.co(t,e,n,r,s)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=vc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,r){return new Promise(((s,i)=>{const o=new Sr;o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Er.NO_ERROR:const e=o.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Er.TIMEOUT:Nr("Connection",'RPC "'+t+'" timed out'),i(new Br(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const n=o.getStatus();if(Nr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(e)>=0?e:Vr.UNKNOWN}(t.status);i(new Br(e,t.message))}else i(new Br(Vr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Br(Vr.UNAVAILABLE,"Connection failed."));break;default:jr()}}finally{Nr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=vr(),i=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new kr({})),this.ho(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new bc({Hr:t=>{u?Nr("Connection","Not sending because WebChannel is closed:",t):(l||(Nr("Connection","Opening WebChannel transport."),c.open(),l=!0),Nr("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Cr.EventType.OPEN,(()=>{u||Nr("Connection","WebChannel transport opened.")})),d(c,Cr.EventType.CLOSE,(()=>{u||(u=!0,Nr("Connection","WebChannel transport closed"),h.io())})),d(c,Cr.EventType.ERROR,(t=>{u||(u=!0,Lr("Connection","WebChannel transport errored:",t),h.io(new Br(Vr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Cr.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Ur(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Nr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=_o[t];if(void 0!==e)return ko(e)}(t),n=s.message;void 0===e&&(e=Vr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),u=!0,h.io(new Br(e,n)),c.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),d(i,Ir.STAT_EVENT,(t=>{t.stat===Tr.PROXY?Nr("Connection","Detected buffering proxy"):t.stat===Tr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new Yo(t,!0)}class Tc{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,e-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,r,s,i,o,a){this.Hs=t,this.Po=n,this.vo=r,this.Vo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Tc(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Vr.RESOURCE_EXHAUSTED?(Dr(e.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Br(Vr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return Nr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cc extends kc{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.It=s}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=ha(this.It,t),n=function(t){if(!("targetChange"in t))return es.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?es.min():e.readTime?ea(e.readTime):es.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ca(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=li(r)?{documents:pa(t,r)}:{query:ma(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Zo(t,e.resumeToken):e.snapshotVersion.compareTo(es.min())>0&&(n.readTime=Xo(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ya(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ca(this.It),e.removeTarget=t,this.Bo(e)}}class Sc extends kc{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.Vo._o("Write",t,e)}onMessage(t){if(Ur(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=fa(t.writeResults,t.commitTime),n=ea(t.commitTime);return this.listener.Zo(n,e)}return Ur(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ca(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>da(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Br(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.Vo.co(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(Vr.UNKNOWN,t.toString())}))}fo(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Vo.fo(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(Vr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Ac{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(e),this.ou=!1):Nr("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Fc(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Fr(t);e._u.add(4),await Pc(e),e.gu.set("Unknown"),e._u.delete(4),await Rc(e)}(this))}))})),this.gu=new Ac(n,r)}}async function Rc(t){if(Fc(t))for(const e of t.wu)await e(!0)}async function Pc(t){for(const e of t.wu)await e(!1)}function Nc(t,e){const n=Fr(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Uc(n)?jc(n):rl(n).ko()&&Lc(n,e))}function Dc(t,e){const n=Fr(t),r=rl(n);n.du.delete(e),r.ko()&&Mc(n,e),0===n.du.size&&(r.ko()?r.Fo():Fc(n)&&n.gu.set("Unknown"))}function Lc(t,e){t.yu.Ot(e.targetId),rl(t).zo(e)}function Mc(t,e){t.yu.Ot(e),rl(t).Ho(e)}function jc(t){t.yu=new Ko({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),rl(t).start(),t.gu.uu()}function Uc(t){return Fc(t)&&!rl(t).No()&&t.du.size>0}function Fc(t){return 0===Fr(t)._u.size}function Vc(t){t.yu=void 0}async function Bc(t){t.du.forEach(((e,n)=>{Lc(t,e)}))}async function qc(t,e){Vc(t),Uc(t)?(t.gu.hu(e),jc(t)):t.gu.set("Unknown")}async function zc(t,e,n){if(t.gu.set("Online"),e instanceof Ho&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Hc(t,n)}else if(e instanceof qo?t.yu.Gt(e):e instanceof zo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(es.min()))try{const e=await ac(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(r);s&&t.du.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Ss.EMPTY_BYTE_STRING,n.snapshotVersion)),Mc(t,e);const r=new Na(n.target,e,1,n.sequenceNumber);Lc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Nr("RemoteStore","Failed to raise snapshot:",e),await Hc(t,e)}}async function Hc(t,e,n){if(!gs(e))throw e;t._u.add(1),await Pc(t),t.gu.set("Offline"),n||(n=()=>ac(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Rc(t)}))}function $c(t,e){return e().catch((n=>Hc(t,n,e)))}async function Kc(t){const e=Fr(t),n=sl(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Gc(e);)try{const t=await uc(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,Wc(e,t)}catch(t){await Hc(e,t)}Jc(e)&&Qc(e)}function Gc(t){return Fc(t)&&t.fu.length<10}function Wc(t,e){t.fu.push(e);const n=sl(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Jc(t){return Fc(t)&&!sl(t).No()&&t.fu.length>0}function Qc(t){sl(t).start()}async function Yc(t){sl(t).eu()}async function Xc(t){const e=sl(t);for(const n of t.fu)e.Xo(n.mutations)}async function Zc(t,e,n){const r=t.fu.shift(),s=Ra.from(r,e,n);await $c(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Kc(t)}async function tl(t,e){e&&sl(t).Yo&&await async function(t,e){if(n=e.code,To(n)&&n!==Vr.ABORTED){const n=t.fu.shift();sl(t).Oo(),await $c(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Kc(t)}var n}(t,e),Jc(t)&&Qc(t)}async function el(t,e){const n=Fr(t);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Fc(n);n._u.add(3),await Pc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Rc(n)}async function nl(t,e){const n=Fr(t);e?(n._u.delete(2),await Rc(n)):e||(n._u.add(2),await Pc(n),n.gu.set("Unknown"))}function rl(t){return t.pu||(t.pu=function(t,e,n){const r=Fr(t);return r.su(),new Cc(e,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Bc.bind(null,t),Zr:qc.bind(null,t),Wo:zc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),Uc(t)?jc(t):t.gu.set("Unknown")):(await t.pu.stop(),Vc(t))}))),t.pu}function sl(t){return t.Iu||(t.Iu=function(t,e,n){const r=Fr(t);return r.su(),new Sc(e,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Yc.bind(null,t),Zr:tl.bind(null,t),tu:Xc.bind(null,t),Zo:Zc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Oo(),await Kc(t)):(await t.Iu.stop(),t.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class il{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new il(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(Vr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),gs(t))return new Br(Vr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.comparator=t?(e,n)=>t(e,n)||os.comparator(e.key,n.key):(t,e)=>os.comparator(t.key,e.key),this.keyedMap=xo(),this.sortedSet=new Es(this.comparator)}static emptySet(t){return new al(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof al))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new al;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.Tu=new Es(os.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):jr():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ll{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new ll(t,e,al.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.Au=void 0,this.listeners=[]}}class hl{constructor(){this.queries=new Co((t=>Li(t)),Di),this.onlineState="Unknown",this.Ru=new Set}}async function dl(t,e){const n=Fr(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ul),s)try{i.Au=await n.onListen(r)}catch(t){const n=ol(t,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&gl(n)}async function fl(t,e){const n=Fr(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pl(t,e){const n=Fr(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(s)&&(r=!0);e.Au=s}}r&&gl(n)}function ml(t,e,n){const r=Fr(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function gl(t){t.Ru.forEach((t=>{t.next()}))}class yl{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ll(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=ll.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(t){this.key=t}}class vl{constructor(t){this.key=t}}class bl{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=jo(),this.mutatedKeys=jo(),this.Ku=Fi(t),this.Gu=new al(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new cl,r=e?e.Gu:this.Gu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const l=r.get(t),u=ji(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.zu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ku(u,a)>0||c&&this.Ku(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Gu:i,Wu:n,$i:o,mutatedKeys:s}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const s=t.Wu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return jr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const i=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new ll(this.query,t.Gu,r,s,t.mutatedKeys,0===o,a,!1),Yu:i}:{Yu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new cl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=jo(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new vl(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new wl(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=jo();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return ll.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class El{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _l{constructor(t){this.key=t,this.ec=!1}}class Il{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new Co((t=>Li(t)),Di),this.ic=new Map,this.rc=new Set,this.oc=new Es(os.comparator),this.uc=new Map,this.cc=new Ka,this.ac={},this.hc=new Map,this.lc=Va.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Tl(t,e){const n=zl(t);let r,s;const i=n.sc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const t=await hc(n.localStore,Pi(e));n.isPrimaryClient&&Nc(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await kl(n,e,r,"current"===i)}return s}async function kl(t,e,n,r){t.dc=(e,n,r)=>async function(t,e,n,r){let s=e.view.ju(n);s.$i&&(s=await fc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return jl(t,e.targetId,o.Yu),o.snapshot}(t,e,n,r);const s=await fc(t.localStore,e,!0),i=new bl(e,s.Hi),o=i.ju(s.documents),a=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);jl(t,n,c.Yu);const l=new El(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function Cl(t,e){const n=Fr(t),r=n.sc.get(e),s=n.ic.get(r.targetId);if(s.length>1)return n.ic.set(r.targetId,s.filter((t=>!Di(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Dc(n.remoteStore,r.targetId),Ll(n,r.targetId)})).catch(ps)):(Ll(n,r.targetId),await dc(n.localStore,r.targetId,!0))}async function Sl(t,e,n){const r=Hl(t);try{const t=await function(t,e){const n=Fr(t),r=ts.now(),s=e.reduce(((t,e)=>t.add(e.key)),jo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Oo(),c=jo();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=ho(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new mo(t.key,e,ni(e.value.mapValue),io.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ro(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ac[t.currentUser.toKey()];r||(r=new Es(Xr)),r=r.insert(e,n),t.ac[t.currentUser.toKey()]=r}(r,t.batchId,n),await Vl(r,t.changes),await Kc(r.remoteStore)}catch(t){const e=ol(t,"Failed to persist write");n.reject(e)}}async function Ol(t,e){const n=Fr(t);try{const t=await cc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.uc.get(e);r&&(Ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ec=!0:t.modifiedDocuments.size>0?Ur(r.ec):t.removedDocuments.size>0&&(Ur(r.ec),r.ec=!1))})),await Vl(n,t,e)}catch(t){await ps(t)}}function Al(t,e,n){const r=Fr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.sc.forEach(((n,r)=>{const s=r.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Fr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.bu(e)&&(r=!0)})),r&&gl(n)}(r.eventManager,e),t.length&&r.nc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xl(t,e,n){const r=Fr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.uc.get(e),i=s&&s.key;if(i){let t=new Es(os.comparator);t=t.insert(i,ri.newNoDocument(i,es.min()));const n=jo().add(i),s=new Vo(es.min(),new Map,new Ts(Xr),t,n);await Ol(r,s),r.oc=r.oc.remove(i),r.uc.delete(e),Fl(r)}else await dc(r.localStore,e,!1).then((()=>Ll(r,e,n))).catch(ps)}async function Rl(t,e){const n=Fr(t),r=e.batch.batchId;try{const t=await oc(n.localStore,e);Dl(n,r,null),Nl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vl(n,t)}catch(t){await ps(t)}}async function Pl(t,e,n){const r=Fr(t);try{const t=await function(t,e){const n=Fr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ur(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Dl(r,e,n),Nl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vl(r,t)}catch(n){await ps(n)}}function Nl(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Dl(t,e,n){const r=Fr(t);let s=r.ac[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||Ml(t,e)}))}function Ml(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Dc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Fl(t))}function jl(t,e,n){for(const r of n)r instanceof wl?(t.cc.addReference(r.key,e),Ul(t,r)):r instanceof vl?(Nr("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Ml(t,r.key)):jr()}function Ul(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),t.rc.add(r),Fl(t))}function Fl(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new os(rs.fromString(e)),r=t.lc.next();t.uc.set(r,new _l(n)),t.oc=t.oc.insert(n,r),Nc(t.remoteStore,new Na(Pi(Ci(n.path)),r,2,ys.at))}}async function Vl(t,e,n){const r=Fr(t),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((t,a)=>{o.push(r.dc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=ec.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.nc.Wo(s),await async function(t,e){const n=Fr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ms.forEach(e,(e=>ms.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ms.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gs(t))throw t;Nr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,s)}}}(r.localStore,i))}async function Bl(t,e){const n=Fr(t);if(!n.currentUser.isEqual(e)){Nr("SyncEngine","User change. New user:",e.toKey());const t=await ic(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Br(Vr.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vl(n,t.ji)}}function ql(t,e){const n=Fr(t),r=n.uc.get(e);if(r&&r.ec)return jo().add(r.key);{let t=jo();const r=n.ic.get(e);if(!r)return t;for(const e of r){const r=n.sc.get(e);t=t.unionWith(r.view.Qu)}return t}}function zl(t){const e=Fr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ol.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ql.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xl.bind(null,e),e.nc.Wo=pl.bind(null,e.eventManager),e.nc._c=ml.bind(null,e.eventManager),e}function Hl(t){const e=Fr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pl.bind(null,e),e}class $l{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Ic(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return sc(this.persistence,new nc,t.initialUser,this.It)}gc(t){return new Xa(tc.Bs,this.It)}mc(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Al(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bl.bind(null,this.syncEngine),await nl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hl}createDatastore(t){const e=Ic(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ec(r));var r;return function(t,e,n,r){return new Oc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Al(this.syncEngine,t,0),i=wc.C()?new wc:new yc,new xc(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Il(t,e,n,r,s,i);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Fr(t);Nr("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Pc(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):Dr("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Nr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Nr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ol(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ic(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yl(t);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>el(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>el(e.remoteStore,n))),t.onlineComponents=e}async function Yl(t){return t.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await Jl(t,new $l)),t.offlineComponents}async function Xl(t){return t.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await Ql(t,new Kl)),t.onlineComponents}function Zl(t){return Xl(t).then((t=>t.syncEngine))}async function tu(t){const e=await Xl(t),n=e.eventManager;return n.onListen=Tl.bind(null,e.syncEngine),n.onUnlisten=Cl.bind(null,e.syncEngine),n}function eu(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Gl({next:i=>{e.enqueueAndForget((()=>fl(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Br(Vr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Br(Vr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new yl(Ci(n.path),i,{includeMetadataChanges:!0,Nu:!0});return dl(t,o)}(await tu(t),t.asyncQueue,e,n,r))),r.promise}const nu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e,n){if(!n)throw new Br(Vr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function su(t,e,n,r){if(!0===e&&!0===r)throw new Br(Vr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iu(t){if(!os.isDocumentKey(t))throw new Br(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ou(t){if(os.isDocumentKey(t))throw new Br(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function au(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":jr()}function cu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Br(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new Br(Vr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Br(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Br(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,su("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Br(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hr;switch(t.type){case"gapi":const e=t.client;return new Gr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Br(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=nu.get(t);e&&(Nr("ComponentProvider","Removing Datastore"),nu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new hu(this.firestore,t,this._key)}}class du{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new du(this.firestore,t,this._query)}}class fu extends du{constructor(t,e,n){super(t,e,Ci(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new hu(this.firestore,null,new os(t))}withConverter(t){return new fu(this.firestore,t,this._path)}}function pu(t,e,...n){if(t=(0,a.m9)(t),ru("collection","path",e),t instanceof uu){const r=rs.fromString(e,...n);return ou(r),new fu(t,null,r)}{if(!(t instanceof hu||t instanceof fu))throw new Br(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rs.fromString(e,...n));return ou(r),new fu(t.firestore,null,r)}}function mu(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yr.R()),ru("doc","path",e),t instanceof uu){const r=rs.fromString(e,...n);return iu(r),new hu(t,null,new os(r))}{if(!(t instanceof hu||t instanceof fu))throw new Br(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rs.fromString(e,...n));return iu(r),new hu(t.firestore,t instanceof fu?t.converter:null,new os(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gu{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Tc(this,"async_queue_retry"),this.jc=()=>{const t=_c();t&&Nr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=_c();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=_c();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new qr;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(_){if(!gs(_))throw _;Nr("AsyncQueue","Operation failed with retryable error: "+_)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Dr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const r=il.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(r),r}Wc(){this.qc&&jr()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function yu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class wu extends uu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new gu,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eu(this),this._firestoreClient.terminate()}}function vu(t,e){const n="object"==typeof t?t:(0,s.Mq)(),r="string"==typeof t?t:e||"(default)";return(0,s.qX)(n,"firestore").getImmediate({identifier:r})}function bu(t){return t._firestoreClient||Eu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eu(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ls(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wl(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Br(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new is(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Iu(Ss.fromBase64String(t))}catch(t){throw new Br(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Iu(Ss.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Br(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Br(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xr(this._lat,t._lat)||Xr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=/^__.*__$/;class Su{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new po(t,this.data,e,this.fieldTransforms)}}function Ou(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw jr()}}class Au{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===s&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new Au(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.sa({path:n,ra:!1});return r.oa(t),r}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Bu(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(0===t.length)throw this.aa("Document fields must not be empty");if(Ou(this.na)&&Cu.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class xu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Ic(t)}fa(t,e,n,r=!1){return new Au({na:t,methodName:e,la:n,path:is.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ru(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new xu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pu(t,e,n,r,s,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,s);ju("Data must be an object, but it was:",o,r);const a=Lu(r,o);let c,l;if(i.merge)c=new Cs(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Uu(e,r,n);if(!o.contains(s))throw new Br(Vr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);qu(t,s)||t.push(s)}c=new Cs(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Su(new ei(a),c,l)}class Nu extends Tu{_toFieldTransform(t){return new no(t.path,new Wi)}isEqual(t){return t instanceof Nu}}function Du(t,e){if(Mu(t=(0,a.m9)(t)))return ju("Unsupported field value:",e,t),Lu(t,e);if(t instanceof Tu)return function(t,e){if(!Ou(e.na))throw e.aa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.aa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&4!==e.na)throw e.aa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Du(s,e.ca(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return zi(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ts.fromDate(t);return{timestampValue:Xo(e.It,n)}}if(t instanceof ts){const n=new ts(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xo(e.It,n)}}if(t instanceof ku)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Iu)return{bytesValue:Zo(e.It,t._byteString)};if(t instanceof hu){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:na(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.aa(`Unsupported field value: ${au(t)}`)}(t,e)}function Lu(t,e){const n={};return bs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,((t,r)=>{const s=Du(r,e.ia(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Mu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ts||t instanceof ku||t instanceof Iu||t instanceof hu||t instanceof Tu)}function ju(t,e,n){if(!Mu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=au(n);throw"an object"===r?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function Uu(t,e,n){if((e=(0,a.m9)(e))instanceof _u)return e._internalPath;if("string"==typeof e)return Vu(t,e);throw Bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fu=new RegExp("[~\\*/\\[\\]]");function Vu(t,e,n){if(e.search(Fu)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch(r){throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Br(Vr.INVALID_ARGUMENT,a+t+c)}function qu(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($u("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hu extends zu{data(){return super.data()}}function $u(t,e){return"string"==typeof e?Vu(t,e):e instanceof _u?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gu extends zu{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($u("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Wu extends Gu{data(t={}){return super.data(t)}}class Ju{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ku(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Wu(this._firestore,this._userDataWriter,n.key,n,new Ku(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Br(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Wu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ku(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Wu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ku(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Qu(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Br(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xu{}function Zu(t,...e){for(const n of e)t=n._apply(t);return t}class th extends Xu{constructor(t,e){super(),this.wa=t,this.ya=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Br(Vr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Br(Vr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new bi(e,n);return function(t,e){if(null===Oi(t)){const n=Ai(t);null!==n&&nh(t,n,e.field)}}(t,r),r}(t._query,this.wa,this.ya);return new du(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ti(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function eh(t,e="asc"){const n=e,r=$u("orderBy",t);return new th(r,n)}function nh(t,e,n){if(!n.isEqual(e))throw new Br(Vr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{convertValue(t,e="none"){switch(Bs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw jr()}}convertObject(t,e){const n={};return vs(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new ku(xs(t.latitude),xs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ns(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ds(t));default:return null}}convertTimestamp(t){const e=As(t);return new ts(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=rs.fromString(t);Ur(Ca(n));const r=new Ms(n.get(1),n.get(3)),s=new os(n.popFirst(5));return r.isEqual(e)||Dr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ih(t){t=cu(t,hu);const e=cu(t.firestore,wu);return eu(bu(e),t._key).then((n=>hh(e,t,n)))}class oh extends rh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Iu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hu(this.firestore,null,e)}}function ah(t){return uh(cu(t.firestore,wu),[new vo(t._key,io.none())])}function ch(t,e){const n=cu(t.firestore,wu),r=mu(t),s=sh(t.converter,e);return uh(n,[Pu(Ru(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,io.exists(!1))]).then((()=>r))}function lh(t,...e){var n,r,s;t=(0,a.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||yu(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges};if(yu(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let l,u,h;if(t instanceof hu)u=cu(t.firestore,wu),h=Ci(t._key.path),l={next:n=>{e[o]&&e[o](hh(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=cu(t,du);u=cu(n.firestore,wu),h=n._query;const r=new oh(u);l={next:t=>{e[o]&&e[o](new Ju(u,r,n,t))},error:e[o+1],complete:e[o+2]},Yu(t._query)}return function(t,e,n,r){const s=new Gl(r),i=new yl(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>dl(await tu(t),i))),()=>{s.Rc(),t.asyncQueue.enqueueAndForget((async()=>fl(await tu(t),i)))}}(bu(u),h,c,l)}function uh(t,e){return function(t,e){const n=new qr;return t.asyncQueue.enqueueAndForget((async()=>Sl(await Zl(t),e,n))),n.promise}(bu(t),e)}function hh(t,e,n){const r=n.docs.get(e._key),s=new oh(t);return new Gu(t,s,e._key,r,new Ku(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return new Nu("serverTimestamp")}!function(t,e=!0){!function(t){xr=t}(s.Jn),(0,s.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new wu(new $r(t.getProvider("auth-internal")),new Jr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Br(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(Or,"3.5.0",t),(0,s.KN)(Or,"3.5.0","esm2017")}()},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return l},L:function(){return a},LL:function(){return v},ZR:function(){return w},b$:function(){return f},eu:function(){return g},hl:function(){return m},m9:function(){return P},ne:function(){return O},pd:function(){return S},ru:function(){return d},tV:function(){return c},uI:function(){return h},vZ:function(){return I},w1:function(){return p},xO:function(){return k},xb:function(){return _},z$:function(){return u},zd:function(){return C}});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const l=s<t.length,u=l?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function g(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=y,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?b(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new w(r,o,n);return a}}function b(t,e){return t.replace(E,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function I(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(T(n)&&T(i)){if(!I(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function T(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function C(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function S(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=new A(t,e);return n.subscribe.bind(n)}class A{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=x(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i},EB:function(){return c},Fl:function(){return Kt},IU:function(){return xt},Jd:function(){return k},PG:function(){return Ct},SU:function(){return Bt},Um:function(){return It},WL:function(){return zt},X$:function(){return A},X3:function(){return At},XI:function(){return Ut},Xl:function(){return Rt},dq:function(){return Mt},iH:function(){return jt},j:function(){return S},lk:function(){return C},nZ:function(){return a},qj:function(){return _t},qq:function(){return E},yT:function(){return Ot}});var r=n(7139);let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}function a(){return s}function c(t){s&&s.cleanups.push(t)}const l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,h=t=>(t.n&g)>0,d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];u(s)&&!h(s)?s.delete(t):e[n++]=s,s.w&=~g,s.n&=~g}e.length=n}},p=new WeakMap;let m=0,g=1;const y=30;let w;const v=Symbol(""),b=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=w,e=I;while(t){if(t===this)return;t=t.parent}try{return this.parent=w,w=this,I=!0,g=1<<++m,m<=y?d(this):_(this),this.fn()}finally{m<=y&&f(this),g=1<<--m,w=this.parent,I=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I=!0;const T=[];function k(){T.push(I),I=!1}function C(){const t=T.pop();I=void 0===t||t}function S(t,e,n){if(I&&w){let e=p.get(t);e||p.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=l());const s=void 0;O(r,s)}}function O(t,e){let n=!1;m<=y?h(t)||(t.n|=g,n=!u(t)):n=!t.has(w),n&&(t.add(w),w.deps.push(t))}function A(t,e,n,s,i,o){const a=p.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=s)&&c.push(t)}));else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(v)),(0,r._N)(t)&&c.push(a.get(b)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(v)),(0,r._N)(t)&&c.push(a.get(b)));break;case"set":(0,r._N)(t)&&c.push(a.get(v));break}if(1===c.length)c[0]&&x(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);x(l(t))}}function x(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&R(r,e);for(const r of n)r.computed||R(r,e)}function R(t,e){(t!==w||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),D=F(),L=F(!1,!0),M=F(!0),j=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=xt(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(xt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){k();const n=xt(this)[e].apply(this,t);return C(),n}})),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?vt:wt:e?yt:gt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(j,s))return Reflect.get(j,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?N.has(s):P(s))?a:(t||S(n,"get",s),e?a:Mt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?Tt(a):_t(a):a)}}const V=q(),B=q(!0);function q(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Mt(o)&&!Mt(s))return!1;if(!t&&(Ot(s)||St(s)||(o=xt(o),s=xt(s)),!(0,r.kJ)(e)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===xt(i)&&(a?(0,r.aU)(s,o)&&A(e,"set",n,s,o):A(e,"add",n,s)),c}}function z(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,s),i}function H(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",(0,r.kJ)(t)?"length":v),Reflect.ownKeys(t)}const K={get:D,set:V,deleteProperty:z,has:H,ownKeys:$},G={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},W=(0,r.l7)({},K,{get:L,set:B}),J=t=>t,Q=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const s=xt(t),i=xt(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=Q(s),a=r?J:n?Nt:Pt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=xt(n),s=xt(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Z(t,e=!1){return t=t["__v_raw"],!e&&S(xt(t),"iterate",v),Reflect.get(t,"size",t)}function tt(t){t=xt(t);const e=xt(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function et(t,e){e=xt(e);const n=xt(this),{has:s,get:i}=Q(n);let o=s.call(n,t);o||(t=xt(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function nt(t){const e=xt(this),{has:n,get:r}=Q(e);let s=n.call(e,t);s||(t=xt(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&A(e,"delete",t,void 0,i),o}function rt(){const t=xt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=xt(i),a=e?J:t?Nt:Pt;return!t&&S(o,"iterate",v),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function it(t,e,n){return function(...s){const i=this["__v_raw"],o=xt(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=i[t](...s),h=n?J:e?Nt:Pt;return!e&&S(o,"iterate",l?b:v),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return"delete"!==t&&this}}function at(){const t={get(t){return Y(this,t)},get size(){return Z(this)},has:X,add:tt,set:et,delete:nt,clear:rt,forEach:st(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return Z(this)},has:X,add:tt,set:et,delete:nt,clear:rt,forEach:st(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return Z(this,!0)},has(t){return X.call(this,t,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:st(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return Z(this,!0)},has(t){return X.call(this,t,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:st(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=it(s,!1,!1),n[s]=it(s,!0,!1),e[s]=it(s,!1,!0),r[s]=it(s,!0,!0)})),[t,n,e,r]}const[ct,lt,ut,ht]=at();function dt(t,e){const n=e?t?ht:ut:t?lt:ct;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ft={get:dt(!1,!1)},pt={get:dt(!1,!0)},mt={get:dt(!0,!1)};const gt=new WeakMap,yt=new WeakMap,wt=new WeakMap,vt=new WeakMap;function bt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:bt((0,r.W7)(t))}function _t(t){return St(t)?t:kt(t,!1,K,ft,gt)}function It(t){return kt(t,!1,W,pt,yt)}function Tt(t){return kt(t,!0,G,mt,wt)}function kt(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Ct(t){return St(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function Ot(t){return!(!t||!t["__v_isShallow"])}function At(t){return Ct(t)||St(t)}function xt(t){const e=t&&t["__v_raw"];return e?xt(e):t}function Rt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Pt=t=>(0,r.Kn)(t)?_t(t):t,Nt=t=>(0,r.Kn)(t)?Tt(t):t;function Dt(t){I&&w&&(t=xt(t),O(t.dep||(t.dep=l())))}function Lt(t,e){t=xt(t),t.dep&&x(t.dep)}function Mt(t){return!(!t||!0!==t.__v_isRef)}function jt(t){return Ft(t,!1)}function Ut(t){return Ft(t,!0)}function Ft(t,e){return Mt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:xt(t),this._value=e?t:Pt(t)}get value(){return Dt(this),this._value}set value(t){const e=this.__v_isShallow||Ot(t)||St(t);t=e?t:xt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Pt(t),Lt(this,t))}}function Bt(t){return Mt(t)?t.value:t}const qt={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Mt(s)&&!Mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zt(t){return Ct(t)?t:new Proxy(t,qt)}var Ht;class $t{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Ht]=!1,this._dirty=!0,this.effect=new E(t,(()=>{this._dirty||(this._dirty=!0,Lt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=xt(this);return Dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new $t(s,i,o||!i,n);return a}Ht="__v_isReadonly"},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},FN:function(){return hn},Fl:function(){return Sn},HY:function(){return Re},JJ:function(){return H},Ko:function(){return jt},P$:function(){return et},Q6:function(){return at},U2:function(){return rt},Uk:function(){return tn},Us:function(){return ke},WI:function(){return Ut},Wm:function(){return Qe},Y3:function(){return w},Y8:function(){return X},YP:function(){return G},_:function(){return Je},aZ:function(){return ct},bv:function(){return Et},f3:function(){return $},h:function(){return On},iD:function(){return qe},ic:function(){return It},j4:function(){return ze},nK:function(){return ot},up:function(){return Nt},w5:function(){return L},wg:function(){return je},wy:function(){return xt}});n(1703);var r=n(4870),s=n(7139);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function w(t){const e=y||g;return t?e.then(this?t.bind(this):t):e}function v(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,s=C(h[r]);s<t?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,l&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(v(t.id),0,t),E())}function E(){l||u||(u=!0,y=g.then(O))}function _(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function I(t){(0,s.kJ)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||f.push(t),E()}function T(t,e=d){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function k(t){if(f.length){const t=[...new Set(f)];if(f.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>C(t)-C(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const C=t=>null==t.id?1/0:t.id,S=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function O(t){u=!1,l=!0,h.sort(S);s.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&i(t,null,14)}}finally{d=0,h.length=0,k(t),l=!1,y=null,(h.length||f.length)&&O(t)}}new Set;new Map;function A(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let l;let u=r[l=(0,s.hR)(e)]||r[l=(0,s.hR)((0,s._A)(e))];!u&&a&&(u=r[l=(0,s.hR)((0,s.rs)(e))]),u&&o(u,t,6,i);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,i)}}function x(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=x(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),(0,s.Kn)(t)&&r.set(t,a),a):((0,s.Kn)(t)&&r.set(t,null),null)}function R(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let P=null,N=null;function D(t){const e=P;return P=t,N=t&&t.type.__scopeId||null,e}function L(t,e=P,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ve(-1);const s=D(e),i=t(...n);return D(s),r._d&&Ve(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function M(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let w,v;const b=D(t);try{if(4&n.shapeFlag){const t=i||r;w=en(d.call(t,t,f,o,m,p,g)),v=u}else{const t=e;0,w=en(t.length>1?t(o,{attrs:u,slots:l,emit:h}):t(o,null)),v=e.props?u:j(u)}}catch(_){Le.length=0,a(_,t,1),w=Qe(Ne)}let E=w;if(v&&!1!==y){const t=Object.keys(v),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(s.tR)&&(v=U(v,c)),E=Ze(E,v))}return n.dirs&&(E=Ze(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),w=E,D(b),w}const j=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},U=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function F(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||V(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?V(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!R(l,n))return!0}}return!1}function V(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!R(n,i))return!0}return!1}function B({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const q=t=>t.__isSuspense;function z(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):I(t)}function H(t,e){if(un){let n=un.provides;const r=un.parent&&un.parent.provides;r===n&&(n=un.provides=Object.create(r)),n[t]=e}else 0}function $(t,e,n=!1){const r=un||P;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const K={};function G(t,e,n){return W(t,e,n)}function W(t,e,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=s.kT){const h=un;let d,f,p=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,s.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Y(t):(0,s.mf)(t)?i(t,h,2):void 0))):d=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[g])}:s.dG,e&&a){const t=d;d=()=>Y(t())}let g=t=>{f=E.onStop=()=>{i(t,h,4)}};if(yn)return g=s.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,g]):d(),s.dG;let y=m?[]:K;const w=()=>{if(E.active)if(e){const t=E.run();(a||p||(m?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(f&&f(),o(e,h,3,[t,y===K?void 0:y,g]),y=t)}else E.run()};let v;w.allowRecurse=!!e,"sync"===c?v=w:"post"===c?v=()=>Te(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),v=()=>b(w));const E=new r.qq(d,v);return e?n?w():y=E.run():"post"===c?Te(E.run.bind(E),h&&h.suspense):E.run(),()=>{E.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,E)}}function J(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?Q(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=un;dn(this);const c=W(i,o.bind(r),n);return a?dn(a):fn(),c}function Q(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Y(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Y(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)Y(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{Y(t,e)}));else if((0,s.PO)(t))for(const n in t)Y(t[n],e);return t}function X(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Et((()=>{t.isMounted=!0})),Tt((()=>{t.isUnmounting=!0})),t}const Z=[Function,Array],tt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(t,{slots:e}){const n=hn(),s=X();let i;return()=>{const o=e.default&&at(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ne){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:l}=c;if(s.isLeaving)return st(a);const u=it(a);if(!u)return st(a);const h=rt(u,c,s,n);ot(u,h);const d=n.subTree,f=d&&it(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const t=m();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(f&&f.type!==Ne&&(!$e(u,f)||p)){const t=rt(f,c,s,n);if(ot(f,t),"out-in"===l)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},st(a);"in-out"===l&&u.type!==Ne&&(t.delayLeave=(t,e,n)=>{const r=nt(s,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},et=tt;function nt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function rt(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:w,onAfterAppear:v,onAppearCancelled:b}=e,E=String(t.key),_=nt(n,t),I=(t,e)=>{t&&o(t,r,9,e)},T=(t,e)=>{const n=e[1];I(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},k={mode:a,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!i)return;r=y||l}e._leaveCb&&e._leaveCb(!0);const s=_[E];s&&$e(t,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[e])},enter(t){let e=u,r=h,s=d;if(!n.isMounted){if(!i)return;e=w||u,r=v||h,s=b||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,I(e?s:r,[t]),k.delayedLeave&&k.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();I(f,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),I(n?g:m,[e]),e._leaveCb=void 0,_[s]===t&&delete _[s])};_[s]=t,p?T(p,[e,o]):o()},clone(t){return rt(t,e,n,r)}};return k}function st(t){if(ut(t))return t=Ze(t),t.children=null,t}function it(t){return ut(t)?t.children?t.children[0]:void 0:t}function ot(t,e){6&t.shapeFlag&&t.component?ot(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function at(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Re?(128&o.patchFlag&&s++,r=r.concat(at(o.children,e,a))):(e||o.type!==Ne)&&r.push(null!=a?Ze(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ct(t){return(0,s.mf)(t)?{setup:t,name:t.name}:t}const lt=t=>!!t.type.__asyncLoader;const ut=t=>t.type.__isKeepAlive;RegExp,RegExp;function ht(t,e){return(0,s.kJ)(t)?t.some((t=>ht(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function dt(t,e){pt(t,"a",e)}function ft(t,e){pt(t,"da",e)}function pt(t,e,n=un){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(wt(e,r,n),n){let t=n.parent;while(t&&t.parent)ut(t.parent.vnode)&&mt(r,e,n,t),t=t.parent}}function mt(t,e,n,r){const i=wt(e,t,r,!0);kt((()=>{(0,s.Od)(r[e],i)}),n)}function gt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function yt(t){return 128&t.shapeFlag?t.ssContent:t}function wt(t,e,n=un,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),dn(n);const i=o(e,n,t,s);return fn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const vt=t=>(e,n=un)=>(!yn||"sp"===t)&&wt(t,e,n),bt=vt("bm"),Et=vt("m"),_t=vt("bu"),It=vt("u"),Tt=vt("bum"),kt=vt("um"),Ct=vt("sp"),St=vt("rtg"),Ot=vt("rtc");function At(t,e=un){wt("ec",t,e)}function xt(t,e){const n=P;if(null===n)return t;const r=Tn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Y(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Rt(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[s];u&&((0,r.Jd)(),o(u,n,8,[t.el,l,t,e]),(0,r.lk)())}}const Pt="components";function Nt(t,e){return Lt(Pt,t,!0,e)||t}const Dt=Symbol();function Lt(t,e,n=!0,r=!1){const i=P||un;if(i){const n=i.type;if(t===Pt){const t=kn(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Mt(i[t]||n[t],e)||Mt(i.appContext[t],e);return!o&&r?n:o}}function Mt(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function jt(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}function Ut(t,e,n={},r,s){if(P.isCE||P.parent&&lt(P.parent)&&P.parent.isCE)return Qe("slot","default"===e?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),je();const o=i&&Ft(i(n)),a=ze(Re,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ft(t){return t.some((t=>!He(t)||t.type!==Ne&&!(t.type===Re&&!Ft(t.children))))?t:null}const Vt=t=>t?pn(t)?Tn(t)||t.proxy:Vt(t.parent):null,Bt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vt(t.parent),$root:t=>Vt(t.root),$emit:t=>t.emit,$options:t=>Wt(t),$forceUpdate:t=>t.f||(t.f=()=>b(t.update)),$nextTick:t=>t.n||(t.n=w.bind(t.proxy)),$watch:t=>J.bind(t)}),qt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];zt&&(c[e]=0)}}const d=Bt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Bt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zt=!0;function Ht(t){const e=Wt(t),n=t.proxy,i=t.ctx;zt=!1,e.beforeCreate&&Kt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:w,beforeDestroy:v,beforeUnmount:b,destroyed:E,unmounted:_,render:I,renderTracked:T,renderTriggered:k,errorCaptured:C,serverPrefetch:S,expose:O,inheritAttrs:A,components:x,directives:R,filters:P}=e,N=null;if(h&&$t(h,i,N,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(zt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Sn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)Gt(l[r],i,n,r);if(u){const t=(0,s.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{H(e,t[e])}))}function D(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Kt(d,t,"c"),D(bt,f),D(Et,p),D(_t,m),D(It,g),D(dt,y),D(ft,w),D(At,C),D(Ot,T),D(St,k),D(Tt,b),D(kt,_),D(Ct,S),(0,s.kJ)(O))if(O.length){const e=t.exposed||(t.exposed={});O.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===s.dG&&(t.render=I),null!=A&&(t.inheritAttrs=A),x&&(t.components=x),R&&(t.directives=R)}function $t(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=Zt(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?$(n.from||o,n.default,!0):$(n.from||o):$(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Kt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Gt(t,e,n,r){const i=r.includes(".")?Q(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&G(i,n)}else if((0,s.mf)(t))G(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Gt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&G(i,r,t)}else 0}function Wt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:i.length||n||r?(l={},i.length&&i.forEach((t=>Jt(l,t,a,!0))),Jt(l,e,a)):l=e,(0,s.Kn)(e)&&o.set(e,l),l}function Jt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jt(t,i,n,!0),s&&s.forEach((e=>Jt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Qt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Qt={data:Yt,props:ee,emits:ee,methods:ee,computed:ee,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:ee,directives:ee,watch:ne,provide:Yt,inject:Xt};function Yt(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function Xt(t,e){return ee(Zt(t),Zt(e))}function Zt(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function te(t,e){return t?[...new Set([].concat(t,e))]:e}function ee(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function ne(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=te(t[r],e[r]);return n}function re(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,Ke,1),t.propsDefaults=Object.create(null),ie(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function se(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.IU)(o),[u]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;ie(t,e,o,a)&&(h=!0);for(const i in l)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=oe(u,l,i,void 0,t,!0)):delete o[i]);if(a!==l)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(R(t.emitsOptions,i))continue;const c=e[i];if(u)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=oe(u,l,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ie(t,e,n,i){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const u=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:R(t.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,l=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=oe(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return l}function oe(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(dn(i),r=s[n]=t.call(null,e),fn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ae(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let l=!1;if(!(0,s.mf)(t)){const r=t=>{l=!0;const[n,r]=ae(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return(0,s.Kn)(t)&&r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);ce(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(ce(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=he(Boolean,r.type),n=he(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const u=[a,c];return(0,s.Kn)(t)&&r.set(t,u),u}function ce(t){return"$"!==t[0]}function le(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ue(t,e){return le(t)===le(e)}function he(t,e){return(0,s.kJ)(e)?e.findIndex((e=>ue(e,t))):(0,s.mf)(e)&&ue(e,t)?0:-1}const de=t=>"_"===t[0]||"$stable"===t,fe=t=>(0,s.kJ)(t)?t.map(en):[en(t)],pe=(t,e,n)=>{if(e._n)return e;const r=L(((...t)=>fe(e(...t))),n);return r._c=!1,r},me=(t,e,n)=>{const r=t._ctx;for(const i in t){if(de(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=pe(i,n,r);else if(null!=n){0;const t=fe(n);e[i]=()=>t}}},ge=(t,e)=>{const n=fe(e);t.slots.default=()=>n},ye=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):me(e,t.slots={})}else t.slots={},e&&ge(t,e);(0,s.Nj)(t.slots,Ke,1)},we=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,me(e,i)),a=e}else e&&(ge(t,e),a={default:1});if(o)for(const s in i)de(s)||s in a||delete i[s]};function ve(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let be=0;function Ee(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=ve(),o=new Set;let a=!1;const c=i.app={_uid:be++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:An,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,l){if(!a){0;const u=Qe(n,r);return u.appContext=i,o&&e?e(u,s):t(u,s,l),a=!0,c._container=s,s.__vue_app__=c,Tn(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function _e(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>_e(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(lt(o)&&!a)return;const c=4&o.shapeFlag?Tn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===s.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,u,12,[l,f]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=l,(0,s.RI)(p,h)&&(p[h]=l)):i&&(h.value=l,t.k&&(f[t.k]=l))};l?(r.id=-1,Te(r,n)):r()}else 0}}function Ie(){}const Te=z;function ke(t){return Ce(t)}function Ce(t,e){Ie();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=s.dG,cloneNode:g,insertStaticContent:y}=t,w=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!$e(t,e)&&(r=Z(t),W(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Pe:v(t,e,n,r);break;case Ne:E(t,e,n,r);break;case De:null==t&&I(e,n,r,o);break;case Re:L(t,e,n,r,s,i,o,a,c);break;default:1&h?O(t,e,n,r,s,i,o,a,c):6&h?j(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,s,i,o,a,c,et)}null!=u&&s&&_e(u,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)i(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},E=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},I=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},C=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},O=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,s,i,o,a,c):P(t,e,s,i,o,a,c)},A=(t,e,n,r,o,l,u,h)=>{let f,p;const{type:m,props:y,shapeFlag:w,transition:v,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==g&&-1===b)f=t.el=g(t.el);else{if(f=t.el=c(t.type,l,y&&y.is,y),8&w?d(f,t.children):16&w&&R(t.children,f,null,r,o,l&&"foreignObject"!==m,u,h),E&&Rt(t,null,r,"created"),y){for(const e in y)"value"===e||(0,s.Gg)(e)||a(f,e,null,y[e],l,t.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&on(p,r,t)}x(f,t,t.scopeId,u,r)}E&&Rt(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(f),i(f,e,n),((p=y&&y.onVnodeMounted)||_||E)&&Te((()=>{p&&on(p,r,t),_&&v.enter(f),E&&Rt(t,null,r,"mounted")}),o)},x=(t,e,n,r,s)=>{if(n&&m(t,n),r)for(let i=0;i<r.length;i++)m(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;x(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},R=(t,e,n,r,s,i,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?nn(t[l]):en(t[l]);w(null,c,e,n,r,s,i,o,a)}},P=(t,e,n,r,i,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||s.kT,m=e.props||s.kT;let g;n&&Se(n,!1),(g=m.onVnodeBeforeUpdate)&&on(g,n,e,t),f&&Rt(e,t,n,"beforeUpdate"),n&&Se(n,!0);const y=i&&"foreignObject"!==e.type;if(h?N(t.dynamicChildren,h,l,n,r,y,o):c||H(t,e,l,null,n,r,y,o,!1),u>0){if(16&u)D(l,e,p,m,n,r,i);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,i),4&u&&a(l,"style",p.style,m.style,i),8&u){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,i,t.children,n,r,X)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||D(l,e,p,m,n,r,i);((g=m.onVnodeUpdated)||f)&&Te((()=>{g&&on(g,n,e,t),f&&Rt(e,t,n,"updated")}),r)},N=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===Re||!$e(c,l)||70&c.shapeFlag)?f(c.el):n;w(c,l,u,null,r,s,i,o,!0)}},D=(t,e,n,r,i,o,c)=>{if(n!==r){for(const l in r){if((0,s.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,i,o,X)}if(n!==s.kT)for(const l in n)(0,s.Gg)(l)||l in r||a(t,l,n[l],null,c,e.children,i,o,X);"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,s,o,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(i(h,n,r),i(d,n,r),R(e.children,n,d,s,o,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Oe(t,e,!0)):H(t,e,n,d,s,o,a,c,u)},j=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):U(e,n,r,s,i,o,c):V(t,e,c)},U=(t,e,n,r,s,i,o)=>{const a=t.component=ln(t,r,s);if(ut(t)&&(a.ctx.renderer=et),wn(a),a.asyncDep){if(s&&s.registerDep(a,q),!t.el){const t=a.subTree=Qe(Ne);E(null,t,e,n)}}else q(a,t,e,n,s,i,o)},V=(t,e,n)=>{const r=e.component=t.component;if(F(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void z(r,e,n);r.next=e,_(r.update),r.update()}else e.el=t.el,r.vnode=e},q=(t,e,n,i,o,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:l,vnode:u}=t,h=n;0,Se(t,!1),n?(n.el=u.el,z(t,n,c)):n=u,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&on(e,l,n,u),Se(t,!0);const d=M(t);0;const p=t.subTree;t.subTree=d,w(p,d,f(p.el),Z(p),t,o,a),n.el=d.el,null===h&&B(t,d.el),i&&Te(i,o),(e=n.props&&n.props.onVnodeUpdated)&&Te((()=>on(e,l,n,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:d}=t,f=lt(e);if(Se(t,!1),u&&(0,s.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&on(r,d,e),Se(t,!0),c&&rt){const n=()=>{t.subTree=M(t),rt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=M(t);0,w(null,r,n,i,t,o,a),e.el=r.el}if(h&&Te(h,o),!f&&(r=l&&l.onVnodeMounted)){const t=e;Te((()=>on(r,d,t)),o)}(256&e.shapeFlag||d&&lt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Te(t.a,o),t.isMounted=!0,e=n=i=null}},u=t.effect=new r.qq(l,(()=>b(h)),t.scope),h=t.update=()=>u.run();h.id=t.uid,Se(t,!0),h()},z=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,se(t,e.props,s,n),we(t,e.children,n),(0,r.Jd)(),T(),(0,r.lk)()},H=(t,e,n,r,s,i,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void K(l,h,n,r,s,i,o,a,c);if(256&f)return void $(l,h,n,r,s,i,o,a,c)}8&p?(16&u&&X(l,s,i),h!==l&&d(n,h)):16&u?16&p?K(l,h,n,r,s,i,o,a,c):X(l,s,i,!0):(8&u&&d(n,""),16&p&&R(h,n,r,s,i,o,a,c))},$=(t,e,n,r,i,o,a,c,l)=>{t=t||s.Z6,e=e||s.Z6;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=e[f]=l?nn(e[f]):en(e[f]);w(t[f],r,n,null,i,o,a,c,l)}u>h?X(t,i,o,!0,!1,d):R(e,n,r,i,o,a,c,l,d)},K=(t,e,n,r,i,o,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const r=t[u],s=e[u]=l?nn(e[u]):en(e[u]);if(!$e(r,s))break;w(r,s,n,null,i,o,a,c,l),u++}while(u<=d&&u<=f){const r=t[d],s=e[f]=l?nn(e[f]):en(e[f]);if(!$e(r,s))break;w(r,s,n,null,i,o,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,s=t<h?e[t].el:r;while(u<=f)w(null,e[u]=l?nn(e[u]):en(e[u]),n,s,i,o,a,c,l),u++}}else if(u>f)while(u<=d)W(t[u],i,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const t=e[u]=l?nn(e[u]):en(e[u]);null!=t.key&&g.set(t.key,u)}let y,v=0;const b=f-m+1;let E=!1,_=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=p;u<=d;u++){const r=t[u];if(v>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(y=m;y<=f;y++)if(0===I[y-m]&&$e(r,e[y])){s=y;break}void 0===s?W(r,i,o,!0):(I[s-m]=u+1,s>=_?_=s:E=!0,w(r,e[s],n,null,i,o,a,c,l),v++)}const T=E?Ae(I):s.Z6;for(y=T.length-1,u=b-1;u>=0;u--){const t=m+u,s=e[t],d=t+1<h?e[t+1].el:r;0===I[u]?w(null,s,n,d,i,o,a,c,l):E&&(y<0||u!==T[y]?G(s,n,d,2):y--)}}},G=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void G(t.component.subTree,e,n,r);if(128&u)return void t.suspense.move(e,n,r);if(64&u)return void a.move(t,e,n,et);if(a===Re){i(o,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void i(t.anchor,e,n)}if(a===De)return void C(t,e,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),Te((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),l=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,l):l()}else i(o,e,n)},W=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=t;if(null!=a&&_e(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const f=1&u&&d,p=!lt(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&on(m,e,t),6&u)Y(t.component,n,r);else{if(128&u)return void t.suspense.unmount(n,r);f&&Rt(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,s,et,r):l&&(i!==Re||h>0&&64&h)?X(l,e,n,!1,!0):(i===Re&&384&h||!s&&16&u)&&X(c,e,n),r&&J(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Te((()=>{m&&on(m,e,t),f&&Rt(t,null,e,"unmounted")}),n)},J=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Re)return void Q(n,r);if(e===De)return void S(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,t,e,n)),c&&Te(c,e),Te((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)W(t[o],e,n,r,s)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):w(e._vnode||null,t,e,null,null,null,n),T(),k(),e._vnode=t},et={p:w,um:W,m:G,r:J,mt:U,mc:R,pc:H,pbc:N,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ee(tt,nt)}}function Se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oe(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=nn(i[s]),e.el=t.el),n||Oe(t,e))}}function Ae(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const xe=t=>t.__isTeleport;const Re=Symbol(void 0),Pe=Symbol(void 0),Ne=Symbol(void 0),De=Symbol(void 0),Le=[];let Me=null;function je(t=!1){Le.push(Me=t?null:[])}function Ue(){Le.pop(),Me=Le[Le.length-1]||null}let Fe=1;function Ve(t){Fe+=t}function Be(t){return t.dynamicChildren=Fe>0?Me||s.Z6:null,Ue(),Fe>0&&Me&&Me.push(t),t}function qe(t,e,n,r,s,i){return Be(Je(t,e,n,r,s,i,!0))}function ze(t,e,n,r,s){return Be(Qe(t,e,n,r,s,!0))}function He(t){return!!t&&!0===t.__v_isVNode}function $e(t,e){return t.type===e.type&&t.key===e.key}const Ke="__vInternal",Ge=({key:t})=>null!=t?t:null,We=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:P,r:t,k:e,f:!!n}:t:null;function Je(t,e=null,n=null,r=0,i=null,o=(t===Re?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ge(e),ref:e&&We(e),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(rn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,s.HD)(n)?8:16),Fe>0&&!a&&Me&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Me.push(l),l}const Qe=Ye;function Ye(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Dt||(t=Ne),He(t)){const r=Ze(t,e,!0);return n&&rn(r,n),Fe>0&&!a&&Me&&(6&r.shapeFlag?Me[Me.indexOf(t)]=r:Me.push(r)),r.patchFlag|=-2,r}if(Cn(t)&&(t=t.__vccOpts),e){e=Xe(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:q(t)?128:xe(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return Je(t,e,n,i,o,c,a,!0)}function Xe(t){return t?(0,r.X3)(t)||Ke in t?(0,s.l7)({},t):t:null}function Ze(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?sn(r||{},e):r,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ge(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(We(e)):[i,We(e)]:We(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ze(t.ssContent),ssFallback:t.ssFallback&&Ze(t.ssFallback),el:t.el,anchor:t.anchor};return l}function tn(t=" ",e=0){return Qe(Pe,null,t,e)}function en(t){return null==t||"boolean"===typeof t?Qe(Ne):(0,s.kJ)(t)?Qe(Re,null,t.slice()):"object"===typeof t?nn(t):Qe(Pe,null,String(t))}function nn(t){return null===t.el||t.memo?t:Ze(t)}function rn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),rn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ke in e?3===r&&P&&(1===P.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=P}}else(0,s.mf)(e)?(e={default:e,_ctx:P},n=32):(e=String(e),64&r?(n=16,e=[tn(e)]):n=8);t.children=e,t.shapeFlag|=n}function sn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function on(t,e,n,r=null){o(t,e,7,[n,r])}const an=ve();let cn=0;function ln(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||an,a={uid:cn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ae(i,o),emitsOptions:x(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=A.bind(null,a),t.ce&&t.ce(a),a}let un=null;const hn=()=>un||P,dn=t=>{un=t,t.scope.on()},fn=()=>{un&&un.scope.off(),un=null};function pn(t){return 4&t.vnode.shapeFlag}let mn,gn,yn=!1;function wn(t,e=!1){yn=e;const{props:n,children:r}=t.vnode,s=pn(t);re(t,n,s,e),ye(t,r);const i=s?vn(t,e):void 0;return yn=!1,i}function vn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,qt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?In(t):null;dn(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),fn(),(0,s.tI)(c)){if(c.then(fn,fn),e)return c.then((n=>{bn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else bn(t,c,e)}else En(t,e)}function bn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),En(t,n)}function En(t,e,n){const i=t.type;if(!t.render){if(!e&&mn&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=mn(e,c)}}t.render=i.render||s.dG,gn&&gn(t)}dn(t),(0,r.Jd)(),Ht(t),(0,r.lk)(),fn()}function _n(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function In(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=_n(t))},slots:t.slots,emit:t.emit,expose:e}}function Tn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Bt?Bt[n](t):void 0}}))}function kn(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Cn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Sn=(t,e)=>(0,r.Fl)(t,e,yn);function On(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?He(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&He(n)&&(n=[n]),Qe(t,e,n))}Symbol("");const An="3.2.38"},9242:function(t,e,n){"use strict";n.d(e,{iM:function(){return it},nr:function(){return nt},ri:function(){return lt},uT:function(){return j}});var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)d(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=m(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const f=["Webkit","Moz","ms"],p={};function m(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in t)return p[e]=n}return e}const g="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(g,e.slice(6,e.length)):t.setAttributeNS(g,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function w(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}const[v,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const _=Promise.resolve(),I=()=>{E=0},T=()=>E||(_.then(I),E=v());function k(t,e,n,r){t.addEventListener(e,n,r)}function C(t,e,n,r){t.removeEventListener(e,n,r)}function S(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=A(e);if(r){const o=i[e]=x(r,s);k(t,n,o,a)}else o&&(C(t,n,o,a),i[e]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function A(t){let e;if(O.test(t)){let n;e={};while(n=t.match(O))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}function x(t,e){const n=t=>{const r=t.timeStamp||v();(b||r>=n.attached-1)&&(0,s.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=T(),n}function R(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const P=/^on[a-z]/,N=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?l(t,s,i):"style"===e?u(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||S(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,s,i))?w(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function D(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&P.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!P.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",j=(t,{slots:e})=>(0,s.h)(s.P$,B(t),e);j.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(j.props=(0,r.l7)({},s.P$.props,U),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),V=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in U||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=q(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:w,onEnter:v,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:I=w,onAppear:T=v,onAppearCancelled:k=b}=e,C=(t,e,n)=>{$(t,e?h:c),$(t,e?u:a),n&&n()},S=(t,e)=>{t._isLeaving=!1,$(t,d),$(t,p),$(t,f),e&&e()},O=t=>(e,n)=>{const r=t?T:v,i=()=>C(e,t,n);F(r,[e,i]),K((()=>{$(e,t?l:o),H(e,t?h:c),V(r)||W(e,s,g,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){F(w,[t]),H(t,o),H(t,a)},onBeforeAppear(t){F(I,[t]),H(t,l),H(t,u)},onEnter:O(!1),onAppear:O(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>S(t,e);H(t,d),X(),H(t,f),K((()=>{t._isLeaving&&($(t,d),H(t,p),V(E)||W(t,s,y,n))})),F(E,[t,n])},onEnterCancelled(t){C(t,!1),F(b,[t])},onAppearCancelled(t){C(t,!0),F(k,[t])},onLeaveCancelled(t){S(t),F(_,[t])}})}function q(t){if(null==t)return null;if((0,r.Kn)(t))return[z(t.enter),z(t.leave)];{const e=z(t);return[e,e]}}function z(t){const e=(0,r.He)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function $(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function K(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function W(t,e,n,r){const s=t._endId=++G,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=J(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,d)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(L+"Delay"),i=r(L+"Duration"),o=Q(s,i),a=r(M+"Delay"),c=r(M+"Duration"),l=Q(a,c);let u=null,h=0,d=0;e===L?o>0&&(u=L,h=o,d=i.length):e===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?L:M:null,d=u?u===L?i.length:c.length:0);const f=u===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Q(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Z(i);const o=s||i.props&&"number"===i.props.type;k(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),t._assign(s)})),n&&k(t,"change",(()=>{t.value=t.value.trim()})),e||(k(t,"compositionstart",tt),k(t,"compositionend",et),k(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=["ctrl","shift","alt","meta"],st={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},it=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=st[e[t]];if(r&&r(n,e))return}return t(n,...r)};const ot=(0,r.l7)({patchProp:N},c);let at;function ct(){return at||(at=(0,s.Us)(ot))}const lt=(...t)=>{const e=ct().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=ut(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ut(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return P},E9:function(){return rt},F7:function(){return T},Gg:function(){return H},HD:function(){return L},He:function(){return et},Kn:function(){return j},NO:function(){return _},Nj:function(){return tt},Od:function(){return S},PO:function(){return q},Pq:function(){return a},RI:function(){return A},S0:function(){return z},W7:function(){return B},WV:function(){return m},Z6:function(){return b},_A:function(){return G},_N:function(){return R},aU:function(){return X},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return l},kC:function(){return Q},kJ:function(){return x},kT:function(){return v},l7:function(){return C},mf:function(){return D},rs:function(){return J},tI:function(){return U},tR:function(){return k},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function l(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=L(r)?d(r):l(r);if(s)for(const t in s)e[t]=s[t]}return e}return L(t)||j(t)?t:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(L(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(j(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=N(t),r=N(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=M(t),r=M(e),n||r)return t===e;if(n=x(t),r=x(e),n||r)return!(!n||!r)&&p(t,e);if(n=j(t),r=j(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const y=t=>L(t)?t:null==t?"":x(t)||j(t)&&(t.toString===F||!D(t.toString))?JSON.stringify(t,w,2):String(t),w=(t,e)=>e&&e.__v_isRef?w(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!j(e)||x(e)||q(e)?e:String(e),v={},b=[],E=()=>{},_=()=>!1,I=/^on[^a-z]/,T=t=>I.test(t),k=t=>t.startsWith("onUpdate:"),C=Object.assign,S=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O=Object.prototype.hasOwnProperty,A=(t,e)=>O.call(t,e),x=Array.isArray,R=t=>"[object Map]"===V(t),P=t=>"[object Set]"===V(t),N=t=>"[object Date]"===V(t),D=t=>"function"===typeof t,L=t=>"string"===typeof t,M=t=>"symbol"===typeof t,j=t=>null!==t&&"object"===typeof t,U=t=>j(t)&&D(t.then)&&D(t.catch),F=Object.prototype.toString,V=t=>F.call(t),B=t=>V(t).slice(8,-1),q=t=>"[object Object]"===V(t),z=t=>L(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},K=/-(\w)/g,G=$((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,J=$((t=>t.replace(W,"-$1").toLowerCase())),Q=$((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=$((t=>t?`on${Q(t)}`:"")),X=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),s="firebase",i="9.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},5866:function(t,e,n){"use strict";n.d(e,{Aj:function(){return r.Aj},v0:function(){return r.v0},w7:function(){return r.w7}});var r=n(1683)},8307:function(t,e,n){"use strict";n.d(e,{IO:function(){return r.IO},JU:function(){return r.JU},QT:function(){return r.QT},Xo:function(){return r.Xo},ad:function(){return r.ad},cf:function(){return r.cf},hJ:function(){return r.hJ},oe:function(){return r.oe}});var r=n(7425)},2492:function(t){
/*!
* sweetalert2 v11.4.34
* Released under the MIT License.
*/
(function(e,n){t.exports=n()})(0,(function(){"use strict";var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const e="swal2-",n=t=>{const n={};for(const r in t)n[t[r]]=e+t[r];return n},r=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","no-war"]),s=n(["success","warning","info","question","error"]),i="SweetAlert2:",o=t=>{const e=[];for(let n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e},a=t=>t.charAt(0).toUpperCase()+t.slice(1),c=t=>{console.warn("".concat(i," ").concat("object"===typeof t?t.join(" "):t))},l=t=>{console.error("".concat(i," ").concat(t))},u=[],h=t=>{u.includes(t)||(u.push(t),c(t))},d=(t,e)=>{h('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))},f=t=>"function"===typeof t?t():t,p=t=>t&&"function"===typeof t.toPromise,m=t=>p(t)?t.toPromise():Promise.resolve(t),g=t=>t&&Promise.resolve(t)===t,y=t=>t[Math.floor(Math.random()*t.length)],w=()=>document.body.querySelector(".".concat(r.container)),v=t=>{const e=w();return e?e.querySelector(t):null},b=t=>v(".".concat(t)),E=()=>b(r.popup),_=()=>b(r.icon),I=()=>b(r.title),T=()=>b(r["html-container"]),k=()=>b(r.image),C=()=>b(r["progress-steps"]),S=()=>b(r["validation-message"]),O=()=>v(".".concat(r.actions," .").concat(r.confirm)),A=()=>v(".".concat(r.actions," .").concat(r.deny)),x=()=>b(r["input-label"]),R=()=>v(".".concat(r.loader)),P=()=>v(".".concat(r.actions," .").concat(r.cancel)),N=()=>b(r.actions),D=()=>b(r.footer),L=()=>b(r["timer-progress-bar"]),M=()=>b(r.close),j='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',U=()=>{const t=Array.from(E().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((t,e)=>{const n=parseInt(t.getAttribute("tabindex")),r=parseInt(e.getAttribute("tabindex"));return n>r?1:n<r?-1:0})),e=Array.from(E().querySelectorAll(j)).filter((t=>"-1"!==t.getAttribute("tabindex")));return o(t.concat(e)).filter((t=>st(t)))},F=()=>H(document.body,r.shown)&&!H(document.body,r["toast-shown"])&&!H(document.body,r["no-backdrop"]),V=()=>E()&&H(E(),r.toast),B=()=>E().hasAttribute("data-loading"),q={previousBodyPadding:null},z=(t,e)=>{if(t.textContent="",e){const n=new DOMParser,r=n.parseFromString(e,"text/html");Array.from(r.querySelector("head").childNodes).forEach((e=>{t.appendChild(e)})),Array.from(r.querySelector("body").childNodes).forEach((e=>{t.appendChild(e)}))}},H=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},$=(t,e)=>{Array.from(t.classList).forEach((n=>{Object.values(r).includes(n)||Object.values(s).includes(n)||Object.values(e.showClass).includes(n)||t.classList.remove(n)}))},K=(t,e,n)=>{if($(t,e),e.customClass&&e.customClass[n]){if("string"!==typeof e.customClass[n]&&!e.customClass[n].forEach)return c("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof e.customClass[n],'"'));Q(t,e.customClass[n])}},G=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(".".concat(r.popup," > .").concat(r[e]));case"checkbox":return t.querySelector(".".concat(r.popup," > .").concat(r.checkbox," input"));case"radio":return t.querySelector(".".concat(r.popup," > .").concat(r.radio," input:checked"))||t.querySelector(".".concat(r.popup," > .").concat(r.radio," input:first-child"));case"range":return t.querySelector(".".concat(r.popup," > .").concat(r.range," input"));default:return t.querySelector(".".concat(r.popup," > .").concat(r.input))}},W=t=>{if(t.focus(),"file"!==t.type){const e=t.value;t.value="",t.value=e}},J=(t,e,n)=>{t&&e&&("string"===typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach((e=>{Array.isArray(t)?t.forEach((t=>{n?t.classList.add(e):t.classList.remove(e)})):n?t.classList.add(e):t.classList.remove(e)})))},Q=(t,e)=>{J(t,e,!0)},Y=(t,e)=>{J(t,e,!1)},X=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const t=n[r];if(t instanceof HTMLElement&&H(t,e))return t}},Z=(t,e,n)=>{n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?t.style[e]="number"===typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)},tt=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";t.style.display=e},et=t=>{t.style.display="none"},nt=(t,e,n,r)=>{const s=t.querySelector(e);s&&(s.style[n]=r)},rt=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex";e?tt(t,n):et(t)},st=t=>!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),it=()=>!st(O())&&!st(A())&&!st(P()),ot=t=>!!(t.scrollHeight>t.clientHeight),at=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},ct=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=L();st(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"}),10))},lt=()=>{const t=L(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.removeProperty("transition"),t.style.width="".concat(r,"%")},ut=100,ht={},dt=()=>{ht.previousActiveElement instanceof HTMLElement?(ht.previousActiveElement.focus(),ht.previousActiveElement=null):document.body&&document.body.focus()},ft=t=>new Promise((e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;ht.restoreFocusTimeout=setTimeout((()=>{dt(),e()}),ut),window.scrollTo(n,r)})),pt=()=>"undefined"===typeof window||"undefined"===typeof document,mt='\n <div aria-labelledby="'.concat(r.title,'" aria-describedby="').concat(r["html-container"],'" class="').concat(r.popup,'" tabindex="-1">\n   <button type="button" class="').concat(r.close,'"></button>\n   <ul class="').concat(r["progress-steps"],'"></ul>\n   <div class="').concat(r.icon,'"></div>\n   <img class="').concat(r.image,'" />\n   <h2 class="').concat(r.title,'" id="').concat(r.title,'"></h2>\n   <div class="').concat(r["html-container"],'" id="').concat(r["html-container"],'"></div>\n   <input class="').concat(r.input,'" />\n   <input type="file" class="').concat(r.file,'" />\n   <div class="').concat(r.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(r.select,'"></select>\n   <div class="').concat(r.radio,'"></div>\n   <label for="').concat(r.checkbox,'" class="').concat(r.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(r.label,'"></span>\n   </label>\n   <textarea class="').concat(r.textarea,'"></textarea>\n   <div class="').concat(r["validation-message"],'" id="').concat(r["validation-message"],'"></div>\n   <div class="').concat(r.actions,'">\n     <div class="').concat(r.loader,'"></div>\n     <button type="button" class="').concat(r.confirm,'"></button>\n     <button type="button" class="').concat(r.deny,'"></button>\n     <button type="button" class="').concat(r.cancel,'"></button>\n   </div>\n   <div class="').concat(r.footer,'"></div>\n   <div class="').concat(r["timer-progress-bar-container"],'">\n     <div class="').concat(r["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),gt=()=>{const t=w();return!!t&&(t.remove(),Y([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0)},yt=()=>{ht.currentInstance.resetValidationMessage()},wt=()=>{const t=E(),e=X(t,r.input),n=X(t,r.file),s=t.querySelector(".".concat(r.range," input")),i=t.querySelector(".".concat(r.range," output")),o=X(t,r.select),a=t.querySelector(".".concat(r.checkbox," input")),c=X(t,r.textarea);e.oninput=yt,n.onchange=yt,o.onchange=yt,a.onchange=yt,c.oninput=yt,s.oninput=()=>{yt(),i.value=s.value},s.onchange=()=>{yt(),i.value=s.value}},vt=t=>"string"===typeof t?document.querySelector(t):t,bt=t=>{const e=E();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Et=t=>{"rtl"===window.getComputedStyle(t).direction&&Q(w(),r.rtl)},_t=t=>{const e=gt();if(pt())return void l("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=r.container,e&&Q(n,r["no-transition"]),z(n,mt);const s=vt(t.target);s.appendChild(n),bt(t),Et(s),wt()},It=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):"object"===typeof t?Tt(t,e):t&&z(e,t)},Tt=(t,e)=>{t.jquery?kt(e,t):z(e,t.toString())},kt=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ct=(()=>{if(pt())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&"undefined"!==typeof t.style[n])return e[n];return!1})(),St=()=>{const t=document.createElement("div");t.className=r["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Ot=(t,e)=>{const n=N(),r=R();e.showConfirmButton||e.showDenyButton||e.showCancelButton?tt(n):et(n),K(n,e,"actions"),At(n,r,e),z(r,e.loaderHtml),K(r,e,"loader")};function At(t,e,n){const r=O(),s=A(),i=P();Rt(r,"confirm",n),Rt(s,"deny",n),Rt(i,"cancel",n),xt(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e)))}function xt(t,e,n,s){if(!s.buttonsStyling)return Y([t,e,n],r.styled);Q([t,e,n],r.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,Q(t,r["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,Q(e,r["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,Q(n,r["default-outline"]))}function Rt(t,e,n){rt(t,n["show".concat(a(e),"Button")],"inline-block"),z(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=r[e],K(t,n,"".concat(e,"Button")),Q(t,n["".concat(e,"ButtonClass")])}const Pt=(t,e)=>{const n=M();z(n,e.closeButtonHtml),K(n,e,"closeButton"),rt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Nt=(t,e)=>{const n=w();n&&(Dt(n,e.backdrop),Lt(n,e.position),Mt(n,e.grow),K(n,e,"container"))};function Dt(t,e){"string"===typeof e?t.style.background=e:e||Q([document.documentElement,document.body],r["no-backdrop"])}function Lt(t,e){e in r?Q(t,r[e]):(c('The "position" parameter is not valid, defaulting to "center"'),Q(t,r.center))}function Mt(t,e){if(e&&"string"===typeof e){const n="grow-".concat(e);n in r&&Q(t,r[n])}}const jt=["input","file","range","select","radio","checkbox","textarea"],Ut=(e,n)=>{const s=E(),i=t.innerParams.get(e),o=!i||n.input!==i.input;jt.forEach((t=>{const e=X(s,r[t]);Bt(t,n.inputAttributes),e.className=r[t],o&&et(e)})),n.input&&(o&&Ft(n),qt(n))},Ft=t=>{if(!Gt[t.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));const e=$t(t.input),n=Gt[t.input](e,t);tt(e),setTimeout((()=>{W(n)}))},Vt=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Bt=(t,e)=>{const n=G(E(),t);if(n){Vt(n);for(const t in e)n.setAttribute(t,e[t])}},qt=t=>{const e=$t(t.input);"object"===typeof t.customClass&&Q(e,t.customClass.input)},zt=(t,e)=>{t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)},Ht=(t,e,n)=>{if(n.inputLabel){t.id=r.input;const s=document.createElement("label"),i=r["input-label"];s.setAttribute("for",t.id),s.className=i,"object"===typeof n.customClass&&Q(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},$t=t=>X(E(),r[t]||r.input),Kt=(t,e)=>{["string","number"].includes(typeof e)?t.value="".concat(e):g(e)||c('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof e,'"'))},Gt={};Gt.text=Gt.email=Gt.password=Gt.number=Gt.tel=Gt.url=(t,e)=>(Kt(t,e.inputValue),Ht(t,t,e),zt(t,e),t.type=e.input,t),Gt.file=(t,e)=>(Ht(t,t,e),zt(t,e),t),Gt.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return Kt(n,e.inputValue),n.type=e.input,Kt(r,e.inputValue),Ht(n,t,e),t},Gt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");z(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ht(t,t,e),t},Gt.radio=t=>(t.textContent="",t),Gt.checkbox=(t,e)=>{const n=G(E(),"checkbox");n.value="1",n.id=r.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return z(s,e.inputPlaceholder),n},Gt.textarea=(t,e)=>{Kt(t,e.inputValue),zt(t,e),Ht(t,t,e);const n=t=>parseInt(window.getComputedStyle(t).marginLeft)+parseInt(window.getComputedStyle(t).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const e=parseInt(window.getComputedStyle(E()).width),r=()=>{const r=t.offsetWidth+n(t);E().style.width=r>e?"".concat(r,"px"):null};new MutationObserver(r).observe(t,{attributes:!0,attributeFilter:["style"]})}})),t};const Wt=(t,e)=>{const n=T();K(n,e,"htmlContainer"),e.html?(It(e.html,n),tt(n,"block")):e.text?(n.textContent=e.text,tt(n,"block")):et(n),Ut(t,e)},Jt=(t,e)=>{const n=D();rt(n,e.footer),e.footer&&It(e.footer,n),K(n,e,"footer")},Qt=(e,n)=>{const r=t.innerParams.get(e),i=_();if(r&&n.icon===r.icon)return ee(i,n),void Yt(i,n);if(n.icon||n.iconHtml){if(n.icon&&-1===Object.keys(s).indexOf(n.icon))return l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.icon,'"')),void et(i);tt(i),ee(i,n),Yt(i,n),Q(i,n.showClass.icon)}else et(i)},Yt=(t,e)=>{for(const n in s)e.icon!==n&&Y(t,s[n]);Q(t,s[e.icon]),ne(t,e),Xt(),K(t,e,"icon")},Xt=()=>{const t=E(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},Zt='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',te='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',ee=(t,e)=>{let n,r=t.innerHTML;if(e.iconHtml)n=re(e.iconHtml);else if("success"===e.icon)n=Zt,r=r.replace(/ style=".*?"/g,"");else if("error"===e.icon)n=te;else{const t={question:"?",warning:"!",info:"i"};n=re(t[e.icon])}r.trim()!==n.trim()&&z(t,n)},ne=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])nt(t,n,"backgroundColor",e.iconColor);nt(t,".swal2-success-ring","borderColor",e.iconColor)}},re=t=>'<div class="'.concat(r["icon-content"],'">').concat(t,"</div>"),se=(t,e)=>{const n=k();if(!e.imageUrl)return et(n);tt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Z(n,"width",e.imageWidth),Z(n,"height",e.imageHeight),n.className=r.image,K(n,e,"image")},ie=(t,e)=>{const n=w(),r=E();e.toast?(Z(n,"width",e.width),r.style.width="100%",r.insertBefore(R(),_())):Z(r,"width",e.width),Z(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),et(S()),oe(r,e)},oe=(t,e)=>{t.className="".concat(r.popup," ").concat(st(t)?e.showClass.popup:""),e.toast?(Q([document.documentElement,document.body],r["toast-shown"]),Q(t,r.toast)):Q(t,r.modal),K(t,e,"popup"),"string"===typeof e.customClass&&Q(t,e.customClass),e.icon&&Q(t,r["icon-".concat(e.icon)])},ae=(t,e)=>{const n=C();if(!e.progressSteps||0===e.progressSteps.length)return et(n);tt(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&c("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(((t,s)=>{const i=ce(t);if(n.appendChild(i),s===e.currentProgressStep&&Q(i,r["active-progress-step"]),s!==e.progressSteps.length-1){const t=le(e);n.appendChild(t)}}))},ce=t=>{const e=document.createElement("li");return Q(e,r["progress-step"]),z(e,t),e},le=t=>{const e=document.createElement("li");return Q(e,r["progress-step-line"]),t.progressStepsDistance&&Z(e,"width",t.progressStepsDistance),e},ue=(t,e)=>{const n=I();rt(n,e.title||e.titleText,"block"),e.title&&It(e.title,n),e.titleText&&(n.innerText=e.titleText),K(n,e,"title")},he=(t,e)=>{ie(t,e),Nt(t,e),ae(t,e),Qt(t,e),se(t,e),ue(t,e),Pt(t,e),Wt(t,e),Ot(t,e),Jt(t,e),"function"===typeof e.didRender&&e.didRender(E())};function de(){const e=t.innerParams.get(this);if(!e)return;const n=t.domCache.get(this);et(n.loader),V()?e.icon&&tt(_()):fe(n),Y([n.popup,n.actions],r.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const fe=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?tt(e[0],"inline-block"):it()&&et(t.actions)};function pe(e){const n=t.innerParams.get(e||this),r=t.domCache.get(e||this);return r?G(r.popup,n.input):null}const me=()=>st(E()),ge=()=>O()&&O().click(),ye=()=>A()&&A().click(),we=()=>P()&&P().click(),ve=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),be=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ee=(t,e,n,r)=>{be(e),n.toast||(e.keydownHandler=e=>ke(t,e,r),e.keydownTarget=n.keydownListenerCapture?window:E(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},_e=(t,e,n)=>{const r=U();if(r.length)return e+=n,e===r.length?e=0:-1===e&&(e=r.length-1),r[e].focus();E().focus()},Ie=["ArrowRight","ArrowDown"],Te=["ArrowLeft","ArrowUp"],ke=(e,n,r)=>{const s=t.innerParams.get(e);s&&(n.isComposing||229===n.keyCode||(s.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key?Ce(e,n,s):"Tab"===n.key?Se(n,s):[...Ie,...Te].includes(n.key)?Oe(n.key):"Escape"===n.key&&Ae(n,s,r)))},Ce=(t,e,n)=>{if(f(n.allowEnterKey)&&e.target&&t.getInput()&&e.target instanceof HTMLElement&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;ge(),e.preventDefault()}},Se=(t,e)=>{const n=t.target,r=U();let s=-1;for(let i=0;i<r.length;i++)if(n===r[i]){s=i;break}t.shiftKey?_e(e,s,-1):_e(e,s,1),t.stopPropagation(),t.preventDefault()},Oe=t=>{const e=O(),n=A(),r=P();if(document.activeElement instanceof HTMLElement&&![e,n,r].includes(document.activeElement))return;const s=Ie.includes(t)?"nextElementSibling":"previousElementSibling";let i=document.activeElement;for(let o=0;o<N().children.length;o++){if(i=i[s],!i)return;if(i instanceof HTMLButtonElement&&st(i))break}i instanceof HTMLButtonElement&&i.focus()},Ae=(t,e,n)=>{f(e.allowEscapeKey)&&(t.preventDefault(),n(ve.esc))};var xe={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Re=()=>{const t=Array.from(document.body.children);t.forEach((t=>{t===w()||t.contains(w())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}))},Pe=()=>{const t=Array.from(document.body.children);t.forEach((t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")}))},Ne=()=>{const t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;if(t&&!H(document.body,r.iosfix)){const t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),Q(document.body,r.iosfix),Le(),De()}},De=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i),r=e&&n&&!t.match(/CriOS/i);if(r){const t=44;E().scrollHeight>window.innerHeight-t&&(w().style.paddingBottom="".concat(t,"px"))}},Le=()=>{const t=w();let e;t.ontouchstart=t=>{e=Me(t)},t.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())}},Me=t=>{const e=t.target,n=w();return!je(t)&&!Ue(t)&&(e===n||!ot(n)&&e instanceof HTMLElement&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&(!ot(T())||!T().contains(e)))},je=t=>t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType,Ue=t=>t.touches&&t.touches.length>1,Fe=()=>{if(H(document.body,r.iosfix)){const t=parseInt(document.body.style.top,10);Y(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Ve=()=>{null===q.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(q.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(q.previousBodyPadding+St(),"px"))},Be=()=>{null!==q.previousBodyPadding&&(document.body.style.paddingRight="".concat(q.previousBodyPadding,"px"),q.previousBodyPadding=null)};function qe(t,e,n,r){V()?Xe(t,r):(ft(n).then((()=>Xe(t,r))),be(ht));const s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);s?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),F()&&(Be(),Fe(),Pe()),ze()}function ze(){Y([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function He(t){t=Je(t);const e=xe.swalPromiseResolve.get(this),n=Ke(this);this.isAwaitingPromise()?t.isDismissed||(We(this),e(t)):n&&e(t)}function $e(){return!!t.awaitingPromise.get(this)}const Ke=e=>{const n=E();if(!n)return!1;const r=t.innerParams.get(e);if(!r||H(n,r.hideClass.popup))return!1;Y(n,r.showClass.popup),Q(n,r.hideClass.popup);const s=w();return Y(s,r.showClass.backdrop),Q(s,r.hideClass.backdrop),Qe(e,n,r),!0};function Ge(t){const e=xe.swalPromiseReject.get(this);We(this),e&&e(t)}const We=e=>{e.isAwaitingPromise()&&(t.awaitingPromise.delete(e),t.innerParams.get(e)||e._destroy())},Je=t=>"undefined"===typeof t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Qe=(t,e,n)=>{const r=w(),s=Ct&&at(e);"function"===typeof n.willClose&&n.willClose(e),s?Ye(t,e,r,n.returnFocus,n.didClose):qe(t,r,n.returnFocus,n.didClose)},Ye=(t,e,n,r,s)=>{ht.swalCloseEventFinishedCallback=qe.bind(null,t,n,r,s),e.addEventListener(Ct,(function(t){t.target===e&&(ht.swalCloseEventFinishedCallback(),delete ht.swalCloseEventFinishedCallback)}))},Xe=(t,e)=>{setTimeout((()=>{"function"===typeof e&&e.bind(t.params)(),t._destroy()}))};function Ze(e,n,r){const s=t.domCache.get(e);n.forEach((t=>{s[t].disabled=r}))}function tn(t,e){if(t)if("radio"===t.type){const n=t.parentNode.parentNode,r=n.querySelectorAll("input");for(let t=0;t<r.length;t++)r[t].disabled=e}else t.disabled=e}function en(){Ze(this,["confirmButton","denyButton","cancelButton"],!1)}function nn(){Ze(this,["confirmButton","denyButton","cancelButton"],!0)}function rn(){tn(this.getInput(),!1)}function sn(){tn(this.getInput(),!0)}function on(e){const n=t.domCache.get(this),s=t.innerParams.get(this);z(n.validationMessage,e),n.validationMessage.className=r["validation-message"],s.customClass&&s.customClass.validationMessage&&Q(n.validationMessage,s.customClass.validationMessage),tt(n.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid",!0),i.setAttribute("aria-describedby",r["validation-message"]),W(i),Q(i,r.inputerror))}function an(){const e=t.domCache.get(this);e.validationMessage&&et(e.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),Y(n,r.inputerror))}function cn(){const e=t.domCache.get(this);return e.progressSteps}const ln={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},un=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],hn={},dn=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],fn=t=>Object.prototype.hasOwnProperty.call(ln,t),pn=t=>-1!==un.indexOf(t),mn=t=>hn[t],gn=t=>{fn(t)||c('Unknown parameter "'.concat(t,'"'))},yn=t=>{dn.includes(t)&&c('The parameter "'.concat(t,'" is incompatible with toasts'))},wn=t=>{mn(t)&&d(t,mn(t))},vn=t=>{!t.backdrop&&t.allowOutsideClick&&c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)gn(e),t.toast&&yn(e),wn(e)};function bn(e){const n=E(),r=t.innerParams.get(this);if(!n||H(n,r.hideClass.popup))return c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=En(e),i=Object.assign({},r,s);he(this,i),t.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const En=t=>{const e={};return Object.keys(t).forEach((n=>{pn(n)?e[n]=t[n]:c("Invalid parameter to update: ".concat(n))})),e};function _n(){const e=t.domCache.get(this),n=t.innerParams.get(this);n?(e.popup&&ht.swalCloseEventFinishedCallback&&(ht.swalCloseEventFinishedCallback(),delete ht.swalCloseEventFinishedCallback),"function"===typeof n.didDestroy&&n.didDestroy(),In(this)):Tn(this)}const In=t=>{Tn(t),delete t.params,delete ht.keydownHandler,delete ht.keydownTarget,delete ht.currentInstance},Tn=e=>{e.isAwaitingPromise()?(kn(t,e),t.awaitingPromise.set(e,!0)):(kn(xe,e),kn(t,e))},kn=(t,e)=>{for(const n in t)t[n].delete(e)};var Cn=Object.freeze({hideLoading:de,disableLoading:de,getInput:pe,close:He,isAwaitingPromise:$e,rejectPromise:Ge,handleAwaitingPromise:We,closePopup:He,closeModal:He,closeToast:He,enableButtons:en,disableButtons:nn,enableInput:rn,disableInput:sn,showValidationMessage:on,resetValidationMessage:an,getProgressSteps:cn,update:bn,_destroy:_n});const Sn=t=>{let e=E();e||new Gr,e=E();const n=R();V()?et(_()):On(e,t),tt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},On=(t,e)=>{const n=N(),s=R();!e&&st(O())&&(e=O()),tt(n),e&&(et(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),Q([t,n],r.loading)},An=(t,e)=>{"select"===e.input||"radio"===e.input?Dn(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(p(e.inputValue)||g(e.inputValue))&&(Sn(O()),Ln(t,e))},xn=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Rn(n);case"radio":return Pn(n);case"file":return Nn(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Rn=t=>t.checked?1:0,Pn=t=>t.checked?t.value:null,Nn=t=>t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null,Dn=(t,e)=>{const n=E(),r=t=>{Mn[e.input](n,jn(t),e)};p(e.inputOptions)||g(e.inputOptions)?(Sn(O()),m(e.inputOptions).then((e=>{t.hideLoading(),r(e)}))):"object"===typeof e.inputOptions?r(e.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof e.inputOptions))},Ln=(t,e)=>{const n=t.getInput();et(n),m(e.inputValue).then((r=>{n.value="number"===e.input?"".concat(parseFloat(r)||0):"".concat(r),tt(n),n.focus(),t.hideLoading()})).catch((e=>{l("Error in inputValue promise: ".concat(e)),n.value="",tt(n),n.focus(),t.hideLoading()}))},Mn={select:(t,e,n)=>{const s=X(t,r.select),i=(t,e,r)=>{const s=document.createElement("option");s.value=r,z(s,e),s.selected=Un(r,n.inputValue),t.appendChild(s)};e.forEach((t=>{const e=t[0],n=t[1];if(Array.isArray(n)){const t=document.createElement("optgroup");t.label=e,t.disabled=!1,s.appendChild(t),n.forEach((e=>i(t,e[1],e[0])))}else i(s,n,e)})),s.focus()},radio:(t,e,n)=>{const s=X(t,r.radio);e.forEach((t=>{const e=t[0],i=t[1],o=document.createElement("input"),a=document.createElement("label");o.type="radio",o.name=r.radio,o.value=e,Un(e,n.inputValue)&&(o.checked=!0);const c=document.createElement("span");z(c,i),c.className=r.label,a.appendChild(o),a.appendChild(c),s.appendChild(a)}));const i=s.querySelectorAll("input");i.length&&i[0].focus()}},jn=t=>{const e=[];return"undefined"!==typeof Map&&t instanceof Map?t.forEach(((t,n)=>{let r=t;"object"===typeof r&&(r=jn(r)),e.push([n,r])})):Object.keys(t).forEach((n=>{let r=t[n];"object"===typeof r&&(r=jn(r)),e.push([n,r])})),e},Un=(t,e)=>e&&e.toString()===t.toString(),Fn=e=>{const n=t.innerParams.get(e);e.disableButtons(),n.input?qn(e,"confirm"):Gn(e,!0)},Vn=e=>{const n=t.innerParams.get(e);e.disableButtons(),n.returnInputValueOnDeny?qn(e,"deny"):Hn(e,!1)},Bn=(t,e)=>{t.disableButtons(),e(ve.cancel)},qn=(e,n)=>{const r=t.innerParams.get(e);if(!r.input)return void l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(n)));const s=xn(e,r);r.inputValidator?zn(e,s,n):e.getInput().checkValidity()?"deny"===n?Hn(e,s):Gn(e,s):(e.enableButtons(),e.showValidationMessage(r.validationMessage))},zn=(e,n,r)=>{const s=t.innerParams.get(e);e.disableInput();const i=Promise.resolve().then((()=>m(s.inputValidator(n,s.validationMessage))));i.then((t=>{e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):"deny"===r?Hn(e,n):Gn(e,n)}))},Hn=(e,n)=>{const r=t.innerParams.get(e||void 0);if(r.showLoaderOnDeny&&Sn(A()),r.preDeny){t.awaitingPromise.set(e||void 0,!0);const s=Promise.resolve().then((()=>m(r.preDeny(n,r.validationMessage))));s.then((t=>{!1===t?(e.hideLoading(),We(e)):e.close({isDenied:!0,value:"undefined"===typeof t?n:t})})).catch((t=>Kn(e||void 0,t)))}else e.close({isDenied:!0,value:n})},$n=(t,e)=>{t.close({isConfirmed:!0,value:e})},Kn=(t,e)=>{t.rejectPromise(e)},Gn=(e,n)=>{const r=t.innerParams.get(e||void 0);if(r.showLoaderOnConfirm&&Sn(),r.preConfirm){e.resetValidationMessage(),t.awaitingPromise.set(e||void 0,!0);const s=Promise.resolve().then((()=>m(r.preConfirm(n,r.validationMessage))));s.then((t=>{st(S())||!1===t?(e.hideLoading(),We(e)):$n(e,"undefined"===typeof t?n:t)})).catch((t=>Kn(e||void 0,t)))}else $n(e,n)},Wn=(e,n,r)=>{const s=t.innerParams.get(e);s.toast?Jn(e,n,r):(Xn(n),Zn(n),tr(e,n,r))},Jn=(e,n,r)=>{n.popup.onclick=()=>{const n=t.innerParams.get(e);n&&(Qn(n)||n.timer||n.input)||r(ve.close)}},Qn=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Yn=!1;const Xn=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Yn=!0)}}},Zn=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Yn=!0)}}},tr=(e,n,r)=>{n.container.onclick=s=>{const i=t.innerParams.get(e);Yn?Yn=!1:s.target===n.container&&f(i.allowOutsideClick)&&r(ve.backdrop)}},er=t=>"object"===typeof t&&t.jquery,nr=t=>t instanceof Element||er(t),rr=t=>{const e={};return"object"!==typeof t[0]||nr(t[0])?["title","html","icon"].forEach(((n,r)=>{const s=t[r];"string"===typeof s||nr(s)?e[n]=s:void 0!==s&&l("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(typeof s))})):Object.assign(e,t[0]),e};function sr(){const t=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new t(...n)}function ir(t){class e extends(this){_main(e,n){return super._main(e,Object.assign({},t,n))}}return e}const or=()=>ht.timeout&&ht.timeout.getTimerLeft(),ar=()=>{if(ht.timeout)return lt(),ht.timeout.stop()},cr=()=>{if(ht.timeout){const t=ht.timeout.start();return ct(t),t}},lr=()=>{const t=ht.timeout;return t&&(t.running?ar():cr())},ur=t=>{if(ht.timeout){const e=ht.timeout.increase(t);return ct(e,!0),e}},hr=()=>ht.timeout&&ht.timeout.isRunning();let dr=!1;const fr={};function pr(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";fr[t]=this,dr||(document.body.addEventListener("click",mr),dr=!0)}const mr=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const t in fr){const n=e.getAttribute(t);if(n)return void fr[t].fire({template:n})}};var gr=Object.freeze({isValidParameter:fn,isUpdatableParameter:pn,isDeprecatedParameter:mn,argsToParams:rr,isVisible:me,clickConfirm:ge,clickDeny:ye,clickCancel:we,getContainer:w,getPopup:E,getTitle:I,getHtmlContainer:T,getImage:k,getIcon:_,getInputLabel:x,getCloseButton:M,getActions:N,getConfirmButton:O,getDenyButton:A,getCancelButton:P,getLoader:R,getFooter:D,getTimerProgressBar:L,getFocusableElements:U,getValidationMessage:S,isLoading:B,fire:sr,mixin:ir,showLoading:Sn,enableLoading:Sn,getTimerLeft:or,stopTimer:ar,resumeTimer:cr,toggleTimer:lr,increaseTimer:ur,isTimerRunning:hr,bindClickHandler:pr});class yr{constructor(t,e){this.callback=t,this.remaining=e,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(t){const e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const wr=["swal-title","swal-html","swal-footer"],vr=t=>{const e="string"===typeof t.template?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;Cr(n);const r=Object.assign(br(n),Er(n),_r(n),Ir(n),Tr(n),kr(n,wr));return r},br=t=>{const e={},n=Array.from(t.querySelectorAll("swal-param"));return n.forEach((t=>{Sr(t,["name","value"]);const n=t.getAttribute("name"),r=t.getAttribute("value");"boolean"===typeof ln[n]&&"false"===r&&(e[n]=!1),"object"===typeof ln[n]&&(e[n]=JSON.parse(r))})),e},Er=t=>{const e={},n=Array.from(t.querySelectorAll("swal-button"));return n.forEach((t=>{Sr(t,["type","color","aria-label"]);const n=t.getAttribute("type");e["".concat(n,"ButtonText")]=t.innerHTML,e["show".concat(a(n),"Button")]=!0,t.hasAttribute("color")&&(e["".concat(n,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(e["".concat(n,"ButtonAriaLabel")]=t.getAttribute("aria-label"))})),e},_r=t=>{const e={},n=t.querySelector("swal-image");return n&&(Sr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Ir=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Sr(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Tr=t=>{const e={},n=t.querySelector("swal-input");n&&(Sr(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach((t=>{Sr(t,["value"]);const n=t.getAttribute("value"),r=t.innerHTML;e.inputOptions[n]=r}))),e},kr=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(Sr(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Cr=t=>{const e=wr.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach((t=>{const n=t.tagName.toLowerCase();e.includes(n)||c("Unrecognized element <".concat(n,">"))}))},Sr=(t,e)=>{Array.from(t.attributes).forEach((n=>{-1===e.indexOf(n.name)&&c(['Unrecognized attribute "'.concat(n.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(e.length?"Allowed attributes are: ".concat(e.join(", ")):"To set the value, use HTML within the element.")])}))},Or=10,Ar=t=>{const e=w(),n=E();"function"===typeof t.willOpen&&t.willOpen(n);const s=window.getComputedStyle(document.body),i=s.overflowY;Nr(e,n,t),setTimeout((()=>{Rr(e,n)}),Or),F()&&(Pr(e,t.scrollbarPadding,i),Re()),V()||ht.previousActiveElement||(ht.previousActiveElement=document.activeElement),"function"===typeof t.didOpen&&setTimeout((()=>t.didOpen(n))),Y(e,r["no-transition"])},xr=t=>{const e=E();if(t.target!==e)return;const n=w();e.removeEventListener(Ct,xr),n.style.overflowY="auto"},Rr=(t,e)=>{Ct&&at(e)?(t.style.overflowY="hidden",e.addEventListener(Ct,xr)):t.style.overflowY="auto"},Pr=(t,e,n)=>{Ne(),e&&"hidden"!==n&&Ve(),setTimeout((()=>{t.scrollTop=0}))},Nr=(t,e,n)=>{Q(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),tt(e,"grid"),setTimeout((()=>{Q(e,n.showClass.popup),e.style.removeProperty("opacity")}),Or),Q([document.documentElement,document.body],r.shown),n.heightAuto&&n.backdrop&&!n.toast&&Q([document.documentElement,document.body],r["height-auto"])};var Dr={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Lr(t){t.inputValidator||Object.keys(Dr).forEach((e=>{t.input===e&&(t.inputValidator=Dr[e])}))}function Mr(t){(!t.target||"string"===typeof t.target&&!document.querySelector(t.target)||"string"!==typeof t.target&&!t.target.appendChild)&&(c('Target parameter is not valid, defaulting to "body"'),t.target="body")}function jr(t){Lr(t),t.showLoaderOnConfirm&&!t.preConfirm&&c("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Mr(t),"string"===typeof t.title&&(t.title=t.title.split("\n").join("<br />")),_t(t)}let Ur;class Fr{constructor(){if("undefined"===typeof window)return;Ur=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));Object.defineProperties(this,{params:{value:s,writable:!1,enumerable:!0,configurable:!0}});const i=Ur._main(Ur.params);t.promise.set(this,i)}_main(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};vn(Object.assign({},n,e)),ht.currentInstance&&(ht.currentInstance._destroy(),F()&&Pe()),ht.currentInstance=Ur;const r=Br(e,n);jr(r),Object.freeze(r),ht.timeout&&(ht.timeout.stop(),delete ht.timeout),clearTimeout(ht.restoreFocusTimeout);const s=qr(Ur);return he(Ur,r),t.innerParams.set(Ur,r),Vr(Ur,s,r)}then(e){const n=t.promise.get(this);return n.then(e)}finally(e){const n=t.promise.get(this);return n.finally(e)}}const Vr=(t,e,n)=>new Promise(((r,s)=>{const i=e=>{t.close({isDismissed:!0,dismiss:e})};xe.swalPromiseResolve.set(t,r),xe.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{Fn(t)},e.denyButton.onclick=()=>{Vn(t)},e.cancelButton.onclick=()=>{Bn(t,i)},e.closeButton.onclick=()=>{i(ve.close)},Wn(t,e,i),Ee(t,ht,n,i),An(t,n),Ar(n),zr(ht,n,i),Hr(e,n),setTimeout((()=>{e.container.scrollTop=0}))})),Br=(t,e)=>{const n=vr(t),r=Object.assign({},ln,e,n,t);return r.showClass=Object.assign({},ln.showClass,r.showClass),r.hideClass=Object.assign({},ln.hideClass,r.hideClass),r},qr=e=>{const n={popup:E(),container:w(),actions:N(),confirmButton:O(),denyButton:A(),cancelButton:P(),loader:R(),closeButton:M(),validationMessage:S(),progressSteps:C()};return t.domCache.set(e,n),n},zr=(t,e,n)=>{const r=L();et(r),e.timer&&(t.timeout=new yr((()=>{n("timer"),delete t.timeout}),e.timer),e.timerProgressBar&&(tt(r),K(r,e,"timerProgressBar"),setTimeout((()=>{t.timeout&&t.timeout.running&&ct(e.timer)}))))},Hr=(t,e)=>{e.toast||(f(e.allowEnterKey)?$r(t,e)||_e(e,-1,1):Kr())},$r=(t,e)=>e.focusDeny&&st(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&st(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!st(t.confirmButton))&&(t.confirmButton.focus(),!0),Kr=()=>{document.activeElement instanceof HTMLElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!==typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)&&Math.random()<.1){const t=document.createElement("div");t.className="leave-russia-now-and-apply-your-skills-to-the-world";const e=y([{text:"В нижеприведённом видео объясняется как каждый из нас может помочь в том,\n        <strong>чтобы эта бессмысленная и бесчеловечная война остановилась</strong>:",id:"4CfDhaRkw7I"},{text:"Эмпатия - главное <strong>человеческое</strong> чувство. Способность сопереживать. <strong>Способность поставить себя на место другого.</strong>",id:"s-GLAIY4DXA"}]);z(t,"\n      <div>\n        Если мы не остановим войну, она придет в дом <strong>каждого из нас</strong> и её последствия будут <strong>ужасающими</strong>.\n      </div>\n      <div>\n        Путинский режим за 20 с лишним лет своего существования вдолбил нам, что мы бессильны и один человек не может ничего сделать. <strong>Это не так!</strong>\n      </div>\n      <div>\n        ".concat(e.text,'\n      </div>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/').concat(e.id,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      <div>\n        Нет войне!\n      </div>\n      '));const n=document.createElement("button");n.innerHTML="&times;",n.onclick=()=>t.remove(),t.appendChild(n),window.addEventListener("load",(()=>{setTimeout((()=>{document.body.appendChild(t)}),1e3)}))}Object.assign(Fr.prototype,Cn),Object.assign(Fr,gr),Object.keys(Cn).forEach((t=>{Fr[t]=function(){if(Ur)return Ur[t](...arguments)}})),Fr.DismissReason=ve,Fr.version="11.4.34";const Gr=Fr;return Gr.default=Gr,Gr})),"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch(t){n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return wt}});var r=n(7142),s=n(5168),i=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let w={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function v(t){w=t(w)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(I(this),e),_(h.get(this))}:function(...e){return _(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return f.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,w):t)}function _(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const I=t=>m.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],S=new Map;function O(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!k.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return S.set(e,i),i}v((t=>({...t,get:(e,n,r)=>O(e,n)||t.get(e,n,r),has:(e,n)=>!!O(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",P="0.7.33",N=new s.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",$="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.10.0",it="[DEFAULT]",ot={[R]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[$]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=st;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw ft.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw ft.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(s,c),c}function yt(t=it){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}ut(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function It(){return _t||(_t=T(vt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),_t}async function Tt(t){var e;try{const e=await It();return e.transaction(Et).objectStore(Et).get(Ct(t))}catch(n){if(n instanceof i.ZR)N.warn(n.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});N.warn(t.message)}}}async function kt(t,e){var n;try{const n=await It(),r=n.transaction(Et,"readwrite"),s=r.objectStore(Et);return await s.put(e,Ct(t)),r.done}catch(r){if(r instanceof i.ZR)N.warn(r.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});N.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1024,Ot=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Ot})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=xt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=St){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Nt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Nt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){ut(new r.wA("platform-logger",(t=>new A(t)),"PRIVATE")),ut(new r.wA("heartbeat",(t=>new At(t)),"PRIVATE")),wt(R,P,t),wt(R,P,"esm2017"),wt("fire-js","")}Dt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return s}});n(1703);var r=n(223);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return l},in:function(){return s}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},466:function(t,e,n){"use strict";n.d(e,{S1d:function(){return y}});n(2801),n(8675),n(7380),n(1118),n(1703);var r=n(4870);var s,i=n(3396);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const o="undefined"!==typeof window,a=(Object.prototype.toString,()=>{});o&&(null==(s=null==window?void 0:window.navigator)?void 0:s.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function c(t){return"function"===typeof t?t():(0,r.SU)(t)}function l(t){return t}function u(t){return!!(0,r.nZ)()&&((0,r.EB)(t),!0)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function h(t,e=!0){(0,i.FN)()?(0,i.bv)(t):e?t():(0,i.Y3)(t)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function d(t){var e;const n=c(t);return null!=(e=null==n?void 0:n.$el)?e:n}const f=o?window:void 0;o&&window.document,o&&window.navigator,o&&window.location;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function p(t,e=!1){const n=(0,r.iH)(),s=()=>n.value=Boolean(t());return s(),h(s,e),n}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},g="__vueuse_ssr_handlers__";m[g]=m[g]||{};m[g];Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;new Map;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function y(t,e,n={}){const{root:r,rootMargin:s="0px",threshold:o=.1,window:c=f}=n,l=p((()=>c&&"IntersectionObserver"in c));let h=a;const m=l.value?(0,i.YP)((()=>({el:d(t),root:d(r)})),(({el:t,root:n})=>{if(h(),!t)return;const r=new IntersectionObserver(e,{root:n,rootMargin:s,threshold:o});r.observe(t),h=()=>{r.disconnect(),h=a}}),{immediate:!0,flush:"post"}):a,g=()=>{h(),m()};return u(g),{isSupported:l,stop:g}}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var w;(function(t){t["UP"]="UP",t["RIGHT"]="RIGHT",t["DOWN"]="DOWN",t["LEFT"]="LEFT",t["NONE"]="NONE"})(w||(w={}));Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var v=Object.defineProperty,b=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,I=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,T=(t,e)=>{for(var n in e||(e={}))E.call(e,n)&&I(t,n,e[n]);if(b)for(var n of b(e))_.call(e,n)&&I(t,n,e[n]);return t};const k={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};T({linear:l},k)},2483:function(t,e,n){"use strict";n.d(e,{PO:function(){return F},p7:function(){return ee},tv:function(){return se},yj:function(){return ie}});n(1703);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const s=e[r];n[r]=u(s)?s.map(t):t(s)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=E(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(e.matched[r],n.matched[s])&&w(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function w(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v(t[n],e[n]))return!1;return!0}function v(t,e){return u(t)?b(t,e):u(e)?b(e,t):t===e}function b(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var _,I;(function(t){t["pop"]="pop",t["push"]="push"})(_||(_={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function T(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const k=/^[^#]+#/;function C(t,e){return t.replace(k,"#")+e}function S(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=S(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function x(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function P(t,e){R.set(t,e)}function N(t){const e=R.get(t);return R.delete(t),e}let D=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,t);return o+r+s}function M(t,e,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=L(t,location),c=n.value,l=e.value;let u=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((t=>{t(n.value,c,{delta:u,type:_.pop,direction:u?u>0?I.forward:I.back:I.unknown})}))};function l(){o=n.value}function u(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:O()}),"")}function d(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:d}}function j(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?O():null}}function U(t){const{history:e,location:n}=window,r={value:L(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:D()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,j(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function c(t,n){const o=a({},s.value,e.state,{forward:t,scroll:O()});i(o.current,o,!0);const c=a({},j(r.value,t,null),{position:o.position+1},n);i(t,c,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function F(t){t=T(t);const e=U(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function V(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function $(t,e){return a(new Error,{type:t,[z]:!0},e)}function K(t,e){return t instanceof Error&&z in t&&(null==e||!!(t.type&e))}const G="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(t,e){const n=a({},W,e),r=[];let s=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:l}=r;i.push({name:t,repeatable:n,optional:c});const u=l||G;if(u!==G){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),s+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(u(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function X(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=Y(r[n],s[n]);if(t)return t;n++}if(1===Math.abs(s.length-r.length)){if(Z(r))return 1;if(Z(s))return-1}return s.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function rt(t,e,n){const r=Q(nt(t.path),n);const s=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function st(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,c=ot(t);c.aliasOf=r&&r.record;const h=ut(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=rt(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),s&&t.name&&!ct(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],f,r&&r.children[e])}r=r||f,u(f)}return p?()=>{o(p)}:l}function o(t){if(B(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function u(t){let e=0;while(e<n.length&&X(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let s,i,o,c={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw $(1,{location:t});0,o=s.record.name,c=a(it(e.params,s.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&it(t.params,s.keys.map((t=>t.name)))),i=s.stringify(c)}else if("path"in t)i=t.path,s=n.find((t=>t.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw $(1,{location:t,currentLocation:e});o=s.record.name,c=a({},e.params,t.params),i=s.stringify(c)}const l=[];let u=s;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:i,params:c,matched:l,meta:lt(l)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function it(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ut(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,yt=/\+/g,wt=/%5B/g,vt=/%5D/g,bt=/%5E/g,Et=/%60/g,_t=/%7B/g,It=/%7C/g,Tt=/%7D/g,kt=/%20/g;function Ct(t){return encodeURI(""+t).replace(It,"|").replace(wt,"[").replace(vt,"]")}function St(t){return Ct(t).replace(_t,"{").replace(Tt,"}").replace(bt,"^")}function Ot(t){return Ct(t).replace(yt,"%2B").replace(kt,"+").replace(dt,"%23").replace(ft,"%26").replace(Et,"`").replace(_t,"{").replace(Tt,"}").replace(bt,"^")}function At(t){return Ot(t).replace(mt,"%3D")}function xt(t){return Ct(t).replace(dt,"%23").replace(gt,"%3F")}function Rt(t){return null==t?"":xt(t).replace(pt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Nt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(yt," "),n=t.indexOf("="),i=Pt(n<0?t:t.slice(0,n)),o=n<0?null:Pt(t.slice(n+1));if(i in e){let t=e[i];u(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Dt(t){let e="";for(let n in t){const r=t[n];if(n=At(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=u(r)?r.map((t=>t&&Ot(t))):[r&&Ot(r)];s.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Mt=Symbol(""),jt=Symbol(""),Ut=Symbol(""),Ft=Symbol(""),Vt=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a($(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a($(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function zt(t,e,n,r){const s=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(Ht(a)){const o=a.__vccOpts||a,c=o[e];c&&s.push(qt(c,n,r,i,t))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[t]=a;const c=a.__vccOpts||a,l=c[e];return l&&qt(l,n,r,i,t)()}))))}}}return s}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function $t(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Ft),i=(0,r.Fl)((()=>e.resolve((0,s.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&w(n.params,i.value.params)));function u(n={}){return Wt(n)?e[(0,s.SU)(t.replace)?"replace":"push"]((0,s.SU)(t.to)).catch(l):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:u}}const Kt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$t,setup(t,{slots:e}){const n=(0,s.qj)($t(t)),{options:i}=(0,r.f3)(Ut),o=(0,r.Fl)((()=>({[Yt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=e.default&&e.default(n);return t.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Gt=Kt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!u(s)||s.length!==r.length||r.some(((t,e)=>t!==s[e])))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)(Vt),o=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(jt,0),l=(0,r.Fl)((()=>{let t=(0,s.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,r.Fl)((()=>o.value.matched[l.value]));(0,r.JJ)(jt,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(Mt,u),(0,r.JJ)(Vt,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&y(e,s)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const s=o.value,i=t.name,c=u.value,l=c&&c.components[i];if(!l)return Zt(n.default,{Component:l,route:s});const d=c.props[i],f=d?!0===d?s.params:"function"===typeof d?d(s):d:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(l,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:m,route:s})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Xt;function ee(t){const e=st(t.routes,t),n=t.parseQuery||Nt,o=t.stringifyQuery||Dt,h=t.history;const d=Bt(),m=Bt(),y=Bt(),w=(0,s.XI)(q);let v=q;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),E=c.bind(null,Rt),I=c.bind(null,Pt);function T(t,n){let r,s;return B(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function S(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||w.value),"string"===typeof t){const s=f(n,t,r.path),i=e.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:I(i.params),hash:Pt(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in t)s=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];s=a({},t,{params:E(t.params)}),r.params=E(r.params)}const i=e.resolve(s,r),c=t.hash||"";i.params=b(I(i.params));const l=p(o,a({},t,{hash:St(c),path:i.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Dt?Lt(t.query):t.query||{}},i,{redirectedFrom:void 0,href:u})}function D(t){return"string"===typeof t?f(n,t,w.value.path):a({},t)}function L(t,e){if(v!==t)return $(8,{from:e,to:t})}function M(t){return F(t)}function j(t){return M(a(D(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function F(t,e){const n=v=R(t),r=w.value,s=t.state,i=t.force,c=!0===t.replace,l=U(n);if(l)return F(a(D(l),{state:"object"===typeof l?a({},s,l.state):s,force:i,replace:c}),e||n);const u=n;let h;return u.redirectedFrom=e,!i&&g(o,r,n)&&(h=$(16,{to:u,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):z(u,r)).catch((t=>K(t)?K(t,2)?t:et(t):Z(t,u,r))).then((t=>{if(t){if(K(t,2))return F(a({replace:c},D(t.to),{state:"object"===typeof t.to?a({},s,t.to.state):s,force:i}),e||u)}else t=G(u,r,!0,c,s);return H(u,r,t),t}))}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function z(t,e){let n;const[r,s,i]=re(t,e);n=zt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of d.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).then((()=>{n=zt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(u(r.beforeEnter))for(const s of r.beforeEnter)n.push(qt(s,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=zt(i,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of m.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of y.list())r(t,e,n)}function G(t,e,n,r,s){const o=L(t,e);if(o)return o;const c=e===q,l=i?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&l&&l.scroll},s)):h.push(t.fullPath,s)),w.value=t,nt(t,e,n,c),et()}let W;function J(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=R(t),s=U(r);if(s)return void F(a(s,{replace:!0}),r).catch(l);v=r;const o=w.value;i&&P(x(o.fullPath,n.delta),O()),z(r,o).catch((t=>K(t,12)?t:K(t,2)?(F(t.to,r).then((t=>{K(t,20)&&!n.delta&&n.type===_.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||G(r,o,!1),t&&(n.delta&&!K(t,8)?h.go(-n.delta,!1):n.type===_.pop&&K(t,20)&&h.go(-1,!1)),H(r,o,t)})).catch(l)})))}let Q,Y=Bt(),X=Bt();function Z(t,e,n){et(t);const r=X.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return Q&&w.value!==q?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function et(t){return Q||(Q=!t,J(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function nt(e,n,s,o){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!s&&N(x(e.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&A(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let it;const ot=new Set,at={currentRoute:w,listening:!0,addRoute:T,removeRoute:k,hasRoute:S,getRoutes:C,resolve:R,options:t,push:M,replace:j,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:X.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(w)}),i&&!it&&w.value===q&&(it=!0,M(h.location).catch((t=>{0})));const n={};for(const s in q)n[s]=(0,r.Fl)((()=>w.value[s]));t.provide(Ut,e),t.provide(Ft,(0,s.qj)(n)),t.provide(Vt,w);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(v=q,W&&W(),W=null,w.value=q,it=!1,Q=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>y(t,i)))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||s.push(a))}return[n,r,s]}function se(){return(0,r.f3)(Ut)}function ie(){return(0,r.f3)(Ft)}}}]);
//# sourceMappingURL=chunk-vendors.2cc7a1ae.js.map