import{T as L}from"./TextareaCopyable.28637c24.js";import{u as k}from"./validation.b283a4a1.js";import{d as w,v as F,a_ as R,M as n,e as V,k as C,l as a,w as p,aX as E,n as e,F as P,o as T,b0 as B,a7 as D}from"./index.ca2546a6.js";import{_ as I}from"./FormItem.7d600ca2.js";const U=w({__name:"FormatTransformer",props:{transformer:{type:Function,default:F.identity},inputValidationRules:{default:()=>[]},inputLabel:{default:"Input"},inputPlaceholder:{default:"Input..."},inputDefault:{default:""},outputLabel:{default:"Output"},outputLanguage:{default:""}},setup(s){const r=s,{transformer:i,inputValidationRules:f,inputLabel:c,outputLabel:m,outputLanguage:_,inputPlaceholder:d,inputDefault:g}=R(r),o=n(),t=n(g.value),v=V(()=>i.value(t.value)),{attrs:b}=k({source:t,rules:f.value});return(z,l)=>{const h=D,u=I,x=L;return T(),C(P,null,[a(u,E({label:e(c)},e(b)),{default:p(()=>[a(h,{ref_key:"inputElement",ref:o,value:e(t),"onUpdate:value":l[0]||(l[0]=y=>B(t)?t.value=y:null),placeholder:e(d),type:"textarea",rows:"20",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false","input-props":{"data-test-id":"input"}},null,8,["value","placeholder"])]),_:1},16,["label"]),a(u,{label:e(m)},{default:p(()=>[a(x,{value:e(v),language:e(_),"follow-height-of":e(o)},null,8,["value","language","follow-height-of"])]),_:1},8,["label"])],64)}}});export{U as _};