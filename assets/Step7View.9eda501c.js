import{d as n}from"./vuedraggable.umd.9f4c8382.js";import{S as g,a as h}from"./StepList.41f99692.js";import{d as v,j as i,c as f,b as e,e as s,w as c,u as r,aK as w,o as b,t as a}from"./index.136e14c6.js";const y={class:"row"},C={class:"d-block"},D={class:"col-3"},J=e("h3",null,"Draggable 1",-1),S={class:"list-group-item"},B={class:"col-3"},K=e("h3",null,"Draggable 1",-1),k={class:"list-group-item"},x={class:"col-3"},E=e("h3",null,"Draggable 2",-1),L={class:"list-group-item"},z=v({__name:"Step7View",setup(V){const d=i([{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}]),m=i([{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}]),u=i([{name:"aaa",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}]),l=_=>{window.console.log(_)};return(_,N)=>{const p=w("rawDisplayer");return b(),f("div",y,[e("nav",C,[s(g,{"current-step":7}),s(h,{"current-step":7})]),e("div",D,[J,s(r(n),{class:"list-group",list:d.value,group:"people",onChange:l,itemKey:"name"},{item:c(({element:t,index:o})=>[e("div",S,a(t.name)+" "+a(o),1)]),_:1},8,["list"])]),e("div",B,[K,s(r(n),{class:"list-group",list:u.value,group:"people1",onChange:l,itemKey:"name"},{item:c(({element:t,index:o})=>[e("div",k,a(t.name)+" "+a(o),1)]),_:1},8,["list"])]),e("div",x,[E,s(r(n),{class:"list-group",list:m.value,group:"people",onChange:l,itemKey:"name"},{item:c(({element:t,index:o})=>[e("div",L,a(t.name)+" "+a(o),1)]),_:1},8,["list"])]),s(p,{class:"col-3",value:d.value,title:"List 1"},null,8,["value"]),s(p,{class:"col-3",value:m.value,title:"List 2"},null,8,["value"])])}}});export{z as default};
