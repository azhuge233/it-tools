import{d as pe,z as x,H as me,w as m,y as ye,o as ke,k as c,n as N,B as $}from"./index-daf2c61e.js";import{_ as M}from"./InputCopyable.vue_vue_type_script_setup_true_lang-0a04347a.js";import{_ as we}from"./ColorPicker-c876d4d2.js";import{_ as Ne}from"./FormItem-55449584.js";import{_ as $e}from"./Form-8f21b2a5.js";import"./content-copy-ae1cb2d2.js";import"./Input-6040ed9f.js";import"./Button-d0c411d0.js";import"./use-form-item-0fc2e393.js";import"./use-locale-44154ab2.js";import"./InputGroup-d18f8553.js";var xe={grad:.9,turn:360,rad:360/(2*Math.PI)},k=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},b=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},v=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},le=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},T=function(e){return{r:v(e.r,0,255),g:v(e.g,0,255),b:v(e.b,0,255),a:v(e.a)}},C=function(e){return{r:b(e.r),g:b(e.g),b:b(e.b),a:b(e.a,3)}},Me=/^#([0-9a-f]{3,8})$/i,U=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},fe=function(e){var t=e.r,n=e.g,a=e.b,r=e.a,o=Math.max(t,n,a),u=o-Math.min(t,n,a),i=u?o===t?(n-a)/u:o===n?2+(a-t)/u:4+(t-n)/u:0;return{h:60*(i<0?i+6:i),s:o?u/o*100:0,v:o/255*100,a:r}},de=function(e){var t=e.h,n=e.s,a=e.v,r=e.a;t=t/360*6,n/=100,a/=100;var o=Math.floor(t),u=a*(1-n),i=a*(1-(t-o)*n),f=a*(1-(1-t+o)*n),s=o%6;return{r:255*[a,i,u,u,f,a][s],g:255*[f,a,a,i,u,u][s],b:255*[u,u,f,a,a,i][s],a:r}},W=function(e){return{h:le(e.h),s:v(e.s,0,100),l:v(e.l,0,100),a:v(e.a)}},X=function(e){return{h:b(e.h),s:b(e.s),l:b(e.l),a:b(e.a,3)}},Y=function(e){return de((n=(t=e).s,{h:t.h,s:(n*=((a=t.l)<50?a:100-a)/100)>0?2*n/(a+n)*100:0,v:a+n,a:t.a}));var t,n,a},H=function(e){return{h:(t=fe(e)).h,s:(r=(200-(n=t.s))*(a=t.v)/100)>0&&r<200?n*a/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,n,a,r},_e=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ze=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ie=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,He=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A={string:[[function(e){var t=Me.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?b(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Ie.exec(e)||He.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:T({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=_e.exec(e)||ze.exec(e);if(!t)return null;var n,a,r=W({h:(n=t[1],a=t[2],a===void 0&&(a="deg"),Number(n)*(xe[a]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Y(r)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,a=e.b,r=e.a,o=r===void 0?1:r;return k(t)&&k(n)&&k(a)?T({r:Number(t),g:Number(n),b:Number(a),a:Number(o)}):null},"rgb"],[function(e){var t=e.h,n=e.s,a=e.l,r=e.a,o=r===void 0?1:r;if(!k(t)||!k(n)||!k(a))return null;var u=W({h:Number(t),s:Number(n),l:Number(a),a:Number(o)});return Y(u)},"hsl"],[function(e){var t=e.h,n=e.s,a=e.v,r=e.a,o=r===void 0?1:r;if(!k(t)||!k(n)||!k(a))return null;var u=function(i){return{h:le(i.h),s:v(i.s,0,100),v:v(i.v,0,100),a:v(i.a)}}({h:Number(t),s:Number(n),v:Number(a),a:Number(o)});return de(u)},"hsv"]]},Z=function(e,t){for(var n=0;n<t.length;n++){var a=t[n][0](e);if(a)return[a,t[n][1]]}return[null,void 0]},Se=function(e){return typeof e=="string"?Z(e.trim(),A.string):typeof e=="object"&&e!==null?Z(e,A.object):[null,void 0]},L=function(e,t){var n=H(e);return{h:n.h,s:v(n.s+100*t,0,100),l:n.l,a:n.a}},B=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},ee=function(e,t){var n=H(e);return{h:n.h,s:n.s,l:v(n.l+100*t,0,100),a:n.a}},G=function(){function e(t){this.parsed=Se(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return b(B(this.rgba),2)},e.prototype.isDark=function(){return B(this.rgba)<.5},e.prototype.isLight=function(){return B(this.rgba)>=.5},e.prototype.toHex=function(){return t=C(this.rgba),n=t.r,a=t.g,r=t.b,u=(o=t.a)<1?U(b(255*o)):"","#"+U(n)+U(a)+U(r)+u;var t,n,a,r,o,u},e.prototype.toRgb=function(){return C(this.rgba)},e.prototype.toRgbString=function(){return t=C(this.rgba),n=t.r,a=t.g,r=t.b,(o=t.a)<1?"rgba("+n+", "+a+", "+r+", "+o+")":"rgb("+n+", "+a+", "+r+")";var t,n,a,r,o},e.prototype.toHsl=function(){return X(H(this.rgba))},e.prototype.toHslString=function(){return t=X(H(this.rgba)),n=t.h,a=t.s,r=t.l,(o=t.a)<1?"hsla("+n+", "+a+"%, "+r+"%, "+o+")":"hsl("+n+", "+a+"%, "+r+"%)";var t,n,a,r,o},e.prototype.toHsv=function(){return t=fe(this.rgba),{h:b(t.h),s:b(t.s),v:b(t.v),a:b(t.a,3)};var t},e.prototype.invert=function(){return y({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),y(L(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),y(L(this.rgba,-t))},e.prototype.grayscale=function(){return y(L(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),y(ee(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),y(ee(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?y({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):b(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=H(this.rgba);return typeof t=="number"?y({h:t,s:n.s,l:n.l,a:n.a}):b(n.h)},e.prototype.isEqual=function(t){return this.toHex()===y(t).toHex()},e}(),y=function(e){return e instanceof G?e:new G(e)},te=[],qe=function(e){e.forEach(function(t){te.indexOf(t)<0&&(t(G,A),te.push(t))})},j=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},g=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},I=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},se=function(e){return{c:I(e.c,0,100),m:I(e.m,0,100),y:I(e.y,0,100),k:I(e.k,0,100),a:I(e.a)}},ne=function(e){return{c:g(e.c,2),m:g(e.m,2),y:g(e.y,2),k:g(e.k,2),a:g(e.a,3)}};function be(e){return{r:g(255*(1-e.c/100)*(1-e.k/100)),g:g(255*(1-e.m/100)*(1-e.k/100)),b:g(255*(1-e.y/100)*(1-e.k/100)),a:e.a}}function ae(e){var t=1-Math.max(e.r/255,e.g/255,e.b/255),n=(1-e.r/255-t)/(1-t),a=(1-e.g/255-t)/(1-t),r=(1-e.b/255-t)/(1-t);return{c:isNaN(n)?0:g(100*n),m:isNaN(a)?0:g(100*a),y:isNaN(r)?0:g(100*r),k:g(100*t),a:e.a}}function Pe(e){var t=e.c,n=e.m,a=e.y,r=e.k,o=e.a,u=o===void 0?1:o;return j(t)&&j(n)&&j(a)&&j(r)?be(se({c:Number(t),m:Number(n),y:Number(a),k:Number(r),a:Number(u)})):null}var Ue=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,je=function(e){var t=Ue.exec(e);return t?be(se({c:Number(t[1])*(t[2]?1:100),m:Number(t[3])*(t[4]?1:100),y:Number(t[5])*(t[6]?1:100),k:Number(t[7])*(t[8]?1:100),a:t[9]===void 0?1:Number(t[9])/(t[10]?100:1)})):null};function Re(e,t){e.prototype.toCmyk=function(){return ne(ae(this.rgba))},e.prototype.toCmykString=function(){return n=ne(ae(this.rgba)),a=n.c,r=n.m,o=n.y,u=n.k,(i=n.a)<1?"device-cmyk("+a+"% "+r+"% "+o+"% "+u+"% / "+i+")":"device-cmyk("+a+"% "+r+"% "+o+"% "+u+"%)";var n,a,r,o,u,i},t.object.push([Pe,"cmyk"]),t.string.push([je,"cmyk"])}var Ce={grad:.9,turn:360,rad:360/(2*Math.PI)},F=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},R=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},E=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},ce=function(e){return{h:(t=e.h,(t=isFinite(t)?t%360:0)>0?t:t+360),w:E(e.w,0,100),b:E(e.b,0,100),a:E(e.a)};var t},re=function(e){return{h:R(e.h),w:R(e.w),b:R(e.b),a:R(e.a,3)}},ue=function(e){return{h:function(t){var n=t.r,a=t.g,r=t.b,o=t.a,u=Math.max(n,a,r),i=u-Math.min(n,a,r),f=i?u===n?(a-r)/i:u===a?2+(r-n)/i:4+(n-a)/i:0;return{h:60*(f<0?f+6:f),s:u?i/u*100:0,v:u/255*100,a:o}}(e).h,w:Math.min(e.r,e.g,e.b)/255*100,b:100-Math.max(e.r,e.g,e.b)/255*100,a:e.a}},he=function(e){return function(t){var n=t.h,a=t.s,r=t.v,o=t.a;n=n/360*6,a/=100,r/=100;var u=Math.floor(n),i=r*(1-a),f=r*(1-(n-u)*a),s=r*(1-(1-n+u)*a),l=u%6;return{r:255*[r,f,i,i,s,r][l],g:255*[s,r,r,f,i,i][l],b:255*[i,i,s,r,r,f][l],a:o}}({h:e.h,s:e.b===100?0:100-e.w/(100-e.b)*100,v:100-e.b,a:e.a})},Le=function(e){var t=e.h,n=e.w,a=e.b,r=e.a,o=r===void 0?1:r;if(!F(t)||!F(n)||!F(a))return null;var u=ce({h:Number(t),w:Number(n),b:Number(a),a:Number(o)});return he(u)},Be=/^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fe=function(e){var t=Be.exec(e);if(!t)return null;var n,a,r=ce({h:(n=t[1],a=t[2],a===void 0&&(a="deg"),Number(n)*(Ce[a]||1)),w:Number(t[3]),b:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return he(r)};function Ee(e,t){e.prototype.toHwb=function(){return re(ue(this.rgba))},e.prototype.toHwbString=function(){return n=re(ue(this.rgba)),a=n.h,r=n.w,o=n.b,(u=n.a)<1?"hwb("+a+" "+r+"% "+o+"% / "+u+")":"hwb("+a+" "+r+"% "+o+"%)";var n,a,r,o,u},t.string.push([Fe,"hwb"]),t.object.push([Le,"hwb"])}function Ve(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},a={};for(var r in n)a[n[r]]=r;var o={};e.prototype.toName=function(u){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var i,f,s=a[this.toHex()];if(s)return s;if(u!=null&&u.closest){var l=this.toRgb(),h=1/0,p="black";if(!o.length)for(var q in n)o[q]=new e(n[q]).toRgb();for(var P in n){var d=(i=l,f=o[P],Math.pow(i.r-f.r,2)+Math.pow(i.g-f.g,2)+Math.pow(i.b-f.b,2));d<h&&(h=d,p=P)}return p}},t.string.push([function(u){var i=u.toLowerCase(),f=i==="transparent"?"#0000":n[i];return f?new e(f).toRgb():null},"name"])}var De={grad:.9,turn:360,rad:360/(2*Math.PI)},V=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},_=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},w=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},D=function(e){var t=e/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},O=function(e){return 255*(e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e)},J=96.422,K=100,Q=82.521,Oe=function(e){var t,n,a={x:.9555766*(t=e).x+-.0230393*t.y+.0631636*t.z,y:-.0282895*t.x+1.0099416*t.y+.0210077*t.z,z:.0122982*t.x+-.020483*t.y+1.3299098*t.z};return n={r:O(.032404542*a.x-.015371385*a.y-.004985314*a.z),g:O(-.00969266*a.x+.018760108*a.y+41556e-8*a.z),b:O(556434e-9*a.x-.002040259*a.y+.010572252*a.z),a:e.a},{r:w(n.r,0,255),g:w(n.g,0,255),b:w(n.b,0,255),a:w(n.a)}},Ae=function(e){var t=D(e.r),n=D(e.g),a=D(e.b);return function(r){return{x:w(r.x,0,J),y:w(r.y,0,K),z:w(r.z,0,Q),a:w(r.a)}}(function(r){return{x:1.0478112*r.x+.0228866*r.y+-.050127*r.z,y:.0295424*r.x+.9904844*r.y+-.0170491*r.z,z:-.0092345*r.x+.0150436*r.y+.7521316*r.z,a:r.a}}({x:100*(.4124564*t+.3575761*n+.1804375*a),y:100*(.2126729*t+.7151522*n+.072175*a),z:100*(.0193339*t+.119192*n+.9503041*a),a:e.a}))},S=216/24389,z=24389/27,ge=function(e){return{l:w(e.l,0,100),c:e.c,h:(t=e.h,(t=isFinite(t)?t%360:0)>0?t:t+360),a:e.a};var t},oe=function(e){return{l:_(e.l,2),c:_(e.c,2),h:_(e.h,2),a:_(e.a,3)}},Ge=function(e){var t=e.l,n=e.c,a=e.h,r=e.a,o=r===void 0?1:r;if(!V(t)||!V(n)||!V(a))return null;var u=ge({l:Number(t),c:Number(n),h:Number(a),a:Number(o)});return ve(u)},ie=function(e){var t=function(o){var u=Ae(o),i=u.x/J,f=u.y/K,s=u.z/Q;return i=i>S?Math.cbrt(i):(z*i+16)/116,{l:116*(f=f>S?Math.cbrt(f):(z*f+16)/116)-16,a:500*(i-f),b:200*(f-(s=s>S?Math.cbrt(s):(z*s+16)/116)),alpha:u.a}}(e),n=_(t.a,3),a=_(t.b,3),r=Math.atan2(a,n)/Math.PI*180;return{l:t.l,c:Math.sqrt(n*n+a*a),h:r<0?r+360:r,a:t.alpha}},ve=function(e){return t={l:e.l,a:e.c*Math.cos(e.h*Math.PI/180),b:e.c*Math.sin(e.h*Math.PI/180),alpha:e.a},a=t.a/500+(n=(t.l+16)/116),r=n-t.b/200,Oe({x:(Math.pow(a,3)>S?Math.pow(a,3):(116*a-16)/z)*J,y:(t.l>8?Math.pow((t.l+16)/116,3):t.l/z)*K,z:(Math.pow(r,3)>S?Math.pow(r,3):(116*r-16)/z)*Q,a:t.alpha});var t,n,a,r},Je=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ke=function(e){var t=Je.exec(e);if(!t)return null;var n,a,r=ge({l:Number(t[1]),c:Number(t[2]),h:(n=t[3],a=t[4],a===void 0&&(a="deg"),Number(n)*(De[a]||1)),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return ve(r)};function Qe(e,t){e.prototype.toLch=function(){return oe(ie(this.rgba))},e.prototype.toLchString=function(){return n=oe(ie(this.rgba)),a=n.l,r=n.c,o=n.h,(u=n.a)<1?"lch("+a+"% "+r+" "+o+" / "+u+")":"lch("+a+"% "+r+" "+o+")";var n,a,r,o,u},t.string.push([Ke,"lch"]),t.object.push([Ge,"lch"])}const ot=pe({__name:"color-converter",setup(e){qe([Re,Ee,Ve,Qe]);const t=x(""),n=x("#1ea54cff"),a=x(""),r=x(""),o=x(""),u=x(""),i=x("");function f(s,l){try{const h=y(s);l!=="name"&&(t.value=h.toName({closest:!0})??""),l!=="hex"&&(n.value=h.toHex()),l!=="rgb"&&(a.value=h.toRgbString()),l!=="hsl"&&(r.value=h.toHslString()),l!=="hwb"&&(o.value=h.toHwbString()),l!=="cmyk"&&(u.value=h.toCmykString()),l!=="lch"&&(i.value=h.toLchString())}catch{}}return f(n.value,"hex"),(s,l)=>{const h=we,p=Ne,q=$e,P=ye;return ke(),me(P,null,{default:m(()=>[c(q,{"label-width":"100","label-placement":"left"},{default:m(()=>[c(p,{label:"color picker:"},{default:m(()=>[c(h,{value:N(n),"onUpdate:value":[l[0]||(l[0]=d=>$(n)?n.value=d:null),l[1]||(l[1]=d=>f(d,"hex"))],placement:"bottom-end"},null,8,["value"])]),_:1}),c(p,{label:"color name:"},{default:m(()=>[c(M,{value:N(t),"onUpdate:value":[l[2]||(l[2]=d=>$(t)?t.value=d:null),l[3]||(l[3]=d=>f(d,"name"))]},null,8,["value"])]),_:1}),c(p,{label:"hex:"},{default:m(()=>[c(M,{value:N(n),"onUpdate:value":[l[4]||(l[4]=d=>$(n)?n.value=d:null),l[5]||(l[5]=d=>f(d,"hex"))]},null,8,["value"])]),_:1}),c(p,{label:"rgb:"},{default:m(()=>[c(M,{value:N(a),"onUpdate:value":[l[6]||(l[6]=d=>$(a)?a.value=d:null),l[7]||(l[7]=d=>f(d,"rgb"))]},null,8,["value"])]),_:1}),c(p,{label:"hsl:"},{default:m(()=>[c(M,{value:N(r),"onUpdate:value":[l[8]||(l[8]=d=>$(r)?r.value=d:null),l[9]||(l[9]=d=>f(d,"hsl"))]},null,8,["value"])]),_:1}),c(p,{label:"hwb:"},{default:m(()=>[c(M,{value:N(o),"onUpdate:value":[l[10]||(l[10]=d=>$(o)?o.value=d:null),l[11]||(l[11]=d=>f(d,"hwb"))]},null,8,["value"])]),_:1}),c(p,{label:"lch:"},{default:m(()=>[c(M,{value:N(i),"onUpdate:value":[l[12]||(l[12]=d=>$(i)?i.value=d:null),l[13]||(l[13]=d=>f(d,"lch"))]},null,8,["value"])]),_:1}),c(p,{label:"cmyk:"},{default:m(()=>[c(M,{value:N(u),"onUpdate:value":[l[14]||(l[14]=d=>$(u)?u.value=d:null),l[15]||(l[15]=d=>f(d,"cmyk"))]},null,8,["value"])]),_:1})]),_:1})]),_:1})}}});export{ot as default};
