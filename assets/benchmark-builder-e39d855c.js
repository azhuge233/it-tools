import{d as B,o as f,j as g,q as e,aq as P,v as T,bA as E,av as F,F as S,r as A,k as t,n as o,bB as H,w as c,m as C,a5 as I,a8 as R,x as D,aX as W,ab as N,e as X,aH as G,B as J,C as Q,H as Y,ai as Z,s as w,y as ee}from"./index-daf2c61e.js";import{_ as te}from"./InputNumber-6f6702d9.js";import{_ as ne}from"./Scrollbar-3a1922cc.js";import{_ as oe}from"./Table-985edaf0.js";import{_ as ae}from"./Divider-826fedb6.js";import{_ as le}from"./FormItem-55449584.js";import"./use-locale-44154ab2.js";import"./use-form-item-0fc2e393.js";import"./Input-6040ed9f.js";import"./Button-d0c411d0.js";import"./Remove-04deaca4.js";import"./Add-380b28f7.js";const se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ue=e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M12 5v14"}),e("path",{d:"M5 12h14"})],-1),re=[ue],L=B({name:"Plus",render:function(s,i){return f(),g("svg",se,re)}}),ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ce=P('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>',1),pe=[ce],q=B({name:"Trash",render:function(s,i){return f(),g("svg",ie,pe)}});function z({data:a}){return a.length===0?0:T.sum(a)/a.length}function _e({data:a}){const s=z({data:a}),i=a.map(p=>(p-s)**2);return z({data:i})}function de({data:a,headerMap:s={}}){if(!Array.isArray(a)||a.length===0)return"";const i=Object.keys(a[0]),p=a.map(u=>Object.values(u)),_=`| ${i.map(u=>s[u]??u).join(" | ")} |`,k=`| ${i.map(()=>"---").join(" | ")} |`,v=p.map(u=>`| ${u.join(" | ")} |`).join(`
`);return`${_}
${k}
${v}`}const me=B({__name:"dynamic-values",props:{values:{}},emits:["update:values"],setup(a,{emit:s}){const i=a,p=E(),_=F(i,"values",s);async function k(){var u;_.value.push(null),await I(),(u=p.value.at(-1))==null||u.focus()}function v(u){var M;if(u===_.value.length-1){k();return}(M=p.value.at(u+1))==null||M.focus()}return(u,M)=>{const l=R,n=D,d=W;return f(),g("div",null,[(f(!0),g(S,null,A(o(_),($,m)=>(f(),g("div",{key:m,"mb-2":"",flex:"","flex-nowrap":"","gap-2":""},[t(o(te),{ref_for:!0,ref:o(p).set,value:o(_)[m],"onUpdate:value":b=>o(_)[m]=b,"show-button":!1,placeholder:"Set your measure...",autofocus:"",onKeydown:H(b=>v(m),["enter"])},null,8,["value","onUpdate:value","onKeydown"]),t(d,null,{trigger:c(()=>[t(n,{circle:"",variant:"text",onClick:b=>o(_).splice(m,1)},{default:c(()=>[t(l,{component:o(q),depth:"3",size:"18"},null,8,["component"])]),_:2},1032,["onClick"])]),default:c(()=>[C(" Delete value ")]),_:2},1024)]))),128)),t(n,{onClick:k},{default:c(()=>[t(l,{component:o(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Add a measure ")]),_:1})])}}}),ve={"mb-5":"",flex:"","flex-1":"","flex-nowrap":"","justify-center":"","gap-12px":""},fe={flex:"","justify-center":""},he={style:{flex:"0 0 100%"}},we={style:{"max-width":"600px",margin:"0 auto"}},ge={"mx-auto":"","max-w-sm":"",flex:"","justify-center":"","gap-3":""},ke={"mt-5":"",flex:"","justify-center":"","gap-3":""},ze=B({__name:"benchmark-builder",setup(a){const s=N("benchmark-builder:suites",[{title:"Suite 1",data:[5,10]},{title:"Suite 2",data:[8,12]}]),i=N("benchmark-builder:unit",""),p=l=>Math.round(l*1e3)/1e3,_=X(()=>s.value.map(({data:l,title:n})=>{const d=l.filter(T.isNumber);return{title:n,size:d.length,mean:z({data:d}),variance:_e({data:d})}}).sort((l,n)=>l.mean-n.mean).map(({mean:l,variance:n,size:d,title:$},m,b)=>{const x=i.value.trim(),h=b[0].mean,V=l-h,U=h===0?"∞":p(l/h),r=m!==0&&h!==l?` (+${p(V)}${x} ; x${U})`:"";return{position:m+1,title:$,mean:`${p(l)}${x}${r}`,variance:`${p(n)}${x}${x?"²":""}`,size:d}})),{copy:k}=G(),v={title:"Suite",size:"Samples",mean:"Mean",variance:"Variance",position:"Position"};function u(){k(de({data:_.value,headerMap:v}))}function M(){const l=_.value.flatMap(({title:n,...d})=>[` - ${n}`,...Object.entries(d).map(([$,m])=>`    - ${v[$]??$}: ${m}`)]).join(`
`);k(l)}return(l,n)=>{const d=Q,$=ae,m=le,b=ee,x=R,h=D,V=ne,U=oe;return f(),g(S,null,[t(V,{style:{flex:"1"},"x-scrollable":""},{default:c(()=>[e("div",ve,[(f(!0),g(S,null,A(o(s),(r,j)=>(f(),g("div",{key:j},[t(b,{style:{width:"294px"}},{default:c(()=>[t(d,{value:r.title,"onUpdate:value":y=>r.title=y,"label-position":"left",label:"Suite name",placeholder:"Suite name...",clearable:""},null,8,["value","onUpdate:value"]),t($),t(m,{label:"Suite values","show-feedback":!1},{default:c(()=>[t(me,{values:r.data,"onUpdate:values":y=>r.data=y},null,8,["values","onUpdate:values"])]),_:2},1024)]),_:2},1024),e("div",fe,[o(s).length>1?(f(),Y(h,{key:0,variant:"text",onClick:y=>o(s).splice(j,1)},{default:c(()=>[t(x,{component:o(q),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Delete suite ")]),_:2},1032,["onClick"])):Z("",!0),t(h,{variant:"text",onClick:y=>o(s).splice(j+1,0,{data:[0],title:`Suite ${o(s).length+1}`})},{default:c(()=>[t(x,{component:o(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),C(" Add suite ")]),_:2},1032,["onClick"])])]))),128))])]),_:1}),e("div",he,[e("div",we,[e("div",ge,[t(d,{value:o(i),"onUpdate:value":n[0]||(n[0]=r=>J(i)?i.value=r:null),placeholder:"Unit (eg: ms)",label:"Unit","label-position":"left","mb-4":""},null,8,["value"]),t(h,{onClick:n[1]||(n[1]=r=>s.value=[{title:"Suite 1",data:[]},{title:"Suite 2",data:[]}])},{default:c(()=>[C(" Reset suites ")]),_:1})]),t(U,null,{default:c(()=>[e("thead",null,[e("tr",null,[e("th",null,w(v.position),1),e("th",null,w(v.title),1),e("th",null,w(v.size),1),e("th",null,w(v.mean),1),e("th",null,w(v.variance),1)])]),e("tbody",null,[(f(!0),g(S,null,A(o(_),({title:r,size:j,mean:y,variance:K,position:O})=>(f(),g("tr",{key:r},[e("td",null,w(O),1),e("td",null,w(r),1),e("td",null,w(j),1),e("td",null,w(y),1),e("td",null,w(K),1)]))),128))])]),_:1}),e("div",ke,[t(h,{onClick:n[2]||(n[2]=r=>u())},{default:c(()=>[C(" Copy as markdown table ")]),_:1}),t(h,{onClick:n[3]||(n[3]=r=>M())},{default:c(()=>[C(" Copy as bullet list ")]),_:1})])])])],64)}}});export{ze as default};
