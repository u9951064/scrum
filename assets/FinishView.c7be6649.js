import{d}from"./vuedraggable.umd.92d03f82.js";import{d as p,j as m,c as g,b as e,e as s,w as _,u,aK as h,o as v,t as a}from"./index.7c1b811e.js";const w={class:"row"},f={class:"col-3"},y=e("h3",null,"Draggable 1",-1),C={class:"list-group-item"},D={class:"col-3"},J=e("h3",null,"Draggable 2",-1),b={class:"list-group-item"},k=p({__name:"FinishView",setup(x){const l=m([{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}]),n=m([{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}]),i=c=>{window.console.log(c)};return(c,B)=>{const r=h("rawDisplayer");return v(),g("div",w,[e("div",f,[y,s(u(d),{class:"list-group",list:l.value,group:"people",onChange:i,itemKey:"name"},{item:_(({element:o,index:t})=>[e("div",C,a(o.name)+" "+a(t),1)]),_:1},8,["list"])]),e("div",D,[J,s(u(d),{class:"list-group",list:n.value,group:"people",onChange:i,itemKey:"name"},{item:_(({element:o,index:t})=>[e("div",b,a(o.name)+" "+a(t),1)]),_:1},8,["list"])]),s(r,{class:"col-3",value:l.value,title:"List 1"},null,8,["value"]),s(r,{class:"col-3",value:n.value,title:"List 2"},null,8,["value"])])}}});export{k as default};