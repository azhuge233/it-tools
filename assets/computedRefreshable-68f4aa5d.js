import{z as s,bU as n,az as l,e as r,bV as d}from"./index-daf2c61e.js";function f(a,{throttle:c}={}){const e=s(!0);let t;const u=()=>e.value=!0;return c?n(a,u,{throttle:c}):l(a,u),[r(()=>(e.value&&(t=a(),e.value=!1),t)),u]}function m(a,c){const e=s(!0);let t;const u=()=>e.value=!0;return l(a,u),[d(async()=>(e.value&&(t=await a(),e.value=!1),t),c),u]}export{f as a,m as c};
