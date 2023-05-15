import{d as B,A as f,e as g,k as T,l as e,w as t,F as C,z as h,o as k,n,m as b,b6 as V,am as $,y as I,an as O}from"./index.2e6b7445.js";import{u as v}from"./copy.e6fcf1e6.js";import{u as S}from"./validation.89ce9e2c.js";import{i as j,t as D,b as E}from"./base64.181c7c18.js";import{w as F}from"./defaults.0a26f349.js";import{_ as N}from"./FormItem.4c07172c.js";const H=B({__name:"base64-string-converter",setup(P){const u=f(""),i=g(()=>D(u.value)),{copy:y}=v({source:i,text:"Base64 string copied to the clipboard"}),s=f(""),p=g(()=>F(()=>E(s.value.trim()),"")),{copy:x}=v({source:p,text:"String copied to the clipboard"}),w=S({source:s,rules:[{message:"Invalid base64 string",validator:c=>j(c.trim())}]});return(c,o)=>{const l=$,r=N,_=I,d=O,m=h;return k(),T(C,null,[e(m,{title:"String to base64"},{default:t(()=>[e(r,{label:"String to encode"},{default:t(()=>[e(l,{value:u.value,"onUpdate:value":o[0]||(o[0]=a=>u.value=a),type:"textarea",placeholder:"Put your string here...",rows:"5"},null,8,["value"])]),_:1}),e(r,{label:"Base64 of string"},{default:t(()=>[e(l,{value:n(i),type:"textarea",readonly:"",placeholder:"The base64 encoding of your string will be here",rows:"5"},null,8,["value"])]),_:1}),e(d,{justify:"center"},{default:t(()=>[e(_,{onClick:o[1]||(o[1]=a=>n(y)())},{default:t(()=>[b(" Copy base64 ")]),_:1})]),_:1})]),_:1}),e(m,{title:"Base64 to string"},{default:t(()=>[e(r,V({label:"Base64 string to decode"},n(w).attrs),{default:t(()=>[e(l,{value:s.value,"onUpdate:value":o[2]||(o[2]=a=>s.value=a),type:"textarea",placeholder:"Your base64 string...",rows:"5"},null,8,["value"])]),_:1},16),e(r,{label:"Decoded string"},{default:t(()=>[e(l,{value:n(p),type:"textarea",readonly:"",placeholder:"The decoded string will be here",rows:"5"},null,8,["value"])]),_:1}),e(d,{justify:"center"},{default:t(()=>[e(_,{onClick:o[3]||(o[3]=a=>n(x)())},{default:t(()=>[b(" Copy decoded string ")]),_:1})]),_:1})]),_:1})],64)}}});export{H as default};
