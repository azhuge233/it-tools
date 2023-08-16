import{_ as f}from"./InputCopyable.vue_vue_type_script_setup_true_lang-0a04347a.js";import{d as b,ab as g,e as B,A as I,j as s,k as n,n as l,B as S,F as h,r as x,C as k,o,H as T}from"./index-daf2c61e.js";import{c as i}from"./integer-base-converter.model-81b950ae.js";import{a as y,i as A,b as p}from"./ipv4-address-converter.service-f6da797a.js";import{_ as C}from"./Divider-826fedb6.js";import"./content-copy-ae1cb2d2.js";const E=b({__name:"ipv4-address-converter",setup(V){const e=g("ipv4-converter:ip","192.168.1.1"),u=B(()=>{const a=A({ip:e.value});return[{label:"Decimal: ",value:String(a)},{label:"Hexadecimal: ",value:i({fromBase:10,toBase:16,value:String(a)}).toUpperCase()},{label:"Binary: ",value:i({fromBase:10,toBase:2,value:String(a)})},{label:"Ipv6: ",value:p({ip:e.value})},{label:"Ipv6 (short): ",value:p({ip:e.value,prefix:"::ffff:"})}]}),{attrs:v}=I({source:e,rules:[{message:"Invalid ipv4 address",validator:a=>y({ip:a})}]});return(a,r)=>{const c=k,d=C,m=f;return o(),s("div",null,[n(c,{value:l(e),"onUpdate:value":r[0]||(r[0]=t=>S(e)?e.value=t:null),label:"The ipv4 address:",placeholder:"The ipv4 address..."},null,8,["value"]),n(d),(o(!0),s(h,null,x(l(u),({label:t,value:_})=>(o(),T(m,{key:t,label:t,"label-position":"left","label-width":"100px","label-align":"right","mb-2":"",value:l(v).validationStatus==="error"?"":_,placeholder:"Set a correct ipv4 address"},null,8,["label","value"]))),128))])}}});export{E as default};
