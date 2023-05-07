import{c as x,V as C,d as _,u as R,b as u,bo as B,e as l,ap as a,f as y,h as d}from"./index.ca2546a6.js";var L=x("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[C("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]);const k=Object.assign(Object.assign({},u.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}});var P=_({name:"InputGroupLabel",props:k,setup(e){const{mergedBorderedRef:i,mergedClsPrefixRef:r,inlineThemeDisabled:n}=R(e),b=u("Input","-input-group-label",L,B,e,r),s=l(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{groupLabelColor:g,borderRadius:p,groupLabelTextColor:h,lineHeight:v,groupLabelBorder:f,[a("fontSize",t)]:m,[a("height",t)]:z}}=b.value;return{"--n-bezier":c,"--n-group-label-color":g,"--n-group-label-border":f,"--n-border-radius":p,"--n-group-label-text-color":h,"--n-font-size":m,"--n-line-height":v,"--n-height":z}}),o=n?y("input-group-label",l(()=>e.size[0]),s,e):void 0;return{mergedClsPrefix:r,mergedBordered:i,cssVars:n?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i,r;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(r=(i=this.$slots).default)===null||r===void 0?void 0:r.call(i),this.mergedBordered?d("div",{class:`${n}-input-group-label__border`}):null)}});export{P as _};
