import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d637a71a.js";import{d as i,c as m,o as p,V as r}from"./index-d4d1dfb2.js";import{J as t}from"./index-d4e515d0.js";import{i as l}from"./boolean-c7e7c785.js";import{w as u}from"./defaults-4d6daddf.js";import"./TextareaCopyable-762809f4.js";import"./Copy-750171ce.js";import"./Scrollbar-8fa0a765.js";const S=i({__name:"json-to-yaml",setup(c){const a=o=>u(()=>r(t.parse(o)),""),e=[{validator:o=>o===""||l(()=>r(t.parse(o))),message:"Provided JSON is not valid."}];return(o,f)=>{const s=n;return p(),m(s,{"input-label":"Your JSON","input-placeholder":"Paste your JSON here...","output-label":"YAML from your JSON","output-language":"yaml","input-validation-rules":e,transformer:a})}}});export{S as default};
