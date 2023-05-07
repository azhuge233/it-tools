import{d as x,M as b,e as g,k as v,l as e,w as o,n as c,z as C,b1 as k,a8 as y,o as r,m as u,s as A,a7 as N,a9 as T,y as O,x as B}from"./index.ca2546a6.js";import{u as V}from"./copy.d5441c8a.js";import{_ as w}from"./FormItem.7d600ca2.js";const I=["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];function L({letter:l}){return l.toLowerCase().charCodeAt(0)-"a".charCodeAt(0)}function P({text:l}){return l.split("").map(t=>{const n=L({letter:t}),a=I[n];return a!=null?a:t}).join(" ")}const M=x({__name:"text-to-nato-alphabet",setup(l){const t=b(""),n=g(()=>P({text:t.value})),{copy:a}=V({source:n,text:"NATO alphabet string copied."});return(Y,s)=>{const p=N,i=w,m=T,d=O,f=B,_=y;return r(),v("div",null,[e(i,{label:"Your text to convert to NATO phonetic alphabet"},{default:o(()=>[e(p,{value:t.value,"onUpdate:value":s[0]||(s[0]=h=>t.value=h),placeholder:"Put your text here...",clearable:""},null,8,["value"])]),_:1}),c(n)?(r(),C(_,{key:0,vertical:""},{default:o(()=>[e(m,null,{default:o(()=>[u("Your text in NATO phonetic alphabet")]),_:1}),e(d,null,{default:o(()=>[u(A(c(n)),1)]),_:1}),e(_,{justify:"center"},{default:o(()=>[e(f,{autofocus:"",onClick:c(a)},{default:o(()=>[u(" Copy NATO string ")]),_:1},8,["onClick"])]),_:1})]),_:1})):k("",!0)])}}});export{M as default};
