import{d as y,n as r,b as x,o as N,f as U,g as a,k as l,w,i as n,x as o,z as R}from"./index-f8ba620c.js";import{_ as X}from"./InputCopyable.vue_vue_type_script_setup_true_lang-43053b57.js";import{_ as Y}from"./InputNumber-95bdb08c.js";import"./use-locale-e10854f1.js";import"./use-form-item-bb159e87.js";import"./Input-9d59494d.js";import"./Button-b80796dc.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-aa38b6da.js";const k={style:{flex:"0 0 100%"}},F={style:{margin:"0 auto","max-width":"600px"}},B=a("div",{"mb-3":"","sm:hidden":""}," What is ",-1),S={flex:"","gap-2":""},T=a("div",{hidden:"","pt-1":"","sm:block":"",style:{"min-width":"48px"}}," What is ",-1),W=a("div",{"min-w-fit":"","pt-1":""}," % of ",-1),C=a("div",{"mb-3":"","sm:hidden":""}," X is what percent of Y ",-1),D={flex:"","gap-2":""},I=a("div",{hidden:"","min-w-fit":"","pt-1":"","sm:block":""}," is what percent of ",-1),V=a("div",{"mb-3":""}," What is the percentage increase/decrease ",-1),z={flex:"","gap-2":""},O=y({__name:"percentage-calculator",setup(E){const d=r(),p=r(),_=x(()=>d.value===void 0||p.value===void 0?"":(d.value/100*p.value).toString()),v=r(),m=r(),f=x(()=>{if(v.value===void 0||m.value===void 0)return"";const u=100*v.value/m.value;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()}),s=r(),c=r(),b=x(()=>{if(s.value===void 0||c.value===void 0)return"";const u=(c.value-s.value)/s.value*100;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()});return(u,e)=>{const i=Y,g=X,h=R;return N(),U("div",k,[a("div",F,[l(h,{"mb-3":""},{default:w(()=>[B,a("div",S,[T,l(i,{value:n(d),"onUpdate:value":e[0]||(e[0]=t=>o(d)?d.value=t:null),"data-test-id":"percentageX",placeholder:"X"},null,8,["value"]),W,l(i,{value:n(p),"onUpdate:value":e[1]||(e[1]=t=>o(p)?p.value=t:null),"data-test-id":"percentageY",placeholder:"Y"},null,8,["value"]),l(g,{value:n(_),"onUpdate:value":e[2]||(e[2]=t=>o(_)?_.value=t:null),"data-test-id":"percentageResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[C,a("div",D,[l(i,{value:n(v),"onUpdate:value":e[3]||(e[3]=t=>o(v)?v.value=t:null),"data-test-id":"numberX",placeholder:"X"},null,8,["value"]),I,l(i,{value:n(m),"onUpdate:value":e[4]||(e[4]=t=>o(m)?m.value=t:null),"data-test-id":"numberY",placeholder:"Y"},null,8,["value"]),l(g,{value:n(f),"onUpdate:value":e[5]||(e[5]=t=>o(f)?f.value=t:null),"data-test-id":"numberResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[V,a("div",z,[l(i,{value:n(s),"onUpdate:value":e[6]||(e[6]=t=>o(s)?s.value=t:null),"data-test-id":"numberFrom",placeholder:"From"},null,8,["value"]),l(i,{value:n(c),"onUpdate:value":e[7]||(e[7]=t=>o(c)?c.value=t:null),"data-test-id":"numberTo",placeholder:"To"},null,8,["value"]),l(g,{value:n(b),"onUpdate:value":e[8]||(e[8]=t=>o(b)?b.value=t:null),"data-test-id":"percentageIncreaseDecrease",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1})])])}}});export{O as default};
