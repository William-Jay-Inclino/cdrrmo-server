import{a as r,e as a}from"./emergency.store-98a086ee.js";import{d as i,c as t,a as e,F as l,e as d,u as m,o as s,t as _}from"./index-6bbaaed9.js";const u={class:"container-fluid"},h=e("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[e("h1",{class:"h3 mb-0 text-gray-800"},"Emergencies")],-1),g={class:"row justify-content-center"},y={class:"col-8"},b={class:"card shadow mb-4"},f=e("div",{class:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[e("h6",{class:"m-0 font-weight-bold text-primary"},"List of Emergencies"),e("button",{class:"btn btn-primary",type:"submit"},"Add Emergency")],-1),p={class:"card-body"},v={class:"table-responsive"},E={class:"table table-hover"},w=e("thead",null,[e("tr",null,[e("th",null,"Nature of Emergency")])],-1),A=i({__name:"Emergency.view",setup(x){const n=r(),c=a.getAllEmergencies();return n.setEmergencies(c),(j,B)=>(s(),t("div",u,[h,e("div",g,[e("div",y,[e("div",b,[f,e("div",p,[e("div",v,[e("table",E,[w,e("tbody",null,[(s(!0),t(l,null,d(m(n).emergencies,o=>(s(),t("tr",null,[e("td",null,_(o.nature),1)]))),256))])])])])])])])]))}});export{A as default};