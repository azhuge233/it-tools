import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-69854117.js";import{s}from"./toml-esm-9c5f6a1e.js";import{p as t}from"./public-api-aa5b1ac9.js";import{w as i}from"./defaults-4d6daddf.js";import{d as p,H as l,o as u}from"./index-daf2c61e.js";import"./TextareaCopyable-6c2b769c.js";import"./Copy-25e42e57.js";import"./Scrollbar-3a1922cc.js";const v=p({__name:"yaml-to-toml",setup(c){const r=o=>[s(t(o))].flat().join(`
`).trim(),a=o=>o.trim()===""?"":i(()=>r(o),""),e=[{validator:o=>o===""||t(o),message:"Provided JSON is not valid."}];return(o,f)=>{const m=n;return u(),l(m,{"input-label":"Your YAML","input-placeholder":"Paste your YAML here...","output-label":"TOML from your YAML","output-language":"toml","input-validation-rules":e,transformer:a})}}});export{v as default};