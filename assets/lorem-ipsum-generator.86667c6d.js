import{d as y,A as p,e as x,x as k,w as s,z as C,o as j,l as e,n as f,m as A,am as L,y as I,an as U}from"./index.2e6b7445.js";import{u as S}from"./copy.e6fcf1e6.js";import{r as T,a as v}from"./random.613c1dc4.js";import{_ as $}from"./Slider.de58708d.js";import{_ as P}from"./FormItem.4c07172c.js";import{_ as W}from"./Switch.39a7c04d.js";const z=["a","ac","accumsan","ad","adipiscing","aenean","aliquam","aliquet","amet","ante","aptent","arcu","at","auctor","bibendum","blandit","class","commodo","condimentum","congue","consectetur","consequat","conubia","convallis","cras","cubilia","cum","curabitur","curae","dapibus","diam","dictum","dictumst","dignissim","dolor","donec","dui","duis","egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod","facilisi","faucibus","felis","fermentum","feugiat","fringilla","fusce","gravida","habitant","habitasse","hac","hendrerit","himenaeos","iaculis","id","imperdiet","in","inceptos","integer","interdum","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","ligula","litora","lobortis","lorem","luctus","maecenas","magna","magnis","malesuada","massa","mattis","mauris","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nisi","nisl","non","nostra","nulla","nullam","nunc","odio","orci","ornare","parturient","pellentesque","penatibus","per","pharetra","phasellus","placerat","platea","porta","porttitor","posuere","potenti","praesent","pretium","primis","proin","pulvinar","purus","quam","quis","quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","sem","semper","senectus","sit","sociis","sociosqu","sodales","sollicitudin","suscipit","suspendisse","taciti","tellus","tempor","tempus","tincidunt","torquent","tortor","turpis","ullamcorper","ultrices","ultricies","urna","varius","vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"],B="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",F=c=>{const n=Array.from({length:c}).map(()=>T(z)).join(" ");return n.charAt(0).toUpperCase()+n.slice(1)+"."};function H({paragraphCount:c=1,sentencePerParagraph:n=3,wordCount:u=10,startWithLoremIpsum:o=!0,asHTML:r=!1}){const l=Array.from({length:c}).map(()=>Array.from({length:n}).map(()=>F(u)));return o&&(l[0][0]=B),r?`<p>${l.map(i=>i.join(" ")).join(`</p>

<p>`)}</p>`:l.map(i=>i.join(" ")).join(`

`)}const J=y({__name:"lorem-ipsum-generator",setup(c){const n=p(1),u=p([3,8]),o=p([8,15]),r=p(!0),l=p(!1),i=x(()=>H({paragraphCount:n.value,asHTML:l.value,sentencePerParagraph:v(u.value[0],u.value[1]),wordCount:v(o.value[0],o.value[1]),startWithLoremIpsum:r.value})),{copy:b}=S({source:i,text:"Lorem ipsum copied to the clipboard"});return(M,a)=>{const d=$,m=P,_=W,g=L,h=I,w=U,q=C;return j(),k(q,null,{default:s(()=>[e(m,{label:"Paragraphs","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:s(()=>[e(d,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),step:1,min:1,max:20},null,8,["value"])]),_:1}),e(m,{label:"Sentences per paragraph","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:s(()=>[e(d,{value:u.value,"onUpdate:value":a[1]||(a[1]=t=>u.value=t),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),e(m,{label:"Words per sentence","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:s(()=>[e(d,{value:o.value,"onUpdate:value":a[2]||(a[2]=t=>o.value=t),range:"",step:1,min:1,max:50},null,8,["value"])]),_:1}),e(m,{label:"Start with lorem ipsum ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:s(()=>[e(_,{value:r.value,"onUpdate:value":a[3]||(a[3]=t=>r.value=t)},null,8,["value"])]),_:1}),e(m,{label:"As html ?","show-feedback":!1,"label-width":"200","label-placement":"left"},{default:s(()=>[e(_,{value:l.value,"onUpdate:value":a[4]||(a[4]=t=>l.value=t)},null,8,["value"])]),_:1}),e(g,{value:f(i),type:"textarea",placeholder:"Your lorem ipsum...",readonly:"",autosize:"","mt-5":""},null,8,["value"]),e(w,{justify:"center","mt-5":""},{default:s(()=>[e(h,{autofocus:"",onClick:f(b)},{default:s(()=>[A(" Copy ")]),_:1},8,["onClick"])]),_:1})]),_:1})}}});export{J as default};
