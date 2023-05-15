import{d as A,A as u,e as y,k as b,l as t,w as o,an as g,o as B,n as _,m as C,am as k,y as M}from"./index.2e6b7445.js";import{u as E}from"./copy.e6fcf1e6.js";import{c as n}from"./index.d87f09eb.js";import{c as D}from"./hash-text.service.5dc532e9.js";import{_ as T}from"./FormItem.4c07172c.js";import{_ as U}from"./Select.82aa92de.js";const R=A({__name:"hmac-generator",setup(P){const v={MD5:n.exports.HmacMD5,RIPEMD160:n.exports.HmacRIPEMD160,SHA1:n.exports.HmacSHA1,SHA3:n.exports.HmacSHA3,SHA224:n.exports.HmacSHA224,SHA256:n.exports.HmacSHA256,SHA384:n.exports.HmacSHA384,SHA512:n.exports.HmacSHA512};function x(m,e){return e==="Bin"?D(m.toString(n.exports.enc.Hex)):m.toString(n.exports.enc[e])}const s=u(""),r=u(""),p=u("SHA256"),c=u("Hex"),f=y(()=>x(v[p.value](s.value,r.value),c.value)),{copy:h}=E({source:f});return(m,e)=>{const i=k,l=T,H=U,d=g,S=M;return B(),b("div",null,[t(l,{label:"Plain text to compute the hash"},{default:o(()=>[t(i,{value:s.value,"onUpdate:value":e[0]||(e[0]=a=>s.value=a),type:"textarea",placeholder:"Enter the text to compute the hash..."},null,8,["value"])]),_:1}),t(l,{label:"Secret key"},{default:o(()=>[t(i,{value:r.value,"onUpdate:value":e[1]||(e[1]=a=>r.value=a),placeholder:"Enter the secret key..."},null,8,["value"])]),_:1}),t(d,{"item-style":"flex:1 1 0"},{default:o(()=>[t(l,{label:"Hashing function"},{default:o(()=>[t(H,{value:p.value,"onUpdate:value":e[2]||(e[2]=a=>p.value=a),placeholder:"Select an hashing function...",options:Object.keys(_(v)).map(a=>({label:a,value:a}))},null,8,["value","options"])]),_:1}),t(l,{label:"Output encoding"},{default:o(()=>[t(H,{value:c.value,"onUpdate:value":e[3]||(e[3]=a=>c.value=a),placeholder:"Select the result encoding...",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64-url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"])]),_:1})]),_:1}),t(l,{label:"HMAC of your text"},{default:o(()=>[t(i,{readonly:"",value:_(f),type:"textarea",placeholder:"The result of the HMAC..."},null,8,["value"])]),_:1}),t(d,{justify:"center"},{default:o(()=>[t(S,{onClick:e[4]||(e[4]=a=>_(h)())},{default:o(()=>[C("Copy HMAC")]),_:1})]),_:1})])}}});export{R as default};
