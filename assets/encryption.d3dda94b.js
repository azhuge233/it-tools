import{d as g,M as n,e as b,k as w,l as e,w as a,F as E,y as S,o as U,n as k,a7 as R,a8 as Y}from"./index.ca2546a6.js";import{c as s}from"./index.53b192e1.js";import{_ as z}from"./FormItem.7d600ca2.js";import{_ as A}from"./Select.2d22edc0.js";const F=g({__name:"encryption",setup(B){const r={AES:s.exports.AES,TripleDES:s.exports.TripleDES,Rabbit:s.exports.Rabbit,RC4:s.exports.RC4},c=n("Lorem ipsum dolor sit amet"),f=n("AES"),i=n("my secret key"),h=b(()=>r[f.value].encrypt(c.value,i.value).toString()),d=n("U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs"),_=n("AES"),m=n("my secret key"),x=b(()=>r[_.value].decrypt(d.value,m.value).toString(s.exports.enc.Utf8));return(C,l)=>{const u=R,o=z,v=A,p=Y,y=S;return U(),w(E,null,[e(y,{title:"Encrypt"},{default:a(()=>[e(p,{"item-style":"flex: 1 1 0"},{default:a(()=>[e(o,{label:"Your text:","show-feedback":!1},{default:a(()=>[e(u,{value:c.value,"onUpdate:value":l[0]||(l[0]=t=>c.value=t),type:"textarea",placeholder:"The string to cypher",autosize:{minRows:4}},null,8,["value"])]),_:1}),e(p,{vertical:""},{default:a(()=>[e(o,{label:"Your secret key:","show-feedback":!1},{default:a(()=>[e(u,{value:i.value,"onUpdate:value":l[1]||(l[1]=t=>i.value=t)},null,8,["value"])]),_:1}),e(o,{label:"Encryption algorithm:","show-feedback":!1},{default:a(()=>[e(v,{value:f.value,"onUpdate:value":l[2]||(l[2]=t=>f.value=t),options:Object.keys(r).map(t=>({label:t,value:t}))},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),e(o,{label:"Your text encrypted:","show-feedback":!1,"mt-5":""},{default:a(()=>[e(u,{value:k(h),type:"textarea",placeholder:"Your string hash",autosize:{minRows:2},readonly:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,8,["value"])]),_:1})]),_:1}),e(y,{title:"Decrypt"},{default:a(()=>[e(p,{"item-style":"flex: 1 1 0"},{default:a(()=>[e(o,{label:"Your encrypted text:","show-feedback":!1},{default:a(()=>[e(u,{value:d.value,"onUpdate:value":l[3]||(l[3]=t=>d.value=t),type:"textarea",placeholder:"The string to cypher",autosize:{minRows:4}},null,8,["value"])]),_:1}),e(p,{vertical:""},{default:a(()=>[e(o,{label:"Your secret key:","show-feedback":!1},{default:a(()=>[e(u,{value:m.value,"onUpdate:value":l[4]||(l[4]=t=>m.value=t)},null,8,["value"])]),_:1}),e(o,{label:"Encryption algorithm:","show-feedback":!1},{default:a(()=>[e(v,{value:_.value,"onUpdate:value":l[5]||(l[5]=t=>_.value=t),options:Object.keys(r).map(t=>({label:t,value:t}))},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),e(o,{label:"Your decrypted text:","show-feedback":!1,"mt-5":""},{default:a(()=>[e(u,{value:k(x),type:"textarea",placeholder:"Your string hash",autosize:{minRows:2},readonly:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,8,["value"])]),_:1})]),_:1})],64)}}});export{F as default};