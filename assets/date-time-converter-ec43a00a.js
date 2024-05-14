import{_ as j}from"./InputCopyable.vue_vue_type_script_setup_true_lang-a56522a8.js";import{c1 as _,c2 as w,c3 as E,e as Z,d as V,n as R,c4 as q,b as L,p as B,o as y,f as F,g as P,k as M,i as S,v as O,F as K,h as Q,x as ee,U as te}from"./index-65600c6f.js";import{w as $}from"./defaults-4d6daddf.js";import{a as c,i as b,b as ae}from"./index-53241e4a.js";import{_ as re}from"./Divider-f12cbbec.js";var Y=6e4,A=36e5;function ne(t,e){var n,a;_(1,arguments);var i=w(t);if(isNaN(i.getTime()))throw new RangeError("Invalid time value");var o=String((n=e?.format)!==null&&n!==void 0?n:"extended"),u=String((a=e?.representation)!==null&&a!==void 0?a:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(u!=="date"&&u!=="time"&&u!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var l="",m="",d=o==="extended"?"-":"",r=o==="extended"?":":"";if(u!=="time"){var s=c(i.getDate(),2),D=c(i.getMonth()+1,2),h=c(i.getFullYear(),4);l="".concat(h).concat(d).concat(D).concat(d).concat(s)}if(u!=="date"){var f=i.getTimezoneOffset();if(f!==0){var g=Math.abs(f),v=c(Math.floor(g/60),2),T=c(g%60,2),C=f<0?"+":"-";m="".concat(C).concat(v,":").concat(T)}else m="Z";var U=c(i.getHours(),2),W=c(i.getMinutes(),2),k=c(i.getSeconds(),2),J=l===""?"":"T",X=[U,W,k].join(r);l="".concat(l).concat(J).concat(X).concat(m)}return l}function ie(t,e){var n,a;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var i=w(t);if(!b(i))throw new RangeError("Invalid time value");var o=String((n=e?.format)!==null&&n!==void 0?n:"extended"),u=String((a=e?.representation)!==null&&a!==void 0?a:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(u!=="date"&&u!=="time"&&u!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var l="",m=o==="extended"?"-":"",d=o==="extended"?":":"";if(u!=="time"){var r=c(i.getDate(),2),s=c(i.getMonth()+1,2),D=c(i.getFullYear(),4);l="".concat(D).concat(m).concat(s).concat(m).concat(r)}if(u!=="date"){var h=c(i.getHours(),2),f=c(i.getMinutes(),2),g=c(i.getSeconds(),2),v=l===""?"":" ";l="".concat(l).concat(v).concat(h).concat(d).concat(f).concat(d).concat(g)}return l}function oe(t,e){var n;if(arguments.length<1)throw new TypeError("1 arguments required, but only ".concat(arguments.length," present"));var a=w(t);if(!b(a))throw new RangeError("Invalid time value");var i=Number((n=e?.fractionDigits)!==null&&n!==void 0?n:0);if(!(i>=0&&i<=3))throw new RangeError("fractionDigits must be between 0 and 3 inclusively");var o=c(a.getDate(),2),u=c(a.getMonth()+1,2),l=a.getFullYear(),m=c(a.getHours(),2),d=c(a.getMinutes(),2),r=c(a.getSeconds(),2),s="";if(i>0){var D=a.getMilliseconds(),h=Math.floor(D*Math.pow(10,i-3));s="."+c(h,i)}var f="",g=a.getTimezoneOffset();if(g!==0){var v=Math.abs(g),T=c(E(v/60),2),C=c(v%60,2),U=g<0?"+":"-";f="".concat(U).concat(T,":").concat(C)}else f="Z";return"".concat(l,"-").concat(u,"-").concat(o,"T").concat(m,":").concat(d,":").concat(r).concat(s).concat(f)}var ce=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],se=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ue(t){if(arguments.length<1)throw new TypeError("1 arguments required, but only ".concat(arguments.length," present"));var e=w(t);if(!b(e))throw new RangeError("Invalid time value");var n=ce[e.getUTCDay()],a=c(e.getUTCDate(),2),i=se[e.getUTCMonth()],o=e.getUTCFullYear(),u=c(e.getUTCHours(),2),l=c(e.getUTCMinutes(),2),m=c(e.getUTCSeconds(),2);return"".concat(n,", ").concat(a," ").concat(i," ").concat(o," ").concat(u,":").concat(l,":").concat(m," GMT")}function le(t){_(1,arguments);var e=E(t);return w(e*1e3)}function G(t){_(1,arguments);var e=w(t),n=e.getTime();return n}function me(t){return _(1,arguments),Math.floor(G(t)/1e3)}function z(t,e){var n;_(1,arguments);var a=E((n=e?.additionalDigits)!==null&&n!==void 0?n:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=ge(t),o;if(i.date){var u=De(i.date,a);o=pe(u.restDateString,u.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l=o.getTime(),m=0,d;if(i.time&&(m=he(i.time),isNaN(m)))return new Date(NaN);if(i.timezone){if(d=Te(i.timezone),isNaN(d))return new Date(NaN)}else{var r=new Date(l+m),s=new Date(0);return s.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),s.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),s}return new Date(l+m+d)}var x={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},de=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ve=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,fe=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ge(t){var e={},n=t.split(x.dateTimeDelimiter),a;if(n.length>2)return e;if(/:/.test(n[0])?a=n[0]:(e.date=n[0],a=n[1],x.timeZoneDelimiter.test(e.date)&&(e.date=t.split(x.timeZoneDelimiter)[0],a=t.substr(e.date.length,t.length))),a){var i=x.timezone.exec(a);i?(e.time=a.replace(i[1],""),e.timezone=i[1]):e.time=a}return e}function De(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:NaN,restDateString:""};var i=a[1]?parseInt(a[1]):null,o=a[2]?parseInt(a[2]):null;return{year:o===null?i:o*100,restDateString:t.slice((a[1]||a[2]).length)}}function pe(t,e){if(e===null)return new Date(NaN);var n=t.match(de);if(!n)return new Date(NaN);var a=!!n[4],i=N(n[1]),o=N(n[2])-1,u=N(n[3]),l=N(n[4]),m=N(n[5])-1;if(a)return Se(e,l,m)?we(e,l,m):new Date(NaN);var d=new Date(0);return!Ne(e,o,u)||!Me(e,i)?new Date(NaN):(d.setUTCFullYear(e,o,Math.max(i,u)),d)}function N(t){return t?parseInt(t):1}function he(t){var e=t.match(ve);if(!e)return NaN;var n=I(e[1]),a=I(e[2]),i=I(e[3]);return xe(n,a,i)?n*A+a*Y+i*1e3:NaN}function I(t){return t&&parseFloat(t.replace(",","."))||0}function Te(t){if(t==="Z")return 0;var e=t.match(fe);if(!e)return 0;var n=e[1]==="+"?-1:1,a=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return be(a,i)?n*(a*A+i*Y):NaN}function we(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var i=a.getUTCDay()||7,o=(e-1)*7+n+1-i;return a.setUTCDate(a.getUTCDate()+o),a}var _e=[31,null,31,30,31,30,31,31,30,31,30,31];function H(t){return t%400===0||t%4===0&&t%100!==0}function Ne(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(_e[e]||(H(t)?29:28))}function Me(t,e){return e>=1&&e<=(H(t)?366:365)}function Se(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function xe(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function be(t,e){return e>=0&&e<=59}function Ce(t){if(_(1,arguments),typeof t=="string"){var e=t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return e?new Date(Date.UTC(+e[1],+e[2]-1,+e[3],+e[4]-(+e[9]||0)*(e[8]=="-"?-1:1),+e[5]-(+e[10]||0)*(e[8]=="-"?-1:1),+e[6],+((e[7]||"0")+"00").substring(0,3))):new Date(NaN)}return w(t)}const Ue=/^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,Ie=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,6})?(([+-])([0-9]{2}):([0-9]{2})|Z)?$/,Ee=/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,9})?(([+-])([0-9]{2}):([0-9]{2})|Z)$/,Re=/^[A-Za-z]{3},\s[0-9]{2}\s[A-Za-z]{3}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}\sGMT$/,ye=/^-?\d+(\.\d+)?$/;function p(t){return e=>!Z.isNil(e)&&t.test(e)}const Fe=p(Ue),Oe=p(Ie),$e=p(Ee),ze=p(Re),Ze=p(/^[0-9]{1,10}$/),Ye=p(/^[0-9]{1,13}$/),Ae=p(/^[0-9a-fA-F]{24}$/),Ge=p(ye);function He(t){if(Z.isNil(t))return!1;try{return new Date(t).toUTCString()===t}catch{return!1}}function We(t){return String(t.getTime()/(1e3*60*60*24)+25569)}function ke(t){return new Date((Number(t)-25569)*86400*1e3)}const Je={flex:"","gap-2":""},Be=V({__name:"date-time-converter",setup(t){const e=R(""),n=r=>new Date(r),a=[{name:"JS locale date string",fromDate:r=>r.toString(),toDate:n,formatMatcher:()=>!1},{name:"ISO 8601",fromDate:ne,toDate:z,formatMatcher:r=>Fe(r)},{name:"ISO 9075",fromDate:ie,toDate:z,formatMatcher:r=>Oe(r)},{name:"RFC 3339",fromDate:oe,toDate:n,formatMatcher:r=>$e(r)},{name:"RFC 7231",fromDate:ue,toDate:n,formatMatcher:r=>ze(r)},{name:"Unix timestamp",fromDate:r=>String(me(r)),toDate:r=>le(+r),formatMatcher:r=>Ze(r)},{name:"Timestamp",fromDate:r=>String(G(r)),toDate:r=>Ce(+r),formatMatcher:r=>Ye(r)},{name:"UTC format",fromDate:r=>r.toUTCString(),toDate:n,formatMatcher:r=>He(r)},{name:"Mongo ObjectID",fromDate:r=>`${Math.floor(r.getTime()/1e3).toString(16)}0000000000000000`,toDate:r=>new Date(Number.parseInt(r.substring(0,8),16)*1e3),formatMatcher:r=>Ae(r)},{name:"Excel date/time",fromDate:r=>We(r),toDate:ke,formatMatcher:Ge}],i=R(6),o=q(),u=L(()=>{if(!e.value)return o.value;const{toDate:r}=a[i.value];try{return r(e.value)}catch{return}});function l(r){const s=a.findIndex(({formatMatcher:D})=>D(r));s!==-1&&(i.value=s)}const m=B({source:e,watch:[i],rules:[{message:"This date is invalid for this format",validator:r=>$(()=>{if(r==="")return!0;const s=a[i.value].toDate(r);return ae(s)&&b(s)},!1)}]});function d(r,s){return!s||!m.isValid?"":$(()=>r(s),"")}return(r,s)=>{const D=ee,h=te,f=re,g=j;return y(),F("div",null,[P("div",Je,[M(D,{value:S(e),"onUpdate:value":[s[0]||(s[0]=v=>O(e)?e.value=v:null),l],autofocus:"",placeholder:"Put your date string here...",clearable:"","test-id":"date-time-converter-input",validation:S(m)},null,8,["value","validation"]),M(h,{value:S(i),"onUpdate:value":s[1]||(s[1]=v=>O(i)?i.value=v:null),style:{flex:"0 0 170px"},options:a.map(({name:v},T)=>({label:v,value:T})),"data-test-id":"date-time-converter-format-select"},null,8,["value","options"])]),M(f),(y(),F(K,null,Q(a,({name:v,fromDate:T})=>M(g,{key:v,label:v,"label-width":"150px","label-position":"left","label-align":"right",value:d(T,S(u)),placeholder:"Invalid date...","test-id":v,readonly:"","mt-2":""},null,8,["label","value","test-id"])),64))])}}});export{Be as default};
