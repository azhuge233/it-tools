import{T as x}from"./TextareaCopyable-6c2b769c.js";import{d as y,v as L,ac as R,z as n,e as k,j as w,k as o,n as e,B,C as F,q as p,s as V,F as C,o as D}from"./index-daf2c61e.js";const E={"mb-5px":""},N=y({__name:"FormatTransformer",props:{transformer:{type:Function,default:L.identity},inputValidationRules:{default:()=>[]},inputLabel:{default:"Input"},inputPlaceholder:{default:"Input..."},inputDefault:{default:""},outputLabel:{default:"Output"},outputLanguage:{default:""}},setup(s){const r=s,{transformer:i,inputValidationRules:f,inputLabel:d,outputLabel:c,outputLanguage:m,inputPlaceholder:_,inputDefault:v}=R(r),a=n(),t=n(v.value),g=k(()=>i.value(t.value));return(T,l)=>{var u;const b=x;return D(),w(C,null,[o(F,{ref_key:"inputElement",ref:a,value:e(t),"onUpdate:value":l[0]||(l[0]=h=>B(t)?t.value=h:null),placeholder:e(_),label:e(d),rows:"20",autosize:"","raw-text":"",multiline:"","test-id":"input","validation-rules":e(f),monospace:""},null,8,["value","placeholder","label","validation-rules"]),p("div",null,[p("div",E,V(e(c)),1),o(b,{value:e(g),language:e(m),"follow-height-of":(u=e(a))==null?void 0:u.inputWrapperRef},null,8,["value","language","follow-height-of"])])],64)}}});export{N as _};
