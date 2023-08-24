import{v as m,d as N,z as c,e as V,j as A,k as a,w as p,y as D,o as B,n as e,B as v,H as E,m as h,s as H,ad as O,bA as u,q as U,C as j,p as S}from"./index-3141604a.js";import{_ as i}from"./InputCopyable.vue_vue_type_script_setup_true_lang-72165070.js";import{c as x}from"./integer-base-converter.model-81b950ae.js";import{_ as T}from"./InputNumber-79182b44.js";import{_ as q}from"./FormItem-5c7797ea.js";import{_ as z}from"./Alert-2cbfcb31.js";import{_ as M}from"./Divider-40961734.js";import{_ as R}from"./InputGroupLabel-83962875.js";import{_ as W}from"./InputGroup-d45ce821.js";import"./content-copy-dd3e3384.js";import"./copy-2e0173a3.js";import"./use-locale-c06c4986.js";import"./use-form-item-7ba2c55f.js";import"./Input-a67f8393.js";import"./Button-090519e0.js";import"./Remove-a5f09906.js";import"./Add-89bc6dbc.js";function F(d){try{d();return}catch(l){return m.isString(l)?l:m.isError(l)||m.isObject(l)&&m.has(l,"message")?l.message:"An error as occurred."}}const G={flex:"","items-baseline":""},J=N({__name:"integer-base-converter",setup(d){const l={labelPosition:"left",labelWidth:"170px",labelAlign:"right",readonly:!0,"mb-2":""},o=c("42"),n=c(10),r=c(42);function s(...b){try{return x(...b)}catch{return""}}const f=V(()=>F(()=>x({value:o.value,fromBase:n.value,toBase:r.value})));return(b,t)=>{const y=j,g=T,w=q,C=z,k=M,$=R,P=W,I=D;return B(),A("div",null,[a(I,null,{default:p(()=>[a(y,{value:e(o),"onUpdate:value":t[0]||(t[0]=_=>v(o)?o.value=_:null),label:"Input number",placeholder:"Put your number here (ex: 42)","label-position":"left","label-width":"110px","mb-2":"","label-align":"right"},null,8,["value"]),a(w,{label:"Input base","label-placement":"left","label-width":"110","show-feedback":!1},{default:p(()=>[a(g,{value:e(n),"onUpdate:value":t[1]||(t[1]=_=>v(n)?n.value=_:null),max:"64",min:"2",placeholder:"Put your input base here (ex: 10)","w-full":""},null,8,["value"])]),_:1}),e(f)?(B(),E(C,{key:0,style:{"margin-top":"25px"},type:"error"},{default:p(()=>[h(H(e(f)),1)]),_:1})):O("",!0),a(k),a(i,u({label:"Binary (2)"},l,{value:s({value:e(o),fromBase:e(n),toBase:2}),placeholder:"Binary version will be here..."}),null,16,["value"]),a(i,u({label:"Octal (8)"},l,{value:s({value:e(o),fromBase:e(n),toBase:8}),placeholder:"Octal version will be here..."}),null,16,["value"]),a(i,u({label:"Decimal (10)"},l,{value:s({value:e(o),fromBase:e(n),toBase:10}),placeholder:"Decimal version will be here..."}),null,16,["value"]),a(i,u({label:"Hexadecimal (16)"},l,{value:s({value:e(o),fromBase:e(n),toBase:16}),placeholder:"Hexadecimal version will be here..."}),null,16,["value"]),a(i,u({label:"Base64 (64)"},l,{value:s({value:e(o),fromBase:e(n),toBase:64}),placeholder:"Base64 version will be here..."}),null,16,["value"]),U("div",G,[a(P,{style:{width:"160px","margin-right":"10px"}},{default:p(()=>[a($,null,{default:p(()=>[h(" Custom: ")]),_:1}),a(g,{value:e(r),"onUpdate:value":t[2]||(t[2]=_=>v(r)?r.value=_:null),max:"64",min:"2"},null,8,["value"])]),_:1}),a(i,u({"flex-1":""},l,{value:s({value:e(o),fromBase:e(n),toBase:e(r)}),placeholder:`Base ${e(r)} will be here...`}),null,16,["value","placeholder"])])]),_:1})])}}});const pe=S(J,[["__scopeId","data-v-0baf61ec"]]);export{pe as default};
