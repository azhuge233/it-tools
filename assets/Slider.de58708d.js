import{aF as We,cL as Ge,A as x,cM as qe,a as V,c as n,a7 as b,a9 as _,aI as ue,bF as Je,bG as Qe,d as Ze,u as eo,b as ge,ac as oo,e as w,ad as ao,ae as to,I as he,ai as Q,as as no,f as ve,aN as ro,bt as Z,h as v,bu as lo,bv as io,$ as so,bw as co,ay as uo,aL as U,aM as N,aj as fe}from"./index.2e6b7445.js";const ho=t=>{const l="rgba(0, 0, 0, .85)",y="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:f,primaryColor:s,baseColor:d,cardColor:z,modalColor:R,popoverColor:O,borderRadius:L,fontSize:B,opacityDisabled:$}=t;return Object.assign(Object.assign({},Ge),{fontSize:B,markFontSize:B,railColor:f,railColorHover:f,fillColor:s,fillColorHover:s,opacityDisabled:$,handleColor:"#FFF",dotColor:z,dotColorModal:R,dotColorPopover:O,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:l,indicatorBoxShadow:y,indicatorTextColor:d,indicatorBorderRadius:L,dotBorder:`2px solid ${f}`,dotBorderActive:`2px solid ${s}`,dotBoxShadow:""})},vo={name:"Slider",common:We,self:ho};var fo=vo;function be(t){return window.TouchEvent&&t instanceof window.TouchEvent}function me(){const t=x(new Map),l=y=>f=>{t.value.set(y,f)};return qe(()=>t.value.clear()),[t,l]}var bo=V([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[b("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),b("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),b("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[_("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),b("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),b("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),b("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),V("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[_("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),b("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[_("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[_("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),V("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[b("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[b("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[ue()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[b("top",`
 margin-bottom: 12px;
 `),b("right",`
 margin-left: 12px;
 `),b("bottom",`
 margin-top: 12px;
 `),b("left",`
 margin-right: 12px;
 `),ue()]),Je(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),Qe(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]);const mo=0,go=Object.assign(Object.assign({},ge.props),{to:Z.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var wo=Ze({name:"Slider",props:go,setup(t){const{mergedClsPrefixRef:l,namespaceRef:y,inlineThemeDisabled:f}=eo(t),s=ge("Slider","-slider",bo,fo,t,l),d=x(null),[z,R]=me(),[O,L]=me(),B=x(new Set),$=oo(t),{mergedDisabledRef:D}=$,ee=w(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const o=e.toString();let a=0;return o.includes(".")&&(a=o.length-o.indexOf(".")-1),a}),K=x(t.defaultValue),pe=ao(t,"value"),X=to(pe,K),m=w(()=>{const{value:e}=X;return(t.range?e:[e]).map(ie)}),oe=w(()=>m.value.length>2),we=w(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ae=w(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),g=x(-1),te=x(-1),C=x(-1),S=x(!1),F=x(!1),Y=w(()=>{const{vertical:e,reverse:o}=t;return e?o?"top":"bottom":o?"right":"left"}),xe=w(()=>{if(oe.value)return;const e=m.value,o=I(t.range?Math.min(...e):t.min),a=I(t.range?Math.max(...e):e[0]),{value:r}=Y;return t.vertical?{[r]:`${o}%`,height:`${a-o}%`}:{[r]:`${o}%`,width:`${a-o}%`}}),ke=w(()=>{const e=[],{marks:o}=t;if(o){const a=m.value.slice();a.sort((u,h)=>u-h);const{value:r}=Y,{value:i}=oe,{range:c}=t,p=i?()=>!1:u=>c?u>=a[0]&&u<=a[a.length-1]:u<=a[0];for(const u of Object.keys(o)){const h=Number(u);e.push({active:p(h),label:o[u],style:{[r]:`${I(h)}%`}})}}return e});function ye(e,o){const a=I(e),{value:r}=Y;return{[r]:`${a}%`,zIndex:o===g.value?1:0}}function ne(e){return t.showTooltip||C.value===e||g.value===e&&S.value}function Re(e){return S.value?!(g.value===e&&te.value===e):!0}function Ce(e){var o;~e&&(g.value=e,(o=z.value.get(e))===null||o===void 0||o.focus())}function Se(){O.value.forEach((e,o)=>{ne(o)&&e.syncPosition()})}function re(e){const{"onUpdate:value":o,onUpdateValue:a}=t,{nTriggerFormInput:r,nTriggerFormChange:i}=$;a&&fe(a,e),o&&fe(o,e),K.value=e,r(),i()}function le(e){const{range:o}=t;if(o){if(Array.isArray(e)){const{value:a}=m;e.join()!==a.join()&&re(e)}}else Array.isArray(e)||m.value[0]!==e&&re(e)}function W(e,o){if(t.range){const a=m.value.slice();a.splice(o,1,e),le(a)}else le(e)}function G(e,o,a){const r=a!==void 0;a||(a=e-o>0?1:-1);const i=ae.value||[],{step:c}=t;if(c==="mark"){const h=H(e,i.concat(o),r?a:void 0);return h?h.value:o}if(c<=0)return o;const{value:p}=ee;let u;if(r){const h=Number((o/c).toFixed(p)),k=Math.floor(h),q=h>k?k:k-1,J=h<k?k:k+1;u=H(o,[Number((q*c).toFixed(p)),Number((J*c).toFixed(p)),...i],a)}else{const h=Te(e);u=H(e,[...i,h])}return u?ie(u.value):o}function ie(e){return Math.min(t.max,Math.max(t.min,e))}function I(e){const{max:o,min:a}=t;return(e-a)/(o-a)*100}function ze(e){const{max:o,min:a}=t;return a+(o-a)*e}function Te(e){const{step:o,min:a}=t;if(o<=0||o==="mark")return e;const r=Math.round((e-a)/o)*o+a;return Number(r.toFixed(ee.value))}function H(e,o=ae.value,a){if(!(o!=null&&o.length))return null;let r=null,i=-1;for(;++i<o.length;){const c=o[i]-e,p=Math.abs(c);(a===void 0||c*a>0)&&(r===null||p<r.distance)&&(r={index:i,distance:p,value:o[i]})}return r}function se(e){const o=d.value;if(!o)return;const a=be(e)?e.touches[0]:e,r=o.getBoundingClientRect();let i;return t.vertical?i=(r.bottom-a.clientY)/r.height:i=(a.clientX-r.left)/r.width,t.reverse&&(i=1-i),ze(i)}function Me(e){if(D.value||!t.keyboard)return;const{vertical:o,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),A(o&&a?-1:1);break;case"ArrowRight":e.preventDefault(),A(!o&&a?-1:1);break;case"ArrowDown":e.preventDefault(),A(o&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),A(!o&&a?1:-1);break}}function A(e){const o=g.value;if(o===-1)return;const{step:a}=t,r=m.value[o],i=a<=0||a==="mark"?r:r+a*e;W(G(i,r,e>0?1:-1),o)}function Ve(e){var o,a;if(D.value||!be(e)&&e.button!==mo)return;const r=se(e);if(r===void 0)return;const i=m.value.slice(),c=t.range?(a=(o=H(r,i))===null||o===void 0?void 0:o.index)!==null&&a!==void 0?a:-1:0;c!==-1&&(e.preventDefault(),Ce(c),Be(),W(G(r,m.value[c]),c))}function Be(){S.value||(S.value=!0,U("touchend",document,j),U("mouseup",document,j),U("touchmove",document,P),U("mousemove",document,P))}function E(){S.value&&(S.value=!1,N("touchend",document,j),N("mouseup",document,j),N("touchmove",document,P),N("mousemove",document,P))}function P(e){const{value:o}=g;if(!S.value||o===-1){E();return}const a=se(e);W(G(a,m.value[o]),o)}function j(){E()}function $e(e){g.value=e,D.value||(C.value=e)}function De(e){g.value===e&&(g.value=-1,E()),C.value===e&&(C.value=-1)}function Fe(e){C.value=e}function Ie(e){C.value===e&&(C.value=-1)}he(g,(e,o)=>void Q(()=>te.value=o)),he(X,()=>{if(t.marks){if(F.value)return;F.value=!0,Q(()=>{F.value=!1})}Q(Se)}),no(()=>{E()});const de=w(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:a,fillColor:r,fillColorHover:i,handleColor:c,opacityDisabled:p,dotColor:u,dotColorModal:h,handleBoxShadow:k,handleBoxShadowHover:q,handleBoxShadowActive:J,handleBoxShadowFocus:He,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Pe,railWidthVertical:je,handleSize:_e,dotHeight:Ue,dotWidth:Ne,dotBorderRadius:Oe,fontSize:Le,dotBorderActive:Ke,dotColorPopover:Xe},common:{cubicBezierEaseInOut:Ye}}=s.value;return{"--n-bezier":Ye,"--n-dot-border":Ae,"--n-dot-border-active":Ke,"--n-dot-border-radius":Oe,"--n-dot-box-shadow":Ee,"--n-dot-color":u,"--n-dot-color-modal":h,"--n-dot-color-popover":Xe,"--n-dot-height":Ue,"--n-dot-width":Ne,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":Le,"--n-handle-box-shadow":k,"--n-handle-box-shadow-active":J,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":q,"--n-handle-color":c,"--n-handle-size":_e,"--n-opacity-disabled":p,"--n-rail-color":o,"--n-rail-color-hover":a,"--n-rail-height":Pe,"--n-rail-width-vertical":je,"--n-mark-font-size":e}}),T=f?ve("slider",void 0,de,t):void 0,ce=w(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:a,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":a,"--n-indicator-color":o,"--n-indicator-text-color":r}}),M=f?ve("slider-indicator",void 0,ce,t):void 0;return{mergedClsPrefix:l,namespace:y,uncontrolledValue:K,mergedValue:X,mergedDisabled:D,mergedPlacement:we,isMounted:ro(),adjustedTo:Z(t),dotTransitionDisabled:F,markInfos:ke,isShowTooltip:ne,shouldKeepTooltipTransition:Re,handleRailRef:d,setHandleRefs:R,setFollowerRefs:L,fillStyle:xe,getHandleStyle:ye,activeIndex:g,arrifiedValues:m,followerEnabledIndexSet:B,handleRailMouseDown:Ve,handleHandleFocus:$e,handleHandleBlur:De,handleHandleMouseEnter:Fe,handleHandleMouseLeave:Ie,handleRailKeyDown:Me,indicatorCssVars:f?void 0:ce,indicatorThemeClass:M==null?void 0:M.themeClass,indicatorOnRender:M==null?void 0:M.onRender,cssVars:f?void 0:de,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){var t;const{mergedClsPrefix:l,themeClass:y,formatTooltip:f}=this;return(t=this.onRender)===null||t===void 0||t.call(this),v("div",{class:[`${l}-slider`,y,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},v("div",{class:`${l}-slider-rail`},v("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?v("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>v("div",{key:s.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,v("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,d)=>{const z=this.isShowTooltip(d);return v(lo,null,{default:()=>[v(io,null,{default:()=>v("div",{ref:this.setHandleRefs(d),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(s,d),onFocus:()=>this.handleHandleFocus(d),onBlur:()=>this.handleHandleBlur(d),onMouseenter:()=>this.handleHandleMouseEnter(d),onMouseleave:()=>this.handleHandleMouseLeave(d)},so(this.$slots.thumb,()=>[v("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&v(co,{ref:this.setFollowerRefs(d),show:z,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===Z.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>v(uo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var R;return z?((R=this.indicatorOnRender)===null||R===void 0||R.call(this),v("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof f=="function"?f(s):s)):null}})})]})})),this.marks?v("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>v("div",{key:s.label,class:`${l}-slider-mark`,style:s.style},s.label))):null))}});export{wo as _};
