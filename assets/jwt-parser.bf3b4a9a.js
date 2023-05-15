import{v as m,_ as B,d as G,A as K,e as L,x as g,w as l,z as U,o as d,l as p,n as S,q as y,k as w,r as O,F as C,s as v,m as A,J as P,am as W,ao as $,an as q}from"./index.2e6b7445.js";import{u as Q}from"./validation.89ce9e2c.js";import{i as X}from"./boolean.804e8429.js";import{w as Y}from"./defaults.0a26f349.js";import{_ as Z}from"./FormItem.4c07172c.js";import{_ as ee}from"./Table.63b48cf3.js";function H(t){this.message=t}H.prototype=new Error,H.prototype.name="InvalidCharacterError";var N=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new H("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,s="";r=e.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?s+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function te(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(N(n).replace(/(.)/g,function(r,a){var o=a.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(e)}catch{return N(e)}}function b(t){this.message=t}function D(t,e){if(typeof t!="string")throw new b("Invalid token specified");var n=(e=e||{}).header===!0?0:1;try{return JSON.parse(te(t.split(".")[n]))}catch(r){throw new b("Invalid token specified: "+r.message)}}b.prototype=new Error,b.prototype.name="InvalidTokenError";var k=Symbol("@ts-pattern/matcher"),j="@ts-pattern/anonymous-select-key",J=function(t){return Boolean(t&&typeof t=="object")},T=function(t){return t&&!!t[k]},ne=function t(e,n,r){if(J(e)){if(T(e)){var a=e[k]().match(n),o=a.matched,s=a.selections;return o&&s&&Object.keys(s).forEach(function(i){return r(i,s[i])}),o}if(!J(n))return!1;if(Array.isArray(e))return!!Array.isArray(n)&&e.length===n.length&&e.every(function(i,c){return t(i,n[c],r)});if(e instanceof Map)return n instanceof Map&&Array.from(e.keys()).every(function(i){return t(e.get(i),n.get(i),r)});if(e instanceof Set){if(!(n instanceof Set))return!1;if(e.size===0)return n.size===0;if(e.size===1){var u=Array.from(e.values())[0];return T(u)?Array.from(n.values()).every(function(i){return t(u,i,r)}):n.has(u)}return Array.from(e.values()).every(function(i){return n.has(i)})}return Object.keys(e).every(function(i){var c,f=e[i];return(i in n||T(c=f)&&c[k]().matcherType==="optional")&&t(f,n[i],r)})}return Object.is(n,e)};function h(t){var e;return(e={})[k]=function(){return{match:function(n){return{matched:Boolean(t(n))}}}},e}h(function(t){return!0});h(function(t){return typeof t=="string"});h(function(t){return typeof t=="number"});h(function(t){return typeof t=="boolean"});h(function(t){return typeof t=="bigint"});h(function(t){return typeof t=="symbol"});h(function(t){return t==null});function re(t){return new ae(t,[])}var ae=function(){function t(n,r){this.value=void 0,this.cases=void 0,this.value=n,this.cases=r}var e=t.prototype;return e.with=function(){var n=[].slice.call(arguments),r=n[n.length-1],a=[n[0]],o=[];return n.length===3&&typeof n[1]=="function"?(a.push(n[0]),o.push(n[1])):n.length>2&&a.push.apply(a,n.slice(1,n.length-1)),new t(this.value,this.cases.concat([{match:function(s){var u={},i=Boolean(a.some(function(c){return ne(c,s,function(f,I){u[f]=I})})&&o.every(function(c){return c(s)}));return{matched:i,value:i&&Object.keys(u).length?j in u?u[j]:u:s}},handler:r}]))},e.when=function(n,r){return new t(this.value,this.cases.concat([{match:function(a){return{matched:Boolean(n(a)),value:a}},handler:r}]))},e.otherwise=function(n){return new t(this.value,this.cases.concat([{match:function(r){return{matched:!0,value:r}},handler:n}])).run()},e.exhaustive=function(){return this.run()},e.run=function(){for(var n=this.value,r=void 0,a=0;a<this.cases.length;a++){var o=this.cases[a],s=o.match(this.value);if(s.matched){n=s.value,r=o.handler;break}}if(!r){var u;try{u=JSON.stringify(this.value)}catch{u=this.value}throw new Error("Pattern matching error: no pattern matches value "+u)}return r(n,this.value)},t}();const oe={HS256:"HMAC using SHA-256",HS384:"HMAC using SHA-384",HS512:"HMAC using SHA-512",RS256:"RSASSA-PKCS1-v1_5 using SHA-256",RS384:"RSASSA-PKCS1-v1_5 using SHA-384",RS512:"RSASSA-PKCS1-v1_5 using SHA-512",ES256:"ECDSA using P-256 and SHA-256",ES384:"ECDSA using P-384 and SHA-384",ES512:"ECDSA using P-521 and SHA-512",PS256:"RSASSA-PSS using SHA-256 and MGF1 with SHA-256",PS384:"RSASSA-PSS using SHA-384 and MGF1 with SHA-384",PS512:"RSASSA-PSS using SHA-512 and MGF1 with SHA-512",none:"No digital signature or MAC performed"},ie={typ:"Type",alg:"Algorithm",iss:"Issuer",sub:"Subject",aud:"Audience",exp:"Expiration Time",nbf:"Not Before",iat:"Issued At",jti:"JWT ID",name:"Full name",given_name:"Given name(s) or first name(s)",family_name:"Surname(s) or last name(s)",middle_name:"Middle name(s)",nickname:"Casual name",preferred_username:"Shorthand name by which the End-User wishes to be referred to",profile:"Profile page URL",picture:"Profile picture URL",website:"Web page or blog URL",email:"Preferred e-mail address",email_verified:"True if the e-mail address has been verified; otherwise false",gender:"Gender",birthdate:"Birthday",zoneinfo:"Time zone",locale:"Locale",phone_number:"Preferred telephone number",phone_number_verified:"True if the phone number has been verified; otherwise false",address:"Preferred postal address",updated_at:"Time the information was last updated",azp:"Authorized party - the party to which the ID Token was issued",nonce:"Value used to associate a Client session with an ID Token",auth_time:"Time when the authentication occurred",at_hash:"Access Token hash value",c_hash:"Code hash value",acr:"Authentication Context Class Reference",amr:"Authentication Methods References",sub_jwk:"Public key used to check the signature of an ID Token",cnf:"Confirmation",sip_from_tag:"SIP From tag header field parameter value",sip_date:"SIP Date header field value",sip_callid:"SIP Call-Id header field value",sip_cseq_num:"SIP CSeq numeric header field parameter value",sip_via_branch:"SIP Via branch header field parameter value",orig:"Originating Identity String",dest:"Destination Identity String",mky:"Media Key Fingerprint String",events:"Security Events",toe:"Time of Event",txn:"Transaction Identifier",rph:"Resource Priority Header Authorization",sid:"Session ID",vot:"Vector of Trust value",vtm:"Vector of Trust trustmark URL",attest:"Attestation level as defined in SHAKEN framework",origid:"Originating Identifier as defined in SHAKEN framework",act:"Actor",scope:"Scope Values",client_id:"Client Identifier",may_act:"Authorized Actor - the party that is authorized to become the actor",jcard:"jCard data",at_use_nbr:"Number of API requests for which the access token can be used",div:"Diverted Target of a Call",opt:"Original PASSporT (in Full Form)",vc:"Verifiable Credential as specified in the W3C Recommendation",vp:"Verifiable Presentation as specified in the W3C Recommendation",sph:"SIP Priority header field",ace_profile:"ACE profile a token is supposed to be used with.",cnonce:"Client nonce",exi:"Expires in",roles:"Roles",groups:"Groups",entitlements:"Entitlements",token_introspection:"Token introspection response"};function V({jwt:t}){const e=D(t,{header:!0}),n=D(t),r=m.map(e,(o,s)=>F({claim:s,value:o})),a=m.map(n,(o,s)=>F({claim:s,value:o}));return{header:r,payload:a}}function F({claim:t,value:e}){const n=ie[t],r=m.isPlainObject(e)?JSON.stringify(e,null,3):m.toString(e),a=se({claim:t,value:e});return{value:r,friendlyValue:a,claim:t,claimDescription:n}}function se({claim:t,value:e}){return re(t).with("exp","nbf","iat",()=>ue(e)).with("alg",()=>m.isString(e)?oe[e]:void 0).otherwise(()=>{})}const ue=t=>{if(m.isNil(t))return;const e=new Date(Number(t)*1e3);return`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`};const ce={colspan:"2",class:"table-header"},le={class:"claims"},de=G({__name:"jwt-parser",setup(t){const e=K("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),n=L(()=>Y(()=>V({jwt:e.value}),{header:[],payload:[]})),r=[{key:"header",title:"Header"},{key:"payload",title:"Payload"}],a=Q({source:e,rules:[{validator:o=>o.length>0&&X(()=>V({jwt:e.value})),message:"Invalid JWT"}]});return(o,s)=>{const u=W,i=Z,c=$,f=q,I=ee,z=U;return d(),g(z,null,{default:l(()=>[p(i,{label:"JWT to decode",feedback:S(a).message,"validation-status":S(a).status},{default:l(()=>[p(u,{value:e.value,"onUpdate:value":s[0]||(s[0]=_=>e.value=_),type:"textarea",placeholder:"Put your token here...",rows:"5"},null,8,["value"])]),_:1},8,["feedback","validation-status"]),S(a).isValid?(d(),g(I,{key:0},{default:l(()=>[y("tbody",null,[(d(!0),w(C,null,O(S(r),_=>(d(),w(C,{key:_.key},[y("th",ce,v(_.title),1),(d(!0),w(C,null,O(S(n)[_.key],({claim:E,claimDescription:R,friendlyValue:x,value:M})=>(d(),w("tr",{key:E+M},[y("td",le,[p(f,null,{default:l(()=>[p(c,{strong:""},{default:l(()=>[A(v(E),1)]),_:2},1024),R?(d(),g(c,{key:0,depth:"3"},{default:l(()=>[A("("+v(R)+")",1)]),_:2},1024)):P("",!0)]),_:2},1024)]),y("td",null,[p(f,null,{default:l(()=>[p(c,null,{default:l(()=>[A(v(M),1)]),_:2},1024),x?(d(),g(c,{key:0,depth:"3"},{default:l(()=>[A("("+v(x)+")",1)]),_:2},1024)):P("",!0)]),_:2},1024)])]))),128))],64))),128))])]),_:1})):P("",!0)]),_:1})}}});var ve=B(de,[["__scopeId","data-v-8f0556b2"]]);export{ve as default};
