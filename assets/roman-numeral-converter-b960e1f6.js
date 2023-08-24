import{d as L,z as C,e as y,A as R,j as $,k as i,w as _,y as k,o as D,q as m,aB as T,aC as h,n,B as x,s as N,m as g,x as O,C as S,p as E}from"./index-3141604a.js";import{u as A}from"./copy-2e0173a3.js";import{_ as j}from"./InputNumber-79182b44.js";import{_ as U}from"./FormItem-5c7797ea.js";import"./use-locale-c06c4986.js";import"./use-form-item-7ba2c55f.js";import"./Input-a67f8393.js";import"./Button-090519e0.js";import"./Remove-a5f09906.js";import"./Add-89bc6dbc.js";const p=1,d=3999;function z(e){if(e<p||e>d)return"";const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let a="";for(const o in t)for(;e>=t[o];)a+=o,e-=t[o];return a}const P=/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;function I(e){return P.test(e)}function q(e){if(!I(e))return null;const t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return[...e].reduce((a,o,r,c)=>t[c[r+1]]>t[o]?a-t[o]:a+t[o],0)}const G={flex:"","items-center":"","justify-between":""},W={class:"result"},F={flex:"","items-center":"","justify-between":""},H={class:"result"},J=L({__name:"roman-numeral-converter",setup(e){const t=C(42),a=y(()=>z(t.value)),{attrs:o}=R({source:t,rules:[{validator:u=>u>=p&&u<=d,message:`We can only convert numbers between ${p.toLocaleString()} and ${d.toLocaleString()}`}]}),r=C("XLII"),c=y(()=>q(r.value)),v=R({source:r,rules:[{validator:u=>I(u),message:"The input you entered is not a valid roman number"}]}),{copy:X}=A({source:a,text:"Roman number copied to the clipboard"}),{copy:M}=A({source:()=>String(c),text:"Arabic number copied to the clipboard"});return(u,s)=>{const V=j,w=U,f=O,b=k,B=S;return D(),$("div",null,[i(b,{title:"Arabic to roman"},{default:_(()=>[m("div",G,[i(w,T(h(n(o))),{default:_(()=>[i(V,{value:n(t),"onUpdate:value":s[0]||(s[0]=l=>x(t)?t.value=l:null),min:1,style:{width:"200px"},"show-button":!1},null,8,["value"])]),_:1},16),m("div",W,N(n(a)),1),i(f,{autofocus:"",disabled:n(o).validationStatus==="error",onClick:s[1]||(s[1]=l=>n(X)())},{default:_(()=>[g(" Copy ")]),_:1},8,["disabled"])])]),_:1}),i(b,{title:"Roman to arabic","mt-5":""},{default:_(()=>[m("div",F,[i(B,{value:n(r),"onUpdate:value":s[2]||(s[2]=l=>x(r)?r.value=l:null),style:{width:"200px"},validation:n(v)},null,8,["value","validation"]),m("div",H,N(n(c)),1),i(f,{disabled:!n(v).isValid,onClick:s[3]||(s[3]=l=>n(M)())},{default:_(()=>[g(" Copy ")]),_:1},8,["disabled"])])]),_:1})])}}});const rt=E(J,[["__scopeId","data-v-b1e0d482"]]);export{rt as default};