import{d as h,M as k,bI as b,e as x,j as C,k as r,l as o,w as t,F as K,r as N,n as w,y as B,o as a,z as u,m as n,s,b1 as S,a9 as I}from"./index.ca2546a6.js";import{I as L}from"./InputCopyable.7bc43bc6.js";import{_ as M}from"./InputGroupLabel.dedb67e3.js";import{_ as V}from"./InputGroup.fd1b42f8.js";const H=h({__name:"keycode-info",setup(j){const e=k();b(document,"keydown",l=>{e.value=l});const _=x(()=>e.value?[{label:"Key :",value:e.value.key,placeholder:"Key name..."},{label:"Keycode :",value:String(e.value.keyCode),placeholder:"Keycode..."},{label:"Code :",value:e.value.code,placeholder:"Code..."},{label:"Location :",value:String(e.value.location),placeholder:"Code..."},{label:"Modifiers :",value:[e.value.metaKey&&"Meta",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"None"}]:[]);return(l,E)=>{const c=C,p=I,d=B,i=M,m=V;return a(),r("div",null,[o(d,{style:{"text-align":"center",padding:"40px 0","margin-bottom":"26px"}},{default:t(()=>[e.value?(a(),u(c,{key:0},{default:t(()=>[n(s(e.value.key),1)]),_:1})):S("",!0),o(p,{strong:"",depth:"3"},{default:t(()=>[n("Press the key on your keyboard you want to get info about this key")]),_:1})]),_:1}),(a(!0),r(K,null,N(w(_),({label:y,value:f,placeholder:v},g)=>(a(),u(m,{key:g,style:{"margin-bottom":"5px"}},{default:t(()=>[o(i,{style:{flex:"0 0 150px"}},{default:t(()=>[n(s(y),1)]),_:2},1024),o(L,{value:f,readonly:"",placeholder:v},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{H as default};