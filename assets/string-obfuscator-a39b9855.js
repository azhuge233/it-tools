import{b as C,L as i,d as L,n as m,s as B,e as U,i as r,h as a,x as d,f as o,c as F,w as k,H as K,y as N,v as V,o as g,t as $,M as h,m as E}from"./index-d4d1dfb2.js";import{_ as j}from"./InputNumber-0805157e.js";import{_ as D}from"./Switch-041764a1.js";import"./use-locale-bb735d99.js";import"./use-form-item-d41cebbd.js";import"./Button-510b489f.js";import"./Remove-e53214a0.js";function H(_,{replacementChar:e="*",keepFirst:l=4,keepLast:u=0,keepSpace:p=!0}={}){return _.split("").map((s,c,v)=>p&&s===" "||c<l||c>=v.length-u?s:e).join("")}function M(_,e={}){return C(()=>H(i(_),{replacementChar:i(e.replacementChar),keepFirst:i(e.keepFirst),keepLast:i(e.keepLast),keepSpace:i(e.keepSpace)}))}const O={"mt-4":"",flex:"","gap-10px":""},R=o("div",null,"Keep first:",-1),q=o("div",null,"Keep last:",-1),z=o("div",{"mb-5px":""}," Keep spaces: ",-1),A={"break-anywhere":"","text-wrap":""},X=L({__name:"string-obfuscator",setup(_){const e=m("Lorem ipsum dolor sit amet"),l=m(4),u=m(4),p=m(!0),s=M(e,{keepFirst:l,keepLast:u,keepSpace:p}),{copy:c}=B({source:s});return(v,t)=>{const x=N,f=j,b=D,S=h,w=E,y=V;return g(),U("div",null,[r(x,{value:a(e),"onUpdate:value":t[0]||(t[0]=n=>d(e)?e.value=n:null),"raw-text":"",placeholder:"Enter string to obfuscate",label:"String to obfuscate:",clearable:"",multiline:""},null,8,["value"]),o("div",O,[o("div",null,[R,r(f,{value:a(l),"onUpdate:value":t[1]||(t[1]=n=>d(l)?l.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[q,r(f,{value:a(u),"onUpdate:value":t[2]||(t[2]=n=>d(u)?u.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[z,r(b,{value:a(p),"onUpdate:value":t[3]||(t[3]=n=>d(p)?p.value=n:null)},null,8,["value"])])]),a(s)?(g(),F(y,{key:0,"mt-60px":"","max-w-600px":"",flex:"","items-center":"","gap-5px":"","font-mono":""},{default:k(()=>[o("div",A,$(a(s)),1),r(w,{onClick:t[4]||(t[4]=n=>a(c)())},{default:k(()=>[r(S)]),_:1})]),_:1})):K("",!0)])}}});export{X as default};
