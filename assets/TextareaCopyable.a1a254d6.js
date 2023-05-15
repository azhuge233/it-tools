import{X as hn,bC as _n,e as Q,aF as pn,a as ue,c as bn,a7 as ke,a9 as En,d as Fe,u as mn,A as ve,ax as yn,I as Ee,ad as Ie,b as qe,f as vn,h as Le,_ as wn,G as xn,bD as Nn,aq as Mn,o as me,k as Rn,l as F,w as G,aR as On,n as P,x as je,q as $e,P as Sn,s as De,J as Be,m as Tn,bE as Cn,al as An,y as kn,aS as In,z as Ln,an as jn}from"./index.2e6b7445.js";import{C as $n}from"./Copy.f30865ae.js";import{_ as Dn}from"./Scrollbar.b46a9c32.js";function Bn(e,n){const t=hn(_n,null);return Q(()=>e.hljs||(t==null?void 0:t.mergedHljsRef.value))}const Pn=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:f}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:f}},Hn={name:"Code",common:pn,self:Pn};var Un=Hn,zn=ue([bn("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[ke("show-line-numbers",`
 display: flex;
 `),En("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),ke("word-wrap",[ue("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ue("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ue("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]);const Gn=Object.assign(Object.assign({},qe.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var Wn=Fe({name:"Code",props:Gn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:o,inlineThemeDisabled:f}=mn(),d=ve(null),i=t?{value:void 0}:Bn(e),s=(E,x,w)=>{const{value:N}=i;return!N||!(E&&N.getLanguage(E))?null:N.highlight(w?x.trim():x,{language:E}).value},c=Q(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),_=()=>{if(n.default)return;const{value:E}=d;if(!E)return;const{language:x}=e,w=e.uri?window.decodeURIComponent(e.code):e.code;if(x){const S=s(x,w,e.trim);if(S!==null){if(e.inline)E.innerHTML=S;else{const j=E.querySelector(".__code__");j&&E.removeChild(j);const T=document.createElement("pre");T.className="__code__",T.innerHTML=S,E.appendChild(T)}return}}if(e.inline){E.textContent=w;return}const N=E.querySelector(".__code__");if(N)N.textContent=w;else{const S=document.createElement("pre");S.className="__code__",S.textContent=w,E.innerHTML="",E.appendChild(S)}};yn(_),Ee(Ie(e,"language"),_),Ee(Ie(e,"code"),_),t||Ee(i,_);const b=qe("Code","-code",zn,Un,e,o),A=Q(()=>{const{common:{cubicBezierEaseInOut:E,fontFamilyMono:x},self:{textColor:w,fontSize:N,fontWeightStrong:S,lineNumberTextColor:j,"mono-3":T,"hue-1":I,"hue-2":Y,"hue-3":Z,"hue-4":$,"hue-5":he,"hue-5-2":D,"hue-6":re,"hue-6-2":se}}=b.value,{internalFontSize:ie}=e;return{"--n-font-size":ie?`${ie}px`:N,"--n-font-family":x,"--n-font-weight-strong":S,"--n-bezier":E,"--n-text-color":w,"--n-mono-3":T,"--n-hue-1":I,"--n-hue-2":Y,"--n-hue-3":Z,"--n-hue-4":$,"--n-hue-5":he,"--n-hue-5-2":D,"--n-hue-6":re,"--n-hue-6-2":se,"--n-line-number-text-color":j}}),R=f?vn("code",Q(()=>`${e.internalFontSize||"a"}`),A,e):void 0;return{mergedClsPrefix:o,codeRef:d,mergedShowLineNumbers:c,lineNumbers:Q(()=>{let E=1;const x=[];let w=!1;for(const N of e.code)N===`
`?(w=!0,x.push(E++)):w=!1;return w||x.push(E++),x.join(`
`)}),cssVars:f?void 0:A,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:o,mergedShowLineNumbers:f,onRender:d}=this;return d==null||d(),Le("code",{class:[`${t}-code`,this.themeClass,o&&`${t}-code--word-wrap`,f&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},f?Le("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),we={exports:{}};function xe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&xe(t)}),e}we.exports=xe;we.exports.default=xe;class Pe{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Xe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function W(e,...n){const t=Object.create(null);for(const o in e)t[o]=e[o];return n.forEach(function(o){for(const f in o)t[f]=o[f]}),t}const Kn="</span>",He=e=>!!e.scope||e.sublanguage&&e.language,Fn=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((o,f)=>`${o}${"_".repeat(f+1)}`)].join(" ")}return`${n}${e}`};class qn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Xe(n)}openNode(n){if(!He(n))return;let t="";n.sublanguage?t=`language-${n.language}`:t=Fn(n.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!He(n)||(this.buffer+=Kn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Ue=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Ne{constructor(){this.rootNode=Ue(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=Ue({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(o=>this._walk(n,o)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Ne._collapse(t)})))}}class Xn extends Ne{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const o=n.root;o.sublanguage=!0,o.language=t,this.add(o)}toHTML(){return new qn(this,this.options).value()}finalize(){return!0}}function ee(e){return e?typeof e=="string"?e:e.source:null}function Ve(e){return X("(?=",e,")")}function Vn(e){return X("(?:",e,")*")}function Yn(e){return X("(?:",e,")?")}function X(...e){return e.map(t=>ee(t)).join("")}function Zn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Me(...e){const n=Zn(e);return"("+(n.capture?"":"?:")+e.map(o=>ee(o)).join("|")+")"}function Ye(e){return new RegExp(e.toString()+"|").exec("").length-1}function Jn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Qn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Re(e,{joinWith:n}){let t=0;return e.map(o=>{t+=1;const f=t;let d=ee(o),i="";for(;d.length>0;){const s=Qn.exec(d);if(!s){i+=d;break}i+=d.substring(0,s.index),d=d.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?i+="\\"+String(Number(s[1])+f):(i+=s[0],s[0]==="("&&t++)}return i}).map(o=>`(${o})`).join(n)}const et=/\b\B/,Ze="[a-zA-Z]\\w*",Oe="[a-zA-Z_]\\w*",Je="\\b\\d+(\\.\\d+)?",Qe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",en="\\b(0b[01]+)",nt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",tt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=X(n,/.*\b/,e.binary,/\b.*/)),W({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,o)=>{t.index!==0&&o.ignoreMatch()}},e)},ne={begin:"\\\\[\\s\\S]",relevance:0},rt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},st={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},it={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},de=function(e,n,t={}){const o=W({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=Me("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:X(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},at=de("//","$"),ot=de("/\\*","\\*/"),ct=de("#","$"),lt={scope:"number",begin:Je,relevance:0},ut={scope:"number",begin:Qe,relevance:0},gt={scope:"number",begin:en,relevance:0},ft={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]}]},dt={scope:"title",begin:Ze,relevance:0},ht={scope:"title",begin:Oe,relevance:0},_t={begin:"\\.\\s*"+Oe,relevance:0},pt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ge=Object.freeze({__proto__:null,MATCH_NOTHING_RE:et,IDENT_RE:Ze,UNDERSCORE_IDENT_RE:Oe,NUMBER_RE:Je,C_NUMBER_RE:Qe,BINARY_NUMBER_RE:en,RE_STARTERS_RE:nt,SHEBANG:tt,BACKSLASH_ESCAPE:ne,APOS_STRING_MODE:rt,QUOTE_STRING_MODE:st,PHRASAL_WORDS_MODE:it,COMMENT:de,C_LINE_COMMENT_MODE:at,C_BLOCK_COMMENT_MODE:ot,HASH_COMMENT_MODE:ct,NUMBER_MODE:lt,C_NUMBER_MODE:ut,BINARY_NUMBER_MODE:gt,REGEXP_MODE:ft,TITLE_MODE:dt,UNDERSCORE_TITLE_MODE:ht,METHOD_GUARD:_t,END_SAME_AS_BEGIN:pt});function bt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Et(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function mt(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=bt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function yt(e,n){!Array.isArray(e.illegal)||(e.illegal=Me(...e.illegal))}function vt(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function wt(e,n){e.relevance===void 0&&(e.relevance=1)}const xt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=t.keywords,e.begin=X(t.beforeMatch,Ve(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Nt=["of","and","for","in","not","or","if","then","parent","list","value"],Mt="keyword";function nn(e,n,t=Mt){const o=Object.create(null);return typeof e=="string"?f(t,e.split(" ")):Array.isArray(e)?f(t,e):Object.keys(e).forEach(function(d){Object.assign(o,nn(e[d],n,d))}),o;function f(d,i){n&&(i=i.map(s=>s.toLowerCase())),i.forEach(function(s){const c=s.split("|");o[c[0]]=[d,Rt(c[0],c[1])]})}}function Rt(e,n){return n?Number(n):Ot(e)?0:1}function Ot(e){return Nt.includes(e.toLowerCase())}const ze={},q=e=>{console.error(e)},Ge=(e,...n)=>{console.log(`WARN: ${e}`,...n)},V=(e,n)=>{ze[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ze[`${e}/${n}`]=!0)},fe=new Error;function tn(e,n,{key:t}){let o=0;const f=e[t],d={},i={};for(let s=1;s<=n.length;s++)i[s+o]=f[s],d[s+o]=!0,o+=Ye(n[s-1]);e[t]=i,e[t]._emit=d,e[t]._multi=!0}function St(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof e.beginScope!="object"||e.beginScope===null)throw q("beginScope must be object"),fe;tn(e,e.begin,{key:"beginScope"}),e.begin=Re(e.begin,{joinWith:""})}}function Tt(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof e.endScope!="object"||e.endScope===null)throw q("endScope must be object"),fe;tn(e,e.end,{key:"endScope"}),e.end=Re(e.end,{joinWith:""})}}function Ct(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function At(e){Ct(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),St(e),Tt(e)}function kt(e){function n(i,s){return new RegExp(ee(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,s]),this.matchAt+=Ye(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(c=>c[1]);this.matcherRe=n(Re(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(s);if(!c)return null;const _=c.findIndex((A,R)=>R>0&&A!==void 0),b=this.matchIndexes[_];return c.splice(0,_),Object.assign(c,b)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const c=new t;return this.rules.slice(s).forEach(([_,b])=>c.addRule(_,b)),c.compile(),this.multiRegexes[s]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,c){this.rules.push([s,c]),c.type==="begin"&&this.count++}exec(s){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let _=c.exec(s);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,_=b.exec(s)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function f(i){const s=new o;return i.contains.forEach(c=>s.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&s.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&s.addRule(i.illegal,{type:"illegal"}),s}function d(i,s){const c=i;if(i.isCompiled)return c;[Et,vt,At,xt].forEach(b=>b(i,s)),e.compilerExtensions.forEach(b=>b(i,s)),i.__beforeBegin=null,[mt,yt,wt].forEach(b=>b(i,s)),i.isCompiled=!0;let _=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),_=i.keywords.$pattern,delete i.keywords.$pattern),_=_||/\w+/,i.keywords&&(i.keywords=nn(i.keywords,e.case_insensitive)),c.keywordPatternRe=n(_,!0),s&&(i.begin||(i.begin=/\B|\b/),c.beginRe=n(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=n(c.end)),c.terminatorEnd=ee(c.end)||"",i.endsWithParent&&s.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+s.terminatorEnd)),i.illegal&&(c.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(b){return It(b==="self"?i:b)})),i.contains.forEach(function(b){d(b,c)}),i.starts&&d(i.starts,s),c.matcher=f(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=W(e.classNameAliases||{}),d(e)}function rn(e){return e?e.endsWithParent||rn(e.starts):!1}function It(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return W(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:rn(e)?W(e,{starts:e.starts?W(e.starts):null}):Object.isFrozen(e)?W(e):e}var Lt="11.7.0";class jt extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const ye=Xe,We=W,Ke=Symbol("nomatch"),$t=7,Dt=function(e){const n=Object.create(null),t=Object.create(null),o=[];let f=!0;const d="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Xn};function c(r){return s.noHighlightRe.test(r)}function _(r){let u=r.className+" ";u+=r.parentNode?r.parentNode.className:"";const p=s.languageDetectRe.exec(u);if(p){const y=D(p[1]);return y||(Ge(d.replace("{}",p[1])),Ge("Falling back to no-highlight mode for this block.",r)),y?p[1]:"no-highlight"}return u.split(/\s+/).find(y=>c(y)||D(y))}function b(r,u,p){let y="",M="";typeof u=="object"?(y=r,p=u.ignoreIllegals,M=u.language):(V("10.7.0","highlight(lang, code, ...args) has been deprecated."),V("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),M=r,y=u),p===void 0&&(p=!0);const L={code:y,language:M};ae("before:highlight",L);const H=L.result?L.result:A(L.language,L.code,p);return H.code=L.code,ae("after:highlight",H),H}function A(r,u,p,y){const M=Object.create(null);function L(a,l){return a.keywords[l]}function H(){if(!g.keywords){O.addText(v);return}let a=0;g.keywordPatternRe.lastIndex=0;let l=g.keywordPatternRe.exec(v),h="";for(;l;){h+=v.substring(a,l.index);const m=z.case_insensitive?l[0].toLowerCase():l[0],C=L(g,m);if(C){const[B,fn]=C;if(O.addText(h),h="",M[m]=(M[m]||0)+1,M[m]<=$t&&(le+=fn),B.startsWith("_"))h+=l[0];else{const dn=z.classNameAliases[B]||B;O.addKeyword(l[0],dn)}}else h+=l[0];a=g.keywordPatternRe.lastIndex,l=g.keywordPatternRe.exec(v)}h+=v.substring(a),O.addText(h)}function oe(){if(v==="")return;let a=null;if(typeof g.subLanguage=="string"){if(!n[g.subLanguage]){O.addText(v);return}a=A(g.subLanguage,v,!0,Ae[g.subLanguage]),Ae[g.subLanguage]=a._top}else a=E(v,g.subLanguage.length?g.subLanguage:null);g.relevance>0&&(le+=a.relevance),O.addSublanguage(a._emitter,a.language)}function k(){g.subLanguage!=null?oe():H(),v=""}function U(a,l){let h=1;const m=l.length-1;for(;h<=m;){if(!a._emit[h]){h++;continue}const C=z.classNameAliases[a[h]]||a[h],B=l[h];C?O.addKeyword(B,C):(v=B,H(),v=""),h++}}function Se(a,l){return a.scope&&typeof a.scope=="string"&&O.openNode(z.classNameAliases[a.scope]||a.scope),a.beginScope&&(a.beginScope._wrap?(O.addKeyword(v,z.classNameAliases[a.beginScope._wrap]||a.beginScope._wrap),v=""):a.beginScope._multi&&(U(a.beginScope,l),v="")),g=Object.create(a,{parent:{value:g}}),g}function Te(a,l,h){let m=Jn(a.endRe,h);if(m){if(a["on:end"]){const C=new Pe(a);a["on:end"](l,C),C.isMatchIgnored&&(m=!1)}if(m){for(;a.endsParent&&a.parent;)a=a.parent;return a}}if(a.endsWithParent)return Te(a.parent,l,h)}function on(a){return g.matcher.regexIndex===0?(v+=a[0],1):(be=!0,0)}function cn(a){const l=a[0],h=a.rule,m=new Pe(h),C=[h.__beforeBegin,h["on:begin"]];for(const B of C)if(!!B&&(B(a,m),m.isMatchIgnored))return on(l);return h.skip?v+=l:(h.excludeBegin&&(v+=l),k(),!h.returnBegin&&!h.excludeBegin&&(v=l)),Se(h,a),h.returnBegin?0:l.length}function ln(a){const l=a[0],h=u.substring(a.index),m=Te(g,a,h);if(!m)return Ke;const C=g;g.endScope&&g.endScope._wrap?(k(),O.addKeyword(l,g.endScope._wrap)):g.endScope&&g.endScope._multi?(k(),U(g.endScope,a)):C.skip?v+=l:(C.returnEnd||C.excludeEnd||(v+=l),k(),C.excludeEnd&&(v=l));do g.scope&&O.closeNode(),!g.skip&&!g.subLanguage&&(le+=g.relevance),g=g.parent;while(g!==m.parent);return m.starts&&Se(m.starts,a),C.returnEnd?0:l.length}function un(){const a=[];for(let l=g;l!==z;l=l.parent)l.scope&&a.unshift(l.scope);a.forEach(l=>O.openNode(l))}let ce={};function Ce(a,l){const h=l&&l[0];if(v+=a,h==null)return k(),0;if(ce.type==="begin"&&l.type==="end"&&ce.index===l.index&&h===""){if(v+=u.slice(l.index,l.index+1),!f){const m=new Error(`0 width match regex (${r})`);throw m.languageName=r,m.badRule=ce.rule,m}return 1}if(ce=l,l.type==="begin")return cn(l);if(l.type==="illegal"&&!p){const m=new Error('Illegal lexeme "'+h+'" for mode "'+(g.scope||"<unnamed>")+'"');throw m.mode=g,m}else if(l.type==="end"){const m=ln(l);if(m!==Ke)return m}if(l.type==="illegal"&&h==="")return 1;if(pe>1e5&&pe>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=h,h.length}const z=D(r);if(!z)throw q(d.replace("{}",r)),new Error('Unknown language: "'+r+'"');const gn=kt(z);let _e="",g=y||gn;const Ae={},O=new s.__emitter(s);un();let v="",le=0,K=0,pe=0,be=!1;try{for(g.matcher.considerAll();;){pe++,be?be=!1:g.matcher.considerAll(),g.matcher.lastIndex=K;const a=g.matcher.exec(u);if(!a)break;const l=u.substring(K,a.index),h=Ce(l,a);K=a.index+h}return Ce(u.substring(K)),O.closeAllNodes(),O.finalize(),_e=O.toHTML(),{language:r,value:_e,relevance:le,illegal:!1,_emitter:O,_top:g}}catch(a){if(a.message&&a.message.includes("Illegal"))return{language:r,value:ye(u),illegal:!0,relevance:0,_illegalBy:{message:a.message,index:K,context:u.slice(K-100,K+100),mode:a.mode,resultSoFar:_e},_emitter:O};if(f)return{language:r,value:ye(u),illegal:!1,relevance:0,errorRaised:a,_emitter:O,_top:g};throw a}}function R(r){const u={value:ye(r),illegal:!1,relevance:0,_top:i,_emitter:new s.__emitter(s)};return u._emitter.addText(r),u}function E(r,u){u=u||s.languages||Object.keys(n);const p=R(r),y=u.filter(D).filter(se).map(k=>A(k,r,!1));y.unshift(p);const M=y.sort((k,U)=>{if(k.relevance!==U.relevance)return U.relevance-k.relevance;if(k.language&&U.language){if(D(k.language).supersetOf===U.language)return 1;if(D(U.language).supersetOf===k.language)return-1}return 0}),[L,H]=M,oe=L;return oe.secondBest=H,oe}function x(r,u,p){const y=u&&t[u]||p;r.classList.add("hljs"),r.classList.add(`language-${y}`)}function w(r){let u=null;const p=_(r);if(c(p))return;if(ae("before:highlightElement",{el:r,language:p}),r.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),s.throwUnescapedHTML))throw new jt("One of your code blocks includes unescaped HTML.",r.innerHTML);u=r;const y=u.textContent,M=p?b(y,{language:p,ignoreIllegals:!0}):E(y);r.innerHTML=M.value,x(r,p,M.language),r.result={language:M.language,re:M.relevance,relevance:M.relevance},M.secondBest&&(r.secondBest={language:M.secondBest.language,relevance:M.secondBest.relevance}),ae("after:highlightElement",{el:r,result:M,text:y})}function N(r){s=We(s,r)}const S=()=>{I(),V("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function j(){I(),V("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let T=!1;function I(){if(document.readyState==="loading"){T=!0;return}document.querySelectorAll(s.cssSelector).forEach(w)}function Y(){T&&I()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Y,!1);function Z(r,u){let p=null;try{p=u(e)}catch(y){if(q("Language definition for '{}' could not be registered.".replace("{}",r)),f)q(y);else throw y;p=i}p.name||(p.name=r),n[r]=p,p.rawDefinition=u.bind(null,e),p.aliases&&re(p.aliases,{languageName:r})}function $(r){delete n[r];for(const u of Object.keys(t))t[u]===r&&delete t[u]}function he(){return Object.keys(n)}function D(r){return r=(r||"").toLowerCase(),n[r]||n[t[r]]}function re(r,{languageName:u}){typeof r=="string"&&(r=[r]),r.forEach(p=>{t[p.toLowerCase()]=u})}function se(r){const u=D(r);return u&&!u.disableAutodetect}function ie(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=u=>{r["before:highlightBlock"](Object.assign({block:u.el},u))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=u=>{r["after:highlightBlock"](Object.assign({block:u.el},u))})}function sn(r){ie(r),o.push(r)}function ae(r,u){const p=r;o.forEach(function(y){y[p]&&y[p](u)})}function an(r){return V("10.7.0","highlightBlock will be removed entirely in v12.0"),V("10.7.0","Please use highlightElement now."),w(r)}Object.assign(e,{highlight:b,highlightAuto:E,highlightAll:I,highlightElement:w,highlightBlock:an,configure:N,initHighlighting:S,initHighlightingOnLoad:j,registerLanguage:Z,unregisterLanguage:$,listLanguages:he,getLanguage:D,registerAliases:re,autoDetection:se,inherit:We,addPlugin:sn}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=Lt,e.regex={concat:X,lookahead:Ve,either:Me,optional:Yn,anyNumberOfTimes:Vn};for(const r in ge)typeof ge[r]=="object"&&we.exports(ge[r]);return Object.assign(e,ge),e};var te=Dt({}),Bt=te;te.HighlightJS=te;te.default=te;var J=Bt;function Pt(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},o=["true","false","null"],f={scope:"literal",beginKeywords:o.join(" ")};return{name:"JSON",keywords:{literal:o},contains:[n,t,e.QUOTE_STRING_MODE,f,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ht(e){const n=e.regex,t=e.COMMENT("--","$"),o={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},f={begin:/"/,end:/"/,contains:[{begin:/""/}]},d=["true","false","unknown"],i=["double precision","large object","with timezone","without timezone"],s=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["add","asc","collation","desc","final","first","last","view"],_=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],b=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],A=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],R=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],E=b,x=[..._,...c].filter(T=>!b.includes(T)),w={className:"variable",begin:/@[a-z0-9]+/},N={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},S={begin:n.concat(/\b/,n.either(...E),/\s*\(/),relevance:0,keywords:{built_in:E}};function j(T,{exceptions:I,when:Y}={}){const Z=Y;return I=I||[],T.map($=>$.match(/\|\d+$/)||I.includes($)?$:Z($)?`${$}|0`:$)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:j(x,{when:T=>T.length<3}),literal:d,type:s,built_in:A},contains:[{begin:n.either(...R),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:x.concat(R),literal:d,type:s}},{className:"type",begin:n.either(...i)},S,w,o,f,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,N]}}function Ut(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o=/[\p{L}0-9._:-]+/u,f={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},d={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(d,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),_={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[f]},{begin:/'/,end:/'/,contains:[f]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[d,c,s,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[d,i,c,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},f,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[_],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[_],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:_}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function zt(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",o={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},f={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},d={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,f]},i=e.inherit(d,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),s="[0-9]{4}(-[0-9][0-9]){0,2}",c="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",_="(\\.[0-9]*)?",b="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",A={className:"number",begin:"\\b"+s+c+_+b+"\\b"},R={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},E={begin:/\{/,end:/\}/,contains:[R],illegal:"\\n",relevance:0},x={begin:"\\[",end:"\\]",contains:[R],illegal:"\\n",relevance:0},w=[o,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},A,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},E,x,d],N=[...w];return N.pop(),N.push(i),R.contains=N,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:w}}const Gt={style:{"overflow-x":"hidden",width:"100%"}},Wt=Fe({__name:"TextareaCopyable",props:{value:null,followHeightOf:{default:null},language:{default:"txt"},copyPlacement:{default:"top-right"},copyMessage:{default:"Copy to clipboard"}},setup(e){const n=e;J.registerLanguage("sql",Ht),J.registerLanguage("json",Pt),J.registerLanguage("html",Ut),J.registerLanguage("yaml",zt);const{value:t,language:o,followHeightOf:f,copyPlacement:d,copyMessage:i}=xn(n),{height:s}=f?Nn(f):{height:ve(null)},{copy:c}=Mn({source:t}),_=ve(i.value);function b(){c(),_.value="Copied !",setTimeout(()=>{_.value=i.value},2e3)}return(A,R)=>{const E=Wn,x=Cn,w=Dn,N=An,S=kn,j=In,T=Ln,I=jn;return me(),Rn("div",Gt,[F(T,{class:"result-card"},{default:G(()=>[F(w,{"x-scrollable":"",trigger:"none",style:On(P(s)?`min-height: ${P(s)-40+10}px`:"")},{default:G(()=>[F(x,{hljs:P(J)},{default:G(()=>[F(E,{code:P(t),language:P(o),trim:!1,"data-test-id":"area-content"},null,8,["code","language"])]),_:1},8,["hljs"])]),_:1},8,["style"]),P(t)?(me(),je(j,{key:0,trigger:"hover"},{trigger:G(()=>[$e("div",{class:Sn(["copy-button",[P(d)]])},[F(S,{circle:"","important:h-10":"","important:w-10":"",onClick:b},{default:G(()=>[F(N,{size:"22",component:P($n)},null,8,["component"])]),_:1})],2)]),default:G(()=>[$e("span",null,De(_.value),1)]),_:1})):Be("",!0)]),_:1}),P(d)==="outside"?(me(),je(I,{key:0,justify:"center","mt-4":""},{default:G(()=>[F(S,{onClick:b},{default:G(()=>[Tn(De(_.value),1)]),_:1})]),_:1})):Be("",!0)])}}});var Xt=wn(Wt,[["__scopeId","data-v-9d5fb4fc"]]);export{Xt as T};
