import{d as k,z as B,ad as b,ar as i,e as w,j as o,k as C,n as p,B as F,F as m,r as h,C as S,o as t,q as c,s as a,H as z,w as H,y as N}from"./index-daf2c61e.js";const R={"mb-2":"","text-xl":""},T={"text-lg":"","font-bold":""},V={"op-70":""},q=k({__name:"http-status-codes",setup($){const e=B(""),{searchResult:f}=b({search:e,data:i.flatMap(({codes:u,category:s})=>u.map(n=>({...n,category:s}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),v=w(()=>e.value?[{category:"Search results",codes:f.value}]:i);return(u,s)=>{const n=S,g=N;return t(),o("div",null,[C(n,{value:p(e),"onUpdate:value":s[0]||(s[0]=r=>F(e)?e.value=r:null),placeholder:"Search http status...",autofocus:"","raw-text":"","mb-10":""},null,8,["value"]),(t(!0),o(m,null,h(p(v),({codes:r,category:l})=>(t(),o("div",{key:l,"mb-8":""},[c("div",R,a(l),1),(t(!0),o(m,null,h(r,({code:d,description:y,name:x,type:_})=>(t(),z(g,{key:d,"mb-2":""},{default:H(()=>[c("div",T,a(d)+" "+a(x),1),c("div",V,a(y)+" "+a(_!=="HTTP"?`For ${_}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{q as default};