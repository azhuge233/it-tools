import{d as h,o as _,j as v,ar as T,ae as L,e as g,q as d,s as j,n as s,k as u,v as D,ab as S,A as V,B as x,H as I,w as m,ad as F,C as M,F as U,r as q,m as H,a8 as G,x as J}from"./index-3141604a.js";import{i as k,a as $}from"./ipv4-address-converter.service-b0c63347.js";import{c as C}from"./integer-base-converter.model-81b950ae.js";import{S as N}from"./SpanCopyable-033a8523.js";import{_ as K}from"./Alert-2cbfcb31.js";import{_ as Q}from"./Table-3b80a307.js";import"./copy-2e0173a3.js";const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=T('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="6" r="2"></circle><path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3"></path><path d="M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3"></path></g>',1),Y=[X],Z=h({name:"Exchange",render:function(t,n){return _(),v("svg",W,Y)}});function B(a){return`${a>>>24}.${a>>16&255}.${a>>8&255}.${a&255}`}function w(a,t){return a==null||t==null?-1:1+Number.parseInt(t,2)-Number.parseInt(a,2)}function ee(a,t){if(a==null||t==null||w(a,t)<1)return null;let l=32;for(let i=0;i<32;i++)if(a[i]!==t[i]){l=i;break}const r=a.substring(0,l)+"0".repeat(32-l),o=t.substring(0,l)+"1".repeat(32-l);return{start:r,end:o,mask:l}}function te({startIp:a,endIp:t}){const n=C({value:k({ip:a}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),l=C({value:k({ip:t}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),r=ee(n,l);if(r!=null){const o={};return o.newEnd=B(Number.parseInt(r.end,2)),o.newStart=B(Number.parseInt(r.start,2)),o.newCidr=`${o.newStart}/${r.mask}`,o.newSize=w(r.start,r.end),o.oldSize=w(n,l),o}}const ae={"font-bold":""},ne=["data-test-id"],oe=["data-test-id"],le=h({__name:"result-row",props:{label:{default:""},oldValue:{default:""},newValue:{default:""}},setup(a){const t=a,{label:n,oldValue:l,newValue:r}=L(t),o=g(()=>D.kebabCase(n.value));return(i,f)=>(_(),v("tr",null,[d("td",ae,j(s(n)),1),d("td",{"data-test-id":`${s(o)}.old`},[u(N,{value:s(l),class:"monospace"},null,8,["value"])],8,ne),d("td",{"data-test-id":`${s(o)}.new`},[u(N,{value:s(r)},null,8,["value"])],8,oe)]))}}),se={"mb-4":"",flex:"","gap-4":""},re=d("thead",null,[d("tr",null,[d("th",{scope:"col"},"   "),d("th",{scope:"col"}," old value "),d("th",{scope:"col"}," new value ")])],-1),de=d("div",{"my-3":"","op-70":""}," The end IPv4 address is lower than the start IPv4 address. This is not valid and no result could be calculated. In the most cases the solution to solve this problem is to change start and end address. ",-1),ge=h({__name:"ipv4-range-expander",setup(a){const t=S("ipv4-range-expander:startAddress","192.168.1.1"),n=S("ipv4-range-expander:endAddress","192.168.6.255"),l=g(()=>te({startIp:t.value,endIp:n.value})),r=[{label:"Start address",getOldValue:()=>t.value,getNewValue:e=>e==null?void 0:e.newStart},{label:"End address",getOldValue:()=>n.value,getNewValue:e=>e==null?void 0:e.newEnd},{label:"Addresses in range",getOldValue:e=>{var c;return(c=e==null?void 0:e.oldSize)==null?void 0:c.toLocaleString()},getNewValue:e=>{var c;return(c=e==null?void 0:e.newSize)==null?void 0:c.toLocaleString()}},{label:"CIDR",getOldValue:()=>"",getNewValue:e=>e==null?void 0:e.newCidr}],o=V({source:t,rules:[{message:"Invalid ipv4 address",validator:e=>$({ip:e})}]}),i=V({source:n,rules:[{message:"Invalid ipv4 address",validator:e=>$({ip:e})}]}),f=g(()=>i.isValid&&o.isValid&&l.value!==void 0);function E(){const e=t.value;t.value=n.value,n.value=e}return(e,c)=>{const b=M,y=Q,z=G,A=J,P=K;return _(),v("div",null,[d("div",se,[u(b,{value:s(t),"onUpdate:value":c[0]||(c[0]=p=>x(t)?t.value=p:null),label:"Start address",placeholder:"Start IPv4 address...",validation:s(o),clearable:""},null,8,["value","validation"]),u(b,{value:s(n),"onUpdate:value":c[1]||(c[1]=p=>x(n)?n.value=p:null),label:"End address",placeholder:"End IPv4 address...",validation:s(i),clearable:""},null,8,["value","validation"])]),s(f)?(_(),I(y,{key:0,"data-test-id":"result"},{default:m(()=>[re,d("tbody",null,[(_(),v(U,null,q(r,({label:p,getOldValue:R,getNewValue:O})=>u(le,{key:p,label:p,"old-value":R(s(l)),"new-value":O(s(l))},null,8,["label","old-value","new-value"])),64))])]),_:1})):s(o).isValid&&s(i).isValid?(_(),I(P,{key:1,title:"Invalid combination of start and end IPv4 address",type:"error"},{default:m(()=>[de,u(A,{onClick:E},{default:m(()=>[u(z,{"mr-2":"",component:s(Z),depth:"3",size:"22"},null,8,["component"]),H(" Switch start and end IPv4 address ")]),_:1})]),_:1})):F("",!0)])}}});export{ge as default};