import{d as f,bx as v,$ as x,i as C,k as b,w as e,g as n,a1 as y,a2 as $,o as g,f as s,ad as k,n as w,bp as B}from"./index-648e106a.js";const I=f({__name:"InputCopyable",props:{value:{}},emits:["update:value"],setup(p,{emit:_}){const o=v(p,"value",_),{copy:u,isJustCopied:c}=x({source:o,createToast:!1}),l=C(()=>c.value?"Copied!":"Copy to clipboard");return(V,t)=>{const i=k,r=w,m=B,d=$;return g(),b(d,{value:n(o),"onUpdate:value":t[1]||(t[1]=a=>y(o)?o.value=a:null)},{suffix:e(()=>[s(m,{tooltip:n(l)},{default:e(()=>[s(r,{circle:"",variant:"text",size:"small",onClick:t[0]||(t[0]=a=>n(u)())},{default:e(()=>[s(i)]),_:1})]),_:1},8,["tooltip"])]),_:1},8,["value"])}}});export{I as _};
