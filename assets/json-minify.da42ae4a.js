import{_ as s}from"./FormatTransformer.3c71ebd0.js";import{w as i}from"./defaults.0a26f349.js";import{l as r}from"./index.8debc66d.js";import{d as l,z as p,o as m}from"./index.ca2546a6.js";import"./TextareaCopyable.28637c24.js";import"./Copy.c1ef7b14.js";import"./Scrollbar.0befd17f.js";import"./validation.b283a4a1.js";import"./FormItem.7d600ca2.js";const O=l({__name:"json-minify",setup(u){const t=`{
	"hello": [
		"world"
	]
}`,n=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const a=s;return m(),p(a,{"input-label":"Your raw json","input-default":t,"input-placeholder":"Paste your raw json here...","output-label":"Minify version of your JSON","output-language":"json","input-validation-rules":e,transformer:n})}}});export{O as default};
