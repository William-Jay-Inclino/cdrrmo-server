import{d as x,E as S,G as F,i as V,c as r,a as t,b as m,N as I,m as l,p,u as s,F as f,e as h,v as n,f as v,I as N,J as U,o as c,t as b,_ as k}from"./index-6bbaaed9.js";import{B as C}from"./Breadcrumbs-0fb6bb8e.js";import{d as B}from"./dispatch.store-6e023fd8.js";import{_ as E,a as T}from"./TeamMembers.vue_vue_type_script_setup_true_lang-ee2a59eb.js";import"./emergency.store-98a086ee.js";import"./team.store-9700f9bd.js";import"./user.store-b2a1a52e.js";import"./na.store-4a612637.js";import"./bart.service-94933cd4.js";import"./cso.store-fb12af7b.js";import"./po.store-ced8ebcb.js";import"./training_skill.store-713a7512.js";const i=d=>(N("data-v-1d8c80fb"),d=d(),U(),d),j={class:"container-fluid"},M=i(()=>t("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[t("h1",{class:"h3 mb-0 text-gray-800"},"Dispatch Module")],-1)),z={class:"row"},L={class:"col"},$={class:"row justify-content-center",id:"dispatchForm"},A={class:"col-5"},R={class:"card shadow mb-4"},q=i(()=>t("div",{class:"card-header py-3 d-flex flex-row align-items-center justify-content-between text-bg-primary"},[t("h6",{class:"m-0 font-weight-bold"},"Dispatch a Team!")],-1)),G={class:"card-body"},H=["onSubmit"],J={class:"form-group"},K=i(()=>t("label",null,"Nature of Emergency",-1)),O=["value"],P={class:"form-group"},Q=i(()=>t("label",null,"Team",-1)),W=["value"],X={class:"form-group"},Y=i(()=>t("label",{for:"exampleInputEmail1"},"Caller Name",-1)),Z={class:"form-group"},tt=i(()=>t("label",{for:"exampleInputEmail1"},"Caller Number",-1)),ot={class:"form-group"},et=i(()=>t("label",null,"Location",-1)),st={class:"form-group"},at=i(()=>t("label",null,"Description",-1)),it={class:"form-group"},lt=i(()=>t("label",null,"Number of people involved",-1)),nt={class:"form-group"},rt=i(()=>t("label",null,"Hazard",-1)),ct=i(()=>t("button",{type:"submit",class:"btn btn-primary float-end"},"Submit",-1)),dt=i(()=>t("div",{class:"col-1"},[t("div",{class:"vertical-line"})],-1)),mt={class:"col-5"},_t={class:"row"},ut={class:"col"},pt={class:"row"},ft={class:"col"},ht=x({__name:"DispatchForm.view",setup(d){const D=S(),_=F(),o=B(),y=V([{text:"Dispatch List",route:"dispatch.route",isActive:!1},{text:"Dispatch a Team",route:"dispatchForm.route",isActive:!0}]),g=async()=>{console.log("onSubmitForm()");const u={...o.formData};await o.saveDispatch(u)&&(_.push({name:v.dispatch}),D.success("Dispatch Request Successfully Submitted!"))},w=()=>{o.resetFormData(),_.push({name:v.dispatch})};return(u,a)=>(c(),r("div",j,[M,t("div",z,[t("div",L,[m(C,{items:y.value},null,8,["items"])])]),t("div",$,[t("div",A,[t("div",R,[q,t("div",G,[t("form",{onSubmit:I(g,["prevent"])},[t("div",J,[K,l(t("select",{class:"form-control","onUpdate:modelValue":a[0]||(a[0]=e=>s(o).formData.emergency_id=e)},[(c(!0),r(f,null,h(s(o).emergencies,e=>(c(),r("option",{value:e.emergency_id,key:e.emergency_id},b(e.nature),9,O))),128))],512),[[p,s(o).formData.emergency_id]])]),t("div",P,[Q,l(t("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>s(o).formData.team_id=e),class:"form-control"},[(c(!0),r(f,null,h(s(o).teams,e=>(c(),r("option",{value:e.team_id,key:e.team_id},b(e.team_name),9,W))),128))],512),[[p,s(o).formData.team_id]])]),t("div",X,[Y,l(t("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>s(o).formData.caller_name=e),type:"text",class:"form-control"},null,512),[[n,s(o).formData.caller_name]])]),t("div",Z,[tt,l(t("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>s(o).formData.caller_number=e),type:"text",class:"form-control"},null,512),[[n,s(o).formData.caller_number]])]),t("div",ot,[et,l(t("textarea",{"onUpdate:modelValue":a[4]||(a[4]=e=>s(o).formData.location=e),class:"form-control",rows:"3"},null,512),[[n,s(o).formData.location]])]),t("div",st,[at,l(t("textarea",{"onUpdate:modelValue":a[5]||(a[5]=e=>s(o).formData.description=e),class:"form-control",rows:"3"},null,512),[[n,s(o).formData.description]])]),t("div",it,[lt,l(t("input",{"onUpdate:modelValue":a[6]||(a[6]=e=>s(o).formData.num_people_involved=e),type:"number",class:"form-control"},null,512),[[n,s(o).formData.num_people_involved]])]),t("div",nt,[rt,l(t("textarea",{"onUpdate:modelValue":a[7]||(a[7]=e=>s(o).formData.hazard=e),class:"form-control",rows:"3"},null,512),[[n,s(o).formData.hazard]])]),t("div",{class:"justify-content-between"},[t("button",{onClick:w,type:"button",class:"btn btn-dark"},"Cancel"),ct])],40,H)])])]),dt,t("div",mt,[t("div",_t,[t("div",ut,[m(E,{"team-id":s(o).formData.team_id},null,8,["team-id"])])]),t("div",pt,[t("div",ft,[m(T,{"team-id":s(o).formData.team_id},null,8,["team-id"])])])])])]))}});const Ut=k(ht,[["__scopeId","data-v-1d8c80fb"]]);export{Ut as default};