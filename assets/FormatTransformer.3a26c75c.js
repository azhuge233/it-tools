import{T as L}from"./TextareaCopyable.a1a254d6.js";import{u as k}from"./validation.89ce9e2c.js";import{d as w,v as F,G as R,A as n,e as V,k as B,l as a,w as p,b6 as C,n as e,F as E,o as P,B as T,am as A}from"./index.2e6b7445.js";import{_ as D}from"./FormItem.4c07172c.js";const U=w({__name:"FormatTransformer",props:{transformer:{type:Function,default:F.identity},inputValidationRules:{default:()=>[]},inputLabel:{default:"Input"},inputPlaceholder:{default:"Input..."},inputDefault:{default:""},outputLabel:{default:"Output"},outputLanguage:{default:""}},setup(s){const r=s,{transformer:i,inputValidationRules:f,inputLabel:c,outputLabel:m,outputLanguage:_,inputPlaceholder:d,inputDefault:g}=R(r),o=n(),t=n(g.value),v=V(()=>i.value(t.value)),{attrs:b}=k({source:t,rules:f.value});return(I,l)=>{const h=A,u=D,x=L;return P(),B(E,null,[a(u,C({label:e(c)},e(b)),{default:p(()=>[a(h,{ref_key:"inputElement",ref:o,value:e(t),"onUpdate:value":l[0]||(l[0]=y=>T(t)?t.value=y:null),placeholder:e(d),type:"textarea",rows:"20",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false","input-props":{"data-test-id":"input"}},null,8,["value","placeholder"])]),_:1},16,["label"]),a(u,{label:e(m)},{default:p(()=>[a(x,{value:e(v),language:e(_),"follow-height-of":e(o)},null,8,["value","language","follow-height-of"])]),_:1},8,["label"])],64)}}});export{U as _};
