import{a0 as f,d as k,n as J,B as m,b as O,p as S,o as N,f as j,g as w,k as n,w as p,i as s,v as c,F as V,x as z,A as B}from"./index-65600c6f.js";import{l as y}from"./index-231c3e11.js";import{w as C}from"./defaults-4d6daddf.js";import{T as E}from"./TextareaCopyable-6727dee8.js";import{_ as A}from"./Switch-3d133103.js";import{_ as P}from"./FormItem-ef066fbd.js";import{_ as U}from"./InputNumber-da05e6c5.js";import"./Copy-6ecb6f09.js";import"./Scrollbar-d50e664b.js";import"./use-form-item-a7da7bd6.js";import"./use-locale-0b05447d.js";import"./Button-9c533259.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-77889594.js";function d(t){return typeof t!="object"||t===null?t:Array.isArray(t)?t.map(d):Object.keys(t).sort((o,e)=>o.localeCompare(e)).reduce((o,e)=>(o[e]=d(t[e]),o),{})}function F({rawJson:t,sortKeys:o=!0,indentSize:e=3}){const a=y.parse(f(t));return JSON.stringify(f(o)?d(a):a,null,f(e))}const I={style:{flex:"0 0 100%"}},K={style:{margin:"0 auto","max-width":"600px"},flex:"","justify-center":"","gap-3":""},T=k({__name:"json-viewer",setup(t){const o=J(),e=m("json-prettify:raw-json",'{"hello": "world", "foo": "bar"}'),a=m("json-prettify:indent-size",3),i=m("json-prettify:sort-keys",!0),g=O(()=>C(()=>F({rawJson:e,indentSize:a,sortKeys:i}),"")),v=S({source:e,rules:[{validator:_=>_===""||y.parse(_),message:"Provided JSON is not valid."}]});return(_,l)=>{const b=A,u=P,x=U,h=z;return N(),j(V,null,[w("div",I,[w("div",K,[n(u,{label:"Sort keys :","label-placement":"left","label-width":"100"},{default:p(()=>[n(b,{value:s(i),"onUpdate:value":l[0]||(l[0]=r=>c(i)?i.value=r:null)},null,8,["value"])]),_:1}),n(u,{label:"Indent size :","label-placement":"left","label-width":"100","show-feedback":!1},{default:p(()=>[n(x,{value:s(a),"onUpdate:value":l[1]||(l[1]=r=>c(a)?a.value=r:null),min:"0",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1})])]),n(u,{label:"Your raw JSON",feedback:s(v).message,"validation-status":s(v).status},{default:p(()=>[n(h,{ref_key:"inputElement",ref:o,value:s(e),"onUpdate:value":l[2]||(l[2]=r=>c(e)?e.value=r:null),placeholder:"Paste your raw JSON here...",rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value"])]),_:1},8,["feedback","validation-status"]),n(u,{label:"Prettified version of your JSON"},{default:p(()=>[n(E,{value:s(g),language:"json","follow-height-of":s(o)},null,8,["value","follow-height-of"])]),_:1})],64)}}});const oe=B(T,[["__scopeId","data-v-2c415be6"]]);export{oe as default};
