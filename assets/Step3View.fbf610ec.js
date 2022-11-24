import{C as i,R as o}from"./ChatBox.9c6c24fc.js";import{d as f,r as t,c as D,b as n,e as a,n as h,w as l,u as r,k as F,j as E,o as s,T as g,N as A,f as _,_ as x}from"./index.7e720057.js";import{S as m,a as w}from"./StepList.1132323a.js";const S={class:"step3-page"},y={class:"h-100 row flex-column flex-nowrap"},k={class:"col-auto"},z={class:"col pt-3 overflow-hidden"},b={class:"h-100 row m-auto flex-column flex-md-row flex-nowrap content-region"},N={class:"col-auto"},V={class:"row flex-column flex-nowrap g-0"},P={class:"col main-operation-block p-md-5"},$={class:"row flex-column flex-md-row flex-nowrap flex-md-wrap"},M={class:"col-12"},T={class:"col-auto text-center"},G=f({__name:"Step3View",setup(I){const d=()=>{_.push({name:"step4"})},u=t(0),B=t([{tagBegin:'<div class="fz-14px">',inner:[{inner:"\u7522\u54C1\u5F85\u8FA6\u6E05\u55AE\u597D\u4E86\u4E4B\u5F8C\uFF0C\u6211\u5011\u4F86\u53EC\u96C6 Scrum Master \u548C\u958B\u767C\u5718\u968A\u5171\u540C\u53EC\u958B"},{tagBegin:' <span class="highlight-green">',inner:"\u77ED\u885D\u898F\u5283\u6703\u8B70 (Sprint Planning)",tagEnd:"</span>"},{inner:"\u3002"}],tagEnd:"</div>"},{tagBegin:'<div class="fz-14px pt-3">',inner:[{inner:"\u77ED\u885D\u5373\u662F\u4E00\u500B\u8FED\u4EE3\uFF0C\u5177\u6709\u56FA\u5B9A\u6642\u9593\u9650\u5236\uFF0C\u6211\u5011\u6703\u5728\u9019\u500B\u6703\u8B70\u4E2D\uFF0C\u6C7A\u5B9A\u8981\u5B8C\u6210\u54EA\u4E9B\u5DE5\u4F5C\u4E8B\u9805\u4F86\u9054\u5230\u5546\u696D\u9700\u6C42\uFF0C\u5217\u51FA"},{tagBegin:'<span class="highlight-green">',inner:"\u77ED\u885D\u5F85\u8FA6\u6E05\u55AE",tagEnd:"</span>"},{inner:"\uFF0C\u4E26\u7531\u958B\u767C\u5718\u968A\u5728\u63A5\u4E0B\u4F86\u7684\u7522\u54C1\u958B\u767C\u9031\u671F\u88E1\u57F7\u884C\u3002"}],tagEnd:"</div>"}]),C=t([{tagBegin:'<div class="fz-14px">',inner:[{inner:"\u55E8\u55E8\uFF0C\u4F60\u662F\u65B0\u4F86\u7684\u524D\u7AEF\u5427\uFF01 \u6211\u662F\u9019\u6B21\u7684"},{tagBegin:'<span class="highlight-blue">',inner:"Scrum Master",tagEnd:"</span> "},{inner:"\u77F3\u5149\u795E\uFF0C\u6211\u7684\u5DE5\u4F5C\u4E3B\u8981\u662F\u4FC3\u6210\u958B\u767C\u5718\u968A\u6210\u54E1\u5354\u4F5C\u3001\u5F15\u5C0E\u5718\u968A\u9032\u884C\u81EA\u7701\u6703\u8B70\u3001\u63D0\u5347\u5718\u968A\u6210\u54E1\u5C0D Scrum \u77AD\u89E3\u3002 \u9019\u5169\u4F4D\u662F \u958B\u65B0\u679C \u548C \u767C\u5927\u624D\uFF0C\u662F\u6211\u5011\u958B\u767C\u5718\u968A\u7684\u6210\u54E1\u5537\uFF5E"}],tagEnd:"</div>"},{tagBegin:'<div class="fz-14px pt-3">',inner:[{inner:"\u76EE\u524D\u6211\u5011\u5718\u968A\u4E00\u6B21"},{tagBegin:'<span class="highlight-blue">',inner:"Sprint \u9031\u671F\u662F\u5169\u9031",tagEnd:"</span> "},{inner:"\u7684\u6642\u9593\uFF0C\u4F9D\u7167\u6211\u7684\u89C0\u5BDF\uFF0C\u76EE\u524D\u5718\u968A\u53EF\u4EE5\u8CA0\u64D4\u7684\u9EDE\u6578 "},{tagBegin:'<span class="highlight-blue">',inner:"(Sprint Point) \u5927\u7D04\u662F 20 \u9EDE",tagEnd:"</span> "},{inner:"\u5DE6\u53F3\u3002"}],tagEnd:"</div>"}]),p=t([{tagBegin:'<div class="fz-14px">',inner:"\u6B38\u65B0\u4F86\u7684\uFF0C\u4F60\u61C9\u8A72\u4E0D\u77E5\u9053\u9EDE\u6578\u662F\u4EC0\u9EBC\u610F\u601D\u5427\uFF1F\u54C8\u54C8",tagEnd:"</div>"},{tagBegin:'<div class="fz-14px">',inner:"\u6211\u4F86\u8DDF\u4F60\u4ECB\u7D39\u4E00\u4E0B\u5427\uFF5E",tagEnd:"</div>"},{tagBegin:'<div class="fz-14px">',inner:[{tagBegin:'<span class="highlight-yellow">',inner:"Sprint Point",tagEnd:"</span> "},{inner:"\uFF0C\u76EE\u7684\u662F\u70BA\u4E86\u8861\u91CF\u901F\u5EA6\uFF0C\u662F\u7528\u5927\u6982\u82B1\u8CBB\u7684\u6642\u9593"},{tagBegin:'<span class="highlight-yellow">',inner:"\u9810\u4F30\u51FA\u7684\u76F8\u5C0D\u9EDE\u6578",tagEnd:"</span> "},{inner:"\u3002"}],tagEnd:"</div>"}]),v=t([{tagBegin:'<div class="fz-14px">',inner:[{inner:"\u6C92\u932F\uFF0C\u5982 \u958B\u65B0\u679C \u8AAA\u7684\uFF0C\u6211\u9019\u908A\u5DF2\u7D93\u628A\u525B\u525B\u8A0E\u8AD6\u597D\u7684\u9EDE\u6578"},{tagBegin:'<span class="highlight-red">',inner:"\u6A19\u4E0A\u53BB",tagEnd:"</span> "},{inner:"\u56C9\uFF5E"},{tagBegin:"<br />",inner:"\u4F60\u4F86\u7DF4\u7FD2\u628A\u4EFB\u52D9\u6392\u5230\u77ED\u885D\u5F85\u8FA6\u6E05\u55AE\u5427\uFF01"}],tagEnd:"</div>"},{tagBegin:'<div class="fz-14px pt-3">',inner:[{inner:"By the way, \u6211\u5011\u5E73\u5E38\u7BA1\u7406\u4EFB\u52D9\u662F\u4F7F\u7528"},{tagBegin:' <span class="highlight-red">',inner:"Jira",tagEnd:"</span> "},{tagBegin:" ",inner:"\u9019\u5957\u8EDF\u9AD4\uFF0C\u4F60\u6709\u6642\u9593\u8A18\u5F97\u5148\u53BB\u8A3B\u518A\u548C\u719F\u6089\u5537\u3002"}],tagEnd:"</div>"}]);return(R,e)=>(s(),D("main",S,[n("div",y,[n("div",k,[a(m,{"current-step":3})]),n("div",z,[n("div",b,[n("div",N,[a(w,{"current-step":3})]),n("div",{class:h(["col overflow-auto",{"bg-plant":u.value>=4}])},[n("div",V,[n("div",P,[n("article",$,[n("section",M,[a(i,{role:r(o).GouMinEr},{default:l(()=>[a(g,{"screen-configs":B.value,onEnded:e[0]||(e[0]=c=>u.value=u.value+1)},null,8,["screen-configs"])]),_:1},8,["role"]),u.value>=1?(s(),F(i,{key:0,role:r(o).ShiTouShen,flip:!0},{default:l(()=>[a(g,{"screen-configs":C.value,onEnded:e[1]||(e[1]=c=>u.value=u.value+1)},null,8,["screen-configs"])]),_:1},8,["role"])):E("",!0),u.value>=2?(s(),F(i,{key:1,role:r(o).KaiXinGou},{default:l(()=>[a(g,{"screen-configs":p.value,onEnded:e[2]||(e[2]=c=>u.value=u.value+1)},null,8,["screen-configs"])]),_:1},8,["role"])):E("",!0),u.value>=3?(s(),F(i,{key:2,role:r(o).FaDaCia,flip:!0,logo:!0},{default:l(()=>[a(g,{"screen-configs":v.value,onEnded:e[3]||(e[3]=c=>u.value=u.value+1)},null,8,["screen-configs"])]),_:1},8,["role"])):E("",!0)])])]),n("div",T,[u.value>=4?(s(),F(A,{key:0,"btn-label":"\u6211\u4F86\u6311\u6230",onClick:d})):E("",!0)])])],2)])])])]))}});const L=x(G,[["__scopeId","data-v-28e16cc6"]]);export{L as default};
