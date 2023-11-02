import{m,d as N,A as c,i as V,c as A,f as a,w as p,a0 as D,o as B,g as e,a1 as v,k as E,e as h,t as O,ac as U,bu as u,b as H,a2 as S,a6 as T}from"./index-648e106a.js";import{_ as i}from"./InputCopyable.vue_vue_type_script_setup_true_lang-9c054a8a.js";import{c as x}from"./integer-base-converter.model-81b950ae.js";import{_ as j}from"./InputNumber-d6959ae0.js";import{_ as M}from"./FormItem-a3e0acf0.js";import{_ as R}from"./Alert-48775a0c.js";import{_ as W}from"./Divider-2779e8ee.js";import{_ as q}from"./InputGroupLabel-1859abf9.js";import{_ as z}from"./InputGroup-6581753b.js";import"./use-locale-173d951d.js";import"./use-form-item-d249922d.js";import"./Input-0d060766.js";import"./Button-ed56b767.js";import"./Remove-85bae6a4.js";import"./Add-ce4045f4.js";function F(f){try{f();return}catch(l){return m.isString(l)?l:m.isError(l)||m.isObject(l)&&m.has(l,"message")?l.message:"An error as occurred."}}const G={flex:"","items-baseline":""},J=N({__name:"integer-base-converter",setup(f){const l={labelPosition:"left",labelWidth:"170px",labelAlign:"right",readonly:!0,"mb-2":""},n=c("42"),o=c(10),r=c(42);function s(...b){try{return x(...b)}catch{return""}}const d=V(()=>F(()=>x({value:n.value,fromBase:o.value,toBase:r.value})));return(b,t)=>{const w=S,g=j,y=M,C=R,k=W,$=q,P=z,I=D;return B(),A("div",null,[a(I,null,{default:p(()=>[a(w,{value:e(n),"onUpdate:value":t[0]||(t[0]=_=>v(n)?n.value=_:null),label:"Input number",placeholder:"Put your number here (ex: 42)","label-position":"left","label-width":"110px","mb-2":"","label-align":"right"},null,8,["value"]),a(y,{label:"Input base","label-placement":"left","label-width":"110","show-feedback":!1},{default:p(()=>[a(g,{value:e(o),"onUpdate:value":t[1]||(t[1]=_=>v(o)?o.value=_:null),max:"64",min:"2",placeholder:"Put your input base here (ex: 10)","w-full":""},null,8,["value"])]),_:1}),e(d)?(B(),E(C,{key:0,style:{"margin-top":"25px"},type:"error"},{default:p(()=>[h(O(e(d)),1)]),_:1})):U("",!0),a(k),a(i,u({label:"Binary (2)"},l,{value:s({value:e(n),fromBase:e(o),toBase:2}),placeholder:"Binary version will be here..."}),null,16,["value"]),a(i,u({label:"Octal (8)"},l,{value:s({value:e(n),fromBase:e(o),toBase:8}),placeholder:"Octal version will be here..."}),null,16,["value"]),a(i,u({label:"Decimal (10)"},l,{value:s({value:e(n),fromBase:e(o),toBase:10}),placeholder:"Decimal version will be here..."}),null,16,["value"]),a(i,u({label:"Hexadecimal (16)"},l,{value:s({value:e(n),fromBase:e(o),toBase:16}),placeholder:"Hexadecimal version will be here..."}),null,16,["value"]),a(i,u({label:"Base64 (64)"},l,{value:s({value:e(n),fromBase:e(o),toBase:64}),placeholder:"Base64 version will be here..."}),null,16,["value"]),H("div",G,[a(P,{style:{width:"160px","margin-right":"10px"}},{default:p(()=>[a($,null,{default:p(()=>[h(" Custom: ")]),_:1}),a(g,{value:e(r),"onUpdate:value":t[2]||(t[2]=_=>v(r)?r.value=_:null),max:"64",min:"2"},null,8,["value"])]),_:1}),a(i,u({"flex-1":""},l,{value:s({value:e(n),fromBase:e(o),toBase:e(r)}),placeholder:`Base ${e(r)} will be here...`}),null,16,["value","placeholder"])])]),_:1})])}}});const ie=T(J,[["__scopeId","data-v-0baf61ec"]]);export{ie as default};
