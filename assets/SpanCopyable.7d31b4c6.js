import{_ as l,d as i,a_ as u,M as d,ab as v,o as f,z as C,w as t,q as m,s,n as x,m as y,aH as g}from"./index.ca2546a6.js";const b=i({__name:"SpanCopyable",props:{value:{default:""}},setup(n){const p=n,{value:a}=u(p),o="Copy to clipboard",e=d(o),{copy:c}=v({source:a});function _(){c(),e.value="Copied!",setTimeout(()=>e.value=o,1e3)}return(S,h)=>{const r=g;return f(),C(r,{trigger:"hover"},{trigger:t(()=>[m("span",{class:"value",onClick:_},s(x(a)),1)]),default:t(()=>[y(" "+s(e.value),1)]),_:1})}}});var T=l(b,[["__scopeId","data-v-1ce20f15"]]);export{T as S};