import{d as _,c as m,b as e,e as a,N as h,l as F,o as f,p as v,q as B,bv as C,bw as w,m as c,_ as x}from"./index.50db0fa9.js";import{S as D,a as r}from"./StepList.b02d6cdf.js";const n=u=>(v("data-v-a1ea0dd9"),u=u(),B(),u),S={class:"finish-page"},E={class:"h-100 row flex-column flex-nowrap"},b={class:"col-auto"},y={class:"col pt-3 overflow-hidden"},g={class:"h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"},A={class:"col-auto"},T={class:"col overflow-auto position-relative"},V=n(()=>e("img",{class:"plant",src:C},null,-1)),N=n(()=>e("img",{class:"ufo",src:w},null,-1)),I={class:"content-block"},L=n(()=>e("div",{class:"p-md-5"},[c(" \u606D\u559C\u901A\u904E Scrum \u65B0\u624B\u6751\u4EFB\u52D9\uFF01"),e("br"),c(" \u6B63\u5F0F\u52A0\u5165\u654F\u6377\u5B87\u5B99\uFF0C\u9EDE\u64CA\u4E0A\u65B9\u5C0F\u661F\u7403\uFF0C"),e("br"),c(" \u81EA\u7531\u63A2\u7D22 Scrum \u7CBE\u795E\u5427\uFF01 ")],-1)),$={class:"col-12 col-md-auto hidden-nav"},k=_({__name:"FinishView",setup(u){const d=F(),i=(o,t)=>{const s=document.createElement("textarea");s.value=o,s.style.top="0",s.style.left="0",s.style.position="fixed",document.body.appendChild(s),s.focus(),s.select();try{document.execCommand("copy")}catch{}finally{document.body.removeChild(s)}t&&t()},l=(o,t)=>{if(!navigator.clipboard){i(o,t);return}navigator.clipboard.writeText(o).then(()=>{t&&t()},()=>{i(o,t)})},p=()=>{const o=window.location.href.replace(/#[\w\W]+$/,"");navigator.share?navigator.share({title:"Scrum Planet",text:"\u4E00\u8D77\u4F86\u5B78\u7FD2 Scrum",url:o}):l(`Scrum Planet~ \u4E00\u8D77\u4F86\u5B78\u7FD2 Scrum ${o}`,()=>{d.dispatch("show",{title:"\u8907\u88FD\u6210\u529F",message:"\u5DF2\u8907\u88FD\u9023\u7D50\uFF0C\u8D95\u5FEB\u8CBC\u7D66\u4F60\u7684\u670B\u53CB\u5427\uFF01",btnLabel:"\u78BA\u8A8D",icon:"success"})})};return(o,t)=>(f(),m("main",S,[e("div",E,[e("div",b,[a(D,{"current-step":8})]),e("div",y,[e("div",g,[e("div",A,[a(r,{"current-step":8})]),e("div",T,[V,N,e("div",I,[L,a(h,{"btn-label":"\u5206\u4EAB\u9023\u7D50",onClick:t[0]||(t[0]=s=>p())})])])]),e("div",$,[a(r,{"current-step":1})])])])]))}});const j=x(k,[["__scopeId","data-v-a1ea0dd9"]]);export{j as default};