import{_ as b,d as x,A as l,e as g,k as h,l as e,w as t,z as y,an as w,o as C,m as p,s as k,n as u,y as A}from"./index.2e6b7445.js";import{_ as $}from"./c-input-text.1faff010.js";import{u as B}from"./copy.e6fcf1e6.js";import{t as z}from"./base64.181c7c18.js";import{_ as U}from"./Scrollbar.b46a9c32.js";import{_ as G}from"./Statistic.401bb946.js";import"./random.613c1dc4.js";import"./validation.89ce9e2c.js";const N=x({__name:"basic-auth-generator",setup(T){const a=l(""),n=l(""),_=g(()=>`Authorization: Basic ${z(`${a.value}:${n.value}`)}`),{copy:c}=B({source:_,text:"Header copied to the clipboard"});return(V,o)=>{const r=$,m=U,i=G,d=y,f=A,v=w;return C(),h("div",null,[e(r,{value:a.value,"onUpdate:value":o[0]||(o[0]=s=>a.value=s),label:"Username",placeholder:"Your username...",clearable:"","raw-text":"","mb-5":""},null,8,["value"]),e(r,{value:n.value,"onUpdate:value":o[1]||(o[1]=s=>n.value=s),label:"Password",placeholder:"Your password...",clearable:"","raw-text":"","mb-2":"",type:"password"},null,8,["value"]),e(d,null,{default:t(()=>[e(i,{label:"Authorization header:",class:"header"},{default:t(()=>[e(m,{"x-scrollable":"",style:{"max-width":"550px","margin-bottom":"-10px","padding-bottom":"10px"},trigger:"none"},{default:t(()=>[p(k(u(_)),1)]),_:1})]),_:1})]),_:1}),e(v,{justify:"center","mt-5":""},{default:t(()=>[e(f,{onClick:u(c)},{default:t(()=>[p("Copy header")]),_:1},8,["onClick"])]),_:1})])}}});var q=b(N,[["__scopeId","data-v-2c2a2703"]]);export{q as default};