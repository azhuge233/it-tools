import{d as b,z as p,e as A,j as g,k as o,n as l,B as n,q as H,w as y,C as B,x as C,o as k,m as M}from"./index-3141604a.js";import{_ as E}from"./InputCopyable.vue_vue_type_script_setup_true_lang-72165070.js";import{_ as w}from"./c-select-06568ef5.js";import{c as a}from"./index-244a4ab5.js";import{c as U}from"./hash-text.service-9de4e2c4.js";import{u as D}from"./copy-2e0173a3.js";import"./content-copy-dd3e3384.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-e9e3e066.js";const P={flex:"","flex-col":"","gap-4":""},T={flex:"","gap-2":""},$={flex:"","justify-center":""},W=b({__name:"hmac-generator",setup(j){const v={MD5:a.HmacMD5,RIPEMD160:a.HmacRIPEMD160,SHA1:a.HmacSHA1,SHA3:a.HmacSHA3,SHA224:a.HmacSHA224,SHA256:a.HmacSHA256,SHA384:a.HmacSHA384,SHA512:a.HmacSHA512};function d(m,e){return e==="Bin"?U(m.toString(a.enc.Hex)):m.toString(a.enc[e])}const s=p(""),u=p(""),r=p("SHA256"),c=p("Hex"),i=A(()=>d(v[r.value](s.value,u.value),c.value)),{copy:x}=D({source:i});return(m,e)=>{const _=B,f=w,h=E,S=C;return k(),g("div",P,[o(_,{value:l(s),"onUpdate:value":e[0]||(e[0]=t=>n(s)?s.value=t:null),multiline:"","raw-text":"",placeholder:"Plain text to compute the hash...",rows:"3",autosize:"",autofocus:"",label:"Plain text to compute the hash"},null,8,["value"]),o(_,{value:l(u),"onUpdate:value":e[1]||(e[1]=t=>n(u)?u.value=t:null),"raw-text":"",placeholder:"Enter the secret key...",label:"Secret key",clearable:""},null,8,["value"]),H("div",T,[o(f,{value:l(r),"onUpdate:value":e[2]||(e[2]=t=>n(r)?r.value=t:null),label:"Hashing function","flex-1":"",placeholder:"Select an hashing function...",options:Object.keys(v).map(t=>({label:t,value:t}))},null,8,["value","options"]),o(f,{value:l(c),"onUpdate:value":e[3]||(e[3]=t=>n(c)?c.value=t:null),label:"Output encoding","flex-1":"",placeholder:"Select the result encoding...",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64-url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"])]),o(h,{value:l(i),"onUpdate:value":e[4]||(e[4]=t=>n(i)?i.value=t:null),type:"textarea",placeholder:"The result of the HMAC...",label:"HMAC of your text"},null,8,["value"]),H("div",$,[o(S,{onClick:e[5]||(e[5]=t=>l(x)())},{default:y(()=>[M(" Copy HMAC ")]),_:1})])])}}});export{W as default};