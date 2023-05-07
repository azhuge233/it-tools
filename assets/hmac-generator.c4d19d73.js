import{d as A,M as u,e as b,k as g,l as t,w as n,a8 as y,o as B,n as _,m as C,a7 as M,x as k}from"./index.ca2546a6.js";import{u as E}from"./copy.d5441c8a.js";import{c as o}from"./index.53b192e1.js";import{c as D}from"./hash-text.service.5dc532e9.js";import{_ as T}from"./FormItem.7d600ca2.js";import{_ as U}from"./Select.2d22edc0.js";const R=A({__name:"hmac-generator",setup(P){const v={MD5:o.exports.HmacMD5,RIPEMD160:o.exports.HmacRIPEMD160,SHA1:o.exports.HmacSHA1,SHA3:o.exports.HmacSHA3,SHA224:o.exports.HmacSHA224,SHA256:o.exports.HmacSHA256,SHA384:o.exports.HmacSHA384,SHA512:o.exports.HmacSHA512};function x(m,e){return e==="Bin"?D(m.toString(o.exports.enc.Hex)):m.toString(o.exports.enc[e])}const s=u(""),r=u(""),p=u("SHA256"),c=u("Hex"),f=b(()=>x(v[p.value](s.value,r.value),c.value)),{copy:h}=E({source:f});return(m,e)=>{const i=M,l=T,H=U,d=y,S=k;return B(),g("div",null,[t(l,{label:"Plain text to compute the hash"},{default:n(()=>[t(i,{value:s.value,"onUpdate:value":e[0]||(e[0]=a=>s.value=a),type:"textarea",placeholder:"Enter the text to compute the hash..."},null,8,["value"])]),_:1}),t(l,{label:"Secret key"},{default:n(()=>[t(i,{value:r.value,"onUpdate:value":e[1]||(e[1]=a=>r.value=a),placeholder:"Enter the secret key..."},null,8,["value"])]),_:1}),t(d,{"item-style":"flex:1 1 0"},{default:n(()=>[t(l,{label:"Hashing function"},{default:n(()=>[t(H,{value:p.value,"onUpdate:value":e[2]||(e[2]=a=>p.value=a),placeholder:"Select an hashing function...",options:Object.keys(_(v)).map(a=>({label:a,value:a}))},null,8,["value","options"])]),_:1}),t(l,{label:"Output encoding"},{default:n(()=>[t(H,{value:c.value,"onUpdate:value":e[3]||(e[3]=a=>c.value=a),placeholder:"Select the result encoding...",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64-url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"])]),_:1})]),_:1}),t(l,{label:"HMAC of your text"},{default:n(()=>[t(i,{readonly:"",value:_(f),type:"textarea",placeholder:"The result of the HMAC..."},null,8,["value"])]),_:1}),t(d,{justify:"center"},{default:n(()=>[t(S,{onClick:e[4]||(e[4]=a=>_(h)())},{default:n(()=>[C("Copy HMAC")]),_:1})]),_:1})])}}});export{R as default};
