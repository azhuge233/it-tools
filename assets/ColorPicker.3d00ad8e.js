import{cb as F,bs as V,cc as B,cd as j,ce as M,cf as te,cg as Z,d as z,M as w,h as i,az as re,aA as ne,e as $,E as nt,G as He,P as Fe,a7 as at,ch as ie,ci as ye,cj as Se,ck as Ce,S as ot,a as W,c as m,aw as lt,V as U,T as ze,Y as it,ay as st,u as ut,b as Be,cl as ct,a0 as dt,Z as we,$ as De,ae as ht,ap as Pe,f as pt,aB as ft,b_ as Ue,c4 as vt,b$ as gt,c0 as mt,c1 as bt,am as xt,aD as kt,c2 as wt,a4 as de,a3 as yt}from"./index.ca2546a6.js";import{_ as St}from"./InputGroup.fd1b42f8.js";import{N as he}from"./Button.57c4db1c.js";function Te(e,t,n){t/=100,n/=100;const r=t*Math.min(n,1-n)+n;return[e,r?(2-2*n/r)*100:0,r*100]}function ve(e,t,n){t/=100,n/=100;const r=n-n*t/2,a=Math.min(r,1-r);return[e,a?(n-r)/a*100:0,r*100]}function H(e,t,n){t/=100,n/=100;let r=(a,l=(a+e/60)%6)=>n-n*t*Math.max(Math.min(l,4-l,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function $e(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),a=r-Math.min(e,t,n),l=a&&(r==e?(t-n)/a:r==t?2+(n-e)/a:4+(e-t)/a);return[60*(l<0?l+6:l),r&&a/r*100,r*100]}function Ae(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),a=r-Math.min(e,t,n),l=1-Math.abs(r+r-a-1),s=a&&(r==e?(t-n)/a:r==t?2+(n-e)/a:4+(e-t)/a);return[60*(s<0?s+6:s),l?a/l*100:0,(r+r-a)*50]}function Re(e,t,n){t/=100,n/=100;let r=t*Math.min(n,1-n),a=(l,s=(l+e/30)%12)=>n-r*Math.max(Math.min(s-3,9-s,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}function Ct(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function se(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ut(e){return e=Math.round(e),e>=360?359:e<0?0:e}function $t(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const At={rgb:{hex(e){return F(V(e))},hsl(e){const[t,n,r,a]=V(e);return B([...Ae(t,n,r),a])},hsv(e){const[t,n,r,a]=V(e);return j([...$e(t,n,r),a])}},hex:{rgb(e){return M(V(e))},hsl(e){const[t,n,r,a]=V(e);return B([...Ae(t,n,r),a])},hsv(e){const[t,n,r,a]=V(e);return j([...$e(t,n,r),a])}},hsl:{hex(e){const[t,n,r,a]=te(e);return F([...Re(t,n,r),a])},rgb(e){const[t,n,r,a]=te(e);return M([...Re(t,n,r),a])},hsv(e){const[t,n,r,a]=te(e);return j([...Te(t,n,r),a])}},hsv:{hex(e){const[t,n,r,a]=Z(e);return F([...H(t,n,r),a])},rgb(e){const[t,n,r,a]=Z(e);return M([...H(t,n,r),a])},hsl(e){const[t,n,r,a]=Z(e);return B([...ve(t,n,r),a])}}};function qe(e,t,n){return n=n||se(e),n?n===t?e:At[n][t](e):null}const ee="12px",Rt=12,O="6px",_t=6,Vt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var Mt=z({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(l){!t.value||(re("mousemove",document,r),re("mouseup",document,a),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,left:f}=s.getBoundingClientRect(),T=Ut((l.clientX-f-_t)/(u-Rt)*360);e.onUpdateHue(T)}function a(){var l;ne("mousemove",document,r),ne("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ee,borderRadius:O}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Vt,height:ee,borderRadius:O,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:O,right:O,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${O})`,borderRadius:O,width:ee,height:ee}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:O,width:ee,height:ee}})))))}});const le="12px",zt=12,L="6px";var Dt=z({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(l){!t.value||!e.rgba||(re("mousemove",document,r),re("mouseup",document,a),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,left:f}=s.getBoundingClientRect(),T=(l.clientX-f)/(u-zt);e.onUpdateAlpha($t(T))}function a(){var l;ne("mousemove",document,r),ne("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:$(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:le,borderRadius:L},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:L,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${L})`,borderRadius:L,width:le,height:le}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:M(this.rgba),borderRadius:L,width:le,height:le}}))))}});const pe="12px",fe="6px";var Pt=z({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(l){!t.value||(re("mousemove",document,r),re("mouseup",document,a),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,height:f,left:T,bottom:ae}=s.getBoundingClientRect(),q=(ae-l.clientY)/f,K=(l.clientX-T)/u,ue=100*(K>1?1:K<0?0:K),X=100*(q>1?1:q<0?0:q);e.onUpdateSV(ue,X)}function a(){var l;ne("mousemove",document,r),ne("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:$(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:pe,height:pe,borderRadius:fe,left:`calc(${this.displayedSv[0]}% - ${fe})`,bottom:`calc(${this.displayedSv[1]}% - ${fe})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:fe,width:pe,height:pe}})))}});const _e=nt("n-color-picker");function It(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Ht(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Ft(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Bt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Tt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const qt={paddingSmall:"0 4px"};var Ie=z({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:n}=He(_e,null);Fe(()=>{t.value=r()});function r(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function l(s){let u,f;switch(e.label){case"HEX":f=Bt(s),f&&e.onUpdateValue(s),t.value=r();break;case"H":u=Ht(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Ft(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"A":u=Tt(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"R":case"G":case"B":u=It(s),u===!1?t.value=r():e.onUpdateValue(u);break}}return{mergedTheme:n,inputValue:t,handleInputChange:l,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return i(at,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:qt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Et=z({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?F:ie)(n));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=n,e.onUpdateValue((r?j:Ce)(a));break;case"rgb":a[t]=n,e.onUpdateValue((r?M:Se)(a));break;case"hsl":a[t]=n,e.onUpdateValue((r?B:ye)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(St,null,{default:()=>{const{mode:n,valueArr:r,showAlpha:a}=this;if(n==="hex"){let l=null;try{l=r===null?null:(a?F:ie)(r)}catch{}return i(Ie,{label:"HEX",showAlpha:a,value:l,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(n+(a?"a":"")).split("").map((l,s)=>i(Ie,{label:l.toUpperCase(),value:r===null?null:r[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),Nt=z({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=He(_e,null);return()=>{const{hsla:r,value:a,clsPrefix:l,onClick:s,disabled:u}=e,f=t.label||n.value;return i("div",{class:[`${l}-color-picker-trigger`,u&&`${l}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${l}-color-picker-trigger__fill`},i("div",{class:`${l}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?B(r):""}}),a&&r?i("div",{class:`${l}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},f?f(a):a):null))}}});function Ot(e,t){if(t==="hsv"){const[n,r,a,l]=Z(e);return M([...H(n,r,a),l])}return e}function Lt(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var jt=z({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=$(()=>e.swatches.map(l=>{const s=se(l);return{value:l,mode:s,legalValue:Ot(l,s)}}));function n(l){const{mode:s}=e;let{value:u,mode:f}=l;return f||(f="hex",/^[a-zA-Z]+$/.test(u)?u=Lt(u):(ot("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),f===s?u:qe(u,s,f)}function r(l){e.onUpdateColor(n(l))}function a(l,s){l.key==="Enter"&&r(s)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:n=>this.handleSwatchKeyDown(n,t)},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Zt=z({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=se(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var r;const a=n.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,qe(a.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Kt=W([m("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),m("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[lt(),m("input",`
 text-align: center;
 `)]),m("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[W("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[U("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),W("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),m("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[U("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),m("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[U("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ze("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),m("color-picker-preview",`
 display: flex;
 `,[U("sliders",`
 flex: 1 0 auto;
 `),U("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),U("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),U("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),m("color-picker-input",`
 display: flex;
 align-items: center;
 `,[m("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),U("mode",`
 width: 72px;
 text-align: center;
 `)]),m("color-picker-control",`
 padding: 12px;
 `),m("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[m("button","margin-left: 8px;")]),m("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[U("value",`
 white-space: nowrap;
 position: relative;
 `),U("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ze("disabled","cursor: not-allowed"),m("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[W("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),m("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[m("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[U("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),W("&:focus",`
 outline: none;
 `,[U("fill",[W("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Xt=Object.assign(Object.assign({},Be.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ue.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Qt=z({name:"ColorPicker",props:Xt,setup(e,{slots:t}){const n=w(null);let r=null;const a=it(e),{mergedSizeRef:l,mergedDisabledRef:s}=a,{localeRef:u}=st("global"),{mergedClsPrefixRef:f,namespaceRef:T,inlineThemeDisabled:ae}=ut(e),q=Be("ColorPicker","-color-picker",Kt,ct,e,f);dt(_e,{themeRef:q,renderLabelRef:we(e,"renderLabel"),colorPickerSlots:t});const K=w(e.defaultShow),ue=De(we(e,"show"),K);function X(o){const{onUpdateShow:c,"onUpdate:show":h}=e;c&&de(c,o),h&&de(h,o),K.value=o}const{defaultValue:Ve}=e,Me=w(Ve===void 0?Ct(e.modes,e.showAlpha):Ve),x=De(we(e,"value"),Me),G=w([x.value]),R=w(0),ge=$(()=>se(x.value)),{modes:Ee}=e,A=w(se(x.value)||Ee[0]||"rgb");function Ne(){const{modes:o}=e,{value:c}=A,h=o.findIndex(p=>p===c);~h?A.value=o[(h+1)%o.length]:A.value="rgb"}let y,S,Y,J,D,P,I,C;const oe=$(()=>{const{value:o}=x;if(!o)return null;switch(ge.value){case"hsv":return Z(o);case"hsl":return[y,S,Y,C]=te(o),[...Te(y,S,Y),C];case"rgb":case"hex":return[D,P,I,C]=V(o),[...$e(D,P,I),C]}}),E=$(()=>{const{value:o}=x;if(!o)return null;switch(ge.value){case"rgb":case"hex":return V(o);case"hsv":return[y,S,J,C]=Z(o),[...H(y,S,J),C];case"hsl":return[y,S,Y,C]=te(o),[...Re(y,S,Y),C]}}),me=$(()=>{const{value:o}=x;if(!o)return null;switch(ge.value){case"hsl":return te(o);case"hsv":return[y,S,J,C]=Z(o),[...ve(y,S,J),C];case"rgb":case"hex":return[D,P,I,C]=V(o),[...Ae(D,P,I),C]}}),Oe=$(()=>{switch(A.value){case"rgb":case"hex":return E.value;case"hsv":return oe.value;case"hsl":return me.value}}),ce=w(0),be=w(1),xe=w([0,0]);function Le(o,c){const{value:h}=oe,p=ce.value,v=h?h[3]:1;xe.value=[o,c];const{showAlpha:d}=e;switch(A.value){case"hsv":g((d?j:Ce)([p,o,c,v]),"cursor");break;case"hsl":g((d?B:ye)([...ve(p,o,c),v]),"cursor");break;case"rgb":g((d?M:Se)([...H(p,o,c),v]),"cursor");break;case"hex":g((d?F:ie)([...H(p,o,c),v]),"cursor");break}}function je(o){ce.value=o;const{value:c}=oe;if(!c)return;const[,h,p,v]=c,{showAlpha:d}=e;switch(A.value){case"hsv":g((d?j:Ce)([o,h,p,v]),"cursor");break;case"rgb":g((d?M:Se)([...H(o,h,p),v]),"cursor");break;case"hex":g((d?F:ie)([...H(o,h,p),v]),"cursor");break;case"hsl":g((d?B:ye)([...ve(o,h,p),v]),"cursor");break}}function Ze(o){switch(A.value){case"hsv":[y,S,J]=oe.value,g(j([y,S,J,o]),"cursor");break;case"rgb":[D,P,I]=E.value,g(M([D,P,I,o]),"cursor");break;case"hex":[D,P,I]=E.value,g(F([D,P,I,o]),"cursor");break;case"hsl":[y,S,Y]=me.value,g(B([y,S,Y,o]),"cursor");break}be.value=o}function g(o,c){c==="cursor"?r=o:r=null;const{nTriggerFormChange:h,nTriggerFormInput:p}=a,{onUpdateValue:v,"onUpdate:value":d}=e;v&&de(v,o),d&&de(d,o),h(),p(),Me.value=o}function Ke(o){g(o,"input"),yt(Q)}function Q(o=!0){const{value:c}=x;if(c){const{nTriggerFormChange:h,nTriggerFormInput:p}=a,{onComplete:v}=e;v&&v(c);const{value:d}=G,{value:k}=R;o&&(d.splice(k+1,d.length,c),R.value=k+1),h(),p()}}function Xe(){const{value:o}=R;o-1<0||(g(G.value[o-1],"input"),Q(!1),R.value=o-1)}function Ge(){const{value:o}=R;o<0||o+1>=G.value.length||(g(G.value[o+1],"input"),Q(!1),R.value=o+1)}function Ye(){g(null,"input"),X(!1)}function Je(){const{value:o}=x,{onConfirm:c}=e;c&&c(o),X(!1)}const Qe=$(()=>R.value>=1),We=$(()=>{const{value:o}=G;return o.length>1&&R.value<o.length-1});ht(ue,o=>{o||(G.value=[x.value],R.value=0)}),Fe(()=>{if(!(r&&r===x.value)){const{value:o}=oe;o&&(ce.value=o[0],be.value=o[3],xe.value=[o[1],o[2]])}r=null});const ke=$(()=>{const{value:o}=l,{common:{cubicBezierEaseInOut:c},self:{textColor:h,color:p,panelFontSize:v,boxShadow:d,border:k,borderRadius:b,dividerColor:N,[Pe("height",o)]:tt,[Pe("fontSize",o)]:rt}}=q.value;return{"--n-bezier":c,"--n-text-color":h,"--n-color":p,"--n-panel-font-size":v,"--n-font-size":rt,"--n-box-shadow":d,"--n-border":k,"--n-border-radius":b,"--n-height":tt,"--n-divider-color":N}}),_=ae?pt("color-picker",$(()=>l.value[0]),ke,e):void 0;function et(){var o;const{value:c}=E,{value:h}=ce,{internalActions:p,modes:v,actions:d}=e,{value:k}=q,{value:b}=f;return i("div",{class:[`${b}-color-picker-panel`,_==null?void 0:_.themeClass.value],onDragstart:N=>{N.preventDefault()},style:ae?void 0:ke.value},i("div",{class:`${b}-color-picker-control`},i(Pt,{clsPrefix:b,rgba:c,displayedHue:h,displayedSv:xe.value,onUpdateSV:Le,onComplete:Q}),i("div",{class:`${b}-color-picker-preview`},i("div",{class:`${b}-color-picker-preview__sliders`},i(Mt,{clsPrefix:b,hue:h,onUpdateHue:je,onComplete:Q}),e.showAlpha?i(Dt,{clsPrefix:b,rgba:c,alpha:be.value,onUpdateAlpha:Ze,onComplete:Q}):null),e.showPreview?i(Zt,{clsPrefix:b,mode:A.value,color:E.value&&ie(E.value),onUpdateColor:N=>g(N,"input")}):null),i(Et,{clsPrefix:b,showAlpha:e.showAlpha,mode:A.value,modes:v,onUpdateMode:Ne,value:x.value,valueArr:Oe.value,onUpdateValue:Ke}),((o=e.swatches)===null||o===void 0?void 0:o.length)&&i(jt,{clsPrefix:b,mode:A.value,swatches:e.swatches,onUpdateColor:N=>g(N,"input")})),d!=null&&d.length?i("div",{class:`${b}-color-picker-action`},d.includes("confirm")&&i(he,{size:"small",onClick:Je,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.confirm}),d.includes("clear")&&i(he,{size:"small",onClick:Ye,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${b}-color-picker-action`},{default:t.action}):p?i("div",{class:`${b}-color-picker-action`},p.includes("undo")&&i(he,{size:"small",onClick:Xe,disabled:!Qe.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.undo}),p.includes("redo")&&i(he,{size:"small",onClick:Ge,disabled:!We.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:f,namespace:T,selfRef:n,hsla:me,rgba:E,mergedShow:ue,mergedDisabled:s,isMounted:ft(),adjustedTo:Ue(e),mergedValue:x,handleTriggerClick(){X(!0)},handleClickOutside(o){var c;!((c=n.value)===null||c===void 0)&&c.contains(vt(o))||X(!1)},renderPanel:et,cssVars:ae?void 0:ke,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(gt,null,{default:()=>[i(mt,null,{default:()=>i(Nt,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(bt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ue.tdkey,to:this.adjustedTo},{default:()=>i(xt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?kt(this.renderPanel(),[[wt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{Qt as _};
