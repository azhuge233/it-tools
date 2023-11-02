import{m as i,f as n,F as y,e as C,$ as B,d as b,as as F,A as g,a9 as L,at as I,i as m,g as l,c as J,b as P,w as V,ac as Y,a0 as M,o as v,a1 as k,k as j,a6 as w,a2 as z}from"./index-648e106a.js";import{J as h}from"./index-d4e515d0.js";import{_ as G}from"./FormItem-a3e0acf0.js";import{_ as H}from"./Switch-bb1336f0.js";import{w as A}from"./defaults-4d6daddf.js";import{i as K}from"./boolean-c7e7c785.js";import"./use-form-item-d249922d.js";function Q(e,t,{onlyShowDifferences:s=!1}={}){return i.isArray(e)&&i.isArray(t)?{key:"",type:"array",children:E(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:i.isObject(e)&&i.isObject(t)?{key:"",type:"object",children:S(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:{key:"",type:"value",oldValue:e,value:t,status:p(e,t)}}function S(e,t,{onlyShowDifferences:s=!1}={}){return Object.keys({...e,...t}).map(r=>D(e?.[r],t?.[r],r,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function D(e,t,s,{onlyShowDifferences:a=!1}={}){const r=_(e);return r==="object"?{key:s,type:r,children:S(e,t,{onlyShowDifferences:a}),oldValue:e,value:t,status:p(e,t)}:r==="array"?{key:s,type:r,children:E(e,t,{onlyShowDifferences:a}),value:t,oldValue:e,status:p(e,t)}:{key:s,type:r,value:t,oldValue:e,status:p(e,t)}}function E(e,t,{onlyShowDifferences:s=!1}={}){const a=Math.max(0,e?.length,t?.length);return Array.from({length:a},(r,o)=>D(e?.[o],t?.[o],o,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function _(e){return e===null?"value":Array.isArray(e)?"array":typeof e=="object"?"object":"value"}function p(e,t){if(e===void 0)return"added";if(t===void 0)return"removed";const s=_(e)==="object"&&_(t)==="object",a=_(e)==="array"&&_(t)==="array";return i.isEqual(e,t)?"unchanged":s||a?"children-updated":"updated"}function W({diff:e}){return n("div",{class:"diffs-viewer"},[n("ul",null,[R({diff:e,showKeys:!1})])])}function R({diff:e,showKeys:t=!0}){const{type:s,status:a}=e;return a==="updated"?Z({diff:e,showKeys:t}):s==="array"?T({diff:e,showKeys:t,showChildrenKeys:!1,openTag:"[",closeTag:"]"}):s==="object"?T({diff:e,showKeys:t,openTag:"{",closeTag:"}"}):X({diff:e,showKeys:t})}function X({diff:e,showKeys:t}){const{value:s,key:a,status:r,oldValue:o}=e,u=r==="removed"?o:s;return n("li",null,[n("span",{class:[r,"result"]},[t&&n(y,null,[n("span",{class:"key"},[a]),": "]),x({value:u,status:r})]),C(",")])}function Z({diff:e,showKeys:t}){const{value:s,key:a,oldValue:r}=e;return n("li",{class:"updated-line"},[t&&n(y,null,[n("span",{class:"key"},[a]),": "]),x({value:r,status:"removed"}),x({value:s,status:"added"}),C(",")])}function T({diff:e,openTag:t,closeTag:s,showKeys:a,showChildrenKeys:r=!0}){const{children:o,key:u,status:c,type:f}=e;return n("li",null,[n("div",{class:[f,c],style:{display:"inline-block"}},[a&&n(y,null,[n("span",{class:"key"},[u]),": "]),t,o.length>0&&n("ul",null,[o.map(d=>R({diff:d,showKeys:r}))]),`${s},`])])}function ee(e){return i.isNull(e)?"null":JSON.stringify(e)}function x({value:e,status:t}){const s=ee(e),{copy:a}=B({source:s});return n("span",{class:["value",t],onClick:()=>a()},[s])}const te={key:0},se={flex:"","justify-center":""},re={key:0,"text-center":"","op-70":""},ae=b({__name:"diff-viewer",props:{leftJson:{},rightJson:{}},setup(e){const t=e;F(d=>({"7a613f80":l(o).text.mutedColor,ed7825ee:l(o).success.colorFaded,"31e3079f":l(o).success.color,"8956bfb8":l(o).error.colorFaded,"3a20e0b8":l(o).error.color,"29d2da8a":l(o).text.baseColor}));const s=g(!1),{leftJson:a,rightJson:r}=L(t),o=I(),u=m(()=>Q(a.value,r.value,{onlyShowDifferences:s.value})),c=m(()=>i.isEqual(a.value,r.value)),f=m(()=>!i.isUndefined(a.value)&&!i.isUndefined(r.value));return(d,N)=>{const O=H,U=G,$=M;return l(f)?(v(),J("div",te,[P("div",se,[n(U,{label:"Only show differences","label-placement":"left"},{default:V(()=>[n(O,{value:l(s),"onUpdate:value":N[0]||(N[0]=q=>k(s)?s.value=q:null)},null,8,["value"])]),_:1})]),n($,{"data-test-id":"diff-result"},{default:V(()=>[l(c)?(v(),J("div",re," The provided JSONs are the same ")):(v(),j(l(W),{key:1,diff:l(u)},null,8,["diff"]))]),_:1})])):Y("",!0)}}});const ne=w(ae,[["__scopeId","data-v-d84bb557"]]),pe=b({__name:"json-diff",setup(e){const t=g(""),s=g(""),a=m(()=>A(()=>h.parse(t.value),void 0)),r=m(()=>A(()=>h.parse(s.value),void 0)),o=[{validator:u=>u===""||K(()=>h.parse(u)),message:"Invalid JSON format"}];return(u,c)=>{const f=z;return v(),J(y,null,[n(f,{value:l(t),"onUpdate:value":c[0]||(c[0]=d=>k(t)?t.value=d:null),"validation-rules":o,label:"Your first JSON",placeholder:"Paste your first JSON here...",rows:"20",multiline:"","test-id":"leftJson","raw-text":"",monospace:""},null,8,["value"]),n(f,{value:l(s),"onUpdate:value":c[1]||(c[1]=d=>k(s)?s.value=d:null),"validation-rules":o,label:"Your JSON to compare",placeholder:"Paste your JSON to compare here...",rows:"20",multiline:"","test-id":"rightJson","raw-text":"",monospace:""},null,8,["value"]),n(ne,{"left-json":l(a),"right-json":l(r)},null,8,["left-json","right-json"])],64)}}});export{pe as default};
