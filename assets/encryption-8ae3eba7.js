import{n as r,Z as U,d as Y,b as B,e as A,i as o,w as f,F as C,v as T,o as x,f as _,h as l,x as c,c as k,j as V,t as z,y as D,a0 as R,I as j}from"./index-d4d1dfb2.js";import{c as d}from"./index-a041ed76.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-e35a6e85.js";function I(g,{defaultValue:u,defaultErrorMessage:s="Unknown error"}={}){const a=r(),n=r();return U(()=>{try{a.value=void 0,n.value=g()}catch(i){a.value=i instanceof Error?i.message:i?.toString()??s,n.value=u}}),[n,a]}const N={flex:"","gap-3":""},O={flex:"","flex-1":"","flex-col":"","gap-2":""},F={flex:"","gap-3":""},K={flex:"","flex-1":"","flex-col":"","gap-2":""},M=Y({__name:"encryption",setup(g){const u={AES:d.AES,TripleDES:d.TripleDES,Rabbit:d.Rabbit,RC4:d.RC4},s=r("Lorem ipsum dolor sit amet"),a=r("AES"),n=r("my secret key"),i=B(()=>u[a.value].encrypt(s.value,n.value).toString()),v=r("U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs"),m=r("AES"),y=r("my secret key"),[w,b]=I(()=>u[m.value].decrypt(v.value,y.value).toString(d.enc.Utf8),{defaultValue:"",defaultErrorMessage:"Unable to decrypt your text"});return(L,t)=>{const p=D,E=R,h=T,S=j;return x(),A(C,null,[o(h,{title:"Encrypt"},{default:f(()=>[_("div",N,[o(p,{value:l(s),"onUpdate:value":t[0]||(t[0]=e=>c(s)?s.value=e:null),label:"Your text:",placeholder:"The string to cypher",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),_("div",O,[o(p,{value:l(n),"onUpdate:value":t[1]||(t[1]=e=>c(n)?n.value=e:null),label:"Your secret key:",clearable:"","raw-text":""},null,8,["value"]),o(E,{value:l(a),"onUpdate:value":t[2]||(t[2]=e=>c(a)?a.value=e:null),label:"Encryption algorithm:",options:Object.keys(u).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),o(p,{label:"Your text encrypted:",value:l(i),rows:"3",placeholder:"Your string hash",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"])]),_:1}),o(h,{title:"Decrypt"},{default:f(()=>[_("div",F,[o(p,{value:l(v),"onUpdate:value":t[3]||(t[3]=e=>c(v)?v.value=e:null),label:"Your encrypted text:",placeholder:"The string to cypher",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),_("div",K,[o(p,{value:l(y),"onUpdate:value":t[4]||(t[4]=e=>c(y)?y.value=e:null),label:"Your secret key:",clearable:"","raw-text":""},null,8,["value"]),o(E,{value:l(m),"onUpdate:value":t[5]||(t[5]=e=>c(m)?m.value=e:null),label:"Encryption algorithm:",options:Object.keys(u).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),l(b)?(x(),k(S,{key:0,type:"error","mt-12":"",title:"Error while decrypting"},{default:f(()=>[V(z(l(b)),1)]),_:1})):(x(),k(p,{key:1,label:"Your decrypted text:",value:l(w),placeholder:"Your string hash",rows:"3",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"]))]),_:1})],64)}}});export{M as default};