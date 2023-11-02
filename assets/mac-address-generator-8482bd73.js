import{m as v,d as V,a7 as _,A as k,$ as B,c as M,b as m,f as n,g as s,a1 as c,w as f,a2 as $,a8 as j,a0 as N,n as R,o as P,t as T,e as C}from"./index-648e106a.js";import{c as F}from"./computedRefreshable-1ef98f54.js";import{u as L}from"./macAddress-11c41d3d.js";import{_ as D}from"./InputNumber-d6959ae0.js";import"./use-locale-173d951d.js";import"./use-form-item-d249922d.js";import"./Input-0d060766.js";import"./Button-ed56b767.js";import"./Remove-85bae6a4.js";import"./Add-ce4045f4.js";function E(l){return(l.match(/[^0-9a-f]/i)===null?l.match(/.{1,2}/g)??[]:l.split(/[^0-9a-f]/i)).filter(Boolean).map(a=>a.padStart(2,"0"))}function Q({prefix:l="",separator:o=":",getRandomByte:a=()=>v.random(0,255).toString(16).padStart(2,"0")}={}){const r=E(l),p=v.times(6-r.length,a);return[...r,...p].join(o)}const q={flex:"","flex-col":"","justify-center":"","gap-2":""},z={flex:"","items-center":""},G=m("label",{"w-150px":"","pr-12px":"","text-right":""}," Quantity:",-1),H={"m-0":"","m-x-auto":""},I={flex:"","justify-center":"","gap-2":""},se=V({__name:"mac-address-generator",setup(l){const o=_("mac-address-generator-amount",1),a=_("mac-address-generator-prefix","64:16:7F"),r=L(a),p=[{label:"Uppercase",value:u=>u.toUpperCase()},{label:"Lowercase",value:u=>u.toLowerCase()}],i=k(p[0].value),b=[{label:":",value:":"},{label:"-",value:"-"},{label:".",value:"."},{label:"None",value:""}],d=_("mac-address-generator-separator",b[0].value),[x,y]=F(()=>r.isValid?v.times(o.value,()=>i.value(Q({prefix:a.value,separator:d.value}))).join(`
`):""),{copy:w}=B({source:x,text:"MAC addresses copied to the clipboard"});return(u,e)=>{const A=D,S=$,g=j,U=N,h=R;return P(),M("div",q,[m("div",z,[G,n(A,{value:s(o),"onUpdate:value":e[0]||(e[0]=t=>c(o)?o.value=t:null),min:"1",max:"100","flex-1":""},null,8,["value"])]),n(S,{value:s(a),"onUpdate:value":e[1]||(e[1]=t=>c(a)?a.value=t:null),label:"MAC address prefix:",placeholder:"Set a prefix, e.g. 64:16:7F",clearable:"","label-position":"left",spellcheck:"false",validation:s(r),"raw-text":"","label-width":"150px","label-align":"right"},null,8,["value","validation"]),n(g,{value:s(i),"onUpdate:value":e[2]||(e[2]=t=>c(i)?i.value=t:null),options:p,label:"Case:","label-width":"150px","label-align":"right"},null,8,["value"]),n(g,{value:s(d),"onUpdate:value":e[3]||(e[3]=t=>c(d)?d.value=t:null),options:b,label:"Separator:","label-width":"150px","label-align":"right"},null,8,["value"]),n(U,{"mt-5":"",flex:"","data-test-id":"ulids"},{default:f(()=>[m("pre",H,T(s(x)),1)]),_:1}),m("div",I,[n(h,{"data-test-id":"refresh",onClick:e[4]||(e[4]=t=>s(y)())},{default:f(()=>[C(" Refresh ")]),_:1}),n(h,{onClick:e[5]||(e[5]=t=>s(w)())},{default:f(()=>[C(" Copy ")]),_:1})])])}}});export{se as default};
