import{d as V,o as v,j as g,q as e,ar as O,v as N,bE as P,aw as q,F as S,r as T,k as t,n as o,bF as I,w as c,m as C,a5 as W,a8 as R,x as D,aX as H,ab as A,e as X,B as G,C as J,H as Q,ad as Y,s as w,y as Z}from"./index-3141604a.js";import{_ as ee}from"./InputNumber-79182b44.js";import{u as te}from"./copy-2e0173a3.js";import{_ as ne}from"./Scrollbar-a3829e4f.js";import{_ as oe}from"./Table-3b80a307.js";import{_ as ae}from"./Divider-40961734.js";import{_ as le}from"./FormItem-5c7797ea.js";import"./use-locale-c06c4986.js";import"./use-form-item-7ba2c55f.js";import"./Input-a67f8393.js";import"./Button-090519e0.js";import"./Remove-a5f09906.js";import"./Add-89bc6dbc.js";const se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ue=e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M12 5v14"}),e("path",{d:"M5 12h14"})],-1),re=[ue],L=V({name:"Plus",render:function(s,i){return v(),g("svg",se,re)}}),ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ce=O('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>',1),pe=[ce],E=V({name:"Trash",render:function(s,i){return v(),g("svg",ie,pe)}});function z({data:a}){return a.length===0?0:N.sum(a)/a.length}function _e({data:a}){const s=z({data:a}),i=a.map(p=>(p-s)**2);return z({data:i})}function me({data:a,headerMap:s={}}){if(!Array.isArray(a)||a.length===0)return"";const i=Object.keys(a[0]),p=a.map(u=>Object.values(u)),_=`| ${i.map(u=>s[u]??u).join(" | ")} |`,k=`| ${i.map(()=>"---").join(" | ")} |`,f=p.map(u=>`| ${u.join(" | ")} |`).join(`
`);return`${_}
${k}
${f}`}const de=V({__name:"dynamic-values",props:{values:{}},emits:["update:values"],setup(a,{emit:s}){const i=a,p=P(),_=q(i,"values",s);async function k(){var u;_.value.push(null),await W(),(u=p.value.at(-1))==null||u.focus()}function f(u){var M;if(u===_.value.length-1){k();return}(M=p.value.at(u+1))==null||M.focus()}return(u,M)=>{const l=R,n=D,m=H;return v(),g("div",null,[(v(!0),g(S,null,T(o(_),($,d)=>(v(),g("div",{key:d,"mb-2":"",flex:"","flex-nowrap":"","gap-2":""},[t(o(ee),{ref_for:!0,ref:o(p).set,value:o(_)[d],"onUpdate:value":b=>o(_)[d]=b,"show-button":!1,placeholder:"Set your measure...",autofocus:"",onKeydown:I(b=>f(d),["enter"])},null,8,["value","onUpdate:value","onKeydown"]),t(m,null,{trigger:c(()=>[t(n,{circle:"",variant:"text",onClick:b=>o(_).splice(d,1)},{default:c(()=>[t(l,{component:o(E),depth:"3",size:"18"},null,8,["component"])]),_:2},1032,["onClick"])]),default:c(()=>[C(" Delete value ")]),_:2},1024)]))),128)),t(n,{onClick:k},{default:c(()=>[t(l,{component:o(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Add a measure ")]),_:1})])}}}),fe={"mb-5":"",flex:"","flex-1":"","flex-nowrap":"","justify-center":"","gap-12px":""},ve={flex:"","justify-center":""},he={style:{flex:"0 0 100%"}},we={style:{"max-width":"600px",margin:"0 auto"}},ge={"mx-auto":"","max-w-sm":"",flex:"","justify-center":"","gap-3":""},ke={"mt-5":"",flex:"","justify-center":"","gap-3":""},Ae=V({__name:"benchmark-builder",setup(a){const s=A("benchmark-builder:suites",[{title:"Suite 1",data:[5,10]},{title:"Suite 2",data:[8,12]}]),i=A("benchmark-builder:unit",""),p=l=>Math.round(l*1e3)/1e3,_=X(()=>s.value.map(({data:l,title:n})=>{const m=l.filter(N.isNumber);return{title:n,size:m.length,mean:z({data:m}),variance:_e({data:m})}}).sort((l,n)=>l.mean-n.mean).map(({mean:l,variance:n,size:m,title:$},d,b)=>{const x=i.value.trim(),h=b[0].mean,B=l-h,U=h===0?"∞":p(l/h),r=d!==0&&h!==l?` (+${p(B)}${x} ; x${U})`:"";return{position:d+1,title:$,mean:`${p(l)}${x}${r}`,variance:`${p(n)}${x}${x?"²":""}`,size:m}})),{copy:k}=te({createToast:!1}),f={title:"Suite",size:"Samples",mean:"Mean",variance:"Variance",position:"Position"};function u(){k(me({data:_.value,headerMap:f}))}function M(){const l=_.value.flatMap(({title:n,...m})=>[` - ${n}`,...Object.entries(m).map(([$,d])=>`    - ${f[$]??$}: ${d}`)]).join(`
`);k(l)}return(l,n)=>{const m=J,$=ae,d=le,b=Z,x=R,h=D,B=ne,U=oe;return v(),g(S,null,[t(B,{style:{flex:"1"},"x-scrollable":""},{default:c(()=>[e("div",fe,[(v(!0),g(S,null,T(o(s),(r,j)=>(v(),g("div",{key:j},[t(b,{style:{width:"294px"}},{default:c(()=>[t(m,{value:r.title,"onUpdate:value":y=>r.title=y,"label-position":"left",label:"Suite name",placeholder:"Suite name...",clearable:""},null,8,["value","onUpdate:value"]),t($),t(d,{label:"Suite values","show-feedback":!1},{default:c(()=>[t(de,{values:r.data,"onUpdate:values":y=>r.data=y},null,8,["values","onUpdate:values"])]),_:2},1024)]),_:2},1024),e("div",ve,[o(s).length>1?(v(),Q(h,{key:0,variant:"text",onClick:y=>o(s).splice(j,1)},{default:c(()=>[t(x,{component:o(E),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Delete suite ")]),_:2},1032,["onClick"])):Y("",!0),t(h,{variant:"text",onClick:y=>o(s).splice(j+1,0,{data:[0],title:`Suite ${o(s).length+1}`})},{default:c(()=>[t(x,{component:o(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Add suite ")]),_:2},1032,["onClick"])])]))),128))])]),_:1}),e("div",he,[e("div",we,[e("div",ge,[t(m,{value:o(i),"onUpdate:value":n[0]||(n[0]=r=>G(i)?i.value=r:null),placeholder:"Unit (eg: ms)",label:"Unit","label-position":"left","mb-4":""},null,8,["value"]),t(h,{onClick:n[1]||(n[1]=r=>s.value=[{title:"Suite 1",data:[]},{title:"Suite 2",data:[]}])},{default:c(()=>[C(" Reset suites ")]),_:1})]),t(U,null,{default:c(()=>[e("thead",null,[e("tr",null,[e("th",null,w(f.position),1),e("th",null,w(f.title),1),e("th",null,w(f.size),1),e("th",null,w(f.mean),1),e("th",null,w(f.variance),1)])]),e("tbody",null,[(v(!0),g(S,null,T(o(_),({title:r,size:j,mean:y,variance:F,position:K})=>(v(),g("tr",{key:r},[e("td",null,w(K),1),e("td",null,w(r),1),e("td",null,w(j),1),e("td",null,w(y),1),e("td",null,w(F),1)]))),128))])]),_:1}),e("div",ke,[t(h,{onClick:n[2]||(n[2]=r=>u())},{default:c(()=>[C(" Copy as markdown table ")]),_:1}),t(h,{onClick:n[3]||(n[3]=r=>M())},{default:c(()=>[C(" Copy as bullet list ")]),_:1})])])])],64)}}});export{Ae as default};