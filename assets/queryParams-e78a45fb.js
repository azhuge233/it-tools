import{h as P,a as v,cg as O,b as _,aU as f}from"./index-d4d1dfb2.js";function g(r){return typeof r=="function"?r():P(r)}var Q=Object.defineProperty,d=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,c=(r,e,t)=>e in r?Q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&c(r,t,e[t]);if(y)for(var t of y(e))j.call(e,t)&&c(r,t,e[t]);return r},q=(r,e)=>d(r,b(e));let p={};function h(r,e,t={}){const{mode:n="replace",route:u=v(),router:s=O(),transform:m=o=>o}=t;return _({get(){var o;const l=(o=u.query[r])!=null?o:e;return m(l)},set(o){p[r]=o===e||o===null?void 0:o,f(()=>{s[g(n)](q(a({},u),{query:a(a({},u.query),p)})),f(()=>p={})})}})}const i={number:{fromQuery:r=>Number(r),toQuery:r=>String(r)},string:{fromQuery:r=>r,toQuery:r=>r},boolean:{fromQuery:r=>r.toLowerCase()==="true",toQuery:r=>r?"true":"false"}};function R({name:r,defaultValue:e}){const n=i[typeof e]??i.string,u=h(r,n.toQuery(e));return _({get(){return n.fromQuery(u.value)},set(s){u.value=n.toQuery(s)}})}export{R as u};
