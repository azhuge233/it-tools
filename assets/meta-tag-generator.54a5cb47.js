import{_ as Te}from"./c-input-text.1faff010.js";import{T as Pe}from"./TextareaCopyable.a1a254d6.js";import{d as I,h as i,c as b,aJ as re,a as w,a7 as V,a9 as j,u as he,aU as Se,af as fe,aY as ye,aE as Ve,aF as Ce,bU as $e,aX as Ie,cN as Re,W as Ae,X as Q,am as X,aw as Be,A as Y,ad as E,ae as De,b as ge,e as M,f as Me,aK as xe,$ as ie,a0 as O,cO as Oe,cP as K,cQ as z,ah as Ue,aj as q,_ as je,I as Ee,k as N,q as ne,F as Z,r as oe,n as se,l as L,w as H,o as S,x as W,m as Ne,s as Le,J as We,v as ue}from"./index.2e6b7445.js";import{b as Fe,N as U}from"./Button.c2326440.js";import{A as ce}from"./Add.21a61b5d.js";import{R as Ge}from"./Remove.79598fcc.js";import{_ as Ke}from"./FormItem.4c07172c.js";import{_ as ze}from"./InputGroupLabel.e7c0a6d4.js";import{_ as qe}from"./Select.82aa92de.js";import{_ as Ze}from"./InputGroup.1caaa6ff.js";import"./random.613c1dc4.js";import"./validation.89ce9e2c.js";import"./Copy.f30865ae.js";import"./Scrollbar.b46a9c32.js";var He=I({name:"ArrowDown",render(){return i("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"}))))}}),Je=I({name:"ArrowUp",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},i("g",{fill:"none"},i("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}});const p="0!important",be="-1px!important";function B(e){return V(e+"-type",[w("& +",[b("button",{},[V(e+"-type",[j("border",{borderLeftWidth:p}),j("state-border",{left:be})])])])])}function D(e){return V(e+"-type",[w("& +",[b("button",[V(e+"-type",[j("border",{borderTopWidth:p}),j("state-border",{top:be})])])])])}var Xe=b("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[re("vertical",{flexDirection:"row"},[re("rtl",[b("button",[w("&:first-child:not(:last-child)",`
 margin-right: ${p};
 border-top-right-radius: ${p};
 border-bottom-right-radius: ${p};
 `),w("&:last-child:not(:first-child)",`
 margin-left: ${p};
 border-top-left-radius: ${p};
 border-bottom-left-radius: ${p};
 `),w("&:not(:first-child):not(:last-child)",`
 margin-left: ${p};
 margin-right: ${p};
 border-radius: ${p};
 `),B("default"),V("ghost",[B("primary"),B("info"),B("success"),B("warning"),B("error")])])])]),V("vertical",{flexDirection:"column"},[b("button",[w("&:first-child:not(:last-child)",`
 margin-bottom: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-bottom-left-radius: ${p};
 border-bottom-right-radius: ${p};
 `),w("&:last-child:not(:first-child)",`
 margin-top: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-top-left-radius: ${p};
 border-top-right-radius: ${p};
 `),w("&:not(:first-child):not(:last-child)",`
 margin: ${p};
 border-radius: ${p};
 `),D("default"),V("ghost",[D("primary"),D("info"),D("success"),D("warning"),D("error")])])])]);const Ye={size:{type:String,default:void 0},vertical:Boolean};var Qe=I({name:"ButtonGroup",props:Ye,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:l}=he(e);return Se("-button-group",Xe,a),fe(Fe,e),{rtlEnabled:ye("ButtonGroup",l,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});const et=()=>Re,tt=Ve({name:"DynamicInput",common:Ce,peers:{Input:$e,Button:Ie},self:et});var at=tt;const ee=Ae("n-dynamic-input");var lt=I({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,placeholderRef:a}=Q(ee);return{mergedTheme:e,placeholder:a}},render(){const{mergedTheme:e,placeholder:a,value:l,clsPrefix:n,onUpdateValue:s}=this;return i("div",{class:`${n}-dynamic-input-preset-input`},i(X,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:l,placeholder:a,onUpdateValue:s}))}}),rt=I({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(e){const{mergedThemeRef:a,keyPlaceholderRef:l,valuePlaceholderRef:n}=Q(ee);return{mergedTheme:a,keyPlaceholder:l,valuePlaceholder:n,handleKeyInput(s){e.onUpdateValue({key:s,value:e.value.value})},handleValueInput(s){e.onUpdateValue({key:e.value.key,value:s})}}},render(){const{mergedTheme:e,keyPlaceholder:a,valuePlaceholder:l,value:n,clsPrefix:s}=this;return i("div",{class:`${s}-dynamic-input-preset-pair`},i(X,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:n.key,class:`${s}-dynamic-input-pair-input`,placeholder:a,onUpdateValue:this.handleKeyInput}),i(X,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:n.value,class:`${s}-dynamic-input-pair-input`,placeholder:l,onUpdateValue:this.handleValueInput}))}}),it=b("dynamic-input",{width:"100%"},[b("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[b("dynamic-input-preset-input",{flex:1,alignItems:"center"}),b("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[b("dynamic-input-pair-input",[w("&:first-child",{"margin-right":"12px"})])]),j("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[V("icon",{cursor:"pointer"})]),w("&:last-child",{marginBottom:0})]),b("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[b("form-item-blank",{paddingTop:"0 !important"})])]);const F=new WeakMap,nt=Object.assign(Object.assign({},ge.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]});var ot=I({name:"DynamicInput",props:nt,setup(e,{slots:a}){const{mergedComponentPropsRef:l,mergedClsPrefixRef:n,mergedRtlRef:s,inlineThemeDisabled:o}=he(),d=Q(Be,null),h=Y(e.defaultValue),_=E(e,"value"),y=De(_,h),f=ge("DynamicInput","-dynamic-input",it,at,e,n),R=M(()=>{const{value:t}=y;if(Array.isArray(t)){const{max:r}=e;return r!==void 0&&t.length>=r}return!1}),C=M(()=>{const{value:t}=y;return Array.isArray(t)?t.length<=e.min:!0}),x=M(()=>{var t,r;return(r=(t=l==null?void 0:l.value)===null||t===void 0?void 0:t.DynamicInput)===null||r===void 0?void 0:r.buttonSize});function g(t){const{onInput:r,"onUpdate:value":c,onUpdateValue:u}=e;r&&q(r,t),c&&q(c,t),u&&q(u,t),h.value=t}function T(t,r){if(t==null||typeof t!="object")return r;const c=K(t)?z(t):t;let u=F.get(c);return u===void 0&&F.set(c,u=Ue()),u}function $(t,r){const{value:c}=y,u=Array.from(c!=null?c:[]),P=u[t];if(u[t]=r,P&&r&&typeof P=="object"&&typeof r=="object"){const we=K(P)?z(P):P,_e=K(r)?z(r):r,le=F.get(we);le!==void 0&&F.set(_e,le)}g(u)}function k(){m(0)}function m(t){const{value:r}=y,{onCreate:c}=e,u=Array.from(r!=null?r:[]);if(c)u.splice(t+1,0,c(t+1)),g(u);else if(a.default)u.splice(t+1,0,null),g(u);else switch(e.preset){case"input":u.splice(t+1,0,""),g(u);break;case"pair":u.splice(t+1,0,{key:"",value:""}),g(u);break}}function v(t){const{value:r}=y;if(!Array.isArray(r))return;const{min:c}=e;if(r.length<=c)return;const u=Array.from(r);u.splice(t,1),g(u);const{onRemove:P}=e;P&&P(t)}function te(t,r,c){if(r<0||c<0||r>=t.length||c>=t.length||r===c)return;const u=t[r];t[r]=t[c],t[c]=u}function ve(t,r){const{value:c}=y;if(!Array.isArray(c))return;const u=Array.from(c);t==="up"&&te(u,r,r-1),t==="down"&&te(u,r,r+1),g(u)}fe(ee,{mergedThemeRef:f,keyPlaceholderRef:E(e,"keyPlaceholder"),valuePlaceholderRef:E(e,"valuePlaceholder"),placeholderRef:E(e,"placeholder")});const ke=ye("DynamicInput",s,n),ae=M(()=>{const{self:{actionMargin:t,actionMarginRtl:r}}=f.value;return{"--action-margin":t,"--action-margin-rtl":r}}),A=o?Me("dynamic-input",void 0,ae,e):void 0;return{locale:xe("DynamicInput").localeRef,rtlEnabled:ke,buttonSize:x,mergedClsPrefix:n,NFormItem:d,uncontrolledValue:h,mergedValue:y,insertionDisabled:R,removeDisabled:C,handleCreateClick:k,ensureKey:T,handleValueChange:$,remove:v,move:ve,createItem:m,mergedTheme:f,cssVars:o?void 0:ae,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{$slots:e,buttonSize:a,mergedClsPrefix:l,mergedValue:n,locale:s,mergedTheme:o,keyField:d,itemStyle:h,preset:_,showSortButton:y,NFormItem:f,ensureKey:R,handleValueChange:C,remove:x,createItem:g,move:T,onRender:$}=this;return $==null||$(),i("div",{class:[`${l}-dynamic-input`,this.rtlEnabled&&`${l}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(n)||n.length===0?i(U,Object.assign({block:!0,ghost:!0,dashed:!0,size:a},this.createButtonProps,{disabled:this.insertionDisabled,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>ie(e["create-button-default"],()=>[s.create]),icon:()=>ie(e["create-button-icon"],()=>[i(O,{clsPrefix:l},{default:()=>i(ce,null)})])}):n.map((k,m)=>i("div",{key:d?k[d]:R(k,m),"data-key":d?k[d]:R(k,m),class:`${l}-dynamic-input-item`,style:h},Oe(e.default,{value:n[m],index:m},()=>[_==="input"?i(lt,{clsPrefix:l,value:n[m],parentPath:f?f.path.value:void 0,path:f!=null&&f.path.value?`${f.path.value}[${m}]`:void 0,onUpdateValue:v=>C(m,v)}):_==="pair"?i(rt,{clsPrefix:l,value:n[m],parentPath:f?f.path.value:void 0,path:f!=null&&f.path.value?`${f.path.value}[${m}]`:void 0,onUpdateValue:v=>C(m,v)}):null]),i("div",{class:`${l}-dynamic-input-item__action`},i(Qe,{size:a},{default:()=>[i(U,{disabled:this.removeDisabled,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,circle:!0,onClick:()=>x(m)},{icon:()=>i(O,{clsPrefix:l},{default:()=>i(Ge,null)})}),i(U,{disabled:this.insertionDisabled,circle:!0,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,onClick:()=>g(m)},{icon:()=>i(O,{clsPrefix:l},{default:()=>i(ce,null)})}),y?i(U,{disabled:m===0,circle:!0,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,onClick:()=>T("up",m)},{icon:()=>i(O,{clsPrefix:l},{default:()=>i(Je,null)})}):null,y?i(U,{disabled:m===n.length-1,circle:!0,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,onClick:()=>T("down",m)},{icon:()=>i(O,{clsPrefix:l},{default:()=>i(He,null)})}):null]})))))}});const J={"og:description":"twitter:description","og:title":"twitter:title","og:image":"twitter:image","og:image:url":"twitter:image","og:image:alt":"twitter:image:alt"};function st({existingMeta:e,twitterMeta:a}){return e.filter(({key:l})=>l in J&&a.find(n=>n.key===J[l])===void 0).map(({key:l,value:n})=>{var s;return{key:(s=J[l])!=null?s:l,value:n}})}const ut=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null&&!(e instanceof Date),ct=e=>e.split(":").map(pt).join(":"),pt=e=>{var a,l;return(l=(a=e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))==null?void 0:a.map(n=>n.toLowerCase()).join("_"))!=null?l:""};function pe({title:e,flatMetadata:a,type:l}){return a.length===0?[]:[`<!-- ${e} -->`,...ft({flatMetadata:a,type:l})]}function dt({twitter:e,...a},{indentation:l=0,indentWith:n="  ",generateTwitterCompatibleMeta:s=!1}={}){const o=de(a,{basePrefix:"og"}),d=de(e,{basePrefix:"twitter"});return[pe({title:"og meta",flatMetadata:o,type:"property"}),pe({title:"twitter meta",flatMetadata:[...d,...s?st({existingMeta:o,twitterMeta:d}):[]],type:"name"})].filter(y=>y&&y.length>0).map(y=>y.map(f=>n.repeat(l)+f).join(`
`)).join(`

`)}function mt(e){return e instanceof Date?e.toISOString():String(e)}function de(e,{separator:a=":",basePrefix:l=""}={}){const n=[],s=(o,d="")=>{if(!(o===void 0||o===""))if(ut(o))for(const[h,_]of Object.entries(o)){const y=[d,ct(h)].filter(Boolean).join(a);s(_,y)}else if(Array.isArray(o))for(const h of o)s(h,d);else n.push({key:d,value:mt(o)})};return s(e,l),n}function ht({flatMetadata:{key:e,value:a},type:l}){return`<meta ${l.trim()}="${e.trim()}" value="${a.trim()}" />`}function ft({flatMetadata:e,type:a}){return e.map(l=>ht({flatMetadata:l,type:a}))}const yt={name:"Article",elements:[{type:"input",label:"Publishing date",key:"article:published_time",placeholder:"When the article was first published..."},{type:"input",label:"Modification date",key:"article:modified_time",placeholder:"When the article was last changed..."},{type:"input",label:"Expiration date",key:"article:expiration_time",placeholder:"When the article is out of date after..."},{type:"input",label:"Author",key:"article:author",placeholder:"Writers of the article..."},{type:"input",label:"Section",key:"article:section",placeholder:"A high-level section name. E.g. Technology.."},{type:"input",label:"Tag",key:"article:tag",placeholder:"Tag words associated with this article..."}]},gt={name:"Book",elements:[{type:"input",label:"Author",key:"book:author",placeholder:"Who wrote this book..."},{type:"input",label:"ISBN",key:"book:isbn",placeholder:"The International Standard Book Number..."},{type:"input",label:"Release date",key:"book:release_date",placeholder:"The date the book was released..."},{type:"input",label:"Tag",key:"book:tag",placeholder:"Tag words associated with this book..."}]},bt={name:"Album details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Musician",key:"music:musician",placeholder:"The musician that made this song..."},{type:"input",label:"Release date",key:"music:release_date",placeholder:"The date the album was released..."}]},vt={name:"Playlist details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this playlist..."}]},kt={name:"Radio station details",elements:[{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this radio station..."}]},wt={name:"Song details",elements:[{type:"input",label:"Duration",placeholder:"The duration of the song...",key:"music:duration"},{type:"input",label:"Album",placeholder:"The album this song is from...",key:"music:album"},{type:"input",label:"Disc",placeholder:"Which disc of the album this song is on...",key:"music:album:disk"},{type:"input",label:"Track",placeholder:" Which track this song is...",key:"music:album:track"},{type:"input-multiple",label:"Musician",placeholder:"The musician that made this song...",key:"music:musician"}]},_t={name:"Profile",elements:[{type:"input",label:"First name",placeholder:"Enter the first name of the person...",key:"profile:first_name"},{type:"input",label:"Last name",placeholder:"Enter the last name of the person...",key:"profile:last_name"},{type:"input",label:"Username",placeholder:"Enter the username of the person...",key:"profile:username"},{type:"input",label:"Gender",placeholder:"Enter the gender of the person...",key:"profile:gender"}]},G={name:"Movie details",elements:[{type:"input-multiple",label:"Actor",key:"video:actor",placeholder:"Name of the actress/actor..."},{type:"input-multiple",label:"Director",key:"video:director",placeholder:"Name of the director..."},{type:"input-multiple",label:"Writer",key:"video:writer",placeholder:"Writers of the movie..."},{type:"input",label:"Duration",key:"video:duration",placeholder:"The movie's length in seconds..."},{type:"input",label:"Release date",key:"video:release_date",placeholder:"The date the movie was released..."},{type:"input",label:"Tag",key:"video:tag",placeholder:"Tag words associated with this movie..."}]},Tt={name:"Video episode details",elements:[...G.elements,{type:"input",label:"Series",key:"video:series",placeholder:"Which series this episode belongs to..."}]},Pt={name:"Other video details",elements:[...G.elements]},St={name:"TV show details",elements:[...G.elements]},Vt={name:"Image",elements:[{type:"input",label:"Image url",placeholder:"The url of your website social image...",key:"image"},{type:"input",label:"Image alt",placeholder:"The alternative text of your website social image...",key:"image:alt"},{type:"input",label:"Width",placeholder:"Width in px of your website social image...",key:"image:width"},{type:"input",label:"Height",placeholder:"Height in px of your website social image...",key:"image:height"}]},Ct={name:"Twitter",elements:[{type:"select",options:[{label:"Summary",value:"summary"},{label:"Summary with large image",value:"summary_large_image"},{label:"Application",value:"app"},{label:"Player",value:"player"}],label:"Card type",placeholder:"The Twitter card type...",key:"twitter:card"},{type:"input",label:"Site account",placeholder:"The name of the Twitter account of the site (ex: @ittoolsdottech)...",key:"twitter:site"},{type:"input",label:"Creator acc.",placeholder:"The name of the Twitter account of the creator (ex: @cthmsst)...",key:"twitter:creator"}]},$t=[{label:"Website",value:"website"},{label:"Article",value:"article"},{label:"Book",value:"book"},{label:"Profile",value:"profile"},{type:"group",label:"Music",key:"Music",children:[{label:"Song",value:"music.song"},{label:"Music album",value:"music.album"},{label:"Playlist",value:"music.playlist"},{label:"Radio station",value:"music.radio_station"}]},{type:"group",label:"Video",key:"Video",children:[{label:"Movie",value:"video.movie"},{label:"Episode",value:"video.episode"},{label:"TV show",value:"video.tv_show"},{label:"Other video",value:"video.other"}]}],It={name:"General information",elements:[{type:"select",label:"Page type",placeholder:"Select the type of your website...",key:"type",options:$t},{type:"input",label:"Title",placeholder:"Enter the title of your website...",key:"title"},{type:"input",label:"Description",placeholder:"Enter the description of your website...",key:"description"},{type:"input",label:"Page URL",placeholder:"Enter the url of your website...",key:"url"}]},me={"music.song":wt,"music.album":bt,"music.playlist":vt,"music.radio_station":kt,"video.movie":G,"video.episode":Tt,"video.tv_show":St,"video.other":Pt,profile:_t,article:yt,book:gt};const Rt=I({__name:"meta-tag-generator",setup(e){const a=Y({type:"website","twitter:card":"summary_large_image"});Ee(()=>Y(a.value.type),(s,o)=>{const d=me[o.value];!d||d.elements.forEach(({key:h})=>{a.value[h]=""})});const l=M(()=>{const s=[It,Vt,Ct],o=me[a.value.type];return o&&s.push(o),s}),n=M(()=>{const s=ue.chain(a.value).pickBy((d,h)=>h.startsWith("twitter:")).mapKeys((d,h)=>h.replace(/^twitter:/,"")).value(),o=ue.pickBy(a.value,(d,h)=>!h.startsWith("twitter:"));return dt({...o,twitter:s},{generateTwitterCompatibleMeta:!0})});return(s,o)=>{const d=Ke,h=ze,_=Te,y=ot,f=qe,R=Ze;return S(),N(Z,null,[ne("div",null,[(S(!0),N(Z,null,oe(se(l),({name:C,elements:x})=>(S(),N("div",{key:C,style:{"margin-bottom":"15px"}},[L(d,{label:C,"show-feedback":!1},null,8,["label"]),(S(!0),N(Z,null,oe(x,({key:g,type:T,label:$,placeholder:k,...m})=>(S(),W(R,{key:g},{default:H(()=>[L(h,{style:{flex:"0 0 110px"}},{default:H(()=>[Ne(Le($),1)]),_:2},1024),T==="input"?(S(),W(_,{key:0,value:a.value[g],"onUpdate:value":v=>a.value[g]=v,placeholder:k,clearable:""},null,8,["value","onUpdate:value","placeholder"])):T==="input-multiple"?(S(),W(y,{key:1,value:a.value[g],"onUpdate:value":v=>a.value[g]=v,min:1,placeholder:k,"default-value":[""],"show-sort-button":!0},null,8,["value","onUpdate:value","placeholder"])):T==="select"?(S(),W(f,{key:2,value:a.value[g],"onUpdate:value":v=>a.value[g]=v,placeholder:k,options:m.options},null,8,["value","onUpdate:value","placeholder","options"])):We("",!0)]),_:2},1024))),128))]))),128))]),ne("div",null,[L(d,{label:"Your meta tags"},{default:H(()=>[L(Pe,{value:se(n),language:"html"},null,8,["value"])]),_:1})])],64)}}});var Kt=je(Rt,[["__scopeId","data-v-627e7ad1"]]);export{Kt as default};