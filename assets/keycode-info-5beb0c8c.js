import{d as f,n as v,bz as h,b,e as o,i as a,w as n,F as k,g,h as l,v as x,o as t,t as s,H as C,c as K,j as B,f as N}from"./index-d4d1dfb2.js";import{_ as w}from"./InputCopyable.vue_vue_type_script_setup_true_lang-adafc567.js";import{_ as S}from"./InputGroupLabel-92af05ef.js";import{_ as V}from"./InputGroup-1e45da37.js";const L={key:0,"mb-2":"","text-3xl":""},j=N("span",{"lh-1":"","op-70":""}," Press the key on your keyboard you want to get info about this key ",-1),H=f({__name:"keycode-info",setup(E){const e=v();h(document,"keydown",r=>{e.value=r});const u=b(()=>e.value?[{label:"Key :",value:e.value.key,placeholder:"Key name..."},{label:"Keycode :",value:String(e.value.keyCode),placeholder:"Keycode..."},{label:"Code :",value:e.value.code,placeholder:"Code..."},{label:"Location :",value:String(e.value.location),placeholder:"Code..."},{label:"Modifiers :",value:[e.value.metaKey&&"Meta",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"None"}]:[]);return(r,F)=>{const c=x,_=S,i=V;return t(),o("div",null,[a(c,{"mb-5":"","text-center":"","important:py-12":""},{default:n(()=>[l(e)?(t(),o("div",L,s(l(e).key),1)):C("",!0),j]),_:1}),(t(!0),o(k,null,g(l(u),({label:d,value:p,placeholder:m},y)=>(t(),K(i,{key:y,style:{"margin-bottom":"5px"}},{default:n(()=>[a(_,{style:{flex:"0 0 150px"}},{default:n(()=>[B(s(d),1)]),_:2},1024),a(w,{value:p,readonly:"",placeholder:m},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{H as default};
