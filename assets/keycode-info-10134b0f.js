import{d as f,z as v,bW as h,e as k,j as o,k as a,w as n,F as b,r as g,n as l,y as x,o as t,s,ad as C,H as K,m as B,q as N}from"./index-3141604a.js";import{_ as w}from"./InputCopyable.vue_vue_type_script_setup_true_lang-72165070.js";import{_ as S}from"./InputGroupLabel-83962875.js";import{_ as V}from"./InputGroup-d45ce821.js";import"./content-copy-dd3e3384.js";import"./copy-2e0173a3.js";const L={key:0,"mb-2":"","text-3xl":""},j=N("span",{"lh-1":"","op-70":""}," Press the key on your keyboard you want to get info about this key ",-1),H=f({__name:"keycode-info",setup(E){const e=v();h(document,"keydown",r=>{e.value=r});const u=k(()=>e.value?[{label:"Key :",value:e.value.key,placeholder:"Key name..."},{label:"Keycode :",value:String(e.value.keyCode),placeholder:"Keycode..."},{label:"Code :",value:e.value.code,placeholder:"Code..."},{label:"Location :",value:String(e.value.location),placeholder:"Code..."},{label:"Modifiers :",value:[e.value.metaKey&&"Meta",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"None"}]:[]);return(r,F)=>{const c=x,_=S,i=V;return t(),o("div",null,[a(c,{"mb-5":"","text-center":"","important:py-12":""},{default:n(()=>[l(e)?(t(),o("div",L,s(l(e).key),1)):C("",!0),j]),_:1}),(t(!0),o(b,null,g(l(u),({label:p,value:d,placeholder:m},y)=>(t(),K(i,{key:y,style:{"margin-bottom":"5px"}},{default:n(()=>[a(_,{style:{flex:"0 0 150px"}},{default:n(()=>[B(s(p),1)]),_:2},1024),a(w,{value:d,readonly:"",placeholder:m},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{H as default};