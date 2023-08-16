import{d as h,o as _,j as v,aq as T,ac as L,e as g,q as r,s as j,n as s,k as u,v as q,ab as b,A as V,B as x,H as I,w as m,ai as D,C as F,F as M,r as U,m as H,a8 as G,x as J}from"./index-daf2c61e.js";import{i as k,a as $}from"./ipv4-address-converter.service-f6da797a.js";import{c as C}from"./integer-base-converter.model-81b950ae.js";import{S as B}from"./SpanCopyable-d17f209c.js";import{_ as K}from"./Alert-e9de28cd.js";import{_ as Q}from"./Table-985edaf0.js";const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=T('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="6" r="2"></circle><path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3"></path><path d="M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3"></path></g>',1),Y=[X],Z=h({name:"Exchange",render:function(a,n){return _(),v("svg",W,Y)}});function E(t){return`${t>>>24}.${t>>16&255}.${t>>8&255}.${t&255}`}function w(t,a){return t==null||a==null?-1:1+parseInt(a,2)-parseInt(t,2)}function ee(t,a){if(t==null||a==null||w(t,a)<1)return null;let l=32;for(let i=0;i<32;i++)if(t[i]!==a[i]){l=i;break}const d=t.substring(0,l)+"0".repeat(32-l),o=a.substring(0,l)+"1".repeat(32-l);return{start:d,end:o,mask:l}}function ae({startIp:t,endIp:a}){const n=C({value:k({ip:t}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),l=C({value:k({ip:a}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),d=ee(n,l);if(d!=null){const o={};return o.newEnd=E(parseInt(d.end,2)),o.newStart=E(parseInt(d.start,2)),o.newCidr=`${o.newStart}/${d.mask}`,o.newSize=w(d.start,d.end),o.oldSize=w(n,l),o}}const te={"font-bold":""},ne=["data-test-id"],oe=["data-test-id"],le=h({__name:"result-row",props:{label:{default:""},oldValue:{default:""},newValue:{default:""}},setup(t){const a=t,{label:n,oldValue:l,newValue:d}=L(a),o=g(()=>q.kebabCase(n.value));return(i,f)=>(_(),v("tr",null,[r("td",te,j(s(n)),1),r("td",{"data-test-id":`${s(o)}.old`},[u(B,{value:s(l),class:"monospace"},null,8,["value"])],8,ne),r("td",{"data-test-id":`${s(o)}.new`},[u(B,{value:s(d)},null,8,["value"])],8,oe)]))}}),se={"mb-4":"",flex:"","gap-4":""},de=r("thead",null,[r("tr",null,[r("th",{scope:"col"},"   "),r("th",{scope:"col"}," old value "),r("th",{scope:"col"}," new value ")])],-1),re=r("div",{"my-3":"","op-70":""}," The end IPv4 address is lower than the start IPv4 address. This is not valid and no result could be calculated. In the most cases the solution to solve this problem is to change start and end address. ",-1),me=h({__name:"ipv4-range-expander",setup(t){const a=b("ipv4-range-expander:startAddress","192.168.1.1"),n=b("ipv4-range-expander:endAddress","192.168.6.255"),l=g(()=>ae({startIp:a.value,endIp:n.value})),d=[{label:"Start address",getOldValue:()=>a.value,getNewValue:e=>e==null?void 0:e.newStart},{label:"End address",getOldValue:()=>n.value,getNewValue:e=>e==null?void 0:e.newEnd},{label:"Addresses in range",getOldValue:e=>{var c;return(c=e==null?void 0:e.oldSize)==null?void 0:c.toLocaleString()},getNewValue:e=>{var c;return(c=e==null?void 0:e.newSize)==null?void 0:c.toLocaleString()}},{label:"CIDR",getOldValue:()=>"",getNewValue:e=>e==null?void 0:e.newCidr}],o=V({source:a,rules:[{message:"Invalid ipv4 address",validator:e=>$({ip:e})}]}),i=V({source:n,rules:[{message:"Invalid ipv4 address",validator:e=>$({ip:e})}]}),f=g(()=>i.isValid&&o.isValid&&l.value!==void 0);function y(){const e=a.value;a.value=n.value,n.value=e}return(e,c)=>{const S=F,N=Q,z=G,A=J,P=K;return _(),v("div",null,[r("div",se,[u(S,{value:s(a),"onUpdate:value":c[0]||(c[0]=p=>x(a)?a.value=p:null),label:"Start address",placeholder:"Start IPv4 address...",validation:s(o),clearable:""},null,8,["value","validation"]),u(S,{value:s(n),"onUpdate:value":c[1]||(c[1]=p=>x(n)?n.value=p:null),label:"End address",placeholder:"End IPv4 address...",validation:s(i),clearable:""},null,8,["value","validation"])]),s(f)?(_(),I(N,{key:0,"data-test-id":"result"},{default:m(()=>[de,r("tbody",null,[(_(),v(M,null,U(d,({label:p,getOldValue:R,getNewValue:O})=>u(le,{key:p,label:p,"old-value":R(s(l)),"new-value":O(s(l))},null,8,["label","old-value","new-value"])),64))])]),_:1})):s(o).isValid&&s(i).isValid?(_(),I(P,{key:1,title:"Invalid combination of start and end IPv4 address",type:"error"},{default:m(()=>[re,u(A,{onClick:y},{default:m(()=>[u(z,{"mr-2":"",component:s(Z),depth:"3",size:"22"},null,8,["component"]),H(" Switch start and end IPv4 address ")]),_:1})]),_:1})):D("",!0)])}}});export{me as default};