import{L as i,aG as u,M as r,aH as c,e as p,aI as m}from"./index-daf2c61e.js";function g(){const e=i(u,null);return e===null&&r("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}function d({source:e,text:o="Copied to the clipboard"}={}){const{copy:s}=c(e?{source:p(()=>String(m(e)))}:{}),t=g();return{async copy(a,{notificationMessage:n}={}){e?await s():await s(a),t.success(n??o)}}}export{d as u};
