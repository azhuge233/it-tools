import{ar as pe,D as _,h as r,d as $,I as Qe,b as me,E as xe,as as et,at as tt,au as ot,a as U,c as y,av as le,aw as rt,ax as nt,Z as be,M as I,ay as it,ae as at,az as V,aA as H,ag as Ce,G as Se,e as st,u as q,f as lt,aB as ut,aC as dt,aD as ue,aE as ct,am as Y,F as de,K as k,aF as ft,aG as ht,aH as vt,aI as gt,a2 as wt,a0 as Oe,af as pt,al as ce,P as fe}from"./index.ca2546a6.js";function mt(e,l,n,d){var s=-1,f=e==null?0:e.length;for(d&&f&&(n=e[++s]);++s<f;)n=l(n,e[s],s,e);return n}function xt(e){return function(l){return e==null?void 0:e[l]}}var bt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ct=xt(bt),St=Ct,Ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,It="\\u0300-\\u036f",Rt="\\ufe20-\\ufe2f",Mt="\\u20d0-\\u20ff",Lt=It+Rt+Mt,Pt="["+Lt+"]",yt=RegExp(Pt,"g");function kt(e){return e=pe(e),e&&e.replace(Ot,St).replace(yt,"")}var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Tt(e){return e.match(zt)||[]}var At=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Et(e){return At.test(e)}var Ie="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",_t="\\u20d0-\\u20ff",$t=Ht+Dt+_t,Re="\\u2700-\\u27bf",Me="a-z\\xdf-\\xf6\\xf8-\\xff",Zt="\\xac\\xb1\\xd7\\xf7",jt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bt="\\u2000-\\u206f",Wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Nt="\\ufe0e\\ufe0f",Pe=Zt+jt+Bt+Wt,ye="['\u2019]",he="["+Pe+"]",Ut="["+$t+"]",ke="\\d+",Vt="["+Re+"]",ze="["+Me+"]",Te="[^"+Ie+Pe+ke+Re+Me+Le+"]",Yt="\\ud83c[\\udffb-\\udfff]",Xt="(?:"+Ut+"|"+Yt+")",Ft="[^"+Ie+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Le+"]",Gt="\\u200d",ve="(?:"+ze+"|"+Te+")",Kt="(?:"+E+"|"+Te+")",ge="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",we="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",He=Xt+"?",De="["+Nt+"]?",qt="(?:"+Gt+"(?:"+[Ft,Ae,Ee].join("|")+")"+De+He+")*",Jt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",eo=De+He+qt,to="(?:"+[Vt,Ae,Ee].join("|")+")"+eo,oo=RegExp([E+"?"+ze+"+"+ge+"(?="+[he,E,"$"].join("|")+")",Kt+"+"+we+"(?="+[he,E+ve,"$"].join("|")+")",E+"?"+ve+"+"+ge,E+"+"+we,Qt,Jt,ke,to].join("|"),"g");function ro(e){return e.match(oo)||[]}function no(e,l,n){return e=pe(e),l=n?void 0:l,l===void 0?Et(e)?ro(e):Tt(e):e.match(l)||[]}var io="['\u2019]",ao=RegExp(io,"g");function so(e){return function(l){return mt(no(kt(l).replace(ao,"")),e,"")}}var lo=so(function(e,l,n){return e+(n?"-":"")+l.toLowerCase()}),uo=lo,co=_("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),r("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),fo=_("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),r("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),ho=_("zoomIn",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),r("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),vo=_("zoomOut",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),r("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),go=$({name:"ResizeSmall",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("g",{fill:"none"},r("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}});const X=Qe&&"loading"in document.createElement("img"),wo=(e={})=>{var l;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(l=e.threshold)!==null&&l!==void 0?l:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},F=new WeakMap,G=new WeakMap,K=new WeakMap,po=(e,l,n)=>{if(!e)return()=>{};const d=wo(l),{root:s}=d.options;let f;const p=F.get(s);p?f=p:(f=new Map,F.set(s,f));let g,c;f.has(d.hash)?(c=f.get(d.hash),c[1].has(e)||(g=c[0],c[1].add(e),g.observe(e))):(g=new IntersectionObserver(w=>{w.forEach(L=>{if(L.isIntersecting){const R=G.get(L.target),M=K.get(L.target);R&&R(),M&&(M.value=!0)}})},d.options),g.observe(e),c=[g,new Set([e])],f.set(d.hash,c));let i=!1;const u=()=>{i||(G.delete(e),K.delete(e),i=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&f.delete(d.hash),f.size||F.delete(s))};return G.set(e,u),K.set(e,n),u},J=Object.assign(Object.assign({},me.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),_e=xe("n-image");function mo(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const xo=et({name:"Image",common:tt,peers:{Tooltip:ot},self:mo}),bo=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),Co=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),So=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"}));var Oo=U([U("body >",[y("image-container","position: fixed;")]),y("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),y("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[le()]),y("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[y("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),le()]),y("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[rt()]),y("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),y("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[nt("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]);const D=32;var $e=$({name:"ImagePreview",props:Object.assign(Object.assign({},J),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const l=me("Image","-image",Oo,xo,e,be(e,"clsPrefix"));let n=null;const d=I(null),s=I(null),f=I(void 0),p=I(!1),g=I(!1),{localeRef:c}=it("Image");function i(){const{value:t}=s;if(!n||!t)return;const{style:a}=t,o=n.getBoundingClientRect(),h=o.left+o.width/2,v=o.top+o.height/2;a.transformOrigin=`${h}px ${v}px`}function u(t){var a,o;switch(t.key){case" ":t.preventDefault();break;case"ArrowLeft":(a=e.onPrev)===null||a===void 0||a.call(e);break;case"ArrowRight":(o=e.onNext)===null||o===void 0||o.call(e);break;case"Escape":ie();break}}at(p,t=>{t?V("keydown",document,u):H("keydown",document,u)}),Ce(()=>{H("keydown",document,u)});let w=0,L=0,R=0,M=0,Z=0,j=0,Q=0,ee=0,B=!1;function te(t){const{clientX:a,clientY:o}=t;R=a-w,M=o-L,gt(S)}function je(t){const{mouseUpClientX:a,mouseUpClientY:o,mouseDownClientX:h,mouseDownClientY:v}=t,b=h-a,C=v-o,O=`vertical${C>0?"Top":"Bottom"}`,P=`horizontal${b>0?"Left":"Right"}`;return{moveVerticalDirection:O,moveHorizontalDirection:P,deltaHorizontal:b,deltaVertical:C}}function oe(t){const{value:a}=d;if(!a)return{offsetX:0,offsetY:0};const o=a.getBoundingClientRect(),{moveVerticalDirection:h,moveHorizontalDirection:v,deltaHorizontal:b,deltaVertical:C}=t||{};let O=0,P=0;return o.width<=window.innerWidth?O=0:o.left>0?O=(o.width-window.innerWidth)/2:o.right<window.innerWidth?O=-(o.width-window.innerWidth)/2:v==="horizontalRight"?O=Math.min((o.width-window.innerWidth)/2,Z-(b!=null?b:0)):O=Math.max(-((o.width-window.innerWidth)/2),Z-(b!=null?b:0)),o.height<=window.innerHeight?P=0:o.top>0?P=(o.height-window.innerHeight)/2:o.bottom<window.innerHeight?P=-(o.height-window.innerHeight)/2:h==="verticalBottom"?P=Math.min((o.height-window.innerHeight)/2,j-(C!=null?C:0)):P=Math.max(-((o.height-window.innerHeight)/2),j-(C!=null?C:0)),{offsetX:O,offsetY:P}}function re(t){H("mousemove",document,te),H("mouseup",document,re);const{clientX:a,clientY:o}=t;B=!1;const h=je({mouseUpClientX:a,mouseUpClientY:o,mouseDownClientX:Q,mouseDownClientY:ee}),v=oe(h);R=v.offsetX,M=v.offsetY,S()}const m=Se(_e,null);function Be(t){var a,o;if((o=(a=m==null?void 0:m.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onMousedown)===null||o===void 0||o.call(a,t),t.button!==0)return;const{clientX:h,clientY:v}=t;B=!0,w=h-R,L=v-M,Z=R,j=M,Q=h,ee=v,S(),V("mousemove",document,te),V("mouseup",document,re)}function We(t){var a,o;(o=(a=m==null?void 0:m.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onDblclick)===null||o===void 0||o.call(a,t);const h=ne();x=x===h?1:h,S()}const W=1.5;let z=0,x=1,T=0;function N(){x=1,z=0}function Ne(){var t;N(),T=0,(t=e.onPrev)===null||t===void 0||t.call(e)}function Ue(){var t;N(),T=0,(t=e.onNext)===null||t===void 0||t.call(e)}function Ve(){T-=90,S()}function Ye(){T+=90,S()}function Xe(){const{value:t}=d;if(!t)return 1;const{innerWidth:a,innerHeight:o}=window,h=Math.max(1,t.naturalHeight/(o-D)),v=Math.max(1,t.naturalWidth/(a-D));return Math.max(3,h*2,v*2)}function ne(){const{value:t}=d;if(!t)return 1;const{innerWidth:a,innerHeight:o}=window,h=t.naturalHeight/(o-D),v=t.naturalWidth/(a-D);return h<1&&v<1?1:Math.max(h,v)}function Fe(){const t=Xe();x<t&&(z+=1,x=Math.min(t,Math.pow(W,z)),S())}function Ge(){if(x>.5){const t=x;z-=1,x=Math.max(.5,Math.pow(W,z));const a=t-x;S(!1);const o=oe();x+=a,S(!1),x-=a,R=o.offsetX,M=o.offsetY,S()}}function S(t=!0){var a;const{value:o}=d;if(!o)return;const{style:h}=o,v=ht((a=m==null?void 0:m.previewedImgPropsRef.value)===null||a===void 0?void 0:a.style);let b="";if(typeof v=="string")b=v+";";else for(const O in v)b+=`${uo(O)}: ${v[O]};`;const C=`transform-origin: center; transform: translateX(${R}px) translateY(${M}px) rotate(${T}deg) scale(${x});`;B?h.cssText=b+"cursor: grabbing; transition: none;"+C:h.cssText=b+"cursor: grab;"+C+(t?"":"transition: none;"),t||o.offsetHeight}function ie(){p.value=!p.value,g.value=!0}function Ke(){x=ne(),z=Math.ceil(Math.log(x)/Math.log(W)),R=0,M=0,S()}const qe={setPreviewSrc:t=>{f.value=t},setThumbnailEl:t=>{n=t},toggleShow:ie};function Je(t,a){if(e.showToolbarTooltip){const{value:o}=l;return r(vt,{to:!1,theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>c.value[a],trigger:()=>t})}else return t}const ae=st(()=>{const{common:{cubicBezierEaseInOut:t},self:{toolbarIconColor:a,toolbarBorderRadius:o,toolbarBoxShadow:h,toolbarColor:v}}=l.value;return{"--n-bezier":t,"--n-toolbar-icon-color":a,"--n-toolbar-color":v,"--n-toolbar-border-radius":o,"--n-toolbar-box-shadow":h}}),{inlineThemeDisabled:se}=q(),A=se?lt("image-preview",void 0,ae,e):void 0;return Object.assign({previewRef:d,previewWrapperRef:s,previewSrc:f,show:p,appear:ut(),displayed:g,previewedImgProps:m==null?void 0:m.previewedImgPropsRef,handleWheel(t){t.preventDefault()},handlePreviewMousedown:Be,handlePreviewDblclick:We,syncTransformOrigin:i,handleAfterLeave:()=>{N(),T=0,g.value=!1},handleDragStart:t=>{var a,o;(o=(a=m==null?void 0:m.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onDragstart)===null||o===void 0||o.call(a,t),t.preventDefault()},zoomIn:Fe,zoomOut:Ge,rotateCounterclockwise:Ve,rotateClockwise:Ye,handleSwitchPrev:Ne,handleSwitchNext:Ue,withTooltip:Je,resizeToOrignalImageSize:Ke,cssVars:se?void 0:ae,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},qe)},render(){var e,l;const{clsPrefix:n}=this;return r(de,null,(l=(e=this.$slots).default)===null||l===void 0?void 0:l.call(e),r(dt,{show:this.show},{default:()=>{var d;return this.show||this.displayed?((d=this.onRender)===null||d===void 0||d.call(this),ue(r("div",{class:[`${n}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},r(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?r("div",{class:`${n}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?r(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:s}=this;return r("div",{class:`${n}-image-preview-toolbar`},this.onPrev?r(de,null,s(r(k,{clsPrefix:n,onClick:this.handleSwitchPrev},{default:()=>bo}),"tipPrevious"),s(r(k,{clsPrefix:n,onClick:this.handleSwitchNext},{default:()=>Co}),"tipNext")):null,s(r(k,{clsPrefix:n,onClick:this.rotateCounterclockwise},{default:()=>r(fo,null)}),"tipCounterclockwise"),s(r(k,{clsPrefix:n,onClick:this.rotateClockwise},{default:()=>r(co,null)}),"tipClockwise"),s(r(k,{clsPrefix:n,onClick:this.resizeToOrignalImageSize},{default:()=>r(go,null)}),"tipOriginalSize"),s(r(k,{clsPrefix:n,onClick:this.zoomOut},{default:()=>r(vo,null)}),"tipZoomOut"),s(r(k,{clsPrefix:n,onClick:this.zoomIn},{default:()=>r(ho,null)}),"tipZoomIn"),s(r(k,{clsPrefix:n,onClick:this.toggleShow},{default:()=>So}),"tipClose"))}}):null,r(Y,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:s={}}=this;return ue(r("div",{class:`${n}-image-preview-wrapper`,ref:"previewWrapperRef"},r("img",Object.assign({},s,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${n}-image-preview`,s.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[ft,this.show]])}})),[[ct,{enabled:this.show}]])):null}}))}});const Ze=xe("n-image-group"),Io=J;var Lo=$({name:"ImageGroup",props:Io,setup(e){let l;const{mergedClsPrefixRef:n}=q(e),d=`c${wt()}`,s=pt(),f=c=>{var i;l=c,(i=g.value)===null||i===void 0||i.setPreviewSrc(c)};function p(c){if(!(s!=null&&s.proxy))return;const u=s.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${d}]:not([data-error=true])`);if(!u.length)return;const w=Array.from(u).findIndex(L=>L.dataset.previewSrc===l);~w?f(u[(w+c+u.length)%u.length].dataset.previewSrc):f(u[0].dataset.previewSrc)}Oe(Ze,{mergedClsPrefixRef:n,setPreviewSrc:f,setThumbnailEl:c=>{var i;(i=g.value)===null||i===void 0||i.setThumbnailEl(c)},toggleShow:()=>{var c;(c=g.value)===null||c===void 0||c.toggleShow()},groupId:d});const g=I(null);return{mergedClsPrefix:n,previewInstRef:g,next:()=>p(1),prev:()=>p(-1)}},render(){return r($e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}});const Ro=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},J);var Po=$({name:"Image",props:Ro,inheritAttrs:!1,setup(e){const l=I(null),n=I(!1),d=I(null),s=Se(Ze,null),{mergedClsPrefixRef:f}=s||q(e),p={click:()=>{if(e.previewDisabled||n.value)return;const i=e.previewSrc||e.src;if(s){s.setPreviewSrc(i),s.setThumbnailEl(l.value),s.toggleShow();return}const{value:u}=d;!u||(u.setPreviewSrc(i),u.setThumbnailEl(l.value),u.toggleShow())}},g=I(!e.lazy);ce(()=>{var i;(i=l.value)===null||i===void 0||i.setAttribute("data-group-id",(s==null?void 0:s.groupId)||"")}),ce(()=>{if(X)return;let i;const u=fe(()=>{i==null||i(),i=void 0,e.lazy&&(i=po(l.value,e.intersectionObserverOptions,g))});Ce(()=>{u(),i==null||i()})}),fe(()=>{var i;e.src,(i=e.imgProps)===null||i===void 0||i.src,n.value=!1});const c=I(!1);return Oe(_e,{previewedImgPropsRef:be(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:f,groupId:s==null?void 0:s.groupId,previewInstRef:d,imageRef:l,showError:n,shouldStartLoading:g,loaded:c,mergedOnClick:i=>{var u,w;p.click(),(w=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||w===void 0||w.call(u,i)},mergedOnError:i=>{if(!g.value)return;n.value=!0;const{onError:u,imgProps:{onError:w}={}}=e;u==null||u(i),w==null||w(i)},mergedOnLoad:i=>{const{onLoad:u,imgProps:{onLoad:w}={}}=e;u==null||u(i),w==null||w(i),c.value=!0}},p)},render(){var e,l;const{mergedClsPrefix:n,imgProps:d={},loaded:s,$attrs:f,lazy:p}=this,g=(l=(e=this.$slots).placeholder)===null||l===void 0?void 0:l.call(e),c=this.src||d.src||"",i=r("img",Object.assign(Object.assign({},d),{ref:"imageRef",width:this.width||d.width,height:this.height||d.height,src:X?c:this.showError?this.fallbackSrc:this.shouldStartLoading?c:void 0,alt:this.alt||d.alt,"aria-label":this.alt||d.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:X&&p&&!this.intersectionObserverOptions?"lazy":"eager",style:[d.style||"",g&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return r("div",Object.assign({},f,{role:"none",class:[f.class,`${n}-image`,(this.previewDisabled||this.showError)&&`${n}-image--preview-disabled`]}),this.groupId?i:r($e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:n,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>i}),!s&&g)}});export{Lo as N,Po as _};
