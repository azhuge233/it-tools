import{d as q,z as u,H as B,w as t,y as U,o as $,k as o,n as l,B as p,q as F,m as N,C as V,bK as y,x as z,bH as D}from"./index-3141604a.js";import{_ as H}from"./c-select-06568ef5.js";import{u as L}from"./useQRCode-1aeac131.js";import{u as R}from"./downloadBase64-9f456c91.js";import{_ as T}from"./ColorPicker-4dd1a52b.js";import{_ as E}from"./FormItem-5c7797ea.js";import{_ as K}from"./Form-936ef6b5.js";import{_ as Q}from"./Image-3a8198f8.js";import"./index-ad02b2e2.js";import"./___vite-browser-external_commonjs-proxy-e9e3e066.js";import"./Input-a67f8393.js";import"./Button-090519e0.js";import"./use-form-item-7ba2c55f.js";import"./use-locale-c06c4986.js";import"./InputGroup-d45ce821.js";const Y={flex:"","flex-col":"","items-center":"","gap-3":""},_o=q({__name:"qr-code-generator",setup(j){const _=u("#000000ff"),a=u("#ffffffff"),r=u("medium"),f=["low","medium","quartile","high"],s=u("https://it-tools.tech"),{qrcode:i}=L({text:s,color:{background:a,foreground:_},errorCorrectionLevel:r,options:{width:1024}}),{download:g}=R({source:i,filename:"qr-code.png"});return(A,e)=>{const b=V,c=T,m=E,v=H,x=K,d=y,w=Q,h=z,k=D,C=U;return $(),B(C,null,{default:t(()=>[o(k,{"x-gap":"12","y-gap":"12",cols:"1 600:3"},{default:t(()=>[o(d,{span:"2"},{default:t(()=>[o(b,{value:l(s),"onUpdate:value":e[0]||(e[0]=n=>p(s)?s.value=n:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Text:",multiline:"",rows:"1",autosize:"",placeholder:"Your link or text...","mb-6":""},null,8,["value"]),o(x,{"label-width":"130","label-placement":"left"},{default:t(()=>[o(m,{label:"Foreground color:"},{default:t(()=>[o(c,{value:l(_),"onUpdate:value":e[1]||(e[1]=n=>p(_)?_.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(m,{label:"Background color:"},{default:t(()=>[o(c,{value:l(a),"onUpdate:value":e[2]||(e[2]=n=>p(a)?a.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(v,{value:l(r),"onUpdate:value":e[3]||(e[3]=n=>p(r)?r.value=n:null),label:"Error resistance:","label-position":"left","label-width":"130px","label-align":"right",options:f.map(n=>({label:n,value:n}))},null,8,["value","options"])]),_:1})]),_:1}),o(d,null,{default:t(()=>[F("div",Y,[o(w,{src:l(i),width:"200"},null,8,["src"]),o(h,{onClick:l(g)},{default:t(()=>[N(" Download qr-code ")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}}});export{_o as default};