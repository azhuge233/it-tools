import{_ as s}from"./FormatTransformer.3c71ebd0.js";import{i}from"./boolean.bf21024b.js";import{w as m}from"./defaults.0a26f349.js";import{p as t}from"./public-api.c9630fba.js";import{d as p,z as l,o as u}from"./index.ca2546a6.js";import"./TextareaCopyable.28637c24.js";import"./Copy.c1ef7b14.js";import"./Scrollbar.0befd17f.js";import"./validation.b283a4a1.js";import"./FormItem.7d600ca2.js";const w=p({__name:"yaml-to-json",setup(c){const a=o=>m(()=>{const r=t(o);return r?JSON.stringify(r,null,3):""},""),e=[{validator:o=>i(()=>t(o)),message:"Provided YAML is not valid."}];return(o,r)=>{const n=s;return u(),l(n,{"input-label":"Your YAML","input-placeholder":"Paste your yaml here...","output-label":"JSON from your YAML","output-language":"json","input-validation-rules":e,transformer:a})}}});export{w as default};