import{d as U,ab as v,j as h,q as m,m as p,k as r,n as c,B as C,w as _,C as I,x as w,o as D,p as R}from"./index-3141604a.js";import{u as V}from"./copy-2e0173a3.js";import{a as b}from"./computedRefreshable-33e39d36.js";import{_ as k}from"./InputNumber-79182b44.js";import"./use-locale-c06c4986.js";import"./use-form-item-7ba2c55f.js";import"./Input-a67f8393.js";import"./Button-090519e0.js";import"./Remove-a5f09906.js";import"./Add-89bc6dbc.js";let s;const f=new Uint8Array(16);function j(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(f)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function B(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:S};function q(e,n,u){if(y.randomUUID&&!n&&!e)return y.randomUUID();e=e||{};const o=e.random||(e.rng||j)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){u=u||0;for(let a=0;a<16;++a)n[u+a]=o[a];return n}return B(o)}const N={flex:"","items-center":"","justify-center":"","gap-3":""},A={flex:"","justify-center":"","gap-3":""},E=U({__name:"uuid-generator",setup(e){const n=v("uuid-generator:quantity",1),[u,o]=b(()=>Array.from({length:n.value},()=>q()).join(`
`)),{copy:a}=V({source:u,text:"UUIDs copied to the clipboard"});return(G,i)=>{const g=k,x=I,d=w;return D(),h("div",null,[m("div",N,[p(" Quantity : "),r(g,{value:c(n),"onUpdate:value":i[0]||(i[0]=l=>C(n)?n.value=l:null),min:1,max:50,placeholder:"UUID quantity"},null,8,["value"])]),r(x,{style:{"text-align":"center","font-family":"monospace"},value:c(u),multiline:"",placeholder:"Your uuids",autosize:"",rows:"1",readonly:"","raw-text":"",monospace:"","my-3":"",class:"uuid-display"},null,8,["value"]),m("div",A,[r(d,{autofocus:"",onClick:i[1]||(i[1]=l=>c(a)())},{default:_(()=>[p(" Copy ")]),_:1}),r(d,{onClick:c(o)},{default:_(()=>[p(" Refresh ")]),_:1},8,["onClick"])])])}}});const M=R(E,[["__scopeId","data-v-dca0725f"]]);export{M as default};