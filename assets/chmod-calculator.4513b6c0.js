import{h as b,E as pe,d as G,u as q,Y as Z,M as U,e as M,$ as J,a0 as ge,Z as j,a4 as d,a as p,c as a,V as S,T as B,W as ye,b8 as Ce,b9 as _e,G as we,O as Re,b as Q,c7 as ze,aN as Se,ap as O,f as Te,a2 as Ie,R as De,az as $e,v as H,_ as Be,bE as Me,k as V,l as E,w as Ae,q as g,s as L,n as N,o as K,F as W,r as Y,b2 as Fe,c8 as Ue,c9 as Pe}from"./index.ca2546a6.js";import{I as Ve}from"./InputCopyable.7bc43bc6.js";import{_ as Ee}from"./Table.eaf7a310.js";var Ne=b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Ke=b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const X=pe("n-checkbox-group"),je={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};G({name:"CheckboxGroup",props:je,setup(e){const{mergedClsPrefixRef:i}=q(e),t=Z(e),{mergedSizeRef:k,mergedDisabledRef:h}=t,l=U(e.defaultValue),m=M(()=>e.value),f=J(m,l),c=M(()=>{var v;return((v=f.value)===null||v===void 0?void 0:v.length)||0}),n=M(()=>Array.isArray(f.value)?new Set(f.value):new Set);function R(v,r){const{nTriggerFormInput:x,nTriggerFormChange:z}=t,{onChange:y,"onUpdate:value":C,onUpdateValue:_}=e;if(Array.isArray(f.value)){const s=Array.from(f.value),A=s.findIndex(F=>F===r);v?~A||(s.push(r),_&&d(_,s,{actionType:"check",value:r}),C&&d(C,s,{actionType:"check",value:r}),x(),z(),l.value=s,y&&d(y,s)):~A&&(s.splice(A,1),_&&d(_,s,{actionType:"uncheck",value:r}),C&&d(C,s,{actionType:"uncheck",value:r}),y&&d(y,s),l.value=s,x(),z())}else v?(_&&d(_,[r],{actionType:"check",value:r}),C&&d(C,[r],{actionType:"check",value:r}),y&&d(y,[r]),l.value=[r],x(),z()):(_&&d(_,[],{actionType:"uncheck",value:r}),C&&d(C,[],{actionType:"uncheck",value:r}),y&&d(y,[]),l.value=[],x(),z())}return ge(X,{checkedCountRef:c,maxRef:j(e,"max"),minRef:j(e,"min"),valueSetRef:n,disabledRef:h,mergedSizeRef:k,toggleCheckbox:R}),{mergedClsPrefix:i}},render(){return b("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}});var Ge=p([a("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[p("&:hover",[a("checkbox-box",[S("border",{border:"var(--n-border-checked)"})])]),p("&:focus:not(:active)",[a("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),B("inside-table",[a("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),B("checked",[a("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[a("checkbox-icon",[p(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("indeterminate",[a("checkbox-box",[a("checkbox-icon",[p(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),p(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("checked, indeterminate",[p("&:focus:not(:active)",[a("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),B("disabled",{cursor:"not-allowed"},[B("checked",[a("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),a("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),a("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",{border:"var(--n-border-disabled)"}),a("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),S("label",{color:"var(--n-text-color-disabled)"})]),a("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),a("checkbox-box",`
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
 `),a("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[p(".check-icon, .line-icon",`
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
 `,[p("&:empty",{display:"none"})])]),Ce(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),_e(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Oe=Object.assign(Object.assign({},Q.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var He=G({name:"Checkbox",props:Oe,setup(e){const i=U(null),{mergedClsPrefixRef:t,inlineThemeDisabled:k,mergedRtlRef:h}=q(e),l=Z(e,{mergedSize(o){const{size:w}=e;if(w!==void 0)return w;if(c){const{value:u}=c.mergedSizeRef;if(u!==void 0)return u}if(o){const{mergedSize:u}=o;if(u!==void 0)return u.value}return"medium"},mergedDisabled(o){const{disabled:w}=e;if(w!==void 0)return w;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:u},checkedCountRef:T}=c;if(u!==void 0&&T.value>=u&&!r.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&T.value<=D&&r.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:m,mergedSizeRef:f}=l,c=we(X,null),n=U(e.defaultChecked),R=j(e,"checked"),v=J(R,n),r=Re(()=>{if(c){const o=c.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return v.value===e.checkedValue}),x=Q("Checkbox","-checkbox",Ge,ze,e,t);function z(o){if(c&&e.value!==void 0)c.toggleCheckbox(!r.value,e.value);else{const{onChange:w,"onUpdate:checked":u,onUpdateChecked:T}=e,{nTriggerFormInput:D,nTriggerFormChange:P}=l,$=r.value?e.uncheckedValue:e.checkedValue;u&&d(u,$,o),T&&d(T,$,o),w&&d(w,$,o),D(),P(),n.value=$}}function y(o){m.value||z(o)}function C(o){if(!m.value)switch(o.key){case" ":case"Enter":z(o)}}function _(o){switch(o.key){case" ":o.preventDefault()}}const s={focus:()=>{var o;(o=i.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=i.value)===null||o===void 0||o.blur()}},A=Se("Checkbox",h,t),F=M(()=>{const{value:o}=f,{common:{cubicBezierEaseInOut:w},self:{borderRadius:u,color:T,colorChecked:D,colorDisabled:P,colorTableHeader:$,colorTableHeaderModal:ee,colorTableHeaderPopover:oe,checkMarkColor:re,checkMarkColorDisabled:ne,border:ae,borderFocus:ce,borderDisabled:le,borderChecked:te,boxShadowFocus:de,textColor:ie,textColorDisabled:se,checkMarkColorDisabledChecked:ue,colorDisabledChecked:be,borderDisabledChecked:he,labelPadding:fe,labelLineHeight:ve,labelFontWeight:ke,[O("fontSize",o)]:me,[O("size",o)]:xe}}=x.value;return{"--n-label-line-height":ve,"--n-label-font-weight":ke,"--n-size":xe,"--n-bezier":w,"--n-border-radius":u,"--n-border":ae,"--n-border-checked":te,"--n-border-focus":ce,"--n-border-disabled":le,"--n-border-disabled-checked":he,"--n-box-shadow-focus":de,"--n-color":T,"--n-color-checked":D,"--n-color-table":$,"--n-color-table-modal":ee,"--n-color-table-popover":oe,"--n-color-disabled":P,"--n-color-disabled-checked":be,"--n-text-color":ie,"--n-text-color-disabled":se,"--n-check-mark-color":re,"--n-check-mark-color-disabled":ne,"--n-check-mark-color-disabled-checked":ue,"--n-font-size":me,"--n-label-padding":fe}}),I=k?Te("checkbox",M(()=>f.value[0]),F,e):void 0;return Object.assign(l,s,{rtlEnabled:A,selfRef:i,mergedClsPrefix:t,mergedDisabled:m,renderedChecked:r,mergedTheme:x,labelId:Ie(),handleClick:y,handleKeyUp:C,handleKeyDown:_,cssVars:k?void 0:F,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var e;const{$slots:i,renderedChecked:t,mergedDisabled:k,indeterminate:h,privateInsideTable:l,cssVars:m,labelId:f,label:c,mergedClsPrefix:n,focusable:R,handleKeyUp:v,handleKeyDown:r,handleClick:x}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,t&&`${n}-checkbox--checked`,k&&`${n}-checkbox--disabled`,h&&`${n}-checkbox--indeterminate`,l&&`${n}-checkbox--inside-table`],tabindex:k||!R?void 0:0,role:"checkbox","aria-checked":h?"mixed":t,"aria-labelledby":f,style:m,onKeyup:v,onKeydown:r,onClick:x,onMousedown:()=>{$e("selectstart",window,z=>{z.preventDefault()},{once:!0})}},b("div",{class:`${n}-checkbox-box-wrapper`},"\xA0",b("div",{class:`${n}-checkbox-box`},b(De,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Ke):b("div",{key:"check",class:`${n}-checkbox-icon`},Ne)}),b("div",{class:`${n}-checkbox-box__border`}))),c!==null||i.default?b("span",{class:`${n}-checkbox__label`,id:f},i.default?i.default():c):null)}});function Le({permissions:e}){const i={read:4,write:2,execute:1},t=k=>H.reduce(k,(h,l,m)=>h+(l?H.get(i,m,0):0),0);return[t(e.owner),t(e.group),t(e.public)].join("")}const We=e=>(Ue("data-v-01e76dd8"),e=e(),Pe(),e),Ye=We(()=>g("thead",null,[g("tr",null,[g("th",{class:"text-center",scope:"col"}),g("th",{class:"text-center",scope:"col"},"Owner (u)"),g("th",{class:"text-center",scope:"col"},"Group (g)"),g("th",{class:"text-center",scope:"col"},"Public (o)")])],-1)),qe={class:"line-header"},Ze={class:"octal-result"},Je=G({__name:"chmod-calculator",setup(e){Fe(m=>({"173b2465":N(i).primaryColor}));const i=Me(),t=[{scope:"read",title:"Read (4)"},{scope:"write",title:"Write (2)"},{scope:"execute",title:"Execute (1)"}],k=["owner","group","public"],h=U({owner:{read:!1,write:!1,execute:!1},group:{read:!1,write:!1,execute:!1},public:{read:!1,write:!1,execute:!1}}),l=M(()=>Le({permissions:h.value}));return(m,f)=>{const c=He,n=Ee;return K(),V("div",null,[E(n,{bordered:!1,"bottom-bordered":!1,"single-column":"",class:"permission-table"},{default:Ae(()=>[Ye,g("tbody",null,[(K(),V(W,null,Y(t,({scope:R,title:v})=>g("tr",{key:R},[g("td",qe,L(v),1),(K(),V(W,null,Y(k,r=>g("td",{key:r,class:"text-center"},[E(c,{checked:h.value[r][R],"onUpdate:checked":x=>h.value[r][R]=x,size:"large"},null,8,["checked","onUpdate:checked"])])),64))])),64))])]),_:1}),g("div",Ze,L(N(l)),1),E(Ve,{value:`chmod ${N(l)} path`,readonly:""},null,8,["value"])])}}});var oo=Be(Je,[["__scopeId","data-v-01e76dd8"]]);export{oo as default};
