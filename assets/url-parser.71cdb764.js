import{o,k as l,q as f,_ as B,d as L,A as C,e as U,x as V,w as E,z as N,l as t,r as d,n as v,F as h}from"./index.2e6b7445.js";import{_ as O}from"./c-input-text.1faff010.js";import{i as R}from"./boolean.804e8429.js";import{w as $}from"./defaults.0a26f349.js";import{_ as n}from"./InputCopyable.eac6f423.js";import{_ as j}from"./Divider.e10b5110.js";import"./random.613c1dc4.js";import"./validation.89ce9e2c.js";import"./content-copy.43681fe1.js";const A={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},F=f("path",{fill:"currentColor",d:"m20 16l-5.5 5.5l-1.42-1.41L16.17 17H10.5A6.5 6.5 0 0 1 4 10.5V4h2v6.5C6 13 8 15 10.5 15h5.67l-3.08-3.09l1.41-1.41L20 16Z"},null,-1),H=[F];function I(w,r){return o(),l("svg",A,H)}var T={name:"mdi-arrow-right-bottom",render:I};const Y={style:{flex:"1 0 110px"}},q=L({__name:"url-parser",setup(w){const r=C("https://me:pwd@it-tools.tech:3000/url-parser?key1=value&key2=value2#the-hash"),s=U(()=>$(()=>new URL(r.value),void 0)),y=[{validator:_=>R(()=>new URL(_)),message:"Invalid url"}],x=[{title:"Protocol",key:"protocol"},{title:"Username",key:"username"},{title:"Password",key:"password"},{title:"Hostname",key:"hostname"},{title:"Port",key:"port"},{title:"Path",key:"pathname"},{title:"Params",key:"search"}];return(_,i)=>{const b=O,g=j,k=T,P=N;return o(),V(P,null,{default:E(()=>{var u,c;return[t(b,{value:r.value,"onUpdate:value":i[0]||(i[0]=e=>r.value=e),label:"Your url to parse:",placeholder:"Your url to parse...","raw-text":"","validation-rules":y},null,8,["value"]),t(g),(o(),l(h,null,d(x,({title:e,key:a})=>{var p,m;return t(n,{key:a,label:e,value:(m=(p=v(s))==null?void 0:p[a])!=null?m:"",readonly:"","label-position":"left","label-width":"110px","mb-2":"",placeholder:" "},null,8,["label","value"])}),64)),(o(!0),l(h,null,d(Object.entries(Object.fromEntries((c=(u=v(s))==null?void 0:u.searchParams.entries())!=null?c:[])),([e,a])=>(o(),l("div",{key:e,"mb-2":"","w-full":"",flex:""},[f("div",Y,[t(k)]),t(n,{value:e,readonly:""},null,8,["value"]),t(n,{value:a,readonly:""},null,8,["value"])]))),128))]}),_:1})}}});var W=B(q,[["__scopeId","data-v-9ed44bce"]]);export{W as default};
