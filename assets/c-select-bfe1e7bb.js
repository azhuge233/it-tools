import{d as U,ac as W,o as s,j as c,n as e,as as Z,at as g,s as y,ai as G,an as j,q as f,aj as J,ak as V,am as X,e as E,au as Y,av as ee,ap as oe,z as b,aw as ae,ax as B,ay as te,az as le,ad as se,H as ne,w as N,aA as re,aB as ce,aC as P,aD as ie,B as ue,k as K,aE as de,r as pe,F as fe,aF as he,a5 as ve,a9 as me,aa as _e,p as be}from"./index-daf2c61e.js";const xe=["for"],we=U({__name:"c-label",props:{label:{default:void 0},labelFor:{default:void 0},labelPosition:{default:"top"},labelWidth:{default:"auto"},labelAlign:{default:"left"}},setup(t){const u=t,{label:n,labelAlign:h,labelFor:k,labelPosition:x,labelWidth:C}=W(u);return(d,$)=>(s(),c("div",{class:g({"flex-col":e(x)==="top","flex-row":e(x)==="left"}),flex:"","items-baseline":""},[e(n)?(s(),c("label",{key:0,for:e(k),style:Z({flex:`0 0 ${e(C)}`}),"mb-5px":"","pr-12px":"",class:g({"text-left":e(h)==="left","text-center":e(h)==="center","text-right":e(h)==="right"})},y(e(n)),15,xe)):G("",!0),j(d.$slots,"default")],2))}}),ye={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ge=f("path",{fill:"currentColor",d:"M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"},null,-1),ke=[ge];function Ce(t,u){return s(),c("svg",ye,ke)}const Se={name:"mdi-chevron-down",render:Ce},L={small:{height:"28px",fontSize:"12px"},medium:{height:"34px",fontSize:"14px"},large:{height:"40px",fontSize:"16px"}},{useTheme:ze}=J({dark:{sizes:L,backgroundColor:"#333333",borderColor:"#333333",dropdownShadow:"rgba(0, 0, 0, 0.2) 0px 8px 24px",option:{hover:{backgroundColor:"#444444"},active:{textColor:V.dark.primary.color}},focus:{backgroundColor:"#1ea54c1a"}},light:{sizes:L,backgroundColor:"#ffffff",borderColor:"#e0e0e69e",dropdownShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",option:{hover:{backgroundColor:"#eee"},active:{textColor:V.light.primary.color}},focus:{backgroundColor:"#ffffff"}}});function Ae({value:t,min:u=0,max:n=100}){return Math.min(Math.max(t,u),n)}const Be=t=>(me("data-v-042baebd"),t=t(),_e(),t),$e={"flex-1":"",truncate:""},De={key:1,"lh-normal":""},Ie={key:2,class:"placeholder","lh-normal":""},Re={class:"c-select-dropdown",absolute:"","z-10":"","mt-1":"","max-h-312px":"","w-full":"","overflow-y-auto":"","pretty-scrollbar":""},Oe=Be(()=>f("div",{"px-4":"","py-1":"","opacity-70":""}," No results found ",-1)),Te=["onClick"],Fe=U({__name:"c-select",props:{options:{default:()=>[]},value:{default:void 0},placeholder:{default:void 0},size:{default:"medium"},searchable:{type:Boolean,default:!1},label:{},labelFor:{},labelPosition:{},labelWidth:{},labelAlign:{}},emits:["update:value"],setup(t,{emit:u}){const n=t;X(o=>({22193123:e(q).text.mutedColor,"292863e0":e(p).backgroundColor,"6b443122":e(p).borderColor,"69ee1f6d":e(I).fontSize,"4398ea38":e(I).height,"3027de26":e(p).dropdownShadow,"21b357b2":e(p).option.active.textColor,f95dc382:e(p).option.hover.backgroundColor}));const{options:h,placeholder:k,size:x,searchable:C}=W(n),d=E(()=>h.value.map(o=>typeof o=="string"?{label:o,value:o}:o)),$=Y(),S=ee(n,"value",u),p=ze(),q=oe(),a=b(!1),v=ae(d.value.find(o=>o.value===S.value)),i=b(0),D=b(null),I=E(()=>p.value.sizes[x.value]),m=b(""),R=b();B(()=>!a.value,()=>{i.value=0,m.value=""}),B(()=>a.value,()=>{ve(()=>{var o;return(o=R.value)==null?void 0:o.focus()})}),te(D,O),B($.escape,O),le(S,o=>{const l=d.value.find(_=>_.value===o);l&&(v.value=l)});const{searchResult:z}=se({search:m,data:d.value,options:{keys:["label"],shouldSort:!1,threshold:.3,filterEmpty:!1}});function O(){a.value=!1}function T(){a.value=!a.value}function F({option:o}){v.value=o,S.value=o.value,a.value=!1}function H(o){const{key:l}=o,_=["Enter"].includes(l),A=["ArrowUp","ArrowDown"].includes(l),r=l==="ArrowDown";if(_){a.value&&i.value!==-1?F({option:z.value[i.value]}):T(),o.preventDefault();return}if(A){const w=r?1:-1;i.value=Ae({value:i.value+w,min:0,max:d.value.length-1}),o.preventDefault()}}function Q(){i.value=0}return(o,l)=>{const _=Se,A=we;return s(),ne(A,re(ce(n)),{default:N(()=>[f("div",{ref_key:"elementRef",ref:D,relative:"",class:"c-select","w-full":""},[f("div",{flex:"","flex-nowrap":"","cursor-pointer":"","items-center":"",class:g([{"is-open":e(a),"important:border-primary":e(a)},"c-select-input"]),tabindex:"0","hover:important:border-primary":"",onClick:T,onKeydown:H},[f("div",$e,[e(C)&&e(a)?P((s(),c("input",{key:0,ref_key:"searchInputRef",ref:R,"onUpdate:modelValue":l[0]||(l[0]=r=>ue(m)?m.value=r:null),type:"text",placeholder:"Search...",class:"search-input","w-full":"","lh-normal":"","color-current":"",onInput:Q},null,544)),[[ie,e(m)]]):e(v)?(s(),c("span",De,y(e(v).label),1)):(s(),c("span",Ie,y(e(k)??"Select an option"),1))]),K(_,{class:"chevron"})],34),K(he,{name:"dropdown"},{default:N(()=>[P(f("div",Re,[e(z).length?(s(!0),c(fe,{key:1},pe(e(z),(r,w)=>{var M;return s(),c("div",{key:r.label,"cursor-pointer":"","px-4":"","py-1":"",class:g([{active:((M=e(v))==null?void 0:M.label)===r.label,hover:e(i)===w},"c-select-dropdown-option"]),onClick:Me=>F({option:r})},y(r.label),11,Te)}),128)):j(o.$slots,"empty",{key:0},()=>[Oe],!0)],512),[[de,e(a)]])]),_:3})],512)]),_:3},16)}}});const Ee=be(Fe,[["__scopeId","data-v-042baebd"]]);export{Ee as _};
