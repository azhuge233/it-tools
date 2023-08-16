import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-69854117.js";import{J as r}from"./index-d4e515d0.js";import{w as s}from"./defaults-4d6daddf.js";import{d as i,H as l,o as p}from"./index-daf2c61e.js";import"./TextareaCopyable-6c2b769c.js";import"./Copy-25e42e57.js";import"./Scrollbar-3a1922cc.js";const u=`{
	"hello": [
		"world"
	]
}`,h=i({__name:"json-minify",setup(m){const t=o=>s(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return p(),l(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{h as default};
