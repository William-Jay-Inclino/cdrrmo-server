import{O as m,R as u,P as o,i as l,j as c,V as d}from"./index-6bbaaed9.js";import{a as T}from"./user.store-b2a1a52e.js";class i{getAllTeams(){return console.log("getAllTeams()"),m.teams}async getTeamById(s){console.log("getTeamById()",s);const n=T.getAllUsers();{const e=m.teams.find(t=>t.team_id===s);if(e){const t=n.find(r=>r.user_id===e.team_leader_id);return t&&(e.team_leader=t),e.statusText=u[e.status],e}}return null}}const S=new i,g=o("team",()=>{const a=l([]),s=e=>{a.value=e};return{teams:c(()=>a.value.map(e=>{const t=m.users.find(r=>r.user_id===e.team_leader_id);return t&&(e.team_leader=t,e.statusObj=d[e.status]),e.statusText=u[e.status],e})),setTeams:s}});export{g as a,S as t};