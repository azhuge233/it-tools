import{_ as m}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-aab72981.js";import{s}from"./toml-esm-9c5f6a1e.js";import{d as i,k as l,o as p,al as t}from"./index-648e106a.js";import{w as u}from"./defaults-4d6daddf.js";import"./TextareaCopyable-58347e9e.js";import"./Copy-11243cf2.js";import"./Scrollbar-a3740edc.js";const M=i({__name:"yaml-to-toml",setup(c){const r=o=>[s(t(o))].flat().join(`
`).trim(),a=o=>o.trim()===""?"":u(()=>r(o),""),e=[{validator:o=>o===""||t(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=m;return p(),l(n,{"input-label":"Your YAML","input-placeholder":"Paste your YAML here...","output-label":"TOML from your YAML","output-language":"toml","input-validation-rules":e,transformer:a})}}});export{M as default};
