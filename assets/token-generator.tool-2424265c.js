import{d as C,cD as $,s as N,e as j,i as t,w as a,v as B,o as S,f as v,h as e,x as s,j as g,t as k,y as T,m as D,A as G}from"./index-d4d1dfb2.js";import{c as I}from"./token-generator.service-27a0fa34.js";import{u as _}from"./queryParams-e78a45fb.js";import{c as L}from"./computedRefreshable-6758a5b9.js";import{_ as P}from"./Switch-041764a1.js";import{_ as R}from"./FormItem-cc07462d.js";import{_ as z}from"./Form-4537d7f7.js";import{_ as A}from"./Slider-24ca20e1.js";import"./use-form-item-d41cebbd.js";const E={flex:"","justify-center":""},Q={"mt-5":"",flex:"","justify-center":"","gap-3":""},q=C({__name:"token-generator.tool",setup(F){const u=_({name:"length",defaultValue:64}),p=_({name:"uppercase",defaultValue:!0}),m=_({name:"lowercase",defaultValue:!0}),i=_({name:"numbers",defaultValue:!0}),c=_({name:"symbols",defaultValue:!1}),{t:n}=$(),[d,w]=L(()=>I({length:u.value,withUppercase:p.value,withLowercase:m.value,withNumbers:i.value,withSymbols:c.value})),{copy:y}=N({source:d,text:n("tools.token-generator.copied")});return(H,o)=>{const f=P,r=R,x=z,h=A,U=T,b=D,V=B;return S(),j("div",null,[t(V,null,{default:a(()=>[t(x,{"label-placement":"left","label-width":"140"},{default:a(()=>[v("div",E,[v("div",null,[t(r,{label:e(n)("tools.token-generator.uppercase")},{default:a(()=>[t(f,{value:e(p),"onUpdate:value":o[0]||(o[0]=l=>s(p)?p.value=l:null)},null,8,["value"])]),_:1},8,["label"]),t(r,{label:e(n)("tools.token-generator.lowercase")},{default:a(()=>[t(f,{value:e(m),"onUpdate:value":o[1]||(o[1]=l=>s(m)?m.value=l:null)},null,8,["value"])]),_:1},8,["label"])]),v("div",null,[t(r,{label:e(n)("tools.token-generator.numbers")},{default:a(()=>[t(f,{value:e(i),"onUpdate:value":o[2]||(o[2]=l=>s(i)?i.value=l:null)},null,8,["value"])]),_:1},8,["label"]),t(r,{label:e(n)("tools.token-generator.symbols")},{default:a(()=>[t(f,{value:e(c),"onUpdate:value":o[3]||(o[3]=l=>s(c)?c.value=l:null)},null,8,["value"])]),_:1},8,["label"])])])]),_:1}),t(r,{label:`${e(n)("tools.token-generator.length")} (${e(u)})`,"label-placement":"left"},{default:a(()=>[t(h,{value:e(u),"onUpdate:value":o[4]||(o[4]=l=>s(u)?u.value=l:null),step:1,min:1,max:512},null,8,["value"])]),_:1},8,["label"]),t(U,{value:e(d),"onUpdate:value":o[5]||(o[5]=l=>s(d)?d.value=l:null),multiline:"",placeholder:e(n)("tools.token-generator.tokenPlaceholder"),readonly:"",rows:"3",autosize:"",class:"token-display"},null,8,["value","placeholder"]),v("div",Q,[t(b,{onClick:o[6]||(o[6]=l=>e(y)())},{default:a(()=>[g(k(e(n)("tools.token-generator.button.copy")),1)]),_:1}),t(b,{onClick:e(w)},{default:a(()=>[g(k(e(n)("tools.token-generator.button.refresh")),1)]),_:1},8,["onClick"])])]),_:1})])}}});const te=G(q,[["__scopeId","data-v-d78d642a"]]);export{te as default};
