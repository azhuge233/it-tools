import{O as e,d as l,A as n,q as t,bd as a}from"./index-648e106a.js";const c=Object.assign(Object.assign({},e.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),i=l({name:"Scrollbar",props:c,setup(){const r=n(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var s;(s=r.value)===null||s===void 0||s.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var s;(s=r.value)===null||s===void 0||s.scrollBy(o[0],o[1])}}),{scrollbarInstRef:r})},render(){return t(a,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),u=i;export{u as _};