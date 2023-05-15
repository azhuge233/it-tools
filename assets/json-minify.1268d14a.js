import{_ as s}from"./FormatTransformer.3a26c75c.js";import{w as i}from"./defaults.0a26f349.js";import{l as r}from"./index.8debc66d.js";import{d as l,x as p,o as m}from"./index.2e6b7445.js";import"./TextareaCopyable.a1a254d6.js";import"./Copy.f30865ae.js";import"./Scrollbar.b46a9c32.js";import"./validation.89ce9e2c.js";import"./FormItem.4c07172c.js";const O=l({__name:"json-minify",setup(u){const t=`{
	"hello": [
		"world"
	]
}`,n=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const a=s;return m(),p(a,{"input-label":"Your raw json","input-default":t,"input-placeholder":"Paste your raw json here...","output-label":"Minify version of your JSON","output-language":"json","input-validation-rules":e,transformer:n})}}});export{O as default};
