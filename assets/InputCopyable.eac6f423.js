import{_ as d}from"./c-input-text.1faff010.js";import{d as f,E as v,A as C,aq as g,o as x,x as y,w as e,l as n,m as b,s as k,n as B,B as T,y as V,aS as w}from"./index.2e6b7445.js";import{_ as N}from"./content-copy.43681fe1.js";const D=f({__name:"InputCopyable",props:{value:null},emits:["update:value"],setup(s,{emit:p}){const o=v(s,"value",p),t=C("Copy to clipboard"),{copy:_}=g({source:o});function l(){_(),t.value="Copied !",setTimeout(()=>{t.value="Copy to clipboard"},2e3)}return(h,a)=>{const u=N,c=V,i=w,r=d;return x(),y(r,{value:B(o),"onUpdate:value":a[0]||(a[0]=m=>T(o)?o.value=m:null)},{suffix:e(()=>[n(i,{trigger:"hover"},{trigger:e(()=>[n(c,{circle:"",variant:"text",size:"small",onClick:l},{default:e(()=>[n(u)]),_:1})]),default:e(()=>[b(" "+k(t.value),1)]),_:1})]),_:1},8,["value"])}}});export{D as _};
