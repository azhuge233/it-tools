import{d as g,n as p,p as B,q as w,s as C,e as V,i as e,w as s,F as h,v as k,o as I,h as n,x as $,f,j as m,y as j,m as D,z as N,A as U}from"./index-d4d1dfb2.js";import{u as q}from"./downloadBase64-f79bbe12.js";import{i as z}from"./base64-94c6bba0.js";import"./index-ec5889d2.js";import"./___vite-browser-external_commonjs-proxy-e35a6e85.js";const A={flex:"","justify-center":""},E={flex:"","justify-center":""},P=g({__name:"base64-file-converter",setup(R){const o=p(""),{download:v}=q({source:o}),l=B({source:o,rules:[{message:"Invalid base 64 string",validator:t=>z(t.trim())}]});function b(){if(l.isValid)try{v()}catch{}}const r=p(),{base64:u}=w(r),{copy:y}=C({source:u,text:"Base64 string copied to the clipboard"});async function x(t){t&&(r.value=t)}return(t,a)=>{const _=j,c=D,d=k,F=N;return I(),V(h,null,[e(d,{title:"Base64 to file"},{default:s(()=>[e(_,{value:n(o),"onUpdate:value":a[0]||(a[0]=i=>$(o)?o.value=i:null),multiline:"",placeholder:"Put your base64 file string here...",rows:"5",validation:n(l),"mb-2":""},null,8,["value","validation"]),f("div",A,[e(c,{disabled:n(o)===""||!n(l).isValid,onClick:a[1]||(a[1]=i=>b())},{default:s(()=>[m(" Download file ")]),_:1},8,["disabled"])])]),_:1}),e(d,{title:"File to base64"},{default:s(()=>[e(F,{title:"Drag and drop a file here, or click to select a file",onFileUpload:x}),e(_,{value:n(u),multiline:"",readonly:"",placeholder:"File in base64 will be here",rows:"5","my-2":""},null,8,["value"]),f("div",E,[e(c,{onClick:a[2]||(a[2]=i=>n(y)())},{default:s(()=>[m(" Copy ")]),_:1})])]),_:1})],64)}}});const L=U(P,[["__scopeId","data-v-7721e582"]]);export{L as default};
