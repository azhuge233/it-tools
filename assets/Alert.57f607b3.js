import{at as j,bb as F,aK as u,aO as v,c as T,V as i,T as $,U as V,a as N,d as K,u as U,b as H,aN as D,e as E,f as J,M as X,h as s,L as q,bc as G,ap as c,aX as Q,bd as Y,J as Z,K as oo,aT as eo,aU as ro,aV as no,aS as lo,an as so}from"./index.ca2546a6.js";const to=r=>{const{lineHeight:e,borderRadius:d,fontWeightStrong:b,baseColor:t,dividerColor:f,actionColor:S,textColor1:g,textColor2:l,closeColorHover:h,closeColorPressed:C,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,infoColor:o,successColor:I,warningColor:x,errorColor:z,fontSize:P}=r;return Object.assign(Object.assign({},F),{fontSize:P,lineHeight:e,titleFontWeight:b,borderRadius:d,border:`1px solid ${f}`,color:S,titleTextColor:g,iconColor:l,contentTextColor:l,closeBorderRadius:d,closeColorHover:h,closeColorPressed:C,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,borderInfo:`1px solid ${u(t,v(o,{alpha:.25}))}`,colorInfo:u(t,v(o,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:o,contentTextColorInfo:l,closeColorHoverInfo:h,closeColorPressedInfo:C,closeIconColorInfo:m,closeIconColorHoverInfo:p,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(t,v(I,{alpha:.25}))}`,colorSuccess:u(t,v(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:h,closeColorPressedSuccess:C,closeIconColorSuccess:m,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(t,v(x,{alpha:.33}))}`,colorWarning:u(t,v(x,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:x,contentTextColorWarning:l,closeColorHoverWarning:h,closeColorPressedWarning:C,closeIconColorWarning:m,closeIconColorHoverWarning:p,closeIconColorPressedWarning:n,borderError:`1px solid ${u(t,v(z,{alpha:.25}))}`,colorError:u(t,v(z,{alpha:.08})),titleTextColorError:g,iconColorError:z,contentTextColorError:l,closeColorHoverError:h,closeColorPressedError:C,closeIconColorError:m,closeIconColorHoverError:p,closeIconColorPressedError:n})},io={name:"Alert",common:j,self:to};var ao=io,co=T("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),$("closable",[T("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),T("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),V({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),$("show-icon",[T("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[N("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]);const go=Object.assign(Object.assign({},H.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function});var uo=K({name:"Alert",inheritAttrs:!1,props:go,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:b,mergedRtlRef:t}=U(r),f=H("Alert","-alert",co,ao,r,e),S=D("Alert",t,e),g=E(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=f.value,{fontSize:I,borderRadius:x,titleFontWeight:z,lineHeight:P,iconSize:R,iconMargin:y,iconMarginRtl:_,closeIconSize:W,closeBorderRadius:w,closeSize:A,closeMargin:B,closeMarginRtl:L,padding:k}=o,{type:a}=r,{left:M,right:O}=G(y);return{"--n-bezier":n,"--n-color":o[c("color",a)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":o[c("closeColorHover",a)],"--n-close-color-pressed":o[c("closeColorPressed",a)],"--n-close-icon-color":o[c("closeIconColor",a)],"--n-close-icon-color-hover":o[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":o[c("closeIconColorPressed",a)],"--n-icon-color":o[c("iconColor",a)],"--n-border":o[c("border",a)],"--n-title-text-color":o[c("titleTextColor",a)],"--n-content-text-color":o[c("contentTextColor",a)],"--n-line-height":P,"--n-border-radius":x,"--n-font-size":I,"--n-title-font-weight":z,"--n-icon-size":R,"--n-icon-margin":y,"--n-icon-margin-rtl":_,"--n-close-size":A,"--n-close-margin":B,"--n-close-margin-rtl":L,"--n-padding":k,"--n-icon-margin-left":M,"--n-icon-margin-right":O}}),l=b?J("alert",E(()=>r.type[0]),g,r):void 0,h=X(!0),C=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:S,mergedClsPrefix:e,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(h.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:f,cssVars:b?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,b={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},Q(this.$attrs,b)),this.closable&&s(Y,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${e}-alert__border`}),this.showIcon&&s("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(d.icon,()=>[s(oo,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return s(lo,null);case"info":return s(no,null);case"warning":return s(ro,null);case"error":return s(eo,null);default:return null}}})])),s("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},so(d.header,t=>{const f=t||this.title;return f?s("div",{class:`${e}-alert-body__title`},f):null}),d.default&&s("div",{class:`${e}-alert-body__content`},d))):null}})}});export{uo as _};
