import{u as i}from"./copy-2e0173a3.js";import{d as u,ae as d,e as m,o as f,H as C,w as a,q as v,s,n as e,m as y,aX as x,p as g}from"./index-3141604a.js";const S="Copy to clipboard",b=u({__name:"SpanCopyable",props:{value:{default:""}},setup(n){const p=n,{value:o}=d(p),{copy:c,isJustCopied:r}=i({source:o,createToast:!1}),_=m(()=>r.value?"Copied!":S);return(T,t)=>{const l=x;return f(),C(l,{trigger:"hover"},{trigger:a(()=>[v("span",{class:"value",onClick:t[0]||(t[0]=k=>e(c)())},s(e(o)),1)]),default:a(()=>[y(" "+s(e(_)),1)]),_:1})}}});const N=g(b,[["__scopeId","data-v-0592a498"]]);export{N as S};