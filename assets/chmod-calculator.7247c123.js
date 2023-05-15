import{h as b,W as xe,d as G,u as q,ac as X,A as U,e as A,ae as J,af as ge,ad as E,aj as i,a as x,c as n,a9 as S,a7 as $,aa as ye,bF as Ce,bG as _e,X as we,a2 as Re,b as Q,cb as ze,aY as Se,aB as H,f as Te,ah as De,a5 as Be,aL as Ie,v as L,_ as $e,c5 as Ae,k as V,l as j,w as Fe,q as g,s as O,n as K,o as N,F as W,r as Y,D as Me,cc as Ue,cd as Pe}from"./index.2e6b7445.js";import{_ as Ve}from"./InputCopyable.eac6f423.js";import{_ as je}from"./Table.63b48cf3.js";import"./c-input-text.1faff010.js";import"./random.613c1dc4.js";import"./validation.89ce9e2c.js";import"./content-copy.43681fe1.js";var Ke=b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Ne=b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const Z=xe("n-checkbox-group"),Ee={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};G({name:"CheckboxGroup",props:Ee,setup(e){const{mergedClsPrefixRef:d}=q(e),t=X(e),{mergedSizeRef:k,mergedDisabledRef:h}=t,l=U(e.defaultValue),m=A(()=>e.value),f=J(m,l),c=A(()=>{var v;return((v=f.value)===null||v===void 0?void 0:v.length)||0}),a=A(()=>Array.isArray(f.value)?new Set(f.value):new Set);function R(v,r){const{nTriggerFormInput:p,nTriggerFormChange:z}=t,{onChange:y,"onUpdate:value":C,onUpdateValue:_}=e;if(Array.isArray(f.value)){const s=Array.from(f.value),F=s.findIndex(M=>M===r);v?~F||(s.push(r),_&&i(_,s,{actionType:"check",value:r}),C&&i(C,s,{actionType:"check",value:r}),p(),z(),l.value=s,y&&i(y,s)):~F&&(s.splice(F,1),_&&i(_,s,{actionType:"uncheck",value:r}),C&&i(C,s,{actionType:"uncheck",value:r}),y&&i(y,s),l.value=s,p(),z())}else v?(_&&i(_,[r],{actionType:"check",value:r}),C&&i(C,[r],{actionType:"check",value:r}),y&&i(y,[r]),l.value=[r],p(),z()):(_&&i(_,[],{actionType:"uncheck",value:r}),C&&i(C,[],{actionType:"uncheck",value:r}),y&&i(y,[]),l.value=[],p(),z())}return ge(Z,{checkedCountRef:c,maxRef:E(e,"max"),minRef:E(e,"min"),valueSetRef:a,disabledRef:h,mergedSizeRef:k,toggleCheckbox:R}),{mergedClsPrefix:d}},render(){return b("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}});var Ge=x([n("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[x("&:hover",[n("checkbox-box",[S("border",{border:"var(--n-border-checked)"})])]),x("&:focus:not(:active)",[n("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),$("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),$("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("indeterminate",[n("checkbox-box",[n("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("checked, indeterminate",[x("&:focus:not(:active)",[n("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),$("disabled",{cursor:"not-allowed"},[$("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",{border:"var(--n-border-disabled)"}),n("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),S("label",{color:"var(--n-text-color-disabled)"})]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[S("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[x(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ye({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),Ce(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),_e(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const He=Object.assign(Object.assign({},Q.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Le=G({name:"Checkbox",props:He,setup(e){const d=U(null),{mergedClsPrefixRef:t,inlineThemeDisabled:k,mergedRtlRef:h}=q(e),l=X(e,{mergedSize(o){const{size:w}=e;if(w!==void 0)return w;if(c){const{value:u}=c.mergedSizeRef;if(u!==void 0)return u}if(o){const{mergedSize:u}=o;if(u!==void 0)return u.value}return"medium"},mergedDisabled(o){const{disabled:w}=e;if(w!==void 0)return w;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:u},checkedCountRef:T}=c;if(u!==void 0&&T.value>=u&&!r.value)return!0;const{minRef:{value:B}}=c;if(B!==void 0&&T.value<=B&&r.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:m,mergedSizeRef:f}=l,c=we(Z,null),a=U(e.defaultChecked),R=E(e,"checked"),v=J(R,a),r=Re(()=>{if(c){const o=c.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return v.value===e.checkedValue}),p=Q("Checkbox","-checkbox",Ge,ze,e,t);function z(o){if(c&&e.value!==void 0)c.toggleCheckbox(!r.value,e.value);else{const{onChange:w,"onUpdate:checked":u,onUpdateChecked:T}=e,{nTriggerFormInput:B,nTriggerFormChange:P}=l,I=r.value?e.uncheckedValue:e.checkedValue;u&&i(u,I,o),T&&i(T,I,o),w&&i(w,I,o),B(),P(),a.value=I}}function y(o){m.value||z(o)}function C(o){if(!m.value)switch(o.key){case" ":case"Enter":z(o)}}function _(o){switch(o.key){case" ":o.preventDefault()}}const s={focus:()=>{var o;(o=d.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=d.value)===null||o===void 0||o.blur()}},F=Se("Checkbox",h,t),M=A(()=>{const{value:o}=f,{common:{cubicBezierEaseInOut:w},self:{borderRadius:u,color:T,colorChecked:B,colorDisabled:P,colorTableHeader:I,colorTableHeaderModal:ee,colorTableHeaderPopover:oe,checkMarkColor:re,checkMarkColorDisabled:ae,border:ne,borderFocus:ce,borderDisabled:le,borderChecked:te,boxShadowFocus:ie,textColor:de,textColorDisabled:se,checkMarkColorDisabledChecked:ue,colorDisabledChecked:be,borderDisabledChecked:he,labelPadding:fe,labelLineHeight:ve,labelFontWeight:ke,[H("fontSize",o)]:me,[H("size",o)]:pe}}=p.value;return{"--n-label-line-height":ve,"--n-label-font-weight":ke,"--n-size":pe,"--n-bezier":w,"--n-border-radius":u,"--n-border":ne,"--n-border-checked":te,"--n-border-focus":ce,"--n-border-disabled":le,"--n-border-disabled-checked":he,"--n-box-shadow-focus":ie,"--n-color":T,"--n-color-checked":B,"--n-color-table":I,"--n-color-table-modal":ee,"--n-color-table-popover":oe,"--n-color-disabled":P,"--n-color-disabled-checked":be,"--n-text-color":de,"--n-text-color-disabled":se,"--n-check-mark-color":re,"--n-check-mark-color-disabled":ae,"--n-check-mark-color-disabled-checked":ue,"--n-font-size":me,"--n-label-padding":fe}}),D=k?Te("checkbox",A(()=>f.value[0]),M,e):void 0;return Object.assign(l,s,{rtlEnabled:F,selfRef:d,mergedClsPrefix:t,mergedDisabled:m,renderedChecked:r,mergedTheme:p,labelId:De(),handleClick:y,handleKeyUp:C,handleKeyDown:_,cssVars:k?void 0:M,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var e;const{$slots:d,renderedChecked:t,mergedDisabled:k,indeterminate:h,privateInsideTable:l,cssVars:m,labelId:f,label:c,mergedClsPrefix:a,focusable:R,handleKeyUp:v,handleKeyDown:r,handleClick:p}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,t&&`${a}-checkbox--checked`,k&&`${a}-checkbox--disabled`,h&&`${a}-checkbox--indeterminate`,l&&`${a}-checkbox--inside-table`],tabindex:k||!R?void 0:0,role:"checkbox","aria-checked":h?"mixed":t,"aria-labelledby":f,style:m,onKeyup:v,onKeydown:r,onClick:p,onMousedown:()=>{Ie("selectstart",window,z=>{z.preventDefault()},{once:!0})}},b("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",b("div",{class:`${a}-checkbox-box`},b(Be,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Ne):b("div",{key:"check",class:`${a}-checkbox-icon`},Ke)}),b("div",{class:`${a}-checkbox-box__border`}))),c!==null||d.default?b("span",{class:`${a}-checkbox__label`,id:f},d.default?d.default():c):null)}});function Oe({permissions:e}){const d={read:4,write:2,execute:1},t=k=>L.reduce(k,(h,l,m)=>h+(l?L.get(d,m,0):0),0);return[t(e.owner),t(e.group),t(e.public)].join("")}const We=e=>(Ue("data-v-01e76dd8"),e=e(),Pe(),e),Ye=We(()=>g("thead",null,[g("tr",null,[g("th",{class:"text-center",scope:"col"}),g("th",{class:"text-center",scope:"col"},"Owner (u)"),g("th",{class:"text-center",scope:"col"},"Group (g)"),g("th",{class:"text-center",scope:"col"},"Public (o)")])],-1)),qe={class:"line-header"},Xe={class:"octal-result"},Je=G({__name:"chmod-calculator",setup(e){Me(m=>({"173b2465":K(d).primaryColor}));const d=Ae(),t=[{scope:"read",title:"Read (4)"},{scope:"write",title:"Write (2)"},{scope:"execute",title:"Execute (1)"}],k=["owner","group","public"],h=U({owner:{read:!1,write:!1,execute:!1},group:{read:!1,write:!1,execute:!1},public:{read:!1,write:!1,execute:!1}}),l=A(()=>Oe({permissions:h.value}));return(m,f)=>{const c=Le,a=je;return N(),V("div",null,[j(a,{bordered:!1,"bottom-bordered":!1,"single-column":"",class:"permission-table"},{default:Fe(()=>[Ye,g("tbody",null,[(N(),V(W,null,Y(t,({scope:R,title:v})=>g("tr",{key:R},[g("td",qe,O(v),1),(N(),V(W,null,Y(k,r=>g("td",{key:r,class:"text-center"},[j(c,{checked:h.value[r][R],"onUpdate:checked":p=>h.value[r][R]=p,size:"large"},null,8,["checked","onUpdate:checked"])])),64))])),64))])]),_:1}),g("div",Xe,O(K(l)),1),j(Ve,{value:`chmod ${K(l)} path`,readonly:""},null,8,["value"])])}}});var co=$e(Je,[["__scopeId","data-v-01e76dd8"]]);export{co as default};
