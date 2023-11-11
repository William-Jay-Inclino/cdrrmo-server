import{d as w,h as G,i as D,j as $,k as L,l as j,c as a,a as t,F as v,e as b,o as i,n as B,t as c,_ as E,m as p,v as T,u as l,p as U,q as k,D as N,U as O,s as M,b as x,C as z,x as R,y as q,z as H,A as J,B as F,E as K,G as Q,f as A}from"./index-6bbaaed9.js";import{B as W}from"./Breadcrumbs-0fb6bb8e.js";import{u as V}from"./user.store-b2a1a52e.js";import{t as P}from"./training_skill.store-713a7512.js";import"./na.store-4a612637.js";import"./bart.service-94933cd4.js";import"./cso.store-fb12af7b.js";import"./po.store-ced8ebcb.js";const X={class:"container"},Y={class:"accordion",id:"accordionExample"},Z={class:"steps"},tt=["value"],et={class:"step-item"},st=["onClick","data-bs-target","aria-expanded","aria-controls"],ot={class:"step-title"},g="step-button text-center ",nt=w({__name:"FormStepper",props:{currentStep:{}},emits:["update-step"],setup(C,{emit:s}){G(_=>({"7ae3c07e":r.value,"680f8c70":f.value}));const u=s,f=D("#007bff"),r=D("#b1b1b1"),h=C,d=D(0),n=D([{id:1,text:"Info",icon:"fa-info",dataBsTarget:"collapseOne",stepClass:g},{id:2,text:"Skills",icon:"fa-medal",dataBsTarget:"collapseTwo",stepClass:g},{id:3,text:"Finish",icon:"fa-check-circle",dataBsTarget:"collapseThree",stepClass:g}]),o=$(()=>h.currentStep);L(o,_=>{console.log("val",_),e(_)}),j(()=>{e(o.value)});const e=_=>{console.log("onClickStepBtn()",_);const y=n.value.find(m=>m.id===_);if(!y){console.error("Undefined step",y);return}y.stepClass=g+"collapsed",y.id===1&&(n.value[1].stepClass=g,n.value[2].stepClass=g,d.value=0),y.id===2&&(n.value[0].stepClass=g+"done",n.value[2].stepClass=g,d.value=50),y.id===3&&(n.value[0].stepClass=g+"done",n.value[1].stepClass=g+"done",d.value=100),u("update-step",y.id)};return(_,y)=>(i(),a("div",X,[t("div",Y,[t("div",Z,[t("progress",{id:"progress",value:d.value,max:"100"},null,8,tt),(i(!0),a(v,null,b(n.value,m=>(i(),a("div",et,[t("button",{onClick:S=>e(m.id),class:B(m.stepClass),type:"button","data-bs-toggle":"collapse","data-bs-target":`#${m.dataBsTarget}`,"aria-expanded":m.id===o.value,"aria-controls":m.dataBsTarget},[t("i",{class:B(["fas fa-fw",{[m.icon]:!0}])},null,2)],10,st),t("div",ot,c(m.text),1)]))),256))])])]))}});const lt=E(nt,[["__scopeId","data-v-284226a2"]]),at={class:"form-group"},it={class:"row"},rt={class:"col"},ct=t("label",null,"First Name",-1),dt={class:"col"},ut=t("label",null,"Last Name",-1),_t={class:"form-group"},pt=t("label",null,"Gender",-1),mt={class:"row ml-5 mr-5"},ft={class:"col ml-5 mr-5"},ht={class:"d-grid gap-2"},vt=["onClick"],bt={class:"form-group"},yt=t("label",null,"Address",-1),gt={class:"form-group"},$t=t("label",null,"Birth Date",-1),Ct={class:"form-group"},St=t("label",null,"Contact Number",-1),Dt={class:"input-group mb-3"},kt=t("span",{class:"input-group-text",id:"basic-addon1"},"+639",-1),xt={class:"form-group"},wt=t("label",null,"Blood Type",-1),Tt=["value"],Ut={class:"form-group"},Ft=t("label",null,"Status",-1),Bt={class:"row mr-5 ml-5"},Nt={class:"col mr-5 ml-5"},At={class:"d-grid gap-2"},Vt=["onClick"],It={class:"form-group"},Pt=t("label",null,"User Level",-1),Gt=["value"],Lt={class:"form-group"},jt=t("label",null,"Personnel Type",-1),Et=["value"],Ot={class:"form-group"},Mt=t("label",null,"Personnel Subtype",-1),zt=["value"],Rt={class:"form-group"},qt=["value"],Ht=w({__name:"FormStep1",setup(C){const s=V(),u=$(()=>s.formData.distinctType!==N.National_Agency),f=$(()=>!(s.formData.distinctType===N.LGU||s.formData.distinctType===N.ACDV&&s.formData.type===O.ACDV_INDIVIDUAL)),r=$(()=>s.formData.distinctType===N.National_Agency?"Sub Type":"Sub-subtype"),h=n=>{s.formData.gender=n},d=n=>{console.log("onClickStatus()",n),s.formData.status=n};return(n,o)=>(i(),a("div",null,[t("div",at,[t("div",it,[t("div",rt,[ct,p(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>l(s).formData.first_name=e),type:"text",class:"form-control"},null,512),[[T,l(s).formData.first_name]])]),t("div",dt,[ut,p(t("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>l(s).formData.last_name=e),type:"text",class:"form-control"},null,512),[[T,l(s).formData.last_name]])])])]),t("div",_t,[pt,t("div",mt,[(i(!0),a(v,null,b(l(s).genders,e=>(i(),a("div",ft,[t("div",ht,[t("button",{onClick:_=>h(e.id),class:B([{"btn-primary":e.id===l(s).formData.gender,"btn-outline-primary":e.id!==l(s).formData.gender},"btn"]),type:"button"},c(e.text),11,vt)])]))),256))])]),t("div",bt,[yt,p(t("textarea",{"onUpdate:modelValue":o[2]||(o[2]=e=>l(s).formData.address=e),class:"form-control",rows:"3"},null,512),[[T,l(s).formData.address]])]),t("div",gt,[$t,p(t("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>l(s).formData.birth_date=e),type:"date",class:"form-control"},null,512),[[T,l(s).formData.birth_date]])]),t("div",Ct,[St,t("div",Dt,[kt,p(t("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>l(s).formData.contact_no=e),type:"text",class:"form-control",placeholder:"###-###-###","aria-describedby":"basic-addon1"},null,512),[[T,l(s).formData.contact_no]])])]),t("div",xt,[wt,p(t("select",{class:"form-control","onUpdate:modelValue":o[5]||(o[5]=e=>l(s).formData.blood_type=e)},[(i(!0),a(v,null,b(l(s).bloodTypes,e=>(i(),a("option",{value:e,key:e},c(e),9,Tt))),128))],512),[[U,l(s).formData.blood_type]])]),t("div",Ut,[Ft,t("div",Bt,[(i(!0),a(v,null,b(l(s).status,e=>(i(),a("div",Nt,[t("div",At,[t("button",{onClick:_=>d(e.id),class:B([{"btn-primary":e.id===l(s).formData.status,"btn-outline-primary":e.id!==l(s).formData.status},"btn"]),type:"button"},c(e.text),11,Vt)])]))),256))])]),t("div",It,[Pt,p(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=e=>l(s).formData.user_level=e)},[(i(!0),a(v,null,b(l(s).userLevels,e=>(i(),a("option",{value:e.id,key:e.id},c(e.text),9,Gt))),128))],512),[[U,l(s).formData.user_level]])]),t("div",Lt,[jt,p(t("select",{class:"form-control","onUpdate:modelValue":o[7]||(o[7]=e=>l(s).formData.distinctType=e)},[(i(!0),a(v,null,b(l(s).userTypes,e=>(i(),a("option",{value:e.id,key:e.id},c(e.text),9,Et))),128))],512),[[U,l(s).formData.distinctType]])]),p(t("div",Ot,[Mt,p(t("select",{class:"form-control","onUpdate:modelValue":o[8]||(o[8]=e=>l(s).formData.type=e)},[(i(!0),a(v,null,b(l(s).userSubTypes,e=>(i(),a("option",{value:e.id,key:e.id},c(e.text),9,zt))),128))],512),[[U,l(s).formData.type]])],512),[[k,u.value]]),p(t("div",Rt,[t("label",null," Personnel "+c(r.value),1),p(t("select",{class:"form-control","onUpdate:modelValue":o[9]||(o[9]=e=>l(s).formData.sub_type_id=e)},[(i(!0),a(v,null,b(l(s).userSubSubTypes,e=>(i(),a("option",{value:e.id,key:e.id},c(e.name),9,qt))),128))],512),[[U,l(s).formData.sub_type_id]])],512),[[k,f.value]])]))}}),Jt={class:"row"},Kt={class:"col"},Qt={class:"input-group"},Wt={class:"custom-file"},Xt=["value"],Yt=t("label",{class:"custom-file-label",for:"inputGroupFile04"},"Choose file ",-1),Zt={class:"input-group-append"},te=["onClick"],ee=t("i",{class:"fas fa-fw fa-trash"},null,-1),se=[ee],oe=t("i",{class:"fas fa-fw fa-plus text-primary"},null,-1),ne=[oe],le=w({__name:"CertificateManager",props:{id:{},certificates:{},show:{type:Boolean}},emits:["add-cert","del-cert"],setup(C,{emit:s}){const u=s,f=C,r=()=>{console.log("onClickAddCert()"),u("add-cert",{id:f.id,certificate:{id:M.string.uuid(),src:""}})},h=d=>{console.log("onClickDelCert()"),u("del-cert",{id:f.id,certificateId:d})};return(d,n)=>p((i(),a("div",null,[(i(!0),a(v,null,b(d.certificates,o=>(i(),a("div",Jt,[t("div",Kt,[t("div",Qt,[t("div",Wt,[t("input",{value:o.src,type:"file",class:"custom-file-input",id:"inputGroupFile04"},null,8,Xt),Yt]),t("div",Zt,[t("button",{onClick:e=>h(o.id),class:"btn btn-outline-danger",type:"button"},se,8,te)])])])]))),256)),t("div",{class:"row"},[t("div",{class:"col"},[t("button",{onClick:r,class:"btn btn-light btn-sm"},ne)])])],512)),[[k,d.show]])}}),ae={class:"table-responsive",style:{"overflow-x":"hidden"}},ie={class:"table"},re=t("thead",null,[t("tr",null,[t("th",{width:"10%"},"Select"),t("th",null,"Skill"),t("th",{class:"text-center"},"Certificates")])],-1),ce={class:"align-middle"},de=["onClick"],ue=t("i",{class:"fas fa-fw fa-check"},null,-1),_e=[ue],pe={class:"align-middle"},me={class:"text-center"},fe=w({__name:"FormStep2",setup(C){const s=D([]),u=V();f();function f(){const n=P.getAllTrainingSkills(),o=[];for(let e of n)o.push({training_id:e.training_id,description:e.description,selected:!1,certificates:[]});s.value=o}const r=n=>{if(console.log("onClickSelectSkill()",n),u.formData.personnelSkills||(u.formData.personnelSkills=[]),n.selected)n.selected=!1,u.removeSkillInFormData(n.training_id);else{n.selected=!0;const o=n.certificates.map(e=>e.src);u.addSkillInFormData({training_id:n.training_id,personnel_id:u.formData.user_id,certificates:o})}},h=n=>{console.log("addCertificate()",n);const o=s.value.find(e=>e.training_id===n.id);o&&(o.certificates.push(n.certificate),u.addCertificateInSkill(o.training_id,n.certificate.src))},d=n=>{console.log("deleteCertificate()",n);const o=s.value.find(_=>_.training_id===n.id);if(!o){console.error("skill is undefined");return}const e=o.certificates.findIndex(_=>_.id===n.certificateId);if(e===-1){console.error("Certificate not found in skill");return}u.delCertificateInSkill(o.training_id,o.certificates[e].src),o.certificates.splice(e,1)};return(n,o)=>(i(),a("div",ae,[t("table",ie,[re,t("tbody",null,[(i(!0),a(v,null,b(s.value,e=>(i(),a("tr",null,[t("td",ce,[t("button",{onClick:_=>r(e),class:B(["btn btn-sm",{"btn-primary":e.selected,"btn-outline-primary":!e.selected}])},_e,10,de)]),t("td",pe,c(e.description),1),t("td",me,[x(le,{id:e.training_id,certificates:e.certificates,show:e.selected,onAddCert:h,onDelCert:d},null,8,["id","certificates","show"])])]))),256))])])]))}}),he={class:"table-responsive"},ve={class:"table"},be=t("th",null,"First Name",-1),ye=t("td",null,null,-1),ge=t("th",null,"Last Name",-1),$e=t("th",null,"Gender",-1),Ce=t("th",null,"Address",-1),Se=t("th",null,"Birth Date",-1),De=t("th",null,"Contact Number",-1),ke=t("th",null,"Blood Type",-1),xe=t("th",null,"Status",-1),we=t("th",null,"User Level",-1),Te=t("th",null,"Personnel Type",-1),Ue=t("th",null,"Personnel Subtype",-1),Fe={key:0},Be=t("th",null,"Personnel Sub-subType",-1),Ne={key:1},Ae=["rowspan"],Ve=w({__name:"FormStep3",setup(C){const s=V(),u=P.getAllTrainingSkills(),f=$(()=>{var n;const d=(n=s.userSubSubTypes)==null?void 0:n.find(o=>o.id===s.formData.sub_type_id);return d?d.name:null}),r=$(()=>{var n;const d=[];return(n=s.formData.personnelSkills)==null||n.forEach(o=>{const e=u.find(_=>_.training_id===o.training_id);e&&d.push({id:o.training_id,label:e.description})}),d}),h=$(()=>{const n=new Date(s.formData.birth_date).toDateString().split(" ");return n[2]+" "+n[1]+" "+n[3]});return(d,n)=>(i(),a("div",he,[t("table",ve,[t("tbody",null,[t("tr",null,[be,t("td",null,c(l(s).formData.first_name),1),ye]),t("tr",null,[ge,t("td",null,c(l(s).formData.last_name),1)]),t("tr",null,[$e,t("td",null,c(l(z)[l(s).formData.gender].text),1)]),t("tr",null,[Ce,t("td",null,c(l(s).formData.address),1)]),t("tr",null,[Se,t("td",null,c(h.value),1)]),t("tr",null,[De,t("td",null," +639"+c(l(s).formData.contact_no),1)]),t("tr",null,[ke,t("td",null,c(l(s).formData.blood_type),1)]),t("tr",null,[xe,t("td",null,c(l(R)[l(s).formData.status].text),1)]),t("tr",null,[we,t("td",null,c(l(q)[l(s).formData.user_level].text),1)]),t("tr",null,[Te,t("td",null,c(l(H)[l(s).formData.distinctType].text),1)]),t("tr",null,[Ue,t("td",null,c(l(J)[l(s).formData.type].text),1)]),f.value?(i(),a("tr",Fe,[Be,t("td",null,c(f.value),1)])):F("",!0),l(s).formData.personnelSkills?(i(),a("tr",Ne,[t("th",{class:"align-middle",rowspan:l(s).formData.personnelSkills.length+1},"Personnel Skills",8,Ae)])):F("",!0),(i(!0),a(v,null,b(r.value,o=>(i(),a("tr",null,[t("td",null,c(o.label),1)]))),256))])])]))}}),Ie={class:"container-fluid mb-5"},Pe=t("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[t("h1",{class:"h3 mb-0 text-gray-800"},"Personnel Module")],-1),Ge={class:"row"},Le={class:"col"},je={class:"row justify-content-center"},Ee={class:"col-6"},Oe={class:"row justify-content-center"},Me={class:"col-5"},ze={class:"row"},Re={class:"col"},qe={class:"card shadow mb-4"},He={class:"card-header py-3 d-flex flex-row align-items-center justify-content-between text-bg-primary"},Je={class:"m-0 font-weight-bold"},Ke={class:"card-body"},Qe={class:"row"},We={class:"col"},Xe={class:"justify-content-between"},Ye={key:2,class:"float-end"},is=w({__name:"UserForm.view",setup(C){const s=K(),u=Q(),f=V(),r=D(1),h=D([{text:"Personnel List",route:A.users,isActive:!1},{text:"Personnel Form",route:A.userForm,isActive:!0}]),d=$(()=>{if(r.value===1)return"Step 1 - Fill up Personnel Info";if(r.value===2)return"Step 2 - Add Skills of Personnel";if(r.value===3)return"Step 3 - Final Confirmation: Ready to Submit?"}),n=()=>{u.push({name:A.users})},o=()=>{r.value-=1},e=()=>{r.value+=1},_=async m=>{console.log("onSubmitForm()");const S={...f.formData};await f.saveUser(S)&&(m===1?r.value=1:m===2&&u.push({name:A.users}),s.success("Personnel successfully added!"))},y=m=>{console.log("onUpdateStep()",m),r.value=m};return(m,S)=>(i(),a("div",Ie,[Pe,t("div",Ge,[t("div",Le,[x(W,{items:h.value},null,8,["items"])])]),t("div",je,[t("div",Ee,[x(lt,{onUpdateStep:y,"current-step":r.value},null,8,["current-step"])])]),t("div",Oe,[t("div",Me,[t("div",ze,[t("div",Re,[t("div",qe,[t("div",He,[t("h6",Je,c(d.value),1)]),t("div",Ke,[p(x(Ht,null,null,512),[[k,r.value===1]]),p(x(fe,null,null,512),[[k,r.value===2]]),p(x(Ve,null,null,512),[[k,r.value===3]])])])])]),t("div",Qe,[t("div",We,[t("div",Xe,[p(t("button",{onClick:n,class:"btn btn-dark"},"Cancel",512),[[k,r.value===1]]),r.value>1?(i(),a("button",{key:0,onClick:o,class:"btn btn-dark"},"Back")):F("",!0),r.value<3?(i(),a("button",{key:1,onClick:e,class:"btn btn-primary float-end"},"Next")):F("",!0),r.value===3?(i(),a("div",Ye,[t("button",{onClick:S[0]||(S[0]=I=>_(1)),class:"btn btn-success"},"Submit and Add Again"),t("button",{onClick:S[1]||(S[1]=I=>_(2)),class:"btn btn-primary ml-2"},"Submit and Finish")])):F("",!0)])])])])])]))}});export{is as default};
